let color = 'black';

let click = true;

function createBoard(size) {
  let board = document.querySelector('.board');
  let squares = board.querySelectorAll('div');

  squares.forEach((div) => div.remove());

  board.style.gridTemplateColumns = `repeat(${size}, 1fr)`; // makes 16 or size amt of cols and each column  is 1/16 of the container
  board.style.gridTemplateRows = `repeat(${size}, 1fr)`; // makes 16  or size amt of rows and each row  is 1/16 of the container

  let amount = size * size;
  for (let i = 0; i < amount; i++) {
    let square = document.createElement('div');
    square.style.backgroundColor = 'black';
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
}

function colorSquare() {
  if (click) {
    if (color === 'random') {
      this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    } else {
      this.style.backgroundColor = color;
    }
  }
}

function changeColor(choice) {
  color = choice;
}

document.querySelector('body').addEventListener('click', () => {
  if (click) click = false;
  else click = true;
});
