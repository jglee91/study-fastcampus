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
  ``` js
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
  const copyUser = _.cloenDeep(user);;

  user.emails.push('neo@zillinks.com');

  // 객체 내부 데이터까지 복사되어 다른 메모리 주소를 사용
  console.log(user === copyUser); // false
  console.log(user.emails === copyUser.emails); // false
  ```
