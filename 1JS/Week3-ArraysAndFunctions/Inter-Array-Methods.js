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

//! OPEN CLASS

/*Write a function called reverseArray that accepts an array 
as an argument. Within the function, reverse the array. 
Return the reversed array.

You must use a method of the Array object. */
var input = [1, 2, 3, 4];
//write your code here//!MY ANSWER
// function reverseArray() {
//     return input.reverse();
// }
//! INSTRUCTORS:

function reverseArray(array){
    return array.reverse();
}
// do not change
// for testing purposes
console.log(reverseArray(input));

//! NEXT QUESTION
/*Write a function called printArray that accepts 
an array as an argument. Create a loop that will 
print each value of the passed in array.

Do not edit the array in its current state. 
You must use a method of the Array object.*/
//write your code here //!MY ANSWER
var input = ['Sam', 'Tom', 'Sally', 'Jane'];
function printArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
// do not change
// for testing purposes
printArray(input);

//! NEXT QUESTION
/*Given the attendanceList array, 
replace the first element in the array with "Steven".

Remember, arrays are 0 base index, meaning the first element 
is in position 0. For example, array[0] accesses the first element. */
var attendanceList = ['Eddie', 'Sarah', 'Jessica', 'Joey'];
//write your code here //!MY ANSWER
// attendanceList.splice(0, 1, 'Steven');
//!INSTRUCTORS
attendanceList[0] = 'Steven';
// this will print the result
console.log(attendanceList);

//! NEXT QUESTION
/*Write a function called joinArrays that accepts two arrays as arguments. 
Join the two arrays and return the new array.

You must use a method of the Array object
 */
var array1 = ["Sarah", "Lisa", "Jeff"];
var array2 = ["Henry", "Peter", "Julie"];
//write your code here //! MY ANSWER
function joinArrays(array1, array2) {
    return array1.concat(array2);
}
//! INSTRUCTORS
// function joinArrays(array1, array2){
//     let newArray = array1.concat(array2);
//     return newArray;
// }
// do not change
// for testing purposes
console.log(joinArrays(array1, array2));

//? .includes returns true if a value exists inside of an array
//* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

//! NEXT QUESTION
/*Using the given function, gradList, add the following names to 
the passed array: Mary, Steven, Eddie. Sort the remaining students from Z-A.

The passed array is the graduates variable. First add the names to 
the graduates array using push. Then sort the names and finally return the reversed array. */

var grads = ['Gerty','Sarah', 'Greg', 'Brock'];

function gradList(graduates){
    //write your code here //!MY ANSWER
//     grads = graduates.push('Mary', 'Steven', 'Eddie');
//     graduates.sort();
//     return graduates.reverse();
// }
//! INSTRUCTORS
    graduates.push("Mary", "Steven", "Eddie");
    graduates.sort();
    let reverseGrads = graduates.reverse();
    return reverseGrads;
}
console.log(gradList(grads));

//? The lastIndexOf() method returns the last index at which a 
//?given element can be found in the array, or -1 if it is not present. 
//* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf