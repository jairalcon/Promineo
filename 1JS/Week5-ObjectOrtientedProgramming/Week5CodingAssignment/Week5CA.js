//Jair Alcon
//Week 5 Coding Assignment

/*
todo 1.	Create a menu app as seen in this week's video. What you create is up to you as long as it meets the following requirements.
a.	Use at least one array.
b.	Use at least two classes.
todo c.	Your menu should have the options to create, view, and delete elements.
 */

// creating class for Phone
class Phone {
    constructor(name) {
        this.name = name;
    }
}


class Menu {
    constructor() {
        this.phones = [];
    }

    //* entry point to application
    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createPhone();
                    break;                
                case '2':
                    this.deletePhone();
                    break;
                case '3':
                    this.displayPhones();
                    break;
                default:
                    selection = 0;
            }

            selection = this.showMainMenuOptions();
        }

        alert('Goodbye!');
    }

    //showing UI on the screen
    showMainMenuOptions() {
        return prompt(`
            0) exit
            1) create new phone
            2) delete phone
            3) display all phones
        `)
    }

    createPhone() {
        let name = prompt('Enter name of phone');
        this.phones.push(new Phone(name));

        console.log(`This phone was just added to the phones array:`, new Phone(name));
    }


    
    //created a function that returns a string
    availablePhones() {
        let sum = '';
        // for loop to iterate through current array of available phones
        for (let index = 0; index < this.phones.length; index++) {
            // assigning iteration to new variable
            sum += `\n Phone ${index} is: ${this.phones[index].name}`
        }
        // returning created data to new data
        return sum;
    }

    // working on displaying available data within phones array
    deletePhone() {
        let index = prompt (`Enter the index of the phone you wish to delete: ${this.availablePhones()}`);
        // index is grabbing/finding data based off input
        if (index > -1 && index < this.phones.length) {
            // once data is found, then log/alert 
            console.log(`${this.phones[index].name} phone was deleted.`);
            alert(`${this.phones[index].name} phone was deleted.`)
            // after log/alert, then delete data/perform code
            this.phones.splice(index, 1);     
        }
    }

    displayPhones() {
        let phoneString = '';
        for (let i = 0; i < this.phones.length; i++) {
            phoneString += i + ') ' + this.phones[i].name + '\n';
        }
        alert(phoneString);
        // displays current data that has been added
        console.log(phoneString);
    }
}

let menu = new Menu();
// menu.start();