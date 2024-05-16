let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let isGameActive = true;
const messageElement = document.getElementById('message');

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function makeMove(cell, index) {
    if (board[index] !== '' || !isGameActive) {
        return;
    }

    board[index] = currentPlayer;
    cell.textContent = currentPlayer;

    if (checkWin()) {
        messageElement.textContent = `Player ${currentPlayer} wins!`;
        isGameActive = false;
        return;
    }

    if (board.every(cell => cell !== '')) {
        messageElement.textContent = "It's a draw!";
        isGameActive = false;
        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    messageElement.textContent = `Player ${currentPlayer}'s turn`;
}

function checkWin() {
    return winningConditions.some(condition => {
        return condition.every(index => board[index] === currentPlayer);
    });
}

function restartGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    isGameActive = true;
    document.querySelectorAll('.cell').forEach(cell => cell.textContent = '');
    messageElement.textContent = `Player ${currentPlayer}'s turn`;
}
