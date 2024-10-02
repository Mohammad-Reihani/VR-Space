import "aframe";
import videoSrc from "../assets/test360.mp4";

const VideoScene = () => {
  return (
    <a-scene>
      <a-videosphere src={`url(${videoSrc})`} autoplay loop />
      <a-entity camera look-controls position="0 1.6 0" />
    </a-scene>
  );
};

export default VideoScene;
