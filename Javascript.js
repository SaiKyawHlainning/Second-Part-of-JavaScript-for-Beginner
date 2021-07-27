// Comments
// One line Comment

// Multi-Line Comments

/* var firstName = 'Steven';
var lastName = 'Smith';
var age = 22; */

// var firstName = 'Steven';
// var lastName = 'Smith';
// var age = 22;

/* Variables */
// var a = 10;
// var b = 2;
// var c = a + b;
// console.log(c);

// var firstName = 'Steven';
// var lastName = 'Smith';
// var age = 22;

// var firstName = 'Jhon';

// var text = firstName + ' ' + lastName + ' ' + 'is' + ' ' + age;

// console.log(text);

/* Let */
// let firstName;
// firstName = 'Steven';
// let lastName = 'Smith';
// let age = 22;

// firstName = 'Jhon';

// let text = firstName + ' ' + lastName + ' ' + 'is' + ' ' + age;

// console.log(text);

/* Const */
// const firstName = 'Steven';
// const lastName = 'Smith';
// const age = 22;

// const firstName = 'Sara';

// const text = firstName + ' ' + lastName + ' ' + 'is' + ' ' + age;

// console.log(text);

/* Operator */
// =	  x = y	    x = y
// +=	  x += y	  x = x + y
// -=	  x -= y	  x = x - y
// *=	  x *= y	  x = x * y
// /=	  x /= y	  x = x / y
// %=	  x %= y	  x = x % y
// **=	x **= y	  x = x * y

// let x = 7;
// // let y = x;
// let y = 5;

// // x += y; // x = x + y
// // x -= y;

// console.log(x);

// let text = 'Hello ';
// text += 'Steven Smith';

// console.log(text);

// ==	  equal to
// ===	  equal value and equal type
// !=	  not equal
// !==	  not equal value or not equal type
// >	    greater than
// <	    less than
// >=	  greater than or equal to
// <=	  less than or equal to
// ?	    ternary operator
// &&	  logical and
// ||	  logical or
// !	  logical not

/* Arithmetic */
// +	  Addition
// -	  Subtraction
// *	  Multiplication
// **	  Exponentiation (ES2016)
// /	  Division
// %	  Modulus (Remainder)
// ++	  Increment
// --	  Decrement

// let x = 3;
// // x++;
// x--;
// x--;
// x--;

// console.log(x);

/* Data Types */
// let x;
// // x = 3;
// // x = 'Steven';
// // x = true;
// // x = null;
// // x = { firstName: 'Steven', lastName: 'Smith' };
// x = ['Mango', 'Apple', 'Banana'];

// console.log(typeof x);

/*************************************************************/

/* Strings */
// const text = `I don't hate you but "it didn't mean I love you!"`;

// console.log(text);

// const x = (3).toString();

// console.log(typeof x);

/* String Methods */

// const text = 'Seven Smith is 22';

// Length (length start count from 1)
// console.log(text.length);

//  Slice
// console.log(text.slice(6));
// console.log(text.slice(6, 11));
// console.log(text.slice(-11));
// console.log(text.slice(-11, -3));

// Substring
// console.log(text.substr(6, 5)); // starting point and continue numbers (start zero)
// console.log(text.substr(6));
// console.log(text.substr(-11));

// Replace
// const stringText = 'Steven Smith is 22. Steven live in Thailand.';

// console.log(stringText.replace('Steven', 'John'));
// console.log(stringText.replace('STEVEN', 'John'));
// console.log(stringText.replace(/STEVEN/gi, 'jOJn'));

// To Upper Case
// console.log(stringText.toUpperCase());

// To Lower Case
// console.log(stringText.toLowerCase());

// Concat
// const fullName = 'Steven Smith';
// const text = 'Are you ok?';

// console.log(fullName.concat(', ', text));

// // Trim
// const text = '        Hey! Steven Smith Oh!          ';

// console.log(text.trim());

// Pad star and Pad end
// const text = '3';

// console.log(text.padStart(7, 5));
// console.log(text.padEnd(5, 2));

/* Searching String */
// const text = 'Steven Smith is 22. Steven Smith live in VEE Thailand.';

// console.log(text.indexOf('Steven'));
// console.log(text.lastIndexOf('Steven'));
// console.log(text.charAt('3'));
// console.log(text.match(/ve/g));
// console.log(text.match(/VE/gi));
// console.log(text.includes('ev'));
// console.log(text.includes('g'));

/* String Templates */
// const text = `
// I don't hate you
// but
// "it didn't mean I love you!"
// `;

// console.log(text);

// const firstName = 'Steven';
// const lastName = 'Smith';
// // const text = 'My full name is ' + firstName + ' ' + lastName;
// const text = `My full name is ${firstName} ${lastName}`;

