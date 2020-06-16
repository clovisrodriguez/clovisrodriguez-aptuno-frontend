module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
    document: false,
    escape: false,
    navigator: false,
    unescape: false,
    window: false,
    describe: true,
    before: true,
    it: true,
    expect: true,
    sinon: true,
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "import/order": "off",
    "no-console": 1,
    "no-case-declarations": 0,
    "no-nested-ternary": 0,
  },
  overrides: [{ files: ["*.test.js"], rules: { "no-undef": 0 } }],
};
