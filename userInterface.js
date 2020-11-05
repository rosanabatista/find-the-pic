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
    const timerStr = this.convertSeconds(remainingTime);
    document.querySelector(".time span").innerHTML = timerStr;
  },

  printScore: function (score) {
    document.querySelector(".score span").innerHTML = score;
    document.querySelector(".total-score").innerHTML = score;
    var highscore = localStorage.getItem("highscore");

    if (highscore !== null) {
      if (score > highscore) {
        localStorage.setItem("highscore", score);
      }
    } else {
      localStorage.setItem("highscore", score);
    }
    document.querySelector(".high-score span").innerHTML = highscore;
  },

  createIcon: function (icon) {
    const boardItemDiv = document.createElement("div");
    boardItemDiv.classList.add("board-item");
    boardItemDiv.classList.add("align-center");

    const itemLink = document.createElement("a");
    itemLink.setAttribute("href", "#");
    itemLink.classList.add(icon.color);
    itemLink.classList.add(icon.size);

    itemLink.onclick = handleScore;
    itemLink.setAttribute("data-id", icon.id());

    const itemIcon = document.createElement("i");
    itemIcon.setAttribute("class", icon.css);
    itemIcon.classList.add(icon.rotation);

    itemLink.appendChild(itemIcon);
    boardItemDiv.appendChild(itemLink);
    document.querySelector(".board").appendChild(boardItemDiv);
  },

  clearBoard: function () {
    const icons = document.querySelectorAll(".board-item");
    icons.forEach((icon) => icon.remove());
  },

  printWord(word) {
    //get the active language
    const language = document
      .querySelector(".langWrap .active")
      .getAttribute("language");
    //translate word
    const translatedWord = i18n[language][word];
    //ouput to html
    document.querySelector(".word").innerHTML = translatedWord;
  },

  // printHigherScore(score) {
  //   document.querySelector(".high-score span").innerHTML = game.highScore(
  //     score
  //   );
  // },

  convertSeconds(value) {
    const sec = parseInt(value, 10); // convert value to number if it's string
    let minutes = Math.floor(sec / 60); // get minutes
    let seconds = sec - minutes * 60; //  get seconds
    // add 0 if value < 10; Example: 2 => 02
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    return minutes + ":" + seconds; // Return is HH : MM : SS
  },
};
