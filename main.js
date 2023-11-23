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
    overflow-x: hidden;
}

.main {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: minmax(200px, 1fr) 3fr;
    position: relative;
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
    /* overflow: auto; */
    grid-column: 1 / 2;
    /* position: sticky; */
}

.main > .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: start;
    height: calc(100% - 100px);
    grid-column: 2 / 3;
    position: relative;
}

.footer {
    display: flex;
    /* height: 100px; */
    /* border-top: 1px solid var(--border-color); */
    position: fixed;
    bottom: 20px;
    /* width: 100%; */
    left: 50%;
    box-shadow: 0px -50px 24px -20px var(--background-light);
    /* box-shadow: -150px -40px 21px -30px black; */

}

.footer > .footer-left {
    flex: 0 0 300px;
    background-color: var(--background-color);
    border-right: 1px solid var(--border-color);
}

.footer > .footer-right {
    flex: 1;
    background-color: var(--background-light);
}

.right-first-header {
    padding-top: 20px;
    padding-left: 10px;
    margin-left: 30px;
    font-size: 25px;
    border-bottom: 1px solid var(--border-dark);
    width: clamp(300px, 70%, 700px);
    color: var(--text-color);
}

.right-first-section {
    padding-right: clamp(10px, 9%, 100px);
    padding-left: clamp(10px, 9%, 100px);
    /* padding-left: minmax(10px, 100px); */
    padding-top: 50px;
    height: 100%;
    width: 100%;
    /* background-color: black; */
    /* overflow: auto; */
    display: flex;
    flex-direction: column;
    gap: 3px;
    /* align-items: center; */
    position: relative;
    margin-bottom: 150px;
}

.right-first-section > .task {
    /* border: 1px solid var(--border-color); */
    /* border-radius: 5px; */
    width: 60%;
    padding-left: 5px;
    padding-bottom: 5px;
    padding-top: 5px;

    flex: 0;
    /* width: clamp(200px, 60%, 800px); */
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
    cursor: pointer;
    gap: clamp(20px, 5%, 40px);
    min-width: 300px;
}

@media (max-width: 700px) {
    .right-first-section > .task {
        /* width: 100%; */
    }

    .right-first-section > .task + .task-divider {
        /* width: 100%; */
    }
}

.right-first-section > .task:hover + .task-divider {
    /* background-color: black; */
    
}

.right-first-section > .task:hover > .task-right-section > .task-title-field,
.right-first-section > .task:hover > .task-right-section > .task-date-field {
    /* box-shadow: inset 0px 0px 50px 50px darkgreen,
    0px 0px 50px 50px darkgreen; */
    /* box-shadow:  0px 0px 2px 1px var(--border-dark); */
    /* border: 1px green solid; */
    /* transform: scale(1.1); */
    transform: translateX(-10px);

}

