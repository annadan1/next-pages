module.exports = {
  env: {
    "browser": true,
    "es2021": true
  },
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "@next/eslint-plugin-next"],
  extends: [
    'eslint:recommended',
    'plugin:react-hooks/recommended',
    "next/core-web-vitals",
    "airbnb",
    "airbnb-typescript"
  ],
  ignorePatterns: ["/*.js", "cms"],
  parserOptions: {
    sourceType: "module",
    project: "./tsconfig.json"
  },
  rules: {
    "quotes": "off",
    "react/jsx-key": ["error", { "checkFragmentShorthand": true }],
    "no-console": ["warn", { "allow": ["warn", "error"] }],
    "@typescript-eslint/quotes": "error",
    "react/react-in-jsx-scope": "off",
    "react/function-component-definition": "off",
    "max-len": ["error", { "code": 100 }],
    "import/prefer-default-export": "off",
    "react/prop-types": "off",
    "react/require-default-props": "off",
    "react/jsx-props-no-spreading": "off",
    "linebreak-style": "off",
    "jsx-a11y/media-has-caption": "off",
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/label-has-associated-control": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/space-before-function-paren": ["error", "never"],
    "@typescript-eslint/strict-boolean-expressions": "off",
    "react-hooks/exhaustive-deps": "off"
  }
}
