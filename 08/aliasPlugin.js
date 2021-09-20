import path from "path";

// plugin
export function aliasPlugin(options) {
  return {
    resolveId(source, importer) {
      if (source.startsWith("@/")) {
        const rootPath = options["@/"];
        console.log("rootPath", rootPath);
        const restPath = source.slice(2);

        console.log("result", path.resolve(rootPath, restPath));

        return path.resolve(rootPath, restPath);
      }
    },
  };
}
