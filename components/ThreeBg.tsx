"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function WobblyTorus() {
  const mesh = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    mesh.current.rotation.x = t * 0.3;
    mesh.current.rotation.y = t * 0.4;
    mesh.current.scale.setScalar(1 + Math.sin(t * 1.2) * 0.05);
  });
  return (
    <mesh ref={mesh} position={[1.2, 0.6, -2]}>
      <torusKnotGeometry args={[0.8, 0.25, 128, 16]} />
      <meshStandardMaterial metalness={0.5} roughness={0.2} />
    </mesh>
  );
}

export default function ThreeBg() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 bg-black ">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.7} />
        <directionalLight position={[2, 2, 2]} intensity={1} />
        <WobblyTorus />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-white/0 to-blue-100/20" />
    </div>
  );
}
