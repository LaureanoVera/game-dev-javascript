const statusDisplay = document.querySelector("game__notification");
const gameState = ["", "", "", "", "", "", "", "", ""];
const conditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [6, 4, 2],
];

const victory = () => `Player ${current} won!`
const draw = () => `The game was a draw`
const turn = () => `Player turn: ${current}`