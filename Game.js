class Game {
  constructor(
    maxGameTime,
    iconDatabase,
    colorDatabase,
    sizeDatabase,
    rotateDatabase
  ) {
    this.isPlaying = false;
    this.remainingTime = maxGameTime;
    this.score = 0;
    this.timer = null;
    this.icons = this.shuffleArray(
      iconDatabase,
      colorDatabase,
      sizeDatabase,
      rotateDatabase
    );
    this.selectedIndexes = [];
  }

  start() {
    this.isPlaying = true;
    userInterface.showBoard();
    userInterface.printRemainingTime(this.remainingTime);
    userInterface.printScore(this.score);
    userInterface.clearBoard();

    for (let i = 0; i < this.icons.length; i++) {
      userInterface.createIcon(this.icons[i]);
    }
    this.selectIcon();
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

  addScore(clickedId) {
    if (clickedId === this.activeIcon.id()) {
      this.score += 100;
      userInterface.printScore(this.score);
      this.selectIcon();
    } else {
      this.remainingTime -= 5;
    }
  }

  selectIcon() {
    if (this.selectedIndexes.length === this.icons.length) {
      return this.gameOver();
    }
    const index = Math.floor(Math.random() * this.icons.length);
    if (this.selectedIndexes.includes(index)) {
      return this.selectIcon();
    }
    this.activeIcon = this.icons[index];
    userInterface.printWord(this.activeIcon.name);
    this.selectedIndexes.push(index);
  }

  shuffleArray(arr, colors, sizes, rotation) {
    const randomArray = arr
      .map((a) => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map((a) => a[1]);
    const iconArray = randomArray.map((item) => {
      const colorIndex = Math.floor(Math.random() * colors.length);
      const sizeIndex = Math.floor(Math.random() * sizes.length);
      const rotationIndex = Math.floor(Math.random() * rotation.length);
      const icon = new Icon(
        item.name,
        colors[colorIndex],
        item.css,
        sizes[sizeIndex],
        rotation[rotationIndex]
      );
      return icon;
    });
    return iconArray;
  }
}
