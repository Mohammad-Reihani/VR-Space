import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Get the current directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Allows access from other devices on the local network
    port: 5173, // You can specify the port you want here
    https: {
      key: fs.readFileSync(path.resolve(__dirname, "key.pem")),
      cert: fs.readFileSync(path.resolve(__dirname, "cert.pem")),
    },
  },
  assetsInclude: [
    "**/*.obj",
    "**/*.mtl",
    "**/*.png",
    "**/*.jpg",
    "**/*.jpeg",
    "**/*.glb",
    "**/*.gltf",
  ],
});
