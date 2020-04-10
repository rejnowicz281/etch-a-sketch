const sketchpad = document.getElementById("sketchpad");
const resetButton = document.getElementById("reset-button");

function gridLayout(rows, columns) {
  sketchpad.style.display = "grid";
  sketchpad.style.gridTemplateColumns = `repeat(${rows}, 1fr)`;
  sketchpad.style.gridTemplateRows = `repeat(${columns}, 1fr)`;

  for (let i = 0; i < (rows * columns); i++) {
    let box = document.createElement("div");
    box.classList.add("box");
    sketchpad.appendChild(box);
  }

}

innitialLayout = gridLayout(16, 16);
innitialLayout;

function resetGrid() {
  sketchpad.removeAttribute("style");
  sketchpad.innerHTML = "";
}

resetButton.addEventListener("click", function () {
  resetGrid();

  const rowsCount = prompt("How many rows?");
  const columnsCount = prompt("How many columns?");

  gridLayout(rowsCount, columnsCount);
});