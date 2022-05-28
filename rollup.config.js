import { terser } from "rollup-plugin-terser";
import pkg from "./package.json";

const INPUT_FILE_PATH = "index.js";
const OUTPUT_NAME = "path";

const OUTPUT_DATA = [
  {
    file: pkg.main,
    format: "umd",
  },
  {
    file: pkg.module,
    format: "es",
  },
];

const PLUGINS = [terser()];

const config = OUTPUT_DATA.map(({ file, format }) => ({
  input: INPUT_FILE_PATH,
  output: {
    file,
    format,
    name: OUTPUT_NAME,
    indent: false,
    extend: true,
  },
  plugins: PLUGINS,
}));

export default config;
