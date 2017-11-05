
// Refactor the following code to use the specified ES6 features.
// There are no automated tests.
// To make sure the code still works you can run this file using `node es6.js` from inside `/src`.

//----------------
// const, =>, default parameters, arrow functions default return statements using ()

const foodSample = 'pineapple';

const isMyFavoriteFood = (food = 'thousand-year-old egg') => food === 'thousand-year-old egg';

const isThisMyFavorite = isMyFavoriteFood(foodSample);

console.log(isThisMyFavorite);

//----------------
//const, class, template literals, enhanced object literals (foo: foo, -> foo,)

function User(options) {
  this.username = options.username;
  this.password = options.password;
  this.sayHi = () => `${this.username} says hello!`;
}

const username = 'JavaScriptForever';
const password = 'password';

const me = new User({
  username,
  password,
});

console.log(me);
console.log(me.sayHi());

// ----------------
// let, const, =>, ... (spread operator)

const addArgs = function (...numbers) {
  return numbers.reduce((sum, num) => sum + num);
};

const argsToCb = function (cb, ...numbers) {
  return cb(...numbers);
};

const result = argsToCb(addArgs, 1, 2, 3, 4, 5); //result should be 15

console.log(result);

/* eslint-enable */
