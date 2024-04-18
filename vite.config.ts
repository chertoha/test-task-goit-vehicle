import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "@svgr/rollup";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],

  resolve: {
    alias: [
      ...[
        "pages",
        "config",
        "services",
        "components",
        "assets",
        "utils",
        "hooks",
      ].map(source => ({
        find: source,
        replacement: resolve(__dirname, `./src/${source}/`),
      })),
    ],
  },

  base: "/test-task-goit-vehicle",
});
