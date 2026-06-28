"use client";

import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function FloatingGeometry() {
  const outerRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame(() => {
    if (outerRef.current) {
      outerRef.current.rotation.x += 0.0018;
      outerRef.current.rotation.y += 0.0028;
    }
    if (innerRef.current) {
      innerRef.current.rotation.x -= 0.0025;
      innerRef.current.rotation.y -= 0.0018;
      innerRef.current.rotation.z += 0.001;
    }
    if (ringRef.current) {
      ringRef.current.rotation.x += 0.001;
      ringRef.current.rotation.z += 0.002;
    }
  });

  return (
    <group position={[1.2, 0, -1]}>
      {/* Outer icosahedron — violet */}
      <mesh ref={outerRef}>
        <icosahedronGeometry args={[2.4, 1]} />
        <meshBasicMaterial color="#a78bfa" wireframe transparent opacity={0.13} />
      </mesh>

      {/* Inner icosahedron — cyan */}
      <mesh ref={innerRef}>
        <icosahedronGeometry args={[1.5, 1]} />
        <meshBasicMaterial color="#22d3ee" wireframe transparent opacity={0.2} />
      </mesh>

      {/* Orbital ring */}
      <mesh ref={ringRef} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2.8, 0.015, 8, 80]} />
        <meshBasicMaterial color="#22d3ee" transparent opacity={0.18} />
      </mesh>
    </group>
  );
}

export default function ThreeScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 55 }}
      gl={{ alpha: true, antialias: true }}
      style={{ background: "transparent" }}
    >
      <FloatingGeometry />
    </Canvas>
  );
}
