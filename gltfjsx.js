const fs = require('fs')
require('jsdom-global')()
const THREE = (global.THREE = require('three'))
require('./bin/GLTFLoader')
const DracoLoader = require('./bin/dracoloader')
THREE.DRACOLoader.getDecoderModule = () => {}
const prettier = require('prettier')
const isVarName = require('is-var-name')
const clc = require("cli-color");

// Lishan: CLC Mixins
const error = clc.red.bold;
const warn = clc.yellow;
const notice = clc.blue;

const options = {}

function toArrayBuffer(buf) {
	var ab = new ArrayBuffer(buf.length)
	var view = new Uint8Array(ab)
	for (var i = 0; i < buf.length; ++i) view[i] = buf[i]
	return ab
}

const gltfLoader = new THREE.GLTFLoader()
	gltfLoader.setDRACOLoader(new DracoLoader())

function rNbr(number) {
	return parseFloat(number.toFixed(options.precision))
}

function rDeg(number) {
	const eps = 0.001
	const abs = Math.abs(Math.round(parseFloat(number) * 100000))
	for (let i = 1; i <= 10; i++) {
		if (abs === Math.round(parseFloat(Math.PI / i) * 100000))
		return `${number < 0 ? '-' : ''}Math.PI${i > 1 ? ' / ' + i : ''}`
	}
	for (let i = 1; i <= 10; i++) {
		if (abs === Math.round(parseFloat(Math.PI * i) * 100000))
		return `${number < 0 ? '-' : ''}Math.PI${i > 1 ? ' * ' + i : ''}`
	}
	return rNbr(number)
}

function sanitizeName(name) {
	return isVarName(name) ? `.${name}` : `['${name}']`
}

function printTypes(objects, animations) {
  let meshes = objects.filter((o) => o.isMesh && o.__removed === undefined)
  let bones = objects.filter((o) => o.isBone && !(o.parent && o.parent.isBone) && o.__removed === undefined)
  let materials = [...new Set(objects.filter((o) => o.material && o.material.name).map((o) => o.material))]

  let animationTypes = ''
  if (animations) {
    animationTypes = `\n
type ActionName = ${animations.map((clip, i) => `"${clip.name}"`).join(' | ')};
type GLTFActions = Record<ActionName, THREE.AnimationAction>;\n`
  }

  return `\ntype GLTFResult = GLTF & {
  nodes: {
    ${meshes.map(({ name, type }) => (isVarName(name) ? name : `['${name}']`) + ': THREE.' + type).join(',')}
    ${bones.map(({ name, type }) => (isVarName(name) ? name : `['${name}']`) + ': THREE.' + type).join(',')}
  }
  materials: {
    ${materials.map(({ name, type }) => (isVarName(name) ? name : `['${name}']`) + ': THREE.' + type).join(',')}
  }
}\n${animationTypes}`
}

function print(objects, gltf, obj, level = 0, parent) {
	// console.log(obj.name);
	let result = ''
	let space = new Array(level).fill(' ').join('')
	let children = ''
	let type = obj.type.charAt(0).toLowerCase() + obj.type.slice(1)
	let node = 'nodes' + sanitizeName(obj.name)

	console.log(new Array(level).fill().join(' ') + obj.name);

	// Turn object3d's into groups, it should be faster according to the threejs docs
	if (type === 'object3D') type = 'group'

	// Bail out on lights and cameras
	if (obj instanceof THREE.Light || obj instanceof THREE.Camera || obj instanceof THREE.Bone)
	return `${space}<primitive object={${node}} />${!parent ? '' : '\n'}`

	// Collect children
	if (obj.children) obj.children.forEach((child) => (children += print(objects, gltf, child, level + 2, obj)))
  

	// Lishan: If Name has Unit_
	if(obj.name.includes('Unit_')) type = 'Unit';
	
	// Lishan: If Name has Text_
	if(obj.name.includes('Text_')) type = 'Label';

	// Lishan: If Name has NoEntry
	if(obj.name.includes('NoEntry')) type = 'GrayArea';

	// Lishan: If Name has Logo_
	if(obj.name.includes('Logo_')) type = 'Logo';

	// Lishan: If Name has Icon_
	if(obj.name.includes('Icon_') && !(obj.name.includes('Staircase') || obj.name.includes('Entrance'))) type = 'Icons';


	// Form the object in JSX syntax
	result = `${space}<${type} `

	const oldResult = result

	// Write out materials
	// Lishan: Ignore if Units and Greay Area
	if(type != 'Unit' && type != 'GrayArea'){
		if (obj.material) {
			if (obj.material.name) result += `material={materials${sanitizeName(obj.material.name)}} `
			else result += `material={${node}.material} `
		}
	}

	if (obj.geometry) result += `geometry={${node}.geometry} `
	
	if (obj.skeleton) result += `skeleton={${node}.skeleton} `;
	
	// Lishan: Print Correct Unit Name
	if(type === 'Unit') result += `name="${obj.userData.name}" `;
	else 
		if (obj.name.length && !options.compress) result += `name="${obj.name}" `
	
	
	if (obj.visible === false) result += `visible={false} `
	
	if (obj.morphTargetDictionary) result += `morphTargetDictionary={${node}.morphTargetDictionary} `
	
	if (obj.morphTargetInfluences) result += `morphTargetInfluences={${node}.morphTargetInfluences} `
	
	if (obj.position instanceof THREE.Vector3 && obj.position.length())
		result += `position={[${rNbr(obj.position.x)}, ${rNbr(obj.position.y)}, ${rNbr(obj.position.z)},]} `
	
	if (obj.rotation instanceof THREE.Euler && obj.rotation.toVector3().length())
		result += `rotation={[${rDeg(obj.rotation.x)}, ${rDeg(obj.rotation.y)}, ${rDeg(obj.rotation.z)},]} `
	
	if (obj.scale instanceof THREE.Vector3 && obj.scale.x !== 1 && obj.scale.y !== 1 && obj.scale.z !== 1)
		result += `scale={[${rNbr(obj.scale.x)}, ${rNbr(obj.scale.y)}, ${rNbr(obj.scale.z)},]} `


	// Lishan: If Logo Check for ConnectTo
	if(obj.name.includes('Logo_')){
		if(obj.userData.connectTo){
			result +=`connectTo="${obj.userData.connectTo}"`
		} else {
			console.log(error('Logo do not have "connectTo" ' + obj.name));
			console.log(obj.userData);
			console.log('-----')
		}
	}


	// Dala hoorse, Lift, Escalaltor
	if(obj.name.includes('DallaHorse') || obj.name.includes('Lift') || obj.name.includes('Escalator') || obj.name.includes('Icon_')) result += `castShadow `;


	// Lishan: Include Floor and GrayArea
	if(obj.name.includes('Floor') || obj.name.includes('NoEntry')) result += `receiveShadow `;



	// Remove empty groups
	if (options.compress && (type === 'group' || type === 'scene') && (result === oldResult || obj.children.length === 0) ) {
		obj.__removed = true
		return children
	}

	// Close tag
	result += `${children.length ? '>' : '/>'}\n`

	// Add children and return
	if (children.length) result += children + `${space}</${type}>${!parent ? '' : '\n'}`;

	return result
}

