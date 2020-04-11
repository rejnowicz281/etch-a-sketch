const sketchpad = document.getElementById("sketchpad");

const resetButton = document.getElementById("reset-button");

const settings = {
  rainbow: document.getElementById("rainbow-button"),
  blackToWhite: document.getElementById("black-to-white-button")
}

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

    box.addEventListener("mouseover", function (event) {
      const randomRGB = {
        R: Math.floor(Math.random() * 257),
        G: Math.floor(Math.random() * 257),
        B: Math.floor(Math.random() * 257)
      }
      event.currentTarget.style.backgroundColor = `rgb(${randomRGB.R}, ${randomRGB.G}, ${randomRGB.B})`;
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