.right-first-section > .task > .task-left-section {
    width: 20px;
    height: 20px;
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


.right-first-section > .task:hover > .task-left-section {
    transform: scale(1.1);
    transition: transform 0.1s ease;
}

.right-first-section > .task:hover > .task-left-section circle {
    stroke: var(--checkbox-color);
}

.right-first-section > .task:hover > .task-left-section path, 
.right-first-section > .task:hover > .task-left-section circle {
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
    width: 100%;
    display: grid;
    grid-template-columns: 5fr 1fr;
    grid-template-rows: auto;
    /* gap: 5px; */
    /* position: relative; */
    align-items: center;
}

.right-first-section > .task > .task-right-section > .hover-effect {
    position: absolute;
    left: 105%;
    top: 0px;
    width: auto;
    /* height: auto; */
    width: clamp(100px, 30%, 700px);
    max-width: 500px;
    min-height: 60px;
    z-index: 1;
    /* background-color: rgb(153, 189, 153); */
    padding: 5px;
    /* box-shadow: 0px 0px 3px 1px var(--border-dark); */
    transition: opacity 0.5s ease-in-out,
                transform 0.5s ease;
    /* transition: all 0.5s cubic-bezier(0.18,0.89,0.43,1.19); */
    /* border-radius: 0px; */
    /* transform: scale(0); */
    border: 0.3px solid var(--border-dark);
    opacity: 0;
    /* transform: translateX(-300px); */

    font-size: 12px;

    border-radius: 3px;
    background: #e0e0e0;
    /* box-shadow:  8px 8px 16px #9f9f9f,
                 -8px -8px 16px #ffffff; */
}

@media (max-width: 675px) {
    .right-first-section > .task > .task-right-section > .hover-effect {
        display: none;
    }
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
    grid-row: 3 / 4;
}

.right-first-section > .task > .task-right-section > .task-project > * {
    padding: 1px 5px 1px 5px;
    border-radius: 5px;
    border: 1px solid var(--border-dark);
    /* box-shadow: 1px 1px 3px 0px var(--border-dark); */
    font-size: 12px;
}

.right-first-section > .task > .task-right-section > .task-title-field {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    font-size: 15px;
}

@media (max-width: 850px) {
    .right-first-section > .task > .task-right-section > .task-title-field {
        grid-column: 1 / 3;
        grid-row: 2 / 3;
        font-size: 15px;
    }
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
    font-size: 12px;
}

.right-first-section > .task > .task-right-section > .task-delete-button {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    font-size: 12px;
    justify-self: end;
    transform: scale(0.7);
    transition: all 0.3s ease;
    opacity: 0;

}

.right-first-section > .task > .task-right-section:hover > .task-delete-button {
    /* transform: rotate(90deg); */
    opacity: 1;
}

.right-first-section > .task > .task-right-section > .task-delete-button span {
    color: var(--accent-color);
    background-color: var(--background-light);
}

.right-first-section > .task > .task-right-section:hover > .task-delete-button span {
    transition: all 0.3s ease;
    border-radius: 50%;
    color: var(--accent-color);
    background-color: var(--background-light);
}

.right-first-section > .task > .task-right-section:hover > .task-delete-button:hover span {
    /* transform: rotate(90deg); */
    background-color: var(--accent-color);
    color: var(--background-light);

}


.right-first-section > .task > .task-right-section > .task-date-field::before {
    content: "Due: ";
}




.right-first-section > .task > .task-right-section > .task-project {
    display: flex;
    /* justify-content: center; */
    align-items: center;
    gap: 10px;
    justify-self: end;
}


.right-first-section > .task-divider {
    min-height: 1px;
    width: 60%;
    background-color: var(--border-color);
    transition: all 175ms ease-in;
    opacity: 1;
    min-width: 300px;
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
    margin-top: 20px;
    /* overflow: auto; */
    flex: 0 0 200px;
    /* margin-left: 10px; */
}

.left > .left-second-section {
    margin-top: 20px;
    /* overflow: auto; */
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
    margin-top: 20px;
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
    font-size: 15px;
}

.left > .left-second-section .create-project:hover {
    background-color: #ba181b28;
}

.left > .left-second-section .create-project:active {
    background-color: #ba181b5b
}

.left > .left-second-section .create-project > div:first-child{
    height: 15px;
    width: 15px;
}


/* Footer add new task button */

.footer > .footer-right > .create-task {
    /* height: 100%; */
    /* width: calc(100% - 300px); */
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
    box-shadow: 0px 0px 5px 2px var(--border-color);
    transition: all 0.1s ease-in-out;


    border-radius: 5px;
    background: #e0e0e0;
    /* box-shadow:  8px 8px 16px #9f9f9f,
                 -8px -8px 16px #ffffff; */
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

dialog:focus {
    outline: none;
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
    /* background-color: black; */
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
.new-task,
.task-delete {
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

.task-delete > form {
    display: grid;
    gap: 10px;
    height: 100%;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
}

.task-delete > form > div {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
    justify-self: center;
}

.task-delete > form > button:nth-child(1) {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
}

.task-delete > form > button:nth-child(2) {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
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


.task-delete > form > button[type='submit'],
.task-delete > form > button[type='close'] {
    margin-top: 25px;
    height: 40px;
    width: 100%;
    align-self: center;
    border-radius: 5px;
    border: 0.5px solid var(--border-dark);
    transition: background-color 1s ease;
    background-color: var(--secondary-light);
    cursor: pointer;
}

.task-delete > form > button[type='submit'] {
    background-color: var(--secondary-light);
}


.task-delete > form > button[type='close'] {
    background-color: var(--background-dark);
}

.new-task > form > button:focus,
.new-project > form > button:focus,
.task-delete > form > button:focus {
    outline: none;
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
}


@media (max-width: 850px) {
    
}


.no-tasks-filler {
    color: var(--text-muted);
    font-style: italic;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');\n@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100&family=Lato:wght@300&family=Nunito:ital,wght@0,200;0,300;0,400;0,500;1,200;1,300;1,400;1,500&family=Roboto:wght@100&family=Rubik:wght@300&display=swap');\n\n:root {\n    /* Primary colors */\n    --primary-color: #3498db;\n    --primary-dark: #2980b9;\n    --primary-light: #87CEFA;\n\n    /* Secondary colors */\n    --secondary-color: #2ecc71; /*used*/\n    --secondary-dark: #27ae60; /*used*/\n    --secondary-light: #c8e6c9; /*used*/\n\n    /* Accent colors */\n    --accent-color: #BA181B;\n    --accent-dark: #A4161A;\n    --accent-light: #E5383B; /*used*/\n    --accent-darker: #660708;\n\n    /* Background colors */\n    --background-color: #F5EBE0; /*used*/\n    --background-dark: #bdc3c7;\n    --background-light: #EDEDE9; /*used*/\n\n    /* Text colors */\n    --text-color: #333; /*used*/\n    --text-light: #fff;\n    --text-muted: #888; /*used*/\n\n    /* Border colors */\n    --border-color: #D6CCC2; /*used*/\n    --border-dark: #999; /*used*/\n    --border-light: #eee;\n\n    /* Button colors */\n    --button-hover: #ba181b28; /*used*/\n    --button-active: #ba181b5b; /*used*/\n\n    --elements-hover: #ba181b28; /*used*/\n    --checkbox-color: green; /*used*/\n}\n\n\n::-webkit-scrollbar {\n    width: 4px;\n    border-radius: 5px;\n    z-index: 9999;\n  }\n  \n  ::-webkit-scrollbar-thumb {\n      background: var(--accent-light); /* Change the color to your preference */\n      border-radius: 6px;\n      z-index: 9999;\n  }\n  \n  ::-webkit-scrollbar:hover {\n      background: var(--background-light); /* Change the color to your preference */\n      z-index: 9999;\n  }\n  \n  ::-webkit-scrollbar-thumb:hover {\n      background: var(--accent-dark); /* Change the color to your preference */\n      z-index: 9999;    \n  }\n\n\n::backdrop {\n    background-color: #00000088;\n    backdrop-filter: blur(3px);\n}\n\n.material-symbols-outlined {\n    font-variation-settings:\n    'FILL' 0,\n    'wght' 400,\n    'GRAD' 0,\n    'opsz' 24\n}\n\n\n/* General layout */\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    color: var(--text-color);\n    font-family: 'Nunito', sans-serif;\n    font-weight: 300;\n}\n\nbody {\n    background-color: var(--background-light);\n    height: 100vh;\n    width: 100vw;\n    overflow-x: hidden;\n}\n\n.main {\n    height: 100%;\n    width: 100%;\n    display: grid;\n    grid-template-columns: minmax(200px, 1fr) 3fr;\n    position: relative;\n}\n\n.main > .left {\n    border-right: 1px solid var(--border-color);\n    border-bottom: 1px solid var(--border-color);\n    background-color: var(--background-color);\n    flex: 0 0 300px;\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n    /* height: calc(100% - 100px); */\n    height: 100%;\n    /* overflow: auto; */\n    grid-column: 1 / 2;\n    /* position: sticky; */\n}\n\n.main > .right {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n    height: calc(100% - 100px);\n    grid-column: 2 / 3;\n    position: relative;\n}\n\n.footer {\n    display: flex;\n    /* height: 100px; */\n    /* border-top: 1px solid var(--border-color); */\n    position: fixed;\n    bottom: 20px;\n    /* width: 100%; */\n    left: 50%;\n    box-shadow: 0px -50px 24px -20px var(--background-light);\n    /* box-shadow: -150px -40px 21px -30px black; */\n\n}\n\n.footer > .footer-left {\n    flex: 0 0 300px;\n    background-color: var(--background-color);\n    border-right: 1px solid var(--border-color);\n}\n\n.footer > .footer-right {\n    flex: 1;\n    background-color: var(--background-light);\n}\n\n.right-first-header {\n    padding-top: 20px;\n    padding-left: 10px;\n    margin-left: 30px;\n    font-size: 25px;\n    border-bottom: 1px solid var(--border-dark);\n    width: clamp(300px, 70%, 700px);\n    color: var(--text-color);\n}\n\n.right-first-section {\n    padding-right: clamp(10px, 9%, 100px);\n    padding-left: clamp(10px, 9%, 100px);\n    /* padding-left: minmax(10px, 100px); */\n    padding-top: 50px;\n    height: 100%;\n    width: 100%;\n    /* background-color: black; */\n    /* overflow: auto; */\n    display: flex;\n    flex-direction: column;\n    gap: 3px;\n    /* align-items: center; */\n    position: relative;\n    margin-bottom: 150px;\n}\n\n.right-first-section > .task {\n    /* border: 1px solid var(--border-color); */\n    /* border-radius: 5px; */\n    width: 60%;\n    padding-left: 5px;\n    padding-bottom: 5px;\n    padding-top: 5px;\n\n    flex: 0;\n    /* width: clamp(200px, 60%, 800px); */\n    opacity: 1;\n    /* max-width: 500px; */\n    transition: all 175ms ease-in;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    /* gap: 50px; */\n    /* box-shadow: 0px 1px 5px 0px gray; */\n    /* border-radius: 5px; */\n    position: relative;\n    cursor: pointer;\n    gap: clamp(20px, 5%, 40px);\n    min-width: 300px;\n}\n\n@media (max-width: 700px) {\n    .right-first-section > .task {\n        /* width: 100%; */\n    }\n\n    .right-first-section > .task + .task-divider {\n        /* width: 100%; */\n    }\n}\n\n.right-first-section > .task:hover + .task-divider {\n    /* background-color: black; */\n    \n}\n\n.right-first-section > .task:hover > .task-right-section > .task-title-field,\n.right-first-section > .task:hover > .task-right-section > .task-date-field {\n    /* box-shadow: inset 0px 0px 50px 50px darkgreen,\n    0px 0px 50px 50px darkgreen; */\n    /* box-shadow:  0px 0px 2px 1px var(--border-dark); */\n    /* border: 1px green solid; */\n    /* transform: scale(1.1); */\n    transform: translateX(-10px);\n\n}\n\n.right-first-section > .task > .task-left-section {\n    width: 20px;\n    height: 20px;\n    cursor: pointer;\n    transition: transform 0.1s ease;\n\n    /* transition: all 1s ease; */\n}\n\n.right-first-section > .task > .task-left-section.checked svg path,\n.right-first-section > .task > .task-left-section.checked svg circle {\n    transition: all 0.3s ease;\n    stroke: var(--checkbox-color);\n    stroke-width: 1px;\n}\n\n.right-first-section > .task > .task-left-section.checked {\n    transform: scale(1.1);\n}\n\n.right-first-section > .task > .task-left-section.unchecked svg path {\n    opacity: 0;\n}\n\n\n.right-first-section > .task:hover > .task-left-section {\n    transform: scale(1.1);\n    transition: transform 0.1s ease;\n}\n\n.right-first-section > .task:hover > .task-left-section circle {\n    stroke: var(--checkbox-color);\n}\n\n.right-first-section > .task:hover > .task-left-section path, \n.right-first-section > .task:hover > .task-left-section circle {\n    /* stroke: red; */\n    /* stroke-width: 1px; */\n    transition: all 0.3s ease-in-out;\n}\n\n.right-first-section > .task > .task-left-section > svg circle {\n    fill: none;\n    stroke: var(--text-muted);\n}\n\n.right-first-section > .task > .task-left-section > svg path {\n    fill: none;\n    stroke: var(--text-muted);\n}\n\n.right-first-section > .task > .task-right-section {\n    width: 100%;\n    display: grid;\n    grid-template-columns: 5fr 1fr;\n    grid-template-rows: auto;\n    /* gap: 5px; */\n    /* position: relative; */\n    align-items: center;\n}\n\n.right-first-section > .task > .task-right-section > .hover-effect {\n    position: absolute;\n    left: 105%;\n    top: 0px;\n    width: auto;\n    /* height: auto; */\n    width: clamp(100px, 30%, 700px);\n    max-width: 500px;\n    min-height: 60px;\n    z-index: 1;\n    /* background-color: rgb(153, 189, 153); */\n    padding: 5px;\n    /* box-shadow: 0px 0px 3px 1px var(--border-dark); */\n    transition: opacity 0.5s ease-in-out,\n                transform 0.5s ease;\n    /* transition: all 0.5s cubic-bezier(0.18,0.89,0.43,1.19); */\n    /* border-radius: 0px; */\n    /* transform: scale(0); */\n    border: 0.3px solid var(--border-dark);\n    opacity: 0;\n    /* transform: translateX(-300px); */\n\n    font-size: 12px;\n\n    border-radius: 3px;\n    background: #e0e0e0;\n    /* box-shadow:  8px 8px 16px #9f9f9f,\n                 -8px -8px 16px #ffffff; */\n}\n\n@media (max-width: 675px) {\n    .right-first-section > .task > .task-right-section > .hover-effect {\n        display: none;\n    }\n}\n\n/* .right-first-section > .task > .task-right-section:hover > .task-notes-field {\n    transition: all 1s ease;\n    display: block;\n    grid-row: 4 / 5;\n    grid-column: 1 / 3;\n} */\n\n.right-first-section > .task > .task-right-section:hover {\n    transition: all 1s ease;\n}\n\n.right-first-section > .task > .task-right-section > .task-project {\n    grid-column: 2 / 3;\n    grid-row: 3 / 4;\n}\n\n.right-first-section > .task > .task-right-section > .task-project > * {\n    padding: 1px 5px 1px 5px;\n    border-radius: 5px;\n    border: 1px solid var(--border-dark);\n    /* box-shadow: 1px 1px 3px 0px var(--border-dark); */\n    font-size: 12px;\n}\n\n.right-first-section > .task > .task-right-section > .task-title-field {\n    grid-column: 1 / 2;\n    grid-row: 2 / 3;\n    font-size: 15px;\n}\n\n@media (max-width: 850px) {\n    .right-first-section > .task > .task-right-section > .task-title-field {\n        grid-column: 1 / 3;\n        grid-row: 2 / 3;\n        font-size: 15px;\n    }\n}\n\n.right-first-section > .task > .task-right-section > .task-notes-field {\n    display: none;\n}\n\n.right-first-section > .task > .task-right-section > .task-priority-field {\n    grid-column: 1 / 2;\n    grid-row: 1 / 2;\n}\n\n.right-first-section > .task > .task-right-section > .task-date-field {\n    grid-column: 1 / 2;\n    grid-row: 3 / 4;\n    font-size: 12px;\n}\n\n.right-first-section > .task > .task-right-section > .task-delete-button {\n    grid-column: 2 / 3;\n    grid-row: 2 / 3;\n    font-size: 12px;\n    justify-self: end;\n    transform: scale(0.7);\n    transition: all 0.3s ease;\n    opacity: 0;\n\n}\n\n.right-first-section > .task > .task-right-section:hover > .task-delete-button {\n    /* transform: rotate(90deg); */\n    opacity: 1;\n}\n\n.right-first-section > .task > .task-right-section > .task-delete-button span {\n    color: var(--accent-color);\n    background-color: var(--background-light);\n}\n\n.right-first-section > .task > .task-right-section:hover > .task-delete-button span {\n    transition: all 0.3s ease;\n    border-radius: 50%;\n    color: var(--accent-color);\n    background-color: var(--background-light);\n}\n\n.right-first-section > .task > .task-right-section:hover > .task-delete-button:hover span {\n    /* transform: rotate(90deg); */\n    background-color: var(--accent-color);\n    color: var(--background-light);\n\n}\n\n\n.right-first-section > .task > .task-right-section > .task-date-field::before {\n    content: \"Due: \";\n}\n\n\n\n\n.right-first-section > .task > .task-right-section > .task-project {\n    display: flex;\n    /* justify-content: center; */\n    align-items: center;\n    gap: 10px;\n    justify-self: end;\n}\n\n\n.right-first-section > .task-divider {\n    min-height: 1px;\n    width: 60%;\n    background-color: var(--border-color);\n    transition: all 175ms ease-in;\n    opacity: 1;\n    min-width: 300px;\n}\n\n.right-first-section > .task.hidden,\n.right-first-section > .task-divider.hidden {\n    transition: all 175ms ease-in;\n    opacity: 0;\n}\n\n.right-first-section > .task > div > div {\n    opacity: 1;\n    transition: all 175ms ease-in;\n}\n\n.right-first-section > .task > div > div.hidden {\n    opacity: 0;\n}\n\n.task-project-color {\n    height: 10px;\n    width: 10px;\n    border-radius: 50%;\n    border: 0.5px solid var(--text-muted);\n}\n\n\n\n\n/* Left div layout */\n\n.left > .left-first-section {\n    margin-top: 20px;\n    /* overflow: auto; */\n    flex: 0 0 200px;\n    /* margin-left: 10px; */\n}\n\n.left > .left-second-section {\n    margin-top: 20px;\n    /* overflow: auto; */\n    flex: 1 0 200px;\n    /* margin-left: 10px; */\n}\n\n\n\n.left > .left-first-section > p {\n    padding-left: 20px;\n    font-style: italic;\n    font-weight: 200;\n    height: 50px;\n    display: flex;\n    align-items: center;\n}\n\n.left > .left-first-section ul,\n.left > .left-second-section ul {\n    position: relative;\n}\n\n.left > .left-first-section li {\n    padding-left: 30px;\n    list-style: none;\n    height: 50px;\n    display: flex;\n    align-items: center;\n    z-index: 1;\n    position: relative;\n    cursor: pointer;\n    gap: 10px;\n}\n\n.left > .left-second-section li {\n    cursor: pointer;\n}\n\n.left > .left-first-section li > .image {\n    height: 20px;\n    width: 20px;\n\n}\n\n\n/* Slider on views */\n\n.left > .left-first-section .task-animation,\n.left > .left-second-section li[data-active='true']~.task-animation {\n    position: absolute;\n    /* top: 0; */\n    height: 50px;\n    border-left: 6px solid var(--accent-light);\n    z-index: 0;\n    transition: all 0.3s ease;\n    opacity: 0;\n}\n\n\n.views > li:nth-child(1)[data-active='true']~.task-animation {\n    width: 100%;\n    top: 0;\n    opacity: 1;\n}\n\n.views > li:nth-child(2)[data-active='true']~.task-animation {\n    width: 100%;\n    top: 50px;\n    opacity: 1;\n}\n\n.views > li:nth-child(3)[data-active='true']~.task-animation {\n    width: 100%;\n    top: 100px;\n    opacity: 1;\n}\n\n\n/* Views styles */\n\n.left > .left-first-section li[data-active='false']:hover,\n.left > .left-second-section li:hover {\n    background-color: var(--elements-hover);\n}\n\n.left > .left-first-section li[data-active='true'] > div > svg {\n    fill: var(--accent-color);\n}\n\n.left > .left-first-section li[data-active='true'] > p {\n    color: var(--accent-color);\n}\n\n.left > .left-second-section li.font-accent > div {\n    color: var(--accent-color);\n}\n\n.left > .left-first-section li[data-active='false']:active,\n.left > .left-second-section li:active {\n    background-color: #ba181b5b;\n}\n\n\n/* Slider on projects */\n\n.second-section-list > li:nth-child(1)[data-active='true']~.task-animation {\n    /* width: 100%; */\n    top: 0;\n    opacity: 1;\n}\n\n.second-section-list > li:nth-child(2)[data-active='true']~.task-animation {\n    /* width: 100%; */\n    top: 50px;\n    opacity: 1;\n}\n\n.second-section-list > li:nth-child(3)[data-active='true']~.task-animation {\n    /* width: 100%; */\n    top: 100px;\n    opacity: 1;\n}\n\n.second-section-list > li:nth-child(4)[data-active='true']~.task-animation {\n    /* width: 100%; */\n    top: 150px;\n    opacity: 1;\n}\n\n.second-section-list > li:nth-child(5)[data-active='true']~.task-animation {\n    /* width: 100%; */\n    top: 200px;\n    opacity: 1;\n}\n\n.second-section-list > li:nth-child(6)[data-active='true']~.task-animation {\n    /* width: 100%; */\n    top: 250px;\n    opacity: 1;\n}\n\n.second-section-list > li:nth-child(7)[data-active='true']~.task-animation {\n    /* width: 100%; */\n    top: 300px;\n    opacity: 1;\n}\n\n.second-section-list > li:nth-child(8)[data-active='true']~.task-animation {\n    /* width: 100%; */\n    top: 350px;\n    opacity: 1;\n}\n\n.second-section-list > li:nth-child(9)[data-active='true']~.task-animation {\n    /* width: 100%; */\n    top: 400px;\n    opacity: 1;\n}\n\n.second-section-list > li:nth-child(10)[data-active='true']~.task-animation {\n    /* width: 100%; */\n    top: 450px;\n    opacity: 1;\n}\n\n.second-section-list > li:nth-child(11)[data-active='true']~.task-animation {\n    /* width: 100%; */\n    top: 500px;\n    opacity: 1;\n}\n\n.second-section-list > li:nth-child(12)[data-active='true']~.task-animation {\n    /* width: 100%; */\n    top: 550px;\n    opacity: 1;\n}\n\n.left > .left-second-section > p {\n    padding-left: 20px;\n    font-style: italic;\n    font-weight: 200;\n    height: 50px;\n    display: flex;\n    align-items: center;\n}\n\n.left > .left-second-section li {\n    padding-left: 30px;\n    list-style: none;\n    height: 50px;\n    display: flex;\n    align-items: center;\n    gap: 10px;\n}\n\n.left > .left-second-section .create-project {\n    /* margin-left: 50px; */\n    margin-top: 20px;\n    padding-left: 30px;\n    height: 50px;\n    display: flex;\n    width: 100%;\n    align-items: center;\n    gap: 10px;\n    /* justify-content: center; */\n    cursor: pointer;\n}\n\n.left > .left-second-section .create-project div {\n    /* font-style: italic; */\n    font-size: 15px;\n}\n\n.left > .left-second-section .create-project:hover {\n    background-color: #ba181b28;\n}\n\n.left > .left-second-section .create-project:active {\n    background-color: #ba181b5b\n}\n\n.left > .left-second-section .create-project > div:first-child{\n    height: 15px;\n    width: 15px;\n}\n\n\n/* Footer add new task button */\n\n.footer > .footer-right > .create-task {\n    /* height: 100%; */\n    /* width: calc(100% - 300px); */\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    cursor: pointer;\n    justify-content: center;\n}\n\n.footer > .footer-right > .create-task > .create-task-container {\n    width: 150px;\n    height: 50px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n    /* border-radius: 10px; */\n    /* border: 0.5px solid var(--border-dark); */\n    box-shadow: 0px 0px 5px 2px var(--border-color);\n    transition: all 0.1s ease-in-out;\n\n\n    border-radius: 5px;\n    background: #e0e0e0;\n    /* box-shadow:  8px 8px 16px #9f9f9f,\n                 -8px -8px 16px #ffffff; */\n}\n\n\n\n.footer > .footer-right > .create-task > .create-task-container div:nth-child(2) {\n    font-size: 20px;\n}\n\n.footer > .footer-right > .create-task > .create-task-container > div:first-child {\n    height: 20px;\n    width: 20px;\n}\n\n.footer > .footer-right > .create-task > .create-task-container:hover {\n    background-color: var(--button-hover);\n    transform: scale(1.1);\n\n}\n\n.footer > .footer-right > .create-task > .create-task-container:active {\n    background-color: var(--button-active)\n}\n\n\n/* Dialog layout and animations */\n\ndialog {\n    position: absolute;\n    margin: auto;\n    padding-left: 35px;\n    padding-right: 35px;\n    padding-top: 10px;\n    padding-bottom: 20px;\n    /* padding-left: 35px; */\n    border-radius: 5px;\n    border: 0.5px solid var(--border-color);\n}\n\ndialog:focus {\n    outline: none;\n}\n\ndialog.hidden {\n    opacity: 0;\n    top: -200%;\n    transform: scale(0.5);\n    transition: opacity 300ms ease-in-out, \n                top 1000ms ease-in-out,\n                transform 1000ms ease-in-out;\n}\n\ndialog.hidden > form > * {\n    position: relative;\n    top: 10px;\n    opacity: 0;\n}\n\ndialog.displayed {\n    opacity: 1;\n    top: 0%;\n    transform: scale(1);\n    transition: transform 300ms cubic-bezier(0.18,0.89,0.43,1.19);\n    /* transition: transform 300ms ease; */\n}\n\ndialog.displayed > form > * {\n    top: 0px;\n    opacity: 1;\n    /* background-color: black; */\n}\n\ndialog.displayed.new-project > form .project-dialog-name {\n    transition: opacity 300ms ease-in-out 200ms;\n}\n\ndialog.displayed.new-project > form .input-container {\n    transition: opacity 300ms ease-in-out 250ms;\n}\n\ndialog.displayed.new-project > form .project-name-field-div {\n    transition: opacity 300ms ease-in-out 300ms;\n}\n\ndialog.displayed.new-project > form .project-color-field-div {\n    transition: opacity 300ms ease-in-out 350ms;\n}\n\ndialog.displayed.new-project > form > button {\n    transition: opacity 300ms ease-in-out 400ms;\n}\n\ndialog.displayed.new-project > form > .close-project-dialog {\n    transition: opacity 300ms ease-in-out 450ms;\n}\n\n\ndialog.displayed.new-task > form .task-dialog-name {\n    transition: opacity 300ms ease-in-out 200ms;\n}\n\ndialog.displayed.new-task > form > .task-project-field-div {\n    transition: opacity 300ms ease-in-out 250ms;\n}\n\ndialog.displayed.new-task > form > .task-title-field-div {\n    transition: opacity 300ms ease-in-out 300ms;\n}\n\ndialog.displayed.new-task > form > .task-notes-field-div {\n    transition: opacity 300ms ease-in-out 350ms;\n}\n\ndialog.displayed.new-task > form > .task-priority-field-div {\n    transition: opacity 300ms ease-in-out 400ms;\n}\n\ndialog.displayed.new-task > form > .task-date-field-div {\n    transition: opacity 300ms ease-in-out 450ms;\n}\n\ndialog.displayed.new-task > form > button {\n    transition: opacity 300ms ease-in-out 500ms, background-color 0.3s ease, border-color 0.1s ease;\n\n}\n\ndialog.displayed.new-task > form > .close-task-dialog {\n    transition: opacity 300ms ease-in-out 550ms;\n}\n\n\n\n.new-project,\n.new-task,\n.task-delete {\n    width: 400px;\n    background-color: var(--background-light);\n}\n\n.new-project > form,\n.new-task > form {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    height: 100%;\n}\n\n.task-delete > form {\n    display: grid;\n    gap: 10px;\n    height: 100%;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n}\n\n.task-delete > form > div {\n    grid-column: 1 / 3;\n    grid-row: 1 / 2;\n    justify-self: center;\n}\n\n.task-delete > form > button:nth-child(1) {\n    grid-column: 2 / 3;\n    grid-row: 2 / 3;\n}\n\n.task-delete > form > button:nth-child(2) {\n    grid-column: 1 / 2;\n    grid-row: 2 / 3;\n}\n\n\n.new-task > form > .task-project-field-div,\n.new-task > form > .task-title-field-div,\n.new-task > form > .task-notes-field-div,\n.new-task > form > .task-priority-field-div,\n.new-task > form > .task-date-field-div,\n.new-project > form  .project-name-field-div,\n.new-project > form  .project-color-field-div {\n    display: flex;\n    flex-direction: column;\n}\n\n.new-task > form > .task-dialog-name,\n.new-project > form > .project-dialog-name {\n    align-self: center;\n    font-size: 25px;\n    margin-bottom: 15px;\n}\n\n.new-task > form > button,\n.new-project > form > button {\n    margin-top: 25px;\n    height: 40px;\n    width: 50%;\n    align-self: center;\n    border-radius: 5px;\n    border: 0.5px solid var(--border-dark);\n    transition: background-color 1s ease;\n    background-color: var(--secondary-light);\n    cursor: pointer;\n}\n\n\n.task-delete > form > button[type='submit'],\n.task-delete > form > button[type='close'] {\n    margin-top: 25px;\n    height: 40px;\n    width: 100%;\n    align-self: center;\n    border-radius: 5px;\n    border: 0.5px solid var(--border-dark);\n    transition: background-color 1s ease;\n    background-color: var(--secondary-light);\n    cursor: pointer;\n}\n\n.task-delete > form > button[type='submit'] {\n    background-color: var(--secondary-light);\n}\n\n\n.task-delete > form > button[type='close'] {\n    background-color: var(--background-dark);\n}\n\n.new-task > form > button:focus,\n.new-project > form > button:focus,\n.task-delete > form > button:focus {\n    outline: none;\n}\n\n.new-task > form > button:hover,\n.new-project > form > button:hover {\n    border: 0.5px solid black;\n    background-color: var(--secondary-color);\n}\n\n.new-task > form > button:active,\n.new-project > form > button:active {\n    background-color: var(--secondary-dark);\n}\n\n.new-task > form > .close-task-dialog,\n.new-project > form > .close-project-dialog {\n    position: absolute;\n    right: 10px;\n    top: 10px;\n}\n\n.new-task > form > .close-task-dialog span,\n.new-project > form > .close-project-dialog span {\n    transform: scale(1);\n    opacity: 0.7;\n    cursor: pointer;\n    transition: transform 0.25s, opacity 0.25s;\n}\n\n.new-task > form > .close-task-dialog:hover span,\n.new-project > form > .close-project-dialog:hover span {\n    transform: rotate(90deg) scale(1.1);\n    opacity: 1;\n    cursor: pointer;\n}\n\n/* Dialog input styles */\n\n.new-task > form input,\n.new-task > form select,\n.new-task > form textarea,\n.new-project > form input,\n.new-project > form select,\n.new-project > form textarea {\n    outline: none;\n    padding: 10px;\n    border: 0.5px solid var(--border-color);\n    transition: all 0.25s ease;\n    border-radius: 5px;\n}\n\n.new-task > form input:hover,\n.new-task > form select:hover,\n.new-task > form textarea:hover,\n.new-project > form input:hover,\n.new-project > form select:hover,\n.new-project > form textarea:hover {\n    outline: none;\n    padding: 10px;\n    border: 0.5px solid black;\n}\n\n.new-task > form input::placeholder,\n.new-task > form select::placeholder,\n.new-task > form textarea::placeholder,\n.new-project > form input::placeholder,\n.new-project > form select::placeholder,\n.new-project > form textarea::placeholder {\n    color: var(--text-muted);\n    font-style: italic;\n}\n\n.new-task > form textarea,\n.new-project > form textarea {\n    resize: none;\n}\n\n.project-color-field-div {\n    align-self: center;\n}\n\n.new-project > form #project-color {\n    height: 40px;\n    width: 80px;\n    padding: 5px;\n    cursor: pointer;\n}\n\n.new-project > form .input-container {\n    display: flex;\n    width: 100%;\n    justify-content: space-around;\n}\n\n\n.icon {\n    width: 15px;\n    height: 15px;\n    /* fill: red; */\n    display: flex;\n    justify-content: center;\n}\n\n\n@media (max-width: 850px) {\n    \n}\n\n\n.no-tasks-filler {\n    color: var(--text-muted);\n    font-style: italic;\n}"],"sourceRoot":""}]);
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


    // This should be in different module (DOM module perhaps)
    let active_view = 'today';
    let active_project = '';

    // This should be in different module (DOM module perhaps)
    function changeActiveView(view) {
        active_view = view;
    }

    // This should be in different module (DOM module perhaps)
    function getActiveView() {
        return active_view;
    }


    // This should be in different module (DOM module perhaps)
    function changeActiveProject(project) {
        active_project = project;
    }

    // This should be in different module (DOM module perhaps)    
    function getActiveProject() {
        return active_project;
    }

    function deleteTask(taskId) {
        tasks = tasks.filter((task) => task.id !== taskId);
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
        {
            id: 9,
            projectId: 4,
            projectName: 'Leisure',
            projectColor: '#a6b5ff',
            title: 'Write documentation',
            notes: 'Document the new API endpoints',
            priority: 'High',
            date: '2023-11-24',
            completed: 'false',
        },
        {
            id: 10,
            projectId: 4,
            projectName: 'Leisure',
            projectColor: '#a6b5ff',
            title: 'Write documentation',
            notes: 'Document the new API endpoints',
            priority: 'High',
            date: '2023-11-24',
            completed: 'false',
        },
        {
            id: 11,
            projectId: 4,
            projectName: 'Leisure',
            projectColor: '#a6b5ff',
            title: 'Write documentation',
            notes: 'Document the new API endpoints',
            priority: 'High',
            date: '2023-11-24',
            completed: 'false',
        },
        {
            id: 12,
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
    function createTask(projectName, title, notes, date) {
        const task = {};
        tasksCount = tasksCount + 1;
        task.id = tasksCount;
        task.projectId = ProjectModule.findIdByName(projectName);
        task.projectName = projectName;
        task.projectColor = ProjectModule.findColorByName(projectName);
        task.title = title;
        task.notes = notes;
        // task.priority = priority;
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
        deleteTask,
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

        function createTaskDeleteDialog() {
            const taskDeleteDialog = document.createElement('dialog');
            taskDeleteDialog.classList.add('task-delete', 'hidden');

            const deleteConfirmForm = document.createElement('form');
            taskDeleteDialog.append(deleteConfirmForm);

            const deleteConfirmText = document.createElement('div');
            deleteConfirmText.classList.add('confirm-text');
            deleteConfirmText.textContent = "Are you sure you want to delete this task?"
            deleteConfirmForm.append(deleteConfirmText);

            const deleteConfirmButton = document.createElement('button');
            deleteConfirmButton.setAttribute('type', 'submit');
            deleteConfirmButton.textContent = 'Confirm';
            deleteConfirmForm.append(deleteConfirmButton);

            const deleteCancelButton = document.createElement('button');
            deleteCancelButton.setAttribute('type', 'close');
            deleteCancelButton.textContent = 'Cancel';
            deleteConfirmForm.append(deleteCancelButton);

            body.append(taskDeleteDialog);
        }

        function createProjectDeleteDialog() {
            const projectDeleteDialog = document.createElement('dialog');
            projectDeleteDialog.classList.add('project-delete', 'hidden');
            body.append(projectDeleteDialog);
        }

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
                    // const taskPriority = document.querySelector('dialog.new-task > form #task-priority');
                    const taskDate = document.querySelector('dialog.new-task > form #task-date');
                    TaskModule.createTask(taskProject.value, taskTitle.value, taskNotes.value, taskDate.value);

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
                    // {
                    //     element_type: 'select',
                    //     div_class: 'task-priority-field-div',
                    //     element_id: 'task-priority',
                    //     input_type: '',
                    //     label: 'Priority',
                    //     textContent: 'Priority',
                    //     select_options: ['High', 'Normal', 'Low'],
                    //     select_default: 'Normal',
                    //     cursor_style: 'pointer',
                    // },
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
            createTaskDeleteDialog,
            createProjectDeleteDialog,
            handleCloseAnimation,
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
                   
                    const rightFirstHeader = document.querySelector('.right-first-header');                    
                    rightFirstHeader.textContent = TaskModule.getActiveView().charAt(0).toUpperCase() + TaskModule.getActiveView().slice(1);
                    if (TaskModule.getActiveProject()) {

                        rightFirstHeader.textContent += " - " + TaskModule.getActiveProject();
                    }
                    
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

                    const rightFirstHeader = document.querySelector('.right-first-header');                    
                    rightFirstHeader.textContent = TaskModule.getActiveView().charAt(0).toUpperCase() + TaskModule.getActiveView().slice(1);
                    if (TaskModule.getActiveProject()) {

                        rightFirstHeader.textContent += " - " + TaskModule.getActiveProject();
                    }
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

            const rightFirstHeader = document.createElement('div');
            rightFirstHeader.classList.add('right-first-header');
            rightFirstHeader.textContent = "All";
            rightDiv.append(rightFirstHeader);

    
            const rightFirstDiv = document.createElement('div');
            rightFirstDiv.classList.add('right-first-section');
            rightDiv.append(rightFirstDiv);
        }

         // Render tasks
        function createTasks(tasks) {

            const taskLineItems = document.querySelectorAll('.task, .task-divider');
            const filler = document.querySelector('.no-tasks-filler');
            if (filler) {
                filler.remove();
            }
            if (taskLineItems) {
                taskLineItems.forEach(item => {
                    item.remove();
                });
            }

            let counter = 0;
            let sub_counter = 0;

            if (tasks.length === 0) {
                const rightFirstSection = document.querySelector('.right-first-section');
                const filler = document.createElement('div');
                filler.classList.add('no-tasks-filler');
                filler.textContent = `Seems like you don't have any tasks here! Whether it is good or bad, only time will tell...`;
                rightFirstSection.append(filler);

            }


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

                taskLineItem.addEventListener('click', function() {
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
                    // {
                    //     div_class: 'task-notes-field',
                    //     textContent: element.notes,
                    // },
                    // {
                    //     div_class: 'task-priority-field',
                    //     textContent: element.priority,
                    // },
                    {
                        div_class: 'task-date-field',
                        textContent: element.date,
                    },
                    {
                        div_class: 'task-delete-button',
                        innerHTML: `<span class="material-symbols-outlined">close</span>`,
                    },
                ];
                


                taskFieldsTemplate.forEach(field => {
                    const taskField = document.createElement('div');
                    taskField.classList.add(field.div_class);
                    taskField.classList.add('hidden');
                    if (field.textContent) {
                        taskField.textContent = field.textContent;
                    }
                    if (field.innerHTML) {
                        taskField.innerHTML = field.innerHTML;
                    }
                    if (field.div_class === 'task-delete-button') {
                        taskField.addEventListener('click', function() {
                            const confirmTaskDeleteDialog = document.querySelector('.task-delete');
                            const confirmTaskDeleteForm = document.querySelector('.task-delete > form');
                            confirmTaskDeleteDialog.showModal();
                            confirmTaskDeleteDialog.classList.remove('hidden');
                            confirmTaskDeleteDialog.classList.add('displayed');
                            
                            const confirmTaskDeleteButton = document.querySelector('.task-delete > form > button[type="submit"]');
                            const cancelTaskDeleteButton = document.querySelector('.task-delete > form > button[type="close"]');

                            confirmTaskDeleteButton.addEventListener('click', () => {
                                // console.log(TaskModule.getAllTasks());
                                TaskModule.deleteTask(element.id);
                                // console.log(TaskModule.getAllTasks());
                                DOMModule.createDialogs.handleCloseAnimation(confirmTaskDeleteForm, confirmTaskDeleteDialog, 'submit', confirmTaskDeleteForm);
                                DOMModule.createRightDiv.createTasks(TaskModule.getProjectTasks(TaskModule.getActiveProject(), TaskModule.getTasksFromActiveView()));
                            })
                        })
                    }

                    taskField.style.backgroundColor = field.color;
                    taskLineItemRightSection.append(taskField);
                    if (field.child_elements) {
                        field.child_elements.forEach(child_element => {
                            const child_div = document.createElement('div');
                            child_div.classList.add(child_element.div_class);
                            child_div.textContent = child_element.textContent;
                            child_div.style.color = child_element.color;
                            child_div.style.borderColor = child_element.color;
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
            const rightDiv = document.querySelector('.right');
            const footerDiv = document.createElement('div');
            footerDiv.classList.add('footer');
            rightDiv.append(footerDiv);

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
            createProjectButtonLabel.textContent = 'Add Project';
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
            createTaskButtonLabel.textContent = 'Add Task';
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
DOMModule.createDialogs.createProjectDeleteDialog();
DOMModule.createDialogs.createTaskDeleteDialog();
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
        console.log(TaskModule.getActiveProject());
        console.log(TaskModule.getActiveView());
        // console.log(TaskModule.getActiveProject());
        // console.log(TaskModule.getActiveView());
    }
})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q3ZCO0FBQ0EsMEJBQTBCO0FBQzFCOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQSwwQkFBMEI7QUFDMUI7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0EscUJBQXFCO0FBQ3JCLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUIsK0NBQStDO0FBQy9DO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6Qzs7OztBQUlBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxpRkFBaUYsWUFBWSxhQUFhLGFBQWEsY0FBYyxhQUFhLHVCQUF1Qix1QkFBdUIsd0JBQXdCLGFBQWEsYUFBYSxhQUFhLHVCQUF1QixjQUFjLGFBQWEsdUJBQXVCLGFBQWEsd0JBQXdCLGFBQWEsdUJBQXVCLGFBQWEsd0JBQXdCLGFBQWEsdUJBQXVCLHVCQUF1QixjQUFjLGFBQWEsdUJBQXVCLHdCQUF3Qix1QkFBdUIsdUJBQXVCLFFBQVEsS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssd0JBQXdCLGFBQWEsV0FBVyxPQUFPLEtBQUssd0JBQXdCLFdBQVcsT0FBTyxLQUFLLHdCQUF3QixXQUFXLFFBQVEsS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFNBQVMsT0FBTyxhQUFhLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxjQUFjLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxjQUFjLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLEtBQUssYUFBYSxPQUFPLE1BQU0sS0FBSyxPQUFPLGFBQWEsYUFBYSxhQUFhLGNBQWMsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxNQUFNLE9BQU8sYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLGFBQWEsWUFBWSxZQUFZLGFBQWEsTUFBTSxPQUFPLE9BQU8sS0FBSyxLQUFLLFVBQVUsTUFBTSxNQUFNLFNBQVMsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGNBQWMsUUFBUSxLQUFLLFlBQVksVUFBVSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxRQUFRLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFVBQVUsYUFBYSxNQUFNLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksU0FBUyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxXQUFXLE9BQU8sYUFBYSxPQUFPLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxhQUFhLE9BQU8sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxRQUFRLGFBQWEsTUFBTSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sYUFBYSxNQUFNLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGVBQWUsYUFBYSxhQUFhLE1BQU0sT0FBTyxTQUFTLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGNBQWMsT0FBTyxLQUFLLEtBQUssT0FBTyxhQUFhLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sT0FBTyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksUUFBUSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLGFBQWEsT0FBTyxLQUFLLFlBQVksU0FBUyxPQUFPLFVBQVUsWUFBWSxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxP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QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7O0FBRXJCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7O0FBRXpCOztBQUVBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtB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aUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQjs7QUFFbkIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7O0FBR2I7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub3ZhdGFzay8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL25vdmF0YXNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9ub3ZhdGFzay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL25vdmF0YXNrLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9ub3ZhdGFzay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9ub3ZhdGFzay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbm92YXRhc2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbm92YXRhc2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbm92YXRhc2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9ub3ZhdGFzay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL25vdmF0YXNrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL25vdmF0YXNrL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL25vdmF0YXNrL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9ub3ZhdGFzay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL25vdmF0YXNrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbm92YXRhc2svd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL25vdmF0YXNrLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TWF0ZXJpYWwrU3ltYm9scytPdXRsaW5lZDpvcHN6LHdnaHQsRklMTCxHUkFEQDIwLi40OCwxMDAuLjcwMCwwLi4xLC01MC4uMjAwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Sm9zZWZpbitTYW5zOndnaHRAMTAwJmZhbWlseT1MYXRvOndnaHRAMzAwJmZhbWlseT1OdW5pdG86aXRhbCx3Z2h0QDAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwJmZhbWlseT1Sb2JvdG86d2dodEAxMDAmZmFtaWx5PVJ1YmlrOndnaHRAMzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAgIC8qIFByaW1hcnkgY29sb3JzICovXG4gICAgLS1wcmltYXJ5LWNvbG9yOiAjMzQ5OGRiO1xuICAgIC0tcHJpbWFyeS1kYXJrOiAjMjk4MGI5O1xuICAgIC0tcHJpbWFyeS1saWdodDogIzg3Q0VGQTtcblxuICAgIC8qIFNlY29uZGFyeSBjb2xvcnMgKi9cbiAgICAtLXNlY29uZGFyeS1jb2xvcjogIzJlY2M3MTsgLyp1c2VkKi9cbiAgICAtLXNlY29uZGFyeS1kYXJrOiAjMjdhZTYwOyAvKnVzZWQqL1xuICAgIC0tc2Vjb25kYXJ5LWxpZ2h0OiAjYzhlNmM5OyAvKnVzZWQqL1xuXG4gICAgLyogQWNjZW50IGNvbG9ycyAqL1xuICAgIC0tYWNjZW50LWNvbG9yOiAjQkExODFCO1xuICAgIC0tYWNjZW50LWRhcms6ICNBNDE2MUE7XG4gICAgLS1hY2NlbnQtbGlnaHQ6ICNFNTM4M0I7IC8qdXNlZCovXG4gICAgLS1hY2NlbnQtZGFya2VyOiAjNjYwNzA4O1xuXG4gICAgLyogQmFja2dyb3VuZCBjb2xvcnMgKi9cbiAgICAtLWJhY2tncm91bmQtY29sb3I6ICNGNUVCRTA7IC8qdXNlZCovXG4gICAgLS1iYWNrZ3JvdW5kLWRhcms6ICNiZGMzYzc7XG4gICAgLS1iYWNrZ3JvdW5kLWxpZ2h0OiAjRURFREU5OyAvKnVzZWQqL1xuXG4gICAgLyogVGV4dCBjb2xvcnMgKi9cbiAgICAtLXRleHQtY29sb3I6ICMzMzM7IC8qdXNlZCovXG4gICAgLS10ZXh0LWxpZ2h0OiAjZmZmO1xuICAgIC0tdGV4dC1tdXRlZDogIzg4ODsgLyp1c2VkKi9cblxuICAgIC8qIEJvcmRlciBjb2xvcnMgKi9cbiAgICAtLWJvcmRlci1jb2xvcjogI0Q2Q0NDMjsgLyp1c2VkKi9cbiAgICAtLWJvcmRlci1kYXJrOiAjOTk5OyAvKnVzZWQqL1xuICAgIC0tYm9yZGVyLWxpZ2h0OiAjZWVlO1xuXG4gICAgLyogQnV0dG9uIGNvbG9ycyAqL1xuICAgIC0tYnV0dG9uLWhvdmVyOiAjYmExODFiMjg7IC8qdXNlZCovXG4gICAgLS1idXR0b24tYWN0aXZlOiAjYmExODFiNWI7IC8qdXNlZCovXG5cbiAgICAtLWVsZW1lbnRzLWhvdmVyOiAjYmExODFiMjg7IC8qdXNlZCovXG4gICAgLS1jaGVja2JveC1jb2xvcjogZ3JlZW47IC8qdXNlZCovXG59XG5cblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDRweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgei1pbmRleDogOTk5OTtcbiAgfVxuICBcbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtbGlnaHQpOyAvKiBDaGFuZ2UgdGhlIGNvbG9yIHRvIHlvdXIgcHJlZmVyZW5jZSAqL1xuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgei1pbmRleDogOTk5OTtcbiAgfVxuICBcbiAgOjotd2Via2l0LXNjcm9sbGJhcjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWxpZ2h0KTsgLyogQ2hhbmdlIHRoZSBjb2xvciB0byB5b3VyIHByZWZlcmVuY2UgKi9cbiAgICAgIHotaW5kZXg6IDk5OTk7XG4gIH1cbiAgXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWRhcmspOyAvKiBDaGFuZ2UgdGhlIGNvbG9yIHRvIHlvdXIgcHJlZmVyZW5jZSAqL1xuICAgICAgei1pbmRleDogOTk5OTsgICAgXG4gIH1cblxuXG46OmJhY2tkcm9wIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwODg7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XG59XG5cbi5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHtcbiAgICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczpcbiAgICAnRklMTCcgMCxcbiAgICAnd2dodCcgNDAwLFxuICAgICdHUkFEJyAwLFxuICAgICdvcHN6JyAyNFxufVxuXG5cbi8qIEdlbmVyYWwgbGF5b3V0ICovXG5cbioge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogMzAwO1xufVxuXG5ib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWxpZ2h0KTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbi5tYWluIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgyMDBweCwgMWZyKSAzZnI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubWFpbiA+IC5sZWZ0IHtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xuICAgIGZsZXg6IDAgMCAzMDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgICAvKiBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEwMHB4KTsgKi9cbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgLyogb3ZlcmZsb3c6IGF1dG87ICovXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICAgIC8qIHBvc2l0aW9uOiBzdGlja3k7ICovXG59XG5cbi5tYWluID4gLnJpZ2h0IHtcbiAgICBmbGV4OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTAwcHgpO1xuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5mb290ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLyogaGVpZ2h0OiAxMDBweDsgKi9cbiAgICAvKiBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTsgKi9cbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAyMHB4O1xuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xuICAgIGxlZnQ6IDUwJTtcbiAgICBib3gtc2hhZG93OiAwcHggLTUwcHggMjRweCAtMjBweCB2YXIoLS1iYWNrZ3JvdW5kLWxpZ2h0KTtcbiAgICAvKiBib3gtc2hhZG93OiAtMTUwcHggLTQwcHggMjFweCAtMzBweCBibGFjazsgKi9cblxufVxuXG4uZm9vdGVyID4gLmZvb3Rlci1sZWZ0IHtcbiAgICBmbGV4OiAwIDAgMzAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbn1cblxuLmZvb3RlciA+IC5mb290ZXItcmlnaHQge1xuICAgIGZsZXg6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1saWdodCk7XG59XG5cbi5yaWdodC1maXJzdC1oZWFkZXIge1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1kYXJrKTtcbiAgICB3aWR0aDogY2xhbXAoMzAwcHgsIDcwJSwgNzAwcHgpO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbn1cblxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24ge1xuICAgIHBhZGRpbmctcmlnaHQ6IGNsYW1wKDEwcHgsIDklLCAxMDBweCk7XG4gICAgcGFkZGluZy1sZWZ0OiBjbGFtcCgxMHB4LCA5JSwgMTAwcHgpO1xuICAgIC8qIHBhZGRpbmctbGVmdDogbWlubWF4KDEwcHgsIDEwMHB4KTsgKi9cbiAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7ICovXG4gICAgLyogb3ZlcmZsb3c6IGF1dG87ICovXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogM3B4O1xuICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1ib3R0b206IDE1MHB4O1xufVxuXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrIHtcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpOyAqL1xuICAgIC8qIGJvcmRlci1yYWRpdXM6IDVweDsgKi9cbiAgICB3aWR0aDogNjAlO1xuICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XG4gICAgcGFkZGluZy10b3A6IDVweDtcblxuICAgIGZsZXg6IDA7XG4gICAgLyogd2lkdGg6IGNsYW1wKDIwMHB4LCA2MCUsIDgwMHB4KTsgKi9cbiAgICBvcGFjaXR5OiAxO1xuICAgIC8qIG1heC13aWR0aDogNTAwcHg7ICovXG4gICAgdHJhbnNpdGlvbjogYWxsIDE3NW1zIGVhc2UtaW47XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAvKiBnYXA6IDUwcHg7ICovXG4gICAgLyogYm94LXNoYWRvdzogMHB4IDFweCA1cHggMHB4IGdyYXk7ICovXG4gICAgLyogYm9yZGVyLXJhZGl1czogNXB4OyAqL1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZ2FwOiBjbGFtcCgyMHB4LCA1JSwgNDBweCk7XG4gICAgbWluLXdpZHRoOiAzMDBweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XG4gICAgLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzayB7XG4gICAgICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xuICAgIH1cblxuICAgIC5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2sgKyAudGFzay1kaXZpZGVyIHtcbiAgICAgICAgLyogd2lkdGg6IDEwMCU7ICovXG4gICAgfVxufVxuXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrOmhvdmVyICsgLnRhc2stZGl2aWRlciB7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7ICovXG4gICAgXG59XG5cbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2s6aG92ZXIgPiAudGFzay1yaWdodC1zZWN0aW9uID4gLnRhc2stdGl0bGUtZmllbGQsXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrOmhvdmVyID4gLnRhc2stcmlnaHQtc2VjdGlvbiA+IC50YXNrLWRhdGUtZmllbGQge1xuICAgIC8qIGJveC1zaGFkb3c6IGluc2V0IDBweCAwcHggNTBweCA1MHB4IGRhcmtncmVlbixcbiAgICAwcHggMHB4IDUwcHggNTBweCBkYXJrZ3JlZW47ICovXG4gICAgLyogYm94LXNoYWRvdzogIDBweCAwcHggMnB4IDFweCB2YXIoLS1ib3JkZXItZGFyayk7ICovXG4gICAgLyogYm9yZGVyOiAxcHggZ3JlZW4gc29saWQ7ICovXG4gICAgLyogdHJhbnNmb3JtOiBzY2FsZSgxLjEpOyAqL1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMTBweCk7XG5cbn1cblxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzayA+IC50YXNrLWxlZnQtc2VjdGlvbiB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xcyBlYXNlO1xuXG4gICAgLyogdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7ICovXG59XG5cbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2sgPiAudGFzay1sZWZ0LXNlY3Rpb24uY2hlY2tlZCBzdmcgcGF0aCxcbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2sgPiAudGFzay1sZWZ0LXNlY3Rpb24uY2hlY2tlZCBzdmcgY2lyY2xlIHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgIHN0cm9rZTogdmFyKC0tY2hlY2tib3gtY29sb3IpO1xuICAgIHN0cm9rZS13aWR0aDogMXB4O1xufVxuXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrID4gLnRhc2stbGVmdC1zZWN0aW9uLmNoZWNrZWQge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbn1cblxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzayA+IC50YXNrLWxlZnQtc2VjdGlvbi51bmNoZWNrZWQgc3ZnIHBhdGgge1xuICAgIG9wYWNpdHk6IDA7XG59XG5cblxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzazpob3ZlciA+IC50YXNrLWxlZnQtc2VjdGlvbiB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzIGVhc2U7XG59XG5cbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2s6aG92ZXIgPiAudGFzay1sZWZ0LXNlY3Rpb24gY2lyY2xlIHtcbiAgICBzdHJva2U6IHZhcigtLWNoZWNrYm94LWNvbG9yKTtcbn1cblxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzazpob3ZlciA+IC50YXNrLWxlZnQtc2VjdGlvbiBwYXRoLCBcbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2s6aG92ZXIgPiAudGFzay1sZWZ0LXNlY3Rpb24gY2lyY2xlIHtcbiAgICAvKiBzdHJva2U6IHJlZDsgKi9cbiAgICAvKiBzdHJva2Utd2lkdGg6IDFweDsgKi9cbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cblxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzayA+IC50YXNrLWxlZnQtc2VjdGlvbiA+IHN2ZyBjaXJjbGUge1xuICAgIGZpbGw6IG5vbmU7XG4gICAgc3Ryb2tlOiB2YXIoLS10ZXh0LW11dGVkKTtcbn1cblxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzayA+IC50YXNrLWxlZnQtc2VjdGlvbiA+IHN2ZyBwYXRoIHtcbiAgICBmaWxsOiBub25lO1xuICAgIHN0cm9rZTogdmFyKC0tdGV4dC1tdXRlZCk7XG59XG5cbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2sgPiAudGFzay1yaWdodC1zZWN0aW9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNWZyIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XG4gICAgLyogZ2FwOiA1cHg7ICovXG4gICAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2sgPiAudGFzay1yaWdodC1zZWN0aW9uID4gLmhvdmVyLWVmZmVjdCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDEwNSU7XG4gICAgdG9wOiAwcHg7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgLyogaGVpZ2h0OiBhdXRvOyAqL1xuICAgIHdpZHRoOiBjbGFtcCgxMDBweCwgMzAlLCA3MDBweCk7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICBtaW4taGVpZ2h0OiA2MHB4O1xuICAgIHotaW5kZXg6IDE7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1MywgMTg5LCAxNTMpOyAqL1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICAvKiBib3gtc2hhZG93OiAwcHggMHB4IDNweCAxcHggdmFyKC0tYm9yZGVyLWRhcmspOyAqL1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cyBlYXNlLWluLW91dCxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm0gMC41cyBlYXNlO1xuICAgIC8qIHRyYW5zaXRpb246IGFsbCAwLjVzIGN1YmljLWJlemllcigwLjE4LDAuODksMC40MywxLjE5KTsgKi9cbiAgICAvKiBib3JkZXItcmFkaXVzOiAwcHg7ICovXG4gICAgLyogdHJhbnNmb3JtOiBzY2FsZSgwKTsgKi9cbiAgICBib3JkZXI6IDAuM3B4IHNvbGlkIHZhcigtLWJvcmRlci1kYXJrKTtcbiAgICBvcGFjaXR5OiAwO1xuICAgIC8qIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMzAwcHgpOyAqL1xuXG4gICAgZm9udC1zaXplOiAxMnB4O1xuXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJhY2tncm91bmQ6ICNlMGUwZTA7XG4gICAgLyogYm94LXNoYWRvdzogIDhweCA4cHggMTZweCAjOWY5ZjlmLFxuICAgICAgICAgICAgICAgICAtOHB4IC04cHggMTZweCAjZmZmZmZmOyAqL1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjc1cHgpIHtcbiAgICAucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrID4gLnRhc2stcmlnaHQtc2VjdGlvbiA+IC5ob3Zlci1lZmZlY3Qge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cblxuLyogLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzayA+IC50YXNrLXJpZ2h0LXNlY3Rpb246aG92ZXIgPiAudGFzay1ub3Rlcy1maWVsZCB7XG4gICAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZ3JpZC1yb3c6IDQgLyA1O1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcbn0gKi9cblxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzayA+IC50YXNrLXJpZ2h0LXNlY3Rpb246aG92ZXIge1xuICAgIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlO1xufVxuXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrID4gLnRhc2stcmlnaHQtc2VjdGlvbiA+IC50YXNrLXByb2plY3Qge1xuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcbiAgICBncmlkLXJvdzogMyAvIDQ7XG59XG5cbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2sgPiAudGFzay1yaWdodC1zZWN0aW9uID4gLnRhc2stcHJvamVjdCA+ICoge1xuICAgIHBhZGRpbmc6IDFweCA1cHggMXB4IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWRhcmspO1xuICAgIC8qIGJveC1zaGFkb3c6IDFweCAxcHggM3B4IDBweCB2YXIoLS1ib3JkZXItZGFyayk7ICovXG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrID4gLnRhc2stcmlnaHQtc2VjdGlvbiA+IC50YXNrLXRpdGxlLWZpZWxkIHtcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDg1MHB4KSB7XG4gICAgLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzayA+IC50YXNrLXJpZ2h0LXNlY3Rpb24gPiAudGFzay10aXRsZS1maWVsZCB7XG4gICAgICAgIGdyaWQtY29sdW1uOiAxIC8gMztcbiAgICAgICAgZ3JpZC1yb3c6IDIgLyAzO1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgfVxufVxuXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrID4gLnRhc2stcmlnaHQtc2VjdGlvbiA+IC50YXNrLW5vdGVzLWZpZWxkIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrID4gLnRhc2stcmlnaHQtc2VjdGlvbiA+IC50YXNrLXByaW9yaXR5LWZpZWxkIHtcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xufVxuXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrID4gLnRhc2stcmlnaHQtc2VjdGlvbiA+IC50YXNrLWRhdGUtZmllbGQge1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcbiAgICBncmlkLXJvdzogMyAvIDQ7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrID4gLnRhc2stcmlnaHQtc2VjdGlvbiA+IC50YXNrLWRlbGV0ZS1idXR0b24ge1xuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcbiAgICBncmlkLXJvdzogMiAvIDM7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGp1c3RpZnktc2VsZjogZW5kO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC43KTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgIG9wYWNpdHk6IDA7XG5cbn1cblxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzayA+IC50YXNrLXJpZ2h0LXNlY3Rpb246aG92ZXIgPiAudGFzay1kZWxldGUtYnV0dG9uIHtcbiAgICAvKiB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7ICovXG4gICAgb3BhY2l0eTogMTtcbn1cblxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzayA+IC50YXNrLXJpZ2h0LXNlY3Rpb24gPiAudGFzay1kZWxldGUtYnV0dG9uIHNwYW4ge1xuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtbGlnaHQpO1xufVxuXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrID4gLnRhc2stcmlnaHQtc2VjdGlvbjpob3ZlciA+IC50YXNrLWRlbGV0ZS1idXR0b24gc3BhbiB7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1saWdodCk7XG59XG5cbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2sgPiAudGFzay1yaWdodC1zZWN0aW9uOmhvdmVyID4gLnRhc2stZGVsZXRlLWJ1dHRvbjpob3ZlciBzcGFuIHtcbiAgICAvKiB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7ICovXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgICBjb2xvcjogdmFyKC0tYmFja2dyb3VuZC1saWdodCk7XG5cbn1cblxuXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrID4gLnRhc2stcmlnaHQtc2VjdGlvbiA+IC50YXNrLWRhdGUtZmllbGQ6OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJEdWU6IFwiO1xufVxuXG5cblxuXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrID4gLnRhc2stcmlnaHQtc2VjdGlvbiA+IC50YXNrLXByb2plY3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XG59XG5cblxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzay1kaXZpZGVyIHtcbiAgICBtaW4taGVpZ2h0OiAxcHg7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgIHRyYW5zaXRpb246IGFsbCAxNzVtcyBlYXNlLWluO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgbWluLXdpZHRoOiAzMDBweDtcbn1cblxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzay5oaWRkZW4sXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrLWRpdmlkZXIuaGlkZGVuIHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMTc1bXMgZWFzZS1pbjtcbiAgICBvcGFjaXR5OiAwO1xufVxuXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrID4gZGl2ID4gZGl2IHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zaXRpb246IGFsbCAxNzVtcyBlYXNlLWluO1xufVxuXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrID4gZGl2ID4gZGl2LmhpZGRlbiB7XG4gICAgb3BhY2l0eTogMDtcbn1cblxuLnRhc2stcHJvamVjdC1jb2xvciB7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIHdpZHRoOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIHZhcigtLXRleHQtbXV0ZWQpO1xufVxuXG5cblxuXG4vKiBMZWZ0IGRpdiBsYXlvdXQgKi9cblxuLmxlZnQgPiAubGVmdC1maXJzdC1zZWN0aW9uIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIC8qIG92ZXJmbG93OiBhdXRvOyAqL1xuICAgIGZsZXg6IDAgMCAyMDBweDtcbiAgICAvKiBtYXJnaW4tbGVmdDogMTBweDsgKi9cbn1cblxuLmxlZnQgPiAubGVmdC1zZWNvbmQtc2VjdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAvKiBvdmVyZmxvdzogYXV0bzsgKi9cbiAgICBmbGV4OiAxIDAgMjAwcHg7XG4gICAgLyogbWFyZ2luLWxlZnQ6IDEwcHg7ICovXG59XG5cblxuXG4ubGVmdCA+IC5sZWZ0LWZpcnN0LXNlY3Rpb24gPiBwIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmxlZnQgPiAubGVmdC1maXJzdC1zZWN0aW9uIHVsLFxuLmxlZnQgPiAubGVmdC1zZWNvbmQtc2VjdGlvbiB1bCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubGVmdCA+IC5sZWZ0LWZpcnN0LXNlY3Rpb24gbGkge1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGhlaWdodDogNTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgei1pbmRleDogMTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGdhcDogMTBweDtcbn1cblxuLmxlZnQgPiAubGVmdC1zZWNvbmQtc2VjdGlvbiBsaSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubGVmdCA+IC5sZWZ0LWZpcnN0LXNlY3Rpb24gbGkgPiAuaW1hZ2Uge1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcblxufVxuXG5cbi8qIFNsaWRlciBvbiB2aWV3cyAqL1xuXG4ubGVmdCA+IC5sZWZ0LWZpcnN0LXNlY3Rpb24gLnRhc2stYW5pbWF0aW9uLFxuLmxlZnQgPiAubGVmdC1zZWNvbmQtc2VjdGlvbiBsaVtkYXRhLWFjdGl2ZT0ndHJ1ZSddfi50YXNrLWFuaW1hdGlvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC8qIHRvcDogMDsgKi9cbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCB2YXIoLS1hY2NlbnQtbGlnaHQpO1xuICAgIHotaW5kZXg6IDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICBvcGFjaXR5OiAwO1xufVxuXG5cbi52aWV3cyA+IGxpOm50aC1jaGlsZCgxKVtkYXRhLWFjdGl2ZT0ndHJ1ZSddfi50YXNrLWFuaW1hdGlvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdG9wOiAwO1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi52aWV3cyA+IGxpOm50aC1jaGlsZCgyKVtkYXRhLWFjdGl2ZT0ndHJ1ZSddfi50YXNrLWFuaW1hdGlvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdG9wOiA1MHB4O1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi52aWV3cyA+IGxpOm50aC1jaGlsZCgzKVtkYXRhLWFjdGl2ZT0ndHJ1ZSddfi50YXNrLWFuaW1hdGlvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdG9wOiAxMDBweDtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG5cbi8qIFZpZXdzIHN0eWxlcyAqL1xuXG4ubGVmdCA+IC5sZWZ0LWZpcnN0LXNlY3Rpb24gbGlbZGF0YS1hY3RpdmU9J2ZhbHNlJ106aG92ZXIsXG4ubGVmdCA+IC5sZWZ0LXNlY29uZC1zZWN0aW9uIGxpOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1lbGVtZW50cy1ob3Zlcik7XG59XG5cbi5sZWZ0ID4gLmxlZnQtZmlyc3Qtc2VjdGlvbiBsaVtkYXRhLWFjdGl2ZT0ndHJ1ZSddID4gZGl2ID4gc3ZnIHtcbiAgICBmaWxsOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xufVxuXG4ubGVmdCA+IC5sZWZ0LWZpcnN0LXNlY3Rpb24gbGlbZGF0YS1hY3RpdmU9J3RydWUnXSA+IHAge1xuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xufVxuXG4ubGVmdCA+IC5sZWZ0LXNlY29uZC1zZWN0aW9uIGxpLmZvbnQtYWNjZW50ID4gZGl2IHtcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbn1cblxuLmxlZnQgPiAubGVmdC1maXJzdC1zZWN0aW9uIGxpW2RhdGEtYWN0aXZlPSdmYWxzZSddOmFjdGl2ZSxcbi5sZWZ0ID4gLmxlZnQtc2Vjb25kLXNlY3Rpb24gbGk6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmExODFiNWI7XG59XG5cblxuLyogU2xpZGVyIG9uIHByb2plY3RzICovXG5cbi5zZWNvbmQtc2VjdGlvbi1saXN0ID4gbGk6bnRoLWNoaWxkKDEpW2RhdGEtYWN0aXZlPSd0cnVlJ11+LnRhc2stYW5pbWF0aW9uIHtcbiAgICAvKiB3aWR0aDogMTAwJTsgKi9cbiAgICB0b3A6IDA7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLnNlY29uZC1zZWN0aW9uLWxpc3QgPiBsaTpudGgtY2hpbGQoMilbZGF0YS1hY3RpdmU9J3RydWUnXX4udGFzay1hbmltYXRpb24ge1xuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xuICAgIHRvcDogNTBweDtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4uc2Vjb25kLXNlY3Rpb24tbGlzdCA+IGxpOm50aC1jaGlsZCgzKVtkYXRhLWFjdGl2ZT0ndHJ1ZSddfi50YXNrLWFuaW1hdGlvbiB7XG4gICAgLyogd2lkdGg6IDEwMCU7ICovXG4gICAgdG9wOiAxMDBweDtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4uc2Vjb25kLXNlY3Rpb24tbGlzdCA+IGxpOm50aC1jaGlsZCg0KVtkYXRhLWFjdGl2ZT0ndHJ1ZSddfi50YXNrLWFuaW1hdGlvbiB7XG4gICAgLyogd2lkdGg6IDEwMCU7ICovXG4gICAgdG9wOiAxNTBweDtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4uc2Vjb25kLXNlY3Rpb24tbGlzdCA+IGxpOm50aC1jaGlsZCg1KVtkYXRhLWFjdGl2ZT0ndHJ1ZSddfi50YXNrLWFuaW1hdGlvbiB7XG4gICAgLyogd2lkdGg6IDEwMCU7ICovXG4gICAgdG9wOiAyMDBweDtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4uc2Vjb25kLXNlY3Rpb24tbGlzdCA+IGxpOm50aC1jaGlsZCg2KVtkYXRhLWFjdGl2ZT0ndHJ1ZSddfi50YXNrLWFuaW1hdGlvbiB7XG4gICAgLyogd2lkdGg6IDEwMCU7ICovXG4gICAgdG9wOiAyNTBweDtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4uc2Vjb25kLXNlY3Rpb24tbGlzdCA+IGxpOm50aC1jaGlsZCg3KVtkYXRhLWFjdGl2ZT0ndHJ1ZSddfi50YXNrLWFuaW1hdGlvbiB7XG4gICAgLyogd2lkdGg6IDEwMCU7ICovXG4gICAgdG9wOiAzMDBweDtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4uc2Vjb25kLXNlY3Rpb24tbGlzdCA+IGxpOm50aC1jaGlsZCg4KVtkYXRhLWFjdGl2ZT0ndHJ1ZSddfi50YXNrLWFuaW1hdGlvbiB7XG4gICAgLyogd2lkdGg6IDEwMCU7ICovXG4gICAgdG9wOiAzNTBweDtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4uc2Vjb25kLXNlY3Rpb24tbGlzdCA+IGxpOm50aC1jaGlsZCg5KVtkYXRhLWFjdGl2ZT0ndHJ1ZSddfi50YXNrLWFuaW1hdGlvbiB7XG4gICAgLyogd2lkdGg6IDEwMCU7ICovXG4gICAgdG9wOiA0MDBweDtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4uc2Vjb25kLXNlY3Rpb24tbGlzdCA+IGxpOm50aC1jaGlsZCgxMClbZGF0YS1hY3RpdmU9J3RydWUnXX4udGFzay1hbmltYXRpb24ge1xuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xuICAgIHRvcDogNDUwcHg7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLnNlY29uZC1zZWN0aW9uLWxpc3QgPiBsaTpudGgtY2hpbGQoMTEpW2RhdGEtYWN0aXZlPSd0cnVlJ11+LnRhc2stYW5pbWF0aW9uIHtcbiAgICAvKiB3aWR0aDogMTAwJTsgKi9cbiAgICB0b3A6IDUwMHB4O1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi5zZWNvbmQtc2VjdGlvbi1saXN0ID4gbGk6bnRoLWNoaWxkKDEyKVtkYXRhLWFjdGl2ZT0ndHJ1ZSddfi50YXNrLWFuaW1hdGlvbiB7XG4gICAgLyogd2lkdGg6IDEwMCU7ICovXG4gICAgdG9wOiA1NTBweDtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4ubGVmdCA+IC5sZWZ0LXNlY29uZC1zZWN0aW9uID4gcCB7XG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICBmb250LXdlaWdodDogMjAwO1xuICAgIGhlaWdodDogNTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5sZWZ0ID4gLmxlZnQtc2Vjb25kLXNlY3Rpb24gbGkge1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGhlaWdodDogNTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xufVxuXG4ubGVmdCA+IC5sZWZ0LXNlY29uZC1zZWN0aW9uIC5jcmVhdGUtcHJvamVjdCB7XG4gICAgLyogbWFyZ2luLWxlZnQ6IDUwcHg7ICovXG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG4gICAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubGVmdCA+IC5sZWZ0LXNlY29uZC1zZWN0aW9uIC5jcmVhdGUtcHJvamVjdCBkaXYge1xuICAgIC8qIGZvbnQtc3R5bGU6IGl0YWxpYzsgKi9cbiAgICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5sZWZ0ID4gLmxlZnQtc2Vjb25kLXNlY3Rpb24gLmNyZWF0ZS1wcm9qZWN0OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmExODFiMjg7XG59XG5cbi5sZWZ0ID4gLmxlZnQtc2Vjb25kLXNlY3Rpb24gLmNyZWF0ZS1wcm9qZWN0OmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JhMTgxYjViXG59XG5cbi5sZWZ0ID4gLmxlZnQtc2Vjb25kLXNlY3Rpb24gLmNyZWF0ZS1wcm9qZWN0ID4gZGl2OmZpcnN0LWNoaWxke1xuICAgIGhlaWdodDogMTVweDtcbiAgICB3aWR0aDogMTVweDtcbn1cblxuXG4vKiBGb290ZXIgYWRkIG5ldyB0YXNrIGJ1dHRvbiAqL1xuXG4uZm9vdGVyID4gLmZvb3Rlci1yaWdodCA+IC5jcmVhdGUtdGFzayB7XG4gICAgLyogaGVpZ2h0OiAxMDAlOyAqL1xuICAgIC8qIHdpZHRoOiBjYWxjKDEwMCUgLSAzMDBweCk7ICovXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5mb290ZXIgPiAuZm9vdGVyLXJpZ2h0ID4gLmNyZWF0ZS10YXNrID4gLmNyZWF0ZS10YXNrLWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xuICAgIC8qIGJvcmRlci1yYWRpdXM6IDEwcHg7ICovXG4gICAgLyogYm9yZGVyOiAwLjVweCBzb2xpZCB2YXIoLS1ib3JkZXItZGFyayk7ICovXG4gICAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggMnB4IHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XG5cblxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBiYWNrZ3JvdW5kOiAjZTBlMGUwO1xuICAgIC8qIGJveC1zaGFkb3c6ICA4cHggOHB4IDE2cHggIzlmOWY5ZixcbiAgICAgICAgICAgICAgICAgLThweCAtOHB4IDE2cHggI2ZmZmZmZjsgKi9cbn1cblxuXG5cbi5mb290ZXIgPiAuZm9vdGVyLXJpZ2h0ID4gLmNyZWF0ZS10YXNrID4gLmNyZWF0ZS10YXNrLWNvbnRhaW5lciBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5mb290ZXIgPiAuZm9vdGVyLXJpZ2h0ID4gLmNyZWF0ZS10YXNrID4gLmNyZWF0ZS10YXNrLWNvbnRhaW5lciA+IGRpdjpmaXJzdC1jaGlsZCB7XG4gICAgaGVpZ2h0OiAyMHB4O1xuICAgIHdpZHRoOiAyMHB4O1xufVxuXG4uZm9vdGVyID4gLmZvb3Rlci1yaWdodCA+IC5jcmVhdGUtdGFzayA+IC5jcmVhdGUtdGFzay1jb250YWluZXI6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1ob3Zlcik7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuXG59XG5cbi5mb290ZXIgPiAuZm9vdGVyLXJpZ2h0ID4gLmNyZWF0ZS10YXNrID4gLmNyZWF0ZS10YXNrLWNvbnRhaW5lcjphY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1hY3RpdmUpXG59XG5cblxuLyogRGlhbG9nIGxheW91dCBhbmQgYW5pbWF0aW9ucyAqL1xuXG5kaWFsb2cge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgcGFkZGluZy1sZWZ0OiAzNXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDM1cHg7XG4gICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgLyogcGFkZGluZy1sZWZ0OiAzNXB4OyAqL1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG59XG5cbmRpYWxvZzpmb2N1cyB7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuZGlhbG9nLmhpZGRlbiB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0b3A6IC0yMDAlO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0LCBcbiAgICAgICAgICAgICAgICB0b3AgMTAwMG1zIGVhc2UtaW4tb3V0LFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybSAxMDAwbXMgZWFzZS1pbi1vdXQ7XG59XG5cbmRpYWxvZy5oaWRkZW4gPiBmb3JtID4gKiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMTBweDtcbiAgICBvcGFjaXR5OiAwO1xufVxuXG5kaWFsb2cuZGlzcGxheWVkIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRvcDogMCU7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgY3ViaWMtYmV6aWVyKDAuMTgsMC44OSwwLjQzLDEuMTkpO1xuICAgIC8qIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlOyAqL1xufVxuXG5kaWFsb2cuZGlzcGxheWVkID4gZm9ybSA+ICoge1xuICAgIHRvcDogMHB4O1xuICAgIG9wYWNpdHk6IDE7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7ICovXG59XG5cbmRpYWxvZy5kaXNwbGF5ZWQubmV3LXByb2plY3QgPiBmb3JtIC5wcm9qZWN0LWRpYWxvZy1uYW1lIHtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0IDIwMG1zO1xufVxuXG5kaWFsb2cuZGlzcGxheWVkLm5ldy1wcm9qZWN0ID4gZm9ybSAuaW5wdXQtY29udGFpbmVyIHtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0IDI1MG1zO1xufVxuXG5kaWFsb2cuZGlzcGxheWVkLm5ldy1wcm9qZWN0ID4gZm9ybSAucHJvamVjdC1uYW1lLWZpZWxkLWRpdiB7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dCAzMDBtcztcbn1cblxuZGlhbG9nLmRpc3BsYXllZC5uZXctcHJvamVjdCA+IGZvcm0gLnByb2plY3QtY29sb3ItZmllbGQtZGl2IHtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0IDM1MG1zO1xufVxuXG5kaWFsb2cuZGlzcGxheWVkLm5ldy1wcm9qZWN0ID4gZm9ybSA+IGJ1dHRvbiB7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dCA0MDBtcztcbn1cblxuZGlhbG9nLmRpc3BsYXllZC5uZXctcHJvamVjdCA+IGZvcm0gPiAuY2xvc2UtcHJvamVjdC1kaWFsb2cge1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbi1vdXQgNDUwbXM7XG59XG5cblxuZGlhbG9nLmRpc3BsYXllZC5uZXctdGFzayA+IGZvcm0gLnRhc2stZGlhbG9nLW5hbWUge1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbi1vdXQgMjAwbXM7XG59XG5cbmRpYWxvZy5kaXNwbGF5ZWQubmV3LXRhc2sgPiBmb3JtID4gLnRhc2stcHJvamVjdC1maWVsZC1kaXYge1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbi1vdXQgMjUwbXM7XG59XG5cbmRpYWxvZy5kaXNwbGF5ZWQubmV3LXRhc2sgPiBmb3JtID4gLnRhc2stdGl0bGUtZmllbGQtZGl2IHtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0IDMwMG1zO1xufVxuXG5kaWFsb2cuZGlzcGxheWVkLm5ldy10YXNrID4gZm9ybSA+IC50YXNrLW5vdGVzLWZpZWxkLWRpdiB7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dCAzNTBtcztcbn1cblxuZGlhbG9nLmRpc3BsYXllZC5uZXctdGFzayA+IGZvcm0gPiAudGFzay1wcmlvcml0eS1maWVsZC1kaXYge1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbi1vdXQgNDAwbXM7XG59XG5cbmRpYWxvZy5kaXNwbGF5ZWQubmV3LXRhc2sgPiBmb3JtID4gLnRhc2stZGF0ZS1maWVsZC1kaXYge1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbi1vdXQgNDUwbXM7XG59XG5cbmRpYWxvZy5kaXNwbGF5ZWQubmV3LXRhc2sgPiBmb3JtID4gYnV0dG9uIHtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0IDUwMG1zLCBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZSwgYm9yZGVyLWNvbG9yIDAuMXMgZWFzZTtcblxufVxuXG5kaWFsb2cuZGlzcGxheWVkLm5ldy10YXNrID4gZm9ybSA+IC5jbG9zZS10YXNrLWRpYWxvZyB7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dCA1NTBtcztcbn1cblxuXG5cbi5uZXctcHJvamVjdCxcbi5uZXctdGFzayxcbi50YXNrLWRlbGV0ZSB7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtbGlnaHQpO1xufVxuXG4ubmV3LXByb2plY3QgPiBmb3JtLFxuLm5ldy10YXNrID4gZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMTBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi50YXNrLWRlbGV0ZSA+IGZvcm0ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiAxMHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xufVxuXG4udGFzay1kZWxldGUgPiBmb3JtID4gZGl2IHtcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xufVxuXG4udGFzay1kZWxldGUgPiBmb3JtID4gYnV0dG9uOm50aC1jaGlsZCgxKSB7XG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xuICAgIGdyaWQtcm93OiAyIC8gMztcbn1cblxuLnRhc2stZGVsZXRlID4gZm9ybSA+IGJ1dHRvbjpudGgtY2hpbGQoMikge1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcbiAgICBncmlkLXJvdzogMiAvIDM7XG59XG5cblxuLm5ldy10YXNrID4gZm9ybSA+IC50YXNrLXByb2plY3QtZmllbGQtZGl2LFxuLm5ldy10YXNrID4gZm9ybSA+IC50YXNrLXRpdGxlLWZpZWxkLWRpdixcbi5uZXctdGFzayA+IGZvcm0gPiAudGFzay1ub3Rlcy1maWVsZC1kaXYsXG4ubmV3LXRhc2sgPiBmb3JtID4gLnRhc2stcHJpb3JpdHktZmllbGQtZGl2LFxuLm5ldy10YXNrID4gZm9ybSA+IC50YXNrLWRhdGUtZmllbGQtZGl2LFxuLm5ldy1wcm9qZWN0ID4gZm9ybSAgLnByb2plY3QtbmFtZS1maWVsZC1kaXYsXG4ubmV3LXByb2plY3QgPiBmb3JtICAucHJvamVjdC1jb2xvci1maWVsZC1kaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLm5ldy10YXNrID4gZm9ybSA+IC50YXNrLWRpYWxvZy1uYW1lLFxuLm5ldy1wcm9qZWN0ID4gZm9ybSA+IC5wcm9qZWN0LWRpYWxvZy1uYW1lIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAyNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbi5uZXctdGFzayA+IGZvcm0gPiBidXR0b24sXG4ubmV3LXByb2plY3QgPiBmb3JtID4gYnV0dG9uIHtcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogNTAlO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCB2YXIoLS1ib3JkZXItZGFyayk7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1saWdodCk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5cbi50YXNrLWRlbGV0ZSA+IGZvcm0gPiBidXR0b25bdHlwZT0nc3VibWl0J10sXG4udGFzay1kZWxldGUgPiBmb3JtID4gYnV0dG9uW3R5cGU9J2Nsb3NlJ10ge1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCB2YXIoLS1ib3JkZXItZGFyayk7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1saWdodCk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udGFzay1kZWxldGUgPiBmb3JtID4gYnV0dG9uW3R5cGU9J3N1Ym1pdCddIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktbGlnaHQpO1xufVxuXG5cbi50YXNrLWRlbGV0ZSA+IGZvcm0gPiBidXR0b25bdHlwZT0nY2xvc2UnXSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1kYXJrKTtcbn1cblxuLm5ldy10YXNrID4gZm9ybSA+IGJ1dHRvbjpmb2N1cyxcbi5uZXctcHJvamVjdCA+IGZvcm0gPiBidXR0b246Zm9jdXMsXG4udGFzay1kZWxldGUgPiBmb3JtID4gYnV0dG9uOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4ubmV3LXRhc2sgPiBmb3JtID4gYnV0dG9uOmhvdmVyLFxuLm5ldy1wcm9qZWN0ID4gZm9ybSA+IGJ1dHRvbjpob3ZlciB7XG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCBibGFjaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xufVxuXG4ubmV3LXRhc2sgPiBmb3JtID4gYnV0dG9uOmFjdGl2ZSxcbi5uZXctcHJvamVjdCA+IGZvcm0gPiBidXR0b246YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZGFyayk7XG59XG5cbi5uZXctdGFzayA+IGZvcm0gPiAuY2xvc2UtdGFzay1kaWFsb2csXG4ubmV3LXByb2plY3QgPiBmb3JtID4gLmNsb3NlLXByb2plY3QtZGlhbG9nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgdG9wOiAxMHB4O1xufVxuXG4ubmV3LXRhc2sgPiBmb3JtID4gLmNsb3NlLXRhc2stZGlhbG9nIHNwYW4sXG4ubmV3LXByb2plY3QgPiBmb3JtID4gLmNsb3NlLXByb2plY3QtZGlhbG9nIHNwYW4ge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgb3BhY2l0eTogMC43O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNXMsIG9wYWNpdHkgMC4yNXM7XG59XG5cbi5uZXctdGFzayA+IGZvcm0gPiAuY2xvc2UtdGFzay1kaWFsb2c6aG92ZXIgc3Bhbixcbi5uZXctcHJvamVjdCA+IGZvcm0gPiAuY2xvc2UtcHJvamVjdC1kaWFsb2c6aG92ZXIgc3BhbiB7XG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpIHNjYWxlKDEuMSk7XG4gICAgb3BhY2l0eTogMTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIERpYWxvZyBpbnB1dCBzdHlsZXMgKi9cblxuLm5ldy10YXNrID4gZm9ybSBpbnB1dCxcbi5uZXctdGFzayA+IGZvcm0gc2VsZWN0LFxuLm5ldy10YXNrID4gZm9ybSB0ZXh0YXJlYSxcbi5uZXctcHJvamVjdCA+IGZvcm0gaW5wdXQsXG4ubmV3LXByb2plY3QgPiBmb3JtIHNlbGVjdCxcbi5uZXctcHJvamVjdCA+IGZvcm0gdGV4dGFyZWEge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2U7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4ubmV3LXRhc2sgPiBmb3JtIGlucHV0OmhvdmVyLFxuLm5ldy10YXNrID4gZm9ybSBzZWxlY3Q6aG92ZXIsXG4ubmV3LXRhc2sgPiBmb3JtIHRleHRhcmVhOmhvdmVyLFxuLm5ldy1wcm9qZWN0ID4gZm9ybSBpbnB1dDpob3Zlcixcbi5uZXctcHJvamVjdCA+IGZvcm0gc2VsZWN0OmhvdmVyLFxuLm5ldy1wcm9qZWN0ID4gZm9ybSB0ZXh0YXJlYTpob3ZlciB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlcjogMC41cHggc29saWQgYmxhY2s7XG59XG5cbi5uZXctdGFzayA+IGZvcm0gaW5wdXQ6OnBsYWNlaG9sZGVyLFxuLm5ldy10YXNrID4gZm9ybSBzZWxlY3Q6OnBsYWNlaG9sZGVyLFxuLm5ldy10YXNrID4gZm9ybSB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIsXG4ubmV3LXByb2plY3QgPiBmb3JtIGlucHV0OjpwbGFjZWhvbGRlcixcbi5uZXctcHJvamVjdCA+IGZvcm0gc2VsZWN0OjpwbGFjZWhvbGRlcixcbi5uZXctcHJvamVjdCA+IGZvcm0gdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG4ubmV3LXRhc2sgPiBmb3JtIHRleHRhcmVhLFxuLm5ldy1wcm9qZWN0ID4gZm9ybSB0ZXh0YXJlYSB7XG4gICAgcmVzaXplOiBub25lO1xufVxuXG4ucHJvamVjdC1jb2xvci1maWVsZC1kaXYge1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLm5ldy1wcm9qZWN0ID4gZm9ybSAjcHJvamVjdC1jb2xvciB7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5uZXctcHJvamVjdCA+IGZvcm0gLmlucHV0LWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuXG4uaWNvbiB7XG4gICAgd2lkdGg6IDE1cHg7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIC8qIGZpbGw6IHJlZDsgKi9cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5cbkBtZWRpYSAobWF4LXdpZHRoOiA4NTBweCkge1xuICAgIFxufVxuXG5cbi5uby10YXNrcy1maWxsZXIge1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFHQTtJQUNJLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLHdCQUF3Qjs7SUFFeEIscUJBQXFCO0lBQ3JCLDBCQUEwQixFQUFFLE9BQU87SUFDbkMseUJBQXlCLEVBQUUsT0FBTztJQUNsQywwQkFBMEIsRUFBRSxPQUFPOztJQUVuQyxrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0Qix1QkFBdUIsRUFBRSxPQUFPO0lBQ2hDLHdCQUF3Qjs7SUFFeEIsc0JBQXNCO0lBQ3RC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Q0FBd0M7QUFDNUM7O0FBRUE7O0lBRUksdUNBQXVDO0FBQzNDOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztBQUNiOztBQUVBOztJQUVJLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZUFBZTtJQUNmLDBDQUEwQztBQUM5Qzs7QUFFQTs7SUFFSSxtQ0FBbUM7SUFDbkMsVUFBVTtJQUNWLGVBQWU7QUFDbkI7O0FBRUEsd0JBQXdCOztBQUV4Qjs7Ozs7O0lBTUksYUFBYTtJQUNiLGFBQWE7SUFDYix1Q0FBdUM7SUFDdkMsMEJBQTBCO0lBQzFCLGtCQUFrQjtBQUN0Qjs7QUFFQTs7Ozs7O0lBTUksYUFBYTtJQUNiLGFBQWE7SUFDYix5QkFBeUI7QUFDN0I7O0FBRUE7Ozs7OztJQU1JLHdCQUF3QjtJQUN4QixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsV0FBVztJQUNYLDZCQUE2QjtBQUNqQzs7O0FBR0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOzs7QUFHQTs7QUFFQTs7O0FBR0E7SUFDSSx3QkFBd0I7SUFDeEIsa0JBQWtCO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1hdGVyaWFsK1N5bWJvbHMrT3V0bGluZWQ6b3Bzeix3Z2h0LEZJTEwsR1JBREAyMC4uNDgsMTAwLi43MDAsMC4uMSwtNTAuLjIwMCcpO1xcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUpvc2VmaW4rU2Fuczp3Z2h0QDEwMCZmYW1pbHk9TGF0bzp3Z2h0QDMwMCZmYW1pbHk9TnVuaXRvOml0YWwsd2dodEAwLDIwMDswLDMwMDswLDQwMDswLDUwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMCZmYW1pbHk9Um9ib3RvOndnaHRAMTAwJmZhbWlseT1SdWJpazp3Z2h0QDMwMCZkaXNwbGF5PXN3YXAnKTtcXG5cXG46cm9vdCB7XFxuICAgIC8qIFByaW1hcnkgY29sb3JzICovXFxuICAgIC0tcHJpbWFyeS1jb2xvcjogIzM0OThkYjtcXG4gICAgLS1wcmltYXJ5LWRhcms6ICMyOTgwYjk7XFxuICAgIC0tcHJpbWFyeS1saWdodDogIzg3Q0VGQTtcXG5cXG4gICAgLyogU2Vjb25kYXJ5IGNvbG9ycyAqL1xcbiAgICAtLXNlY29uZGFyeS1jb2xvcjogIzJlY2M3MTsgLyp1c2VkKi9cXG4gICAgLS1zZWNvbmRhcnktZGFyazogIzI3YWU2MDsgLyp1c2VkKi9cXG4gICAgLS1zZWNvbmRhcnktbGlnaHQ6ICNjOGU2Yzk7IC8qdXNlZCovXFxuXFxuICAgIC8qIEFjY2VudCBjb2xvcnMgKi9cXG4gICAgLS1hY2NlbnQtY29sb3I6ICNCQTE4MUI7XFxuICAgIC0tYWNjZW50LWRhcms6ICNBNDE2MUE7XFxuICAgIC0tYWNjZW50LWxpZ2h0OiAjRTUzODNCOyAvKnVzZWQqL1xcbiAgICAtLWFjY2VudC1kYXJrZXI6ICM2NjA3MDg7XFxuXFxuICAgIC8qIEJhY2tncm91bmQgY29sb3JzICovXFxuICAgIC0tYmFja2dyb3VuZC1jb2xvcjogI0Y1RUJFMDsgLyp1c2VkKi9cXG4gICAgLS1iYWNrZ3JvdW5kLWRhcms6ICNiZGMzYzc7XFxuICAgIC0tYmFja2dyb3VuZC1saWdodDogI0VERURFOTsgLyp1c2VkKi9cXG5cXG4gICAgLyogVGV4dCBjb2xvcnMgKi9cXG4gICAgLS10ZXh0LWNvbG9yOiAjMzMzOyAvKnVzZWQqL1xcbiAgICAtLXRleHQtbGlnaHQ6ICNmZmY7XFxuICAgIC0tdGV4dC1tdXRlZDogIzg4ODsgLyp1c2VkKi9cXG5cXG4gICAgLyogQm9yZGVyIGNvbG9ycyAqL1xcbiAgICAtLWJvcmRlci1jb2xvcjogI0Q2Q0NDMjsgLyp1c2VkKi9cXG4gICAgLS1ib3JkZXItZGFyazogIzk5OTsgLyp1c2VkKi9cXG4gICAgLS1ib3JkZXItbGlnaHQ6ICNlZWU7XFxuXFxuICAgIC8qIEJ1dHRvbiBjb2xvcnMgKi9cXG4gICAgLS1idXR0b24taG92ZXI6ICNiYTE4MWIyODsgLyp1c2VkKi9cXG4gICAgLS1idXR0b24tYWN0aXZlOiAjYmExODFiNWI7IC8qdXNlZCovXFxuXFxuICAgIC0tZWxlbWVudHMtaG92ZXI6ICNiYTE4MWIyODsgLyp1c2VkKi9cXG4gICAgLS1jaGVja2JveC1jb2xvcjogZ3JlZW47IC8qdXNlZCovXFxufVxcblxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICB3aWR0aDogNHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHotaW5kZXg6IDk5OTk7XFxuICB9XFxuICBcXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1saWdodCk7IC8qIENoYW5nZSB0aGUgY29sb3IgdG8geW91ciBwcmVmZXJlbmNlICovXFxuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICAgIHotaW5kZXg6IDk5OTk7XFxuICB9XFxuICBcXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXI6aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtbGlnaHQpOyAvKiBDaGFuZ2UgdGhlIGNvbG9yIHRvIHlvdXIgcHJlZmVyZW5jZSAqL1xcbiAgICAgIHotaW5kZXg6IDk5OTk7XFxuICB9XFxuICBcXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1kYXJrKTsgLyogQ2hhbmdlIHRoZSBjb2xvciB0byB5b3VyIHByZWZlcmVuY2UgKi9cXG4gICAgICB6LWluZGV4OiA5OTk5OyAgICBcXG4gIH1cXG5cXG5cXG46OmJhY2tkcm9wIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDg4O1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcXG59XFxuXFxuLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xcbiAgICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczpcXG4gICAgJ0ZJTEwnIDAsXFxuICAgICd3Z2h0JyA0MDAsXFxuICAgICdHUkFEJyAwLFxcbiAgICAnb3BzeicgMjRcXG59XFxuXFxuXFxuLyogR2VuZXJhbCBsYXlvdXQgKi9cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxuICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtbGlnaHQpO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuLm1haW4ge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgyMDBweCwgMWZyKSAzZnI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLm1haW4gPiAubGVmdCB7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgZmxleDogMCAwIDMwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICAvKiBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEwMHB4KTsgKi9cXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAvKiBvdmVyZmxvdzogYXV0bzsgKi9cXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICAvKiBwb3NpdGlvbjogc3RpY2t5OyAqL1xcbn1cXG5cXG4ubWFpbiA+IC5yaWdodCB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTAwcHgpO1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC8qIGhlaWdodDogMTAwcHg7ICovXFxuICAgIC8qIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpOyAqL1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJvdHRvbTogMjBweDtcXG4gICAgLyogd2lkdGg6IDEwMCU7ICovXFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgYm94LXNoYWRvdzogMHB4IC01MHB4IDI0cHggLTIwcHggdmFyKC0tYmFja2dyb3VuZC1saWdodCk7XFxuICAgIC8qIGJveC1zaGFkb3c6IC0xNTBweCAtNDBweCAyMXB4IC0zMHB4IGJsYWNrOyAqL1xcblxcbn1cXG5cXG4uZm9vdGVyID4gLmZvb3Rlci1sZWZ0IHtcXG4gICAgZmxleDogMCAwIDMwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcXG59XFxuXFxuLmZvb3RlciA+IC5mb290ZXItcmlnaHQge1xcbiAgICBmbGV4OiAxO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWxpZ2h0KTtcXG59XFxuXFxuLnJpZ2h0LWZpcnN0LWhlYWRlciB7XFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZGFyayk7XFxuICAgIHdpZHRoOiBjbGFtcCgzMDBweCwgNzAlLCA3MDBweCk7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG59XFxuXFxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24ge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiBjbGFtcCgxMHB4LCA5JSwgMTAwcHgpO1xcbiAgICBwYWRkaW5nLWxlZnQ6IGNsYW1wKDEwcHgsIDklLCAxMDBweCk7XFxuICAgIC8qIHBhZGRpbmctbGVmdDogbWlubWF4KDEwcHgsIDEwMHB4KTsgKi9cXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyAqL1xcbiAgICAvKiBvdmVyZmxvdzogYXV0bzsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAzcHg7XFxuICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTUwcHg7XFxufVxcblxcbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2sge1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpOyAqL1xcbiAgICAvKiBib3JkZXItcmFkaXVzOiA1cHg7ICovXFxuICAgIHdpZHRoOiA2MCU7XFxuICAgIHBhZGRpbmctbGVmdDogNXB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xcblxcbiAgICBmbGV4OiAwO1xcbiAgICAvKiB3aWR0aDogY2xhbXAoMjAwcHgsIDYwJSwgODAwcHgpOyAqL1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAvKiBtYXgtd2lkdGg6IDUwMHB4OyAqL1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMTc1bXMgZWFzZS1pbjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAvKiBnYXA6IDUwcHg7ICovXFxuICAgIC8qIGJveC1zaGFkb3c6IDBweCAxcHggNXB4IDBweCBncmF5OyAqL1xcbiAgICAvKiBib3JkZXItcmFkaXVzOiA1cHg7ICovXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBnYXA6IGNsYW1wKDIwcHgsIDUlLCA0MHB4KTtcXG4gICAgbWluLXdpZHRoOiAzMDBweDtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxuICAgIC5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2sge1xcbiAgICAgICAgLyogd2lkdGg6IDEwMCU7ICovXFxuICAgIH1cXG5cXG4gICAgLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzayArIC50YXNrLWRpdmlkZXIge1xcbiAgICAgICAgLyogd2lkdGg6IDEwMCU7ICovXFxuICAgIH1cXG59XFxuXFxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzazpob3ZlciArIC50YXNrLWRpdmlkZXIge1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgKi9cXG4gICAgXFxufVxcblxcbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2s6aG92ZXIgPiAudGFzay1yaWdodC1zZWN0aW9uID4gLnRhc2stdGl0bGUtZmllbGQsXFxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzazpob3ZlciA+IC50YXNrLXJpZ2h0LXNlY3Rpb24gPiAudGFzay1kYXRlLWZpZWxkIHtcXG4gICAgLyogYm94LXNoYWRvdzogaW5zZXQgMHB4IDBweCA1MHB4IDUwcHggZGFya2dyZWVuLFxcbiAgICAwcHggMHB4IDUwcHggNTBweCBkYXJrZ3JlZW47ICovXFxuICAgIC8qIGJveC1zaGFkb3c6ICAwcHggMHB4IDJweCAxcHggdmFyKC0tYm9yZGVyLWRhcmspOyAqL1xcbiAgICAvKiBib3JkZXI6IDFweCBncmVlbiBzb2xpZDsgKi9cXG4gICAgLyogdHJhbnNmb3JtOiBzY2FsZSgxLjEpOyAqL1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwcHgpO1xcblxcbn1cXG5cXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrID4gLnRhc2stbGVmdC1zZWN0aW9uIHtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xcyBlYXNlO1xcblxcbiAgICAvKiB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTsgKi9cXG59XFxuXFxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzayA+IC50YXNrLWxlZnQtc2VjdGlvbi5jaGVja2VkIHN2ZyBwYXRoLFxcbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2sgPiAudGFzay1sZWZ0LXNlY3Rpb24uY2hlY2tlZCBzdmcgY2lyY2xlIHtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG4gICAgc3Ryb2tlOiB2YXIoLS1jaGVja2JveC1jb2xvcik7XFxuICAgIHN0cm9rZS13aWR0aDogMXB4O1xcbn1cXG5cXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrID4gLnRhc2stbGVmdC1zZWN0aW9uLmNoZWNrZWQge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxufVxcblxcbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2sgPiAudGFzay1sZWZ0LXNlY3Rpb24udW5jaGVja2VkIHN2ZyBwYXRoIHtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuXFxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzazpob3ZlciA+IC50YXNrLWxlZnQtc2VjdGlvbiB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgZWFzZTtcXG59XFxuXFxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzazpob3ZlciA+IC50YXNrLWxlZnQtc2VjdGlvbiBjaXJjbGUge1xcbiAgICBzdHJva2U6IHZhcigtLWNoZWNrYm94LWNvbG9yKTtcXG59XFxuXFxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzazpob3ZlciA+IC50YXNrLWxlZnQtc2VjdGlvbiBwYXRoLCBcXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrOmhvdmVyID4gLnRhc2stbGVmdC1zZWN0aW9uIGNpcmNsZSB7XFxuICAgIC8qIHN0cm9rZTogcmVkOyAqL1xcbiAgICAvKiBzdHJva2Utd2lkdGg6IDFweDsgKi9cXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2sgPiAudGFzay1sZWZ0LXNlY3Rpb24gPiBzdmcgY2lyY2xlIHtcXG4gICAgZmlsbDogbm9uZTtcXG4gICAgc3Ryb2tlOiB2YXIoLS10ZXh0LW11dGVkKTtcXG59XFxuXFxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzayA+IC50YXNrLWxlZnQtc2VjdGlvbiA+IHN2ZyBwYXRoIHtcXG4gICAgZmlsbDogbm9uZTtcXG4gICAgc3Ryb2tlOiB2YXIoLS10ZXh0LW11dGVkKTtcXG59XFxuXFxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzayA+IC50YXNrLXJpZ2h0LXNlY3Rpb24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA1ZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XFxuICAgIC8qIGdhcDogNXB4OyAqL1xcbiAgICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2sgPiAudGFzay1yaWdodC1zZWN0aW9uID4gLmhvdmVyLWVmZmVjdCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMTA1JTtcXG4gICAgdG9wOiAwcHg7XFxuICAgIHdpZHRoOiBhdXRvO1xcbiAgICAvKiBoZWlnaHQ6IGF1dG87ICovXFxuICAgIHdpZHRoOiBjbGFtcCgxMDBweCwgMzAlLCA3MDBweCk7XFxuICAgIG1heC13aWR0aDogNTAwcHg7XFxuICAgIG1pbi1oZWlnaHQ6IDYwcHg7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTMsIDE4OSwgMTUzKTsgKi9cXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICAvKiBib3gtc2hhZG93OiAwcHggMHB4IDNweCAxcHggdmFyKC0tYm9yZGVyLWRhcmspOyAqL1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuNXMgZWFzZS1pbi1vdXQsXFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybSAwLjVzIGVhc2U7XFxuICAgIC8qIHRyYW5zaXRpb246IGFsbCAwLjVzIGN1YmljLWJlemllcigwLjE4LDAuODksMC40MywxLjE5KTsgKi9cXG4gICAgLyogYm9yZGVyLXJhZGl1czogMHB4OyAqL1xcbiAgICAvKiB0cmFuc2Zvcm06IHNjYWxlKDApOyAqL1xcbiAgICBib3JkZXI6IDAuM3B4IHNvbGlkIHZhcigtLWJvcmRlci1kYXJrKTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLyogdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zMDBweCk7ICovXFxuXFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG5cXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBiYWNrZ3JvdW5kOiAjZTBlMGUwO1xcbiAgICAvKiBib3gtc2hhZG93OiAgOHB4IDhweCAxNnB4ICM5ZjlmOWYsXFxuICAgICAgICAgICAgICAgICAtOHB4IC04cHggMTZweCAjZmZmZmZmOyAqL1xcbn1cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNjc1cHgpIHtcXG4gICAgLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzayA+IC50YXNrLXJpZ2h0LXNlY3Rpb24gPiAuaG92ZXItZWZmZWN0IHtcXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIH1cXG59XFxuXFxuLyogLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzayA+IC50YXNrLXJpZ2h0LXNlY3Rpb246aG92ZXIgPiAudGFzay1ub3Rlcy1maWVsZCB7XFxuICAgIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgZ3JpZC1yb3c6IDQgLyA1O1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxufSAqL1xcblxcbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2sgPiAudGFzay1yaWdodC1zZWN0aW9uOmhvdmVyIHtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7XFxufVxcblxcbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2sgPiAudGFzay1yaWdodC1zZWN0aW9uID4gLnRhc2stcHJvamVjdCB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbn1cXG5cXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrID4gLnRhc2stcmlnaHQtc2VjdGlvbiA+IC50YXNrLXByb2plY3QgPiAqIHtcXG4gICAgcGFkZGluZzogMXB4IDVweCAxcHggNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1kYXJrKTtcXG4gICAgLyogYm94LXNoYWRvdzogMXB4IDFweCAzcHggMHB4IHZhcigtLWJvcmRlci1kYXJrKTsgKi9cXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrID4gLnRhc2stcmlnaHQtc2VjdGlvbiA+IC50YXNrLXRpdGxlLWZpZWxkIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDg1MHB4KSB7XFxuICAgIC5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2sgPiAudGFzay1yaWdodC1zZWN0aW9uID4gLnRhc2stdGl0bGUtZmllbGQge1xcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xcbiAgICAgICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICB9XFxufVxcblxcbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2sgPiAudGFzay1yaWdodC1zZWN0aW9uID4gLnRhc2stbm90ZXMtZmllbGQge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrID4gLnRhc2stcmlnaHQtc2VjdGlvbiA+IC50YXNrLXByaW9yaXR5LWZpZWxkIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxufVxcblxcbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2sgPiAudGFzay1yaWdodC1zZWN0aW9uID4gLnRhc2stZGF0ZS1maWVsZCB7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgICBmb250LXNpemU6IDEycHg7XFxufVxcblxcbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2sgPiAudGFzay1yaWdodC1zZWN0aW9uID4gLnRhc2stZGVsZXRlLWJ1dHRvbiB7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgICBmb250LXNpemU6IDEycHg7XFxuICAgIGp1c3RpZnktc2VsZjogZW5kO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNyk7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxuICAgIG9wYWNpdHk6IDA7XFxuXFxufVxcblxcbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2sgPiAudGFzay1yaWdodC1zZWN0aW9uOmhvdmVyID4gLnRhc2stZGVsZXRlLWJ1dHRvbiB7XFxuICAgIC8qIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTsgKi9cXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzayA+IC50YXNrLXJpZ2h0LXNlY3Rpb24gPiAudGFzay1kZWxldGUtYnV0dG9uIHNwYW4ge1xcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1saWdodCk7XFxufVxcblxcbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2sgPiAudGFzay1yaWdodC1zZWN0aW9uOmhvdmVyID4gLnRhc2stZGVsZXRlLWJ1dHRvbiBzcGFuIHtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1saWdodCk7XFxufVxcblxcbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2sgPiAudGFzay1yaWdodC1zZWN0aW9uOmhvdmVyID4gLnRhc2stZGVsZXRlLWJ1dHRvbjpob3ZlciBzcGFuIHtcXG4gICAgLyogdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpOyAqL1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgICBjb2xvcjogdmFyKC0tYmFja2dyb3VuZC1saWdodCk7XFxuXFxufVxcblxcblxcbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2sgPiAudGFzay1yaWdodC1zZWN0aW9uID4gLnRhc2stZGF0ZS1maWVsZDo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIkR1ZTogXFxcIjtcXG59XFxuXFxuXFxuXFxuXFxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzayA+IC50YXNrLXJpZ2h0LXNlY3Rpb24gPiAudGFzay1wcm9qZWN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxufVxcblxcblxcbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2stZGl2aWRlciB7XFxuICAgIG1pbi1oZWlnaHQ6IDFweDtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9yZGVyLWNvbG9yKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDE3NW1zIGVhc2UtaW47XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIG1pbi13aWR0aDogMzAwcHg7XFxufVxcblxcbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2suaGlkZGVuLFxcbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2stZGl2aWRlci5oaWRkZW4ge1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMTc1bXMgZWFzZS1pbjtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzayA+IGRpdiA+IGRpdiB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zaXRpb246IGFsbCAxNzVtcyBlYXNlLWluO1xcbn1cXG5cXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrID4gZGl2ID4gZGl2LmhpZGRlbiB7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbi50YXNrLXByb2plY3QtY29sb3Ige1xcbiAgICBoZWlnaHQ6IDEwcHg7XFxuICAgIHdpZHRoOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJvcmRlcjogMC41cHggc29saWQgdmFyKC0tdGV4dC1tdXRlZCk7XFxufVxcblxcblxcblxcblxcbi8qIExlZnQgZGl2IGxheW91dCAqL1xcblxcbi5sZWZ0ID4gLmxlZnQtZmlyc3Qtc2VjdGlvbiB7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIC8qIG92ZXJmbG93OiBhdXRvOyAqL1xcbiAgICBmbGV4OiAwIDAgMjAwcHg7XFxuICAgIC8qIG1hcmdpbi1sZWZ0OiAxMHB4OyAqL1xcbn1cXG5cXG4ubGVmdCA+IC5sZWZ0LXNlY29uZC1zZWN0aW9uIHtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgLyogb3ZlcmZsb3c6IGF1dG87ICovXFxuICAgIGZsZXg6IDEgMCAyMDBweDtcXG4gICAgLyogbWFyZ2luLWxlZnQ6IDEwcHg7ICovXFxufVxcblxcblxcblxcbi5sZWZ0ID4gLmxlZnQtZmlyc3Qtc2VjdGlvbiA+IHAge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubGVmdCA+IC5sZWZ0LWZpcnN0LXNlY3Rpb24gdWwsXFxuLmxlZnQgPiAubGVmdC1zZWNvbmQtc2VjdGlvbiB1bCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmxlZnQgPiAubGVmdC1maXJzdC1zZWN0aW9uIGxpIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5sZWZ0ID4gLmxlZnQtc2Vjb25kLXNlY3Rpb24gbGkge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5sZWZ0ID4gLmxlZnQtZmlyc3Qtc2VjdGlvbiBsaSA+IC5pbWFnZSB7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgd2lkdGg6IDIwcHg7XFxuXFxufVxcblxcblxcbi8qIFNsaWRlciBvbiB2aWV3cyAqL1xcblxcbi5sZWZ0ID4gLmxlZnQtZmlyc3Qtc2VjdGlvbiAudGFzay1hbmltYXRpb24sXFxuLmxlZnQgPiAubGVmdC1zZWNvbmQtc2VjdGlvbiBsaVtkYXRhLWFjdGl2ZT0ndHJ1ZSddfi50YXNrLWFuaW1hdGlvbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgLyogdG9wOiAwOyAqL1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGJvcmRlci1sZWZ0OiA2cHggc29saWQgdmFyKC0tYWNjZW50LWxpZ2h0KTtcXG4gICAgei1pbmRleDogMDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuXFxuLnZpZXdzID4gbGk6bnRoLWNoaWxkKDEpW2RhdGEtYWN0aXZlPSd0cnVlJ11+LnRhc2stYW5pbWF0aW9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRvcDogMDtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnZpZXdzID4gbGk6bnRoLWNoaWxkKDIpW2RhdGEtYWN0aXZlPSd0cnVlJ11+LnRhc2stYW5pbWF0aW9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRvcDogNTBweDtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnZpZXdzID4gbGk6bnRoLWNoaWxkKDMpW2RhdGEtYWN0aXZlPSd0cnVlJ11+LnRhc2stYW5pbWF0aW9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHRvcDogMTAwcHg7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcblxcbi8qIFZpZXdzIHN0eWxlcyAqL1xcblxcbi5sZWZ0ID4gLmxlZnQtZmlyc3Qtc2VjdGlvbiBsaVtkYXRhLWFjdGl2ZT0nZmFsc2UnXTpob3ZlcixcXG4ubGVmdCA+IC5sZWZ0LXNlY29uZC1zZWN0aW9uIGxpOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZWxlbWVudHMtaG92ZXIpO1xcbn1cXG5cXG4ubGVmdCA+IC5sZWZ0LWZpcnN0LXNlY3Rpb24gbGlbZGF0YS1hY3RpdmU9J3RydWUnXSA+IGRpdiA+IHN2ZyB7XFxuICAgIGZpbGw6IHZhcigtLWFjY2VudC1jb2xvcik7XFxufVxcblxcbi5sZWZ0ID4gLmxlZnQtZmlyc3Qtc2VjdGlvbiBsaVtkYXRhLWFjdGl2ZT0ndHJ1ZSddID4gcCB7XFxuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbn1cXG5cXG4ubGVmdCA+IC5sZWZ0LXNlY29uZC1zZWN0aW9uIGxpLmZvbnQtYWNjZW50ID4gZGl2IHtcXG4gICAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxufVxcblxcbi5sZWZ0ID4gLmxlZnQtZmlyc3Qtc2VjdGlvbiBsaVtkYXRhLWFjdGl2ZT0nZmFsc2UnXTphY3RpdmUsXFxuLmxlZnQgPiAubGVmdC1zZWNvbmQtc2VjdGlvbiBsaTphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmExODFiNWI7XFxufVxcblxcblxcbi8qIFNsaWRlciBvbiBwcm9qZWN0cyAqL1xcblxcbi5zZWNvbmQtc2VjdGlvbi1saXN0ID4gbGk6bnRoLWNoaWxkKDEpW2RhdGEtYWN0aXZlPSd0cnVlJ11+LnRhc2stYW5pbWF0aW9uIHtcXG4gICAgLyogd2lkdGg6IDEwMCU7ICovXFxuICAgIHRvcDogMDtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnNlY29uZC1zZWN0aW9uLWxpc3QgPiBsaTpudGgtY2hpbGQoMilbZGF0YS1hY3RpdmU9J3RydWUnXX4udGFzay1hbmltYXRpb24ge1xcbiAgICAvKiB3aWR0aDogMTAwJTsgKi9cXG4gICAgdG9wOiA1MHB4O1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uc2Vjb25kLXNlY3Rpb24tbGlzdCA+IGxpOm50aC1jaGlsZCgzKVtkYXRhLWFjdGl2ZT0ndHJ1ZSddfi50YXNrLWFuaW1hdGlvbiB7XFxuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xcbiAgICB0b3A6IDEwMHB4O1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uc2Vjb25kLXNlY3Rpb24tbGlzdCA+IGxpOm50aC1jaGlsZCg0KVtkYXRhLWFjdGl2ZT0ndHJ1ZSddfi50YXNrLWFuaW1hdGlvbiB7XFxuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xcbiAgICB0b3A6IDE1MHB4O1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uc2Vjb25kLXNlY3Rpb24tbGlzdCA+IGxpOm50aC1jaGlsZCg1KVtkYXRhLWFjdGl2ZT0ndHJ1ZSddfi50YXNrLWFuaW1hdGlvbiB7XFxuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xcbiAgICB0b3A6IDIwMHB4O1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uc2Vjb25kLXNlY3Rpb24tbGlzdCA+IGxpOm50aC1jaGlsZCg2KVtkYXRhLWFjdGl2ZT0ndHJ1ZSddfi50YXNrLWFuaW1hdGlvbiB7XFxuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xcbiAgICB0b3A6IDI1MHB4O1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uc2Vjb25kLXNlY3Rpb24tbGlzdCA+IGxpOm50aC1jaGlsZCg3KVtkYXRhLWFjdGl2ZT0ndHJ1ZSddfi50YXNrLWFuaW1hdGlvbiB7XFxuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xcbiAgICB0b3A6IDMwMHB4O1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uc2Vjb25kLXNlY3Rpb24tbGlzdCA+IGxpOm50aC1jaGlsZCg4KVtkYXRhLWFjdGl2ZT0ndHJ1ZSddfi50YXNrLWFuaW1hdGlvbiB7XFxuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xcbiAgICB0b3A6IDM1MHB4O1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uc2Vjb25kLXNlY3Rpb24tbGlzdCA+IGxpOm50aC1jaGlsZCg5KVtkYXRhLWFjdGl2ZT0ndHJ1ZSddfi50YXNrLWFuaW1hdGlvbiB7XFxuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xcbiAgICB0b3A6IDQwMHB4O1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uc2Vjb25kLXNlY3Rpb24tbGlzdCA+IGxpOm50aC1jaGlsZCgxMClbZGF0YS1hY3RpdmU9J3RydWUnXX4udGFzay1hbmltYXRpb24ge1xcbiAgICAvKiB3aWR0aDogMTAwJTsgKi9cXG4gICAgdG9wOiA0NTBweDtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnNlY29uZC1zZWN0aW9uLWxpc3QgPiBsaTpudGgtY2hpbGQoMTEpW2RhdGEtYWN0aXZlPSd0cnVlJ11+LnRhc2stYW5pbWF0aW9uIHtcXG4gICAgLyogd2lkdGg6IDEwMCU7ICovXFxuICAgIHRvcDogNTAwcHg7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5zZWNvbmQtc2VjdGlvbi1saXN0ID4gbGk6bnRoLWNoaWxkKDEyKVtkYXRhLWFjdGl2ZT0ndHJ1ZSddfi50YXNrLWFuaW1hdGlvbiB7XFxuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xcbiAgICB0b3A6IDU1MHB4O1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4ubGVmdCA+IC5sZWZ0LXNlY29uZC1zZWN0aW9uID4gcCB7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5sZWZ0ID4gLmxlZnQtc2Vjb25kLXNlY3Rpb24gbGkge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ubGVmdCA+IC5sZWZ0LXNlY29uZC1zZWN0aW9uIC5jcmVhdGUtcHJvamVjdCB7XFxuICAgIC8qIG1hcmdpbi1sZWZ0OiA1MHB4OyAqL1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG4gICAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmxlZnQgPiAubGVmdC1zZWNvbmQtc2VjdGlvbiAuY3JlYXRlLXByb2plY3QgZGl2IHtcXG4gICAgLyogZm9udC1zdHlsZTogaXRhbGljOyAqL1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxufVxcblxcbi5sZWZ0ID4gLmxlZnQtc2Vjb25kLXNlY3Rpb24gLmNyZWF0ZS1wcm9qZWN0OmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JhMTgxYjI4O1xcbn1cXG5cXG4ubGVmdCA+IC5sZWZ0LXNlY29uZC1zZWN0aW9uIC5jcmVhdGUtcHJvamVjdDphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmExODFiNWJcXG59XFxuXFxuLmxlZnQgPiAubGVmdC1zZWNvbmQtc2VjdGlvbiAuY3JlYXRlLXByb2plY3QgPiBkaXY6Zmlyc3QtY2hpbGR7XFxuICAgIGhlaWdodDogMTVweDtcXG4gICAgd2lkdGg6IDE1cHg7XFxufVxcblxcblxcbi8qIEZvb3RlciBhZGQgbmV3IHRhc2sgYnV0dG9uICovXFxuXFxuLmZvb3RlciA+IC5mb290ZXItcmlnaHQgPiAuY3JlYXRlLXRhc2sge1xcbiAgICAvKiBoZWlnaHQ6IDEwMCU7ICovXFxuICAgIC8qIHdpZHRoOiBjYWxjKDEwMCUgLSAzMDBweCk7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmZvb3RlciA+IC5mb290ZXItcmlnaHQgPiAuY3JlYXRlLXRhc2sgPiAuY3JlYXRlLXRhc2stY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIC8qIGJvcmRlci1yYWRpdXM6IDEwcHg7ICovXFxuICAgIC8qIGJvcmRlcjogMC41cHggc29saWQgdmFyKC0tYm9yZGVyLWRhcmspOyAqL1xcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAycHggdmFyKC0tYm9yZGVyLWNvbG9yKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZS1pbi1vdXQ7XFxuXFxuXFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYmFja2dyb3VuZDogI2UwZTBlMDtcXG4gICAgLyogYm94LXNoYWRvdzogIDhweCA4cHggMTZweCAjOWY5ZjlmLFxcbiAgICAgICAgICAgICAgICAgLThweCAtOHB4IDE2cHggI2ZmZmZmZjsgKi9cXG59XFxuXFxuXFxuXFxuLmZvb3RlciA+IC5mb290ZXItcmlnaHQgPiAuY3JlYXRlLXRhc2sgPiAuY3JlYXRlLXRhc2stY29udGFpbmVyIGRpdjpudGgtY2hpbGQoMikge1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5mb290ZXIgPiAuZm9vdGVyLXJpZ2h0ID4gLmNyZWF0ZS10YXNrID4gLmNyZWF0ZS10YXNrLWNvbnRhaW5lciA+IGRpdjpmaXJzdC1jaGlsZCB7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgd2lkdGg6IDIwcHg7XFxufVxcblxcbi5mb290ZXIgPiAuZm9vdGVyLXJpZ2h0ID4gLmNyZWF0ZS10YXNrID4gLmNyZWF0ZS10YXNrLWNvbnRhaW5lcjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1ob3Zlcik7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG5cXG59XFxuXFxuLmZvb3RlciA+IC5mb290ZXItcmlnaHQgPiAuY3JlYXRlLXRhc2sgPiAuY3JlYXRlLXRhc2stY29udGFpbmVyOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1hY3RpdmUpXFxufVxcblxcblxcbi8qIERpYWxvZyBsYXlvdXQgYW5kIGFuaW1hdGlvbnMgKi9cXG5cXG5kaWFsb2cge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgcGFkZGluZy1sZWZ0OiAzNXB4O1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAzNXB4O1xcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxuICAgIC8qIHBhZGRpbmctbGVmdDogMzVweDsgKi9cXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxufVxcblxcbmRpYWxvZzpmb2N1cyB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbmRpYWxvZy5oaWRkZW4ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0b3A6IC0yMDAlO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbi1vdXQsIFxcbiAgICAgICAgICAgICAgICB0b3AgMTAwMG1zIGVhc2UtaW4tb3V0LFxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm0gMTAwMG1zIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG5kaWFsb2cuaGlkZGVuID4gZm9ybSA+ICoge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHRvcDogMTBweDtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuZGlhbG9nLmRpc3BsYXllZCB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRvcDogMCU7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC4xOCwwLjg5LDAuNDMsMS4xOSk7XFxuICAgIC8qIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlOyAqL1xcbn1cXG5cXG5kaWFsb2cuZGlzcGxheWVkID4gZm9ybSA+ICoge1xcbiAgICB0b3A6IDBweDtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7ICovXFxufVxcblxcbmRpYWxvZy5kaXNwbGF5ZWQubmV3LXByb2plY3QgPiBmb3JtIC5wcm9qZWN0LWRpYWxvZy1uYW1lIHtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dCAyMDBtcztcXG59XFxuXFxuZGlhbG9nLmRpc3BsYXllZC5uZXctcHJvamVjdCA+IGZvcm0gLmlucHV0LWNvbnRhaW5lciB7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbi1vdXQgMjUwbXM7XFxufVxcblxcbmRpYWxvZy5kaXNwbGF5ZWQubmV3LXByb2plY3QgPiBmb3JtIC5wcm9qZWN0LW5hbWUtZmllbGQtZGl2IHtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dCAzMDBtcztcXG59XFxuXFxuZGlhbG9nLmRpc3BsYXllZC5uZXctcHJvamVjdCA+IGZvcm0gLnByb2plY3QtY29sb3ItZmllbGQtZGl2IHtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dCAzNTBtcztcXG59XFxuXFxuZGlhbG9nLmRpc3BsYXllZC5uZXctcHJvamVjdCA+IGZvcm0gPiBidXR0b24ge1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0IDQwMG1zO1xcbn1cXG5cXG5kaWFsb2cuZGlzcGxheWVkLm5ldy1wcm9qZWN0ID4gZm9ybSA+IC5jbG9zZS1wcm9qZWN0LWRpYWxvZyB7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbi1vdXQgNDUwbXM7XFxufVxcblxcblxcbmRpYWxvZy5kaXNwbGF5ZWQubmV3LXRhc2sgPiBmb3JtIC50YXNrLWRpYWxvZy1uYW1lIHtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dCAyMDBtcztcXG59XFxuXFxuZGlhbG9nLmRpc3BsYXllZC5uZXctdGFzayA+IGZvcm0gPiAudGFzay1wcm9qZWN0LWZpZWxkLWRpdiB7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbi1vdXQgMjUwbXM7XFxufVxcblxcbmRpYWxvZy5kaXNwbGF5ZWQubmV3LXRhc2sgPiBmb3JtID4gLnRhc2stdGl0bGUtZmllbGQtZGl2IHtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dCAzMDBtcztcXG59XFxuXFxuZGlhbG9nLmRpc3BsYXllZC5uZXctdGFzayA+IGZvcm0gPiAudGFzay1ub3Rlcy1maWVsZC1kaXYge1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0IDM1MG1zO1xcbn1cXG5cXG5kaWFsb2cuZGlzcGxheWVkLm5ldy10YXNrID4gZm9ybSA+IC50YXNrLXByaW9yaXR5LWZpZWxkLWRpdiB7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbi1vdXQgNDAwbXM7XFxufVxcblxcbmRpYWxvZy5kaXNwbGF5ZWQubmV3LXRhc2sgPiBmb3JtID4gLnRhc2stZGF0ZS1maWVsZC1kaXYge1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0IDQ1MG1zO1xcbn1cXG5cXG5kaWFsb2cuZGlzcGxheWVkLm5ldy10YXNrID4gZm9ybSA+IGJ1dHRvbiB7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbi1vdXQgNTAwbXMsIGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLCBib3JkZXItY29sb3IgMC4xcyBlYXNlO1xcblxcbn1cXG5cXG5kaWFsb2cuZGlzcGxheWVkLm5ldy10YXNrID4gZm9ybSA+IC5jbG9zZS10YXNrLWRpYWxvZyB7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbi1vdXQgNTUwbXM7XFxufVxcblxcblxcblxcbi5uZXctcHJvamVjdCxcXG4ubmV3LXRhc2ssXFxuLnRhc2stZGVsZXRlIHtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWxpZ2h0KTtcXG59XFxuXFxuLm5ldy1wcm9qZWN0ID4gZm9ybSxcXG4ubmV3LXRhc2sgPiBmb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi50YXNrLWRlbGV0ZSA+IGZvcm0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxufVxcblxcbi50YXNrLWRlbGV0ZSA+IGZvcm0gPiBkaXYge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi50YXNrLWRlbGV0ZSA+IGZvcm0gPiBidXR0b246bnRoLWNoaWxkKDEpIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxufVxcblxcbi50YXNrLWRlbGV0ZSA+IGZvcm0gPiBidXR0b246bnRoLWNoaWxkKDIpIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxufVxcblxcblxcbi5uZXctdGFzayA+IGZvcm0gPiAudGFzay1wcm9qZWN0LWZpZWxkLWRpdixcXG4ubmV3LXRhc2sgPiBmb3JtID4gLnRhc2stdGl0bGUtZmllbGQtZGl2LFxcbi5uZXctdGFzayA+IGZvcm0gPiAudGFzay1ub3Rlcy1maWVsZC1kaXYsXFxuLm5ldy10YXNrID4gZm9ybSA+IC50YXNrLXByaW9yaXR5LWZpZWxkLWRpdixcXG4ubmV3LXRhc2sgPiBmb3JtID4gLnRhc2stZGF0ZS1maWVsZC1kaXYsXFxuLm5ldy1wcm9qZWN0ID4gZm9ybSAgLnByb2plY3QtbmFtZS1maWVsZC1kaXYsXFxuLm5ldy1wcm9qZWN0ID4gZm9ybSAgLnByb2plY3QtY29sb3ItZmllbGQtZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm5ldy10YXNrID4gZm9ybSA+IC50YXNrLWRpYWxvZy1uYW1lLFxcbi5uZXctcHJvamVjdCA+IGZvcm0gPiAucHJvamVjdC1kaWFsb2ctbmFtZSB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbn1cXG5cXG4ubmV3LXRhc2sgPiBmb3JtID4gYnV0dG9uLFxcbi5uZXctcHJvamVjdCA+IGZvcm0gPiBidXR0b24ge1xcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIHZhcigtLWJvcmRlci1kYXJrKTtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktbGlnaHQpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcbi50YXNrLWRlbGV0ZSA+IGZvcm0gPiBidXR0b25bdHlwZT0nc3VibWl0J10sXFxuLnRhc2stZGVsZXRlID4gZm9ybSA+IGJ1dHRvblt0eXBlPSdjbG9zZSddIHtcXG4gICAgbWFyZ2luLXRvcDogMjVweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMC41cHggc29saWQgdmFyKC0tYm9yZGVyLWRhcmspO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2U7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1saWdodCk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2stZGVsZXRlID4gZm9ybSA+IGJ1dHRvblt0eXBlPSdzdWJtaXQnXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1saWdodCk7XFxufVxcblxcblxcbi50YXNrLWRlbGV0ZSA+IGZvcm0gPiBidXR0b25bdHlwZT0nY2xvc2UnXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtZGFyayk7XFxufVxcblxcbi5uZXctdGFzayA+IGZvcm0gPiBidXR0b246Zm9jdXMsXFxuLm5ldy1wcm9qZWN0ID4gZm9ybSA+IGJ1dHRvbjpmb2N1cyxcXG4udGFzay1kZWxldGUgPiBmb3JtID4gYnV0dG9uOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLm5ldy10YXNrID4gZm9ybSA+IGJ1dHRvbjpob3ZlcixcXG4ubmV3LXByb2plY3QgPiBmb3JtID4gYnV0dG9uOmhvdmVyIHtcXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCBibGFjaztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWNvbG9yKTtcXG59XFxuXFxuLm5ldy10YXNrID4gZm9ybSA+IGJ1dHRvbjphY3RpdmUsXFxuLm5ldy1wcm9qZWN0ID4gZm9ybSA+IGJ1dHRvbjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktZGFyayk7XFxufVxcblxcbi5uZXctdGFzayA+IGZvcm0gPiAuY2xvc2UtdGFzay1kaWFsb2csXFxuLm5ldy1wcm9qZWN0ID4gZm9ybSA+IC5jbG9zZS1wcm9qZWN0LWRpYWxvZyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgcmlnaHQ6IDEwcHg7XFxuICAgIHRvcDogMTBweDtcXG59XFxuXFxuLm5ldy10YXNrID4gZm9ybSA+IC5jbG9zZS10YXNrLWRpYWxvZyBzcGFuLFxcbi5uZXctcHJvamVjdCA+IGZvcm0gPiAuY2xvc2UtcHJvamVjdC1kaWFsb2cgc3BhbiB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIG9wYWNpdHk6IDAuNztcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4yNXMsIG9wYWNpdHkgMC4yNXM7XFxufVxcblxcbi5uZXctdGFzayA+IGZvcm0gPiAuY2xvc2UtdGFzay1kaWFsb2c6aG92ZXIgc3BhbixcXG4ubmV3LXByb2plY3QgPiBmb3JtID4gLmNsb3NlLXByb2plY3QtZGlhbG9nOmhvdmVyIHNwYW4ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgc2NhbGUoMS4xKTtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBEaWFsb2cgaW5wdXQgc3R5bGVzICovXFxuXFxuLm5ldy10YXNrID4gZm9ybSBpbnB1dCxcXG4ubmV3LXRhc2sgPiBmb3JtIHNlbGVjdCxcXG4ubmV3LXRhc2sgPiBmb3JtIHRleHRhcmVhLFxcbi5uZXctcHJvamVjdCA+IGZvcm0gaW5wdXQsXFxuLm5ldy1wcm9qZWN0ID4gZm9ybSBzZWxlY3QsXFxuLm5ldy1wcm9qZWN0ID4gZm9ybSB0ZXh0YXJlYSB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlcjogMC41cHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2U7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuLm5ldy10YXNrID4gZm9ybSBpbnB1dDpob3ZlcixcXG4ubmV3LXRhc2sgPiBmb3JtIHNlbGVjdDpob3ZlcixcXG4ubmV3LXRhc2sgPiBmb3JtIHRleHRhcmVhOmhvdmVyLFxcbi5uZXctcHJvamVjdCA+IGZvcm0gaW5wdXQ6aG92ZXIsXFxuLm5ldy1wcm9qZWN0ID4gZm9ybSBzZWxlY3Q6aG92ZXIsXFxuLm5ldy1wcm9qZWN0ID4gZm9ybSB0ZXh0YXJlYTpob3ZlciB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJvcmRlcjogMC41cHggc29saWQgYmxhY2s7XFxufVxcblxcbi5uZXctdGFzayA+IGZvcm0gaW5wdXQ6OnBsYWNlaG9sZGVyLFxcbi5uZXctdGFzayA+IGZvcm0gc2VsZWN0OjpwbGFjZWhvbGRlcixcXG4ubmV3LXRhc2sgPiBmb3JtIHRleHRhcmVhOjpwbGFjZWhvbGRlcixcXG4ubmV3LXByb2plY3QgPiBmb3JtIGlucHV0OjpwbGFjZWhvbGRlcixcXG4ubmV3LXByb2plY3QgPiBmb3JtIHNlbGVjdDo6cGxhY2Vob2xkZXIsXFxuLm5ldy1wcm9qZWN0ID4gZm9ybSB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLm5ldy10YXNrID4gZm9ybSB0ZXh0YXJlYSxcXG4ubmV3LXByb2plY3QgPiBmb3JtIHRleHRhcmVhIHtcXG4gICAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4ucHJvamVjdC1jb2xvci1maWVsZC1kaXYge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi5uZXctcHJvamVjdCA+IGZvcm0gI3Byb2plY3QtY29sb3Ige1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiA4MHB4O1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm5ldy1wcm9qZWN0ID4gZm9ybSAuaW5wdXQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG5cXG4uaWNvbiB7XFxuICAgIHdpZHRoOiAxNXB4O1xcbiAgICBoZWlnaHQ6IDE1cHg7XFxuICAgIC8qIGZpbGw6IHJlZDsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA4NTBweCkge1xcbiAgICBcXG59XFxuXFxuXFxuLm5vLXRhc2tzLWZpbGxlciB7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5cblxuLy8gUHJvamVjdCBtb2R1bGUgXG5jb25zdCBQcm9qZWN0TW9kdWxlID0gKGZ1bmN0aW9uKCkge1xuXG4gICAgLy8gUHJvamVjdHMgaW4gZGVmYXVsdCBjb25maWd1cmF0aW9uXG4gICAgbGV0IHByb2plY3RzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgIG5hbWU6ICdTcG9ydCcsXG4gICAgICAgICAgICBjb2xvcjogJyNkYWI4ZGUnLFxuICAgICAgICAgICAgYWN0aXZlOiAnZmFsc2UnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogMixcbiAgICAgICAgICAgIG5hbWU6ICdNYXRoJyxcbiAgICAgICAgICAgIGNvbG9yOiAnIzkzYzdiNCcsXG4gICAgICAgICAgICBhY3RpdmU6ICdmYWxzZScsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgICAgbmFtZTogJ1Byb2dyYW1taW5nJyxcbiAgICAgICAgICAgIGNvbG9yOiAnI2U4Y2ViNScsXG4gICAgICAgICAgICBhY3RpdmU6ICdmYWxzZScsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiA0LFxuICAgICAgICAgICAgbmFtZTogJ0xlaXN1cmUnLFxuICAgICAgICAgICAgY29sb3I6ICcjYTZiNWZmJyxcbiAgICAgICAgICAgIGFjdGl2ZTogJ2ZhbHNlJyxcbiAgICAgICAgfSxcbiAgICBdO1xuXG4gICAgbGV0IHByb2plY3RzQ291bnQgPSBwcm9qZWN0cy5sZW5ndGg7XG4gICAgXG4gICAgLy8gQWRkIG5ldyBwcm9qZWN0XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvamVjdChuYW1lLCBjb2xvcikge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0ge307XG4gICAgICAgIHByb2plY3RzQ291bnQgPSBwcm9qZWN0c0NvdW50ICsgMTtcbiAgICAgICAgcHJvamVjdC5pZCA9IHByb2plY3RzQ291bnQ7XG4gICAgICAgIHByb2plY3QubmFtZSA9IG5hbWU7XG4gICAgICAgIHByb2plY3QuY29sb3IgPSBjb2xvcjtcblxuICAgICAgICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuXG4gICAgICAgIHJldHVybiBwcm9qZWN0O1xuICAgIH1cblxuICAgIC8vIFJldHJpZXZlIGxpc3Qgb2YgcHJvamVjdHMgKG9iamVjdHMpXG4gICAgZnVuY3Rpb24gZ2V0UHJvamVjdE9iamVjdHMoKSB7XG4gICAgICAgIHJldHVybiBwcm9qZWN0cy5zbGljZSgpO1xuICAgIH1cblxuICAgIC8vIFJldHJpZXZlIGxpc3Qgb2YgcHJvamVjdCAodmFsdWVzKVxuICAgIGZ1bmN0aW9uIGdldFByb2plY3RWYWx1ZXMoKSB7XG4gICAgICAgIGxldCBwcm9qZWN0VmFsdWVzID0gW107XG4gICAgICAgIHByb2plY3RzLmZvckVhY2goKHApID0+IHtcbiAgICAgICAgICAgIHByb2plY3RWYWx1ZXMucHVzaChwLm5hbWUpO1xuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHByb2plY3RWYWx1ZXM7XG4gICAgfVxuXG4gICAgLy8gUmV0cmlldmUgdGhlIGlkIG9mIGEgcHJvamVjdCB0aGF0IG1hdGNoZXMgdGhlIHByb3ZpZGVkIG5hbWVcbiAgICBmdW5jdGlvbiBmaW5kSWRCeU5hbWUobmFtZSkge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdHMuZmluZChwcm9qZWN0ID0+IHByb2plY3QubmFtZSA9PT0gbmFtZSk7XG4gICAgICAgIHJldHVybiBwcm9qZWN0ID8gcHJvamVjdC5pZCA6IG51bGw7XG4gICAgfVxuXG4gICAgLy8gUmV0cmlldmUgdGhlIGNvbG9yIG9mIGEgcHJvamVjdCB0aGF0IG1hdGNoZXMgdGhlIHByb3ZpZGVkIG5hbWVcbiAgICBmdW5jdGlvbiBmaW5kQ29sb3JCeU5hbWUobmFtZSkge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdHMuZmluZChwcm9qZWN0ID0+IHByb2plY3QubmFtZSA9PT0gbmFtZSk7XG4gICAgICAgIHJldHVybiBwcm9qZWN0ID8gcHJvamVjdC5jb2xvciA6IG51bGw7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3JlYXRlUHJvamVjdCxcbiAgICAgICAgZ2V0UHJvamVjdE9iamVjdHMsXG4gICAgICAgIGdldFByb2plY3RWYWx1ZXMsXG4gICAgICAgIGZpbmRJZEJ5TmFtZSxcbiAgICAgICAgZmluZENvbG9yQnlOYW1lLFxuICAgIH1cbiAgICBcbn0pKCk7XG5cblxuLy8gVGFzayBtb2R1bGUgXG5jb25zdCBUYXNrTW9kdWxlID0gKGZ1bmN0aW9uKCkge1xuXG5cbiAgICAvLyBUaGlzIHNob3VsZCBiZSBpbiBkaWZmZXJlbnQgbW9kdWxlIChET00gbW9kdWxlIHBlcmhhcHMpXG4gICAgbGV0IGFjdGl2ZV92aWV3ID0gJ3RvZGF5JztcbiAgICBsZXQgYWN0aXZlX3Byb2plY3QgPSAnJztcblxuICAgIC8vIFRoaXMgc2hvdWxkIGJlIGluIGRpZmZlcmVudCBtb2R1bGUgKERPTSBtb2R1bGUgcGVyaGFwcylcbiAgICBmdW5jdGlvbiBjaGFuZ2VBY3RpdmVWaWV3KHZpZXcpIHtcbiAgICAgICAgYWN0aXZlX3ZpZXcgPSB2aWV3O1xuICAgIH1cblxuICAgIC8vIFRoaXMgc2hvdWxkIGJlIGluIGRpZmZlcmVudCBtb2R1bGUgKERPTSBtb2R1bGUgcGVyaGFwcylcbiAgICBmdW5jdGlvbiBnZXRBY3RpdmVWaWV3KCkge1xuICAgICAgICByZXR1cm4gYWN0aXZlX3ZpZXc7XG4gICAgfVxuXG5cbiAgICAvLyBUaGlzIHNob3VsZCBiZSBpbiBkaWZmZXJlbnQgbW9kdWxlIChET00gbW9kdWxlIHBlcmhhcHMpXG4gICAgZnVuY3Rpb24gY2hhbmdlQWN0aXZlUHJvamVjdChwcm9qZWN0KSB7XG4gICAgICAgIGFjdGl2ZV9wcm9qZWN0ID0gcHJvamVjdDtcbiAgICB9XG5cbiAgICAvLyBUaGlzIHNob3VsZCBiZSBpbiBkaWZmZXJlbnQgbW9kdWxlIChET00gbW9kdWxlIHBlcmhhcHMpICAgIFxuICAgIGZ1bmN0aW9uIGdldEFjdGl2ZVByb2plY3QoKSB7XG4gICAgICAgIHJldHVybiBhY3RpdmVfcHJvamVjdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxldGVUYXNrKHRhc2tJZCkge1xuICAgICAgICB0YXNrcyA9IHRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay5pZCAhPT0gdGFza0lkKTtcbiAgICB9XG5cblxuICAgIC8vIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTsgXG4gICAgLy8gY29uc3QgdG9tb3Jyb3cgPSBuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldFRpbWUoKSArIDI0ICogNjAgKiA2MCAqIDEwMDApO1xuICAgIC8vIGNvbnN0IGRheUFmdGVyVG9tb3Jyb3cgPSBuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldFRpbWUoKSArIDQ4ICogNjAgKiA2MCAqIDEwMDApO1xuXG4gICAgbGV0IHRhc2tzID0gW1xuICAgICAgICB7XG4gICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgIHByb2plY3RJZDogMSxcbiAgICAgICAgICAgIHByb2plY3ROYW1lOiAnU3BvcnQnLFxuICAgICAgICAgICAgcHJvamVjdENvbG9yOiAnI2RhYjhkZScsXG4gICAgICAgICAgICB0aXRsZTogJ0NvbXBsZXRlIEV4ZXJjaXNlIDEnLFxuICAgICAgICAgICAgbm90ZXM6ICdSZW1lbWJlciB0byBmb2N1cyBvbiB0aGUga2V5IGNvbmNlcHRzJyxcbiAgICAgICAgICAgIHByaW9yaXR5OiAnSGlnaCcsXG4gICAgICAgICAgICBkYXRlOiAnMjAyMy0xMS0yMicsXG4gICAgICAgICAgICBjb21wbGV0ZWQ6ICd0cnVlJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgICBwcm9qZWN0SWQ6IDIsXG4gICAgICAgICAgICBwcm9qZWN0TmFtZTogJ01hdGgnLFxuICAgICAgICAgICAgcHJvamVjdENvbG9yOiAnIzkzYzdiNCcsXG4gICAgICAgICAgICB0aXRsZTogJ1N0dWR5IEFsZ2VicmEnLFxuICAgICAgICAgICAgbm90ZXM6ICdSZXZpZXcgY2hhcHRlcnMgMyBhbmQgNCBmb3IgdGhlIHVwY29taW5nIHRlc3QnLFxuICAgICAgICAgICAgcHJpb3JpdHk6ICdNZWRpdW0nLFxuICAgICAgICAgICAgZGF0ZTogJzIwMjMtMTEtMjInLFxuICAgICAgICAgICAgY29tcGxldGVkOiAnZmFsc2UnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogMyxcbiAgICAgICAgICAgIHByb2plY3RJZDogMyxcbiAgICAgICAgICAgIHByb2plY3ROYW1lOiAnUHJvZ3JhbW1pbmcnLFxuICAgICAgICAgICAgcHJvamVjdENvbG9yOiAnI2U4Y2ViNScsXG4gICAgICAgICAgICB0aXRsZTogJ0NvZGUgUmV2aWV3IGZvciBQcm9qZWN0IFgnLFxuICAgICAgICAgICAgbm90ZXM6ICdBZGQgbm90ZXMgcmVnYXJkaW5nIGNvZGUgcXVhbGl0eSwgb3B0aW1pemF0aW9ucywgYW5kIHBvdGVudGlhbCBpbXByb3ZlbWVudHMgaGVyZS4gRW5zdXJlIGNvbXByZWhlbnNpdmUgY2hlY2tzIGZvciBzeW50YXggZXJyb3JzLCBhbGdvcml0aG1pYyBlZmZpY2llbmNpZXMsIGFuZCBiZXN0IHByYWN0aWNlcy4gUHJvdmlkZSBkZXRhaWxlZCBjb21tZW50cyBvbiBmdW5jdGlvbnMsIHZhcmlhYmxlcywgYW5kIGxvZ2ljIHRvIGVuaGFuY2UgcmVhZGFiaWxpdHkuJyxcbiAgICAgICAgICAgIHByaW9yaXR5OiAnSGlnaCcsXG4gICAgICAgICAgICBkYXRlOiAnMjAyMy0xMS0yMicsXG4gICAgICAgICAgICBjb21wbGV0ZWQ6ICdmYWxzZScsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiA0LFxuICAgICAgICAgICAgcHJvamVjdElkOiA0LFxuICAgICAgICAgICAgcHJvamVjdE5hbWU6ICdMZWlzdXJlJyxcbiAgICAgICAgICAgIHByb2plY3RDb2xvcjogJyNhNmI1ZmYnLFxuICAgICAgICAgICAgdGl0bGU6ICdCdXkgZ3JvY2VyaWVzJyxcbiAgICAgICAgICAgIG5vdGVzOiAnTWlsaywgZWdncywgYnJlYWQsIGFuZCBmcnVpdHMnLFxuICAgICAgICAgICAgcHJpb3JpdHk6ICdMb3cnLFxuICAgICAgICAgICAgZGF0ZTogJzIwMjMtMTEtMjMnLFxuICAgICAgICAgICAgY29tcGxldGVkOiAnZmFsc2UnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogNSxcbiAgICAgICAgICAgIHByb2plY3RJZDogMSxcbiAgICAgICAgICAgIHByb2plY3ROYW1lOiAnU3BvcnQnLFxuICAgICAgICAgICAgcHJvamVjdENvbG9yOiAnI2RhYjhkZScsXG4gICAgICAgICAgICB0aXRsZTogJ1JlYWQgXCJUaGUgR3JlYXQgR2F0c2J5XCInLFxuICAgICAgICAgICAgbm90ZXM6ICdDb21wbGV0ZSBjaGFwdGVycyAxLTMgYnkgdGhlIGVuZCBvZiB0aGUgd2VlaycsXG4gICAgICAgICAgICBwcmlvcml0eTogJ01lZGl1bScsXG4gICAgICAgICAgICBkYXRlOiAnMjAyMy0xMS0yMycsXG4gICAgICAgICAgICBjb21wbGV0ZWQ6ICd0cnVlJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDYsXG4gICAgICAgICAgICBwcm9qZWN0SWQ6IDIsXG4gICAgICAgICAgICBwcm9qZWN0TmFtZTogJ01hdGgnLFxuICAgICAgICAgICAgcHJvamVjdENvbG9yOiAnIzkzYzdiNCcsXG4gICAgICAgICAgICB0aXRsZTogJ1ByZXBhcmUgcHJlc2VudGF0aW9uIHNsaWRlcycsXG4gICAgICAgICAgICBub3RlczogJ0luY29ycG9yYXRlIGZlZWRiYWNrIGZyb20gdGVhbSBtZW1iZXJzJyxcbiAgICAgICAgICAgIHByaW9yaXR5OiAnSGlnaCcsXG4gICAgICAgICAgICBkYXRlOiAnMjAyMy0xMS0yMycsXG4gICAgICAgICAgICBjb21wbGV0ZWQ6ICdmYWxzZScsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiA3LFxuICAgICAgICAgICAgcHJvamVjdElkOiAzLFxuICAgICAgICAgICAgcHJvamVjdE5hbWU6ICdQcm9ncmFtbWluZycsXG4gICAgICAgICAgICBwcm9qZWN0Q29sb3I6ICcjZThjZWI1JyxcbiAgICAgICAgICAgIHRpdGxlOiAnUHJhY3RpY2UgZ3VpdGFyJyxcbiAgICAgICAgICAgIG5vdGVzOiAnTGVhcm4gbmV3IGNob3JkcyBhbmQgcHJhY3RpY2Ugc2NhbGVzJyxcbiAgICAgICAgICAgIHByaW9yaXR5OiAnTWVkaXVtJyxcbiAgICAgICAgICAgIGRhdGU6ICcyMDIzLTExLTI0JyxcbiAgICAgICAgICAgIGNvbXBsZXRlZDogJ2ZhbHNlJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDgsXG4gICAgICAgICAgICBwcm9qZWN0SWQ6IDQsXG4gICAgICAgICAgICBwcm9qZWN0TmFtZTogJ0xlaXN1cmUnLFxuICAgICAgICAgICAgcHJvamVjdENvbG9yOiAnI2E2YjVmZicsXG4gICAgICAgICAgICB0aXRsZTogJ1dyaXRlIGRvY3VtZW50YXRpb24nLFxuICAgICAgICAgICAgbm90ZXM6ICdEb2N1bWVudCB0aGUgbmV3IEFQSSBlbmRwb2ludHMnLFxuICAgICAgICAgICAgcHJpb3JpdHk6ICdIaWdoJyxcbiAgICAgICAgICAgIGRhdGU6ICcyMDIzLTExLTI0JyxcbiAgICAgICAgICAgIGNvbXBsZXRlZDogJ2ZhbHNlJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDksXG4gICAgICAgICAgICBwcm9qZWN0SWQ6IDQsXG4gICAgICAgICAgICBwcm9qZWN0TmFtZTogJ0xlaXN1cmUnLFxuICAgICAgICAgICAgcHJvamVjdENvbG9yOiAnI2E2YjVmZicsXG4gICAgICAgICAgICB0aXRsZTogJ1dyaXRlIGRvY3VtZW50YXRpb24nLFxuICAgICAgICAgICAgbm90ZXM6ICdEb2N1bWVudCB0aGUgbmV3IEFQSSBlbmRwb2ludHMnLFxuICAgICAgICAgICAgcHJpb3JpdHk6ICdIaWdoJyxcbiAgICAgICAgICAgIGRhdGU6ICcyMDIzLTExLTI0JyxcbiAgICAgICAgICAgIGNvbXBsZXRlZDogJ2ZhbHNlJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDEwLFxuICAgICAgICAgICAgcHJvamVjdElkOiA0LFxuICAgICAgICAgICAgcHJvamVjdE5hbWU6ICdMZWlzdXJlJyxcbiAgICAgICAgICAgIHByb2plY3RDb2xvcjogJyNhNmI1ZmYnLFxuICAgICAgICAgICAgdGl0bGU6ICdXcml0ZSBkb2N1bWVudGF0aW9uJyxcbiAgICAgICAgICAgIG5vdGVzOiAnRG9jdW1lbnQgdGhlIG5ldyBBUEkgZW5kcG9pbnRzJyxcbiAgICAgICAgICAgIHByaW9yaXR5OiAnSGlnaCcsXG4gICAgICAgICAgICBkYXRlOiAnMjAyMy0xMS0yNCcsXG4gICAgICAgICAgICBjb21wbGV0ZWQ6ICdmYWxzZScsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAxMSxcbiAgICAgICAgICAgIHByb2plY3RJZDogNCxcbiAgICAgICAgICAgIHByb2plY3ROYW1lOiAnTGVpc3VyZScsXG4gICAgICAgICAgICBwcm9qZWN0Q29sb3I6ICcjYTZiNWZmJyxcbiAgICAgICAgICAgIHRpdGxlOiAnV3JpdGUgZG9jdW1lbnRhdGlvbicsXG4gICAgICAgICAgICBub3RlczogJ0RvY3VtZW50IHRoZSBuZXcgQVBJIGVuZHBvaW50cycsXG4gICAgICAgICAgICBwcmlvcml0eTogJ0hpZ2gnLFxuICAgICAgICAgICAgZGF0ZTogJzIwMjMtMTEtMjQnLFxuICAgICAgICAgICAgY29tcGxldGVkOiAnZmFsc2UnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogMTIsXG4gICAgICAgICAgICBwcm9qZWN0SWQ6IDQsXG4gICAgICAgICAgICBwcm9qZWN0TmFtZTogJ0xlaXN1cmUnLFxuICAgICAgICAgICAgcHJvamVjdENvbG9yOiAnI2E2YjVmZicsXG4gICAgICAgICAgICB0aXRsZTogJ1dyaXRlIGRvY3VtZW50YXRpb24nLFxuICAgICAgICAgICAgbm90ZXM6ICdEb2N1bWVudCB0aGUgbmV3IEFQSSBlbmRwb2ludHMnLFxuICAgICAgICAgICAgcHJpb3JpdHk6ICdIaWdoJyxcbiAgICAgICAgICAgIGRhdGU6ICcyMDIzLTExLTI0JyxcbiAgICAgICAgICAgIGNvbXBsZXRlZDogJ2ZhbHNlJyxcbiAgICAgICAgfSxcblxuICAgICAgICBcblxuICAgIF07XG4gICAgXG4gICAgbGV0IHRhc2tzQ291bnQgPSB0YXNrcy5sZW5ndGg7XG5cbiAgICAvLyBBZGQgbmV3IHRhc2sgb2JqZWN0XG4gICAgZnVuY3Rpb24gY3JlYXRlVGFzayhwcm9qZWN0TmFtZSwgdGl0bGUsIG5vdGVzLCBkYXRlKSB7XG4gICAgICAgIGNvbnN0IHRhc2sgPSB7fTtcbiAgICAgICAgdGFza3NDb3VudCA9IHRhc2tzQ291bnQgKyAxO1xuICAgICAgICB0YXNrLmlkID0gdGFza3NDb3VudDtcbiAgICAgICAgdGFzay5wcm9qZWN0SWQgPSBQcm9qZWN0TW9kdWxlLmZpbmRJZEJ5TmFtZShwcm9qZWN0TmFtZSk7XG4gICAgICAgIHRhc2sucHJvamVjdE5hbWUgPSBwcm9qZWN0TmFtZTtcbiAgICAgICAgdGFzay5wcm9qZWN0Q29sb3IgPSBQcm9qZWN0TW9kdWxlLmZpbmRDb2xvckJ5TmFtZShwcm9qZWN0TmFtZSk7XG4gICAgICAgIHRhc2sudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGFzay5ub3RlcyA9IG5vdGVzO1xuICAgICAgICAvLyB0YXNrLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRhc2suZGF0ZSA9IGRhdGU7XG4gIFxuICAgICAgICB0YXNrcy5wdXNoKHRhc2spO1xuICAgICAgICByZXR1cm4gdGFzaztcbiAgICB9XG5cbiAgICAvLyBSZXRyaWV2ZSBhbGwgdGFza3NcbiAgICBmdW5jdGlvbiBnZXRBbGxUYXNrcygpIHtcbiAgICAgICAgY2hhbmdlQWN0aXZlVmlldygnYWxsJyk7XG4gICAgICAgIHJldHVybiB0YXNrcy5zbGljZSgpO1xuICAgIH1cblxuICAgIC8vIFJldHJpZXZlIHRvZGF5J3MgdGFza3NcbiAgICBmdW5jdGlvbiBnZXRUb2RheVRhc2tzKCkge1xuICAgICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7ICAgICAgICBcbiAgICAgICAgY29uc3QgdGFza3NUb1JldHVybiA9IFtdO1xuICAgICAgICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkYXRlU3RyaW5nID0gdGFzay5kYXRlO1xuICAgICAgICAgICAgY29uc3QgZGF0ZVBhcnRzID0gZGF0ZVN0cmluZy5zcGxpdChcIi1cIik7XG5cbiAgICAgICAgICAgIGNvbnN0IHllYXIgPSBwYXJzZUludChkYXRlUGFydHNbMF0pO1xuICAgICAgICAgICAgY29uc3QgbW9udGggPSBwYXJzZUludChkYXRlUGFydHNbMV0pO1xuICAgICAgICAgICAgY29uc3QgZGF0ZSA9IHBhcnNlSW50KGRhdGVQYXJ0c1syXSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHRhc2tEYXRlID0gbmV3IERhdGUoeWVhciwgbW9udGggLSAxLCBkYXRlKTtcblxuICAgICAgICAgICAgY29uc3QgaXNTYW1lWWVhciA9IHRhc2tEYXRlLmdldEZ1bGxZZWFyKCkgPT09IHRvZGF5LmdldEZ1bGxZZWFyKCk7XG4gICAgICAgICAgICBjb25zdCBpc1NhbWVNb250aCA9IHRhc2tEYXRlLmdldE1vbnRoKCkgPT09IHRvZGF5LmdldE1vbnRoKCk7XG4gICAgICAgICAgICBjb25zdCBpc1NhbWVEYXkgPSB0YXNrRGF0ZS5nZXREYXRlKCkgPT09IHRvZGF5LmdldERhdGUoKTtcblxuXG4gICAgICAgICAgICBpZiAoaXNTYW1lWWVhciAmJiBpc1NhbWVNb250aCAmJiBpc1NhbWVEYXkpIHtcbiAgICAgICAgICAgICAgICB0YXNrc1RvUmV0dXJuLnB1c2godGFzayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgY2hhbmdlQWN0aXZlVmlldygndG9kYXknKTtcbiAgICAgICAgcmV0dXJuIHRhc2tzVG9SZXR1cm47XG4gICAgfVxuXG4gICAgLy8gUmV0cmlldmUgdG9tb3Jyb3cncyB0YXNrc1xuICAgIGZ1bmN0aW9uIGdldFRvbW9ycm93VGFza3MoKSB7XG5cbiAgICAgICAgY29uc3QgdG9tb3Jyb3cgPSBuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldFRpbWUoKSArIDI0ICogNjAgKiA2MCAqIDEwMDApOyAgICAgICBcbiAgICAgICAgY29uc3QgdGFza3NUb1JldHVybiA9IFtdO1xuICAgICAgICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkYXRlU3RyaW5nID0gdGFzay5kYXRlO1xuICAgICAgICAgICAgY29uc3QgZGF0ZVBhcnRzID0gZGF0ZVN0cmluZy5zcGxpdChcIi1cIik7XG5cbiAgICAgICAgICAgIGNvbnN0IHllYXIgPSBwYXJzZUludChkYXRlUGFydHNbMF0pO1xuICAgICAgICAgICAgY29uc3QgbW9udGggPSBwYXJzZUludChkYXRlUGFydHNbMV0pO1xuICAgICAgICAgICAgY29uc3QgZGF0ZSA9IHBhcnNlSW50KGRhdGVQYXJ0c1syXSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHRhc2tEYXRlID0gbmV3IERhdGUoeWVhciwgbW9udGggLSAxLCBkYXRlKTtcblxuICAgICAgICAgICAgY29uc3QgaXNTYW1lWWVhciA9IHRhc2tEYXRlLmdldEZ1bGxZZWFyKCkgPT09IHRvbW9ycm93LmdldEZ1bGxZZWFyKCk7XG4gICAgICAgICAgICBjb25zdCBpc1NhbWVNb250aCA9IHRhc2tEYXRlLmdldE1vbnRoKCkgPT09IHRvbW9ycm93LmdldE1vbnRoKCk7XG4gICAgICAgICAgICBjb25zdCBpc1NhbWVEYXkgPSB0YXNrRGF0ZS5nZXREYXRlKCkgPT09IHRvbW9ycm93LmdldERhdGUoKTtcblxuXG4gICAgICAgICAgICBpZiAoaXNTYW1lWWVhciAmJiBpc1NhbWVNb250aCAmJiBpc1NhbWVEYXkpIHtcbiAgICAgICAgICAgICAgICB0YXNrc1RvUmV0dXJuLnB1c2godGFzayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgY2hhbmdlQWN0aXZlVmlldygndG9tb3Jyb3cnKTtcbiAgICAgICAgcmV0dXJuIHRhc2tzVG9SZXR1cm47XG5cblxuICAgIH1cblxuICAgIC8vIFJldHJpZXZlIHRhc2tzIGZyb20gYWN0aXZlIHZpZXdcbiAgICBmdW5jdGlvbiBnZXRUYXNrc0Zyb21BY3RpdmVWaWV3KCkge1xuICAgICAgICBpZiAoZ2V0QWN0aXZlVmlldygpID09PSAndG9kYXknKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0VG9kYXlUYXNrcygpO1xuICAgICAgICB9IGVsc2UgaWYgKGdldEFjdGl2ZVZpZXcoKSA9PT0gJ3RvbW9ycm93Jykge1xuICAgICAgICAgICAgcmV0dXJuIGdldFRvbW9ycm93VGFza3MoKTtcbiAgICAgICAgfSBlbHNlIGlmIChnZXRBY3RpdmVWaWV3KCkgPT09ICdhbGwnKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0QWxsVGFza3MoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHJpZXZlIGEgcHJvamVjdCdzIHRhc2tzXG4gICAgZnVuY3Rpb24gZ2V0UHJvamVjdFRhc2tzKHByb2plY3QsIHRhc2tzKSB7XG4gICAgICAgIGlmIChwcm9qZWN0ID09ICcnKSB7XG4gICAgICAgICAgICByZXR1cm4gdGFza3M7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0YXNrc1RvUmV0dXJuID0gW107XG4gICAgICAgIFxuICAgICAgICB0YXNrcy5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgaWYgKHRhc2sucHJvamVjdE5hbWUgPT0gcHJvamVjdCkge1xuICAgICAgICAgICAgICAgIHRhc2tzVG9SZXR1cm4ucHVzaCh0YXNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICBjaGFuZ2VBY3RpdmVQcm9qZWN0KHByb2plY3QpO1xuXG4gICAgICAgIHJldHVybiB0YXNrc1RvUmV0dXJuO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGNyZWF0ZVRhc2ssXG4gICAgICAgIGdldEFsbFRhc2tzLFxuICAgICAgICBnZXRUb2RheVRhc2tzLFxuICAgICAgICBnZXRUb21vcnJvd1Rhc2tzLFxuICAgICAgICBjaGFuZ2VBY3RpdmVWaWV3LFxuICAgICAgICBnZXRBY3RpdmVWaWV3LFxuICAgICAgICBjaGFuZ2VBY3RpdmVQcm9qZWN0LFxuICAgICAgICBnZXRBY3RpdmVQcm9qZWN0LFxuICAgICAgICBnZXRQcm9qZWN0VGFza3MsXG4gICAgICAgIGdldFRhc2tzRnJvbUFjdGl2ZVZpZXcsXG4gICAgICAgIGRlbGV0ZVRhc2ssXG4gICAgfVxuICAgIFxufSkoKTtcblxuXG4vLyBET00gbW9kdWxlXG5jb25zdCBET01Nb2R1bGUgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZU1haW5EaXYoKSB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgICAgIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWFpbkRpdi5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG4gICAgICAgIGJvZHkuYXBwZW5kKG1haW5EaXYpO1xuICAgIH1cblxuICAgIGNvbnN0IGNyZWF0ZURpYWxvZ3MgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgICAgICAvLyBuZXdQcm9qZWN0RGlhbG9nSGFuZGxlcigpO1xuICAgICAgICAvLyBuZXdUYXNrRGlhbG9nSGFuZGxlcigpO1xuXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVRhc2tEZWxldGVEaWFsb2coKSB7XG4gICAgICAgICAgICBjb25zdCB0YXNrRGVsZXRlRGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJyk7XG4gICAgICAgICAgICB0YXNrRGVsZXRlRGlhbG9nLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGVsZXRlJywgJ2hpZGRlbicpO1xuXG4gICAgICAgICAgICBjb25zdCBkZWxldGVDb25maXJtRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgICAgIHRhc2tEZWxldGVEaWFsb2cuYXBwZW5kKGRlbGV0ZUNvbmZpcm1Gb3JtKTtcblxuICAgICAgICAgICAgY29uc3QgZGVsZXRlQ29uZmlybVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGRlbGV0ZUNvbmZpcm1UZXh0LmNsYXNzTGlzdC5hZGQoJ2NvbmZpcm0tdGV4dCcpO1xuICAgICAgICAgICAgZGVsZXRlQ29uZmlybVRleHQudGV4dENvbnRlbnQgPSBcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyB0YXNrP1wiXG4gICAgICAgICAgICBkZWxldGVDb25maXJtRm9ybS5hcHBlbmQoZGVsZXRlQ29uZmlybVRleHQpO1xuXG4gICAgICAgICAgICBjb25zdCBkZWxldGVDb25maXJtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBkZWxldGVDb25maXJtQnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgICAgICAgICAgIGRlbGV0ZUNvbmZpcm1CdXR0b24udGV4dENvbnRlbnQgPSAnQ29uZmlybSc7XG4gICAgICAgICAgICBkZWxldGVDb25maXJtRm9ybS5hcHBlbmQoZGVsZXRlQ29uZmlybUJ1dHRvbik7XG5cbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgZGVsZXRlQ2FuY2VsQnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdjbG9zZScpO1xuICAgICAgICAgICAgZGVsZXRlQ2FuY2VsQnV0dG9uLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG4gICAgICAgICAgICBkZWxldGVDb25maXJtRm9ybS5hcHBlbmQoZGVsZXRlQ2FuY2VsQnV0dG9uKTtcblxuICAgICAgICAgICAgYm9keS5hcHBlbmQodGFza0RlbGV0ZURpYWxvZyk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0RGVsZXRlRGlhbG9nKCkge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdERlbGV0ZURpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpYWxvZycpO1xuICAgICAgICAgICAgcHJvamVjdERlbGV0ZURpYWxvZy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWRlbGV0ZScsICdoaWRkZW4nKTtcbiAgICAgICAgICAgIGJvZHkuYXBwZW5kKHByb2plY3REZWxldGVEaWFsb2cpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gbmV3UHJvamVjdERpYWxvZ0hhbmRsZXIoKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdQcm9qZWN0RGlhbG9nID0gY3JlYXRlUHJvamVjdERpYWxvZygpO1xuICAgICAgICAgICAgY29uc3QgbmV3UHJvamVjdERpYWxvZ0Zvcm0gPSBjcmVhdGVQcm9qZWN0RGlhbG9nRm9ybSgpO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0RGlhbG9nKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Byb2plY3REaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaWFsb2cnKTtcbiAgICAgICAgICAgICAgICBuZXdQcm9qZWN0RGlhbG9nLmNsYXNzTGlzdC5hZGQoJ25ldy1wcm9qZWN0JywgJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgIGJvZHkuYXBwZW5kKG5ld1Byb2plY3REaWFsb2cpO1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXdQcm9qZWN0RGlhbG9nO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0RGlhbG9nRm9ybSgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdQcm9qZWN0RGlhbG9nRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgICAgICAgICBuZXdQcm9qZWN0RGlhbG9nLmFwcGVuZChuZXdQcm9qZWN0RGlhbG9nRm9ybSk7XG4gICAgICAgICAgICAgICAgbmV3UHJvamVjdERpYWxvZ0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpYWxvZy5uZXctcHJvamVjdCA+IGZvcm0gaW5wdXQjcHJvamVjdC1uYW1lJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RDb2xvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpYWxvZy5uZXctcHJvamVjdCA+IGZvcm0gaW5wdXQjcHJvamVjdC1jb2xvcicpO1xuICAgICAgICAgICAgICAgICAgICBQcm9qZWN0TW9kdWxlLmNyZWF0ZVByb2plY3QocHJvamVjdE5hbWUudmFsdWUsIHByb2plY3RDb2xvci52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIERPTU1vZHVsZS5jcmVhdGVMZWZ0RGl2LmNyZWF0ZVByb2plY3RzKFByb2plY3RNb2R1bGUuZ2V0UHJvamVjdE9iamVjdHMoKSk7XG4gICAgICAgICAgICAgICAgICAgIERPTU1vZHVsZS5jcmVhdGVEaWFsb2dzLm5ld1Rhc2tEaWFsb2dIYW5kbGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgZGlhbG9nTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGRpYWxvZ05hbWUuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1kaWFsb2ctbmFtZScpO1xuICAgICAgICAgICAgICAgIGRpYWxvZ05hbWUudGV4dENvbnRlbnQgPSAnTmV3IFByb2plY3QnO1xuICAgICAgICAgICAgICAgIG5ld1Byb2plY3REaWFsb2dGb3JtLmFwcGVuZChkaWFsb2dOYW1lKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnaW5wdXQtY29udGFpbmVyJyk7XG4gICAgICAgICAgICAgICAgbmV3UHJvamVjdERpYWxvZ0Zvcm0uYXBwZW5kKGlucHV0Q29udGFpbmVyKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IG5hbWVGaWVsZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIG5hbWVGaWVsZERpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LW5hbWUtZmllbGQtZGl2Jyk7XG4gICAgICAgICAgICAgICAgaW5wdXRDb250YWluZXIuYXBwZW5kKG5hbWVGaWVsZERpdik7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBuYW1lRmllbGRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICAgICAgbmFtZUZpZWxkTGFiZWwudGV4dENvbnRlbnQgPSAnTmFtZSonO1xuICAgICAgICAgICAgICAgIG5hbWVGaWVsZExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3Byb2plY3QtbmFtZScpO1xuICAgICAgICAgICAgICAgIG5hbWVGaWVsZERpdi5hcHBlbmQobmFtZUZpZWxkTGFiZWwpO1xuICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IG5hbWVGaWVsZElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICBuYW1lRmllbGRJbnB1dC50ZXh0Q29udGVudCA9ICdOYW1lJztcbiAgICAgICAgICAgICAgICBuYW1lRmllbGRJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpO1xuICAgICAgICAgICAgICAgIG5hbWVGaWVsZElucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdC1uYW1lJyk7XG4gICAgICAgICAgICAgICAgbmFtZUZpZWxkSW5wdXQuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdBd2Vzb21lIHByb2plY3QuLi4nKTtcbiAgICAgICAgICAgICAgICBuYW1lRmllbGRJbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlcXVpcmVkJywgJ3JlcXVpcmVkJyk7XG4gICAgICAgICAgICAgICAgbmFtZUZpZWxkRGl2LmFwcGVuZChuYW1lRmllbGRJbnB1dCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBjb2xvckZpZWxkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgY29sb3JGaWVsZERpdi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0LWNvbG9yLWZpZWxkLWRpdicpO1xuICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyLmFwcGVuZChjb2xvckZpZWxkRGl2KTtcbiAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBjb2xvckZpZWxkTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgICAgIGNvbG9yRmllbGRMYWJlbC50ZXh0Q29udGVudCA9ICdDb2xvcic7XG4gICAgICAgICAgICAgICAgY29sb3JGaWVsZExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ3Byb2plY3QtY29sb3InKTtcbiAgICAgICAgICAgICAgICBjb2xvckZpZWxkRGl2LmFwcGVuZChjb2xvckZpZWxkTGFiZWwpO1xuICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbG9yRmllbGRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgY29sb3JGaWVsZElucHV0LnRleHRDb250ZW50ID0gJ0NvbG9yJztcbiAgICAgICAgICAgICAgICBjb2xvckZpZWxkSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NvbG9yJyk7XG4gICAgICAgICAgICAgICAgY29sb3JGaWVsZElucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCAncHJvamVjdC1jb2xvcicpO1xuICAgICAgICAgICAgICAgIGNvbG9yRmllbGREaXYuYXBwZW5kKGNvbG9yRmllbGRJbnB1dCk7XG4gICAgXG4gICAgICAgICAgICAgICAgY29uc3Qgc3VibWl0UHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIHN1Ym1pdFByb2plY3RCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICAgICAgICAgICAgICAgIHN1Ym1pdFByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSAnU2F2ZSc7XG4gICAgICAgICAgICAgICAgbmV3UHJvamVjdERpYWxvZ0Zvcm0uYXBwZW5kKHN1Ym1pdFByb2plY3RCdXR0b24pO1xuICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IGNsb3NlUHJvamVjdERpYWxvZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGNsb3NlUHJvamVjdERpYWxvZ0Rpdi5jbGFzc0xpc3QuYWRkKCdjbG9zZS1wcm9qZWN0LWRpYWxvZycpO1xuICAgICAgICAgICAgICAgIG5ld1Byb2plY3REaWFsb2dGb3JtLmFwcGVuZChjbG9zZVByb2plY3REaWFsb2dEaXYpO1xuICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IGNsb3NlUHJvamVjdERpYWxvZ1NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICAgICAgY2xvc2VQcm9qZWN0RGlhbG9nU3Bhbi5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkJyk7XG4gICAgICAgICAgICAgICAgY2xvc2VQcm9qZWN0RGlhbG9nU3Bhbi50ZXh0Q29udGVudCA9ICdjbG9zZSc7XG4gICAgICAgICAgICAgICAgY2xvc2VQcm9qZWN0RGlhbG9nRGl2LmFwcGVuZChjbG9zZVByb2plY3REaWFsb2dTcGFuKTtcblxuICAgICAgICAgICAgICAgIC8vIEFkZCBjbG9zZSBhbmltYXRpb24gb24gU2F2ZSBhbmQgQ2xvc2VcbiAgICAgICAgICAgICAgICBoYW5kbGVDbG9zZUFuaW1hdGlvbihuZXdQcm9qZWN0RGlhbG9nRm9ybSwgbmV3UHJvamVjdERpYWxvZywgJ3N1Ym1pdCcsIG5ld1Byb2plY3REaWFsb2dGb3JtKTtcbiAgICAgICAgICAgICAgICBoYW5kbGVDbG9zZUFuaW1hdGlvbihjbG9zZVByb2plY3REaWFsb2dTcGFuLCBuZXdQcm9qZWN0RGlhbG9nLCAnY2xpY2snLCBuZXdQcm9qZWN0RGlhbG9nRm9ybSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3UHJvamVjdERpYWxvZ0Zvcm07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBuZXdUYXNrRGlhbG9nSGFuZGxlcigpIHtcblxuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdUYXNrRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10YXNrJyk7XG4gICAgICAgICAgICBpZiAoZXhpc3RpbmdUYXNrRGlhbG9nKSB7XG4gICAgICAgICAgICAgICAgZXhpc3RpbmdUYXNrRGlhbG9nLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBuZXdUYXNrRGlhbG9nID0gY3JlYXRlVGFza0RpYWxvZygpO1xuICAgICAgICAgICAgY29uc3QgbmV3VGFza0RpYWxvZ0Zvcm0gPSBjcmVhdGVUYXNrRGlhbG9nRm9ybSgpO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVUYXNrRGlhbG9nKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Rhc2tEaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaWFsb2cnKTtcbiAgICAgICAgICAgICAgICBuZXdUYXNrRGlhbG9nLmNsYXNzTGlzdC5hZGQoJ25ldy10YXNrJywgJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgIGJvZHkuYXBwZW5kKG5ld1Rhc2tEaWFsb2cpO1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXdUYXNrRGlhbG9nO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVUYXNrRGlhbG9nRm9ybSgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBleGlzdGluZ1Rhc2tEaWFsb2dGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy10YXNrID4gZm9ybScpO1xuICAgICAgICAgICAgICAgIGlmIChleGlzdGluZ1Rhc2tEaWFsb2dGb3JtKSB7XG4gICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nVGFza0RpYWxvZ0Zvcm0ucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Rhc2tEaWFsb2dGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgICAgICAgICAgIG5ld1Rhc2tEaWFsb2cuYXBwZW5kKG5ld1Rhc2tEaWFsb2dGb3JtKTtcbiAgICAgICAgICAgICAgICBuZXdUYXNrRGlhbG9nRm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGlhbG9nLm5ldy10YXNrID4gZm9ybSAjdGFzay1wcm9qZWN0Jyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpYWxvZy5uZXctdGFzayA+IGZvcm0gI3Rhc2stdGl0bGUnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFza05vdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGlhbG9nLm5ldy10YXNrID4gZm9ybSAjdGFzay1ub3RlcycpO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaWFsb2cubmV3LXRhc2sgPiBmb3JtICN0YXNrLXByaW9yaXR5Jyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGlhbG9nLm5ldy10YXNrID4gZm9ybSAjdGFzay1kYXRlJyk7XG4gICAgICAgICAgICAgICAgICAgIFRhc2tNb2R1bGUuY3JlYXRlVGFzayh0YXNrUHJvamVjdC52YWx1ZSwgdGFza1RpdGxlLnZhbHVlLCB0YXNrTm90ZXMudmFsdWUsIHRhc2tEYXRlLnZhbHVlKTtcblxuICAgICAgICAgICAgICAgICAgICBET01Nb2R1bGUuY3JlYXRlUmlnaHREaXYuY3JlYXRlVGFza3MoVGFza01vZHVsZS5nZXRQcm9qZWN0VGFza3MoVGFza01vZHVsZS5nZXRBY3RpdmVQcm9qZWN0KCksIFRhc2tNb2R1bGUuZ2V0VGFza3NGcm9tQWN0aXZlVmlldygpKSk7XG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIGNvbnN0IGRpYWxvZ05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBkaWFsb2dOYW1lLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGlhbG9nLW5hbWUnKTtcbiAgICAgICAgICAgICAgICBkaWFsb2dOYW1lLnRleHRDb250ZW50ID0gJ05ldyBUYXNrJztcbiAgICAgICAgICAgICAgICBuZXdUYXNrRGlhbG9nRm9ybS5hcHBlbmQoZGlhbG9nTmFtZSk7XG4gICAgXG5cbiAgICAgICAgICAgICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybWF0dGVEYXRlID0gdG9kYXkudG9JU09TdHJpbmcoKS5zcGxpdCgnVCcpWzBdO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3VGFza0RpYWxvZ0ZpZWxkc1RlbXBsYXRlID0gW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50X3R5cGU6ICdzZWxlY3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGl2X2NsYXNzOiAndGFzay1wcm9qZWN0LWZpZWxkLWRpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50X2lkOiAndGFzay1wcm9qZWN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0X3R5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnUHJvamVjdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q29udGVudDogJ1Byb2plY3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0X29wdGlvbnM6IFByb2plY3RNb2R1bGUuZ2V0UHJvamVjdFZhbHVlcygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yX3N0eWxlOiAncG9pbnRlcicsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRfdHlwZTogJ2lucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdl9jbGFzczogJ3Rhc2stdGl0bGUtZmllbGQtZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRfaWQ6ICd0YXNrLXRpdGxlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0X3R5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnVGl0bGUgKicsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q29udGVudDogJ1RpdGxlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfcGxhY2Vob2xkZXI6ICdSZWFkIGEgYm9vaycsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogJ3JlcXVpcmVkJyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudF90eXBlOiAndGV4dGFyZWEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGl2X2NsYXNzOiAndGFzay1ub3Rlcy1maWVsZC1kaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudF9pZDogJ3Rhc2stbm90ZXMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRfdHlwZTogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ05vdGVzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDb250ZW50OiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRfcGxhY2Vob2xkZXI6ICdBdCBsZWFzdCBhIHBhZ2UnLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBlbGVtZW50X3R5cGU6ICdzZWxlY3QnLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgZGl2X2NsYXNzOiAndGFzay1wcmlvcml0eS1maWVsZC1kaXYnLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgZWxlbWVudF9pZDogJ3Rhc2stcHJpb3JpdHknLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgaW5wdXRfdHlwZTogJycsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBsYWJlbDogJ1ByaW9yaXR5JyxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRleHRDb250ZW50OiAnUHJpb3JpdHknLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgc2VsZWN0X29wdGlvbnM6IFsnSGlnaCcsICdOb3JtYWwnLCAnTG93J10sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBzZWxlY3RfZGVmYXVsdDogJ05vcm1hbCcsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBjdXJzb3Jfc3R5bGU6ICdwb2ludGVyJyxcbiAgICAgICAgICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudF90eXBlOiAnaW5wdXQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGl2X2NsYXNzOiAndGFzay1kYXRlLWZpZWxkLWRpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50X2lkOiAndGFzay1kYXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0X3R5cGU6ICdkYXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnRGF0ZSAqJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDb250ZW50OiAnRGF0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogJ3JlcXVpcmVkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBmb3JtYXR0ZURhdGUsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXTtcbiAgICBcbiAgICAgICAgICAgICAgICBuZXdUYXNrRGlhbG9nRmllbGRzVGVtcGxhdGUuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmllbGREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgZmllbGREaXYuY2xhc3NMaXN0LmFkZChlbGVtZW50LmRpdl9jbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgIG5ld1Rhc2tEaWFsb2dGb3JtLmFwcGVuZChmaWVsZERpdik7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgICAgICAgICBmaWVsZExhYmVsLnRleHRDb250ZW50ID0gZWxlbWVudC5sYWJlbDtcbiAgICAgICAgICAgICAgICAgICAgZmllbGRMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGVsZW1lbnQuZWxlbWVudF9pZCk7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkRGl2LmFwcGVuZChmaWVsZExhYmVsKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmllbGRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudC5lbGVtZW50X3R5cGUpO1xuICAgICAgICAgICAgICAgICAgICBmaWVsZElucHV0LnRleHRDb250ZW50ID0gZWxlbWVudC50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgZmllbGRJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBlbGVtZW50LmlucHV0X3R5cGUpO1xuICAgICAgICAgICAgICAgICAgICBmaWVsZElucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBlbGVtZW50LmVsZW1lbnRfaWQpO1xuICAgICAgICAgICAgICAgICAgICBmaWVsZElucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCBlbGVtZW50LnRleHRfcGxhY2Vob2xkZXIpO1xuICAgICAgICAgICAgICAgICAgICBmaWVsZElucHV0LnNldEF0dHJpYnV0ZShlbGVtZW50LnJlcXVpcmVkLCBlbGVtZW50LnJlcXVpcmVkKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkSW5wdXQudmFsdWUgPSBlbGVtZW50LnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkSW5wdXQuc3R5bGUuY3Vyc29yID0gZWxlbWVudC5jdXJzb3Jfc3R5bGU7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkRGl2LmFwcGVuZChmaWVsZElucHV0KTtcblxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmVsZW1lbnRfdHlwZSA9PT0gJ3NlbGVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc2VsZWN0X29wdGlvbnMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gaXRlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZElucHV0LmFwcGVuZChvcHRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtID09PSBlbGVtZW50LnNlbGVjdF9kZWZhdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoJ3NlbGVjdGVkJywgJycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfSlcbiAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBzdWJtaXRUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgc3VibWl0VGFza0J1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gICAgICAgICAgICAgICAgc3VibWl0VGFza0J1dHRvbi50ZXh0Q29udGVudCA9ICdTYXZlJztcbiAgICAgICAgICAgICAgICBuZXdUYXNrRGlhbG9nRm9ybS5hcHBlbmQoc3VibWl0VGFza0J1dHRvbik7XG4gICAgXG4gICAgICAgICAgICAgICAgY29uc3QgY2xvc2VUYXNrRGlhbG9nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgY2xvc2VUYXNrRGlhbG9nRGl2LmNsYXNzTGlzdC5hZGQoJ2Nsb3NlLXRhc2stZGlhbG9nJyk7XG4gICAgICAgICAgICAgICAgbmV3VGFza0RpYWxvZ0Zvcm0uYXBwZW5kKGNsb3NlVGFza0RpYWxvZ0Rpdik7XG4gICAgXG4gICAgICAgICAgICAgICAgY29uc3QgY2xvc2VUYXNrRGlhbG9nU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgICAgICBjbG9zZVRhc2tEaWFsb2dTcGFuLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQnKTtcbiAgICAgICAgICAgICAgICBjbG9zZVRhc2tEaWFsb2dTcGFuLnRleHRDb250ZW50ID0gJ2Nsb3NlJztcbiAgICAgICAgICAgICAgICBjbG9zZVRhc2tEaWFsb2dEaXYuYXBwZW5kKGNsb3NlVGFza0RpYWxvZ1NwYW4pO1xuICAgIFxuICAgICAgICAgICAgICAgIC8vIEFkZCBjbG9zZSBhbmltYXRpb24gb24gU2F2ZSBhbmQgQ2xvc2VcbiAgICAgICAgICAgICAgICBoYW5kbGVDbG9zZUFuaW1hdGlvbihuZXdUYXNrRGlhbG9nRm9ybSwgbmV3VGFza0RpYWxvZywgJ3N1Ym1pdCcsIG5ld1Rhc2tEaWFsb2dGb3JtKTtcbiAgICAgICAgICAgICAgICBoYW5kbGVDbG9zZUFuaW1hdGlvbihjbG9zZVRhc2tEaWFsb2dTcGFuLCBuZXdUYXNrRGlhbG9nLCAnY2xpY2snLCBuZXdUYXNrRGlhbG9nRm9ybSk7XG4gICAgICAgICAgICB9ICAgXG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIENsb3NlIGFuaW1hdGlvbiBvbiBFU0NcbiAgICAgICAgZnVuY3Rpb24gYWRkRXNjRXZlbkxpc3RlbmVyKCkge1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3BlbkRpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpYWxvZ1tvcGVuXScpO1xuICAgICAgICAgICAgICAgICAgICBpZiAob3BlbkRpYWxvZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xvc2VEaWFsb2cob3BlbkRpYWxvZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG5cblxuICAgICAgICAvLyBDbG9zZSBhbmltYXRpb24gaGFuZGxlclxuICAgICAgICBmdW5jdGlvbiBoYW5kbGVDbG9zZUFuaW1hdGlvbihldmVudEVsZW1lbnQsIGRpYWxvZywgZXZlbnRUeXBlLCBmb3JtKSB7XG4gICAgICAgICAgICBldmVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGUsIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChldmVudCkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LW5hbWUnKTtcblxuICAgICAgICAgICAgICAgIHByb2plY3ROYW1lLnZhbHVlID0gJyc7XG4gICAgICAgICAgICAgICAgLy8gZm9ybS5yZXNldCgpO1xuICAgICAgICAgICAgICAgIGNsb3NlRGlhbG9nKGRpYWxvZyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENsb3NlIGRpYWxvZ1xuICAgICAgICBmdW5jdGlvbiBjbG9zZURpYWxvZyhkaWFsb2cpIHtcbiAgICAgICAgICAgIGRpYWxvZy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIGRpYWxvZy5jbGFzc0xpc3QucmVtb3ZlKCdkaXNwbGF5ZWQnKTtcbiAgICAgICAgICAgIGRpYWxvZy5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgZnVuY3Rpb24gaGFuZGxlVHJhbnNpdGlvbkVuZCgpIHtcbiAgICAgICAgICAgICAgICBkaWFsb2cuY2xvc2UoKTtcbiAgICAgICAgICAgICAgICBkaWFsb2cucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGhhbmRsZVRyYW5zaXRpb25FbmQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmV3UHJvamVjdERpYWxvZ0hhbmRsZXIsXG4gICAgICAgICAgICBuZXdUYXNrRGlhbG9nSGFuZGxlcixcbiAgICAgICAgICAgIGFkZEVzY0V2ZW5MaXN0ZW5lcixcbiAgICAgICAgICAgIGNyZWF0ZVRhc2tEZWxldGVEaWFsb2csXG4gICAgICAgICAgICBjcmVhdGVQcm9qZWN0RGVsZXRlRGlhbG9nLFxuICAgICAgICAgICAgaGFuZGxlQ2xvc2VBbmltYXRpb24sXG4gICAgICAgIH1cblxuICAgIH0pKCk7XG4gICAgXG5cbiAgICAvLyBIYW5kbGVyIGZvciBsZWZ0IGRpdlxuICAgIGNvbnN0IGNyZWF0ZUxlZnREaXYgPSAoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIC8vIENyZWF0ZSBsYXlvdXQgc3RydWN0dXJlXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVN0cnVjdHVyZSAoKSB7XG4gICAgICAgICAgICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbiAgICAgICAgICAgIGNvbnN0IGxlZnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGxlZnREaXYuY2xhc3NMaXN0LmFkZCgnbGVmdCcpO1xuICAgICAgICAgICAgbWFpbkRpdi5hcHBlbmQobGVmdERpdik7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBsZWZ0Rmlyc3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGxlZnRGaXJzdERpdi5jbGFzc0xpc3QuYWRkKCdsZWZ0LWZpcnN0LXNlY3Rpb24nKTtcbiAgICAgICAgICAgIGxlZnRGaXJzdERpdi5kYXRhc2V0LmFjdGl2ZSA9ICdUb2RheSc7XG5cbiAgICAgICAgICAgIGxlZnREaXYuYXBwZW5kKGxlZnRGaXJzdERpdik7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBmaXJzdFNlY3Rpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIGZpcnN0U2VjdGlvbkxhYmVsLnRleHRDb250ZW50ID0gJ1Rhc2tzJztcbiAgICAgICAgICAgIGxlZnRGaXJzdERpdi5hcHBlbmQoZmlyc3RTZWN0aW9uTGFiZWwpO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgZmlyc3RTZWN0aW9uTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgICAgICBmaXJzdFNlY3Rpb25MaXN0LmNsYXNzTGlzdC5hZGQoJ3ZpZXdzJyk7XG4gICAgICAgICAgICBsZWZ0Rmlyc3REaXYuYXBwZW5kKGZpcnN0U2VjdGlvbkxpc3QpO1xuXG4gICAgICAgICAgICBjb25zdCBmaXJzdFNlY3Rpb25MaW5lSXRlbXMgPSBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50X3R5cGU6ICdsaScsXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRfY2xhc3M6ICd0YXNrLWZpbHRlcicsXG4gICAgICAgICAgICAgICAgICAgIGRhdGFzZXRfYWN0aXZlOiAndHJ1ZScsXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkX2VsZW1lbnRzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudF90eXBlOiAnZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50X2NsYXNzOiAnaW1hZ2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRfaW5uZXJIdG1sOiAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT5jYWxlbmRhci10b2RheS1vdXRsaW5lPC90aXRsZT48cGF0aCBkPVwiTTE5IDNIMThWMUgxNlYzSDhWMUg2VjNINUMzLjkgMyAzIDMuODkgMyA1VjE5QzMgMjAuMTEgMy45IDIxIDUgMjFIMTlDMjAuMTEgMjEgMjEgMjAuMTEgMjEgMTlWNUMyMSAzLjg5IDIwLjExIDMgMTkgM00xOSAxOUg1VjlIMTlWMTlNMTkgN0g1VjVIMTlNNyAxMUgxMlYxNkg3XCIgLz48L3N2Zz4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50X3R5cGU6ICdwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50X3RleHRDb250ZW50OiAnVG9kYXknLFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbjogJ2dldFRvZGF5VGFza3MnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50X3R5cGU6ICdsaScsXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRfY2xhc3M6ICd0YXNrLWZpbHRlcicsXG4gICAgICAgICAgICAgICAgICAgIGRhdGFzZXRfYWN0aXZlOiAnZmFsc2UnLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZF9lbGVtZW50czogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRfdHlwZTogJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudF9jbGFzczogJ2ltYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50X2lubmVySHRtbDogJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+Y2FsZW5kYXItc3RhcnQtb3V0bGluZTwvdGl0bGU+PHBhdGggZD1cIk0xMyAxOEw5IDE0VjE3SDRWMTRIMlYyMkg0VjE5SDlWMjJMMTMgMThNMTkgM0gxOFYxSDE2VjNIOFYxSDZWM0g1QzMuOSAzIDMgMy45IDMgNVYxMkg1VjlIMTlWMTlIMTQuOEwxMi44IDIxSDE5QzIwLjEgMjEgMjEgMjAuMSAyMSAxOVY1QzIxIDMuOSAyMC4xIDMgMTkgM001IDdWNUgxOVY3SDVaXCIgLz48L3N2Zz4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50X3R5cGU6ICdwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50X3RleHRDb250ZW50OiAnVG9tb3Jyb3cnLFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbjogJ2dldFRvbW9ycm93VGFza3MnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50X3R5cGU6ICdsaScsXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRfY2xhc3M6ICd0YXNrLWZpbHRlcicsXG4gICAgICAgICAgICAgICAgICAgIGRhdGFzZXRfYWN0aXZlOiAnZmFsc2UnLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZF9lbGVtZW50czogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRfdHlwZTogJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudF9jbGFzczogJ2ltYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50X2lubmVySHRtbDogJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+Y2FsZW5kYXItbW9udGgtb3V0bGluZTwvdGl0bGU+PHBhdGggZD1cIk03IDExSDlWMTNIN1YxMU0yMSA1VjE5QzIxIDIwLjExIDIwLjExIDIxIDE5IDIxSDVDMy44OSAyMSAzIDIwLjEgMyAxOVY1QzMgMy45IDMuOSAzIDUgM0g2VjFIOFYzSDE2VjFIMThWM0gxOUMyMC4xMSAzIDIxIDMuOSAyMSA1TTUgN0gxOVY1SDVWN00xOSAxOVY5SDVWMTlIMTlNMTUgMTNWMTFIMTdWMTNIMTVNMTEgMTNWMTFIMTNWMTNIMTFNNyAxNUg5VjE3SDdWMTVNMTUgMTdWMTVIMTdWMTdIMTVNMTEgMTdWMTVIMTNWMTdIMTFaXCIgLz48L3N2Zz4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50X3R5cGU6ICdwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50X3RleHRDb250ZW50OiAnQWxsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb246ICdnZXRBbGxUYXNrcycsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBmaXJzdFNlY3Rpb25MaW5lSXRlbXMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBsaW5lSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudC5lbGVtZW50X3R5cGUpO1xuICAgICAgICAgICAgICAgIGxpbmVJdGVtLmNsYXNzTGlzdC5hZGQoZWxlbWVudC5lbGVtZW50X2NsYXNzKTtcbiAgICAgICAgICAgICAgICBsaW5lSXRlbS5kYXRhc2V0LmFjdGl2ZSA9IGVsZW1lbnQuZGF0YXNldF9hY3RpdmU7XG4gICAgICAgICAgICAgICAgZmlyc3RTZWN0aW9uTGlzdC5hcHBlbmQobGluZUl0ZW0pO1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmNoaWxkX2VsZW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2hpbGRfZWxlbWVudHMuZm9yRWFjaChjaGlsZF9lbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpbmVJdGVtQ2hpbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGNoaWxkX2VsZW1lbnQuZWxlbWVudF90eXBlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVJdGVtQ2hpbGQuY2xhc3NMaXN0LmFkZChjaGlsZF9lbGVtZW50LmVsZW1lbnRfY2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNoaWxkX2VsZW1lbnQuZWxlbWVudF9pbm5lckh0bWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lSXRlbUNoaWxkLmlubmVySFRNTCA9IGAke2NoaWxkX2VsZW1lbnQuZWxlbWVudF9pbm5lckh0bWx9YDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZF9lbGVtZW50LmVsZW1lbnRfdGV4dENvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lSXRlbUNoaWxkLnRleHRDb250ZW50ID0gY2hpbGRfZWxlbWVudC5lbGVtZW50X3RleHRDb250ZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZUl0ZW0uYXBwZW5kKGxpbmVJdGVtQ2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrc0Z1bmN0aW9uID0gVGFza01vZHVsZVtlbGVtZW50LmZ1bmN0aW9uXTtcbiAgICAgICAgICAgICAgICBsaW5lSXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBET01Nb2R1bGUuY3JlYXRlUmlnaHREaXYuY3JlYXRlVGFza3MoVGFza01vZHVsZS5nZXRQcm9qZWN0VGFza3MoVGFza01vZHVsZS5nZXRBY3RpdmVQcm9qZWN0KCksIHRhc2tzRnVuY3Rpb24oKSkpO1xuICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBjb25zdCByaWdodEZpcnN0SGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJpZ2h0LWZpcnN0LWhlYWRlcicpOyAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIHJpZ2h0Rmlyc3RIZWFkZXIudGV4dENvbnRlbnQgPSBUYXNrTW9kdWxlLmdldEFjdGl2ZVZpZXcoKS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIFRhc2tNb2R1bGUuZ2V0QWN0aXZlVmlldygpLnNsaWNlKDEpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoVGFza01vZHVsZS5nZXRBY3RpdmVQcm9qZWN0KCkpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHRGaXJzdEhlYWRlci50ZXh0Q29udGVudCArPSBcIiAtIFwiICsgVGFza01vZHVsZS5nZXRBY3RpdmVQcm9qZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIC8vIERPTU1vZHVsZS5jcmVhdGVSaWdodERpdi5jcmVhdGVUYXNrcyh0YXNrc0Z1bmN0aW9uKCkpO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhUYXNrTW9kdWxlLmdldEFjdGl2ZVByb2plY3QoKSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFRhc2tNb2R1bGUuZ2V0UHJvamVjdFRhc2tzKFRhc2tNb2R1bGUuZ2V0QWN0aXZlUHJvamVjdCgpLCB0YXNrc0Z1bmN0aW9uKCkpKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGFza3NGdW5jdGlvbigpKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coVGFza01vZHVsZS5nZXRBY3RpdmVQcm9qZWN0KCkpO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhUYXNrTW9kdWxlLmdldFByb2plY3RUYXNrcyhUYXNrTW9kdWxlLmdldEFjdGl2ZVByb2plY3QoKSwgdGFza3NGdW5jdGlvbigpKSk7XG4gICAgICAgICAgICAgICAgfSApXG4gICAgICAgICAgICB9KVxuICAgICAgICBcblxuICAgICAgICAgICAgY29uc3QgYW5pbWF0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBhbmltYXRpb25EaXYuY2xhc3NMaXN0LmFkZCgndGFzay1hbmltYXRpb24nLCAnc3RhcnQtdG9kYXknKTtcbiAgICAgICAgICAgIGZpcnN0U2VjdGlvbkxpc3QuYXBwZW5kKGFuaW1hdGlvbkRpdik7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBsZWZ0U2Vjb25kRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBsZWZ0U2Vjb25kRGl2LmNsYXNzTGlzdC5hZGQoJ2xlZnQtc2Vjb25kLXNlY3Rpb24nKTtcbiAgICAgICAgICAgIGxlZnREaXYuYXBwZW5kKGxlZnRTZWNvbmREaXYpO1xuICAgIFxuICAgICAgICAgICAgY29uc3Qgc2Vjb25kU2VjdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgc2Vjb25kU2VjdGlvbkxhYmVsLnRleHRDb250ZW50ID0gJ1Byb2plY3RzJztcbiAgICAgICAgICAgIGxlZnRTZWNvbmREaXYuYXBwZW5kKHNlY29uZFNlY3Rpb25MYWJlbCk7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBzZWNvbmRTZWN0aW9uTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgICAgICBzZWNvbmRTZWN0aW9uTGlzdC5jbGFzc0xpc3QuYWRkKCdzZWNvbmQtc2VjdGlvbi1saXN0Jyk7XG4gICAgICAgICAgICBsZWZ0U2Vjb25kRGl2LmFwcGVuZChzZWNvbmRTZWN0aW9uTGlzdCk7XG5cblxuICAgICAgICAgICAgLy8gVXBkYXRlIGRhdGEtYWN0aXZlIHByb3BlcnR5IG9uIC50YXNrLWZpbGVyIGFuZCBvbiBwYXJlbnQgLmxlZnQtZmlyc3Qtc2VjdGlvblxuICAgICAgICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0YXNrLWZpbHRlcicpKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgaXRlbS5vbmNsaWNrID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBsZWZ0Rmlyc3REaXYuZGF0YXNldC5hY3RpdmUgPSBpdGVtLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgICAgICBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Rhc2stZmlsdGVyJykpLmZvckVhY2goKGl0ZW0yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbSA9PT0gaXRlbTIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtMi5kYXRhc2V0LmFjdGl2ZSA9ICd0cnVlJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0yLmRhdGFzZXQuYWN0aXZlID0gJ2ZhbHNlJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbmRlciBwcm9qZWN0cyBpbiAuc2Vjb25kLXNlY3Rpb24tbGlzdFxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0cyhwcm9qZWN0cykge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdExpbmVJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0Jyk7XG4gICAgICAgICAgICBpZiAocHJvamVjdExpbmVJdGVtcykge1xuICAgICAgICAgICAgICAgIHByb2plY3RMaW5lSXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcHJvamVjdHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWNvbmRTZWN0aW9uTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWNvbmQtc2VjdGlvbi1saXN0Jyk7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdExpbmVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0TGluZUl0ZW0uY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuICAgICAgICAgICAgICAgIHByb2plY3RMaW5lSXRlbS5kYXRhc2V0LmFjdGl2ZSA9IGVsZW1lbnQuYWN0aXZlO1xuICAgICAgICAgICAgICAgIHNlY29uZFNlY3Rpb25MaXN0LmFwcGVuZChwcm9qZWN0TGluZUl0ZW0pO1xuXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgY2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgLy8gY2lyY2xlLmNsYXNzTGlzdC5hZGQoJ2NpcmNsZScpO1xuICAgICAgICAgICAgICAgIC8vIGNpcmNsZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBlbGVtZW50LmNvbG9yO1xuICAgICAgICAgICAgICAgIC8vIHByb2plY3RMaW5lSXRlbS5hcHBlbmQoY2lyY2xlKTtcbiAgICAgICAgICAgICAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgaWNvbi5jbGFzc0xpc3QuYWRkKCdpY29uJyk7XG4gICAgICAgICAgICAgICAgaWNvbi5pbm5lckhUTUwgPSBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZS13aWR0aD1cIjAuNVwiIHN0cm9rZT1cInZhcigtLWJvcmRlci1kYXJrKVwiPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5jaGVja2JveC1tdWx0aXBsZS1ibGFuay1jaXJjbGU8L3RpdGxlPlxuICAgICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMTQsMkE4LDggMCAwLDAgNiwxMEE4LDggMCAwLDAgMTQsMThBOCw4IDAgMCwwIDIyLDEwQTgsOCAwIDAsMCAxNCwyTTQuOTMsNS44MkMzLjA4LDcuMzQgMiw5LjYxIDIsMTJBOCw4IDAgMCwwIDEwLDIwQzEwLjY0LDIwIDExLjI3LDE5LjkyIDExLjg4LDE5Ljc3QzEwLjEyLDE5LjM4IDguNSwxOC41IDcuMTcsMTcuMjlDNS4yMiwxNi4yNSA0LDE0LjIxIDQsMTJDNCwxMS43IDQuMDMsMTEuNDEgNC4wNywxMS4xMUM0LjAzLDEwLjc0IDQsMTAuMzcgNCwxMEM0LDguNTYgNC4zMiw3LjEzIDQuOTMsNS44MlpcIi8+XG4gICAgICAgICAgICAgICAgPC9zdmc+YDtcbiAgICAgICAgICAgICAgICAvLyBpY29uLmlubmVySFRNTCA9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPmxlYWY8L3RpdGxlPjxwYXRoIGQ9XCJNMTcsOEM4LDEwIDUuOSwxNi4xNyAzLjgyLDIxLjM0TDUuNzEsMjJMNi42NiwxOS43QzcuMTQsMTkuODcgNy42NCwyMCA4LDIwQzE5LDIwIDIyLDMgMjIsM0MyMSw1IDE0LDUuMjUgOSw2LjI1QzQsNy4yNSAyLDExLjUgMiwxMy41QzIsMTUuNSAzLjc1LDE3LjI1IDMuNzUsMTcuMjVDNyw4IDE3LDggMTcsOFpcIiAvPjwvc3ZnPmA7XG4gICAgICAgICAgICAgICAgLy8gaWNvbi5pbm5lckhUTUwgPSBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT5sZWFmPC90aXRsZT48cGF0aCBkPVwiTTE3LDhDOCwxMCA1LjksMTYuMTcgMy44MiwyMS4zNEw1LjcxLDIyTDYuNjYsMTkuN0M3LjE0LDE5Ljg3IDcuNjQsMjAgOCwyMEMxOSwyMCAyMiwzIDIyLDNDMjEsNSAxNCw1LjI1IDksNi4yNUM0LDcuMjUgMiwxMS41IDIsMTMuNUMyLDE1LjUgMy43NSwxNy4yNSAzLjc1LDE3LjI1QzcsOCAxNyw4IDE3LDhaXCIgLz48L3N2Zz5gO1xuXG5cbiAgICAgICAgICAgICAgICBpY29uLnN0eWxlLmZpbGwgPSBlbGVtZW50LmNvbG9yO1xuICAgICAgICAgICAgICAgIHByb2plY3RMaW5lSXRlbS5hcHBlbmQoaWNvbik7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdExpbmVJdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHByb2plY3RMaW5lSXRlbU5hbWUudGV4dENvbnRlbnQgPSBlbGVtZW50Lm5hbWU7XG4gICAgICAgICAgICAgICAgcHJvamVjdExpbmVJdGVtLmFwcGVuZChwcm9qZWN0TGluZUl0ZW1OYW1lKTtcblxuICAgICAgICAgICAgICAgIHByb2plY3RMaW5lSXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC5jaGlsZE5vZGVzKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LmNoaWxkTm9kZXNbMV0pO1xuICAgICAgICAgICAgICAgICAgICAvLyBsZXQgYSA9IGV2ZW50LnRhcmdldC5jaGlsZE5vZGVzWzFdLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocHJvamVjdExpbmVJdGVtTmFtZS50ZXh0Q29udGVudCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFRhc2tNb2R1bGUuZ2V0QWN0aXZlUHJvamVjdCgpKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoVGFza01vZHVsZS5nZXRBY3RpdmVQcm9qZWN0KCkgPT09IHByb2plY3RMaW5lSXRlbU5hbWUudGV4dENvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFRhc2tNb2R1bGUuY2hhbmdlQWN0aXZlUHJvamVjdCgnJyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBUYXNrTW9kdWxlLmNoYW5nZUFjdGl2ZVByb2plY3QocHJvamVjdExpbmVJdGVtTmFtZS50ZXh0Q29udGVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgRE9NTW9kdWxlLmNyZWF0ZVJpZ2h0RGl2LmNyZWF0ZVRhc2tzKFRhc2tNb2R1bGUuZ2V0UHJvamVjdFRhc2tzKFRhc2tNb2R1bGUuZ2V0QWN0aXZlUHJvamVjdCgpLCBUYXNrTW9kdWxlLmdldFRhc2tzRnJvbUFjdGl2ZVZpZXcoKSkpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJpZ2h0Rmlyc3RIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmlnaHQtZmlyc3QtaGVhZGVyJyk7ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgcmlnaHRGaXJzdEhlYWRlci50ZXh0Q29udGVudCA9IFRhc2tNb2R1bGUuZ2V0QWN0aXZlVmlldygpLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgVGFza01vZHVsZS5nZXRBY3RpdmVWaWV3KCkuc2xpY2UoMSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChUYXNrTW9kdWxlLmdldEFjdGl2ZVByb2plY3QoKSkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodEZpcnN0SGVhZGVyLnRleHRDb250ZW50ICs9IFwiIC0gXCIgKyBUYXNrTW9kdWxlLmdldEFjdGl2ZVByb2plY3QoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdBbmltYXRpb25EaXYyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY29uZC1zZWN0aW9uLWxpc3QgPiAudGFzay1hbmltYXRpb24nKTtcbiAgICAgICAgICAgIGlmIChleGlzdGluZ0FuaW1hdGlvbkRpdjIpIHtcbiAgICAgICAgICAgICAgICBleGlzdGluZ0FuaW1hdGlvbkRpdjIucmVtb3ZlKCk7XG5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3Qgc2Vjb25kU2VjdGlvbkxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2Vjb25kLXNlY3Rpb24tbGlzdCcpO1xuICAgICAgICAgICAgY29uc3QgYW5pbWF0aW9uRGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgYW5pbWF0aW9uRGl2Mi5jbGFzc0xpc3QuYWRkKCd0YXNrLWFuaW1hdGlvbicsICdzdGFydC1maXJzdCcpO1xuICAgICAgICAgICAgc2Vjb25kU2VjdGlvbkxpc3QuYXBwZW5kKGFuaW1hdGlvbkRpdjIpO1xuXG4gICAgICAgICAgICAvLyBVcGRhdGUgZGF0YS1hY3RpdmUgcHJvcGVydHkgb24gLnByb2plY3RcbiAgICAgICAgICAgIEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgncHJvamVjdCcpKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICAgICAgaXRlbS5vbmNsaWNrID0gKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Byb2plY3QnKSkuZm9yRWFjaCgoaXRlbTIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtID09PSBpdGVtMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmRhdGFzZXQuYWN0aXZlID09ICd0cnVlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXNrX2FuaW1hdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydC1maXJzdCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrX2FuaW1hdGlvbi5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtMi5jbGFzc0xpc3QucmVtb3ZlKCdmb250LWFjY2VudCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0yLmRhdGFzZXQuYWN0aXZlID0gJ2ZhbHNlJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tfYW5pbWF0aW9uLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMzAwKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtMi5kYXRhc2V0LmFjdGl2ZSA9ICd0cnVlJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbTIuY2xhc3NMaXN0LmFkZCgnZm9udC1hY2NlbnQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtMi5kYXRhc2V0LmFjdGl2ZSA9ICdmYWxzZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbTIuY2xhc3NMaXN0LnJlbW92ZSgnZm9udC1hY2NlbnQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNyZWF0ZVN0cnVjdHVyZSxcbiAgICAgICAgICAgIGNyZWF0ZVByb2plY3RzLFxuICAgICAgICB9XG4gICAgfSkoKTtcblxuICAgIC8vIEhhbmRsZXIgZm9yIHJpZ2h0IGRpdlxuICAgIGNvbnN0IGNyZWF0ZVJpZ2h0RGl2ID0gKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAvLyBDcmVhdGUgbGF5b3V0IHN0cnVjdHVyZVxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVTdHJ1Y3R1cmUoKSB7XG4gICAgICAgICAgICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICByaWdodERpdi5jbGFzc0xpc3QuYWRkKCdyaWdodCcpO1xuICAgICAgICAgICAgbWFpbkRpdi5hcHBlbmQocmlnaHREaXYpO1xuXG4gICAgICAgICAgICBjb25zdCByaWdodEZpcnN0SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICByaWdodEZpcnN0SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3JpZ2h0LWZpcnN0LWhlYWRlcicpO1xuICAgICAgICAgICAgcmlnaHRGaXJzdEhlYWRlci50ZXh0Q29udGVudCA9IFwiQWxsXCI7XG4gICAgICAgICAgICByaWdodERpdi5hcHBlbmQocmlnaHRGaXJzdEhlYWRlcik7XG5cbiAgICBcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0Rmlyc3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHJpZ2h0Rmlyc3REaXYuY2xhc3NMaXN0LmFkZCgncmlnaHQtZmlyc3Qtc2VjdGlvbicpO1xuICAgICAgICAgICAgcmlnaHREaXYuYXBwZW5kKHJpZ2h0Rmlyc3REaXYpO1xuICAgICAgICB9XG5cbiAgICAgICAgIC8vIFJlbmRlciB0YXNrc1xuICAgICAgICBmdW5jdGlvbiBjcmVhdGVUYXNrcyh0YXNrcykge1xuXG4gICAgICAgICAgICBjb25zdCB0YXNrTGluZUl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2ssIC50YXNrLWRpdmlkZXInKTtcbiAgICAgICAgICAgIGNvbnN0IGZpbGxlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uby10YXNrcy1maWxsZXInKTtcbiAgICAgICAgICAgIGlmIChmaWxsZXIpIHtcbiAgICAgICAgICAgICAgICBmaWxsZXIucmVtb3ZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGFza0xpbmVJdGVtcykge1xuICAgICAgICAgICAgICAgIHRhc2tMaW5lSXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgICAgICAgICAgbGV0IHN1Yl9jb3VudGVyID0gMDtcblxuICAgICAgICAgICAgaWYgKHRhc2tzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJpZ2h0Rmlyc3RTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJpZ2h0LWZpcnN0LXNlY3Rpb24nKTtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxsZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBmaWxsZXIuY2xhc3NMaXN0LmFkZCgnbm8tdGFza3MtZmlsbGVyJyk7XG4gICAgICAgICAgICAgICAgZmlsbGVyLnRleHRDb250ZW50ID0gYFNlZW1zIGxpa2UgeW91IGRvbid0IGhhdmUgYW55IHRhc2tzIGhlcmUhIFdoZXRoZXIgaXQgaXMgZ29vZCBvciBiYWQsIG9ubHkgdGltZSB3aWxsIHRlbGwuLi5gO1xuICAgICAgICAgICAgICAgIHJpZ2h0Rmlyc3RTZWN0aW9uLmFwcGVuZChmaWxsZXIpO1xuXG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgdGFza3MuZm9yRWFjaChlbGVtZW50ID0+IHtcblxuXG4gICAgICAgICAgICAgICAgY29uc3QgcmlnaHRGaXJzdFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmlnaHQtZmlyc3Qtc2VjdGlvbicpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tMaW5lSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHRhc2tMaW5lSXRlbS5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XG4gICAgICAgICAgICAgICAgdGFza0xpbmVJdGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgIHJpZ2h0Rmlyc3RTZWN0aW9uLmFwcGVuZCh0YXNrTGluZUl0ZW0pO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdGFza0xpbmVJdGVtTGVmdFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICB0YXNrTGluZUl0ZW1MZWZ0U2VjdGlvbi5jbGFzc0xpc3QuYWRkKCd0YXNrLWxlZnQtc2VjdGlvbicpO1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmNvbXBsZXRlZCA9PT0gJ3RydWUnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tMaW5lSXRlbUxlZnRTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2NoZWNrZWQnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0YXNrTGluZUl0ZW1MZWZ0U2VjdGlvbi5jbGFzc0xpc3QuYWRkKCd1bmNoZWNrZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGFza0xpbmVJdGVtTGVmdFNlY3Rpb24uaW5uZXJIVE1MID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgICAgICAgICA8dGl0bGU+Y2hlY2stY2lyY2xlLW91dGxpbmU8L3RpdGxlPlxuICAgICAgICAgICAgICAgIDwhLS0gT3V0ZXIgY2lyY2xlIC0tPlxuICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiMTBcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIwLjVcIiBmaWxsPVwibm9uZVwiIC8+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPCEtLSBDaGVja21hcmsgcGF0aCAtLT5cbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTcsMTMuNSBMMTAsMTYuNSBMMTcsOS41XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMC41XCIgZmlsbD1cIm5vbmVcIiAvPlxuICAgICAgICAgICAgICAgIDwvc3ZnPmA7XG5cbiAgICAgICAgICAgICAgICB0YXNrTGluZUl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhc2tMaW5lSXRlbUxlZnRTZWN0aW9uLmNsYXNzTGlzdC5jb250YWlucygndW5jaGVja2VkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tMaW5lSXRlbUxlZnRTZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ3VuY2hlY2tlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFza0xpbmVJdGVtTGVmdFNlY3Rpb24uY2xhc3NMaXN0LmFkZCgnY2hlY2tlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGFza0xpbmVJdGVtLnN0eWxlLmJhY2tncm91bmQgPSAnYmx1ZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY29tcGxldGVkID0gJ3RydWUnO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFza0xpbmVJdGVtTGVmdFNlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZSgnY2hlY2tlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFza0xpbmVJdGVtTGVmdFNlY3Rpb24uY2xhc3NMaXN0LmFkZCgndW5jaGVja2VkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNvbXBsZXRlZCA9ICdmYWxzZSc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgdGFza0xpbmVJdGVtLmFwcGVuZCh0YXNrTGluZUl0ZW1MZWZ0U2VjdGlvbik7XG5cbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrTGluZUl0ZW1SaWdodFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICB0YXNrTGluZUl0ZW1SaWdodFNlY3Rpb24uY2xhc3NMaXN0LmFkZCgndGFzay1yaWdodC1zZWN0aW9uJyk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBhZnRlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBhZnRlckVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnaG92ZXItZWZmZWN0Jyk7XG4gICAgICAgICAgICAgICAgdGFza0xpbmVJdGVtUmlnaHRTZWN0aW9uLmFwcGVuZChhZnRlckVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGFmdGVyRWxlbWVudC50ZXh0Q29udGVudCA9IGVsZW1lbnQubm90ZXM7XG5cbiAgICAgICAgICAgICAgICBpZiAoYWZ0ZXJFbGVtZW50LnRleHRDb250ZW50ICE9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICB0YXNrTGluZUl0ZW1SaWdodFNlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWZ0ZXJFbGVtZW50LnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tMaW5lSXRlbVJpZ2h0U2VjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZnRlckVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IFwiMFwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0YXNrTGluZUl0ZW0uYXBwZW5kKHRhc2tMaW5lSXRlbVJpZ2h0U2VjdGlvbik7XG5cbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrTGluZUl0ZW1EaXZpZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgdGFza0xpbmVJdGVtRGl2aWRlci5jbGFzc0xpc3QuYWRkKCd0YXNrLWRpdmlkZXInKTtcbiAgICAgICAgICAgICAgICB0YXNrTGluZUl0ZW1EaXZpZGVyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgIHJpZ2h0Rmlyc3RTZWN0aW9uLmFwcGVuZCh0YXNrTGluZUl0ZW1EaXZpZGVyKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tGaWVsZHNUZW1wbGF0ZSA9IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGl2X2NsYXNzOiAndGFzay1wcm9qZWN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkX2VsZW1lbnRzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXZfY2xhc3M6ICd0YXNrLXByb2plY3QtZmllbGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q29udGVudDogZWxlbWVudC5wcm9qZWN0TmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGVsZW1lbnQucHJvamVjdENvbG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdl9jbGFzczogJ3Rhc2stdGl0bGUtZmllbGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENvbnRlbnQ6IGVsZW1lbnQudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGRpdl9jbGFzczogJ3Rhc2stbm90ZXMtZmllbGQnLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGV4dENvbnRlbnQ6IGVsZW1lbnQubm90ZXMsXG4gICAgICAgICAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGRpdl9jbGFzczogJ3Rhc2stcHJpb3JpdHktZmllbGQnLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGV4dENvbnRlbnQ6IGVsZW1lbnQucHJpb3JpdHksXG4gICAgICAgICAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdl9jbGFzczogJ3Rhc2stZGF0ZS1maWVsZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q29udGVudDogZWxlbWVudC5kYXRlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXZfY2xhc3M6ICd0YXNrLWRlbGV0ZS1idXR0b24nLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+Y2xvc2U8L3NwYW4+YCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgIFxuXG5cbiAgICAgICAgICAgICAgICB0YXNrRmllbGRzVGVtcGxhdGUuZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICB0YXNrRmllbGQuY2xhc3NMaXN0LmFkZChmaWVsZC5kaXZfY2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICB0YXNrRmllbGQuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZC50ZXh0Q29udGVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFza0ZpZWxkLnRleHRDb250ZW50ID0gZmllbGQudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkLmlubmVySFRNTCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFza0ZpZWxkLmlubmVySFRNTCA9IGZpZWxkLmlubmVySFRNTDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGQuZGl2X2NsYXNzID09PSAndGFzay1kZWxldGUtYnV0dG9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFza0ZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29uZmlybVRhc2tEZWxldGVEaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1kZWxldGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb25maXJtVGFza0RlbGV0ZUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1kZWxldGUgPiBmb3JtJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybVRhc2tEZWxldGVEaWFsb2cuc2hvd01vZGFsKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybVRhc2tEZWxldGVEaWFsb2cuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybVRhc2tEZWxldGVEaWFsb2cuY2xhc3NMaXN0LmFkZCgnZGlzcGxheWVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29uZmlybVRhc2tEZWxldGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1kZWxldGUgPiBmb3JtID4gYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjYW5jZWxUYXNrRGVsZXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZGVsZXRlID4gZm9ybSA+IGJ1dHRvblt0eXBlPVwiY2xvc2VcIl0nKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1UYXNrRGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhUYXNrTW9kdWxlLmdldEFsbFRhc2tzKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUYXNrTW9kdWxlLmRlbGV0ZVRhc2soZWxlbWVudC5pZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFRhc2tNb2R1bGUuZ2V0QWxsVGFza3MoKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERPTU1vZHVsZS5jcmVhdGVEaWFsb2dzLmhhbmRsZUNsb3NlQW5pbWF0aW9uKGNvbmZpcm1UYXNrRGVsZXRlRm9ybSwgY29uZmlybVRhc2tEZWxldGVEaWFsb2csICdzdWJtaXQnLCBjb25maXJtVGFza0RlbGV0ZUZvcm0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBET01Nb2R1bGUuY3JlYXRlUmlnaHREaXYuY3JlYXRlVGFza3MoVGFza01vZHVsZS5nZXRQcm9qZWN0VGFza3MoVGFza01vZHVsZS5nZXRBY3RpdmVQcm9qZWN0KCksIFRhc2tNb2R1bGUuZ2V0VGFza3NGcm9tQWN0aXZlVmlldygpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0YXNrRmllbGQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gZmllbGQuY29sb3I7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tMaW5lSXRlbVJpZ2h0U2VjdGlvbi5hcHBlbmQodGFza0ZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkLmNoaWxkX2VsZW1lbnRzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5jaGlsZF9lbGVtZW50cy5mb3JFYWNoKGNoaWxkX2VsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkX2RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkX2Rpdi5jbGFzc0xpc3QuYWRkKGNoaWxkX2VsZW1lbnQuZGl2X2NsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZF9kaXYudGV4dENvbnRlbnQgPSBjaGlsZF9lbGVtZW50LnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkX2Rpdi5zdHlsZS5jb2xvciA9IGNoaWxkX2VsZW1lbnQuY29sb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRfZGl2LnN0eWxlLmJvcmRlckNvbG9yID0gY2hpbGRfZWxlbWVudC5jb2xvcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrRmllbGQuYXBwZW5kKGNoaWxkX2Rpdik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFza0ZpZWxkLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgICAgICAgIH0sIDIwICogc3ViX2NvdW50ZXIpO1xuICAgICAgICAgICAgICAgICAgICBzdWJfY291bnRlciA9IHN1Yl9jb3VudGVyICsgMTtcblxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0YXNrTGluZUl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgICB9LCA4MCAqIGNvdW50ZXIpO1xuICAgICAgICAgICAgICAgIGNvdW50ZXIgPSBjb3VudGVyICsgMTtcblxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0YXNrTGluZUl0ZW1EaXZpZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgICAgfSwgMTAwICogY291bnRlcik7XG5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY3JlYXRlU3RydWN0dXJlLFxuICAgICAgICAgICAgY3JlYXRlVGFza3MsXG4gICAgICAgIH1cbiAgICB9KSgpO1xuXG4gICAgY29uc3QgY3JlYXRlRm9vdGVyRGl2ID0gKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVTdHJ1Y3R1cmUoKSB7XG4gICAgICAgICAgICBjb25zdCByaWdodERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yaWdodCcpO1xuICAgICAgICAgICAgY29uc3QgZm9vdGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBmb290ZXJEaXYuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XG4gICAgICAgICAgICByaWdodERpdi5hcHBlbmQoZm9vdGVyRGl2KTtcblxuICAgICAgICAgICAgY29uc3QgZm9vdGVyUmlnaHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGZvb3RlclJpZ2h0RGl2LmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlci1yaWdodCcpO1xuICAgICAgICAgICAgZm9vdGVyRGl2LmFwcGVuZChmb290ZXJSaWdodERpdik7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVCdXR0b25zKCkge1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBsZWZ0U2Vjb25kU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sZWZ0LXNlY29uZC1zZWN0aW9uJyk7XG4gICAgICAgICAgICBjb25zdCBmb290ZXJSaWdodERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXItcmlnaHQnKTtcblxuICAgICAgICAgICAgY29uc3QgY3JlYXRlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY3JlYXRlUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdjcmVhdGUtcHJvamVjdCcpO1xuICAgICAgICAgICAgbGVmdFNlY29uZFNlY3Rpb24uYXBwZW5kKGNyZWF0ZVByb2plY3RCdXR0b24pO1xuICAgICAgICAgICAgY3JlYXRlUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdQcm9qZWN0RGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5ldy1wcm9qZWN0Jyk7XG4gICAgICAgICAgICAgICAgbmV3UHJvamVjdERpYWxvZy5zaG93TW9kYWwoKTtcbiAgICAgICAgICAgICAgICBuZXdQcm9qZWN0RGlhbG9nLmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXllZCcpO1xuICAgICAgICAgICAgICAgIG5ld1Byb2plY3REaWFsb2cuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBjb25zdCBjcmVhdGVQcm9qZWN0QnV0dG9uSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY3JlYXRlUHJvamVjdEJ1dHRvbkljb24uaW5uZXJIVE1MID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+cGx1czwvdGl0bGU+PHBhdGggZD1cIk0xOSwxM0gxM1YxOUgxMVYxM0g1VjExSDExVjVIMTNWMTFIMTlWMTNaXCIgLz48L3N2Zz5gO1xuICAgICAgICAgICAgY3JlYXRlUHJvamVjdEJ1dHRvbi5hcHBlbmQoY3JlYXRlUHJvamVjdEJ1dHRvbkljb24pO1xuXG4gICAgICAgICAgICBjb25zdCBjcmVhdGVQcm9qZWN0QnV0dG9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNyZWF0ZVByb2plY3RCdXR0b25MYWJlbC50ZXh0Q29udGVudCA9ICdBZGQgUHJvamVjdCc7XG4gICAgICAgICAgICBjcmVhdGVQcm9qZWN0QnV0dG9uLmFwcGVuZChjcmVhdGVQcm9qZWN0QnV0dG9uTGFiZWwpO1xuXG4gICAgICAgICAgICBjb25zdCBjcmVhdGVUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjcmVhdGVUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZS10YXNrJyk7XG4gICAgICAgICAgICBmb290ZXJSaWdodERpdi5hcHBlbmQoY3JlYXRlVGFza0J1dHRvbik7XG5cbiAgICAgICAgICAgIGNyZWF0ZVRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3VGFza0RpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdGFzaycpO1xuICAgICAgICAgICAgICAgIG5ld1Rhc2tEaWFsb2cuc2hvd01vZGFsKCk7XG4gICAgICAgICAgICAgICAgbmV3VGFza0RpYWxvZy5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5ZWQnKTtcbiAgICAgICAgICAgICAgICBuZXdUYXNrRGlhbG9nLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgfSlcblxuXG4gICAgICAgICAgICBjb25zdCBjcmVhdGVUYXNrQnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjcmVhdGVUYXNrQnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZS10YXNrLWNvbnRhaW5lcicpXG4gICAgICAgICAgICBjcmVhdGVUYXNrQnV0dG9uLmFwcGVuZChjcmVhdGVUYXNrQnV0dG9uQ29udGFpbmVyKTtcblxuXG4gICAgICAgICAgICBjb25zdCBjcmVhdGVUYXNrQnV0dG9uSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY3JlYXRlVGFza0J1dHRvbkljb24uaW5uZXJIVE1MID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+cGx1czwvdGl0bGU+PHBhdGggZD1cIk0xOSwxM0gxM1YxOUgxMVYxM0g1VjExSDExVjVIMTNWMTFIMTlWMTNaXCIgLz48L3N2Zz5gO1xuICAgICAgICAgICAgY3JlYXRlVGFza0J1dHRvbkNvbnRhaW5lci5hcHBlbmQoY3JlYXRlVGFza0J1dHRvbkljb24pO1xuXG4gICAgICAgICAgICBjb25zdCBjcmVhdGVUYXNrQnV0dG9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNyZWF0ZVRhc2tCdXR0b25MYWJlbC50ZXh0Q29udGVudCA9ICdBZGQgVGFzayc7XG4gICAgICAgICAgICBjcmVhdGVUYXNrQnV0dG9uQ29udGFpbmVyLmFwcGVuZChjcmVhdGVUYXNrQnV0dG9uTGFiZWwpO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNyZWF0ZVN0cnVjdHVyZSxcbiAgICAgICAgICAgIGNyZWF0ZUJ1dHRvbnMsXG4gICAgICAgIH1cbiAgICB9KSgpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3JlYXRlTWFpbkRpdixcbiAgICAgICAgY3JlYXRlRGlhbG9ncyxcbiAgICAgICAgY3JlYXRlTGVmdERpdixcbiAgICAgICAgY3JlYXRlUmlnaHREaXYsXG4gICAgICAgIGNyZWF0ZUZvb3RlckRpdixcbiAgICB9XG59KSgpO1xuXG5cbkRPTU1vZHVsZS5jcmVhdGVNYWluRGl2KCk7XG5ET01Nb2R1bGUuY3JlYXRlRGlhbG9ncy5uZXdQcm9qZWN0RGlhbG9nSGFuZGxlcigpO1xuRE9NTW9kdWxlLmNyZWF0ZURpYWxvZ3MubmV3VGFza0RpYWxvZ0hhbmRsZXIoKTtcbkRPTU1vZHVsZS5jcmVhdGVEaWFsb2dzLmNyZWF0ZVByb2plY3REZWxldGVEaWFsb2coKTtcbkRPTU1vZHVsZS5jcmVhdGVEaWFsb2dzLmNyZWF0ZVRhc2tEZWxldGVEaWFsb2coKTtcbkRPTU1vZHVsZS5jcmVhdGVEaWFsb2dzLmFkZEVzY0V2ZW5MaXN0ZW5lcigpO1xuRE9NTW9kdWxlLmNyZWF0ZUxlZnREaXYuY3JlYXRlU3RydWN0dXJlKCk7XG5ET01Nb2R1bGUuY3JlYXRlTGVmdERpdi5jcmVhdGVQcm9qZWN0cyhQcm9qZWN0TW9kdWxlLmdldFByb2plY3RPYmplY3RzKCkpO1xuRE9NTW9kdWxlLmNyZWF0ZVJpZ2h0RGl2LmNyZWF0ZVN0cnVjdHVyZSgpO1xuRE9NTW9kdWxlLmNyZWF0ZVJpZ2h0RGl2LmNyZWF0ZVRhc2tzKFRhc2tNb2R1bGUuZ2V0VG9kYXlUYXNrcygpKTtcbkRPTU1vZHVsZS5jcmVhdGVGb290ZXJEaXYuY3JlYXRlU3RydWN0dXJlKCk7XG5ET01Nb2R1bGUuY3JlYXRlRm9vdGVyRGl2LmNyZWF0ZUJ1dHRvbnMoKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmtleSA9PT0gXCI1XCIpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coUHJvamVjdE1vZHVsZS5nZXRQcm9qZWN0T2JqZWN0cygpKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coVGFza01vZHVsZS5nZXRUb2RheVRhc2tzKCkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhUYXNrTW9kdWxlLmdldFRvbW9ycm93VGFza3MoKSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFRhc2tNb2R1bGUuZ2V0QWxsVGFza3MoKSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFRhc2tNb2R1bGUuZ2V0UHJvamVjdFRhc2tzKCdNYXRoJywgVGFza01vZHVsZS5nZXRUb2RheVRhc2tzKCkpKTtcbiAgICAgICAgY29uc29sZS5sb2coVGFza01vZHVsZS5nZXRBY3RpdmVQcm9qZWN0KCkpO1xuICAgICAgICBjb25zb2xlLmxvZyhUYXNrTW9kdWxlLmdldEFjdGl2ZVZpZXcoKSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFRhc2tNb2R1bGUuZ2V0QWN0aXZlUHJvamVjdCgpKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coVGFza01vZHVsZS5nZXRBY3RpdmVWaWV3KCkpO1xuICAgIH1cbn0pIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9