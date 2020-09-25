// general elements
const openLogInButton = document.querySelector("[data-login-target]");
const openSignUpButton = document.querySelector("[data-signup-target]");
const closePopupButton = document.getElementById("popup-close");
const popup = document.getElementById("popup");
const overlay = document.getElementById("popup-overlay");
const popupForm = document.getElementById("popup-form");

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
const formButton = popupForm.querySelector("[data-popup-button]");
const popupSwitchElement = popupForm.querySelector("[data-popup-switch]");
const popupSwitchLink = popupForm.querySelector("#popup-switch");

// event handlers
openLogInButton.addEventListener("click", openLogInPopup);
openSignUpButton.addEventListener("click", openSignUpPopup);
closePopupButton.addEventListener("click", closePopup);
popupSwitchLink.addEventListener("click", switchForm);

// variables
let isLogIn = true;

// functions
function prepareLogInForm() {
    formTitle.innerHTML = "Member Log In";
    firstNameElement.hidden = true;
    lastNameElement.hidden = true;
    termsOfUseElement.hidden = true;
    confirmPasswordElement.hidden = true;
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
    confirmPasswordElement.hidden = false;
    confirmPasswordElement.value = "";
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
