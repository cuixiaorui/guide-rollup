import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
export default {
  input: "src/main.js",
  output: {
    file: "dist/bundle.js",
    format: "cjs",
  },
  plugins: [resolve(), commonjs()],
  // 使用 external 告诉 rollup 什么模块不打包进到 bundle 内
  external: ["lodash"],
};
