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
