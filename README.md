# Testing-talk-examples
Examples for little testing intruduction workshop for students @epam
https://slides.com/ikonovalov/testing-students#/

Different steps covered by branches: 

 - eslint : basic eslint + prettier setup 
 - eslint_jest : eslint + jest setup and first test written
 - vue-test-example : example of vue component testing with vue-test-utils and jest

Add eslint:
```
npm i eslint eslint-plugin-prettier eslint-config-prettier prettier -D
```

Add eslint config to .eslintrc.js in the root directory:

```
module.exports = {
  extends: ['eslint:recommended', 'prettier'],
  plugins: ['prettier'],
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
    "node": true,
    "es6": true
  }
};
```
