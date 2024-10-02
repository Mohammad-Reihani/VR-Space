import { Button, Container, Typography, Box } from "@mui/material";
import bg1 from "./assets/bg1.png";

export default function Landing({handleVideoClick, handle3DEnvClick}) { //eslint-disable-line
  return (
    <Container
      sx={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        padding: 0,
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
          backgroundImage: `url(${bg1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(8px)",
          zIndex: -1,
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
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 0,
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
  )
}
