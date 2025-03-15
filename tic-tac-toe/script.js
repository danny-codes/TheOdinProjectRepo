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

const cells = document.querySelectorAll('.cell');
const startBtn = document.querySelector('#startBtn');

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
    if (playerX.turn) {
        playerX.turn = false;
        playerO.turn = true;
    }
    else {
        playerX.turn = true;
        playerO.turn = false;
    }
    let currentPlayer;
    if (playerX.turn) {
        currentPlayer = 'X';
        cells.forEach(cell => {
            cell.addEventListener('click', (e) => {
                const index = cell.getAttribute('data-index');
    
                if (Gameboard.gameboard[index] === '') {
                    Gameboard.gameboard[index] = currentPlayer;
                    e.target.textContent = currentPlayer;

                    const winner = checkWinner();
                    endGame(winner);

                    currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
                }
            });
        })
    }
    else if (playerO.turn) {
        currentPlayer = 'O';
        cells.forEach(cell => {
            cell.addEventListener('click', (e) => {
                const index = cell.getAttribute('data-index');
    
                if (Gameboard.gameboard[index] === '') {
                    Gameboard.gameboard[index] = currentPlayer;
                    e.target.textContent = currentPlayer;

                    const winner = checkWinner();
                    endGame(winner);

                    currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
                }
            });
        })
    }
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
        console.log(`${winner} wins!`);
    }
    else {
        console.log('No winner yet.');
    }
}