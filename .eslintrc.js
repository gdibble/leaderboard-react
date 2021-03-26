module.exports = {
  "env": {
    "amd": true,
    "es6": true,
    "node": true,
  },
  'extends': [
    "eslint:recommended",
  ],
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly",
  },
  "parserOptions": {
    "ecmaFeatures": {
      "impliedStrict": true,
    },
    "ecmaVersion": 11,
    "sourceType": "module",
  },
}
