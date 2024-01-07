let color = document.querySelector(".color-pick")
let colorMode = document.querySelector(".color-mode")
let rainbowMode = document.querySelector(".rainbow-mode")
let eraserBtn = document.querySelector(".eraser")
let clearBtn = document.querySelector(".clear")
let grid = document.querySelector(".grid")
let gridRange = document.querySelector(".range")
let gridText = document.querySelector(".grid-text")
const buttons = document.querySelectorAll("button")

// made active effect when press on buttons turn buttons to another color.
activeBtns()
setUpGrid()
//this function setup the grid on the page
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
          gridElement.style.backgroundColor = color.value
        })

        clearBtn.addEventListener("click", () => {
          gridElement.style.backgroundColor = ""
        })
        rainbowMode.addEventListener("click", () => {
          const randomR = Math.floor(Math.random() * 256)
          const randomG = Math.floor(Math.random() * 256)
          const randomB = Math.floor(Math.random() * 256)
          gridElement.addEventListener("mouseenter", () => {
            gridElement.style.backgroundColor = `rgb(${randomR},${randomG},${randomB})`
          })
        })

        eraserBtn.addEventListener("click", () => {
          gridElement.addEventListener("mouseenter", () => {
            gridElement.style.backgroundColor = "white"
          })
        })

        grid.appendChild(gridElement)
      }
    } else {
      alert("Try agin: type the right number please.")
    }
  })
}

function activeBtns() {
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      buttons.forEach((btn) => btn.classList.remove("active"))
      this.classList.add("active")
      clearBtn.classList.remove("active")
    })
  })
}
