let gridSizeDisplay = document.querySelector("#grid-size-display");
const slider = document.querySelector("#slider");
const colorChoice = document.querySelector("#color-choice");

document.addEventListener("DOMContentLoaded", function () {
  createBoard(16);
  gridSizeDisplay.textContent = `Grid Size: 16 x 16`;
});

slider.addEventListener("input", function () {
  let gridDisplay = slider.value;
  createBoard(gridDisplay);
  gridSizeDisplay.textContent = `Grid Size: ${slider.value} x ${slider.value}`;
});

function createBoard(size) {
  let board = document.querySelector(".board");
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => div.remove());
  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  let numDiv = size * size;
  for (let i = 0; i < numDiv; i++) {
    let div = document.createElement("div");
    div.addEventListener("mouseover", function () {
      div.style.backgroundColor = colorChoice.value;
    });
    div.classList.add("grid-item");
    board.insertAdjacentElement("beforeend", div);
  }
}
