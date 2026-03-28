import type { Config } from "stylelint";

export default {
  extends: ["stylelint-config-standard", "stylelint-config-tailwindcss"],
  plugins: ["@stylistic/stylelint-plugin"],
  rules: {
    // @import "" 방식만 허용
    "import-notation": "string",

    // @규칙 앞에 빈 줄 필수 (예외: 같은 이름 연속, 첫 번째 중첩, 주석 뒤, else/import)
    "at-rule-empty-line-before": [
      "always",
      {
        except: ["blockless-after-same-name-blockless", "first-nested"],
        ignore: ["after-comment"],
        ignoreAtRules: ["else", "import"],
      },
    ],

    // 주석 앞 빈 줄 제한 해제
    "comment-empty-line-before": null,

    // 파일 끝에 빈 줄 필수
    "@stylistic/no-missing-end-of-source-newline": true,

    // 연속 빈 줄 최대 1개
    "@stylistic/max-empty-lines": 1,

    // 들여쓰기 2칸
    "@stylistic/indentation": 2,
  },
} satisfies Config;
