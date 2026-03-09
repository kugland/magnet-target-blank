import { defineConfig } from "vite";
import monkey from "vite-plugin-monkey";
import packageJson from "./package.json" with { type: "json" };

let {
  author,
  description,
  homepage,
  license,
  version,
  userscriptExtra: {
    grant,
    match,
    namespace,
  },
} = packageJson;

export default defineConfig({
  plugins: [
    monkey({
      entry: "src/main.ts",
      userscript: {
        author,
        description,
        homepage,
        license,
        version,
        // @ts-ignore
        grant,
        match,
        namespace,
      },
    }),
  ],
});
