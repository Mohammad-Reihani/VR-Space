import React, { useState } from "react";
import "aframe";
import "aframe-environment-component";
import MenuInSpace from "./MenuInSpace";
import carModel from "../../assets/test3d.glb";
import ModelViewer from "./ModelViewer";

export default function Space({ onBackClick }) {
  const [optionSelected, setOptionSelected] = useState(null);

  const handleOptionClick = (option) => {
    setOptionSelected(option);
    console.log(`Option ${option} selected`);
  };

  return (
    <div className="App" style={{ height: "100vh" }}>
      <a-scene>
        <ModelViewer
          modelSrc={carModel}
          position="0 0 -5"
          scale="30 30 30"
          rotation="0 45 0"
        />
        <a-entity environment="preset: forest; dressingAmount: 10; skyColor: #88ccee;"></a-entity>

        <a-entity
          camera
          look-controls
          position="0 2 0"
          cursor="fuse: false; rayOrigin: mouse"
        ></a-entity>

        <MenuInSpace
          onBackClick={onBackClick}
          onOptionClick={handleOptionClick}
        />
      </a-scene>

      <button
        onClick={onBackClick}
        style={{
          position: "absolute",
          top: "20px",
          left: "20px",
          padding: "10px 20px",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          zIndex: 1000,
        }}
      >
        Back
      </button>
    </div>
  );
}
