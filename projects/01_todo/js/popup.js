// general elements
const openLogInButton = document.querySelector("[data-login-target]");
const openSignUpButton = document.querySelector("[data-signup-target]");
const closePopupButton = document.getElementById("popup-close");
const popup = document.getElementById("popup");
const overlay = document.getElementById("popup-overlay");
const popupForm = document.getElementById("popup-form");
const popupElements = document.querySelectorAll(".popup-element");

// popup form elements
const formTitle = popupForm.querySelector("#popup-title");
const firstNameElement = popupForm.querySelector("[data-popup-firstname]");
const lastNameElement = popupForm.querySelector("[data-popup-lastname]");
const emailElement = popupForm.querySelector("[data-popup-email]");
const passwordElement = popupForm.querySelector("[data-popup-password]");
const confirmPasswordElement = popupForm.querySelector(
    "[data-popup-password-confirm]"
);
const termsOfUseElement = popupForm.querySelector("[data-popup-termsofuse]");
const submitButton = popupForm.querySelector("[data-popup-submit]");
const popupSwitchElement = popupForm.querySelector("[data-popup-switch]");
const popupSwitchLink = popupForm.querySelector("#popup-switch");

const textInputs = popupForm.querySelectorAll(
    ".popup-element input[type=text]"
);
const passwordInputs = popupForm.querySelectorAll(
    ".popup-element input[type=password]"
);

// event listener
openLogInButton.addEventListener("click", openLogInPopup);
openSignUpButton.addEventListener("click", openSignUpPopup);
closePopupButton.addEventListener("click", closePopup);
popupSwitchLink.addEventListener("click", switchForm);

textInputs[2].addEventListener("focusout", checkEmail);
passwordInputs[0].addEventListener("focusout", checkPassword);
passwordInputs[1].addEventListener("focusout", confirmPasswords);
termsOfUseElement
    .querySelector("input[type=checkbox]")
    .addEventListener("change", checkTermsOfUse);
submitButton.addEventListener("click", checkInputs);

// variables
let isLogIn = true;

// functions

// display popup
function prepareLogInForm() {
    formTitle.innerHTML = "Member Log In";
    firstNameElement.hidden = true;
    lastNameElement.hidden = true;
    termsOfUseElement.hidden = true;
    confirmPasswordElement.hidden = true;
    submitButton.setAttribute("content", "Login");
    [switchText, switchButton] = popupSwitchElement.children;
    switchText.innerHTML = "Not a Member?";
    switchButton.innerHTML = "Sign Up";
    isLogIn = true;
}

function prepareSignUpForm() {
    formTitle.innerHTML = "Member Sign Up";
    firstNameElement.hidden = false;
    lastNameElement.hidden = false;
    termsOfUseElement.hidden = false;
    confirmPasswordElement.hidden = false;
    confirmPasswordElement.value = "";
    submitButton.setAttribute("content", "Signup");
    [switchText, switchButton] = popupSwitchElement.children;
    switchText.innerHTML = "Already a Member?";
    switchButton.innerHTML = "Log In";
    isLogIn = false;
}

function openLogInPopup() {
    prepareLogInForm();
    openPopup();
}

function openSignUpPopup() {
    prepareSignUpForm();
    openPopup();
}

function openPopup() {
    popup.classList.add("active");
    overlay.classList.add("active");
}

function closePopup() {
    console.log("close");
    popup.classList.remove("active");
    overlay.classList.remove("active");
    removePopupIndicators();
    clearPopupInputs();
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
    removePopupIndicators();
}

// input checking
// TODO: remove some of the setSuccessFor calls

function checkNotEmpty(input, parent) {
    if (input.value.trim() == "") {
        setErrorMessageFor(parent, "Cannot be empty");
        return false;
    }
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
    if (!email.match(/\w+\@\w+?\.(\w{2,3})$/)) {
        setErrorMessageFor(emailElement, "Email is not valid");
        return false;
    }
    return true;
}
function checkEmailAvailability(email) {
    // TODO:
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
        // TODO: Proceed
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
