/* eslint-disable */
import React, { useState } from "react";
import "aframe";
import "aframe-environment-component";
import MenuInSpace from "./MenuInSpace";
import GlbModelViewer from "./ModelViewers/GlbModelViewer";
import ObjModelViewer from "./ModelViewers/ObjModelViewer";
import movieSrc from "../../assets/videos/trailer.mp4";

//* Model imports
import carModel from "../../assets/test3d.glb";
import cinemaModel from "../../assets/models/low_poly_cinema.glb";
import testModel from "../../assets/models/underground_parking_lot.glb";
import cinemaObj from "../../assets/models/cinema_obj/Low Poly - Cinema.obj";
import cinemaMtl from "../../assets/models/cinema_obj/Low Poly - Cinema.mtl";

export default function Space({ onBackClick }) {
  const [videoStarted, setVideoStarted] = useState(false);

  const handlePlayVideo = () => {
    const video = document.querySelector("#movie");
    video.play();
    setVideoStarted(true);
  };

  const handleFullscreen = () => {
    const element = document.documentElement;
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) {
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) {
      element.msRequestFullscreen();
    }
  };

  return (
    <div className="App" style={{ height: "100vh" }}>
      <a-scene>
        {/* Cinema Environment */}
        {/* <a-entity environment="preset: forest; dressingAmount: 10; skyColor: #88ccee;"></a-entity> */}

        {/* Lightings */}
        <a-entity
          class="environment"
          position="0 8 -8.5"
          light="intensity: 0.8; shadowCameraTop: 10; shadowCameraRight: 10; shadowCameraBottom: -10; shadowCameraLeft: -10"
          visible=""
        ></a-entity>
        <a-entity
          class="environment"
          position="0 50 0"
          light="color: #c4e6f7; groundColor: #937a24; intensity: 0.6; type: hemisphere"
          visible=""
        ></a-entity>

        {/* 3D Model (Car or replace with cinema elements) */}
        {/* <GlbModelViewer
          modelSrc={cinemaModel}
          position="0 0 -3"
          scale="1 1 1"
          rotation="0 45 0"
        /> */}
        {/* <GlbModelViewer
          modelSrc={testModel}
          position="0 0.2 -3"
          scale="1 1 1"
          rotation="0  0"
        /> */}
        <ObjModelViewer
          objSrc={cinemaObj}
          mtlSrc={cinemaMtl}
          position="0 0 0"
          scale="1 1 1"
          rotation="0 0 0"
        />

        {/* Camera and Cursor Controls */}
        {/* <a-entity
          look-controls
          raycaster="objects: .clickable"
          cursor="fuse: false; rayOrigin: mouse"
        ></a-entity> */}
        <a-entity
          position="0.04 1.7 -2.5"
          camera
          look-controls
          raycaster="objects: .clickable"
          cursor="fuse: false; rayOrigin: mouse"
        />

        {/* Back Wall */}
        <a-box
          position="0 3 7.89"
          rotation=""
          width="12.15"
          height="11.8"
          depth="0.4"
          color="black"
          geometry="height: 6"
        ></a-box>
        {/* Right Wall */}
        <a-box
          position="6 3 -0.09"
          rotation="0 90 0"
          width="16.358"
          height="11.8"
          depth="0.4"
          color="black"
          geometry="height: 6"
        ></a-box>
        {/* Ceiling Wall */}
        <a-box
          position="0.04273 6.02318 -0.09"
          rotation="90 90 0"
          width="16.358"
          height="11.8"
          depth="0.4"
          color="black"
          geometry="height: 12.3"
          visible=""
        ></a-box>

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
          position="0 3.31 -7.9"
          width="9"
          height="4"
          // autoplay={videoStarted} // Only autoplay after user interaction
        ></a-video>

        {/* Menu Component in Space */}
        {/* <MenuInSpace
          onBackClick={onBackClick}
          onOptionClick={(option) => console.log(`Option ${option} selected`)}
        /> */}
      </a-scene>

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

      {/* Fullscreen Button */}
      <button
        onClick={handleFullscreen}
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          padding: "10px 20px",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          zIndex: 1000,
        }}
      >
        Fullscreen
      </button>
    </div>
  );
}
