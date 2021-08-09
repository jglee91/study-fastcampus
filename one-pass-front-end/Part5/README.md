# Part 5. TypeScript Essentials

## CH 1. TypeScript

### 01. TypeScript 란 무엇인가

- Typed JavaScript at any Scale
  - TypeScript extends JavaScript by adding types.
  - By understanding JavaScript, TypeScript saves you time catching errors and providing fixes before you run code.
  - Any browser, any OS, anywhere JavaScript runs.
  - Entirely Open Source.
- Typed Superset of JavaScript
- Compile (or Transpile) to `plain` JavaScript

### 02. TypeScript 설치 및 사용

- 실행환경: node.js, browser
- typescript 설치

  ```bash
  $ npm i typescript -g  # node_modules/.bin/tsc
  $ tsc ${source.ts}  # js 파일로 변환됨

  $ tsc --init  # tsconfig.json 파일이 생성됨
  $ tsc -w  # watch 옵션, 파일 수정시마다 transpiling
  ```

### 03. VS Code 설치 및 설정

- VS Code
  - TypeScript Compiler가 내장되어 있음
  - 내장 컴파일러 혹은 직접 설치한 컴파일러를 선택할 수 있음
  ```bash
  $ npm i typescript -D  # typescript 버전을 지정해서 설치할 수 있음
  ```

### 04. Fitst Type Annotation

```ts
let a = 'Mark';
a = 39; // a의 type이 string으로 지정됬으므로, 해당 라인에서 에러 발생

let b: string;
b = 'Mark'; // correct
b = 39; // error!

function hello(c: number) {}
hello('Mark'); // error!
```
