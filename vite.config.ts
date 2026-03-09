import { defineConfig } from "vite";
import monkey from "vite-plugin-monkey";
import packageJson from "./package.json" with { type: "json" };
import { MonkeyUserScript } from "vite-plugin-monkey";

let {
  author,
  description,
  homepage,
  license,
  version,
  userscriptExtra,
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
        ...userscriptExtra,
      } as MonkeyUserScript,
    }),
  ],
});
