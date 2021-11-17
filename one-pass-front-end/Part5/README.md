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

---

## CH 3. Type System

### 01. 작성자와 사용자의 관점으로 코드 바라보기

```js
// (f2 실행 결과가 NaN을 의도한 것이 아니라면)
// 이 함수의 작성자는 매개변수 a가 number 타입이라는 가정으로 함수를 작성
function f2(a) {
  return a * 38;
}
console.log(f2(10)); // 380
console.log(f2('Mark')); // NaN
```

```ts
// a의 타입을 명시하지 않을 경우, any로 추론됨
// 함수의 리턴 타입은 number로 추론됨 (NaN도 number type)
function f3(a) {
  return a * 38;
}
console.log(f3(10)); // 380
console.log(f3('Mark') + 5); // NaN
```

- tsconfig의 noImplicitAny 옵션을 켜면, any로 추론할 경우 에러를 나타냄

```ts
// 함수의 리턴 타입은 number로 추론됨
function f4(a: number) {
  if (a > 0) {
    return a * 38;
  }
}
console.log(f4(5)); // 190
console.log(f4(-5) + 5); // NaN
```

- tsconfig의 strictNullChecks 옵션을 켜면, 모든 타입에 자동으로 포함되어 있는 `null`과 `undefined`를 제거해줌

```ts
// (strictNullChecks 옵션을 켠 경우)
// 함수의 리턴 타입은 number | undefined로 추론됨
function f4(a: number) {
  if (a > 0) {
    return a * 38;
  }
}
// 함수의 리턴 타입이 number | undefined이기 때문에, 타입에 따르면 이어진 연산을 바로 실행할 수 없음
console.log(f4(5));
console.log(f4(-5) + 5); // error TS2532: Object is possibly 'undefined'.

// 매개변수, 리턴 타입을 명시적으로 지정
// error TS2366: Function lacks ending return statement and return type does not include 'undefined'.
function f5(a: number): number {
  if (a > 0) {
    return a * 38;
  }
}
```

- tsconfig의 noImplicitReturns 옵션을 켜면, 함수 내 모든 코드가 값을 리턴하지 않으면 컴파일 에러 발생

```ts
// 매개변수가 object일 경우, object literal type 지정
function f7(a: { name: string; age: number }): string {
  return `이름은 ${a.name}이고, 연령대는 ${
    Math.floor(a.age / 10) * 10
  }대 입니다.`;
}
console.log(f7({ name: 'Makr', age: 38 })); // 이름은 Mark이고, 연령대는 30대 입니다.
console.log(f7('Mark')); // error TS2345: Argument of type 'string' is not assignable to parameter of type '{ name: string; age: number; }'.
```

```ts
// 나만의 타입을 만드는 방법
interface PersonInterface {
  name: string;
  age: number;
}

type PersonTypeAlias = {
  name: string;
  age: number;
}

function f8(a: PersonInterface): string {
  ...
}
```

### 02. Structural Type System vs Nominal Type System

- `Structural Type System` - 구조가 같으면, 같은 타입(TypeScript가 따르는 방식)

  ```ts
  interface IPerson {
    name: string;
    age: number;
    speak(): string;
  }
  type PersonType = {
    name: string;
    age: number;
    speak(): string;
  };

  let personInterface: IPerson = {} as any;
  let personType: PersonType = {} as any;

  personInterface = personType;
  personType = personInterface;
  ```

- `Nominal Type System` - 구조가 같아도, 이름이 다르면 다른 타입(C, Java에서 사용하는 방식)

  ```ts
  type PersonID = string & { readonly brand: unique symbol }; // type intersaction

  function PersonID(id: string): PersonID {
    return id as PersonID;
  }
  function getPersonById(id: PersonID) {}

  getPersonById(PersonID('id-aaaaaa'));
  getPersonById('id-aaaaaa'); // error TS2345: Argument of type 'string' is not assignable to parameter of type '{ readonly brand: unique symbol }'.
  ```

- `Duck Typing` - 타입을 미리 정하지 않고, Runtime시 해당 함수들을 확인하여 타입을 정하는 방식(C++, Python에서 사용하는 방식)

### 03. 타입 호환성 (Type Compatibility)

