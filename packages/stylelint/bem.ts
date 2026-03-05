import type { Config } from "stylelint";

export default {
  rules: {
    // BEM 패턴 (예: .button--sm, .button__icon)
    "selector-class-pattern": [
      "^[a-z][a-z0-9]*(-[a-z0-9]+)*(__[a-z0-9]+(-[a-z0-9]+)*)?(--[a-z0-9]+(-[a-z0-9]+)*)?$",
      { message: "Expected class selector to be BEM pattern (block__element--modifier)" },
    ],
  },
} satisfies Config;
