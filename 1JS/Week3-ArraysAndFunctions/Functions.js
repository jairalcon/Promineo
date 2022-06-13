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