- 서브 타입

  ```ts
  // sub 타입은 sup 타입의 서브 타입
  let sub1: 1 = 1;
  let sup1: number = sub1;
  sub1 = sup1; // error! Type 'number' is not assignable to type '1'.

  let sub2: number[] = [1];
  let sup2: object = sub2;
  sub2 = sup2; // error! Type '{}' is missing the following properties from type 'number[]': length, pop, push, concat, and 16 more.

  let sub3: [number, number] = [1, 2]; // Tuple Type
  let sup3: number[] = sub3;
  sub3 = sup3; // error! Type 'number[]' is not assignable to type '[number, number]'. Target requires 2 element(s) but source may have fewer.

  let sub4: number = 1;
  let sup4: any = sub4;
  sub4 = sup4; // it's ok.

  let sub4: never = 0 as never;
  let sup5: number = sub5;
  sub5 = sup5; // error! Type 'number' is not assignable to type 'never'.

  class Animal {}
  class Dog extends Animal {
    eat() {}
  }
  let sub6: Dog = new Dog();
  let sup6: Animal = sub6;
  sub6 = sup6; // error! Property 'eat' is missing in type 'SubAnimal' but required in type 'SubDog'.
  ```

- 같거나 서브 타입인 경우, 할당이 가능하다. => 공변

  ```ts
  // primitiye type
  let sub7: string = '';
  let sup7: string | number = sub7;

  // object - 각각의 프로퍼티가 대응하는 프로퍼티와 같거나 서브타입
  let sub8: { a: string; b: number } = { a: '', b: 1 };
  let sup8: { a: string | number; b: number } = sub8; // it's ok

  // array - object와 마찬가지
  let sub9: Array<{ a: string; b: number }> = [{ a: '', b: 1 }];
  let sup9: Array<{ a: string | number; b: number }> = sub9;
  ```

- 함수의 매개변수 타입만 같거나 슈퍼타입인 경우, 할당이 가능하다. => 반병

  ```ts
  class Person {}
  class Developer extends Person {
    coding() {}
  }
  class StartupDeveloper extends Developer {
    burning() {}
  }

  function tellme(f: (d: Developer) => Developer) {}

  // Developer => Developer에다가 Developer => Developer를 할당하는 경우
  tellme(function dToD(d: Developer): Developer {
    return new Developer();
  });

  // Developer => Developer에다가 Person => Developer를 할당하는 경우
  tellme(function pToD(d: Persion): Developer {
    return new Developer();
  });

  // Developer => Developer에다가 StartupDeveloper => Developer를 할당하는 경우
  // tsconfig의 strictFunctionTypes 옵션을 켜면, 에러 발생
  tellme(function sToD(d: StartupDeveloper): Developer {
    return new Developer();
  });
  ```

### 04. 타입 별칭 (Type Alias)

- Primitive, Union Type, Tuple, Function
- 만들어진 타입의 refer 용도로 사용

  ```ts
  // Aliasing Primitive
  type MyStringType = string;

  const str = 'world';
  let myStr: MyStringType = 'hello';

  myStr = str;

  // Aliasing Union Type
  let person: string | number = 0;
  person = 'Mark';

  type StringOrNumber = string | number;

  let another: StringOrNumber = 0;
  another = 'Anna';

  // Aliasing Tuple
  let person: [string, number] = ['Mark', 35];

  type PersonTuple = [string, number];

  let another: PersonTuple = ['Anna', 24];

  // Aliasing Function
  type EatType = (food: string) => void;
  ```

---

## CH 4. TypeScript Compiler

### 01. Compilation Context

- for grouping of the files that TypeScript will parse and analyze to determine `what is valid and what isn't`.
- contains information about which compiler options are in use.
- using a **`tsconfig.json`** file.

### 02. tsconfig schema

> http://json.schemastore.org/tsconfig

- 최상위 프로퍼티
  - compileOnSave
  - extends
  - compileOptions
  - files
  - include
  - exclude
  - references
  - ~~typeAcquisition~~
  - ~~tsNode~~

### 03. compileOnSave

- default false
- Visual Studio 2015 with TypeScript 1.8.4 이상 or atom-typescript 플러그인

```json
// tsconfig.json
{
  "compileOnSave": true
}
```

### 04. extends

- 파일(상대)경로명: string

```json
// tsconfig.json
{
  "extends": "./base.json"
}

// base.json
{
  "compilerOptions": {
    "strict": true
  }
}
```

### 05. files, include, exclude

- 셋 다 설정이 없으면, 전부 다 컴파일
- files
  - 상대 or 절대 경로의 array
  - exclude보다 우선 적용
- include, exclude
  - glob pattenrs
  - include
    - \* 적용시, .ts, .tsx, .d.ts 파일만 적용 (allowJS)
  - exclude
    - include보다 우선 적용
    - 설정하지 않으면 `node_modules, bower_components, jspm_packages, <outDir>`를 default로 제외함
    - `<outDir>`은 include에 있어도 항상 제외

### 06. compileOptions - typeRoots, types

- 일부 third-party libarary는 일반 js로 작성되어있기 때문에, ts에서 사용할 수 없음

  ```bash
  # react 설치
  $ npm i react

  # ts 파일에서 react import시 에러남
  # 이를 해결하기 위해 types dependency를 설치
  $ npm i -D @types/react
  ```

