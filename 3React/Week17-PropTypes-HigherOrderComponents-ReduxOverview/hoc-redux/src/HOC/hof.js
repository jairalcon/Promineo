//! Part 1 - Higher-Order Functions
/* 
* HOF is a JavaScript Concept
* Regular JS Function - one or both of the following:
    *Takes one or more functions as parameters
    * Returns a function
*/

//! Part 2 - HOC takes another function as a parameter or returns a function
// takes in another function as a parameter
const functionOne = (func, message) => {
    console.log(message);
    func(message);
}

// not a HOF because it doesn't return a function
const functionTwo = message => {
    console.log('Message from functionTwo: ' + message);
}

// this is a HOF because it's returning a function
const functionThree = message => {
    return () => { console.log(message + ' from functionThree')};
}

functionOne(functionTwo, "Message from functionOne");

// const func = functionThree('Message');
// func();

// another set of () returns //! line 20 and 21 combined into one function call below
functionThree('Message')();

//! Part 3 - Use Cases
/*
Need to pass another function as a parameter which will make these HOF's
    * Array.forEach()
    * Array.map()
    * Array.filter()
    * Array.reduce()
*/

//!Part 4 - Array methods as HOF

let lannisters = ['Cersei', 'Jaime', 'Tyrion'];

//! part of long form
// function that is passed into map function
// const updateLannisters = value => value += " Lannister";

//.map() is a higher-order function //! part of long form
// let newLannisters = lannisters.map(updateLannisters);

let newLannisters = lannisters.map(value => value += ' Lannister');

console.log(newLannisters);

//! Part 5 - Higher-Order Components - Look at HOC-App.js
/*
    * React Concept 
    * Regular Function(Components) - both of the following
        * Takes Components as parameter
        * Returns a new Component
    * Does not Mutate
    * Enhance components with functions or data
    * Reusability
    * 
    * React-Redux
        * connect() is a HOF
    * React-Router
        * withRouter() is a HOF  
*/