# Testing-talk-examples
Examples for little testing intruduction workshop for students @epam

I'm using cli-service-global for rapid prototyping, see https://cli.vuejs.org/guide/prototyping.html for details

added eslint rules for vue with eslint-plugin-vue

vue-test-utils installation

vue-jest is needed to let jest understand that it needs to parse .vue files
see https://vue-test-utils.vuejs.org/ru/guides/testing-single-file-components-with-jest.html for details

```
npm i -D vue-test-utils vue-jest
```

babel-jest is needed for imports to work

```
npm i -D babel-core babel-jest babel-preset-env
```

Vue is needed as dependency for vue-test-utils to work

```
npm i -D vue vue-template-compiler
```