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

    --elements-hover: #ba181b28; /*used*/
    --checkbox-color: green; /*used*/
}


::-webkit-scrollbar {
    width: 4px;
    border-radius: 5px;
    z-index: 9999;
  }
  
  ::-webkit-scrollbar-thumb {
      background: var(--accent-light); /* Change the color to your preference */
      border-radius: 6px;
      z-index: 9999;
  }
  
  ::-webkit-scrollbar:hover {
      background: var(--background-light); /* Change the color to your preference */
      z-index: 9999;
  }
  
  ::-webkit-scrollbar-thumb:hover {
      background: var(--accent-dark); /* Change the color to your preference */
      z-index: 9999;    
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
    box-shadow: 0px -50px 24px -20px var(--background-light);
    /* box-shadow: -150px -40px 21px -30px black; */

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
    padding: 50px 10px 50px 50px;
    height: 100%;
    width: 100%;
    overflow: auto;
    display: flex;
    flex-direction: column;
    gap: 3px;
    /* align-items: center; */
    position: relative;
    /* margin-bottom: 50px; */
}

.right-first-section > .task {
    /* border: 1px solid var(--border-color); */
    /* border-radius: 5px; */
    padding-left: 20px;
    padding-bottom: 20px;
    padding-top: 20px;

    flex: 0;
    width: clamp(200px, 60%, 800px);
    opacity: 1;
    /* max-width: 500px; */
    transition: all 175ms ease-in;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* gap: 50px; */
    /* box-shadow: 0px 1px 5px 0px gray; */
    /* border-radius: 5px; */
    position: relative;
}

.right-first-section > .task:hover {
    /* box-shadow: inset 0px 0px 50px 50px darkgreen,
    0px 0px 50px 50px darkgreen; */
    /* box-shadow:  0px 0px 2px 1px var(--border-dark); */
    /* border: 1px green solid; */
    border-radius: 5px;
}

.right-first-section > .task > .task-left-section {
    width: 35px;
    height: 35px;
    cursor: pointer;
    transition: transform 0.1s ease;

    /* transition: all 1s ease; */
}

.right-first-section > .task > .task-left-section.checked svg path,
.right-first-section > .task > .task-left-section.checked svg circle {
    transition: all 0.3s ease;
    stroke: var(--checkbox-color);
    stroke-width: 1px;
}

.right-first-section > .task > .task-left-section.checked {
    transform: scale(1.1);
}

.right-first-section > .task > .task-left-section.unchecked svg path {
    opacity: 0;
}


.right-first-section > .task > .task-left-section:hover {
    transform: scale(1.1);
    transition: transform 0.1s ease;
}

.right-first-section > .task > .task-left-section:hover circle {
    stroke: var(--checkbox-color);
}

.right-first-section > .task > .task-left-section:hover path, 
.right-first-section > .task > .task-left-section:hover circle {
    /* stroke: red; */
    /* stroke-width: 1px; */
    transition: all 0.3s ease-in-out;
}

.right-first-section > .task > .task-left-section > svg circle {
    fill: none;
    stroke: var(--text-muted);
}

.right-first-section > .task > .task-left-section > svg path {
    fill: none;
    stroke: var(--text-muted);
}

.right-first-section > .task > .task-right-section {
    width: 80%;
    display: grid;
    grid-template-columns: 5fr 1fr;
    grid-template-rows: auto;
    gap: 10px;
    /* position: relative; */
}

.right-first-section > .task > .task-right-section > .hover-effect {
    position: absolute;
    left: 110%;
    top: 20px;
    width: 40%;
    min-height: 93px;
    z-index: 1;
    /* background-color: rgb(153, 189, 153); */
    padding: 20px;
    /* box-shadow: 0px 0px 3px 1px var(--border-dark); */
    transition: all 0.5s ease-in-out;
    /* transition: all 0.5s cubic-bezier(0.18,0.89,0.43,1.19); */
    /* border-radius: 0px; */
    /* transform: scale(0); */
    border: 0.3px solid var(--border-dark);
    opacity: 0;

    border-radius: 5px;
    background: #e0e0e0;
    box-shadow:  8px 8px 16px #9f9f9f,
                 -8px -8px 16px #ffffff;



}

/* .right-first-section > .task > .task-right-section:hover > .task-notes-field {
    transition: all 1s ease;
    display: block;
    grid-row: 4 / 5;
    grid-column: 1 / 3;
} */

.right-first-section > .task > .task-right-section:hover {
    transition: all 1s ease;
}

.right-first-section > .task > .task-right-section > .task-project {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
}

.right-first-section > .task > .task-right-section > .task-project > * {
    padding: 1px 5px 1px 5px;
    border-radius: 5px;
    border: 0.5px solid var(--border-dark);
    box-shadow: 1px 1px 3px 0px var(--border-dark);
}

.right-first-section > .task > .task-right-section > .task-title-field {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    font-size: 20px;
}

.right-first-section > .task > .task-right-section > .task-notes-field {
    display: none;
}

.right-first-section > .task > .task-right-section > .task-priority-field {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
}

.right-first-section > .task > .task-right-section > .task-date-field {
    grid-column: 1 / 2;
    grid-row: 3 / 4;
}

.right-first-section > .task > .task-right-section > .task-date-field::before {
    content: "Due: ";
}




.right-first-section > .task > .task-right-section > .task-project {
    display: flex;
    /* justify-content: center; */
    align-items: center;
    gap: 10px;
}


.right-first-section > .task-divider {
    min-height: 1px;
    width: 60%;
    background-color: var(--border-color);
    transition: all 175ms ease-in;
    opacity: 1;
}

.right-first-section > .task.hidden,
.right-first-section > .task-divider.hidden {
    transition: all 175ms ease-in;
    opacity: 0;
}

.right-first-section > .task > div > div {
    opacity: 1;
    transition: all 175ms ease-in;
}

