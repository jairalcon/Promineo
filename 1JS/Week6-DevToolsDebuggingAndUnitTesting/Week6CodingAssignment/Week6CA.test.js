const expect = chai.expect;

// can be how many cards does each player have in their hands
describe("Player's Hand", function() {
    it("should save half the deck to a player", function() {
        //todo Arrange
        const newGameDeck = [];

        //todo Act
        const newDeck = new Deck(newGameDeck);

        //todo Assert
        expect(newDeck.suit).to.equal();
        expect(newDeck.returnDeck).to.equal(56);        
    });

    describe('Building New Deck', function(){
	
        describe('#Deck constructor', function(){
            it("Ensure constructor creates a new instance of the Deck ", function(){
                testDeck1 = new Deck();
                expect(testDeck1).to.be.an('object');
            });
        });
    })
});