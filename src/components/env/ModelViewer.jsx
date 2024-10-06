/* eslint-disable */
import React, { useEffect, useRef } from "react";

export default function ModelViewer({
  modelSrc,
  position = "0 0 -5",
  scale = "1 1 1",
  rotation = "0 45 0",
}) {
  const modelRef = useRef(null);

  useEffect(() => {
    const handleModelLoaded = (event) => {
      console.log("Model loaded successfully", event);
    };

    const handleModelError = (error) => {
      console.error("Model failed to load:", error);
    };

    // Function to load the model
    const loadModel = () => {
      if (modelRef.current) {
        modelRef.current.setAttribute("gltf-model", modelSrc);
      }
    };

    if (modelRef.current) {
      modelRef.current.addEventListener("model-loaded", handleModelLoaded);
      modelRef.current.addEventListener("model-error", handleModelError);
      loadModel(); // Load the model when the component mounts or modelSrc changes
    }

    return () => {
      if (modelRef.current) {
        modelRef.current.removeEventListener("model-loaded", handleModelLoaded);
        modelRef.current.removeEventListener("model-error", handleModelError);
      }
    };
  }, [modelSrc]); // Only rerun this effect when modelSrc changes

  return (
    <a-entity
      ref={modelRef}
      position={position}
      scale={scale}
      rotation={rotation}
    ></a-entity>
  );
}
