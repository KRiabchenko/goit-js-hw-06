const btnEl = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');
const bodyEl = document.querySelector('body');

btnEl.addEventListener('click', onBtnChangeColor)

function onBtnChangeColor() {
  const randomColor = getRandomHexColor()
  spanEl.textContent = randomColor
  bodyEl.style.backgroundColor = randomColor;
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
