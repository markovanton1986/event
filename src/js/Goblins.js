import Mechanics from "./Mechanics";


export default class Goblins {
  constructor() {
    this.mechanics = new Mechanics();
  }


  showRandomGoblins() {
    const cells = document.getElementsByClassName("board__col");
    this.intervalShowGoblins = setInterval(() => {
      const randomCell = this.generateRandomCell(this.boardSize);
      const activeCell = document.querySelector("._active");
      if (activeCell) {
        activeCell.classList.remove("_active");
        this.mechanics.addMissPoint();
        if (this.mechanics.missPoints.textContent === "5") {
          this.mechanics.endGame();
          clearInterval(this.intervalShowGoblins);
        }
      }
      cells[randomCell].classList.add("_active");
    }, 1000);
  }

 
  generateRandomCell() {
    const boardSize = document.querySelectorAll('.board__row').length;
    const min = 0;
    const max = Math.floor(boardSize ** 2);
    return Math.floor(Math.random() * (max - min)) + min; 
  }
}