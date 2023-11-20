/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100&family=Lato:wght@300&family=Nunito:ital,wght@0,200;0,300;0,400;0,500;1,200;1,300;1,400;1,500&family=Roboto:wght@100&family=Rubik:wght@300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    /* Primary colors */
    --primary-color: #3498db;
    --primary-dark: #2980b9;
    --primary-light: #87CEFA;

    /* Secondary colors */
    --secondary-color: #2ecc71; /*used*/
    --secondary-dark: #27ae60; /*used*/
    --secondary-light: #c8e6c9; /*used*/

    /* Accent colors */
    --accent-color: #BA181B;
    --accent-dark: #A4161A;
    --accent-light: #E5383B; /*used*/
    --accent-darker: #660708;

    /* Background colors */
    --background-color: #F5EBE0; /*used*/
    --background-dark: #bdc3c7;
    --background-light: #EDEDE9; /*used*/

    /* Text colors */
    --text-color: #333; /*used*/
    --text-light: #fff;
    --text-muted: #888; /*used*/

    /* Border colors */
    --border-color: #D6CCC2; /*used*/
    --border-dark: #999; /*used*/
    --border-light: #eee;
}


::backdrop {
    background-color: #00000088;
    backdrop-filter: blur(3px);
}

.material-symbols-outlined {
    font-variation-settings:
    'FILL' 0,
    'wght' 400,
    'GRAD' 0,
    'opsz' 24
}


/* General layout */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: var(--text-color);
    font-family: 'Nunito', sans-serif;
    font-weight: 300;
}

body {
    background-color: var(--background-light);
    height: 100vh;
    width: 100vw;
}

.main {
    height: 100%;
    width: 100%;
    display: flex;
}

.main > .left {
    border-right: 1px solid var(--border-color);
    border-bottom: 1px solid var(--border-color);
    background-color: var(--background-color);
    flex: 0 0 300px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    /* height: calc(100% - 100px); */
    height: 100%;
    overflow: auto;
}

.main > .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: start;
    height: calc(100% - 100px);
}

.main > .footer {
    display: flex;
    height: 100px;
    border-top: 1px solid var(--border-color);
    position: fixed;
    bottom: 0;
    width: 100%;
    left: 300px;
}

.main > .footer > .footer-left {
    flex: 0 0 300px;
    background-color: var(--background-color);
    border-right: 1px solid var(--border-color);
}

.main > .footer > .footer-right {
    flex: 1;
    background-color: var(--background-light);
}

.right-first-section {
    padding: 50px 10px 50px 10px;
    height: 100%;
    width: 100%;
    overflow: auto;
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
}

.right-first-section > .task {
    border: 1px solid var(--border-color);
    border-radius: 30px;
    padding: 20px;
    flex: 1;
    width: clamp(200px, 60%, 800px);
    /* max-width: 500px; */
}

.task-project-color {
    height: 10px;
    width: 10px;
    border-radius: 50%;
    border: 0.5px solid var(--text-muted);
}




/* Left div layout */

.left > .left-first-section,
.left > .left-second-section {
    margin-top: 40px;
    overflow: auto;
    /* margin-left: 10px; */
}



.left > .left-first-section > p {
    padding-left: 20px;
    font-style: italic;
    font-weight: 200;
    height: 50px;
    display: flex;
    align-items: center;
}

.left > .left-first-section ul {
    position: relative;
}

.left > .left-first-section li {
    padding-left: 30px;
    list-style: none;
    height: 50px;
    display: flex;
    align-items: center;
    z-index: 1;
    position: relative;
    cursor: pointer;
    gap: 10px;
}

.left > .left-first-section li > .image {
    height: 20px;
    width: 20px;

}


/* Views animation */

.left > .left-first-section .task-animation {
    position: absolute;
    top: 0;
    height: 50px;
    border-left: 6px solid var(--accent-light);
    z-index: 0;
    /* border-radius: 8px; */
    transition: all 0.3s ease;
}


.views > li:nth-child(1)[data-active='true']~.task-animation {
    width: 100%;
    top: 0;
}

.views > li:nth-child(2)[data-active='true']~.task-animation {
    width: 100%;
    top: 50px;
}

.views > li:nth-child(3)[data-active='true']~.task-animation {
    width: 100%;
    top: 100px;
}

.left > .left-first-section li[data-active='false']:hover {
    background-color: #ba181b28;

}

.left > .left-first-section li[data-active='true'] > div > svg {
    fill: var(--accent-color);
}

.left > .left-first-section li[data-active='true'] > p {
    color: var(--accent-color);
}

.left > .left-first-section li[data-active='false']:active {
    background-color: #ba181b5b;

}

.left > .left-second-section > p {
    padding-left: 20px;
    font-style: italic;
    font-weight: 200;
    height: 50px;
    display: flex;
    align-items: center;
}

.left > .left-second-section li {
    padding-left: 50px;
    list-style: none;
    height: 50px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.left > .left-second-section li > .circle {
    height: 10px;
    width: 10px;
    border-radius: 50%;
    border: 0.5px solid var(--text-muted);
}

.left > .left-second-section button {
    margin-left: 50px;
    height: 50px;

}


/* Dialog layout and animations */

dialog {
    position: absolute;
    margin: auto;
    padding-left: 35px;
    padding-right: 35px;
    padding-top: 10px;
    padding-bottom: 20px;
    /* padding-left: 35px; */
    border-radius: 5px;
    border: 0.5px solid var(--border-color);
}

dialog.hidden {
    opacity: 0;
    top: -200%;
    transform: scale(0.5);
    transition: opacity 300ms ease-in-out, 
                top 1000ms ease-in-out,
                transform 1000ms ease-in-out;
}

dialog.hidden > form > * {
    position: relative;
    top: 10px;
    opacity: 0;
}

dialog.displayed {
    opacity: 1;
    top: 0%;
    transform: scale(1);
    transition: transform 300ms cubic-bezier(0.18,0.89,0.43,1.19);
}

dialog.displayed > form > * {
    top: 0px;
    opacity: 1;
}

dialog.displayed.new-project > form .project-dialog-name {
    transition: opacity 300ms ease-in-out 200ms;
}

dialog.displayed.new-project > form .input-container {
    transition: opacity 300ms ease-in-out 250ms;
}

dialog.displayed.new-project > form .project-name-field-div {
    transition: opacity 300ms ease-in-out 300ms;
}

dialog.displayed.new-project > form .project-color-field-div {
    transition: opacity 300ms ease-in-out 350ms;
}

dialog.displayed.new-project > form > button {
    transition: opacity 300ms ease-in-out 400ms;
}

dialog.displayed.new-project > form > .close-project-dialog {
    transition: opacity 300ms ease-in-out 450ms;
}


dialog.displayed.new-task > form .task-dialog-name {
    transition: opacity 300ms ease-in-out 200ms;
}

dialog.displayed.new-task > form > .task-project-field-div {
    transition: opacity 300ms ease-in-out 250ms;
}

dialog.displayed.new-task > form > .task-title-field-div {
    transition: opacity 300ms ease-in-out 300ms;
}

dialog.displayed.new-task > form > .task-notes-field-div {
    transition: opacity 300ms ease-in-out 350ms;
}

dialog.displayed.new-task > form > .task-priority-field-div {
    transition: opacity 300ms ease-in-out 400ms;
}

dialog.displayed.new-task > form > .task-date-field-div {
    transition: opacity 300ms ease-in-out 450ms;
}

dialog.displayed.new-task > form > button {
    transition: opacity 300ms ease-in-out 500ms, background-color 0.3s ease, border-color 0.1s ease;

}

dialog.displayed.new-task > form > .close-task-dialog {
    transition: opacity 300ms ease-in-out 550ms;
}



.new-project,
.new-task {
    width: 400px;
    background-color: var(--background-light);
}

.new-project > form,
.new-task > form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 100%;
}

.new-task > form > .task-project-field-div,
.new-task > form > .task-title-field-div,
.new-task > form > .task-notes-field-div,
.new-task > form > .task-priority-field-div,
.new-task > form > .task-date-field-div,
.new-project > form  .project-name-field-div,
.new-project > form  .project-color-field-div {
    display: flex;
    flex-direction: column;
}

.new-task > form > .task-dialog-name,
.new-project > form > .project-dialog-name {
    align-self: center;
    font-size: 25px;
    margin-bottom: 15px;
}

.new-task > form > button,
.new-project > form > button {
    margin-top: 25px;
    height: 40px;
    width: 50%;
    align-self: center;
    border-radius: 5px;
    border: 0.5px solid var(--border-dark);
    transition: background-color 1s ease;
    background-color: var(--secondary-light);
    cursor: pointer;
}

.new-task > form > button:hover,
.new-project > form > button:hover {
    border: 0.5px solid black;
    background-color: var(--secondary-color);
}

.new-task > form > button:active,
.new-project > form > button:active {
    background-color: var(--secondary-dark);
}

.new-task > form > .close-task-dialog,
.new-project > form > .close-project-dialog {
    position: absolute;
    right: 10px;
    top: 10px;
}

.new-task > form > .close-task-dialog span,
.new-project > form > .close-project-dialog span {
    transform: scale(1);
    opacity: 0.7;
    cursor: pointer;
    transition: transform 0.25s, opacity 0.25s;
}

.new-task > form > .close-task-dialog:hover span,
.new-project > form > .close-project-dialog:hover span {
    transform: rotate(90deg) scale(1.1);
    opacity: 1;
    cursor: pointer;
}

/* Dialog input styles */

.new-task > form input,
.new-task > form select,
.new-task > form textarea,
.new-project > form input,
.new-project > form select,
.new-project > form textarea {
    outline: none;
    padding: 10px;
    border: 0.5px solid var(--border-color);
    transition: all 0.25s ease;
    border-radius: 5px;
}

.new-task > form input:hover,
.new-task > form select:hover,
.new-task > form textarea:hover,
.new-project > form input:hover,
.new-project > form select:hover,
.new-project > form textarea:hover {
    outline: none;
    padding: 10px;
    border: 0.5px solid black;
}

.new-task > form input::placeholder,
.new-task > form select::placeholder,
.new-task > form textarea::placeholder,
.new-project > form input::placeholder,
.new-project > form select::placeholder,
.new-project > form textarea::placeholder {
    color: var(--text-muted);
    font-style: italic;
}

.new-task > form textarea,
.new-project > form textarea {
    resize: none;
}

.project-color-field-div {
    align-self: center;
}

.new-project > form #project-color {
    height: 40px;
    width: 80px;
    padding: 5px;
    cursor: pointer;
}

