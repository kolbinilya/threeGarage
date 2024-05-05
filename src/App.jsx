import {Canvas} from "@react-three/fiber";
import G63amg from "./components/G63amg.jsx";
import {
  OrbitControls,
  PerspectiveCamera,
  Stage
} from "@react-three/drei";
import Menu from "./components/Menu.jsx";
import {useState} from "react";
import Brabus from "./components/Brabus.jsx";
import Sl from "./components/Sl.jsx";

const App = () => {
  const [car, setCar] = useState('');
  const [rotate, setRotate] = useState(false);

  return (
      <div>
        <Menu car={car} setCar={setCar} rotate={rotate} setRotate={setRotate} />
        <Canvas dpr={[1, 2]} shadows={'basic'} camera={{fov: 45}} style={{
          "position": "absolute",
          "width": "100%",
          "background": "linear-gradient(0deg, rgba(55,54,54,1) 0%, rgba(55,54,54,1) 49%, rgba(255,255,255,1) 100%)"
        }}>
          <OrbitControls enableZoom={false} autoRotate={rotate}/>
          <ambientLight intensity={Math.PI / 2}/>
          <PerspectiveCamera makeDefault position={[2, 1, 6]}/>
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI}/>
          <ambientLight intensity={0.5}/>
          <Stage environment={'studio'}>
            {car === 'g63' ? <G63amg/> : car === 'brabus' ? <Brabus/> : <Sl/>}
          </Stage>
        </Canvas>
      </div>
  )
}

export default App
