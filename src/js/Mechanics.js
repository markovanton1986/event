export default class Mechanics {
    constructor() {
      this.stopButton = document.querySelector(".button__end");
      this.startButton = document.querySelector(".button__start");
      this.informerText = document.getElementById("informer");
      this.hitPoints = document.getElementById("hit");
      this.missPoints = document.getElementById("miss");
      this.endGame = this.endGame.bind(this);
    }
  
   
    hangEventClickByCells() {
      const board = document.getElementById("game-board");
      board.addEventListener("click", (e) => {
        if (e.target.classList.contains('board__col')) this.beatHammer();
        if (e.target.classList.contains("_active")) this.addHitPoint(e.target);
      });
    }
  
  
    beatHammer() {
      const board = document.querySelector(".board");
      board.classList.add("_click");
      setTimeout(() => {
        board.classList.remove("_click");
      }, 150);
    }
  
   
    endGame(stopButtonClick) {
      const activeGoblin = document.querySelector("._active");
      if (activeGoblin) activeGoblin.classList.remove("_active");
      if (stopButtonClick) {
        this.informer("Игра закончена. Отдохните и возвращайтесь в игру!");
        return;
      }
      this.informer("Гоблины ускользнули от вас. Попробуйте ещё раз!");
    }
  
   
    informer(text) {
      if (text) {
        this.informerText.textContent = text;
        return;
      }
      this.informerText.textContent = "";
    }
  
  
    addHitPoint(cell) {
      this.hitPoints.textContent = Number(this.hitPoints.textContent) + 1;
      cell.classList.remove("_active");
    }
  
    
    addMissPoint() {
      this.missPoints.textContent = Number(this.missPoints.textContent) + 1;
    }
  }