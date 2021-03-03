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
    "no-return-await": "error",
    "no-use-before-define": "off", // uses "@typescript-eslint/no-use-before-define" instead
    yoda: ["error", "never"],
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": ["warn", { ignoreRestSiblings: true }],
  },
};