- @types
  - TypeScript 2.0부터 사용 가능해진 내장 type definition 시스템
  - 아무 설정을 하지 않으면 node_modules/@types에 해당하는 모든 경로를 찾아서 사용
  - typeRoots: 해당 array 내의 경로에서만 가져옴
  - types: 해당 array 혹은 `./node_modules/@types/`경로의 모듈 이름에서 찾아오며, empty array 설정시 해당 옵션이 적용되지 않음
  - typeRoots와 types 설정은 같이 사용하지 않음

### 07. compileOptions - target과 lib

- target

  - 빌드의 결과물을 어떤 버전으로 할 것인지 설정
  - default는 `ES3` (일반적으로 `ES5`)

  ```ts
  // test.ts
  const hello = () => {};

  // tsc -> test.js (es5)
  var hello = function () {};

  // tsc -> test.js (es6)
  const hello = () => {};
  ```

- lib

  - 기본 type definition lib을 어떤 것을 하용할 것인지 설정
  - lib을 설정하지 않으면,
    - target이 `es3` -> `lib.d.ts` 사용
    - target이 `es5` -> `dom, es5, scripthost` 사용
    - target이 `es6` -> `dom, es6, iterable, scripthost` 사용

  ```ts
  // tsconfig.json 에서 lib 설정을 하지 않을 경우(기본적으로 주석처리 되어있음)
  console.log('lib - default');

  // tsconfig.json 에 lib: [] 설정시
  console.log('lib - empty'); // compile에 에러 발생, lib.dom.t.ts의 console 설정이 필요함
  ```

### 08. compileOptions - outDir, outFile, rootDir

- outFile: 단일파일로 bundling시 파일명(module이 system 혹은 amd 같은 형태로 지원이 되어야 가능)
  > https://www.typescriptlang.org/tsconfig#outFile
- outDir: 프로젝트 디렉토리 구조와 동일하게 컴파일
- rootDir: 컴파일시 대상 root 디렉토리

```json
// tsconfig
{
  "compilerOptions": {
    "outDir": "./dist",
    "rootDir": "./src"
  }
}
```

### 09. compileOptions - strict

- noImplicitAny
  - 명시적이지 않게 any 타입을 표현식, 선언에 사용하면 에러 발생
  - typescript가 타입 추론에 실패할 경우, any가 되면서 에러 발생
  - type이 any라고 지정되어 있지 않은 경우에는 any가 아님
  - cf) suppressImplicitAnyIndexErros
- noImplicitThis

  - 명시적이지 않게 any 타입을 this 표현식에 사용하면 에러 발생

  ```ts
  function noImplicitThisTestFunc(name: string, age: number) {
    this.name = name; // [ts] 'this' implicitly has type 'any' because it does not have a type annotation
    this.age = age;
  }

  // typescript는 아래와 같이 this를 사용할 수 있음
  function noImplicitThisTestFunc(this: {...}, name: string, age: number) {
    this.name = name; // [ts] 'this' implicitly has type 'any' because it does not have a type annotation
    this.age = age;
  }

  class NoImplicitThisTestClass {
    private _name: string;
    private _age: number;

    constructor(name: string, age: number) {
      this._name = name;
      this._age = age;
    }

    public print(this: NoImplicitThisTestClass) {
      console.log(this._name, this._age);
    }
    new NoImplicitThisTestClass('Mark', 36).print();
  }
  ```

- strictNullChecks
  - 해당 옵션을 적용하지 않으면, 모든 타입은 null, undefined 값을 가질 수 있음(사실상 typescript를 사용하는 의미가 무색해짐)
  - 한 가지 예외로 undefined에 void 할당 가능
  ```ts
  const a: number = null; // error!
  const b: string = undefined; // error!
  const c: number | null = null;
  const d: any = null;
  const e: any = undefined;
  const f: void = undefined;
  ```
- strictFunctionTypes
  - 함수 타입에 대한 bivariant 매개변수 검사를 비활성화
    > https://www.stephanboyer.com/post/132/what-are-convariance-and-contravariance
  - `CH3 - 03. 타입 호환성 (Type Compatibility)` 참고
  - 반환 타입은 공변적(convariant)
  - 인자 타입은 반공변적(contravariant)
  - typescript에서 인자 타입은 공변적이면서, 반공변적인 것이 문제
  ```ts
  const button = document.querySelector('#id') as HTMLButtonElement;
  button.addEventListener('keydown', (e: MouseEvent) => {});
  ```
