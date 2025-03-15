const Gameboard = (function () {
    let gameboard = ['X', '', 'O', 'X', '', '', '', '', ''];
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

let playerX = new Player;
playerX.name = 'Jane';

let playerO = new Player;
playerO.name = 'John';

function startGame() {
    if (playerX.turn) {
        playerX.turn = false;
        playerO.turn = true;
    }
    else {
        playerX.turn = true;
        playerO.turn = false;
    }
}

function checkWin(board, player) {

}