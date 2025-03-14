
import React, { useRef, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, Environment, OrbitControls, PresentationControls } from "@react-three/drei";
import { Suspense } from "react";

// Placeholder model that will show while we wait for the actual model
const PlaceholderModel = () => {
  const ref = useRef(null);
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y += 0.005;
    }
  });

  return (
    <mesh ref={ref}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial 
        color="#0050db" 
        metalness={0.8} 
        roughness={0.2} 
      />
    </mesh>
  );
};

// This would be your actual machine model component
// For now we're using a placeholder box
const MachineModel = () => {
  const ref = useRef(null);
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y += 0.002;
    }
  });

  return (
    <group ref={ref}>
      {/* Main machine body */}
      <mesh position={[0, -1, 0]}>
        <boxGeometry args={[4, 1, 2]} />
        <meshStandardMaterial color="#e0e0e0" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Control panel */}
      <mesh position={[1.5, 0, 0]}>
        <boxGeometry args={[1, 1, 1.5]} />
        <meshStandardMaterial color="#303030" metalness={0.5} roughness={0.3} />
      </mesh>
      
      {/* Cooling chamber */}
      <mesh position={[-1, 0.5, 0]}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="#0050db" metalness={0.7} roughness={0.2} />
      </mesh>
      
      {/* Pipes */}
      <mesh position={[0.5, 0, 0.8]}>
        <cylinderGeometry args={[0.2, 0.2, 4, 16]} />
        <meshStandardMaterial color="#d0d0d0" metalness={0.9} roughness={0.1} />
      </mesh>
      
      {/* Cooling indicators */}
      <mesh position={[-1, 0.5, 1.1]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={0.5} />
      </mesh>
    </group>
  );
};

const ModelViewer = () => {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [5, 2, 5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <Suspense fallback={<PlaceholderModel />}>
          <PresentationControls
            global
            zoom={0.8}
            rotation={[0, -Math.PI / 6, 0]}
            polar={[-Math.PI / 6, Math.PI / 6]}
            azimuth={[-Math.PI / 6, Math.PI / 6]}
          >
            <MachineModel />
          </PresentationControls>
          <Environment preset="city" />
        </Suspense>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  );
};

export default ModelViewer;
