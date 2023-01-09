let startingSize = 16;
let sizeInput = document.getElementById("sizeInput");
let mode = document.getElementById("mode");
let selectedColor = "black";

let clicked = false;

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
      if (clicked) {
        square.style.backgroundColor = selectedColor;
      }
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

mode.style.color = "red";
mode.innerText = "Not Drawing";
populateSketchBox(startingSize);
document.querySelector(".sketchbox").addEventListener("click", () => {
  clicked = !clicked;
  if (clicked) {
    mode.style.color = "green";
    mode.innerText = "Drawing!";
  } else {
    mode.style.color = "red";
    mode.innerText = "Not Drawing";
  }
});
