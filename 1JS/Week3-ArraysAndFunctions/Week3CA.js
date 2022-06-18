/*Quote "Someone who asks a question is a fool for a minute, 
but someone who doesn't ask is a fool for a lifetime." */

console.log('Jair Alcon - Week 3 Coding Assignment')

// Coding Steps:
// 1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
console.log('-----Answer 1: ------');

let ages = [3, 9, 23, 64, 2, 8, 28, 93];

console.log('Array "ages" =', ages);

// a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array (do not use numbers to reference the last element, find it programmatically, ages[7] - ages[0] is not allowed). Print the result to the console.
console.log('-----Answer 1.a: -----');

var firstIndex = ages.slice(0, 1);
console.log('first element =', firstIndex);

var lastIndex = ages.slice(-1);
console.log('last element =', lastIndex);

console.log('Subtraction of 93 - 3 =', lastIndex - firstIndex);
// b.	Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).
console.log('-----Answer 1.b: -----');

ages.push(25);
console.log('Array after pushing new element =', ages);

var firstIndex = ages.slice(0, 1);
console.log('first element still =', firstIndex);

var lastIndex = ages.slice(-1);
console.log('last element now =', lastIndex);

console.log('New total of 25 - 3 =', lastIndex - firstIndex);

// c.	Use a loop to iterate through the array and calculate the average age. Print the result to the console.
console.log('-----Answer 1.c: -----');

var sum = 0;

for (let index = 0; index < ages.length; index++) {
    console.log('The value of index:',index, ' in "ages" array =', ages[index]);
    //* += addition assignment
    sum += ages[index];
}
console.log('The sum of "ages" array indexes =', sum);
var totalIndexes = ages.length

console.log('The average of "ages" array indexes =', averageAge = sum / totalIndexes);

// 2.	Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
console.log('-----Answer 2: ------');

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

console.log('Array "names" =', names);

// a.	Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.
console.log('-----Answer 2.a: ------');

var sum = 0;

for (let i = 0; i < names.length; i++) {
    console.log('The value of index: ',[i],'=', names[i].length);
    sum += names[i].length;
}
console.log('The sum of name lengths =' ,sum);
var totalIndexes = names.length;

console.log('The average index length of "names" array =', averageNameLength = sum / totalIndexes);


// b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.
console.log('-----Answer 2.b: ------');

var allNames = ''

for (let i = 0; i < names.length; i++) {
    console.log('Index:', i ,'contains the name:', names[i]);
    allNames += (names[i] + ' ');
}
console.log('Array "names" with a space between each name =', allNames);

// 3.	How do you access the last element of any array?
console.log('-----Answer 3: ------');

console.log('Last element of "names" array = ' ,names.slice(-1));

// 4.	How do you access the first element of any array?
console.log('-----Answer 4: ------');

console.log('First element of "names" array = ', names.slice(0, 1));

// 5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.
console.log('-----Answer 5: ------');

var nameLengths = [];

for (let i = 0; i < names.length; i++) {
    console.log('Index:', [i], names[i] ,'contains:', names[i].length, 'letters.');
    nameLengths[i] = names[i].length;
}

console.log('Array "nameLengths" =', nameLengths);

// For example:

// namesArray = ["Kelly", "Sam", "Kate"] //given this array
// nameLengths = [5, 3, 4] //create this new array


// 6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.
console.log('-----Answer 6: ------');

var sum = 0;

for (let i = 0; i < nameLengths.length; i++) {
    console.log('Index:', [i],'contains the value:', nameLengths[i]);
     sum += nameLengths[i];
}
console.log('The sum of the elements in Array "nameLengths" is:', sum);

// 7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').
console.log('-----Answer 7: ------');

function greeting(word, n) {
    let result = word.repeat(n);
    return result;
}

console.log('Repeating "word" value =', greeting('Hello', 3));

// 8.	Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).
console.log('-----Answer 8: ------');

function fullName(firstName, lastName) {
    result = firstName + ' ' + lastName;
    return result;
}

console.log('Hello, there. I am', fullName('Obi-Wan', 'Kenobi' + '.'));

// 9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.
console.log('-----Answer 9: ------');

var numArray = [1, 3, 5, 25, 26, 30, 40];

var sum = 0;

function sumCalculator(numArray) {
    for (let i = 0; i < numArray.length; i++) { 
        console.log('Index:',[i], ' = value:', numArray[i]);
        //iterating through array starting at 0, then adding next array to sum.
        sum += numArray[i];
        console.log('Sum += in this iteration:', sum);
    }
    if (sum > 100) { 
        return true;
    }
}

console.log('"numArray" sum is greater than 100, therefore:', sumCalculator(numArray));


// 10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.
console.log('-----Answer 10: ------');

console.log('I am using "numArray" from line 148.');

var sum = 0;

function averageCalculator(numArray) {
    for (let i = 0; i < numArray.length; i++) {
        console.log('Index:',[i], ' = value:', numArray[i]);
        //iterating through array starting at 0, then adding next array to sum.
        sum += numArray[i];
        console.log('Sum += in this iteration:', sum);
    }
    //taking result of "sum" and dividing by number of elements in "numArray" on line 148
    return sum / numArray.length;
}

console.log('The average of "numArray" elements =', averageCalculator(numArray));


// 11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
console.log('-----Answer 11: ------');

var array1 = [6, 7, 8, 9, 10];
var array2 = [1, 2, 3, 4, 5];

let sum1 = 0;
let sum2 = 0;

function averageCalcOf2Arrays(array1, array2) {
    for (let i = 0; i < array1.length; i++) {
        console.log('Index:',[i], 'of "array1" = value:', array1[i]);
        sum1 += array1[i];
        console.log('"sum1" += in this iteration:', sum1);
    }
    for (let j = 0; j < array2.length; j++) {
        console.log('Index:',[j], 'of "array2" = value:', array2[j]);
        sum2 += array2[j];
        console.log('"sum2" += in this iteration:', sum2);
    }
    if (sum1 / array1.length > sum2 / array2.length) {
        console.log('Average of "array1" =', sum1 / array1.length, '||', 'Average of "array2" =', sum2 / array2.length)
        return true;
    } else false;
}

console.log('Therefore, "array1" > "array2" =', averageCalcOf2Arrays(array1, array2));


// 12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
console.log('-----Answer 12: ------');

var isHotOutside = true;
var moneyInPocket = 11.00;

function willBuyDrink(isHotOutside, moneyInPocket) {
    if (moneyInPocket > 10.50 && isHotOutside === true) {
        return true;
    } else false;
}

console.log('Is it possible to buy a drink on this hot day? Answer =', willBuyDrink(isHotOutside, moneyInPocket));

// 13.	Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
console.log('-----Answer 13: ------');

// if the budget us 75+, then we can get a dog. If below 50, then can get a cat.

let budget = 75;

function getCatOrDog(budget) {
    if (budget >= 75) {
        return 'Yay! We can get a dog today!';
    }
    else if (budget < 50) {
        return 'Yay! We might not be able to get a dog, but we can get a cat today!';
    }
    else return 'Hmm, we can think about it.'
}

console.log('Since our budget =', budget + '.', getCatOrDog(budget));