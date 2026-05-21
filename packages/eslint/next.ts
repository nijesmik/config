import nextPlugin from "@next/eslint-plugin-next";
import { defineConfig } from "eslint/config";

import base from "./index.js";

export default defineConfig([
  ...base,
  nextPlugin.configs.recommended,
  nextPlugin.configs["core-web-vitals"],
]);
