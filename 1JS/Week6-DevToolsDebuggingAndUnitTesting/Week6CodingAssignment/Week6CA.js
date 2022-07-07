/*
Jair Alcon
Week 6 Coding Assignment: "War" Card Game

"You have to make art."
"You have to make art and tell that is sucks. Same with programming."

For the final project you will be creating an automated version of the classic card game WAR. You do not need to accept any user input, when you run your code, the entire game should play out instantly without any user input. 
Think about how you would build this project and write your plan down. Consider classes such as Card, Deck, and Player and what fields and methods they might each have. You can implement the game however you'd like (i.e. printing to the console, using alert, or some other way). The completed project should, when ran, do the following:
todo -	Deal 26 Cards to two Players from a Deck. 
todo -	Iterate through the turns where each Player plays a Card
todo -	The Player who played the higher card is awarded a point
todo - Ties result in zero points for either Player
todo -	After all cards have been played, display the score.

todo Write a Unit Test using Mocha and Chai for at least one of the functions you write.
*/

class Deck {
    constructor() {
        this.cardDeckArray = [];
    }
    //* this will create a deck of 52 cards in Deck array
    buildDeck(){
		this.suit = ["♠️ (Spade)", "♣️ (Club)", "♥️ (Heart)", "♦️ (Diamond)"];
		this.cardRankValue = [ "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace" ];
        this.cardValue = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13 ];
		for (let x = 0; x < this.suit.length; x++){

            // console.log('This is how many iterations through suits', x, this.suit[x]);

			for (let i = 0; i < this.cardRankValue.length; i++){

            // console.log('This is how many iterations through cardRankValue', i, this.cardRankValue[i], this.suit[x], this.cardValue[i]);

            //* line below is assigning card suit, ranks, and values to the deck array as elements with 2 indexes
            // console.log(`card for ${this.suit[x]} deck at index: ${i} =`, ([this.cardRankValue[i] + ' of ' + this.suit[x], this.cardValue[i]]), `with value ${this.cardValue[i]}`);
			this.cardDeckArray.push([this.cardRankValue[i] + ' of ' + this.suit[x], this.cardValue[i]]);
			}          
		}
        console.log('Building Deck:', this.cardDeckArray);
        console.log('Indexing into deck to view card value:', this.cardDeckArray[1][1]);
	}
    //* this will shuffle the cards so they're not sorted by value, lowest to highest.
    shuffleDeck(){
        let i = 0;
        let t = 0;
        let temp = 0;
        for (i = this.cardDeckArray.length - 1; i > 0; i--) {
            t = Math.floor(Math.random() * (i + 1));
            temp = this.cardDeckArray[i];
            this.cardDeckArray[i] = this.cardDeckArray[t];
            this.cardDeckArray[t] = temp;
        }
    }

    //* method will return generated Deck into cardDeckArray after being shuffled.
    returnDeck(){
        return this.cardDeckArray;        
    }

    //* method will take card from deck array to place in player's hand array
    dealACard(){
        return this.cardDeckArray.pop();
    }
}

//* This will prompt class Deck to create a new Deck and shuffle it for the game.
const fullDeck = new Deck();
fullDeck.buildDeck();
    // console.log('This is a built deck of 52 cards:', fullDeck);

// fullDeck.shuffleDeck();
    // console.log('This shuffles the deck after building it:', fullDeck);
    
// fullDeck.returnDeck();
    // console.log('This returns all card elements into "cardDeckArray":', fullDeck);

    
//* testing to see if the deck would be returned complete and shuffled
// console.log(fullDeck);



//todo split deck
//todo deal the deck


class Player {
    constructor() {
        //* score will start at 0 for each instance of Player
        this.score = 0;
        //* empty array needing to be deals half the deck
        this.hand = [];
    }


}






//* Create New Players to split deck between.
const player1 = new Player();
const player2 = new Player();