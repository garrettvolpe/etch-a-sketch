let startingSize = 16;
let sizeInput = document.getElementById("sizeInput");

function populateSketchBox(size) {
  let sketchBox = document.querySelector(".sketchbox");
  sketchBox.innerHTML = "";
  sketchBox.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  sketchBox.style.gridTemplateRows = `repeat(${size}, 1fr)`;
  let totalSquares = size * size;
  for (let i = 0; i < totalSquares; i++) {
    let square = document.createElement("div");
    square.style.backgroundColor = "gray";
    sketchBox.append(square);
  }
}

populateSketchBox(startingSize);

sizeInput.addEventListener("change", () => {
  console.log("testing");
  populateSketchBox(sizeInput.value);
});
