var email = document.forms['form']['email'];
var password = document.forms['form']['password'];

email.addEventListener('textInput', email_Verify);
password.addEventListener('textInput', pass_Verify);

function validated() {
    if (email.value.length < 9) {
        email.style.border = "1px solid red";
        email.focus();
        return false;
    }
    if (password.value.length < 6) {
        password.style.border = "1px solid red";
        password.focus();
        return false;
    }
    if (email.value === 'yourUsername@gmail.com' && password.value === 'yourPassword') {
        return true;
    } else {
        alert('Invalid username or password');
        return false;
    }
}

function email_Verify() {
    if (email.value.length >= 8) {
        email.style.border = "1px solid silver";
        return true;
    }
}
function pass_Verify() {
    if (password.value.length >= 5) {
        password.style.border = "1px solid silver";
        return true;
    }
}