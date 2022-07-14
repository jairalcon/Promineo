// https://www.codingmadeclear.com/using-and-or-instead-of-if-with-short-circuiting-in-javascript/

class Connect4 {
    constructor() {
      // 7 columns and 6 rows
      this.column = [0, 0, 0, 0, 0, 0];
      this.currentPlayer = 1; // 2
        
    }
    
    play(col) {
      // Adding a chip to the column
      this.column[5] = this.currentPlayer;
      
      //const playerThatJustPlayed = this.currentPlayer;
      
      const message = 'Player ' + this.currentPlayer + ' has a turn'
      
      // Flipping the current player
      if(this.currentPlayer === 1) {
        this.currentPlayer = 2;
      }
      else {
        this.currentPlayer = 1;
      }
      
      //return 'Player ' + playerThatJustPlayed + ' has a turn';
      
      return message;
      
    }
    
    toString() {
      return this.columns.join("/n");
    }
  }
  
  
  class Game {
    constructor() {
      this.board = new Connect4();
    }
    
    start() {
      let result = ""
      while(result !== "Game has finished!") {
        const column = parseInt(prompt("What column? 0-6"))
        result = this.board.play(column)
        alert(this.board.toString())
        
        alert(this.board.currentPlayer)
      }
      alert("Game over!")
    }
  }
  
  // game = {
  //   board: {
  //     column: [0, 0, 0, 0, 0, 0]
  //     currentPlayer: 1,
  //     play: function,
  //     toString: function
  //   }
  //   start: function
  // }
  
  const game = new Game();
  game.start();