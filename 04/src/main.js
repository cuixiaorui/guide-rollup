function main() {
  import("./foo.js").then(({ default: foo }) => console.log(foo));
}

main();
