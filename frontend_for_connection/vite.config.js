import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": "http://localhost:3000", // Fix: Add colon between 'localhost' and '3000'
    },
  },
  plugins: [react()],
});
