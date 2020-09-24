const X_CLASS = "x";
const O_CLASS = "o";
const WINNING_COMBINATIONS = [
    // horizontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // vertical
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // diagonal
    [0, 4, 8],
    [2, 4, 6],
];
const cellElements = document.querySelectorAll("[data-cell]");
const boardElement = document.getElementById("board");

let xIsNext = true;

startGame();

// functions
function startGame() {
    cellElements.forEach((cell) => {
        cell.classList.remove(X_CLASS);
        cell.classList.remove(O_CLASS);
        cell.removeEventListener("click", handleClick);
        cell.addEventListener("click", handleClick, { once: true });
    });
    setBoardHoverState();
}

function resetGame() {
    cellElements.forEach((cell) => {});
    startGame();
}

function handleClick(event) {
    const cell = event.target;
    const playerMark = xIsNext ? X_CLASS : O_CLASS;
    placeMark(cell, playerMark);
    if (isWinner(playerMark)) {
        alert(playerMark + " has won!");
        resetGame();
    } else if (isDraw()) {
        alert("Cats game!");
        resetGame();
    } else {
        xIsNext = !xIsNext;
        setBoardHoverState();
    }
}

function placeMark(cell, playerMark) {
    cell.classList.add(playerMark);
}

function setBoardHoverState() {
    const classList = boardElement.classList;
    classList.remove(X_CLASS);
    classList.remove(O_CLASS);
    classList.add(xIsNext ? X_CLASS : O_CLASS);
}

function isWinner(playerMark) {
    return WINNING_COMBINATIONS.some((combination) =>
        combination.every((i) => cellElements[i].classList.contains(playerMark))
    );
}

function isDraw() {
    return [...cellElements].every(
        (cell) =>
            cell.classList.contains(X_CLASS) || cell.classList.contains(O_CLASS)
    );
}
