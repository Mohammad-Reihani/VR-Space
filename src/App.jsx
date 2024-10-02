import { useState } from "react"; // Import useState
import { Button, Container, Typography, Box } from "@mui/material";
import bg1 from "./assets/bg1.png";
import Space from "./components/env/Space";
import VideoScene from "./components/video/VideoScene";

const App = () => {
  // State to manage which component to show
  const [view, setView] = useState("landing"); // Default view is landing

  const handleVideoClick = () => {
    // Show video component
    setView("video");
  };

  const handle3DEnvClick = () => {
    // Show 3D Environment
    setView("3D");
  };

  const handleBackClick = () => {
    // Back to landing page
    setView("landing");
  };

  // Conditional rendering based on the current view
  if (view === "3D") {
    return <Space onBackClick={handleBackClick} />; // Pass the back handler
  }

  if (view === "video") {
    return <VideoScene onBackClick={handleBackClick} />; // Pass the back handler
  }

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
