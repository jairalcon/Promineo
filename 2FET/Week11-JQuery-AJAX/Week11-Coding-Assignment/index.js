/* Jair Alcon - Week 11 Coding Assignment */
console.log(`-----Jair Alcon: Week 11 Coding Assignment-----`);

const X_PLAYER = 'x';
console.log('This is player:', X_PLAYER);

const O_PLAYER = 'circle';
console.log('This is player:', O_PLAYER);

const WINNING_COMBOS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
console.log('These are the winning combinations:', WINNING_COMBOS);

// Getting each box of the grid
const boxElements = document.querySelectorAll('[data-box]');
console.log('These are the box elements:', boxElements);

// Gameboard as the grid of game
const gameboard = document.getElementById('gameboard');
console.log('This is the gameboard element:', gameboard)

// selector for display message in case win/lose/draw
const winningMessageTextElement = document.querySelector('[data-winning-message-text]');
console.log('', winningMessageTextElement);

// 
const winningMessageElement = document.getElementById('winningMessage');
console.log('', winningMessageElement);

// 
const playAgain = document.getElementById('restartBtn');
console.log(''), playAgain;

// 
const startOver = document.getElementById('startOver');
console.log('', startOver);

// 
const turn = document.querySelector('.turn');
console.log('', turn);

// 
const restart = document.querySelector('#restart');
console.log('', restart);

let circleTurn;

//calling function to start the game
startGame();

// clicking on Play Again button will restart game
restart.addEventListener('click', startGame)
playAgain.addEventListener('click', startGame)

function startGame() {
    //Set to be X's Turn first
    circleTurn = false;
    // For each cell remove X & Circle
    boxElements.forEach(box => {
        box.classList.remove(X_PLAYER);
        box.classList.remove(O_PLAYER);
        box.removeEventListener('click', handleClick);
        // Once cell is clicked in the grid this disallows change within that same box
        box.addEventListener('click', handleClick, { once: true });
        //! console.log(handleClick);
    });
    setBoardHoverClass();
    winningMessageElement.classList.remove('show');
}

// On click it will target box 
function handleClick(e) {
    const box = e.target;
    console.log('', box);
    // Whose turn it is assign it to be the current class
    const currentClass = circleTurn ? O_PLAYER : X_PLAYER;
    console.log('', currentClass);
    // Place mark
    placeMark(box, currentClass);
    // Check for win
    if (checkWin(currentClass)) {
        endGame(false)
    }
    // Check for draw
    else if (isDraw()) {
        endGame(true)
    } else {
        // Switch turns
        switchTurns()
        setBoardHoverClass()
    }

}
// Ends the game if the game is draw
function endGame(draw) {
    if (draw) {
        winningMessageTextElement.innerText = 'Draw!';
    }
    // if game does not result in a draw, then did X or O win the game?
    else {
        winningMessageTextElement.innerText = `${circleTurn ? "O's" : "X's"} Wins!`;
    }
    // Displaying winning message
    winningMessageElement.classList.add('show');
}

function isDraw() {
    return [...boxElements].every(box => {
        return box.classList.contains(X_PLAYER) ||
            box.classList.contains(O_PLAYER)
    });
}
// Creating a function for placing mark on the grid
function placeMark(box, currentClass) {
    box.classList.add(currentClass);
}
// Checking whose turn it is and switching turns
function switchTurns() {
    circleTurn = !circleTurn;
}

function setBoardHoverClass() {
    gameboard.classList.remove(X_PLAYER);
    gameboard.classList.remove(O_PLAYER);
    if (circleTurn) {
        gameboard.classList.add(O_PLAYER);
        turn.textContent = "It is O's turn";
    }
    else {
        gameboard.classList.add(X_PLAYER);
        turn.textContent = "It is X's turn";
    }
}

function checkWin(currentClass) {
    return WINNING_COMBOS.some(combination => {
        return combination.every(index => {
            return boxElements[index].classList.contains(currentClass);
        });
    });
}