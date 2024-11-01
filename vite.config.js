import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";
import path from "path"; // Import path here

export default defineConfig({
  plugins: [
    laravel({
      input: "resources/js/app.jsx",
      ssr: "resources/js/ssr.jsx",
      refresh: true,
    }),
    react(),
  ],
  resolve: {
    alias: {
      "@pages": path.resolve(__dirname, "resources/js/Pages"),
      "@components": path.resolve(__dirname, "resources/js/Components"),
      "~": path.resolve(__dirname, "resources/js"),
    },
  },
});
