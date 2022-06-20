/* Ecma-Script, 2015 has a new release, which was ES6.
This introduced creating Objects and Classes  */

//!EXAMPLES
/* LET exists within the blocks scope. Therefor we can reuse
variables names within the same code */

var x = 10;
{
    //* within this block x is this new value that does not impact
    //* outside the block
    let x = 2;
}

/* we can enforce const so that we or other developers
don't change or accidentally change */
//! CONST

const pi = 3.14159;

console.log(pi);
// cannot change the value of a "const"
// pi = 6;

// console.log(pi);