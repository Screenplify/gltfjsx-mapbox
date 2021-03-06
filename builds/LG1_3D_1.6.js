/*
For PluginMapBox - Modified Version        
auto-generated by: https://github.com/react-spring/gltfjsx
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useLoader } from 'react-three-fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import Logo from '../Logo'
import Unit from '../Unit'
import GrayArea from '../GrayArea'
import { useCountRenders } from '../../hooks/useCountRenders'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useLoader(GLTFLoader, 'models/LG1_3D_1.6.glb')

  useCountRenders('Map Model:' + props.name)

  return (
    <group ref={group} {...props} dispose={null}>
      <scene name="Scene">
        <group name="Floor" position={[-1.71, 0, -5.38]} receiveShadow>
          <mesh material={materials.Floor} geometry={nodes['Plane.001_0'].geometry} name="Plane.001_0" />
          <mesh material={materials['Floor.002']} geometry={nodes['Plane.001_1'].geometry} name="Plane.001_1" />
        </group>
        <mesh
          material={materials['Utilities.Normal']}
          geometry={nodes.Utilities_LG11.geometry}
          name="Utilities_LG11"
          position={[-33.43, 0, -4.68]}
        />
        <mesh
          material={materials['Services.Normal']}
          geometry={nodes.Service_LG11.geometry}
          name="Service_LG11"
          position={[-17.07, 0, -8.79]}
        />
        <mesh
          material={materials['Services.Normal']}
          geometry={nodes.Service_LG12.geometry}
          name="Service_LG12"
          position={[-6.23, 0, -1.51]}
        />
        <mesh
          material={materials['Services.Normal']}
          geometry={nodes.Service_LG13.geometry}
          name="Service_LG13"
          position={[-13, 0, -1.95]}
        />
        <mesh
          material={materials['Services.Normal']}
          geometry={nodes.Service_LG14.geometry}
          name="Service_LG14"
          position={[-13.16, 0, 11.31]}
        />
        <mesh
          material={materials['Lift.Normal']}
          geometry={nodes.Lift_LG11.geometry}
          name="Lift_LG11"
          position={[-10.53, 0, -3.69]}
        />
        <mesh
          material={materials['Lift.Normal']}
          geometry={nodes.Lift_LG12.geometry}
          name="Lift_LG12"
          position={[17.25, 0, -5.04]}
        />
        <mesh
          material={materials['Escalator.Normal']}
          geometry={nodes.Escalator_LG13.geometry}
          name="Escalator_LG13"
          position={[-21.28, 0, -2.55]}
        />
        <mesh
          material={materials['Others.Normal']}
          geometry={nodes.Parking_LG1Ladies1.geometry}
          name="Parking_LG1Ladies1"
          position={[-5.88, 0, 4.51]}
        />
        <mesh
          material={materials['Others.Normal']}
          geometry={nodes.Others_LG11.geometry}
          name="Others_LG11"
          position={[30.91, 0, -6.5]}
        />
        <mesh
          material={materials['Others.Normal']}
          geometry={nodes.Others_LG12.geometry}
          name="Others_LG12"
          position={[-13.72, 0, -8.36]}
        />
        <mesh
          material={materials['Escalator.Normal.002']}
          geometry={nodes.Escalator_LG12.geometry}
          name="Escalator_LG12"
          position={[15.11, -0.33, -6.47]}
          rotation={[-Math.PI, -0.12, 0]}
        />
        <mesh
          material={materials['Escalator.Normal.002']}
          geometry={nodes.Escalator_LG11.geometry}
          name="Escalator_LG11"
          position={[16.03, 0.47, -6.57]}
          rotation={[-Math.PI, -0.12, 0]}
        />
        <Unit geometry={nodes.Unit_LG119.geometry} name="Unit_LG1.19" position={[-22.56, 0, -4.53]} />
        <Unit geometry={nodes.Unit_LG117.geometry} name="Unit_LG1.17" position={[-13.42, 0, -3.71]} />
        <Unit geometry={nodes.Unit_LG121.geometry} name="Unit_LG1.21" position={[-10.91, 0, -7.33]} />
        <Unit geometry={nodes.Unit_LG123.geometry} name="Unit_LG1.23" position={[-8.11, 0, -7.32]} />
        <Unit geometry={nodes.Unit_LG123a.geometry} name="Unit_LG1.23a" position={[-6.25, 0, -7.33]} />
        <Unit geometry={nodes.Unit_LG125.geometry} name="Unit_LG1.25" position={[-4.37, 0, -7.33]} />
        <Unit geometry={nodes.Unit_LG126.geometry} name="Unit_LG1.26" position={[-2.49, 0, -7.33]} />
        <Unit geometry={nodes.Unit_LG127.geometry} name="Unit_LG1.27" position={[-0.62, 0, -7.33]} />
        <Unit geometry={nodes.Unit_LG128.geometry} name="Unit_LG1.28" position={[1.66, 0, -7.33]} />
        <Unit geometry={nodes.Unit_LG129.geometry} name="Unit_LG1.29" position={[3.86, 0, -7.31]} />
        <Unit geometry={nodes.Unit_LG130.geometry} name="Unit_LG1.30" position={[6.52, 0, -7.28]} />
        <Unit geometry={nodes.Unit_LG131.geometry} name="Unit_LG1.31" position={[8.15, 0, -7.57]} />
        <Unit geometry={nodes.Unit_LG132.geometry} name="Unit_LG1.32" position={[9.98, 0, -7.74]} />
        <Unit geometry={nodes.Unit_LG133.geometry} name="Unit_LG1.33" position={[11.84, 0, -7.96]} />
        <Unit geometry={nodes.Unit_LG133a.geometry} name="Unit_LG1.33a" position={[13.69, 0, -8.2]} />
        <Unit geometry={nodes.Unit_LG135.geometry} name="Unit_LG1.35" position={[15.17, 0, -8.38]} />
        <Unit geometry={nodes.Unit_LG135a.geometry} name="Unit_LG1.35a" position={[16.09, 0, -8.49]} />
        <Unit geometry={nodes.Unit_LG136.geometry} name="Unit_LG1.36" position={[16.94, 0, -8.6]} />
        <Unit geometry={nodes.Unit_LG136a.geometry} name="Unit_LG1.36a" position={[17.87, 0, -8.71]} />
        <Unit geometry={nodes.Unit_LG137.geometry} name="Unit_LG1.37" position={[19.26, 0, -8.89]} />
        <Unit geometry={nodes.Unit_LG138.geometry} name="Unit_LG1.38" position={[21.08, 0, -9.14]} />
        <Unit geometry={nodes.Unit_LG139.geometry} name="Unit_LG1.39" position={[23.27, 0, -8.79]} />
        <Unit geometry={nodes.Unit_LG140.geometry} name="Unit_LG1.40" position={[24.92, 0, -8.82]} />
        <Unit geometry={nodes.Unit_LG116.geometry} name="Unit_LG1.16" position={[-8.13, 0, -4.23]} />
        <Unit geometry={nodes.Unit_LG113a.geometry} name="Unit_LG1.13a" position={[-3.84, 0, -4.16]} />
        <Unit geometry={nodes.Unit_LG113.geometry} name="Unit_LG1.13" position={[-1.82, 0, -3.57]} />
        <Unit geometry={nodes.Unit_LG112.geometry} name="Unit_LG1.12" position={[2.15, 0, -3.8]} />
        <Unit geometry={nodes.Unit_LG111.geometry} name="Unit_LG1.11" position={[7.54, 0, -4.81]} />
        <Unit geometry={nodes.Unit_LG115.geometry} name="Unit_LG1.15" position={[-6.23, 0, -4.23]} />
        <Unit geometry={nodes.Unit_LG110.geometry} name="Unit_LG1.10" position={[9.93, 0, -4.11]} />
        <Unit geometry={nodes.Unit_LG109.geometry} name="Unit_LG1.09" position={[10.9, 0, -4.23]} />
        <Unit geometry={nodes.Unit_LG108.geometry} name="Unit_LG1.08" position={[13.35, 0, -4.55]} />
        <Unit geometry={nodes.Unit_LG107.geometry} name="Unit_LG1.07" position={[14.91, 0, -4.75]} />
        <Unit geometry={nodes.Unit_LG106.geometry} name="Unit_LG1.06" position={[20.05, 0, -5.38]} />
        <Unit geometry={nodes.Unit_LG105.geometry} name="Unit_LG1.05" position={[21.87, 0, -5.61]} />
        <Unit geometry={nodes.Unit_LG103a.geometry} name="Unit_LG1.03a" position={[22.96, 0, -5.75]} />
        <Unit geometry={nodes.Unit_LG103.geometry} name="Unit_LG1.03" position={[23.88, 0, -5.86]} />
        <Unit geometry={nodes.Unit_LG102.geometry} name="Unit_LG1.02" position={[25.25, 0, -6.04]} />
        <Unit geometry={nodes.Unit_LG101.geometry} name="Unit_LG1.01" position={[27.11, 0, -6.41]} />
        <mesh
          material={materials['Others.Normal.001']}
          geometry={nodes.Others_LG13.geometry}
          name="Others_LG13"
          position={[-10.98, 0, -0.87]}
        />
        <mesh
          material={materials['Others.Normal.002']}
          geometry={nodes.Others_LG14.geometry}
          name="Others_LG14"
          position={[11.94, 0, -3.91]}
          rotation={[0, 0.12, 0]}
        />
        <GrayArea
          geometry={nodes.NoEntry_LG11.geometry}
          name="NoEntry_LG11"
          position={[22.44, 0, -7.82]}
          receiveShadow
        />
        <Logo name="Logo_IKEA" position={[30.94, 0.15, -5.84]} connectTo="Unit_LG1.1">
          <mesh material={materials['IkeaBlue.Normal']} geometry={nodes['Curve.018_0'].geometry} name="Curve.018_0" />
          <mesh material={materials['IkeaYellow.Normal']} geometry={nodes['Curve.018_1'].geometry} name="Curve.018_1" />
        </Logo>
        <Logo name="Logo_BIG" position={[-21.83, 1, -4.53]} connectTo="Unit_LG1.19">
          <mesh material={materials['BIGBlue.Normal']} geometry={nodes['Curve.019_0'].geometry} name="Curve.019_0" />
          <mesh material={materials['BIGGrey.Normal']} geometry={nodes['Curve.019_1'].geometry} name="Curve.019_1" />
          <mesh material={materials['BIGWhite.Normal']} geometry={nodes['Curve.019_2'].geometry} name="Curve.019_2" />
        </Logo>
        <group name="Icon_ATM_LG1_1" position={[-4.09, 1, -2.56]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh material={materials['IconWhite.Normal']} geometry={nodes['Curve.032_0'].geometry} name="Curve.032_0" />
          <mesh material={materials['IconBlue.Normal']} geometry={nodes['Curve.032_1'].geometry} name="Curve.032_1" />
        </group>
        <group name="Icon_Toilet_LG1Male_1" position={[-8.09, 1, -0.94]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh material={materials['IconBlue.Normal']} geometry={nodes['Curve.033_0'].geometry} name="Curve.033_0" />
          <mesh material={materials['IconWhite.Normal']} geometry={nodes['Curve.033_1'].geometry} name="Curve.033_1" />
        </group>
        <group name="Icon_Toilet_LG1Disabled_1" position={[-4.44, 1, -0.94]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh material={materials['IconWhite.Normal']} geometry={nodes['Curve.045_0'].geometry} name="Curve.045_0" />
          <mesh material={materials['IconBlue.Normal']} geometry={nodes['Curve.045_1'].geometry} name="Curve.045_1" />
        </group>
        <group name="Icon_Toilet_LG1Female_1" position={[-6.27, 1, -0.94]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh material={materials['IconBlue.Normal']} geometry={nodes['Curve.046_0'].geometry} name="Curve.046_0" />
          <mesh material={materials['IconWhite.Normal']} geometry={nodes['Curve.046_1'].geometry} name="Curve.046_1" />
        </group>
        <group name="Icon_Lift_LG1_1" position={[-10.55, 1, -3.13]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh material={materials['IconBlue.Normal']} geometry={nodes['Curve.047_0'].geometry} name="Curve.047_0" />
          <mesh material={materials['IconWhite.Normal']} geometry={nodes['Curve.047_1'].geometry} name="Curve.047_1" />
        </group>
        <group name="Icon_Lift_LG1_2" position={[17.25, 1, -4.47]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh material={materials['IconBlue.Normal']} geometry={nodes['Curve.048_0'].geometry} name="Curve.048_0" />
          <mesh material={materials['IconWhite.Normal']} geometry={nodes['Curve.048_1'].geometry} name="Curve.048_1" />
        </group>
        <group name="Icon_Escalator_LG1_1" position={[-22.8, 1, -2.68]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh material={materials['IconWhite.Normal']} geometry={nodes['Curve.049_0'].geometry} name="Curve.049_0" />
          <mesh material={materials['IconBlue.Normal']} geometry={nodes['Curve.049_1'].geometry} name="Curve.049_1" />
        </group>
        <group name="Icon_Escalator_LG1_2" position={[15.54, 1, -6.06]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh material={materials['IconWhite.Normal']} geometry={nodes['Curve.050_0'].geometry} name="Curve.050_0" />
          <mesh material={materials['IconBlue.Normal']} geometry={nodes['Curve.050_1'].geometry} name="Curve.050_1" />
        </group>
        <group name="Icon_Surau_LG1Male_1" position={[-13.87, 1, -0.97]} scale={[8.01, 15.78, 8.01]}>
          <mesh material={materials['IconBlue.Normal']} geometry={nodes['Curve.058_0'].geometry} name="Curve.058_0" />
          <mesh material={materials['IconWhite.Normal']} geometry={nodes['Curve.058_1'].geometry} name="Curve.058_1" />
        </group>
        <group name="Icon_Surau_LG1Female_1" position={[-11.89, 1, -1.56]} scale={[8.01, 3.74, 8.01]}>
          <mesh material={materials['IconWhite.Normal']} geometry={nodes['Curve.059_0'].geometry} name="Curve.059_0" />
          <mesh material={materials['IconBlue.Normal']} geometry={nodes['Curve.059_1'].geometry} name="Curve.059_1" />
        </group>
        <group name="Icon_Bicycle_LG1_1" position={[-25.47, 1, -10.7]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh material={materials['IconBlue.Normal']} geometry={nodes['Curve.083_0'].geometry} name="Curve.083_0" />
          <mesh material={materials['IconWhite.Normal']} geometry={nodes['Curve.083_1'].geometry} name="Curve.083_1" />
        </group>
        <group name="Icon_APS_LG1_1" position={[15.71, 1, -3.24]} scale={[8.01, 3.61, 8.01]}>
          <mesh material={materials['IconWhite.Normal']} geometry={nodes['Curve.087_0'].geometry} name="Curve.087_0" />
          <mesh material={materials['IconBlue.Normal']} geometry={nodes['Curve.087_1'].geometry} name="Curve.087_1" />
        </group>
        <group name="Icon_APS_LG1_2" position={[11.47, 1, -2.73]} scale={[8.01, 3.61, 8.01]}>
          <mesh material={materials['IconWhite.Normal']} geometry={nodes['Curve.093_0'].geometry} name="Curve.093_0" />
          <mesh material={materials['IconBlue.Normal']} geometry={nodes['Curve.093_1'].geometry} name="Curve.093_1" />
        </group>
        <group name="Icon_Parking_LG1Normal_1" position={[2.89, 0, 3.98]} scale={[8.01, 6.04, 8.01]}>
          <mesh material={materials['IconWhite.Normal']} geometry={nodes['Curve.099_0'].geometry} name="Curve.099_0" />
          <mesh material={materials['IconBlue.Normal']} geometry={nodes['Curve.099_1'].geometry} name="Curve.099_1" />
        </group>
        <mesh
          material={materials['IconBlue.Normal']}
          geometry={nodes.Text_LG12.geometry}
          name="Text_LG12"
          position={[12.14, 0, -5.99]}
          scale={[21, 21, 21]}
        />
        <mesh
          material={materials['IconBlue.Normal']}
          geometry={nodes.Text_LG13.geometry}
          name="Text_LG13"
          position={[26.32, 0, -12.55]}
          scale={[13, 13, 13]}
        />
        <group name="Icon_Entrance_LG1_1" position={[-13.72, 0, -8.43]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh material={materials['IconGreen.Normal']} geometry={nodes['Curve.079_0'].geometry} name="Curve.079_0" />
          <mesh material={materials['IconWhite.Normal']} geometry={nodes['Curve.079_1'].geometry} name="Curve.079_1" />
        </group>
        <group name="Icon_Entrance_LG1_2" position={[-9.61, 0, -0.99]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh material={materials['IconGreen.Normal']} geometry={nodes['Curve.080_0'].geometry} name="Curve.080_0" />
          <mesh material={materials['IconWhite.Normal']} geometry={nodes['Curve.080_1'].geometry} name="Curve.080_1" />
        </group>
        <group name="Icon_Entrance_LG1_3" position={[11.93, 0, -4.06]} rotation={[Math.PI / 2, 0, 0]}>
          <mesh material={materials['IconGreen.Normal']} geometry={nodes['Curve.081_0'].geometry} name="Curve.081_0" />
          <mesh material={materials['IconWhite.Normal']} geometry={nodes['Curve.081_1'].geometry} name="Curve.081_1" />
        </group>
        <group name="Icon_Parking_LG1Ladies_1" position={[-5.94, 0.15, 4.98]} scale={[8.01, 3.53, 8.01]}>
          <mesh material={materials['IconWhite.Normal']} geometry={nodes['Curve.094_0'].geometry} name="Curve.094_0" />
          <mesh material={materials['IconPink.Normal']} geometry={nodes['Curve.094_1'].geometry} name="Curve.094_1" />
        </group>
        <group name="Icon_Parking_LG1Normal_2" position={[-18.72, 0, 5.96]} scale={[8.01, 6.04, 8.01]}>
          <mesh
            material={materials['IconWhite.Normal.003']}
            geometry={nodes['Curve.104_0'].geometry}
            name="Curve.104_0"
          />
          <mesh
            material={materials['IconBlue.Normal.003']}
            geometry={nodes['Curve.104_1'].geometry}
            name="Curve.104_1"
          />
        </group>
        <group name="Icon_Parking_LG1Normal_3" position={[-30.07, 0, 5.96]} scale={[8.01, 6.04, 8.01]}>
          <mesh
            material={materials['IconWhite.Normal.004']}
            geometry={nodes['Curve.105_0'].geometry}
            name="Curve.105_0"
          />
          <mesh
            material={materials['IconBlue.Normal.004']}
            geometry={nodes['Curve.105_1'].geometry}
            name="Curve.105_1"
          />
        </group>
        <mesh
          material={materials['IconBlue.Normal.005']}
          geometry={nodes.Text_LG11.geometry}
          name="Text_LG11"
          position={[19.06, 0, -6.9]}
          scale={[21, 21, 21]}
        />
      </scene>
    </group>
  )
}
