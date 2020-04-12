const resetButton = document.getElementById("reset-button");

function setGrid(rows, columns) {
  const sketchpad = document.getElementById("sketchpad");

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

  const settings = {
    rainbow: document.getElementById("rainbow-button"),
    default: document.getElementById("default-button"),
    grayscale: document.getElementById("grayscale-button")
  }

  function rainbowEffect() {
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
  }

  function defaultEffect() {
    for (box of allBoxes) {
      box.addEventListener("mouseover", function () {
        this.style.backgroundColor = "black";
      });
    }
  }

  function grayscaleEffect() {

  }

  defaultEffect(); // innitial effect

  settings.rainbow.addEventListener("click", rainbowEffect); // on click, switch to rainbow effect

  settings.default.addEventListener("click", defaultEffect); // on click, switch to default effect

  settings.grayscale.addEventListener("click", grayscaleEffect); // on click, switch to grayscale effect
}

resetButton.addEventListener("click", function () {
  sketchpad.removeAttribute("style");
  sketchpad.innerHTML = "";

  const rowsCount = prompt("How many rows?");
  const columnsCount = prompt("How many columns?");

  setGrid(rowsCount, columnsCount);
});

innitialLayout = setGrid(24, 24);
innitialLayout;