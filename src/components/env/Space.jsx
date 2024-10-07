/* eslint-disable */
import React, { useState } from "react";
import "aframe";
import "aframe-environment-component";
import MenuInSpace from "./MenuInSpace";
import GlbModelViewer from "./ModelViewers/GlbModelViewer";
import ObjModelViewer from "./ModelViewers/ObjModelViewer";
import movieSrc from "../../assets/test360_01.mp4";

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
        <a-entity environment="preset: forest; dressingAmount: 10; skyColor: #88ccee;"></a-entity>

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
          position="0 2.5 -3"
          camera
          look-controls
          raycaster="objects: .clickable"
          cursor="fuse: false; rayOrigin: mouse"
        />

        {/* Back Wall */}
        <a-box
          position="0 0 7.89"
          rotation="0 0 0"
          width="12.15"
          height="11.8"
          depth="0.4"
          color="black"
        ></a-box>
        {/* Right Wall */}
        <a-box
          position="6 0 -0.09"
          rotation="0 90 0"
          width="16.358"
          height="11.8"
          depth="0.4"
          color="black"
        ></a-box>
        {/* Ceiling Wall */}
        {/* <a-box
          position="0 0 7.89"
          rotation="0 0 0"
          width="12.15"
          height="11.8"
          depth="0.4"
          color="black"
        ></a-box> */}

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
          position="0 3.35 -7.9"
          width="6"
          height="4"
          autoplay={videoStarted} // Only autoplay after user interaction
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
