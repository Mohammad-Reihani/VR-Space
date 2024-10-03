import { useState } from "react";
import "aframe";
import "aframe-environment-component"; // Import environment component
import MenuInSpace from "./MenuInSpace";

export default function Space({ onBackClick }) {
  const [optionSelected, setOptionSelected] = useState(null);

  const handleOptionClick = (option) => {
    setOptionSelected(option);
    console.log(`Option ${option} selected`);
    // Handle option logic here, e.g., showing different 3D objects
  };

  return (
    <div className="App" style={{ height: "100vh" }}>
      <a-scene>
        {/* 3D Environment */}
        <a-entity environment="preset: forest;  skyColor: #88ccee;"></a-entity>

        {/* Insert the menu into the environment */}
        <MenuInSpace
          onBackClick={onBackClick}
          onOptionClick={handleOptionClick}
        />

        {/* Camera and cursor */}
        <a-camera>
          <a-cursor></a-cursor>
        </a-camera>
      </a-scene>

      {/* Back Button (UI outside the scene, for navigation if needed) */}
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
