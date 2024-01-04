module.exports = {
  extends: ["universe/native", "universe/shared/typescript-analysis"],
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.d.ts"],
      parserOptions: {
        project: "./tsconfig.json",
      },
    },
  ],
  rules: {
    "no-unused-vars": 0,
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
      },
    ],
    "max-len": [
      "error",
      {
        code: 100,
        ignoreUrls: true,
        tabWidth: 2,
        ignoreTrailingComments: true,
        ignoreComments: true,
      },
    ],
    "no-trailing-spaces": [
      "error",
      {
        skipBlankLines: false,
      },
    ],
    "no-multiple-empty-lines": [
      "error",
      {
        max: 1,
      },
    ],
    semi: ["error", "never"],
    // "no-extra-semi": "error",
    "no-console": "warn",
    "no-empty": [
      "error",
      {
        allowEmptyCatch: true,
      },
    ],
    "prefer-object-spread": "error",
    "space-in-parens": ["error", "never"],
    "arrow-spacing": [
      "error",
      {
        before: true,
        after: true,
      },
    ],
    "dot-notation": "error",
    indent: ["error", 2],
    "space-unary-ops": "error",
    "padded-blocks": ["error", "never"],
    "prefer-rest-params": "off",
    "newline-per-chained-call": ["error", { ignoreChainWithDepth: 10 }],
  },
}
