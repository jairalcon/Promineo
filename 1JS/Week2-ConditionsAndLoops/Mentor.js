//! LOOPS & CONDITIONS MENTOR W/FRANK S.
//! 

let grade = 79;

//* display "Good job" if over 80

//* if under 80 display "Study harder"
if (grade > 80) {
    console.log("Good job");
} else console.log("Study harder");

//* while loop displays 1-10
let displayedNumber = 0;

while (displayedNumber <= 10) {
    console.log(displayedNumber);
    //* without iterator = infinite loop 
    displayedNumber++;
}

/* Check to see if userNumber is between 1 and 100. If it is, 
create a while loop that prints all integers starting with 
userNumber to 100. If not, print "Your number was not between 1 and 100." */

// userNumber = 50;
//!WHILE LOOP
// if (userNumber >= 1 && userNumber <= 100) {
//     while (userNumber <= 100) {
//         console.log(userNumber);
//         userNumber ++;
//     }
// } else console.log("Your number was not between 1 and 100.");

//! WITH FOR LOOP
for (let i = 50; i <= 100; i++) {
    console.log(i);
}