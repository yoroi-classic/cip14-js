import eslint from "@eslint/js";
import jest from "eslint-plugin-jest";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
  {
    ignores: ["dist/**", "node_modules/**"],
  },
  {
    files: ["**/*.ts"],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommendedTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.typecheck.json", "./tsconfig.test.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      globals: {
        ...globals.node,
      },
    },
    rules: {
      "no-use-before-define": "off",
      "@typescript-eslint/no-use-before-define": "off",
    },
  },
  {
    files: ["tests/**/*.{test,spec}.ts"],
    ...jest.configs["flat/recommended"],
    languageOptions: {
      ...jest.configs["flat/recommended"].languageOptions,
      globals: {
        ...globals.node,
        ...globals.jest,
      },
    },
  },
  {
    files: ["**/*.js"],
    extends: [eslint.configs.recommended],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
);
