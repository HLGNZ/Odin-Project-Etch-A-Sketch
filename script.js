let color = document.querySelector(".color-pick")
let colorMode = document.querySelector(".color-mode")
let rainbowMode = document.querySelector(".rainbow-mode")
let eraserBtn = document.querySelector(".eraser")
let clearBtn = document.querySelector(".clear")
let grid = document.querySelector(".grid")
let gridRange = document.querySelector(".range")
let gridSize = document.querySelector(".grid-text")
const buttons = document.querySelectorAll("button")

const DEFAULT_SIZE = 16
let currentSize = DEFAULT_SIZE
//this function made new size value to change the default value
function setCurrentSize(newSize) {
  currentSize = newSize
}
// let mouseDown = false
// document.body.onmousedown = () => (mouseDown = true)
// document.body.onmouseup = () => (mouseDown = false)
// this function take a value from gridRange
function changeGridSize(value) {
  setCurrentSize(value)
  updateSizeValue(value)
  reloadGrid()
}
// this function update gridSize text
function updateSizeValue(newValue) {
  gridSize.textContent = `${newValue} X ${newValue}`
}
// this function clear grid and setUpGrid default value
function reloadGrid() {
  clearGrid()
  setUpGrid(currentSize)
}
//this function clear grid
function clearGrid() {
  grid.innerHTML = ""
}
clearBtn.addEventListener("click", () => reloadGrid())
gridRange.onmousemove = (e) => updateSizeValue(e.target.value)
gridRange.onchange = (e) => changeGridSize(e.target.value)

//this function setup the grid on the page
function setUpGrid(size) {
  grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`

  grid.style.gridTemplateRows = `repeat(${size}, 1fr)`

  for (i = 0; i < size ** 2; i++) {
    let gridElement = document.createElement("div")

    gridElement.classList.add("grid-element")

    gridElement.addEventListener("mouseenter", () => {
      gridElement.style.backgroundColor = color.value
    })
    colorMode.addEventListener("click", () => {
      gridElement.addEventListener("mouseenter", () => {
        gridElement.style.backgroundColor = color.value
      })
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
}
// made active effect when press on buttons turn buttons to another color.
function activeBtns() {
  colorMode.classList.add("active")
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      buttons.forEach((btn) => btn.classList.remove("active"))
      this.classList.add("active")
      clearBtn.classList.remove("active")
    })
  })
}
window.onload = () => {
  setUpGrid(DEFAULT_SIZE)

  activeBtns()
}
