//!FUNCTIONS
/* What if I have code that I want to user over
and over? 
-I want to modularize it so I can use it anytime.
-Functions allow us to write reusable code.*/

function myFunction () {
    //* braces make up the function body
    //* code inside will be executed every time the function is called
    for (let i = 0; i < 100; i++) {
        //* this will print out 0 - 99
        //* we can put loops, variables, etc
        console.log(i);
    }
}
//* refer to function name to call it
//* calling function === invoking function with function name followed by ()
// myFunction();

/* We can add parameters () to the function
- best practice to keep parameter number low
- best practice to have each parameter do one thing
- */
//* create function to createFullName
//* parameters are like parking spots
function createFullName(firstName, lastName) {
    //* 1 print fullName to the log concatenated 
    // console.log(firstName + ' ' + lastName);
    //* 2 return gives something back
    //* input something and get the remainder returned
    return firstName + ' ' + lastName;
}
//* 3 different variation
var fullName = createFullName('Tom', 'Sawyer');
console.log('Welcome, ' + fullName);
//* arguments are like cars
/* cars go into parking spots
- remember that parameters are placeholder for values being placed in later */
// /*1*/ createFullName('Tom', 'Sawyer');
// /*2*/ console.log(createFullName('Tom', 'Sawyer'));

//* names of functions should be VERBS, since they are actions. The JS
//* community uses this approach as the standard.

//!OPEN CLASS QUESTIONS

/* Create a function called findCircumference that returns 
the circumference of a circle if given the radius. */
var a = 7;
//! MY ANSWER:
// function findCircumference(a) {
//     return 2 * Math.PI * a;
// }
//! INSTRUCTORS:
function findCircumference(radius) {
    return Math.PI * (2 * radius);
}
//do not change below, used for testing purposes
console.log(findCircumference(a));

//! NEXT QUESTION:
/*Create a function called isBlue. It takes one parameter. Return true 
if it is passed "blue", otherwise return false.

The passed value can be "blue" with any of the letters capitalized as well. 
(i.e."Blue", "bLue", "BLUE", etc…) All forms of the word blue should return true. 
Use toLowerCase() on the passed value to accomplish this. 
For example, myVariable.toLowerCase() will convert whatever 
myVariable is to all lowercase. */
var a = 'blue';
//write your code below //! MY ANSWER
function isBlue(a) {
    return a.toLowerCase() === 'blue';
}
//do not change below, used for testing purposes
console.log(isBlue(a));


//! NEXT QUESTION:
/*Write a function called speakFriend that takes one parameter. 
Return the string "Access Denied". But, if the passed in value 
is "Mellon", return "Enter" */
var a = 'Hello';
//write your code below //!MY ANSWER
// function speakFriend(a) {
//     if (a === 'Mellon') {
//         return 'Enter';
//         //* else is not required necessarily in this case.
//     } else return 'Access Denied';
// }
//! INSTRUCTORS:
function speakFriend(a){
    if(a == "Mellon"){
        return "Enter";
    }
    //* A function will end once returned. 
    //* Anything after will be ignored and the function will exit. 
    return "Access Denied";
}
//do not change below
console.log(speakFriend(a));

//! NEXT QUESTION:
/* Create a function named returnSum that accepts 3 integer variables 
named num1, num2, and num3. Return the sum of the three variables.
 */
var a = 1;
var b = 2;
var c = 3;
//write your code below //!MY ANSWER
function returnSum(num1, num2, num3){
    return num1 + num2 + num3;
}
//do not change below, used for testing purposes
console.log(returnSum(a,b,c));

//! NEXT QUESTION:
/*Create a function named checkout that accepts 2 variables 
named cardBalance and price. If the price is more than the 
card balance, return false. Otherwise, return the new card balance.*/
var cardBalance = 11;
var price = 7;
//write your code below //!MY ANSWER
//*JavaScript allows infinite arguments to be passed.
function checkout(cardBalance, price) {
    if (price > cardBalance) {
        return false;
    } return cardBalance - price;
}
//! INSTRUCTORS
// function checkout(cardBalance, price){
//     if(price > cardBalance) { return false; }
//     else { return cardBalance - price; }
// }
//do not change below, used for testing purposes
console.log(checkout(cardBalance, price));

//! NEXT QUESTION:
/*Write a function called sumOfTwo that takes two numbers as 
parameters and returns the sum. */
var a = 22;
var b = 22;

//write your code below //! MY ANSWER
function sumOfTwo (a, b) {
    return a + b;
}
//do not change. Used for Testing purposes
//* if only one parameter is passed = NaN
console.log(sumOfTwo(a, b));

//! NEXT QUESTION:
/*Write a function called loopUntilX that takes one parameter. 
Within the function, write a loop that loops as many times as 
the passed in value, starting at 0. Within the loop, print the 
number of iterations to the console. Once the loop is done, return true. */
let param = 10;
//write your code below //! MY ANSWER
// function loopUntilX(x) {
//     for (let i = 0; i < x; i++) {
//     console.log(i);
//     } return true;
// }
//! DO WHILE example
function loopUntilX(param) {
    let i = 0;
    do {
        console.log(i);
        i++;
    } while (i < param);
    return true;
} 

//do not change below, used for testing purposes
//* if string 'testing' were passed instead of number...
//* true would be returned
console.log(loopUntilX(x));