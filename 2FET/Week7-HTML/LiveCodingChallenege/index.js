//! FRONT END LIVE CODING CHALLENGE

//todo Finding the index at which the sum of values on each side of the index are equal to each other
//*Equal side of an array
let arr = [1, 2, 3, 4, 3, 2, 1];

function findEvenIndex(arr)
{
    //sum of entire array
    let sum = 0;
    //sum of left side of the array
    let leftSum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i].length
    }    
    for (let j = arr.length; i > -1; i--) {
        leftSum += arr[j].length
        }        
    
    return -1;
}
console.log(findEvenIndex(arr));


// function findEvenIndex(arr) {
//     let i = 0, j = 0;
//     let k = 2, l = arr.length-1;
//     for(let p=1; p<arr.length-1; p++) {
//         if( checkSlice(i,j) == checkSlice(k,l) ) return p;
//         j++;
//         k++;
//     }
//     return -1;
// }

// function checkSlice(arr,a,b) {
//     return arr.slice(a,b).reduce((sum,current) => sum + current, 0);
// }
// console.log(findEvenIndex(arr));



//! NEXT QUESTION
//todo write a function that returns a new array sorted and without duplicates

let s1 = 'xyaabbbccccdefww'
let s2 = 'xxxxyyyyabklmopq'

function longest(s1, s2) {
    // first is an array of []
    // and using new Set data structure to wrap around the data
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
    return [...new Set(s1.split('').concat(s2.split('')))].sort().join('')
}

console.log(`This is the next set with no duplicates`, longest(s1, s2));


//! NEXT QUESTION
//todo should return an array with even integers, if not, then returns value of integer is prime
let integer = 0;

function divisors(integer) {
    //creating empty value
    let arr = [];
    for (let i = 2; i < integer; i++) {
        //checking divisor value
        if (integer % i === 0) {
            //if even placed in array variable
            arr.push[i]
        }
    }
    // if result is not even, then it's a prime
    let result = arr.length !== 0 ? r: `${integer} is prime`
    return result;
};
console.log(divisors(integer));


//!NEXT QUESTION
//todo create a function that multiplies each element 
let numbers = [1, 2, 2]

function squareSum(numbers) {
  // example for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9
  let sum = 0;
    for (let i = 0; i < numbers.length; i++){
    sum += numbers[i] * numbers[i];
    }
    return sum;
}

console.log(`This is the sum of the array:`, squareSum(numbers));