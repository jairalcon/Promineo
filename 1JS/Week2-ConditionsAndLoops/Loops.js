//! LOOPS (Repeat until condition is met)

//! FOR LOOP (for when you know how many times you want to loop)
//* for loop, best for arrays, collections elements, and objects
//* FIRST part initialization, let i = 0; 
//* NEXT part is condition, i < 10;
//* LAST part is increment
for (let i = 0; i < 10; i++) {
    //*body of the 'for loop'
    console.log(i);
}

console.log('whatever is next');
//* "i" lives inside the loop, that's why it's reusable
for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

let names = ['Sam', 'Tom', 'Hillary'];

for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

//! WHILE LOOPS (for when you want to stop looping)
//*
//* below is an infinite loop 
let a = 100;

while (a < 10) {
    console.log(a);
    //* adding a++ will stop iterating at 9 on line 32
    a++;
}

//! DO WHILE LOOP, will always iterate at least once
// do {
//     console.log(a);
// } while (a < 10);

//! FOR IN LOOPS (not normally used in this course)
//* short version of FOR LOOP
//* i will start at 0 and increment for us without i++
for (i in names) {
    //* prints names
    console.log(names[i]);
}
//* this gives index place of the values
for (i in names) {
    console.log(i);
}

//! FOR OF LOOP
//* will loop through the value itself 
for (i of names) {
    //* prints names
    console.log(i);
}
//* better naming conventions
for (name of names) {
    //* prints names
    console.log(name);
}



//! EXAMPLES

// var cupsOfFlour = 0;

// console.log('Scooping a cup of flour into the bowl');

// cupsOfFlour += 1;

// console.log('There are ' + cupsOfFlour + ' cups of flour in the bowl');

// console.log('Scooping a cup of flour into the bowl');

// cupsOfFlour += 1;

// console.log('There are ' + cupsOfFlour + ' cups of flour in the bowl');

// console.log('Scooping a cup of flour into the bowl');

// cupsOfFlour += 1;

// console.log('There are ' + cupsOfFlour + ' cups of flour in the bowl');

// console.log('Scooping a cup of flour into the bowl');

// cupsOfFlour += 1;

// console.log('There are ' + cupsOfFlour + ' cups of flour in the bowl');

// console.log('Scooping a cup of flour into the bowl');

// cupsOfFlour += 1;

// console.log('There are ' + cupsOfFlour + ' cups of flour in the bowl');

//! WHILE LOOP EXAMPLE
// var cupsOfFlour = 0;

// while (cupsOfFlour < 5) {

//   console.log('Scooping a cup of flour into the bowl');

//   cupsOfFlour += 1;

//   console.log('There are ' + cupsOfFlour + ' cups of flour in the bowl'); 

// }

//! FOR LOOP EXAMPLE
// for (var cupsOfFlour = 0; cupsOfFlour < 5; cupsOfFlour++) {

//     console.log('Scooping a cup of flour into the bowl');
  
//     console.log('There are ' + cupsOfFlour + ' cups of flour in the bowl'); 
  
//   }

//! i is the most common variable name in a FOR LOOP
//   for (var i = 0; i < 10; i++) {

//     console.log(i);
  
//   }

//! we can use loops and conditionals together. We can have loops inside of IF statements,
//! or vice versa.
// for (var i = 0; i < 100; i++) {

//     if (i % 3 == 0) {
  
//       console.log(i);
  
//     }
  
//   }

//! another loop is DO WHILE. This loop functions much like a While loop, 
//! except that a While loop has the possibility of never running if its Boolean expression 
//! evaluates to false the first time, and a Do While loop will always execute at least once 
//! since the expression is at the end.
// let i = 10;

// do {

//   i++;

//   console.log(i);

// } while (i < 3);

//! LIVE CODING CHALLENGE 6-2-22
//! with FOR LOOP
// function multiplesOf3and5(number) {
//   let sum = 0
//   for (let i = 1; i < number; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       sum += i
//     }
//   }
//   return sum;
// }

// multiplesOf3and5(100);


  //! with WHILE LOOP
// function multiplesOf3and5(number) {
//   let naturalNumber = 1;
//   let sum = 0;
  
//   while(naturalNumber < number){
//     if(naturalNumber % 3 == 0 || naturalNumber % 5 == 0){
//       console.log(naturalNumber)
//       sum += naturalNumber;
//     }
//     naturalNumber++;
//   }

//   return sum;
// }

// console.log(multiplesOf3and5(49));

//!FROM OPEN CLASS
//! example question
/* Using the supplied variables, create a LOOP of your 
choice that will add cups of rice to a bowl. 
Each time a cup of rice is added, print "The bowl contains X cups of rice.", 
where X is the number of cups added. Once the number of cups called 
for has been reached, print "We have enough rice!".
Note, we don't need to know if the bowl is empty.*/
//!MY ANSWER:
var requiredCupsOfRice = 5;
var currentCupsOfRice = 0;

  //* write your code here
// while (requiredCupsOfRice != currentCupsOfRice) {
//     console.log("The bowl contains " + (currentCupsOfRice + 1) + " cups of rice.");
//     currentCupsOfRice++;
// }
// console.log("We have enough rice!");
//!BETTER
  //* This is just one example using a while loop
while(currentCupsOfRice != requiredCupsOfRice){
  console.log('The bowl contains ' + (++currentCupsOfRice) + ' cups of rice.');
}
console.log('We have enough rice!');

