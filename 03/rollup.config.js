// rollup.config.js
import json from "@rollup/plugin-json";
import { terser } from "rollup-plugin-terser";

export default {
  input: "src/main.js",
  output: [
    {
      file: "dist/bundle.js",
      format: "cjs",
    },
    {
      file: "dist/bundle.min.js",
      format: "iife",
      name: "version",
      // 可以在对应的 output 中指定使用的 plugin
      // 使用 terser 压缩代码
      plugins: [terser()],
    },
  ],
  plugins: [json()],
};
