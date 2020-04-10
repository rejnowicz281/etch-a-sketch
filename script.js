const sketchpad = document.getElementById("sketchpad");

function innitialGrid() {
  sketchpad.style.gridTemplateColumns = `repeat(12, 1fr)`;
  sketchpad.style.gridTemplateRows = `repeat(12, 1fr)`;

  for (let i = 0; i < (12 * 12); i++) {
    let box = document.createElement("div");
    box.classList.add("box");
    sketchpad.appendChild(box);
  }

}

innitialGrid();