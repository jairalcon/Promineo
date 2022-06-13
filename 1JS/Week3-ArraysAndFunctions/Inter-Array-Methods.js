//! INTERMEDIATE ARRAY METHODS

/*
- Map = invoke a function for each element in an array, then create a new array
from the returned values from of each iteration's function invocation. This is helpful
when we need to transform the data in an array in some manner
Array of names and we want to created an array of the length of each array 

- Reduce = useful for taking all values from in an array and reducing them
down to one value. Reducer function will be passed as an argument.
ex. summing all values, finding average of a set of values,
and returning object with properties composed of multiple objects.

- ForEach = similar to Map method, does not return a new array from the results
of the invocation. If we only need to perform a single action w/o storing value,
use ForEach

- Filter = allows us invoke a function that returns a boolean value on each element in an array. 
Filter returns a new array that contains all the elements where the invoked method return true.
This allows us to use a boolean expression to filter out specific elements, 
and only keep the ones that pass our boolean expression.

- Splice = can be used to alter contents on an array by adding, modifying, 
or removing elements from an array at a specific location.
Reading on MDN will be helpful
*/

//! MAP
let names = ['Sam', 'Tom', 'Eric', 'Sally', 'Nicholas'];
//* new array that contains lengths of strings
//* map takes a function, for each element in the array
//* has one parameter
let lengths = names.map(function(element) {
    //* length of elements that's passed in for function call
    return element.length;
});
//* log lengths array to see lengths of strings
console.log(lengths);

//* accumulator (first parameter passed into reduce method) is whatever was returned by previous execution
//* currentValue (second parameter) is currentIndex of array and array itself
//* reduce can take 2nd parameter after function, which is the initial value to start accumulator at, 
//* or 1st element of array
let sum = lengths.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue;
    //* find sum fo array but start counting at 10, end of function add comma 
    //* and add initial value we want to start at, which will result in 33 below
}/*function ends here */, 10);
console.log(sum);

//! FOR EACH
//* using names array, forEach method, pass in a function
//* parameter of function is the element of current iteration in array
names.forEach(function(element) {
    console.log(element);
});

//!FILTER
//* use names array again
//* filter takes a function
//* parameter is element
let evens = names.filter(function(element) {
    //* return this function
    return element.length % 2 == 0;
});
//* log out names that are even in value
console.log(evens);

//!SPLICE
//* 1st splice parameter is where to start
//* 2nd splice parameter is how many elements to remove
//* method returns an array of elements removed
let removedElement = names.splice(1, 1);
console.log(removedElement);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array