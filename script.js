const sketchpad = document.getElementById("sketchpad");
const resetButton = document.getElementById("reset-button");

function grid(rows, columns) {
  sketchpad.style.display = "grid";
  sketchpad.style.gridTemplateColumns = `repeat(${rows}, 1fr)`;
  sketchpad.style.gridTemplateRows = `repeat(${columns}, 1fr)`;

  for (let i = 0; i < (rows * columns); i++) {
    let div = document.createElement("div");
    div.classList.add("box");
    sketchpad.appendChild(div);
  }

  mouseOver();
}

function mouseOver() {
  const allBoxes = document.querySelectorAll(".box");

  for (box of allBoxes) {
    box.addEventListener("mouseover", function () {
      this.classList.add("mouseOver");
    });
  }
}


innitialLayout = grid(24, 24);
innitialLayout;

function resetGrid() {
  sketchpad.removeAttribute("style");
  sketchpad.innerHTML = "";
}

resetButton.addEventListener("click", function () {
  resetGrid();

  const rowsCount = prompt("How many rows?");
  const columnsCount = prompt("How many columns?");

  grid(rowsCount, columnsCount);
});