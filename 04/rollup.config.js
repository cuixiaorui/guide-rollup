export default {
  // input:"src/main.js",
  // 多入口的方式
  input: {
    main: "src/main.js",
    main2: "src/main2.js",
  },
  output: {
    dir: "dist",
    format: "esm",
  },
};
