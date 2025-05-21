"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react";

// Componente para cargar y posicionar el modelo
function PlacaModel() {
  const { scene } = useGLTF("/models/mother/moder.glb");

  // Centrado, rotado y escalado para mejor visualización
  scene.position.set(0, -1.2, 0);         // Centrar vertical
  scene.rotation.set(0, Math.PI, 0);     // Girar hacia el frente si necesario
  scene.scale.set(2.5, 2.5, 2.5);        // Escalado más visible

  return <primitive object={scene} />;
}

export default function Placa3D() {
  return (
    <div className="w-full h-[700px]"> {/* Altura un poco mayor para resaltar */}
      <Canvas camera={{ position: [0, 1.5, 5], fov: 45 }}>
        {/* Luces */}
        <ambientLight intensity={0.7} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        {/* Modelo 3D */}
        <Suspense fallback={null}>
          <PlacaModel />
        </Suspense>

        {/* Controles de cámara */}
        <OrbitControls enableZoom enablePan enableRotate />

        {/* Solo para desarrollo, podés quitar estos helpers si querés */}
        {/* <axesHelper args={[5]} />
        <gridHelper args={[10, 10]} /> */}
      </Canvas>
    </div>
  );
}
