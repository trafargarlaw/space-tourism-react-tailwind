import { useFrame, useLoader } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { TextureLoader } from "three";

const Moon = ({ planetName }: { planetName: string }) => {
  const [map] = useLoader(TextureLoader, [
    `/images/destination/${planetName}-texture.jpg`,
  ]);
  const mesh = useRef<any>();
  useFrame(() => {
    mesh.current.rotation.y += 0.005;
  });
  return (
    <Suspense>
      <mesh ref={mesh}>
        <sphereBufferGeometry attach="geometry" args={[2.8, 100, 100]} />
        <meshPhongMaterial color="blue" />
        <meshStandardMaterial map={map} />
      </mesh>
      <spotLight intensity={0.6} position={[-100, 100, 90]} />
      <spotLight intensity={0.04} position={[10, -10, 0]} />
    </Suspense>
  );
};

export default Moon;
