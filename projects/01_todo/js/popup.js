// VARIABLES
let popupIsLogIn = false;
let popupIsSettings = false;

// EVENT LISTENERS

// general
document.addEventListener("keydown", function closePopupOnEsc(event) {
    if (event.key == "Escape") closePopup();
});

// buttons
openLogInButton.addEventListener("click", openLogInPopup);
openSignUpButton.addEventListener("click", openSignUpPopup);
openSettingsButton.addEventListener("click", openSettingsPopup);
closePopupButton.addEventListener("click", closePopup);
popupSwitchLink.addEventListener("click", switchForm);

// form
textInputs[2].addEventListener("input", checkEmail);
passwordInputs[0].addEventListener("input", checkPassword);
passwordInputs[1].addEventListener("input", confirmPasswords);
termsOfUseElement.querySelector("input[type=checkbox]").addEventListener("change", checkTermsOfUse);
termsOfUseElement.addEventListener("keydown", function (event) {
    if (event.key == " ") {
        const checkbox = this.querySelector("input[type=checkbox]");
        checkbox.checked = !checkbox.checked;
        checkTermsOfUse();
    }
});
submitButton.addEventListener("click", (event) => {
    event.preventDefault();
    submitPopup();
});
deleteButton.addEventListener("click", (event) => {
    event.preventDefault();
    deleteUser();
});

// FUNCTIONS

// display popup

function prepareLogInForm() {
    formTitle.innerText = "Member Log In";
    firstNameElement.hidden = true;
    lastNameElement.hidden = true;
    termsOfUseElement.hidden = true;
    confirmPasswordElement.hidden = true;
    submitButton.innerText = "Log In";
    deleteButtonElement.hidden = true;
    deleteButton.disabled = true;
    popupSwitchElement.hidden = false;
    [switchText, switchButton] = popupSwitchElement.children;
    switchText.innerText = "Not a Member?";
    switchButton.innerText = "Sign Up";
    popupIsLogIn = true;
    popupIsSettings = false;
}

function prepareSignUpForm() {
    formTitle.innerText = "Member Sign Up";
    firstNameElement.hidden = false;
    lastNameElement.hidden = false;
    termsOfUseElement.hidden = false;
    confirmPasswordElement.hidden = false;
    confirmPasswordElement.value = "";
    submitButton.innerText = "Sign Up";
    deleteButtonElement.hidden = true;
    deleteButton.disabled = true;
    popupSwitchElement.hidden = false;
    [switchText, switchButton] = popupSwitchElement.children;
    switchText.innerText = "Already a Member?";
    switchButton.innerText = "Log In";
    popupIsLogIn = false;
    popupIsSettings = false;
}

function prepareSettingsForm() {
    fillSettingsForm();
    formTitle.innerText = "Settings";
    firstNameElement.hidden = false;
    lastNameElement.hidden = false;
    termsOfUseElement.hidden = true;
    confirmPasswordElement.hidden = false;
    submitButton.innerText = "Save";
    deleteButtonElement.hidden = false;
    deleteButton.disabled = false;
    popupSwitchElement.hidden = true;
    popupIsLogIn = false;
    popupIsSettings = true;
}

function fillSettingsForm() {
    const user = getUser(currentUserEmail);
    if (user) {
        firstNameInput.placeholder = user.firstName;
        lastNameInput.placeholder = user.lastName;
        emailInput.placeholder = user.email;
        passwordInput.value = user.password;
    }
}

function openLogInPopup() {
    prepareLogInForm();
    openPopup();
}

function openSignUpPopup() {
    prepareSignUpForm();
    openPopup();
}

function openSettingsPopup() {
    prepareSettingsForm();
    openPopup();
}

function openPopup() {
    popup.classList.add("active");
    overlay.classList.add("active");
}

function closePopup() {
    popup.classList.remove("active");
    overlay.classList.remove("active");
    removePopupIndicators();
    clearPopupInputs();
}

function closePopupOnEsc(event) {
    if (event.key == "Escape") closePopup();
}

function switchForm() {
    if (popupIsLogIn) {
        prepareSignUpForm();
    } else {
        prepareLogInForm();
    }
    clearPopupInputs();
    removePopupIndicators();
}

function clearPopupInputs() {
    popupElements.forEach((element) => {
        const input = element.querySelector("input");
        if (input) {
            input.placeholder = "";
            input.value = "";
        }
    });
    termsOfUseElement.querySelector("input").checked = false;
    removePopupIndicators();
}

function submitPopup() {
    const firstNameValue = firstNameInput.value.trim();
    const lastNameValue = lastNameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();
    const confirmPasswordValue = confirmPasswordInput.value.trim();
    if (popupIsSettings) {
        const user = getUser(currentUserEmail);
        if (firstNameValue !== "") {
            user.firstName = firstNameValue;
            setSuccessFor(firstNameElement);
        }
        if (lastNameValue !== "") {
            user.lastName = lastNameValue;
            setSuccessFor(lastNameElement);
        }
        if (
            emailValue !== "" &&
            checkEmailFormat(emailValue) & checkEmailAvailability(emailValue)
        ) {
            user.email = emailValue;
            setSuccessFor(emailElement);
        }
        if (passwordValue !== user.password && confirmPasswords()) {
            user.password = passwordValue;
            setSuccessFor(passwordElement);
            setSuccessFor(confirmPasswordElement);
        }
        saveUser(user);
    } else if (checkInputs()) {
        if (popupIsLogIn) {
            // Log In
            if (!checkPassword(emailValue, passwordValue)) {
                setErrorMessageFor(passwordElement, "Invalid Password");
                return;
            }
            login(emailValue, passwordValue);
        } else {
            // Sign Up
            newUser(firstNameValue, lastNameValue, emailValue, passwordValue);
            login(emailValue, passwordValue);
        }
        currentUserEmail = emailValue;
        closePopup();
    }
}

// error and success indication

function setSuccessFor(parent) {
    removeErrorMessageFor(parent);
    parent.classList.add("success");
}

function setErrorMessageFor(parent, msg) {
    const msgElement = parent.querySelector("div.error");
    parent.classList.remove("success");
    parent.classList.add("error");
    msgElement.innerText = msg;
    msgElement.removeAttribute("hidden");
}

function removeSuccessFor(parent) {
    parent.classList.remove("success");
}

function removeErrorMessageFor(parent) {
    const msgElement = parent.querySelector("div.error");
    parent.classList.remove("error");
    if (msgElement) msgElement.setAttribute("hidden", true);
}

function removePopupIndicators() {
    popupElements.forEach((element) => {
        removeErrorMessageFor(element);
        removeSuccessFor(element);
    });
}
