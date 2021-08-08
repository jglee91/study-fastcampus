# Part 4. JavaScript Level up

## CH 1. JS 데이터

### 01. 문자

- literal
  - 특정한 기호를 통해서 데이터를 손쉽게 만들어내는 방식
- String
  - indexOf
  - length
  - slice
  - replace
  - match (with regular expression)
  - trim

### 02. 숫자와 수학

- toFixed
- parseInt
- parseFloat
- Math
  - abs
  - min
  - max
  - ceil
  - floor
  - round
  - random

### 03. 배열(1)

- Array
  - length
  - find
  - concat
  - forEach
  - map

### 04. 배열(2)

- Array
  - filter
  - findIndex
  - includes
  - push
  - unshift
  - reverse
  - splice

### 05. 객체

- Object
  - assign
- 참조형 데이터
  - {}, [], function, ...

### 06. 구조 분해 할당

- Destructing assignment
- 비구조화 할당

### 07. 전개 연산자

- Spread
  ```js
  // rest parameter
  function toObject(a, b, ...c) {
    ...
  }
  ```

### 08. 불변성

- Immutability
- 원시 데이터 : String, Number, Boolean, undefined, null
- 참조형 데이터: Object, Array, Function

### 09. 얕은 복사와 깊은 복사

- Shallow copy

  - Object.assign
  - Spread operation

  ```js
  const user = {
    name: 'Heropy',
    age: 85,
    emails: ['thesecon@gmail.com'],
  };
  const copyUser = { ...user };

  user.emails.push('neo@zillinks.com');

  // 객체 내부 데이터는 복사되지 않고, 같은 메모리 주소를 공유함
  console.log(user === copyUser); // false
  console.log(user.emails === copyUser.emails); // true
  ```

- Deep copy

  - 객체 내부 데이터까지 모두 복사
  - lodash 라이브러리 활용

  ```js
  import _ from 'lodash';

  const user = {
    name: 'Heropy',
    age: 85,
    emails: ['thesecon@gmail.com'],
  };
  const copyUser = _.cloenDeep(user);

  user.emails.push('neo@zillinks.com');

  // 객체 내부 데이터까지 복사되어 다른 메모리 주소를 사용
  console.log(user === copyUser); // false
  console.log(user.emails === copyUser.emails); // false
  ```

---

## CH 2. JS 데이터 실습

### 01. 가져오기, 내보내기

- import
- export
  - default export
  - named export

### 02. Lodash 사용법

- uniqBy
- unionBy
- find
- findIndex
- remove

### 03. JSON

- JavaScript Object Notation
- Key-Value pair
- XML 대체
- application/json

### 04. Storage

- localStorage
- sessionStorage
  - setItem
  - getItem
  - removeItem
- Lowdb
  - small JSON database for Node

### 05. OMDb API

- RESTful webservice to obtain movie information
  - `http://www.omdbapi.com/?apkkey=[yourkey]&`
  - URL Query String
- axios

---

## CH 3. 정규표현식

### 01. 개요 및 프로젝트 시작

- javascript regexp
- 문자열을 검색하고 대체하는 데 사용 가능한 일종의 형식 언어(패턴)
- `https://heropy.blog/2018/10/28/regexp`

### 02. 정규식 생성

- 정규표현식 테스트 사이트
  - https://regex101.com/
  - https://regexr.com/
  - https://regexper.com/
- 정규식 생성

  ```js
  // 생성자 함수 방식
  const regexp = new RegExp('^abc', 'gi');

  // 리터럴 방식
  const regExp2 = /^abc/gi;
  ```

### 03. 메소드

