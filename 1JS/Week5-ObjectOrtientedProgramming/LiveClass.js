class AcceptedAnswerPrompt {
    constructor(acceptableAnswers) { // acceptableAnswers = ["cat", "dog", "unicorn"]
        this.acceptableAnswers = acceptableAnswers;
    }

    promptForAcceptable(question) {
        let answer = prompt(question); // calling normal Javascript prompt
        // let foundAnswer = undefined;
        // for(let i = 0; i < this.acceptableAnswers.length; i++) {
        //     if(this.acceptableAnswers[i] === answer) {
        //          foundAnswer = this.acceptableAnswers[i];
        //     }
        // }
        while( this.acceptableAnswers.find( acceptableAnswer => acceptableAnswer.toLowerCase() === answer.toLowerCase() ) === undefined ) {
        //while( this.acceptableAnswers.includes(answer) ) {
            answer = prompt(question + "\nIt needs to be acceptable though.")
        }
        return answer;
    }
}

// This is what would be in the animalPrompt variable below
// {
//     acceptableAnswers: ["cat", "dog", "unicorn"]
//     promptForAcceptable(question) {
//         let answer = prompt(question); // calling normal Javascript prompt
//         // let foundAnswer = undefined;
//         // for(let i = 0; i < this.acceptableAnswers.length; i++) {
//         //     if(this.acceptableAnswers[i] === answer) {
//         //          foundAnswer = this.acceptableAnswers[i];
//         //     }
//         // }
//         while( this.acceptableAnswers.find( acceptableAnswer => acceptableAnswer.toLowerCase() === answer.toLowerCase() ) === undefined ) {
//         //while( this.acceptableAnswers.includes(answer) ) {
//             answer = prompt(question + "\nIt needs to be acceptable though.")
//         }
//         return answer;
//     }
// }


// ANIMAL PROMPT EXAMPLE USAGE

const animals = ["cat", "dog", "unicorn"]
const animalPrompt = new AcceptedAnswerPrompt(animals)

const bestAnimal = animalPrompt.promptForAcceptable("What's the best animal?")

const animalPicked = animalPrompt.promptForAcceptable("Which animal do you want?")


// YES NO PROMPT EXAMPLE USAGE

const yesNoPrompt = new AcceptedAnswerPrompt( [ "yes", "no" ] )

const shouldDelete = yesNoPrompt.promptForAcceptable("Are you sure you want to delete?");