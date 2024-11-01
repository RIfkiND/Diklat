import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

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
      vue: "vue/dist/vue.esm-bundler.js",
      "@": path.resolve(__dirname, "resources/js/Pages"),
      "~": path.resolve(__dirname, "resources/js"),
    },
  },
});
