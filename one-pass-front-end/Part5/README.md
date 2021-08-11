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

---

## CH 2. Basic Types

### 01. TypeScript Types vs JavaScript Types

- TypeScript - `Static Types` (set during development)
- JavaScript - `Dynamic Types` (resolved at runtime)

  ```js
  // JavaScript
  function add(n1, n2) {
    if (typeof n1 !== 'number' || typeof n2 != 'number') {
      throw new Error('Incorrect input!');
    }
    return n1 + n2;
  }
  const result = add(39, 28);

  // TypeScript
  function add(n1: number, n2: number) {
    return n1 + n2;
  }
  const result = add(39, 28);
  ```

- ECMAScript 표준에 따른 기본 자료형
  - Boolean
  - Number
  - String
  - Null
  - Undefined
  - Symbol (ECMAScript 6에 추가)
  - Array : object 형
- TypeScript에 아래 타입이 추가적으로 제공
  - Any, Void, Never, Unknown
  - Enum
  - Tuple : object 형

### 02. Primitive Types

- Primitive Type

  - 오브젝트와 레퍼런스 형태가 아닌 실제 값을 저장하는 자료형
  - Primitive 형의 내장 함수를 사용 가능한 것은 자바스크립트 처리 방식 덕분
  - literal 값으로 Primitive 타입의 서브 타입을 나타낼 수 있음
  - 또는 wrapper 객체로 만들 수 있음

- JavaScript `Literal` vs `Primitive` vs `Object`

  > https://www.dotnetforall.com/learning-javascript-object-primitive-literal/

  ```ts
  console.log(typeof 'string'); // "string"
  console.log(typeof String('string')); // "string"
  console.log(typeof new String('string')); // "object"

  console.log(typeof 123); // "number"
  console.log(typeof Number(123)); // "number"
  console.log(typeof new Number(123)); // "object"
  ```

- Type Casing

  - TypeScript의 핵심 primitive type은 `모두 소문자`
  - JavaScript 타입(Number, String, Boolean, Symbol, Object)은 언어 primitive를 나타내지 않으며, 타입으로 사용하면 안됨
    <br/>
    <br/>

  ```ts
  // incorrect!
  function reverse(s: String): String {
    return s.split('').reverse().join('');
  }
  reverse('hello world');

  // follow below
  function reverse(s: string): string {
    return s.split('').reverse().join('');
  }
  reverse('hello world');
  ```

### 03. boolean

```bash
$ npm i typescript -D
$ npx tsc --init  ## tsconfig.json 파일 생성

$ npx tsc
```

```ts
let isOk: Boolean = true; // Primitive Type에 literal 대입은 문제 없음
let isNotOk: boolean = new Boolean(true); // literal 타입에 Wrapper Object 대입시 에러 발생
```

### 04. number

- JavaScript와 같이, TypeScript의 모든 숫자는 부동 소수점
- TypeScript는 16진수 및 10진수 literal 외 ECMAScript 2015에 도입된 2진수 및 8진수 지원

### 05. string

- Template String

```ts
let sentence: string = 'Hello, my name is ' + fullName + '.\n\nabc';

let sentenceWithTemplate: string = `Hello, my name is ${fullName}.

abc`;
```

### 06. symbol

- ECMAScript 2015에 추가된 Symbol
- new 키워드와 함께 사용 불가능
- Symbol 함수를 사용하여 symbol 타입 생성 가능
- tsc --init 기본 설정시 typescript compiler가 에러를 발생시키므로, 아래와 같이 설정 필요
  ```json
  // tsconfig.json
  {
    "lib": ["ES2015", "DOM"]
  }
  ```
- primitive 타입의 값을 담아서 사용
- 고유하고 수정불가능한 값으로 만들어줌(주로 접근 제어시 많이 사용)
  ```ts
  const sym = Symbol();
  const obj = {
    [sym]: 'value',
  };
  console.log(obj[sym]); // "value"
  ```

### 07. null & undefined

- 실제로 각각 undefined 및 null 이라는 타입을 가짐
- void와 마찬가지로 그 자체로는 유용하지 않음
- 모든 다른 타입에 대한 서브타입으로 존재함
  - tsconfig 옵션에서 `--strictNullChecks`를 사용하면, null|undefined는 void나 자기 자신들에게만 할당 가능해짐
  - null|undfined를 할당할 수 있게 하려면 union type을 사용해야함
- null in JavaScript
  - null이라는 타입은 null값만 가질 수 있음
  - typeof 연산자를 통해 조회하면 `object`로 표기됨
- undefined in JavaScript
  - object의 property가 없을 때도 undefined
  - typeof 연산자를 통해 조회하면 `undefined`로 표기됨

### 08. object

- `primitive type이 아닌 것`을 나타내고 싶을 때 사용하는 타입
- non-primitive type: `not` number, string, boolean, bigint, symbol, null, undefined

```ts
// create by object literal
const person1 = { name: 'Mark', age: 39 };

// person1 is not "object" type
// person1 is "{name: string, age: number}" type

// create by Object.create
const person2 = Object.create({ name: 'Mark', age: 39 });

let obj: object = {};
obj = { name: 'Mark' };
obj = [{ name: 'Mark' }];
obj = 39; // error!
obj = 'Mark'; // error!
obj = true; // error!
obj = 100n; // error!
obj = Symbol(); // error!
obj = null; // error!
obj = undefined; // error!
```

### 09. Array

- 원래 JavaScript에서 **array**는 객체

### 10. Tuple

### 11. any

- 어떤 타입이어도 상관없는 타입
- 이걸 최대한 쓰지 않는 것이 핵심(any를 난무하면 TypeScript를 쓰는 이유가 사라짐)
- any는 계속해서 객체를 통해 전파됨
  ```ts
  let looselyTyped: any = {};
  let d = looselyTyped.a.b.c.d;
  //  ^ = let d: any
  ```

### 12. unknown

- 동적 API 컨텐츠와 같이 모르는 변수 타입을 묘사할 때 사용
- any의 타입 안정성을 위해 나온 타입
- Typescript v3.0부터 지원
- any보다 Type-safe한 타입
  - any와 같이 아무거나 할당 가능
  - 컴파일러가 타입 추론을 가능하게끔 타입 유형을 좁히거나,
  - 타입을 확정해주지 않으면 다른 곳에 할당할 수 없고, 사용도 불가능
  - Type Guard
- unknown 타입을 사용하면 runtime error를 줄일 수 있음

### 13. never

- never 타입은 모든 타입의 subtype
- never에는 그 어떤 것도 할당 불가능
- 잘못된 타입을 넣는 실수를 막고자 할 때 사용

### 14. void

- 의미상으로 undefined와 동일
- 보통 함수에서 반환하는 값이 없거나, undefined 반환시 return 타입으로 사용 가능

  ```ts
  function returnVoid(message: string) {
    console.log(message);
    return;
  }

  function returnVoid2(message: string): void {
    return undefined;
  }
  ```
