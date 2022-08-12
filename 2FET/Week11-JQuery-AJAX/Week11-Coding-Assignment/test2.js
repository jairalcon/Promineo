window.addEventListener('DOMContentLoaded', () => {
    // grabbing node list with Array.from.
    const tiles = Array.from(document.querySelectorAll('.tile'));
    const playerDisplay = document.querySelector('.display-player');
    const resetButton = document.querySelector('#reset');
    const announcer = document.querySelector('.announcer');

    // setting variables for game play
    let board = ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = 'X';
    let isGameActive = true;

    // setting variables for possible game outcomes
    const PLAYERX_WON = 'PLAYERX_WON';
    const PLAYERO_WON = 'PLAYERO_WON';
    const TIE = 'TIE';

    /*
        Indexes within the board
        [0][1][2]
        [3][4][5]
        [6][7][8]
    */


    const winningConditions = [
        // first horizontal line of tic tac tow board
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    // 
    function handleResultValidation() {
        let roundWon = false;
        for (let i = 0; i <= 7; i++) {
            const winCondition = winningConditions[i];
            const a = board[winCondition[0]];
            const b = board[winCondition[1]];
            const c = board[winCondition[2]];
            // if any tile is empty, we will skip iteration
            if (a === '' || b === '' || c === '') {
                continue;
            }
            // if equal we will exit loops
            if (a === b && b === c) {
                roundWon = true;
                break;
            }
        }
    // determines which winner won the game
    if (roundWon) {
        announce(currentPlayer === 'X' ? PLAYERX_WON : PLAYERO_WON);
        isGameActive = false;
        return;
    }
    // 
    if (!board.includes(''))
        announce(TIE);
    }

    // makes sure players only play on empty tiles
    const isValidAction = (tile) => {
        if (tile.innerText === 'X' || tile.innerText === 'O'){
            return false;
        }

        return true;
    }
    

    // updates board array at given position of current player variable
    const updateBoard = (index) => {
        board[index] = currentPlayer;
    }

    // 
    const announce = (type) => {
        switch(type){
            case PLAYERO_WON:
                announcer.innerHTML = 'Player <span class="playerO">O</span> Won';
                break;
            case PLAYERX_WON:
                announcer.innerHTML = 'Player <span class="playerX">X</span> Won';
                break;
            case TIE:
                announcer.innerHTML = 'Tie game!';
        }
        announcer.classList.remove('hide');
    };


    // function that removes and updates which players turn it is
    const changePlayer = () => {
        playerDisplay.classList.remove(`player${currentPlayer}`);
        // this changes currentPlayer to X if it was O, and to O if it was X
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        // updates the text to display who's turn it is
        playerDisplay.innerText = currentPlayer;
        playerDisplay.classList.add(`player${currentPlayer}`);
    }


    // function will represent turn
    const userAction = (tile, index) => {
        // check to see if action is valid and is game being played
        if(isValidAction(tile) && isGameActive) {
            // 
            tile.innerText = currentPlayer;
            // take current player data
            tile.classList.add(`player${currentPlayer}`);
            // update board array
            updateBoard(index);
            handleResultValidation();
            changePlayer();
        }
    }

    // reset board to 9 empty strings
    const resetBoard = () => {
        board = ['', '', '', '', '', '', '', '', ''];
        isGameActive = true;
        announcer.classList.add('hide');

        if (currentPlayer === 'O') {
            changePlayer();
        }
        // change all tiles to empty string
        tiles.forEach(tile => {
            tile.innerText = '';
            tile.classList.remove('playerX');
            tile.classList.remove('playerO');
        })
    }


    // using forEach method on tiles array to add function when tiles is clicked
    tiles.forEach( (tile, index) => {
        // adding event listener to each tile
        // user action will be called on specific tile and its index to update UI
        tile.addEventListener('click', () => userAction(tile, index))
    });


    resetButton.addEventListener('click', resetBoard);
})