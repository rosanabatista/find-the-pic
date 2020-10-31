let timer;
const maxGameTime = 10;
let remainingTime = 0;
let isPlaying = false;

let score = 0;

// add logic to start the game
const startGame = function (event) {
  event.preventDefault(); // prevents that the default events on html to happen
  if (isPlaying === true) {
    //checks if the game started, prevents double start of the game if the space is pressed
    return;
  }
  document.querySelector(".instructions").classList.add("hide"); //hide the instructions screen when the game starts
  document.querySelector(".game").classList.remove("hide"); //remove the hidden class of the game screen
  document.querySelector(".game-over").classList.add("hide"); //hide the game over screen
  remainingTime = maxGameTime;
  timer = setInterval(isGameOver, 1000);
  printRemainingTime();
  isPlaying = true;
  score = 0;
  printScore();
  const icons = document.querySelectorAll(".board-item");
  icons.forEach((icon) => icon.remove());
  for (let i = 0; i < 120; i++) {
    createIcon();
  }
};

// when the counter stops
const gameOver = function () {
  document.querySelector(".game").classList.add("hide");
  document.querySelector(".game-over").classList.remove("hide");
  clearInterval(timer);
  isPlaying = false;
  printScore();
};

// makes the counter go down each second
const isGameOver = function () {
  remainingTime--;
  printRemainingTime();
  if (remainingTime <= 0) {
    gameOver();
  }
};

const addScore = function (event) {
  event.preventDefault();
  score += 100;
  printScore();
};

const createIcon = function () {
  const boardItemDiv = document.createElement("div");
  boardItemDiv.classList.add("board-item");
  boardItemDiv.classList.add("align-center");

  const itemLink = document.createElement("a");
  itemLink.setAttribute("href", "#");
  itemLink.onclick = addScore;

  const itemIcon = document.createElement("i");
  itemIcon.setAttribute("class", "fas fa-user");

  itemLink.appendChild(itemIcon);
  boardItemDiv.appendChild(itemLink);
  document.querySelector(".board").appendChild(boardItemDiv);
};
// <div class="board-item align-center">
//   <a href="#">
//     <i class="fas fa-user"></i>
//   </a>
// </div>;

const printRemainingTime = function () {
  document.querySelector(".time span").innerHTML = remainingTime;
};

const printScore = function () {
  document.querySelector(".score span").innerHTML = score;
  document.querySelector(".total-score").innerHTML = score;
};

// browser will trigger the event when the dom is ready to be manipulated
document.addEventListener("DOMContentLoaded", function () {
  //add logic to start game
  document.querySelector(".instructions a").onclick = startGame;
  document.querySelector(".game-over a").onclick = startGame;

  document.addEventListener("keydown", function (event) {
    if (event.keyCode === 32) {
      startGame(event);
    }
  });
});
