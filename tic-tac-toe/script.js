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
let playerXName = playerXInput.value;
let playerOName = playerOInput.value;
let showDiv = false;
let xImg = document.querySelectorAll('.xImg');
let oImg = document.querySelectorAll('.oImg');

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

startGame();

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

                e.target.classList.add(currentPlayer === 'X' ? 'xImg' : 'oImg');       

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

startBtn.addEventListener('click', () => {
    startGame();
    results.classList.remove('showResults');
    results.textContent = '';
    hideImages();
    playerXInput.value = '';
    playerOInput.value = '';
    playerXName = playerXInput.value;
    playerOName = playerOInput.value;
});

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

function hideImages() {
    cells.forEach(cell => cell.classList.remove('xImg', 'oImg'));
}

function endGame(winner) {
    if (winner) {

        let winnerName = winner === "X" ? playerXName : playerOName;

            if (winnerName !== '') {
                console.log(`The winner is ${winnerName}`);
                results.classList.add('showResults');
                results.textContent = `${winnerName} wins! 🙌 🔥 \nGood job!`;
            }
            else {
                console.log(`${winner} wins!`);
                results.classList.add('showResults');
                results.textContent = `${winner} wins! 🙌 \nCongratulations!`;
            }
        results.style.whiteSpace = 'pre-line';
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

restartBtn.addEventListener('click', () => {
    restartGame();
    results.classList.remove('showResults');
    results.textContent = '';
    hideImages();
    playerXName = playerXInput.value;
    playerOName = playerOInput.value;
});