.new-project > form .input-container {
    display: flex;
    width: 100%;
    justify-content: space-around;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');\n@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100&family=Lato:wght@300&family=Nunito:ital,wght@0,200;0,300;0,400;0,500;1,200;1,300;1,400;1,500&family=Roboto:wght@100&family=Rubik:wght@300&display=swap');\n\n:root {\n    /* Primary colors */\n    --primary-color: #3498db;\n    --primary-dark: #2980b9;\n    --primary-light: #87CEFA;\n\n    /* Secondary colors */\n    --secondary-color: #2ecc71; /*used*/\n    --secondary-dark: #27ae60; /*used*/\n    --secondary-light: #c8e6c9; /*used*/\n\n    /* Accent colors */\n    --accent-color: #BA181B;\n    --accent-dark: #A4161A;\n    --accent-light: #E5383B; /*used*/\n    --accent-darker: #660708;\n\n    /* Background colors */\n    --background-color: #F5EBE0; /*used*/\n    --background-dark: #bdc3c7;\n    --background-light: #EDEDE9; /*used*/\n\n    /* Text colors */\n    --text-color: #333; /*used*/\n    --text-light: #fff;\n    --text-muted: #888; /*used*/\n\n    /* Border colors */\n    --border-color: #D6CCC2; /*used*/\n    --border-dark: #999; /*used*/\n    --border-light: #eee;\n}\n\n\n::backdrop {\n    background-color: #00000088;\n    backdrop-filter: blur(3px);\n}\n\n.material-symbols-outlined {\n    font-variation-settings:\n    'FILL' 0,\n    'wght' 400,\n    'GRAD' 0,\n    'opsz' 24\n}\n\n\n/* General layout */\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    color: var(--text-color);\n    font-family: 'Nunito', sans-serif;\n    font-weight: 300;\n}\n\nbody {\n    background-color: var(--background-light);\n    height: 100vh;\n    width: 100vw;\n}\n\n.main {\n    height: 100%;\n    width: 100%;\n    display: flex;\n}\n\n.main > .left {\n    border-right: 1px solid var(--border-color);\n    border-bottom: 1px solid var(--border-color);\n    background-color: var(--background-color);\n    flex: 0 0 300px;\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n    /* height: calc(100% - 100px); */\n    height: 100%;\n    overflow: auto;\n}\n\n.main > .right {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n    height: calc(100% - 100px);\n}\n\n.main > .footer {\n    display: flex;\n    height: 100px;\n    border-top: 1px solid var(--border-color);\n    position: fixed;\n    bottom: 0;\n    width: 100%;\n    left: 300px;\n}\n\n.main > .footer > .footer-left {\n    flex: 0 0 300px;\n    background-color: var(--background-color);\n    border-right: 1px solid var(--border-color);\n}\n\n.main > .footer > .footer-right {\n    flex: 1;\n    background-color: var(--background-light);\n}\n\n.right-first-section {\n    padding: 50px 10px 50px 10px;\n    height: 100%;\n    width: 100%;\n    overflow: auto;\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n    align-items: center;\n}\n\n.right-first-section > .task {\n    border: 1px solid var(--border-color);\n    border-radius: 30px;\n    padding: 20px;\n    flex: 1;\n    width: clamp(200px, 60%, 800px);\n    /* max-width: 500px; */\n}\n\n.task-project-color {\n    height: 10px;\n    width: 10px;\n    border-radius: 50%;\n    border: 0.5px solid var(--text-muted);\n}\n\n\n\n\n/* Left div layout */\n\n.left > .left-first-section,\n.left > .left-second-section {\n    margin-top: 40px;\n    overflow: auto;\n    /* margin-left: 10px; */\n}\n\n\n\n.left > .left-first-section > p {\n    padding-left: 20px;\n    font-style: italic;\n    font-weight: 200;\n    height: 50px;\n    display: flex;\n    align-items: center;\n}\n\n.left > .left-first-section ul {\n    position: relative;\n}\n\n.left > .left-first-section li {\n    padding-left: 30px;\n    list-style: none;\n    height: 50px;\n    display: flex;\n    align-items: center;\n    z-index: 1;\n    position: relative;\n    cursor: pointer;\n    gap: 10px;\n}\n\n.left > .left-first-section li > .image {\n    height: 20px;\n    width: 20px;\n\n}\n\n\n/* Views animation */\n\n.left > .left-first-section .task-animation {\n    position: absolute;\n    top: 0;\n    height: 50px;\n    border-left: 6px solid var(--accent-light);\n    z-index: 0;\n    /* border-radius: 8px; */\n    transition: all 0.3s ease;\n}\n\n\n.views > li:nth-child(1)[data-active='true']~.task-animation {\n    width: 100%;\n    top: 0;\n}\n\n.views > li:nth-child(2)[data-active='true']~.task-animation {\n    width: 100%;\n    top: 50px;\n}\n\n.views > li:nth-child(3)[data-active='true']~.task-animation {\n    width: 100%;\n    top: 100px;\n}\n\n.left > .left-first-section li[data-active='false']:hover {\n    background-color: #ba181b28;\n\n}\n\n.left > .left-first-section li[data-active='true'] > div > svg {\n    fill: var(--accent-color);\n}\n\n.left > .left-first-section li[data-active='true'] > p {\n    color: var(--accent-color);\n}\n\n.left > .left-first-section li[data-active='false']:active {\n    background-color: #ba181b5b;\n\n}\n\n.left > .left-second-section > p {\n    padding-left: 20px;\n    font-style: italic;\n    font-weight: 200;\n    height: 50px;\n    display: flex;\n    align-items: center;\n}\n\n.left > .left-second-section li {\n    padding-left: 50px;\n    list-style: none;\n    height: 50px;\n    display: flex;\n    align-items: center;\n    gap: 10px;\n}\n\n.left > .left-second-section li > .circle {\n    height: 10px;\n    width: 10px;\n    border-radius: 50%;\n    border: 0.5px solid var(--text-muted);\n}\n\n.left > .left-second-section button {\n    margin-left: 50px;\n    height: 50px;\n\n}\n\n\n/* Dialog layout and animations */\n\ndialog {\n    position: absolute;\n    margin: auto;\n    padding-left: 35px;\n    padding-right: 35px;\n    padding-top: 10px;\n    padding-bottom: 20px;\n    /* padding-left: 35px; */\n    border-radius: 5px;\n    border: 0.5px solid var(--border-color);\n}\n\ndialog.hidden {\n    opacity: 0;\n    top: -200%;\n    transform: scale(0.5);\n    transition: opacity 300ms ease-in-out, \n                top 1000ms ease-in-out,\n                transform 1000ms ease-in-out;\n}\n\ndialog.hidden > form > * {\n    position: relative;\n    top: 10px;\n    opacity: 0;\n}\n\ndialog.displayed {\n    opacity: 1;\n    top: 0%;\n    transform: scale(1);\n    transition: transform 300ms cubic-bezier(0.18,0.89,0.43,1.19);\n}\n\ndialog.displayed > form > * {\n    top: 0px;\n    opacity: 1;\n}\n\ndialog.displayed.new-project > form .project-dialog-name {\n    transition: opacity 300ms ease-in-out 200ms;\n}\n\ndialog.displayed.new-project > form .input-container {\n    transition: opacity 300ms ease-in-out 250ms;\n}\n\ndialog.displayed.new-project > form .project-name-field-div {\n    transition: opacity 300ms ease-in-out 300ms;\n}\n\ndialog.displayed.new-project > form .project-color-field-div {\n    transition: opacity 300ms ease-in-out 350ms;\n}\n\ndialog.displayed.new-project > form > button {\n    transition: opacity 300ms ease-in-out 400ms;\n}\n\ndialog.displayed.new-project > form > .close-project-dialog {\n    transition: opacity 300ms ease-in-out 450ms;\n}\n\n\ndialog.displayed.new-task > form .task-dialog-name {\n    transition: opacity 300ms ease-in-out 200ms;\n}\n\ndialog.displayed.new-task > form > .task-project-field-div {\n    transition: opacity 300ms ease-in-out 250ms;\n}\n\ndialog.displayed.new-task > form > .task-title-field-div {\n    transition: opacity 300ms ease-in-out 300ms;\n}\n\ndialog.displayed.new-task > form > .task-notes-field-div {\n    transition: opacity 300ms ease-in-out 350ms;\n}\n\ndialog.displayed.new-task > form > .task-priority-field-div {\n    transition: opacity 300ms ease-in-out 400ms;\n}\n\ndialog.displayed.new-task > form > .task-date-field-div {\n    transition: opacity 300ms ease-in-out 450ms;\n}\n\ndialog.displayed.new-task > form > button {\n    transition: opacity 300ms ease-in-out 500ms, background-color 0.3s ease, border-color 0.1s ease;\n\n}\n\ndialog.displayed.new-task > form > .close-task-dialog {\n    transition: opacity 300ms ease-in-out 550ms;\n}\n\n\n\n.new-project,\n.new-task {\n    width: 400px;\n    background-color: var(--background-light);\n}\n\n.new-project > form,\n.new-task > form {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    height: 100%;\n}\n\n.new-task > form > .task-project-field-div,\n.new-task > form > .task-title-field-div,\n.new-task > form > .task-notes-field-div,\n.new-task > form > .task-priority-field-div,\n.new-task > form > .task-date-field-div,\n.new-project > form  .project-name-field-div,\n.new-project > form  .project-color-field-div {\n    display: flex;\n    flex-direction: column;\n}\n\n.new-task > form > .task-dialog-name,\n.new-project > form > .project-dialog-name {\n    align-self: center;\n    font-size: 25px;\n    margin-bottom: 15px;\n}\n\n.new-task > form > button,\n.new-project > form > button {\n    margin-top: 25px;\n    height: 40px;\n    width: 50%;\n    align-self: center;\n    border-radius: 5px;\n    border: 0.5px solid var(--border-dark);\n    transition: background-color 1s ease;\n    background-color: var(--secondary-light);\n    cursor: pointer;\n}\n\n.new-task > form > button:hover,\n.new-project > form > button:hover {\n    border: 0.5px solid black;\n    background-color: var(--secondary-color);\n}\n\n.new-task > form > button:active,\n.new-project > form > button:active {\n    background-color: var(--secondary-dark);\n}\n\n.new-task > form > .close-task-dialog,\n.new-project > form > .close-project-dialog {\n    position: absolute;\n    right: 10px;\n    top: 10px;\n}\n\n.new-task > form > .close-task-dialog span,\n.new-project > form > .close-project-dialog span {\n    transform: scale(1);\n    opacity: 0.7;\n    cursor: pointer;\n    transition: transform 0.25s, opacity 0.25s;\n}\n\n.new-task > form > .close-task-dialog:hover span,\n.new-project > form > .close-project-dialog:hover span {\n    transform: rotate(90deg) scale(1.1);\n    opacity: 1;\n    cursor: pointer;\n}\n\n/* Dialog input styles */\n\n.new-task > form input,\n.new-task > form select,\n.new-task > form textarea,\n.new-project > form input,\n.new-project > form select,\n.new-project > form textarea {\n    outline: none;\n    padding: 10px;\n    border: 0.5px solid var(--border-color);\n    transition: all 0.25s ease;\n    border-radius: 5px;\n}\n\n.new-task > form input:hover,\n.new-task > form select:hover,\n.new-task > form textarea:hover,\n.new-project > form input:hover,\n.new-project > form select:hover,\n.new-project > form textarea:hover {\n    outline: none;\n    padding: 10px;\n    border: 0.5px solid black;\n}\n\n.new-task > form input::placeholder,\n.new-task > form select::placeholder,\n.new-task > form textarea::placeholder,\n.new-project > form input::placeholder,\n.new-project > form select::placeholder,\n.new-project > form textarea::placeholder {\n    color: var(--text-muted);\n    font-style: italic;\n}\n\n.new-task > form textarea,\n.new-project > form textarea {\n    resize: none;\n}\n\n.project-color-field-div {\n    align-self: center;\n}\n\n.new-project > form #project-color {\n    height: 40px;\n    width: 80px;\n    padding: 5px;\n    cursor: pointer;\n}\n\n.new-project > form .input-container {\n    display: flex;\n    width: 100%;\n    justify-content: space-around;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");



// Project module 
const ProjectModule = (function() {

    // Projects in default configuration
    let projects = [
        {
            id: 1,
            name: 'Sport',
            color: '#00FF00',
        },
        {
            id: 2,
            name: 'Math',
            color: '#FF0000',
        },
        {
            id: 3,
            name: 'Programming',
            color: '#0000FF',
        },
        {
            id: 4,
            name: 'Leisure',
            color: '#FF00FF',
        },
    ];

    let projectsCount = projects.length;
    
    // Add new project
    function createProject(name, color) {
        const project = {};
        projectsCount = projectsCount + 1;
        project.id = projectsCount;
        project.name = name;
        project.color = color;

        projects.push(project);

        return project;
    }

    // Retrieve list of projects (objects)
    function getProjectObjects() {
        return projects.slice();
    }

    // Retrieve list of project (values)
    function getProjectValues() {
        let projectValues = [];
        projects.forEach((p) => {
            projectValues.push(p.name);
        })
        
        return projectValues;
    }

    // Retrieve the id of a project that matches the provided name
    function findIdByName(name) {
        const project = projects.find(project => project.name === name);
        return project ? project.id : null;
    }

    // Retrieve the color of a project that matches the provided name
    function findColorByName(name) {
        const project = projects.find(project => project.name === name);
        return project ? project.color : null;
    }

    return {
        createProject,
        getProjectObjects,
        getProjectValues,
        findIdByName,
        findColorByName,
    }
    
})();


// Task module 
const TaskModule = (function() {

    let tasks = [
        {
            id: 1,
            projectId: 1,
            projectName: 'Sport',
            projectColor: '#00FF00',
            title: 'Complete Exercise 1',
            notes: 'Remember to focus on the key concepts',
            priority: 'High',
            date: '2023-11-15',
        },
        {
            id: 2,
            projectId: 2,
            projectName: 'Math',
            projectColor: '#FF0000',
            title: 'Study Algebra',
            notes: 'Review chapters 3 and 4 for the upcoming test',
            priority: 'Medium',
            date: '2023-11-17',
        },
        {
            id: 3,
            projectId: 3,
            projectName: 'Programming',
            projectColor: '#0000FF',
            title: 'Code Review for Project X',
            notes: 'Check for code quality and potential optimizations',
            priority: 'High',
            date: '2023-11-18',
        },
        {
            id: 4,
            projectId: 4,
            projectName: 'Leisure',
            projectColor: '#FF00FF',
            title: 'Buy groceries',
            notes: 'Milk, eggs, bread, and fruits',
            priority: 'Low',
            date: '2023-11-20',
        },
        {
            id: 5,
            projectId: 1,
            projectName: 'Sport',
            projectColor: '#00FF00',
            title: 'Read "The Great Gatsby"',
            notes: 'Complete chapters 1-3 by the end of the week',
            priority: 'Medium',
            date: '2023-11-22',
        },
        {
            id: 6,
            projectId: 2,
            projectName: 'Math',
            projectColor: '#FF0000',
            title: 'Prepare presentation slides',
            notes: 'Incorporate feedback from team members',
            priority: 'High',
            date: '2023-11-25',
        },
        {
            id: 7,
            projectId: 3,
            projectName: 'Programming',
            projectColor: '#0000FF',
            title: 'Practice guitar',
            notes: 'Learn new chords and practice scales',
            priority: 'Medium',
            date: '2023-11-28',
        },
        {
            id: 8,
            projectId: 4,
            projectName: 'Leisure',
            projectColor: '#FF00FF',
            title: 'Write documentation',
            notes: 'Document the new API endpoints',
            priority: 'High',
            date: '2023-11-30',
        },
        

    ];
    
    let tasksCount = tasks.length;

    // Add new task object
    function createTask(projectName, title, notes, priority, date) {
        const task = {};
        tasksCount = tasksCount + 1;
        task.id = tasksCount;
        task.projectId = ProjectModule.findIdByName(projectName);
        task.projectName = projectName;
        task.projectColor = ProjectModule.findColorByName(projectName);
        task.title = title;
        task.notes = notes;
        task.priority = priority;
        task.date = date;
  
        tasks.push(task);
        return task;
    }

    // Retrieve tasks
    function getTasks() {
        return tasks.slice();
    }

    return {
        createTask,
        getTasks,
    }
    
})();


// DOM module
const DOMModule = (function () {
    function createMainDiv() {
        const body = document.querySelector('body');
        const mainDiv = document.createElement('div');
        mainDiv.classList.add('main');
        body.append(mainDiv);
    }

    const createDialogs = (function () {
        const body = document.querySelector('body');
        // newProjectDialogHandler();
        // newTaskDialogHandler();

        function newProjectDialogHandler() {
            const newProjectDialog = createProjectDialog();
            const newProjectDialogForm = createProjectDialogForm();

            function createProjectDialog() {
                const newProjectDialog = document.createElement('dialog');
                newProjectDialog.classList.add('new-project', 'hidden');
                body.append(newProjectDialog);
                return newProjectDialog;
            }

            function createProjectDialogForm() {
                const newProjectDialogForm = document.createElement('form');
                newProjectDialog.append(newProjectDialogForm);
                newProjectDialogForm.addEventListener('submit', () => {
                    const projectName = document.querySelector('dialog.new-project > form input#project-name');
                    const projectColor = document.querySelector('dialog.new-project > form input#project-color');
                    ProjectModule.createProject(projectName.value, projectColor.value);
                    DOMModule.createLeftDiv.createProjects(ProjectModule.getProjectObjects());
                    DOMModule.createDialogs.newTaskDialogHandler();
                    });

                const dialogName = document.createElement('div');
                dialogName.classList.add('project-dialog-name');
                dialogName.textContent = 'New Project';
                newProjectDialogForm.append(dialogName);

                const inputContainer = document.createElement('div');
                inputContainer.classList.add('input-container');
                newProjectDialogForm.append(inputContainer);

                const nameFieldDiv = document.createElement('div');
                nameFieldDiv.classList.add('project-name-field-div');
                inputContainer.append(nameFieldDiv);

                const nameFieldLabel = document.createElement('label');
                nameFieldLabel.textContent = 'Name*';
                nameFieldLabel.setAttribute('for', 'project-name');
                nameFieldDiv.append(nameFieldLabel);
    
                const nameFieldInput = document.createElement('input');
                nameFieldInput.textContent = 'Name';
                nameFieldInput.setAttribute('type', 'text');
                nameFieldInput.setAttribute('id', 'project-name');
                nameFieldInput.setAttribute('placeholder', 'Awesome project...');
                nameFieldInput.setAttribute('required', 'required');
                nameFieldDiv.append(nameFieldInput);

                const colorFieldDiv = document.createElement('div');
                colorFieldDiv.classList.add('project-color-field-div');
                inputContainer.append(colorFieldDiv);
    
                const colorFieldLabel = document.createElement('label');
                colorFieldLabel.textContent = 'Color';
                colorFieldLabel.setAttribute('for', 'project-color');
                colorFieldDiv.append(colorFieldLabel);
    
                const colorFieldInput = document.createElement('input');
                colorFieldInput.textContent = 'Color';
                colorFieldInput.setAttribute('type', 'color');
                colorFieldInput.setAttribute('id', 'project-color');
                colorFieldDiv.append(colorFieldInput);
    
                const submitProjectButton = document.createElement('button');
                submitProjectButton.setAttribute('type', 'submit');
                submitProjectButton.textContent = 'Save';
                newProjectDialogForm.append(submitProjectButton);
    
                const closeProjectDialogDiv = document.createElement('div');
                closeProjectDialogDiv.classList.add('close-project-dialog');
                newProjectDialogForm.append(closeProjectDialogDiv);
    
                const closeProjectDialogSpan = document.createElement('span');
                closeProjectDialogSpan.classList.add('material-symbols-outlined');
                closeProjectDialogSpan.textContent = 'close';
                closeProjectDialogDiv.append(closeProjectDialogSpan);

                // Add close animation on Save and Close
                handleCloseAnimation(newProjectDialogForm, newProjectDialog, 'submit', newProjectDialogForm);
                handleCloseAnimation(closeProjectDialogSpan, newProjectDialog, 'click', newProjectDialogForm);

                return newProjectDialogForm;
            }
        }

        function newTaskDialogHandler() {

            const existingTaskDialog = document.querySelector('.new-task');
            if (existingTaskDialog) {
                existingTaskDialog.remove();
            }

            const newTaskDialog = createTaskDialog();
            const newTaskDialogForm = createTaskDialogForm();

            function createTaskDialog() {
                const newTaskDialog = document.createElement('dialog');
                newTaskDialog.classList.add('new-task', 'hidden');
                body.append(newTaskDialog);
                return newTaskDialog;
            }

            function createTaskDialogForm() {
                const existingTaskDialogForm = document.querySelector('.new-task > form');
                if (existingTaskDialogForm) {
                    existingTaskDialogForm.remove();
                }
                const newTaskDialogForm = document.createElement('form');
                newTaskDialog.append(newTaskDialogForm);
                newTaskDialogForm.addEventListener('submit', () => {
                    const taskProject = document.querySelector('dialog.new-task > form #task-project');
                    const taskTitle = document.querySelector('dialog.new-task > form #task-title');
                    const taskNotes = document.querySelector('dialog.new-task > form #task-notes');
                    const taskPriority = document.querySelector('dialog.new-task > form #task-priority');
                    const taskDate = document.querySelector('dialog.new-task > form #task-date');
                    TaskModule.createTask(taskProject.value, taskTitle.value, taskNotes.value, taskPriority.value, taskDate.value);
                    DOMModule.createRightDiv.createTasks(TaskModule.getTasks());
                })

                const dialogName = document.createElement('div');
                dialogName.classList.add('task-dialog-name');
                dialogName.textContent = 'New Task';
                newTaskDialogForm.append(dialogName);
    

                const today = new Date();
                console.log(today);
                const formatteDate =  today.toISOString().split('T')[0];

                const newTaskDialogFieldsTemplate = [
                    {
                        element_type: 'select',
                        div_class: 'task-project-field-div',
                        element_id: 'task-project',
                        input_type: 'text',
                        label: 'Project',
                        textContent: 'Project',
                        select_options: ProjectModule.getProjectValues(),
                        cursor_style: 'pointer',
                    },
                    {
                        element_type: 'input',
                        div_class: 'task-title-field-div',
                        element_id: 'task-title',
                        input_type: 'text',
                        label: 'Title *',
                        textContent: 'Title',
                        text_placeholder: 'Read a book',
                        required: 'required',
                    },
                    {
                        element_type: 'textarea',
                        div_class: 'task-notes-field-div',
                        element_id: 'task-notes',
                        input_type: '',
                        label: 'Notes',
                        textContent: '',
                        text_placeholder: 'At least a page',
                    },
                    {
                        element_type: 'select',
                        div_class: 'task-priority-field-div',
                        element_id: 'task-priority',
                        input_type: '',
                        label: 'Priority',
                        textContent: 'Priority',
                        select_options: ['High', 'Normal', 'Low'],
                        select_default: 'Normal',
                        cursor_style: 'pointer',
                    },
                    {
                        element_type: 'input',
                        div_class: 'task-date-field-div',
                        element_id: 'task-date',
                        input_type: 'date',
                        label: 'Date *',
                        textContent: 'Date',
                        required: 'required',
                        value: formatteDate,
                    },
                ];
    
                newTaskDialogFieldsTemplate.forEach(element => {
                    const fieldDiv = document.createElement('div');
                    fieldDiv.classList.add(element.div_class);
                    newTaskDialogForm.append(fieldDiv);
    
                    const fieldLabel = document.createElement('label');
                    fieldLabel.textContent = element.label;
                    fieldLabel.setAttribute('for', element.element_id);
                    fieldDiv.append(fieldLabel);
    
                    const fieldInput = document.createElement(element.element_type);
                    fieldInput.textContent = element.textContent;
                    fieldInput.setAttribute('type', element.input_type);
                    fieldInput.setAttribute('id', element.element_id);
                    fieldInput.setAttribute('placeholder', element.text_placeholder);
                    fieldInput.setAttribute(element.required, element.required);
                    if (element.value) {
                        fieldInput.value = element.value;
                    }
                    fieldInput.style.cursor = element.cursor_style;
                    fieldDiv.append(fieldInput);


                    if (element.element_type === 'select') {
                        element.select_options.forEach((item) => {
                            const option = document.createElement('option');
                            option.setAttribute('value', item);
                            option.textContent = item;
                            fieldInput.append(option);
                            if (item === element.select_default) {
                                option.setAttribute('selected', '');
                            }
                        })

                    }

                })
    
                const submitTaskButton = document.createElement('button');
                submitTaskButton.setAttribute('type', 'submit');
                submitTaskButton.textContent = 'Save';
                newTaskDialogForm.append(submitTaskButton);
    
                const closeTaskDialogDiv = document.createElement('div');
                closeTaskDialogDiv.classList.add('close-task-dialog');
                newTaskDialogForm.append(closeTaskDialogDiv);
    
                const closeTaskDialogSpan = document.createElement('span');
                closeTaskDialogSpan.classList.add('material-symbols-outlined');
                closeTaskDialogSpan.textContent = 'close';
                closeTaskDialogDiv.append(closeTaskDialogSpan);
    
                // Add close animation on Save and Close
                handleCloseAnimation(newTaskDialogForm, newTaskDialog, 'submit', newTaskDialogForm);
                handleCloseAnimation(closeTaskDialogSpan, newTaskDialog, 'click', newTaskDialogForm);
            }   
        }
        
        // Close animation on ESC
        function addEscEvenListener() {
            document.addEventListener('keydown', function(event) {
                if (event.key === 'Escape') {
                    event.preventDefault();
                    const openDialog = document.querySelector('dialog[open]');
                    if (openDialog) {
                        closeDialog(openDialog);
                    }
                }
            });
        }



        // Close animation handler
        function handleCloseAnimation(eventElement, dialog, eventType, form) {
            eventElement.addEventListener(eventType, function handleSubmit(event) {
                event.preventDefault();

                const projectName = document.querySelector('#project-name');

                projectName.value = '';
                // form.reset();
                closeDialog(dialog);
            });
        }

        // Close dialog
        function closeDialog(dialog) {
            dialog.classList.add('hidden');
            dialog.classList.remove('displayed');
            dialog.addEventListener('transitionend', function handleTransitionEnd() {
                dialog.close();
                dialog.removeEventListener('transitionend', handleTransitionEnd);
            });
        }


        return {
            newProjectDialogHandler,
            newTaskDialogHandler,
            addEscEvenListener,
        }

    })();
    

    // Handler for left div
    const createLeftDiv = (function () {

        // Create layout structure
        function createStructure () {
            const mainDiv = document.querySelector('.main');
            const leftDiv = document.createElement('div');
            leftDiv.classList.add('left');
            mainDiv.append(leftDiv);
    
            const leftFirstDiv = document.createElement('div');
            leftFirstDiv.classList.add('left-first-section');
            leftFirstDiv.dataset.active = 'Today';

            leftDiv.append(leftFirstDiv);
    
            const firstSectionLabel = document.createElement('p');
            firstSectionLabel.textContent = 'Tasks';
            leftFirstDiv.append(firstSectionLabel);
    
            const firstSectionList = document.createElement('ul');
            firstSectionList.classList.add('views');
            leftFirstDiv.append(firstSectionList);

            const firstSectionLineItems = [
                {
                    element_type: 'li',
                    element_class: 'task-filter',
                    dataset_active: 'true',
                    child_elements: [
                        {
                            element_type: 'div',
                            element_class: 'image',
                            element_innerHtml: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>calendar-today-outline</title><path d="M19 3H18V1H16V3H8V1H6V3H5C3.9 3 3 3.89 3 5V19C3 20.11 3.9 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.89 20.11 3 19 3M19 19H5V9H19V19M19 7H5V5H19M7 11H12V16H7" /></svg>',
                        },
                        {
                            element_type: 'p',
                            element_textContent: 'Today',
                        }
                    ]
                },
                {
                    element_type: 'li',
                    element_class: 'task-filter',
                    dataset_active: 'false',
                    child_elements: [
                        {
                            element_type: 'div',
                            element_class: 'image',
                            element_innerHtml: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>calendar-start-outline</title><path d="M13 18L9 14V17H4V14H2V22H4V19H9V22L13 18M19 3H18V1H16V3H8V1H6V3H5C3.9 3 3 3.9 3 5V12H5V9H19V19H14.8L12.8 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M5 7V5H19V7H5Z" /></svg>',
                        },
                        {
                            element_type: 'p',
                            element_textContent: 'Tomorrow',
                        }
                    ]
                },
                {
                    element_type: 'li',
                    element_class: 'task-filter',
                    dataset_active: 'false',
                    child_elements: [
                        {
                            element_type: 'div',
                            element_class: 'image',
                            element_innerHtml: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>calendar-month-outline</title><path d="M7 11H9V13H7V11M21 5V19C21 20.11 20.11 21 19 21H5C3.89 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H6V1H8V3H16V1H18V3H19C20.11 3 21 3.9 21 5M5 7H19V5H5V7M19 19V9H5V19H19M15 13V11H17V13H15M11 13V11H13V13H11M7 15H9V17H7V15M15 17V15H17V17H15M11 17V15H13V17H11Z" /></svg>',
                        },
                        {
                            element_type: 'p',
                            element_textContent: 'All',
                        }
                    ]
                }
            ]
            
            firstSectionLineItems.forEach(element => {
                const lineItem = document.createElement(element.element_type);
                lineItem.classList.add(element.element_class);
                lineItem.dataset.active = element.dataset_active;
                firstSectionList.append(lineItem);
                if (element.child_elements) {
                    element.child_elements.forEach(child_element => {
                        const lineItemChild = document.createElement(child_element.element_type);
                        lineItemChild.classList.add(child_element.element_class);
                        if (child_element.element_innerHtml) {
                            lineItemChild.innerHTML = `${child_element.element_innerHtml}`;
                        }
                        if (child_element.element_textContent) {
                            lineItemChild.textContent = child_element.element_textContent;
                        }
                        lineItem.append(lineItemChild);
                    })
                }
            })
        

            const animationDiv = document.createElement('div');
            animationDiv.classList.add('task-animation', 'start-today');
            firstSectionList.append(animationDiv);
    
            const leftSecondDiv = document.createElement('div');
            leftSecondDiv.classList.add('left-second-section');
            leftDiv.append(leftSecondDiv);
    
            const secondSectionLabel = document.createElement('p');
            secondSectionLabel.textContent = 'Projects';
            leftSecondDiv.append(secondSectionLabel);
    
            const secondSectionList = document.createElement('ul');
            secondSectionList.classList.add('second-section-list');
            leftSecondDiv.append(secondSectionList);

            // Update data-active property on .task-filer and on parent .left-first-section
            Array.from(document.getElementsByClassName('task-filter')).forEach((item) => {
                item.onclick = () => {
                    leftFirstDiv.dataset.active = item.textContent;
                    Array.from(document.getElementsByClassName('task-filter')).forEach((item2) => {
                        if (item === item2) {
                            item2.dataset.active = 'true';
                        }
                        else {
                            item2.dataset.active = 'false';
                        }
                    })
                    
                }
            })

        }

        // Render projects in .second-section-list
        function createProjects(projects) {
            const projectLineItems = document.querySelectorAll('.project');
            if (projectLineItems) {
                projectLineItems.forEach(item => {
                    item.remove();
                });
            }

            projects.forEach(element => {
                const secondSectionList = document.querySelector('.second-section-list');
                const projectLineItem = document.createElement('li');
                projectLineItem.classList.add('project');
                secondSectionList.append(projectLineItem);

                const circle = document.createElement('div');
                circle.classList.add('circle');
                circle.style.backgroundColor = element.color;
                projectLineItem.append(circle);
                const projectLineItemName = document.createElement('div');
                projectLineItemName.textContent = element.name;
                projectLineItem.append(projectLineItemName);

                

            });
        }

        return {
            createStructure,
            createProjects,
        }
    })();

    // Handler for right div
    const createRightDiv = (function () {

        // Create layout structure
        function createStructure() {
            const mainDiv = document.querySelector('.main');
            const rightDiv = document.createElement('div');
            rightDiv.classList.add('right');
            mainDiv.append(rightDiv);
    
            const rightFirstDiv = document.createElement('div');
            rightFirstDiv.classList.add('right-first-section');
            rightDiv.append(rightFirstDiv);
        }

         // Render tasks
        function createTasks(tasks) {

            const taskLineItems = document.querySelectorAll('.task');
            if (taskLineItems) {
                taskLineItems.forEach(item => {
                    item.remove();
                });
            }
            tasks.forEach(element => {
                const rightFirstSection = document.querySelector('.right-first-section');
                const taskLineItem = document.createElement('div');
                taskLineItem.classList.add('task');
                rightFirstSection.append(taskLineItem);

                const taskFieldsTemplate = [
                    {
                        div_class: 'task-project',
                        child_elements: [
                            {
                                div_class: 'task-project-color',
                                color: element.projectColor,
                            },
                            {
                                div_class: 'task-project-field',
                                textContent: element.projectName,
                            },
                        ]
                    },
                    {
                        div_class: 'task-title-field',
                        textContent: element.title,
                    },
                    {
                        div_class: 'task-notes-field',
                        textContent: element.notes,
                    },
                    {
                        div_class: 'task-priority-field',
                        textContent: element.priority,
                    },
                    {
                        div_class: 'task-date-field',
                        textContent: element.date,
                    },
                ];

                taskFieldsTemplate.forEach(field => {
                    const taskField = document.createElement('div');
                    taskField.classList.add(field.div_class);
                    taskField.textContent = field.textContent;
                    taskField.style.backgroundColor = field.color;
                    taskLineItem.append(taskField);
                    if (field.child_elements) {
                        field.child_elements.forEach(child_element => {
                            const child_div = document.createElement('div');
                            child_div.classList.add(child_element.div_class);
                            child_div.textContent = child_element.textContent;
                            child_div.style.backgroundColor = child_element.color;
                            taskField.append(child_div);
                        })
                    }

                });
            });
        }
        
        return {
            createStructure,
            createTasks,
        }
    })();

    const createFooterDiv = (function () {

        function createStructure() {
            const mainDiv = document.querySelector('.main');
            const footerDiv = document.createElement('div');
            footerDiv.classList.add('footer');
            mainDiv.append(footerDiv);

            // const footerLeftDiv = document.createElement('div');
            // footerLeftDiv.classList.add('footer-left');
            // footerDiv.append(footerLeftDiv);

            const footerRightDiv = document.createElement('div');
            footerRightDiv.classList.add('footer-right');
            footerDiv.append(footerRightDiv);
        }

        function createButtons() {
            
            const leftSecondSection = document.querySelector('.left-second-section');
            const footerRightDiv = document.querySelector('.footer-right');

            const createProjectButton = document.createElement('button');
            createProjectButton.classList.add('create-project');
            createProjectButton.textContent = 'Create Project';
            leftSecondSection.append(createProjectButton);
            createProjectButton.addEventListener('click', () => {
                const newProjectDialog = document.querySelector('.new-project');
                newProjectDialog.showModal();
                newProjectDialog.classList.add('displayed');
                newProjectDialog.classList.remove('hidden');
            })

            const createTaskButton = document.createElement('button');
            createTaskButton.classList.add('create-task');
            createTaskButton.textContent = 'Create Task';
            footerRightDiv.append(createTaskButton);

            createTaskButton.addEventListener('click', () => {
                const newTaskDialog = document.querySelector('.new-task');
                newTaskDialog.showModal();
                newTaskDialog.classList.add('displayed');
                newTaskDialog.classList.remove('hidden');
            })
            
        }
        return {
            createStructure,
            createButtons,
        }
    })();

    return {
        createMainDiv,
        createDialogs,
        createLeftDiv,
        createRightDiv,
        createFooterDiv,
    }
})();


DOMModule.createMainDiv();
DOMModule.createDialogs.newProjectDialogHandler();
DOMModule.createDialogs.newTaskDialogHandler();
DOMModule.createDialogs.addEscEvenListener();
DOMModule.createLeftDiv.createStructure();
DOMModule.createLeftDiv.createProjects(ProjectModule.getProjectObjects());
DOMModule.createRightDiv.createStructure();
DOMModule.createRightDiv.createTasks(TaskModule.getTasks());
DOMModule.createFooterDiv.createStructure();
DOMModule.createFooterDiv.createButtons();

document.addEventListener('keydown', function(event) {
    if (event.key === "5") {
        console.log(ProjectModule.getProjectObjects());
        console.log(TaskModule.getTasks());
    }
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLDRLQUE0SztBQUM1Syx3S0FBd0ssTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0saUVBQWlFO0FBQzdRO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdDQUFnQztBQUNoQywrQkFBK0I7QUFDL0IsZ0NBQWdDOztBQUVoQztBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7O0FBRUE7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQSxpQ0FBaUM7O0FBRWpDO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0Esd0JBQXdCOztBQUV4QjtBQUNBLDZCQUE2QjtBQUM3Qix5QkFBeUI7QUFDekI7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxpRkFBaUYsWUFBWSxhQUFhLGFBQWEsY0FBYyxhQUFhLHVCQUF1Qix1QkFBdUIsd0JBQXdCLGFBQWEsYUFBYSxhQUFhLHVCQUF1QixjQUFjLGFBQWEsdUJBQXVCLGFBQWEsd0JBQXdCLGFBQWEsdUJBQXVCLGFBQWEsd0JBQXdCLGFBQWEsdUJBQXVCLHVCQUF1QixhQUFhLFFBQVEsS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFNBQVMsT0FBTyxhQUFhLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFVBQVUsYUFBYSxPQUFPLFlBQVksV0FBVyxZQUFZLFNBQVMsS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxPQUFPLGFBQWEsTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFFBQVEsS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksWUFBWSxRQUFRLGFBQWEsTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxPQUFPLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxN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VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7O0FDQXNCOzs7QUFHdEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCOztBQUV6Qjs7QUFFQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FB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QTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub3ZhdGFzay8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL25vdmF0YXNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9ub3ZhdGFzay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL25vdmF0YXNrLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9ub3ZhdGFzay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9ub3ZhdGFzay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbm92YXRhc2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbm92YXRhc2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbm92YXRhc2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9ub3ZhdGFzay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL25vdmF0YXNrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL25vdmF0YXNrL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL25vdmF0YXNrL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9ub3ZhdGFzay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL25vdmF0YXNrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbm92YXRhc2svd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL25vdmF0YXNrLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TWF0ZXJpYWwrU3ltYm9scytPdXRsaW5lZDpvcHN6LHdnaHQsRklMTCxHUkFEQDIwLi40OCwxMDAuLjcwMCwwLi4xLC01MC4uMjAwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Sm9zZWZpbitTYW5zOndnaHRAMTAwJmZhbWlseT1MYXRvOndnaHRAMzAwJmZhbWlseT1OdW5pdG86aXRhbCx3Z2h0QDAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwJmZhbWlseT1Sb2JvdG86d2dodEAxMDAmZmFtaWx5PVJ1YmlrOndnaHRAMzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAgIC8qIFByaW1hcnkgY29sb3JzICovXG4gICAgLS1wcmltYXJ5LWNvbG9yOiAjMzQ5OGRiO1xuICAgIC0tcHJpbWFyeS1kYXJrOiAjMjk4MGI5O1xuICAgIC0tcHJpbWFyeS1saWdodDogIzg3Q0VGQTtcblxuICAgIC8qIFNlY29uZGFyeSBjb2xvcnMgKi9cbiAgICAtLXNlY29uZGFyeS1jb2xvcjogIzJlY2M3MTsgLyp1c2VkKi9cbiAgICAtLXNlY29uZGFyeS1kYXJrOiAjMjdhZTYwOyAvKnVzZWQqL1xuICAgIC0tc2Vjb25kYXJ5LWxpZ2h0OiAjYzhlNmM5OyAvKnVzZWQqL1xuXG4gICAgLyogQWNjZW50IGNvbG9ycyAqL1xuICAgIC0tYWNjZW50LWNvbG9yOiAjQkExODFCO1xuICAgIC0tYWNjZW50LWRhcms6ICNBNDE2MUE7XG4gICAgLS1hY2NlbnQtbGlnaHQ6ICNFNTM4M0I7IC8qdXNlZCovXG4gICAgLS1hY2NlbnQtZGFya2VyOiAjNjYwNzA4O1xuXG4gICAgLyogQmFja2dyb3VuZCBjb2xvcnMgKi9cbiAgICAtLWJhY2tncm91bmQtY29sb3I6ICNGNUVCRTA7IC8qdXNlZCovXG4gICAgLS1iYWNrZ3JvdW5kLWRhcms6ICNiZGMzYzc7XG4gICAgLS1iYWNrZ3JvdW5kLWxpZ2h0OiAjRURFREU5OyAvKnVzZWQqL1xuXG4gICAgLyogVGV4dCBjb2xvcnMgKi9cbiAgICAtLXRleHQtY29sb3I6ICMzMzM7IC8qdXNlZCovXG4gICAgLS10ZXh0LWxpZ2h0OiAjZmZmO1xuICAgIC0tdGV4dC1tdXRlZDogIzg4ODsgLyp1c2VkKi9cblxuICAgIC8qIEJvcmRlciBjb2xvcnMgKi9cbiAgICAtLWJvcmRlci1jb2xvcjogI0Q2Q0NDMjsgLyp1c2VkKi9cbiAgICAtLWJvcmRlci1kYXJrOiAjOTk5OyAvKnVzZWQqL1xuICAgIC0tYm9yZGVyLWxpZ2h0OiAjZWVlO1xufVxuXG5cbjo6YmFja2Ryb3Age1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA4ODtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcbn1cblxuLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xuICAgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOlxuICAgICdGSUxMJyAwLFxuICAgICd3Z2h0JyA0MDAsXG4gICAgJ0dSQUQnIDAsXG4gICAgJ29wc3onIDI0XG59XG5cblxuLyogR2VuZXJhbCBsYXlvdXQgKi9cblxuKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbmJvZHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtbGlnaHQpO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMHZ3O1xufVxuXG4ubWFpbiB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5tYWluID4gLmxlZnQge1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XG4gICAgZmxleDogMCAwIDMwMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIC8qIGhlaWdodDogY2FsYygxMDAlIC0gMTAwcHgpOyAqL1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cblxuLm1haW4gPiAucmlnaHQge1xuICAgIGZsZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMDBweCk7XG59XG5cbi5tYWluID4gLmZvb3RlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbGVmdDogMzAwcHg7XG59XG5cbi5tYWluID4gLmZvb3RlciA+IC5mb290ZXItbGVmdCB7XG4gICAgZmxleDogMCAwIDMwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG59XG5cbi5tYWluID4gLmZvb3RlciA+IC5mb290ZXItcmlnaHQge1xuICAgIGZsZXg6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1saWdodCk7XG59XG5cbi5yaWdodC1maXJzdC1zZWN0aW9uIHtcbiAgICBwYWRkaW5nOiA1MHB4IDEwcHggNTBweCAxMHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxNXB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2sge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGZsZXg6IDE7XG4gICAgd2lkdGg6IGNsYW1wKDIwMHB4LCA2MCUsIDgwMHB4KTtcbiAgICAvKiBtYXgtd2lkdGg6IDUwMHB4OyAqL1xufVxuXG4udGFzay1wcm9qZWN0LWNvbG9yIHtcbiAgICBoZWlnaHQ6IDEwcHg7XG4gICAgd2lkdGg6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJvcmRlcjogMC41cHggc29saWQgdmFyKC0tdGV4dC1tdXRlZCk7XG59XG5cblxuXG5cbi8qIExlZnQgZGl2IGxheW91dCAqL1xuXG4ubGVmdCA+IC5sZWZ0LWZpcnN0LXNlY3Rpb24sXG4ubGVmdCA+IC5sZWZ0LXNlY29uZC1zZWN0aW9uIHtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIC8qIG1hcmdpbi1sZWZ0OiAxMHB4OyAqL1xufVxuXG5cblxuLmxlZnQgPiAubGVmdC1maXJzdC1zZWN0aW9uID4gcCB7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LXdlaWdodDogMjAwO1xuICAgIGhlaWdodDogNTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5sZWZ0ID4gLmxlZnQtZmlyc3Qtc2VjdGlvbiB1bCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubGVmdCA+IC5sZWZ0LWZpcnN0LXNlY3Rpb24gbGkge1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGhlaWdodDogNTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgei1pbmRleDogMTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGdhcDogMTBweDtcbn1cblxuLmxlZnQgPiAubGVmdC1maXJzdC1zZWN0aW9uIGxpID4gLmltYWdlIHtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG5cbn1cblxuXG4vKiBWaWV3cyBhbmltYXRpb24gKi9cblxuLmxlZnQgPiAubGVmdC1maXJzdC1zZWN0aW9uIC50YXNrLWFuaW1hdGlvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCB2YXIoLS1hY2NlbnQtbGlnaHQpO1xuICAgIHotaW5kZXg6IDA7XG4gICAgLyogYm9yZGVyLXJhZGl1czogOHB4OyAqL1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG5cblxuLnZpZXdzID4gbGk6bnRoLWNoaWxkKDEpW2RhdGEtYWN0aXZlPSd0cnVlJ11+LnRhc2stYW5pbWF0aW9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0b3A6IDA7XG59XG5cbi52aWV3cyA+IGxpOm50aC1jaGlsZCgyKVtkYXRhLWFjdGl2ZT0ndHJ1ZSddfi50YXNrLWFuaW1hdGlvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdG9wOiA1MHB4O1xufVxuXG4udmlld3MgPiBsaTpudGgtY2hpbGQoMylbZGF0YS1hY3RpdmU9J3RydWUnXX4udGFzay1hbmltYXRpb24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRvcDogMTAwcHg7XG59XG5cbi5sZWZ0ID4gLmxlZnQtZmlyc3Qtc2VjdGlvbiBsaVtkYXRhLWFjdGl2ZT0nZmFsc2UnXTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JhMTgxYjI4O1xuXG59XG5cbi5sZWZ0ID4gLmxlZnQtZmlyc3Qtc2VjdGlvbiBsaVtkYXRhLWFjdGl2ZT0ndHJ1ZSddID4gZGl2ID4gc3ZnIHtcbiAgICBmaWxsOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xufVxuXG4ubGVmdCA+IC5sZWZ0LWZpcnN0LXNlY3Rpb24gbGlbZGF0YS1hY3RpdmU9J3RydWUnXSA+IHAge1xuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xufVxuXG4ubGVmdCA+IC5sZWZ0LWZpcnN0LXNlY3Rpb24gbGlbZGF0YS1hY3RpdmU9J2ZhbHNlJ106YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmExODFiNWI7XG5cbn1cblxuLmxlZnQgPiAubGVmdC1zZWNvbmQtc2VjdGlvbiA+IHAge1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubGVmdCA+IC5sZWZ0LXNlY29uZC1zZWN0aW9uIGxpIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbn1cblxuLmxlZnQgPiAubGVmdC1zZWNvbmQtc2VjdGlvbiBsaSA+IC5jaXJjbGUge1xuICAgIGhlaWdodDogMTBweDtcbiAgICB3aWR0aDogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCB2YXIoLS10ZXh0LW11dGVkKTtcbn1cblxuLmxlZnQgPiAubGVmdC1zZWNvbmQtc2VjdGlvbiBidXR0b24ge1xuICAgIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICAgIGhlaWdodDogNTBweDtcblxufVxuXG5cbi8qIERpYWxvZyBsYXlvdXQgYW5kIGFuaW1hdGlvbnMgKi9cblxuZGlhbG9nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmctbGVmdDogMzVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzNXB4O1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgIC8qIHBhZGRpbmctbGVmdDogMzVweDsgKi9cbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xufVxuXG5kaWFsb2cuaGlkZGVuIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRvcDogLTIwMCU7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbi1vdXQsIFxuICAgICAgICAgICAgICAgIHRvcCAxMDAwbXMgZWFzZS1pbi1vdXQsXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtIDEwMDBtcyBlYXNlLWluLW91dDtcbn1cblxuZGlhbG9nLmhpZGRlbiA+IGZvcm0gPiAqIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAxMHB4O1xuICAgIG9wYWNpdHk6IDA7XG59XG5cbmRpYWxvZy5kaXNwbGF5ZWQge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdG9wOiAwJTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC4xOCwwLjg5LDAuNDMsMS4xOSk7XG59XG5cbmRpYWxvZy5kaXNwbGF5ZWQgPiBmb3JtID4gKiB7XG4gICAgdG9wOiAwcHg7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuZGlhbG9nLmRpc3BsYXllZC5uZXctcHJvamVjdCA+IGZvcm0gLnByb2plY3QtZGlhbG9nLW5hbWUge1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbi1vdXQgMjAwbXM7XG59XG5cbmRpYWxvZy5kaXNwbGF5ZWQubmV3LXByb2plY3QgPiBmb3JtIC5pbnB1dC1jb250YWluZXIge1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbi1vdXQgMjUwbXM7XG59XG5cbmRpYWxvZy5kaXNwbGF5ZWQubmV3LXByb2plY3QgPiBmb3JtIC5wcm9qZWN0LW5hbWUtZmllbGQtZGl2IHtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0IDMwMG1zO1xufVxuXG5kaWFsb2cuZGlzcGxheWVkLm5ldy1wcm9qZWN0ID4gZm9ybSAucHJvamVjdC1jb2xvci1maWVsZC1kaXYge1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbi1vdXQgMzUwbXM7XG59XG5cbmRpYWxvZy5kaXNwbGF5ZWQubmV3LXByb2plY3QgPiBmb3JtID4gYnV0dG9uIHtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0IDQwMG1zO1xufVxuXG5kaWFsb2cuZGlzcGxheWVkLm5ldy1wcm9qZWN0ID4gZm9ybSA+IC5jbG9zZS1wcm9qZWN0LWRpYWxvZyB7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dCA0NTBtcztcbn1cblxuXG5kaWFsb2cuZGlzcGxheWVkLm5ldy10YXNrID4gZm9ybSAudGFzay1kaWFsb2ctbmFtZSB7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dCAyMDBtcztcbn1cblxuZGlhbG9nLmRpc3BsYXllZC5uZXctdGFzayA+IGZvcm0gPiAudGFzay1wcm9qZWN0LWZpZWxkLWRpdiB7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dCAyNTBtcztcbn1cblxuZGlhbG9nLmRpc3BsYXllZC5uZXctdGFzayA+IGZvcm0gPiAudGFzay10aXRsZS1maWVsZC1kaXYge1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbi1vdXQgMzAwbXM7XG59XG5cbmRpYWxvZy5kaXNwbGF5ZWQubmV3LXRhc2sgPiBmb3JtID4gLnRhc2stbm90ZXMtZmllbGQtZGl2IHtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0IDM1MG1zO1xufVxuXG5kaWFsb2cuZGlzcGxheWVkLm5ldy10YXNrID4gZm9ybSA+IC50YXNrLXByaW9yaXR5LWZpZWxkLWRpdiB7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dCA0MDBtcztcbn1cblxuZGlhbG9nLmRpc3BsYXllZC5uZXctdGFzayA+IGZvcm0gPiAudGFzay1kYXRlLWZpZWxkLWRpdiB7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dCA0NTBtcztcbn1cblxuZGlhbG9nLmRpc3BsYXllZC5uZXctdGFzayA+IGZvcm0gPiBidXR0b24ge1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbi1vdXQgNTAwbXMsIGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLCBib3JkZXItY29sb3IgMC4xcyBlYXNlO1xuXG59XG5cbmRpYWxvZy5kaXNwbGF5ZWQubmV3LXRhc2sgPiBmb3JtID4gLmNsb3NlLXRhc2stZGlhbG9nIHtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0IDU1MG1zO1xufVxuXG5cblxuLm5ldy1wcm9qZWN0LFxuLm5ldy10YXNrIHtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1saWdodCk7XG59XG5cbi5uZXctcHJvamVjdCA+IGZvcm0sXG4ubmV3LXRhc2sgPiBmb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxMHB4O1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLm5ldy10YXNrID4gZm9ybSA+IC50YXNrLXByb2plY3QtZmllbGQtZGl2LFxuLm5ldy10YXNrID4gZm9ybSA+IC50YXNrLXRpdGxlLWZpZWxkLWRpdixcbi5uZXctdGFzayA+IGZvcm0gPiAudGFzay1ub3Rlcy1maWVsZC1kaXYsXG4ubmV3LXRhc2sgPiBmb3JtID4gLnRhc2stcHJpb3JpdHktZmllbGQtZGl2LFxuLm5ldy10YXNrID4gZm9ybSA+IC50YXNrLWRhdGUtZmllbGQtZGl2LFxuLm5ldy1wcm9qZWN0ID4gZm9ybSAgLnByb2plY3QtbmFtZS1maWVsZC1kaXYsXG4ubmV3LXByb2plY3QgPiBmb3JtICAucHJvamVjdC1jb2xvci1maWVsZC1kaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLm5ldy10YXNrID4gZm9ybSA+IC50YXNrLWRpYWxvZy1uYW1lLFxuLm5ldy1wcm9qZWN0ID4gZm9ybSA+IC5wcm9qZWN0LWRpYWxvZy1uYW1lIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5uZXctdGFzayA+IGZvcm0gPiBidXR0b24sXG4ubmV3LXByb2plY3QgPiBmb3JtID4gYnV0dG9uIHtcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogNTAlO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCB2YXIoLS1ib3JkZXItZGFyayk7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1saWdodCk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubmV3LXRhc2sgPiBmb3JtID4gYnV0dG9uOmhvdmVyLFxuLm5ldy1wcm9qZWN0ID4gZm9ybSA+IGJ1dHRvbjpob3ZlciB7XG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCBibGFjaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xufVxuXG4ubmV3LXRhc2sgPiBmb3JtID4gYnV0dG9uOmFjdGl2ZSxcbi5uZXctcHJvamVjdCA+IGZvcm0gPiBidXR0b246YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZGFyayk7XG59XG5cbi5uZXctdGFzayA+IGZvcm0gPiAuY2xvc2UtdGFzay1kaWFsb2csXG4ubmV3LXByb2plY3QgPiBmb3JtID4gLmNsb3NlLXByb2plY3QtZGlhbG9nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgdG9wOiAxMHB4O1xufVxuXG4ubmV3LXRhc2sgPiBmb3JtID4gLmNsb3NlLXRhc2stZGlhbG9nIHNwYW4sXG4ubmV3LXByb2plY3QgPiBmb3JtID4gLmNsb3NlLXByb2plY3QtZGlhbG9nIHNwYW4ge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgb3BhY2l0eTogMC43O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNXMsIG9wYWNpdHkgMC4yNXM7XG59XG5cbi5uZXctdGFzayA+IGZvcm0gPiAuY2xvc2UtdGFzay1kaWFsb2c6aG92ZXIgc3Bhbixcbi5uZXctcHJvamVjdCA+IGZvcm0gPiAuY2xvc2UtcHJvamVjdC1kaWFsb2c6aG92ZXIgc3BhbiB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpIHNjYWxlKDEuMSk7XG4gICAgb3BhY2l0eTogMTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIERpYWxvZyBpbnB1dCBzdHlsZXMgKi9cblxuLm5ldy10YXNrID4gZm9ybSBpbnB1dCxcbi5uZXctdGFzayA+IGZvcm0gc2VsZWN0LFxuLm5ldy10YXNrID4gZm9ybSB0ZXh0YXJlYSxcbi5uZXctcHJvamVjdCA+IGZvcm0gaW5wdXQsXG4ubmV3LXByb2plY3QgPiBmb3JtIHNlbGVjdCxcbi5uZXctcHJvamVjdCA+IGZvcm0gdGV4dGFyZWEge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2U7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ubmV3LXRhc2sgPiBmb3JtIGlucHV0OmhvdmVyLFxuLm5ldy10YXNrID4gZm9ybSBzZWxlY3Q6aG92ZXIsXG4ubmV3LXRhc2sgPiBmb3JtIHRleHRhcmVhOmhvdmVyLFxuLm5ldy1wcm9qZWN0ID4gZm9ybSBpbnB1dDpob3Zlcixcbi5uZXctcHJvamVjdCA+IGZvcm0gc2VsZWN0OmhvdmVyLFxuLm5ldy1wcm9qZWN0ID4gZm9ybSB0ZXh0YXJlYTpob3ZlciB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlcjogMC41cHggc29saWQgYmxhY2s7XG59XG5cbi5uZXctdGFzayA+IGZvcm0gaW5wdXQ6OnBsYWNlaG9sZGVyLFxuLm5ldy10YXNrID4gZm9ybSBzZWxlY3Q6OnBsYWNlaG9sZGVyLFxuLm5ldy10YXNrID4gZm9ybSB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIsXG4ubmV3LXByb2plY3QgPiBmb3JtIGlucHV0OjpwbGFjZWhvbGRlcixcbi5uZXctcHJvamVjdCA+IGZvcm0gc2VsZWN0OjpwbGFjZWhvbGRlcixcbi5uZXctcHJvamVjdCA+IGZvcm0gdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4ubmV3LXRhc2sgPiBmb3JtIHRleHRhcmVhLFxuLm5ldy1wcm9qZWN0ID4gZm9ybSB0ZXh0YXJlYSB7XG4gICAgcmVzaXplOiBub25lO1xufVxuXG4ucHJvamVjdC1jb2xvci1maWVsZC1kaXYge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLm5ldy1wcm9qZWN0ID4gZm9ybSAjcHJvamVjdC1jb2xvciB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5uZXctcHJvamVjdCA+IGZvcm0gLmlucHV0LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0lBQ0ksbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4Qix1QkFBdUI7SUFDdkIsd0JBQXdCOztJQUV4QixxQkFBcUI7SUFDckIsMEJBQTBCLEVBQUUsT0FBTztJQUNuQyx5QkFBeUIsRUFBRSxPQUFPO0lBQ2xDLDBCQUEwQixFQUFFLE9BQU87O0lBRW5DLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLHVCQUF1QixFQUFFLE9BQU87SUFDaEMsd0JBQXdCOztJQUV4QixzQkFBc0I7SUFDdEIsMkJBQTJCLEVBQUUsT0FBTztJQUNwQywwQkFBMEI7SUFDMUIsMkJBQTJCLEVBQUUsT0FBTzs7SUFFcEMsZ0JBQWdCO0lBQ2hCLGtCQUFrQixFQUFFLE9BQU87SUFDM0Isa0JBQWtCO0lBQ2xCLGtCQUFrQixFQUFFLE9BQU87O0lBRTNCLGtCQUFrQjtJQUNsQix1QkFBdUIsRUFBRSxPQUFPO0lBQ2hDLG1CQUFtQixFQUFFLE9BQU87SUFDNUIsb0JBQW9CO0FBQ3hCOzs7QUFHQTtJQUNJLDJCQUEyQjtJQUMzQiwwQkFBMEI7QUFDOUI7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SUFFSSx1Q0FBdUM7QUFDM0M7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxTQUFTO0FBQ2I7O0FBRUE7O0lBRUksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixlQUFlO0lBQ2YsMENBQTBDO0FBQzlDOztBQUVBOztJQUVJLG1DQUFtQztJQUNuQyxVQUFVO0lBQ1YsZUFBZTtBQUNuQjs7QUFFQSx3QkFBd0I7O0FBRXhCOzs7Ozs7SUFNSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLHVDQUF1QztJQUN2QywwQkFBMEI7SUFDMUIsa0JBQWtCO0FBQ3RCOztBQUVBOzs7Ozs7SUFNSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLHlCQUF5QjtBQUM3Qjs7QUFFQTs7Ozs7O0lBTUksd0JBQXdCO0lBQ3hCLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsNkJBQTZCO0FBQ2pDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1hdGVyaWFsK1N5bWJvbHMrT3V0bGluZWQ6b3Bzeix3Z2h0LEZJTEwsR1JBREAyMC4uNDgsMTAwLi43MDAsMC4uMSwtNTAuLjIwMCcpO1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUpvc2VmaW4rU2Fuczp3Z2h0QDEwMCZmYW1pbHk9TGF0bzp3Z2h0QDMwMCZmYW1pbHk9TnVuaXRvOml0YWwsd2dodEAwLDIwMDswLDMwMDswLDQwMDswLDUwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMCZmYW1pbHk9Um9ib3RvOndnaHRAMTAwJmZhbWlseT1SdWJpazp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdCB7XFxuICAgIC8qIFByaW1hcnkgY29sb3JzICovXFxuICAgIC0tcHJpbWFyeS1jb2xvcjogIzM0OThkYjtcXG4gICAgLS1wcmltYXJ5LWRhcms6ICMyOTgwYjk7XFxuICAgIC0tcHJpbWFyeS1saWdodDogIzg3Q0VGQTtcXG5cXG4gICAgLyogU2Vjb25kYXJ5IGNvbG9ycyAqL1xcbiAgICAtLXNlY29uZGFyeS1jb2xvcjogIzJlY2M3MTsgLyp1c2VkKi9cXG4gICAgLS1zZWNvbmRhcnktZGFyazogIzI3YWU2MDsgLyp1c2VkKi9cXG4gICAgLS1zZWNvbmRhcnktbGlnaHQ6ICNjOGU2Yzk7IC8qdXNlZCovXFxuXFxuICAgIC8qIEFjY2VudCBjb2xvcnMgKi9cXG4gICAgLS1hY2NlbnQtY29sb3I6ICNCQTE4MUI7XFxuICAgIC0tYWNjZW50LWRhcms6ICNBNDE2MUE7XFxuICAgIC0tYWNjZW50LWxpZ2h0OiAjRTUzODNCOyAvKnVzZWQqL1xcbiAgICAtLWFjY2VudC1kYXJrZXI6ICM2NjA3MDg7XFxuXFxuICAgIC8qIEJhY2tncm91bmQgY29sb3JzICovXFxuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogI0Y1RUJFMDsgLyp1c2VkKi9cXG4gICAgLS1iYWNrZ3JvdW5kLWRhcms6ICNiZGMzYzc7XFxuICAgIC0tYmFja2dyb3VuZC1saWdodDogI0VERURFOTsgLyp1c2VkKi9cXG5cXG4gICAgLyogVGV4dCBjb2xvcnMgKi9cXG4gICAgLS10ZXh0LWNvbG9yOiAjMzMzOyAvKnVzZWQqL1xcbiAgICAtLXRleHQtbGlnaHQ6ICNmZmY7XFxuICAgIC0tdGV4dC1tdXRlZDogIzg4ODsgLyp1c2VkKi9cXG5cXG4gICAgLyogQm9yZGVyIGNvbG9ycyAqL1xcbiAgICAtLWJvcmRlci1jb2xvcjogI0Q2Q0NDMjsgLyp1c2VkKi9cXG4gICAgLS1ib3JkZXItZGFyazogIzk5OTsgLyp1c2VkKi9cXG4gICAgLS1ib3JkZXItbGlnaHQ6ICNlZWU7XFxufVxcblxcblxcbjo6YmFja2Ryb3Age1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwODg7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xcbn1cXG5cXG4ubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XFxuICAgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOlxcbiAgICAnRklMTCcgMCxcXG4gICAgJ3dnaHQnIDQwMCxcXG4gICAgJ0dSQUQnIDAsXFxuICAgICdvcHN6JyAyNFxcbn1cXG5cXG5cXG4vKiBHZW5lcmFsIGxheW91dCAqL1xcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1saWdodCk7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuLm1haW4ge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubWFpbiA+IC5sZWZ0IHtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBmbGV4OiAwIDAgMzAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIC8qIGhlaWdodDogY2FsYygxMDAlIC0gMTAwcHgpOyAqL1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4ubWFpbiA+IC5yaWdodCB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTAwcHgpO1xcbn1cXG5cXG4ubWFpbiA+IC5mb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBib3R0b206IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBsZWZ0OiAzMDBweDtcXG59XFxuXFxuLm1haW4gPiAuZm9vdGVyID4gLmZvb3Rlci1sZWZ0IHtcXG4gICAgZmxleDogMCAwIDMwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcXG59XFxuXFxuLm1haW4gPiAuZm9vdGVyID4gLmZvb3Rlci1yaWdodCB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtbGlnaHQpO1xcbn1cXG5cXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiB7XFxuICAgIHBhZGRpbmc6IDUwcHggMTBweCA1MHB4IDEwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2sge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBmbGV4OiAxO1xcbiAgICB3aWR0aDogY2xhbXAoMjAwcHgsIDYwJSwgODAwcHgpO1xcbiAgICAvKiBtYXgtd2lkdGg6IDUwMHB4OyAqL1xcbn1cXG5cXG4udGFzay1wcm9qZWN0LWNvbG9yIHtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICB3aWR0aDogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIHZhcigtLXRleHQtbXV0ZWQpO1xcbn1cXG5cXG5cXG5cXG5cXG4vKiBMZWZ0IGRpdiBsYXlvdXQgKi9cXG5cXG4ubGVmdCA+IC5sZWZ0LWZpcnN0LXNlY3Rpb24sXFxuLmxlZnQgPiAubGVmdC1zZWNvbmQtc2VjdGlvbiB7XFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICAvKiBtYXJnaW4tbGVmdDogMTBweDsgKi9cXG59XFxuXFxuXFxuXFxuLmxlZnQgPiAubGVmdC1maXJzdC1zZWN0aW9uID4gcCB7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5sZWZ0ID4gLmxlZnQtZmlyc3Qtc2VjdGlvbiB1bCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmxlZnQgPiAubGVmdC1maXJzdC1zZWN0aW9uIGxpIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5sZWZ0ID4gLmxlZnQtZmlyc3Qtc2VjdGlvbiBsaSA+IC5pbWFnZSB7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgd2lkdGg6IDIwcHg7XFxuXFxufVxcblxcblxcbi8qIFZpZXdzIGFuaW1hdGlvbiAqL1xcblxcbi5sZWZ0ID4gLmxlZnQtZmlyc3Qtc2VjdGlvbiAudGFzay1hbmltYXRpb24ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHZhcigtLWFjY2VudC1saWdodCk7XFxuICAgIHotaW5kZXg6IDA7XFxuICAgIC8qIGJvcmRlci1yYWRpdXM6IDhweDsgKi9cXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG59XFxuXFxuXFxuLnZpZXdzID4gbGk6bnRoLWNoaWxkKDEpW2RhdGEtYWN0aXZlPSd0cnVlJ11+LnRhc2stYW5pbWF0aW9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRvcDogMDtcXG59XFxuXFxuLnZpZXdzID4gbGk6bnRoLWNoaWxkKDIpW2RhdGEtYWN0aXZlPSd0cnVlJ11+LnRhc2stYW5pbWF0aW9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRvcDogNTBweDtcXG59XFxuXFxuLnZpZXdzID4gbGk6bnRoLWNoaWxkKDMpW2RhdGEtYWN0aXZlPSd0cnVlJ11+LnRhc2stYW5pbWF0aW9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRvcDogMTAwcHg7XFxufVxcblxcbi5sZWZ0ID4gLmxlZnQtZmlyc3Qtc2VjdGlvbiBsaVtkYXRhLWFjdGl2ZT0nZmFsc2UnXTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiYTE4MWIyODtcXG5cXG59XFxuXFxuLmxlZnQgPiAubGVmdC1maXJzdC1zZWN0aW9uIGxpW2RhdGEtYWN0aXZlPSd0cnVlJ10gPiBkaXYgPiBzdmcge1xcbiAgICBmaWxsOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbn1cXG5cXG4ubGVmdCA+IC5sZWZ0LWZpcnN0LXNlY3Rpb24gbGlbZGF0YS1hY3RpdmU9J3RydWUnXSA+IHAge1xcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG59XFxuXFxuLmxlZnQgPiAubGVmdC1maXJzdC1zZWN0aW9uIGxpW2RhdGEtYWN0aXZlPSdmYWxzZSddOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiYTE4MWI1YjtcXG5cXG59XFxuXFxuLmxlZnQgPiAubGVmdC1zZWNvbmQtc2VjdGlvbiA+IHAge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubGVmdCA+IC5sZWZ0LXNlY29uZC1zZWN0aW9uIGxpIHtcXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmxlZnQgPiAubGVmdC1zZWNvbmQtc2VjdGlvbiBsaSA+IC5jaXJjbGUge1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxuICAgIHdpZHRoOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJvcmRlcjogMC41cHggc29saWQgdmFyKC0tdGV4dC1tdXRlZCk7XFxufVxcblxcbi5sZWZ0ID4gLmxlZnQtc2Vjb25kLXNlY3Rpb24gYnV0dG9uIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG5cXG59XFxuXFxuXFxuLyogRGlhbG9nIGxheW91dCBhbmQgYW5pbWF0aW9ucyAqL1xcblxcbmRpYWxvZyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDM1cHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDM1cHg7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG4gICAgLyogcGFkZGluZy1sZWZ0OiAzNXB4OyAqL1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMC41cHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcXG59XFxuXFxuZGlhbG9nLmhpZGRlbiB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRvcDogLTIwMCU7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dCwgXFxuICAgICAgICAgICAgICAgIHRvcCAxMDAwbXMgZWFzZS1pbi1vdXQsXFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybSAxMDAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbmRpYWxvZy5oaWRkZW4gPiBmb3JtID4gKiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAxMHB4O1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG5kaWFsb2cuZGlzcGxheWVkIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdG9wOiAwJTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGN1YmljLWJlemllcigwLjE4LDAuODksMC40MywxLjE5KTtcXG59XFxuXFxuZGlhbG9nLmRpc3BsYXllZCA+IGZvcm0gPiAqIHtcXG4gICAgdG9wOiAwcHg7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbmRpYWxvZy5kaXNwbGF5ZWQubmV3LXByb2plY3QgPiBmb3JtIC5wcm9qZWN0LWRpYWxvZy1uYW1lIHtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dCAyMDBtcztcXG59XFxuXFxuZGlhbG9nLmRpc3BsYXllZC5uZXctcHJvamVjdCA+IGZvcm0gLmlucHV0LWNvbnRhaW5lciB7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbi1vdXQgMjUwbXM7XFxufVxcblxcbmRpYWxvZy5kaXNwbGF5ZWQubmV3LXByb2plY3QgPiBmb3JtIC5wcm9qZWN0LW5hbWUtZmllbGQtZGl2IHtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dCAzMDBtcztcXG59XFxuXFxuZGlhbG9nLmRpc3BsYXllZC5uZXctcHJvamVjdCA+IGZvcm0gLnByb2plY3QtY29sb3ItZmllbGQtZGl2IHtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dCAzNTBtcztcXG59XFxuXFxuZGlhbG9nLmRpc3BsYXllZC5uZXctcHJvamVjdCA+IGZvcm0gPiBidXR0b24ge1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0IDQwMG1zO1xcbn1cXG5cXG5kaWFsb2cuZGlzcGxheWVkLm5ldy1wcm9qZWN0ID4gZm9ybSA+IC5jbG9zZS1wcm9qZWN0LWRpYWxvZyB7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbi1vdXQgNDUwbXM7XFxufVxcblxcblxcbmRpYWxvZy5kaXNwbGF5ZWQubmV3LXRhc2sgPiBmb3JtIC50YXNrLWRpYWxvZy1uYW1lIHtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dCAyMDBtcztcXG59XFxuXFxuZGlhbG9nLmRpc3BsYXllZC5uZXctdGFzayA+IGZvcm0gPiAudGFzay1wcm9qZWN0LWZpZWxkLWRpdiB7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbi1vdXQgMjUwbXM7XFxufVxcblxcbmRpYWxvZy5kaXNwbGF5ZWQubmV3LXRhc2sgPiBmb3JtID4gLnRhc2stdGl0bGUtZmllbGQtZGl2IHtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dCAzMDBtcztcXG59XFxuXFxuZGlhbG9nLmRpc3BsYXllZC5uZXctdGFzayA+IGZvcm0gPiAudGFzay1ub3Rlcy1maWVsZC1kaXYge1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0IDM1MG1zO1xcbn1cXG5cXG5kaWFsb2cuZGlzcGxheWVkLm5ldy10YXNrID4gZm9ybSA+IC50YXNrLXByaW9yaXR5LWZpZWxkLWRpdiB7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbi1vdXQgNDAwbXM7XFxufVxcblxcbmRpYWxvZy5kaXNwbGF5ZWQubmV3LXRhc2sgPiBmb3JtID4gLnRhc2stZGF0ZS1maWVsZC1kaXYge1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0IDQ1MG1zO1xcbn1cXG5cXG5kaWFsb2cuZGlzcGxheWVkLm5ldy10YXNrID4gZm9ybSA+IGJ1dHRvbiB7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbi1vdXQgNTAwbXMsIGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLCBib3JkZXItY29sb3IgMC4xcyBlYXNlO1xcblxcbn1cXG5cXG5kaWFsb2cuZGlzcGxheWVkLm5ldy10YXNrID4gZm9ybSA+IC5jbG9zZS10YXNrLWRpYWxvZyB7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbi1vdXQgNTUwbXM7XFxufVxcblxcblxcblxcbi5uZXctcHJvamVjdCxcXG4ubmV3LXRhc2sge1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtbGlnaHQpO1xcbn1cXG5cXG4ubmV3LXByb2plY3QgPiBmb3JtLFxcbi5uZXctdGFzayA+IGZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLm5ldy10YXNrID4gZm9ybSA+IC50YXNrLXByb2plY3QtZmllbGQtZGl2LFxcbi5uZXctdGFzayA+IGZvcm0gPiAudGFzay10aXRsZS1maWVsZC1kaXYsXFxuLm5ldy10YXNrID4gZm9ybSA+IC50YXNrLW5vdGVzLWZpZWxkLWRpdixcXG4ubmV3LXRhc2sgPiBmb3JtID4gLnRhc2stcHJpb3JpdHktZmllbGQtZGl2LFxcbi5uZXctdGFzayA+IGZvcm0gPiAudGFzay1kYXRlLWZpZWxkLWRpdixcXG4ubmV3LXByb2plY3QgPiBmb3JtICAucHJvamVjdC1uYW1lLWZpZWxkLWRpdixcXG4ubmV3LXByb2plY3QgPiBmb3JtICAucHJvamVjdC1jb2xvci1maWVsZC1kaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ubmV3LXRhc2sgPiBmb3JtID4gLnRhc2stZGlhbG9nLW5hbWUsXFxuLm5ldy1wcm9qZWN0ID4gZm9ybSA+IC5wcm9qZWN0LWRpYWxvZy1uYW1lIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcblxcbi5uZXctdGFzayA+IGZvcm0gPiBidXR0b24sXFxuLm5ldy1wcm9qZWN0ID4gZm9ybSA+IGJ1dHRvbiB7XFxuICAgIG1hcmdpbi10b3A6IDI1cHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMC41cHggc29saWQgdmFyKC0tYm9yZGVyLWRhcmspO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2U7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1saWdodCk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm5ldy10YXNrID4gZm9ybSA+IGJ1dHRvbjpob3ZlcixcXG4ubmV3LXByb2plY3QgPiBmb3JtID4gYnV0dG9uOmhvdmVyIHtcXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG59XFxuXFxuLm5ldy10YXNrID4gZm9ybSA+IGJ1dHRvbjphY3RpdmUsXFxuLm5ldy1wcm9qZWN0ID4gZm9ybSA+IGJ1dHRvbjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZGFyayk7XFxufVxcblxcbi5uZXctdGFzayA+IGZvcm0gPiAuY2xvc2UtdGFzay1kaWFsb2csXFxuLm5ldy1wcm9qZWN0ID4gZm9ybSA+IC5jbG9zZS1wcm9qZWN0LWRpYWxvZyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDEwcHg7XFxuICAgIHRvcDogMTBweDtcXG59XFxuXFxuLm5ldy10YXNrID4gZm9ybSA+IC5jbG9zZS10YXNrLWRpYWxvZyBzcGFuLFxcbi5uZXctcHJvamVjdCA+IGZvcm0gPiAuY2xvc2UtcHJvamVjdC1kaWFsb2cgc3BhbiB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIG9wYWNpdHk6IDAuNztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNXMsIG9wYWNpdHkgMC4yNXM7XFxufVxcblxcbi5uZXctdGFzayA+IGZvcm0gPiAuY2xvc2UtdGFzay1kaWFsb2c6aG92ZXIgc3BhbixcXG4ubmV3LXByb2plY3QgPiBmb3JtID4gLmNsb3NlLXByb2plY3QtZGlhbG9nOmhvdmVyIHNwYW4ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgc2NhbGUoMS4xKTtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBEaWFsb2cgaW5wdXQgc3R5bGVzICovXFxuXFxuLm5ldy10YXNrID4gZm9ybSBpbnB1dCxcXG4ubmV3LXRhc2sgPiBmb3JtIHNlbGVjdCxcXG4ubmV3LXRhc2sgPiBmb3JtIHRleHRhcmVhLFxcbi5uZXctcHJvamVjdCA+IGZvcm0gaW5wdXQsXFxuLm5ldy1wcm9qZWN0ID4gZm9ybSBzZWxlY3QsXFxuLm5ldy1wcm9qZWN0ID4gZm9ybSB0ZXh0YXJlYSB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlcjogMC41cHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2U7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLm5ldy10YXNrID4gZm9ybSBpbnB1dDpob3ZlcixcXG4ubmV3LXRhc2sgPiBmb3JtIHNlbGVjdDpob3ZlcixcXG4ubmV3LXRhc2sgPiBmb3JtIHRleHRhcmVhOmhvdmVyLFxcbi5uZXctcHJvamVjdCA+IGZvcm0gaW5wdXQ6aG92ZXIsXFxuLm5ldy1wcm9qZWN0ID4gZm9ybSBzZWxlY3Q6aG92ZXIsXFxuLm5ldy1wcm9qZWN0ID4gZm9ybSB0ZXh0YXJlYTpob3ZlciB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlcjogMC41cHggc29saWQgYmxhY2s7XFxufVxcblxcbi5uZXctdGFzayA+IGZvcm0gaW5wdXQ6OnBsYWNlaG9sZGVyLFxcbi5uZXctdGFzayA+IGZvcm0gc2VsZWN0OjpwbGFjZWhvbGRlcixcXG4ubmV3LXRhc2sgPiBmb3JtIHRleHRhcmVhOjpwbGFjZWhvbGRlcixcXG4ubmV3LXByb2plY3QgPiBmb3JtIGlucHV0OjpwbGFjZWhvbGRlcixcXG4ubmV3LXByb2plY3QgPiBmb3JtIHNlbGVjdDo6cGxhY2Vob2xkZXIsXFxuLm5ldy1wcm9qZWN0ID4gZm9ybSB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLm5ldy10YXNrID4gZm9ybSB0ZXh0YXJlYSxcXG4ubmV3LXByb2plY3QgPiBmb3JtIHRleHRhcmVhIHtcXG4gICAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4ucHJvamVjdC1jb2xvci1maWVsZC1kaXYge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5uZXctcHJvamVjdCA+IGZvcm0gI3Byb2plY3QtY29sb3Ige1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiA4MHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm5ldy1wcm9qZWN0ID4gZm9ybSAuaW5wdXQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5cblxuLy8gUHJvamVjdCBtb2R1bGUgXG5jb25zdCBQcm9qZWN0TW9kdWxlID0gKGZ1bmN0aW9uKCkge1xuXG4gICAgLy8gUHJvamVjdHMgaW4gZGVmYXVsdCBjb25maWd1cmF0aW9uXG4gICAgbGV0IHByb2plY3RzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgIG5hbWU6ICdTcG9ydCcsXG4gICAgICAgICAgICBjb2xvcjogJyMwMEZGMDAnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogMixcbiAgICAgICAgICAgIG5hbWU6ICdNYXRoJyxcbiAgICAgICAgICAgIGNvbG9yOiAnI0ZGMDAwMCcsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgICAgbmFtZTogJ1Byb2dyYW1taW5nJyxcbiAgICAgICAgICAgIGNvbG9yOiAnIzAwMDBGRicsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiA0LFxuICAgICAgICAgICAgbmFtZTogJ0xlaXN1cmUnLFxuICAgICAgICAgICAgY29sb3I6ICcjRkYwMEZGJyxcbiAgICAgICAgfSxcbiAgICBdO1xuXG4gICAgbGV0IHByb2plY3RzQ291bnQgPSBwcm9qZWN0cy5sZW5ndGg7XG4gICAgXG4gICAgLy8gQWRkIG5ldyBwcm9qZWN0XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvamVjdChuYW1lLCBjb2xvcikge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0ge307XG4gICAgICAgIHByb2plY3RzQ291bnQgPSBwcm9qZWN0c0NvdW50ICsgMTtcbiAgICAgICAgcHJvamVjdC5pZCA9IHByb2plY3RzQ291bnQ7XG4gICAgICAgIHByb2plY3QubmFtZSA9IG5hbWU7XG4gICAgICAgIHByb2plY3QuY29sb3IgPSBjb2xvcjtcblxuICAgICAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuXG4gICAgICAgIHJldHVybiBwcm9qZWN0O1xuICAgIH1cblxuICAgIC8vIFJldHJpZXZlIGxpc3Qgb2YgcHJvamVjdHMgKG9iamVjdHMpXG4gICAgZnVuY3Rpb24gZ2V0UHJvamVjdE9iamVjdHMoKSB7XG4gICAgICAgIHJldHVybiBwcm9qZWN0cy5zbGljZSgpO1xuICAgIH1cblxuICAgIC8vIFJldHJpZXZlIGxpc3Qgb2YgcHJvamVjdCAodmFsdWVzKVxuICAgIGZ1bmN0aW9uIGdldFByb2plY3RWYWx1ZXMoKSB7XG4gICAgICAgIGxldCBwcm9qZWN0VmFsdWVzID0gW107XG4gICAgICAgIHByb2plY3RzLmZvckVhY2goKHApID0+IHtcbiAgICAgICAgICAgIHByb2plY3RWYWx1ZXMucHVzaChwLm5hbWUpO1xuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHByb2plY3RWYWx1ZXM7XG4gICAgfVxuXG4gICAgLy8gUmV0cmlldmUgdGhlIGlkIG9mIGEgcHJvamVjdCB0aGF0IG1hdGNoZXMgdGhlIHByb3ZpZGVkIG5hbWVcbiAgICBmdW5jdGlvbiBmaW5kSWRCeU5hbWUobmFtZSkge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdHMuZmluZChwcm9qZWN0ID0+IHByb2plY3QubmFtZSA9PT0gbmFtZSk7XG4gICAgICAgIHJldHVybiBwcm9qZWN0ID8gcHJvamVjdC5pZCA6IG51bGw7XG4gICAgfVxuXG4gICAgLy8gUmV0cmlldmUgdGhlIGNvbG9yIG9mIGEgcHJvamVjdCB0aGF0IG1hdGNoZXMgdGhlIHByb3ZpZGVkIG5hbWVcbiAgICBmdW5jdGlvbiBmaW5kQ29sb3JCeU5hbWUobmFtZSkge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdHMuZmluZChwcm9qZWN0ID0+IHByb2plY3QubmFtZSA9PT0gbmFtZSk7XG4gICAgICAgIHJldHVybiBwcm9qZWN0ID8gcHJvamVjdC5jb2xvciA6IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3JlYXRlUHJvamVjdCxcbiAgICAgICAgZ2V0UHJvamVjdE9iamVjdHMsXG4gICAgICAgIGdldFByb2plY3RWYWx1ZXMsXG4gICAgICAgIGZpbmRJZEJ5TmFtZSxcbiAgICAgICAgZmluZENvbG9yQnlOYW1lLFxuICAgIH1cbiAgICBcbn0pKCk7XG5cblxuLy8gVGFzayBtb2R1bGUgXG5jb25zdCBUYXNrTW9kdWxlID0gKGZ1bmN0aW9uKCkge1xuXG4gICAgbGV0IHRhc2tzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgIHByb2plY3RJZDogMSxcbiAgICAgICAgICAgIHByb2plY3ROYW1lOiAnU3BvcnQnLFxuICAgICAgICAgICAgcHJvamVjdENvbG9yOiAnIzAwRkYwMCcsXG4gICAgICAgICAgICB0aXRsZTogJ0NvbXBsZXRlIEV4ZXJjaXNlIDEnLFxuICAgICAgICAgICAgbm90ZXM6ICdSZW1lbWJlciB0byBmb2N1cyBvbiB0aGUga2V5IGNvbmNlcHRzJyxcbiAgICAgICAgICAgIHByaW9yaXR5OiAnSGlnaCcsXG4gICAgICAgICAgICBkYXRlOiAnMjAyMy0xMS0xNScsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgICAgcHJvamVjdElkOiAyLFxuICAgICAgICAgICAgcHJvamVjdE5hbWU6ICdNYXRoJyxcbiAgICAgICAgICAgIHByb2plY3RDb2xvcjogJyNGRjAwMDAnLFxuICAgICAgICAgICAgdGl0bGU6ICdTdHVkeSBBbGdlYnJhJyxcbiAgICAgICAgICAgIG5vdGVzOiAnUmV2aWV3IGNoYXB0ZXJzIDMgYW5kIDQgZm9yIHRoZSB1cGNvbWluZyB0ZXN0JyxcbiAgICAgICAgICAgIHByaW9yaXR5OiAnTWVkaXVtJyxcbiAgICAgICAgICAgIGRhdGU6ICcyMDIzLTExLTE3JyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDMsXG4gICAgICAgICAgICBwcm9qZWN0SWQ6IDMsXG4gICAgICAgICAgICBwcm9qZWN0TmFtZTogJ1Byb2dyYW1taW5nJyxcbiAgICAgICAgICAgIHByb2plY3RDb2xvcjogJyMwMDAwRkYnLFxuICAgICAgICAgICAgdGl0bGU6ICdDb2RlIFJldmlldyBmb3IgUHJvamVjdCBYJyxcbiAgICAgICAgICAgIG5vdGVzOiAnQ2hlY2sgZm9yIGNvZGUgcXVhbGl0eSBhbmQgcG90ZW50aWFsIG9wdGltaXphdGlvbnMnLFxuICAgICAgICAgICAgcHJpb3JpdHk6ICdIaWdoJyxcbiAgICAgICAgICAgIGRhdGU6ICcyMDIzLTExLTE4JyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDQsXG4gICAgICAgICAgICBwcm9qZWN0SWQ6IDQsXG4gICAgICAgICAgICBwcm9qZWN0TmFtZTogJ0xlaXN1cmUnLFxuICAgICAgICAgICAgcHJvamVjdENvbG9yOiAnI0ZGMDBGRicsXG4gICAgICAgICAgICB0aXRsZTogJ0J1eSBncm9jZXJpZXMnLFxuICAgICAgICAgICAgbm90ZXM6ICdNaWxrLCBlZ2dzLCBicmVhZCwgYW5kIGZydWl0cycsXG4gICAgICAgICAgICBwcmlvcml0eTogJ0xvdycsXG4gICAgICAgICAgICBkYXRlOiAnMjAyMy0xMS0yMCcsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiA1LFxuICAgICAgICAgICAgcHJvamVjdElkOiAxLFxuICAgICAgICAgICAgcHJvamVjdE5hbWU6ICdTcG9ydCcsXG4gICAgICAgICAgICBwcm9qZWN0Q29sb3I6ICcjMDBGRjAwJyxcbiAgICAgICAgICAgIHRpdGxlOiAnUmVhZCBcIlRoZSBHcmVhdCBHYXRzYnlcIicsXG4gICAgICAgICAgICBub3RlczogJ0NvbXBsZXRlIGNoYXB0ZXJzIDEtMyBieSB0aGUgZW5kIG9mIHRoZSB3ZWVrJyxcbiAgICAgICAgICAgIHByaW9yaXR5OiAnTWVkaXVtJyxcbiAgICAgICAgICAgIGRhdGU6ICcyMDIzLTExLTIyJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDYsXG4gICAgICAgICAgICBwcm9qZWN0SWQ6IDIsXG4gICAgICAgICAgICBwcm9qZWN0TmFtZTogJ01hdGgnLFxuICAgICAgICAgICAgcHJvamVjdENvbG9yOiAnI0ZGMDAwMCcsXG4gICAgICAgICAgICB0aXRsZTogJ1ByZXBhcmUgcHJlc2VudGF0aW9uIHNsaWRlcycsXG4gICAgICAgICAgICBub3RlczogJ0luY29ycG9yYXRlIGZlZWRiYWNrIGZyb20gdGVhbSBtZW1iZXJzJyxcbiAgICAgICAgICAgIHByaW9yaXR5OiAnSGlnaCcsXG4gICAgICAgICAgICBkYXRlOiAnMjAyMy0xMS0yNScsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiA3LFxuICAgICAgICAgICAgcHJvamVjdElkOiAzLFxuICAgICAgICAgICAgcHJvamVjdE5hbWU6ICdQcm9ncmFtbWluZycsXG4gICAgICAgICAgICBwcm9qZWN0Q29sb3I6ICcjMDAwMEZGJyxcbiAgICAgICAgICAgIHRpdGxlOiAnUHJhY3RpY2UgZ3VpdGFyJyxcbiAgICAgICAgICAgIG5vdGVzOiAnTGVhcm4gbmV3IGNob3JkcyBhbmQgcHJhY3RpY2Ugc2NhbGVzJyxcbiAgICAgICAgICAgIHByaW9yaXR5OiAnTWVkaXVtJyxcbiAgICAgICAgICAgIGRhdGU6ICcyMDIzLTExLTI4JyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDgsXG4gICAgICAgICAgICBwcm9qZWN0SWQ6IDQsXG4gICAgICAgICAgICBwcm9qZWN0TmFtZTogJ0xlaXN1cmUnLFxuICAgICAgICAgICAgcHJvamVjdENvbG9yOiAnI0ZGMDBGRicsXG4gICAgICAgICAgICB0aXRsZTogJ1dyaXRlIGRvY3VtZW50YXRpb24nLFxuICAgICAgICAgICAgbm90ZXM6ICdEb2N1bWVudCB0aGUgbmV3IEFQSSBlbmRwb2ludHMnLFxuICAgICAgICAgICAgcHJpb3JpdHk6ICdIaWdoJyxcbiAgICAgICAgICAgIGRhdGU6ICcyMDIzLTExLTMwJyxcbiAgICAgICAgfSxcbiAgICAgICAgXG5cbiAgICBdO1xuICAgIFxuICAgIGxldCB0YXNrc0NvdW50ID0gdGFza3MubGVuZ3RoO1xuXG4gICAgLy8gQWRkIG5ldyB0YXNrIG9iamVjdFxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRhc2socHJvamVjdE5hbWUsIHRpdGxlLCBub3RlcywgcHJpb3JpdHksIGRhdGUpIHtcbiAgICAgICAgY29uc3QgdGFzayA9IHt9O1xuICAgICAgICB0YXNrc0NvdW50ID0gdGFza3NDb3VudCArIDE7XG4gICAgICAgIHRhc2suaWQgPSB0YXNrc0NvdW50O1xuICAgICAgICB0YXNrLnByb2plY3RJZCA9IFByb2plY3RNb2R1bGUuZmluZElkQnlOYW1lKHByb2plY3ROYW1lKTtcbiAgICAgICAgdGFzay5wcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lO1xuICAgICAgICB0YXNrLnByb2plY3RDb2xvciA9IFByb2plY3RNb2R1bGUuZmluZENvbG9yQnlOYW1lKHByb2plY3ROYW1lKTtcbiAgICAgICAgdGFzay50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0YXNrLm5vdGVzID0gbm90ZXM7XG4gICAgICAgIHRhc2sucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGFzay5kYXRlID0gZGF0ZTtcbiAgXG4gICAgICAgIHRhc2tzLnB1c2godGFzayk7XG4gICAgICAgIHJldHVybiB0YXNrO1xuICAgIH1cblxuICAgIC8vIFJldHJpZXZlIHRhc2tzXG4gICAgZnVuY3Rpb24gZ2V0VGFza3MoKSB7XG4gICAgICAgIHJldHVybiB0YXNrcy5zbGljZSgpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGNyZWF0ZVRhc2ssXG4gICAgICAgIGdldFRhc2tzLFxuICAgIH1cbiAgICBcbn0pKCk7XG5cblxuLy8gRE9NIG1vZHVsZVxuY29uc3QgRE9NTW9kdWxlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVNYWluRGl2KCkge1xuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgICAgICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1haW5EaXYuY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuICAgICAgICBib2R5LmFwcGVuZChtYWluRGl2KTtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVEaWFsb2dzID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICAgICAgLy8gbmV3UHJvamVjdERpYWxvZ0hhbmRsZXIoKTtcbiAgICAgICAgLy8gbmV3VGFza0RpYWxvZ0hhbmRsZXIoKTtcblxuICAgICAgICBmdW5jdGlvbiBuZXdQcm9qZWN0RGlhbG9nSGFuZGxlcigpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1Byb2plY3REaWFsb2cgPSBjcmVhdGVQcm9qZWN0RGlhbG9nKCk7XG4gICAgICAgICAgICBjb25zdCBuZXdQcm9qZWN0RGlhbG9nRm9ybSA9IGNyZWF0ZVByb2plY3REaWFsb2dGb3JtKCk7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3REaWFsb2coKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3UHJvamVjdERpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpYWxvZycpO1xuICAgICAgICAgICAgICAgIG5ld1Byb2plY3REaWFsb2cuY2xhc3NMaXN0LmFkZCgnbmV3LXByb2plY3QnLCAnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgYm9keS5hcHBlbmQobmV3UHJvamVjdERpYWxvZyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld1Byb2plY3REaWFsb2c7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3REaWFsb2dGb3JtKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Byb2plY3REaWFsb2dGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgICAgICAgICAgIG5ld1Byb2plY3REaWFsb2cuYXBwZW5kKG5ld1Byb2plY3REaWFsb2dGb3JtKTtcbiAgICAgICAgICAgICAgICBuZXdQcm9qZWN0RGlhbG9nRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGlhbG9nLm5ldy1wcm9qZWN0ID4gZm9ybSBpbnB1dCNwcm9qZWN0LW5hbWUnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdENvbG9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGlhbG9nLm5ldy1wcm9qZWN0ID4gZm9ybSBpbnB1dCNwcm9qZWN0LWNvbG9yJyk7XG4gICAgICAgICAgICAgICAgICAgIFByb2plY3RNb2R1bGUuY3JlYXRlUHJvamVjdChwcm9qZWN0TmFtZS52YWx1ZSwgcHJvamVjdENvbG9yLnZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgRE9NTW9kdWxlLmNyZWF0ZUxlZnREaXYuY3JlYXRlUHJvamVjdHMoUHJvamVjdE1vZHVsZS5nZXRQcm9qZWN0T2JqZWN0cygpKTtcbiAgICAgICAgICAgICAgICAgICAgRE9NTW9kdWxlLmNyZWF0ZURpYWxvZ3MubmV3VGFza0RpYWxvZ0hhbmRsZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkaWFsb2dOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZGlhbG9nTmFtZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWRpYWxvZy1uYW1lJyk7XG4gICAgICAgICAgICAgICAgZGlhbG9nTmFtZS50ZXh0Q29udGVudCA9ICdOZXcgUHJvamVjdCc7XG4gICAgICAgICAgICAgICAgbmV3UHJvamVjdERpYWxvZ0Zvcm0uYXBwZW5kKGRpYWxvZ05hbWUpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgaW5wdXRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdpbnB1dC1jb250YWluZXInKTtcbiAgICAgICAgICAgICAgICBuZXdQcm9qZWN0RGlhbG9nRm9ybS5hcHBlbmQoaW5wdXRDb250YWluZXIpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgbmFtZUZpZWxkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgbmFtZUZpZWxkRGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtbmFtZS1maWVsZC1kaXYnKTtcbiAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lci5hcHBlbmQobmFtZUZpZWxkRGl2KTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IG5hbWVGaWVsZExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgICAgICBuYW1lRmllbGRMYWJlbC50ZXh0Q29udGVudCA9ICdOYW1lKic7XG4gICAgICAgICAgICAgICAgbmFtZUZpZWxkTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncHJvamVjdC1uYW1lJyk7XG4gICAgICAgICAgICAgICAgbmFtZUZpZWxkRGl2LmFwcGVuZChuYW1lRmllbGRMYWJlbCk7XG4gICAgXG4gICAgICAgICAgICAgICAgY29uc3QgbmFtZUZpZWxkSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgIG5hbWVGaWVsZElucHV0LnRleHRDb250ZW50ID0gJ05hbWUnO1xuICAgICAgICAgICAgICAgIG5hbWVGaWVsZElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgICAgICAgICAgbmFtZUZpZWxkSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0LW5hbWUnKTtcbiAgICAgICAgICAgICAgICBuYW1lRmllbGRJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgJ0F3ZXNvbWUgcHJvamVjdC4uLicpO1xuICAgICAgICAgICAgICAgIG5hbWVGaWVsZElucHV0LnNldEF0dHJpYnV0ZSgncmVxdWlyZWQnLCAncmVxdWlyZWQnKTtcbiAgICAgICAgICAgICAgICBuYW1lRmllbGREaXYuYXBwZW5kKG5hbWVGaWVsZElucHV0KTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbG9yRmllbGREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBjb2xvckZpZWxkRGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtY29sb3ItZmllbGQtZGl2Jyk7XG4gICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXIuYXBwZW5kKGNvbG9yRmllbGREaXYpO1xuICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbG9yRmllbGRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICAgICAgY29sb3JGaWVsZExhYmVsLnRleHRDb250ZW50ID0gJ0NvbG9yJztcbiAgICAgICAgICAgICAgICBjb2xvckZpZWxkTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncHJvamVjdC1jb2xvcicpO1xuICAgICAgICAgICAgICAgIGNvbG9yRmllbGREaXYuYXBwZW5kKGNvbG9yRmllbGRMYWJlbCk7XG4gICAgXG4gICAgICAgICAgICAgICAgY29uc3QgY29sb3JGaWVsZElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICBjb2xvckZpZWxkSW5wdXQudGV4dENvbnRlbnQgPSAnQ29sb3InO1xuICAgICAgICAgICAgICAgIGNvbG9yRmllbGRJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY29sb3InKTtcbiAgICAgICAgICAgICAgICBjb2xvckZpZWxkSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0LWNvbG9yJyk7XG4gICAgICAgICAgICAgICAgY29sb3JGaWVsZERpdi5hcHBlbmQoY29sb3JGaWVsZElucHV0KTtcbiAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBzdWJtaXRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgc3VibWl0UHJvamVjdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gICAgICAgICAgICAgICAgc3VibWl0UHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdTYXZlJztcbiAgICAgICAgICAgICAgICBuZXdQcm9qZWN0RGlhbG9nRm9ybS5hcHBlbmQoc3VibWl0UHJvamVjdEJ1dHRvbik7XG4gICAgXG4gICAgICAgICAgICAgICAgY29uc3QgY2xvc2VQcm9qZWN0RGlhbG9nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgY2xvc2VQcm9qZWN0RGlhbG9nRGl2LmNsYXNzTGlzdC5hZGQoJ2Nsb3NlLXByb2plY3QtZGlhbG9nJyk7XG4gICAgICAgICAgICAgICAgbmV3UHJvamVjdERpYWxvZ0Zvcm0uYXBwZW5kKGNsb3NlUHJvamVjdERpYWxvZ0Rpdik7XG4gICAgXG4gICAgICAgICAgICAgICAgY29uc3QgY2xvc2VQcm9qZWN0RGlhbG9nU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgICAgICBjbG9zZVByb2plY3REaWFsb2dTcGFuLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQnKTtcbiAgICAgICAgICAgICAgICBjbG9zZVByb2plY3REaWFsb2dTcGFuLnRleHRDb250ZW50ID0gJ2Nsb3NlJztcbiAgICAgICAgICAgICAgICBjbG9zZVByb2plY3REaWFsb2dEaXYuYXBwZW5kKGNsb3NlUHJvamVjdERpYWxvZ1NwYW4pO1xuXG4gICAgICAgICAgICAgICAgLy8gQWRkIGNsb3NlIGFuaW1hdGlvbiBvbiBTYXZlIGFuZCBDbG9zZVxuICAgICAgICAgICAgICAgIGhhbmRsZUNsb3NlQW5pbWF0aW9uKG5ld1Byb2plY3REaWFsb2dGb3JtLCBuZXdQcm9qZWN0RGlhbG9nLCAnc3VibWl0JywgbmV3UHJvamVjdERpYWxvZ0Zvcm0pO1xuICAgICAgICAgICAgICAgIGhhbmRsZUNsb3NlQW5pbWF0aW9uKGNsb3NlUHJvamVjdERpYWxvZ1NwYW4sIG5ld1Byb2plY3REaWFsb2csICdjbGljaycsIG5ld1Byb2plY3REaWFsb2dGb3JtKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBuZXdQcm9qZWN0RGlhbG9nRm9ybTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIG5ld1Rhc2tEaWFsb2dIYW5kbGVyKCkge1xuXG4gICAgICAgICAgICBjb25zdCBleGlzdGluZ1Rhc2tEaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRhc2snKTtcbiAgICAgICAgICAgIGlmIChleGlzdGluZ1Rhc2tEaWFsb2cpIHtcbiAgICAgICAgICAgICAgICBleGlzdGluZ1Rhc2tEaWFsb2cucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IG5ld1Rhc2tEaWFsb2cgPSBjcmVhdGVUYXNrRGlhbG9nKCk7XG4gICAgICAgICAgICBjb25zdCBuZXdUYXNrRGlhbG9nRm9ybSA9IGNyZWF0ZVRhc2tEaWFsb2dGb3JtKCk7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVRhc2tEaWFsb2coKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3VGFza0RpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpYWxvZycpO1xuICAgICAgICAgICAgICAgIG5ld1Rhc2tEaWFsb2cuY2xhc3NMaXN0LmFkZCgnbmV3LXRhc2snLCAnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgYm9keS5hcHBlbmQobmV3VGFza0RpYWxvZyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld1Rhc2tEaWFsb2c7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVRhc2tEaWFsb2dGb3JtKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nVGFza0RpYWxvZ0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRhc2sgPiBmb3JtJyk7XG4gICAgICAgICAgICAgICAgaWYgKGV4aXN0aW5nVGFza0RpYWxvZ0Zvcm0pIHtcbiAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdUYXNrRGlhbG9nRm9ybS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3VGFza0RpYWxvZ0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgICAgICAgICAgbmV3VGFza0RpYWxvZy5hcHBlbmQobmV3VGFza0RpYWxvZ0Zvcm0pO1xuICAgICAgICAgICAgICAgIG5ld1Rhc2tEaWFsb2dGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFza1Byb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaWFsb2cubmV3LXRhc2sgPiBmb3JtICN0YXNrLXByb2plY3QnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGlhbG9nLm5ldy10YXNrID4gZm9ybSAjdGFzay10aXRsZScpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXNrTm90ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaWFsb2cubmV3LXRhc2sgPiBmb3JtICN0YXNrLW5vdGVzJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpYWxvZy5uZXctdGFzayA+IGZvcm0gI3Rhc2stcHJpb3JpdHknKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFza0RhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaWFsb2cubmV3LXRhc2sgPiBmb3JtICN0YXNrLWRhdGUnKTtcbiAgICAgICAgICAgICAgICAgICAgVGFza01vZHVsZS5jcmVhdGVUYXNrKHRhc2tQcm9qZWN0LnZhbHVlLCB0YXNrVGl0bGUudmFsdWUsIHRhc2tOb3Rlcy52YWx1ZSwgdGFza1ByaW9yaXR5LnZhbHVlLCB0YXNrRGF0ZS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIERPTU1vZHVsZS5jcmVhdGVSaWdodERpdi5jcmVhdGVUYXNrcyhUYXNrTW9kdWxlLmdldFRhc2tzKCkpO1xuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICBjb25zdCBkaWFsb2dOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZGlhbG9nTmFtZS5jbGFzc0xpc3QuYWRkKCd0YXNrLWRpYWxvZy1uYW1lJyk7XG4gICAgICAgICAgICAgICAgZGlhbG9nTmFtZS50ZXh0Q29udGVudCA9ICdOZXcgVGFzayc7XG4gICAgICAgICAgICAgICAgbmV3VGFza0RpYWxvZ0Zvcm0uYXBwZW5kKGRpYWxvZ05hbWUpO1xuICAgIFxuXG4gICAgICAgICAgICAgICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRvZGF5KTtcbiAgICAgICAgICAgICAgICBjb25zdCBmb3JtYXR0ZURhdGUgPSAgdG9kYXkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3VGFza0RpYWxvZ0ZpZWxkc1RlbXBsYXRlID0gW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50X3R5cGU6ICdzZWxlY3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGl2X2NsYXNzOiAndGFzay1wcm9qZWN0LWZpZWxkLWRpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50X2lkOiAndGFzay1wcm9qZWN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0X3R5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnUHJvamVjdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q29udGVudDogJ1Byb2plY3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0X29wdGlvbnM6IFByb2plY3RNb2R1bGUuZ2V0UHJvamVjdFZhbHVlcygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yX3N0eWxlOiAncG9pbnRlcicsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRfdHlwZTogJ2lucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdl9jbGFzczogJ3Rhc2stdGl0bGUtZmllbGQtZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRfaWQ6ICd0YXNrLXRpdGxlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0X3R5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnVGl0bGUgKicsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q29udGVudDogJ1RpdGxlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfcGxhY2Vob2xkZXI6ICdSZWFkIGEgYm9vaycsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogJ3JlcXVpcmVkJyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudF90eXBlOiAndGV4dGFyZWEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGl2X2NsYXNzOiAndGFzay1ub3Rlcy1maWVsZC1kaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudF9pZDogJ3Rhc2stbm90ZXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRfdHlwZTogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ05vdGVzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDb250ZW50OiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfcGxhY2Vob2xkZXI6ICdBdCBsZWFzdCBhIHBhZ2UnLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50X3R5cGU6ICdzZWxlY3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGl2X2NsYXNzOiAndGFzay1wcmlvcml0eS1maWVsZC1kaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudF9pZDogJ3Rhc2stcHJpb3JpdHknLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRfdHlwZTogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1ByaW9yaXR5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDb250ZW50OiAnUHJpb3JpdHknLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0X29wdGlvbnM6IFsnSGlnaCcsICdOb3JtYWwnLCAnTG93J10sXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RfZGVmYXVsdDogJ05vcm1hbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3Jfc3R5bGU6ICdwb2ludGVyJyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudF90eXBlOiAnaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGl2X2NsYXNzOiAndGFzay1kYXRlLWZpZWxkLWRpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50X2lkOiAndGFzay1kYXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0X3R5cGU6ICdkYXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnRGF0ZSAqJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDb250ZW50OiAnRGF0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogJ3JlcXVpcmVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBmb3JtYXR0ZURhdGUsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXTtcbiAgICBcbiAgICAgICAgICAgICAgICBuZXdUYXNrRGlhbG9nRmllbGRzVGVtcGxhdGUuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmllbGREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgZmllbGREaXYuY2xhc3NMaXN0LmFkZChlbGVtZW50LmRpdl9jbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgIG5ld1Rhc2tEaWFsb2dGb3JtLmFwcGVuZChmaWVsZERpdik7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgICAgICAgICBmaWVsZExhYmVsLnRleHRDb250ZW50ID0gZWxlbWVudC5sYWJlbDtcbiAgICAgICAgICAgICAgICAgICAgZmllbGRMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGVsZW1lbnQuZWxlbWVudF9pZCk7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkRGl2LmFwcGVuZChmaWVsZExhYmVsKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmllbGRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudC5lbGVtZW50X3R5cGUpO1xuICAgICAgICAgICAgICAgICAgICBmaWVsZElucHV0LnRleHRDb250ZW50ID0gZWxlbWVudC50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgZmllbGRJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBlbGVtZW50LmlucHV0X3R5cGUpO1xuICAgICAgICAgICAgICAgICAgICBmaWVsZElucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBlbGVtZW50LmVsZW1lbnRfaWQpO1xuICAgICAgICAgICAgICAgICAgICBmaWVsZElucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCBlbGVtZW50LnRleHRfcGxhY2Vob2xkZXIpO1xuICAgICAgICAgICAgICAgICAgICBmaWVsZElucHV0LnNldEF0dHJpYnV0ZShlbGVtZW50LnJlcXVpcmVkLCBlbGVtZW50LnJlcXVpcmVkKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkSW5wdXQudmFsdWUgPSBlbGVtZW50LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkSW5wdXQuc3R5bGUuY3Vyc29yID0gZWxlbWVudC5jdXJzb3Jfc3R5bGU7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkRGl2LmFwcGVuZChmaWVsZElucHV0KTtcblxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmVsZW1lbnRfdHlwZSA9PT0gJ3NlbGVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2VsZWN0X29wdGlvbnMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gaXRlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZElucHV0LmFwcGVuZChvcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtID09PSBlbGVtZW50LnNlbGVjdF9kZWZhdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSlcbiAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBzdWJtaXRUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgc3VibWl0VGFza0J1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gICAgICAgICAgICAgICAgc3VibWl0VGFza0J1dHRvbi50ZXh0Q29udGVudCA9ICdTYXZlJztcbiAgICAgICAgICAgICAgICBuZXdUYXNrRGlhbG9nRm9ybS5hcHBlbmQoc3VibWl0VGFza0J1dHRvbik7XG4gICAgXG4gICAgICAgICAgICAgICAgY29uc3QgY2xvc2VUYXNrRGlhbG9nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgY2xvc2VUYXNrRGlhbG9nRGl2LmNsYXNzTGlzdC5hZGQoJ2Nsb3NlLXRhc2stZGlhbG9nJyk7XG4gICAgICAgICAgICAgICAgbmV3VGFza0RpYWxvZ0Zvcm0uYXBwZW5kKGNsb3NlVGFza0RpYWxvZ0Rpdik7XG4gICAgXG4gICAgICAgICAgICAgICAgY29uc3QgY2xvc2VUYXNrRGlhbG9nU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgICAgICBjbG9zZVRhc2tEaWFsb2dTcGFuLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQnKTtcbiAgICAgICAgICAgICAgICBjbG9zZVRhc2tEaWFsb2dTcGFuLnRleHRDb250ZW50ID0gJ2Nsb3NlJztcbiAgICAgICAgICAgICAgICBjbG9zZVRhc2tEaWFsb2dEaXYuYXBwZW5kKGNsb3NlVGFza0RpYWxvZ1NwYW4pO1xuICAgIFxuICAgICAgICAgICAgICAgIC8vIEFkZCBjbG9zZSBhbmltYXRpb24gb24gU2F2ZSBhbmQgQ2xvc2VcbiAgICAgICAgICAgICAgICBoYW5kbGVDbG9zZUFuaW1hdGlvbihuZXdUYXNrRGlhbG9nRm9ybSwgbmV3VGFza0RpYWxvZywgJ3N1Ym1pdCcsIG5ld1Rhc2tEaWFsb2dGb3JtKTtcbiAgICAgICAgICAgICAgICBoYW5kbGVDbG9zZUFuaW1hdGlvbihjbG9zZVRhc2tEaWFsb2dTcGFuLCBuZXdUYXNrRGlhbG9nLCAnY2xpY2snLCBuZXdUYXNrRGlhbG9nRm9ybSk7XG4gICAgICAgICAgICB9ICAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIENsb3NlIGFuaW1hdGlvbiBvbiBFU0NcbiAgICAgICAgZnVuY3Rpb24gYWRkRXNjRXZlbkxpc3RlbmVyKCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3BlbkRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpYWxvZ1tvcGVuXScpO1xuICAgICAgICAgICAgICAgICAgICBpZiAob3BlbkRpYWxvZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VEaWFsb2cob3BlbkRpYWxvZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG5cblxuICAgICAgICAvLyBDbG9zZSBhbmltYXRpb24gaGFuZGxlclxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVDbG9zZUFuaW1hdGlvbihldmVudEVsZW1lbnQsIGRpYWxvZywgZXZlbnRUeXBlLCBmb3JtKSB7XG4gICAgICAgICAgICBldmVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChldmVudCkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LW5hbWUnKTtcblxuICAgICAgICAgICAgICAgIHByb2plY3ROYW1lLnZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgLy8gZm9ybS5yZXNldCgpO1xuICAgICAgICAgICAgICAgIGNsb3NlRGlhbG9nKGRpYWxvZyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENsb3NlIGRpYWxvZ1xuICAgICAgICBmdW5jdGlvbiBjbG9zZURpYWxvZyhkaWFsb2cpIHtcbiAgICAgICAgICAgIGRpYWxvZy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIGRpYWxvZy5jbGFzc0xpc3QucmVtb3ZlKCdkaXNwbGF5ZWQnKTtcbiAgICAgICAgICAgIGRpYWxvZy5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgZnVuY3Rpb24gaGFuZGxlVHJhbnNpdGlvbkVuZCgpIHtcbiAgICAgICAgICAgICAgICBkaWFsb2cuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICBkaWFsb2cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGhhbmRsZVRyYW5zaXRpb25FbmQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZXdQcm9qZWN0RGlhbG9nSGFuZGxlcixcbiAgICAgICAgICAgIG5ld1Rhc2tEaWFsb2dIYW5kbGVyLFxuICAgICAgICAgICAgYWRkRXNjRXZlbkxpc3RlbmVyLFxuICAgICAgICB9XG5cbiAgICB9KSgpO1xuICAgIFxuXG4gICAgLy8gSGFuZGxlciBmb3IgbGVmdCBkaXZcbiAgICBjb25zdCBjcmVhdGVMZWZ0RGl2ID0gKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAvLyBDcmVhdGUgbGF5b3V0IHN0cnVjdHVyZVxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVTdHJ1Y3R1cmUgKCkge1xuICAgICAgICAgICAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG4gICAgICAgICAgICBjb25zdCBsZWZ0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBsZWZ0RGl2LmNsYXNzTGlzdC5hZGQoJ2xlZnQnKTtcbiAgICAgICAgICAgIG1haW5EaXYuYXBwZW5kKGxlZnREaXYpO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgbGVmdEZpcnN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBsZWZ0Rmlyc3REaXYuY2xhc3NMaXN0LmFkZCgnbGVmdC1maXJzdC1zZWN0aW9uJyk7XG4gICAgICAgICAgICBsZWZ0Rmlyc3REaXYuZGF0YXNldC5hY3RpdmUgPSAnVG9kYXknO1xuXG4gICAgICAgICAgICBsZWZ0RGl2LmFwcGVuZChsZWZ0Rmlyc3REaXYpO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgZmlyc3RTZWN0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBmaXJzdFNlY3Rpb25MYWJlbC50ZXh0Q29udGVudCA9ICdUYXNrcyc7XG4gICAgICAgICAgICBsZWZ0Rmlyc3REaXYuYXBwZW5kKGZpcnN0U2VjdGlvbkxhYmVsKTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0U2VjdGlvbkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICAgICAgZmlyc3RTZWN0aW9uTGlzdC5jbGFzc0xpc3QuYWRkKCd2aWV3cycpO1xuICAgICAgICAgICAgbGVmdEZpcnN0RGl2LmFwcGVuZChmaXJzdFNlY3Rpb25MaXN0KTtcblxuICAgICAgICAgICAgY29uc3QgZmlyc3RTZWN0aW9uTGluZUl0ZW1zID0gW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudF90eXBlOiAnbGknLFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50X2NsYXNzOiAndGFzay1maWx0ZXInLFxuICAgICAgICAgICAgICAgICAgICBkYXRhc2V0X2FjdGl2ZTogJ3RydWUnLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZF9lbGVtZW50czogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRfdHlwZTogJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudF9jbGFzczogJ2ltYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50X2lubmVySHRtbDogJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+Y2FsZW5kYXItdG9kYXktb3V0bGluZTwvdGl0bGU+PHBhdGggZD1cIk0xOSAzSDE4VjFIMTZWM0g4VjFINlYzSDVDMy45IDMgMyAzLjg5IDMgNVYxOUMzIDIwLjExIDMuOSAyMSA1IDIxSDE5QzIwLjExIDIxIDIxIDIwLjExIDIxIDE5VjVDMjEgMy44OSAyMC4xMSAzIDE5IDNNMTkgMTlINVY5SDE5VjE5TTE5IDdINVY1SDE5TTcgMTFIMTJWMTZIN1wiIC8+PC9zdmc+JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudF90eXBlOiAncCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudF90ZXh0Q29udGVudDogJ1RvZGF5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50X3R5cGU6ICdsaScsXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRfY2xhc3M6ICd0YXNrLWZpbHRlcicsXG4gICAgICAgICAgICAgICAgICAgIGRhdGFzZXRfYWN0aXZlOiAnZmFsc2UnLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZF9lbGVtZW50czogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRfdHlwZTogJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudF9jbGFzczogJ2ltYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50X2lubmVySHRtbDogJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+Y2FsZW5kYXItc3RhcnQtb3V0bGluZTwvdGl0bGU+PHBhdGggZD1cIk0xMyAxOEw5IDE0VjE3SDRWMTRIMlYyMkg0VjE5SDlWMjJMMTMgMThNMTkgM0gxOFYxSDE2VjNIOFYxSDZWM0g1QzMuOSAzIDMgMy45IDMgNVYxMkg1VjlIMTlWMTlIMTQuOEwxMi44IDIxSDE5QzIwLjEgMjEgMjEgMjAuMSAyMSAxOVY1QzIxIDMuOSAyMC4xIDMgMTkgM001IDdWNUgxOVY3SDVaXCIgLz48L3N2Zz4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50X3R5cGU6ICdwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50X3RleHRDb250ZW50OiAnVG9tb3Jyb3cnLFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRfdHlwZTogJ2xpJyxcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudF9jbGFzczogJ3Rhc2stZmlsdGVyJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YXNldF9hY3RpdmU6ICdmYWxzZScsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkX2VsZW1lbnRzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudF90eXBlOiAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50X2NsYXNzOiAnaW1hZ2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRfaW5uZXJIdG1sOiAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT5jYWxlbmRhci1tb250aC1vdXRsaW5lPC90aXRsZT48cGF0aCBkPVwiTTcgMTFIOVYxM0g3VjExTTIxIDVWMTlDMjEgMjAuMTEgMjAuMTEgMjEgMTkgMjFINUMzLjg5IDIxIDMgMjAuMSAzIDE5VjVDMyAzLjkgMy45IDMgNSAzSDZWMUg4VjNIMTZWMUgxOFYzSDE5QzIwLjExIDMgMjEgMy45IDIxIDVNNSA3SDE5VjVINVY3TTE5IDE5VjlINVYxOUgxOU0xNSAxM1YxMUgxN1YxM0gxNU0xMSAxM1YxMUgxM1YxM0gxMU03IDE1SDlWMTdIN1YxNU0xNSAxN1YxNUgxN1YxN0gxNU0xMSAxN1YxNUgxM1YxN0gxMVpcIiAvPjwvc3ZnPicsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRfdHlwZTogJ3AnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRfdGV4dENvbnRlbnQ6ICdBbGwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBmaXJzdFNlY3Rpb25MaW5lSXRlbXMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBsaW5lSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudC5lbGVtZW50X3R5cGUpO1xuICAgICAgICAgICAgICAgIGxpbmVJdGVtLmNsYXNzTGlzdC5hZGQoZWxlbWVudC5lbGVtZW50X2NsYXNzKTtcbiAgICAgICAgICAgICAgICBsaW5lSXRlbS5kYXRhc2V0LmFjdGl2ZSA9IGVsZW1lbnQuZGF0YXNldF9hY3RpdmU7XG4gICAgICAgICAgICAgICAgZmlyc3RTZWN0aW9uTGlzdC5hcHBlbmQobGluZUl0ZW0pO1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmNoaWxkX2VsZW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2hpbGRfZWxlbWVudHMuZm9yRWFjaChjaGlsZF9lbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVJdGVtQ2hpbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGNoaWxkX2VsZW1lbnQuZWxlbWVudF90eXBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVJdGVtQ2hpbGQuY2xhc3NMaXN0LmFkZChjaGlsZF9lbGVtZW50LmVsZW1lbnRfY2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkX2VsZW1lbnQuZWxlbWVudF9pbm5lckh0bWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lSXRlbUNoaWxkLmlubmVySFRNTCA9IGAke2NoaWxkX2VsZW1lbnQuZWxlbWVudF9pbm5lckh0bWx9YDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZF9lbGVtZW50LmVsZW1lbnRfdGV4dENvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lSXRlbUNoaWxkLnRleHRDb250ZW50ID0gY2hpbGRfZWxlbWVudC5lbGVtZW50X3RleHRDb250ZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZUl0ZW0uYXBwZW5kKGxpbmVJdGVtQ2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIFxuXG4gICAgICAgICAgICBjb25zdCBhbmltYXRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGFuaW1hdGlvbkRpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLWFuaW1hdGlvbicsICdzdGFydC10b2RheScpO1xuICAgICAgICAgICAgZmlyc3RTZWN0aW9uTGlzdC5hcHBlbmQoYW5pbWF0aW9uRGl2KTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IGxlZnRTZWNvbmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGxlZnRTZWNvbmREaXYuY2xhc3NMaXN0LmFkZCgnbGVmdC1zZWNvbmQtc2VjdGlvbicpO1xuICAgICAgICAgICAgbGVmdERpdi5hcHBlbmQobGVmdFNlY29uZERpdik7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBzZWNvbmRTZWN0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBzZWNvbmRTZWN0aW9uTGFiZWwudGV4dENvbnRlbnQgPSAnUHJvamVjdHMnO1xuICAgICAgICAgICAgbGVmdFNlY29uZERpdi5hcHBlbmQoc2Vjb25kU2VjdGlvbkxhYmVsKTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IHNlY29uZFNlY3Rpb25MaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgICAgIHNlY29uZFNlY3Rpb25MaXN0LmNsYXNzTGlzdC5hZGQoJ3NlY29uZC1zZWN0aW9uLWxpc3QnKTtcbiAgICAgICAgICAgIGxlZnRTZWNvbmREaXYuYXBwZW5kKHNlY29uZFNlY3Rpb25MaXN0KTtcblxuICAgICAgICAgICAgLy8gVXBkYXRlIGRhdGEtYWN0aXZlIHByb3BlcnR5IG9uIC50YXNrLWZpbGVyIGFuZCBvbiBwYXJlbnQgLmxlZnQtZmlyc3Qtc2VjdGlvblxuICAgICAgICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0YXNrLWZpbHRlcicpKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgaXRlbS5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZWZ0Rmlyc3REaXYuZGF0YXNldC5hY3RpdmUgPSBpdGVtLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgICAgICBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Rhc2stZmlsdGVyJykpLmZvckVhY2goKGl0ZW0yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbSA9PT0gaXRlbTIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtMi5kYXRhc2V0LmFjdGl2ZSA9ICd0cnVlJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0yLmRhdGFzZXQuYWN0aXZlID0gJ2ZhbHNlJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICB9XG5cbiAgICAgICAgLy8gUmVuZGVyIHByb2plY3RzIGluIC5zZWNvbmQtc2VjdGlvbi1saXN0XG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3RzKHByb2plY3RzKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TGluZUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2plY3QnKTtcbiAgICAgICAgICAgIGlmIChwcm9qZWN0TGluZUl0ZW1zKSB7XG4gICAgICAgICAgICAgICAgcHJvamVjdExpbmVJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHNlY29uZFNlY3Rpb25MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY29uZC1zZWN0aW9uLWxpc3QnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0TGluZUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgICAgIHByb2plY3RMaW5lSXRlbS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XG4gICAgICAgICAgICAgICAgc2Vjb25kU2VjdGlvbkxpc3QuYXBwZW5kKHByb2plY3RMaW5lSXRlbSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjaXJjbGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBjaXJjbGUuY2xhc3NMaXN0LmFkZCgnY2lyY2xlJyk7XG4gICAgICAgICAgICAgICAgY2lyY2xlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGVsZW1lbnQuY29sb3I7XG4gICAgICAgICAgICAgICAgcHJvamVjdExpbmVJdGVtLmFwcGVuZChjaXJjbGUpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RMaW5lSXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0TGluZUl0ZW1OYW1lLnRleHRDb250ZW50ID0gZWxlbWVudC5uYW1lO1xuICAgICAgICAgICAgICAgIHByb2plY3RMaW5lSXRlbS5hcHBlbmQocHJvamVjdExpbmVJdGVtTmFtZSk7XG5cbiAgICAgICAgICAgICAgICBcblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY3JlYXRlU3RydWN0dXJlLFxuICAgICAgICAgICAgY3JlYXRlUHJvamVjdHMsXG4gICAgICAgIH1cbiAgICB9KSgpO1xuXG4gICAgLy8gSGFuZGxlciBmb3IgcmlnaHQgZGl2XG4gICAgY29uc3QgY3JlYXRlUmlnaHREaXYgPSAoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIC8vIENyZWF0ZSBsYXlvdXQgc3RydWN0dXJlXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVN0cnVjdHVyZSgpIHtcbiAgICAgICAgICAgIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuICAgICAgICAgICAgY29uc3QgcmlnaHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHJpZ2h0RGl2LmNsYXNzTGlzdC5hZGQoJ3JpZ2h0Jyk7XG4gICAgICAgICAgICBtYWluRGl2LmFwcGVuZChyaWdodERpdik7XG4gICAgXG4gICAgICAgICAgICBjb25zdCByaWdodEZpcnN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICByaWdodEZpcnN0RGl2LmNsYXNzTGlzdC5hZGQoJ3JpZ2h0LWZpcnN0LXNlY3Rpb24nKTtcbiAgICAgICAgICAgIHJpZ2h0RGl2LmFwcGVuZChyaWdodEZpcnN0RGl2KTtcbiAgICAgICAgfVxuXG4gICAgICAgICAvLyBSZW5kZXIgdGFza3NcbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlVGFza3ModGFza3MpIHtcblxuICAgICAgICAgICAgY29uc3QgdGFza0xpbmVJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrJyk7XG4gICAgICAgICAgICBpZiAodGFza0xpbmVJdGVtcykge1xuICAgICAgICAgICAgICAgIHRhc2tMaW5lSXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRhc2tzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmlnaHRGaXJzdFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmlnaHQtZmlyc3Qtc2VjdGlvbicpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tMaW5lSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHRhc2tMaW5lSXRlbS5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XG4gICAgICAgICAgICAgICAgcmlnaHRGaXJzdFNlY3Rpb24uYXBwZW5kKHRhc2tMaW5lSXRlbSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrRmllbGRzVGVtcGxhdGUgPSBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdl9jbGFzczogJ3Rhc2stcHJvamVjdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZF9lbGVtZW50czogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGl2X2NsYXNzOiAndGFzay1wcm9qZWN0LWNvbG9yJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGVsZW1lbnQucHJvamVjdENvbG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXZfY2xhc3M6ICd0YXNrLXByb2plY3QtZmllbGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q29udGVudDogZWxlbWVudC5wcm9qZWN0TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXZfY2xhc3M6ICd0YXNrLXRpdGxlLWZpZWxkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDb250ZW50OiBlbGVtZW50LnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXZfY2xhc3M6ICd0YXNrLW5vdGVzLWZpZWxkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDb250ZW50OiBlbGVtZW50Lm5vdGVzLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXZfY2xhc3M6ICd0YXNrLXByaW9yaXR5LWZpZWxkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDb250ZW50OiBlbGVtZW50LnByaW9yaXR5LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXZfY2xhc3M6ICd0YXNrLWRhdGUtZmllbGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENvbnRlbnQ6IGVsZW1lbnQuZGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICAgICAgdGFza0ZpZWxkc1RlbXBsYXRlLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXNrRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgdGFza0ZpZWxkLmNsYXNzTGlzdC5hZGQoZmllbGQuZGl2X2NsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgdGFza0ZpZWxkLnRleHRDb250ZW50ID0gZmllbGQudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tGaWVsZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBmaWVsZC5jb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgdGFza0xpbmVJdGVtLmFwcGVuZCh0YXNrRmllbGQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGQuY2hpbGRfZWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLmNoaWxkX2VsZW1lbnRzLmZvckVhY2goY2hpbGRfZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hpbGRfZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRfZGl2LmNsYXNzTGlzdC5hZGQoY2hpbGRfZWxlbWVudC5kaXZfY2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkX2Rpdi50ZXh0Q29udGVudCA9IGNoaWxkX2VsZW1lbnQudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRfZGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNoaWxkX2VsZW1lbnQuY29sb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFza0ZpZWxkLmFwcGVuZChjaGlsZF9kaXYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNyZWF0ZVN0cnVjdHVyZSxcbiAgICAgICAgICAgIGNyZWF0ZVRhc2tzLFxuICAgICAgICB9XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IGNyZWF0ZUZvb3RlckRpdiA9IChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlU3RydWN0dXJlKCkge1xuICAgICAgICAgICAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG4gICAgICAgICAgICBjb25zdCBmb290ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGZvb3RlckRpdi5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcbiAgICAgICAgICAgIG1haW5EaXYuYXBwZW5kKGZvb3RlckRpdik7XG5cbiAgICAgICAgICAgIC8vIGNvbnN0IGZvb3RlckxlZnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIC8vIGZvb3RlckxlZnREaXYuY2xhc3NMaXN0LmFkZCgnZm9vdGVyLWxlZnQnKTtcbiAgICAgICAgICAgIC8vIGZvb3RlckRpdi5hcHBlbmQoZm9vdGVyTGVmdERpdik7XG5cbiAgICAgICAgICAgIGNvbnN0IGZvb3RlclJpZ2h0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBmb290ZXJSaWdodERpdi5jbGFzc0xpc3QuYWRkKCdmb290ZXItcmlnaHQnKTtcbiAgICAgICAgICAgIGZvb3RlckRpdi5hcHBlbmQoZm9vdGVyUmlnaHREaXYpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlQnV0dG9ucygpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgbGVmdFNlY29uZFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGVmdC1zZWNvbmQtc2VjdGlvbicpO1xuICAgICAgICAgICAgY29uc3QgZm9vdGVyUmlnaHREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyLXJpZ2h0Jyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNyZWF0ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGNyZWF0ZVByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnY3JlYXRlLXByb2plY3QnKTtcbiAgICAgICAgICAgIGNyZWF0ZVByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSAnQ3JlYXRlIFByb2plY3QnO1xuICAgICAgICAgICAgbGVmdFNlY29uZFNlY3Rpb24uYXBwZW5kKGNyZWF0ZVByb2plY3RCdXR0b24pO1xuICAgICAgICAgICAgY3JlYXRlUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdQcm9qZWN0RGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1wcm9qZWN0Jyk7XG4gICAgICAgICAgICAgICAgbmV3UHJvamVjdERpYWxvZy5zaG93TW9kYWwoKTtcbiAgICAgICAgICAgICAgICBuZXdQcm9qZWN0RGlhbG9nLmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXllZCcpO1xuICAgICAgICAgICAgICAgIG5ld1Byb2plY3REaWFsb2cuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBjb25zdCBjcmVhdGVUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBjcmVhdGVUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZS10YXNrJyk7XG4gICAgICAgICAgICBjcmVhdGVUYXNrQnV0dG9uLnRleHRDb250ZW50ID0gJ0NyZWF0ZSBUYXNrJztcbiAgICAgICAgICAgIGZvb3RlclJpZ2h0RGl2LmFwcGVuZChjcmVhdGVUYXNrQnV0dG9uKTtcblxuICAgICAgICAgICAgY3JlYXRlVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdUYXNrRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10YXNrJyk7XG4gICAgICAgICAgICAgICAgbmV3VGFza0RpYWxvZy5zaG93TW9kYWwoKTtcbiAgICAgICAgICAgICAgICBuZXdUYXNrRGlhbG9nLmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXllZCcpO1xuICAgICAgICAgICAgICAgIG5ld1Rhc2tEaWFsb2cuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNyZWF0ZVN0cnVjdHVyZSxcbiAgICAgICAgICAgIGNyZWF0ZUJ1dHRvbnMsXG4gICAgICAgIH1cbiAgICB9KSgpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3JlYXRlTWFpbkRpdixcbiAgICAgICAgY3JlYXRlRGlhbG9ncyxcbiAgICAgICAgY3JlYXRlTGVmdERpdixcbiAgICAgICAgY3JlYXRlUmlnaHREaXYsXG4gICAgICAgIGNyZWF0ZUZvb3RlckRpdixcbiAgICB9XG59KSgpO1xuXG5cbkRPTU1vZHVsZS5jcmVhdGVNYWluRGl2KCk7XG5ET01Nb2R1bGUuY3JlYXRlRGlhbG9ncy5uZXdQcm9qZWN0RGlhbG9nSGFuZGxlcigpO1xuRE9NTW9kdWxlLmNyZWF0ZURpYWxvZ3MubmV3VGFza0RpYWxvZ0hhbmRsZXIoKTtcbkRPTU1vZHVsZS5jcmVhdGVEaWFsb2dzLmFkZEVzY0V2ZW5MaXN0ZW5lcigpO1xuRE9NTW9kdWxlLmNyZWF0ZUxlZnREaXYuY3JlYXRlU3RydWN0dXJlKCk7XG5ET01Nb2R1bGUuY3JlYXRlTGVmdERpdi5jcmVhdGVQcm9qZWN0cyhQcm9qZWN0TW9kdWxlLmdldFByb2plY3RPYmplY3RzKCkpO1xuRE9NTW9kdWxlLmNyZWF0ZVJpZ2h0RGl2LmNyZWF0ZVN0cnVjdHVyZSgpO1xuRE9NTW9kdWxlLmNyZWF0ZVJpZ2h0RGl2LmNyZWF0ZVRhc2tzKFRhc2tNb2R1bGUuZ2V0VGFza3MoKSk7XG5ET01Nb2R1bGUuY3JlYXRlRm9vdGVyRGl2LmNyZWF0ZVN0cnVjdHVyZSgpO1xuRE9NTW9kdWxlLmNyZWF0ZUZvb3RlckRpdi5jcmVhdGVCdXR0b25zKCk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbihldmVudCkge1xuICAgIGlmIChldmVudC5rZXkgPT09IFwiNVwiKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFByb2plY3RNb2R1bGUuZ2V0UHJvamVjdE9iamVjdHMoKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFRhc2tNb2R1bGUuZ2V0VGFza3MoKSk7XG4gICAgfVxufSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=