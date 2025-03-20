const Gameboard = (function () {
    let gameboard = ['', '', '', '', '', '', '', '', ''];
    const renderBoard = () => {
        let grid = '';
        for (let i = 0; i < 3; i++) {
            grid += ` ${gameboard.slice(i * 3, i * 3 + 3).join(' |  ')} \n`;
            if (i < 2) grid += '---+---+---\n'
        }
        console.log(grid);
    }      
    return {
        renderBoard: renderBoard,
        gameboard: gameboard,
    }
})();

let cells = document.querySelectorAll('.cell');
const startBtn = document.querySelector('#startBtn');
const restartBtn = document.querySelector('#restartBtn');
const results = document.querySelector('#results');
let playerXInput = document.querySelector('#playerX');
let playerOInput = document.querySelector('#playerO');
let playerXName = playerXInput.textContent;
let playerOName = playerOInput.textContent;


let winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
]

const Player = (name, symbol) => ({
    name,
    symbol,
    score: 0,
    turn: false,
    isWinner: false,
    moves: [],
});

let playerX = Player('Jane', 'X');

let playerO = Player('John', 'O');;

function startGame() {
    playerX.turn = !playerX.turn;
    playerO.turn = !playerO.turn;
    let currentPlayer = playerX.turn ? 'X' : 'O';

    cells.forEach(cell => {
        cell.replaceWith(cell.cloneNode(true));
    });

    cells = document.querySelectorAll('.cell');

    cells.forEach(cell => {
        cell.addEventListener('click', (e) => {
            const index = cell.getAttribute('data-index');

            if (Gameboard.gameboard[index] === '') {
                Gameboard.gameboard[index] = currentPlayer;
                e.target.textContent = currentPlayer;

                // to add X and O symbols in CSS
                // e.target.classList.add('xImg');
                // e.target.classList.add('OImg');
                // currentPlayer = 'X' ? e.target.classList.add('xImg') : e.target.classList.add('OImg');

                const winner = checkWinner();
                endGame(winner);

                if (!Gameboard.gameboard.includes('')) {
                    restartGame();
                    results.classList.add('showResults');
                    results.textContent = 'No winner';
                }

                currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
            }
        });
    })
}

startBtn.addEventListener('click', startGame);

function checkWinner() {
    const board = Gameboard.gameboard;
    for (const combo of winningCombinations) {
        const [a, b, c] = combo;

        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a];
        }
    }
    return null;
}

function endGame(winner) {
    if (winner) {
        // only displays 'X' as the winner
        // if (winner = "X") {
        //     if (playerXName.textContent != '') {
        //         console.log(`The winner is ${playerXName}`);
        //         results.classList.add('showResults');
        //         results.textContent = `${playerXName} wins! 🙌 🔥 \n
        //         Good job!`;
        //     }
        //     else {
        //         console.log(`${winner} wins!`);
        //         results.classList.add('showResults');
        //         results.textContent = `${winner} wins! 🙌 \n
        //         Congratulations!`;
        //     }
        // }
        // else{
        //     if (playerOName.textContent != '') {
        //         console.log(`The winner is ${playerOName}`);
        //         results.classList.add('showResults');
        //         results.textContent = `${playerOName} wins! 🙌 🔥 \n
        //         Good job!`;
        //     }
        //     else {
        //         console.log(`${winner} wins!`);
        //         results.classList.add('showResults');
        //         results.textContent = `${winner} wins! 🙌 \n
        //         Congratulations!`;
        //     }
        // }
        // console.log(`${winner} wins!`);
        results.classList.add('showResults');
        results.textContent = `${winner} wins! 🙌 \n
        Congratulations!`; // \n not working
        restartGame();
    }
    else {
        console.log('No winner yet.');
    }
}

function restartGame() {
    Gameboard.gameboard.fill('');
    cells.forEach(cell => {
        cell.textContent = '';  
    });
    console.log('UI Cleared.');
}

restartBtn.addEventListener('click', restartGame);

// allow players to put in their names. - working on
// make X and Os nice looking - working on