module.exports = {
  parser: "babel-eslint",

  env: {
    browser: true,
    es6: true
  },

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },

  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:jsx-a11y/recommended"
  ],

  plugins: ["react", "react-hooks"],

  settings: {
    react: {
      version: "detect"
    }
  },

  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn"
  }
};
