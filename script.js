const sketchpad = document.getElementById("sketchpad");

const resetButton = document.getElementById("reset-button");

const settings = {
  rainbow: document.getElementById("rainbow-button"),
  default: document.getElementById("default-button"),
  blackToWhite: document.getElementById("black-to-white-button")
}

function setGrid(rows, columns) {
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
      this.style.backgroundColor = "black";
    });
  }

  settings.rainbow.addEventListener("click", function () {
    for (box of allBoxes) {
      box.addEventListener("mouseover", function () {
        const randomRGB = {
          R: Math.floor(Math.random() * 257),
          G: Math.floor(Math.random() * 257),
          B: Math.floor(Math.random() * 257)
        }
        this.style.backgroundColor = `rgb(${randomRGB.R}, ${randomRGB.G}, ${randomRGB.B})`;
      });
    }
  });

  settings.default.addEventListener("click", function () {
    for (box of allBoxes) {
      box.addEventListener("mouseover", function () {
        this.style.backgroundColor = "black";
      });
    }
  });

  settings.blackToWhite.addEventListener("click", function () {
    for (box of allBoxes) {

    }
  });
}

function resetGrid() {
  sketchpad.removeAttribute("style");
  sketchpad.innerHTML = "";
}

resetButton.addEventListener("click", function () {
  resetGrid();

  const rowsCount = prompt("How many rows?");
  const columnsCount = prompt("How many columns?");

  setGrid(rowsCount, columnsCount);
});

innitialLayout = setGrid(24, 24);
innitialLayout;