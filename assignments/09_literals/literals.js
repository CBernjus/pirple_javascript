const body_1header_1div_1img = `<img src="img/homework_white.svg"/>`;
const body_1header_1div_3h4_string = `TODO List App`;
const body_1header_1div_3h4 = `<h4>${body_1header_1div_3h4_string}</h4>`;
const body_1header_1div = `<div class="header-logo">${body_1header_1div_1img}${body_1header_1div_3h4}</div>`;
const body_1header_3div_1button_string = `Sign Up`;
const body_1header_3div_1button = `<button class="btn" data-signup-target="">${body_1header_3div_1button_string}</button>`;
const body_1header_3div_3button_string = `Log In`;
const body_1header_3div_3button = `<button class="btn" data-login-target="">${body_1header_3div_3button_string}</button>`;
const body_1header_3div_5button_i = `<i class="fas fa-user-cog"></i>`;
const body_1header_3div_5button = `<button class="btn" data-settings-target="" hidden="">${body_1header_3div_5button_i}</button>`;
const body_1header_3div_7button_string = `Log Out`;
const body_1header_3div_7button = `<button class="btn" data-logout-target="" hidden="">${body_1header_3div_7button_string}</button>`;
const body_1header_3div = `<div>${body_1header_3div_1button}${body_1header_3div_3button}${body_1header_3div_5button}${body_1header_3div_7button}</div>`;
const body_1header = `<header>${body_1header_1div}${body_1header_3div}</header>`;
const body_3div_1div_1h1_string = `TODO List App`;
const body_3div_1div_1h1 = `<h1>${body_3div_1div_1h1_string}</h1>`;
const body_3div_1div_3p_string = `With this app you can manage your day to day life.`;
const body_3div_1div_3p = `<p>${body_3div_1div_3p_string}</p>`;
const body_3div_1div_5p_1br = `<br/>`;
const body_3div_1div_5p_3br = `<br/>`;
const body_3div_1div_5p = `<p> You can organize your upcoming tasks in different lists.${body_3div_1div_5p_1br} Add as many tasks as you want and if you're done with them mark them as completed.${body_3div_1div_5p_1br} When there are too many completed lists you can tidy up your list in one 'click'. </p>`;
const body_3div_1div_7p_string = `Add, rename and delete the lists as you want.`;
const body_3div_1div_7p = `<p>${body_3div_1div_7p_string}</p>`;
const body_3div_1div_9p_1br = `<br/>`;
const body_3div_1div_9p = `<p> Change any of your user data at any time.${body_3div_1div_9p_1br} If you desire you can even delete your account. </p>`;
const body_3div_1div = `<div class="start-view" data-start-view="">${body_3div_1div_1h1}${body_3div_1div_3p}${body_3div_1div_5p}${body_3div_1div_7p}${body_3div_1div_9p}</div>`;
const body_3div_3div_1div_1h3_string = `TODO Lists:`;
const body_3div_3div_1div_1h3 = `<h3 class="lists-title">${body_3div_3div_1div_1h3_string}</h3>`;
const body_3div_3div_1div_3ul = `<ul class="lists" data-lists-container=""></ul>`;
const body_3div_3div_1div_5form_1input = `<input aria-label="new list name" class="new list" data-new-list-input="" placeholder="new list name" type="text"/>`;
const body_3div_3div_1div_5form_3button_1i = `<i class="fas fa-plus"></i>`;
const body_3div_3div_1div_5form_3button = `<button aria-label="create new list" class="btn create">${body_3div_3div_1div_5form_3button_1i}</button>`;
const body_3div_3div_1div_5form = `<form action="" data-new-list-form="">${body_3div_3div_1div_5form_1input}${body_3div_3div_1div_5form_3button}</form>`;
const body_3div_3div_1div = `<div class="lists-all">${body_3div_3div_1div_1h3}${body_3div_3div_1div_3ul}${body_3div_3div_1div_5form}</div>`;
const body_3div_3div_3div_1div_1div_1form_1input = `<input class="list-title" data-list-title-input="" type="text"/>`;
const body_3div_3div_3div_1div_1div_1form = `<form action="" data-list-title-form="">${body_3div_3div_3div_1div_1div_1form_1input}</form>`;
const body_3div_3div_3div_1div_1div_3p_string = `0 tasks remaining`;
const body_3div_3div_3div_1div_1div_3p = `<p class="task-count" data-list-count="">${body_3div_3div_3div_1div_1div_3p_string}</p>`;
const body_3div_3div_3div_1div_1div = `<div class="tasks-header">${body_3div_3div_3div_1div_1div_1form}${body_3div_3div_3div_1div_1div_3p}</div>`;
const body_3div_3div_3div_1div_3div_1div = `<div class="tasks" data-tasks=""></div>`;
const body_3div_3div_3div_1div_3div_3form_1input = `<input aria-label="new task name" class="new task" data-new-task-input="" placeholder="new task name" type="text"/>`;
const body_3div_3div_3div_1div_3div_3form_3button_1i = `<i class="fas fa-plus"></i>`;
const body_3div_3div_3div_1div_3div_3form_3button = `<button aria-label="create new task" class="btn create">${body_3div_3div_3div_1div_3div_3form_3button_1i}</button>`;
const body_3div_3div_3div_1div_3div_3form = `<form action="" data-new-task-form="">${body_3div_3div_3div_1div_3div_3form_1input}${body_3div_3div_3div_1div_3div_3form_3button}</form>`;
const body_3div_3div_3div_1div_3div_5div_1button_string = `Clear completed tasks`;
const body_3div_3div_3div_1div_3div_5div_1button = `<button class="btn delete" data-tasks-clear-complete="">${body_3div_3div_3div_1div_3div_5div_1button_string}</button>`;
const body_3div_3div_3div_1div_3div_5div_3button_string = `Delete list`;
const body_3div_3div_3div_1div_3div_5div_3button = `<button class="btn delete" data-list-delete="">${body_3div_3div_3div_1div_3div_5div_3button_string}</button>`;
const body_3div_3div_3div_1div_3div_5div = `<div class="delete-buttons">${body_3div_3div_3div_1div_3div_5div_1button}${body_3div_3div_3div_1div_3div_5div_3button}</div>`;
const body_3div_3div_3div_1div_3div = `<div class="tasks-body">${body_3div_3div_3div_1div_3div_1div}${body_3div_3div_3div_1div_3div_3form}${body_3div_3div_3div_1div_3div_5div}</div>`;
const body_3div_3div_3div_1div = `<div class="tasks-wrapper">${body_3div_3div_3div_1div_1div}${body_3div_3div_3div_1div_3div}</div>`;
const body_3div_3div_3div = `<div class="tasks-container" data-list-container="">${body_3div_3div_3div_1div}</div>`;
const body_3div_3div = `<div class="todo-view" data-todo-view="" hidden="">${body_3div_3div_1div}${body_3div_3div_3div}</div>`;
const body_3div = `<div class="container">${body_3div_1div}${body_3div_3div}</div>`;
const body_5div = `<div class="overlay" data-overlay=""></div>`;
const body_7form_1div_string = `×`;
const body_7form_1div = `<div class="popup-close" data-popup-close="" tabindex="0">${body_7form_1div_string}</div>`;
const body_7form_3div_1div_1img = `<img alt="Avatar" src="img/homework.svg"/>`;
const body_7form_3div_1div = `<div class="avatar">${body_7form_3div_1div_1img}</div>`;
const body_7form_3div_3span_string = `Member Sign Up`;
const body_7form_3div_3span = `<span data-popup-title="">${body_7form_3div_3span_string}</span>`;
const body_7form_3div = `<div class="header">${body_7form_3div_1div}${body_7form_3div_3span}</div>`;
const body_7form_5div_1label_string = `First Name`;
const body_7form_5div_1label = `<label for="firstName">${body_7form_5div_1label_string}</label>`;
const body_7form_5div_3input = `<input id="firstName" type="text"/>`;
const body_7form_5div_5i = `<i class="fas fa-check-circle"></i>`;
const body_7form_5div_7i = `<i class="fas fa-exclamation-circle"></i>`;
const body_7form_5div_9div = `<div class="error" hidden=""></div>`;
const body_7form_5div = `<div class="popup-element" data-popup-firstname="">${body_7form_5div_1label}${body_7form_5div_3input}${body_7form_5div_5i}${body_7form_5div_7i}${body_7form_5div_9div}</div>`;
const body_7form_7div_1label_string = `Last Name`;
const body_7form_7div_1label = `<label for="lastName">${body_7form_7div_1label_string}</label>`;
const body_7form_7div_3input = `<input id="lastName" type="text"/>`;
const body_7form_7div_5i = `<i class="fas fa-check-circle"></i>`;
const body_7form_7div_7i = `<i class="fas fa-exclamation-circle"></i>`;
const body_7form_7div_9div = `<div class="error" hidden=""></div>`;
const body_7form_7div = `<div class="popup-element" data-popup-lastname="">${body_7form_7div_1label}${body_7form_7div_3input}${body_7form_7div_5i}${body_7form_7div_7i}${body_7form_7div_9div}</div>`;
const body_7form_9div_1label_string = `E-Mail`;
const body_7form_9div_1label = `<label for="email">${body_7form_9div_1label_string}</label>`;
const body_7form_9div_3input = `<input id="email" type="text"/>`;
const body_7form_9div_5i = `<i class="fas fa-check-circle"></i>`;
const body_7form_9div_7i = `<i class="fas fa-exclamation-circle"></i>`;
const body_7form_9div_9div = `<div class="error" hidden=""></div>`;
const body_7form_9div = `<div class="popup-element" data-popup-email="">${body_7form_9div_1label}${body_7form_9div_3input}${body_7form_9div_5i}${body_7form_9div_7i}${body_7form_9div_9div}</div>`;
const body_7form_11div_1label_string = `Password`;
const body_7form_11div_1label = `<label for="password">${body_7form_11div_1label_string}</label>`;
const body_7form_11div_3input = `<input id="password" type="password"/>`;
const body_7form_11div_5i = `<i class="fas fa-check-circle"></i>`;
const body_7form_11div_7i = `<i class="fas fa-exclamation-circle"></i>`;
const body_7form_11div_9div = `<div class="error" hidden=""></div>`;
const body_7form_11div = `<div class="popup-element" data-popup-password="">${body_7form_11div_1label}${body_7form_11div_3input}${body_7form_11div_5i}${body_7form_11div_7i}${body_7form_11div_9div}</div>`;
const body_7form_13div_1label_string = `Confirm Password`;
const body_7form_13div_1label = `<label for="password-confirm">${body_7form_13div_1label_string}</label>`;
const body_7form_13div_3input = `<input id="password-confirm" type="password"/>`;
const body_7form_13div_5i = `<i class="fas fa-check-circle"></i>`;
const body_7form_13div_7i = `<i class="fas fa-exclamation-circle"></i>`;
const body_7form_13div_9div = `<div class="error" hidden=""></div>`;
const body_7form_13div = `<div class="popup-element" data-popup-password-confirm="">${body_7form_13div_1label}${body_7form_13div_3input}${body_7form_13div_5i}${body_7form_13div_7i}${body_7form_13div_9div}</div>`;
const body_7form_15div_1input = `<input id="termsOfUse" type="checkbox"/>`;
const body_7form_15div_3label = `<label class="popup-checkbox" for="termsOfUse" tabindex="0"></label>`;
const body_7form_15div_5span_string = `I agree to the Terms of Use`;
const body_7form_15div_5span = `<span>${body_7form_15div_5span_string}</span>`;
const body_7form_15div_7i = `<i class="fas fa-exclamation-circle"></i>`;
const body_7form_15div = `<div class="popup-element termsOfUse" data-popup-termsofuse="">${body_7form_15div_1input}${body_7form_15div_3label}${body_7form_15div_5span}${body_7form_15div_7i}</div>`;
const body_7form_17div_1button = `<button></button>`;
const body_7form_17div = `<div class="popup-element" data-popup-submit="">${body_7form_17div_1button}</div>`;
const body_7form_19div_1button_string = `Delete User`;
const body_7form_19div_1button = `<button>${body_7form_19div_1button_string}</button>`;
const body_7form_19div_3div = `<div class="error" hidden=""></div>`;
const body_7form_19div = `<div class="popup-element delete" data-popup-delete="">${body_7form_19div_1button}${body_7form_19div_3div}</div>`;
const body_7form_21div_1span_string = `Already a Member?`;
const body_7form_21div_1span = `<span>${body_7form_21div_1span_string}</span>`;
const body_7form_21div_3a_string = `Log In`;
const body_7form_21div_3a = `<a id="popup-switch" tabindex="0">${body_7form_21div_3a_string}</a>`;
const body_7form_21div = `<div class="popup-element popup-switch" data-popup-switch="">${body_7form_21div_1span} ${body_7form_21div_3a}</div>`;
const body_7form = `<form class="popup" data-popup="">${body_7form_1div}${body_7form_3div}${body_7form_5div}${body_7form_7div}${body_7form_9div}${body_7form_11div}${body_7form_13div}${body_7form_15div}${body_7form_17div}${body_7form_19div}${body_7form_21div}</form>`;
const body_9footer_1span_string = `© 2020 Christopher Bernjus`;
const body_9footer_1span = `<span>${body_9footer_1span_string}</span>`;
const body_9footer_3div_1a_string = `Payungkead`;
const body_9footer_3div_1a = `<a href="https://www.flaticon.com/authors/payungkead" tabindex="-1" title="${body_9footer_3div_1a_string}">${body_9footer_3div_1a_string}</a>`;
const body_9footer_3div_3a_string = `www.flaticon.com`;
const body_9footer_3div_3a = `<a href="https://${body_9footer_3div_3a_string}/" tabindex="-1" title="Flaticon">${body_9footer_3div_3a_string}</a>`;
const body_9footer_3div = `<div id="popup-avatar-source"> Icons made by ${body_9footer_3div_1a} from ${body_9footer_3div_3a}</div>`;
const body_9footer = `<footer>${body_9footer_1span}${body_9footer_3div}</footer>`;
const body_11template_1div_1input = `<input type="checkbox"/>`;
const body_11template_1div_3label_1span = `<span class="task-checkbox"></span>`;
const body_11template_1div_3label = `<label>${body_11template_1div_3label_1span}</label>`;
const body_11template_1div = `<div class="task">${body_11template_1div_1input}${body_11template_1div_3label}</div>`;
const body_11template = `<template id="task-template">${body_11template_1div}</template>`;
const body = `<body>${body_1header}${body_3div}${body_5div}${body_7form}${body_9footer}${body_11template}</body>`;
document.body.innerHTML = body.toString();