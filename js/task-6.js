const createBtnEl = document.querySelector('[data-create]');
const inputEl = document.querySelector('#controls input');
const destroyBtnEl = document.querySelector('[data-destroy]');
const containerEl = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

createBtnEl.addEventListener('click', () => {
  if (inputEl.value >= 1 && inputEl.value <= 100) {
    createBoxes(Number(inputEl.value));
  }
  inputEl.value = '';
});
destroyBtnEl.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  const arr = [];
  let width = 30;
  let height = 30;
  for (let i = 0; i < amount; i += 1) {
    arr.push(
      `<div style="width: ${width}px; height: ${height}px;background-color: ${getRandomHexColor()}"></div>`
    );
    width += 10;
    height += 10;
  }
  containerEl.innerHTML = arr.join('');
}

function destroyBoxes() {
  containerEl.innerHTML = '';
}
