//! BOOLEAN OPERATORS AND CURRICULUM 
//* boolean operators

var firstName = 'Sam';

//* if boolean is true then the block of code in the {} will run.
if (firstName == 'Sam') {
    console.log('Hello, Sam!');
    //* if boolean above is false, then the second block below will run.
} else {
    console.log('Hey, ' + firstName);
}


var costOfMilk = 3.00;

//* since we used "<" we order the numbers by smallest to greatest
if (costOfMilk < 2) {
    console.log('We will buy 2 gallons');
} else if (costOfMilk < 3) {
    console.log('We will buy only 1 gallons')
    //* default below if above arguments are false
} else {
    console.log('No thanks, way too expensive.');
}


var grade = 'A';

switch (grade) {
    case 'A':
        console.log('90-100');
        //* break will stop the code once condition is met
        break;
    case 'B':
        console.log('80-89');
        break;
    case 'C':
        console.log('70-79');
        break;
    default:
        console.log('0-69');
}


var a = 5;
var b = 6;
//* this can work but it's a lot for one arguments
//* if there are multiple divergences, then this is great to use
if (a == 5) {
    if (b == 6) {
        console.log('a is 5 and b is 6.');
    } else {
        console.log('a is 5 but b is not 6.');
    }
}

//* this flattens out the code and makes it cleaner
//* only if there are no other arguments
if (a == 5 && b == 6) {
    console.log('a is 5 and b is 6.');
}