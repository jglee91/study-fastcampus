const boxEl1 = document.querySelector('#wrapper1').querySelector('.box');

console.log(boxEl1);

boxEl1.addEventListener('click', function () {
  console.log('Click~!');
  this.classList.toggle('active');
});

// boxEl.classList.add('active');
// let isContains = boxEl.classList.contains('active');
// console.log(isContains);

// boxEl.classList.remove('active');
// isContains = boxEl.classList.contains('active');
// console.log(isContains);

const boxEls2 = document.querySelector('#wrapper2').querySelectorAll('.box');
console.log(boxEls2);

boxEls2.forEach(function (boxEl, index) {
  boxEl.classList.add(`order-${index + 1}`);
  console.log(index, boxEl);
});

const boxEl3 = document.querySelector('#wrapper3').querySelector('.box');
console.log(boxEl3.textContent);

boxEl3.textContent = 'HEROPY!!';
console.log(boxEl3.textContent);

const a = 'Hello~';
const b = a.split('').reverse().join('');
console.log(a, b);