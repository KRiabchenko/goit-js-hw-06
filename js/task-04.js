let counterValue = 0;

const decrementBtn = document.querySelector('button[data-action="decrement"]');
console.log(decrementBtn.dataset.action);
const incrementBtn = document.querySelector('button[data-action="increment"]');
console.log(incrementBtn.dataset.action);
const valueEl = document.querySelector('#value');
console.log(valueEl);

decrementBtn.addEventListener("click", () => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
})

incrementBtn.addEventListener('click', () => {
    counterValue += 1;
    valueEl.textContent = counterValue;
})
