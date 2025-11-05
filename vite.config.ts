import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: mode === "production" ? "0.0.0.0" : "localhost",
    port: 8080,
    strictPort: false,
    open: false,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    sourcemap: mode !== "production",
    minify: mode === "production" ? "esbuild" : false,
    chunkSizeWarningLimit: 1000,
  },
}));
