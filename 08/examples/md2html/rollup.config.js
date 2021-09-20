import { md2html } from "../../dist/bundle";

export default {
  input: "./src/index.js",
  output: {
    file: "dist/bundle.js",
    format: "esm",
  },
  plugins: [
    md2html({
      closeSelfClosing: true,
    }),
  ],
};
