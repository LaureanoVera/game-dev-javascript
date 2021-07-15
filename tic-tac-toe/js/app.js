const statusDisplay = document.querySelector(".game__notification");
const gameState = ["", "", "", "", "", "", "", "", ""];
const CONDITIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
];

const victory = () => `Player ${current} won!`;
const draw = () => `The game was a draw`;
const turn = () => `Player turn: ${current}`;

let gameRun = true;
let current = "O";

// FUNCTIONS
const handleCell = evt => {
  const cell = evt.target
  if (cell.classList.contains('game__cell')) {
    const cellIndex = Array.from(cell.parentNode.children).indexOf(cell)
    console.log(cellIndex);
    if (gameState[cellIndex] != "" || !gameRun) {

    }

    handleCellPlayer(cell, cellIndex);
    handleResult()
  }
  console.log(cell);
}

const handleCellPlayer = (cell, index) => {
  gameState[index] = current
  cell.innerText = current
}

const handleResult = () => {
  let roundWon = false
  for (let i = 0; i < CONDITIONS.length; i++) {
    const winCondition = CONDITIONS[i]
    let positionOne = gameState[winCondition[0]]
    let positionTwo = gameState[winCondition[1]]
    let positionThree = gameState[winCondition[2]]
    if (positionOne === '' || positionTwo === '' || positionThree === '') {
      continue;
    }
    if (positionOne === positionTwo && positionTwo === positionThree) {
      roundWon = true;
    }
  }
}

const restartGame = () => {
  console.log('CLICK');
}

const listeners = () => {
  document
    .querySelector(".game__container")
    .addEventListener("click", handleCell);
  document.querySelector(".game__restart").addEventListener("click", restartGame);
};

const handleStatus = (msg) => {
  statusDisplay.innerHTML = msg;
};

const main = () => {
  handleStatus(turn());
  listeners();
};
main()