- 메소드
  메소드 | 문법 | 설명
  --|--|--
  exec | `정규식.exec(문자열)` | 일치하는 하나의 정보(Array) 반환
  test | `정규식.test(문자열)` | 일치여부(Boolean) 반환
  match | `문자열.match(정규식)` | 일치하는 문자의 배열(Array) 반환
  search | `문자열.search(정규식)` | 일치하는 문자열의 인덱스(Number) 반환
  replace | `문자열.replace(정규식,대체문자)` | 일치하는 문자를 대체
  split | `문자열.split(정규식)` | 일치하는 문자열을 분할하여 배열(Array)로 반환

  ```js
  const str = `
  010-1234-5678
  thesecon@gmail.com
  https://www.omdbapi.com/?apikey=7035c60c&s=frozen
  The quick brown fox jumps over the lazy dog.
  abbcccdddd
  `;

  const regexp = /fox/gi;
  console.log(regexp.test(str)); // true
  console.log(/HEROPY/gi.test(str)); // false

  console.log(str.replace(regexp, 'AAA')); // fox 텍스트가 AAA로 변환
  ```

### 04. 플래그(옵션)

| 플래그 | 설명                                        |
| ------ | ------------------------------------------- |
| g      | 모든 문자 일치(global)                      |
| i      | 영어 대소문자를 구분 않고 일치(ignore case) |
| m      | 여러 줄 일치(multi line)                    |

```js
const str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`;
console.log(str.match(/\.$/gim)); // ["."] <- ...the lazy dog"." ...
```

### 05. 패턴(표현) (1)

| 패턴       | 설명                               |
| ---------- | ---------------------------------- |
| ^ab        | 줄(Line) 시작에 있는 ab와 일치     |
| ab$        | 줄(Line) 끝에 있는 ab와 일치       |
| .          | 임의의 한 문자와 일치              |
| a&verbar;b | a 또는 b와 일치                    |
| ab?        | b가 없거나 b와 일치                |
| {3}        | 3개 연속 일치                      |
| {3,}       | 3개 이상 연속 일치                 |
| {3,5}      | 3개 이상 5개 이하(3~5개) 연속 일치 |

```js
const str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
`;

console.log(str.match(/d$/g)); // null
console.log(str.match(/d$/gm)); // ["d"] <- ... abbcccddd"d"

console.log(str.match(/^t/g)); // null
console.log(str.match(/^t/gm)); // ... "the"secon ...

console.log(str.match(/h..p/g)); // ["http", "http"]

console.log(str.match(/fox|dog/g)); // ["fox", "dog"]

console.log(str.match(/https?/g)); // ["https", "http"]

console.log(str.match(/d{2}/g)); // ["dd", "dd"]
console.log(str.match(/d{2,}/g)); // ["dddd"]
console.log(str.match(/d{2,3}/g)); // ["ddd"]

console.log(str.match(/\b\w{2,3}\b/g)); // ["010", "com", "www", "com", "The", "fox", "the", "dog"]
```

### 06. 패턴(표현) (2)

| 패턴    | 설명                                               |
| ------- | -------------------------------------------------- |
| [abc]   | `a` 또는 `b` 또는 `c`                              |
| [a-z]   | `a`부터 `z` 사이의 문자 구간에 일치(영어 소문자)   |
| [A-Z]   | `a`부터 `z` 사이의 문자 구간에 일치(영어 대문자)   |
| [0-9]   | `0`부터 `9` 사이의 문자 구간에 일치(숫자)          |
| [가-힣] | `가`부터 `힣` 사이의 문자 구간에 일치(한굴)        |
| \w      | 63개 문자(Word, 대소문52개 + 숫자10개 + \_)에 일치 |
| \b      | 63개 문자에 일치하지 않는 문자 경계(Boundary)      |
| \d      | 숫자(Digit)에 일치                                 |
| \s      | 공백(Space, Tab 등)에 일치                         |
| (?=)    | 앞쪽 일치(Lookahead)                               |
| (?<=)   | 뒤쪽 일치(Lookhebind)                              |

```js
const str = `
010-1234-5678
thesecon@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
http://localhost:1234
동해물과 백두산이 마르고 닳도록
`;

console.log(str.match(/[가-힣]/g));

console.log(str.match(/\bf\w{1,}/g)); // ["frozen", "fox"]

console.log(str.match(/\d{1,}/g));

const h = `  the hello  world   !

`;

console.log(h.replace(/\s/g, '')); // thehelloworld!

console.log(str.match(/.{1,}(?=@)/g)); // thesecon
console.log(str.match(/(?<=@).{1,}/g)); // gmail.com
```
