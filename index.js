module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  plugins: ["@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  env: {
    es6: true,
  },
  rules: {
    "no-throw-literal": "error",
    "no-return-await": "error",
    "no-use-before-define": "off", // uses "@typescript-eslint/no-use-before-define" instead
    "max-params": ["error", 4],
    yoda: ["error", "never"],
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/ban-ts-comment": [
      "error",
      {
        "ts-check": true,
        "ts-expect-error": false,
        "ts-ignore": true,
        "ts-nocheck": true,
      },
    ],
    "@typescript-eslint/no-unused-vars": ["warn", { ignoreRestSiblings: true }],
  },
};
