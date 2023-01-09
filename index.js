let startingSize = 16;
let sizeInput = document.getElementById("sizeInput");
let resetButton = document.getElementById("reset");
let blackButton = document.getElementById("blackButton");
let redButton = document.getElementById("redButton");
let blueButton = document.getElementById("blueButton");

let selectedColor = "black";

function populateSketchBox(size) {
  let sketchBox = document.querySelector(".sketchbox");
  sketchBox.innerHTML = "";
  sketchBox.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  sketchBox.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  let totalSquares = size * size;
  for (let i = 0; i < totalSquares; i++) {
    let square = document.createElement("div");
    square.style.backgroundColor = "gray";
    square.classList.add("square");
    sketchBox.append(square);
  }
  colorTheSquares();
}

function colorTheSquares() {
  let squares = document.querySelectorAll(".square");
  Array.from(squares).forEach((square) => {
    square.addEventListener("mouseover", function (e) {
      square.style.backgroundColor = selectedColor;
    });
  });
}

sizeInput.addEventListener("change", () => {
  populateSketchBox(sizeInput.value);
});

function resetSketchbox() {
  let squares = document.querySelectorAll(".square");
  Array.from(squares).forEach((square) => {
    square.style.backgroundColor = "gray";
  });
}

function changeColor(color) {
  console.log("test");
  selectedColor = color;
  resetSketchbox();
}

populateSketchBox(startingSize);
resetButton.addEventListener("click", resetSketchbox);
blackButton.addEventListener("click", () => {
  changeColor("black");
});
redButton.addEventListener("click", () => {
  changeColor("red");
});
blueButton.addEventListener("click", () => {
  changeColor("blue");
});
