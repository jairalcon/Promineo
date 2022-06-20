//! ARROW FUNCTIONS

/* This makes code easier to read. It also adds the functionality
of binding the current scope to the functions that makes things 
easier than they used to be.
 */

//*EXAMPLES:
// Function that takes 2 parameters, firstName & lastName, then returns fullName
//* written using an arrow function

// let createFullName = (firstName, lastName) => firstName + " " + lastName;

//* using w/template literals
//* omitted function keyword, curly braces{}, return symbol
//* values w/ single line code are implicitly returned

const createFullName = (firstName, lastName) => `'This is the result:' ${firstName} ${lastName}`;

console.log(createFullName('Tom', 'Sawyer'));


/* If you have multiple lines or need curly braces bc of multiple lines
return keyword would be needed as below...*/

//*a is a string, b is a number

const someFunction = (a, b) => {
    let result = '';
    for (let i = 0; i < b; i++) {
        result += a;
    }
    return result;
};

//return 'Hello' 3 time = 'HelloHelloHello'

console.log(someFunction('Hello', 3));

/* If you just have one parameter, then you don't need ()
 ex. let someFunction = a => ...
   If you have 0 parameters, then you need empty ()
ex. let someFunction = () => ...
 */

/*
best practice is to create a CONST variable and assign the arrow function to it
so the value of the function won't be changed later on in the code.
 */


//!OPEN CLASS QUESTIONS:

/*Convert the following function into an arrow function. 
Refer to the new function as monthlyPayment. 

function myFunction(yearlyPayment) {
    let monthly = yearlyPayment / 12;
    return  monthly.toFixed(2);
}
*/
//!MY ANSWER:
var a = 1100;

//write your code here
// const monthlyPayment = yearlyPayment => {
//     const months = 12;
//     const monthly = (yearlyPayment / 12);
//     return monthly.toFixed(2);
// };
//! INSTRUCTORS:
//* line 74 consolidated line 67 & 68
let monthlyPayment = (yearlyPayment) =>{
    let monthly = yearlyPayment / 12;
    return monthly.toFixed(2);
};
//do not change
//for testing purposes
console.log(monthlyPayment(a));

//!NEXT QUESTION
/* Convert the following function into an arrow function. 
Refer to the new function as revert.

function myFunction(value){ return !value; }
 */
//! MY ANSWER:
var a = 0;
//write your code here
const revert = a => !a; 
//! INSTRUCTORS
// let revert = (value) => !value;

//do not change
console.log(revert(a));

//! NEXT QUESTION
/* Convert the following function into an arrow function. 
Refer to the new function as xor.

function myFunction(num1, num2) {
    return num1 ^ num2;
}
 */
//! MY ANSWER:
var a = 4;
var b = 6;
//write your code here
const xor = (a, b) => a ^ b;
//do not change
//for testing purposes
console.log(xor(a,b));
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR

//! NEXT QUESTION
/* Convert the following function into an arrow function. 
Refer to the new function as fancyAlgorithm.

function myFunction(num1, num2, num3) {
    let value = 0;
    for (let i = 0; i < num3; i++) {
        value = (value + num2) * num1;
    }
    return value / (num1 * (num3 * 10));
}
 */
//! MY ANSWER:
var a = 1;
var b = 2;
var c = 3;
//write your code here
const fancyAlgorithm = (num1, num2, num3) => {
    let value = 0;
    for (let i = 0; i < num3; i++) {
        value = (value + num2) * num1;
    }
    return value / (num1 * (num3 * 10));
};

console.log(fancyAlgorithm(a, b, c));

//! NEXT QUESTION
/* Convert the following function into an arrow function. 
Refer to the new function as pythagoras.

function myFunction(num1, num2) { 
    return Math.sqrt((num1*num2)+(num2*num2)); 
}
 */
//! MY ANSWER:
var a = 1;
var b = 2;
//write your code here
let pythagoras = (num1, num2) => Math.sqrt((num1*num2)+(num2*num2));
//do not change
//for testing purposes
console.log(pythagoras(a,b));