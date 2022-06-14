
let howManyCats = prompt("How many cats do you have?")

console.log(howManyCats);

if(howManyCats >= 3 && howManyCats <= 50) {
    alert("We're best friends!")
}
else if(howManyCats > 50) {
    alert("You have too many cats, get help!")
}
else {
    alert("Go away!")
}

while(howManyCats <= 5) {
    howManyCats++;
    alert("Here's another cat!")
}
alert("Now you have the right amount of cats: " + howManyCats)