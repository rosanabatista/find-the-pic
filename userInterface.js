const userInterface = {
  showInstructions: function () {
    document.querySelector(".instructions").classList.remove("hide"); //hide the instructions screen when the game starts
    document.querySelector(".game").classList.add("hide"); //remove the hidden class of the game screen
    document.querySelector(".game-over").classList.add("hide"); //hide the game over screen
  },

  showBoard: function () {
    document.querySelector(".instructions").classList.add("hide"); //hide the instructions screen when the game starts
    document.querySelector(".game").classList.remove("hide"); //remove the hidden class of the game screen
    document.querySelector(".game-over").classList.add("hide"); //hide the game over screen
  },

  showGameOver: function () {
    document.querySelector(".instructions").classList.add("hide"); //hide the instructions screen when the game starts
    document.querySelector(".game").classList.add("hide");
    document.querySelector(".game-over").classList.remove("hide");
  },

  printRemainingTime: function (remainingTime) {
    document.querySelector(".time span").innerHTML = remainingTime;
  },

  printScore: function (score) {
    document.querySelector(".score span").innerHTML = score;
    document.querySelector(".total-score").innerHTML = score;
  },

  createIcon: function (icon) {
    const boardItemDiv = document.createElement("div");
    boardItemDiv.classList.add("board-item");
    boardItemDiv.classList.add("align-center");

    const itemLink = document.createElement("a");
    itemLink.setAttribute("href", "#");
    itemLink.setAttribute("class", icon.color);

    itemLink.onclick = handleScore;
    itemLink.setAttribute("data-id", icon.id());

    const itemIcon = document.createElement("i");
    itemIcon.setAttribute("class", icon.css);

    itemLink.appendChild(itemIcon);
    boardItemDiv.appendChild(itemLink);
    document.querySelector(".board").appendChild(boardItemDiv);
  },

  clearBoard: function () {
    const icons = document.querySelectorAll(".board-item");
    icons.forEach((icon) => icon.remove());
  },

  printWord(word) {
    document.querySelector(".word").innerHTML = word;
  },
};
