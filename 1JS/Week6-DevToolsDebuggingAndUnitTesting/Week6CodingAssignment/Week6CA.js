/*
Jair Alcon
Week 6 Coding Assignment: "War" Card Game

"You have to make art."
"You have to make art and tell that is sucks. Same with programming."

For the final project you will be creating an automated version of the classic card game WAR. You do not need to accept any user input, when you run your code, the entire game should play out instantly without any user input. 
Think about how you would build this project and write your plan down. Consider classes such as Card, Deck, and Player and what fields and methods they might each have. You can implement the game however you'd like (i.e. printing to the console, using alert, or some other way). The completed project should, when ran, do the following:
-	Deal 26 Cards to two Players from a Deck. 
todo -	Iterate through the turns where each Player plays a Card
todo -	The Player who played the higher card is awarded a point
todo -  Ties result in zero points for either Player
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
        // console.log('Building Deck:', this.cardDeckArray);
        
        // console.log('Indexing into deck to view card value:', this.cardDeckArray[1][1]);
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

//* Testing Below:

// const newDeck = new Deck();
// newDeck.buildDeck();
//     console.log('This is a built deck of 52 cards:', newDeck);

// const shuffleDeck = new Deck();
// shuffleDeck.buildDeck();
// shuffleDeck.shuffleDeck();
//     console.log('This shuffles the deck after building it:', shuffleDeck);
    
// shuffleDeck.returnDeck();
//     console.log(`This returns all card elements into "cardDeckArray": \n ${shuffleDeck.cardDeckArray}`);

    
//* testing to see if the deck would be returned complete and shuffled
// console.log(fullDeck);


class Player {
    constructor(name) {
        this.name = name;
        //* score will start at 0 for each instance of Player
        this.score = 0;
        //* empty array needing to be deals half the deck
        this.hand = [];
    }

    //method accepts cards being dealt from deck
    takeOneCard(card){
		this.hand.push(card);
	}

    //method to update cards dealt in player's hand array
	returnHand(){
		return this.hand;
	}

    //method to play 1 card from each player's hand array once loop is initiated, updates hand array
	playCard(){
		return this.hand.pop();
	}

    //method to update score after each round played
	updatedScore(){
		this.score++;
	}
    
    //method to display final score at the end of game
	returnScore(){
		return this.score;
	}

    //method to return card values when game is played
	returnCardValue(card){
		if (card.startsWith("2")){
			return 1;
		}

		else if (card.startsWith("3")){
			return 2;
		}

		else if (card.startsWith("4")){
			return 3;
		}

		else if (card.startsWith("5")){
			return 4;
		}

		else if (card.startsWith("6")){
			return 5;
		}

		else if (card.startsWith("7")){
			return 6;
		}

		else if (card.startsWith("8")){
			return 7;
		}

		else if (card.startsWith("9")){
			return 8;
		}

		else if (card.startsWith("10")){
			return 9;
		}

		else if (card.startsWith("Jack")){
			return 10;
		}

		else if (card.startsWith("Queen")){
			return 11;
		}

		else if (card.startsWith("King")){
			return 12;
		}

		else if (card.startsWith("Ace")){
			return 13;
		}
	}
}


class Game {
    constructor() {        
        this.players = [];
        this.selectedPlayer = null;
    }

    //* entry point to application
    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createPlayers();
                    break;                
                case '2':
                    this.dealDeck();
                    break;
                case '3':
                    this.displayPlayers();
                    break;
                case '4':
                    this.playWar();
                    break;
                default:
                    selection = 0;
            }

            selection = this.showMainMenuOptions();
        }

        alert('Goodbye!');
        console.log(`---Program terminated---`)
    }

    //showing UI on the screen to receive input 0-3
    showMainMenuOptions() {
        return prompt(`
            0) exit
            1) create players
            2) deal deck
            3) view players
            4) play game
        `);
    }

    // creating 2 players
    createPlayers() {
        // const player1 = prompt(`Enter name for Player 1`, this.players.push(new Player()));
        // const player2 = prompt(`Enter name for Player 2`, this.players.push(new Player()));

        //* need to create instance of new Player fist and then Push to players array
        const player1 = new Player(prompt(`Enter name for Player 1`));
        const player2 = new Player(prompt(`Enter name for Player 2`));

        this.players.push(player1);
        this.players.push(player2);

        console.log(`This is player1:`, typeof player1, player1);
        console.log(`This is player2:`, typeof player2, player2);
        console.log(`this is player1's name: ${player1.name}`);
        console.log(`this is player2's current score: ${player2.score}`);

        console.log(this.players[0]);
        console.log(this.players[1]);

        //! Didn't work as expected below
        // const player1 = prompt(`Enter name for Player 1`, this.players.push(new Player(player1)));
        // const player2 = prompt(`Enter name for Player 2`, this.players.push(new Player(player2)));

        // let p1Name = prompt(`Enter name of new Player 1`);
        // let p2Name = prompt(`Enter name of new Player 2`);
        // this.players.push(new Player());
        // console.log(p1Name);
        // console.log(p2Name);        
    }

    //* Method to create, shuffle, and deal deck to both players
    dealDeck() {
        const gameDeck = new Deck();
        gameDeck.buildDeck();
        gameDeck.shuffleDeck();
        gameDeck.returnDeck();
        //testing to confirm that gameDeck was returned complete and shuffled
        console.log('this is a complete and shuffled card deck', gameDeck.cardDeckArray);
        //* Deal Cards to Players from Deck class methods, splits deck in half
        for (let x = 0; x < 26; x++) {
            this.players[0].takeOneCard(gameDeck.dealACard());
            this.players[1].takeOneCard(gameDeck.dealACard());
        }
        console.log(this.players);
        
        //! NEED TO WORK ON
        //prints the length (26) of the players' card deck
        console.log(`This was dealt to player1: ${this.players[0].hand.length[[0]]}`);
        // console.log(`This was dealt to player1: ${this.players[0].hand}`);
        console.log(`This was dealt to player2: ${this.players[1].hand}`);
    }

    //* 
    displayPlayers() {
        let playerHands = [];
        for (let i = 0; i < this.players.length; i++) {
            playerHands += `${this.players[i].name}'s HAND) = ${this.players[i].hand} \n \n`;
        }
        alert(playerHands);
        // displays current data that has been added
        console.log(playerHands);
    }

    playWar () {
        for (let x = 0; x < 26; x++){

            let player1Card = this.players[0].playCard();
            let player2Card = this.players[1].playCard();
        
            //testing card being played
            console.log(`this is the last card in player1's hand: ${player1Card}`);
            console.log(`this is the last card in player1's hand: ${player2Card}`);
            console.log();
            console.log();
        
            // //determines if Player 1's card value is greater than Player 2's, if so, point awarded to Player 1
            // if (this.players[0].returnCardValue(player1Card) > this.players[1].returnCardValue(player2Card)) {
            //     console.log(`Player one wins this round because ${player1Card} beats ${player2Card}`);
            //     this.players[0].updatedScore();
            // }
        
            // //determines if Player 1's card value is less than than Player 2's, if so, point awarded to Player 2
            // else if (this.players[0].returnCardValue(player1Card) < this.players[1].returnCardValue(player2Card)) {
            //     console.log("Player two wins this round because " + player2Card + " beats " + player1Card);
            //     this.players[1].updatedScore();
            // }
        
            // //determines if players cards are equal and if so, no point is awarded
            // else {
            //     console.log("This round is tied because " + player1Card + " ties with " + player2Card);
            // }            		
        }
    }
}


const game = new Game();
game.start();