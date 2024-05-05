import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

function Model(props) {
  const { nodes, materials } = useGLTF('/sl-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.SL63_taillight_R_SL63_darkred_0.geometry} material={materials.PaletteMaterial001} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.SL63_taillight_R_SL63_plastic_0.geometry} material={materials.SL63_plastic} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes['SL63_steeringwheel-crb_SL63_black-leather_0'].geometry} material={materials['SL63_black-leather']} position={[0.347, 0.732, 0.096]} rotation={[-2.845, 0, 0]} />
      <mesh geometry={nodes['SL63_steeringwheel-crb_SL63_steerSymbs_0'].geometry} material={materials.SL63_steerSymbs} position={[0.347, 0.732, 0.096]} rotation={[-2.845, 0, 0]} />
      <mesh geometry={nodes['SL63_steeringwheel-crb_SL63_white-leather_0'].geometry} material={materials['SL63_white-leather']} position={[0.347, 0.732, 0.096]} rotation={[-2.845, 0, 0]} />
      <mesh geometry={nodes['SL63_dash-crb_SL63_interiorSymbs_0'].geometry} material={materials.SL63_interiorSymbs} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes['SL63_dash-crb_SL63_ambiente-on_0'].geometry} material={materials.PaletteMaterial002} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes['SL63_dash-crb_seat5_0'].geometry} material={materials['seat.5']} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.SL63_door_R_SL63_paint_0.geometry} material={materials.PaletteMaterial003} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.SL63_gauges_SL63_gauges_screen_0.geometry} material={materials.SL63_gauges_screen} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes['SL63_badge-F-AMG_body6_0'].geometry} material={materials['body.6']} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.SL63_doorpanel_L_SL63_speakers_0.geometry} material={materials.SL63_speakers} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.SL63_body_SL63_carpet_0.geometry} material={materials.SL63_carpet} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.SL63_radsupport_SL63_underbody_0.geometry} material={materials.PaletteMaterial001} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes['SL63_navi_SL63_GPS-Screen_0'].geometry} material={materials['SL63_GPS-Screen']} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes['SL63_engine-63V8_chassis7_0'].geometry} material={materials['chassis.7']} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes['SL63_engine-63V8_chassis8_0'].geometry} material={materials['chassis.8']} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes['SL63_engine-63V8_chassis14_0'].geometry} material={materials['chassis.14']} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.SL63_hood_SL63_paint_0.geometry} material={materials.PaletteMaterial003} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.SL63_bumperbar_F_SL63_radiatorsupp_0.geometry} material={materials.SL63_radiatorsupp} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes['SL63_headlight_L_SL63_runninglight-Fr_0'].geometry} material={materials.PaletteMaterial004} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes['SL63_headlight_L_SL63_lowbeams-F001_0'].geometry} material={materials['SL63_lowbeams-F.001']} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes['SL63_windshield-tint_SL63_tinted-glass_0'].geometry} material={materials.PaletteMaterial005} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes['SL63_headlightglass_R-tint_SL63_tinted-glass001_0'].geometry} material={materials.PaletteMaterial005} position={[0, 0.001, 0]} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/sl-transformed.glb')

export default Model;
