//* creating a "student" class.

class Student {
    //* blueprint for creating our object
    //* where all properties are initialized
    //* every time a student is created it will have the listed properties
    constructor(firstName, lastName, phoneNumber, grade) {
        //* use "this" keyword to specify field of the instance
        //* would represent property of student in question
        //* this.firstName will represent Object in this class
        this.firstName = firstName;
        this.lastName = lastName;
        this.phoneNumber = phoneNumber;
        this.grade = grade;
    }

    introduce() {
        //* method is a function inside of the class
        console.log(`${this.firstName} ${this.lastName} can be reached at ${this.phoneNumber}`);
    }
}

//! This would take a lot more time and code
// let student = new Student();
// student.firstName = 'Student';
// student.lastName = 'Smith';

//* creating instances of this Student class
//* Instantiate an instance of the class below
//* We call name of the class followed by ()
//* Then runs code that is inside of the constructor
let student1 = new Student('Tom', 'Sawyer', '12345678', 'A');
let student2 = new Student('Sam', 'Smith', '456789012', 'B');

student1.introduce();
student2.introduce();

/* How do we know when to create a Class?
Each class should be in charge of one thing.
Card Game:
Class for player, deck, card, deal, etc.
 */