class Game {
  constructor(maxGameTime) {
    this.isPlaying = false;
    this.remainingTime = maxGameTime;
    this.score = 0;
    this.timer = null;
  }

  start() {
    this.isPlaying = true;
    userInterface.showBoard();
    userInterface.printRemainingTime(this.remainingTime);
    userInterface.printScore(this.score);
    userInterface.clearBoard();
    for (let i = 0; i < 120; i++) {
      userInterface.createIcon();
    }
    this.timer = setInterval(this.isGameOver.bind(this), 1000); //we need to call bind on this.isGameOver to avoid the class missing context because of setInterval call
  }

  gameOver() {
    userInterface.showGameOver();
    clearInterval(this.timer);
    this.isPlaying = false;
    userInterface.printScore(this.score);
  }

  isGameOver() {
    this.remainingTime--;
    userInterface.printRemainingTime(this.remainingTime);
    if (this.remainingTime <= 0) {
      this.gameOver();
    }
  }

  addScore() {
    this.score += 100;
    userInterface.printScore(this.score);
  }
}
