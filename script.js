let colorMode = document.querySelector("#color-mode")
let eraserBtn = document.querySelector("#eraser")
let clearBtn = document.querySelector("#clear")
let grid = document.querySelector(".grid")
const buttons = document.querySelectorAll("button")
function activeBtns() {
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      buttons.forEach((btn) => btn.classList.remove("active"))
      this.classList.add("active")
    })
  })
}
activeBtns()
setUpGrid()

function setUpGrid() {
  colorMode.addEventListener("click", (gridValue) => {
    gridValue = prompt("Type a number between 1 and 64")
    if (Number(gridValue) <= 64) {
      grid.style.gridTemplateColumns = `repeat(${gridValue}, 1fr)`

      grid.style.gridTemplateRows = `repeat(${gridValue}, 1fr)`

      for (i = 0; i < gridValue ** 2; i++) {
        let gridElement = document.createElement("div")

        gridElement.classList.add("grid-element")
        gridElement.addEventListener("mouseenter", () => {
          gridElement.classList.add("add-color")
        })

        grid.appendChild(gridElement)
      }
    } else {
      alert("Try agin: type the right number please.")
    }
  })
}
