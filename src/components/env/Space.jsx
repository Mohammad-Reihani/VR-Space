import React, { useState } from "react";
import "aframe";
import "aframe-environment-component"; // Import environment component
import MenuInSpace from "./MenuInSpace";

export default function Space({ onBackClick }) {
  const [optionSelected, setOptionSelected] = useState(null);

  const handleOptionClick = (option) => {
    setOptionSelected(option);
    console.log(`Option ${option} selected`);
  };

  return (
    <div className="App" style={{ height: "100vh" }}>
      <a-scene>
        {/* Environment */}
        <a-entity environment="preset: forest; dressingAmount: 10; skyColor: #88ccee;"></a-entity>

        {/* Raycaster for detecting clicks */}
        <a-entity
          // camera
          look-controls
          raycaster="objects: .clickable"
          cursor="fuse: false; rayOrigin: mouse"
        ></a-entity>

        {/* Menu */}
        <MenuInSpace onBackClick={onBackClick} onOptionClick={handleOptionClick} />
      </a-scene>

      {/* Back Button outside the 3D space */}
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
