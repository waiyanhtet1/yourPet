import React from "react";

const Button = ({ animationName, setAnimationName }) => {
  return (
    <button
      style={{
        backgroundColor: "yellow",
        padding: "8px",
        border: "none",
        outline: "none",
        borderRadius: "10px",
        cursor: "pointer",
      }}
      onClick={() => setAnimationName(`${animationName}`)}
    >
      {animationName}
    </button>
  );
};

export default Button;
