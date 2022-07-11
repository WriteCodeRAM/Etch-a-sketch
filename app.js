let color = 'black';
let click = false;

const mode = document.querySelector('.mode');
const buttons = document.querySelector('.buttons');

function createBoard(size) {
  let board = document.querySelector('.board');
  let squares = board.querySelectorAll('div');

  squares.forEach((div) => div.remove());

  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`; // makes 16 or size amt of cols and each column  is 1/16 of the container
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`; // makes 16  or size amt of rows and each row  is 1/16 of the container

  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    let square = document.createElement('div');
    square.style.backgroundColor = 'white';
    board.insertAdjacentElement('beforeend', square);

    square.addEventListener('mouseover', colorSquare);
  }
}

createBoard(16);

function changeBoard(input) {
  if (input >= 2 && input <= 100) {
    createBoard(input);
  } else {
    alert('must enter a value between 2 and 100');
  }
  document.getElementById('sizeInput').placeholder = 16;
}

function colorSquare() {
  if (click) {
    if (color === 'rainbow') {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
      this.style.backgroundColor = color;
    }
  }
}

function changeColor(choice) {
  color = choice;
}

document.querySelector('body').addEventListener('click', (e) => {
  if (e.target.tagName != 'BUTTON' && e.target.nodeName != 'INPUT') {
    if (click) {
      click = false;
      mode.classList.remove('span');
      mode.classList.add('offSpan');
      mode.innerText = 'Color mode: OFF  (click to color)';
    } else {
      click = true;
      mode.classList.remove('offSpan');
      mode.classList.add('span');
      mode.innerText = 'Color mode: ON  (click to stop coloring)';
    }
  }
});

buttons.addEventListener('click', () => {});
