let x: [string, number];

x = ['hello', 39];
// x = [10, 'Mark']; // error!
// x[2] = 'world'; // error!

const person: [string, number] = ['Mark', 39];
const [first, second] = person;
// const [first, second, third] = person; // error!
