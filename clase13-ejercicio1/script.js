document.getElementById('sign-up-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let valid = true;
    
    document.querySelectorAll('.error-message').forEach(element => {
        element.style.display = 'none';
    });

    if (valid) {
        alert('Form submitted successfully.');
        saveToLocalStorage();
    }
});

 //first name and last name do not contain numbers
document.getElementById('first-name').addEventListener('input', function() {
    const namePattern = /^[a-zA-Z]+$/;
    const firstNameError = document.getElementById('first-name-error');
    
    if (namePattern.test(this.value)) {
        firstNameError.style.display = 'none';
    } else {
        firstNameError.innerText = 'First name should not contain numbers.';
        firstNameError.style.display = 'block';
    }
});

document.getElementById('last-name').addEventListener('input', function() {
    const namePattern = /^[a-zA-Z]+$/;
    const lastNameError = document.getElementById('last-name-error');
    
    if (namePattern.test(this.value)) {
        lastNameError.style.display = 'none';
        this.classList.remove('input-invalid');
        this.classList.add('input-valid');
    } else {
        lastNameError.innerText = 'Last name should not contain numbers.';
        lastNameError.style.display = 'block';
        this.classList.remove('input-valid');
        this.classList.add('input-invalid');
    }
});

//username lenght
document.getElementById('username').addEventListener('input', function() {
    const namePattern = /^[a-zA-Z]+$/;
    const usernameError = document.getElementById('username-error');
    
    if (this.value.length >= 2) {
        usernameError.style.display = 'none';
    } else {
        usernameError.innerText = 'Username should be at least 2 letters.';
        usernameError.style.display = 'block';
    }
});


//password contains at least one number and one capital letter
document.getElementById('password').addEventListener('input', function() {
    const numberPattern = /\d/;
    const uppercasePattern = /[A-Z]/;
    const passwordError = document.getElementById('password-error');
    
    let errorMessage = '';
    
    if (!numberPattern.test(this.value) || !uppercasePattern.test(this.value)) {
        errorMessage += 'Password must contain at least one number and one uppercase letter.';
    }
    
    if (errorMessage === '') {
        passwordError.style.display = 'none';
    } else {
        passwordError.innerText = errorMessage;
        passwordError.style.display = 'block';
    }
});

//password and confirm password match
document.getElementById('confirm-password').addEventListener('input', function() {
    const confirmPasswordError = document.getElementById('confirm-password-error');
    const password = document.getElementById('password').value;
    
    if (this.value === password) {
        confirmPasswordError.style.display = 'none';
    } else {
        confirmPasswordError.innerText = 'Passwords do not match.';
        confirmPasswordError.style.display = 'block';
    }
});

//birthday date is neither today nor a future day
document.getElementById('birthday').addEventListener('input', function() {
    const birthdayError = document.getElementById('birthday-error');
    const today = new Date().toISOString().split('T')[0];
    
    if (this.value >= today) {
        birthdayError.innerText = 'Birthday cannot be today or in the future.';
        birthdayError.style.display = 'block';
    } else {
        birthdayError.style.display = 'none';
    }
});

//local storage
function saveToLocalStorage() {
    const formData = {
        firstName: document.getElementById('first-name').value,
        lastName: document.getElementById('last-name').value,
        username: document.getElementById('username').value,
        password: document.getElementById('password').value,    //should i save this así como así?... no sé qué tan seguro sea JASKAJS
        birthday: document.getElementById('birthday').value,
        newsletter: document.getElementById('newsletter').checked
    };

    const formDataJSON = JSON.stringify(formData);

    localStorage.setItem('formData', formDataJSON);
}