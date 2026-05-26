import nextPlugin from "@next/eslint-plugin-next";
import jsxA11y from "eslint-plugin-jsx-a11y";
import reactHooks from "eslint-plugin-react-hooks";
import { defineConfig } from "eslint/config";

import base from "./index.js";

export default defineConfig([
  ...base,
  // Following eslint-config-next/typescript
  { ignores: [".next/**", "out/**", "build/**", "next-env.d.ts"] },
  nextPlugin.configs["core-web-vitals"],
  reactHooks.configs.flat["recommended-latest"],
  jsxA11y.flatConfigs.recommended,
  {
    rules: {
      "react-hooks/exhaustive-deps": "off",
      "jsx-a11y/alt-text": ["warn", { elements: ["img"], img: ["Image"] }],
    },
    settings: {
      "import/resolver": {
        typescript: true,
      },
    },
  },
]);
