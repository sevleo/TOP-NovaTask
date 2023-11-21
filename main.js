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

    /* Button colors */
    --button-hover: #ba181b28; /*used*/
    --button-active: #ba181b5b; /*used*/
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
    /* border-top: 1px solid var(--border-color); */
    position: fixed;
    bottom: 0;
    width: 100%;
    left: 300px;
    box-shadow: 0px -50px 40px -20px var(--background-light);
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
    opacity: 1;
    /* max-width: 500px; */
    transition: all 175ms ease-in;
}

.right-first-section > .task.hidden {
    opacity: 0;
}

.right-first-section > .task > div {
    opacity: 1;
    transition: all 175ms ease-in;
}

.right-first-section > .task > div.hidden {
    opacity: 0;
}

.task-project-color {
    height: 10px;
    width: 10px;
    border-radius: 50%;
    border: 0.5px solid var(--text-muted);
}




/* Left div layout */

.left > .left-first-section {
    margin-top: 40px;
    overflow: auto;
    flex: 0 0 200px;
    /* margin-left: 10px; */
}

.left > .left-second-section {
    margin-top: 40px;
    overflow: auto;
    flex: 1 0 200px;
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

.left > .left-first-section ul,
.left > .left-second-section ul {
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

.left > .left-second-section li {
    cursor: pointer;
}

.left > .left-first-section li > .image {
    height: 20px;
    width: 20px;

}


/* Slider on views */

.left > .left-first-section .task-animation,
.left > .left-second-section li[data-active='true']~.task-animation {
    position: absolute;
    /* top: 0; */
    height: 50px;
    border-left: 6px solid var(--accent-light);
    z-index: 0;
    transition: all 0.3s ease;
    opacity: 0;
}


.views > li:nth-child(1)[data-active='true']~.task-animation {
    width: 100%;
    top: 0;
    opacity: 1;
}

.views > li:nth-child(2)[data-active='true']~.task-animation {
    width: 100%;
    top: 50px;
    opacity: 1;
}

.views > li:nth-child(3)[data-active='true']~.task-animation {
    width: 100%;
    top: 100px;
    opacity: 1;
}


/* Views styles */

.left > .left-first-section li[data-active='false']:hover,
.left > .left-second-section li:hover {
    background-color: #ba181b28;
}

.left > .left-first-section li[data-active='true'] > div > svg {
    fill: var(--accent-color);
}

.left > .left-first-section li[data-active='true'] > p {
    color: var(--accent-color);
}

.left > .left-second-section li.font-accent > div {
    color: var(--accent-color);
}

.left > .left-first-section li[data-active='false']:active,
.left > .left-second-section li:active {
    background-color: #ba181b5b;
}


/* Slider on projects */

.second-section-list > li:nth-child(1)[data-active='true']~.task-animation {
    /* width: 100%; */
    top: 0;
    opacity: 1;
}

.second-section-list > li:nth-child(2)[data-active='true']~.task-animation {
    /* width: 100%; */
    top: 50px;
    opacity: 1;
}

.second-section-list > li:nth-child(3)[data-active='true']~.task-animation {
    /* width: 100%; */
    top: 100px;
    opacity: 1;
}

.second-section-list > li:nth-child(4)[data-active='true']~.task-animation {
    /* width: 100%; */
    top: 150px;
    opacity: 1;
}

.second-section-list > li:nth-child(5)[data-active='true']~.task-animation {
    /* width: 100%; */
    top: 200px;
    opacity: 1;
}

.second-section-list > li:nth-child(6)[data-active='true']~.task-animation {
    /* width: 100%; */
    top: 250px;
    opacity: 1;
}

.second-section-list > li:nth-child(7)[data-active='true']~.task-animation {
    /* width: 100%; */
    top: 300px;
    opacity: 1;
}

.second-section-list > li:nth-child(8)[data-active='true']~.task-animation {
    /* width: 100%; */
    top: 350px;
    opacity: 1;
}

.second-section-list > li:nth-child(9)[data-active='true']~.task-animation {
    /* width: 100%; */
    top: 400px;
    opacity: 1;
}

.second-section-list > li:nth-child(10)[data-active='true']~.task-animation {
    /* width: 100%; */
    top: 450px;
    opacity: 1;
}

.second-section-list > li:nth-child(11)[data-active='true']~.task-animation {
    /* width: 100%; */
    top: 500px;
    opacity: 1;
}

.second-section-list > li:nth-child(12)[data-active='true']~.task-animation {
    /* width: 100%; */
    top: 550px;
    opacity: 1;
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
    padding-left: 30px;
    list-style: none;
    height: 50px;
    display: flex;
    align-items: center;
    gap: 10px;
}

.left > .left-second-section .create-project {
    /* margin-left: 50px; */
    margin-top: 30px;
    padding-left: 30px;
    height: 50px;
    display: flex;
    width: 100%;
    align-items: center;
    gap: 10px;
    /* justify-content: center; */
    cursor: pointer;
}

.left > .left-second-section .create-project div {
    /* font-style: italic; */
    font-size: 20px;
}

.left > .left-second-section .create-project:hover {
    background-color: #ba181b28;
}

.left > .left-second-section .create-project:active {
    background-color: #ba181b5b
}

.left > .left-second-section .create-project > div:first-child{
    height: 20px;
    width: 20px;
}


/* Footer add new task button */

.footer > .footer-right > .create-task {
    height: 100%;
    width: calc(100% - 300px);
    display: flex;
    align-items: center;
    gap: 10px;
    cursor: pointer;
    justify-content: center;
}

.footer > .footer-right > .create-task > .create-task-container {
    width: 150px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 10px;
    border: 0.5px solid var(--border-dark);
    box-shadow: 0px 0px 5px 2px var(--border-color);
    transition: all 0.1s ease-in-out;
}

.footer > .footer-right > .create-task > .create-task-container div:nth-child(2) {
    font-size: 20px;
}

.footer > .footer-right > .create-task > .create-task-container > div:first-child {
    height: 20px;
    width: 20px;
}

.footer > .footer-right > .create-task > .create-task-container:hover {
    background-color: var(--button-hover);
    transform: scale(1.1);

}

.footer > .footer-right > .create-task > .create-task-container:active {
    background-color: var(--button-active)
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
}


.icon {
    width: 20px;
    height: 20px;
    /* fill: red; */
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');\n@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100&family=Lato:wght@300&family=Nunito:ital,wght@0,200;0,300;0,400;0,500;1,200;1,300;1,400;1,500&family=Roboto:wght@100&family=Rubik:wght@300&display=swap');\n\n:root {\n    /* Primary colors */\n    --primary-color: #3498db;\n    --primary-dark: #2980b9;\n    --primary-light: #87CEFA;\n\n    /* Secondary colors */\n    --secondary-color: #2ecc71; /*used*/\n    --secondary-dark: #27ae60; /*used*/\n    --secondary-light: #c8e6c9; /*used*/\n\n    /* Accent colors */\n    --accent-color: #BA181B;\n    --accent-dark: #A4161A;\n    --accent-light: #E5383B; /*used*/\n    --accent-darker: #660708;\n\n    /* Background colors */\n    --background-color: #F5EBE0; /*used*/\n    --background-dark: #bdc3c7;\n    --background-light: #EDEDE9; /*used*/\n\n    /* Text colors */\n    --text-color: #333; /*used*/\n    --text-light: #fff;\n    --text-muted: #888; /*used*/\n\n    /* Border colors */\n    --border-color: #D6CCC2; /*used*/\n    --border-dark: #999; /*used*/\n    --border-light: #eee;\n\n    /* Button colors */\n    --button-hover: #ba181b28; /*used*/\n    --button-active: #ba181b5b; /*used*/\n}\n\n\n::backdrop {\n    background-color: #00000088;\n    backdrop-filter: blur(3px);\n}\n\n.material-symbols-outlined {\n    font-variation-settings:\n    'FILL' 0,\n    'wght' 400,\n    'GRAD' 0,\n    'opsz' 24\n}\n\n\n/* General layout */\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    color: var(--text-color);\n    font-family: 'Nunito', sans-serif;\n    font-weight: 300;\n}\n\nbody {\n    background-color: var(--background-light);\n    height: 100vh;\n    width: 100vw;\n}\n\n.main {\n    height: 100%;\n    width: 100%;\n    display: flex;\n}\n\n.main > .left {\n    border-right: 1px solid var(--border-color);\n    border-bottom: 1px solid var(--border-color);\n    background-color: var(--background-color);\n    flex: 0 0 300px;\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n    /* height: calc(100% - 100px); */\n    height: 100%;\n    overflow: auto;\n}\n\n.main > .right {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n    height: calc(100% - 100px);\n}\n\n.main > .footer {\n    display: flex;\n    height: 100px;\n    /* border-top: 1px solid var(--border-color); */\n    position: fixed;\n    bottom: 0;\n    width: 100%;\n    left: 300px;\n    box-shadow: 0px -50px 40px -20px var(--background-light);\n}\n\n.main > .footer > .footer-left {\n    flex: 0 0 300px;\n    background-color: var(--background-color);\n    border-right: 1px solid var(--border-color);\n}\n\n.main > .footer > .footer-right {\n    flex: 1;\n    background-color: var(--background-light);\n}\n\n.right-first-section {\n    padding: 50px 10px 50px 10px;\n    height: 100%;\n    width: 100%;\n    overflow: auto;\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n    align-items: center;\n}\n\n.right-first-section > .task {\n    border: 1px solid var(--border-color);\n    border-radius: 30px;\n    padding: 20px;\n    flex: 1;\n    width: clamp(200px, 60%, 800px);\n    opacity: 1;\n    /* max-width: 500px; */\n    transition: all 175ms ease-in;\n}\n\n.right-first-section > .task.hidden {\n    opacity: 0;\n}\n\n.right-first-section > .task > div {\n    opacity: 1;\n    transition: all 175ms ease-in;\n}\n\n.right-first-section > .task > div.hidden {\n    opacity: 0;\n}\n\n.task-project-color {\n    height: 10px;\n    width: 10px;\n    border-radius: 50%;\n    border: 0.5px solid var(--text-muted);\n}\n\n\n\n\n/* Left div layout */\n\n.left > .left-first-section {\n    margin-top: 40px;\n    overflow: auto;\n    flex: 0 0 200px;\n    /* margin-left: 10px; */\n}\n\n.left > .left-second-section {\n    margin-top: 40px;\n    overflow: auto;\n    flex: 1 0 200px;\n    /* margin-left: 10px; */\n}\n\n\n\n.left > .left-first-section > p {\n    padding-left: 20px;\n    font-style: italic;\n    font-weight: 200;\n    height: 50px;\n    display: flex;\n    align-items: center;\n}\n\n.left > .left-first-section ul,\n.left > .left-second-section ul {\n    position: relative;\n}\n\n.left > .left-first-section li {\n    padding-left: 30px;\n    list-style: none;\n    height: 50px;\n    display: flex;\n    align-items: center;\n    z-index: 1;\n    position: relative;\n    cursor: pointer;\n    gap: 10px;\n}\n\n.left > .left-second-section li {\n    cursor: pointer;\n}\n\n.left > .left-first-section li > .image {\n    height: 20px;\n    width: 20px;\n\n}\n\n\n/* Slider on views */\n\n.left > .left-first-section .task-animation,\n.left > .left-second-section li[data-active='true']~.task-animation {\n    position: absolute;\n    /* top: 0; */\n    height: 50px;\n    border-left: 6px solid var(--accent-light);\n    z-index: 0;\n    transition: all 0.3s ease;\n    opacity: 0;\n}\n\n\n.views > li:nth-child(1)[data-active='true']~.task-animation {\n    width: 100%;\n    top: 0;\n    opacity: 1;\n}\n\n.views > li:nth-child(2)[data-active='true']~.task-animation {\n    width: 100%;\n    top: 50px;\n    opacity: 1;\n}\n\n.views > li:nth-child(3)[data-active='true']~.task-animation {\n    width: 100%;\n    top: 100px;\n    opacity: 1;\n}\n\n\n/* Views styles */\n\n.left > .left-first-section li[data-active='false']:hover,\n.left > .left-second-section li:hover {\n    background-color: #ba181b28;\n}\n\n.left > .left-first-section li[data-active='true'] > div > svg {\n    fill: var(--accent-color);\n}\n\n.left > .left-first-section li[data-active='true'] > p {\n    color: var(--accent-color);\n}\n\n.left > .left-second-section li.font-accent > div {\n    color: var(--accent-color);\n}\n\n.left > .left-first-section li[data-active='false']:active,\n.left > .left-second-section li:active {\n    background-color: #ba181b5b;\n}\n\n\n/* Slider on projects */\n\n.second-section-list > li:nth-child(1)[data-active='true']~.task-animation {\n    /* width: 100%; */\n    top: 0;\n    opacity: 1;\n}\n\n.second-section-list > li:nth-child(2)[data-active='true']~.task-animation {\n    /* width: 100%; */\n    top: 50px;\n    opacity: 1;\n}\n\n.second-section-list > li:nth-child(3)[data-active='true']~.task-animation {\n    /* width: 100%; */\n    top: 100px;\n    opacity: 1;\n}\n\n.second-section-list > li:nth-child(4)[data-active='true']~.task-animation {\n    /* width: 100%; */\n    top: 150px;\n    opacity: 1;\n}\n\n.second-section-list > li:nth-child(5)[data-active='true']~.task-animation {\n    /* width: 100%; */\n    top: 200px;\n    opacity: 1;\n}\n\n.second-section-list > li:nth-child(6)[data-active='true']~.task-animation {\n    /* width: 100%; */\n    top: 250px;\n    opacity: 1;\n}\n\n.second-section-list > li:nth-child(7)[data-active='true']~.task-animation {\n    /* width: 100%; */\n    top: 300px;\n    opacity: 1;\n}\n\n.second-section-list > li:nth-child(8)[data-active='true']~.task-animation {\n    /* width: 100%; */\n    top: 350px;\n    opacity: 1;\n}\n\n.second-section-list > li:nth-child(9)[data-active='true']~.task-animation {\n    /* width: 100%; */\n    top: 400px;\n    opacity: 1;\n}\n\n.second-section-list > li:nth-child(10)[data-active='true']~.task-animation {\n    /* width: 100%; */\n    top: 450px;\n    opacity: 1;\n}\n\n.second-section-list > li:nth-child(11)[data-active='true']~.task-animation {\n    /* width: 100%; */\n    top: 500px;\n    opacity: 1;\n}\n\n.second-section-list > li:nth-child(12)[data-active='true']~.task-animation {\n    /* width: 100%; */\n    top: 550px;\n    opacity: 1;\n}\n\n.left > .left-second-section > p {\n    padding-left: 20px;\n    font-style: italic;\n    font-weight: 200;\n    height: 50px;\n    display: flex;\n    align-items: center;\n}\n\n.left > .left-second-section li {\n    padding-left: 30px;\n    list-style: none;\n    height: 50px;\n    display: flex;\n    align-items: center;\n    gap: 10px;\n}\n\n.left > .left-second-section .create-project {\n    /* margin-left: 50px; */\n    margin-top: 30px;\n    padding-left: 30px;\n    height: 50px;\n    display: flex;\n    width: 100%;\n    align-items: center;\n    gap: 10px;\n    /* justify-content: center; */\n    cursor: pointer;\n}\n\n.left > .left-second-section .create-project div {\n    /* font-style: italic; */\n    font-size: 20px;\n}\n\n.left > .left-second-section .create-project:hover {\n    background-color: #ba181b28;\n}\n\n.left > .left-second-section .create-project:active {\n    background-color: #ba181b5b\n}\n\n.left > .left-second-section .create-project > div:first-child{\n    height: 20px;\n    width: 20px;\n}\n\n\n/* Footer add new task button */\n\n.footer > .footer-right > .create-task {\n    height: 100%;\n    width: calc(100% - 300px);\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    cursor: pointer;\n    justify-content: center;\n}\n\n.footer > .footer-right > .create-task > .create-task-container {\n    width: 150px;\n    height: 50px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n    border-radius: 10px;\n    border: 0.5px solid var(--border-dark);\n    box-shadow: 0px 0px 5px 2px var(--border-color);\n    transition: all 0.1s ease-in-out;\n}\n\n.footer > .footer-right > .create-task > .create-task-container div:nth-child(2) {\n    font-size: 20px;\n}\n\n.footer > .footer-right > .create-task > .create-task-container > div:first-child {\n    height: 20px;\n    width: 20px;\n}\n\n.footer > .footer-right > .create-task > .create-task-container:hover {\n    background-color: var(--button-hover);\n    transform: scale(1.1);\n\n}\n\n.footer > .footer-right > .create-task > .create-task-container:active {\n    background-color: var(--button-active)\n}\n\n\n/* Dialog layout and animations */\n\ndialog {\n    position: absolute;\n    margin: auto;\n    padding-left: 35px;\n    padding-right: 35px;\n    padding-top: 10px;\n    padding-bottom: 20px;\n    /* padding-left: 35px; */\n    border-radius: 5px;\n    border: 0.5px solid var(--border-color);\n}\n\ndialog.hidden {\n    opacity: 0;\n    top: -200%;\n    transform: scale(0.5);\n    transition: opacity 300ms ease-in-out, \n                top 1000ms ease-in-out,\n                transform 1000ms ease-in-out;\n}\n\ndialog.hidden > form > * {\n    position: relative;\n    top: 10px;\n    opacity: 0;\n}\n\ndialog.displayed {\n    opacity: 1;\n    top: 0%;\n    transform: scale(1);\n    transition: transform 300ms cubic-bezier(0.18,0.89,0.43,1.19);\n}\n\ndialog.displayed > form > * {\n    top: 0px;\n    opacity: 1;\n}\n\ndialog.displayed.new-project > form .project-dialog-name {\n    transition: opacity 300ms ease-in-out 200ms;\n}\n\ndialog.displayed.new-project > form .input-container {\n    transition: opacity 300ms ease-in-out 250ms;\n}\n\ndialog.displayed.new-project > form .project-name-field-div {\n    transition: opacity 300ms ease-in-out 300ms;\n}\n\ndialog.displayed.new-project > form .project-color-field-div {\n    transition: opacity 300ms ease-in-out 350ms;\n}\n\ndialog.displayed.new-project > form > button {\n    transition: opacity 300ms ease-in-out 400ms;\n}\n\ndialog.displayed.new-project > form > .close-project-dialog {\n    transition: opacity 300ms ease-in-out 450ms;\n}\n\n\ndialog.displayed.new-task > form .task-dialog-name {\n    transition: opacity 300ms ease-in-out 200ms;\n}\n\ndialog.displayed.new-task > form > .task-project-field-div {\n    transition: opacity 300ms ease-in-out 250ms;\n}\n\ndialog.displayed.new-task > form > .task-title-field-div {\n    transition: opacity 300ms ease-in-out 300ms;\n}\n\ndialog.displayed.new-task > form > .task-notes-field-div {\n    transition: opacity 300ms ease-in-out 350ms;\n}\n\ndialog.displayed.new-task > form > .task-priority-field-div {\n    transition: opacity 300ms ease-in-out 400ms;\n}\n\ndialog.displayed.new-task > form > .task-date-field-div {\n    transition: opacity 300ms ease-in-out 450ms;\n}\n\ndialog.displayed.new-task > form > button {\n    transition: opacity 300ms ease-in-out 500ms, background-color 0.3s ease, border-color 0.1s ease;\n\n}\n\ndialog.displayed.new-task > form > .close-task-dialog {\n    transition: opacity 300ms ease-in-out 550ms;\n}\n\n\n\n.new-project,\n.new-task {\n    width: 400px;\n    background-color: var(--background-light);\n}\n\n.new-project > form,\n.new-task > form {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    height: 100%;\n}\n\n.new-task > form > .task-project-field-div,\n.new-task > form > .task-title-field-div,\n.new-task > form > .task-notes-field-div,\n.new-task > form > .task-priority-field-div,\n.new-task > form > .task-date-field-div,\n.new-project > form  .project-name-field-div,\n.new-project > form  .project-color-field-div {\n    display: flex;\n    flex-direction: column;\n}\n\n.new-task > form > .task-dialog-name,\n.new-project > form > .project-dialog-name {\n    align-self: center;\n    font-size: 25px;\n    margin-bottom: 15px;\n}\n\n.new-task > form > button,\n.new-project > form > button {\n    margin-top: 25px;\n    height: 40px;\n    width: 50%;\n    align-self: center;\n    border-radius: 5px;\n    border: 0.5px solid var(--border-dark);\n    transition: background-color 1s ease;\n    background-color: var(--secondary-light);\n    cursor: pointer;\n}\n\n.new-task > form > button:hover,\n.new-project > form > button:hover {\n    border: 0.5px solid black;\n    background-color: var(--secondary-color);\n}\n\n.new-task > form > button:active,\n.new-project > form > button:active {\n    background-color: var(--secondary-dark);\n}\n\n.new-task > form > .close-task-dialog,\n.new-project > form > .close-project-dialog {\n    position: absolute;\n    right: 10px;\n    top: 10px;\n}\n\n.new-task > form > .close-task-dialog span,\n.new-project > form > .close-project-dialog span {\n    transform: scale(1);\n    opacity: 0.7;\n    cursor: pointer;\n    transition: transform 0.25s, opacity 0.25s;\n}\n\n.new-task > form > .close-task-dialog:hover span,\n.new-project > form > .close-project-dialog:hover span {\n    transform: rotate(90deg) scale(1.1);\n    opacity: 1;\n    cursor: pointer;\n}\n\n/* Dialog input styles */\n\n.new-task > form input,\n.new-task > form select,\n.new-task > form textarea,\n.new-project > form input,\n.new-project > form select,\n.new-project > form textarea {\n    outline: none;\n    padding: 10px;\n    border: 0.5px solid var(--border-color);\n    transition: all 0.25s ease;\n    border-radius: 5px;\n}\n\n.new-task > form input:hover,\n.new-task > form select:hover,\n.new-task > form textarea:hover,\n.new-project > form input:hover,\n.new-project > form select:hover,\n.new-project > form textarea:hover {\n    outline: none;\n    padding: 10px;\n    border: 0.5px solid black;\n}\n\n.new-task > form input::placeholder,\n.new-task > form select::placeholder,\n.new-task > form textarea::placeholder,\n.new-project > form input::placeholder,\n.new-project > form select::placeholder,\n.new-project > form textarea::placeholder {\n    color: var(--text-muted);\n    font-style: italic;\n}\n\n.new-task > form textarea,\n.new-project > form textarea {\n    resize: none;\n}\n\n.project-color-field-div {\n    align-self: center;\n}\n\n.new-project > form #project-color {\n    height: 40px;\n    width: 80px;\n    padding: 5px;\n    cursor: pointer;\n}\n\n.new-project > form .input-container {\n    display: flex;\n    width: 100%;\n    justify-content: space-around;\n}\n\n\n.icon {\n    width: 20px;\n    height: 20px;\n    /* fill: red; */\n}"],"sourceRoot":""}]);
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
            active: 'false',
        },
        {
            id: 2,
            name: 'Math',
            color: '#FF0000',
            active: 'false',
        },
        {
            id: 3,
            name: 'Programming',
            color: '#0000FF',
            active: 'false',
        },
        {
            id: 4,
            name: 'Leisure',
            color: '#FF00FF',
            active: 'false',
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

    let active_view = 'today';
    let active_project = '';

    function changeActiveView(view) {
        active_view = view;
    }

    function getActiveView() {
        return active_view;
    }



    function changeActiveProject(project) {
        active_project = project;
    }

    function getActiveProject() {
        return active_project;
    }


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
            date: '2023-11-21',
        },
        {
            id: 3,
            projectId: 3,
            projectName: 'Programming',
            projectColor: '#0000FF',
            title: 'Code Review for Project X',
            notes: 'Check for code quality and potential optimizations',
            priority: 'High',
            date: '2023-11-21',
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

    // Retrieve all tasks
    function getAllTasks() {
        changeActiveView('all');
        return tasks.slice();
    }

    // Retrieve today's tasks
    function getTodayTasks() {
        const today = new Date();        
        const tasksToReturn = [];
        tasks.forEach((task) => {
            const dateString = task.date;
            const dateParts = dateString.split("-");

            const year = parseInt(dateParts[0]);
            const month = parseInt(dateParts[1]);
            const date = parseInt(dateParts[2]);

            const taskDate = new Date(year, month - 1, date);

            const isSameYear = taskDate.getFullYear() === today.getFullYear();
            const isSameMonth = taskDate.getMonth() === today.getMonth();
            const isSameDay = taskDate.getDate() === today.getDate();


            if (isSameYear && isSameMonth && isSameDay) {
                tasksToReturn.push(task);
            }
        })

        changeActiveView('today');
        return tasksToReturn;
    }

    // Retrieve tomorrow's tasks
    function getTomorrowTasks() {

        const tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);       
        const tasksToReturn = [];
        tasks.forEach((task) => {
            const dateString = task.date;
            const dateParts = dateString.split("-");

            const year = parseInt(dateParts[0]);
            const month = parseInt(dateParts[1]);
            const date = parseInt(dateParts[2]);

            const taskDate = new Date(year, month - 1, date);

            const isSameYear = taskDate.getFullYear() === tomorrow.getFullYear();
            const isSameMonth = taskDate.getMonth() === tomorrow.getMonth();
            const isSameDay = taskDate.getDate() === tomorrow.getDate();


            if (isSameYear && isSameMonth && isSameDay) {
                tasksToReturn.push(task);
            }
        })

        changeActiveView('tomorrow');
        return tasksToReturn;


    }

    // Retrieve tasks from active view
    function getTasksFromActiveView() {
        if (getActiveView() === 'today') {
            return getTodayTasks();
        } else if (getActiveView() === 'tomorrow') {
            return getTomorrowTasks();
        } else if (getActiveView() === 'all') {
            return getAllTasks();
        }
    }

    // Retrieve a project's tasks
    function getProjectTasks(project, tasks) {
        if (project == '') {
            return tasks;
        }

        const tasksToReturn = [];
        
        tasks.forEach(task => {
            if (task.projectName == project) {
                tasksToReturn.push(task);
            }
        })

        changeActiveProject(project);

        return tasksToReturn;
    }

    return {
        createTask,
        getAllTasks,
        getTodayTasks,
        getTomorrowTasks,
        changeActiveView,
        getActiveView,
        changeActiveProject,
        getActiveProject,
        getProjectTasks,
        getTasksFromActiveView,
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

                    DOMModule.createRightDiv.createTasks(TaskModule.getProjectTasks(TaskModule.getActiveProject(), TaskModule.getTasksFromActiveView()));
                })

                const dialogName = document.createElement('div');
                dialogName.classList.add('task-dialog-name');
                dialogName.textContent = 'New Task';
                newTaskDialogForm.append(dialogName);
    

                const today = new Date();
                const formatteDate = today.toISOString().split('T')[0];

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
                    ],
                    function: 'getTodayTasks',
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
                    ],
                    function: 'getTomorrowTasks',
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
                    ],
                    function: 'getAllTasks',
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
                const tasksFunction = TaskModule[element.function];
                lineItem.addEventListener('click', function() {
                    DOMModule.createRightDiv.createTasks(TaskModule.getProjectTasks(TaskModule.getActiveProject(), tasksFunction()));
                    
                    // DOMModule.createRightDiv.createTasks(tasksFunction());
                    // console.log(TaskModule.getActiveProject());
                    // console.log(TaskModule.getProjectTasks(TaskModule.getActiveProject(), tasksFunction()));
                    // console.log(tasksFunction());
                    // console.log(TaskModule.getActiveProject());
                    // console.log(TaskModule.getProjectTasks(TaskModule.getActiveProject(), tasksFunction()));
                } )
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
                    // leftFirstDiv.dataset.active = item.textContent;
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
                projectLineItem.dataset.active = element.active;
                secondSectionList.append(projectLineItem);

                // const circle = document.createElement('div');
                // circle.classList.add('circle');
                // circle.style.backgroundColor = element.color;
                // projectLineItem.append(circle);
                const icon = document.createElement('div');
                icon.classList.add('icon');
                icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="0.5" stroke="var(--border-dark)">
                <title>checkbox-multiple-blank-circle</title>
                <path d="M14,2A8,8 0 0,0 6,10A8,8 0 0,0 14,18A8,8 0 0,0 22,10A8,8 0 0,0 14,2M4.93,5.82C3.08,7.34 2,9.61 2,12A8,8 0 0,0 10,20C10.64,20 11.27,19.92 11.88,19.77C10.12,19.38 8.5,18.5 7.17,17.29C5.22,16.25 4,14.21 4,12C4,11.7 4.03,11.41 4.07,11.11C4.03,10.74 4,10.37 4,10C4,8.56 4.32,7.13 4.93,5.82Z"/>
                </svg>`;
                // icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>leaf</title><path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" /></svg>`;
                // icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>leaf</title><path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" /></svg>`;


                icon.style.fill = element.color;
                projectLineItem.append(icon);
                
                const projectLineItemName = document.createElement('div');
                projectLineItemName.textContent = element.name;
                projectLineItem.append(projectLineItemName);

                projectLineItem.addEventListener('click', (event) => {
                    if (TaskModule.getActiveProject() === event.target.childNodes[1].innerHTML) {
                        TaskModule.changeActiveProject('');
                    } else {
                        TaskModule.changeActiveProject(event.target.childNodes[1].innerHTML);
                    }
                    DOMModule.createRightDiv.createTasks(TaskModule.getProjectTasks(TaskModule.getActiveProject(), TaskModule.getTasksFromActiveView()));
                })
            });

            const existingAnimationDiv2 = document.querySelector('.second-section-list > .task-animation');
            if (existingAnimationDiv2) {
                existingAnimationDiv2.remove();

            }

            const secondSectionList = document.querySelector('.second-section-list');
            const animationDiv2 = document.createElement('div');
            animationDiv2.classList.add('task-animation', 'start-first');
            secondSectionList.append(animationDiv2);

            // Update data-active property on .project
            Array.from(document.getElementsByClassName('project')).forEach((item) => {
                item.onclick = () => {

                    
                    Array.from(document.getElementsByClassName('project')).forEach((item2) => {
                        if (item === item2) {
                            if (item.dataset.active == 'true') {
                                const task_animation = document.querySelector('.start-first');
                                task_animation.style.opacity = '0';
                                item2.classList.remove('font-accent');
                                setTimeout(() => {
                                    item2.dataset.active = 'false';
                                    task_animation.style.opacity = '1';
                                  }, 300);
    
                            } else {
                                item2.dataset.active = 'true';
                                item2.classList.add('font-accent');
                            }
                        }
                        else {
                            item2.dataset.active = 'false';
                            item2.classList.remove('font-accent');
                        }
                    })
                }
            })
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

            let counter = 0;
            let sub_counter = 0;

            tasks.forEach(element => {
                const rightFirstSection = document.querySelector('.right-first-section');
                const taskLineItem = document.createElement('div');
                taskLineItem.classList.add('task');
                taskLineItem.classList.add('hidden');
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
                    taskField.classList.add('hidden');
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
                    setTimeout(() => {
                        taskField.classList.remove('hidden');
                      }, 30 * sub_counter);
                    sub_counter = sub_counter + 1;

                });
                setTimeout(() => {
                    taskLineItem.classList.remove('hidden');
                  }, 80 * counter);
                counter = counter + 1;

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

            const footerRightDiv = document.createElement('div');
            footerRightDiv.classList.add('footer-right');
            footerDiv.append(footerRightDiv);
        }

        function createButtons() {
            
            const leftSecondSection = document.querySelector('.left-second-section');
            const footerRightDiv = document.querySelector('.footer-right');

            const createProjectButton = document.createElement('div');
            createProjectButton.classList.add('create-project');
            leftSecondSection.append(createProjectButton);
            createProjectButton.addEventListener('click', () => {
                const newProjectDialog = document.querySelector('.new-project');
                newProjectDialog.showModal();
                newProjectDialog.classList.add('displayed');
                newProjectDialog.classList.remove('hidden');
            })

            const createProjectButtonIcon = document.createElement('div');
            createProjectButtonIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>`;
            createProjectButton.append(createProjectButtonIcon);

            const createProjectButtonLabel = document.createElement('div');
            createProjectButtonLabel.textContent = 'Project';
            createProjectButton.append(createProjectButtonLabel);

            const createTaskButton = document.createElement('div');
            createTaskButton.classList.add('create-task');
            footerRightDiv.append(createTaskButton);

            createTaskButton.addEventListener('click', () => {
                const newTaskDialog = document.querySelector('.new-task');
                newTaskDialog.showModal();
                newTaskDialog.classList.add('displayed');
                newTaskDialog.classList.remove('hidden');
            })


            const createTaskButtonContainer = document.createElement('div');
            createTaskButtonContainer.classList.add('create-task-container')
            createTaskButton.append(createTaskButtonContainer);


            const createTaskButtonIcon = document.createElement('div');
            createTaskButtonIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>`;
            createTaskButtonContainer.append(createTaskButtonIcon);

            const createTaskButtonLabel = document.createElement('div');
            createTaskButtonLabel.textContent = 'Task';
            createTaskButtonContainer.append(createTaskButtonLabel);
            
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
DOMModule.createRightDiv.createTasks(TaskModule.getTodayTasks());
DOMModule.createFooterDiv.createStructure();
DOMModule.createFooterDiv.createButtons();

document.addEventListener('keydown', function(event) {
    if (event.key === "5") {
        // console.log(ProjectModule.getProjectObjects());
        // console.log(TaskModule.getTodayTasks());
        // console.log(TaskModule.getTomorrowTasks());
        // console.log(TaskModule.getAllTasks());
        // console.log(TaskModule.getProjectTasks('Math', TaskModule.getTodayTasks()));
        // console.log(TaskModule.getActiveProject());
        // console.log(TaskModule.getActiveView());
        console.log(TaskModule.getActiveProject());
        console.log(TaskModule.getActiveView());
    }
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLDRLQUE0SztBQUM1Syx3S0FBd0ssTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0saUVBQWlFO0FBQzdRO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdDQUFnQztBQUNoQywrQkFBK0I7QUFDL0IsZ0NBQWdDOztBQUVoQztBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7O0FBRUE7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQSxpQ0FBaUM7O0FBRWpDO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0Esd0JBQXdCOztBQUV4QjtBQUNBLDZCQUE2QjtBQUM3Qix5QkFBeUI7QUFDekI7O0FBRUE7QUFDQSwrQkFBK0I7QUFDL0IsZ0NBQWdDO0FBQ2hDOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQixDQUFDLE9BQU8saUZBQWlGLFlBQVksYUFBYSxhQUFhLGNBQWMsYUFBYSx1QkFBdUIsdUJBQXVCLHdCQUF3QixhQUFhLGFBQWEsYUFBYSx1QkFBdUIsY0FBYyxhQUFhLHVCQUF1QixhQUFhLHdCQUF3QixhQUFhLHVCQUF1QixhQUFhLHdCQUF3QixhQUFhLHVCQUF1Qix1QkFBdUIsY0FBYyxhQUFhLHVCQUF1Qix1QkFBdUIsUUFBUSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssU0FBUyxPQUFPLGFBQWEsTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxVQUFVLGFBQWEsTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFNBQVMsS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsV0FBVyxPQUFPLGFBQWEsT0FBTyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE9BQU8sYUFBYSxPQUFPLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksUUFBUSxhQUFhLE1BQU0sWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLEtBQUssTUFBTSxLQUFLLFVBQVUsVUFBVSxPQUFPLGFBQWEsTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksY0FBYyxPQUFPLEtBQUssS0FBSyxPQUFPLGFBQWEsTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxPQUFPLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZ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VDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCOztBQUVyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCOztBQUV6Qjs7QUFFQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm92YXRhc2svLi9zcmMvc3R5bGVzLmNzcyIsIndlYnBhY2s6Ly9ub3ZhdGFzay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vbm92YXRhc2svLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9ub3ZhdGFzay8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vbm92YXRhc2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vbm92YXRhc2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL25vdmF0YXNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL25vdmF0YXNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL25vdmF0YXNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vbm92YXRhc2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9ub3ZhdGFzay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ub3ZhdGFzay93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9ub3ZhdGFzay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbm92YXRhc2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9ub3ZhdGFzay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL25vdmF0YXNrL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9ub3ZhdGFzay8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1hdGVyaWFsK1N5bWJvbHMrT3V0bGluZWQ6b3Bzeix3Z2h0LEZJTEwsR1JBREAyMC4uNDgsMTAwLi43MDAsMC4uMSwtNTAuLjIwMCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUpvc2VmaW4rU2Fuczp3Z2h0QDEwMCZmYW1pbHk9TGF0bzp3Z2h0QDMwMCZmYW1pbHk9TnVuaXRvOml0YWwsd2dodEAwLDIwMDswLDMwMDswLDQwMDswLDUwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMCZmYW1pbHk9Um9ib3RvOndnaHRAMTAwJmZhbWlseT1SdWJpazp3Z2h0QDMwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcbiAgICAvKiBQcmltYXJ5IGNvbG9ycyAqL1xuICAgIC0tcHJpbWFyeS1jb2xvcjogIzM0OThkYjtcbiAgICAtLXByaW1hcnktZGFyazogIzI5ODBiOTtcbiAgICAtLXByaW1hcnktbGlnaHQ6ICM4N0NFRkE7XG5cbiAgICAvKiBTZWNvbmRhcnkgY29sb3JzICovXG4gICAgLS1zZWNvbmRhcnktY29sb3I6ICMyZWNjNzE7IC8qdXNlZCovXG4gICAgLS1zZWNvbmRhcnktZGFyazogIzI3YWU2MDsgLyp1c2VkKi9cbiAgICAtLXNlY29uZGFyeS1saWdodDogI2M4ZTZjOTsgLyp1c2VkKi9cblxuICAgIC8qIEFjY2VudCBjb2xvcnMgKi9cbiAgICAtLWFjY2VudC1jb2xvcjogI0JBMTgxQjtcbiAgICAtLWFjY2VudC1kYXJrOiAjQTQxNjFBO1xuICAgIC0tYWNjZW50LWxpZ2h0OiAjRTUzODNCOyAvKnVzZWQqL1xuICAgIC0tYWNjZW50LWRhcmtlcjogIzY2MDcwODtcblxuICAgIC8qIEJhY2tncm91bmQgY29sb3JzICovXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjRjVFQkUwOyAvKnVzZWQqL1xuICAgIC0tYmFja2dyb3VuZC1kYXJrOiAjYmRjM2M3O1xuICAgIC0tYmFja2dyb3VuZC1saWdodDogI0VERURFOTsgLyp1c2VkKi9cblxuICAgIC8qIFRleHQgY29sb3JzICovXG4gICAgLS10ZXh0LWNvbG9yOiAjMzMzOyAvKnVzZWQqL1xuICAgIC0tdGV4dC1saWdodDogI2ZmZjtcbiAgICAtLXRleHQtbXV0ZWQ6ICM4ODg7IC8qdXNlZCovXG5cbiAgICAvKiBCb3JkZXIgY29sb3JzICovXG4gICAgLS1ib3JkZXItY29sb3I6ICNENkNDQzI7IC8qdXNlZCovXG4gICAgLS1ib3JkZXItZGFyazogIzk5OTsgLyp1c2VkKi9cbiAgICAtLWJvcmRlci1saWdodDogI2VlZTtcblxuICAgIC8qIEJ1dHRvbiBjb2xvcnMgKi9cbiAgICAtLWJ1dHRvbi1ob3ZlcjogI2JhMTgxYjI4OyAvKnVzZWQqL1xuICAgIC0tYnV0dG9uLWFjdGl2ZTogI2JhMTgxYjViOyAvKnVzZWQqL1xufVxuXG5cbjo6YmFja2Ryb3Age1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA4ODtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcbn1cblxuLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xuICAgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOlxuICAgICdGSUxMJyAwLFxuICAgICd3Z2h0JyA0MDAsXG4gICAgJ0dSQUQnIDAsXG4gICAgJ29wc3onIDI0XG59XG5cblxuLyogR2VuZXJhbCBsYXlvdXQgKi9cblxuKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbmJvZHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtbGlnaHQpO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMHZ3O1xufVxuXG4ubWFpbiB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5tYWluID4gLmxlZnQge1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XG4gICAgZmxleDogMCAwIDMwMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIC8qIGhlaWdodDogY2FsYygxMDAlIC0gMTAwcHgpOyAqL1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzogYXV0bztcbn1cblxuLm1haW4gPiAucmlnaHQge1xuICAgIGZsZXg6IDE7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMDBweCk7XG59XG5cbi5tYWluID4gLmZvb3RlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIC8qIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpOyAqL1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBib3R0b206IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbGVmdDogMzAwcHg7XG4gICAgYm94LXNoYWRvdzogMHB4IC01MHB4IDQwcHggLTIwcHggdmFyKC0tYmFja2dyb3VuZC1saWdodCk7XG59XG5cbi5tYWluID4gLmZvb3RlciA+IC5mb290ZXItbGVmdCB7XG4gICAgZmxleDogMCAwIDMwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG59XG5cbi5tYWluID4gLmZvb3RlciA+IC5mb290ZXItcmlnaHQge1xuICAgIGZsZXg6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1saWdodCk7XG59XG5cbi5yaWdodC1maXJzdC1zZWN0aW9uIHtcbiAgICBwYWRkaW5nOiA1MHB4IDEwcHggNTBweCAxMHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxNXB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2sge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGZsZXg6IDE7XG4gICAgd2lkdGg6IGNsYW1wKDIwMHB4LCA2MCUsIDgwMHB4KTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC8qIG1heC13aWR0aDogNTAwcHg7ICovXG4gICAgdHJhbnNpdGlvbjogYWxsIDE3NW1zIGVhc2UtaW47XG59XG5cbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2suaGlkZGVuIHtcbiAgICBvcGFjaXR5OiAwO1xufVxuXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrID4gZGl2IHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zaXRpb246IGFsbCAxNzVtcyBlYXNlLWluO1xufVxuXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrID4gZGl2LmhpZGRlbiB7XG4gICAgb3BhY2l0eTogMDtcbn1cblxuLnRhc2stcHJvamVjdC1jb2xvciB7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIHdpZHRoOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIHZhcigtLXRleHQtbXV0ZWQpO1xufVxuXG5cblxuXG4vKiBMZWZ0IGRpdiBsYXlvdXQgKi9cblxuLmxlZnQgPiAubGVmdC1maXJzdC1zZWN0aW9uIHtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIGZsZXg6IDAgMCAyMDBweDtcbiAgICAvKiBtYXJnaW4tbGVmdDogMTBweDsgKi9cbn1cblxuLmxlZnQgPiAubGVmdC1zZWNvbmQtc2VjdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBmbGV4OiAxIDAgMjAwcHg7XG4gICAgLyogbWFyZ2luLWxlZnQ6IDEwcHg7ICovXG59XG5cblxuXG4ubGVmdCA+IC5sZWZ0LWZpcnN0LXNlY3Rpb24gPiBwIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmxlZnQgPiAubGVmdC1maXJzdC1zZWN0aW9uIHVsLFxuLmxlZnQgPiAubGVmdC1zZWNvbmQtc2VjdGlvbiB1bCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubGVmdCA+IC5sZWZ0LWZpcnN0LXNlY3Rpb24gbGkge1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGhlaWdodDogNTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgei1pbmRleDogMTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGdhcDogMTBweDtcbn1cblxuLmxlZnQgPiAubGVmdC1zZWNvbmQtc2VjdGlvbiBsaSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubGVmdCA+IC5sZWZ0LWZpcnN0LXNlY3Rpb24gbGkgPiAuaW1hZ2Uge1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcblxufVxuXG5cbi8qIFNsaWRlciBvbiB2aWV3cyAqL1xuXG4ubGVmdCA+IC5sZWZ0LWZpcnN0LXNlY3Rpb24gLnRhc2stYW5pbWF0aW9uLFxuLmxlZnQgPiAubGVmdC1zZWNvbmQtc2VjdGlvbiBsaVtkYXRhLWFjdGl2ZT0ndHJ1ZSddfi50YXNrLWFuaW1hdGlvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC8qIHRvcDogMDsgKi9cbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCB2YXIoLS1hY2NlbnQtbGlnaHQpO1xuICAgIHotaW5kZXg6IDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICBvcGFjaXR5OiAwO1xufVxuXG5cbi52aWV3cyA+IGxpOm50aC1jaGlsZCgxKVtkYXRhLWFjdGl2ZT0ndHJ1ZSddfi50YXNrLWFuaW1hdGlvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdG9wOiAwO1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi52aWV3cyA+IGxpOm50aC1jaGlsZCgyKVtkYXRhLWFjdGl2ZT0ndHJ1ZSddfi50YXNrLWFuaW1hdGlvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdG9wOiA1MHB4O1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi52aWV3cyA+IGxpOm50aC1jaGlsZCgzKVtkYXRhLWFjdGl2ZT0ndHJ1ZSddfi50YXNrLWFuaW1hdGlvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdG9wOiAxMDBweDtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG5cbi8qIFZpZXdzIHN0eWxlcyAqL1xuXG4ubGVmdCA+IC5sZWZ0LWZpcnN0LXNlY3Rpb24gbGlbZGF0YS1hY3RpdmU9J2ZhbHNlJ106aG92ZXIsXG4ubGVmdCA+IC5sZWZ0LXNlY29uZC1zZWN0aW9uIGxpOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmExODFiMjg7XG59XG5cbi5sZWZ0ID4gLmxlZnQtZmlyc3Qtc2VjdGlvbiBsaVtkYXRhLWFjdGl2ZT0ndHJ1ZSddID4gZGl2ID4gc3ZnIHtcbiAgICBmaWxsOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xufVxuXG4ubGVmdCA+IC5sZWZ0LWZpcnN0LXNlY3Rpb24gbGlbZGF0YS1hY3RpdmU9J3RydWUnXSA+IHAge1xuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xufVxuXG4ubGVmdCA+IC5sZWZ0LXNlY29uZC1zZWN0aW9uIGxpLmZvbnQtYWNjZW50ID4gZGl2IHtcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbn1cblxuLmxlZnQgPiAubGVmdC1maXJzdC1zZWN0aW9uIGxpW2RhdGEtYWN0aXZlPSdmYWxzZSddOmFjdGl2ZSxcbi5sZWZ0ID4gLmxlZnQtc2Vjb25kLXNlY3Rpb24gbGk6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmExODFiNWI7XG59XG5cblxuLyogU2xpZGVyIG9uIHByb2plY3RzICovXG5cbi5zZWNvbmQtc2VjdGlvbi1saXN0ID4gbGk6bnRoLWNoaWxkKDEpW2RhdGEtYWN0aXZlPSd0cnVlJ11+LnRhc2stYW5pbWF0aW9uIHtcbiAgICAvKiB3aWR0aDogMTAwJTsgKi9cbiAgICB0b3A6IDA7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLnNlY29uZC1zZWN0aW9uLWxpc3QgPiBsaTpudGgtY2hpbGQoMilbZGF0YS1hY3RpdmU9J3RydWUnXX4udGFzay1hbmltYXRpb24ge1xuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xuICAgIHRvcDogNTBweDtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4uc2Vjb25kLXNlY3Rpb24tbGlzdCA+IGxpOm50aC1jaGlsZCgzKVtkYXRhLWFjdGl2ZT0ndHJ1ZSddfi50YXNrLWFuaW1hdGlvbiB7XG4gICAgLyogd2lkdGg6IDEwMCU7ICovXG4gICAgdG9wOiAxMDBweDtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4uc2Vjb25kLXNlY3Rpb24tbGlzdCA+IGxpOm50aC1jaGlsZCg0KVtkYXRhLWFjdGl2ZT0ndHJ1ZSddfi50YXNrLWFuaW1hdGlvbiB7XG4gICAgLyogd2lkdGg6IDEwMCU7ICovXG4gICAgdG9wOiAxNTBweDtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4uc2Vjb25kLXNlY3Rpb24tbGlzdCA+IGxpOm50aC1jaGlsZCg1KVtkYXRhLWFjdGl2ZT0ndHJ1ZSddfi50YXNrLWFuaW1hdGlvbiB7XG4gICAgLyogd2lkdGg6IDEwMCU7ICovXG4gICAgdG9wOiAyMDBweDtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4uc2Vjb25kLXNlY3Rpb24tbGlzdCA+IGxpOm50aC1jaGlsZCg2KVtkYXRhLWFjdGl2ZT0ndHJ1ZSddfi50YXNrLWFuaW1hdGlvbiB7XG4gICAgLyogd2lkdGg6IDEwMCU7ICovXG4gICAgdG9wOiAyNTBweDtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4uc2Vjb25kLXNlY3Rpb24tbGlzdCA+IGxpOm50aC1jaGlsZCg3KVtkYXRhLWFjdGl2ZT0ndHJ1ZSddfi50YXNrLWFuaW1hdGlvbiB7XG4gICAgLyogd2lkdGg6IDEwMCU7ICovXG4gICAgdG9wOiAzMDBweDtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4uc2Vjb25kLXNlY3Rpb24tbGlzdCA+IGxpOm50aC1jaGlsZCg4KVtkYXRhLWFjdGl2ZT0ndHJ1ZSddfi50YXNrLWFuaW1hdGlvbiB7XG4gICAgLyogd2lkdGg6IDEwMCU7ICovXG4gICAgdG9wOiAzNTBweDtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4uc2Vjb25kLXNlY3Rpb24tbGlzdCA+IGxpOm50aC1jaGlsZCg5KVtkYXRhLWFjdGl2ZT0ndHJ1ZSddfi50YXNrLWFuaW1hdGlvbiB7XG4gICAgLyogd2lkdGg6IDEwMCU7ICovXG4gICAgdG9wOiA0MDBweDtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4uc2Vjb25kLXNlY3Rpb24tbGlzdCA+IGxpOm50aC1jaGlsZCgxMClbZGF0YS1hY3RpdmU9J3RydWUnXX4udGFzay1hbmltYXRpb24ge1xuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xuICAgIHRvcDogNDUwcHg7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLnNlY29uZC1zZWN0aW9uLWxpc3QgPiBsaTpudGgtY2hpbGQoMTEpW2RhdGEtYWN0aXZlPSd0cnVlJ11+LnRhc2stYW5pbWF0aW9uIHtcbiAgICAvKiB3aWR0aDogMTAwJTsgKi9cbiAgICB0b3A6IDUwMHB4O1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi5zZWNvbmQtc2VjdGlvbi1saXN0ID4gbGk6bnRoLWNoaWxkKDEyKVtkYXRhLWFjdGl2ZT0ndHJ1ZSddfi50YXNrLWFuaW1hdGlvbiB7XG4gICAgLyogd2lkdGg6IDEwMCU7ICovXG4gICAgdG9wOiA1NTBweDtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4ubGVmdCA+IC5sZWZ0LXNlY29uZC1zZWN0aW9uID4gcCB7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LXdlaWdodDogMjAwO1xuICAgIGhlaWdodDogNTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5sZWZ0ID4gLmxlZnQtc2Vjb25kLXNlY3Rpb24gbGkge1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGhlaWdodDogNTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xufVxuXG4ubGVmdCA+IC5sZWZ0LXNlY29uZC1zZWN0aW9uIC5jcmVhdGUtcHJvamVjdCB7XG4gICAgLyogbWFyZ2luLWxlZnQ6IDUwcHg7ICovXG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG4gICAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubGVmdCA+IC5sZWZ0LXNlY29uZC1zZWN0aW9uIC5jcmVhdGUtcHJvamVjdCBkaXYge1xuICAgIC8qIGZvbnQtc3R5bGU6IGl0YWxpYzsgKi9cbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5sZWZ0ID4gLmxlZnQtc2Vjb25kLXNlY3Rpb24gLmNyZWF0ZS1wcm9qZWN0OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmExODFiMjg7XG59XG5cbi5sZWZ0ID4gLmxlZnQtc2Vjb25kLXNlY3Rpb24gLmNyZWF0ZS1wcm9qZWN0OmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JhMTgxYjViXG59XG5cbi5sZWZ0ID4gLmxlZnQtc2Vjb25kLXNlY3Rpb24gLmNyZWF0ZS1wcm9qZWN0ID4gZGl2OmZpcnN0LWNoaWxke1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbn1cblxuXG4vKiBGb290ZXIgYWRkIG5ldyB0YXNrIGJ1dHRvbiAqL1xuXG4uZm9vdGVyID4gLmZvb3Rlci1yaWdodCA+IC5jcmVhdGUtdGFzayB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMDBweCk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5mb290ZXIgPiAuZm9vdGVyLXJpZ2h0ID4gLmNyZWF0ZS10YXNrID4gLmNyZWF0ZS10YXNrLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCB2YXIoLS1ib3JkZXItZGFyayk7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMnB4IHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5mb290ZXIgPiAuZm9vdGVyLXJpZ2h0ID4gLmNyZWF0ZS10YXNrID4gLmNyZWF0ZS10YXNrLWNvbnRhaW5lciBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5mb290ZXIgPiAuZm9vdGVyLXJpZ2h0ID4gLmNyZWF0ZS10YXNrID4gLmNyZWF0ZS10YXNrLWNvbnRhaW5lciA+IGRpdjpmaXJzdC1jaGlsZCB7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xufVxuXG4uZm9vdGVyID4gLmZvb3Rlci1yaWdodCA+IC5jcmVhdGUtdGFzayA+IC5jcmVhdGUtdGFzay1jb250YWluZXI6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1ob3Zlcik7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuXG59XG5cbi5mb290ZXIgPiAuZm9vdGVyLXJpZ2h0ID4gLmNyZWF0ZS10YXNrID4gLmNyZWF0ZS10YXNrLWNvbnRhaW5lcjphY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1hY3RpdmUpXG59XG5cblxuLyogRGlhbG9nIGxheW91dCBhbmQgYW5pbWF0aW9ucyAqL1xuXG5kaWFsb2cge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZy1sZWZ0OiAzNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDM1cHg7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgLyogcGFkZGluZy1sZWZ0OiAzNXB4OyAqL1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG59XG5cbmRpYWxvZy5oaWRkZW4ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdG9wOiAtMjAwJTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dCwgXG4gICAgICAgICAgICAgICAgdG9wIDEwMDBtcyBlYXNlLWluLW91dCxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm0gMTAwMG1zIGVhc2UtaW4tb3V0O1xufVxuXG5kaWFsb2cuaGlkZGVuID4gZm9ybSA+ICoge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDEwcHg7XG4gICAgb3BhY2l0eTogMDtcbn1cblxuZGlhbG9nLmRpc3BsYXllZCB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0b3A6IDAlO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGN1YmljLWJlemllcigwLjE4LDAuODksMC40MywxLjE5KTtcbn1cblxuZGlhbG9nLmRpc3BsYXllZCA+IGZvcm0gPiAqIHtcbiAgICB0b3A6IDBweDtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG5kaWFsb2cuZGlzcGxheWVkLm5ldy1wcm9qZWN0ID4gZm9ybSAucHJvamVjdC1kaWFsb2ctbmFtZSB7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dCAyMDBtcztcbn1cblxuZGlhbG9nLmRpc3BsYXllZC5uZXctcHJvamVjdCA+IGZvcm0gLmlucHV0LWNvbnRhaW5lciB7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dCAyNTBtcztcbn1cblxuZGlhbG9nLmRpc3BsYXllZC5uZXctcHJvamVjdCA+IGZvcm0gLnByb2plY3QtbmFtZS1maWVsZC1kaXYge1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbi1vdXQgMzAwbXM7XG59XG5cbmRpYWxvZy5kaXNwbGF5ZWQubmV3LXByb2plY3QgPiBmb3JtIC5wcm9qZWN0LWNvbG9yLWZpZWxkLWRpdiB7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dCAzNTBtcztcbn1cblxuZGlhbG9nLmRpc3BsYXllZC5uZXctcHJvamVjdCA+IGZvcm0gPiBidXR0b24ge1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbi1vdXQgNDAwbXM7XG59XG5cbmRpYWxvZy5kaXNwbGF5ZWQubmV3LXByb2plY3QgPiBmb3JtID4gLmNsb3NlLXByb2plY3QtZGlhbG9nIHtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0IDQ1MG1zO1xufVxuXG5cbmRpYWxvZy5kaXNwbGF5ZWQubmV3LXRhc2sgPiBmb3JtIC50YXNrLWRpYWxvZy1uYW1lIHtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0IDIwMG1zO1xufVxuXG5kaWFsb2cuZGlzcGxheWVkLm5ldy10YXNrID4gZm9ybSA+IC50YXNrLXByb2plY3QtZmllbGQtZGl2IHtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0IDI1MG1zO1xufVxuXG5kaWFsb2cuZGlzcGxheWVkLm5ldy10YXNrID4gZm9ybSA+IC50YXNrLXRpdGxlLWZpZWxkLWRpdiB7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dCAzMDBtcztcbn1cblxuZGlhbG9nLmRpc3BsYXllZC5uZXctdGFzayA+IGZvcm0gPiAudGFzay1ub3Rlcy1maWVsZC1kaXYge1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbi1vdXQgMzUwbXM7XG59XG5cbmRpYWxvZy5kaXNwbGF5ZWQubmV3LXRhc2sgPiBmb3JtID4gLnRhc2stcHJpb3JpdHktZmllbGQtZGl2IHtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0IDQwMG1zO1xufVxuXG5kaWFsb2cuZGlzcGxheWVkLm5ldy10YXNrID4gZm9ybSA+IC50YXNrLWRhdGUtZmllbGQtZGl2IHtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0IDQ1MG1zO1xufVxuXG5kaWFsb2cuZGlzcGxheWVkLm5ldy10YXNrID4gZm9ybSA+IGJ1dHRvbiB7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dCA1MDBtcywgYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UsIGJvcmRlci1jb2xvciAwLjFzIGVhc2U7XG5cbn1cblxuZGlhbG9nLmRpc3BsYXllZC5uZXctdGFzayA+IGZvcm0gPiAuY2xvc2UtdGFzay1kaWFsb2cge1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbi1vdXQgNTUwbXM7XG59XG5cblxuXG4ubmV3LXByb2plY3QsXG4ubmV3LXRhc2sge1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWxpZ2h0KTtcbn1cblxuLm5ldy1wcm9qZWN0ID4gZm9ybSxcbi5uZXctdGFzayA+IGZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ubmV3LXRhc2sgPiBmb3JtID4gLnRhc2stcHJvamVjdC1maWVsZC1kaXYsXG4ubmV3LXRhc2sgPiBmb3JtID4gLnRhc2stdGl0bGUtZmllbGQtZGl2LFxuLm5ldy10YXNrID4gZm9ybSA+IC50YXNrLW5vdGVzLWZpZWxkLWRpdixcbi5uZXctdGFzayA+IGZvcm0gPiAudGFzay1wcmlvcml0eS1maWVsZC1kaXYsXG4ubmV3LXRhc2sgPiBmb3JtID4gLnRhc2stZGF0ZS1maWVsZC1kaXYsXG4ubmV3LXByb2plY3QgPiBmb3JtICAucHJvamVjdC1uYW1lLWZpZWxkLWRpdixcbi5uZXctcHJvamVjdCA+IGZvcm0gIC5wcm9qZWN0LWNvbG9yLWZpZWxkLWRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ubmV3LXRhc2sgPiBmb3JtID4gLnRhc2stZGlhbG9nLW5hbWUsXG4ubmV3LXByb2plY3QgPiBmb3JtID4gLnByb2plY3QtZGlhbG9nLW5hbWUge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLm5ldy10YXNrID4gZm9ybSA+IGJ1dHRvbixcbi5uZXctcHJvamVjdCA+IGZvcm0gPiBidXR0b24ge1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiA1MCU7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIHZhcigtLWJvcmRlci1kYXJrKTtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2U7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWxpZ2h0KTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5uZXctdGFzayA+IGZvcm0gPiBidXR0b246aG92ZXIsXG4ubmV3LXByb2plY3QgPiBmb3JtID4gYnV0dG9uOmhvdmVyIHtcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIGJsYWNrO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XG59XG5cbi5uZXctdGFzayA+IGZvcm0gPiBidXR0b246YWN0aXZlLFxuLm5ldy1wcm9qZWN0ID4gZm9ybSA+IGJ1dHRvbjphY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1kYXJrKTtcbn1cblxuLm5ldy10YXNrID4gZm9ybSA+IC5jbG9zZS10YXNrLWRpYWxvZyxcbi5uZXctcHJvamVjdCA+IGZvcm0gPiAuY2xvc2UtcHJvamVjdC1kaWFsb2cge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTBweDtcbiAgICB0b3A6IDEwcHg7XG59XG5cbi5uZXctdGFzayA+IGZvcm0gPiAuY2xvc2UtdGFzay1kaWFsb2cgc3Bhbixcbi5uZXctcHJvamVjdCA+IGZvcm0gPiAuY2xvc2UtcHJvamVjdC1kaWFsb2cgc3BhbiB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICBvcGFjaXR5OiAwLjc7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cywgb3BhY2l0eSAwLjI1cztcbn1cblxuLm5ldy10YXNrID4gZm9ybSA+IC5jbG9zZS10YXNrLWRpYWxvZzpob3ZlciBzcGFuLFxuLm5ldy1wcm9qZWN0ID4gZm9ybSA+IC5jbG9zZS1wcm9qZWN0LWRpYWxvZzpob3ZlciBzcGFuIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgc2NhbGUoMS4xKTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogRGlhbG9nIGlucHV0IHN0eWxlcyAqL1xuXG4ubmV3LXRhc2sgPiBmb3JtIGlucHV0LFxuLm5ldy10YXNrID4gZm9ybSBzZWxlY3QsXG4ubmV3LXRhc2sgPiBmb3JtIHRleHRhcmVhLFxuLm5ldy1wcm9qZWN0ID4gZm9ybSBpbnB1dCxcbi5uZXctcHJvamVjdCA+IGZvcm0gc2VsZWN0LFxuLm5ldy1wcm9qZWN0ID4gZm9ybSB0ZXh0YXJlYSB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlcjogMC41cHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5uZXctdGFzayA+IGZvcm0gaW5wdXQ6aG92ZXIsXG4ubmV3LXRhc2sgPiBmb3JtIHNlbGVjdDpob3Zlcixcbi5uZXctdGFzayA+IGZvcm0gdGV4dGFyZWE6aG92ZXIsXG4ubmV3LXByb2plY3QgPiBmb3JtIGlucHV0OmhvdmVyLFxuLm5ldy1wcm9qZWN0ID4gZm9ybSBzZWxlY3Q6aG92ZXIsXG4ubmV3LXByb2plY3QgPiBmb3JtIHRleHRhcmVhOmhvdmVyIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCBibGFjaztcbn1cblxuLm5ldy10YXNrID4gZm9ybSBpbnB1dDo6cGxhY2Vob2xkZXIsXG4ubmV3LXRhc2sgPiBmb3JtIHNlbGVjdDo6cGxhY2Vob2xkZXIsXG4ubmV3LXRhc2sgPiBmb3JtIHRleHRhcmVhOjpwbGFjZWhvbGRlcixcbi5uZXctcHJvamVjdCA+IGZvcm0gaW5wdXQ6OnBsYWNlaG9sZGVyLFxuLm5ldy1wcm9qZWN0ID4gZm9ybSBzZWxlY3Q6OnBsYWNlaG9sZGVyLFxuLm5ldy1wcm9qZWN0ID4gZm9ybSB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5uZXctdGFzayA+IGZvcm0gdGV4dGFyZWEsXG4ubmV3LXByb2plY3QgPiBmb3JtIHRleHRhcmVhIHtcbiAgICByZXNpemU6IG5vbmU7XG59XG5cbi5wcm9qZWN0LWNvbG9yLWZpZWxkLWRpdiB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4ubmV3LXByb2plY3QgPiBmb3JtICNwcm9qZWN0LWNvbG9yIHtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5ldy1wcm9qZWN0ID4gZm9ybSAuaW5wdXQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG5cbi5pY29uIHtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgLyogZmlsbDogcmVkOyAqL1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7SUFDSSxtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLHVCQUF1QjtJQUN2Qix3QkFBd0I7O0lBRXhCLHFCQUFxQjtJQUNyQiwwQkFBMEIsRUFBRSxPQUFPO0lBQ25DLHlCQUF5QixFQUFFLE9BQU87SUFDbEMsMEJBQTBCLEVBQUUsT0FBTzs7SUFFbkMsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsdUJBQXVCLEVBQUUsT0FBTztJQUNoQyx3QkFBd0I7O0lBRXhCLHNCQUFzQjtJQUN0QiwyQkFBMkIsRUFBRSxPQUFPO0lBQ3BDLDBCQUEwQjtJQUMxQiwyQkFBMkIsRUFBRSxPQUFPOztJQUVwQyxnQkFBZ0I7SUFDaEIsa0JBQWtCLEVBQUUsT0FBTztJQUMzQixrQkFBa0I7SUFDbEIsa0JBQWtCLEVBQUUsT0FBTzs7SUFFM0Isa0JBQWtCO0lBQ2xCLHVCQUF1QixFQUFFLE9BQU87SUFDaEMsbUJBQW1CLEVBQUUsT0FBTztJQUM1QixvQkFBb0I7O0lBRXBCLGtCQUFrQjtJ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O0lBQ1gsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLDZCQUE2QjtBQUNqQzs7O0FBR0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7QUFDbkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TWF0ZXJpYWwrU3ltYm9scytPdXRsaW5lZDpvcHN6LHdnaHQsRklMTCxHUkFEQDIwLi40OCwxMDAuLjcwMCwwLi4xLC01MC4uMjAwJyk7XFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Sm9zZWZpbitTYW5zOndnaHRAMTAwJmZhbWlseT1MYXRvOndnaHRAMzAwJmZhbWlseT1OdW5pdG86aXRhbCx3Z2h0QDAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwJmZhbWlseT1Sb2JvdG86d2dodEAxMDAmZmFtaWx5PVJ1YmlrOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbjpyb290IHtcXG4gICAgLyogUHJpbWFyeSBjb2xvcnMgKi9cXG4gICAgLS1wcmltYXJ5LWNvbG9yOiAjMzQ5OGRiO1xcbiAgICAtLXByaW1hcnktZGFyazogIzI5ODBiOTtcXG4gICAgLS1wcmltYXJ5LWxpZ2h0OiAjODdDRUZBO1xcblxcbiAgICAvKiBTZWNvbmRhcnkgY29sb3JzICovXFxuICAgIC0tc2Vjb25kYXJ5LWNvbG9yOiAjMmVjYzcxOyAvKnVzZWQqL1xcbiAgICAtLXNlY29uZGFyeS1kYXJrOiAjMjdhZTYwOyAvKnVzZWQqL1xcbiAgICAtLXNlY29uZGFyeS1saWdodDogI2M4ZTZjOTsgLyp1c2VkKi9cXG5cXG4gICAgLyogQWNjZW50IGNvbG9ycyAqL1xcbiAgICAtLWFjY2VudC1jb2xvcjogI0JBMTgxQjtcXG4gICAgLS1hY2NlbnQtZGFyazogI0E0MTYxQTtcXG4gICAgLS1hY2NlbnQtbGlnaHQ6ICNFNTM4M0I7IC8qdXNlZCovXFxuICAgIC0tYWNjZW50LWRhcmtlcjogIzY2MDcwODtcXG5cXG4gICAgLyogQmFja2dyb3VuZCBjb2xvcnMgKi9cXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjRjVFQkUwOyAvKnVzZWQqL1xcbiAgICAtLWJhY2tncm91bmQtZGFyazogI2JkYzNjNztcXG4gICAgLS1iYWNrZ3JvdW5kLWxpZ2h0OiAjRURFREU5OyAvKnVzZWQqL1xcblxcbiAgICAvKiBUZXh0IGNvbG9ycyAqL1xcbiAgICAtLXRleHQtY29sb3I6ICMzMzM7IC8qdXNlZCovXFxuICAgIC0tdGV4dC1saWdodDogI2ZmZjtcXG4gICAgLS10ZXh0LW11dGVkOiAjODg4OyAvKnVzZWQqL1xcblxcbiAgICAvKiBCb3JkZXIgY29sb3JzICovXFxuICAgIC0tYm9yZGVyLWNvbG9yOiAjRDZDQ0MyOyAvKnVzZWQqL1xcbiAgICAtLWJvcmRlci1kYXJrOiAjOTk5OyAvKnVzZWQqL1xcbiAgICAtLWJvcmRlci1saWdodDogI2VlZTtcXG5cXG4gICAgLyogQnV0dG9uIGNvbG9ycyAqL1xcbiAgICAtLWJ1dHRvbi1ob3ZlcjogI2JhMTgxYjI4OyAvKnVzZWQqL1xcbiAgICAtLWJ1dHRvbi1hY3RpdmU6ICNiYTE4MWI1YjsgLyp1c2VkKi9cXG59XFxuXFxuXFxuOjpiYWNrZHJvcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA4ODtcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XFxufVxcblxcbi5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHtcXG4gICAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6XFxuICAgICdGSUxMJyAwLFxcbiAgICAnd2dodCcgNDAwLFxcbiAgICAnR1JBRCcgMCxcXG4gICAgJ29wc3onIDI0XFxufVxcblxcblxcbi8qIEdlbmVyYWwgbGF5b3V0ICovXFxuXFxuKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xcbiAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWxpZ2h0KTtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5tYWluID4gLmxlZnQge1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XFxuICAgIGZsZXg6IDAgMCAzMDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgLyogaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMDBweCk7ICovXFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxufVxcblxcbi5tYWluID4gLnJpZ2h0IHtcXG4gICAgZmxleDogMTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMDBweCk7XFxufVxcblxcbi5tYWluID4gLmZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIC8qIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpOyAqL1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGxlZnQ6IDMwMHB4O1xcbiAgICBib3gtc2hhZG93OiAwcHggLTUwcHggNDBweCAtMjBweCB2YXIoLS1iYWNrZ3JvdW5kLWxpZ2h0KTtcXG59XFxuXFxuLm1haW4gPiAuZm9vdGVyID4gLmZvb3Rlci1sZWZ0IHtcXG4gICAgZmxleDogMCAwIDMwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcXG59XFxuXFxuLm1haW4gPiAuZm9vdGVyID4gLmZvb3Rlci1yaWdodCB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtbGlnaHQpO1xcbn1cXG5cXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiB7XFxuICAgIHBhZGRpbmc6IDUwcHggMTBweCA1MHB4IDEwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2sge1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBmbGV4OiAxO1xcbiAgICB3aWR0aDogY2xhbXAoMjAwcHgsIDYwJSwgODAwcHgpO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAvKiBtYXgtd2lkdGg6IDUwMHB4OyAqL1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMTc1bXMgZWFzZS1pbjtcXG59XFxuXFxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzay5oaWRkZW4ge1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrID4gZGl2IHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDE3NW1zIGVhc2UtaW47XFxufVxcblxcbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2sgPiBkaXYuaGlkZGVuIHtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuLnRhc2stcHJvamVjdC1jb2xvciB7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgd2lkdGg6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCB2YXIoLS10ZXh0LW11dGVkKTtcXG59XFxuXFxuXFxuXFxuXFxuLyogTGVmdCBkaXYgbGF5b3V0ICovXFxuXFxuLmxlZnQgPiAubGVmdC1maXJzdC1zZWN0aW9uIHtcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGZsZXg6IDAgMCAyMDBweDtcXG4gICAgLyogbWFyZ2luLWxlZnQ6IDEwcHg7ICovXFxufVxcblxcbi5sZWZ0ID4gLmxlZnQtc2Vjb25kLXNlY3Rpb24ge1xcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgZmxleDogMSAwIDIwMHB4O1xcbiAgICAvKiBtYXJnaW4tbGVmdDogMTBweDsgKi9cXG59XFxuXFxuXFxuXFxuLmxlZnQgPiAubGVmdC1maXJzdC1zZWN0aW9uID4gcCB7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5sZWZ0ID4gLmxlZnQtZmlyc3Qtc2VjdGlvbiB1bCxcXG4ubGVmdCA+IC5sZWZ0LXNlY29uZC1zZWN0aW9uIHVsIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ubGVmdCA+IC5sZWZ0LWZpcnN0LXNlY3Rpb24gbGkge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgei1pbmRleDogMTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmxlZnQgPiAubGVmdC1zZWNvbmQtc2VjdGlvbiBsaSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmxlZnQgPiAubGVmdC1maXJzdC1zZWN0aW9uIGxpID4gLmltYWdlIHtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB3aWR0aDogMjBweDtcXG5cXG59XFxuXFxuXFxuLyogU2xpZGVyIG9uIHZpZXdzICovXFxuXFxuLmxlZnQgPiAubGVmdC1maXJzdC1zZWN0aW9uIC50YXNrLWFuaW1hdGlvbixcXG4ubGVmdCA+IC5sZWZ0LXNlY29uZC1zZWN0aW9uIGxpW2RhdGEtYWN0aXZlPSd0cnVlJ11+LnRhc2stYW5pbWF0aW9uIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAvKiB0b3A6IDA7ICovXFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCB2YXIoLS1hY2NlbnQtbGlnaHQpO1xcbiAgICB6LWluZGV4OiAwO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG5cXG4udmlld3MgPiBsaTpudGgtY2hpbGQoMSlbZGF0YS1hY3RpdmU9J3RydWUnXX4udGFzay1hbmltYXRpb24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdG9wOiAwO1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4udmlld3MgPiBsaTpudGgtY2hpbGQoMilbZGF0YS1hY3RpdmU9J3RydWUnXX4udGFzay1hbmltYXRpb24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdG9wOiA1MHB4O1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4udmlld3MgPiBsaTpudGgtY2hpbGQoMylbZGF0YS1hY3RpdmU9J3RydWUnXX4udGFzay1hbmltYXRpb24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdG9wOiAxMDBweDtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuXFxuLyogVmlld3Mgc3R5bGVzICovXFxuXFxuLmxlZnQgPiAubGVmdC1maXJzdC1zZWN0aW9uIGxpW2RhdGEtYWN0aXZlPSdmYWxzZSddOmhvdmVyLFxcbi5sZWZ0ID4gLmxlZnQtc2Vjb25kLXNlY3Rpb24gbGk6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmExODFiMjg7XFxufVxcblxcbi5sZWZ0ID4gLmxlZnQtZmlyc3Qtc2VjdGlvbiBsaVtkYXRhLWFjdGl2ZT0ndHJ1ZSddID4gZGl2ID4gc3ZnIHtcXG4gICAgZmlsbDogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG59XFxuXFxuLmxlZnQgPiAubGVmdC1maXJzdC1zZWN0aW9uIGxpW2RhdGEtYWN0aXZlPSd0cnVlJ10gPiBwIHtcXG4gICAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxufVxcblxcbi5sZWZ0ID4gLmxlZnQtc2Vjb25kLXNlY3Rpb24gbGkuZm9udC1hY2NlbnQgPiBkaXYge1xcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG59XFxuXFxuLmxlZnQgPiAubGVmdC1maXJzdC1zZWN0aW9uIGxpW2RhdGEtYWN0aXZlPSdmYWxzZSddOmFjdGl2ZSxcXG4ubGVmdCA+IC5sZWZ0LXNlY29uZC1zZWN0aW9uIGxpOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiYTE4MWI1YjtcXG59XFxuXFxuXFxuLyogU2xpZGVyIG9uIHByb2plY3RzICovXFxuXFxuLnNlY29uZC1zZWN0aW9uLWxpc3QgPiBsaTpudGgtY2hpbGQoMSlbZGF0YS1hY3RpdmU9J3RydWUnXX4udGFzay1hbmltYXRpb24ge1xcbiAgICAvKiB3aWR0aDogMTAwJTsgKi9cXG4gICAgdG9wOiAwO1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uc2Vjb25kLXNlY3Rpb24tbGlzdCA+IGxpOm50aC1jaGlsZCgyKVtkYXRhLWFjdGl2ZT0ndHJ1ZSddfi50YXNrLWFuaW1hdGlvbiB7XFxuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xcbiAgICB0b3A6IDUwcHg7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5zZWNvbmQtc2VjdGlvbi1saXN0ID4gbGk6bnRoLWNoaWxkKDMpW2RhdGEtYWN0aXZlPSd0cnVlJ11+LnRhc2stYW5pbWF0aW9uIHtcXG4gICAgLyogd2lkdGg6IDEwMCU7ICovXFxuICAgIHRvcDogMTAwcHg7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5zZWNvbmQtc2VjdGlvbi1saXN0ID4gbGk6bnRoLWNoaWxkKDQpW2RhdGEtYWN0aXZlPSd0cnVlJ11+LnRhc2stYW5pbWF0aW9uIHtcXG4gICAgLyogd2lkdGg6IDEwMCU7ICovXFxuICAgIHRvcDogMTUwcHg7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5zZWNvbmQtc2VjdGlvbi1saXN0ID4gbGk6bnRoLWNoaWxkKDUpW2RhdGEtYWN0aXZlPSd0cnVlJ11+LnRhc2stYW5pbWF0aW9uIHtcXG4gICAgLyogd2lkdGg6IDEwMCU7ICovXFxuICAgIHRvcDogMjAwcHg7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5zZWNvbmQtc2VjdGlvbi1saXN0ID4gbGk6bnRoLWNoaWxkKDYpW2RhdGEtYWN0aXZlPSd0cnVlJ11+LnRhc2stYW5pbWF0aW9uIHtcXG4gICAgLyogd2lkdGg6IDEwMCU7ICovXFxuICAgIHRvcDogMjUwcHg7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5zZWNvbmQtc2VjdGlvbi1saXN0ID4gbGk6bnRoLWNoaWxkKDcpW2RhdGEtYWN0aXZlPSd0cnVlJ11+LnRhc2stYW5pbWF0aW9uIHtcXG4gICAgLyogd2lkdGg6IDEwMCU7ICovXFxuICAgIHRvcDogMzAwcHg7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5zZWNvbmQtc2VjdGlvbi1saXN0ID4gbGk6bnRoLWNoaWxkKDgpW2RhdGEtYWN0aXZlPSd0cnVlJ11+LnRhc2stYW5pbWF0aW9uIHtcXG4gICAgLyogd2lkdGg6IDEwMCU7ICovXFxuICAgIHRvcDogMzUwcHg7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5zZWNvbmQtc2VjdGlvbi1saXN0ID4gbGk6bnRoLWNoaWxkKDkpW2RhdGEtYWN0aXZlPSd0cnVlJ11+LnRhc2stYW5pbWF0aW9uIHtcXG4gICAgLyogd2lkdGg6IDEwMCU7ICovXFxuICAgIHRvcDogNDAwcHg7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5zZWNvbmQtc2VjdGlvbi1saXN0ID4gbGk6bnRoLWNoaWxkKDEwKVtkYXRhLWFjdGl2ZT0ndHJ1ZSddfi50YXNrLWFuaW1hdGlvbiB7XFxuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xcbiAgICB0b3A6IDQ1MHB4O1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uc2Vjb25kLXNlY3Rpb24tbGlzdCA+IGxpOm50aC1jaGlsZCgxMSlbZGF0YS1hY3RpdmU9J3RydWUnXX4udGFzay1hbmltYXRpb24ge1xcbiAgICAvKiB3aWR0aDogMTAwJTsgKi9cXG4gICAgdG9wOiA1MDBweDtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnNlY29uZC1zZWN0aW9uLWxpc3QgPiBsaTpudGgtY2hpbGQoMTIpW2RhdGEtYWN0aXZlPSd0cnVlJ11+LnRhc2stYW5pbWF0aW9uIHtcXG4gICAgLyogd2lkdGg6IDEwMCU7ICovXFxuICAgIHRvcDogNTUwcHg7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5sZWZ0ID4gLmxlZnQtc2Vjb25kLXNlY3Rpb24gPiBwIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxlZnQgPiAubGVmdC1zZWNvbmQtc2VjdGlvbiBsaSB7XFxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5sZWZ0ID4gLmxlZnQtc2Vjb25kLXNlY3Rpb24gLmNyZWF0ZS1wcm9qZWN0IHtcXG4gICAgLyogbWFyZ2luLWxlZnQ6IDUwcHg7ICovXFxuICAgIG1hcmdpbi10b3A6IDMwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubGVmdCA+IC5sZWZ0LXNlY29uZC1zZWN0aW9uIC5jcmVhdGUtcHJvamVjdCBkaXYge1xcbiAgICAvKiBmb250LXN0eWxlOiBpdGFsaWM7ICovXFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLmxlZnQgPiAubGVmdC1zZWNvbmQtc2VjdGlvbiAuY3JlYXRlLXByb2plY3Q6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmExODFiMjg7XFxufVxcblxcbi5sZWZ0ID4gLmxlZnQtc2Vjb25kLXNlY3Rpb24gLmNyZWF0ZS1wcm9qZWN0OmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiYTE4MWI1Ylxcbn1cXG5cXG4ubGVmdCA+IC5sZWZ0LXNlY29uZC1zZWN0aW9uIC5jcmVhdGUtcHJvamVjdCA+IGRpdjpmaXJzdC1jaGlsZHtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB3aWR0aDogMjBweDtcXG59XFxuXFxuXFxuLyogRm9vdGVyIGFkZCBuZXcgdGFzayBidXR0b24gKi9cXG5cXG4uZm9vdGVyID4gLmZvb3Rlci1yaWdodCA+IC5jcmVhdGUtdGFzayB7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwMHB4KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZm9vdGVyID4gLmZvb3Rlci1yaWdodCA+IC5jcmVhdGUtdGFzayA+IC5jcmVhdGUtdGFzay1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCB2YXIoLS1ib3JkZXItZGFyayk7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDJweCB2YXIoLS1ib3JkZXItY29sb3IpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluLW91dDtcXG59XFxuXFxuLmZvb3RlciA+IC5mb290ZXItcmlnaHQgPiAuY3JlYXRlLXRhc2sgPiAuY3JlYXRlLXRhc2stY29udGFpbmVyIGRpdjpudGgtY2hpbGQoMikge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5mb290ZXIgPiAuZm9vdGVyLXJpZ2h0ID4gLmNyZWF0ZS10YXNrID4gLmNyZWF0ZS10YXNrLWNvbnRhaW5lciA+IGRpdjpmaXJzdC1jaGlsZCB7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgd2lkdGg6IDIwcHg7XFxufVxcblxcbi5mb290ZXIgPiAuZm9vdGVyLXJpZ2h0ID4gLmNyZWF0ZS10YXNrID4gLmNyZWF0ZS10YXNrLWNvbnRhaW5lcjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1ob3Zlcik7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG5cXG59XFxuXFxuLmZvb3RlciA+IC5mb290ZXItcmlnaHQgPiAuY3JlYXRlLXRhc2sgPiAuY3JlYXRlLXRhc2stY29udGFpbmVyOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1hY3RpdmUpXFxufVxcblxcblxcbi8qIERpYWxvZyBsYXlvdXQgYW5kIGFuaW1hdGlvbnMgKi9cXG5cXG5kaWFsb2cge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgcGFkZGluZy1sZWZ0OiAzNXB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAzNXB4O1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxuICAgIC8qIHBhZGRpbmctbGVmdDogMzVweDsgKi9cXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxufVxcblxcbmRpYWxvZy5oaWRkZW4ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0b3A6IC0yMDAlO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbi1vdXQsIFxcbiAgICAgICAgICAgICAgICB0b3AgMTAwMG1zIGVhc2UtaW4tb3V0LFxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm0gMTAwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5kaWFsb2cuaGlkZGVuID4gZm9ybSA+ICoge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMTBweDtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuZGlhbG9nLmRpc3BsYXllZCB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRvcDogMCU7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC4xOCwwLjg5LDAuNDMsMS4xOSk7XFxufVxcblxcbmRpYWxvZy5kaXNwbGF5ZWQgPiBmb3JtID4gKiB7XFxuICAgIHRvcDogMHB4O1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG5kaWFsb2cuZGlzcGxheWVkLm5ldy1wcm9qZWN0ID4gZm9ybSAucHJvamVjdC1kaWFsb2ctbmFtZSB7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbi1vdXQgMjAwbXM7XFxufVxcblxcbmRpYWxvZy5kaXNwbGF5ZWQubmV3LXByb2plY3QgPiBmb3JtIC5pbnB1dC1jb250YWluZXIge1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0IDI1MG1zO1xcbn1cXG5cXG5kaWFsb2cuZGlzcGxheWVkLm5ldy1wcm9qZWN0ID4gZm9ybSAucHJvamVjdC1uYW1lLWZpZWxkLWRpdiB7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbi1vdXQgMzAwbXM7XFxufVxcblxcbmRpYWxvZy5kaXNwbGF5ZWQubmV3LXByb2plY3QgPiBmb3JtIC5wcm9qZWN0LWNvbG9yLWZpZWxkLWRpdiB7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbi1vdXQgMzUwbXM7XFxufVxcblxcbmRpYWxvZy5kaXNwbGF5ZWQubmV3LXByb2plY3QgPiBmb3JtID4gYnV0dG9uIHtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dCA0MDBtcztcXG59XFxuXFxuZGlhbG9nLmRpc3BsYXllZC5uZXctcHJvamVjdCA+IGZvcm0gPiAuY2xvc2UtcHJvamVjdC1kaWFsb2cge1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0IDQ1MG1zO1xcbn1cXG5cXG5cXG5kaWFsb2cuZGlzcGxheWVkLm5ldy10YXNrID4gZm9ybSAudGFzay1kaWFsb2ctbmFtZSB7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbi1vdXQgMjAwbXM7XFxufVxcblxcbmRpYWxvZy5kaXNwbGF5ZWQubmV3LXRhc2sgPiBmb3JtID4gLnRhc2stcHJvamVjdC1maWVsZC1kaXYge1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0IDI1MG1zO1xcbn1cXG5cXG5kaWFsb2cuZGlzcGxheWVkLm5ldy10YXNrID4gZm9ybSA+IC50YXNrLXRpdGxlLWZpZWxkLWRpdiB7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbi1vdXQgMzAwbXM7XFxufVxcblxcbmRpYWxvZy5kaXNwbGF5ZWQubmV3LXRhc2sgPiBmb3JtID4gLnRhc2stbm90ZXMtZmllbGQtZGl2IHtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dCAzNTBtcztcXG59XFxuXFxuZGlhbG9nLmRpc3BsYXllZC5uZXctdGFzayA+IGZvcm0gPiAudGFzay1wcmlvcml0eS1maWVsZC1kaXYge1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0IDQwMG1zO1xcbn1cXG5cXG5kaWFsb2cuZGlzcGxheWVkLm5ldy10YXNrID4gZm9ybSA+IC50YXNrLWRhdGUtZmllbGQtZGl2IHtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dCA0NTBtcztcXG59XFxuXFxuZGlhbG9nLmRpc3BsYXllZC5uZXctdGFzayA+IGZvcm0gPiBidXR0b24ge1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0IDUwMG1zLCBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZSwgYm9yZGVyLWNvbG9yIDAuMXMgZWFzZTtcXG5cXG59XFxuXFxuZGlhbG9nLmRpc3BsYXllZC5uZXctdGFzayA+IGZvcm0gPiAuY2xvc2UtdGFzay1kaWFsb2cge1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0IDU1MG1zO1xcbn1cXG5cXG5cXG5cXG4ubmV3LXByb2plY3QsXFxuLm5ldy10YXNrIHtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWxpZ2h0KTtcXG59XFxuXFxuLm5ldy1wcm9qZWN0ID4gZm9ybSxcXG4ubmV3LXRhc2sgPiBmb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5uZXctdGFzayA+IGZvcm0gPiAudGFzay1wcm9qZWN0LWZpZWxkLWRpdixcXG4ubmV3LXRhc2sgPiBmb3JtID4gLnRhc2stdGl0bGUtZmllbGQtZGl2LFxcbi5uZXctdGFzayA+IGZvcm0gPiAudGFzay1ub3Rlcy1maWVsZC1kaXYsXFxuLm5ldy10YXNrID4gZm9ybSA+IC50YXNrLXByaW9yaXR5LWZpZWxkLWRpdixcXG4ubmV3LXRhc2sgPiBmb3JtID4gLnRhc2stZGF0ZS1maWVsZC1kaXYsXFxuLm5ldy1wcm9qZWN0ID4gZm9ybSAgLnByb2plY3QtbmFtZS1maWVsZC1kaXYsXFxuLm5ldy1wcm9qZWN0ID4gZm9ybSAgLnByb2plY3QtY29sb3ItZmllbGQtZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm5ldy10YXNrID4gZm9ybSA+IC50YXNrLWRpYWxvZy1uYW1lLFxcbi5uZXctcHJvamVjdCA+IGZvcm0gPiAucHJvamVjdC1kaWFsb2ctbmFtZSB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbn1cXG5cXG4ubmV3LXRhc2sgPiBmb3JtID4gYnV0dG9uLFxcbi5uZXctcHJvamVjdCA+IGZvcm0gPiBidXR0b24ge1xcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIHZhcigtLWJvcmRlci1kYXJrKTtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktbGlnaHQpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5uZXctdGFzayA+IGZvcm0gPiBidXR0b246aG92ZXIsXFxuLm5ldy1wcm9qZWN0ID4gZm9ybSA+IGJ1dHRvbjpob3ZlciB7XFxuICAgIGJvcmRlcjogMC41cHggc29saWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxufVxcblxcbi5uZXctdGFzayA+IGZvcm0gPiBidXR0b246YWN0aXZlLFxcbi5uZXctcHJvamVjdCA+IGZvcm0gPiBidXR0b246YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWRhcmspO1xcbn1cXG5cXG4ubmV3LXRhc2sgPiBmb3JtID4gLmNsb3NlLXRhc2stZGlhbG9nLFxcbi5uZXctcHJvamVjdCA+IGZvcm0gPiAuY2xvc2UtcHJvamVjdC1kaWFsb2cge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAxMHB4O1xcbiAgICB0b3A6IDEwcHg7XFxufVxcblxcbi5uZXctdGFzayA+IGZvcm0gPiAuY2xvc2UtdGFzay1kaWFsb2cgc3BhbixcXG4ubmV3LXByb2plY3QgPiBmb3JtID4gLmNsb3NlLXByb2plY3QtZGlhbG9nIHNwYW4ge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICBvcGFjaXR5OiAwLjc7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjVzLCBvcGFjaXR5IDAuMjVzO1xcbn1cXG5cXG4ubmV3LXRhc2sgPiBmb3JtID4gLmNsb3NlLXRhc2stZGlhbG9nOmhvdmVyIHNwYW4sXFxuLm5ldy1wcm9qZWN0ID4gZm9ybSA+IC5jbG9zZS1wcm9qZWN0LWRpYWxvZzpob3ZlciBzcGFuIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpIHNjYWxlKDEuMSk7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogRGlhbG9nIGlucHV0IHN0eWxlcyAqL1xcblxcbi5uZXctdGFzayA+IGZvcm0gaW5wdXQsXFxuLm5ldy10YXNrID4gZm9ybSBzZWxlY3QsXFxuLm5ldy10YXNrID4gZm9ybSB0ZXh0YXJlYSxcXG4ubmV3LXByb2plY3QgPiBmb3JtIGlucHV0LFxcbi5uZXctcHJvamVjdCA+IGZvcm0gc2VsZWN0LFxcbi5uZXctcHJvamVjdCA+IGZvcm0gdGV4dGFyZWEge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5uZXctdGFzayA+IGZvcm0gaW5wdXQ6aG92ZXIsXFxuLm5ldy10YXNrID4gZm9ybSBzZWxlY3Q6aG92ZXIsXFxuLm5ldy10YXNrID4gZm9ybSB0ZXh0YXJlYTpob3ZlcixcXG4ubmV3LXByb2plY3QgPiBmb3JtIGlucHV0OmhvdmVyLFxcbi5uZXctcHJvamVjdCA+IGZvcm0gc2VsZWN0OmhvdmVyLFxcbi5uZXctcHJvamVjdCA+IGZvcm0gdGV4dGFyZWE6aG92ZXIge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4ubmV3LXRhc2sgPiBmb3JtIGlucHV0OjpwbGFjZWhvbGRlcixcXG4ubmV3LXRhc2sgPiBmb3JtIHNlbGVjdDo6cGxhY2Vob2xkZXIsXFxuLm5ldy10YXNrID4gZm9ybSB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIsXFxuLm5ldy1wcm9qZWN0ID4gZm9ybSBpbnB1dDo6cGxhY2Vob2xkZXIsXFxuLm5ldy1wcm9qZWN0ID4gZm9ybSBzZWxlY3Q6OnBsYWNlaG9sZGVyLFxcbi5uZXctcHJvamVjdCA+IGZvcm0gdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5uZXctdGFzayA+IGZvcm0gdGV4dGFyZWEsXFxuLm5ldy1wcm9qZWN0ID4gZm9ybSB0ZXh0YXJlYSB7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLnByb2plY3QtY29sb3ItZmllbGQtZGl2IHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ubmV3LXByb2plY3QgPiBmb3JtICNwcm9qZWN0LWNvbG9yIHtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5uZXctcHJvamVjdCA+IGZvcm0gLmlucHV0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuXFxuLmljb24ge1xcbiAgICB3aWR0aDogMjBweDtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICAvKiBmaWxsOiByZWQ7ICovXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcblxuXG4vLyBQcm9qZWN0IG1vZHVsZSBcbmNvbnN0IFByb2plY3RNb2R1bGUgPSAoZnVuY3Rpb24oKSB7XG5cbiAgICAvLyBQcm9qZWN0cyBpbiBkZWZhdWx0IGNvbmZpZ3VyYXRpb25cbiAgICBsZXQgcHJvamVjdHMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgbmFtZTogJ1Nwb3J0JyxcbiAgICAgICAgICAgIGNvbG9yOiAnIzAwRkYwMCcsXG4gICAgICAgICAgICBhY3RpdmU6ICdmYWxzZScsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgICAgbmFtZTogJ01hdGgnLFxuICAgICAgICAgICAgY29sb3I6ICcjRkYwMDAwJyxcbiAgICAgICAgICAgIGFjdGl2ZTogJ2ZhbHNlJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDMsXG4gICAgICAgICAgICBuYW1lOiAnUHJvZ3JhbW1pbmcnLFxuICAgICAgICAgICAgY29sb3I6ICcjMDAwMEZGJyxcbiAgICAgICAgICAgIGFjdGl2ZTogJ2ZhbHNlJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDQsXG4gICAgICAgICAgICBuYW1lOiAnTGVpc3VyZScsXG4gICAgICAgICAgICBjb2xvcjogJyNGRjAwRkYnLFxuICAgICAgICAgICAgYWN0aXZlOiAnZmFsc2UnLFxuICAgICAgICB9LFxuICAgIF07XG5cbiAgICBsZXQgcHJvamVjdHNDb3VudCA9IHByb2plY3RzLmxlbmd0aDtcbiAgICBcbiAgICAvLyBBZGQgbmV3IHByb2plY3RcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KG5hbWUsIGNvbG9yKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSB7fTtcbiAgICAgICAgcHJvamVjdHNDb3VudCA9IHByb2plY3RzQ291bnQgKyAxO1xuICAgICAgICBwcm9qZWN0LmlkID0gcHJvamVjdHNDb3VudDtcbiAgICAgICAgcHJvamVjdC5uYW1lID0gbmFtZTtcbiAgICAgICAgcHJvamVjdC5jb2xvciA9IGNvbG9yO1xuXG4gICAgICAgIHByb2plY3RzLnB1c2gocHJvamVjdCk7XG5cbiAgICAgICAgcmV0dXJuIHByb2plY3Q7XG4gICAgfVxuXG4gICAgLy8gUmV0cmlldmUgbGlzdCBvZiBwcm9qZWN0cyAob2JqZWN0cylcbiAgICBmdW5jdGlvbiBnZXRQcm9qZWN0T2JqZWN0cygpIHtcbiAgICAgICAgcmV0dXJuIHByb2plY3RzLnNsaWNlKCk7XG4gICAgfVxuXG4gICAgLy8gUmV0cmlldmUgbGlzdCBvZiBwcm9qZWN0ICh2YWx1ZXMpXG4gICAgZnVuY3Rpb24gZ2V0UHJvamVjdFZhbHVlcygpIHtcbiAgICAgICAgbGV0IHByb2plY3RWYWx1ZXMgPSBbXTtcbiAgICAgICAgcHJvamVjdHMuZm9yRWFjaCgocCkgPT4ge1xuICAgICAgICAgICAgcHJvamVjdFZhbHVlcy5wdXNoKHAubmFtZSk7XG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgICByZXR1cm4gcHJvamVjdFZhbHVlcztcbiAgICB9XG5cbiAgICAvLyBSZXRyaWV2ZSB0aGUgaWQgb2YgYSBwcm9qZWN0IHRoYXQgbWF0Y2hlcyB0aGUgcHJvdmlkZWQgbmFtZVxuICAgIGZ1bmN0aW9uIGZpbmRJZEJ5TmFtZShuYW1lKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0cy5maW5kKHByb2plY3QgPT4gcHJvamVjdC5uYW1lID09PSBuYW1lKTtcbiAgICAgICAgcmV0dXJuIHByb2plY3QgPyBwcm9qZWN0LmlkIDogbnVsbDtcbiAgICB9XG5cbiAgICAvLyBSZXRyaWV2ZSB0aGUgY29sb3Igb2YgYSBwcm9qZWN0IHRoYXQgbWF0Y2hlcyB0aGUgcHJvdmlkZWQgbmFtZVxuICAgIGZ1bmN0aW9uIGZpbmRDb2xvckJ5TmFtZShuYW1lKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBwcm9qZWN0cy5maW5kKHByb2plY3QgPT4gcHJvamVjdC5uYW1lID09PSBuYW1lKTtcbiAgICAgICAgcmV0dXJuIHByb2plY3QgPyBwcm9qZWN0LmNvbG9yIDogbnVsbDtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjcmVhdGVQcm9qZWN0LFxuICAgICAgICBnZXRQcm9qZWN0T2JqZWN0cyxcbiAgICAgICAgZ2V0UHJvamVjdFZhbHVlcyxcbiAgICAgICAgZmluZElkQnlOYW1lLFxuICAgICAgICBmaW5kQ29sb3JCeU5hbWUsXG4gICAgfVxuICAgIFxufSkoKTtcblxuXG4vLyBUYXNrIG1vZHVsZSBcbmNvbnN0IFRhc2tNb2R1bGUgPSAoZnVuY3Rpb24oKSB7XG5cbiAgICBsZXQgYWN0aXZlX3ZpZXcgPSAndG9kYXknO1xuICAgIGxldCBhY3RpdmVfcHJvamVjdCA9ICcnO1xuXG4gICAgZnVuY3Rpb24gY2hhbmdlQWN0aXZlVmlldyh2aWV3KSB7XG4gICAgICAgIGFjdGl2ZV92aWV3ID0gdmlldztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRBY3RpdmVWaWV3KCkge1xuICAgICAgICByZXR1cm4gYWN0aXZlX3ZpZXc7XG4gICAgfVxuXG5cblxuICAgIGZ1bmN0aW9uIGNoYW5nZUFjdGl2ZVByb2plY3QocHJvamVjdCkge1xuICAgICAgICBhY3RpdmVfcHJvamVjdCA9IHByb2plY3Q7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0QWN0aXZlUHJvamVjdCgpIHtcbiAgICAgICAgcmV0dXJuIGFjdGl2ZV9wcm9qZWN0O1xuICAgIH1cblxuXG4gICAgbGV0IHRhc2tzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgIHByb2plY3RJZDogMSxcbiAgICAgICAgICAgIHByb2plY3ROYW1lOiAnU3BvcnQnLFxuICAgICAgICAgICAgcHJvamVjdENvbG9yOiAnIzAwRkYwMCcsXG4gICAgICAgICAgICB0aXRsZTogJ0NvbXBsZXRlIEV4ZXJjaXNlIDEnLFxuICAgICAgICAgICAgbm90ZXM6ICdSZW1lbWJlciB0byBmb2N1cyBvbiB0aGUga2V5IGNvbmNlcHRzJyxcbiAgICAgICAgICAgIHByaW9yaXR5OiAnSGlnaCcsXG4gICAgICAgICAgICBkYXRlOiAnMjAyMy0xMS0xNScsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgICAgcHJvamVjdElkOiAyLFxuICAgICAgICAgICAgcHJvamVjdE5hbWU6ICdNYXRoJyxcbiAgICAgICAgICAgIHByb2plY3RDb2xvcjogJyNGRjAwMDAnLFxuICAgICAgICAgICAgdGl0bGU6ICdTdHVkeSBBbGdlYnJhJyxcbiAgICAgICAgICAgIG5vdGVzOiAnUmV2aWV3IGNoYXB0ZXJzIDMgYW5kIDQgZm9yIHRoZSB1cGNvbWluZyB0ZXN0JyxcbiAgICAgICAgICAgIHByaW9yaXR5OiAnTWVkaXVtJyxcbiAgICAgICAgICAgIGRhdGU6ICcyMDIzLTExLTIxJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDMsXG4gICAgICAgICAgICBwcm9qZWN0SWQ6IDMsXG4gICAgICAgICAgICBwcm9qZWN0TmFtZTogJ1Byb2dyYW1taW5nJyxcbiAgICAgICAgICAgIHByb2plY3RDb2xvcjogJyMwMDAwRkYnLFxuICAgICAgICAgICAgdGl0bGU6ICdDb2RlIFJldmlldyBmb3IgUHJvamVjdCBYJyxcbiAgICAgICAgICAgIG5vdGVzOiAnQ2hlY2sgZm9yIGNvZGUgcXVhbGl0eSBhbmQgcG90ZW50aWFsIG9wdGltaXphdGlvbnMnLFxuICAgICAgICAgICAgcHJpb3JpdHk6ICdIaWdoJyxcbiAgICAgICAgICAgIGRhdGU6ICcyMDIzLTExLTIxJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDQsXG4gICAgICAgICAgICBwcm9qZWN0SWQ6IDQsXG4gICAgICAgICAgICBwcm9qZWN0TmFtZTogJ0xlaXN1cmUnLFxuICAgICAgICAgICAgcHJvamVjdENvbG9yOiAnI0ZGMDBGRicsXG4gICAgICAgICAgICB0aXRsZTogJ0J1eSBncm9jZXJpZXMnLFxuICAgICAgICAgICAgbm90ZXM6ICdNaWxrLCBlZ2dzLCBicmVhZCwgYW5kIGZydWl0cycsXG4gICAgICAgICAgICBwcmlvcml0eTogJ0xvdycsXG4gICAgICAgICAgICBkYXRlOiAnMjAyMy0xMS0yMCcsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiA1LFxuICAgICAgICAgICAgcHJvamVjdElkOiAxLFxuICAgICAgICAgICAgcHJvamVjdE5hbWU6ICdTcG9ydCcsXG4gICAgICAgICAgICBwcm9qZWN0Q29sb3I6ICcjMDBGRjAwJyxcbiAgICAgICAgICAgIHRpdGxlOiAnUmVhZCBcIlRoZSBHcmVhdCBHYXRzYnlcIicsXG4gICAgICAgICAgICBub3RlczogJ0NvbXBsZXRlIGNoYXB0ZXJzIDEtMyBieSB0aGUgZW5kIG9mIHRoZSB3ZWVrJyxcbiAgICAgICAgICAgIHByaW9yaXR5OiAnTWVkaXVtJyxcbiAgICAgICAgICAgIGRhdGU6ICcyMDIzLTExLTIyJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDYsXG4gICAgICAgICAgICBwcm9qZWN0SWQ6IDIsXG4gICAgICAgICAgICBwcm9qZWN0TmFtZTogJ01hdGgnLFxuICAgICAgICAgICAgcHJvamVjdENvbG9yOiAnI0ZGMDAwMCcsXG4gICAgICAgICAgICB0aXRsZTogJ1ByZXBhcmUgcHJlc2VudGF0aW9uIHNsaWRlcycsXG4gICAgICAgICAgICBub3RlczogJ0luY29ycG9yYXRlIGZlZWRiYWNrIGZyb20gdGVhbSBtZW1iZXJzJyxcbiAgICAgICAgICAgIHByaW9yaXR5OiAnSGlnaCcsXG4gICAgICAgICAgICBkYXRlOiAnMjAyMy0xMS0yNScsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiA3LFxuICAgICAgICAgICAgcHJvamVjdElkOiAzLFxuICAgICAgICAgICAgcHJvamVjdE5hbWU6ICdQcm9ncmFtbWluZycsXG4gICAgICAgICAgICBwcm9qZWN0Q29sb3I6ICcjMDAwMEZGJyxcbiAgICAgICAgICAgIHRpdGxlOiAnUHJhY3RpY2UgZ3VpdGFyJyxcbiAgICAgICAgICAgIG5vdGVzOiAnTGVhcm4gbmV3IGNob3JkcyBhbmQgcHJhY3RpY2Ugc2NhbGVzJyxcbiAgICAgICAgICAgIHByaW9yaXR5OiAnTWVkaXVtJyxcbiAgICAgICAgICAgIGRhdGU6ICcyMDIzLTExLTI4JyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDgsXG4gICAgICAgICAgICBwcm9qZWN0SWQ6IDQsXG4gICAgICAgICAgICBwcm9qZWN0TmFtZTogJ0xlaXN1cmUnLFxuICAgICAgICAgICAgcHJvamVjdENvbG9yOiAnI0ZGMDBGRicsXG4gICAgICAgICAgICB0aXRsZTogJ1dyaXRlIGRvY3VtZW50YXRpb24nLFxuICAgICAgICAgICAgbm90ZXM6ICdEb2N1bWVudCB0aGUgbmV3IEFQSSBlbmRwb2ludHMnLFxuICAgICAgICAgICAgcHJpb3JpdHk6ICdIaWdoJyxcbiAgICAgICAgICAgIGRhdGU6ICcyMDIzLTExLTMwJyxcbiAgICAgICAgfSxcbiAgICAgICAgXG5cbiAgICBdO1xuICAgIFxuICAgIGxldCB0YXNrc0NvdW50ID0gdGFza3MubGVuZ3RoO1xuXG4gICAgLy8gQWRkIG5ldyB0YXNrIG9iamVjdFxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRhc2socHJvamVjdE5hbWUsIHRpdGxlLCBub3RlcywgcHJpb3JpdHksIGRhdGUpIHtcbiAgICAgICAgY29uc3QgdGFzayA9IHt9O1xuICAgICAgICB0YXNrc0NvdW50ID0gdGFza3NDb3VudCArIDE7XG4gICAgICAgIHRhc2suaWQgPSB0YXNrc0NvdW50O1xuICAgICAgICB0YXNrLnByb2plY3RJZCA9IFByb2plY3RNb2R1bGUuZmluZElkQnlOYW1lKHByb2plY3ROYW1lKTtcbiAgICAgICAgdGFzay5wcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lO1xuICAgICAgICB0YXNrLnByb2plY3RDb2xvciA9IFByb2plY3RNb2R1bGUuZmluZENvbG9yQnlOYW1lKHByb2plY3ROYW1lKTtcbiAgICAgICAgdGFzay50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0YXNrLm5vdGVzID0gbm90ZXM7XG4gICAgICAgIHRhc2sucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGFzay5kYXRlID0gZGF0ZTtcbiAgXG4gICAgICAgIHRhc2tzLnB1c2godGFzayk7XG4gICAgICAgIHJldHVybiB0YXNrO1xuICAgIH1cblxuICAgIC8vIFJldHJpZXZlIGFsbCB0YXNrc1xuICAgIGZ1bmN0aW9uIGdldEFsbFRhc2tzKCkge1xuICAgICAgICBjaGFuZ2VBY3RpdmVWaWV3KCdhbGwnKTtcbiAgICAgICAgcmV0dXJuIHRhc2tzLnNsaWNlKCk7XG4gICAgfVxuXG4gICAgLy8gUmV0cmlldmUgdG9kYXkncyB0YXNrc1xuICAgIGZ1bmN0aW9uIGdldFRvZGF5VGFza3MoKSB7XG4gICAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTsgICAgICAgIFxuICAgICAgICBjb25zdCB0YXNrc1RvUmV0dXJuID0gW107XG4gICAgICAgIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGVTdHJpbmcgPSB0YXNrLmRhdGU7XG4gICAgICAgICAgICBjb25zdCBkYXRlUGFydHMgPSBkYXRlU3RyaW5nLnNwbGl0KFwiLVwiKTtcblxuICAgICAgICAgICAgY29uc3QgeWVhciA9IHBhcnNlSW50KGRhdGVQYXJ0c1swXSk7XG4gICAgICAgICAgICBjb25zdCBtb250aCA9IHBhcnNlSW50KGRhdGVQYXJ0c1sxXSk7XG4gICAgICAgICAgICBjb25zdCBkYXRlID0gcGFyc2VJbnQoZGF0ZVBhcnRzWzJdKTtcblxuICAgICAgICAgICAgY29uc3QgdGFza0RhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIGRhdGUpO1xuXG4gICAgICAgICAgICBjb25zdCBpc1NhbWVZZWFyID0gdGFza0RhdGUuZ2V0RnVsbFllYXIoKSA9PT0gdG9kYXkuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgICAgIGNvbnN0IGlzU2FtZU1vbnRoID0gdGFza0RhdGUuZ2V0TW9udGgoKSA9PT0gdG9kYXkuZ2V0TW9udGgoKTtcbiAgICAgICAgICAgIGNvbnN0IGlzU2FtZURheSA9IHRhc2tEYXRlLmdldERhdGUoKSA9PT0gdG9kYXkuZ2V0RGF0ZSgpO1xuXG5cbiAgICAgICAgICAgIGlmIChpc1NhbWVZZWFyICYmIGlzU2FtZU1vbnRoICYmIGlzU2FtZURheSkge1xuICAgICAgICAgICAgICAgIHRhc2tzVG9SZXR1cm4ucHVzaCh0YXNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBjaGFuZ2VBY3RpdmVWaWV3KCd0b2RheScpO1xuICAgICAgICByZXR1cm4gdGFza3NUb1JldHVybjtcbiAgICB9XG5cbiAgICAvLyBSZXRyaWV2ZSB0b21vcnJvdydzIHRhc2tzXG4gICAgZnVuY3Rpb24gZ2V0VG9tb3Jyb3dUYXNrcygpIHtcblxuICAgICAgICBjb25zdCB0b21vcnJvdyA9IG5ldyBEYXRlKG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgMjQgKiA2MCAqIDYwICogMTAwMCk7ICAgICAgIFxuICAgICAgICBjb25zdCB0YXNrc1RvUmV0dXJuID0gW107XG4gICAgICAgIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGVTdHJpbmcgPSB0YXNrLmRhdGU7XG4gICAgICAgICAgICBjb25zdCBkYXRlUGFydHMgPSBkYXRlU3RyaW5nLnNwbGl0KFwiLVwiKTtcblxuICAgICAgICAgICAgY29uc3QgeWVhciA9IHBhcnNlSW50KGRhdGVQYXJ0c1swXSk7XG4gICAgICAgICAgICBjb25zdCBtb250aCA9IHBhcnNlSW50KGRhdGVQYXJ0c1sxXSk7XG4gICAgICAgICAgICBjb25zdCBkYXRlID0gcGFyc2VJbnQoZGF0ZVBhcnRzWzJdKTtcblxuICAgICAgICAgICAgY29uc3QgdGFza0RhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIGRhdGUpO1xuXG4gICAgICAgICAgICBjb25zdCBpc1NhbWVZZWFyID0gdGFza0RhdGUuZ2V0RnVsbFllYXIoKSA9PT0gdG9tb3Jyb3cuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgICAgIGNvbnN0IGlzU2FtZU1vbnRoID0gdGFza0RhdGUuZ2V0TW9udGgoKSA9PT0gdG9tb3Jyb3cuZ2V0TW9udGgoKTtcbiAgICAgICAgICAgIGNvbnN0IGlzU2FtZURheSA9IHRhc2tEYXRlLmdldERhdGUoKSA9PT0gdG9tb3Jyb3cuZ2V0RGF0ZSgpO1xuXG5cbiAgICAgICAgICAgIGlmIChpc1NhbWVZZWFyICYmIGlzU2FtZU1vbnRoICYmIGlzU2FtZURheSkge1xuICAgICAgICAgICAgICAgIHRhc2tzVG9SZXR1cm4ucHVzaCh0YXNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBjaGFuZ2VBY3RpdmVWaWV3KCd0b21vcnJvdycpO1xuICAgICAgICByZXR1cm4gdGFza3NUb1JldHVybjtcblxuXG4gICAgfVxuXG4gICAgLy8gUmV0cmlldmUgdGFza3MgZnJvbSBhY3RpdmUgdmlld1xuICAgIGZ1bmN0aW9uIGdldFRhc2tzRnJvbUFjdGl2ZVZpZXcoKSB7XG4gICAgICAgIGlmIChnZXRBY3RpdmVWaWV3KCkgPT09ICd0b2RheScpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXRUb2RheVRhc2tzKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZ2V0QWN0aXZlVmlldygpID09PSAndG9tb3Jyb3cnKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0VG9tb3Jyb3dUYXNrcygpO1xuICAgICAgICB9IGVsc2UgaWYgKGdldEFjdGl2ZVZpZXcoKSA9PT0gJ2FsbCcpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXRBbGxUYXNrcygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0cmlldmUgYSBwcm9qZWN0J3MgdGFza3NcbiAgICBmdW5jdGlvbiBnZXRQcm9qZWN0VGFza3MocHJvamVjdCwgdGFza3MpIHtcbiAgICAgICAgaWYgKHByb2plY3QgPT0gJycpIHtcbiAgICAgICAgICAgIHJldHVybiB0YXNrcztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHRhc2tzVG9SZXR1cm4gPSBbXTtcbiAgICAgICAgXG4gICAgICAgIHRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICBpZiAodGFzay5wcm9qZWN0TmFtZSA9PSBwcm9qZWN0KSB7XG4gICAgICAgICAgICAgICAgdGFza3NUb1JldHVybi5wdXNoKHRhc2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGNoYW5nZUFjdGl2ZVByb2plY3QocHJvamVjdCk7XG5cbiAgICAgICAgcmV0dXJuIHRhc2tzVG9SZXR1cm47XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3JlYXRlVGFzayxcbiAgICAgICAgZ2V0QWxsVGFza3MsXG4gICAgICAgIGdldFRvZGF5VGFza3MsXG4gICAgICAgIGdldFRvbW9ycm93VGFza3MsXG4gICAgICAgIGNoYW5nZUFjdGl2ZVZpZXcsXG4gICAgICAgIGdldEFjdGl2ZVZpZXcsXG4gICAgICAgIGNoYW5nZUFjdGl2ZVByb2plY3QsXG4gICAgICAgIGdldEFjdGl2ZVByb2plY3QsXG4gICAgICAgIGdldFByb2plY3RUYXNrcyxcbiAgICAgICAgZ2V0VGFza3NGcm9tQWN0aXZlVmlldyxcbiAgICB9XG4gICAgXG59KSgpO1xuXG5cbi8vIERPTSBtb2R1bGVcbmNvbnN0IERPTU1vZHVsZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlTWFpbkRpdigpIHtcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICAgICAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtYWluRGl2LmNsYXNzTGlzdC5hZGQoJ21haW4nKTtcbiAgICAgICAgYm9keS5hcHBlbmQobWFpbkRpdik7XG4gICAgfVxuXG4gICAgY29uc3QgY3JlYXRlRGlhbG9ncyA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgICAgIC8vIG5ld1Byb2plY3REaWFsb2dIYW5kbGVyKCk7XG4gICAgICAgIC8vIG5ld1Rhc2tEaWFsb2dIYW5kbGVyKCk7XG5cbiAgICAgICAgZnVuY3Rpb24gbmV3UHJvamVjdERpYWxvZ0hhbmRsZXIoKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdQcm9qZWN0RGlhbG9nID0gY3JlYXRlUHJvamVjdERpYWxvZygpO1xuICAgICAgICAgICAgY29uc3QgbmV3UHJvamVjdERpYWxvZ0Zvcm0gPSBjcmVhdGVQcm9qZWN0RGlhbG9nRm9ybSgpO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0RGlhbG9nKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Byb2plY3REaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaWFsb2cnKTtcbiAgICAgICAgICAgICAgICBuZXdQcm9qZWN0RGlhbG9nLmNsYXNzTGlzdC5hZGQoJ25ldy1wcm9qZWN0JywgJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgIGJvZHkuYXBwZW5kKG5ld1Byb2plY3REaWFsb2cpO1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXdQcm9qZWN0RGlhbG9nO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0RGlhbG9nRm9ybSgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdQcm9qZWN0RGlhbG9nRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgICAgICAgICBuZXdQcm9qZWN0RGlhbG9nLmFwcGVuZChuZXdQcm9qZWN0RGlhbG9nRm9ybSk7XG4gICAgICAgICAgICAgICAgbmV3UHJvamVjdERpYWxvZ0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpYWxvZy5uZXctcHJvamVjdCA+IGZvcm0gaW5wdXQjcHJvamVjdC1uYW1lJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RDb2xvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpYWxvZy5uZXctcHJvamVjdCA+IGZvcm0gaW5wdXQjcHJvamVjdC1jb2xvcicpO1xuICAgICAgICAgICAgICAgICAgICBQcm9qZWN0TW9kdWxlLmNyZWF0ZVByb2plY3QocHJvamVjdE5hbWUudmFsdWUsIHByb2plY3RDb2xvci52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIERPTU1vZHVsZS5jcmVhdGVMZWZ0RGl2LmNyZWF0ZVByb2plY3RzKFByb2plY3RNb2R1bGUuZ2V0UHJvamVjdE9iamVjdHMoKSk7XG4gICAgICAgICAgICAgICAgICAgIERPTU1vZHVsZS5jcmVhdGVEaWFsb2dzLm5ld1Rhc2tEaWFsb2dIYW5kbGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZGlhbG9nTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGRpYWxvZ05hbWUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1kaWFsb2ctbmFtZScpO1xuICAgICAgICAgICAgICAgIGRpYWxvZ05hbWUudGV4dENvbnRlbnQgPSAnTmV3IFByb2plY3QnO1xuICAgICAgICAgICAgICAgIG5ld1Byb2plY3REaWFsb2dGb3JtLmFwcGVuZChkaWFsb2dOYW1lKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaW5wdXQtY29udGFpbmVyJyk7XG4gICAgICAgICAgICAgICAgbmV3UHJvamVjdERpYWxvZ0Zvcm0uYXBwZW5kKGlucHV0Q29udGFpbmVyKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IG5hbWVGaWVsZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIG5hbWVGaWVsZERpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW5hbWUtZmllbGQtZGl2Jyk7XG4gICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXIuYXBwZW5kKG5hbWVGaWVsZERpdik7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBuYW1lRmllbGRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICAgICAgbmFtZUZpZWxkTGFiZWwudGV4dENvbnRlbnQgPSAnTmFtZSonO1xuICAgICAgICAgICAgICAgIG5hbWVGaWVsZExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3Byb2plY3QtbmFtZScpO1xuICAgICAgICAgICAgICAgIG5hbWVGaWVsZERpdi5hcHBlbmQobmFtZUZpZWxkTGFiZWwpO1xuICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IG5hbWVGaWVsZElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICBuYW1lRmllbGRJbnB1dC50ZXh0Q29udGVudCA9ICdOYW1lJztcbiAgICAgICAgICAgICAgICBuYW1lRmllbGRJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICAgICAgICAgIG5hbWVGaWVsZElucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdC1uYW1lJyk7XG4gICAgICAgICAgICAgICAgbmFtZUZpZWxkSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdBd2Vzb21lIHByb2plY3QuLi4nKTtcbiAgICAgICAgICAgICAgICBuYW1lRmllbGRJbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJ3JlcXVpcmVkJyk7XG4gICAgICAgICAgICAgICAgbmFtZUZpZWxkRGl2LmFwcGVuZChuYW1lRmllbGRJbnB1dCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjb2xvckZpZWxkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgY29sb3JGaWVsZERpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWNvbG9yLWZpZWxkLWRpdicpO1xuICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyLmFwcGVuZChjb2xvckZpZWxkRGl2KTtcbiAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBjb2xvckZpZWxkTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgICAgIGNvbG9yRmllbGRMYWJlbC50ZXh0Q29udGVudCA9ICdDb2xvcic7XG4gICAgICAgICAgICAgICAgY29sb3JGaWVsZExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3Byb2plY3QtY29sb3InKTtcbiAgICAgICAgICAgICAgICBjb2xvckZpZWxkRGl2LmFwcGVuZChjb2xvckZpZWxkTGFiZWwpO1xuICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbG9yRmllbGRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgY29sb3JGaWVsZElucHV0LnRleHRDb250ZW50ID0gJ0NvbG9yJztcbiAgICAgICAgICAgICAgICBjb2xvckZpZWxkSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NvbG9yJyk7XG4gICAgICAgICAgICAgICAgY29sb3JGaWVsZElucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdC1jb2xvcicpO1xuICAgICAgICAgICAgICAgIGNvbG9yRmllbGREaXYuYXBwZW5kKGNvbG9yRmllbGRJbnB1dCk7XG4gICAgXG4gICAgICAgICAgICAgICAgY29uc3Qgc3VibWl0UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIHN1Ym1pdFByb2plY3RCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICAgICAgICAgICAgICAgIHN1Ym1pdFByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSAnU2F2ZSc7XG4gICAgICAgICAgICAgICAgbmV3UHJvamVjdERpYWxvZ0Zvcm0uYXBwZW5kKHN1Ym1pdFByb2plY3RCdXR0b24pO1xuICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IGNsb3NlUHJvamVjdERpYWxvZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGNsb3NlUHJvamVjdERpYWxvZ0Rpdi5jbGFzc0xpc3QuYWRkKCdjbG9zZS1wcm9qZWN0LWRpYWxvZycpO1xuICAgICAgICAgICAgICAgIG5ld1Byb2plY3REaWFsb2dGb3JtLmFwcGVuZChjbG9zZVByb2plY3REaWFsb2dEaXYpO1xuICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IGNsb3NlUHJvamVjdERpYWxvZ1NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICAgICAgY2xvc2VQcm9qZWN0RGlhbG9nU3Bhbi5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkJyk7XG4gICAgICAgICAgICAgICAgY2xvc2VQcm9qZWN0RGlhbG9nU3Bhbi50ZXh0Q29udGVudCA9ICdjbG9zZSc7XG4gICAgICAgICAgICAgICAgY2xvc2VQcm9qZWN0RGlhbG9nRGl2LmFwcGVuZChjbG9zZVByb2plY3REaWFsb2dTcGFuKTtcblxuICAgICAgICAgICAgICAgIC8vIEFkZCBjbG9zZSBhbmltYXRpb24gb24gU2F2ZSBhbmQgQ2xvc2VcbiAgICAgICAgICAgICAgICBoYW5kbGVDbG9zZUFuaW1hdGlvbihuZXdQcm9qZWN0RGlhbG9nRm9ybSwgbmV3UHJvamVjdERpYWxvZywgJ3N1Ym1pdCcsIG5ld1Byb2plY3REaWFsb2dGb3JtKTtcbiAgICAgICAgICAgICAgICBoYW5kbGVDbG9zZUFuaW1hdGlvbihjbG9zZVByb2plY3REaWFsb2dTcGFuLCBuZXdQcm9qZWN0RGlhbG9nLCAnY2xpY2snLCBuZXdQcm9qZWN0RGlhbG9nRm9ybSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3UHJvamVjdERpYWxvZ0Zvcm07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBuZXdUYXNrRGlhbG9nSGFuZGxlcigpIHtcblxuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdUYXNrRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10YXNrJyk7XG4gICAgICAgICAgICBpZiAoZXhpc3RpbmdUYXNrRGlhbG9nKSB7XG4gICAgICAgICAgICAgICAgZXhpc3RpbmdUYXNrRGlhbG9nLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBuZXdUYXNrRGlhbG9nID0gY3JlYXRlVGFza0RpYWxvZygpO1xuICAgICAgICAgICAgY29uc3QgbmV3VGFza0RpYWxvZ0Zvcm0gPSBjcmVhdGVUYXNrRGlhbG9nRm9ybSgpO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVUYXNrRGlhbG9nKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Rhc2tEaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaWFsb2cnKTtcbiAgICAgICAgICAgICAgICBuZXdUYXNrRGlhbG9nLmNsYXNzTGlzdC5hZGQoJ25ldy10YXNrJywgJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgIGJvZHkuYXBwZW5kKG5ld1Rhc2tEaWFsb2cpO1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXdUYXNrRGlhbG9nO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVUYXNrRGlhbG9nRm9ybSgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBleGlzdGluZ1Rhc2tEaWFsb2dGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10YXNrID4gZm9ybScpO1xuICAgICAgICAgICAgICAgIGlmIChleGlzdGluZ1Rhc2tEaWFsb2dGb3JtKSB7XG4gICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nVGFza0RpYWxvZ0Zvcm0ucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Rhc2tEaWFsb2dGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgICAgICAgICAgIG5ld1Rhc2tEaWFsb2cuYXBwZW5kKG5ld1Rhc2tEaWFsb2dGb3JtKTtcbiAgICAgICAgICAgICAgICBuZXdUYXNrRGlhbG9nRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGlhbG9nLm5ldy10YXNrID4gZm9ybSAjdGFzay1wcm9qZWN0Jyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpYWxvZy5uZXctdGFzayA+IGZvcm0gI3Rhc2stdGl0bGUnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFza05vdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGlhbG9nLm5ldy10YXNrID4gZm9ybSAjdGFzay1ub3RlcycpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaWFsb2cubmV3LXRhc2sgPiBmb3JtICN0YXNrLXByaW9yaXR5Jyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGlhbG9nLm5ldy10YXNrID4gZm9ybSAjdGFzay1kYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgIFRhc2tNb2R1bGUuY3JlYXRlVGFzayh0YXNrUHJvamVjdC52YWx1ZSwgdGFza1RpdGxlLnZhbHVlLCB0YXNrTm90ZXMudmFsdWUsIHRhc2tQcmlvcml0eS52YWx1ZSwgdGFza0RhdGUudmFsdWUpO1xuXG4gICAgICAgICAgICAgICAgICAgIERPTU1vZHVsZS5jcmVhdGVSaWdodERpdi5jcmVhdGVUYXNrcyhUYXNrTW9kdWxlLmdldFByb2plY3RUYXNrcyhUYXNrTW9kdWxlLmdldEFjdGl2ZVByb2plY3QoKSwgVGFza01vZHVsZS5nZXRUYXNrc0Zyb21BY3RpdmVWaWV3KCkpKTtcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgY29uc3QgZGlhbG9nTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGRpYWxvZ05hbWUuY2xhc3NMaXN0LmFkZCgndGFzay1kaWFsb2ctbmFtZScpO1xuICAgICAgICAgICAgICAgIGRpYWxvZ05hbWUudGV4dENvbnRlbnQgPSAnTmV3IFRhc2snO1xuICAgICAgICAgICAgICAgIG5ld1Rhc2tEaWFsb2dGb3JtLmFwcGVuZChkaWFsb2dOYW1lKTtcbiAgICBcblxuICAgICAgICAgICAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBmb3JtYXR0ZURhdGUgPSB0b2RheS50b0lTT1N0cmluZygpLnNwbGl0KCdUJylbMF07XG5cbiAgICAgICAgICAgICAgICBjb25zdCBuZXdUYXNrRGlhbG9nRmllbGRzVGVtcGxhdGUgPSBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRfdHlwZTogJ3NlbGVjdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXZfY2xhc3M6ICd0YXNrLXByb2plY3QtZmllbGQtZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRfaWQ6ICd0YXNrLXByb2plY3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRfdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdQcm9qZWN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDb250ZW50OiAnUHJvamVjdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rfb3B0aW9uczogUHJvamVjdE1vZHVsZS5nZXRQcm9qZWN0VmFsdWVzKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3Jfc3R5bGU6ICdwb2ludGVyJyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudF90eXBlOiAnaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGl2X2NsYXNzOiAndGFzay10aXRsZS1maWVsZC1kaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudF9pZDogJ3Rhc2stdGl0bGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRfdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdUaXRsZSAqJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDb250ZW50OiAnVGl0bGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9wbGFjZWhvbGRlcjogJ1JlYWQgYSBib29rJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiAncmVxdWlyZWQnLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50X3R5cGU6ICd0ZXh0YXJlYScsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXZfY2xhc3M6ICd0YXNrLW5vdGVzLWZpZWxkLWRpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50X2lkOiAndGFzay1ub3RlcycsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dF90eXBlOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnTm90ZXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENvbnRlbnQ6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dF9wbGFjZWhvbGRlcjogJ0F0IGxlYXN0IGEgcGFnZScsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRfdHlwZTogJ3NlbGVjdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXZfY2xhc3M6ICd0YXNrLXByaW9yaXR5LWZpZWxkLWRpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50X2lkOiAndGFzay1wcmlvcml0eScsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dF90eXBlOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnUHJpb3JpdHknLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENvbnRlbnQ6ICdQcmlvcml0eScsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rfb3B0aW9uczogWydIaWdoJywgJ05vcm1hbCcsICdMb3cnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdF9kZWZhdWx0OiAnTm9ybWFsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcl9zdHlsZTogJ3BvaW50ZXInLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50X3R5cGU6ICdpbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXZfY2xhc3M6ICd0YXNrLWRhdGUtZmllbGQtZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRfaWQ6ICd0YXNrLWRhdGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRfdHlwZTogJ2RhdGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdEYXRlIConLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENvbnRlbnQ6ICdEYXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkOiAncmVxdWlyZWQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGZvcm1hdHRlRGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdO1xuICAgIFxuICAgICAgICAgICAgICAgIG5ld1Rhc2tEaWFsb2dGaWVsZHNUZW1wbGF0ZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWVsZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBmaWVsZERpdi5jbGFzc0xpc3QuYWRkKGVsZW1lbnQuZGl2X2NsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgbmV3VGFza0RpYWxvZ0Zvcm0uYXBwZW5kKGZpZWxkRGl2KTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmllbGRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkTGFiZWwudGV4dENvbnRlbnQgPSBlbGVtZW50LmxhYmVsO1xuICAgICAgICAgICAgICAgICAgICBmaWVsZExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgZWxlbWVudC5lbGVtZW50X2lkKTtcbiAgICAgICAgICAgICAgICAgICAgZmllbGREaXYuYXBwZW5kKGZpZWxkTGFiZWwpO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWVsZElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50LmVsZW1lbnRfdHlwZSk7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkSW5wdXQudGV4dENvbnRlbnQgPSBlbGVtZW50LnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgICAgICBmaWVsZElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsIGVsZW1lbnQuaW5wdXRfdHlwZSk7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsIGVsZW1lbnQuZWxlbWVudF9pZCk7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsIGVsZW1lbnQudGV4dF9wbGFjZWhvbGRlcik7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkSW5wdXQuc2V0QXR0cmlidXRlKGVsZW1lbnQucmVxdWlyZWQsIGVsZW1lbnQucmVxdWlyZWQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRJbnB1dC52YWx1ZSA9IGVsZW1lbnQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZmllbGRJbnB1dC5zdHlsZS5jdXJzb3IgPSBlbGVtZW50LmN1cnNvcl9zdHlsZTtcbiAgICAgICAgICAgICAgICAgICAgZmllbGREaXYuYXBwZW5kKGZpZWxkSW5wdXQpO1xuXG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuZWxlbWVudF90eXBlID09PSAnc2VsZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZWxlY3Rfb3B0aW9ucy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBpdGVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkSW5wdXQuYXBwZW5kKG9wdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0gPT09IGVsZW1lbnQuc2VsZWN0X2RlZmF1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZSgnc2VsZWN0ZWQnLCAnJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9KVxuICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IHN1Ym1pdFRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICBzdWJtaXRUYXNrQnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgICAgICAgICAgICAgICBzdWJtaXRUYXNrQnV0dG9uLnRleHRDb250ZW50ID0gJ1NhdmUnO1xuICAgICAgICAgICAgICAgIG5ld1Rhc2tEaWFsb2dGb3JtLmFwcGVuZChzdWJtaXRUYXNrQnV0dG9uKTtcbiAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBjbG9zZVRhc2tEaWFsb2dEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBjbG9zZVRhc2tEaWFsb2dEaXYuY2xhc3NMaXN0LmFkZCgnY2xvc2UtdGFzay1kaWFsb2cnKTtcbiAgICAgICAgICAgICAgICBuZXdUYXNrRGlhbG9nRm9ybS5hcHBlbmQoY2xvc2VUYXNrRGlhbG9nRGl2KTtcbiAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBjbG9zZVRhc2tEaWFsb2dTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgICAgIGNsb3NlVGFza0RpYWxvZ1NwYW4uY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCcpO1xuICAgICAgICAgICAgICAgIGNsb3NlVGFza0RpYWxvZ1NwYW4udGV4dENvbnRlbnQgPSAnY2xvc2UnO1xuICAgICAgICAgICAgICAgIGNsb3NlVGFza0RpYWxvZ0Rpdi5hcHBlbmQoY2xvc2VUYXNrRGlhbG9nU3Bhbik7XG4gICAgXG4gICAgICAgICAgICAgICAgLy8gQWRkIGNsb3NlIGFuaW1hdGlvbiBvbiBTYXZlIGFuZCBDbG9zZVxuICAgICAgICAgICAgICAgIGhhbmRsZUNsb3NlQW5pbWF0aW9uKG5ld1Rhc2tEaWFsb2dGb3JtLCBuZXdUYXNrRGlhbG9nLCAnc3VibWl0JywgbmV3VGFza0RpYWxvZ0Zvcm0pO1xuICAgICAgICAgICAgICAgIGhhbmRsZUNsb3NlQW5pbWF0aW9uKGNsb3NlVGFza0RpYWxvZ1NwYW4sIG5ld1Rhc2tEaWFsb2csICdjbGljaycsIG5ld1Rhc2tEaWFsb2dGb3JtKTtcbiAgICAgICAgICAgIH0gICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gQ2xvc2UgYW5pbWF0aW9uIG9uIEVTQ1xuICAgICAgICBmdW5jdGlvbiBhZGRFc2NFdmVuTGlzdGVuZXIoKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcGVuRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGlhbG9nW29wZW5dJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcGVuRGlhbG9nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZURpYWxvZyhvcGVuRGlhbG9nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cblxuXG4gICAgICAgIC8vIENsb3NlIGFuaW1hdGlvbiBoYW5kbGVyXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZUNsb3NlQW5pbWF0aW9uKGV2ZW50RWxlbWVudCwgZGlhbG9nLCBldmVudFR5cGUsIGZvcm0pIHtcbiAgICAgICAgICAgIGV2ZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbmFtZScpO1xuXG4gICAgICAgICAgICAgICAgcHJvamVjdE5hbWUudmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICAvLyBmb3JtLnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgY2xvc2VEaWFsb2coZGlhbG9nKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2xvc2UgZGlhbG9nXG4gICAgICAgIGZ1bmN0aW9uIGNsb3NlRGlhbG9nKGRpYWxvZykge1xuICAgICAgICAgICAgZGlhbG9nLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgZGlhbG9nLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc3BsYXllZCcpO1xuICAgICAgICAgICAgZGlhbG9nLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBmdW5jdGlvbiBoYW5kbGVUcmFuc2l0aW9uRW5kKCkge1xuICAgICAgICAgICAgICAgIGRpYWxvZy5jbG9zZSgpO1xuICAgICAgICAgICAgICAgIGRpYWxvZy5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgaGFuZGxlVHJhbnNpdGlvbkVuZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuZXdQcm9qZWN0RGlhbG9nSGFuZGxlcixcbiAgICAgICAgICAgIG5ld1Rhc2tEaWFsb2dIYW5kbGVyLFxuICAgICAgICAgICAgYWRkRXNjRXZlbkxpc3RlbmVyLFxuICAgICAgICB9XG5cbiAgICB9KSgpO1xuICAgIFxuXG4gICAgLy8gSGFuZGxlciBmb3IgbGVmdCBkaXZcbiAgICBjb25zdCBjcmVhdGVMZWZ0RGl2ID0gKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAvLyBDcmVhdGUgbGF5b3V0IHN0cnVjdHVyZVxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVTdHJ1Y3R1cmUgKCkge1xuICAgICAgICAgICAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG4gICAgICAgICAgICBjb25zdCBsZWZ0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBsZWZ0RGl2LmNsYXNzTGlzdC5hZGQoJ2xlZnQnKTtcbiAgICAgICAgICAgIG1haW5EaXYuYXBwZW5kKGxlZnREaXYpO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgbGVmdEZpcnN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBsZWZ0Rmlyc3REaXYuY2xhc3NMaXN0LmFkZCgnbGVmdC1maXJzdC1zZWN0aW9uJyk7XG4gICAgICAgICAgICBsZWZ0Rmlyc3REaXYuZGF0YXNldC5hY3RpdmUgPSAnVG9kYXknO1xuXG4gICAgICAgICAgICBsZWZ0RGl2LmFwcGVuZChsZWZ0Rmlyc3REaXYpO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgZmlyc3RTZWN0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBmaXJzdFNlY3Rpb25MYWJlbC50ZXh0Q29udGVudCA9ICdUYXNrcyc7XG4gICAgICAgICAgICBsZWZ0Rmlyc3REaXYuYXBwZW5kKGZpcnN0U2VjdGlvbkxhYmVsKTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0U2VjdGlvbkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICAgICAgZmlyc3RTZWN0aW9uTGlzdC5jbGFzc0xpc3QuYWRkKCd2aWV3cycpO1xuICAgICAgICAgICAgbGVmdEZpcnN0RGl2LmFwcGVuZChmaXJzdFNlY3Rpb25MaXN0KTtcblxuICAgICAgICAgICAgY29uc3QgZmlyc3RTZWN0aW9uTGluZUl0ZW1zID0gW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudF90eXBlOiAnbGknLFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50X2NsYXNzOiAndGFzay1maWx0ZXInLFxuICAgICAgICAgICAgICAgICAgICBkYXRhc2V0X2FjdGl2ZTogJ3RydWUnLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZF9lbGVtZW50czogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRfdHlwZTogJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudF9jbGFzczogJ2ltYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50X2lubmVySHRtbDogJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+Y2FsZW5kYXItdG9kYXktb3V0bGluZTwvdGl0bGU+PHBhdGggZD1cIk0xOSAzSDE4VjFIMTZWM0g4VjFINlYzSDVDMy45IDMgMyAzLjg5IDMgNVYxOUMzIDIwLjExIDMuOSAyMSA1IDIxSDE5QzIwLjExIDIxIDIxIDIwLjExIDIxIDE5VjVDMjEgMy44OSAyMC4xMSAzIDE5IDNNMTkgMTlINVY5SDE5VjE5TTE5IDdINVY1SDE5TTcgMTFIMTJWMTZIN1wiIC8+PC9zdmc+JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudF90eXBlOiAncCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudF90ZXh0Q29udGVudDogJ1RvZGF5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb246ICdnZXRUb2RheVRhc2tzJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudF90eXBlOiAnbGknLFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50X2NsYXNzOiAndGFzay1maWx0ZXInLFxuICAgICAgICAgICAgICAgICAgICBkYXRhc2V0X2FjdGl2ZTogJ2ZhbHNlJyxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRfZWxlbWVudHM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50X3R5cGU6ICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRfY2xhc3M6ICdpbWFnZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudF9pbm5lckh0bWw6ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPmNhbGVuZGFyLXN0YXJ0LW91dGxpbmU8L3RpdGxlPjxwYXRoIGQ9XCJNMTMgMThMOSAxNFYxN0g0VjE0SDJWMjJINFYxOUg5VjIyTDEzIDE4TTE5IDNIMThWMUgxNlYzSDhWMUg2VjNINUMzLjkgMyAzIDMuOSAzIDVWMTJINVY5SDE5VjE5SDE0LjhMMTIuOCAyMUgxOUMyMC4xIDIxIDIxIDIwLjEgMjEgMTlWNUMyMSAzLjkgMjAuMSAzIDE5IDNNNSA3VjVIMTlWN0g1WlwiIC8+PC9zdmc+JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudF90eXBlOiAncCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudF90ZXh0Q29udGVudDogJ1RvbW9ycm93JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb246ICdnZXRUb21vcnJvd1Rhc2tzJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudF90eXBlOiAnbGknLFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50X2NsYXNzOiAndGFzay1maWx0ZXInLFxuICAgICAgICAgICAgICAgICAgICBkYXRhc2V0X2FjdGl2ZTogJ2ZhbHNlJyxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRfZWxlbWVudHM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50X3R5cGU6ICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRfY2xhc3M6ICdpbWFnZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudF9pbm5lckh0bWw6ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPmNhbGVuZGFyLW1vbnRoLW91dGxpbmU8L3RpdGxlPjxwYXRoIGQ9XCJNNyAxMUg5VjEzSDdWMTFNMjEgNVYxOUMyMSAyMC4xMSAyMC4xMSAyMSAxOSAyMUg1QzMuODkgMjEgMyAyMC4xIDMgMTlWNUMzIDMuOSAzLjkgMyA1IDNINlYxSDhWM0gxNlYxSDE4VjNIMTlDMjAuMTEgMyAyMSAzLjkgMjEgNU01IDdIMTlWNUg1VjdNMTkgMTlWOUg1VjE5SDE5TTE1IDEzVjExSDE3VjEzSDE1TTExIDEzVjExSDEzVjEzSDExTTcgMTVIOVYxN0g3VjE1TTE1IDE3VjE1SDE3VjE3SDE1TTExIDE3VjE1SDEzVjE3SDExWlwiIC8+PC9zdmc+JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudF90eXBlOiAncCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudF90ZXh0Q29udGVudDogJ0FsbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uOiAnZ2V0QWxsVGFza3MnLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZmlyc3RTZWN0aW9uTGluZUl0ZW1zLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGluZUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQuZWxlbWVudF90eXBlKTtcbiAgICAgICAgICAgICAgICBsaW5lSXRlbS5jbGFzc0xpc3QuYWRkKGVsZW1lbnQuZWxlbWVudF9jbGFzcyk7XG4gICAgICAgICAgICAgICAgbGluZUl0ZW0uZGF0YXNldC5hY3RpdmUgPSBlbGVtZW50LmRhdGFzZXRfYWN0aXZlO1xuICAgICAgICAgICAgICAgIGZpcnN0U2VjdGlvbkxpc3QuYXBwZW5kKGxpbmVJdGVtKTtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5jaGlsZF9lbGVtZW50cykge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNoaWxkX2VsZW1lbnRzLmZvckVhY2goY2hpbGRfZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lSXRlbUNoaWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChjaGlsZF9lbGVtZW50LmVsZW1lbnRfdHlwZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lSXRlbUNoaWxkLmNsYXNzTGlzdC5hZGQoY2hpbGRfZWxlbWVudC5lbGVtZW50X2NsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZF9lbGVtZW50LmVsZW1lbnRfaW5uZXJIdG1sKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZUl0ZW1DaGlsZC5pbm5lckhUTUwgPSBgJHtjaGlsZF9lbGVtZW50LmVsZW1lbnRfaW5uZXJIdG1sfWA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGRfZWxlbWVudC5lbGVtZW50X3RleHRDb250ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZUl0ZW1DaGlsZC50ZXh0Q29udGVudCA9IGNoaWxkX2VsZW1lbnQuZWxlbWVudF90ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVJdGVtLmFwcGVuZChsaW5lSXRlbUNoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgdGFza3NGdW5jdGlvbiA9IFRhc2tNb2R1bGVbZWxlbWVudC5mdW5jdGlvbl07XG4gICAgICAgICAgICAgICAgbGluZUl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgRE9NTW9kdWxlLmNyZWF0ZVJpZ2h0RGl2LmNyZWF0ZVRhc2tzKFRhc2tNb2R1bGUuZ2V0UHJvamVjdFRhc2tzKFRhc2tNb2R1bGUuZ2V0QWN0aXZlUHJvamVjdCgpLCB0YXNrc0Z1bmN0aW9uKCkpKTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vIERPTU1vZHVsZS5jcmVhdGVSaWdodERpdi5jcmVhdGVUYXNrcyh0YXNrc0Z1bmN0aW9uKCkpO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhUYXNrTW9kdWxlLmdldEFjdGl2ZVByb2plY3QoKSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFRhc2tNb2R1bGUuZ2V0UHJvamVjdFRhc2tzKFRhc2tNb2R1bGUuZ2V0QWN0aXZlUHJvamVjdCgpLCB0YXNrc0Z1bmN0aW9uKCkpKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGFza3NGdW5jdGlvbigpKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coVGFza01vZHVsZS5nZXRBY3RpdmVQcm9qZWN0KCkpO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhUYXNrTW9kdWxlLmdldFByb2plY3RUYXNrcyhUYXNrTW9kdWxlLmdldEFjdGl2ZVByb2plY3QoKSwgdGFza3NGdW5jdGlvbigpKSk7XG4gICAgICAgICAgICAgICAgfSApXG4gICAgICAgICAgICB9KVxuICAgICAgICBcblxuICAgICAgICAgICAgY29uc3QgYW5pbWF0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBhbmltYXRpb25EaXYuY2xhc3NMaXN0LmFkZCgndGFzay1hbmltYXRpb24nLCAnc3RhcnQtdG9kYXknKTtcbiAgICAgICAgICAgIGZpcnN0U2VjdGlvbkxpc3QuYXBwZW5kKGFuaW1hdGlvbkRpdik7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBsZWZ0U2Vjb25kRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBsZWZ0U2Vjb25kRGl2LmNsYXNzTGlzdC5hZGQoJ2xlZnQtc2Vjb25kLXNlY3Rpb24nKTtcbiAgICAgICAgICAgIGxlZnREaXYuYXBwZW5kKGxlZnRTZWNvbmREaXYpO1xuICAgIFxuICAgICAgICAgICAgY29uc3Qgc2Vjb25kU2VjdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgc2Vjb25kU2VjdGlvbkxhYmVsLnRleHRDb250ZW50ID0gJ1Byb2plY3RzJztcbiAgICAgICAgICAgIGxlZnRTZWNvbmREaXYuYXBwZW5kKHNlY29uZFNlY3Rpb25MYWJlbCk7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBzZWNvbmRTZWN0aW9uTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgICAgICBzZWNvbmRTZWN0aW9uTGlzdC5jbGFzc0xpc3QuYWRkKCdzZWNvbmQtc2VjdGlvbi1saXN0Jyk7XG4gICAgICAgICAgICBsZWZ0U2Vjb25kRGl2LmFwcGVuZChzZWNvbmRTZWN0aW9uTGlzdCk7XG5cblxuICAgICAgICAgICAgLy8gVXBkYXRlIGRhdGEtYWN0aXZlIHByb3BlcnR5IG9uIC50YXNrLWZpbGVyIGFuZCBvbiBwYXJlbnQgLmxlZnQtZmlyc3Qtc2VjdGlvblxuICAgICAgICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0YXNrLWZpbHRlcicpKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgaXRlbS5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBsZWZ0Rmlyc3REaXYuZGF0YXNldC5hY3RpdmUgPSBpdGVtLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgICAgICBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Rhc2stZmlsdGVyJykpLmZvckVhY2goKGl0ZW0yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbSA9PT0gaXRlbTIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtMi5kYXRhc2V0LmFjdGl2ZSA9ICd0cnVlJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0yLmRhdGFzZXQuYWN0aXZlID0gJ2ZhbHNlJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbmRlciBwcm9qZWN0cyBpbiAuc2Vjb25kLXNlY3Rpb24tbGlzdFxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0cyhwcm9qZWN0cykge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdExpbmVJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0Jyk7XG4gICAgICAgICAgICBpZiAocHJvamVjdExpbmVJdGVtcykge1xuICAgICAgICAgICAgICAgIHByb2plY3RMaW5lSXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcHJvamVjdHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWNvbmRTZWN0aW9uTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWNvbmQtc2VjdGlvbi1saXN0Jyk7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdExpbmVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0TGluZUl0ZW0uY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuICAgICAgICAgICAgICAgIHByb2plY3RMaW5lSXRlbS5kYXRhc2V0LmFjdGl2ZSA9IGVsZW1lbnQuYWN0aXZlO1xuICAgICAgICAgICAgICAgIHNlY29uZFNlY3Rpb25MaXN0LmFwcGVuZChwcm9qZWN0TGluZUl0ZW0pO1xuXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgY2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgLy8gY2lyY2xlLmNsYXNzTGlzdC5hZGQoJ2NpcmNsZScpO1xuICAgICAgICAgICAgICAgIC8vIGNpcmNsZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBlbGVtZW50LmNvbG9yO1xuICAgICAgICAgICAgICAgIC8vIHByb2plY3RMaW5lSXRlbS5hcHBlbmQoY2lyY2xlKTtcbiAgICAgICAgICAgICAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgaWNvbi5jbGFzc0xpc3QuYWRkKCdpY29uJyk7XG4gICAgICAgICAgICAgICAgaWNvbi5pbm5lckhUTUwgPSBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZS13aWR0aD1cIjAuNVwiIHN0cm9rZT1cInZhcigtLWJvcmRlci1kYXJrKVwiPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5jaGVja2JveC1tdWx0aXBsZS1ibGFuay1jaXJjbGU8L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTQsMkE4LDggMCAwLDAgNiwxMEE4LDggMCAwLDAgMTQsMThBOCw4IDAgMCwwIDIyLDEwQTgsOCAwIDAsMCAxNCwyTTQuOTMsNS44MkMzLjA4LDcuMzQgMiw5LjYxIDIsMTJBOCw4IDAgMCwwIDEwLDIwQzEwLjY0LDIwIDExLjI3LDE5LjkyIDExLjg4LDE5Ljc3QzEwLjEyLDE5LjM4IDguNSwxOC41IDcuMTcsMTcuMjlDNS4yMiwxNi4yNSA0LDE0LjIxIDQsMTJDNCwxMS43IDQuMDMsMTEuNDEgNC4wNywxMS4xMUM0LjAzLDEwLjc0IDQsMTAuMzcgNCwxMEM0LDguNTYgNC4zMiw3LjEzIDQuOTMsNS44MlpcIi8+XG4gICAgICAgICAgICAgICAgPC9zdmc+YDtcbiAgICAgICAgICAgICAgICAvLyBpY29uLmlubmVySFRNTCA9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPmxlYWY8L3RpdGxlPjxwYXRoIGQ9XCJNMTcsOEM4LDEwIDUuOSwxNi4xNyAzLjgyLDIxLjM0TDUuNzEsMjJMNi42NiwxOS43QzcuMTQsMTkuODcgNy42NCwyMCA4LDIwQzE5LDIwIDIyLDMgMjIsM0MyMSw1IDE0LDUuMjUgOSw2LjI1QzQsNy4yNSAyLDExLjUgMiwxMy41QzIsMTUuNSAzLjc1LDE3LjI1IDMuNzUsMTcuMjVDNyw4IDE3LDggMTcsOFpcIiAvPjwvc3ZnPmA7XG4gICAgICAgICAgICAgICAgLy8gaWNvbi5pbm5lckhUTUwgPSBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT5sZWFmPC90aXRsZT48cGF0aCBkPVwiTTE3LDhDOCwxMCA1LjksMTYuMTcgMy44MiwyMS4zNEw1LjcxLDIyTDYuNjYsMTkuN0M3LjE0LDE5Ljg3IDcuNjQsMjAgOCwyMEMxOSwyMCAyMiwzIDIyLDNDMjEsNSAxNCw1LjI1IDksNi4yNUM0LDcuMjUgMiwxMS41IDIsMTMuNUMyLDE1LjUgMy43NSwxNy4yNSAzLjc1LDE3LjI1QzcsOCAxNyw4IDE3LDhaXCIgLz48L3N2Zz5gO1xuXG5cbiAgICAgICAgICAgICAgICBpY29uLnN0eWxlLmZpbGwgPSBlbGVtZW50LmNvbG9yO1xuICAgICAgICAgICAgICAgIHByb2plY3RMaW5lSXRlbS5hcHBlbmQoaWNvbik7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdExpbmVJdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHByb2plY3RMaW5lSXRlbU5hbWUudGV4dENvbnRlbnQgPSBlbGVtZW50Lm5hbWU7XG4gICAgICAgICAgICAgICAgcHJvamVjdExpbmVJdGVtLmFwcGVuZChwcm9qZWN0TGluZUl0ZW1OYW1lKTtcblxuICAgICAgICAgICAgICAgIHByb2plY3RMaW5lSXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoVGFza01vZHVsZS5nZXRBY3RpdmVQcm9qZWN0KCkgPT09IGV2ZW50LnRhcmdldC5jaGlsZE5vZGVzWzFdLmlubmVySFRNTCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgVGFza01vZHVsZS5jaGFuZ2VBY3RpdmVQcm9qZWN0KCcnKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFRhc2tNb2R1bGUuY2hhbmdlQWN0aXZlUHJvamVjdChldmVudC50YXJnZXQuY2hpbGROb2Rlc1sxXS5pbm5lckhUTUwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIERPTU1vZHVsZS5jcmVhdGVSaWdodERpdi5jcmVhdGVUYXNrcyhUYXNrTW9kdWxlLmdldFByb2plY3RUYXNrcyhUYXNrTW9kdWxlLmdldEFjdGl2ZVByb2plY3QoKSwgVGFza01vZHVsZS5nZXRUYXNrc0Zyb21BY3RpdmVWaWV3KCkpKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nQW5pbWF0aW9uRGl2MiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWNvbmQtc2VjdGlvbi1saXN0ID4gLnRhc2stYW5pbWF0aW9uJyk7XG4gICAgICAgICAgICBpZiAoZXhpc3RpbmdBbmltYXRpb25EaXYyKSB7XG4gICAgICAgICAgICAgICAgZXhpc3RpbmdBbmltYXRpb25EaXYyLnJlbW92ZSgpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHNlY29uZFNlY3Rpb25MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY29uZC1zZWN0aW9uLWxpc3QnKTtcbiAgICAgICAgICAgIGNvbnN0IGFuaW1hdGlvbkRpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGFuaW1hdGlvbkRpdjIuY2xhc3NMaXN0LmFkZCgndGFzay1hbmltYXRpb24nLCAnc3RhcnQtZmlyc3QnKTtcbiAgICAgICAgICAgIHNlY29uZFNlY3Rpb25MaXN0LmFwcGVuZChhbmltYXRpb25EaXYyKTtcblxuICAgICAgICAgICAgLy8gVXBkYXRlIGRhdGEtYWN0aXZlIHByb3BlcnR5IG9uIC5wcm9qZWN0XG4gICAgICAgICAgICBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Byb2plY3QnKSkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGl0ZW0ub25jbGljayA9ICgpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwcm9qZWN0JykpLmZvckVhY2goKGl0ZW0yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbSA9PT0gaXRlbTIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5kYXRhc2V0LmFjdGl2ZSA9PSAndHJ1ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFza19hbmltYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQtZmlyc3QnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFza19hbmltYXRpb24uc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbTIuY2xhc3NMaXN0LnJlbW92ZSgnZm9udC1hY2NlbnQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtMi5kYXRhc2V0LmFjdGl2ZSA9ICdmYWxzZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrX2FuaW1hdGlvbi5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbTIuZGF0YXNldC5hY3RpdmUgPSAndHJ1ZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0yLmNsYXNzTGlzdC5hZGQoJ2ZvbnQtYWNjZW50Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbTIuZGF0YXNldC5hY3RpdmUgPSAnZmFsc2UnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0yLmNsYXNzTGlzdC5yZW1vdmUoJ2ZvbnQtYWNjZW50Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjcmVhdGVTdHJ1Y3R1cmUsXG4gICAgICAgICAgICBjcmVhdGVQcm9qZWN0cyxcbiAgICAgICAgfVxuICAgIH0pKCk7XG5cbiAgICAvLyBIYW5kbGVyIGZvciByaWdodCBkaXZcbiAgICBjb25zdCBjcmVhdGVSaWdodERpdiA9IChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgLy8gQ3JlYXRlIGxheW91dCBzdHJ1Y3R1cmVcbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlU3RydWN0dXJlKCkge1xuICAgICAgICAgICAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG4gICAgICAgICAgICBjb25zdCByaWdodERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcmlnaHREaXYuY2xhc3NMaXN0LmFkZCgncmlnaHQnKTtcbiAgICAgICAgICAgIG1haW5EaXYuYXBwZW5kKHJpZ2h0RGl2KTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0Rmlyc3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHJpZ2h0Rmlyc3REaXYuY2xhc3NMaXN0LmFkZCgncmlnaHQtZmlyc3Qtc2VjdGlvbicpO1xuICAgICAgICAgICAgcmlnaHREaXYuYXBwZW5kKHJpZ2h0Rmlyc3REaXYpO1xuICAgICAgICB9XG5cbiAgICAgICAgIC8vIFJlbmRlciB0YXNrc1xuICAgICAgICBmdW5jdGlvbiBjcmVhdGVUYXNrcyh0YXNrcykge1xuXG4gICAgICAgICAgICBjb25zdCB0YXNrTGluZUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2snKTtcbiAgICAgICAgICAgIGlmICh0YXNrTGluZUl0ZW1zKSB7XG4gICAgICAgICAgICAgICAgdGFza0xpbmVJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgY291bnRlciA9IDA7XG4gICAgICAgICAgICBsZXQgc3ViX2NvdW50ZXIgPSAwO1xuXG4gICAgICAgICAgICB0YXNrcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJpZ2h0Rmlyc3RTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJpZ2h0LWZpcnN0LXNlY3Rpb24nKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrTGluZUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICB0YXNrTGluZUl0ZW0uY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuICAgICAgICAgICAgICAgIHRhc2tMaW5lSXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICByaWdodEZpcnN0U2VjdGlvbi5hcHBlbmQodGFza0xpbmVJdGVtKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tGaWVsZHNUZW1wbGF0ZSA9IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGl2X2NsYXNzOiAndGFzay1wcm9qZWN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkX2VsZW1lbnRzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXZfY2xhc3M6ICd0YXNrLXByb2plY3QtY29sb3InLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogZWxlbWVudC5wcm9qZWN0Q29sb3IsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpdl9jbGFzczogJ3Rhc2stcHJvamVjdC1maWVsZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDb250ZW50OiBlbGVtZW50LnByb2plY3ROYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdl9jbGFzczogJ3Rhc2stdGl0bGUtZmllbGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENvbnRlbnQ6IGVsZW1lbnQudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdl9jbGFzczogJ3Rhc2stbm90ZXMtZmllbGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENvbnRlbnQ6IGVsZW1lbnQubm90ZXMsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdl9jbGFzczogJ3Rhc2stcHJpb3JpdHktZmllbGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENvbnRlbnQ6IGVsZW1lbnQucHJpb3JpdHksXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdl9jbGFzczogJ3Rhc2stZGF0ZS1maWVsZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q29udGVudDogZWxlbWVudC5kYXRlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgXG5cblxuICAgICAgICAgICAgICAgIHRhc2tGaWVsZHNUZW1wbGF0ZS5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFza0ZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tGaWVsZC5jbGFzc0xpc3QuYWRkKGZpZWxkLmRpdl9jbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tGaWVsZC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgdGFza0ZpZWxkLnRleHRDb250ZW50ID0gZmllbGQudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tGaWVsZC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBmaWVsZC5jb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgdGFza0xpbmVJdGVtLmFwcGVuZCh0YXNrRmllbGQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGQuY2hpbGRfZWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLmNoaWxkX2VsZW1lbnRzLmZvckVhY2goY2hpbGRfZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hpbGRfZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRfZGl2LmNsYXNzTGlzdC5hZGQoY2hpbGRfZWxlbWVudC5kaXZfY2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkX2Rpdi50ZXh0Q29udGVudCA9IGNoaWxkX2VsZW1lbnQudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRfZGl2LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGNoaWxkX2VsZW1lbnQuY29sb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFza0ZpZWxkLmFwcGVuZChjaGlsZF9kaXYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tGaWVsZC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgICB9LCAzMCAqIHN1Yl9jb3VudGVyKTtcbiAgICAgICAgICAgICAgICAgICAgc3ViX2NvdW50ZXIgPSBzdWJfY291bnRlciArIDE7XG5cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGFza0xpbmVJdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgICAgfSwgODAgKiBjb3VudGVyKTtcbiAgICAgICAgICAgICAgICBjb3VudGVyID0gY291bnRlciArIDE7XG5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY3JlYXRlU3RydWN0dXJlLFxuICAgICAgICAgICAgY3JlYXRlVGFza3MsXG4gICAgICAgIH1cbiAgICB9KSgpO1xuXG4gICAgY29uc3QgY3JlYXRlRm9vdGVyRGl2ID0gKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVTdHJ1Y3R1cmUoKSB7XG4gICAgICAgICAgICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbiAgICAgICAgICAgIGNvbnN0IGZvb3RlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZm9vdGVyRGl2LmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xuICAgICAgICAgICAgbWFpbkRpdi5hcHBlbmQoZm9vdGVyRGl2KTtcblxuICAgICAgICAgICAgY29uc3QgZm9vdGVyUmlnaHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGZvb3RlclJpZ2h0RGl2LmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlci1yaWdodCcpO1xuICAgICAgICAgICAgZm9vdGVyRGl2LmFwcGVuZChmb290ZXJSaWdodERpdik7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVCdXR0b25zKCkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBsZWZ0U2Vjb25kU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0LXNlY29uZC1zZWN0aW9uJyk7XG4gICAgICAgICAgICBjb25zdCBmb290ZXJSaWdodERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXItcmlnaHQnKTtcblxuICAgICAgICAgICAgY29uc3QgY3JlYXRlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY3JlYXRlUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjcmVhdGUtcHJvamVjdCcpO1xuICAgICAgICAgICAgbGVmdFNlY29uZFNlY3Rpb24uYXBwZW5kKGNyZWF0ZVByb2plY3RCdXR0b24pO1xuICAgICAgICAgICAgY3JlYXRlUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdQcm9qZWN0RGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1wcm9qZWN0Jyk7XG4gICAgICAgICAgICAgICAgbmV3UHJvamVjdERpYWxvZy5zaG93TW9kYWwoKTtcbiAgICAgICAgICAgICAgICBuZXdQcm9qZWN0RGlhbG9nLmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXllZCcpO1xuICAgICAgICAgICAgICAgIG5ld1Byb2plY3REaWFsb2cuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBjb25zdCBjcmVhdGVQcm9qZWN0QnV0dG9uSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY3JlYXRlUHJvamVjdEJ1dHRvbkljb24uaW5uZXJIVE1MID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+cGx1czwvdGl0bGU+PHBhdGggZD1cIk0xOSwxM0gxM1YxOUgxMVYxM0g1VjExSDExVjVIMTNWMTFIMTlWMTNaXCIgLz48L3N2Zz5gO1xuICAgICAgICAgICAgY3JlYXRlUHJvamVjdEJ1dHRvbi5hcHBlbmQoY3JlYXRlUHJvamVjdEJ1dHRvbkljb24pO1xuXG4gICAgICAgICAgICBjb25zdCBjcmVhdGVQcm9qZWN0QnV0dG9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNyZWF0ZVByb2plY3RCdXR0b25MYWJlbC50ZXh0Q29udGVudCA9ICdQcm9qZWN0JztcbiAgICAgICAgICAgIGNyZWF0ZVByb2plY3RCdXR0b24uYXBwZW5kKGNyZWF0ZVByb2plY3RCdXR0b25MYWJlbCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNyZWF0ZVRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNyZWF0ZVRhc2tCdXR0b24uY2xhc3NMaXN0LmFkZCgnY3JlYXRlLXRhc2snKTtcbiAgICAgICAgICAgIGZvb3RlclJpZ2h0RGl2LmFwcGVuZChjcmVhdGVUYXNrQnV0dG9uKTtcblxuICAgICAgICAgICAgY3JlYXRlVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdUYXNrRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10YXNrJyk7XG4gICAgICAgICAgICAgICAgbmV3VGFza0RpYWxvZy5zaG93TW9kYWwoKTtcbiAgICAgICAgICAgICAgICBuZXdUYXNrRGlhbG9nLmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXllZCcpO1xuICAgICAgICAgICAgICAgIG5ld1Rhc2tEaWFsb2cuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICB9KVxuXG5cbiAgICAgICAgICAgIGNvbnN0IGNyZWF0ZVRhc2tCdXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNyZWF0ZVRhc2tCdXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZCgnY3JlYXRlLXRhc2stY29udGFpbmVyJylcbiAgICAgICAgICAgIGNyZWF0ZVRhc2tCdXR0b24uYXBwZW5kKGNyZWF0ZVRhc2tCdXR0b25Db250YWluZXIpO1xuXG5cbiAgICAgICAgICAgIGNvbnN0IGNyZWF0ZVRhc2tCdXR0b25JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjcmVhdGVUYXNrQnV0dG9uSWNvbi5pbm5lckhUTUwgPSBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT5wbHVzPC90aXRsZT48cGF0aCBkPVwiTTE5LDEzSDEzVjE5SDExVjEzSDVWMTFIMTFWNUgxM1YxMUgxOVYxM1pcIiAvPjwvc3ZnPmA7XG4gICAgICAgICAgICBjcmVhdGVUYXNrQnV0dG9uQ29udGFpbmVyLmFwcGVuZChjcmVhdGVUYXNrQnV0dG9uSWNvbik7XG5cbiAgICAgICAgICAgIGNvbnN0IGNyZWF0ZVRhc2tCdXR0b25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY3JlYXRlVGFza0J1dHRvbkxhYmVsLnRleHRDb250ZW50ID0gJ1Rhc2snO1xuICAgICAgICAgICAgY3JlYXRlVGFza0J1dHRvbkNvbnRhaW5lci5hcHBlbmQoY3JlYXRlVGFza0J1dHRvbkxhYmVsKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjcmVhdGVTdHJ1Y3R1cmUsXG4gICAgICAgICAgICBjcmVhdGVCdXR0b25zLFxuICAgICAgICB9XG4gICAgfSkoKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGNyZWF0ZU1haW5EaXYsXG4gICAgICAgIGNyZWF0ZURpYWxvZ3MsXG4gICAgICAgIGNyZWF0ZUxlZnREaXYsXG4gICAgICAgIGNyZWF0ZVJpZ2h0RGl2LFxuICAgICAgICBjcmVhdGVGb290ZXJEaXYsXG4gICAgfVxufSkoKTtcblxuXG5ET01Nb2R1bGUuY3JlYXRlTWFpbkRpdigpO1xuRE9NTW9kdWxlLmNyZWF0ZURpYWxvZ3MubmV3UHJvamVjdERpYWxvZ0hhbmRsZXIoKTtcbkRPTU1vZHVsZS5jcmVhdGVEaWFsb2dzLm5ld1Rhc2tEaWFsb2dIYW5kbGVyKCk7XG5ET01Nb2R1bGUuY3JlYXRlRGlhbG9ncy5hZGRFc2NFdmVuTGlzdGVuZXIoKTtcbkRPTU1vZHVsZS5jcmVhdGVMZWZ0RGl2LmNyZWF0ZVN0cnVjdHVyZSgpO1xuRE9NTW9kdWxlLmNyZWF0ZUxlZnREaXYuY3JlYXRlUHJvamVjdHMoUHJvamVjdE1vZHVsZS5nZXRQcm9qZWN0T2JqZWN0cygpKTtcbkRPTU1vZHVsZS5jcmVhdGVSaWdodERpdi5jcmVhdGVTdHJ1Y3R1cmUoKTtcbkRPTU1vZHVsZS5jcmVhdGVSaWdodERpdi5jcmVhdGVUYXNrcyhUYXNrTW9kdWxlLmdldFRvZGF5VGFza3MoKSk7XG5ET01Nb2R1bGUuY3JlYXRlRm9vdGVyRGl2LmNyZWF0ZVN0cnVjdHVyZSgpO1xuRE9NTW9kdWxlLmNyZWF0ZUZvb3RlckRpdi5jcmVhdGVCdXR0b25zKCk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbihldmVudCkge1xuICAgIGlmIChldmVudC5rZXkgPT09IFwiNVwiKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFByb2plY3RNb2R1bGUuZ2V0UHJvamVjdE9iamVjdHMoKSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFRhc2tNb2R1bGUuZ2V0VG9kYXlUYXNrcygpKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coVGFza01vZHVsZS5nZXRUb21vcnJvd1Rhc2tzKCkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhUYXNrTW9kdWxlLmdldEFsbFRhc2tzKCkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhUYXNrTW9kdWxlLmdldFByb2plY3RUYXNrcygnTWF0aCcsIFRhc2tNb2R1bGUuZ2V0VG9kYXlUYXNrcygpKSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFRhc2tNb2R1bGUuZ2V0QWN0aXZlUHJvamVjdCgpKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coVGFza01vZHVsZS5nZXRBY3RpdmVWaWV3KCkpO1xuICAgICAgICBjb25zb2xlLmxvZyhUYXNrTW9kdWxlLmdldEFjdGl2ZVByb2plY3QoKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFRhc2tNb2R1bGUuZ2V0QWN0aXZlVmlldygpKTtcbiAgICB9XG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==