- strictPropertyInitialization

  - 정의되지 않은 클래스의 속성이 생성자에서 초기화되었는지 확인

  ```ts
  class Person {
    private _name: string; // error!
    private _age: number; // error!

    constructor() {}
  }

  // 다른 함수로 초기화 하는 경우(with async)
  class Person2 {
    private _name!: string;
    private _age!: number;

    public async initialize(name: string, age: number) {
      this._name = name;
      this._age = age;
    }
  }
  ```

- strictBindCallApply
  - Function 내장 함수인 bind, call, apply 사용시 strict check 하는 옵션
- alwaysStrict
  - 각 소스 파일에 대해 javascript의 strict mode로 코드를 분석
  - 컴파일시, 대상 js 파일 상단에 `use strict`가 추가됨

---

## CH 5. Interfaces

### 01. What are Interfaces

- 어떤 type을 만들어내는 방법
- interface는 compile time에 에러발생여부 판단, 실제 컴파일된 js에는 interface 관련 내용은 없음

### 02. optional proerty (1)

```ts
interface Person2 {
  name: string;
  age?: number; // optional property
}
```

### 03. optional proerty (2)

- indexable type

```ts
interface Person2 {
  name: string;
  age?: number;
  [index: string]: any; // indexable type
}
```

### 04. function in interface

### 05. class implements interface

### 06. interface extends interface

### 07. function interface

### 08. Readonly Interface Properties

```ts
interface Person8 {
  name: string;
  age?: number;
  readonly gender: string;
}

const p81: Person8 = {
  name: 'Mark',
  gender: 'male',
};

// p81.gender = 'female'; // cannot assign to 'gender' because it is a read-only property.
```

### 09. type alias vs interface

- function

  ```ts
  // type alias
  type EatType = (food: string) => void;

  // interface
  interface IEat {
    (food: string): void;
  }
  ```

- array

  ```ts
  // type alias
  type PersonList = string[];

  // interface
  interface IPersonList {
    [index: number]: string;
  }
  ```

- intersection

  ```ts
  interface ErrorHandling {
    success: boolean;
    error?: { message: string };
  }
  interface ArtistsData {
    artists: { name: string }[];
  }

  // type alias
  type ArtistsResponseType = ArtistsData & ErrorHandling;

  // interface
  interface IArtistsResponse extends ArtistsData, ErrorHandling {}

  let art: ArtistsResponseType;
  let iar: IArtistsResponse;
  ```

- union types

  ```ts
  interface Bird {
    fly(): void;
    layEggs(): void;
  }
  interface Fish {
    swim(): void;
    layEggs(): void;
  }

  type PetType = Bird | Fish;

  interface IPet extends PetType {} // error TS2312: An interface can only extend an object type or intersection of object types with statically known members.
  interface Pet {} // error TS2422: A class only implement an object type or intersection of object types with statically known members.
  ```

- declaration merging - interface (HTMLElement 혹은 third-party lib 확장시 주로 사용)

  ```ts
  interface MergingInterface {
    a: string;
  }
  interface MergingInterface {
    b: string;
  }

  let mi: MergingInterface;
  mi.a;
  mi.b;
  ```

- declaration merging - type
  ```ts
  type MergingInterface = {
    a: string;
  };
  type MergingInterface = {
    // error TS2300: Duplicate identifier 'MergingType'.
    b: string;
  };
  ```

---

## CH 6. Classes

### 01. What are Classes

- object를 만드는 blueprint
- es6부터 사용 가능
- oop을 위한 초석
- TypeScript에서는 클래스도 사용자가 만드는 타입의 하나

### 02. Quick Start - class

- class 키워드
- this 사용
- target이 `es5`인 상태로 컴파일하면 `function`으로 변경됨

### 03. constructor & initialize

- strict 모드에서는 프로퍼티를 선언하는 곳 또는 생성자에서 초기화 작업 필요

  ```ts
  class Person {
    name: string = 'Mark';
    // age!: number; // 의도적으로 옵션처리를 할 수 있으나 지양하는 방법
    age: number;

    constructor(age?: number) {
      if (age === undefined) {
        this.age = 20;
      } else {
        this.age = age;
      }
    }
  }
  ```

- javascript에서는 생성자 오버로딩 불가능
- 생성자는 async로 사용 불가능

### 04. 접근 제어자 (Access Modifiers)

- public, private, protected

  ```ts
  class Person {
    public name: string = 'Mark';
    private age: number;

    constructor(age?: number) {
      if (age === undefined) {
        this.age = 20;
      } else {
        this.age = age;
      }
    }
  }

  const p1: Person = new Person();
  // p1.age // 접근 불가능
  ```

- 접근제어자는 클래스 내부의 모든 곳에 설정 가능
- javascript에서는 접근제어자 지원이 안되어 \_를 붙인 `name convention`을 사용했었음
