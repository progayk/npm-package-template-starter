import typescript from 'rollup-plugin-typescript2'
// import { terser } from "rollup-plugin-terser";
import commonjs from "@rollup/plugin-commonjs";
import { babel } from "@rollup/plugin-babel";

import * as path from "path";
import pkg from './package.json'

const moduleName = pkg.name.replace(/^@.*\//, "");
const author = pkg.author;
const banner = `
  /**
   * @license
   * author: ${author}
   * ${moduleName}.js v${pkg.version}
   * Released under the ${pkg.license} license.
   */
`;

export default {
    input: 'src/index.ts',
    output: [
        {
            file: pkg.main,
            format: 'cjs',
            banner,
        },
        {
            file: pkg.module,
            format: 'es',
        },
    ],
    external: [
        ...Object.keys(pkg.dependencies || {}),
        ...Object.keys(pkg.peerDependencies || {}),
    ],
    plugins: [
        typescript({
            typescript: require('typescript'),
        }),
        commonjs({
            extensions: [".js", ".ts"],
        }),
        babel({
            babelHelpers: "bundled",
            configFile: path.resolve(__dirname, "babel.config.js"),
        }),
    ],
}