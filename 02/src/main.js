import foo from "./foo.js";
import packageJSON from "../package.json";
export default function () {
  console.log(foo);
  //默认是解析不了 json 文件的, 只理解 js
  console.log(packageJSON);
}
