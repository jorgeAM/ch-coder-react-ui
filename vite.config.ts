import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/main.ts"),
      name: "ch-coder-react-ui",
      formats: ["es", "umd"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "styled-components"],
    },
  },
});
