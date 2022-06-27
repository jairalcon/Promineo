//* Using try-catch blacks to catch errors
//* we can determine how to handle them


//* trying to push to array that doesn't exist
//* crashed and stopped running
// list.push('Hello');
// console.log('goodbye');

try {
    list.push('Hello');
} catch (err) {
    console.log(err);
}

console.log('goodbye');

/*
* Even though exception is thrown, the code still runs completely
* We don't wrap code that accesses arrays 
* We wrap code that we don't have control over in a try-catch block 
*/
