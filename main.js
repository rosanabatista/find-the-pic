const maxGameTime = 120;
let game = null;

// add logic to start the game
const handleStartGame = function (event) {
  event.preventDefault(); // prevents that the default events on html to happen
  if (game !== null && game.isPlaying) {
    //checks if the game started, prevents double start of the game if the space is pressed
    return;
  }
  game = new Game(
    maxGameTime,
    iconDatabase,
    colorDatabase,
    sizeDatabase,
    rotateDatabase
  );
  game.start();
};

const handleScore = function (event) {
  event.preventDefault();

  // when you click on an SVG, the event.target is either a PATH or an SVG element.
  // In order to get the A tag, we need to go though it's parents and get the first A tag.
  // We can use the path attribute to find this information. We filter all A elements and
  // get the first one from the array. This is the element we are looking for.
  const clickedItem = event.path.filter((item) => item.localName === "a")[0];

  game.addScore(clickedItem);
};

const handleQuit = function (event) {
  event.preventDefault();
  game.gameOver();
};

const backHome = function (event) {
  event.preventDefault();
  userInterface.showInstructions();
};

const toggleSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  }
}

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);

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
  document.querySelector(".quit a").onclick = handleQuit;
  document.querySelector(".home").onclick = backHome;

  // activate switch language
  const langEl = document.querySelector(".langWrap");
  const link = document.querySelectorAll(".langWrap a");

  link.forEach((el) => {
    el.addEventListener("click", (event) => {
      event.preventDefault();
      langEl.querySelector(".active").classList.remove("active");
      event.target.classList.add("active");
      userInterface.printWord(game.activeIcon.name);
    });
  });
});
