import "aframe";

export default function Space() {
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
    </div>
  );
}
