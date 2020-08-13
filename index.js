#!/usr/bin/env node

const version = require('./package.json').version
const gltfjsx = require('./gltfjsx')
const fs = require('fs')
const argv = require('yargs')
  .boolean('animation')
  .boolean('draco')
  .option('draco', { alias: 'd', describe: 'Adds draco-Loader', type: 'boolean' })
  .option('types', { alias: 't', describe: 'Adds Typescript definitions', type: 'boolean' })
  .option('animation', { alias: 'a', describe: 'Extracts animation clips', type: 'boolean' })
  .option('compress', { alias: 'c', default: true, describe: 'Removes names and empty groups', type: 'boolean' })
  .option('precision', { alias: 'p', default: 2, describe: 'Number of fractional digits', type: 'number' })
  .option('binary', { alias: 'b', describe: 'Draco path', default: '/draco-gltf/', type: 'string' })
  .usage('npx gltfjsx model.gltf [Model.js] [options]')
  .help().argv

const clc = require("cli-color");
// Lishan: CLC Mixins
const error = clc.red.bold;
const warn = clc.yellow;
const notice = clc.blue;
const success = clc.green;


if (argv._[0]) {

	/*
		SIMPLIFIED APPROACH INSTEAD OF THE COMMANDS BECOS MOST ARE FIXED 
	*/
	
	if(argv._[0] === 'RUN'){
		// MY APPROACH
		
		const GLB_PATH = `../plugin-mapbox-IPC/public/models/`;
		const DEST_PATH = `../plugin-mapbox-IPC/src/3d/Levels/`;
		const FILENAMES = [
				'Level2_3D_', 
				'Level1_3D_',
				'Ground_3D_',
				'LowerGround1_3D_',
				'LowerGround2_3D_'
			]
		
		// Loop Through Files
		FILENAMES.forEach(async (name) => {
			const glbFile = `${name}${argv._[1]}.glb`;
			const dstFile = `${name}${argv._[1]}.js`;
			
			console.log('');
			console.log(`Converting: ${glbFile} => ${dstFile}`);

			const srcFile = GLB_PATH + glbFile;
			const destFile = DEST_PATH + dstFile;

			try {
				if (fs.existsSync(srcFile)) {
					console.log(notice('File Found ...'));
					console.log(notice(`gltfjsx ${version}, converting ${srcFile} to ${destFile}`));

					const argvArray = [srcFile, destFile];

					await gltfjsx(srcFile, glbFile, destFile, argv)
						.then(() => console.log(success('\nConversion ['+glbFile+'] Done.')))
						.catch((err) => console.log(error('\nConversion Failed.\n\n'), err))

				} else {
					console.log(error('File ['+glbFile+'] NOT Found ...'));

				}
			} catch(err) {
				console.error(err)
			}

			console.log(success('DONE  ['+glbFile+'] !'));
			console.log('');

		});	


	} else {

		// GLTFX WAY

		let file = argv._[0]
		// let nameExt = file.match(/[-_\w]+[.][\w]+$/i)[0]
		let nameExt = file.replace(/^.*[\\\/]/, '');
		let name = nameExt.split('.').slice(0, -1).join('.')
		let output = argv._[1] || name.charAt(0).toUpperCase() + name.slice(1) + (argv.types ? '.tsx' : '.js')

		console.log(`gltfjsx ${version}, converting ${file} to ${output}`)
		console.log('');
		// console.log('file => ', file);
		// console.log('nameExt => ', nameExt);
		// console.log('output => ', output);
		// console.log('argv => ', argv);
		// console.log('');



		gltfjsx(file, nameExt, output, argv)
			.then(() => console.log('\ndone.'))
			.catch((err) => console.log('\nfailed.\n\n', err))

	}

 

} else {
 	console.log('missing the input filename. type: gltfjsx --help')
}
