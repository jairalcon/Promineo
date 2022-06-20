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


