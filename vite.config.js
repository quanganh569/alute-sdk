import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), cssInjectedByJsPlugin()],
  build: {
    cssCodeSplit: false,
    rollupOptions: {
      input: {
        app: "./src/index.jsx",
      },
    },
  },
  // base: "https://cdn.jsdelivr.net/gh/tony19-sandbox/vite-react-single-js-file/dist/",
});
