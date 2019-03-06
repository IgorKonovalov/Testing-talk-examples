module.exports = {
  extends: ['eslint:recommended', 'prettier'], // eslint configs we are based upon
  plugins: ['prettier'], // plugin to let eslint know that we are using prettier
  rules: {
    'prettier/prettier': [ // rules overriding prettier's defaults
      'error',
      {
        singleQuote: true, // use single quote in any strings
        trailingComma: 'all', // trailing comma in objects
      },
    ],
    eqeqeq: ['error', 'always'], // always use strict equal ===
  },
  env: {
    "node": true, // enviroment in which we are running our application, affects default global variables
    "es6": true
  }
};
