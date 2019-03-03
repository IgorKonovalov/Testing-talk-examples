module.exports = {
  extends: ['eslint:recommended', 'prettier', 'plugin:vue/recommended'],
  plugins: ['prettier', 'eslint-plugin-vue'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true, 
        trailingComma: 'all',
      },
    ],
    eqeqeq: ['error', 'always'],
  },
  env: {
    "es6": true,
    "node": true,
    "jest": true
  },
};