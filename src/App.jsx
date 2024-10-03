import { useState } from "react"; // Import useState

import Space from "./components/env/Space";
import VideoScene from "./components/video/VideoScene";
import Landing from "./Landing";

const App = () => {
  const [view, setView] = useState("landing"); // Default view is landing

  const handleVideoClick = () => {
    setView("video");
  };

  const handle3DEnvClick = () => {
    setView("3D");
  };

  const handleBackClick = () => {
    setView("landing");
  };

  switch (view) {
    case "3D":
      return <Space onBackClick={handleBackClick} />;

    case "video":
      return <VideoScene onBackClick={handleBackClick} />;

    case "landing":
      return (
        <Landing
          handleVideoClick={handleVideoClick}
          handle3DEnvClick={handle3DEnvClick}
        />
      );

    default:
      return (
        <div>
          <h1>What da hucking hell are you doing here! get out!</h1>
        </div>
      );
  }
};

export default App;
