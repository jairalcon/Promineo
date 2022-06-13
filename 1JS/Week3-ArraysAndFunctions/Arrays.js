//! ARRAYS
/* Customer Relation Management (CRM) 
- Assigning values for each customer would be tedious
and would have to change the code every time a customer
occurrence happened.*/

/* Arrays
-Allows us to groups similar variables together
and refer to the values by location. We could assign 
an array to a variable like customerNames, then add and
remove customer names from array.
-We can then access each specific name based on its location
in the array. The location, or index, of each element is zero based.
-First value is a position 0 
-Last value will always be located
at the index just 1 less than the length of the array, 
or the number of elements in the array.
-To declare an empty array, we declare en empty
variable, then assign value.
 */

var customerNames = [];
customerNames.push('Sam Smith');
customerNames.push('Tommy Guns');

/* Arrays allows us to dynamically add or remove,
as well as adding functions within arrays without
repeating lines of code.
*/

//* i is less than array, or customerNames.length
for (let i = 0; i < customerNames.length; i++) {
    //* prints the length of the array
    //* instead of console.log 100 times we can use the 1 line
    console.log(customerNames[i]);
}

//! not sure what this means
// we could use the FOR OF
for(name of customerNames) {
    console.log(name);
}

//*access first elements in array
// console.log(customerNames[1]);

