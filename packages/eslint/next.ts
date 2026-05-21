import nextPlugin from "@next/eslint-plugin-next";
import { defineConfig } from "eslint/config";

export default defineConfig([
  nextPlugin.configs.recommended,
  nextPlugin.configs["core-web-vitals"],
]);