// console.log(text);

// const pen = 3;
// const price = 10;

// // const totalPrice = 'Total price: ' + pen * price;
// // const totalPrice = `Total price: ${pen * price}`;

// console.log(totalPrice);

/********************************************************************/

/* Number Methods */

// toString
// const a = 7;
// console.log(a.toString());
// console.log((7).toString());
// console.log((7 + 3).toString());

// To Fixed
// const b = 19.8744;
// console.log(b);
// console.log(b.toFixed(0)); // can rounded
// console.log(b.toFixed(1));
// console.log(b.toFixed(3));
// console.log(b.toFixed(10));

// To Precision
// const c = 19.8744;
// console.log(c.toPrecision());
// console.log(c.toPrecision(3));
// console.log(c.toPrecision(5));
// console.log(c.toPrecision(10));

// Value of
// const d = 19.8744;
// console.log(d.valueOf());
// console.log((100).valueOf());
// console.log((1 + 23).valueOf());

// console.log(Number(true)); // returns 1
// console.log(Number(false)); // returns 0
// console.log(Number('10')); // returns 10
// console.log(Number('  10')); // returns 10
// console.log(Number('10  ')); // returns 10
// console.log(Number(' 10  ')); // returns 10
// console.log(Number('10.33')); // returns 10.33
// console.log(Number('10,33')); // returns NaN
// console.log(Number('10 33')); // returns NaN
// console.log(Number('John')); // returns NaN

// console.log(parseInt('-10')); // returns -10
// console.log(parseInt('-10.33')); // returns -10
// console.log(parseInt('10')); // returns 10
// console.log(parseInt('10.33')); // returns 10
// console.log(parseInt('10 20 30')); // returns 10
// console.log(parseInt('30 10 20 ')); // returns 30
// console.log(parseInt('10 years')); // returns 10
// console.log(parseInt('years 10')); // returns NaN

// console.log(parseFloat('10')); // returns 10
// console.log(parseFloat('10.33')); // returns 10.33
// console.log(parseFloat('30 10 20 ')); // returns 10
// console.log(parseFloat('10 years')); // returns 10
// console.log(parseFloat('years 10')); // returns NaN

// console.log(Number.MAX_VALUE);
// console.log(Number.MIN_VALUE);
// console.log(Number.POSITIVE_INFINITY);
// console.log(Number.NEGATIVE_INFINITY);
// console.log(Number.NaN);

// const x = 3 / 'Steven';
// console.log(x);
// console.log(3 / 'Steven');

/*************************************************************************/

/* Functions */
// function Declarations
// function myFunction() {
//   console.log('Hello World!');
// }

// myFunction();

// function myFunction() {
//   return 'Hello Steven';
// }

// console.log(myFunction());

// function myFunction(firstName) {
//   return 'Hello ' + firstName;
// }

// console.log(myFunction('John'));

// function myFunction(firstName, lastName) {
//   return 'Hello ' + firstName + ' ' + lastName;
// }

// console.log(myFunction('John', 'Smith'));

// function fullName(fristName = 'Steven', lastName = 'Smith') {
//   // return 'My name is ' + fristName + ' ' + lastName;
//   return `My name is ${fristName} ${lastName}`;
// }

// console.log(fullName('Sara', 'William'));

// let myFun = myFunction('Steven', 'Smith');
// function myFunction(firstName, lastName) {
//   return `My full name is ${firstName} ${lastName}`;
// }

// console.log(myFun);

// let myFun = myFunction(3, 4);
// function myFunction(x, y) {
//   return `Total price is ${x * y}`;
// }

// console.log(myFun);

// Immidiatley Invokable Function Expressions (IIFE)
// (function () {
//   console.log('Hello World!');
// })();

// (function (firstName, lastName) {
//   console.log(`My name is ${firstName} ${lastName}`);
// })('Steven', 'Smith');

// Property Methods
// const text = {
//   fun1: function () {
//     console.log('Hello!');
//   },
// };

// text.fun1();

// Arrow Function
// const text = (firstName, lastName) => {
//   console.log(`My name is ${firstName} ${lastName}`);
// };
// text('Steven', 'Smith');

// const myFunction = () => {
//   document.getElementById('myId').innerHTML = 'I Clicked Button!';
// };

/**************************************************************************** */

/* Arrays */
// let fruits = ['Mango', 'Apple', 'Orange'];
// fruits[0] = 'Banana';

// console.log(fruits);

// Length
// let fruits = ['Mango', 'Apple', 'Orange'];
// console.log(fruits.length);
// console.log(fruits[1]);
// console.log(fruits[fruits.length - 2]);

