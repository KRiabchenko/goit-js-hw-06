const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formElements = event.currentTarget.elements;
    const mail = formElements.email.value;
    const password = formElements.password.value;
    

    const formData = { mail, password }
    
    if (mail === '' || password === '') {
        return alert("Все поля должны быть заполнены!");
    }

    console.log(`Login: ${mail}, Password: ${password}`);
    event.currentTarget.reset();
}
