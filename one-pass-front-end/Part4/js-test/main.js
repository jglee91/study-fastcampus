import _ from 'lodash';

const result = 'Hello world!'.indexOf('Heropy');
console.log(result);

// 05. 객체
const userAge = {
  name: 'Heropy',
  age: 85,
};
const userEmail = {
  name: 'Heropy',
  email: 'thesecon@gmail.com',
};

const target = Object.assign(userAge, userEmail);
console.log(target);
console.log(userAge);
console.log(target === userAge); // true

const a = { k: 123 };
const b = { k: 123 };
console.log(a === b); // false

const user = {
  name: 'Heropy',
  age: 85,
  email: 'thesecon@gmail.com',
};

const keys = Object.keys(user);
console.log(keys);

const values = keys.map((key) => user[key]);
console.log(values);

// 06. 구조 분해 할당
const { name: heropy, age, email, address = 'Korea' } = user;
console.log(`사용자의 이름은 ${heropy}입니다.`);
console.log(`${heropy}의 나이는 ${age}세입니다.`);
console.log(address);

const fruits = ['Apple', 'Banana', 'Cherry', 'Orange'];
const [, b6, c6, d6] = fruits;

console.log(b6, c6, d6);

// 07. 전개 연산자
// function toObject(a, b, ...c) {
//   return { a, b, c };
// }
const toObject = (a, b, ...c) => ({ a, b, c });
console.log(toObject(...fruits));

// 08. 불변성
let a8 = 1;
let b8 = 4;
console.log(a8, b8, a8 === b8); // 1 4 false
b8 = a8;
console.log(a8, b8, a8 === b8); // 1 1 true
a8 = 7;
console.log(a8, b8, a8 === b8); // 7 1 false
let c8 = 1;
console.log(b8, c8, b8 === c8); // 1 1 true

let a8_1 = { k: 1 };
let b8_1 = { k: 1 };
console.log(a8_1, b8_1, a8_1 === b8_1); // {k: 1} {k: 1} false
a8_1.k = 7;
b8_1 = a8_1;
console.log(a8_1, b8_1, a8_1 === b8_1); // {k: 7} {k: 7} true
a8_1.k = 2;
console.log(a8_1, b8_1, a8_1 === b8_1); // {k: 2} {k: 2} true
let c8_1 = b8_1;
console.log(a8_1, b8_1, c8_1, a8_1 === c8_1); // // {k: 2} {k: 2} {k: 2} true
a8_1.k = 9;
console.log(a8_1, b8_1, c8_1, a8_1 === c8_1); // // {k: 9} {k: 9} {k: 9} true

// 09. 얕은 복사와 깊은 복사
const user9 = {
  name: 'Heropy',
  age: 85,
  emails: ['thesecon@gmail.com'],
};
const copyUser9 = user9;
console.log(copyUser9 === user9); // true

user9.age = 22;
console.log('user', user9);
console.log('copyUser', copyUser9);

// const copyUser9_1 = Object.assign({}, user9);
const copyUser9_1 = { ...user9 };
console.log(copyUser9_1 === user9); // false

user9.age = 33;
console.log('user', user9);
console.log('copyUser', copyUser9_1);

console.log('-------------');
console.log('-------------');

user9.emails.push('neo@zillinks.com');
console.log(copyUser9_1.emails === user9.emails); // true

const copyUser9_2 = _.cloneDeep(user9);
user9.emails.push('jglee@gmail.com');
console.log(copyUser9_2.emails === user9.emails); // false
