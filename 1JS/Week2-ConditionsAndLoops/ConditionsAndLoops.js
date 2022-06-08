// create a variable called speedLimit and another called mySpeed
// set their values to numbers between 1 and 100
let speedLimit = 50;
let mySpeed = 65;

// using a conditional, determine if mySpeed is greater than the speedLimit
if (mySpeed > speedLimit) {
// if true, print "Slow Down! Mom is mad!" to the console
    console.log("Slow Down! Mom is mad!");
} else if (mySpeed == speedLimit) {
    // if mySpeed is equal to the speedLimit, print "Everyone is happy!" to the console
    console.log("Everyone is happy!");
} else { //* this else is inferred by the two statements above
    // if mySpeed is less than the speedLimit, print "Speed up! Dad is mad!"
    console.log("Speed up! Dad is mad!");
}





// create two variables, one named alarmSet, the other openDoor
// set them to a boolean value
let alarmSet = true;
let openDoor = false;

// using a conditional, determine if alarm is set.
//* above variables are defined. Therefore it's easier to only use them below.
if (alarmSet && openDoor) {
    // if alarm is set and door is set to open, print "Sound Alarm!" to the console
    console.log("Sound Alarm!")
} else {
    // otherwise, print "Everything is fine." to the console.
    console.log("Everything is fine.")
}




// create two variables, username and password
let username;
let password;
// create a conditional, if the username is "Tommy123" and the password is "12345"
// or the username is "Timmy456" and the password is "6789", print "Admin Login Successful" to the console
if ((username === "Tommy123" && password === "12345") || (username === "Timmy456" && password === "6789")) {
    console.log("Admin Login Successful");
} else {
    // otherwise, print "Admin Access Denied"
    console.log("Admin Access Denied");
}





// write code that will set the value of studentClass based on studentGrade
// studentGrade will be K-12
// K-6 will be Elementary
// 7-8 will be Middle
// 9 will be Freshman, 10 Sophomore, 11 Junior, 12 Senior
// Anything other than these values will return "Error" to the console
let studentGrade = 10;
let studentClass;
//* if we see repeating code then we can make it more concise
switch(studentGrade) {
    case "K":
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        studentClass = "Elementary";
        break;
    case 7:
    case 8:
        studentClass = "Middle";
        break;
    case 9:
        studentClass = "Freshman";
        break;
    case 10:
        studentClass = "Sophomore";
        break;
    case 11:
        studentClass = "Junior";
        break;
    case 12:
        studentClass = "Senior";
        break;
    default:
        console.log("Error");
}
console.log(studentClass);



// write a for loop that will iterate backwards from 10 to -10
//* 
for (let i = 10; i >= -10; i--) {
    console.log(i);
}

// write a do/while loop that prints 1 through 50
//! always start with the WHILE
let iterator = 1;
do {
    console.log(iterator);
    //*without iterator ++, it is an infinite loop
    iterator++;
} while(iterator <= 50);


// edit the previous do/while loop so that it prints the remainder when the loop number is divided by 4

//* 10/5 = 2 (modulo/modulus operator = %)
//! 7/3 = 2R1 = 1 (whatever is left over)

let myIndex = 1;
console.log("my iterator equals:", iterator);

do {
    //* this will help explain in the console
  console.log(myIndex, "Do this a number of times:", iterator % 5);
  iterator++;
  myIndex++;
} while (iterator <= 50);

// Someone messed up the following for loop
// fix the following infinite loop, uncomment to test
 
/*
    for (let i = 11; i > 10; i++) {
        console.log(i);
    }
*/

    //* one example of fixing an infinite loop
// for(let i = 1; i < 10; i++){
//     console.log(i);
// } 

    //* will print through 11-99
// for(let i = 11; i < 100; i++){
//     console.log(i);
// } 

    //* this will print backwards from 110-11
// for(let i = 110; i > 10; i--){
//     console.log(i);
// } 

//! FROM OPEN CLASS - CONDITIONALS

/* Create a nested if statement (the second if statement 
will only run if the first one evaluates to true) that 
checks to see if num1 is greater than or equal to num2.
If true then check to see if num3 is greater than or equal 
to num4. If both conditions are true print "Both statements
are true." If the first condition is true but the second isn't, 
print "The first statement is true, but the second is not."
After the outer if statement, print "Program ended."*/

var num1 = parseInt(input[0]);
var num2 = parseInt(input[1]);
var num3 = parseInt(input[2]);
var num4 = parseInt(input[3]);
    //write your code here //!MY CODE BELOW
// if(num1 >= num2) {
//     if (num3 >= num4) {
//         console.log("Both statements are true.");
//     } console.log("Program ended.");
// } else if(num1 >= num2) {
//     console.log("The first statement is true, but the second is not.");
// } else console.log("Program ended.");
    //!OR BETTER WRITTEN:
 //write your code here
 if ( num1 >= num2 ) {
    if ( num3 >= num4 ) {
        console.log("Both statements are true.");
    } else {
        console.log("The first statement is true, but the second is not.");
    }
}
console.log("Program ended.");

/* Write an if statement that compares num1 to num2 
and prints the larger of the two. 
If they are equal, print "Num1 is equal to Num2".*/

    //write your code here //!MY CODE
// if(num1 > num2) {
//     console.log(num1);
// } else if(num2 > num1) {
//     console.log(num2);
// } else {
//     console.log("Num1 is equal to Num2");
// }

    //write your code here //!BETTER
if(num1 == num2){
    console.log("Num1 is equal to Num2");
   }
   else if(num1 < num2){
    console.log(num2)
   } else {
    console.log(num1)
   }