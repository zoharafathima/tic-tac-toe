let currentPlayer = 'X';
let gameBoard = ['', '', '', '', '', '', '', '', ''];
let gameOver = false;

const cellElements = document.querySelectorAll('.cell');
const resetButton = document.getElementById('reset-button');

cellElements.forEach((cell, index) => {
    cell.addEventListener('click', () => {
        if (gameOver) return;
        if (gameBoard[index] !== '') return;

        gameBoard[index] = currentPlayer;
        cell.textContent = currentPlayer;

        checkForWin();
        switchPlayer();
    });
});

resetButton.addEventListener('click', resetGame);

function checkForWin() {
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (const condition of winConditions) {
        if (
            gameBoard[condition[0]] === gameBoard[condition[1]] &&
            gameBoard[condition[1]] === gameBoard[condition[2]] &&
            gameBoard[condition[0]] !== ''
        ) {
            gameOver = true;
            alert(`Player ${currentPlayer} wins!`);
        }
    }

    if (!gameOver && !gameBoard.includes('')) {
        gameOver = true;
        alert('It\'s a draw!');
    }
}

function switchPlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function resetGame() {
    currentPlayer = 'X';
    gameBoard = ['', '', '', '', '', '', '', '', ''];
    gameOver = false;

    cellElements.forEach((cell) => {
        cell.textContent = '';
    });
}
