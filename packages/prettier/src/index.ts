import type { Config } from "prettier";
import * as tailwindcss from "prettier-plugin-tailwindcss";

export default {
  arrowParens: "always",
  bracketSameLine: false,
  bracketSpacing: true,
  endOfLine: "lf",
  jsxSingleQuote: false,
  printWidth: 100,
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "all",
  useTabs: false,

  plugins: [tailwindcss],
  tailwindAttributes: ["className", "classNames"],
  tailwindFunctions: ["cn", "tv"],
} satisfies Config;
