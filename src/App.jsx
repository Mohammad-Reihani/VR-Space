import { Button, Container, Typography, Box } from "@mui/material";
import bg1 from "./assets/bg1.png";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    // Disable scrolling
    document.body.style.overflow = "hidden";
    // Clean up by resetting the style on component unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  const handleVideoClick = () => {
    // Navigate to video page
    console.log("Video button clicked");
  };

  const handle3DEnvClick = () => {
    // Navigate to 3D environment page
    console.log("3D Environment button clicked");
  };

  return (
    <Container
      sx={{
        height: "100vh",
        width: "100vw", // Full width
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden", // Ensure no overflow
        padding: 0, // Remove padding for full coverage
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundImage: `url(${bg1})`, // Fixed background image
          backgroundSize: "cover",
          backgroundPosition: "center", // Center the image
          filter: "blur(8px)",
          zIndex: -1, // Behind content
        }}
      />
      {/* Overlay for better text visibility */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black overlay
          zIndex: 0, // Between background and content
        }}
      />
      {/* Main Content */}
      <Box textAlign="center" mb={4} zIndex={1}>
        <Typography variant="h4" gutterBottom sx={{ color: "white" }}>
          Welcome to the VR Experience
        </Typography>
        <Typography variant="body1" sx={{ color: "white" }}>
          Choose your adventure below
        </Typography>
      </Box>
      <Box>
        <Button
          variant="contained"
          onClick={handleVideoClick}
          sx={{
            margin: "10px",
            backgroundColor: "#1976d2",
            "&:hover": { backgroundColor: "#115293" },
          }}
        >
          Video
        </Button>
        <Button
          variant="contained"
          onClick={handle3DEnvClick}
          sx={{
            margin: "10px",
            backgroundColor: "#1976d2",
            "&:hover": { backgroundColor: "#115293" },
          }}
        >
          3D Environment
        </Button>
      </Box>
    </Container>
  );
};

export default App;

// import 'aframe';  // Import A-Frame
// import VideoScene from './components/VideoScene';

// function App() {
//   return (
//     // <div className="App">
//     //   <a-scene>
//     //     <a-box position="0 1.5 -5" rotation="0 45 0" color="blue"></a-box>
//     //     <a-sphere position="2 1.5 -5" radius="1" color="red"></a-sphere>
//     //     <a-plane position="0 0 -5" rotation="-90 0 0" width="10" height="10" color="#7BC8A4"></a-plane>
//     //     <a-sky color="#ECECEC"></a-sky>
//     //     <a-camera>
//     //       <a-cursor></a-cursor>
//     //     </a-camera>
//     //   </a-scene>
//     // </div>
//     <div>
//       <h1>360 Video Experience</h1>
//       <VideoScene />
//     </div>
//   );
// }

// export default App;
