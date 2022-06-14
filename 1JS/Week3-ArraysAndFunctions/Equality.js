/* In JS we have three operators that look very similar but do something different.
Assignment Operator, Equality Operator, Identity (Strict) Operator
Main difference to know is between Equality and Identity.
Equality Operator will implicitly convert types to see if there is a match
ex. 2 == '2' will be true.
Identity Operator will will check both value and type. Best practice to use this operator.
 */

//* looks at both values and says they are equal to each other even though
//* their types are different.
console.log(2 == '2');
//* looks at both the value and the type of value
//* best practice to use Identity (Strict) Operator
console.log(2 === '2');