import "aframe";

export default function Space({ onBackClick }) { //eslint-disable-line
  return (
    <div className="App">
      <a-scene>
        <a-box position="0 1.5 -5" rotation="0 45 0" color="blue"></a-box>
        <a-sphere position="2 1.5 -5" radius="1" color="red"></a-sphere>
        <a-plane
          position="0 0 -5"
          rotation="-90 0 0"
          width="10"
          height="10"
          color="#7BC8A4"
        ></a-plane>
        <a-sky color="#ECECEC"></a-sky>
        <a-camera>
          <a-cursor></a-cursor>
        </a-camera>
      </a-scene>
      {/* Back Button */}
      <button
        onClick={onBackClick} // Call the passed back function
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
          zIndex: 1, // Ensure it's above the 3D scene
        }}
      >
        Back
      </button>
    </div>
  );
}
