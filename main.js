const maxGameTime = 10;
let game = null;

// add logic to start the game
const handleStartGame = function (event) {
  event.preventDefault(); // prevents that the default events on html to happen
  if (game !== null && game.isPlaying) {
    //checks if the game started, prevents double start of the game if the space is pressed
    return;
  }
  game = new Game(maxGameTime);
  game.start();
};

const handleScore = function (event) {
  event.preventDefault();
  game.addScore();
};

// browser will trigger the event when the dom is ready to be manipulated
document.addEventListener("DOMContentLoaded", function () {
  //add logic to start game
  userInterface.showInstructions();
  document.querySelector(".instructions a").onclick = handleStartGame;
  document.querySelector(".game-over a").onclick = handleStartGame;

  document.addEventListener("keydown", function (event) {
    if (event.keyCode === 32) {
      handleStartGame(event);
    }
  });
});
