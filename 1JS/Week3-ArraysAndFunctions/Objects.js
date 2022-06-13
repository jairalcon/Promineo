//! OBJECTS

/*
A lot of the data we work with in JS is organized into a structure called Object.
Objects have properties with functionalities.
Example:
DVD
Declaring Object Literals = makeup objects property and functionality (Methods)

If it's related data we can put it together instead of having multiple 
variables floating around.

*/

//*creating a regular variable
//* then set it equal to curly braces
let dvdPlayer = {
    //* key value pairs names of properties or methods
    //* values describes object
    height: 3,
    width: 18,
    depth: 12,
    weight: 7,
    color: 'black',
    dvdName: 'Mulan',
    //* method that provides functionality
    printDVDName: function() {
        //* .this calls/refers to the property object within itself
        console.log(this.dvdName);
    }
};

//* use dot notation to access values of objects
console.log(dvdPlayer.depth);
dvdPlayer.printDVDName();

//* JS comes with built-in objects such as string and array
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array