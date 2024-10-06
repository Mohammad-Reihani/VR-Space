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
    const loadModel = () => {
      if (modelRef.current) {
        const newSrc = `${modelSrc}?v=${Date.now()}`;
        modelRef.current.setAttribute("gltf-model", newSrc);
      }
    };

    const handleModelLoaded = (event) => {
      console.log("Model loaded successfully", event);
    };

    const handleModelError = (error) => {
      console.error("Model failed to load:", error);
    };

    if (modelRef.current) {
      modelRef.current.addEventListener("model-loaded", handleModelLoaded);
      modelRef.current.addEventListener("model-error", handleModelError);
      loadModel();
    }

    return () => {
      if (modelRef.current) {
        modelRef.current.removeEventListener("model-loaded", handleModelLoaded);
        modelRef.current.removeEventListener("model-error", handleModelError);
      }
    };
  }, [modelSrc]);

  return (
    <a-entity
      ref={modelRef}
      position={position}
      scale={scale}
      rotation={rotation}
    ></a-entity>
  );
}