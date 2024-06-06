


function signUp() {
    const fullName = document.getElementById('signUpFullName').value;
    const email = document.getElementById('signUpEmail').value;
    const password = document.getElementById('signUpPassword').value;

    if (fullName && email && password) {
        if (localStorage.getItem(email)) {
            alert('Email is already registered!');
        } else {
            const userData = {
                fullName: fullName,
                password: password
            };
            localStorage.setItem(email, JSON.stringify(userData));
            alert('Sign up successful!');
            changeForms();
        }
    } else {
        alert('Please fill in all fields');
    }
}

function signIn() {
    const email = document.getElementById('signInEmail').value;
    const password = document.getElementById('signInPassword').value;

    const storedUser = localStorage.getItem(email);

    if (storedUser) {
        const userData = JSON.parse(storedUser);
        if (userData.password === password) {
            alert(`Sign in successful! Welcome, ${userData.fullName}!`);
        } else {
            alert('Invalid email or password');
        }
    } else {
        alert('Invalid email or password');
    }
}

function changeForms() {
    const signUpForm = document.getElementById('signUpForm');
    const signInForm = document.getElementById('signInForm');
    if (signUpForm.style.display === 'none') {
        signUpForm.style.display = 'block';
        signInForm.style.display = 'none';
    } else {
        signUpForm.style.display = 'none';
        signInForm.style.display = 'block';
    }
}



