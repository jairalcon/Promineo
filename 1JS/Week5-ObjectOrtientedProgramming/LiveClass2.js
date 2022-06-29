class Animal {
    constructor(type, name) { // type = "cat"; name = "Floof"
        this.type = type;
        this.name = name;
    }

    toString() {
        return this.name + " (" + this.type + ")"
    }
}

const animals = [
    { 
        type: "cat", 
        name: "Floof",
        toString() {
            return this.name + " (" + this.type + ")"
        }
    },
    new Animal("dog", "Rover")
]
const floof = animals[0]
floof.type = "unicorn"
console.log(animals[0].toString())

const rover = { 
    type: "dog", 
    name: "Rover",
    toString() {
        return this.name + " (" + this.type + ")"
    }
}

console.log(floof.toString())
console.log(rover.toString())


// sample method on menu app
// you'd need to hook this up right for it to work!

markAsRead = () => {
    let index = prompt('Enter the index of the book you want to mark as read:'); // "0"
    this.books[index].read = true;
}