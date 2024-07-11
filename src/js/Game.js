import Board from "./Board";
import Goblins from "./Goblins";
import Mechanics from "./Mechanics";


export default class Game {
  constructor(boardSize) {
    this.board = new Board(boardSize);
    this.goblins = new Goblins();
    this.mechanics = new Mechanics();
    this.start = this.start.bind(this);
  }

 
  init() {
    const generatedBoard = this.board.generateBoard();
    this.board.insertBoardOnPage(generatedBoard);
    this.mechanics.startButton.addEventListener("click", this.start);
    this.mechanics.stopButton.addEventListener("click", (e) => {
      this.mechanics.endGame(e);
      clearInterval(this.goblins.intervalShowGoblins);
      this.mechanics.startButton.addEventListener("click", this.start);
    });
  }

 
  start() {
    clearInterval(this.goblins.intervalShowGoblins); 
    this.goblins.showRandomGoblins(); 
    this.mechanics.hangEventClickByCells(); 
    this.mechanics.hitPoints.textContent = 0;
    this.mechanics.missPoints.textContent = 0;
    this.mechanics.informer(false); 
  }
}