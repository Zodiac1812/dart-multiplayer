let player1Score = 0;
let player2Score = 0;
let player1Bet;
let player2Bet;
let currentPlayer = 1; // Start with Player 1
let gameOver = false;

const startGameBtn = document.getElementById("start-game-btn");
const throwDartBtn = document.getElementById("throw-dart-btn");
const resultScreen = document.getElementById("result-screen");
const gameScreen = document.getElementById("game-screen");
const startScreen = document.getElementById("start-screen");
const turnMessage = document.getElementById("turn-message");
const dartMessage = document.getElementById("dart-message");
const player1ScoreElement = document.getElementById("player1-score");
const player2ScoreElement = document.getElementById("player2-score");
const winnerMessage = document.getElementById("winner-message");
const playAgainBtn = document.getElementById("play-again-btn");

// Start the game
startGameBtn.addEventListener("click", () => {
    player1Bet = parseInt(document.getElementById("player1-bet").value);
    player2Bet = parseInt(document.getElementById("player2-bet").value);
    
    if (player1Bet <= 0 || player2Bet <= 0) {
        alert("Bet must be greater than 0.");
        return;
    }

    startScreen.style.display = "none";
    gameScreen.style.display = "block";
    turnMessage.textContent = "Player 1's turn to throw!";
});

// Throw the dart
throwDartBtn.addEventListener("click", () => {
    if (gameOver) return;
    
    const score = Math.floor(Math.random() * 21); // Random score between 0-20

    if (currentPlayer === 1) {
        player1Score += score;
        player1ScoreElement.textContent = player1Score;
        dartMessage.textContent = `Player 1 scored ${score}!`;
        turnMessage.textContent = "Player 2's turn to throw!";
        currentPlayer = 2;
    } else {
        player2Score += score;
        player2ScoreElement.textContent = player2Score;
        dartMessage.textContent = `Player 2 scored ${score}!`;
        turnMessage.textContent = "Player 1's turn to throw!";
        currentPlayer = 1;
    }

    // Check if the game is over (after 5 turns for each player)
    if (player1Score >= 50 || player2Score >= 50) {
        gameOver = true;
        showResult();
    }
});

// Show result at the end of the game
function showResult() {
    gameScreen.style.display = "none";
    resultScreen.style.display = "block";

    if (player1Score > player2Score) {
        winnerMessage.textContent = `Player 1 wins! Player 1 wins the bet: ${player1Bet + player2Bet} points!`;
    } else if (player2Score > player1Score) {
        winnerMessage.textContent = `Player 2 wins! Player 2 wins the bet: ${player1Bet + player2Bet} points!`;
    } else {
        winnerMessage.textContent = "It's a tie!";
    }
}

// Play Again
playAgainBtn.addEventListener("click", () => {
    player1Score = 0;
    player2Score = 0;
    currentPlayer = 1;
    gameOver = false;

    player1ScoreElement.textContent = player1Score;
    player2ScoreElement.textContent = player2Score;
    startScreen.style.display = "block";
    resultScreen.style.display = "none";
});
