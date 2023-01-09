let startingSize = 16;
let sizeInput = document.getElementById("sizeInput");
let resetButton = document.getElementById("reset");

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
      square.style.backgroundColor = "red";
    });
  });
}

sizeInput.addEventListener("change", () => {
  populateSketchBox(sizeInput.value);
});

resetButton.addEventListener("click", () => {
  let squares = document.querySelectorAll(".square");
  Array.from(squares).forEach((square) => {
    square.style.backgroundColor = "gray";
  });
});

populateSketchBox(startingSize);
