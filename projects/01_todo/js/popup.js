const openLogInButton = document.querySelector("[data-login-target]");
const openSignUpButton = document.querySelector("[data-signup-target]");
const closePopupButton = document.getElementById("popup-close");
const popup = document.getElementById("popup");
const popupElements = document.querySelectorAll(".popup-element");
const overlay = document.getElementById("popup-overlay");

const formTitle = document.getElementById("popup-title");
const firstNameElement = document.querySelector("[data-popup-firstname]");
const lastNameElement = document.querySelector("[data-popup-lastname]");
const emailElement = document.querySelector("[data-popup-email]");
const passwordElement = document.querySelector("[data-popup-password]");
const termsOfUseElement = document.querySelector("[data-popup-termsofuse]");
const formButton = document.querySelector("[data-popup-button]");
const popupSwitchElement = document.querySelector("[data-popup-switch]");
const popupSwitchLink = document.getElementById("popup-switch");

openLogInButton.addEventListener("click", openLogInPopup);
openSignUpButton.addEventListener("click", openSignUpPopup);
closePopupButton.addEventListener("click", closePopup);
popupSwitchLink.addEventListener("click", switchForm);

let isLogIn = true;

function prepareLogInForm() {
    formTitle.innerHTML = "Member Log In";
    firstNameElement.hidden = true;
    lastNameElement.hidden = true;
    termsOfUseElement.hidden = true;
    formButton.setAttribute("content", "Login");
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
    formButton.setAttribute("content", "Signup");
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
    popup.classList.remove("active");
    overlay.classList.remove("active");
}

function switchForm() {
    if (isLogIn) {
        prepareSignUpForm();
    } else {
        prepareLogInForm();
    }
}
