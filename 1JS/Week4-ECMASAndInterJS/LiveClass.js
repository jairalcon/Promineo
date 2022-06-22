//!LIVE CLASS

/* Map, .map(), will always create a new array from
the original array data set.
 */

/***** Converting a Normal Function to an Arrow Function ******/

function isJose(user) {
    return user.username === "jose"
}

// converted to arrow function syntax
const isJose = (user) => {
    return user.username === "jose"
}

// take off parenthesis on parameter list
const isJose = user => {
    return user.username === "jose"
}

// take off return and curly brackets on body of function
const isJose = user => user.username === "jose"



/***** Array Methods ******/

const emailList = [
    {
        id: 234,
        author: "Natalie",
        to: "Calvin",
        message: "Heyyyy",
        read: false,
    },
    {
        id: 1654,
        author: "Natalie",
        to: "Calvin",
        message: "What's up?",
        read: true,
    },
    {
        id: 474,
        author: "Dylan",
        to: "Calvin",
        message: "Good day",
        read: false,
    }
]

alert( emailList.map( email => email.author + " - " + email.message ).join("\n") );

console.log(
    emailList.map(
        function(email) {
            return email.author + " - " + email.message;
        } 
    )
);

const unreadEmails = emailList.filter( email => !email.read )
console.log(unreadEmails)

const emailsFromNatalie = emailList.filter( email => email.author === "Natalie" ).map( email => email.author + " - " + email.message ).join("\n")
alert(emailsFromNatalie)

const unreadEmailsFromNatalie = emailList.filter( email => email.author === "Natalie" && !email.read )
console.log(unreadEmailsFromNatalie)

const idToFind = 474;
const authorOfEmailWithId = emailList.find( message => message.id === idToFind ).author
console.log(authorOfEmailWithId);



/***** More Complex Array Example ******/

const emailList = [
    {
        id: 234,
        author: {
            firstName: "Natalie",
            lastName: "Childs"
        },
        to: "Calvin",
        message: "Heyyyy",
        read: false,
        tags: [
            "not important",
            "personal"
        ]
    },
    {
        id: 1654,
        author: {
            firstName: "Natalie",
            lastName: "Adults"
        },
        to: "Calvin",
        message: "What's up?",
        read: true,
        tags: [
            "work"
        ]
    },
    {
        id: 474,
        author: {
            firstName: "Dylan",
            lastName: "Green"
        },
        to: "Calvin",
        message: "Good day",
        read: false,
        tags: []
    }
]

alert( emailList.map( email => email.author.firstName + " " + email.author.lastName + " - " + email.message ).join("\n") );


const numberOfEmailsFromANatalie = emailList.filter(   email => email.author.firstName === "Natalie"  ).length
console.log(numberOfEmailsFromANatalie);