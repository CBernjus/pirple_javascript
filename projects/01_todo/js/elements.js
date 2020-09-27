// ELEMENTS

// general
const popup = document.querySelector("[data-popup]");
const overlay = document.querySelector("[data-overlay]");
const popupForm = document.querySelector("[data-popup]");
const popupElements = document.querySelectorAll(".popup-element");

// buttons
const openLogInButton = document.querySelector("[data-login-target]");
const openSignUpButton = document.querySelector("[data-signup-target]");
const logOutButton = document.querySelector("[data-logout-target]");
const openSettingsButton = document.querySelector("[data-settings-target]");
const closePopupButton = document.querySelector("[data-popup-close]");

// popup form elements
const formTitle = popupForm.querySelector("[data-popup-title]");
const firstNameElement = popupForm.querySelector("[data-popup-firstname]");
const lastNameElement = popupForm.querySelector("[data-popup-lastname]");
const emailElement = popupForm.querySelector("[data-popup-email]");
const passwordElement = popupForm.querySelector("[data-popup-password]");
const confirmPasswordElement = popupForm.querySelector("[data-popup-password-confirm]");
const termsOfUseElement = popupForm.querySelector("[data-popup-termsofuse]");
const submitButton = popupForm.querySelector("[data-popup-submit] button");
const deleteButtonElement = popupForm.querySelector("[data-popup-delete]");
const deleteButton = deleteButtonElement.querySelector("button");
const popupSwitchElement = popupForm.querySelector("[data-popup-switch]");
const popupSwitchLink = popupForm.querySelector("#popup-switch");

const textInputs = popupForm.querySelectorAll(".popup-element input[type=text]");
const passwordInputs = popupForm.querySelectorAll(".popup-element input[type=password]");

// views
const startView = document.querySelector("[data-start-view]");
const todoView = document.querySelector("[data-todo-view]");

// list view elements
const listsContainer = document.querySelector("[data-lists-container]");
const newListForm = document.querySelector("[data-new-list-form]");
const newListInput = document.querySelector("[data-new-list-input]");
const deleteListButton = document.querySelector("[data-list-delete]");
const clearCompleteTasksButton = document.querySelector("[data-tasks-clear-complete]");

const listContainer = document.querySelector("[data-list-container]");
const listTitleElement = document.querySelector("[data-list-title]");
const listCountElement = document.querySelector("[data-list-count]");
const tasksContainer = document.querySelector("[data-tasks]");

const taskTemplate = document.getElementById("task-template");

const newTaskForm = document.querySelector("[data-new-task-form]");
const newTaskInput = document.querySelector("[data-new-task-input]");

//
//
// DIVERSE

const firstNameInput = firstNameElement.querySelector("input");
const lastNameInput = lastNameElement.querySelector("input");
const emailInput = emailElement.querySelector("input");
const passwordInput = passwordElement.querySelector("input");
const confirmPasswordInput = confirmPasswordElement.querySelector("input");
