import { remark } from "remark";
import html from "remark-html";
import fs from "fs";

export function md2html(options) {
  return {
    //     load(source) {
    //       // 这里的 source 就是 import 的路径
    //       if (source.endsWith("md")) {
    //         console.log("source", source);
    //         const markdown = fs.readFileSync(source, "utf-8");
    //         console.log("markdown", markdown);

    //         return new Promise((resolve, reject) => {
    //           remark()
    //             .use(html, options)
    //             .process(markdown, (err, file) => {
    //               if (err) {
    //                 reject(err);
    //                 return;
    //               }
    //               resolve(`export default \`${String(file.value)}\``);
    //             });
    //         });
    //       }
    //     },

    transform(code, id) {
      if (id.endsWith("md")) {
        console.log("code------", code);
        return new Promise((resolve, reject) => {
          remark()
            .use(html, options)
            .process(code, (err, file) => {
              if (err) {
                reject(err);
                return;
              }
              resolve(`export default \`${String(file.value)}\``);
            });
        });
      }
    },
  };
}
