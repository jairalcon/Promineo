//! CALLBACKS

/* JS is single threaded = run one line of code at a time.

JS was built to be event drive. Doesn't wait for each line to
be completed, rather it continues to run.

However, this means that some lines haven't been executed
by the time others have.
 */

//*EXAMPLE:

/* username would be logged as undefined bc 
it hasn't returned yet and line 16 would have run already */

let username = sentHttpRequest('getUser');
console.log(username);

/** A CALLBACK is a function within in function */

function logUsername(user) {
    console.log(user);
}

sendHttpRequest('getUser', logUsername);

/* logUsername function is passed into sendHttpRequest function as an argument 
the sendHttpRequest function does everything it needs and then
the last line of code in that function would be a call to our logUsername function
where it passes the userName that it grabbed in as an argument. 
*/

/*
using arrow function this creates a function and it's anonymous because
it's not a assigned.
 */
sendHttpRequest('getUser', user => console.log(user));