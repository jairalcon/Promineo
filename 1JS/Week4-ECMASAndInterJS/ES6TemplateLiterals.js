//! TEMPLATE LITERALS

/* These enhance the way we work with strings.
Declared just like strings, but wrapped in ``
We can create multi-line strings without concatenation.

*/

//*Example:

//* recognizes the spaces and new lines
let myString = `Hello
world
my name
is Nick.`;

console.log(myString);

//* Before we would do the following and is more difficult to read.
//* 
let anotherString = `Hello\nworl\nmy name\nis Nick.`;

console.log(anotherString);

//OR

//* This is still more work than template literals
let anotherString2 = 'Hello' +
    '\nworld' +
    '\nmy name' +
    '\nis Nick.';

console.log(anotherString2);

//*Interpolate = execute code inside a string or different language.
//* We can do this with {}, preceded by a $ or ${}

//*Example;

/* Anything inside the curly braces will be executed
and concatenated to the string.
Useful when you have a string and want to make it more dynamic.

You can make templates that can take variables or code
and make them dynamic */
console.log(`Six times five = ${5 * 6}`);