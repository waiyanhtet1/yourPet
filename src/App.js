import { Canvas } from "@react-three/fiber";
import React, { useState } from "react";
import Scene from "./Scene";
import Button from "./components/Button";

const App = () => {
  const [animationName, setAnimationName] = useState("");
  return (
    <div>
      <div
        style={{
          position: "absolute",
          top: "17%",
          left: "20%",
          width: "250px",
          textAlign: "center",
          color: "white",
          padding: "10px",
          fontSize: "14px",
        }}
      >
        Hello Humon!, you can rotate and zoom me for more view changes!
      </div>
      <div
        style={{
          position: "absolute",
          left: "8px",
          top: "35%",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          zIndex: "90",
        }}
      >
        <Button animationName="ClickedOn" setAnimationName={setAnimationName} />
        <Button
          animationName="Congratulate"
          setAnimationName={setAnimationName}
        />
        <Button
          animationName="Embarrassed"
          setAnimationName={setAnimationName}
        />
        <Button animationName="Hide" setAnimationName={setAnimationName} />
      </div>

      <div style={{ position: "relative", height: "100vh" }}>
        <Canvas>
          <Scene animationName={animationName} />
        </Canvas>
      </div>

      <div
        style={{
          position: "absolute",
          right: "8px",
          top: "35%",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Button animationName="Idle" setAnimationName={setAnimationName} />
        <Button animationName="Pleased" setAnimationName={setAnimationName} />
        <Button animationName="Show" setAnimationName={setAnimationName} />
        <Button animationName="Travel" setAnimationName={setAnimationName} />
        <Button animationName="Writing" setAnimationName={setAnimationName} />
      </div>
    </div>
  );
};

export default App;