.right-first-section > .task > div > div.hidden {
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
    background-color: var(--elements-hover);
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
    /* border-radius: 10px; */
    /* border: 0.5px solid var(--border-dark); */
    /* box-shadow: 0px 0px 5px 2px var(--border-color); */
    transition: all 0.1s ease-in-out;


    border-radius: 5px;
    background: #e0e0e0;
    box-shadow:  8px 8px 16px #9f9f9f,
                 -8px -8px 16px #ffffff;
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
    /* transition: transform 300ms ease; */
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
    width: 15px;
    height: 15px;
    /* fill: red; */
    display: flex;
    justify-content: center;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');\n@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100&family=Lato:wght@300&family=Nunito:ital,wght@0,200;0,300;0,400;0,500;1,200;1,300;1,400;1,500&family=Roboto:wght@100&family=Rubik:wght@300&display=swap');\n\n:root {\n    /* Primary colors */\n    --primary-color: #3498db;\n    --primary-dark: #2980b9;\n    --primary-light: #87CEFA;\n\n    /* Secondary colors */\n    --secondary-color: #2ecc71; /*used*/\n    --secondary-dark: #27ae60; /*used*/\n    --secondary-light: #c8e6c9; /*used*/\n\n    /* Accent colors */\n    --accent-color: #BA181B;\n    --accent-dark: #A4161A;\n    --accent-light: #E5383B; /*used*/\n    --accent-darker: #660708;\n\n    /* Background colors */\n    --background-color: #F5EBE0; /*used*/\n    --background-dark: #bdc3c7;\n    --background-light: #EDEDE9; /*used*/\n\n    /* Text colors */\n    --text-color: #333; /*used*/\n    --text-light: #fff;\n    --text-muted: #888; /*used*/\n\n    /* Border colors */\n    --border-color: #D6CCC2; /*used*/\n    --border-dark: #999; /*used*/\n    --border-light: #eee;\n\n    /* Button colors */\n    --button-hover: #ba181b28; /*used*/\n    --button-active: #ba181b5b; /*used*/\n\n    --elements-hover: #ba181b28; /*used*/\n    --checkbox-color: green; /*used*/\n}\n\n\n::-webkit-scrollbar {\n    width: 4px;\n    border-radius: 5px;\n    z-index: 9999;\n  }\n  \n  ::-webkit-scrollbar-thumb {\n      background: var(--accent-light); /* Change the color to your preference */\n      border-radius: 6px;\n      z-index: 9999;\n  }\n  \n  ::-webkit-scrollbar:hover {\n      background: var(--background-light); /* Change the color to your preference */\n      z-index: 9999;\n  }\n  \n  ::-webkit-scrollbar-thumb:hover {\n      background: var(--accent-dark); /* Change the color to your preference */\n      z-index: 9999;    \n  }\n\n\n::backdrop {\n    background-color: #00000088;\n    backdrop-filter: blur(3px);\n}\n\n.material-symbols-outlined {\n    font-variation-settings:\n    'FILL' 0,\n    'wght' 400,\n    'GRAD' 0,\n    'opsz' 24\n}\n\n\n/* General layout */\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    color: var(--text-color);\n    font-family: 'Nunito', sans-serif;\n    font-weight: 300;\n}\n\nbody {\n    background-color: var(--background-light);\n    height: 100vh;\n    width: 100vw;\n}\n\n.main {\n    height: 100%;\n    width: 100%;\n    display: flex;\n}\n\n.main > .left {\n    border-right: 1px solid var(--border-color);\n    border-bottom: 1px solid var(--border-color);\n    background-color: var(--background-color);\n    flex: 0 0 300px;\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n    /* height: calc(100% - 100px); */\n    height: 100%;\n    overflow: auto;\n}\n\n.main > .right {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n    height: calc(100% - 100px);\n}\n\n.main > .footer {\n    display: flex;\n    height: 100px;\n    /* border-top: 1px solid var(--border-color); */\n    position: fixed;\n    bottom: 0;\n    width: 100%;\n    left: 300px;\n    box-shadow: 0px -50px 24px -20px var(--background-light);\n    /* box-shadow: -150px -40px 21px -30px black; */\n\n}\n\n.main > .footer > .footer-left {\n    flex: 0 0 300px;\n    background-color: var(--background-color);\n    border-right: 1px solid var(--border-color);\n}\n\n.main > .footer > .footer-right {\n    flex: 1;\n    background-color: var(--background-light);\n}\n\n.right-first-section {\n    padding: 50px 10px 50px 50px;\n    height: 100%;\n    width: 100%;\n    overflow: auto;\n    display: flex;\n    flex-direction: column;\n    gap: 3px;\n    /* align-items: center; */\n    position: relative;\n    /* margin-bottom: 50px; */\n}\n\n.right-first-section > .task {\n    /* border: 1px solid var(--border-color); */\n    /* border-radius: 5px; */\n    padding-left: 20px;\n    padding-bottom: 20px;\n    padding-top: 20px;\n\n    flex: 0;\n    width: clamp(200px, 60%, 800px);\n    opacity: 1;\n    /* max-width: 500px; */\n    transition: all 175ms ease-in;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    /* gap: 50px; */\n    /* box-shadow: 0px 1px 5px 0px gray; */\n    /* border-radius: 5px; */\n    position: relative;\n}\n\n.right-first-section > .task:hover {\n    /* box-shadow: inset 0px 0px 50px 50px darkgreen,\n    0px 0px 50px 50px darkgreen; */\n    /* box-shadow:  0px 0px 2px 1px var(--border-dark); */\n    /* border: 1px green solid; */\n    border-radius: 5px;\n}\n\n.right-first-section > .task > .task-left-section {\n    width: 35px;\n    height: 35px;\n    cursor: pointer;\n    transition: transform 0.1s ease;\n\n    /* transition: all 1s ease; */\n}\n\n.right-first-section > .task > .task-left-section.checked svg path,\n.right-first-section > .task > .task-left-section.checked svg circle {\n    transition: all 0.3s ease;\n    stroke: var(--checkbox-color);\n    stroke-width: 1px;\n}\n\n.right-first-section > .task > .task-left-section.checked {\n    transform: scale(1.1);\n}\n\n.right-first-section > .task > .task-left-section.unchecked svg path {\n    opacity: 0;\n}\n\n\n.right-first-section > .task > .task-left-section:hover {\n    transform: scale(1.1);\n    transition: transform 0.1s ease;\n}\n\n.right-first-section > .task > .task-left-section:hover circle {\n    stroke: var(--checkbox-color);\n}\n\n.right-first-section > .task > .task-left-section:hover path, \n.right-first-section > .task > .task-left-section:hover circle {\n    /* stroke: red; */\n    /* stroke-width: 1px; */\n    transition: all 0.3s ease-in-out;\n}\n\n.right-first-section > .task > .task-left-section > svg circle {\n    fill: none;\n    stroke: var(--text-muted);\n}\n\n.right-first-section > .task > .task-left-section > svg path {\n    fill: none;\n    stroke: var(--text-muted);\n}\n\n.right-first-section > .task > .task-right-section {\n    width: 80%;\n    display: grid;\n    grid-template-columns: 5fr 1fr;\n    grid-template-rows: auto;\n    gap: 10px;\n    /* position: relative; */\n}\n\n.right-first-section > .task > .task-right-section > .hover-effect {\n    position: absolute;\n    left: 110%;\n    top: 20px;\n    width: 40%;\n    min-height: 93px;\n    z-index: 1;\n    /* background-color: rgb(153, 189, 153); */\n    padding: 20px;\n    /* box-shadow: 0px 0px 3px 1px var(--border-dark); */\n    transition: all 0.5s ease-in-out;\n    /* transition: all 0.5s cubic-bezier(0.18,0.89,0.43,1.19); */\n    /* border-radius: 0px; */\n    /* transform: scale(0); */\n    border: 0.3px solid var(--border-dark);\n    opacity: 0;\n\n    border-radius: 5px;\n    background: #e0e0e0;\n    box-shadow:  8px 8px 16px #9f9f9f,\n                 -8px -8px 16px #ffffff;\n\n\n\n}\n\n/* .right-first-section > .task > .task-right-section:hover > .task-notes-field {\n    transition: all 1s ease;\n    display: block;\n    grid-row: 4 / 5;\n    grid-column: 1 / 3;\n} */\n\n.right-first-section > .task > .task-right-section:hover {\n    transition: all 1s ease;\n}\n\n.right-first-section > .task > .task-right-section > .task-project {\n    grid-column: 2 / 3;\n    grid-row: 2 / 3;\n}\n\n.right-first-section > .task > .task-right-section > .task-project > * {\n    padding: 1px 5px 1px 5px;\n    border-radius: 5px;\n    border: 0.5px solid var(--border-dark);\n    box-shadow: 1px 1px 3px 0px var(--border-dark);\n}\n\n.right-first-section > .task > .task-right-section > .task-title-field {\n    grid-column: 1 / 2;\n    grid-row: 2 / 3;\n    font-size: 20px;\n}\n\n.right-first-section > .task > .task-right-section > .task-notes-field {\n    display: none;\n}\n\n.right-first-section > .task > .task-right-section > .task-priority-field {\n    grid-column: 1 / 2;\n    grid-row: 1 / 2;\n}\n\n.right-first-section > .task > .task-right-section > .task-date-field {\n    grid-column: 1 / 2;\n    grid-row: 3 / 4;\n}\n\n.right-first-section > .task > .task-right-section > .task-date-field::before {\n    content: \"Due: \";\n}\n\n\n\n\n.right-first-section > .task > .task-right-section > .task-project {\n    display: flex;\n    /* justify-content: center; */\n    align-items: center;\n    gap: 10px;\n}\n\n\n.right-first-section > .task-divider {\n    min-height: 1px;\n    width: 60%;\n    background-color: var(--border-color);\n    transition: all 175ms ease-in;\n    opacity: 1;\n}\n\n.right-first-section > .task.hidden,\n.right-first-section > .task-divider.hidden {\n    transition: all 175ms ease-in;\n    opacity: 0;\n}\n\n.right-first-section > .task > div > div {\n    opacity: 1;\n    transition: all 175ms ease-in;\n}\n\n.right-first-section > .task > div > div.hidden {\n    opacity: 0;\n}\n\n.task-project-color {\n    height: 10px;\n    width: 10px;\n    border-radius: 50%;\n    border: 0.5px solid var(--text-muted);\n}\n\n\n\n\n/* Left div layout */\n\n.left > .left-first-section {\n    margin-top: 40px;\n    overflow: auto;\n    flex: 0 0 200px;\n    /* margin-left: 10px; */\n}\n\n.left > .left-second-section {\n    margin-top: 40px;\n    overflow: auto;\n    flex: 1 0 200px;\n    /* margin-left: 10px; */\n}\n\n\n\n.left > .left-first-section > p {\n    padding-left: 20px;\n    font-style: italic;\n    font-weight: 200;\n    height: 50px;\n    display: flex;\n    align-items: center;\n}\n\n.left > .left-first-section ul,\n.left > .left-second-section ul {\n    position: relative;\n}\n\n.left > .left-first-section li {\n    padding-left: 30px;\n    list-style: none;\n    height: 50px;\n    display: flex;\n    align-items: center;\n    z-index: 1;\n    position: relative;\n    cursor: pointer;\n    gap: 10px;\n}\n\n.left > .left-second-section li {\n    cursor: pointer;\n}\n\n.left > .left-first-section li > .image {\n    height: 20px;\n    width: 20px;\n\n}\n\n\n/* Slider on views */\n\n.left > .left-first-section .task-animation,\n.left > .left-second-section li[data-active='true']~.task-animation {\n    position: absolute;\n    /* top: 0; */\n    height: 50px;\n    border-left: 6px solid var(--accent-light);\n    z-index: 0;\n    transition: all 0.3s ease;\n    opacity: 0;\n}\n\n\n.views > li:nth-child(1)[data-active='true']~.task-animation {\n    width: 100%;\n    top: 0;\n    opacity: 1;\n}\n\n.views > li:nth-child(2)[data-active='true']~.task-animation {\n    width: 100%;\n    top: 50px;\n    opacity: 1;\n}\n\n.views > li:nth-child(3)[data-active='true']~.task-animation {\n    width: 100%;\n    top: 100px;\n    opacity: 1;\n}\n\n\n/* Views styles */\n\n.left > .left-first-section li[data-active='false']:hover,\n.left > .left-second-section li:hover {\n    background-color: var(--elements-hover);\n}\n\n.left > .left-first-section li[data-active='true'] > div > svg {\n    fill: var(--accent-color);\n}\n\n.left > .left-first-section li[data-active='true'] > p {\n    color: var(--accent-color);\n}\n\n.left > .left-second-section li.font-accent > div {\n    color: var(--accent-color);\n}\n\n.left > .left-first-section li[data-active='false']:active,\n.left > .left-second-section li:active {\n    background-color: #ba181b5b;\n}\n\n\n/* Slider on projects */\n\n.second-section-list > li:nth-child(1)[data-active='true']~.task-animation {\n    /* width: 100%; */\n    top: 0;\n    opacity: 1;\n}\n\n.second-section-list > li:nth-child(2)[data-active='true']~.task-animation {\n    /* width: 100%; */\n    top: 50px;\n    opacity: 1;\n}\n\n.second-section-list > li:nth-child(3)[data-active='true']~.task-animation {\n    /* width: 100%; */\n    top: 100px;\n    opacity: 1;\n}\n\n.second-section-list > li:nth-child(4)[data-active='true']~.task-animation {\n    /* width: 100%; */\n    top: 150px;\n    opacity: 1;\n}\n\n.second-section-list > li:nth-child(5)[data-active='true']~.task-animation {\n    /* width: 100%; */\n    top: 200px;\n    opacity: 1;\n}\n\n.second-section-list > li:nth-child(6)[data-active='true']~.task-animation {\n    /* width: 100%; */\n    top: 250px;\n    opacity: 1;\n}\n\n.second-section-list > li:nth-child(7)[data-active='true']~.task-animation {\n    /* width: 100%; */\n    top: 300px;\n    opacity: 1;\n}\n\n.second-section-list > li:nth-child(8)[data-active='true']~.task-animation {\n    /* width: 100%; */\n    top: 350px;\n    opacity: 1;\n}\n\n.second-section-list > li:nth-child(9)[data-active='true']~.task-animation {\n    /* width: 100%; */\n    top: 400px;\n    opacity: 1;\n}\n\n.second-section-list > li:nth-child(10)[data-active='true']~.task-animation {\n    /* width: 100%; */\n    top: 450px;\n    opacity: 1;\n}\n\n.second-section-list > li:nth-child(11)[data-active='true']~.task-animation {\n    /* width: 100%; */\n    top: 500px;\n    opacity: 1;\n}\n\n.second-section-list > li:nth-child(12)[data-active='true']~.task-animation {\n    /* width: 100%; */\n    top: 550px;\n    opacity: 1;\n}\n\n.left > .left-second-section > p {\n    padding-left: 20px;\n    font-style: italic;\n    font-weight: 200;\n    height: 50px;\n    display: flex;\n    align-items: center;\n}\n\n.left > .left-second-section li {\n    padding-left: 30px;\n    list-style: none;\n    height: 50px;\n    display: flex;\n    align-items: center;\n    gap: 10px;\n}\n\n.left > .left-second-section .create-project {\n    /* margin-left: 50px; */\n    margin-top: 30px;\n    padding-left: 30px;\n    height: 50px;\n    display: flex;\n    width: 100%;\n    align-items: center;\n    gap: 10px;\n    /* justify-content: center; */\n    cursor: pointer;\n}\n\n.left > .left-second-section .create-project div {\n    /* font-style: italic; */\n    font-size: 20px;\n}\n\n.left > .left-second-section .create-project:hover {\n    background-color: #ba181b28;\n}\n\n.left > .left-second-section .create-project:active {\n    background-color: #ba181b5b\n}\n\n.left > .left-second-section .create-project > div:first-child{\n    height: 20px;\n    width: 20px;\n}\n\n\n/* Footer add new task button */\n\n.footer > .footer-right > .create-task {\n    height: 100%;\n    width: calc(100% - 300px);\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    cursor: pointer;\n    justify-content: center;\n}\n\n.footer > .footer-right > .create-task > .create-task-container {\n    width: 150px;\n    height: 50px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n    /* border-radius: 10px; */\n    /* border: 0.5px solid var(--border-dark); */\n    /* box-shadow: 0px 0px 5px 2px var(--border-color); */\n    transition: all 0.1s ease-in-out;\n\n\n    border-radius: 5px;\n    background: #e0e0e0;\n    box-shadow:  8px 8px 16px #9f9f9f,\n                 -8px -8px 16px #ffffff;\n}\n\n\n\n.footer > .footer-right > .create-task > .create-task-container div:nth-child(2) {\n    font-size: 20px;\n}\n\n.footer > .footer-right > .create-task > .create-task-container > div:first-child {\n    height: 20px;\n    width: 20px;\n}\n\n.footer > .footer-right > .create-task > .create-task-container:hover {\n    background-color: var(--button-hover);\n    transform: scale(1.1);\n\n}\n\n.footer > .footer-right > .create-task > .create-task-container:active {\n    background-color: var(--button-active)\n}\n\n\n/* Dialog layout and animations */\n\ndialog {\n    position: absolute;\n    margin: auto;\n    padding-left: 35px;\n    padding-right: 35px;\n    padding-top: 10px;\n    padding-bottom: 20px;\n    /* padding-left: 35px; */\n    border-radius: 5px;\n    border: 0.5px solid var(--border-color);\n}\n\ndialog.hidden {\n    opacity: 0;\n    top: -200%;\n    transform: scale(0.5);\n    transition: opacity 300ms ease-in-out, \n                top 1000ms ease-in-out,\n                transform 1000ms ease-in-out;\n}\n\ndialog.hidden > form > * {\n    position: relative;\n    top: 10px;\n    opacity: 0;\n}\n\ndialog.displayed {\n    opacity: 1;\n    top: 0%;\n    transform: scale(1);\n    transition: transform 300ms cubic-bezier(0.18,0.89,0.43,1.19);\n    /* transition: transform 300ms ease; */\n}\n\ndialog.displayed > form > * {\n    top: 0px;\n    opacity: 1;\n}\n\ndialog.displayed.new-project > form .project-dialog-name {\n    transition: opacity 300ms ease-in-out 200ms;\n}\n\ndialog.displayed.new-project > form .input-container {\n    transition: opacity 300ms ease-in-out 250ms;\n}\n\ndialog.displayed.new-project > form .project-name-field-div {\n    transition: opacity 300ms ease-in-out 300ms;\n}\n\ndialog.displayed.new-project > form .project-color-field-div {\n    transition: opacity 300ms ease-in-out 350ms;\n}\n\ndialog.displayed.new-project > form > button {\n    transition: opacity 300ms ease-in-out 400ms;\n}\n\ndialog.displayed.new-project > form > .close-project-dialog {\n    transition: opacity 300ms ease-in-out 450ms;\n}\n\n\ndialog.displayed.new-task > form .task-dialog-name {\n    transition: opacity 300ms ease-in-out 200ms;\n}\n\ndialog.displayed.new-task > form > .task-project-field-div {\n    transition: opacity 300ms ease-in-out 250ms;\n}\n\ndialog.displayed.new-task > form > .task-title-field-div {\n    transition: opacity 300ms ease-in-out 300ms;\n}\n\ndialog.displayed.new-task > form > .task-notes-field-div {\n    transition: opacity 300ms ease-in-out 350ms;\n}\n\ndialog.displayed.new-task > form > .task-priority-field-div {\n    transition: opacity 300ms ease-in-out 400ms;\n}\n\ndialog.displayed.new-task > form > .task-date-field-div {\n    transition: opacity 300ms ease-in-out 450ms;\n}\n\ndialog.displayed.new-task > form > button {\n    transition: opacity 300ms ease-in-out 500ms, background-color 0.3s ease, border-color 0.1s ease;\n\n}\n\ndialog.displayed.new-task > form > .close-task-dialog {\n    transition: opacity 300ms ease-in-out 550ms;\n}\n\n\n\n.new-project,\n.new-task {\n    width: 400px;\n    background-color: var(--background-light);\n}\n\n.new-project > form,\n.new-task > form {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    height: 100%;\n}\n\n.new-task > form > .task-project-field-div,\n.new-task > form > .task-title-field-div,\n.new-task > form > .task-notes-field-div,\n.new-task > form > .task-priority-field-div,\n.new-task > form > .task-date-field-div,\n.new-project > form  .project-name-field-div,\n.new-project > form  .project-color-field-div {\n    display: flex;\n    flex-direction: column;\n}\n\n.new-task > form > .task-dialog-name,\n.new-project > form > .project-dialog-name {\n    align-self: center;\n    font-size: 25px;\n    margin-bottom: 15px;\n}\n\n.new-task > form > button,\n.new-project > form > button {\n    margin-top: 25px;\n    height: 40px;\n    width: 50%;\n    align-self: center;\n    border-radius: 5px;\n    border: 0.5px solid var(--border-dark);\n    transition: background-color 1s ease;\n    background-color: var(--secondary-light);\n    cursor: pointer;\n}\n\n.new-task > form > button:hover,\n.new-project > form > button:hover {\n    border: 0.5px solid black;\n    background-color: var(--secondary-color);\n}\n\n.new-task > form > button:active,\n.new-project > form > button:active {\n    background-color: var(--secondary-dark);\n}\n\n.new-task > form > .close-task-dialog,\n.new-project > form > .close-project-dialog {\n    position: absolute;\n    right: 10px;\n    top: 10px;\n}\n\n.new-task > form > .close-task-dialog span,\n.new-project > form > .close-project-dialog span {\n    transform: scale(1);\n    opacity: 0.7;\n    cursor: pointer;\n    transition: transform 0.25s, opacity 0.25s;\n}\n\n.new-task > form > .close-task-dialog:hover span,\n.new-project > form > .close-project-dialog:hover span {\n    transform: rotate(90deg) scale(1.1);\n    opacity: 1;\n    cursor: pointer;\n}\n\n/* Dialog input styles */\n\n.new-task > form input,\n.new-task > form select,\n.new-task > form textarea,\n.new-project > form input,\n.new-project > form select,\n.new-project > form textarea {\n    outline: none;\n    padding: 10px;\n    border: 0.5px solid var(--border-color);\n    transition: all 0.25s ease;\n    border-radius: 5px;\n}\n\n.new-task > form input:hover,\n.new-task > form select:hover,\n.new-task > form textarea:hover,\n.new-project > form input:hover,\n.new-project > form select:hover,\n.new-project > form textarea:hover {\n    outline: none;\n    padding: 10px;\n    border: 0.5px solid black;\n}\n\n.new-task > form input::placeholder,\n.new-task > form select::placeholder,\n.new-task > form textarea::placeholder,\n.new-project > form input::placeholder,\n.new-project > form select::placeholder,\n.new-project > form textarea::placeholder {\n    color: var(--text-muted);\n    font-style: italic;\n}\n\n.new-task > form textarea,\n.new-project > form textarea {\n    resize: none;\n}\n\n.project-color-field-div {\n    align-self: center;\n}\n\n.new-project > form #project-color {\n    height: 40px;\n    width: 80px;\n    padding: 5px;\n    cursor: pointer;\n}\n\n.new-project > form .input-container {\n    display: flex;\n    width: 100%;\n    justify-content: space-around;\n}\n\n\n.icon {\n    width: 15px;\n    height: 15px;\n    /* fill: red; */\n    display: flex;\n    justify-content: center;\n}"],"sourceRoot":""}]);
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
            color: '#dab8de',
            active: 'false',
        },
        {
            id: 2,
            name: 'Math',
            color: '#93c7b4',
            active: 'false',
        },
        {
            id: 3,
            name: 'Programming',
            color: '#e8ceb5',
            active: 'false',
        },
        {
            id: 4,
            name: 'Leisure',
            color: '#a6b5ff',
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


    // const today = new Date(); 
    // const tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
    // const dayAfterTomorrow = new Date(new Date().getTime() + 48 * 60 * 60 * 1000);

    let tasks = [
        {
            id: 1,
            projectId: 1,
            projectName: 'Sport',
            projectColor: '#dab8de',
            title: 'Complete Exercise 1',
            notes: 'Remember to focus on the key concepts',
            priority: 'High',
            date: '2023-11-22',
            completed: 'true',
        },
        {
            id: 2,
            projectId: 2,
            projectName: 'Math',
            projectColor: '#93c7b4',
            title: 'Study Algebra',
            notes: 'Review chapters 3 and 4 for the upcoming test',
            priority: 'Medium',
            date: '2023-11-22',
            completed: 'false',
        },
        {
            id: 3,
            projectId: 3,
            projectName: 'Programming',
            projectColor: '#e8ceb5',
            title: 'Code Review for Project X',
            notes: 'Add notes regarding code quality, optimizations, and potential improvements here. Ensure comprehensive checks for syntax errors, algorithmic efficiencies, and best practices. Provide detailed comments on functions, variables, and logic to enhance readability.',
            priority: 'High',
            date: '2023-11-22',
            completed: 'false',
        },
        {
            id: 4,
            projectId: 4,
            projectName: 'Leisure',
            projectColor: '#a6b5ff',
            title: 'Buy groceries',
            notes: 'Milk, eggs, bread, and fruits',
            priority: 'Low',
            date: '2023-11-23',
            completed: 'false',
        },
        {
            id: 5,
            projectId: 1,
            projectName: 'Sport',
            projectColor: '#dab8de',
            title: 'Read "The Great Gatsby"',
            notes: 'Complete chapters 1-3 by the end of the week',
            priority: 'Medium',
            date: '2023-11-23',
            completed: 'true',
        },
        {
            id: 6,
            projectId: 2,
            projectName: 'Math',
            projectColor: '#93c7b4',
            title: 'Prepare presentation slides',
            notes: 'Incorporate feedback from team members',
            priority: 'High',
            date: '2023-11-23',
            completed: 'false',
        },
        {
            id: 7,
            projectId: 3,
            projectName: 'Programming',
            projectColor: '#e8ceb5',
            title: 'Practice guitar',
            notes: 'Learn new chords and practice scales',
            priority: 'Medium',
            date: '2023-11-24',
            completed: 'false',
        },
        {
            id: 8,
            projectId: 4,
            projectName: 'Leisure',
            projectColor: '#a6b5ff',
            title: 'Write documentation',
            notes: 'Document the new API endpoints',
            priority: 'High',
            date: '2023-11-24',
            completed: 'false',
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
                    // console.log(event);
                    // console.log(event.target);
                    // console.log(event.target.childNodes);
                    // console.log(event.target.childNodes[1]);
                    // let a = event.target.childNodes[1].textContent;
                    
                    // console.log(projectLineItemName.textContent);
                    // console.log(TaskModule.getActiveProject());

                    if (TaskModule.getActiveProject() === projectLineItemName.textContent) {
                        TaskModule.changeActiveProject('');
                    } else {
                        TaskModule.changeActiveProject(projectLineItemName.textContent);
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

            const taskLineItems = document.querySelectorAll('.task, .task-divider');
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

                const taskLineItemLeftSection = document.createElement('div');
                taskLineItemLeftSection.classList.add('task-left-section');
                if (element.completed === 'true') {
                    taskLineItemLeftSection.classList.add('checked');
                } else {
                    taskLineItemLeftSection.classList.add('unchecked');
                }
                taskLineItemLeftSection.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>check-circle-outline</title>
                <!-- Outer circle -->
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="0.5" fill="none" />
                
                <!-- Checkmark path -->
                <path d="M7,13.5 L10,16.5 L17,9.5" stroke="currentColor" stroke-width="0.5" fill="none" />
                </svg>`;

                taskLineItemLeftSection.addEventListener('click', function() {
                    if (taskLineItemLeftSection.classList.contains('unchecked')) {
                        taskLineItemLeftSection.classList.remove('unchecked');
                        taskLineItemLeftSection.classList.add('checked');
                        // taskLineItem.style.background = 'blue';
                        
                        element.completed = 'true';
                    } else {
                        taskLineItemLeftSection.classList.remove('checked');
                        taskLineItemLeftSection.classList.add('unchecked');
                        element.completed = 'false';
                    }
                })

                taskLineItem.append(taskLineItemLeftSection);

                const taskLineItemRightSection = document.createElement('div');
                taskLineItemRightSection.classList.add('task-right-section');

                const afterElement = document.createElement('div');
                afterElement.classList.add('hover-effect');
                taskLineItemRightSection.append(afterElement);
                afterElement.textContent = element.notes;

                if (afterElement.textContent !== '') {
                    taskLineItemRightSection.addEventListener('mouseover', () => {
                        afterElement.style.opacity = "1";
                        taskLineItemRightSection.addEventListener('mouseout', () => {
                            afterElement.style.opacity = "0";
                        })
                    })
                }


                // taskLineItemRightSection.addEventListener('mouseover', () => {
                //     const afterElement = document.createElement('div');
                //     afterElement.classList('hover-effect');

                //     afterElement.style.position = 'absolute';
                //     afterElement.style.left = '0';
                //     afterElement.style.top = '100%';
                //     afterElement.style.width = '100%';
                //     afterElement.style.content = 'absolute';
                //     afterElement.style.zIndex = '1';
                //     afterElement.style.afterElement.style.backgroundColor = '#d34949';
                //     afterElement.style.opacity = '1';
                //     afterElement.style.transition = 'all 1s ease';
                //     taskLineItemRightSection.appendChild(afterElement);


                //     taskLineItemRightSection.addEventListener('mouseout', () => {
                //         taskLineItemRightSection.removeChild(afterElement);
                // })

                taskLineItem.append(taskLineItemRightSection);

                const taskLineItemDivider = document.createElement('div');
                taskLineItemDivider.classList.add('task-divider');
                taskLineItemDivider.classList.add('hidden');
                rightFirstSection.append(taskLineItemDivider);

                const taskFieldsTemplate = [
                    {
                        div_class: 'task-project',
                        child_elements: [
                            {
                                div_class: 'task-project-field',
                                textContent: element.projectName,
                                color: element.projectColor,
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
                    taskLineItemRightSection.append(taskField);
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
                      }, 20 * sub_counter);
                    sub_counter = sub_counter + 1;

                });
                setTimeout(() => {
                    taskLineItem.classList.remove('hidden');
                  }, 80 * counter);
                counter = counter + 1;

                setTimeout(() => {
                    taskLineItemDivider.classList.remove('hidden');
                  }, 100 * counter);

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
        console.log(TaskModule.getAllTasks());
        // console.log(TaskModule.getProjectTasks('Math', TaskModule.getTodayTasks()));
        // console.log(TaskModule.getActiveProject());
        // console.log(TaskModule.getActiveView());
        // console.log(TaskModule.getActiveProject());
        // console.log(TaskModule.getActiveView());
    }
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QiwrQ0FBK0M7QUFDL0Msd0RBQXdEO0FBQ3hEOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBLENBQUMsT0FBTyxpRkFBaUYsWUFBWSxhQUFhLGFBQWEsY0FBYyxhQUFhLHVCQUF1Qix1QkFBdUIsd0JBQXdCLGFBQWEsYUFBYSxhQUFhLHVCQUF1QixjQUFjLGFBQWEsdUJBQXVCLGFBQWEsd0JBQXdCLGFBQWEsdUJBQXVCLGFBQWEsd0JBQXdCLGFBQWEsdUJBQXVCLHVCQUF1QixjQUFjLGFBQWEsdUJBQXVCLHdCQUF3Qix1QkFBdUIsdUJBQXVCLFFBQVEsS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssd0JBQXdCLGFBQWEsV0FBVyxPQUFPLEtBQUssd0JBQXdCLFdBQVcsT0FBTyxLQUFLLHdCQUF3QixXQUFXLFFBQVEsS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFNBQVMsT0FBTyxhQUFhLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksY0FBYyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxjQUFjLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxLQUFLLE9BQU8sYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFlBQVksWUFBWSxhQUFhLE1BQU0sVUFBVSxPQUFPLFNBQVMsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLFVBQVUsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxNQUFNLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFVBQVUsYUFBYSxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksU0FBUyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxXQUFXLE9BQU8sYUFBYSxPQUFPLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxhQUFhLE9BQU8sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxRQUFRLGFBQWEsTUFBTSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGVBQWUsYUFBYSxhQUFhLE1BQU0sT0FBTyxTQUFTLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGNBQWMsT0FBTyxLQUFLLEtBQUssT0FBTyxhQUFhLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZ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QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCOztBQUVyQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCOztBQUV6Qjs7QUFFQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7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RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub3ZhdGFzay8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL25vdmF0YXNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9ub3ZhdGFzay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL25vdmF0YXNrLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9ub3ZhdGFzay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9ub3ZhdGFzay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbm92YXRhc2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbm92YXRhc2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbm92YXRhc2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9ub3ZhdGFzay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL25vdmF0YXNrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL25vdmF0YXNrL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL25vdmF0YXNrL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9ub3ZhdGFzay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL25vdmF0YXNrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbm92YXRhc2svd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL25vdmF0YXNrLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TWF0ZXJpYWwrU3ltYm9scytPdXRsaW5lZDpvcHN6LHdnaHQsRklMTCxHUkFEQDIwLi40OCwxMDAuLjcwMCwwLi4xLC01MC4uMjAwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Sm9zZWZpbitTYW5zOndnaHRAMTAwJmZhbWlseT1MYXRvOndnaHRAMzAwJmZhbWlseT1OdW5pdG86aXRhbCx3Z2h0QDAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwJmZhbWlseT1Sb2JvdG86d2dodEAxMDAmZmFtaWx5PVJ1YmlrOndnaHRAMzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAgIC8qIFByaW1hcnkgY29sb3JzICovXG4gICAgLS1wcmltYXJ5LWNvbG9yOiAjMzQ5OGRiO1xuICAgIC0tcHJpbWFyeS1kYXJrOiAjMjk4MGI5O1xuICAgIC0tcHJpbWFyeS1saWdodDogIzg3Q0VGQTtcblxuICAgIC8qIFNlY29uZGFyeSBjb2xvcnMgKi9cbiAgICAtLXNlY29uZGFyeS1jb2xvcjogIzJlY2M3MTsgLyp1c2VkKi9cbiAgICAtLXNlY29uZGFyeS1kYXJrOiAjMjdhZTYwOyAvKnVzZWQqL1xuICAgIC0tc2Vjb25kYXJ5LWxpZ2h0OiAjYzhlNmM5OyAvKnVzZWQqL1xuXG4gICAgLyogQWNjZW50IGNvbG9ycyAqL1xuICAgIC0tYWNjZW50LWNvbG9yOiAjQkExODFCO1xuICAgIC0tYWNjZW50LWRhcms6ICNBNDE2MUE7XG4gICAgLS1hY2NlbnQtbGlnaHQ6ICNFNTM4M0I7IC8qdXNlZCovXG4gICAgLS1hY2NlbnQtZGFya2VyOiAjNjYwNzA4O1xuXG4gICAgLyogQmFja2dyb3VuZCBjb2xvcnMgKi9cbiAgICAtLWJhY2tncm91bmQtY29sb3I6ICNGNUVCRTA7IC8qdXNlZCovXG4gICAgLS1iYWNrZ3JvdW5kLWRhcms6ICNiZGMzYzc7XG4gICAgLS1iYWNrZ3JvdW5kLWxpZ2h0OiAjRURFREU5OyAvKnVzZWQqL1xuXG4gICAgLyogVGV4dCBjb2xvcnMgKi9cbiAgICAtLXRleHQtY29sb3I6ICMzMzM7IC8qdXNlZCovXG4gICAgLS10ZXh0LWxpZ2h0OiAjZmZmO1xuICAgIC0tdGV4dC1tdXRlZDogIzg4ODsgLyp1c2VkKi9cblxuICAgIC8qIEJvcmRlciBjb2xvcnMgKi9cbiAgICAtLWJvcmRlci1jb2xvcjogI0Q2Q0NDMjsgLyp1c2VkKi9cbiAgICAtLWJvcmRlci1kYXJrOiAjOTk5OyAvKnVzZWQqL1xuICAgIC0tYm9yZGVyLWxpZ2h0OiAjZWVlO1xuXG4gICAgLyogQnV0dG9uIGNvbG9ycyAqL1xuICAgIC0tYnV0dG9uLWhvdmVyOiAjYmExODFiMjg7IC8qdXNlZCovXG4gICAgLS1idXR0b24tYWN0aXZlOiAjYmExODFiNWI7IC8qdXNlZCovXG5cbiAgICAtLWVsZW1lbnRzLWhvdmVyOiAjYmExODFiMjg7IC8qdXNlZCovXG4gICAgLS1jaGVja2JveC1jb2xvcjogZ3JlZW47IC8qdXNlZCovXG59XG5cblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDRweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgei1pbmRleDogOTk5OTtcbiAgfVxuICBcbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtbGlnaHQpOyAvKiBDaGFuZ2UgdGhlIGNvbG9yIHRvIHlvdXIgcHJlZmVyZW5jZSAqL1xuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgei1pbmRleDogOTk5OTtcbiAgfVxuICBcbiAgOjotd2Via2l0LXNjcm9sbGJhcjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWxpZ2h0KTsgLyogQ2hhbmdlIHRoZSBjb2xvciB0byB5b3VyIHByZWZlcmVuY2UgKi9cbiAgICAgIHotaW5kZXg6IDk5OTk7XG4gIH1cbiAgXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWRhcmspOyAvKiBDaGFuZ2UgdGhlIGNvbG9yIHRvIHlvdXIgcHJlZmVyZW5jZSAqL1xuICAgICAgei1pbmRleDogOTk5OTsgICAgXG4gIH1cblxuXG46OmJhY2tkcm9wIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwODg7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XG59XG5cbi5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHtcbiAgICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczpcbiAgICAnRklMTCcgMCxcbiAgICAnd2dodCcgNDAwLFxuICAgICdHUkFEJyAwLFxuICAgICdvcHN6JyAyNFxufVxuXG5cbi8qIEdlbmVyYWwgbGF5b3V0ICovXG5cbioge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogMzAwO1xufVxuXG5ib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWxpZ2h0KTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDB2dztcbn1cblxuLm1haW4ge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubWFpbiA+IC5sZWZ0IHtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xuICAgIGZsZXg6IDAgMCAzMDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgICAvKiBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEwMHB4KTsgKi9cbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi5tYWluID4gLnJpZ2h0IHtcbiAgICBmbGV4OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTAwcHgpO1xufVxuXG4ubWFpbiA+IC5mb290ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICAvKiBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTsgKi9cbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGxlZnQ6IDMwMHB4O1xuICAgIGJveC1zaGFkb3c6IDBweCAtNTBweCAyNHB4IC0yMHB4IHZhcigtLWJhY2tncm91bmQtbGlnaHQpO1xuICAgIC8qIGJveC1zaGFkb3c6IC0xNTBweCAtNDBweCAyMXB4IC0zMHB4IGJsYWNrOyAqL1xuXG59XG5cbi5tYWluID4gLmZvb3RlciA+IC5mb290ZXItbGVmdCB7XG4gICAgZmxleDogMCAwIDMwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG59XG5cbi5tYWluID4gLmZvb3RlciA+IC5mb290ZXItcmlnaHQge1xuICAgIGZsZXg6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1saWdodCk7XG59XG5cbi5yaWdodC1maXJzdC1zZWN0aW9uIHtcbiAgICBwYWRkaW5nOiA1MHB4IDEwcHggNTBweCA1MHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAzcHg7XG4gICAgLyogYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgLyogbWFyZ2luLWJvdHRvbTogNTBweDsgKi9cbn1cblxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzayB7XG4gICAgLyogYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTsgKi9cbiAgICAvKiBib3JkZXItcmFkaXVzOiA1cHg7ICovXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuXG4gICAgZmxleDogMDtcbiAgICB3aWR0aDogY2xhbXAoMjAwcHgsIDYwJSwgODAwcHgpO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLyogbWF4LXdpZHRoOiA1MDBweDsgKi9cbiAgICB0cmFuc2l0aW9uOiBhbGwgMTc1bXMgZWFzZS1pbjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIC8qIGdhcDogNTBweDsgKi9cbiAgICAvKiBib3gtc2hhZG93OiAwcHggMXB4IDVweCAwcHggZ3JheTsgKi9cbiAgICAvKiBib3JkZXItcmFkaXVzOiA1cHg7ICovXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrOmhvdmVyIHtcbiAgICAvKiBib3gtc2hhZG93OiBpbnNldCAwcHggMHB4IDUwcHggNTBweCBkYXJrZ3JlZW4sXG4gICAgMHB4IDBweCA1MHB4IDUwcHggZGFya2dyZWVuOyAqL1xuICAgIC8qIGJveC1zaGFkb3c6ICAwcHggMHB4IDJweCAxcHggdmFyKC0tYm9yZGVyLWRhcmspOyAqL1xuICAgIC8qIGJvcmRlcjogMXB4IGdyZWVuIHNvbGlkOyAqL1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzayA+IC50YXNrLWxlZnQtc2VjdGlvbiB7XG4gICAgd2lkdGg6IDM1cHg7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xcyBlYXNlO1xuXG4gICAgLyogdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7ICovXG59XG5cbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2sgPiAudGFzay1sZWZ0LXNlY3Rpb24uY2hlY2tlZCBzdmcgcGF0aCxcbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2sgPiAudGFzay1sZWZ0LXNlY3Rpb24uY2hlY2tlZCBzdmcgY2lyY2xlIHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgIHN0cm9rZTogdmFyKC0tY2hlY2tib3gtY29sb3IpO1xuICAgIHN0cm9rZS13aWR0aDogMXB4O1xufVxuXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrID4gLnRhc2stbGVmdC1zZWN0aW9uLmNoZWNrZWQge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cblxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzayA+IC50YXNrLWxlZnQtc2VjdGlvbi51bmNoZWNrZWQgc3ZnIHBhdGgge1xuICAgIG9wYWNpdHk6IDA7XG59XG5cblxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzayA+IC50YXNrLWxlZnQtc2VjdGlvbjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzIGVhc2U7XG59XG5cbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2sgPiAudGFzay1sZWZ0LXNlY3Rpb246aG92ZXIgY2lyY2xlIHtcbiAgICBzdHJva2U6IHZhcigtLWNoZWNrYm94LWNvbG9yKTtcbn1cblxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzayA+IC50YXNrLWxlZnQtc2VjdGlvbjpob3ZlciBwYXRoLCBcbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2sgPiAudGFzay1sZWZ0LXNlY3Rpb246aG92ZXIgY2lyY2xlIHtcbiAgICAvKiBzdHJva2U6IHJlZDsgKi9cbiAgICAvKiBzdHJva2Utd2lkdGg6IDFweDsgKi9cbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cblxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzayA+IC50YXNrLWxlZnQtc2VjdGlvbiA+IHN2ZyBjaXJjbGUge1xuICAgIGZpbGw6IG5vbmU7XG4gICAgc3Ryb2tlOiB2YXIoLS10ZXh0LW11dGVkKTtcbn1cblxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzayA+IC50YXNrLWxlZnQtc2VjdGlvbiA+IHN2ZyBwYXRoIHtcbiAgICBmaWxsOiBub25lO1xuICAgIHN0cm9rZTogdmFyKC0tdGV4dC1tdXRlZCk7XG59XG5cbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2sgPiAudGFzay1yaWdodC1zZWN0aW9uIHtcbiAgICB3aWR0aDogODAlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1ZnIgMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcbiAgICBnYXA6IDEwcHg7XG4gICAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xufVxuXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrID4gLnRhc2stcmlnaHQtc2VjdGlvbiA+IC5ob3Zlci1lZmZlY3Qge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAxMTAlO1xuICAgIHRvcDogMjBweDtcbiAgICB3aWR0aDogNDAlO1xuICAgIG1pbi1oZWlnaHQ6IDkzcHg7XG4gICAgei1pbmRleDogMTtcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUzLCAxODksIDE1Myk7ICovXG4gICAgcGFkZGluZzogMjBweDtcbiAgICAvKiBib3gtc2hhZG93OiAwcHggMHB4IDNweCAxcHggdmFyKC0tYm9yZGVyLWRhcmspOyAqL1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0O1xuICAgIC8qIHRyYW5zaXRpb246IGFsbCAwLjVzIGN1YmljLWJlemllcigwLjE4LDAuODksMC40MywxLjE5KTsgKi9cbiAgICAvKiBib3JkZXItcmFkaXVzOiAwcHg7ICovXG4gICAgLyogdHJhbnNmb3JtOiBzY2FsZSgwKTsgKi9cbiAgICBib3JkZXI6IDAuM3B4IHNvbGlkIHZhcigtLWJvcmRlci1kYXJrKTtcbiAgICBvcGFjaXR5OiAwO1xuXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJhY2tncm91bmQ6ICNlMGUwZTA7XG4gICAgYm94LXNoYWRvdzogIDhweCA4cHggMTZweCAjOWY5ZjlmLFxuICAgICAgICAgICAgICAgICAtOHB4IC04cHggMTZweCAjZmZmZmZmO1xuXG5cblxufVxuXG4vKiAucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrID4gLnRhc2stcmlnaHQtc2VjdGlvbjpob3ZlciA+IC50YXNrLW5vdGVzLWZpZWxkIHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBncmlkLXJvdzogNCAvIDU7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xufSAqL1xuXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrID4gLnRhc2stcmlnaHQtc2VjdGlvbjpob3ZlciB7XG4gICAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7XG59XG5cbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2sgPiAudGFzay1yaWdodC1zZWN0aW9uID4gLnRhc2stcHJvamVjdCB7XG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xuICAgIGdyaWQtcm93OiAyIC8gMztcbn1cblxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzayA+IC50YXNrLXJpZ2h0LXNlY3Rpb24gPiAudGFzay1wcm9qZWN0ID4gKiB7XG4gICAgcGFkZGluZzogMXB4IDVweCAxcHggNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIHZhcigtLWJvcmRlci1kYXJrKTtcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDNweCAwcHggdmFyKC0tYm9yZGVyLWRhcmspO1xufVxuXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrID4gLnRhc2stcmlnaHQtc2VjdGlvbiA+IC50YXNrLXRpdGxlLWZpZWxkIHtcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzayA+IC50YXNrLXJpZ2h0LXNlY3Rpb24gPiAudGFzay1ub3Rlcy1maWVsZCB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzayA+IC50YXNrLXJpZ2h0LXNlY3Rpb24gPiAudGFzay1wcmlvcml0eS1maWVsZCB7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICAgIGdyaWQtcm93OiAxIC8gMjtcbn1cblxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzayA+IC50YXNrLXJpZ2h0LXNlY3Rpb24gPiAudGFzay1kYXRlLWZpZWxkIHtcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xufVxuXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrID4gLnRhc2stcmlnaHQtc2VjdGlvbiA+IC50YXNrLWRhdGUtZmllbGQ6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJEdWU6IFwiO1xufVxuXG5cblxuXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrID4gLnRhc2stcmlnaHQtc2VjdGlvbiA+IC50YXNrLXByb2plY3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG59XG5cblxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzay1kaXZpZGVyIHtcbiAgICBtaW4taGVpZ2h0OiAxcHg7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgIHRyYW5zaXRpb246IGFsbCAxNzVtcyBlYXNlLWluO1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2suaGlkZGVuLFxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzay1kaXZpZGVyLmhpZGRlbiB7XG4gICAgdHJhbnNpdGlvbjogYWxsIDE3NW1zIGVhc2UtaW47XG4gICAgb3BhY2l0eTogMDtcbn1cblxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzayA+IGRpdiA+IGRpdiB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMTc1bXMgZWFzZS1pbjtcbn1cblxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzayA+IGRpdiA+IGRpdi5oaWRkZW4ge1xuICAgIG9wYWNpdHk6IDA7XG59XG5cbi50YXNrLXByb2plY3QtY29sb3Ige1xuICAgIGhlaWdodDogMTBweDtcbiAgICB3aWR0aDogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCB2YXIoLS10ZXh0LW11dGVkKTtcbn1cblxuXG5cblxuLyogTGVmdCBkaXYgbGF5b3V0ICovXG5cbi5sZWZ0ID4gLmxlZnQtZmlyc3Qtc2VjdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBmbGV4OiAwIDAgMjAwcHg7XG4gICAgLyogbWFyZ2luLWxlZnQ6IDEwcHg7ICovXG59XG5cbi5sZWZ0ID4gLmxlZnQtc2Vjb25kLXNlY3Rpb24ge1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgZmxleDogMSAwIDIwMHB4O1xuICAgIC8qIG1hcmdpbi1sZWZ0OiAxMHB4OyAqL1xufVxuXG5cblxuLmxlZnQgPiAubGVmdC1maXJzdC1zZWN0aW9uID4gcCB7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LXdlaWdodDogMjAwO1xuICAgIGhlaWdodDogNTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5sZWZ0ID4gLmxlZnQtZmlyc3Qtc2VjdGlvbiB1bCxcbi5sZWZ0ID4gLmxlZnQtc2Vjb25kLXNlY3Rpb24gdWwge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmxlZnQgPiAubGVmdC1maXJzdC1zZWN0aW9uIGxpIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHotaW5kZXg6IDE7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBnYXA6IDEwcHg7XG59XG5cbi5sZWZ0ID4gLmxlZnQtc2Vjb25kLXNlY3Rpb24gbGkge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxlZnQgPiAubGVmdC1maXJzdC1zZWN0aW9uIGxpID4gLmltYWdlIHtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG5cbn1cblxuXG4vKiBTbGlkZXIgb24gdmlld3MgKi9cblxuLmxlZnQgPiAubGVmdC1maXJzdC1zZWN0aW9uIC50YXNrLWFuaW1hdGlvbixcbi5sZWZ0ID4gLmxlZnQtc2Vjb25kLXNlY3Rpb24gbGlbZGF0YS1hY3RpdmU9J3RydWUnXX4udGFzay1hbmltYXRpb24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAvKiB0b3A6IDA7ICovXG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGJvcmRlci1sZWZ0OiA2cHggc29saWQgdmFyKC0tYWNjZW50LWxpZ2h0KTtcbiAgICB6LWluZGV4OiAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgb3BhY2l0eTogMDtcbn1cblxuXG4udmlld3MgPiBsaTpudGgtY2hpbGQoMSlbZGF0YS1hY3RpdmU9J3RydWUnXX4udGFzay1hbmltYXRpb24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRvcDogMDtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4udmlld3MgPiBsaTpudGgtY2hpbGQoMilbZGF0YS1hY3RpdmU9J3RydWUnXX4udGFzay1hbmltYXRpb24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRvcDogNTBweDtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4udmlld3MgPiBsaTpudGgtY2hpbGQoMylbZGF0YS1hY3RpdmU9J3RydWUnXX4udGFzay1hbmltYXRpb24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRvcDogMTAwcHg7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuXG4vKiBWaWV3cyBzdHlsZXMgKi9cblxuLmxlZnQgPiAubGVmdC1maXJzdC1zZWN0aW9uIGxpW2RhdGEtYWN0aXZlPSdmYWxzZSddOmhvdmVyLFxuLmxlZnQgPiAubGVmdC1zZWNvbmQtc2VjdGlvbiBsaTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZWxlbWVudHMtaG92ZXIpO1xufVxuXG4ubGVmdCA+IC5sZWZ0LWZpcnN0LXNlY3Rpb24gbGlbZGF0YS1hY3RpdmU9J3RydWUnXSA+IGRpdiA+IHN2ZyB7XG4gICAgZmlsbDogdmFyKC0tYWNjZW50LWNvbG9yKTtcbn1cblxuLmxlZnQgPiAubGVmdC1maXJzdC1zZWN0aW9uIGxpW2RhdGEtYWN0aXZlPSd0cnVlJ10gPiBwIHtcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbn1cblxuLmxlZnQgPiAubGVmdC1zZWNvbmQtc2VjdGlvbiBsaS5mb250LWFjY2VudCA+IGRpdiB7XG4gICAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG59XG5cbi5sZWZ0ID4gLmxlZnQtZmlyc3Qtc2VjdGlvbiBsaVtkYXRhLWFjdGl2ZT0nZmFsc2UnXTphY3RpdmUsXG4ubGVmdCA+IC5sZWZ0LXNlY29uZC1zZWN0aW9uIGxpOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JhMTgxYjViO1xufVxuXG5cbi8qIFNsaWRlciBvbiBwcm9qZWN0cyAqL1xuXG4uc2Vjb25kLXNlY3Rpb24tbGlzdCA+IGxpOm50aC1jaGlsZCgxKVtkYXRhLWFjdGl2ZT0ndHJ1ZSddfi50YXNrLWFuaW1hdGlvbiB7XG4gICAgLyogd2lkdGg6IDEwMCU7ICovXG4gICAgdG9wOiAwO1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi5zZWNvbmQtc2VjdGlvbi1saXN0ID4gbGk6bnRoLWNoaWxkKDIpW2RhdGEtYWN0aXZlPSd0cnVlJ11+LnRhc2stYW5pbWF0aW9uIHtcbiAgICAvKiB3aWR0aDogMTAwJTsgKi9cbiAgICB0b3A6IDUwcHg7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLnNlY29uZC1zZWN0aW9uLWxpc3QgPiBsaTpudGgtY2hpbGQoMylbZGF0YS1hY3RpdmU9J3RydWUnXX4udGFzay1hbmltYXRpb24ge1xuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xuICAgIHRvcDogMTAwcHg7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLnNlY29uZC1zZWN0aW9uLWxpc3QgPiBsaTpudGgtY2hpbGQoNClbZGF0YS1hY3RpdmU9J3RydWUnXX4udGFzay1hbmltYXRpb24ge1xuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xuICAgIHRvcDogMTUwcHg7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLnNlY29uZC1zZWN0aW9uLWxpc3QgPiBsaTpudGgtY2hpbGQoNSlbZGF0YS1hY3RpdmU9J3RydWUnXX4udGFzay1hbmltYXRpb24ge1xuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xuICAgIHRvcDogMjAwcHg7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLnNlY29uZC1zZWN0aW9uLWxpc3QgPiBsaTpudGgtY2hpbGQoNilbZGF0YS1hY3RpdmU9J3RydWUnXX4udGFzay1hbmltYXRpb24ge1xuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xuICAgIHRvcDogMjUwcHg7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLnNlY29uZC1zZWN0aW9uLWxpc3QgPiBsaTpudGgtY2hpbGQoNylbZGF0YS1hY3RpdmU9J3RydWUnXX4udGFzay1hbmltYXRpb24ge1xuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xuICAgIHRvcDogMzAwcHg7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLnNlY29uZC1zZWN0aW9uLWxpc3QgPiBsaTpudGgtY2hpbGQoOClbZGF0YS1hY3RpdmU9J3RydWUnXX4udGFzay1hbmltYXRpb24ge1xuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xuICAgIHRvcDogMzUwcHg7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLnNlY29uZC1zZWN0aW9uLWxpc3QgPiBsaTpudGgtY2hpbGQoOSlbZGF0YS1hY3RpdmU9J3RydWUnXX4udGFzay1hbmltYXRpb24ge1xuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xuICAgIHRvcDogNDAwcHg7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLnNlY29uZC1zZWN0aW9uLWxpc3QgPiBsaTpudGgtY2hpbGQoMTApW2RhdGEtYWN0aXZlPSd0cnVlJ11+LnRhc2stYW5pbWF0aW9uIHtcbiAgICAvKiB3aWR0aDogMTAwJTsgKi9cbiAgICB0b3A6IDQ1MHB4O1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi5zZWNvbmQtc2VjdGlvbi1saXN0ID4gbGk6bnRoLWNoaWxkKDExKVtkYXRhLWFjdGl2ZT0ndHJ1ZSddfi50YXNrLWFuaW1hdGlvbiB7XG4gICAgLyogd2lkdGg6IDEwMCU7ICovXG4gICAgdG9wOiA1MDBweDtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4uc2Vjb25kLXNlY3Rpb24tbGlzdCA+IGxpOm50aC1jaGlsZCgxMilbZGF0YS1hY3RpdmU9J3RydWUnXX4udGFzay1hbmltYXRpb24ge1xuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xuICAgIHRvcDogNTUwcHg7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLmxlZnQgPiAubGVmdC1zZWNvbmQtc2VjdGlvbiA+IHAge1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubGVmdCA+IC5sZWZ0LXNlY29uZC1zZWN0aW9uIGxpIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbn1cblxuLmxlZnQgPiAubGVmdC1zZWNvbmQtc2VjdGlvbiAuY3JlYXRlLXByb2plY3Qge1xuICAgIC8qIG1hcmdpbi1sZWZ0OiA1MHB4OyAqL1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xuICAgIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxlZnQgPiAubGVmdC1zZWNvbmQtc2VjdGlvbiAuY3JlYXRlLXByb2plY3QgZGl2IHtcbiAgICAvKiBmb250LXN0eWxlOiBpdGFsaWM7ICovXG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ubGVmdCA+IC5sZWZ0LXNlY29uZC1zZWN0aW9uIC5jcmVhdGUtcHJvamVjdDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JhMTgxYjI4O1xufVxuXG4ubGVmdCA+IC5sZWZ0LXNlY29uZC1zZWN0aW9uIC5jcmVhdGUtcHJvamVjdDphY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNiYTE4MWI1YlxufVxuXG4ubGVmdCA+IC5sZWZ0LXNlY29uZC1zZWN0aW9uIC5jcmVhdGUtcHJvamVjdCA+IGRpdjpmaXJzdC1jaGlsZHtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgd2lkdGg6IDIwcHg7XG59XG5cblxuLyogRm9vdGVyIGFkZCBuZXcgdGFzayBidXR0b24gKi9cblxuLmZvb3RlciA+IC5mb290ZXItcmlnaHQgPiAuY3JlYXRlLXRhc2sge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMzAwcHgpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZm9vdGVyID4gLmZvb3Rlci1yaWdodCA+IC5jcmVhdGUtdGFzayA+IC5jcmVhdGUtdGFzay1jb250YWluZXIge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbiAgICAvKiBib3JkZXItcmFkaXVzOiAxMHB4OyAqL1xuICAgIC8qIGJvcmRlcjogMC41cHggc29saWQgdmFyKC0tYm9yZGVyLWRhcmspOyAqL1xuICAgIC8qIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDJweCB2YXIoLS1ib3JkZXItY29sb3IpOyAqL1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xuXG5cbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZDogI2UwZTBlMDtcbiAgICBib3gtc2hhZG93OiAgOHB4IDhweCAxNnB4ICM5ZjlmOWYsXG4gICAgICAgICAgICAgICAgIC04cHggLThweCAxNnB4ICNmZmZmZmY7XG59XG5cblxuXG4uZm9vdGVyID4gLmZvb3Rlci1yaWdodCA+IC5jcmVhdGUtdGFzayA+IC5jcmVhdGUtdGFzay1jb250YWluZXIgZGl2Om50aC1jaGlsZCgyKSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uZm9vdGVyID4gLmZvb3Rlci1yaWdodCA+IC5jcmVhdGUtdGFzayA+IC5jcmVhdGUtdGFzay1jb250YWluZXIgPiBkaXY6Zmlyc3QtY2hpbGQge1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbn1cblxuLmZvb3RlciA+IC5mb290ZXItcmlnaHQgPiAuY3JlYXRlLXRhc2sgPiAuY3JlYXRlLXRhc2stY29udGFpbmVyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24taG92ZXIpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcblxufVxuXG4uZm9vdGVyID4gLmZvb3Rlci1yaWdodCA+IC5jcmVhdGUtdGFzayA+IC5jcmVhdGUtdGFzay1jb250YWluZXI6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYWN0aXZlKVxufVxuXG5cbi8qIERpYWxvZyBsYXlvdXQgYW5kIGFuaW1hdGlvbnMgKi9cblxuZGlhbG9nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmctbGVmdDogMzVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzNXB4O1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgIC8qIHBhZGRpbmctbGVmdDogMzVweDsgKi9cbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xufVxuXG5kaWFsb2cuaGlkZGVuIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRvcDogLTIwMCU7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbi1vdXQsIFxuICAgICAgICAgICAgICAgIHRvcCAxMDAwbXMgZWFzZS1pbi1vdXQsXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtIDEwMDBtcyBlYXNlLWluLW91dDtcbn1cblxuZGlhbG9nLmhpZGRlbiA+IGZvcm0gPiAqIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAxMHB4O1xuICAgIG9wYWNpdHk6IDA7XG59XG5cbmRpYWxvZy5kaXNwbGF5ZWQge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdG9wOiAwJTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC4xOCwwLjg5LDAuNDMsMS4xOSk7XG4gICAgLyogdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2U7ICovXG59XG5cbmRpYWxvZy5kaXNwbGF5ZWQgPiBmb3JtID4gKiB7XG4gICAgdG9wOiAwcHg7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuZGlhbG9nLmRpc3BsYXllZC5uZXctcHJvamVjdCA+IGZvcm0gLnByb2plY3QtZGlhbG9nLW5hbWUge1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbi1vdXQgMjAwbXM7XG59XG5cbmRpYWxvZy5kaXNwbGF5ZWQubmV3LXByb2plY3QgPiBmb3JtIC5pbnB1dC1jb250YWluZXIge1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbi1vdXQgMjUwbXM7XG59XG5cbmRpYWxvZy5kaXNwbGF5ZWQubmV3LXByb2plY3QgPiBmb3JtIC5wcm9qZWN0LW5hbWUtZmllbGQtZGl2IHtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0IDMwMG1zO1xufVxuXG5kaWFsb2cuZGlzcGxheWVkLm5ldy1wcm9qZWN0ID4gZm9ybSAucHJvamVjdC1jb2xvci1maWVsZC1kaXYge1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbi1vdXQgMzUwbXM7XG59XG5cbmRpYWxvZy5kaXNwbGF5ZWQubmV3LXByb2plY3QgPiBmb3JtID4gYnV0dG9uIHtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0IDQwMG1zO1xufVxuXG5kaWFsb2cuZGlzcGxheWVkLm5ldy1wcm9qZWN0ID4gZm9ybSA+IC5jbG9zZS1wcm9qZWN0LWRpYWxvZyB7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dCA0NTBtcztcbn1cblxuXG5kaWFsb2cuZGlzcGxheWVkLm5ldy10YXNrID4gZm9ybSAudGFzay1kaWFsb2ctbmFtZSB7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dCAyMDBtcztcbn1cblxuZGlhbG9nLmRpc3BsYXllZC5uZXctdGFzayA+IGZvcm0gPiAudGFzay1wcm9qZWN0LWZpZWxkLWRpdiB7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dCAyNTBtcztcbn1cblxuZGlhbG9nLmRpc3BsYXllZC5uZXctdGFzayA+IGZvcm0gPiAudGFzay10aXRsZS1maWVsZC1kaXYge1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbi1vdXQgMzAwbXM7XG59XG5cbmRpYWxvZy5kaXNwbGF5ZWQubmV3LXRhc2sgPiBmb3JtID4gLnRhc2stbm90ZXMtZmllbGQtZGl2IHtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0IDM1MG1zO1xufVxuXG5kaWFsb2cuZGlzcGxheWVkLm5ldy10YXNrID4gZm9ybSA+IC50YXNrLXByaW9yaXR5LWZpZWxkLWRpdiB7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dCA0MDBtcztcbn1cblxuZGlhbG9nLmRpc3BsYXllZC5uZXctdGFzayA+IGZvcm0gPiAudGFzay1kYXRlLWZpZWxkLWRpdiB7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dCA0NTBtcztcbn1cblxuZGlhbG9nLmRpc3BsYXllZC5uZXctdGFzayA+IGZvcm0gPiBidXR0b24ge1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbi1vdXQgNTAwbXMsIGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLCBib3JkZXItY29sb3IgMC4xcyBlYXNlO1xuXG59XG5cbmRpYWxvZy5kaXNwbGF5ZWQubmV3LXRhc2sgPiBmb3JtID4gLmNsb3NlLXRhc2stZGlhbG9nIHtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0IDU1MG1zO1xufVxuXG5cblxuLm5ldy1wcm9qZWN0LFxuLm5ldy10YXNrIHtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1saWdodCk7XG59XG5cbi5uZXctcHJvamVjdCA+IGZvcm0sXG4ubmV3LXRhc2sgPiBmb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxMHB4O1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLm5ldy10YXNrID4gZm9ybSA+IC50YXNrLXByb2plY3QtZmllbGQtZGl2LFxuLm5ldy10YXNrID4gZm9ybSA+IC50YXNrLXRpdGxlLWZpZWxkLWRpdixcbi5uZXctdGFzayA+IGZvcm0gPiAudGFzay1ub3Rlcy1maWVsZC1kaXYsXG4ubmV3LXRhc2sgPiBmb3JtID4gLnRhc2stcHJpb3JpdHktZmllbGQtZGl2LFxuLm5ldy10YXNrID4gZm9ybSA+IC50YXNrLWRhdGUtZmllbGQtZGl2LFxuLm5ldy1wcm9qZWN0ID4gZm9ybSAgLnByb2plY3QtbmFtZS1maWVsZC1kaXYsXG4ubmV3LXByb2plY3QgPiBmb3JtICAucHJvamVjdC1jb2xvci1maWVsZC1kaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLm5ldy10YXNrID4gZm9ybSA+IC50YXNrLWRpYWxvZy1uYW1lLFxuLm5ldy1wcm9qZWN0ID4gZm9ybSA+IC5wcm9qZWN0LWRpYWxvZy1uYW1lIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5uZXctdGFzayA+IGZvcm0gPiBidXR0b24sXG4ubmV3LXByb2plY3QgPiBmb3JtID4gYnV0dG9uIHtcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogNTAlO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCB2YXIoLS1ib3JkZXItZGFyayk7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1saWdodCk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubmV3LXRhc2sgPiBmb3JtID4gYnV0dG9uOmhvdmVyLFxuLm5ldy1wcm9qZWN0ID4gZm9ybSA+IGJ1dHRvbjpob3ZlciB7XG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCBibGFjaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xufVxuXG4ubmV3LXRhc2sgPiBmb3JtID4gYnV0dG9uOmFjdGl2ZSxcbi5uZXctcHJvamVjdCA+IGZvcm0gPiBidXR0b246YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZGFyayk7XG59XG5cbi5uZXctdGFzayA+IGZvcm0gPiAuY2xvc2UtdGFzay1kaWFsb2csXG4ubmV3LXByb2plY3QgPiBmb3JtID4gLmNsb3NlLXByb2plY3QtZGlhbG9nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgdG9wOiAxMHB4O1xufVxuXG4ubmV3LXRhc2sgPiBmb3JtID4gLmNsb3NlLXRhc2stZGlhbG9nIHNwYW4sXG4ubmV3LXByb2plY3QgPiBmb3JtID4gLmNsb3NlLXByb2plY3QtZGlhbG9nIHNwYW4ge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgb3BhY2l0eTogMC43O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNXMsIG9wYWNpdHkgMC4yNXM7XG59XG5cbi5uZXctdGFzayA+IGZvcm0gPiAuY2xvc2UtdGFzay1kaWFsb2c6aG92ZXIgc3Bhbixcbi5uZXctcHJvamVjdCA+IGZvcm0gPiAuY2xvc2UtcHJvamVjdC1kaWFsb2c6aG92ZXIgc3BhbiB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpIHNjYWxlKDEuMSk7XG4gICAgb3BhY2l0eTogMTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIERpYWxvZyBpbnB1dCBzdHlsZXMgKi9cblxuLm5ldy10YXNrID4gZm9ybSBpbnB1dCxcbi5uZXctdGFzayA+IGZvcm0gc2VsZWN0LFxuLm5ldy10YXNrID4gZm9ybSB0ZXh0YXJlYSxcbi5uZXctcHJvamVjdCA+IGZvcm0gaW5wdXQsXG4ubmV3LXByb2plY3QgPiBmb3JtIHNlbGVjdCxcbi5uZXctcHJvamVjdCA+IGZvcm0gdGV4dGFyZWEge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2U7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ubmV3LXRhc2sgPiBmb3JtIGlucHV0OmhvdmVyLFxuLm5ldy10YXNrID4gZm9ybSBzZWxlY3Q6aG92ZXIsXG4ubmV3LXRhc2sgPiBmb3JtIHRleHRhcmVhOmhvdmVyLFxuLm5ldy1wcm9qZWN0ID4gZm9ybSBpbnB1dDpob3Zlcixcbi5uZXctcHJvamVjdCA+IGZvcm0gc2VsZWN0OmhvdmVyLFxuLm5ldy1wcm9qZWN0ID4gZm9ybSB0ZXh0YXJlYTpob3ZlciB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlcjogMC41cHggc29saWQgYmxhY2s7XG59XG5cbi5uZXctdGFzayA+IGZvcm0gaW5wdXQ6OnBsYWNlaG9sZGVyLFxuLm5ldy10YXNrID4gZm9ybSBzZWxlY3Q6OnBsYWNlaG9sZGVyLFxuLm5ldy10YXNrID4gZm9ybSB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIsXG4ubmV3LXByb2plY3QgPiBmb3JtIGlucHV0OjpwbGFjZWhvbGRlcixcbi5uZXctcHJvamVjdCA+IGZvcm0gc2VsZWN0OjpwbGFjZWhvbGRlcixcbi5uZXctcHJvamVjdCA+IGZvcm0gdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4ubmV3LXRhc2sgPiBmb3JtIHRleHRhcmVhLFxuLm5ldy1wcm9qZWN0ID4gZm9ybSB0ZXh0YXJlYSB7XG4gICAgcmVzaXplOiBub25lO1xufVxuXG4ucHJvamVjdC1jb2xvci1maWVsZC1kaXYge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLm5ldy1wcm9qZWN0ID4gZm9ybSAjcHJvamVjdC1jb2xvciB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5uZXctcHJvamVjdCA+IGZvcm0gLmlucHV0LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuXG4uaWNvbiB7XG4gICAgd2lkdGg6IDE1cHg7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIC8qIGZpbGw6IHJlZDsgKi9cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBR0E7SUFDSSxtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLHVCQUF1QjtJQUN2Qix3QkFBd0I7O0lBRXhCLHFCQUFxQjtJQUNyQiwwQkFBMEIsRUFBRSxPQUFPO0lBQ25DLHlCQUF5QixFQUFFLE9BQU87SUFDbEMsMEJBQTBCLEVBQUUsT0FBTzs7SUFFbkMsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsdUJBQXVCLEVBQUUsT0FBTztJQUNoQyx3QkFBd0I7O0lBRXhCLHNCQUFzQjtJQUN0QiwyQkFBMkIsRUFBRSxPQUFPO0lBQ3BDLDBCQUEwQjtJQUMxQiwyQkFBMkIsRUFBRSxPQUFPOztJQUVwQyxnQkFBZ0I7SUFDaEIsa0JBQWtCLEVBQUUsT0FBTztJQUMzQixrQkFBa0I7SUFDbEIsa0JBQWtCLEVBQUUsT0FBTzs7SUFFM0Isa0JBQWtCO0lBQ2xCLHVCQUF1QixFQUFFLE9BQU87SUFDaEMsbUJBQW1CLEVBQUUsT0FBTztJQUM1QixvQkFBb0I7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cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TWF0ZXJpYWwrU3ltYm9scytPdXRsaW5lZDpvcHN6LHdnaHQsRklMTCxHUkFEQDIwLi40OCwxMDAuLjcwMCwwLi4xLC01MC4uMjAwJyk7XFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Sm9zZWZpbitTYW5zOndnaHRAMTAwJmZhbWlseT1MYXRvOndnaHRAMzAwJmZhbWlseT1OdW5pdG86aXRhbCx3Z2h0QDAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwJmZhbWlseT1Sb2JvdG86d2dodEAxMDAmZmFtaWx5PVJ1YmlrOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbjpyb290IHtcXG4gICAgLyogUHJpbWFyeSBjb2xvcnMgKi9cXG4gICAgLS1wcmltYXJ5LWNvbG9yOiAjMzQ5OGRiO1xcbiAgICAtLXByaW1hcnktZGFyazogIzI5ODBiOTtcXG4gICAgLS1wcmltYXJ5LWxpZ2h0OiAjODdDRUZBO1xcblxcbiAgICAvKiBTZWNvbmRhcnkgY29sb3JzICovXFxuICAgIC0tc2Vjb25kYXJ5LWNvbG9yOiAjMmVjYzcxOyAvKnVzZWQqL1xcbiAgICAtLXNlY29uZGFyeS1kYXJrOiAjMjdhZTYwOyAvKnVzZWQqL1xcbiAgICAtLXNlY29uZGFyeS1saWdodDogI2M4ZTZjOTsgLyp1c2VkKi9cXG5cXG4gICAgLyogQWNjZW50IGNvbG9ycyAqL1xcbiAgICAtLWFjY2VudC1jb2xvcjogI0JBMTgxQjtcXG4gICAgLS1hY2NlbnQtZGFyazogI0E0MTYxQTtcXG4gICAgLS1hY2NlbnQtbGlnaHQ6ICNFNTM4M0I7IC8qdXNlZCovXFxuICAgIC0tYWNjZW50LWRhcmtlcjogIzY2MDcwODtcXG5cXG4gICAgLyogQmFja2dyb3VuZCBjb2xvcnMgKi9cXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjRjVFQkUwOyAvKnVzZWQqL1xcbiAgICAtLWJhY2tncm91bmQtZGFyazogI2JkYzNjNztcXG4gICAgLS1iYWNrZ3JvdW5kLWxpZ2h0OiAjRURFREU5OyAvKnVzZWQqL1xcblxcbiAgICAvKiBUZXh0IGNvbG9ycyAqL1xcbiAgICAtLXRleHQtY29sb3I6ICMzMzM7IC8qdXNlZCovXFxuICAgIC0tdGV4dC1saWdodDogI2ZmZjtcXG4gICAgLS10ZXh0LW11dGVkOiAjODg4OyAvKnVzZWQqL1xcblxcbiAgICAvKiBCb3JkZXIgY29sb3JzICovXFxuICAgIC0tYm9yZGVyLWNvbG9yOiAjRDZDQ0MyOyAvKnVzZWQqL1xcbiAgICAtLWJvcmRlci1kYXJrOiAjOTk5OyAvKnVzZWQqL1xcbiAgICAtLWJvcmRlci1saWdodDogI2VlZTtcXG5cXG4gICAgLyogQnV0dG9uIGNvbG9ycyAqL1xcbiAgICAtLWJ1dHRvbi1ob3ZlcjogI2JhMTgxYjI4OyAvKnVzZWQqL1xcbiAgICAtLWJ1dHRvbi1hY3RpdmU6ICNiYTE4MWI1YjsgLyp1c2VkKi9cXG5cXG4gICAgLS1lbGVtZW50cy1ob3ZlcjogI2JhMTgxYjI4OyAvKnVzZWQqL1xcbiAgICAtLWNoZWNrYm94LWNvbG9yOiBncmVlbjsgLyp1c2VkKi9cXG59XFxuXFxuXFxuOjotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIHdpZHRoOiA0cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgei1pbmRleDogOTk5OTtcXG4gIH1cXG4gIFxcbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWxpZ2h0KTsgLyogQ2hhbmdlIHRoZSBjb2xvciB0byB5b3VyIHByZWZlcmVuY2UgKi9cXG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XFxuICAgICAgei1pbmRleDogOTk5OTtcXG4gIH1cXG4gIFxcbiAgOjotd2Via2l0LXNjcm9sbGJhcjpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1saWdodCk7IC8qIENoYW5nZSB0aGUgY29sb3IgdG8geW91ciBwcmVmZXJlbmNlICovXFxuICAgICAgei1pbmRleDogOTk5OTtcXG4gIH1cXG4gIFxcbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWRhcmspOyAvKiBDaGFuZ2UgdGhlIGNvbG9yIHRvIHlvdXIgcHJlZmVyZW5jZSAqL1xcbiAgICAgIHotaW5kZXg6IDk5OTk7ICAgIFxcbiAgfVxcblxcblxcbjo6YmFja2Ryb3Age1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwODg7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xcbn1cXG5cXG4ubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XFxuICAgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOlxcbiAgICAnRklMTCcgMCxcXG4gICAgJ3dnaHQnIDQwMCxcXG4gICAgJ0dSQUQnIDAsXFxuICAgICdvcHN6JyAyNFxcbn1cXG5cXG5cXG4vKiBHZW5lcmFsIGxheW91dCAqL1xcblxcbioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXdlaWdodDogMzAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1saWdodCk7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuLm1haW4ge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ubWFpbiA+IC5sZWZ0IHtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBmbGV4OiAwIDAgMzAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIC8qIGhlaWdodDogY2FsYygxMDAlIC0gMTAwcHgpOyAqL1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbn1cXG5cXG4ubWFpbiA+IC5yaWdodCB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTAwcHgpO1xcbn1cXG5cXG4ubWFpbiA+IC5mb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICAvKiBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTsgKi9cXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBib3R0b206IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBsZWZ0OiAzMDBweDtcXG4gICAgYm94LXNoYWRvdzogMHB4IC01MHB4IDI0cHggLTIwcHggdmFyKC0tYmFja2dyb3VuZC1saWdodCk7XFxuICAgIC8qIGJveC1zaGFkb3c6IC0xNTBweCAtNDBweCAyMXB4IC0zMHB4IGJsYWNrOyAqL1xcblxcbn1cXG5cXG4ubWFpbiA+IC5mb290ZXIgPiAuZm9vdGVyLWxlZnQge1xcbiAgICBmbGV4OiAwIDAgMzAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xcbn1cXG5cXG4ubWFpbiA+IC5mb290ZXIgPiAuZm9vdGVyLXJpZ2h0IHtcXG4gICAgZmxleDogMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1saWdodCk7XFxufVxcblxcbi5yaWdodC1maXJzdC1zZWN0aW9uIHtcXG4gICAgcGFkZGluZzogNTBweCAxMHB4IDUwcHggNTBweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogM3B4O1xcbiAgICAvKiBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIC8qIG1hcmdpbi1ib3R0b206IDUwcHg7ICovXFxufVxcblxcbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2sge1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpOyAqL1xcbiAgICAvKiBib3JkZXItcmFkaXVzOiA1cHg7ICovXFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcblxcbiAgICBmbGV4OiAwO1xcbiAgICB3aWR0aDogY2xhbXAoMjAwcHgsIDYwJSwgODAwcHgpO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAvKiBtYXgtd2lkdGg6IDUwMHB4OyAqL1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMTc1bXMgZWFzZS1pbjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAvKiBnYXA6IDUwcHg7ICovXFxuICAgIC8qIGJveC1zaGFkb3c6IDBweCAxcHggNXB4IDBweCBncmF5OyAqL1xcbiAgICAvKiBib3JkZXItcmFkaXVzOiA1cHg7ICovXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzazpob3ZlciB7XFxuICAgIC8qIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggNTBweCA1MHB4IGRhcmtncmVlbixcXG4gICAgMHB4IDBweCA1MHB4IDUwcHggZGFya2dyZWVuOyAqL1xcbiAgICAvKiBib3gtc2hhZG93OiAgMHB4IDBweCAycHggMXB4IHZhcigtLWJvcmRlci1kYXJrKTsgKi9cXG4gICAgLyogYm9yZGVyOiAxcHggZ3JlZW4gc29saWQ7ICovXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzayA+IC50YXNrLWxlZnQtc2VjdGlvbiB7XFxuICAgIHdpZHRoOiAzNXB4O1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgZWFzZTtcXG5cXG4gICAgLyogdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7ICovXFxufVxcblxcbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2sgPiAudGFzay1sZWZ0LXNlY3Rpb24uY2hlY2tlZCBzdmcgcGF0aCxcXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrID4gLnRhc2stbGVmdC1zZWN0aW9uLmNoZWNrZWQgc3ZnIGNpcmNsZSB7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxuICAgIHN0cm9rZTogdmFyKC0tY2hlY2tib3gtY29sb3IpO1xcbiAgICBzdHJva2Utd2lkdGg6IDFweDtcXG59XFxuXFxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzayA+IC50YXNrLWxlZnQtc2VjdGlvbi5jaGVja2VkIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrID4gLnRhc2stbGVmdC1zZWN0aW9uLnVuY2hlY2tlZCBzdmcgcGF0aCB7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcblxcbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2sgPiAudGFzay1sZWZ0LXNlY3Rpb246aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzIGVhc2U7XFxufVxcblxcbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2sgPiAudGFzay1sZWZ0LXNlY3Rpb246aG92ZXIgY2lyY2xlIHtcXG4gICAgc3Ryb2tlOiB2YXIoLS1jaGVja2JveC1jb2xvcik7XFxufVxcblxcbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2sgPiAudGFzay1sZWZ0LXNlY3Rpb246aG92ZXIgcGF0aCwgXFxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzayA+IC50YXNrLWxlZnQtc2VjdGlvbjpob3ZlciBjaXJjbGUge1xcbiAgICAvKiBzdHJva2U6IHJlZDsgKi9cXG4gICAgLyogc3Ryb2tlLXdpZHRoOiAxcHg7ICovXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrID4gLnRhc2stbGVmdC1zZWN0aW9uID4gc3ZnIGNpcmNsZSB7XFxuICAgIGZpbGw6IG5vbmU7XFxuICAgIHN0cm9rZTogdmFyKC0tdGV4dC1tdXRlZCk7XFxufVxcblxcbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2sgPiAudGFzay1sZWZ0LXNlY3Rpb24gPiBzdmcgcGF0aCB7XFxuICAgIGZpbGw6IG5vbmU7XFxuICAgIHN0cm9rZTogdmFyKC0tdGV4dC1tdXRlZCk7XFxufVxcblxcbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2sgPiAudGFzay1yaWdodC1zZWN0aW9uIHtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1ZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XFxuICAgIGdhcDogMTBweDtcXG4gICAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xcbn1cXG5cXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrID4gLnRhc2stcmlnaHQtc2VjdGlvbiA+IC5ob3Zlci1lZmZlY3Qge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDExMCU7XFxuICAgIHRvcDogMjBweDtcXG4gICAgd2lkdGg6IDQwJTtcXG4gICAgbWluLWhlaWdodDogOTNweDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MywgMTg5LCAxNTMpOyAqL1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICAvKiBib3gtc2hhZG93OiAwcHggMHB4IDNweCAxcHggdmFyKC0tYm9yZGVyLWRhcmspOyAqL1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBlYXNlLWluLW91dDtcXG4gICAgLyogdHJhbnNpdGlvbjogYWxsIDAuNXMgY3ViaWMtYmV6aWVyKDAuMTgsMC44OSwwLjQzLDEuMTkpOyAqL1xcbiAgICAvKiBib3JkZXItcmFkaXVzOiAwcHg7ICovXFxuICAgIC8qIHRyYW5zZm9ybTogc2NhbGUoMCk7ICovXFxuICAgIGJvcmRlcjogMC4zcHggc29saWQgdmFyKC0tYm9yZGVyLWRhcmspO1xcbiAgICBvcGFjaXR5OiAwO1xcblxcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJhY2tncm91bmQ6ICNlMGUwZTA7XFxuICAgIGJveC1zaGFkb3c6ICA4cHggOHB4IDE2cHggIzlmOWY5ZixcXG4gICAgICAgICAgICAgICAgIC04cHggLThweCAxNnB4ICNmZmZmZmY7XFxuXFxuXFxuXFxufVxcblxcbi8qIC5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2sgPiAudGFzay1yaWdodC1zZWN0aW9uOmhvdmVyID4gLnRhc2stbm90ZXMtZmllbGQge1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIGdyaWQtcm93OiA0IC8gNTtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbn0gKi9cXG5cXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrID4gLnRhc2stcmlnaHQtc2VjdGlvbjpob3ZlciB7XFxuICAgIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlO1xcbn1cXG5cXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrID4gLnRhc2stcmlnaHQtc2VjdGlvbiA+IC50YXNrLXByb2plY3Qge1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG59XFxuXFxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzayA+IC50YXNrLXJpZ2h0LXNlY3Rpb24gPiAudGFzay1wcm9qZWN0ID4gKiB7XFxuICAgIHBhZGRpbmc6IDFweCA1cHggMXB4IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIHZhcigtLWJvcmRlci1kYXJrKTtcXG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAzcHggMHB4IHZhcigtLWJvcmRlci1kYXJrKTtcXG59XFxuXFxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzayA+IC50YXNrLXJpZ2h0LXNlY3Rpb24gPiAudGFzay10aXRsZS1maWVsZCB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2sgPiAudGFzay1yaWdodC1zZWN0aW9uID4gLnRhc2stbm90ZXMtZmllbGQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrID4gLnRhc2stcmlnaHQtc2VjdGlvbiA+IC50YXNrLXByaW9yaXR5LWZpZWxkIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxufVxcblxcbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2sgPiAudGFzay1yaWdodC1zZWN0aW9uID4gLnRhc2stZGF0ZS1maWVsZCB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbn1cXG5cXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrID4gLnRhc2stcmlnaHQtc2VjdGlvbiA+IC50YXNrLWRhdGUtZmllbGQ6OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJEdWU6IFxcXCI7XFxufVxcblxcblxcblxcblxcbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2sgPiAudGFzay1yaWdodC1zZWN0aW9uID4gLnRhc2stcHJvamVjdCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcblxcbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2stZGl2aWRlciB7XFxuICAgIG1pbi1oZWlnaHQ6IDFweDtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9yZGVyLWNvbG9yKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDE3NW1zIGVhc2UtaW47XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2suaGlkZGVuLFxcbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2stZGl2aWRlci5oaWRkZW4ge1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMTc1bXMgZWFzZS1pbjtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzayA+IGRpdiA+IGRpdiB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zaXRpb246IGFsbCAxNzVtcyBlYXNlLWluO1xcbn1cXG5cXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrID4gZGl2ID4gZGl2LmhpZGRlbiB7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbi50YXNrLXByb2plY3QtY29sb3Ige1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxuICAgIHdpZHRoOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJvcmRlcjogMC41cHggc29saWQgdmFyKC0tdGV4dC1tdXRlZCk7XFxufVxcblxcblxcblxcblxcbi8qIExlZnQgZGl2IGxheW91dCAqL1xcblxcbi5sZWZ0ID4gLmxlZnQtZmlyc3Qtc2VjdGlvbiB7XFxuICAgIG1hcmdpbi10b3A6IDQwcHg7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBmbGV4OiAwIDAgMjAwcHg7XFxuICAgIC8qIG1hcmdpbi1sZWZ0OiAxMHB4OyAqL1xcbn1cXG5cXG4ubGVmdCA+IC5sZWZ0LXNlY29uZC1zZWN0aW9uIHtcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGZsZXg6IDEgMCAyMDBweDtcXG4gICAgLyogbWFyZ2luLWxlZnQ6IDEwcHg7ICovXFxufVxcblxcblxcblxcbi5sZWZ0ID4gLmxlZnQtZmlyc3Qtc2VjdGlvbiA+IHAge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubGVmdCA+IC5sZWZ0LWZpcnN0LXNlY3Rpb24gdWwsXFxuLmxlZnQgPiAubGVmdC1zZWNvbmQtc2VjdGlvbiB1bCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmxlZnQgPiAubGVmdC1maXJzdC1zZWN0aW9uIGxpIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5sZWZ0ID4gLmxlZnQtc2Vjb25kLXNlY3Rpb24gbGkge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5sZWZ0ID4gLmxlZnQtZmlyc3Qtc2VjdGlvbiBsaSA+IC5pbWFnZSB7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgd2lkdGg6IDIwcHg7XFxuXFxufVxcblxcblxcbi8qIFNsaWRlciBvbiB2aWV3cyAqL1xcblxcbi5sZWZ0ID4gLmxlZnQtZmlyc3Qtc2VjdGlvbiAudGFzay1hbmltYXRpb24sXFxuLmxlZnQgPiAubGVmdC1zZWNvbmQtc2VjdGlvbiBsaVtkYXRhLWFjdGl2ZT0ndHJ1ZSddfi50YXNrLWFuaW1hdGlvbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgLyogdG9wOiAwOyAqL1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJvcmRlci1sZWZ0OiA2cHggc29saWQgdmFyKC0tYWNjZW50LWxpZ2h0KTtcXG4gICAgei1pbmRleDogMDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuXFxuLnZpZXdzID4gbGk6bnRoLWNoaWxkKDEpW2RhdGEtYWN0aXZlPSd0cnVlJ11+LnRhc2stYW5pbWF0aW9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRvcDogMDtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnZpZXdzID4gbGk6bnRoLWNoaWxkKDIpW2RhdGEtYWN0aXZlPSd0cnVlJ11+LnRhc2stYW5pbWF0aW9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRvcDogNTBweDtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnZpZXdzID4gbGk6bnRoLWNoaWxkKDMpW2RhdGEtYWN0aXZlPSd0cnVlJ11+LnRhc2stYW5pbWF0aW9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRvcDogMTAwcHg7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcblxcbi8qIFZpZXdzIHN0eWxlcyAqL1xcblxcbi5sZWZ0ID4gLmxlZnQtZmlyc3Qtc2VjdGlvbiBsaVtkYXRhLWFjdGl2ZT0nZmFsc2UnXTpob3ZlcixcXG4ubGVmdCA+IC5sZWZ0LXNlY29uZC1zZWN0aW9uIGxpOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZWxlbWVudHMtaG92ZXIpO1xcbn1cXG5cXG4ubGVmdCA+IC5sZWZ0LWZpcnN0LXNlY3Rpb24gbGlbZGF0YS1hY3RpdmU9J3RydWUnXSA+IGRpdiA+IHN2ZyB7XFxuICAgIGZpbGw6IHZhcigtLWFjY2VudC1jb2xvcik7XFxufVxcblxcbi5sZWZ0ID4gLmxlZnQtZmlyc3Qtc2VjdGlvbiBsaVtkYXRhLWFjdGl2ZT0ndHJ1ZSddID4gcCB7XFxuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbn1cXG5cXG4ubGVmdCA+IC5sZWZ0LXNlY29uZC1zZWN0aW9uIGxpLmZvbnQtYWNjZW50ID4gZGl2IHtcXG4gICAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxufVxcblxcbi5sZWZ0ID4gLmxlZnQtZmlyc3Qtc2VjdGlvbiBsaVtkYXRhLWFjdGl2ZT0nZmFsc2UnXTphY3RpdmUsXFxuLmxlZnQgPiAubGVmdC1zZWNvbmQtc2VjdGlvbiBsaTphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmExODFiNWI7XFxufVxcblxcblxcbi8qIFNsaWRlciBvbiBwcm9qZWN0cyAqL1xcblxcbi5zZWNvbmQtc2VjdGlvbi1saXN0ID4gbGk6bnRoLWNoaWxkKDEpW2RhdGEtYWN0aXZlPSd0cnVlJ11+LnRhc2stYW5pbWF0aW9uIHtcXG4gICAgLyogd2lkdGg6IDEwMCU7ICovXFxuICAgIHRvcDogMDtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnNlY29uZC1zZWN0aW9uLWxpc3QgPiBsaTpudGgtY2hpbGQoMilbZGF0YS1hY3RpdmU9J3RydWUnXX4udGFzay1hbmltYXRpb24ge1xcbiAgICAvKiB3aWR0aDogMTAwJTsgKi9cXG4gICAgdG9wOiA1MHB4O1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uc2Vjb25kLXNlY3Rpb24tbGlzdCA+IGxpOm50aC1jaGlsZCgzKVtkYXRhLWFjdGl2ZT0ndHJ1ZSddfi50YXNrLWFuaW1hdGlvbiB7XFxuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xcbiAgICB0b3A6IDEwMHB4O1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uc2Vjb25kLXNlY3Rpb24tbGlzdCA+IGxpOm50aC1jaGlsZCg0KVtkYXRhLWFjdGl2ZT0ndHJ1ZSddfi50YXNrLWFuaW1hdGlvbiB7XFxuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xcbiAgICB0b3A6IDE1MHB4O1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uc2Vjb25kLXNlY3Rpb24tbGlzdCA+IGxpOm50aC1jaGlsZCg1KVtkYXRhLWFjdGl2ZT0ndHJ1ZSddfi50YXNrLWFuaW1hdGlvbiB7XFxuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xcbiAgICB0b3A6IDIwMHB4O1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uc2Vjb25kLXNlY3Rpb24tbGlzdCA+IGxpOm50aC1jaGlsZCg2KVtkYXRhLWFjdGl2ZT0ndHJ1ZSddfi50YXNrLWFuaW1hdGlvbiB7XFxuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xcbiAgICB0b3A6IDI1MHB4O1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uc2Vjb25kLXNlY3Rpb24tbGlzdCA+IGxpOm50aC1jaGlsZCg3KVtkYXRhLWFjdGl2ZT0ndHJ1ZSddfi50YXNrLWFuaW1hdGlvbiB7XFxuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xcbiAgICB0b3A6IDMwMHB4O1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uc2Vjb25kLXNlY3Rpb24tbGlzdCA+IGxpOm50aC1jaGlsZCg4KVtkYXRhLWFjdGl2ZT0ndHJ1ZSddfi50YXNrLWFuaW1hdGlvbiB7XFxuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xcbiAgICB0b3A6IDM1MHB4O1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uc2Vjb25kLXNlY3Rpb24tbGlzdCA+IGxpOm50aC1jaGlsZCg5KVtkYXRhLWFjdGl2ZT0ndHJ1ZSddfi50YXNrLWFuaW1hdGlvbiB7XFxuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xcbiAgICB0b3A6IDQwMHB4O1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uc2Vjb25kLXNlY3Rpb24tbGlzdCA+IGxpOm50aC1jaGlsZCgxMClbZGF0YS1hY3RpdmU9J3RydWUnXX4udGFzay1hbmltYXRpb24ge1xcbiAgICAvKiB3aWR0aDogMTAwJTsgKi9cXG4gICAgdG9wOiA0NTBweDtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnNlY29uZC1zZWN0aW9uLWxpc3QgPiBsaTpudGgtY2hpbGQoMTEpW2RhdGEtYWN0aXZlPSd0cnVlJ11+LnRhc2stYW5pbWF0aW9uIHtcXG4gICAgLyogd2lkdGg6IDEwMCU7ICovXFxuICAgIHRvcDogNTAwcHg7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5zZWNvbmQtc2VjdGlvbi1saXN0ID4gbGk6bnRoLWNoaWxkKDEyKVtkYXRhLWFjdGl2ZT0ndHJ1ZSddfi50YXNrLWFuaW1hdGlvbiB7XFxuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xcbiAgICB0b3A6IDU1MHB4O1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4ubGVmdCA+IC5sZWZ0LXNlY29uZC1zZWN0aW9uID4gcCB7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5sZWZ0ID4gLmxlZnQtc2Vjb25kLXNlY3Rpb24gbGkge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ubGVmdCA+IC5sZWZ0LXNlY29uZC1zZWN0aW9uIC5jcmVhdGUtcHJvamVjdCB7XFxuICAgIC8qIG1hcmdpbi1sZWZ0OiA1MHB4OyAqL1xcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmxlZnQgPiAubGVmdC1zZWNvbmQtc2VjdGlvbiAuY3JlYXRlLXByb2plY3QgZGl2IHtcXG4gICAgLyogZm9udC1zdHlsZTogaXRhbGljOyAqL1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5sZWZ0ID4gLmxlZnQtc2Vjb25kLXNlY3Rpb24gLmNyZWF0ZS1wcm9qZWN0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JhMTgxYjI4O1xcbn1cXG5cXG4ubGVmdCA+IC5sZWZ0LXNlY29uZC1zZWN0aW9uIC5jcmVhdGUtcHJvamVjdDphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmExODFiNWJcXG59XFxuXFxuLmxlZnQgPiAubGVmdC1zZWNvbmQtc2VjdGlvbiAuY3JlYXRlLXByb2plY3QgPiBkaXY6Zmlyc3QtY2hpbGR7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgd2lkdGg6IDIwcHg7XFxufVxcblxcblxcbi8qIEZvb3RlciBhZGQgbmV3IHRhc2sgYnV0dG9uICovXFxuXFxuLmZvb3RlciA+IC5mb290ZXItcmlnaHQgPiAuY3JlYXRlLXRhc2sge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMDBweCk7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmZvb3RlciA+IC5mb290ZXItcmlnaHQgPiAuY3JlYXRlLXRhc2sgPiAuY3JlYXRlLXRhc2stY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIC8qIGJvcmRlci1yYWRpdXM6IDEwcHg7ICovXFxuICAgIC8qIGJvcmRlcjogMC41cHggc29saWQgdmFyKC0tYm9yZGVyLWRhcmspOyAqL1xcbiAgICAvKiBib3gtc2hhZG93OiAwcHggMHB4IDVweCAycHggdmFyKC0tYm9yZGVyLWNvbG9yKTsgKi9cXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XFxuXFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZDogI2UwZTBlMDtcXG4gICAgYm94LXNoYWRvdzogIDhweCA4cHggMTZweCAjOWY5ZjlmLFxcbiAgICAgICAgICAgICAgICAgLThweCAtOHB4IDE2cHggI2ZmZmZmZjtcXG59XFxuXFxuXFxuXFxuLmZvb3RlciA+IC5mb290ZXItcmlnaHQgPiAuY3JlYXRlLXRhc2sgPiAuY3JlYXRlLXRhc2stY29udGFpbmVyIGRpdjpudGgtY2hpbGQoMikge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5mb290ZXIgPiAuZm9vdGVyLXJpZ2h0ID4gLmNyZWF0ZS10YXNrID4gLmNyZWF0ZS10YXNrLWNvbnRhaW5lciA+IGRpdjpmaXJzdC1jaGlsZCB7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgd2lkdGg6IDIwcHg7XFxufVxcblxcbi5mb290ZXIgPiAuZm9vdGVyLXJpZ2h0ID4gLmNyZWF0ZS10YXNrID4gLmNyZWF0ZS10YXNrLWNvbnRhaW5lcjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1ob3Zlcik7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG5cXG59XFxuXFxuLmZvb3RlciA+IC5mb290ZXItcmlnaHQgPiAuY3JlYXRlLXRhc2sgPiAuY3JlYXRlLXRhc2stY29udGFpbmVyOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1hY3RpdmUpXFxufVxcblxcblxcbi8qIERpYWxvZyBsYXlvdXQgYW5kIGFuaW1hdGlvbnMgKi9cXG5cXG5kaWFsb2cge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgcGFkZGluZy1sZWZ0OiAzNXB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAzNXB4O1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxuICAgIC8qIHBhZGRpbmctbGVmdDogMzVweDsgKi9cXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxufVxcblxcbmRpYWxvZy5oaWRkZW4ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0b3A6IC0yMDAlO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbi1vdXQsIFxcbiAgICAgICAgICAgICAgICB0b3AgMTAwMG1zIGVhc2UtaW4tb3V0LFxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm0gMTAwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5kaWFsb2cuaGlkZGVuID4gZm9ybSA+ICoge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMTBweDtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuZGlhbG9nLmRpc3BsYXllZCB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRvcDogMCU7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC4xOCwwLjg5LDAuNDMsMS4xOSk7XFxuICAgIC8qIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlOyAqL1xcbn1cXG5cXG5kaWFsb2cuZGlzcGxheWVkID4gZm9ybSA+ICoge1xcbiAgICB0b3A6IDBweDtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuZGlhbG9nLmRpc3BsYXllZC5uZXctcHJvamVjdCA+IGZvcm0gLnByb2plY3QtZGlhbG9nLW5hbWUge1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0IDIwMG1zO1xcbn1cXG5cXG5kaWFsb2cuZGlzcGxheWVkLm5ldy1wcm9qZWN0ID4gZm9ybSAuaW5wdXQtY29udGFpbmVyIHtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dCAyNTBtcztcXG59XFxuXFxuZGlhbG9nLmRpc3BsYXllZC5uZXctcHJvamVjdCA+IGZvcm0gLnByb2plY3QtbmFtZS1maWVsZC1kaXYge1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0IDMwMG1zO1xcbn1cXG5cXG5kaWFsb2cuZGlzcGxheWVkLm5ldy1wcm9qZWN0ID4gZm9ybSAucHJvamVjdC1jb2xvci1maWVsZC1kaXYge1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0IDM1MG1zO1xcbn1cXG5cXG5kaWFsb2cuZGlzcGxheWVkLm5ldy1wcm9qZWN0ID4gZm9ybSA+IGJ1dHRvbiB7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbi1vdXQgNDAwbXM7XFxufVxcblxcbmRpYWxvZy5kaXNwbGF5ZWQubmV3LXByb2plY3QgPiBmb3JtID4gLmNsb3NlLXByb2plY3QtZGlhbG9nIHtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dCA0NTBtcztcXG59XFxuXFxuXFxuZGlhbG9nLmRpc3BsYXllZC5uZXctdGFzayA+IGZvcm0gLnRhc2stZGlhbG9nLW5hbWUge1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0IDIwMG1zO1xcbn1cXG5cXG5kaWFsb2cuZGlzcGxheWVkLm5ldy10YXNrID4gZm9ybSA+IC50YXNrLXByb2plY3QtZmllbGQtZGl2IHtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dCAyNTBtcztcXG59XFxuXFxuZGlhbG9nLmRpc3BsYXllZC5uZXctdGFzayA+IGZvcm0gPiAudGFzay10aXRsZS1maWVsZC1kaXYge1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0IDMwMG1zO1xcbn1cXG5cXG5kaWFsb2cuZGlzcGxheWVkLm5ldy10YXNrID4gZm9ybSA+IC50YXNrLW5vdGVzLWZpZWxkLWRpdiB7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbi1vdXQgMzUwbXM7XFxufVxcblxcbmRpYWxvZy5kaXNwbGF5ZWQubmV3LXRhc2sgPiBmb3JtID4gLnRhc2stcHJpb3JpdHktZmllbGQtZGl2IHtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dCA0MDBtcztcXG59XFxuXFxuZGlhbG9nLmRpc3BsYXllZC5uZXctdGFzayA+IGZvcm0gPiAudGFzay1kYXRlLWZpZWxkLWRpdiB7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbi1vdXQgNDUwbXM7XFxufVxcblxcbmRpYWxvZy5kaXNwbGF5ZWQubmV3LXRhc2sgPiBmb3JtID4gYnV0dG9uIHtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dCA1MDBtcywgYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UsIGJvcmRlci1jb2xvciAwLjFzIGVhc2U7XFxuXFxufVxcblxcbmRpYWxvZy5kaXNwbGF5ZWQubmV3LXRhc2sgPiBmb3JtID4gLmNsb3NlLXRhc2stZGlhbG9nIHtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dCA1NTBtcztcXG59XFxuXFxuXFxuXFxuLm5ldy1wcm9qZWN0LFxcbi5uZXctdGFzayB7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1saWdodCk7XFxufVxcblxcbi5uZXctcHJvamVjdCA+IGZvcm0sXFxuLm5ldy10YXNrID4gZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ubmV3LXRhc2sgPiBmb3JtID4gLnRhc2stcHJvamVjdC1maWVsZC1kaXYsXFxuLm5ldy10YXNrID4gZm9ybSA+IC50YXNrLXRpdGxlLWZpZWxkLWRpdixcXG4ubmV3LXRhc2sgPiBmb3JtID4gLnRhc2stbm90ZXMtZmllbGQtZGl2LFxcbi5uZXctdGFzayA+IGZvcm0gPiAudGFzay1wcmlvcml0eS1maWVsZC1kaXYsXFxuLm5ldy10YXNrID4gZm9ybSA+IC50YXNrLWRhdGUtZmllbGQtZGl2LFxcbi5uZXctcHJvamVjdCA+IGZvcm0gIC5wcm9qZWN0LW5hbWUtZmllbGQtZGl2LFxcbi5uZXctcHJvamVjdCA+IGZvcm0gIC5wcm9qZWN0LWNvbG9yLWZpZWxkLWRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5uZXctdGFzayA+IGZvcm0gPiAudGFzay1kaWFsb2ctbmFtZSxcXG4ubmV3LXByb2plY3QgPiBmb3JtID4gLnByb2plY3QtZGlhbG9nLW5hbWUge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMjVweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcXG59XFxuXFxuLm5ldy10YXNrID4gZm9ybSA+IGJ1dHRvbixcXG4ubmV3LXByb2plY3QgPiBmb3JtID4gYnV0dG9uIHtcXG4gICAgbWFyZ2luLXRvcDogMjVweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCB2YXIoLS1ib3JkZXItZGFyayk7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMgZWFzZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWxpZ2h0KTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubmV3LXRhc2sgPiBmb3JtID4gYnV0dG9uOmhvdmVyLFxcbi5uZXctcHJvamVjdCA+IGZvcm0gPiBidXR0b246aG92ZXIge1xcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIGJsYWNrO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xcbn1cXG5cXG4ubmV3LXRhc2sgPiBmb3JtID4gYnV0dG9uOmFjdGl2ZSxcXG4ubmV3LXByb2plY3QgPiBmb3JtID4gYnV0dG9uOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1kYXJrKTtcXG59XFxuXFxuLm5ldy10YXNrID4gZm9ybSA+IC5jbG9zZS10YXNrLWRpYWxvZyxcXG4ubmV3LXByb2plY3QgPiBmb3JtID4gLmNsb3NlLXByb2plY3QtZGlhbG9nIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICByaWdodDogMTBweDtcXG4gICAgdG9wOiAxMHB4O1xcbn1cXG5cXG4ubmV3LXRhc2sgPiBmb3JtID4gLmNsb3NlLXRhc2stZGlhbG9nIHNwYW4sXFxuLm5ldy1wcm9qZWN0ID4gZm9ybSA+IC5jbG9zZS1wcm9qZWN0LWRpYWxvZyBzcGFuIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgb3BhY2l0eTogMC43O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cywgb3BhY2l0eSAwLjI1cztcXG59XFxuXFxuLm5ldy10YXNrID4gZm9ybSA+IC5jbG9zZS10YXNrLWRpYWxvZzpob3ZlciBzcGFuLFxcbi5uZXctcHJvamVjdCA+IGZvcm0gPiAuY2xvc2UtcHJvamVjdC1kaWFsb2c6aG92ZXIgc3BhbiB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKSBzY2FsZSgxLjEpO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIERpYWxvZyBpbnB1dCBzdHlsZXMgKi9cXG5cXG4ubmV3LXRhc2sgPiBmb3JtIGlucHV0LFxcbi5uZXctdGFzayA+IGZvcm0gc2VsZWN0LFxcbi5uZXctdGFzayA+IGZvcm0gdGV4dGFyZWEsXFxuLm5ldy1wcm9qZWN0ID4gZm9ybSBpbnB1dCxcXG4ubmV3LXByb2plY3QgPiBmb3JtIHNlbGVjdCxcXG4ubmV3LXByb2plY3QgPiBmb3JtIHRleHRhcmVhIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG4ubmV3LXRhc2sgPiBmb3JtIGlucHV0OmhvdmVyLFxcbi5uZXctdGFzayA+IGZvcm0gc2VsZWN0OmhvdmVyLFxcbi5uZXctdGFzayA+IGZvcm0gdGV4dGFyZWE6aG92ZXIsXFxuLm5ldy1wcm9qZWN0ID4gZm9ybSBpbnB1dDpob3ZlcixcXG4ubmV3LXByb2plY3QgPiBmb3JtIHNlbGVjdDpob3ZlcixcXG4ubmV3LXByb2plY3QgPiBmb3JtIHRleHRhcmVhOmhvdmVyIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCBibGFjaztcXG59XFxuXFxuLm5ldy10YXNrID4gZm9ybSBpbnB1dDo6cGxhY2Vob2xkZXIsXFxuLm5ldy10YXNrID4gZm9ybSBzZWxlY3Q6OnBsYWNlaG9sZGVyLFxcbi5uZXctdGFzayA+IGZvcm0gdGV4dGFyZWE6OnBsYWNlaG9sZGVyLFxcbi5uZXctcHJvamVjdCA+IGZvcm0gaW5wdXQ6OnBsYWNlaG9sZGVyLFxcbi5uZXctcHJvamVjdCA+IGZvcm0gc2VsZWN0OjpwbGFjZWhvbGRlcixcXG4ubmV3LXByb2plY3QgPiBmb3JtIHRleHRhcmVhOjpwbGFjZWhvbGRlciB7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4ubmV3LXRhc2sgPiBmb3JtIHRleHRhcmVhLFxcbi5uZXctcHJvamVjdCA+IGZvcm0gdGV4dGFyZWEge1xcbiAgICByZXNpemU6IG5vbmU7XFxufVxcblxcbi5wcm9qZWN0LWNvbG9yLWZpZWxkLWRpdiB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLm5ldy1wcm9qZWN0ID4gZm9ybSAjcHJvamVjdC1jb2xvciB7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgd2lkdGg6IDgwcHg7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubmV3LXByb2plY3QgPiBmb3JtIC5pbnB1dC1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcblxcblxcbi5pY29uIHtcXG4gICAgd2lkdGg6IDE1cHg7XFxuICAgIGhlaWdodDogMTVweDtcXG4gICAgLyogZmlsbDogcmVkOyAqL1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuXG5cbi8vIFByb2plY3QgbW9kdWxlIFxuY29uc3QgUHJvamVjdE1vZHVsZSA9IChmdW5jdGlvbigpIHtcblxuICAgIC8vIFByb2plY3RzIGluIGRlZmF1bHQgY29uZmlndXJhdGlvblxuICAgIGxldCBwcm9qZWN0cyA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICBuYW1lOiAnU3BvcnQnLFxuICAgICAgICAgICAgY29sb3I6ICcjZGFiOGRlJyxcbiAgICAgICAgICAgIGFjdGl2ZTogJ2ZhbHNlJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgICBuYW1lOiAnTWF0aCcsXG4gICAgICAgICAgICBjb2xvcjogJyM5M2M3YjQnLFxuICAgICAgICAgICAgYWN0aXZlOiAnZmFsc2UnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogMyxcbiAgICAgICAgICAgIG5hbWU6ICdQcm9ncmFtbWluZycsXG4gICAgICAgICAgICBjb2xvcjogJyNlOGNlYjUnLFxuICAgICAgICAgICAgYWN0aXZlOiAnZmFsc2UnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogNCxcbiAgICAgICAgICAgIG5hbWU6ICdMZWlzdXJlJyxcbiAgICAgICAgICAgIGNvbG9yOiAnI2E2YjVmZicsXG4gICAgICAgICAgICBhY3RpdmU6ICdmYWxzZScsXG4gICAgICAgIH0sXG4gICAgXTtcblxuICAgIGxldCBwcm9qZWN0c0NvdW50ID0gcHJvamVjdHMubGVuZ3RoO1xuICAgIFxuICAgIC8vIEFkZCBuZXcgcHJvamVjdFxuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QobmFtZSwgY29sb3IpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IHt9O1xuICAgICAgICBwcm9qZWN0c0NvdW50ID0gcHJvamVjdHNDb3VudCArIDE7XG4gICAgICAgIHByb2plY3QuaWQgPSBwcm9qZWN0c0NvdW50O1xuICAgICAgICBwcm9qZWN0Lm5hbWUgPSBuYW1lO1xuICAgICAgICBwcm9qZWN0LmNvbG9yID0gY29sb3I7XG5cbiAgICAgICAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcblxuICAgICAgICByZXR1cm4gcHJvamVjdDtcbiAgICB9XG5cbiAgICAvLyBSZXRyaWV2ZSBsaXN0IG9mIHByb2plY3RzIChvYmplY3RzKVxuICAgIGZ1bmN0aW9uIGdldFByb2plY3RPYmplY3RzKCkge1xuICAgICAgICByZXR1cm4gcHJvamVjdHMuc2xpY2UoKTtcbiAgICB9XG5cbiAgICAvLyBSZXRyaWV2ZSBsaXN0IG9mIHByb2plY3QgKHZhbHVlcylcbiAgICBmdW5jdGlvbiBnZXRQcm9qZWN0VmFsdWVzKCkge1xuICAgICAgICBsZXQgcHJvamVjdFZhbHVlcyA9IFtdO1xuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKChwKSA9PiB7XG4gICAgICAgICAgICBwcm9qZWN0VmFsdWVzLnB1c2gocC5uYW1lKTtcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBwcm9qZWN0VmFsdWVzO1xuICAgIH1cblxuICAgIC8vIFJldHJpZXZlIHRoZSBpZCBvZiBhIHByb2plY3QgdGhhdCBtYXRjaGVzIHRoZSBwcm92aWRlZCBuYW1lXG4gICAgZnVuY3Rpb24gZmluZElkQnlOYW1lKG5hbWUpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0Lm5hbWUgPT09IG5hbWUpO1xuICAgICAgICByZXR1cm4gcHJvamVjdCA/IHByb2plY3QuaWQgOiBudWxsO1xuICAgIH1cblxuICAgIC8vIFJldHJpZXZlIHRoZSBjb2xvciBvZiBhIHByb2plY3QgdGhhdCBtYXRjaGVzIHRoZSBwcm92aWRlZCBuYW1lXG4gICAgZnVuY3Rpb24gZmluZENvbG9yQnlOYW1lKG5hbWUpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0Lm5hbWUgPT09IG5hbWUpO1xuICAgICAgICByZXR1cm4gcHJvamVjdCA/IHByb2plY3QuY29sb3IgOiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGNyZWF0ZVByb2plY3QsXG4gICAgICAgIGdldFByb2plY3RPYmplY3RzLFxuICAgICAgICBnZXRQcm9qZWN0VmFsdWVzLFxuICAgICAgICBmaW5kSWRCeU5hbWUsXG4gICAgICAgIGZpbmRDb2xvckJ5TmFtZSxcbiAgICB9XG4gICAgXG59KSgpO1xuXG5cbi8vIFRhc2sgbW9kdWxlIFxuY29uc3QgVGFza01vZHVsZSA9IChmdW5jdGlvbigpIHtcblxuICAgIGxldCBhY3RpdmVfdmlldyA9ICd0b2RheSc7XG4gICAgbGV0IGFjdGl2ZV9wcm9qZWN0ID0gJyc7XG5cbiAgICBmdW5jdGlvbiBjaGFuZ2VBY3RpdmVWaWV3KHZpZXcpIHtcbiAgICAgICAgYWN0aXZlX3ZpZXcgPSB2aWV3O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEFjdGl2ZVZpZXcoKSB7XG4gICAgICAgIHJldHVybiBhY3RpdmVfdmlldztcbiAgICB9XG5cblxuXG4gICAgZnVuY3Rpb24gY2hhbmdlQWN0aXZlUHJvamVjdChwcm9qZWN0KSB7XG4gICAgICAgIGFjdGl2ZV9wcm9qZWN0ID0gcHJvamVjdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRBY3RpdmVQcm9qZWN0KCkge1xuICAgICAgICByZXR1cm4gYWN0aXZlX3Byb2plY3Q7XG4gICAgfVxuXG5cbiAgICAvLyBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7IFxuICAgIC8vIGNvbnN0IHRvbW9ycm93ID0gbmV3IERhdGUobmV3IERhdGUoKS5nZXRUaW1lKCkgKyAyNCAqIDYwICogNjAgKiAxMDAwKTtcbiAgICAvLyBjb25zdCBkYXlBZnRlclRvbW9ycm93ID0gbmV3IERhdGUobmV3IERhdGUoKS5nZXRUaW1lKCkgKyA0OCAqIDYwICogNjAgKiAxMDAwKTtcblxuICAgIGxldCB0YXNrcyA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICBwcm9qZWN0SWQ6IDEsXG4gICAgICAgICAgICBwcm9qZWN0TmFtZTogJ1Nwb3J0JyxcbiAgICAgICAgICAgIHByb2plY3RDb2xvcjogJyNkYWI4ZGUnLFxuICAgICAgICAgICAgdGl0bGU6ICdDb21wbGV0ZSBFeGVyY2lzZSAxJyxcbiAgICAgICAgICAgIG5vdGVzOiAnUmVtZW1iZXIgdG8gZm9jdXMgb24gdGhlIGtleSBjb25jZXB0cycsXG4gICAgICAgICAgICBwcmlvcml0eTogJ0hpZ2gnLFxuICAgICAgICAgICAgZGF0ZTogJzIwMjMtMTEtMjInLFxuICAgICAgICAgICAgY29tcGxldGVkOiAndHJ1ZScsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgICAgcHJvamVjdElkOiAyLFxuICAgICAgICAgICAgcHJvamVjdE5hbWU6ICdNYXRoJyxcbiAgICAgICAgICAgIHByb2plY3RDb2xvcjogJyM5M2M3YjQnLFxuICAgICAgICAgICAgdGl0bGU6ICdTdHVkeSBBbGdlYnJhJyxcbiAgICAgICAgICAgIG5vdGVzOiAnUmV2aWV3IGNoYXB0ZXJzIDMgYW5kIDQgZm9yIHRoZSB1cGNvbWluZyB0ZXN0JyxcbiAgICAgICAgICAgIHByaW9yaXR5OiAnTWVkaXVtJyxcbiAgICAgICAgICAgIGRhdGU6ICcyMDIzLTExLTIyJyxcbiAgICAgICAgICAgIGNvbXBsZXRlZDogJ2ZhbHNlJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDMsXG4gICAgICAgICAgICBwcm9qZWN0SWQ6IDMsXG4gICAgICAgICAgICBwcm9qZWN0TmFtZTogJ1Byb2dyYW1taW5nJyxcbiAgICAgICAgICAgIHByb2plY3RDb2xvcjogJyNlOGNlYjUnLFxuICAgICAgICAgICAgdGl0bGU6ICdDb2RlIFJldmlldyBmb3IgUHJvamVjdCBYJyxcbiAgICAgICAgICAgIG5vdGVzOiAnQWRkIG5vdGVzIHJlZ2FyZGluZyBjb2RlIHF1YWxpdHksIG9wdGltaXphdGlvbnMsIGFuZCBwb3RlbnRpYWwgaW1wcm92ZW1lbnRzIGhlcmUuIEVuc3VyZSBjb21wcmVoZW5zaXZlIGNoZWNrcyBmb3Igc3ludGF4IGVycm9ycywgYWxnb3JpdGhtaWMgZWZmaWNpZW5jaWVzLCBhbmQgYmVzdCBwcmFjdGljZXMuIFByb3ZpZGUgZGV0YWlsZWQgY29tbWVudHMgb24gZnVuY3Rpb25zLCB2YXJpYWJsZXMsIGFuZCBsb2dpYyB0byBlbmhhbmNlIHJlYWRhYmlsaXR5LicsXG4gICAgICAgICAgICBwcmlvcml0eTogJ0hpZ2gnLFxuICAgICAgICAgICAgZGF0ZTogJzIwMjMtMTEtMjInLFxuICAgICAgICAgICAgY29tcGxldGVkOiAnZmFsc2UnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogNCxcbiAgICAgICAgICAgIHByb2plY3RJZDogNCxcbiAgICAgICAgICAgIHByb2plY3ROYW1lOiAnTGVpc3VyZScsXG4gICAgICAgICAgICBwcm9qZWN0Q29sb3I6ICcjYTZiNWZmJyxcbiAgICAgICAgICAgIHRpdGxlOiAnQnV5IGdyb2NlcmllcycsXG4gICAgICAgICAgICBub3RlczogJ01pbGssIGVnZ3MsIGJyZWFkLCBhbmQgZnJ1aXRzJyxcbiAgICAgICAgICAgIHByaW9yaXR5OiAnTG93JyxcbiAgICAgICAgICAgIGRhdGU6ICcyMDIzLTExLTIzJyxcbiAgICAgICAgICAgIGNvbXBsZXRlZDogJ2ZhbHNlJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDUsXG4gICAgICAgICAgICBwcm9qZWN0SWQ6IDEsXG4gICAgICAgICAgICBwcm9qZWN0TmFtZTogJ1Nwb3J0JyxcbiAgICAgICAgICAgIHByb2plY3RDb2xvcjogJyNkYWI4ZGUnLFxuICAgICAgICAgICAgdGl0bGU6ICdSZWFkIFwiVGhlIEdyZWF0IEdhdHNieVwiJyxcbiAgICAgICAgICAgIG5vdGVzOiAnQ29tcGxldGUgY2hhcHRlcnMgMS0zIGJ5IHRoZSBlbmQgb2YgdGhlIHdlZWsnLFxuICAgICAgICAgICAgcHJpb3JpdHk6ICdNZWRpdW0nLFxuICAgICAgICAgICAgZGF0ZTogJzIwMjMtMTEtMjMnLFxuICAgICAgICAgICAgY29tcGxldGVkOiAndHJ1ZScsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiA2LFxuICAgICAgICAgICAgcHJvamVjdElkOiAyLFxuICAgICAgICAgICAgcHJvamVjdE5hbWU6ICdNYXRoJyxcbiAgICAgICAgICAgIHByb2plY3RDb2xvcjogJyM5M2M3YjQnLFxuICAgICAgICAgICAgdGl0bGU6ICdQcmVwYXJlIHByZXNlbnRhdGlvbiBzbGlkZXMnLFxuICAgICAgICAgICAgbm90ZXM6ICdJbmNvcnBvcmF0ZSBmZWVkYmFjayBmcm9tIHRlYW0gbWVtYmVycycsXG4gICAgICAgICAgICBwcmlvcml0eTogJ0hpZ2gnLFxuICAgICAgICAgICAgZGF0ZTogJzIwMjMtMTEtMjMnLFxuICAgICAgICAgICAgY29tcGxldGVkOiAnZmFsc2UnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogNyxcbiAgICAgICAgICAgIHByb2plY3RJZDogMyxcbiAgICAgICAgICAgIHByb2plY3ROYW1lOiAnUHJvZ3JhbW1pbmcnLFxuICAgICAgICAgICAgcHJvamVjdENvbG9yOiAnI2U4Y2ViNScsXG4gICAgICAgICAgICB0aXRsZTogJ1ByYWN0aWNlIGd1aXRhcicsXG4gICAgICAgICAgICBub3RlczogJ0xlYXJuIG5ldyBjaG9yZHMgYW5kIHByYWN0aWNlIHNjYWxlcycsXG4gICAgICAgICAgICBwcmlvcml0eTogJ01lZGl1bScsXG4gICAgICAgICAgICBkYXRlOiAnMjAyMy0xMS0yNCcsXG4gICAgICAgICAgICBjb21wbGV0ZWQ6ICdmYWxzZScsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiA4LFxuICAgICAgICAgICAgcHJvamVjdElkOiA0LFxuICAgICAgICAgICAgcHJvamVjdE5hbWU6ICdMZWlzdXJlJyxcbiAgICAgICAgICAgIHByb2plY3RDb2xvcjogJyNhNmI1ZmYnLFxuICAgICAgICAgICAgdGl0bGU6ICdXcml0ZSBkb2N1bWVudGF0aW9uJyxcbiAgICAgICAgICAgIG5vdGVzOiAnRG9jdW1lbnQgdGhlIG5ldyBBUEkgZW5kcG9pbnRzJyxcbiAgICAgICAgICAgIHByaW9yaXR5OiAnSGlnaCcsXG4gICAgICAgICAgICBkYXRlOiAnMjAyMy0xMS0yNCcsXG4gICAgICAgICAgICBjb21wbGV0ZWQ6ICdmYWxzZScsXG4gICAgICAgIH0sXG4gICAgICAgIFxuXG4gICAgXTtcbiAgICBcbiAgICBsZXQgdGFza3NDb3VudCA9IHRhc2tzLmxlbmd0aDtcblxuICAgIC8vIEFkZCBuZXcgdGFzayBvYmplY3RcbiAgICBmdW5jdGlvbiBjcmVhdGVUYXNrKHByb2plY3ROYW1lLCB0aXRsZSwgbm90ZXMsIHByaW9yaXR5LCBkYXRlKSB7XG4gICAgICAgIGNvbnN0IHRhc2sgPSB7fTtcbiAgICAgICAgdGFza3NDb3VudCA9IHRhc2tzQ291bnQgKyAxO1xuICAgICAgICB0YXNrLmlkID0gdGFza3NDb3VudDtcbiAgICAgICAgdGFzay5wcm9qZWN0SWQgPSBQcm9qZWN0TW9kdWxlLmZpbmRJZEJ5TmFtZShwcm9qZWN0TmFtZSk7XG4gICAgICAgIHRhc2sucHJvamVjdE5hbWUgPSBwcm9qZWN0TmFtZTtcbiAgICAgICAgdGFzay5wcm9qZWN0Q29sb3IgPSBQcm9qZWN0TW9kdWxlLmZpbmRDb2xvckJ5TmFtZShwcm9qZWN0TmFtZSk7XG4gICAgICAgIHRhc2sudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGFzay5ub3RlcyA9IG5vdGVzO1xuICAgICAgICB0YXNrLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRhc2suZGF0ZSA9IGRhdGU7XG4gIFxuICAgICAgICB0YXNrcy5wdXNoKHRhc2spO1xuICAgICAgICByZXR1cm4gdGFzaztcbiAgICB9XG5cbiAgICAvLyBSZXRyaWV2ZSBhbGwgdGFza3NcbiAgICBmdW5jdGlvbiBnZXRBbGxUYXNrcygpIHtcbiAgICAgICAgY2hhbmdlQWN0aXZlVmlldygnYWxsJyk7XG4gICAgICAgIHJldHVybiB0YXNrcy5zbGljZSgpO1xuICAgIH1cblxuICAgIC8vIFJldHJpZXZlIHRvZGF5J3MgdGFza3NcbiAgICBmdW5jdGlvbiBnZXRUb2RheVRhc2tzKCkge1xuICAgICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7ICAgICAgICBcbiAgICAgICAgY29uc3QgdGFza3NUb1JldHVybiA9IFtdO1xuICAgICAgICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkYXRlU3RyaW5nID0gdGFzay5kYXRlO1xuICAgICAgICAgICAgY29uc3QgZGF0ZVBhcnRzID0gZGF0ZVN0cmluZy5zcGxpdChcIi1cIik7XG5cbiAgICAgICAgICAgIGNvbnN0IHllYXIgPSBwYXJzZUludChkYXRlUGFydHNbMF0pO1xuICAgICAgICAgICAgY29uc3QgbW9udGggPSBwYXJzZUludChkYXRlUGFydHNbMV0pO1xuICAgICAgICAgICAgY29uc3QgZGF0ZSA9IHBhcnNlSW50KGRhdGVQYXJ0c1syXSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHRhc2tEYXRlID0gbmV3IERhdGUoeWVhciwgbW9udGggLSAxLCBkYXRlKTtcblxuICAgICAgICAgICAgY29uc3QgaXNTYW1lWWVhciA9IHRhc2tEYXRlLmdldEZ1bGxZZWFyKCkgPT09IHRvZGF5LmdldEZ1bGxZZWFyKCk7XG4gICAgICAgICAgICBjb25zdCBpc1NhbWVNb250aCA9IHRhc2tEYXRlLmdldE1vbnRoKCkgPT09IHRvZGF5LmdldE1vbnRoKCk7XG4gICAgICAgICAgICBjb25zdCBpc1NhbWVEYXkgPSB0YXNrRGF0ZS5nZXREYXRlKCkgPT09IHRvZGF5LmdldERhdGUoKTtcblxuXG4gICAgICAgICAgICBpZiAoaXNTYW1lWWVhciAmJiBpc1NhbWVNb250aCAmJiBpc1NhbWVEYXkpIHtcbiAgICAgICAgICAgICAgICB0YXNrc1RvUmV0dXJuLnB1c2godGFzayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgY2hhbmdlQWN0aXZlVmlldygndG9kYXknKTtcbiAgICAgICAgcmV0dXJuIHRhc2tzVG9SZXR1cm47XG4gICAgfVxuXG4gICAgLy8gUmV0cmlldmUgdG9tb3Jyb3cncyB0YXNrc1xuICAgIGZ1bmN0aW9uIGdldFRvbW9ycm93VGFza3MoKSB7XG5cbiAgICAgICAgY29uc3QgdG9tb3Jyb3cgPSBuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldFRpbWUoKSArIDI0ICogNjAgKiA2MCAqIDEwMDApOyAgICAgICBcbiAgICAgICAgY29uc3QgdGFza3NUb1JldHVybiA9IFtdO1xuICAgICAgICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkYXRlU3RyaW5nID0gdGFzay5kYXRlO1xuICAgICAgICAgICAgY29uc3QgZGF0ZVBhcnRzID0gZGF0ZVN0cmluZy5zcGxpdChcIi1cIik7XG5cbiAgICAgICAgICAgIGNvbnN0IHllYXIgPSBwYXJzZUludChkYXRlUGFydHNbMF0pO1xuICAgICAgICAgICAgY29uc3QgbW9udGggPSBwYXJzZUludChkYXRlUGFydHNbMV0pO1xuICAgICAgICAgICAgY29uc3QgZGF0ZSA9IHBhcnNlSW50KGRhdGVQYXJ0c1syXSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHRhc2tEYXRlID0gbmV3IERhdGUoeWVhciwgbW9udGggLSAxLCBkYXRlKTtcblxuICAgICAgICAgICAgY29uc3QgaXNTYW1lWWVhciA9IHRhc2tEYXRlLmdldEZ1bGxZZWFyKCkgPT09IHRvbW9ycm93LmdldEZ1bGxZZWFyKCk7XG4gICAgICAgICAgICBjb25zdCBpc1NhbWVNb250aCA9IHRhc2tEYXRlLmdldE1vbnRoKCkgPT09IHRvbW9ycm93LmdldE1vbnRoKCk7XG4gICAgICAgICAgICBjb25zdCBpc1NhbWVEYXkgPSB0YXNrRGF0ZS5nZXREYXRlKCkgPT09IHRvbW9ycm93LmdldERhdGUoKTtcblxuXG4gICAgICAgICAgICBpZiAoaXNTYW1lWWVhciAmJiBpc1NhbWVNb250aCAmJiBpc1NhbWVEYXkpIHtcbiAgICAgICAgICAgICAgICB0YXNrc1RvUmV0dXJuLnB1c2godGFzayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgY2hhbmdlQWN0aXZlVmlldygndG9tb3Jyb3cnKTtcbiAgICAgICAgcmV0dXJuIHRhc2tzVG9SZXR1cm47XG5cblxuICAgIH1cblxuICAgIC8vIFJldHJpZXZlIHRhc2tzIGZyb20gYWN0aXZlIHZpZXdcbiAgICBmdW5jdGlvbiBnZXRUYXNrc0Zyb21BY3RpdmVWaWV3KCkge1xuICAgICAgICBpZiAoZ2V0QWN0aXZlVmlldygpID09PSAndG9kYXknKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0VG9kYXlUYXNrcygpO1xuICAgICAgICB9IGVsc2UgaWYgKGdldEFjdGl2ZVZpZXcoKSA9PT0gJ3RvbW9ycm93Jykge1xuICAgICAgICAgICAgcmV0dXJuIGdldFRvbW9ycm93VGFza3MoKTtcbiAgICAgICAgfSBlbHNlIGlmIChnZXRBY3RpdmVWaWV3KCkgPT09ICdhbGwnKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0QWxsVGFza3MoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHJpZXZlIGEgcHJvamVjdCdzIHRhc2tzXG4gICAgZnVuY3Rpb24gZ2V0UHJvamVjdFRhc2tzKHByb2plY3QsIHRhc2tzKSB7XG4gICAgICAgIGlmIChwcm9qZWN0ID09ICcnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGFza3M7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0YXNrc1RvUmV0dXJuID0gW107XG4gICAgICAgIFxuICAgICAgICB0YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgaWYgKHRhc2sucHJvamVjdE5hbWUgPT0gcHJvamVjdCkge1xuICAgICAgICAgICAgICAgIHRhc2tzVG9SZXR1cm4ucHVzaCh0YXNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBjaGFuZ2VBY3RpdmVQcm9qZWN0KHByb2plY3QpO1xuXG4gICAgICAgIHJldHVybiB0YXNrc1RvUmV0dXJuO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGNyZWF0ZVRhc2ssXG4gICAgICAgIGdldEFsbFRhc2tzLFxuICAgICAgICBnZXRUb2RheVRhc2tzLFxuICAgICAgICBnZXRUb21vcnJvd1Rhc2tzLFxuICAgICAgICBjaGFuZ2VBY3RpdmVWaWV3LFxuICAgICAgICBnZXRBY3RpdmVWaWV3LFxuICAgICAgICBjaGFuZ2VBY3RpdmVQcm9qZWN0LFxuICAgICAgICBnZXRBY3RpdmVQcm9qZWN0LFxuICAgICAgICBnZXRQcm9qZWN0VGFza3MsXG4gICAgICAgIGdldFRhc2tzRnJvbUFjdGl2ZVZpZXcsXG4gICAgfVxuICAgIFxufSkoKTtcblxuXG4vLyBET00gbW9kdWxlXG5jb25zdCBET01Nb2R1bGUgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZU1haW5EaXYoKSB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgICAgIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWFpbkRpdi5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG4gICAgICAgIGJvZHkuYXBwZW5kKG1haW5EaXYpO1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZURpYWxvZ3MgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgICAgICAvLyBuZXdQcm9qZWN0RGlhbG9nSGFuZGxlcigpO1xuICAgICAgICAvLyBuZXdUYXNrRGlhbG9nSGFuZGxlcigpO1xuXG4gICAgICAgIGZ1bmN0aW9uIG5ld1Byb2plY3REaWFsb2dIYW5kbGVyKCkge1xuICAgICAgICAgICAgY29uc3QgbmV3UHJvamVjdERpYWxvZyA9IGNyZWF0ZVByb2plY3REaWFsb2coKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1Byb2plY3REaWFsb2dGb3JtID0gY3JlYXRlUHJvamVjdERpYWxvZ0Zvcm0oKTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlUHJvamVjdERpYWxvZygpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdQcm9qZWN0RGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJyk7XG4gICAgICAgICAgICAgICAgbmV3UHJvamVjdERpYWxvZy5jbGFzc0xpc3QuYWRkKCduZXctcHJvamVjdCcsICdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICBib2R5LmFwcGVuZChuZXdQcm9qZWN0RGlhbG9nKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3UHJvamVjdERpYWxvZztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlUHJvamVjdERpYWxvZ0Zvcm0oKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3UHJvamVjdERpYWxvZ0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgICAgICAgICAgbmV3UHJvamVjdERpYWxvZy5hcHBlbmQobmV3UHJvamVjdERpYWxvZ0Zvcm0pO1xuICAgICAgICAgICAgICAgIG5ld1Byb2plY3REaWFsb2dGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaWFsb2cubmV3LXByb2plY3QgPiBmb3JtIGlucHV0I3Byb2plY3QtbmFtZScpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0Q29sb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaWFsb2cubmV3LXByb2plY3QgPiBmb3JtIGlucHV0I3Byb2plY3QtY29sb3InKTtcbiAgICAgICAgICAgICAgICAgICAgUHJvamVjdE1vZHVsZS5jcmVhdGVQcm9qZWN0KHByb2plY3ROYW1lLnZhbHVlLCBwcm9qZWN0Q29sb3IudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBET01Nb2R1bGUuY3JlYXRlTGVmdERpdi5jcmVhdGVQcm9qZWN0cyhQcm9qZWN0TW9kdWxlLmdldFByb2plY3RPYmplY3RzKCkpO1xuICAgICAgICAgICAgICAgICAgICBET01Nb2R1bGUuY3JlYXRlRGlhbG9ncy5uZXdUYXNrRGlhbG9nSGFuZGxlcigpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGRpYWxvZ05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBkaWFsb2dOYW1lLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZGlhbG9nLW5hbWUnKTtcbiAgICAgICAgICAgICAgICBkaWFsb2dOYW1lLnRleHRDb250ZW50ID0gJ05ldyBQcm9qZWN0JztcbiAgICAgICAgICAgICAgICBuZXdQcm9qZWN0RGlhbG9nRm9ybS5hcHBlbmQoZGlhbG9nTmFtZSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgICAgIG5ld1Byb2plY3REaWFsb2dGb3JtLmFwcGVuZChpbnB1dENvbnRhaW5lcik7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBuYW1lRmllbGREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBuYW1lRmllbGREaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1uYW1lLWZpZWxkLWRpdicpO1xuICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyLmFwcGVuZChuYW1lRmllbGREaXYpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgbmFtZUZpZWxkTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgICAgIG5hbWVGaWVsZExhYmVsLnRleHRDb250ZW50ID0gJ05hbWUqJztcbiAgICAgICAgICAgICAgICBuYW1lRmllbGRMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcm9qZWN0LW5hbWUnKTtcbiAgICAgICAgICAgICAgICBuYW1lRmllbGREaXYuYXBwZW5kKG5hbWVGaWVsZExhYmVsKTtcbiAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBuYW1lRmllbGRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgbmFtZUZpZWxkSW5wdXQudGV4dENvbnRlbnQgPSAnTmFtZSc7XG4gICAgICAgICAgICAgICAgbmFtZUZpZWxkSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgICAgICAgICBuYW1lRmllbGRJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3QtbmFtZScpO1xuICAgICAgICAgICAgICAgIG5hbWVGaWVsZElucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnQXdlc29tZSBwcm9qZWN0Li4uJyk7XG4gICAgICAgICAgICAgICAgbmFtZUZpZWxkSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICdyZXF1aXJlZCcpO1xuICAgICAgICAgICAgICAgIG5hbWVGaWVsZERpdi5hcHBlbmQobmFtZUZpZWxkSW5wdXQpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgY29sb3JGaWVsZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGNvbG9yRmllbGREaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jb2xvci1maWVsZC1kaXYnKTtcbiAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lci5hcHBlbmQoY29sb3JGaWVsZERpdik7XG4gICAgXG4gICAgICAgICAgICAgICAgY29uc3QgY29sb3JGaWVsZExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgICAgICBjb2xvckZpZWxkTGFiZWwudGV4dENvbnRlbnQgPSAnQ29sb3InO1xuICAgICAgICAgICAgICAgIGNvbG9yRmllbGRMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcm9qZWN0LWNvbG9yJyk7XG4gICAgICAgICAgICAgICAgY29sb3JGaWVsZERpdi5hcHBlbmQoY29sb3JGaWVsZExhYmVsKTtcbiAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBjb2xvckZpZWxkSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgIGNvbG9yRmllbGRJbnB1dC50ZXh0Q29udGVudCA9ICdDb2xvcic7XG4gICAgICAgICAgICAgICAgY29sb3JGaWVsZElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdjb2xvcicpO1xuICAgICAgICAgICAgICAgIGNvbG9yRmllbGRJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3QtY29sb3InKTtcbiAgICAgICAgICAgICAgICBjb2xvckZpZWxkRGl2LmFwcGVuZChjb2xvckZpZWxkSW5wdXQpO1xuICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IHN1Ym1pdFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICBzdWJtaXRQcm9qZWN0QnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgICAgICAgICAgICAgICBzdWJtaXRQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gJ1NhdmUnO1xuICAgICAgICAgICAgICAgIG5ld1Byb2plY3REaWFsb2dGb3JtLmFwcGVuZChzdWJtaXRQcm9qZWN0QnV0dG9uKTtcbiAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBjbG9zZVByb2plY3REaWFsb2dEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBjbG9zZVByb2plY3REaWFsb2dEaXYuY2xhc3NMaXN0LmFkZCgnY2xvc2UtcHJvamVjdC1kaWFsb2cnKTtcbiAgICAgICAgICAgICAgICBuZXdQcm9qZWN0RGlhbG9nRm9ybS5hcHBlbmQoY2xvc2VQcm9qZWN0RGlhbG9nRGl2KTtcbiAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBjbG9zZVByb2plY3REaWFsb2dTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgICAgIGNsb3NlUHJvamVjdERpYWxvZ1NwYW4uY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCcpO1xuICAgICAgICAgICAgICAgIGNsb3NlUHJvamVjdERpYWxvZ1NwYW4udGV4dENvbnRlbnQgPSAnY2xvc2UnO1xuICAgICAgICAgICAgICAgIGNsb3NlUHJvamVjdERpYWxvZ0Rpdi5hcHBlbmQoY2xvc2VQcm9qZWN0RGlhbG9nU3Bhbik7XG5cbiAgICAgICAgICAgICAgICAvLyBBZGQgY2xvc2UgYW5pbWF0aW9uIG9uIFNhdmUgYW5kIENsb3NlXG4gICAgICAgICAgICAgICAgaGFuZGxlQ2xvc2VBbmltYXRpb24obmV3UHJvamVjdERpYWxvZ0Zvcm0sIG5ld1Byb2plY3REaWFsb2csICdzdWJtaXQnLCBuZXdQcm9qZWN0RGlhbG9nRm9ybSk7XG4gICAgICAgICAgICAgICAgaGFuZGxlQ2xvc2VBbmltYXRpb24oY2xvc2VQcm9qZWN0RGlhbG9nU3BhbiwgbmV3UHJvamVjdERpYWxvZywgJ2NsaWNrJywgbmV3UHJvamVjdERpYWxvZ0Zvcm0pO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld1Byb2plY3REaWFsb2dGb3JtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gbmV3VGFza0RpYWxvZ0hhbmRsZXIoKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nVGFza0RpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdGFzaycpO1xuICAgICAgICAgICAgaWYgKGV4aXN0aW5nVGFza0RpYWxvZykge1xuICAgICAgICAgICAgICAgIGV4aXN0aW5nVGFza0RpYWxvZy5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgbmV3VGFza0RpYWxvZyA9IGNyZWF0ZVRhc2tEaWFsb2coKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1Rhc2tEaWFsb2dGb3JtID0gY3JlYXRlVGFza0RpYWxvZ0Zvcm0oKTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlVGFza0RpYWxvZygpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdUYXNrRGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJyk7XG4gICAgICAgICAgICAgICAgbmV3VGFza0RpYWxvZy5jbGFzc0xpc3QuYWRkKCduZXctdGFzaycsICdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICBib2R5LmFwcGVuZChuZXdUYXNrRGlhbG9nKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3VGFza0RpYWxvZztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlVGFza0RpYWxvZ0Zvcm0oKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdUYXNrRGlhbG9nRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdGFzayA+IGZvcm0nKTtcbiAgICAgICAgICAgICAgICBpZiAoZXhpc3RpbmdUYXNrRGlhbG9nRm9ybSkge1xuICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Rhc2tEaWFsb2dGb3JtLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBuZXdUYXNrRGlhbG9nRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgICAgICAgICBuZXdUYXNrRGlhbG9nLmFwcGVuZChuZXdUYXNrRGlhbG9nRm9ybSk7XG4gICAgICAgICAgICAgICAgbmV3VGFza0RpYWxvZ0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXNrUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpYWxvZy5uZXctdGFzayA+IGZvcm0gI3Rhc2stcHJvamVjdCcpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaWFsb2cubmV3LXRhc2sgPiBmb3JtICN0YXNrLXRpdGxlJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tOb3RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpYWxvZy5uZXctdGFzayA+IGZvcm0gI3Rhc2stbm90ZXMnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGlhbG9nLm5ldy10YXNrID4gZm9ybSAjdGFzay1wcmlvcml0eScpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpYWxvZy5uZXctdGFzayA+IGZvcm0gI3Rhc2stZGF0ZScpO1xuICAgICAgICAgICAgICAgICAgICBUYXNrTW9kdWxlLmNyZWF0ZVRhc2sodGFza1Byb2plY3QudmFsdWUsIHRhc2tUaXRsZS52YWx1ZSwgdGFza05vdGVzLnZhbHVlLCB0YXNrUHJpb3JpdHkudmFsdWUsIHRhc2tEYXRlLnZhbHVlKTtcblxuICAgICAgICAgICAgICAgICAgICBET01Nb2R1bGUuY3JlYXRlUmlnaHREaXYuY3JlYXRlVGFza3MoVGFza01vZHVsZS5nZXRQcm9qZWN0VGFza3MoVGFza01vZHVsZS5nZXRBY3RpdmVQcm9qZWN0KCksIFRhc2tNb2R1bGUuZ2V0VGFza3NGcm9tQWN0aXZlVmlldygpKSk7XG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIGNvbnN0IGRpYWxvZ05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBkaWFsb2dOYW1lLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGlhbG9nLW5hbWUnKTtcbiAgICAgICAgICAgICAgICBkaWFsb2dOYW1lLnRleHRDb250ZW50ID0gJ05ldyBUYXNrJztcbiAgICAgICAgICAgICAgICBuZXdUYXNrRGlhbG9nRm9ybS5hcHBlbmQoZGlhbG9nTmFtZSk7XG4gICAgXG5cbiAgICAgICAgICAgICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVEYXRlID0gdG9kYXkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3VGFza0RpYWxvZ0ZpZWxkc1RlbXBsYXRlID0gW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50X3R5cGU6ICdzZWxlY3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGl2X2NsYXNzOiAndGFzay1wcm9qZWN0LWZpZWxkLWRpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50X2lkOiAndGFzay1wcm9qZWN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0X3R5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnUHJvamVjdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q29udGVudDogJ1Byb2plY3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0X29wdGlvbnM6IFByb2plY3RNb2R1bGUuZ2V0UHJvamVjdFZhbHVlcygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yX3N0eWxlOiAncG9pbnRlcicsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRfdHlwZTogJ2lucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdl9jbGFzczogJ3Rhc2stdGl0bGUtZmllbGQtZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRfaWQ6ICd0YXNrLXRpdGxlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0X3R5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnVGl0bGUgKicsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q29udGVudDogJ1RpdGxlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfcGxhY2Vob2xkZXI6ICdSZWFkIGEgYm9vaycsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogJ3JlcXVpcmVkJyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudF90eXBlOiAndGV4dGFyZWEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGl2X2NsYXNzOiAndGFzay1ub3Rlcy1maWVsZC1kaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudF9pZDogJ3Rhc2stbm90ZXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRfdHlwZTogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ05vdGVzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDb250ZW50OiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfcGxhY2Vob2xkZXI6ICdBdCBsZWFzdCBhIHBhZ2UnLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50X3R5cGU6ICdzZWxlY3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGl2X2NsYXNzOiAndGFzay1wcmlvcml0eS1maWVsZC1kaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudF9pZDogJ3Rhc2stcHJpb3JpdHknLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRfdHlwZTogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1ByaW9yaXR5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDb250ZW50OiAnUHJpb3JpdHknLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0X29wdGlvbnM6IFsnSGlnaCcsICdOb3JtYWwnLCAnTG93J10sXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RfZGVmYXVsdDogJ05vcm1hbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJzb3Jfc3R5bGU6ICdwb2ludGVyJyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudF90eXBlOiAnaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGl2X2NsYXNzOiAndGFzay1kYXRlLWZpZWxkLWRpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50X2lkOiAndGFzay1kYXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0X3R5cGU6ICdkYXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnRGF0ZSAqJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDb250ZW50OiAnRGF0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogJ3JlcXVpcmVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBmb3JtYXR0ZURhdGUsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXTtcbiAgICBcbiAgICAgICAgICAgICAgICBuZXdUYXNrRGlhbG9nRmllbGRzVGVtcGxhdGUuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmllbGREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgZmllbGREaXYuY2xhc3NMaXN0LmFkZChlbGVtZW50LmRpdl9jbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgIG5ld1Rhc2tEaWFsb2dGb3JtLmFwcGVuZChmaWVsZERpdik7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgICAgICAgICBmaWVsZExhYmVsLnRleHRDb250ZW50ID0gZWxlbWVudC5sYWJlbDtcbiAgICAgICAgICAgICAgICAgICAgZmllbGRMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGVsZW1lbnQuZWxlbWVudF9pZCk7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkRGl2LmFwcGVuZChmaWVsZExhYmVsKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmllbGRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudC5lbGVtZW50X3R5cGUpO1xuICAgICAgICAgICAgICAgICAgICBmaWVsZElucHV0LnRleHRDb250ZW50ID0gZWxlbWVudC50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgZmllbGRJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBlbGVtZW50LmlucHV0X3R5cGUpO1xuICAgICAgICAgICAgICAgICAgICBmaWVsZElucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBlbGVtZW50LmVsZW1lbnRfaWQpO1xuICAgICAgICAgICAgICAgICAgICBmaWVsZElucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCBlbGVtZW50LnRleHRfcGxhY2Vob2xkZXIpO1xuICAgICAgICAgICAgICAgICAgICBmaWVsZElucHV0LnNldEF0dHJpYnV0ZShlbGVtZW50LnJlcXVpcmVkLCBlbGVtZW50LnJlcXVpcmVkKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkSW5wdXQudmFsdWUgPSBlbGVtZW50LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkSW5wdXQuc3R5bGUuY3Vyc29yID0gZWxlbWVudC5jdXJzb3Jfc3R5bGU7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkRGl2LmFwcGVuZChmaWVsZElucHV0KTtcblxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmVsZW1lbnRfdHlwZSA9PT0gJ3NlbGVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2VsZWN0X29wdGlvbnMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gaXRlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZElucHV0LmFwcGVuZChvcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtID09PSBlbGVtZW50LnNlbGVjdF9kZWZhdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSlcbiAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBzdWJtaXRUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgc3VibWl0VGFza0J1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gICAgICAgICAgICAgICAgc3VibWl0VGFza0J1dHRvbi50ZXh0Q29udGVudCA9ICdTYXZlJztcbiAgICAgICAgICAgICAgICBuZXdUYXNrRGlhbG9nRm9ybS5hcHBlbmQoc3VibWl0VGFza0J1dHRvbik7XG4gICAgXG4gICAgICAgICAgICAgICAgY29uc3QgY2xvc2VUYXNrRGlhbG9nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgY2xvc2VUYXNrRGlhbG9nRGl2LmNsYXNzTGlzdC5hZGQoJ2Nsb3NlLXRhc2stZGlhbG9nJyk7XG4gICAgICAgICAgICAgICAgbmV3VGFza0RpYWxvZ0Zvcm0uYXBwZW5kKGNsb3NlVGFza0RpYWxvZ0Rpdik7XG4gICAgXG4gICAgICAgICAgICAgICAgY29uc3QgY2xvc2VUYXNrRGlhbG9nU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgICAgICBjbG9zZVRhc2tEaWFsb2dTcGFuLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQnKTtcbiAgICAgICAgICAgICAgICBjbG9zZVRhc2tEaWFsb2dTcGFuLnRleHRDb250ZW50ID0gJ2Nsb3NlJztcbiAgICAgICAgICAgICAgICBjbG9zZVRhc2tEaWFsb2dEaXYuYXBwZW5kKGNsb3NlVGFza0RpYWxvZ1NwYW4pO1xuICAgIFxuICAgICAgICAgICAgICAgIC8vIEFkZCBjbG9zZSBhbmltYXRpb24gb24gU2F2ZSBhbmQgQ2xvc2VcbiAgICAgICAgICAgICAgICBoYW5kbGVDbG9zZUFuaW1hdGlvbihuZXdUYXNrRGlhbG9nRm9ybSwgbmV3VGFza0RpYWxvZywgJ3N1Ym1pdCcsIG5ld1Rhc2tEaWFsb2dGb3JtKTtcbiAgICAgICAgICAgICAgICBoYW5kbGVDbG9zZUFuaW1hdGlvbihjbG9zZVRhc2tEaWFsb2dTcGFuLCBuZXdUYXNrRGlhbG9nLCAnY2xpY2snLCBuZXdUYXNrRGlhbG9nRm9ybSk7XG4gICAgICAgICAgICB9ICAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIENsb3NlIGFuaW1hdGlvbiBvbiBFU0NcbiAgICAgICAgZnVuY3Rpb24gYWRkRXNjRXZlbkxpc3RlbmVyKCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3BlbkRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpYWxvZ1tvcGVuXScpO1xuICAgICAgICAgICAgICAgICAgICBpZiAob3BlbkRpYWxvZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VEaWFsb2cob3BlbkRpYWxvZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG5cblxuICAgICAgICAvLyBDbG9zZSBhbmltYXRpb24gaGFuZGxlclxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVDbG9zZUFuaW1hdGlvbihldmVudEVsZW1lbnQsIGRpYWxvZywgZXZlbnRUeXBlLCBmb3JtKSB7XG4gICAgICAgICAgICBldmVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChldmVudCkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LW5hbWUnKTtcblxuICAgICAgICAgICAgICAgIHByb2plY3ROYW1lLnZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgLy8gZm9ybS5yZXNldCgpO1xuICAgICAgICAgICAgICAgIGNsb3NlRGlhbG9nKGRpYWxvZyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENsb3NlIGRpYWxvZ1xuICAgICAgICBmdW5jdGlvbiBjbG9zZURpYWxvZyhkaWFsb2cpIHtcbiAgICAgICAgICAgIGRpYWxvZy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIGRpYWxvZy5jbGFzc0xpc3QucmVtb3ZlKCdkaXNwbGF5ZWQnKTtcbiAgICAgICAgICAgIGRpYWxvZy5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgZnVuY3Rpb24gaGFuZGxlVHJhbnNpdGlvbkVuZCgpIHtcbiAgICAgICAgICAgICAgICBkaWFsb2cuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICBkaWFsb2cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGhhbmRsZVRyYW5zaXRpb25FbmQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmV3UHJvamVjdERpYWxvZ0hhbmRsZXIsXG4gICAgICAgICAgICBuZXdUYXNrRGlhbG9nSGFuZGxlcixcbiAgICAgICAgICAgIGFkZEVzY0V2ZW5MaXN0ZW5lcixcbiAgICAgICAgfVxuXG4gICAgfSkoKTtcbiAgICBcblxuICAgIC8vIEhhbmRsZXIgZm9yIGxlZnQgZGl2XG4gICAgY29uc3QgY3JlYXRlTGVmdERpdiA9IChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgLy8gQ3JlYXRlIGxheW91dCBzdHJ1Y3R1cmVcbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlU3RydWN0dXJlICgpIHtcbiAgICAgICAgICAgIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuICAgICAgICAgICAgY29uc3QgbGVmdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbGVmdERpdi5jbGFzc0xpc3QuYWRkKCdsZWZ0Jyk7XG4gICAgICAgICAgICBtYWluRGl2LmFwcGVuZChsZWZ0RGl2KTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IGxlZnRGaXJzdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbGVmdEZpcnN0RGl2LmNsYXNzTGlzdC5hZGQoJ2xlZnQtZmlyc3Qtc2VjdGlvbicpO1xuICAgICAgICAgICAgbGVmdEZpcnN0RGl2LmRhdGFzZXQuYWN0aXZlID0gJ1RvZGF5JztcblxuICAgICAgICAgICAgbGVmdERpdi5hcHBlbmQobGVmdEZpcnN0RGl2KTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0U2VjdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgZmlyc3RTZWN0aW9uTGFiZWwudGV4dENvbnRlbnQgPSAnVGFza3MnO1xuICAgICAgICAgICAgbGVmdEZpcnN0RGl2LmFwcGVuZChmaXJzdFNlY3Rpb25MYWJlbCk7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBmaXJzdFNlY3Rpb25MaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgICAgIGZpcnN0U2VjdGlvbkxpc3QuY2xhc3NMaXN0LmFkZCgndmlld3MnKTtcbiAgICAgICAgICAgIGxlZnRGaXJzdERpdi5hcHBlbmQoZmlyc3RTZWN0aW9uTGlzdCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGZpcnN0U2VjdGlvbkxpbmVJdGVtcyA9IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRfdHlwZTogJ2xpJyxcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudF9jbGFzczogJ3Rhc2stZmlsdGVyJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YXNldF9hY3RpdmU6ICd0cnVlJyxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRfZWxlbWVudHM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50X3R5cGU6ICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRfY2xhc3M6ICdpbWFnZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudF9pbm5lckh0bWw6ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPmNhbGVuZGFyLXRvZGF5LW91dGxpbmU8L3RpdGxlPjxwYXRoIGQ9XCJNMTkgM0gxOFYxSDE2VjNIOFYxSDZWM0g1QzMuOSAzIDMgMy44OSAzIDVWMTlDMyAyMC4xMSAzLjkgMjEgNSAyMUgxOUMyMC4xMSAyMSAyMSAyMC4xMSAyMSAxOVY1QzIxIDMuODkgMjAuMTEgMyAxOSAzTTE5IDE5SDVWOUgxOVYxOU0xOSA3SDVWNUgxOU03IDExSDEyVjE2SDdcIiAvPjwvc3ZnPicsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRfdHlwZTogJ3AnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRfdGV4dENvbnRlbnQ6ICdUb2RheScsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uOiAnZ2V0VG9kYXlUYXNrcycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRfdHlwZTogJ2xpJyxcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudF9jbGFzczogJ3Rhc2stZmlsdGVyJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YXNldF9hY3RpdmU6ICdmYWxzZScsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkX2VsZW1lbnRzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudF90eXBlOiAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50X2NsYXNzOiAnaW1hZ2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRfaW5uZXJIdG1sOiAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT5jYWxlbmRhci1zdGFydC1vdXRsaW5lPC90aXRsZT48cGF0aCBkPVwiTTEzIDE4TDkgMTRWMTdINFYxNEgyVjIySDRWMTlIOVYyMkwxMyAxOE0xOSAzSDE4VjFIMTZWM0g4VjFINlYzSDVDMy45IDMgMyAzLjkgMyA1VjEySDVWOUgxOVYxOUgxNC44TDEyLjggMjFIMTlDMjAuMSAyMSAyMSAyMC4xIDIxIDE5VjVDMjEgMy45IDIwLjEgMyAxOSAzTTUgN1Y1SDE5VjdINVpcIiAvPjwvc3ZnPicsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRfdHlwZTogJ3AnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRfdGV4dENvbnRlbnQ6ICdUb21vcnJvdycsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uOiAnZ2V0VG9tb3Jyb3dUYXNrcycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRfdHlwZTogJ2xpJyxcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudF9jbGFzczogJ3Rhc2stZmlsdGVyJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YXNldF9hY3RpdmU6ICdmYWxzZScsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkX2VsZW1lbnRzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudF90eXBlOiAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50X2NsYXNzOiAnaW1hZ2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRfaW5uZXJIdG1sOiAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT5jYWxlbmRhci1tb250aC1vdXRsaW5lPC90aXRsZT48cGF0aCBkPVwiTTcgMTFIOVYxM0g3VjExTTIxIDVWMTlDMjEgMjAuMTEgMjAuMTEgMjEgMTkgMjFINUMzLjg5IDIxIDMgMjAuMSAzIDE5VjVDMyAzLjkgMy45IDMgNSAzSDZWMUg4VjNIMTZWMUgxOFYzSDE5QzIwLjExIDMgMjEgMy45IDIxIDVNNSA3SDE5VjVINVY3TTE5IDE5VjlINVYxOUgxOU0xNSAxM1YxMUgxN1YxM0gxNU0xMSAxM1YxMUgxM1YxM0gxMU03IDE1SDlWMTdIN1YxNU0xNSAxN1YxNUgxN1YxN0gxNU0xMSAxN1YxNUgxM1YxN0gxMVpcIiAvPjwvc3ZnPicsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRfdHlwZTogJ3AnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRfdGV4dENvbnRlbnQ6ICdBbGwnLFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbjogJ2dldEFsbFRhc2tzJyxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZpcnN0U2VjdGlvbkxpbmVJdGVtcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50LmVsZW1lbnRfdHlwZSk7XG4gICAgICAgICAgICAgICAgbGluZUl0ZW0uY2xhc3NMaXN0LmFkZChlbGVtZW50LmVsZW1lbnRfY2xhc3MpO1xuICAgICAgICAgICAgICAgIGxpbmVJdGVtLmRhdGFzZXQuYWN0aXZlID0gZWxlbWVudC5kYXRhc2V0X2FjdGl2ZTtcbiAgICAgICAgICAgICAgICBmaXJzdFNlY3Rpb25MaXN0LmFwcGVuZChsaW5lSXRlbSk7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuY2hpbGRfZWxlbWVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jaGlsZF9lbGVtZW50cy5mb3JFYWNoKGNoaWxkX2VsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGluZUl0ZW1DaGlsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoY2hpbGRfZWxlbWVudC5lbGVtZW50X3R5cGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZUl0ZW1DaGlsZC5jbGFzc0xpc3QuYWRkKGNoaWxkX2VsZW1lbnQuZWxlbWVudF9jbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGRfZWxlbWVudC5lbGVtZW50X2lubmVySHRtbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVJdGVtQ2hpbGQuaW5uZXJIVE1MID0gYCR7Y2hpbGRfZWxlbWVudC5lbGVtZW50X2lubmVySHRtbH1gO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkX2VsZW1lbnQuZWxlbWVudF90ZXh0Q29udGVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVJdGVtQ2hpbGQudGV4dENvbnRlbnQgPSBjaGlsZF9lbGVtZW50LmVsZW1lbnRfdGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lSXRlbS5hcHBlbmQobGluZUl0ZW1DaGlsZCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tzRnVuY3Rpb24gPSBUYXNrTW9kdWxlW2VsZW1lbnQuZnVuY3Rpb25dO1xuICAgICAgICAgICAgICAgIGxpbmVJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIERPTU1vZHVsZS5jcmVhdGVSaWdodERpdi5jcmVhdGVUYXNrcyhUYXNrTW9kdWxlLmdldFByb2plY3RUYXNrcyhUYXNrTW9kdWxlLmdldEFjdGl2ZVByb2plY3QoKSwgdGFza3NGdW5jdGlvbigpKSk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyBET01Nb2R1bGUuY3JlYXRlUmlnaHREaXYuY3JlYXRlVGFza3ModGFza3NGdW5jdGlvbigpKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coVGFza01vZHVsZS5nZXRBY3RpdmVQcm9qZWN0KCkpO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhUYXNrTW9kdWxlLmdldFByb2plY3RUYXNrcyhUYXNrTW9kdWxlLmdldEFjdGl2ZVByb2plY3QoKSwgdGFza3NGdW5jdGlvbigpKSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRhc2tzRnVuY3Rpb24oKSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFRhc2tNb2R1bGUuZ2V0QWN0aXZlUHJvamVjdCgpKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coVGFza01vZHVsZS5nZXRQcm9qZWN0VGFza3MoVGFza01vZHVsZS5nZXRBY3RpdmVQcm9qZWN0KCksIHRhc2tzRnVuY3Rpb24oKSkpO1xuICAgICAgICAgICAgICAgIH0gKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgXG5cbiAgICAgICAgICAgIGNvbnN0IGFuaW1hdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgYW5pbWF0aW9uRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2stYW5pbWF0aW9uJywgJ3N0YXJ0LXRvZGF5Jyk7XG4gICAgICAgICAgICBmaXJzdFNlY3Rpb25MaXN0LmFwcGVuZChhbmltYXRpb25EaXYpO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgbGVmdFNlY29uZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbGVmdFNlY29uZERpdi5jbGFzc0xpc3QuYWRkKCdsZWZ0LXNlY29uZC1zZWN0aW9uJyk7XG4gICAgICAgICAgICBsZWZ0RGl2LmFwcGVuZChsZWZ0U2Vjb25kRGl2KTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IHNlY29uZFNlY3Rpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHNlY29uZFNlY3Rpb25MYWJlbC50ZXh0Q29udGVudCA9ICdQcm9qZWN0cyc7XG4gICAgICAgICAgICBsZWZ0U2Vjb25kRGl2LmFwcGVuZChzZWNvbmRTZWN0aW9uTGFiZWwpO1xuICAgIFxuICAgICAgICAgICAgY29uc3Qgc2Vjb25kU2VjdGlvbkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICAgICAgc2Vjb25kU2VjdGlvbkxpc3QuY2xhc3NMaXN0LmFkZCgnc2Vjb25kLXNlY3Rpb24tbGlzdCcpO1xuICAgICAgICAgICAgbGVmdFNlY29uZERpdi5hcHBlbmQoc2Vjb25kU2VjdGlvbkxpc3QpO1xuXG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSBkYXRhLWFjdGl2ZSBwcm9wZXJ0eSBvbiAudGFzay1maWxlciBhbmQgb24gcGFyZW50IC5sZWZ0LWZpcnN0LXNlY3Rpb25cbiAgICAgICAgICAgIEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGFzay1maWx0ZXInKSkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGl0ZW0ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbGVmdEZpcnN0RGl2LmRhdGFzZXQuYWN0aXZlID0gaXRlbS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0YXNrLWZpbHRlcicpKS5mb3JFYWNoKChpdGVtMikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0gPT09IGl0ZW0yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbTIuZGF0YXNldC5hY3RpdmUgPSAndHJ1ZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtMi5kYXRhc2V0LmFjdGl2ZSA9ICdmYWxzZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW5kZXIgcHJvamVjdHMgaW4gLnNlY29uZC1zZWN0aW9uLWxpc3RcbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlUHJvamVjdHMocHJvamVjdHMpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RMaW5lSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdCcpO1xuICAgICAgICAgICAgaWYgKHByb2plY3RMaW5lSXRlbXMpIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0TGluZUl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHByb2plY3RzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2Vjb25kU2VjdGlvbkxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2Vjb25kLXNlY3Rpb24tbGlzdCcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RMaW5lSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICAgICAgcHJvamVjdExpbmVJdGVtLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0TGluZUl0ZW0uZGF0YXNldC5hY3RpdmUgPSBlbGVtZW50LmFjdGl2ZTtcbiAgICAgICAgICAgICAgICBzZWNvbmRTZWN0aW9uTGlzdC5hcHBlbmQocHJvamVjdExpbmVJdGVtKTtcblxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IGNpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIC8vIGNpcmNsZS5jbGFzc0xpc3QuYWRkKCdjaXJjbGUnKTtcbiAgICAgICAgICAgICAgICAvLyBjaXJjbGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gZWxlbWVudC5jb2xvcjtcbiAgICAgICAgICAgICAgICAvLyBwcm9qZWN0TGluZUl0ZW0uYXBwZW5kKGNpcmNsZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGljb24uY2xhc3NMaXN0LmFkZCgnaWNvbicpO1xuICAgICAgICAgICAgICAgIGljb24uaW5uZXJIVE1MID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2Utd2lkdGg9XCIwLjVcIiBzdHJva2U9XCJ2YXIoLS1ib3JkZXItZGFyaylcIj5cbiAgICAgICAgICAgICAgICA8dGl0bGU+Y2hlY2tib3gtbXVsdGlwbGUtYmxhbmstY2lyY2xlPC90aXRsZT5cbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE0LDJBOCw4IDAgMCwwIDYsMTBBOCw4IDAgMCwwIDE0LDE4QTgsOCAwIDAsMCAyMiwxMEE4LDggMCAwLDAgMTQsMk00LjkzLDUuODJDMy4wOCw3LjM0IDIsOS42MSAyLDEyQTgsOCAwIDAsMCAxMCwyMEMxMC42NCwyMCAxMS4yNywxOS45MiAxMS44OCwxOS43N0MxMC4xMiwxOS4zOCA4LjUsMTguNSA3LjE3LDE3LjI5QzUuMjIsMTYuMjUgNCwxNC4yMSA0LDEyQzQsMTEuNyA0LjAzLDExLjQxIDQuMDcsMTEuMTFDNC4wMywxMC43NCA0LDEwLjM3IDQsMTBDNCw4LjU2IDQuMzIsNy4xMyA0LjkzLDUuODJaXCIvPlxuICAgICAgICAgICAgICAgIDwvc3ZnPmA7XG4gICAgICAgICAgICAgICAgLy8gaWNvbi5pbm5lckhUTUwgPSBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT5sZWFmPC90aXRsZT48cGF0aCBkPVwiTTE3LDhDOCwxMCA1LjksMTYuMTcgMy44MiwyMS4zNEw1LjcxLDIyTDYuNjYsMTkuN0M3LjE0LDE5Ljg3IDcuNjQsMjAgOCwyMEMxOSwyMCAyMiwzIDIyLDNDMjEsNSAxNCw1LjI1IDksNi4yNUM0LDcuMjUgMiwxMS41IDIsMTMuNUMyLDE1LjUgMy43NSwxNy4yNSAzLjc1LDE3LjI1QzcsOCAxNyw4IDE3LDhaXCIgLz48L3N2Zz5gO1xuICAgICAgICAgICAgICAgIC8vIGljb24uaW5uZXJIVE1MID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+bGVhZjwvdGl0bGU+PHBhdGggZD1cIk0xNyw4QzgsMTAgNS45LDE2LjE3IDMuODIsMjEuMzRMNS43MSwyMkw2LjY2LDE5LjdDNy4xNCwxOS44NyA3LjY0LDIwIDgsMjBDMTksMjAgMjIsMyAyMiwzQzIxLDUgMTQsNS4yNSA5LDYuMjVDNCw3LjI1IDIsMTEuNSAyLDEzLjVDMiwxNS41IDMuNzUsMTcuMjUgMy43NSwxNy4yNUM3LDggMTcsOCAxNyw4WlwiIC8+PC9zdmc+YDtcblxuXG4gICAgICAgICAgICAgICAgaWNvbi5zdHlsZS5maWxsID0gZWxlbWVudC5jb2xvcjtcbiAgICAgICAgICAgICAgICBwcm9qZWN0TGluZUl0ZW0uYXBwZW5kKGljb24pO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RMaW5lSXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0TGluZUl0ZW1OYW1lLnRleHRDb250ZW50ID0gZWxlbWVudC5uYW1lO1xuICAgICAgICAgICAgICAgIHByb2plY3RMaW5lSXRlbS5hcHBlbmQocHJvamVjdExpbmVJdGVtTmFtZSk7XG5cbiAgICAgICAgICAgICAgICBwcm9qZWN0TGluZUl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudC50YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudC50YXJnZXQuY2hpbGROb2Rlcyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC5jaGlsZE5vZGVzWzFdKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gbGV0IGEgPSBldmVudC50YXJnZXQuY2hpbGROb2Rlc1sxXS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHByb2plY3RMaW5lSXRlbU5hbWUudGV4dENvbnRlbnQpO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhUYXNrTW9kdWxlLmdldEFjdGl2ZVByb2plY3QoKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKFRhc2tNb2R1bGUuZ2V0QWN0aXZlUHJvamVjdCgpID09PSBwcm9qZWN0TGluZUl0ZW1OYW1lLnRleHRDb250ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBUYXNrTW9kdWxlLmNoYW5nZUFjdGl2ZVByb2plY3QoJycpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgVGFza01vZHVsZS5jaGFuZ2VBY3RpdmVQcm9qZWN0KHByb2plY3RMaW5lSXRlbU5hbWUudGV4dENvbnRlbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIERPTU1vZHVsZS5jcmVhdGVSaWdodERpdi5jcmVhdGVUYXNrcyhUYXNrTW9kdWxlLmdldFByb2plY3RUYXNrcyhUYXNrTW9kdWxlLmdldEFjdGl2ZVByb2plY3QoKSwgVGFza01vZHVsZS5nZXRUYXNrc0Zyb21BY3RpdmVWaWV3KCkpKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nQW5pbWF0aW9uRGl2MiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWNvbmQtc2VjdGlvbi1saXN0ID4gLnRhc2stYW5pbWF0aW9uJyk7XG4gICAgICAgICAgICBpZiAoZXhpc3RpbmdBbmltYXRpb25EaXYyKSB7XG4gICAgICAgICAgICAgICAgZXhpc3RpbmdBbmltYXRpb25EaXYyLnJlbW92ZSgpO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHNlY29uZFNlY3Rpb25MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY29uZC1zZWN0aW9uLWxpc3QnKTtcbiAgICAgICAgICAgIGNvbnN0IGFuaW1hdGlvbkRpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGFuaW1hdGlvbkRpdjIuY2xhc3NMaXN0LmFkZCgndGFzay1hbmltYXRpb24nLCAnc3RhcnQtZmlyc3QnKTtcbiAgICAgICAgICAgIHNlY29uZFNlY3Rpb25MaXN0LmFwcGVuZChhbmltYXRpb25EaXYyKTtcblxuICAgICAgICAgICAgLy8gVXBkYXRlIGRhdGEtYWN0aXZlIHByb3BlcnR5IG9uIC5wcm9qZWN0XG4gICAgICAgICAgICBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Byb2plY3QnKSkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGl0ZW0ub25jbGljayA9ICgpID0+IHtcblxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwcm9qZWN0JykpLmZvckVhY2goKGl0ZW0yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbSA9PT0gaXRlbTIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5kYXRhc2V0LmFjdGl2ZSA9PSAndHJ1ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFza19hbmltYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQtZmlyc3QnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFza19hbmltYXRpb24uc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbTIuY2xhc3NMaXN0LnJlbW92ZSgnZm9udC1hY2NlbnQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtMi5kYXRhc2V0LmFjdGl2ZSA9ICdmYWxzZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrX2FuaW1hdGlvbi5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbTIuZGF0YXNldC5hY3RpdmUgPSAndHJ1ZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0yLmNsYXNzTGlzdC5hZGQoJ2ZvbnQtYWNjZW50Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbTIuZGF0YXNldC5hY3RpdmUgPSAnZmFsc2UnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0yLmNsYXNzTGlzdC5yZW1vdmUoJ2ZvbnQtYWNjZW50Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjcmVhdGVTdHJ1Y3R1cmUsXG4gICAgICAgICAgICBjcmVhdGVQcm9qZWN0cyxcbiAgICAgICAgfVxuICAgIH0pKCk7XG5cbiAgICAvLyBIYW5kbGVyIGZvciByaWdodCBkaXZcbiAgICBjb25zdCBjcmVhdGVSaWdodERpdiA9IChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgLy8gQ3JlYXRlIGxheW91dCBzdHJ1Y3R1cmVcbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlU3RydWN0dXJlKCkge1xuICAgICAgICAgICAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG4gICAgICAgICAgICBjb25zdCByaWdodERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcmlnaHREaXYuY2xhc3NMaXN0LmFkZCgncmlnaHQnKTtcbiAgICAgICAgICAgIG1haW5EaXYuYXBwZW5kKHJpZ2h0RGl2KTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0Rmlyc3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHJpZ2h0Rmlyc3REaXYuY2xhc3NMaXN0LmFkZCgncmlnaHQtZmlyc3Qtc2VjdGlvbicpO1xuICAgICAgICAgICAgcmlnaHREaXYuYXBwZW5kKHJpZ2h0Rmlyc3REaXYpO1xuICAgICAgICB9XG5cbiAgICAgICAgIC8vIFJlbmRlciB0YXNrc1xuICAgICAgICBmdW5jdGlvbiBjcmVhdGVUYXNrcyh0YXNrcykge1xuXG4gICAgICAgICAgICBjb25zdCB0YXNrTGluZUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2ssIC50YXNrLWRpdmlkZXInKTtcbiAgICAgICAgICAgIGlmICh0YXNrTGluZUl0ZW1zKSB7XG4gICAgICAgICAgICAgICAgdGFza0xpbmVJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsZXQgY291bnRlciA9IDA7XG4gICAgICAgICAgICBsZXQgc3ViX2NvdW50ZXIgPSAwO1xuXG4gICAgICAgICAgICB0YXNrcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuXG5cbiAgICAgICAgICAgICAgICBjb25zdCByaWdodEZpcnN0U2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yaWdodC1maXJzdC1zZWN0aW9uJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFza0xpbmVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgdGFza0xpbmVJdGVtLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcbiAgICAgICAgICAgICAgICB0YXNrTGluZUl0ZW0uY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgcmlnaHRGaXJzdFNlY3Rpb24uYXBwZW5kKHRhc2tMaW5lSXRlbSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrTGluZUl0ZW1MZWZ0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHRhc2tMaW5lSXRlbUxlZnRTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3Rhc2stbGVmdC1zZWN0aW9uJyk7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQuY29tcGxldGVkID09PSAndHJ1ZScpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFza0xpbmVJdGVtTGVmdFNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnY2hlY2tlZCcpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tMaW5lSXRlbUxlZnRTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3VuY2hlY2tlZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0YXNrTGluZUl0ZW1MZWZ0U2VjdGlvbi5pbm5lckhUTUwgPSBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5jaGVjay1jaXJjbGUtb3V0bGluZTwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPCEtLSBPdXRlciBjaXJjbGUgLS0+XG4gICAgICAgICAgICAgICAgPGNpcmNsZSBjeD1cIjEyXCIgY3k9XCIxMlwiIHI9XCIxMFwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjAuNVwiIGZpbGw9XCJub25lXCIgLz5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICA8IS0tIENoZWNrbWFyayBwYXRoIC0tPlxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNywxMy41IEwxMCwxNi41IEwxNyw5LjVcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIwLjVcIiBmaWxsPVwibm9uZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9zdmc+YDtcblxuICAgICAgICAgICAgICAgIHRhc2tMaW5lSXRlbUxlZnRTZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXNrTGluZUl0ZW1MZWZ0U2VjdGlvbi5jbGFzc0xpc3QuY29udGFpbnMoJ3VuY2hlY2tlZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrTGluZUl0ZW1MZWZ0U2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCd1bmNoZWNrZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tMaW5lSXRlbUxlZnRTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2NoZWNrZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRhc2tMaW5lSXRlbS5zdHlsZS5iYWNrZ3JvdW5kID0gJ2JsdWUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNvbXBsZXRlZCA9ICd0cnVlJztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tMaW5lSXRlbUxlZnRTZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2NoZWNrZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tMaW5lSXRlbUxlZnRTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3VuY2hlY2tlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jb21wbGV0ZWQgPSAnZmFsc2UnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIHRhc2tMaW5lSXRlbS5hcHBlbmQodGFza0xpbmVJdGVtTGVmdFNlY3Rpb24pO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdGFza0xpbmVJdGVtUmlnaHRTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgdGFza0xpbmVJdGVtUmlnaHRTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3Rhc2stcmlnaHQtc2VjdGlvbicpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgYWZ0ZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgYWZ0ZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hvdmVyLWVmZmVjdCcpO1xuICAgICAgICAgICAgICAgIHRhc2tMaW5lSXRlbVJpZ2h0U2VjdGlvbi5hcHBlbmQoYWZ0ZXJFbGVtZW50KTtcbiAgICAgICAgICAgICAgICBhZnRlckVsZW1lbnQudGV4dENvbnRlbnQgPSBlbGVtZW50Lm5vdGVzO1xuXG4gICAgICAgICAgICAgICAgaWYgKGFmdGVyRWxlbWVudC50ZXh0Q29udGVudCAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgdGFza0xpbmVJdGVtUmlnaHRTZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFmdGVyRWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrTGluZUl0ZW1SaWdodFNlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWZ0ZXJFbGVtZW50LnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAvLyB0YXNrTGluZUl0ZW1SaWdodFNlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIC8vICAgICBjb25zdCBhZnRlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgYWZ0ZXJFbGVtZW50LmNsYXNzTGlzdCgnaG92ZXItZWZmZWN0Jyk7XG5cbiAgICAgICAgICAgICAgICAvLyAgICAgYWZ0ZXJFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgICAgICAgICAvLyAgICAgYWZ0ZXJFbGVtZW50LnN0eWxlLmxlZnQgPSAnMCc7XG4gICAgICAgICAgICAgICAgLy8gICAgIGFmdGVyRWxlbWVudC5zdHlsZS50b3AgPSAnMTAwJSc7XG4gICAgICAgICAgICAgICAgLy8gICAgIGFmdGVyRWxlbWVudC5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICAgICAgICAgICAgICAvLyAgICAgYWZ0ZXJFbGVtZW50LnN0eWxlLmNvbnRlbnQgPSAnYWJzb2x1dGUnO1xuICAgICAgICAgICAgICAgIC8vICAgICBhZnRlckVsZW1lbnQuc3R5bGUuekluZGV4ID0gJzEnO1xuICAgICAgICAgICAgICAgIC8vICAgICBhZnRlckVsZW1lbnQuc3R5bGUuYWZ0ZXJFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICcjZDM0OTQ5JztcbiAgICAgICAgICAgICAgICAvLyAgICAgYWZ0ZXJFbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgICAgICAgICAgLy8gICAgIGFmdGVyRWxlbWVudC5zdHlsZS50cmFuc2l0aW9uID0gJ2FsbCAxcyBlYXNlJztcbiAgICAgICAgICAgICAgICAvLyAgICAgdGFza0xpbmVJdGVtUmlnaHRTZWN0aW9uLmFwcGVuZENoaWxkKGFmdGVyRWxlbWVudCk7XG5cblxuICAgICAgICAgICAgICAgIC8vICAgICB0YXNrTGluZUl0ZW1SaWdodFNlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB0YXNrTGluZUl0ZW1SaWdodFNlY3Rpb24ucmVtb3ZlQ2hpbGQoYWZ0ZXJFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAvLyB9KVxuXG4gICAgICAgICAgICAgICAgdGFza0xpbmVJdGVtLmFwcGVuZCh0YXNrTGluZUl0ZW1SaWdodFNlY3Rpb24pO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdGFza0xpbmVJdGVtRGl2aWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHRhc2tMaW5lSXRlbURpdmlkZXIuY2xhc3NMaXN0LmFkZCgndGFzay1kaXZpZGVyJyk7XG4gICAgICAgICAgICAgICAgdGFza0xpbmVJdGVtRGl2aWRlci5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICByaWdodEZpcnN0U2VjdGlvbi5hcHBlbmQodGFza0xpbmVJdGVtRGl2aWRlcik7XG5cbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrRmllbGRzVGVtcGxhdGUgPSBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdl9jbGFzczogJ3Rhc2stcHJvamVjdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZF9lbGVtZW50czogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGl2X2NsYXNzOiAndGFzay1wcm9qZWN0LWZpZWxkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENvbnRlbnQ6IGVsZW1lbnQucHJvamVjdE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBlbGVtZW50LnByb2plY3RDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXZfY2xhc3M6ICd0YXNrLXRpdGxlLWZpZWxkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDb250ZW50OiBlbGVtZW50LnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXZfY2xhc3M6ICd0YXNrLW5vdGVzLWZpZWxkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDb250ZW50OiBlbGVtZW50Lm5vdGVzLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXZfY2xhc3M6ICd0YXNrLXByaW9yaXR5LWZpZWxkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDb250ZW50OiBlbGVtZW50LnByaW9yaXR5LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXZfY2xhc3M6ICd0YXNrLWRhdGUtZmllbGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENvbnRlbnQ6IGVsZW1lbnQuZGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgIFxuXG5cbiAgICAgICAgICAgICAgICB0YXNrRmllbGRzVGVtcGxhdGUuZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICB0YXNrRmllbGQuY2xhc3NMaXN0LmFkZChmaWVsZC5kaXZfY2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICB0YXNrRmllbGQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tGaWVsZC50ZXh0Q29udGVudCA9IGZpZWxkLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgICAgICB0YXNrRmllbGQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gZmllbGQuY29sb3I7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tMaW5lSXRlbVJpZ2h0U2VjdGlvbi5hcHBlbmQodGFza0ZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkLmNoaWxkX2VsZW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5jaGlsZF9lbGVtZW50cy5mb3JFYWNoKGNoaWxkX2VsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkX2RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkX2Rpdi5jbGFzc0xpc3QuYWRkKGNoaWxkX2VsZW1lbnQuZGl2X2NsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZF9kaXYudGV4dENvbnRlbnQgPSBjaGlsZF9lbGVtZW50LnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkX2Rpdi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBjaGlsZF9lbGVtZW50LmNvbG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tGaWVsZC5hcHBlbmQoY2hpbGRfZGl2KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrRmllbGQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgfSwgMjAgKiBzdWJfY291bnRlcik7XG4gICAgICAgICAgICAgICAgICAgIHN1Yl9jb3VudGVyID0gc3ViX2NvdW50ZXIgKyAxO1xuXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tMaW5lSXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICAgIH0sIDgwICogY291bnRlcik7XG4gICAgICAgICAgICAgICAgY291bnRlciA9IGNvdW50ZXIgKyAxO1xuXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tMaW5lSXRlbURpdmlkZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgICB9LCAxMDAgKiBjb3VudGVyKTtcblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjcmVhdGVTdHJ1Y3R1cmUsXG4gICAgICAgICAgICBjcmVhdGVUYXNrcyxcbiAgICAgICAgfVxuICAgIH0pKCk7XG5cbiAgICBjb25zdCBjcmVhdGVGb290ZXJEaXYgPSAoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVN0cnVjdHVyZSgpIHtcbiAgICAgICAgICAgIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuICAgICAgICAgICAgY29uc3QgZm9vdGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBmb290ZXJEaXYuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XG4gICAgICAgICAgICBtYWluRGl2LmFwcGVuZChmb290ZXJEaXYpO1xuXG4gICAgICAgICAgICBjb25zdCBmb290ZXJSaWdodERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZm9vdGVyUmlnaHREaXYuY2xhc3NMaXN0LmFkZCgnZm9vdGVyLXJpZ2h0Jyk7XG4gICAgICAgICAgICBmb290ZXJEaXYuYXBwZW5kKGZvb3RlclJpZ2h0RGl2KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbnMoKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGxlZnRTZWNvbmRTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxlZnQtc2Vjb25kLXNlY3Rpb24nKTtcbiAgICAgICAgICAgIGNvbnN0IGZvb3RlclJpZ2h0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvb3Rlci1yaWdodCcpO1xuXG4gICAgICAgICAgICBjb25zdCBjcmVhdGVQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjcmVhdGVQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZS1wcm9qZWN0Jyk7XG4gICAgICAgICAgICBsZWZ0U2Vjb25kU2VjdGlvbi5hcHBlbmQoY3JlYXRlUHJvamVjdEJ1dHRvbik7XG4gICAgICAgICAgICBjcmVhdGVQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Byb2plY3REaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXByb2plY3QnKTtcbiAgICAgICAgICAgICAgICBuZXdQcm9qZWN0RGlhbG9nLnNob3dNb2RhbCgpO1xuICAgICAgICAgICAgICAgIG5ld1Byb2plY3REaWFsb2cuY2xhc3NMaXN0LmFkZCgnZGlzcGxheWVkJyk7XG4gICAgICAgICAgICAgICAgbmV3UHJvamVjdERpYWxvZy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGNvbnN0IGNyZWF0ZVByb2plY3RCdXR0b25JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjcmVhdGVQcm9qZWN0QnV0dG9uSWNvbi5pbm5lckhUTUwgPSBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT5wbHVzPC90aXRsZT48cGF0aCBkPVwiTTE5LDEzSDEzVjE5SDExVjEzSDVWMTFIMTFWNUgxM1YxMUgxOVYxM1pcIiAvPjwvc3ZnPmA7XG4gICAgICAgICAgICBjcmVhdGVQcm9qZWN0QnV0dG9uLmFwcGVuZChjcmVhdGVQcm9qZWN0QnV0dG9uSWNvbik7XG5cbiAgICAgICAgICAgIGNvbnN0IGNyZWF0ZVByb2plY3RCdXR0b25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY3JlYXRlUHJvamVjdEJ1dHRvbkxhYmVsLnRleHRDb250ZW50ID0gJ1Byb2plY3QnO1xuICAgICAgICAgICAgY3JlYXRlUHJvamVjdEJ1dHRvbi5hcHBlbmQoY3JlYXRlUHJvamVjdEJ1dHRvbkxhYmVsKTtcblxuICAgICAgICAgICAgY29uc3QgY3JlYXRlVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY3JlYXRlVGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdjcmVhdGUtdGFzaycpO1xuICAgICAgICAgICAgZm9vdGVyUmlnaHREaXYuYXBwZW5kKGNyZWF0ZVRhc2tCdXR0b24pO1xuXG4gICAgICAgICAgICBjcmVhdGVUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Rhc2tEaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRhc2snKTtcbiAgICAgICAgICAgICAgICBuZXdUYXNrRGlhbG9nLnNob3dNb2RhbCgpO1xuICAgICAgICAgICAgICAgIG5ld1Rhc2tEaWFsb2cuY2xhc3NMaXN0LmFkZCgnZGlzcGxheWVkJyk7XG4gICAgICAgICAgICAgICAgbmV3VGFza0RpYWxvZy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIH0pXG5cblxuICAgICAgICAgICAgY29uc3QgY3JlYXRlVGFza0J1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY3JlYXRlVGFza0J1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjcmVhdGUtdGFzay1jb250YWluZXInKVxuICAgICAgICAgICAgY3JlYXRlVGFza0J1dHRvbi5hcHBlbmQoY3JlYXRlVGFza0J1dHRvbkNvbnRhaW5lcik7XG5cblxuICAgICAgICAgICAgY29uc3QgY3JlYXRlVGFza0J1dHRvbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNyZWF0ZVRhc2tCdXR0b25JY29uLmlubmVySFRNTCA9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPnBsdXM8L3RpdGxlPjxwYXRoIGQ9XCJNMTksMTNIMTNWMTlIMTFWMTNINVYxMUgxMVY1SDEzVjExSDE5VjEzWlwiIC8+PC9zdmc+YDtcbiAgICAgICAgICAgIGNyZWF0ZVRhc2tCdXR0b25Db250YWluZXIuYXBwZW5kKGNyZWF0ZVRhc2tCdXR0b25JY29uKTtcblxuICAgICAgICAgICAgY29uc3QgY3JlYXRlVGFza0J1dHRvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjcmVhdGVUYXNrQnV0dG9uTGFiZWwudGV4dENvbnRlbnQgPSAnVGFzayc7XG4gICAgICAgICAgICBjcmVhdGVUYXNrQnV0dG9uQ29udGFpbmVyLmFwcGVuZChjcmVhdGVUYXNrQnV0dG9uTGFiZWwpO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNyZWF0ZVN0cnVjdHVyZSxcbiAgICAgICAgICAgIGNyZWF0ZUJ1dHRvbnMsXG4gICAgICAgIH1cbiAgICB9KSgpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3JlYXRlTWFpbkRpdixcbiAgICAgICAgY3JlYXRlRGlhbG9ncyxcbiAgICAgICAgY3JlYXRlTGVmdERpdixcbiAgICAgICAgY3JlYXRlUmlnaHREaXYsXG4gICAgICAgIGNyZWF0ZUZvb3RlckRpdixcbiAgICB9XG59KSgpO1xuXG5cbkRPTU1vZHVsZS5jcmVhdGVNYWluRGl2KCk7XG5ET01Nb2R1bGUuY3JlYXRlRGlhbG9ncy5uZXdQcm9qZWN0RGlhbG9nSGFuZGxlcigpO1xuRE9NTW9kdWxlLmNyZWF0ZURpYWxvZ3MubmV3VGFza0RpYWxvZ0hhbmRsZXIoKTtcbkRPTU1vZHVsZS5jcmVhdGVEaWFsb2dzLmFkZEVzY0V2ZW5MaXN0ZW5lcigpO1xuRE9NTW9kdWxlLmNyZWF0ZUxlZnREaXYuY3JlYXRlU3RydWN0dXJlKCk7XG5ET01Nb2R1bGUuY3JlYXRlTGVmdERpdi5jcmVhdGVQcm9qZWN0cyhQcm9qZWN0TW9kdWxlLmdldFByb2plY3RPYmplY3RzKCkpO1xuRE9NTW9kdWxlLmNyZWF0ZVJpZ2h0RGl2LmNyZWF0ZVN0cnVjdHVyZSgpO1xuRE9NTW9kdWxlLmNyZWF0ZVJpZ2h0RGl2LmNyZWF0ZVRhc2tzKFRhc2tNb2R1bGUuZ2V0VG9kYXlUYXNrcygpKTtcbkRPTU1vZHVsZS5jcmVhdGVGb290ZXJEaXYuY3JlYXRlU3RydWN0dXJlKCk7XG5ET01Nb2R1bGUuY3JlYXRlRm9vdGVyRGl2LmNyZWF0ZUJ1dHRvbnMoKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCI1XCIpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coUHJvamVjdE1vZHVsZS5nZXRQcm9qZWN0T2JqZWN0cygpKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coVGFza01vZHVsZS5nZXRUb2RheVRhc2tzKCkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhUYXNrTW9kdWxlLmdldFRvbW9ycm93VGFza3MoKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFRhc2tNb2R1bGUuZ2V0QWxsVGFza3MoKSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFRhc2tNb2R1bGUuZ2V0UHJvamVjdFRhc2tzKCdNYXRoJywgVGFza01vZHVsZS5nZXRUb2RheVRhc2tzKCkpKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coVGFza01vZHVsZS5nZXRBY3RpdmVQcm9qZWN0KCkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhUYXNrTW9kdWxlLmdldEFjdGl2ZVZpZXcoKSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFRhc2tNb2R1bGUuZ2V0QWN0aXZlUHJvamVjdCgpKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coVGFza01vZHVsZS5nZXRBY3RpdmVWaWV3KCkpO1xuICAgIH1cbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9