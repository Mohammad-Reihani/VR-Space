import "aframe";
// import videoSrc_01 from "../../assets/test360_01.mp4";
import videoSrc_02 from "../../assets/test360_02.mp4";
// import videoSrc_02 from "../../assets/videos/test360_03.mp4";

export default function VideoScene({ onBackClick }) { //eslint-disable-line
  return (
    <div className="App">
      <a-scene>
        {/* <a-videosphere src={`url(${videoSrc_01})`} /> */}
        <a-videosphere src={`url(${videoSrc_02})`} />
        <a-entity camera look-controls position="0 1.6 0" />
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
          zIndex: 1, // Ensure it's above the video
        }}
      >
        Back
      </button>
    </div>
  );
}
