
export default class Board {
    constructor(boardSize) {
      this.boardSize = boardSize;
    }
  
  
    generateBoard() {
      const board = document.createElement("table");
      board.classList.add("board");
      for (let i = 0; i < this.boardSize; i += 1) {
        const boardRow = document.createElement("tr");
        boardRow.classList.add("board__row");
        for (let j = 0; j < this.boardSize; j += 1) {
          const boardCol = document.createElement("td");
          boardCol.classList.add("board__col");
          boardRow.appendChild(boardCol);
        }
        board.appendChild(boardRow);
      }
      return board;
    }
  
 
    insertBoardOnPage(board) {
      document.getElementById("game-board").appendChild(board);
    }
  }