import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { DoubleSide } from "three";

function GridPlaneWithCards() {
  const planeRef = useRef();

  const numCards = 6;
  const radius = 3;

  return (
    <>
      {/* Grid Plane */}
      <mesh ref={planeRef} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[10, 10, 10, 10]} />
        <meshStandardMaterial color="lightblue" side={DoubleSide} />
      </mesh>

      {/* Vertical Cards */}
      {[...Array(numCards)].map((_, i) => {
        const angle = (i / numCards) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const y = 0.1; // Adjust the height of the cards above the plane

        return (
          <mesh key={i} position={[x, y, z]} rotation={[0, angle, 0]}>
            <boxGeometry args={[1, 3, 0.5]} />
            <meshStandardMaterial color="gray" />
          </mesh>
        );
      })}
    </>
  );
}

function Animatedbg() {
  return (
    <Canvas style={{ height: "100vh", width: "100vw" }}>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <GridPlaneWithCards />
      <OrbitControls />
    </Canvas>
  );
}

export default Animatedbg;
