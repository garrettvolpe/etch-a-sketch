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
function getRandomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

function changeColor(color) {
  if (color === "random") {
    selectedColor = getRandomRGB();
    return;
  }
  selectedColor = color;
}

populateSketchBox(startingSize);
