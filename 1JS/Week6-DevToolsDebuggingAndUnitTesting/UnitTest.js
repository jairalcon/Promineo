//! UNIT TESTING
/* 
Writing code to test pieces of code
To learn more refer to documentation: 
Mocha: https://mochajs.org/
Chai: https://www.chaijs.com/

A more modern methodology around unit testing suggests that tests 
should be written first then write code that passes those tests after
that logic is defined in the unit tests.
This is called TEST DRIVEN DEVELOPMENT.
*/

function doSomething(x, y) {
    if (typeof x != 'string') {
        throw new Error('x must be a string');
    }
    return x + y;
}