// Push
// let fruits = ['Mango', 'Apple', 'Orange'];
// // fruits.push('Banana');
// fruits[5] = 'Lemon';

// console.log(fruits);

// Wraning
// let fruits = [];
// fruits[0] = 'Mango';
// fruits[1] = 'Apple';
// fruits[2] = 'Orange';

// console.log(fruits);

// let fruits = [];
// fruits['firstFruits'] = 'Mango';
// fruits['secondFruits'] = 'Apple';
// fruits['thirdFruits'] = 'Orange';

// // console.log(fruits);
// // console.log(fruits.length);
// console.log(fruits[1]);

// let fruits = ['Mango', 'Apple', 'Orange'];
// console.log(typeof fruits);
// console.log(Array.isArray(fruits));
// console.log(fruits instanceof Array);

/* Arry Methods */

// let fruits = ['Mango', 'Apple', 'Orange'];

// console.log(fruits.join(' * '));
// console.log(fruits.join(' + '));
// console.log(fruits.join(' '));

// Popping
// fruits.pop(); // Remove at last index
// console.log(fruits);

// let removeFruit = fruits.pop();
// console.log(removeFruit);

// fruits.push('Lemon'); // Add at the End
// console.log(fruits);

// Unshift
// let fruits = ['Mango', 'Apple', 'Orange'];

// fruits.unshift('Lemon'); // Add to the Front
// console.log(fruits);

// Delete
// delete fruits[1];
// console.log(fruits);

// Splice
// fruits.splice(0, 2); // Start number and remove nambers
// fruits.splice(2, 0, 'Lemon', 'Banana'); // Start number and remove nambers
// fruits.splice(2, 2, 'Lemon', 'Banana'); // Start number and remove nambers

// console.log(fruits);

// Concat
// const car1 = ['Abarth', 'Acura', ' Alfa Romeo', 'Aston Martin'];
// const car2 = ['Bentley', 'BMW', 'Buick'];
// const car3 = ['  Audi,'];
// // const carList = car1.concat(car2, car3);
// const carList = car1.concat(' Text');

// console.log(carList);

// Slice
// const car = ['Abarth', 'Acura', 'BMW', 'Bentle', 'Buick', 'Audi'];
// // const newArr = car.slice(1);
// // const newArr = car.slice(3);
// const newArr = car.slice(2, 4); // Between not including index (slice number and take number)

// console.log(newArr);

// To String
// const car = ['Abarth', 'Acura', 'BMW', 'Bentle', 'Buick', 'Audi'];

// console.log(car.toString());

/* Sorting */
// let fruits = ['Mango', 'Apple', 'Orange', 'Lemon', 'Banana'];
// // fruits.sort();
// // fruits.sort();
// fruits.reverse();

// console.log(fruits);

// const num1 = [40, 100, 1, 5, 25, 10];
// // num1.sort(function (a, b) {
// //   return a - b;
// // });

// // num1.sort(function (a, b) {
// //   return b - a;
// // });

// // num1.sort(function (a, b) {
// //   return 0.5 - Math.random();
// // });

// // console.log(num1);

// // function numMax(num1) {
// //   return Math.max.apply(null, num1);
// // }

// // console.log(numMax(num1));

// function numMin(num1) {
//   return Math.min.apply(null, num1);
// }

// console.log(numMin(num1));

/*********************************************************************** */

/* Dates */
// const x = new Date();
//(year, month, day, hours, minutes, seconds, milliseconds);
// const x = new Date(2021, 7, 27, 9, 15, 30, 0);

// console.log(x);

// // Date Formats
// ISO Date	"2021-07-25" (The International Standard)
// Short Date	"07/25/2021"
// Long Date	"July 25 2021" or "25 July 2021"

// If only one number, should include zero digit
// console.log(new Date('2021-07-25'));
// console.log(new Date('07 / 25 / 2021'));
// console.log(new Date('July 25 2021'));

// Date Get Methods
// getFullYear()	  Get the year as a four digit number (yyyy)
// getMonth()	      Get the month as a number (0-11)
// getDate()	      Get the day as a number (1-31)
// getHours()	      Get the hour (0-23)
// getMinutes()	    Get the minute (0-59)
// getSeconds()	    Get the second (0-59)
// getMilliseconds()	Get the millisecond (0-999)
// getTime()	        Get the time (milliseconds since January 1, 1970)
// getDay()	          Get the weekday as a number (0-6)
// Date.now()	        Get the time. ECMAScript 5.

// const date = new Date();

// console.log(date);
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDate());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());
// console.log(date.getMilliseconds());
// console.log(date.getTime());
// console.log(date.getDay()); //Get the weekday as a number (0-6)

