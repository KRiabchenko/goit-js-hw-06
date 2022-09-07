const inputEl = document.querySelector('#font-size-control');

const spanEl = document.querySelector('#text');

inputEl.addEventListener('input', onChangeSize);

function onChangeSize(event) {
spanEl.style.fontSize = `${event.currentTarget.value}.px`
}

