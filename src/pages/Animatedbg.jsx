import React, { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls, Html } from "@react-three/drei";

function GridPlaneWithCards() {
  const planeRef = useRef();

  const numCards = 4;
  const radius = 3;
  const planeDistance = 5; // Adjust the distance of the plane from the camera
  const initialRotationAngle = -Math.PI / 4;

  const cardData = [
    { text: "Profile", icon: "👤" },

    { text: "Skills", icon: "🛠️" },

    { text: "Projects", icon: "💻" },
    { text: "Work Experience", icon: "💼" },
  ];

  return (
    <>
      {/* Grid Plane with initial rotation */}
      <mesh
        ref={planeRef}
        rotation={[-Math.PI / 4, 0, -Math.PI / 2]}
        position={[0, 0, -planeDistance]}
      >
        <planeGeometry args={[15, 15, 15, 15]} />
        {/* Custom material to create a mesh-like appearance */}
        <meshBasicMaterial
          color="grey" // Set color to grey
          wireframe // Enable wireframe mode
          wireframeLinewidth={1} // Set wireframe line thickness
          side={THREE.DoubleSide} // Ensure it's visible from both sides
        />
      </mesh>

      {/* Vertical Cards */}
      {cardData.map((data, i) => {
        const angle = (i / numCards) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;
        const y = 1.2; // Adjust the height of the cards above the plane

        return (
          <Html key={i} position={[x, y, z]} center>
            <div
              className="bg-gray-400 w-32 h-32 text-gray-800 rounded-full shadow shadow-gray-100 p-4 "
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div>{data.icon}</div>
              <div>{data.text}</div>
            </div>
          </Html>
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
