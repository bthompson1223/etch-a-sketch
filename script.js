const container = document.querySelector('.container')

function makeStartSquare(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (let i = 0; i < (cols * rows); i++) {
        let cell = document.createElement('div');
        container.appendChild(cell).className = "pixel";
    }

}

makeStartSquare(16, 16)

const px = document.querySelectorAll('.pixel');

function getRandomNumber() {
  return Math.floor(Math.random()*256);
}

let r = getRandomNumber();
let g = getRandomNumber();
let b = getRandomNumber();
let color = `rgb(${r}, ${g}, ${b})`;


/* px.forEach((px) => {
    px.addEventListener('mouseover', () => {
        px.style.background = `${color}`;
        console.log(1)
    })
}) */

document.querySelectorAll('.pixel').forEach(item => {
    item.addEventListener('mouseover', (e) => {
        item.style.backgroundColor = `${color}`;
        console.log(color)
    })
})


