//create a variable to hold the quantity of available plane seats left on a flight
//* using number as variable data type
let availablePlaceSeats = 6;
		
//create a variable to hold the cost of groceries at checkout
//* using number as variable data type
let costOfGroceries = 23.64;

//create a variable to hold a person's middle initial
//* using string as variable data type
let middleInitial = 'L';

//create a variable to hold true if it's hot outside and false if it's cold outside
//* using boolean as variable data type
let isHotOutside = false;

//create a variable to hold a customer's first name
//* using string as variable data type
let customerFirstName = 'Sally';

//create a variable to hold a street address
//* using string as variable data type when using both numbers and strings
let streetAddress = '1234 W Easy St';

//print all variables to the console
console.log(availablePlaceSeats);
console.log(typeof availablePlaceSeats);
console.log(costOfGroceries);
console.log(typeof costOfGroceries);
console.log(middleInitial);
console.log(typeof middleInitial);
console.log(isHotOutside);
console.log(typeof isHotOutside);
console.log(customerFirstName);
console.log(typeof customerFirstName);
console.log(streetAddress);
console.log(typeof streetAddress);


//a customer booked 2 plane seats, remove 2 seats from the available seats variable
//* resetting value to already declared variable
availablePlaceSeats = availablePlaceSeats - 2;
console.log(availablePlaceSeats);

//impulse candy bar purchase, add 2.15 to the grocery total
//* resetting value to already declared variable
costOfGroceries = costOfGroceries + 2.15;
console.log(costOfGroceries);

//birth certificate was printed incorrectly, change the middle initial to something else
//* reset value of string variable data type
middleInitial = 'A';
console.log(middleInitial);

//the season has changed, update the hot outside variable to be opposite of what it was
//* using '!' to flip the boolean operator variable
isHotOutside = !isHotOutside;
console.log(isHotOutside);

//create a new variable called full name using the customer's first name, the middle initial, and a last name of your choice
//* we'll use the + concatenation operator
let fullName = customerFirstName + ' ' + middleInitial + " Smith";
console.log(fullName);

//print a line to the console that introduces the customer and says they live at the address variable
//*
console.log("Hi, my name is " + customerFirstName + " and I live at " + streetAddress + ".");