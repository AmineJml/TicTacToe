let redIsPlaying = true;
let board = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
const winningCondition = [];
const turnRed0 = (e) => {
  tiles[0].classList.remove("visibility");
  if (redIsPlaying) {
    tiles[0].classList.add("turnRed");
    redIsPlaying = false;
  } else {
    tiles[0].classList.add("turnYellow");
    redIsPlaying = true;
  }
};

const turnRed1 = (e) => {
  tiles[1].classList.remove("visibility");
  tiles[1].classList.add("turnRed");
  if (redIsPlaying) {
    tiles[1].classList.add("turnRed");
    redIsPlaying = false;
  } else {
    tiles[1].classList.add("turnYellow");
    redIsPlaying = true;
  }
};
const turnRed2 = (e) => {
  tiles[2].classList.remove("visibility");
  tiles[2].classList.add("turnRed");
  if (redIsPlaying) {
    tiles[2].classList.add("turnRed");
    redIsPlaying = false;
  } else {
    tiles[2].classList.add("turnYellow");
    redIsPlaying = true;
  }
};
const turnRed3 = (e) => {
  tiles[3].classList.remove("visibility");
  tiles[3].classList.add("turnRed");
  if (redIsPlaying) {
    tiles[3].classList.add("turnRed");
    redIsPlaying = false;
  } else {
    tiles[3].classList.add("turnYellow");
    redIsPlaying = true;
  }
};
const turnRed4 = (e) => {
  tiles[4].classList.remove("visibility");
  tiles[4].classList.add("turnRed");
  if (redIsPlaying) {
    tiles[4].classList.add("turnRed");
    redIsPlaying = false;
  } else {
    tiles[4].classList.add("turnYellow");
    redIsPlaying = true;
  }
};
const turnRed5 = (e) => {
  tiles[5].classList.remove("visibility");
  tiles[5].classList.add("turnRed");
  if (redIsPlaying) {
    tiles[5].classList.add("turnRed");
    redIsPlaying = false;
  } else {
    tiles[5].classList.add("turnYellow");
    redIsPlaying = true;
  }
};
const turnRed6 = (e) => {
  tiles[6].classList.remove("visibility");
  tiles[6].classList.add("turnRed");
  if (redIsPlaying) {
    tiles[6].classList.add("turnRed");
    redIsPlaying = false;
  } else {
    tiles[6].classList.add("turnYellow");
    redIsPlaying = true;
  }
};
const turnRed7 = (e) => {
  tiles[7].classList.remove("visibility");
  tiles[7].classList.add("turnRed");
  if (redIsPlaying) {
    tiles[7].classList.add("turnRed");
    redIsPlaying = false;
  } else {
    tiles[7].classList.add("turnYellow");
    redIsPlaying = true;
  }
};
const turnRed8 = (e) => {
  tiles[8].classList.remove("visibility");
  tiles[8].classList.add("turnRed");
  if (redIsPlaying) {
    tiles[8].classList.add("turnRed");
    redIsPlaying = false;
  } else {
    tiles[8].classList.add("turnYellow");
    redIsPlaying = true;
  }
};
tiles = document.querySelectorAll(".tile");

tiles[0].addEventListener("click", turnRed0);
tiles[1].addEventListener("click", turnRed1);
tiles[2].addEventListener("click", turnRed2);
tiles[3].addEventListener("click", turnRed3);
tiles[4].addEventListener("click", turnRed4);
tiles[5].addEventListener("click", turnRed5);
tiles[6].addEventListener("click", turnRed6);
tiles[7].addEventListener("click", turnRed7);
tiles[8].addEventListener("click", turnRed8);

// for (let i = 0; i < tiles.length; i++) {
//   tiles[i].addEventListener("click", t);
// }