function printClips(gltf) {
  return (
    '{\n' +
    gltf.animations
      .map((clip, i) => `      "${clip.name}": mixer.clipAction(animations[${i}], group.current)`)
      .join(',\n') +
    '    }'
  )
}

function printAnimations(gltf, options) {
  let rootNode = ''
  let useRefText = 'useRef()'

  if (options.types) {
    useRefText = 'useRef<GLTFActions>()'
    rootNode = 'null as any'
    gltf.scene.traverse((child) => {
      if (child.type === 'SkinnedMesh') {
        rootNode = `nodes${sanitizeName(child.name)}`
      }
    })
  }

  return gltf.animations && gltf.animations.length
    ? `\n\n  const actions = ${useRefText}
  const [mixer] = useState(() => new THREE.AnimationMixer(${rootNode}))
  useFrame((state, delta) => mixer.update(delta))
  useEffect(() => {
    actions.current = ${printClips(gltf)}
    return () => animations.forEach(clip => mixer.uncacheClip(clip))
  }, [])`
    : ''
}

function parseExtras(extras) {
	if (extras) {
		return (
			Object.keys(extras)
				.map((key) => `${key}: ${extras[key]}`)
				.join('\n') + '\n'
		)
	} else return ''
}

module.exports = function (file, nameExt, output, exportOptions) {
  return new Promise((resolve, reject) => {
    Object.keys(exportOptions).forEach((key) => (options[key] = exportOptions[key]))
    const stream = fs.createWriteStream(output)
    stream.once('open', (fd) => {
      if (!fs.existsSync(file)) {
        console.error(`\nERROR: The input file: "${file}" does not exist at this path.\n`)
      } else {
        const data = fs.readFileSync(file)
        const arrayBuffer = toArrayBuffer(data)
        gltfLoader.parse(
          arrayBuffer,
          '',
          (gltf) => {
            const objects = []
            gltf.scene.traverse((child) => objects.push(child))
            const scene = print(objects, gltf, gltf.scene, 0)
            const animations = options.animation ? gltf.animations : undefined

            const result = `/*
For PluginMapBox - Modified Version        
auto-generated by: https://github.com/react-spring/gltfjsx
${parseExtras(gltf.parser.json.asset && gltf.parser.json.asset.extras)}*/

// import * as THREE from 'three'
import React, { useRef${options.animation ? ', useState, useEffect' : ''} } from 'react'
import { useLoader${options.animation ? ', useFrame' : ''} } from 'react-three-fiber'
import { GLTFLoader${options.types ? ', GLTF' : ''} } from 'three/examples/jsm/loaders/GLTFLoader'${
              options.draco ? `\nimport { draco } from 'drei'` : ``
            }

import Logo from '../Logo';
import Unit from '../Unit';
import GrayArea from '../GrayArea';
import Label from '../Label';
import Icons from '../Icons';
import { useCountRenders } from '../../hooks/useCountRenders';

${options.types ? printTypes(objects, animations) : ''}
export default function Model(props${options.types ? ": JSX.IntrinsicElements['group']" : ''}) {
  const group = ${options.types ? 'useRef<THREE.Group>()' : 'useRef()'}
  const { nodes, materials${options.animation ? ', animations' : ''} } = useLoader${
              options.types ? '<GLTFResult>' : ''
            }(GLTFLoader, 'models/${nameExt}'${options.draco ? `, draco(${JSON.stringify(options.binary)})` : ``})${
              options.animation ? printAnimations(gltf, options) : ``
            }

  useCountRenders('Map Model:' + props.name);

  return (
    <group ref={group} {...props} dispose={null}>
${scene}
    </group>
  )
}`

            stream.write(
              prettier.format(result, {
                semi: false,
                printWidth: 120,
                singleQuote: true,
                jsxBracketSameLine: true,
                parser: options.types ? 'babel-ts' : 'babel',
              })
            )
            stream.end()
            resolve()
          },
          reject
        )
      }
    })
  })
}
