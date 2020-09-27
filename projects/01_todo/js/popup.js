// ELEMENTS

// general
const popup = document.querySelector("[data-popup]");
const overlay = document.querySelector("[data-overlay]");
const popupForm = document.querySelector("[data-popup]");
const popupElements = document.querySelectorAll(".popup-element");

// buttons
const openLogInButton = document.querySelector("[data-login-target]");
const openSignUpButton = document.querySelector("[data-signup-target]");
const openSettingsButton = document.querySelector("[data-settings-target]");
const closePopupButton = document.querySelector("[data-popup-close]");

// popup form elements
const formTitle = popupForm.querySelector("[data-popup-title]");
const firstNameElement = popupForm.querySelector("[data-popup-firstname]");
const lastNameElement = popupForm.querySelector("[data-popup-lastname]");
const emailElement = popupForm.querySelector("[data-popup-email]");
const passwordElement = popupForm.querySelector("[data-popup-password]");
const confirmPasswordElement = popupForm.querySelector(
    "[data-popup-password-confirm]"
);
const termsOfUseElement = popupForm.querySelector("[data-popup-termsofuse]");
const submitButton = popupForm.querySelector("[data-popup-submit] button");
const popupSwitchElement = popupForm.querySelector("[data-popup-switch]");
const popupSwitchLink = popupForm.querySelector("#popup-switch");

const textInputs = popupForm.querySelectorAll(
    ".popup-element input[type=text]"
);
const passwordInputs = popupForm.querySelectorAll(
    ".popup-element input[type=password]"
);

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
termsOfUseElement
    .querySelector("input[type=checkbox]")
    .addEventListener("change", checkTermsOfUse);
termsOfUseElement.addEventListener("keydown", function (event) {
    if (event.key == " ") {
        const checkbox = this.querySelector("input[type=checkbox]");
        checkbox.checked = !checkbox.checked;
        checkTermsOfUse();
    }
});
submitButton.addEventListener("click", checkInputs);

// VARIABLES

let isLogIn = true;
let isSettings = false;

// FUNCTIONS

// display popup

function prepareLogInForm() {
    formTitle.innerHTML = "Member Log In";
    firstNameElement.hidden = true;
    lastNameElement.hidden = true;
    termsOfUseElement.hidden = true;
    confirmPasswordElement.hidden = true;
    submitButton.innerHTML = "Log In";
    popupSwitchElement.hidden = false;
    [switchText, switchButton] = popupSwitchElement.children;
    switchText.innerHTML = "Not a Member?";
    switchButton.innerHTML = "Sign Up";
    isLogIn = true;
    isSettings = false;
}

function prepareSignUpForm() {
    formTitle.innerHTML = "Member Sign Up";
    firstNameElement.hidden = false;
    lastNameElement.hidden = false;
    termsOfUseElement.hidden = false;
    confirmPasswordElement.hidden = false;
    confirmPasswordElement.value = "";
    submitButton.innerHTML = "Sign Up";
    popupSwitchElement.hidden = false;
    [switchText, switchButton] = popupSwitchElement.children;
    switchText.innerHTML = "Already a Member?";
    switchButton.innerHTML = "Log In";
    isLogIn = false;
    isSettings = false;
}

function prepareSettingsForm() {
    fillSettingsForm();
    formTitle.innerHTML = "Settings";
    firstNameElement.hidden = false;
    lastNameElement.hidden = false;
    termsOfUseElement.hidden = true;
    confirmPasswordElement.hidden = false;
    submitButton.innerHTML = "Save";
    popupSwitchElement.hidden = true;
    isLogIn = false;
    isSettings = true;
}

function fillSettingsForm() {
    // TODO:
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
    if (isLogIn) {
        prepareSignUpForm();
    } else {
        prepareLogInForm();
    }
    removePopupIndicators();
}

function clearPopupInputs() {
    popupElements.forEach((element) => {
        const input = element.querySelector("input");
        if (input) input.value = "";
    });
    termsOfUseElement.querySelector("input").checked = false;
    removePopupIndicators();
}

// input checking

function checkNotEmpty(input, parent) {
    if (input.value.trim() == "") {
        setErrorMessageFor(parent, "This field is required");
        return false;
    }
    setSuccessFor(parent);
    return true;
}

function checkNames() {
    return (
        checkNotEmpty(textInputs[0], firstNameElement) &
        checkNotEmpty(textInputs[1], lastNameElement)
    );
}

function checkEmail() {
    const emailValue = textInputs[2].value.trim();
    return (
        checkNotEmpty(textInputs[2], emailElement) &&
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
    if (isLogIn) {
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
        (!isLogIn || checkNotEmpty(passwordInputs[0], passwordElement)) &&
        checkPasswordFormat(passwordInputs[0])
    );
}

function confirmPasswords() {
    return (
        checkPassword() &
        (!isLogIn &&
            checkNotEmpty(passwordInputs[1], confirmPasswordElement) &&
            confirmPasswordsEquality())
    );
}

function checkPasswordFormat(input) {
    // TODO: illegal characters
    const password = input.value.trim();
    if (password.length < 8) {
        setErrorMessageFor(passwordElement, "Must be at least 8 digits long");
        return false;
    } else if (
        !password.match(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*\W)([^\s]){8,}$/)
    ) {
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
    if (passwordInputs[0].value.trim() != passwordInputs[1].value.trim()) {
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
    if (
        checkEmail() &
        confirmPasswords() &
        (isLogIn || checkNames() & checkTermsOfUse())
    ) {
        const firstNameValue = firstNameElement.querySelector("input").value;
        const lastNameValue = lastNameElement.querySelector("input").value;
        const emailValue = emailElement.querySelector("input").value;
        const passwordValue = passwordElement.querySelector("input").value;
        newUser(firstNameValue, lastNameValue, emailValue, passwordValue);
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
    msgElement.innerHTML = msg;
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
