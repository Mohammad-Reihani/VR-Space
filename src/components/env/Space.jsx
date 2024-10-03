import React, { useState, useEffect, useRef } from "react";
import "aframe";
import "aframe-environment-component";
import MenuInSpace from "./MenuInSpace";
import test3dModel from "../../assets/test3d.glb";

export default function Space({ onBackClick }) {
  const [optionSelected, setOptionSelected] = useState(null);
  const [modelStatus, setModelStatus] = useState("loading");
  const [retryCount, setRetryCount] = useState(0);
  const sceneRef = useRef(null);
  const modelRef = useRef(null);

  const MAX_RETRIES = 3;
  const RETRY_DELAY = 2000; // 2 seconds
  const LOAD_TIMEOUT = 10000; // 10 seconds

  const handleOptionClick = (option) => {
    setOptionSelected(option);
    console.log(`Option ${option} selected`);
  };

  const loadModel = () => {
    console.log(`Attempting to load model. Retry count: ${retryCount}`);
    setModelStatus("loading");

    if (modelRef.current) {
      const newSrc = `${test3dModel}?v=${Date.now()}`;
      console.log(`Setting new src: ${newSrc}`);
      modelRef.current.setAttribute("gltf-model", newSrc);
    }

    // Set a timeout to check if the model is taking too long to load
    const timeoutId = setTimeout(() => {
      if (modelStatus === "loading") {
        console.log("Model load timed out");
        handleModelError(new Error("Load timeout"));
      }
    }, LOAD_TIMEOUT);

    return () => clearTimeout(timeoutId);
  };

  const handleModelLoaded = (event) => {
    console.log("Model loaded successfully", event);
    setModelStatus("loaded");
    setRetryCount(0);
  };

  const handleModelError = (error) => {
    console.error("Model failed to load:", error);
    setModelStatus("error");

    if (retryCount < MAX_RETRIES) {
      console.log(`Retrying in ${RETRY_DELAY / 1000} seconds...`);
      setTimeout(() => {
        setRetryCount((prevCount) => prevCount + 1);
      }, RETRY_DELAY);
    } else {
      console.log(
        "Max retries reached. Please check the model and try again later."
      );
    }
  };

  useEffect(() => {
    const cleanupListeners = () => {
      if (modelRef.current) {
        modelRef.current.removeEventListener("model-loaded", handleModelLoaded);
        modelRef.current.removeEventListener("model-error", handleModelError);
      }
    };

    const setupModel = () => {
      cleanupListeners();
      if (modelRef.current) {
        modelRef.current.addEventListener("model-loaded", handleModelLoaded);
        modelRef.current.addEventListener("model-error", handleModelError);
        loadModel();
      }
    };

    if (sceneRef.current) {
      if (sceneRef.current.hasLoaded) {
        setupModel();
      } else {
        sceneRef.current.addEventListener("loaded", setupModel);
      }
    }

    return cleanupListeners;
  }, [retryCount]);

  return (
    <div className="App" style={{ height: "100vh" }}>
      <a-scene ref={sceneRef}>
        <a-entity
          ref={modelRef}
          id="carModel"
          position="0 0 -5"
          scale="30 30 30"
          rotation="0 45 0"
        ></a-entity>

        <a-entity environment="preset: forest; dressingAmount: 10; skyColor: #88ccee;"></a-entity>

        <a-entity
          camera
          look-controls
          position="0 1.6 0"
          raycaster="objects: .clickable"
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

      {modelStatus !== "loaded" && (
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "rgba(0,0,0,0.7)",
            color: "white",
            padding: "20px",
            borderRadius: "10px",
            zIndex: 1001,
          }}
        >
          {modelStatus === "loading"
            ? `Loading model... Attempt ${retryCount + 1}`
            : modelStatus === "error"
            ? `Error loading model. Retrying...`
            : "Preparing to load model..."}
        </div>
      )}
    </div>
  );
}
