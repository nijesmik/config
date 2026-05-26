import nextPlugin from "@next/eslint-plugin-next";
import { defineConfig } from "eslint/config";

import base from "./index.js";

export default defineConfig([
  ...base,
  // Following eslint-config-next/typescript
  { ignores: [".next/**", "out/**", "build/**", "next-env.d.ts"] },
  nextPlugin.configs["core-web-vitals"],
]);
