//     // ask the user for their question
// var question = prompt("What is your question?");
// // console.log(question);
// while (!question.includes("?")) {
//     question = prompt("What is your QUESTION?");
// }
//     // check the question for a few things
//     // give them an answer
//     //* always has to have an "if"
// if (question.includes("love")) {
//     alert("NOO!");
// }
// else if (question.includes("money")) {
//     alert("YES!");
// } 
// else {
//     alert("Maybe...");
// }

//! COUNTING PRACTICE PROBLEM

// ask the user for a number to count towards
var number = prompt("What number should I count to?");
number = parseInt(number);
console.log(number);

//* this prompts again when NaN is entered
while (number === NaN) {
    number = prompt("What number should I count to?");
    number = parseInt(number);
}

/* count up to that number, starting at 1, logging each 
number you count to the console (or alerting it)*/
for (let i = 0; i < number; i++) {
    //the code to run multiple times
    alert(i + 1);
}