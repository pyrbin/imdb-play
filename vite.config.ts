import { resolve } from "path";
import { defineConfig } from "vite";
import { chromeExtension } from "vite-plugin-chrome-extension";
import preact from '@preact/preset-vite'

export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  build: {
    rollupOptions: {
      input: "src/manifest.json",
    },
  },
  plugins: [preact(), chromeExtension()],
});
