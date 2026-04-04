// Run with: npx unlighthouse --site https://www.hart-industries.com
// Or locally: npx unlighthouse --site http://localhost:4173  (after npm run preview)
//
// Docs: https://unlighthouse.dev/guide/config
// import { defineUnlighthouseConfig } from "unlighthouse/config";

export default {
  // ── Target site ──────────────────────────────────────────────────────────
  site: "https://www.hart-industries.com",
  dynamicSampling: false,

  // ── Scanner ──────────────────────────────────────────────────────────────
  scanner: {
    // Explicitly list all routes so unlighthouse doesn't miss SPA pages
    // (crawling a React app without SSR often fails to discover routes).
    include: [
      "/",
      "/about",
      "/contact",
      "/catalogue",
      "/products/babyCare",
      "/products/basins",
      "/products/baskets",
      "/products/bowls",
      "/products/buckets",
      "/products/colandersAndPlates",
      "/products/coolers",
      "/products/drums",
      "/products/iceCreamContainers",
      "/products/jerryCans",
      "/products/kettles",
      "/products/mugsAndCups",
      "/products/racks",
      "/products/takeAwayContainers",
      "/products/hartTanks",
      "/products/libertyTanks",
      "/products/fishTanks",
      "/products/toys",
      "/products/others",
    ],

    // How many Lighthouse runs to average per page (higher = more accurate, slower)
    samples: 3,

    // Throttle concurrent scans to avoid hammering the server
    concurrency: 2,

    // Wait for the React app to fully hydrate before scoring
    // (important for SPA — avoids scoring the blank root div)
    waitForSelector: "#root > *",

    // Skip any redirects that lead away from the site
    skipJavascript: false,

    // Device to simulate — test mobile since Google uses mobile-first indexing
    device: "mobile",

    // Extra crawl delay (ms) between pages — be polite to GitHub Pages
    throttle: true,
  },

  // ── Lighthouse options ────────────────────────────────────────────────────
  lighthouseOptions: {
    // Categories to run — all four for a full picture
    onlyCategories: ["performance", "accessibility", "best-practices", "seo"],

    // Simulate a mid-range mobile device on 4G (Google's default for ranking)
    formFactor: "mobile",
    screenEmulation: {
      mobile: true,
      width: 412,
      height: 823,
      deviceScaleFactor: 1.75,
      disabled: false,
    },
    throttlingMethod: "simulate",
    throttling: {
      // Simulated 4G connection
      rttMs: 40,
      throughputKbps: 10240,
      cpuSlowdownMultiplier: 4,
    },
  },

  // ── Report output ─────────────────────────────────────────────────────────
  outputPath: ".unlighthouse",

  // ── CI thresholds ─────────────────────────────────────────────────────────
  // These fail the CI run if any page scores below the threshold.
  // Tighten these gradually as scores improve.
  ci: {
    budget: {
      performance: 70,
      accessibility: 90,
      "best-practices": 90,
      seo: 90,
    },
  },

  // ── UI & debug ────────────────────────────────────────────────────────────
  debug: false,

  // Open the report in the browser automatically after scanning
  // Set to false when running in CI
  // open: true,
};
