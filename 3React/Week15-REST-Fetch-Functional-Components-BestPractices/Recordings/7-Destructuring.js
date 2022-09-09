/* allows us to take array or object and break them into distinct variables

specifically with imports, export might have multiple classes*/
let array = [3, 5, 7, 9];
let object = {
    propertyOne: 'p-one',
    propertyTwo: 'p-two',
    propertyThree: 'p-three'
}

let [a, b, c] = array

console.log(c)
console.log(b)

let { propertyOne, propertyTwo } = object

console.log(propertyTwo)

// import React, { Component } from 'react';