const container = document.createElement('div');
const body = document.querySelector('body');

container.classList.add('container');
body.appendChild(container);

for (let i = 0; i < 16 * 16; i++) {
  const div = document.createElement('div');
  div.classList.add('square');
  container.appendChild(div);
}
