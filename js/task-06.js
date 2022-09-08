
const inputEl = document.querySelector('#validation-input');

const inputLength = Number(inputEl.dataset.length);

inputEl.addEventListener('blur', onInputBlur)

function onInputBlur(event) {
    const isValid =
        event.currentTarget.value.length === inputLength;
     
    if (isValid) {
        event.currentTarget.classList.add('valid')
    } else {
        event.currentTarget.classList.add('invalid')
    }     
}

