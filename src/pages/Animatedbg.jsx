// App.js
import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { DoubleSide, GridHelper } from "three";

function GridPlane() {
  const gridRef = useRef();

  return (
    <>
      <gridHelper
        ref={gridRef}
        args={[10, 10]}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh ref={gridRef} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[10, 10, 10, 10]} />
        <meshStandardMaterial color="lightblue" side={DoubleSide} />
      </mesh>
    </>
  );
}

function App() {
  return (
    <Canvas style={{ height: "100vh", width: "100vw" }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <GridPlane />
      <OrbitControls />
    </Canvas>
  );
}

export default App;
