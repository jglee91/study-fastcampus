import getType from './getType';
import getRandom from './getRandom';

// 02. 데이터 타입 확인
console.log(typeof 'Hello World!');
console.log(typeof 123);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof {});
console.log(typeof []);

console.log(getType(123));
console.log(getType(false));
console.log(getType(null));
console.log(getType({}));
console.log(getType([]));


// 03. 산술, 할당 연산자
console.log(1 + 2);
console.log(5 - 7);
console.log(3 * 4);
console.log(10 / 2);
console.log(7 % 5);

let a3 = 2;
// a = a + 1;
a3 %= 1;
console.log(a3);

// 04. 비교, 논리 연산자
const a4 = 1;
// const b4 = 1;
const b4 = 3;

console.log(a4 === b4);
console.log(a4 !== b4);
console.log(a4 < b4);

function isEqual(x, y) {
  return x === y;
}

console.log(isEqual(1, 1));
console.log(isEqual(2, '2'));

const c4 = 1 === 1;
const d4 = 'AB' == 'AB';
// const e4 = true;
const e4 = false;

console.log(c4, d4, e4);
console.log('&& :', c4 && d4 && e4);
console.log('|| :', c4 || d4 || e4);
console.log('! :', !c4);

// 05. 삼항 연산자
const a5 = 1 < 2;

if (a5) {
  console.log('참');
} else {
  console.log('거짓');
}

console.log(a5 ? '참' : '거짓');

// 06. 조건문 If Else
const a6 = getRandom();

if (a6 === 0) {
  console.log('a is 0');
} else if (a6 === 2) {
  console.log('a is 2');
} else if (a6 === 4) {
  console.log('a is 4');
} else {
  console.log('rest...');
}

// 07. 조건문 Switch
const a7 = a6;

switch (a7) {
  case 0:
    console.log('a is 0');
    break;
  
  case 2:
    console.log('a is 2');
    break;
  
  case 4:
    console.log('a is 4');
    break;
  
  default:
    console.log('rest...');
}

// 08. 반복문 For
const ulEl = document.querySelector('ul');

for (let i = 0; i < 10; i += 1) {
  const li = document.createElement('li');
  li.textContent = `list-${i + 1}`;

  if ((i + 1) % 2 === 0) {
    li.addEventListener('click', function () {
      console.log(li.textContent);
    });
  }

  ulEl.appendChild(li);
}

// 09. 변수 유효범위
function scope() {
  // console.log(a); // ReferenceError
  console.log(b); // undefined
  if (true) {
    // console.log(a); // undefined
    // const a = 123;
    var b = 123;
    // console.log(a);
  }
  // console.log(a); // ReferenceError
  console.log(b); // 123
}
scope();

// 10. 형 변환
const a10 = 1;
const b10 = '1';

console.log(a10 == b10); // true

if ('false') {
  console.log(123);
}
if (0) {
  console.log(123);
}

//-------------------------------------------------

// 1. 함수 복습
function sum(x, y) {
  return x + y;
}

console.log(sum(1, 3));
console.log(sum(4, 12));

// 02. 화살표 함수
const doubleArrow = (x) => x * 2;
console.log(`doubleArrow: ${doubleArrow(7)}`);

// 03. IIFE
(function () {
  const a = 7;
  console.log(a * 2);
}());

// 04. 호이스팅
const a3_4 = 7;

double();

// 에러 발생
// const double = function () {
//   console.log(a3_4 * 2);
// }

// 에러가 발생하지 않음
function double() {
  console.log(a3_4 * 2);
}

// 05. 타이머 함수
// const timer = setTimeout(() => console.log('Heropy!'), 3000);
const timer = setInterval(() => console.log('Heropy!'), 3000);

const h1El = document.querySelector('h1');
// h1El.addEventListener('click', () => clearTimeout(timer));
h1El.addEventListener('click', () => clearInterval(timer));

// 06. 콜백
function timeout(cb) {
  setTimeout(() => {
    console.log('Heropy!');
    cb();
  }, 3000);
}
timeout(() => console.log('Done!'));

//-------------------------------------------------

// 01. 생성자 함수(prototype)

function User(first, last) {
  this.firstName = first;
  this.lastName = last;
}
User.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
}

const heropy = new User('Heropy', 'Park');
const smith = new User('Amy', 'Clarke');
const neo = new User('Neo', 'Smith');

console.log(heropy.getFullName());
console.log(smith.getFullName());
console.log(neo.getFullName());

// 02. this
const heropy02 = {
  name: 'Heropy',
  normal: function () {
    console.log(this.name);
  },
  arrow: () => {
    console.log(this.name);
  }
}
heropy02.normal();
heropy02.arrow();

const amy02 = {
  name: 'Amy',
  normal: heropy02.normal,
  arrow: heropy02.arrow,
};
amy02.normal();
amy02.arrow();

function User02(name) {
  this.name = name;
}
User02.prototype.normal = function () {
  console.log(this.name);
}
User02.prototype.arrow = () => {
  console.log(this.name);
}

const heropy02_1 = new User02('Heropy');
heropy02_1.normal();
heropy02_1.arrow();

const timer02 = {
  name: 'Heropy!!',
  timeout: function () {
    // setTimeout(function () {
    //   console.log(this.name);
    // }, 2000);
    setTimeout(() => {
      console.log(this.name);
    }, 2000);
  },
};
timer02.timeout();

// 03. ES6 Classes
class User03 {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const heropy03 = new User03('Heropy', 'Park');
const smith03 = new User03('Amy', 'Clarke');
const neo03 = new User03('Neo', 'Smith');

console.log(heropy03.getFullName());
console.log(smith03.getFullName());
console.log(neo03.getFullName());

// 04. 상속(확장)
class Vehicle {
  constructor(name, wheel) {
    this.name = name;
    this.wheel = wheel;
  }
}
const myVehicle = new Vehicle('운송수단', 2);
console.log(myVehicle);

class Bicycle extends Vehicle {
  constructor(name, wheel) {
    super(name, wheel);
  }
}
const myBicycle = new Bicycle('삼천리', 2);
const daughtersBicycle = new Bicycle('세발', 3);

console.log(myBicycle);
console.log(daughtersBicycle);

class Car extends Vehicle {
  constructor(name, wheel, license) {
    super(name, wheel);
    this.license = license;
  }
}
const myCar = new Car('벤츠', 4, true);
const daughtersCar = new Car('포르쉐', 4, false);

console.log(myCar);
console.log(daughtersCar);
