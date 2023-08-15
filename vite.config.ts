import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/lib",
      name: "ch-coder-react-ui",
      formats: ["es", "umd"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "styled-components"],
    },
  },
});
