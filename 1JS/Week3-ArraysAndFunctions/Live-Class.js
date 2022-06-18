/******** Arrays ********/

let names = [
    "Abigail", 
    "Marco", 
    "Simone", 
    "Derek"
]

let allTheNames = ""

for(let i = 0; i < names.length; i++) {
    let name = names[i]
    allTheNames += " " + name;
}

//* undo everything we did in the previous loop
allTheNames = "";

names.push("Aliyah");
names.splice(3, 1)

for(let name of names) {
    allTheNames += " " + name;
}

console.log(allTheNames)

/******** Functions ********/

function cookInOven(food, temperature) { // let food = 350, let temperature = "rice"
    let cookedFood = food + " cooked at " + temperature;
    return cookedFood;
}

function make5Sandwiches() {
    for(let i = 0; i < 5; i++) {
        console.log("making a sandwich")
    }
}
//* doubles to 10 times total
make5Sandwiches();
make5Sandwiches();

console.log(cookedFood);

let cookedRice = cookInOven(350, "rice",);
console.log(cookedRice);


let ingredients = [
    "rice", 
    "chicken", 
    "grilled peppers",
    "fried cheese"
]

for(let ingredient of ingredients) {
    console.log( cookInOven(ingredient, 300) )
}

/******** Problem 1 From Last Week ********/

//* ask the user for a number to count to
let numberToCountTo = prompt("What number should I count to?")
numberToCountTo = parseInt(numberToCountTo);
// count up to that number starting at 1 logging out each number
for(let i = 0; i < numberToCountTo; i++) {
    console.log(i + 1)
}

/******** Problem 2 From Last Week ********/

//* pick some number
let correctNumber = 3;
let guess = "";

//* loop until they guess that number
while(guess !== correctNumber) {
    //* ask them to guess again
    guess = parseInt(prompt("Guess!"));
}

alert("You did it!")


//! LIVE CODING CHALLENGE:

// From FreeCodeCamp
//* https://gist.github.com/blentz100/12e48e0ba7fbc602480f64727d7611da