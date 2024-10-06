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

    if (modelRef.current) {
      modelRef.current.addEventListener("model-loaded", handleModelLoaded);
      modelRef.current.addEventListener("model-error", handleModelError);
    }

    return () => {
      if (modelRef.current) {
        modelRef.current.removeEventListener("model-loaded", handleModelLoaded);
        modelRef.current.removeEventListener("model-error", handleModelError);
      }
    };
  }, []); // Empty dependency array, so this runs once on mount

  return (
    <a-entity
      ref={modelRef}
      gltf-model={modelSrc}
      position={position}
      scale={scale}
      rotation={rotation}
      shadow="cast: true; receive: true"
      animation-mixer
      draco-decoder="https://www.gstatic.com/draco/versioned/decoders/1.4.1/"
    ></a-entity>
  );
}