// const date = new Date();
// const days = [
//   'Sunday',
//   'Monday',
//   'Tuesday',
//   'Wednesday',
//   'Thursday',
//   'Friday',
//   'Saturday',
// ];

// console.log(days[date.getDay()]);

// Date set methods
// setDate()	        Set the day as a number (1-31)
// setFullYear()	    Set the year (optionally month and day)
// setHours()	        Set the hour (0-23)
// setMinutes()	      Set the minutes (0-59)
// setMonth()	         Set the month (0-11)
// setSeconds()	       Set the seconds (0-59)

// const date = new Date();

// // console.log(date);
// // date.setFullYear(2022);
// // date.setFullYear(2020, 3, 7);
// // date.setMonth(3);
// // date.setHours(7);
// // date.setDate(7);
// // date.setMinutes(15);
// // date.setSeconds(30);

// console.log(date);

/******************************************************************** */

/** Conditions */

// const hour = 8;
// if (hour <= 10) {
//   greeting = 'Good Morning!';
// }

// console.log(greeting);

// const hour = 11;
// if (hour <= 10) {
//   greeting = 'Good Morning!';
// } else {
//   greeting = 'Not Morning';
// }

// console.log(greeting);

// const hour = 22;
// if (hour <= 10) {
//   greeting = 'Good Morning!';
// } else if (hour <= 20) {
//   greeting = 'Good Day!';
// } else {
//   greeting = 'Good Evening!';
// }

// console.log(greeting);

/** Switch */

// let day = 6;
// switch (day) {
//   case 0:
//     day = 'Sunday';
//     break;
//   case 1:
//     day = 'Monday';
//     break;
//   case 2:
//     day = 'Tuesday';
//     break;
//   case 3:
//     day = 'Wednesday';
//     break;
//   case 4:
//     day = 'Thursday';
//     break;
//   case 5:
//     day = 'Friday';
//     break;
//   case 6:
//     day = 'Saturday';
// }

// console.log('Today is ' + day);

// const fruit = 'lemon';
// switch (fruit) {
//   case 'apple':
//     console.log('Fruit is apple');
//     break;
//   case 'mango':
//     console.log('Fruit is mango');
//     break;
//   case 'orange':
//     console.log('Fruit is orange');
//     break;
//   default:
//     console.log('Fruit is not apple, mango and orange');
// }

/***For Loop */

const fruits = ['Mango', 'Apple', 'Orange', 'Lemon'];

// for (let i = 0; i < fruits.length; i++) {
//   // console.log(i);
//   // console.log('Fruit is ' + fruits[i]);
//   console.log('Fruit is ' + fruits[2]);
// }

// for (let i = 0; i < fruits.length; i++) {
//   if (i === 2) {
//     console.log('Banana');
//   }

//   console.log(fruits[i]);
// }

// for (let i = 0; i < fruits.length; i++) {
//   if (i === 2) {
//     break;
//   }

//   console.log(fruits[i]);
// }

/** Loop for in */
// const numbers = [5, 15, 25, 35, 45, 55];
// const people = ['John Doe', 'Steven Smith', 'Sara William'];

// for (let i in numbers) {
//   console.log(numbers[i]);
// }

// for (let i in people) {
//   console.log(people[i]);
// }

// numbers.forEach(function (value) {
//   console.log(value);
// });

// people.forEach(function (person) {
//   console.log(person);
// });

// people.forEach(function (person, index, array) {
//   // console.log(`${index}: ${person}`);
//   console.log(`${array}`);
// });

// // Loop While
// const numbers = [5, 15, 25, 35, 45, 55];
// const people = ['John Doe', 'Steven Smith', 'Sara William'];

// // let i = 100;
// // while (i < 0) {
// //   console.log(i);
// //   i++;
// // }

// //  Do While
// let i = 100;
// do {
//   console.log(i);
//   i++;
// } while (i < 10);

// /** Map */
// const users = [
//   { id: 1, name: 'Steven' },
//   { id: 2, name: 'John' },
//   { id: 3, name: 'Sara' },
// ];

// // const ids = users.map(function (user) {
// //   return user.id;
// // });

// // console.log(ids);

// // const userName = users.map(function (user) {
// //   return user.name;
// // });

// // console.log(userName);
// console.log(users);

/**************************************************************************** */

/** JS Scope */
// Global Scope
var x = 1;
let y = 2;
const z = 3;

// if (true) {
//   var x = 4;
//   let y = 5;
//   const z = 6;

//   console.log('Block Scope is ', x, y, z);
// }

function myFunction() {
  var x = 4;
  let y = 5;
  const z = 6;

  console.log('Function Scope is ', x, y, z);
}

myFunction();

console.log('Global Scope is ', x, y, z);

/**************************************************************************** */
