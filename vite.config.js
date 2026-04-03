import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import imagePresets, { widthPreset } from "vite-plugin-image-presets";
import sitemap from "vite-plugin-sitemap";

// All product category slugs — keep in sync with categoryOptions in ProductPageLayout.jsx
const productRoutes = [
  "babyCare",
  "basins",
  "baskets",
  "bowls",
  "buckets",
  "colandersAndPlates",
  "coolers",
  "drums",
  "iceCreamContainers",
  "jerryCans",
  "kettles",
  "mugsAndCups",
  "racks",
  "takeAwayContainers",
  "hartTanks",
  "libertyTanks",
  "fishTanks",
  "toys",
  "others",
].map((slug) => `/products/${slug}`);

// https://vite.dev/config/
export default defineConfig({
  resolve: { alias: { "@": "/src" } },
  plugins: [
    react(),
    // sitemapPlugin({ hostname: "https://www.hart-industries.com" }),
    sitemap({
      hostname: "https://www.hart-industries.com",
      dynamicRoutes: ["/about", "/contact", "/catalogue", ...productRoutes],
    }),
    imagePresets({
      hero: widthPreset({
        widths: [1920, 1280, 768],
        formats: {
          webp: { quality: 75 },
          avif: { quality: 50 },
        },
      }),

      productGroup: widthPreset({
        widths: [800, 500, 300],
        formats: {
          webp: { quality: 80 },
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
        },
      }),
    }),
  ],
  build: {
    outDir: "dist",
    assetsDir: "assets",
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          router: ["react-router-dom"],
          ui: ["bootstrap", "react-bootstrap", "styled-components"],
        },
      },
    },
  },
  base: "/",
});
