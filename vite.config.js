import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import imagePresets, { widthPreset } from "vite-plugin-image-presets";

// https://vite.dev/config/
export default defineConfig({
  resolve: { alias: { "@": "/src" } },
  plugins: [
    react(),
    imagePresets({
      // 👇 must match ?preset=hero
      hero: widthPreset({
        widths: [1920, 1280, 768],
        formats: {
          webp: { quality: 75 },
          avif: { quality: 50 },
        },
      }),

      // 👇 must match ?preset=productGroup
      productGroup: widthPreset({
        widths: [800, 500, 300],
        formats: {
          webp: { quality: 80 },
          // avif: { quality: 50 },
        },
      }),

      banner: widthPreset({
        widths: [1920, 1280, 768],
        formats: {
          avif: { quality: 60 },
          webp: { quality: 70 },
          png: { quality: 80 },
          // avif: { quality: 50 },
        },
      }),

      group: widthPreset({
        widths: [800, 400],
        formats: {
          avif: { quality: 60 },
          webp: { quality: 70 },
          png: { quality: 80 },
          // avif: { quality: 50 },
        },
      }),
    }),
  ],
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
  base: "/",
});
