/**
 * @type {import('eslint').Linter.Config}
 */
const config = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
    "plugin:storybook/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "import", "unused-imports"],
  rules: {
    "unused-imports/no-unused-imports": "error",
    // import 'jsx' is not required after react 17.0.0
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/react-in-jsx-scope.md
    "react/react-in-jsx-scope": "off",
    // incorrect: <tag></tag>
    // correct: <tag />
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/self-closing-comp.md
    "react/self-closing-comp": "error",
    // prop types are statically checked by TypeScript
    "react/prop-types": "off",
    "react/function-component-definition": [
      "error",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "import/order": [
      "error",
      {
        groups: [
          "builtin",
          "external",
          "parent",
          "sibling",
          "index",
          "object",
          "type",
        ],
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
        "newlines-between": "always",
      },
    ],
  },
  overrides: [
    {
      files: ["**/*.stories.*"],
      rules: {
        // default rule (made by storybook CLI)
        "import/no-anonymous-default-export": "off",
        // allow importing @storybook/testing-library
        "import/no-extraneous-dependencies": [
          "error",
          { devDependencies: true },
        ],
        // allow awaiting userEvent
        "@typescript-eslint/await-thenable": "off",
      },
    },
  ],
};
module.exports = config;
