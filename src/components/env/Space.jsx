/* eslint-disable */
import React, { useState } from "react";
import "aframe";
import "aframe-environment-component";
import MenuInSpace from "./MenuInSpace";
import ModelViewer from "./ModelViewer";
import GltfModelViewer from "./GltfModelViewer";
import movieSrc from "../../assets/test360_01.mp4"; // Video source
import carModel from "../../assets/test3d.glb"; // Your car model
import cinemaModel from "../../assets/models/low_poly_cinema.glb";
// import cinemaModel2 from "../../assets/models/low_poly_cinema/scene.gltf";

export default function Space({ onBackClick }) {
  const [videoStarted, setVideoStarted] = useState(false);

  const handlePlayVideo = () => {
    const video = document.querySelector("#movie");
    video.play();
    setVideoStarted(true);
  };

  return (
    <div className="App" style={{ height: "100vh" }}>
      <a-scene>
        {/* Cinema Environment */}
        <a-entity environment="preset: forest; dressingAmount: 10; skyColor: #88ccee;"></a-entity>

        {/* Movie Screen */}
        <a-assets>
          <video
            id="movie"
            src={movieSrc}
            crossOrigin="anonymous"
            playsInline="true"
          />
        </a-assets>

        <a-video
          src="#movie"
          position="0 2 -8"
          width="6"
          height="4"
          autoplay={videoStarted} // Only autoplay after user interaction
        ></a-video>

        {/* Button to Start Video */}
        {!videoStarted && (
          <button
            onClick={handlePlayVideo}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              padding: "10px 20px",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              zIndex: 1000,
            }}
          >
            Play Movie
          </button>
        )}

        {/* 3D Model (Car or replace with cinema elements) */}
        <ModelViewer
          modelSrc={cinemaModel}
          position="0 0 -3"
          scale="1 1 1"
          rotation="0 45 0"
        />
        {/* <GltfModelViewer
          modelSrc={cinemaModel2}
          position="0 1.5 -5"
          scale="1 1 1"
          rotation="0 45 0"
        /> */}

        {/* Camera and Cursor Controls */}
        <a-entity
          look-controls
          raycaster="objects: .clickable"
          cursor="fuse: false; rayOrigin: mouse"
        ></a-entity>

        {/* Menu Component in Space */}
        <MenuInSpace
          onBackClick={onBackClick}
          onOptionClick={(option) => console.log(`Option ${option} selected`)}
        />
      </a-scene>

      {/* Back Button */}
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
