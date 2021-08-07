import _ from 'lodash';
import checkType from './getType';
// import { random, user as heropy } from './getRandom';
import * as R from './getRandom';
import myData from './myData.json';
import axios from 'axios';

// 01. 가져오기, 내보내기

console.log(_.camelCase('the hello world'));
console.log(checkType([1, 2, 3]));
// console.log(random(), random());
// console.log(user);
console.log(R);

// 02. Lodash 사용법
const usersA = [
  { userId: '1', name: 'HEROPY' },
  { userId: '2', name: 'Neo' },
];
const usersB = [
  { userId: '1', name: 'HEROPY' },
  { userId: '3', name: 'Amy' },
];
const usersC = usersA.concat(usersB);
console.log('concat', usersC);
console.log('uniqBy', _.uniqBy(usersC, 'userId'));

const usersD = _.unionBy(usersA, usersB, 'userId');
console.log('unionBy', usersD);

const users = [
  { userId: '1', name: 'HEROPY' },
  { userId: '2', name: 'Neo' },
  { userId: '3', name: 'Amy' },
  { userId: '4', name: 'Evan' },
  { userId: '5', name: 'Lewis' },
];

const foundUser = _.find(users, { name: 'Amy' });
const foundUserIndex = _.findIndex(users, { name: 'Amy' });
console.log(foundUser);
console.log(foundUserIndex);

_.remove(users, { name: 'HEROPY' });
console.log(users);

// 03. JSON
console.log('user', myData);

const str = JSON.stringify(myData);
console.log('str', str);
console.log(typeof str);

const obj = JSON.parse(str);
console.log('obj', obj);

// 04. Storage
localStorage.setItem('user', JSON.stringify(myData));
console.log(JSON.parse(localStorage.getItem('user')));
localStorage.removeItem('user');
console.log(JSON.parse(localStorage.getItem('user')));

// 05. OMDb API
function fetchMovies() {
  const apikey = '7035c60c';
  const search = 'frozen';
  axios
    .get(`https://www.omdbapi.com/?apikey=${apikey}&s=${search}`)
    .then((res) => {
      console.log(res);
      const h1El = document.querySelector('h1');
      const imgEl = document.querySelector('img');
      h1El.textContent = res.data.Search[1].Title;
      imgEl.src = res.data.Search[1].Poster;
    });
}
fetchMovies();
