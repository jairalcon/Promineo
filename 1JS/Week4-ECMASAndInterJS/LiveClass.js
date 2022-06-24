//!LIVE CLASS

/* Map, .map(), will always create a new array from
the original array data set.
 */

/***** Converting a Normal Function to an Arrow Function ******/

// function isJose(user) {
//     return user.username === "jose"
// }

// converted to arrow function syntax
// const isJose = (user) => {
//     return user.username === "jose"
// }

// take off parenthesis on parameter list
// const isJose = user => {
//     return user.username === "jose"
// }

// take off return and curly brackets on body of function
// const isJose = user => user.username === "jose"



/***** Array Methods ******/

// const emailList = [
//     {
//         id: 234,
//         author: "Natalie",
//         to: "Calvin",
//         message: "Heyyyy",
//         read: false,
//     },
//     {
//         id: 1654,
//         author: "Natalie",
//         to: "Calvin",
//         message: "What's up?",
//         read: true,
//     },
//     {
//         id: 474,
//         author: "Dylan",
//         to: "Calvin",
//         message: "Good day",
//         read: false,
//     }
// ]

// alert( emailList.map( email => email.author + " - " + email.message ).join("\n") );

// console.log(
//     emailList.map(
//         function(email) {
//             return email.author + " - " + email.message;
//         } 
//     )
// );

// const unreadEmails = emailList.filter( email => !email.read )
// console.log(unreadEmails)

// const emailsFromNatalie = emailList.filter( email => email.author === "Natalie" ).map( email => email.author + " - " + email.message ).join("\n")
// alert(emailsFromNatalie)

// const unreadEmailsFromNatalie = emailList.filter( email => email.author === "Natalie" && !email.read )
// console.log(unreadEmailsFromNatalie)

// const idToFind = 474;
// const authorOfEmailWithId = emailList.find( message => message.id === idToFind ).author
// console.log(authorOfEmailWithId);



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

console.log(emailList.map( email => email.author.firstName + " " + email.author.lastName + " - " + email.message ).join("\n") );


const numberOfEmailsFromANatalie = emailList.filter( email => email.author.firstName === "Natalie" ).length
console.log(numberOfEmailsFromANatalie);

//! EXAMPLES FROM CODEWARS

/* You will be given an array of objects (hashes in ruby) 
representing data about developers who have signed up to attend the 
coding meetup that you are organizing for the first time.

Your task is to return the number of JavaScript developers coming from Europe.

For example, given the following list:
 */
var list1 = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
    { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
    { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
    { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
];


function countDevelopers(list) {
    //* filtering through list1, assigning 'developer' as callback parameter,
    //* arrow function passes arguments to callback to developer.
    //* .length returns a number based off arguments passed to callback
    return list.filter(developer => developer.continent === 'Europe' && developer.language === 'JavaScript').length;
}
//! OTHER SOLUTION 
// function countDevelopers(list) {
//     return list
//         .filter(dev => dev.language === "JavaScript")
//         .filter(dev => dev.continent === "Europe")
//         .length
// }

console.log('Developers from Europe who know JavaScript =', countDevelopers(list1));
/*your function should return number 1.

If, there are no JavaScript developers from Europe then your function should return 0.

Notes:

The format of the strings will always be Europe and JavaScript.
All data will always be valid and uniform as in the example above.
*/

//! NEXT QUESTION
/* You will be given an array of objects (associative arrays in PHP, tables in COBOL) representing data about developers who have signed up to attend the next coding meetup that you are organizing.

Your task is to return an array where each object will have a new property 'greeting' with the following string value:

Hi < firstName here >, what do you like the most about < language here >?

For example, given the following input array:
*/
const list2 = [
    {
      firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
    },
    {
      firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python',
    },
    {
      firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby',
    },
];
/*{ firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
    greeting: 'Hi Sofia, what do you like the most about Java?' */
//! SOLUTION WITH FOR LOOP:
    function greetDevelopers(list) {
// console.log(list[0].firstName);
let newArray = [];
    for (let i = 0; i < list.length; i++) {
    newArray.push(list[i]), 
    // add greeting text to the object
    newArray[i].greeting = `Hi ${list[i].firstName}, what do you like the most about ${list[i].language}?`;
    };
    //console.log(list[0].firstName);
    return newArray;   
}
console.log(greetDevelopers(list2));

//! USING FOR EACH:

list2.forEach(listobj => {
    listobj.greeting = `Hi ${listobj.firstName}, what do you like the most about ${listobj.language}?`
});
console.log(list2)


//!SOLUTION WITH FUNCTION
function greetDevelopers(list) {
    list.forEach(function(developer) {
      developer.greeting = `Hi ${developer.firstName}, what do you like the most about ${developer.language}?`;
    });
    return list;
}

console.log(list2);


//! FROM LIVE CODE CHALLENGE: 6/23/22
//* Anagram challenge: comparing words with each other

var isAnagram = function(s, t) {
    return Array.from(s).sort().join() === Array.from(t).sort().join();
}

console.log(isAnagram('tar', 'rat'));