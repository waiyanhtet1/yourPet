import { useAnimations, useGLTF } from "@react-three/drei";
import React, { useEffect } from "react";

const Model = ({ animationName }) => {
  const model = useGLTF("./model/dog.glb");
  const animations = useAnimations(model.animations, model.scene);

  console.log(animations);

  useEffect(() => {
    const playAnimation = () => {
      animations.actions.Idle.play();
      if (animations.actions[animationName]) {
        animations.actions[animationName].play();
        console.log(animationName);
      } else {
        console.warn(`Animation ${animationName} not found.`);
      }
    };

    const timeoutId = setTimeout(playAnimation, 100);

    // Cleanup function
    return () => {
      clearTimeout(timeoutId);
      if (animations.actions[animationName]) {
        animations.actions[animationName].stop();
      }
    };
  }, [animations.actions, animationName]);

  return <primitive object={model.scene} position-y={-0.4} scale={1.5} />;
};

useGLTF.preload("./model/dog.glb");

export default Model;
