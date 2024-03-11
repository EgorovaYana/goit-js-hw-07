const inputEl = document.querySelector('#name-input');
const spanEl = document.querySelector('#name-output');

inputEl.addEventListener('input', () => {
  if (inputEl.value.trim().length > 0) {
    spanEl.textContent = inputEl.value.trim();
    return;
  }
  spanEl.textContent = 'Anonymous';
});
