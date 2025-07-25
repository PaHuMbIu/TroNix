import js from "@eslint/js";
import ts from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import prettier from "eslint-plugin-prettier/recommended";

export default ts.config(
  js.configs.recommended,
  ts.configs.strict,
  reactHooks.configs["recommended-latest"],
  reactRefresh.configs.vite,
  prettier,
  {
    rules: {
      "react-refresh/only-export-components": ["off"],
      "react-hooks/exhaustive-deps": ["off"],
    },
  },
);
