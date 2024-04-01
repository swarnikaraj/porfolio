import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  useMemo,
} from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { OrbitControls, Html } from "@react-three/drei";

function GridPlaneWithCards({ cardData, selectedSection, setSelectedSection }) {
  const planeRef = useRef();

  const numCards = 4;
  const radius = 3;
  const planeDistance = 5; // Adjust the distance of the plane from the camera
  const initialRotationAngle = -Math.PI / 4;

  useEffect(() => {
    setSelectedSection(cardData[0]);
  }, [cardData, setSelectedSection]);
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
          color="blue" // Set color to grey
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
              onClick={() => {
                setSelectedSection(data);
              }}
              className={`relative w-32 h-32 rounded-full overflow-hidden bg-gray-400 shadow shadow-gray-100 ${
                selectedSection?.text == data.text
                  ? "animate-spin duration-900"
                  : ""
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-transparent rounded-full"></div>
              <div className="flex flex-col items-center justify-center p-4 text-gray-800 z-10">
                <div className="text-xl">{data.icon}</div>
                <div className="text-xl font-bold">{data.text}</div>
              </div>
            </div>
            {/* 
            <div
              onClick={() => setSelectedSection(data)}
              className={`relative w-64 h-64 bg-white rounded-lg shadow-lg transform transition duration-300 hover:scale-105 overflow-hidden ${
                selectedSection?.text == data.text
                  ? "animate-spin duration-900"
                  : ""
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-400 to-purple-500 opacity-70 rounded-lg"></div>
              <div className="absolute inset-0 flex justify-center items-center">
                <div className="text-center">
                  <h2 className="text-white text-2xl font-bold bg-gradient-to-br from-blue-500 to-purple-600 bg-clip-text">
                    {data.icon}
                  </h2>
                  <p className="text-white mt-2">{data.text}</p>
                </div>
              </div>
            </div> */}
          </Html>
        );
      })}
    </>
  );
}

function Animatedbg({
  cardData,
  setSelectedSection,
  selectedSection,
  setSelectedComponent,
}) {
  return (
    <Canvas className="w-full">
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <GridPlaneWithCards
        cardData={cardData}
        setSelectedSection={setSelectedSection}
        selectedSection={selectedSection}
      />
      <OrbitControls />
    </Canvas>
  );
}

export default Animatedbg;
