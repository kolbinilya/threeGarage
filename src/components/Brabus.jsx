import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

function Model(props) {
  const { nodes, materials } = useGLTF('/brabus-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.Object_5.geometry} material={materials.PaletteMaterial002} />
      <mesh geometry={nodes.Object_8.geometry} material={materials.PaletteMaterial003} />
      <mesh geometry={nodes.Object_9.geometry} material={materials.PaletteMaterial004} />
      <mesh geometry={nodes.Object_10.geometry} material={materials.PaletteMaterial005} />
      <mesh geometry={nodes.Object_24.geometry} material={materials.TwiXeR_W223_speakers} />
      <mesh geometry={nodes.Object_55.geometry} material={materials.PaletteMaterial006} />
      <mesh geometry={nodes.Object_56.geometry} material={materials.TwiXeR_W223_SeatBelt} />
      <mesh geometry={nodes.Object_57.geometry} material={materials.PaletteMaterial007} />
      <mesh geometry={nodes.Object_58.geometry} material={materials.TwiXeR_W223_speakers_0} />
      <mesh geometry={nodes.Object_60.geometry} material={materials.TwiXeR_W223_speakers_1} />
      <mesh geometry={nodes.Object_81.geometry} material={materials.TwiXeR_W223_speakers_2} />
      <mesh geometry={nodes.Object_91.geometry} material={materials.TwiXeR_W223_speakers_3} />
      <mesh geometry={nodes.Object_134.geometry} material={materials.TwiXeR_W223_speakers_4} />
      <mesh geometry={nodes.Object_136.geometry} material={materials.TwiXeR_W223_speakers_5} />
      <mesh geometry={nodes.Object_174.geometry} material={materials.TwiXeR_W223_speakers_6} />
      <mesh geometry={nodes.Object_209.geometry} material={materials.TwiXeR_W223_speakers_7} />
      <mesh geometry={nodes.Object_211.geometry} material={materials.TwiXeR_W223_speakers_8} />
      <mesh geometry={nodes.Object_240.geometry} material={materials.TwiXeR_W223_speakers_9} />
      <mesh geometry={nodes.Object_277.geometry} material={materials.PaletteMaterial003} />
      <mesh geometry={nodes.Object_278.geometry} material={materials.PaletteMaterial005} />
      <mesh geometry={nodes.Object_305.geometry} material={materials.TwiXeR_W223_speakers_10} />
      <mesh geometry={nodes.Object_366.geometry} material={materials.TwiXeR_W223_speakers_11} position={[0.403, 0.952, 0.386]} rotation={[1.99, 0, Math.PI]} />
      <mesh geometry={nodes.Object_369.geometry} material={materials.TwiXeR_W223_speakers_12} position={[0.403, 0.952, 0.386]} rotation={[1.99, 0, Math.PI]} />
      <mesh geometry={nodes.Object_375.geometry} material={materials.TwiXeR_W223_speakers_13} position={[0.352, 0.916, 0.562]} />
    </group>
  )
}

useGLTF.preload('/brabus-transformed.glb')

export default Model;
