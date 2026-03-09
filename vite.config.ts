import { defineConfig } from 'vite';
import monkey from 'vite-plugin-monkey';
import packageJson from './package.json';

let { author, description, homepage, license, version } = packageJson;

export default defineConfig({
  plugins: [
    monkey({
      entry: 'src/main.ts',
      userscript: {
        author,
        description,
        homepage,
        license,
        version,
        namespace: 'github.com/kugland/magnet-target-blank',
        match: ['*://*/*'],
        grant: 'none',
      },
    }),
  ],
});
