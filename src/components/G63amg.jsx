import React from 'react'
import { useGLTF } from '@react-three/drei'

function Model(props) {
  const { nodes, materials } = useGLTF('/g63amg-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes['G-class_RR_doorpanel_rocket_symbols_0'].geometry} material={materials.symbols} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes['G-class_RR_doorpanel_rocket_brabus_dash_skin_0'].geometry} material={materials.brabus_dash_skin} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes['G-class_RR_doorpanel_rocket_int_badges_0'].geometry} material={materials.int_badges} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes['G-class_RR_doorpanel_rocket_leather_jesko2_0'].geometry} material={materials.PaletteMaterial001} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes['G-class_RR_doorpanel_rocket_carbon_sesto2_0'].geometry} material={materials.G900_rocket_urus_27__PAINT_2} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes['G-class_RR_doorpanel_rocket_door_red_0'].geometry} material={materials.PaletteMaterial002} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.AMG_rear_seats_AMG_seat_0.geometry} material={materials.G900_rocket_urus_27__PAINT_2_1} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.AMG_rear_seats_urus_27__PAINT_2__0.geometry} material={materials.G900_rocket_urus_27__PAINT_2_2} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.AMG_tailgate_setlogo01x_0.geometry} material={materials.setlogo01x} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.AMG_tailgate_ptn_leather_016_lcao_0.geometry} material={materials.ptn_leather_016_lcao} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.AMG_tailgate_bodypaint_0.geometry} material={materials.PaletteMaterial003} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes['G-class_signal_L_AMG_G-class_signal_L_0'].geometry} material={materials['G-class_speedo_black_0']} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes['G-class_headlight_R_AMG_G-class_lightled_0'].geometry} material={materials.PaletteMaterial004} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes['G-class_headlight_R_AMG_lamp_alpha_0'].geometry} material={materials.lamp_alpha} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes['G-class_v8_G-class_headers_race_G-class_underbody_0'].geometry} material={materials['G-class_underbody']} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes['G-class_sidepipe_R_exhausts_silver_0'].geometry} material={materials.PaletteMaterial001} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes['G-class_exhaust_v8_race_R_G-class_underbody_0'].geometry} material={materials['G-class_underbody']} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes['G-class_signalstalk_door_plastic_0'].geometry} material={materials.door_plastic} position={[0.484, 1.206, 0.506]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.Music_Music_0.geometry} material={materials.Music} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes['G-class_RL_doorpanel_speakers_d_0'].geometry} material={materials.G900_rocket_urus_27__PAINT_2_3} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes['G-class_FR_doorpanel_speakers2_d_0'].geometry} material={materials.speakers2_d} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes['G-class_engine_v8_55_carbon_sesto_0'].geometry} material={materials.G900_rocket_urus_27__PAINT_2_4} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes['G-class_engine_v8_55_doortags_diffx_0'].geometry} material={materials.PaletteMaterial002} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.AMG_hood_bodypaint_0.geometry} material={materials.PaletteMaterial003} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.AMG_hood_AMG_hood_logo_0.geometry} material={materials.AMG_hood_logo} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.AMG_front_bamper_wangge_b_0.geometry} material={materials.G900_rocket_urus_27__PAINT_2_5} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.AMG_interior_G900_roof_buttons_0.geometry} material={materials.G900_rocket_urus_27__PAINT_2_6} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.AMG_interior_int_badges_clock_0.geometry} material={materials.int_badges_clock} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes.AMG_gauges_AMG_gauges_0.geometry} material={materials.G900_rocket_urus_27__PAINT_2_7} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh geometry={nodes['G-class_steeringwheel_AMG_symbols_0'].geometry} material={materials.symbols} position={[0.407, 1.234, 0.463]} rotation={[-2.831, 0, 0]} />
      <mesh geometry={nodes['G-class_steeringwheel_AMG_symbols_embossed_0'].geometry} material={materials.G900_rocket_urus_27__PAINT_2_8} position={[0.407, 1.234, 0.463]} rotation={[-2.831, 0, 0]} />
      <mesh geometry={nodes['G-class_steeringwheel_AMG_leather_wheel_0'].geometry} material={materials.leather_wheel} position={[0.407, 1.234, 0.463]} rotation={[-2.831, 0, 0]} />
      <mesh geometry={nodes['G-class_steeringwheel_AMG_steeringwheel_plastic_0'].geometry} material={materials.steeringwheel_plastic} position={[0.407, 1.234, 0.463]} rotation={[-2.831, 0, 0]} />
      <mesh geometry={nodes['G-class_steeringwheel_AMG_AMG_steering_race_symbols_0'].geometry} material={materials.G900_rocket_urus_27__PAINT_2_9} position={[0.407, 1.234, 0.463]} rotation={[-2.831, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/g63amg-transformed.glb')


export default Model;