// VARIABLES

let currentUserEmail = "";

// EVENT LISTENERS

logOutButton.addEventListener("click", logout);

// FUNCTIONS

function login(email, password) {
    if (authenticate(email, password)) {
        currentUserEmail = email;
        openLogInButton.hidden = true;
        openSignUpButton.hidden = true;
        openSettingsButton.hidden = false;
        logOutButton.hidden = false;
        startView.hidden = true;
        todoView.hidden = false;
        reloadLists();
        render();
    }
}

function logout() {
    currentUserEmail = "";
    openLogInButton.hidden = false;
    openSignUpButton.hidden = false;
    openSettingsButton.hidden = true;
    logOutButton.hidden = true;
    todoView.hidden = true;
    startView.hidden = false;
    lists = [];
    selectedListId = null;
    selectedList = null;
}

function deleteUser() {
    const passwordValue = passwordInput.value.trim();
    if (popupIsSettings) {
        if (checkPassword() && authenticate(currentUserEmail, passwordValue)) {
            removeUser(currentUserEmail);
            closePopup();
            logout();
        } else {
            setErrorMessageFor(
                deleteButtonElement,
                "Confirm your password to delete your account."
            );
        }
    }
}

// input checking

function checkNotEmpty(input, parent, showSuccess = true) {
    if (input.value.trim() == "") {
        setErrorMessageFor(parent, "This field is required");
        return false;
    }
    if (showSuccess) setSuccessFor(parent);
    return true;
}

function checkNames() {
    return (
        checkNotEmpty(firstNameInput, firstNameElement) &
        checkNotEmpty(lastNameInput, lastNameElement)
    );
}

function checkEmail() {
    const emailValue = emailInput.value.trim();
    return (
        checkNotEmpty(emailInput, emailElement) &&
        checkEmailFormat(emailValue) &&
        checkEmailAvailability(emailValue)
    );
}

function checkEmailFormat(email) {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!email.match(emailRegex)) {
        setErrorMessageFor(emailElement, "Email is not valid");
        return false;
    }
    return true;
}
function checkEmailAvailability(email) {
    if (popupIsLogIn) {
        if (!userExists(email)) {
            setErrorMessageFor(emailElement, "Email is not used");
            return false;
        }
    } else {
        if (userExists(email)) {
            setErrorMessageFor(emailElement, "Email is already in use");
            return false;
        }
    }
    setSuccessFor(emailElement);
    return true;
}

function checkPassword() {
    return (
        checkNotEmpty(passwordInput, passwordElement, false) &&
        (popupIsLogIn || checkPasswordFormat(passwordInput))
    );
}

function confirmPasswords() {
    return (
        checkPassword() &
        (popupIsLogIn ||
            (checkNotEmpty(confirmPasswordInput, confirmPasswordElement) &&
                confirmPasswordsEquality()))
    );
}

function checkPasswordFormat(input) {
    const password = input.value.trim();
    if (password.length < 8) {
        setErrorMessageFor(passwordElement, "Must be at least 8 digits long");
        return false;
    } else if (!password.match(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*\W)([^\s]){8,}$/)) {
        setErrorMessageFor(
            passwordElement,
            "Must contain at least one uppercase letter, one digit and one symbol"
        );
        return false;
    }
    setSuccessFor(passwordElement);
    return true;
}

function confirmPasswordsEquality() {
    if (passwordInput.value.trim() != confirmPasswordInput.value.trim()) {
        setErrorMessageFor(confirmPasswordElement, "Password mismatch");
        return false;
    }
    setSuccessFor(confirmPasswordElement);
    return true;
}

function checkTermsOfUse() {
    const checkbox = termsOfUseElement.querySelector("input[type=checkbox]");
    if (!checkbox.checked) {
        termsOfUseElement.classList.add("error");
        return false;
    }
    termsOfUseElement.classList.remove("error");
    return true;
}

function checkInputs() {
    return checkEmail() & confirmPasswords() & (popupIsLogIn || checkNames() & checkTermsOfUse());
}
