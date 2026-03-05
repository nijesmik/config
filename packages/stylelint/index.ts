import type { Config } from "stylelint";

export default {
  extends: ["stylelint-config-standard", "stylelint-config-tailwindcss"],
  plugins: ["@stylistic/stylelint-plugin"],
  rules: {
    // @import url() vs @import "" 방식 제한 해제
    "import-notation": null,

    // 파일 끝에 빈 줄 필수
    "@stylistic/no-missing-end-of-source-newline": true,

    // 연속 빈 줄 최대 1개
    "@stylistic/max-empty-lines": 1,

    // 들여쓰기 2칸
    "@stylistic/indentation": 2,
  },
} satisfies Config;
