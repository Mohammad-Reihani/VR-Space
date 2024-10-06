/*eslint-disable*/
import React, { useEffect, useRef } from "react";

export default function GltfModelViewer({
  modelSrc,
  position = "0 0 -5",
  scale = "1 1 1",
  rotation = "0 0 0",
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
  }, []);

  return (
    <a-entity
      ref={modelRef}
      gltf-model={modelSrc}
      position={position}
      scale={scale}
      rotation={rotation}
      shadow="cast: true; receive: true"
    ></a-entity>
  );
}