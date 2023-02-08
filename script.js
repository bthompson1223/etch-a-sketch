const container = document.querySelector('.container')
const px = document.querySelectorAll('.pixel');
let gridSize = 16


const button = document.createElement('button');
button.classList.add('reset');
button.textContent = "Reset";
button.style.cssText = "position: absolute; top: 0; right: 0;"
container.appendChild(button)

//Function to get random rgb values
function getRandomNumber() {
  return Math.floor(Math.random()*256);
}

//Variables to set random color on page load
let r = getRandomNumber();
let g = getRandomNumber();
let b = getRandomNumber();
let color = `rgb(${r}, ${g}, ${b})`;


function makeStartSquare(gridSize) {
    let rows = gridSize;
    let cols = gridSize;
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (let i = 0; i < (cols * rows); i++) {
        let cell = document.createElement('div');
        container.appendChild(cell).className = "pixel";
    }

    document.querySelectorAll('.pixel').forEach(item => {
        item.addEventListener('mouseover', (e) => {
            item.style.backgroundColor = `${color}`;
            console.log(color)
        })
    })
    
}


//Function to get user input for new grid
function getInput() {
    let input = window.prompt("Please enter grid size. Size must be between 1 and 100.");

    while (isNaN(input) || input < 1 || input > 100) {
        input = window.prompt("Sorry, that isn't a valid choice. Please choose a number between 1 and 100.")
    }

    gridSize = input;
    removeTiles();
    makeStartSquare(gridSize)
}

function removeTiles() {
    let box = document.querySelector('.container');
    while (box.firstChild) {
        box.removeChild(box.firstChild);
    }
}

document.querySelector('.reset').addEventListener('click', getInput)

makeStartSquare(gridSize)





