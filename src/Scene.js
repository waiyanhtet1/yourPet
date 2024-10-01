import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import Model from "./Model";

const Scene = ({ animationName }) => {
  return (
    <>
      <ambientLight intensity={2} />
      <directionalLight />
      <OrbitControls />
      {/* <axesHelper args={[2]} /> */}

      <Suspense
        fallback={
          <mesh>
            <boxGeometry />
            <meshBasicMaterial wireframe />
          </mesh>
        }
      >
        <Model animationName={animationName} />
      </Suspense>

      {/* <Bike /> */}
    </>
  );
};

export default Scene;
