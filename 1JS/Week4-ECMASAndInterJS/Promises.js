//! PROMISES

/* Solves the same problem as a call back
but is cleaner code and easier to write. 

We can use "then" and "catch"
*/

//*EXAMPLES:

function handleEvent(value) {
    console.log(value);
}

function handleError(err) {
    console.log(err);
}

doSomethingThatReturnsAPromise()
    // passing function anonymously into "then"
    // if successful, logs out value
    .then((value) => {
        console.log(value);
    // if error, logs error
    }).catch((err) => {
        console.error(err);
    });

//*OR
//* using functions from line 11 & 15
doSomethingThatReturnsAPromise()
    // passing function anonymously into "then"
    // if successful, logs out value
    .then(handleEvent)
    // if error, logs error
    .catch(handleError);


/* A PROMISE is something that's going to happen in the future
it's either going to be successful or fail
if successful, then do this (function)
if fails, catch the error (function)
Avoid trees of curly braces
 */