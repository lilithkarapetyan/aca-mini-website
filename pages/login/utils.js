function getPasswordErrorMessage(password) {
    if(password.length < 8) {
        return "The password length should be at least 8";
    }
    
    const INCLUDES_DIGIT = /\d/g;

    if(!INCLUDES_DIGIT.test(password)) {
        return "The password must include at least one digit";
    }  

    const INCLUDES_WHITESPACE = /\s/g;
    if(INCLUDES_WHITESPACE.test(password)) {
        return "White Spaces are not allowed in the password";
    }
    return "";
}

function getPasswordErrorRestrictedWords(password) {
    const bannedWords = ["github", "password", "123456"];
    const badWord = bannedWords.find(word => password.includes(word));

    if(badWord) {
        return `You should not use ${badWord} in your password`;
    }
    return "";
}


function showPasswordErrorMessageOnChange(password) {
    const error = getPasswordErrorRestrictedWords(password);
    showPasswordErrorMessage(error);
}

function showPasswordErrorMessageOnInput(password) {
    const error = getPasswordErrorMessage(password);
    showPasswordErrorMessage(error);
}

function showPasswordErrorMessage(error) {
    const passwordErrorContainer = document.getElementById("password-error");
    passwordErrorContainer.innerHTML = error || ".";
    passwordErrorContainer.style.visibility = error ? "visible" : "hidden";
}