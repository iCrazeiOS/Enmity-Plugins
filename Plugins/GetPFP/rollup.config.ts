import { defineConfig, Plugin } from "rollup";
import esbuild from "rollup-plugin-esbuild";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

import { basename } from "path";
import { writeFileSync } from "fs";

const pluginName = basename(process.cwd());

export default defineConfig({
  input: "src/index.ts",
  output: [
    {
      file: `dist/${pluginName}.js`,
      format: "cjs",
      strict: false
    },
  ],
  plugins: [
    nodeResolve(),
    commonjs(),
    esbuild({ minify: true, target: "ES2019" }),
    createPluginJson(),
  ],
  onwarn(warning, warn) {
    if (warning.code === pluginName) return
    warn(warning)
  }
});

function createPluginJson(options = {}): Plugin {
  return {
    name: 'plugin-info',
    writeBundle: (err) => {
      const info = require('./package.json');
      const data = {
        "name": pluginName,
        "description": info?.description ?? "No description was provided.",
        "author": info?.author?.name ?? "Unknown",
        "version": info?.version ?? "1.0.0"
      };

      writeFileSync(`dist/${pluginName}.json`, JSON.stringify(data, null, "\t"));
    }
  }
};
