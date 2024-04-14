import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "@svgr/rollup";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],

  // resolve: {
  //   alias: {
  //     // src: "/src",
  //     components: "./src/components",
  //   },
  // },

  // resolve: {
  //   alias: {
  //     components: "/components",
  //   },
  // },

  resolve: {
    alias: [
      // {
      //   find: "components",
      //   replacement: resolve(__dirname, "src/components/"),
      // },
      // {
      //   find: "assets",
      //   replacement: resolve(__dirname, "src/assets/"),
      // },
      // {
      //   find: "utils",
      //   replacement: resolve(__dirname, "src/assets/"),
      // },

      ...["components", "assets", "utils"].map(source => ({
        find: source,
        replacement: resolve(__dirname, `./src/${source}/`),
      })),
    ],
  },

  base: "/test-task-goit-vehicle",
});
