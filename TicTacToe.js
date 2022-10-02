let redIsPlaying = true;
let board = [-1, -1, -1, -1, -1, -1, -1, -1, -1]; //0 for red 1 for yellow
let game_active = true;
const win_conditions = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [2, 4, 6],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
];

tiles = document.querySelectorAll(".tile");
const state = document.getElementById("state");
const reset = document.getElementById("reset");
state.innerText = "Red is playing";
const turnRed0 = (e) => {
  if (game_active && board[0] == -1) {
    tiles[0].classList.remove("visibility");
    if (redIsPlaying) {
      tiles[0].classList.add("turnRed");
      board[0] = 0;
      redIsPlaying = false;
      state.innerText = "yellow's turn!";
    } else {
      tiles[0].classList.add("turnYellow");
      board[0] = 1;
      redIsPlaying = true;
      state.innerText = "Red's turn!";
    }
    checkWin();
  }
};

const turnRed1 = (e) => {
  if (game_active && board[1] == -1) {
    tiles[1].classList.remove("visibility");
    tiles[1].classList.add("turnRed");
    if (redIsPlaying) {
      tiles[1].classList.add("turnRed");
      board[1] = 0;
      redIsPlaying = false;
      state.innerText = "yellow's turn!";
    } else {
      tiles[1].classList.add("turnYellow");
      board[1] = 1;
      redIsPlaying = true;
      state.innerText = "Red's turn!";
    }
    checkWin();
  }
};
const turnRed2 = (e) => {
  if (game_active && board[2] == -1) {
    tiles[2].classList.remove("visibility");
    tiles[2].classList.add("turnRed");
    if (redIsPlaying) {
      tiles[2].classList.add("turnRed");
      board[2] = 0;
      redIsPlaying = false;
      state.innerText = "yellow's turn!";
    } else {
      tiles[2].classList.add("turnYellow");
      board[2] = 1;
      redIsPlaying = true;
      state.innerText = "Red's turn!";
    }
    checkWin();
  }
};
const turnRed3 = (e) => {
  if (game_active && board[3] == -1) {
    tiles[3].classList.remove("visibility");
    tiles[3].classList.add("turnRed");
    if (redIsPlaying) {
      tiles[3].classList.add("turnRed");
      board[3] = 0;
      redIsPlaying = false;
      state.innerText = "yellow's turn!";
    } else {
      tiles[3].classList.add("turnYellow");
      board[3] = 1;
      redIsPlaying = true;
      state.innerText = "Red's turn!";
    }
    checkWin();
  }
};
const turnRed4 = (e) => {
  if (game_active && board[4] == -1) {
    tiles[4].classList.remove("visibility");
    tiles[4].classList.add("turnRed");
    if (redIsPlaying) {
      tiles[4].classList.add("turnRed");
      board[4] = 0;
      redIsPlaying = false;
      state.innerText = "yellow's turn!";
    } else {
      tiles[4].classList.add("turnYellow");
      board[4] = 1;
      redIsPlaying = true;
      state.innerText = "Red's turn!";
    }
    checkWin();
  }
};
const turnRed5 = (e) => {
  if (game_active && board[5] == -1) {
    tiles[5].classList.remove("visibility");
    tiles[5].classList.add("turnRed");
    if (redIsPlaying) {
      tiles[5].classList.add("turnRed");
      board[5] = 0;
      redIsPlaying = false;
      state.innerText = "yellow's turn!";
    } else {
      tiles[5].classList.add("turnYellow");
      board[5] = 1;
      redIsPlaying = true;
      state.innerText = "Red's turn!";
    }
    checkWin();
  }
};
const turnRed6 = (e) => {
  if (game_active && board[6] == -1) {
    tiles[6].classList.remove("visibility");
    tiles[6].classList.add("turnRed");
    if (redIsPlaying) {
      tiles[6].classList.add("turnRed");
      board[6] = 0;
      redIsPlaying = false;
      state.innerText = "yellow's turn!";
    } else {
      tiles[6].classList.add("turnYellow");
      board[6] = 1;
      redIsPlaying = true;
      state.innerText = "Red's turn!";
    }
    checkWin();
  }
};
const turnRed7 = (e) => {
  if (game_active && board[7] == -1) {
    tiles[7].classList.remove("visibility");
    tiles[7].classList.add("turnRed");
    if (redIsPlaying) {
      tiles[7].classList.add("turnRed");
      board[7] = 0;
      redIsPlaying = false;
      state.innerText = "yellow's turn!";
    } else {
      tiles[7].classList.add("turnYellow");
      board[7] = 1;
      redIsPlaying = true;
      state.innerText = "Red's turn!";
    }
    checkWin();
  }
};
const turnRed8 = (e) => {
  if (game_active && board[8] == -1) {
    tiles[8].classList.remove("visibility");
    tiles[8].classList.add("turnRed");
    if (redIsPlaying) {
      tiles[8].classList.add("turnRed");
      board[8] = 0;
      redIsPlaying = false;
      state.innerText = "yellow's turn!";
    } else {
      tiles[8].classList.add("turnYellow");
      board[8] = 1;
      redIsPlaying = true;
      state.innerText = "Red's turn!";
    }
    checkWin();
  }
};

const resetGame = (e) => {
  console.log("SIUU");
  redIsPlaying = true;
  board = [-1, -1, -1, -1, -1, -1, -1, -1, -1]; //0 for red 1 for yellow
  game_active = true;

  state.innerText = "Red is playing";
  for (let i = 0; i < 9; i++) {
    tiles[i].classList.add("visibility");
  }
};

tiles[0].addEventListener("click", turnRed0);
tiles[1].addEventListener("click", turnRed1);
tiles[2].addEventListener("click", turnRed2);
tiles[3].addEventListener("click", turnRed3);
tiles[4].addEventListener("click", turnRed4);
tiles[5].addEventListener("click", turnRed5);
tiles[6].addEventListener("click", turnRed6);
tiles[7].addEventListener("click", turnRed7);
tiles[8].addEventListener("click", turnRed8);

reset.addEventListener("click", resetGame);

const checkWin = (e) => {
  for (let i of win_conditions) {
    if (
      board[i[0]] == board[i[1]] &&
      board[i[1]] == board[i[2]] &&
      board[i[0]] != -1
    ) {
      game_active = 1;
      if (board[i[0]] == 1) {
        state.innerText = "Yellow has won!";
        game_active = false;
      } else if (board[i[0]] == 0) {
        state.innerText = "Red has won!";
        game_active = false;
      } else if (move_counter == 9) {
        state.innerText = "We have a draw!";
      }
    }
  }
};
