import fs from "fs";
import path from "path";

// plugin
export function svgResolverPlugin() {
  return {
    //     resolveId(source, importer) {
    //       if (source.endsWith(".svg")) {
    //         console.log("importer: ", importer);
    //         console.log("source: ", source);
    //         console.log("result: ", path.resolve(path.dirname(importer), source));
    //         return path.resolve(path.dirname(importer), source);
    //       }
    //     },
    load(id) {
      if (id.endsWith(".svg")) {
        const referenceId = this.emitFile({
          type: "asset",
          name: path.basename(id),
          source: fs.readFileSync(id),
        });
        console.log("referenceId", referenceId);

        return `export default import.meta.ROLLUP_FILE_URL_${referenceId};`;
      }
    },
  };
}