//! INCORRECT example
  //* Because the increment operator (++) is postfix , 
  //* or after the currentCupsOfRice, this block of code will 
  //* print from 0 to one less than the required number of cups. 
  //* If we move the increment operator to the front, 
  //* this will work just the same.
// do {
//   console.log('The bowl contains ' + currentCupsOfRice++ + ' cups of rice.');
// } while (currentCupsOfRice !== requiredCupsOfRice);
// console.log("We have enough rice!")

//! next example
/* Create a FOR LOOP that prints out a multiplication table 
for num from 1 through 10 as follows (the value of num will be input by the user):
If a user enters 1, the console should print the following:
1 x 1 = 1
1 x 2 =2
1 x 3 = 3
1 x 4 = 4
1 x 5 = 5
1 x 6 = 6
1 x 7 = 7
1 x 8 = 8
1 x 9 = 9
1 x 10 = 10*/
//! MY ANSWER:
var num = 1;
//Write your code here
for(let i = 1; i <= 10 ; i++) {
    console.log(num + " x " + i + " = "  + num * i);
}

//! next example
/*Create a do/while loop that will print the userNumber 
and then add 6 after each loop. Stop the loop once the 
number is greater than or equal to 100. */
var userNumber = 4;
//write your code here //!MY ANSWER:
do {
  console.log(userNumber);
  userNumber += 6;
} while (userNumber <= 100);
//! OR INSTRUCTORS ANSWER:
// do {
//   console.log(userNumber);
//   userNumber = userNumber + 6;
// } while(userNumber <= 100);

//! next example:
/*Write a for loop that prints every third number from 0 up to, and including, 99.*/
//! MY ANSWER:
//write your code here
for(let i = 0; i <= 27; i++){
  if(i % 3 === 0) {
      console.log(i);
  }
}
//* would this work too? YES, it would.
var i = 0;
do {
  if( i % 3 === 0) {
    console.log(i);
  }
  i++;
}
while (i <= 27);

//! next example:
/* -Write a for loop that loops from 1-100 and prints the iteration count 
and "foo" if the iteration count is even.
-For example, if the iteration count is 2, 
then the console would read "2 foo". The final output 
should be "100 foo". Notice there is a space between the number and foo.*/
//!MY ANSWER:
//write your code here
for(let i = 1; i <= 27; i++) {
  if(i % 2 === 0) {
      console.log(i + " foo");
  }
}

//! next example:
/*Let's play a game. The game will consist of 100 turns. 
If the number of turns is even, you gain 5 points. If it's odd, you gain 3 points. 
If ever your score is equal to 125, you are reset back to 25 points. 
This will only be allowed to happen once. The game ends if you are able to 
make it through 100 turns or you reach more than 290 points, whichever comes first.
-Using a for loop, create the game.*/
//! MY ANSWER: IT WORKED!
// var points = 0;
// var pointsReset = false;
//write your code here
// end game if all 100 rounds are made OR if 290 points, whichever comes first
// for(let i = 0; i < 99; i++) {
//     // code for even turn, adding 5 points
//     if(i % 2 === 0) {
//         console.log("Turns: " + i + " Score: " + (points += 5));
//     }
//     //code for odd turns, add 3 points
//     if (i % 2 === 1) {
//         console.log("Turns: " + i + " Score: " + (points += 3));
//     } 
//     // if points = 125, reset back to points = 25, but only once
//     if (points == 125 && !pointsReset) {
//         points = 22;
//     }
// }
//! INSTRUCTORS (BETTER):
// for(var i = 0; i < 100 && points < 290; i++){
//   if(points == 125 && pointsReset === false){
//       points = 25;
//       pointsReset = true;
//   } else if(i % 2 === 0){
//       points = points + 5;
//   } else {
//       points = points + 3;
//   }
  
//   console.log("Turns: " + i + " Score: " + points)
// }

//! next example:
/*Check to see if userNumber is between 1 and 100. If it is, 
create a while loop that prints all integers starting with 
userNumber to 100. If not, print "Your number was not between 1 and 100." */
//! SLACKS ANSWER:
var userNumber = 25;
//write your code here
// if (!(userNumber <= 100 && userNumber >= 1)) {
//     console.log("Your number was not between 1 and 100.");
// }
// else {
//     while (userNumber <=100) {
//         console.log(userNumber);
//         userNumber++;
//     }
// }
//! INSTRUCTORS: (adding variable to hold count "counter")
var counter = userNumber;
if ( userNumber <= 100 && userNumber >= 1 ) {
    while ( counter <= 100 ) {
        console.log(counter++);
    }
} else {
    console.log("Your number was not between 1 and 100.");
}

//! next example:
/*Write a while loop that does a countdown from the variable countdown. 
This number represents the number that a user enters. 
Check to make sure the number is not larger than 10, but greater 
than or equal to 3. Each time the loop runs, print to the console 
the value of the counter followed by three periods (…). Once out of 
the loop, print to the console "We have lift off!". If a number is 
less than 3 or greater than 10, then the only message printed 
to the console is "We have lift off!"
-If the user inputs 3, the output should be:
3…
2…
1…
We have lift off!*/
//!Natalie's solution:
var countDown = 4;
//write your code here
// if((countDown <= 10) && (countDown >= 3)){
//     while(countDown > 0){
//         console.log(countDown + "...");
//         countDown--;
//     }
// }
// console.log('We have lift off!');

//! INSTRUCTORS:
if (countDown <= 10 && countDown >= 3) {
  //* the line below is different with >= 1
  while (countDown >= 1) {
      console.log(countDown + "...");
      countDown--;
  }
}
console.log("We have lift off!");