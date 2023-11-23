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

    --close-button: rgb(169, 169, 169);
    --close-button-hover: rgb(136, 136, 136);
    --close-button-active: rgb(108, 108, 108);

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
    width: 100%;
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



.right-first-section > .task:hover > .task-right-section > .task-title-field,
.right-first-section > .task:hover > .task-right-section > .task-date-field {
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
    grid-template-columns: auto;
    grid-template-rows: auto;
    /* gap: 5px; */
    /* position: relative; */
    align-items: center;
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



.right-first-section > .task > .task-right-section > .task-project > * {
    padding: 1px 5px 1px 5px;
    border-radius: 5px;
    border: 1px solid var(--border-dark);
    font-size: 12px;
}

.right-first-section > .task > .task-right-section > .task-project {
    grid-column: 1 / 2;
    grid-row: 1 / 2;

    display: flex;
    align-items: center;
    gap: 10px;
    /* justify-self: end; */
}

.right-first-section > .task > .task-right-section > .task-title-field {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
    font-size: 15px;
}

.right-first-section > .task > .task-right-section > .task-date-field {
    grid-column: 1 / 2;
    grid-row: 4 / 5;
    font-size: 12px;
}

.right-first-section > .task > .task-right-section > .task-notes-field {
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



.right-first-section > .task-divider {
    min-height: 1px;
    width: 100%;
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
.left > .left-second-section li:active:not(.hovered-delete) {
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

dialog.displayed.task-delete > form > button {
    transition: opacity 100ms ease-in-out 200ms, background-color 0.3s ease, border-color 0.1s ease;
}


.delete-project {
    width: 20px;
    height: 20px;
    margin-left: auto;
    margin-right: 20px;
    opacity: 0;
    border-radius: 50%;
    fill: var(--accent-color);
    transition: all 0.3s ease;
}

.delete-project:hover {
    fill: var(--background-light);
    background-color: var(--accent-color);
}

li.project:hover > .delete-project {
    opacity: 1;
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
    background-color: var(--close-button);
}

.task-delete > form > button[type="close"]:hover {
    background-color: var(--close-button-hover);
}

.task-delete > form > button[type="close"]:active {
    background-color: var(--close-button-active);
}

.new-task > form > button:focus,
.new-project > form > button:focus,
.task-delete > form > button:focus {
    outline: none;
}

.new-task > form > button:hover,
.new-project > form > button:hover,
.task-delete > form > button[type="submit"]:hover {
    border: 0.5px solid black;
    background-color: var(--secondary-color);
}

.new-task > form > button:active,
.new-project > form > button:active,
.task-delete > form > button[type="submit"]:active {
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
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');\n@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100&family=Lato:wght@300&family=Nunito:ital,wght@0,200;0,300;0,400;0,500;1,200;1,300;1,400;1,500&family=Roboto:wght@100&family=Rubik:wght@300&display=swap');\n\n:root {\n    /* Primary colors */\n    --primary-color: #3498db;\n    --primary-dark: #2980b9;\n    --primary-light: #87CEFA;\n\n    /* Secondary colors */\n    --secondary-color: #2ecc71; /*used*/\n    --secondary-dark: #27ae60; /*used*/\n    --secondary-light: #c8e6c9; /*used*/\n\n    /* Accent colors */\n    --accent-color: #BA181B;\n    --accent-dark: #A4161A;\n    --accent-light: #E5383B; /*used*/\n    --accent-darker: #660708;\n\n    /* Background colors */\n    --background-color: #F5EBE0; /*used*/\n    --background-dark: #bdc3c7;\n    --background-light: #EDEDE9; /*used*/\n\n    /* Text colors */\n    --text-color: #333; /*used*/\n    --text-light: #fff;\n    --text-muted: #888; /*used*/\n\n    /* Border colors */\n    --border-color: #D6CCC2; /*used*/\n    --border-dark: #999; /*used*/\n    --border-light: #eee;\n\n    /* Button colors */\n    --button-hover: #ba181b28; /*used*/\n    --button-active: #ba181b5b; /*used*/\n\n    --close-button: rgb(169, 169, 169);\n    --close-button-hover: rgb(136, 136, 136);\n    --close-button-active: rgb(108, 108, 108);\n\n    --elements-hover: #ba181b28; /*used*/\n    --checkbox-color: green; /*used*/\n}\n\n\n::-webkit-scrollbar {\n    width: 4px;\n    border-radius: 5px;\n    z-index: 9999;\n  }\n  \n  ::-webkit-scrollbar-thumb {\n      background: var(--accent-light); /* Change the color to your preference */\n      border-radius: 6px;\n      z-index: 9999;\n  }\n  \n  ::-webkit-scrollbar:hover {\n      background: var(--background-light); /* Change the color to your preference */\n      z-index: 9999;\n  }\n  \n  ::-webkit-scrollbar-thumb:hover {\n      background: var(--accent-dark); /* Change the color to your preference */\n      z-index: 9999;    \n  }\n\n\n::backdrop {\n    background-color: #00000088;\n    backdrop-filter: blur(3px);\n}\n\n.material-symbols-outlined {\n    font-variation-settings:\n    'FILL' 0,\n    'wght' 400,\n    'GRAD' 0,\n    'opsz' 24\n}\n\n\n/* General layout */\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    color: var(--text-color);\n    font-family: 'Nunito', sans-serif;\n    font-weight: 300;\n}\n\nbody {\n    background-color: var(--background-light);\n    height: 100vh;\n    width: 100vw;\n    overflow-x: hidden;\n}\n\n.main {\n    height: 100%;\n    width: 100%;\n    display: grid;\n    grid-template-columns: minmax(200px, 1fr) 3fr;\n    position: relative;\n}\n\n.main > .left {\n    border-right: 1px solid var(--border-color);\n    border-bottom: 1px solid var(--border-color);\n    background-color: var(--background-color);\n    flex: 0 0 300px;\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n    /* height: calc(100% - 100px); */\n    height: 100%;\n    /* overflow: auto; */\n    grid-column: 1 / 2;\n    /* position: sticky; */\n}\n\n.main > .right {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n    height: calc(100% - 100px);\n    grid-column: 2 / 3;\n    position: relative;\n}\n\n.footer {\n    display: flex;\n    /* height: 100px; */\n    /* border-top: 1px solid var(--border-color); */\n    position: fixed;\n    bottom: 20px;\n    /* width: 100%; */\n    left: 50%;\n    box-shadow: 0px -50px 24px -20px var(--background-light);\n    /* box-shadow: -150px -40px 21px -30px black; */\n\n}\n\n.footer > .footer-left {\n    flex: 0 0 300px;\n    background-color: var(--background-color);\n    border-right: 1px solid var(--border-color);\n}\n\n.footer > .footer-right {\n    flex: 1;\n    background-color: var(--background-light);\n}\n\n.right-first-header {\n    padding-top: 20px;\n    padding-left: 10px;\n    margin-left: 30px;\n    font-size: 25px;\n    border-bottom: 1px solid var(--border-dark);\n    width: clamp(300px, 70%, 700px);\n    color: var(--text-color);\n}\n\n.right-first-section {\n    padding-right: clamp(10px, 9%, 100px);\n    padding-left: clamp(10px, 9%, 100px);\n    /* padding-left: minmax(10px, 100px); */\n    padding-top: 50px;\n    height: 100%;\n    width: 100%;\n    /* background-color: black; */\n    /* overflow: auto; */\n    display: flex;\n    flex-direction: column;\n    gap: 3px;\n    /* align-items: center; */\n    position: relative;\n    margin-bottom: 150px;\n}\n\n.right-first-section > .task {\n    /* border: 1px solid var(--border-color); */\n    /* border-radius: 5px; */\n    width: 100%;\n    padding-left: 5px;\n    padding-bottom: 5px;\n    padding-top: 5px;\n\n    flex: 0;\n    /* width: clamp(200px, 60%, 800px); */\n    opacity: 1;\n    /* max-width: 500px; */\n    transition: all 175ms ease-in;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    /* gap: 50px; */\n    /* box-shadow: 0px 1px 5px 0px gray; */\n    /* border-radius: 5px; */\n    position: relative;\n    cursor: pointer;\n    gap: clamp(20px, 5%, 40px);\n    min-width: 300px;\n}\n\n\n\n.right-first-section > .task:hover > .task-right-section > .task-title-field,\n.right-first-section > .task:hover > .task-right-section > .task-date-field {\n    transform: translateX(-10px);\n}\n\n.right-first-section > .task > .task-left-section {\n    width: 20px;\n    height: 20px;\n    cursor: pointer;\n    transition: transform 0.1s ease;\n\n    /* transition: all 1s ease; */\n}\n\n.right-first-section > .task > .task-left-section.checked svg path,\n.right-first-section > .task > .task-left-section.checked svg circle {\n    transition: all 0.3s ease;\n    stroke: var(--checkbox-color);\n    stroke-width: 1px;\n}\n\n.right-first-section > .task > .task-left-section.checked {\n    transform: scale(1.1);\n}\n\n.right-first-section > .task > .task-left-section.unchecked svg path {\n    opacity: 0;\n}\n\n\n.right-first-section > .task:hover > .task-left-section {\n    transform: scale(1.1);\n    transition: transform 0.1s ease;\n}\n\n.right-first-section > .task:hover > .task-left-section circle {\n    stroke: var(--checkbox-color);\n}\n\n.right-first-section > .task:hover > .task-left-section path, \n.right-first-section > .task:hover > .task-left-section circle {\n    /* stroke: red; */\n    /* stroke-width: 1px; */\n    transition: all 0.3s ease-in-out;\n}\n\n.right-first-section > .task > .task-left-section > svg circle {\n    fill: none;\n    stroke: var(--text-muted);\n}\n\n.right-first-section > .task > .task-left-section > svg path {\n    fill: none;\n    stroke: var(--text-muted);\n}\n\n.right-first-section > .task > .task-right-section {\n    width: 100%;\n    display: grid;\n    grid-template-columns: auto;\n    grid-template-rows: auto;\n    /* gap: 5px; */\n    /* position: relative; */\n    align-items: center;\n}\n\n/* .right-first-section > .task > .task-right-section:hover > .task-notes-field {\n    transition: all 1s ease;\n    display: block;\n    grid-row: 4 / 5;\n    grid-column: 1 / 3;\n} */\n\n.right-first-section > .task > .task-right-section:hover {\n    transition: all 1s ease;\n}\n\n\n\n.right-first-section > .task > .task-right-section > .task-project > * {\n    padding: 1px 5px 1px 5px;\n    border-radius: 5px;\n    border: 1px solid var(--border-dark);\n    font-size: 12px;\n}\n\n.right-first-section > .task > .task-right-section > .task-project {\n    grid-column: 1 / 2;\n    grid-row: 1 / 2;\n\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    /* justify-self: end; */\n}\n\n.right-first-section > .task > .task-right-section > .task-title-field {\n    grid-column: 1 / 2;\n    grid-row: 2 / 3;\n    font-size: 15px;\n}\n\n.right-first-section > .task > .task-right-section > .task-date-field {\n    grid-column: 1 / 2;\n    grid-row: 4 / 5;\n    font-size: 12px;\n}\n\n.right-first-section > .task > .task-right-section > .task-notes-field {\n    grid-column: 1 / 2;\n    grid-row: 3 / 4;\n    font-size: 12px;\n}\n\n.right-first-section > .task > .task-right-section > .task-delete-button {\n    grid-column: 2 / 3;\n    grid-row: 2 / 3;\n    font-size: 12px;\n    justify-self: end;\n    transform: scale(0.7);\n    transition: all 0.3s ease;\n    opacity: 0;\n\n}\n\n.right-first-section > .task > .task-right-section:hover > .task-delete-button {\n    /* transform: rotate(90deg); */\n    opacity: 1;\n}\n\n.right-first-section > .task > .task-right-section > .task-delete-button span {\n    color: var(--accent-color);\n    background-color: var(--background-light);\n}\n\n.right-first-section > .task > .task-right-section:hover > .task-delete-button span {\n    transition: all 0.3s ease;\n    border-radius: 50%;\n    color: var(--accent-color);\n    background-color: var(--background-light);\n}\n\n.right-first-section > .task > .task-right-section:hover > .task-delete-button:hover span {\n    /* transform: rotate(90deg); */\n    background-color: var(--accent-color);\n    color: var(--background-light);\n\n}\n\n\n.right-first-section > .task > .task-right-section > .task-date-field::before {\n    content: \"Due: \";\n}\n\n\n\n.right-first-section > .task-divider {\n    min-height: 1px;\n    width: 100%;\n    background-color: var(--border-color);\n    transition: all 175ms ease-in;\n    opacity: 1;\n    min-width: 300px;\n}\n\n.right-first-section > .task.hidden,\n.right-first-section > .task-divider.hidden {\n    transition: all 175ms ease-in;\n    opacity: 0;\n}\n\n.right-first-section > .task > div > div {\n    opacity: 1;\n    transition: all 175ms ease-in;\n}\n\n.right-first-section > .task > div > div.hidden {\n    opacity: 0;\n}\n\n.task-project-color {\n    height: 10px;\n    width: 10px;\n    border-radius: 50%;\n    border: 0.5px solid var(--text-muted);\n}\n\n\n\n\n/* Left div layout */\n\n.left > .left-first-section {\n    margin-top: 20px;\n    /* overflow: auto; */\n    flex: 0 0 200px;\n    /* margin-left: 10px; */\n}\n\n.left > .left-second-section {\n    margin-top: 20px;\n    /* overflow: auto; */\n    flex: 1 0 200px;\n    /* margin-left: 10px; */\n}\n\n\n\n.left > .left-first-section > p {\n    padding-left: 20px;\n    font-style: italic;\n    font-weight: 200;\n    height: 50px;\n    display: flex;\n    align-items: center;\n}\n\n.left > .left-first-section ul,\n.left > .left-second-section ul {\n    position: relative;\n}\n\n.left > .left-first-section li {\n    padding-left: 30px;\n    list-style: none;\n    height: 50px;\n    display: flex;\n    align-items: center;\n    z-index: 1;\n    position: relative;\n    cursor: pointer;\n    gap: 10px;\n}\n\n.left > .left-second-section li {\n    cursor: pointer;\n}\n\n.left > .left-first-section li > .image {\n    height: 20px;\n    width: 20px;\n\n}\n\n\n/* Slider on views */\n\n.left > .left-first-section .task-animation,\n.left > .left-second-section li[data-active='true']~.task-animation {\n    position: absolute;\n    /* top: 0; */\n    height: 50px;\n    border-left: 6px solid var(--accent-light);\n    z-index: 0;\n    transition: all 0.3s ease;\n    opacity: 0;\n}\n\n\n.views > li:nth-child(1)[data-active='true']~.task-animation {\n    width: 100%;\n    top: 0;\n    opacity: 1;\n}\n\n.views > li:nth-child(2)[data-active='true']~.task-animation {\n    width: 100%;\n    top: 50px;\n    opacity: 1;\n}\n\n.views > li:nth-child(3)[data-active='true']~.task-animation {\n    width: 100%;\n    top: 100px;\n    opacity: 1;\n}\n\n\n/* Views styles */\n\n.left > .left-first-section li[data-active='false']:hover,\n.left > .left-second-section li:hover {\n    background-color: var(--elements-hover);\n}\n\n.left > .left-first-section li[data-active='true'] > div > svg {\n    fill: var(--accent-color);\n}\n\n.left > .left-first-section li[data-active='true'] > p {\n    color: var(--accent-color);\n}\n\n.left > .left-second-section li.font-accent > div {\n    color: var(--accent-color);\n}\n\n.left > .left-first-section li[data-active='false']:active,\n.left > .left-second-section li:active:not(.hovered-delete) {\n    background-color: #ba181b5b;\n}\n\n\n\n\n/* Slider on projects */\n\n.second-section-list > li:nth-child(1)[data-active='true']~.task-animation {\n    /* width: 100%; */\n    top: 0;\n    opacity: 1;\n}\n\n.second-section-list > li:nth-child(2)[data-active='true']~.task-animation {\n    /* width: 100%; */\n    top: 50px;\n    opacity: 1;\n}\n\n.second-section-list > li:nth-child(3)[data-active='true']~.task-animation {\n    /* width: 100%; */\n    top: 100px;\n    opacity: 1;\n}\n\n.second-section-list > li:nth-child(4)[data-active='true']~.task-animation {\n    /* width: 100%; */\n    top: 150px;\n    opacity: 1;\n}\n\n.second-section-list > li:nth-child(5)[data-active='true']~.task-animation {\n    /* width: 100%; */\n    top: 200px;\n    opacity: 1;\n}\n\n.second-section-list > li:nth-child(6)[data-active='true']~.task-animation {\n    /* width: 100%; */\n    top: 250px;\n    opacity: 1;\n}\n\n.second-section-list > li:nth-child(7)[data-active='true']~.task-animation {\n    /* width: 100%; */\n    top: 300px;\n    opacity: 1;\n}\n\n.second-section-list > li:nth-child(8)[data-active='true']~.task-animation {\n    /* width: 100%; */\n    top: 350px;\n    opacity: 1;\n}\n\n.second-section-list > li:nth-child(9)[data-active='true']~.task-animation {\n    /* width: 100%; */\n    top: 400px;\n    opacity: 1;\n}\n\n.second-section-list > li:nth-child(10)[data-active='true']~.task-animation {\n    /* width: 100%; */\n    top: 450px;\n    opacity: 1;\n}\n\n.second-section-list > li:nth-child(11)[data-active='true']~.task-animation {\n    /* width: 100%; */\n    top: 500px;\n    opacity: 1;\n}\n\n.second-section-list > li:nth-child(12)[data-active='true']~.task-animation {\n    /* width: 100%; */\n    top: 550px;\n    opacity: 1;\n}\n\n.left > .left-second-section > p {\n    padding-left: 20px;\n    font-style: italic;\n    font-weight: 200;\n    height: 50px;\n    display: flex;\n    align-items: center;\n}\n\n.left > .left-second-section li {\n    padding-left: 30px;\n    list-style: none;\n    height: 50px;\n    display: flex;\n    align-items: center;\n    gap: 10px;\n}\n\n.left > .left-second-section .create-project {\n    /* margin-left: 50px; */\n    margin-top: 20px;\n    padding-left: 30px;\n    height: 50px;\n    display: flex;\n    width: 100%;\n    align-items: center;\n    gap: 10px;\n    /* justify-content: center; */\n    cursor: pointer;\n}\n\n.left > .left-second-section .create-project div {\n    /* font-style: italic; */\n    font-size: 15px;\n}\n\n.left > .left-second-section .create-project:hover {\n    background-color: #ba181b28;\n}\n\n.left > .left-second-section .create-project:active {\n    background-color: #ba181b5b\n}\n\n.left > .left-second-section .create-project > div:first-child{\n    height: 15px;\n    width: 15px;\n}\n\n\n/* Footer add new task button */\n\n.footer > .footer-right > .create-task {\n    /* height: 100%; */\n    /* width: calc(100% - 300px); */\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    cursor: pointer;\n    justify-content: center;\n}\n\n.footer > .footer-right > .create-task > .create-task-container {\n    width: 150px;\n    height: 50px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 10px;\n    /* border-radius: 10px; */\n    /* border: 0.5px solid var(--border-dark); */\n    box-shadow: 0px 0px 5px 2px var(--border-color);\n    transition: all 0.1s ease-in-out;\n\n\n    border-radius: 5px;\n    background: #e0e0e0;\n    /* box-shadow:  8px 8px 16px #9f9f9f,\n                 -8px -8px 16px #ffffff; */\n}\n\n\n\n.footer > .footer-right > .create-task > .create-task-container div:nth-child(2) {\n    font-size: 20px;\n}\n\n.footer > .footer-right > .create-task > .create-task-container > div:first-child {\n    height: 20px;\n    width: 20px;\n}\n\n.footer > .footer-right > .create-task > .create-task-container:hover {\n    background-color: var(--button-hover);\n    transform: scale(1.1);\n\n}\n\n.footer > .footer-right > .create-task > .create-task-container:active {\n    background-color: var(--button-active)\n}\n\n\n/* Dialog layout and animations */\n\ndialog {\n    position: absolute;\n    margin: auto;\n    padding-left: 35px;\n    padding-right: 35px;\n    padding-top: 10px;\n    padding-bottom: 20px;\n    /* padding-left: 35px; */\n    border-radius: 5px;\n    border: 0.5px solid var(--border-color);\n}\n\ndialog:focus {\n    outline: none;\n}\n\ndialog.hidden {\n    opacity: 0;\n    top: -200%;\n    transform: scale(0.5);\n    transition: opacity 300ms ease-in-out, \n                top 1000ms ease-in-out,\n                transform 1000ms ease-in-out;\n}\n\ndialog.hidden > form > * {\n    position: relative;\n    top: 10px;\n    opacity: 0;\n}\n\ndialog.displayed {\n    opacity: 1;\n    top: 0%;\n    transform: scale(1);\n    transition: transform 300ms cubic-bezier(0.18,0.89,0.43,1.19);\n    /* transition: transform 300ms ease; */\n}\n\ndialog.displayed > form > * {\n    top: 0px;\n    opacity: 1;\n    /* background-color: black; */\n}\n\ndialog.displayed.new-project > form .project-dialog-name {\n    transition: opacity 300ms ease-in-out 200ms;\n}\n\ndialog.displayed.new-project > form .input-container {\n    transition: opacity 300ms ease-in-out 250ms;\n}\n\ndialog.displayed.new-project > form .project-name-field-div {\n    transition: opacity 300ms ease-in-out 300ms;\n}\n\ndialog.displayed.new-project > form .project-color-field-div {\n    transition: opacity 300ms ease-in-out 350ms;\n}\n\ndialog.displayed.new-project > form > button {\n    transition: opacity 300ms ease-in-out 400ms;\n}\n\ndialog.displayed.new-project > form > .close-project-dialog {\n    transition: opacity 300ms ease-in-out 450ms;\n}\n\n\ndialog.displayed.new-task > form .task-dialog-name {\n    transition: opacity 300ms ease-in-out 200ms;\n}\n\ndialog.displayed.new-task > form > .task-project-field-div {\n    transition: opacity 300ms ease-in-out 250ms;\n}\n\ndialog.displayed.new-task > form > .task-title-field-div {\n    transition: opacity 300ms ease-in-out 300ms;\n}\n\ndialog.displayed.new-task > form > .task-notes-field-div {\n    transition: opacity 300ms ease-in-out 350ms;\n}\n\ndialog.displayed.new-task > form > .task-priority-field-div {\n    transition: opacity 300ms ease-in-out 400ms;\n}\n\ndialog.displayed.new-task > form > .task-date-field-div {\n    transition: opacity 300ms ease-in-out 450ms;\n}\n\ndialog.displayed.new-task > form > button {\n    transition: opacity 300ms ease-in-out 500ms, background-color 0.3s ease, border-color 0.1s ease;\n}\n\ndialog.displayed.new-task > form > .close-task-dialog {\n    transition: opacity 300ms ease-in-out 550ms;\n}\n\ndialog.displayed.task-delete > form > button {\n    transition: opacity 100ms ease-in-out 200ms, background-color 0.3s ease, border-color 0.1s ease;\n}\n\n\n.delete-project {\n    width: 20px;\n    height: 20px;\n    margin-left: auto;\n    margin-right: 20px;\n    opacity: 0;\n    border-radius: 50%;\n    fill: var(--accent-color);\n    transition: all 0.3s ease;\n}\n\n.delete-project:hover {\n    fill: var(--background-light);\n    background-color: var(--accent-color);\n}\n\nli.project:hover > .delete-project {\n    opacity: 1;\n}\n\n.new-project,\n.new-task,\n.task-delete {\n    width: 400px;\n    background-color: var(--background-light);\n}\n\n.new-project > form,\n.new-task > form {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    height: 100%;\n}\n\n.task-delete > form {\n    display: grid;\n    gap: 10px;\n    height: 100%;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n}\n\n.task-delete > form > div {\n    grid-column: 1 / 3;\n    grid-row: 1 / 2;\n    justify-self: center;\n}\n\n.task-delete > form > button:nth-child(1) {\n    grid-column: 2 / 3;\n    grid-row: 2 / 3;\n}\n\n.task-delete > form > button:nth-child(2) {\n    grid-column: 1 / 2;\n    grid-row: 2 / 3;\n}\n\n\n.new-task > form > .task-project-field-div,\n.new-task > form > .task-title-field-div,\n.new-task > form > .task-notes-field-div,\n.new-task > form > .task-priority-field-div,\n.new-task > form > .task-date-field-div,\n.new-project > form  .project-name-field-div,\n.new-project > form  .project-color-field-div {\n    display: flex;\n    flex-direction: column;\n}\n\n.new-task > form > .task-dialog-name,\n.new-project > form > .project-dialog-name {\n    align-self: center;\n    font-size: 25px;\n    margin-bottom: 15px;\n}\n\n.new-task > form > button,\n.new-project > form > button {\n    margin-top: 25px;\n    height: 40px;\n    width: 50%;\n    align-self: center;\n    border-radius: 5px;\n    border: 0.5px solid var(--border-dark);\n    transition: background-color 1s ease;\n    background-color: var(--secondary-light);\n    cursor: pointer;\n}\n\n\n.task-delete > form > button[type='submit'],\n.task-delete > form > button[type='close'] {\n    margin-top: 25px;\n    height: 40px;\n    width: 100%;\n    align-self: center;\n    border-radius: 5px;\n    border: 0.5px solid var(--border-dark);\n    transition: background-color 1s ease;\n    background-color: var(--secondary-light);\n    cursor: pointer;\n}\n\n.task-delete > form > button[type='submit'] {\n    background-color: var(--secondary-light);\n}\n\n.task-delete > form > button[type='close'] {\n    background-color: var(--close-button);\n}\n\n.task-delete > form > button[type=\"close\"]:hover {\n    background-color: var(--close-button-hover);\n}\n\n.task-delete > form > button[type=\"close\"]:active {\n    background-color: var(--close-button-active);\n}\n\n.new-task > form > button:focus,\n.new-project > form > button:focus,\n.task-delete > form > button:focus {\n    outline: none;\n}\n\n.new-task > form > button:hover,\n.new-project > form > button:hover,\n.task-delete > form > button[type=\"submit\"]:hover {\n    border: 0.5px solid black;\n    background-color: var(--secondary-color);\n}\n\n.new-task > form > button:active,\n.new-project > form > button:active,\n.task-delete > form > button[type=\"submit\"]:active {\n    background-color: var(--secondary-dark);\n}\n\n\n\n.new-task > form > .close-task-dialog,\n.new-project > form > .close-project-dialog {\n    position: absolute;\n    right: 10px;\n    top: 10px;\n}\n\n.new-task > form > .close-task-dialog span,\n.new-project > form > .close-project-dialog span {\n    transform: scale(1);\n    opacity: 0.7;\n    cursor: pointer;\n    transition: transform 0.25s, opacity 0.25s;\n}\n\n.new-task > form > .close-task-dialog:hover span,\n.new-project > form > .close-project-dialog:hover span {\n    transform: rotate(90deg) scale(1.1);\n    opacity: 1;\n    cursor: pointer;\n}\n\n/* Dialog input styles */\n\n.new-task > form input,\n.new-task > form select,\n.new-task > form textarea,\n.new-project > form input,\n.new-project > form select,\n.new-project > form textarea {\n    outline: none;\n    padding: 10px;\n    border: 0.5px solid var(--border-color);\n    transition: all 0.25s ease;\n    border-radius: 5px;\n}\n\n.new-task > form input:hover,\n.new-task > form select:hover,\n.new-task > form textarea:hover,\n.new-project > form input:hover,\n.new-project > form select:hover,\n.new-project > form textarea:hover {\n    outline: none;\n    padding: 10px;\n    border: 0.5px solid black;\n}\n\n.new-task > form input::placeholder,\n.new-task > form select::placeholder,\n.new-task > form textarea::placeholder,\n.new-project > form input::placeholder,\n.new-project > form select::placeholder,\n.new-project > form textarea::placeholder {\n    color: var(--text-muted);\n    font-style: italic;\n}\n\n.new-task > form textarea,\n.new-project > form textarea {\n    resize: none;\n}\n\n.project-color-field-div {\n    align-self: center;\n}\n\n.new-project > form #project-color {\n    height: 40px;\n    width: 80px;\n    padding: 5px;\n    cursor: pointer;\n}\n\n.new-project > form .input-container {\n    display: flex;\n    width: 100%;\n    justify-content: space-around;\n}\n\n\n.icon {\n    width: 15px;\n    height: 15px;\n    /* fill: red; */\n    display: flex;\n    justify-content: center;\n}\n\n\n@media (max-width: 850px) {\n    \n}\n\n\n.no-tasks-filler {\n    color: var(--text-muted);\n    font-style: italic;\n}"],"sourceRoot":""}]);
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

                const projectLineItemDeleteButton = document.createElement('div');
                projectLineItemDeleteButton.classList.add('delete-project');
                projectLineItemDeleteButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete-outline</title><path d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" /></svg>`;
                projectLineItem.append(projectLineItemDeleteButton);


                projectLineItemDeleteButton.addEventListener('mouseover', () => {
                    projectLineItemDeleteButton.classList.add('hovered');
                    projectLineItem.classList.add('hovered-delete');
                }) 

                projectLineItemDeleteButton.addEventListener('mouseleave', () => {
                    projectLineItemDeleteButton.classList.remove('hovered');
                    projectLineItem.classList.remove('hovered-delete');
                }) 

                projectLineItemDeleteButton.addEventListener('click', () => {
                    
                    console.log(projectLineItemDeleteButton);
                })



                projectLineItem.addEventListener('click', () => {
                    

                    const deleteHovered = document.querySelector('.delete-project.hovered');
                    if (!deleteHovered) {
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

                    const deleteHovered = document.querySelector('.delete-project.hovered');
                    if (!deleteHovered) {
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

                // const afterElement = document.createElement('div');
                // afterElement.classList.add('hover-effect');
                // taskLineItemRightSection.append(afterElement);
                // afterElement.textContent = element.notes;

                // if (afterElement.textContent !== '') {
                //     taskLineItemRightSection.addEventListener('mouseover', () => {
                //         afterElement.style.opacity = "1";
                //         taskLineItemRightSection.addEventListener('mouseout', () => {
                //             afterElement.style.opacity = "0";
                //         })
                //     })
                // }

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

                            cancelTaskDeleteButton.addEventListener('click', () => {
                                // console.log(TaskModule.getAllTasks());
                                // console.log(TaskModule.getAllTasks());
                                DOMModule.createDialogs.handleCloseAnimation(confirmTaskDeleteForm, confirmTaskDeleteDialog, 'submit', confirmTaskDeleteForm);
                                // DOMModule.createRightDiv.createTasks(TaskModule.getProjectTasks(TaskModule.getActiveProject(), TaskModule.getTasksFromActiveView()));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBOztBQUVBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQSwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBLDBCQUEwQjtBQUMxQjs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7O0FBRUE7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQixrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCLCtDQUErQztBQUMvQztBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7Ozs7QUFJQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLGlGQUFpRixZQUFZLGFBQWEsYUFBYSxjQUFjLGFBQWEsdUJBQXVCLHVCQUF1Qix3QkFBd0IsYUFBYSxhQUFhLGFBQWEsdUJBQXVCLGNBQWMsYUFBYSx1QkFBdUIsYUFBYSx3QkFBd0IsYUFBYSx1QkFBdUIsYUFBYSx3QkFBd0IsYUFBYSx1QkFBdUIsdUJBQXVCLGNBQWMsYUFBYSx1QkFBdUIsd0JBQXdCLGFBQWEsYUFBYSxjQUFjLHVCQUF1Qix1QkFBdUIsUUFBUSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyx3QkFBd0IsYUFBYSxXQUFXLE9BQU8sS0FBSyx3QkFBd0IsV0FBVyxPQUFPLEtBQUssd0JBQXdCLFdBQVcsUUFBUSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssU0FBUyxPQUFPLGFBQWEsTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGNBQWMsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGNBQWMsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsU0FBUyxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLGFBQWEsYUFBYSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sU0FBUyxNQUFNLEtBQUssWUFBWSxTQUFTLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxZQUFZLFVBQVUsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsY0FBYyxRQUFRLEtBQUssWUFBWSxTQUFTLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFVBQVUsYUFBYSxNQUFNLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksU0FBUyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxXQUFXLE9BQU8sYUFBYSxPQUFPLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxhQUFhLE9BQU8sWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxVQUFVLGFBQWEsTUFBTSxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssS0FBSyxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sYUFBYSxNQUFNLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGVBQWUsYUFBYSxhQUFhLE1BQU0sT0FBTyxTQUFTLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGNBQWMsT0FBTyxLQUFLLEtBQUssT0FBTyxhQUFhLE1BQU0sWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sT0FBTyxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksUUFBUSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksUUFBUSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sT0FBTyxVQUFVLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLFFBQVEsV0FBVyxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLE9BQU8sTUFBTSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxRQUFRLE1BQU0sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxPQUFPLFVBQVUsT0FBTyxPQUFPLFlBQVksYUFBYSxPQUFPLE9BQU8sWUFBWSxTQUFTLE1BQU0sWUFBWSxXQUFXLFVBQVUsTUFBTSxNQUFNLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksV0FBVyxVQUFVLE9BQU8sYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxVQUFVLFlBQVksYUFBYSxPQUFP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Q0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjs7QUFFckI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0I7QUFDeEI7QUFD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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub3ZhdGFzay8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL25vdmF0YXNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9ub3ZhdGFzay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL25vdmF0YXNrLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9ub3ZhdGFzay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9ub3ZhdGFzay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbm92YXRhc2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbm92YXRhc2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbm92YXRhc2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9ub3ZhdGFzay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL25vdmF0YXNrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL25vdmF0YXNrL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL25vdmF0YXNrL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9ub3ZhdGFzay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL25vdmF0YXNrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbm92YXRhc2svd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL25vdmF0YXNrLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TWF0ZXJpYWwrU3ltYm9scytPdXRsaW5lZDpvcHN6LHdnaHQsRklMTCxHUkFEQDIwLi40OCwxMDAuLjcwMCwwLi4xLC01MC4uMjAwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Sm9zZWZpbitTYW5zOndnaHRAMTAwJmZhbWlseT1MYXRvOndnaHRAMzAwJmZhbWlseT1OdW5pdG86aXRhbCx3Z2h0QDAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwJmZhbWlseT1Sb2JvdG86d2dodEAxMDAmZmFtaWx5PVJ1YmlrOndnaHRAMzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAgIC8qIFByaW1hcnkgY29sb3JzICovXG4gICAgLS1wcmltYXJ5LWNvbG9yOiAjMzQ5OGRiO1xuICAgIC0tcHJpbWFyeS1kYXJrOiAjMjk4MGI5O1xuICAgIC0tcHJpbWFyeS1saWdodDogIzg3Q0VGQTtcblxuICAgIC8qIFNlY29uZGFyeSBjb2xvcnMgKi9cbiAgICAtLXNlY29uZGFyeS1jb2xvcjogIzJlY2M3MTsgLyp1c2VkKi9cbiAgICAtLXNlY29uZGFyeS1kYXJrOiAjMjdhZTYwOyAvKnVzZWQqL1xuICAgIC0tc2Vjb25kYXJ5LWxpZ2h0OiAjYzhlNmM5OyAvKnVzZWQqL1xuXG4gICAgLyogQWNjZW50IGNvbG9ycyAqL1xuICAgIC0tYWNjZW50LWNvbG9yOiAjQkExODFCO1xuICAgIC0tYWNjZW50LWRhcms6ICNBNDE2MUE7XG4gICAgLS1hY2NlbnQtbGlnaHQ6ICNFNTM4M0I7IC8qdXNlZCovXG4gICAgLS1hY2NlbnQtZGFya2VyOiAjNjYwNzA4O1xuXG4gICAgLyogQmFja2dyb3VuZCBjb2xvcnMgKi9cbiAgICAtLWJhY2tncm91bmQtY29sb3I6ICNGNUVCRTA7IC8qdXNlZCovXG4gICAgLS1iYWNrZ3JvdW5kLWRhcms6ICNiZGMzYzc7XG4gICAgLS1iYWNrZ3JvdW5kLWxpZ2h0OiAjRURFREU5OyAvKnVzZWQqL1xuXG4gICAgLyogVGV4dCBjb2xvcnMgKi9cbiAgICAtLXRleHQtY29sb3I6ICMzMzM7IC8qdXNlZCovXG4gICAgLS10ZXh0LWxpZ2h0OiAjZmZmO1xuICAgIC0tdGV4dC1tdXRlZDogIzg4ODsgLyp1c2VkKi9cblxuICAgIC8qIEJvcmRlciBjb2xvcnMgKi9cbiAgICAtLWJvcmRlci1jb2xvcjogI0Q2Q0NDMjsgLyp1c2VkKi9cbiAgICAtLWJvcmRlci1kYXJrOiAjOTk5OyAvKnVzZWQqL1xuICAgIC0tYm9yZGVyLWxpZ2h0OiAjZWVlO1xuXG4gICAgLyogQnV0dG9uIGNvbG9ycyAqL1xuICAgIC0tYnV0dG9uLWhvdmVyOiAjYmExODFiMjg7IC8qdXNlZCovXG4gICAgLS1idXR0b24tYWN0aXZlOiAjYmExODFiNWI7IC8qdXNlZCovXG5cbiAgICAtLWNsb3NlLWJ1dHRvbjogcmdiKDE2OSwgMTY5LCAxNjkpO1xuICAgIC0tY2xvc2UtYnV0dG9uLWhvdmVyOiByZ2IoMTM2LCAxMzYsIDEzNik7XG4gICAgLS1jbG9zZS1idXR0b24tYWN0aXZlOiByZ2IoMTA4LCAxMDgsIDEwOCk7XG5cbiAgICAtLWVsZW1lbnRzLWhvdmVyOiAjYmExODFiMjg7IC8qdXNlZCovXG4gICAgLS1jaGVja2JveC1jb2xvcjogZ3JlZW47IC8qdXNlZCovXG59XG5cblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDRweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgei1pbmRleDogOTk5OTtcbiAgfVxuICBcbiAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtbGlnaHQpOyAvKiBDaGFuZ2UgdGhlIGNvbG9yIHRvIHlvdXIgcHJlZmVyZW5jZSAqL1xuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgICAgei1pbmRleDogOTk5OTtcbiAgfVxuICBcbiAgOjotd2Via2l0LXNjcm9sbGJhcjpob3ZlciB7XG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWxpZ2h0KTsgLyogQ2hhbmdlIHRoZSBjb2xvciB0byB5b3VyIHByZWZlcmVuY2UgKi9cbiAgICAgIHotaW5kZXg6IDk5OTk7XG4gIH1cbiAgXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWRhcmspOyAvKiBDaGFuZ2UgdGhlIGNvbG9yIHRvIHlvdXIgcHJlZmVyZW5jZSAqL1xuICAgICAgei1pbmRleDogOTk5OTsgICAgXG4gIH1cblxuXG46OmJhY2tkcm9wIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwODg7XG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XG59XG5cbi5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHtcbiAgICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczpcbiAgICAnRklMTCcgMCxcbiAgICAnd2dodCcgNDAwLFxuICAgICdHUkFEJyAwLFxuICAgICdvcHN6JyAyNFxufVxuXG5cbi8qIEdlbmVyYWwgbGF5b3V0ICovXG5cbioge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xuICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogMzAwO1xufVxuXG5ib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWxpZ2h0KTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbi5tYWluIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgyMDBweCwgMWZyKSAzZnI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubWFpbiA+IC5sZWZ0IHtcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xuICAgIGZsZXg6IDAgMCAzMDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgICAvKiBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEwMHB4KTsgKi9cbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgLyogb3ZlcmZsb3c6IGF1dG87ICovXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICAgIC8qIHBvc2l0aW9uOiBzdGlja3k7ICovXG59XG5cbi5tYWluID4gLnJpZ2h0IHtcbiAgICBmbGV4OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTAwcHgpO1xuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5mb290ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgLyogaGVpZ2h0OiAxMDBweDsgKi9cbiAgICAvKiBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTsgKi9cbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAyMHB4O1xuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xuICAgIGxlZnQ6IDUwJTtcbiAgICBib3gtc2hhZG93OiAwcHggLTUwcHggMjRweCAtMjBweCB2YXIoLS1iYWNrZ3JvdW5kLWxpZ2h0KTtcbiAgICAvKiBib3gtc2hhZG93OiAtMTUwcHggLTQwcHggMjFweCAtMzBweCBibGFjazsgKi9cblxufVxuXG4uZm9vdGVyID4gLmZvb3Rlci1sZWZ0IHtcbiAgICBmbGV4OiAwIDAgMzAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbn1cblxuLmZvb3RlciA+IC5mb290ZXItcmlnaHQge1xuICAgIGZsZXg6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1saWdodCk7XG59XG5cbi5yaWdodC1maXJzdC1oZWFkZXIge1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcbiAgICBmb250LXNpemU6IDI1cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1kYXJrKTtcbiAgICB3aWR0aDogY2xhbXAoMzAwcHgsIDcwJSwgNzAwcHgpO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcbn1cblxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24ge1xuICAgIHBhZGRpbmctcmlnaHQ6IGNsYW1wKDEwcHgsIDklLCAxMDBweCk7XG4gICAgcGFkZGluZy1sZWZ0OiBjbGFtcCgxMHB4LCA5JSwgMTAwcHgpO1xuICAgIC8qIHBhZGRpbmctbGVmdDogbWlubWF4KDEwcHgsIDEwMHB4KTsgKi9cbiAgICBwYWRkaW5nLXRvcDogNTBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7ICovXG4gICAgLyogb3ZlcmZsb3c6IGF1dG87ICovXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogM3B4O1xuICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi1ib3R0b206IDE1MHB4O1xufVxuXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrIHtcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpOyAqL1xuICAgIC8qIGJvcmRlci1yYWRpdXM6IDVweDsgKi9cbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgIHBhZGRpbmctdG9wOiA1cHg7XG5cbiAgICBmbGV4OiAwO1xuICAgIC8qIHdpZHRoOiBjbGFtcCgyMDBweCwgNjAlLCA4MDBweCk7ICovXG4gICAgb3BhY2l0eTogMTtcbiAgICAvKiBtYXgtd2lkdGg6IDUwMHB4OyAqL1xuICAgIHRyYW5zaXRpb246IGFsbCAxNzVtcyBlYXNlLWluO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgLyogZ2FwOiA1MHB4OyAqL1xuICAgIC8qIGJveC1zaGFkb3c6IDBweCAxcHggNXB4IDBweCBncmF5OyAqL1xuICAgIC8qIGJvcmRlci1yYWRpdXM6IDVweDsgKi9cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGdhcDogY2xhbXAoMjBweCwgNSUsIDQwcHgpO1xuICAgIG1pbi13aWR0aDogMzAwcHg7XG59XG5cblxuXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrOmhvdmVyID4gLnRhc2stcmlnaHQtc2VjdGlvbiA+IC50YXNrLXRpdGxlLWZpZWxkLFxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzazpob3ZlciA+IC50YXNrLXJpZ2h0LXNlY3Rpb24gPiAudGFzay1kYXRlLWZpZWxkIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTEwcHgpO1xufVxuXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrID4gLnRhc2stbGVmdC1zZWN0aW9uIHtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzIGVhc2U7XG5cbiAgICAvKiB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTsgKi9cbn1cblxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzayA+IC50YXNrLWxlZnQtc2VjdGlvbi5jaGVja2VkIHN2ZyBwYXRoLFxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzayA+IC50YXNrLWxlZnQtc2VjdGlvbi5jaGVja2VkIHN2ZyBjaXJjbGUge1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgc3Ryb2tlOiB2YXIoLS1jaGVja2JveC1jb2xvcik7XG4gICAgc3Ryb2tlLXdpZHRoOiAxcHg7XG59XG5cbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2sgPiAudGFzay1sZWZ0LXNlY3Rpb24uY2hlY2tlZCB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrID4gLnRhc2stbGVmdC1zZWN0aW9uLnVuY2hlY2tlZCBzdmcgcGF0aCB7XG4gICAgb3BhY2l0eTogMDtcbn1cblxuXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrOmhvdmVyID4gLnRhc2stbGVmdC1zZWN0aW9uIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgZWFzZTtcbn1cblxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzazpob3ZlciA+IC50YXNrLWxlZnQtc2VjdGlvbiBjaXJjbGUge1xuICAgIHN0cm9rZTogdmFyKC0tY2hlY2tib3gtY29sb3IpO1xufVxuXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrOmhvdmVyID4gLnRhc2stbGVmdC1zZWN0aW9uIHBhdGgsIFxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzazpob3ZlciA+IC50YXNrLWxlZnQtc2VjdGlvbiBjaXJjbGUge1xuICAgIC8qIHN0cm9rZTogcmVkOyAqL1xuICAgIC8qIHN0cm9rZS13aWR0aDogMXB4OyAqL1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xufVxuXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrID4gLnRhc2stbGVmdC1zZWN0aW9uID4gc3ZnIGNpcmNsZSB7XG4gICAgZmlsbDogbm9uZTtcbiAgICBzdHJva2U6IHZhcigtLXRleHQtbXV0ZWQpO1xufVxuXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrID4gLnRhc2stbGVmdC1zZWN0aW9uID4gc3ZnIHBhdGgge1xuICAgIGZpbGw6IG5vbmU7XG4gICAgc3Ryb2tlOiB2YXIoLS10ZXh0LW11dGVkKTtcbn1cblxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzayA+IC50YXNrLXJpZ2h0LXNlY3Rpb24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcbiAgICAvKiBnYXA6IDVweDsgKi9cbiAgICAvKiBwb3NpdGlvbjogcmVsYXRpdmU7ICovXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLyogLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzayA+IC50YXNrLXJpZ2h0LXNlY3Rpb246aG92ZXIgPiAudGFzay1ub3Rlcy1maWVsZCB7XG4gICAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZ3JpZC1yb3c6IDQgLyA1O1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcbn0gKi9cblxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzayA+IC50YXNrLXJpZ2h0LXNlY3Rpb246aG92ZXIge1xuICAgIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlO1xufVxuXG5cblxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzayA+IC50YXNrLXJpZ2h0LXNlY3Rpb24gPiAudGFzay1wcm9qZWN0ID4gKiB7XG4gICAgcGFkZGluZzogMXB4IDVweCAxcHggNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZGFyayk7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrID4gLnRhc2stcmlnaHQtc2VjdGlvbiA+IC50YXNrLXByb2plY3Qge1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcbiAgICBncmlkLXJvdzogMSAvIDI7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xuICAgIC8qIGp1c3RpZnktc2VsZjogZW5kOyAqL1xufVxuXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrID4gLnRhc2stcmlnaHQtc2VjdGlvbiA+IC50YXNrLXRpdGxlLWZpZWxkIHtcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzayA+IC50YXNrLXJpZ2h0LXNlY3Rpb24gPiAudGFzay1kYXRlLWZpZWxkIHtcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XG4gICAgZ3JpZC1yb3c6IDQgLyA1O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzayA+IC50YXNrLXJpZ2h0LXNlY3Rpb24gPiAudGFzay1ub3Rlcy1maWVsZCB7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xuICAgIGdyaWQtcm93OiAzIC8gNDtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5cbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2sgPiAudGFzay1yaWdodC1zZWN0aW9uID4gLnRhc2stZGVsZXRlLWJ1dHRvbiB7XG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xuICAgIGdyaWQtcm93OiAyIC8gMztcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjcpO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG4gICAgb3BhY2l0eTogMDtcblxufVxuXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrID4gLnRhc2stcmlnaHQtc2VjdGlvbjpob3ZlciA+IC50YXNrLWRlbGV0ZS1idXR0b24ge1xuICAgIC8qIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTsgKi9cbiAgICBvcGFjaXR5OiAxO1xufVxuXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrID4gLnRhc2stcmlnaHQtc2VjdGlvbiA+IC50YXNrLWRlbGV0ZS1idXR0b24gc3BhbiB7XG4gICAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1saWdodCk7XG59XG5cbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2sgPiAudGFzay1yaWdodC1zZWN0aW9uOmhvdmVyID4gLnRhc2stZGVsZXRlLWJ1dHRvbiBzcGFuIHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWxpZ2h0KTtcbn1cblxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzayA+IC50YXNrLXJpZ2h0LXNlY3Rpb246aG92ZXIgPiAudGFzay1kZWxldGUtYnV0dG9uOmhvdmVyIHNwYW4ge1xuICAgIC8qIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTsgKi9cbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xuICAgIGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWxpZ2h0KTtcblxufVxuXG5cbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2sgPiAudGFzay1yaWdodC1zZWN0aW9uID4gLnRhc2stZGF0ZS1maWVsZDo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIkR1ZTogXCI7XG59XG5cblxuXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrLWRpdmlkZXIge1xuICAgIG1pbi1oZWlnaHQ6IDFweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgIHRyYW5zaXRpb246IGFsbCAxNzVtcyBlYXNlLWluO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgbWluLXdpZHRoOiAzMDBweDtcbn1cblxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzay5oaWRkZW4sXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrLWRpdmlkZXIuaGlkZGVuIHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMTc1bXMgZWFzZS1pbjtcbiAgICBvcGFjaXR5OiAwO1xufVxuXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrID4gZGl2ID4gZGl2IHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zaXRpb246IGFsbCAxNzVtcyBlYXNlLWluO1xufVxuXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrID4gZGl2ID4gZGl2LmhpZGRlbiB7XG4gICAgb3BhY2l0eTogMDtcbn1cblxuLnRhc2stcHJvamVjdC1jb2xvciB7XG4gICAgaGVpZ2h0OiAxMHB4O1xuICAgIHdpZHRoOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIHZhcigtLXRleHQtbXV0ZWQpO1xufVxuXG5cblxuXG4vKiBMZWZ0IGRpdiBsYXlvdXQgKi9cblxuLmxlZnQgPiAubGVmdC1maXJzdC1zZWN0aW9uIHtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIC8qIG92ZXJmbG93OiBhdXRvOyAqL1xuICAgIGZsZXg6IDAgMCAyMDBweDtcbiAgICAvKiBtYXJnaW4tbGVmdDogMTBweDsgKi9cbn1cblxuLmxlZnQgPiAubGVmdC1zZWNvbmQtc2VjdGlvbiB7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAvKiBvdmVyZmxvdzogYXV0bzsgKi9cbiAgICBmbGV4OiAxIDAgMjAwcHg7XG4gICAgLyogbWFyZ2luLWxlZnQ6IDEwcHg7ICovXG59XG5cblxuXG4ubGVmdCA+IC5sZWZ0LWZpcnN0LXNlY3Rpb24gPiBwIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmxlZnQgPiAubGVmdC1maXJzdC1zZWN0aW9uIHVsLFxuLmxlZnQgPiAubGVmdC1zZWNvbmQtc2VjdGlvbiB1bCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubGVmdCA+IC5sZWZ0LWZpcnN0LXNlY3Rpb24gbGkge1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIGhlaWdodDogNTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgei1pbmRleDogMTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGdhcDogMTBweDtcbn1cblxuLmxlZnQgPiAubGVmdC1zZWNvbmQtc2VjdGlvbiBsaSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubGVmdCA+IC5sZWZ0LWZpcnN0LXNlY3Rpb24gbGkgPiAuaW1hZ2Uge1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcblxufVxuXG5cbi8qIFNsaWRlciBvbiB2aWV3cyAqL1xuXG4ubGVmdCA+IC5sZWZ0LWZpcnN0LXNlY3Rpb24gLnRhc2stYW5pbWF0aW9uLFxuLmxlZnQgPiAubGVmdC1zZWNvbmQtc2VjdGlvbiBsaVtkYXRhLWFjdGl2ZT0ndHJ1ZSddfi50YXNrLWFuaW1hdGlvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIC8qIHRvcDogMDsgKi9cbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCB2YXIoLS1hY2NlbnQtbGlnaHQpO1xuICAgIHotaW5kZXg6IDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICBvcGFjaXR5OiAwO1xufVxuXG5cbi52aWV3cyA+IGxpOm50aC1jaGlsZCgxKVtkYXRhLWFjdGl2ZT0ndHJ1ZSddfi50YXNrLWFuaW1hdGlvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdG9wOiAwO1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi52aWV3cyA+IGxpOm50aC1jaGlsZCgyKVtkYXRhLWFjdGl2ZT0ndHJ1ZSddfi50YXNrLWFuaW1hdGlvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdG9wOiA1MHB4O1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi52aWV3cyA+IGxpOm50aC1jaGlsZCgzKVtkYXRhLWFjdGl2ZT0ndHJ1ZSddfi50YXNrLWFuaW1hdGlvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdG9wOiAxMDBweDtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG5cbi8qIFZpZXdzIHN0eWxlcyAqL1xuXG4ubGVmdCA+IC5sZWZ0LWZpcnN0LXNlY3Rpb24gbGlbZGF0YS1hY3RpdmU9J2ZhbHNlJ106aG92ZXIsXG4ubGVmdCA+IC5sZWZ0LXNlY29uZC1zZWN0aW9uIGxpOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1lbGVtZW50cy1ob3Zlcik7XG59XG5cbi5sZWZ0ID4gLmxlZnQtZmlyc3Qtc2VjdGlvbiBsaVtkYXRhLWFjdGl2ZT0ndHJ1ZSddID4gZGl2ID4gc3ZnIHtcbiAgICBmaWxsOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xufVxuXG4ubGVmdCA+IC5sZWZ0LWZpcnN0LXNlY3Rpb24gbGlbZGF0YS1hY3RpdmU9J3RydWUnXSA+IHAge1xuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xufVxuXG4ubGVmdCA+IC5sZWZ0LXNlY29uZC1zZWN0aW9uIGxpLmZvbnQtYWNjZW50ID4gZGl2IHtcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcbn1cblxuLmxlZnQgPiAubGVmdC1maXJzdC1zZWN0aW9uIGxpW2RhdGEtYWN0aXZlPSdmYWxzZSddOmFjdGl2ZSxcbi5sZWZ0ID4gLmxlZnQtc2Vjb25kLXNlY3Rpb24gbGk6YWN0aXZlOm5vdCguaG92ZXJlZC1kZWxldGUpIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmExODFiNWI7XG59XG5cblxuXG5cbi8qIFNsaWRlciBvbiBwcm9qZWN0cyAqL1xuXG4uc2Vjb25kLXNlY3Rpb24tbGlzdCA+IGxpOm50aC1jaGlsZCgxKVtkYXRhLWFjdGl2ZT0ndHJ1ZSddfi50YXNrLWFuaW1hdGlvbiB7XG4gICAgLyogd2lkdGg6IDEwMCU7ICovXG4gICAgdG9wOiAwO1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi5zZWNvbmQtc2VjdGlvbi1saXN0ID4gbGk6bnRoLWNoaWxkKDIpW2RhdGEtYWN0aXZlPSd0cnVlJ11+LnRhc2stYW5pbWF0aW9uIHtcbiAgICAvKiB3aWR0aDogMTAwJTsgKi9cbiAgICB0b3A6IDUwcHg7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLnNlY29uZC1zZWN0aW9uLWxpc3QgPiBsaTpudGgtY2hpbGQoMylbZGF0YS1hY3RpdmU9J3RydWUnXX4udGFzay1hbmltYXRpb24ge1xuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xuICAgIHRvcDogMTAwcHg7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLnNlY29uZC1zZWN0aW9uLWxpc3QgPiBsaTpudGgtY2hpbGQoNClbZGF0YS1hY3RpdmU9J3RydWUnXX4udGFzay1hbmltYXRpb24ge1xuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xuICAgIHRvcDogMTUwcHg7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLnNlY29uZC1zZWN0aW9uLWxpc3QgPiBsaTpudGgtY2hpbGQoNSlbZGF0YS1hY3RpdmU9J3RydWUnXX4udGFzay1hbmltYXRpb24ge1xuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xuICAgIHRvcDogMjAwcHg7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLnNlY29uZC1zZWN0aW9uLWxpc3QgPiBsaTpudGgtY2hpbGQoNilbZGF0YS1hY3RpdmU9J3RydWUnXX4udGFzay1hbmltYXRpb24ge1xuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xuICAgIHRvcDogMjUwcHg7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLnNlY29uZC1zZWN0aW9uLWxpc3QgPiBsaTpudGgtY2hpbGQoNylbZGF0YS1hY3RpdmU9J3RydWUnXX4udGFzay1hbmltYXRpb24ge1xuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xuICAgIHRvcDogMzAwcHg7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLnNlY29uZC1zZWN0aW9uLWxpc3QgPiBsaTpudGgtY2hpbGQoOClbZGF0YS1hY3RpdmU9J3RydWUnXX4udGFzay1hbmltYXRpb24ge1xuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xuICAgIHRvcDogMzUwcHg7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLnNlY29uZC1zZWN0aW9uLWxpc3QgPiBsaTpudGgtY2hpbGQoOSlbZGF0YS1hY3RpdmU9J3RydWUnXX4udGFzay1hbmltYXRpb24ge1xuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xuICAgIHRvcDogNDAwcHg7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLnNlY29uZC1zZWN0aW9uLWxpc3QgPiBsaTpudGgtY2hpbGQoMTApW2RhdGEtYWN0aXZlPSd0cnVlJ11+LnRhc2stYW5pbWF0aW9uIHtcbiAgICAvKiB3aWR0aDogMTAwJTsgKi9cbiAgICB0b3A6IDQ1MHB4O1xuICAgIG9wYWNpdHk6IDE7XG59XG5cbi5zZWNvbmQtc2VjdGlvbi1saXN0ID4gbGk6bnRoLWNoaWxkKDExKVtkYXRhLWFjdGl2ZT0ndHJ1ZSddfi50YXNrLWFuaW1hdGlvbiB7XG4gICAgLyogd2lkdGg6IDEwMCU7ICovXG4gICAgdG9wOiA1MDBweDtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4uc2Vjb25kLXNlY3Rpb24tbGlzdCA+IGxpOm50aC1jaGlsZCgxMilbZGF0YS1hY3RpdmU9J3RydWUnXX4udGFzay1hbmltYXRpb24ge1xuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xuICAgIHRvcDogNTUwcHg7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLmxlZnQgPiAubGVmdC1zZWNvbmQtc2VjdGlvbiA+IHAge1xuICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ubGVmdCA+IC5sZWZ0LXNlY29uZC1zZWN0aW9uIGxpIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbn1cblxuLmxlZnQgPiAubGVmdC1zZWNvbmQtc2VjdGlvbiAuY3JlYXRlLXByb2plY3Qge1xuICAgIC8qIG1hcmdpbi1sZWZ0OiA1MHB4OyAqL1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAxMHB4O1xuICAgIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxlZnQgPiAubGVmdC1zZWNvbmQtc2VjdGlvbiAuY3JlYXRlLXByb2plY3QgZGl2IHtcbiAgICAvKiBmb250LXN0eWxlOiBpdGFsaWM7ICovXG4gICAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4ubGVmdCA+IC5sZWZ0LXNlY29uZC1zZWN0aW9uIC5jcmVhdGUtcHJvamVjdDpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JhMTgxYjI4O1xufVxuXG4ubGVmdCA+IC5sZWZ0LXNlY29uZC1zZWN0aW9uIC5jcmVhdGUtcHJvamVjdDphY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNiYTE4MWI1YlxufVxuXG4ubGVmdCA+IC5sZWZ0LXNlY29uZC1zZWN0aW9uIC5jcmVhdGUtcHJvamVjdCA+IGRpdjpmaXJzdC1jaGlsZHtcbiAgICBoZWlnaHQ6IDE1cHg7XG4gICAgd2lkdGg6IDE1cHg7XG59XG5cblxuLyogRm9vdGVyIGFkZCBuZXcgdGFzayBidXR0b24gKi9cblxuLmZvb3RlciA+IC5mb290ZXItcmlnaHQgPiAuY3JlYXRlLXRhc2sge1xuICAgIC8qIGhlaWdodDogMTAwJTsgKi9cbiAgICAvKiB3aWR0aDogY2FsYygxMDAlIC0gMzAwcHgpOyAqL1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZm9vdGVyID4gLmZvb3Rlci1yaWdodCA+IC5jcmVhdGUtdGFzayA+IC5jcmVhdGUtdGFzay1jb250YWluZXIge1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbiAgICAvKiBib3JkZXItcmFkaXVzOiAxMHB4OyAqL1xuICAgIC8qIGJvcmRlcjogMC41cHggc29saWQgdmFyKC0tYm9yZGVyLWRhcmspOyAqL1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDJweCB2YXIoLS1ib3JkZXItY29sb3IpO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xuXG5cbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYmFja2dyb3VuZDogI2UwZTBlMDtcbiAgICAvKiBib3gtc2hhZG93OiAgOHB4IDhweCAxNnB4ICM5ZjlmOWYsXG4gICAgICAgICAgICAgICAgIC04cHggLThweCAxNnB4ICNmZmZmZmY7ICovXG59XG5cblxuXG4uZm9vdGVyID4gLmZvb3Rlci1yaWdodCA+IC5jcmVhdGUtdGFzayA+IC5jcmVhdGUtdGFzay1jb250YWluZXIgZGl2Om50aC1jaGlsZCgyKSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uZm9vdGVyID4gLmZvb3Rlci1yaWdodCA+IC5jcmVhdGUtdGFzayA+IC5jcmVhdGUtdGFzay1jb250YWluZXIgPiBkaXY6Zmlyc3QtY2hpbGQge1xuICAgIGhlaWdodDogMjBweDtcbiAgICB3aWR0aDogMjBweDtcbn1cblxuLmZvb3RlciA+IC5mb290ZXItcmlnaHQgPiAuY3JlYXRlLXRhc2sgPiAuY3JlYXRlLXRhc2stY29udGFpbmVyOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24taG92ZXIpO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcblxufVxuXG4uZm9vdGVyID4gLmZvb3Rlci1yaWdodCA+IC5jcmVhdGUtdGFzayA+IC5jcmVhdGUtdGFzay1jb250YWluZXI6YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1idXR0b24tYWN0aXZlKVxufVxuXG5cbi8qIERpYWxvZyBsYXlvdXQgYW5kIGFuaW1hdGlvbnMgKi9cblxuZGlhbG9nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmctbGVmdDogMzVweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzNXB4O1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgIC8qIHBhZGRpbmctbGVmdDogMzVweDsgKi9cbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xufVxuXG5kaWFsb2c6Zm9jdXMge1xuICAgIG91dGxpbmU6IG5vbmU7XG59XG5cbmRpYWxvZy5oaWRkZW4ge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdG9wOiAtMjAwJTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNSk7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dCwgXG4gICAgICAgICAgICAgICAgdG9wIDEwMDBtcyBlYXNlLWluLW91dCxcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm0gMTAwMG1zIGVhc2UtaW4tb3V0O1xufVxuXG5kaWFsb2cuaGlkZGVuID4gZm9ybSA+ICoge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDEwcHg7XG4gICAgb3BhY2l0eTogMDtcbn1cblxuZGlhbG9nLmRpc3BsYXllZCB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0b3A6IDAlO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGN1YmljLWJlemllcigwLjE4LDAuODksMC40MywxLjE5KTtcbiAgICAvKiB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZTsgKi9cbn1cblxuZGlhbG9nLmRpc3BsYXllZCA+IGZvcm0gPiAqIHtcbiAgICB0b3A6IDBweDtcbiAgICBvcGFjaXR5OiAxO1xuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyAqL1xufVxuXG5kaWFsb2cuZGlzcGxheWVkLm5ldy1wcm9qZWN0ID4gZm9ybSAucHJvamVjdC1kaWFsb2ctbmFtZSB7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dCAyMDBtcztcbn1cblxuZGlhbG9nLmRpc3BsYXllZC5uZXctcHJvamVjdCA+IGZvcm0gLmlucHV0LWNvbnRhaW5lciB7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dCAyNTBtcztcbn1cblxuZGlhbG9nLmRpc3BsYXllZC5uZXctcHJvamVjdCA+IGZvcm0gLnByb2plY3QtbmFtZS1maWVsZC1kaXYge1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbi1vdXQgMzAwbXM7XG59XG5cbmRpYWxvZy5kaXNwbGF5ZWQubmV3LXByb2plY3QgPiBmb3JtIC5wcm9qZWN0LWNvbG9yLWZpZWxkLWRpdiB7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dCAzNTBtcztcbn1cblxuZGlhbG9nLmRpc3BsYXllZC5uZXctcHJvamVjdCA+IGZvcm0gPiBidXR0b24ge1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbi1vdXQgNDAwbXM7XG59XG5cbmRpYWxvZy5kaXNwbGF5ZWQubmV3LXByb2plY3QgPiBmb3JtID4gLmNsb3NlLXByb2plY3QtZGlhbG9nIHtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0IDQ1MG1zO1xufVxuXG5cbmRpYWxvZy5kaXNwbGF5ZWQubmV3LXRhc2sgPiBmb3JtIC50YXNrLWRpYWxvZy1uYW1lIHtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0IDIwMG1zO1xufVxuXG5kaWFsb2cuZGlzcGxheWVkLm5ldy10YXNrID4gZm9ybSA+IC50YXNrLXByb2plY3QtZmllbGQtZGl2IHtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0IDI1MG1zO1xufVxuXG5kaWFsb2cuZGlzcGxheWVkLm5ldy10YXNrID4gZm9ybSA+IC50YXNrLXRpdGxlLWZpZWxkLWRpdiB7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dCAzMDBtcztcbn1cblxuZGlhbG9nLmRpc3BsYXllZC5uZXctdGFzayA+IGZvcm0gPiAudGFzay1ub3Rlcy1maWVsZC1kaXYge1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbi1vdXQgMzUwbXM7XG59XG5cbmRpYWxvZy5kaXNwbGF5ZWQubmV3LXRhc2sgPiBmb3JtID4gLnRhc2stcHJpb3JpdHktZmllbGQtZGl2IHtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0IDQwMG1zO1xufVxuXG5kaWFsb2cuZGlzcGxheWVkLm5ldy10YXNrID4gZm9ybSA+IC50YXNrLWRhdGUtZmllbGQtZGl2IHtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0IDQ1MG1zO1xufVxuXG5kaWFsb2cuZGlzcGxheWVkLm5ldy10YXNrID4gZm9ybSA+IGJ1dHRvbiB7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dCA1MDBtcywgYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UsIGJvcmRlci1jb2xvciAwLjFzIGVhc2U7XG59XG5cbmRpYWxvZy5kaXNwbGF5ZWQubmV3LXRhc2sgPiBmb3JtID4gLmNsb3NlLXRhc2stZGlhbG9nIHtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0IDU1MG1zO1xufVxuXG5kaWFsb2cuZGlzcGxheWVkLnRhc2stZGVsZXRlID4gZm9ybSA+IGJ1dHRvbiB7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAxMDBtcyBlYXNlLWluLW91dCAyMDBtcywgYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UsIGJvcmRlci1jb2xvciAwLjFzIGVhc2U7XG59XG5cblxuLmRlbGV0ZS1wcm9qZWN0IHtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIG9wYWNpdHk6IDA7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGZpbGw6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cblxuLmRlbGV0ZS1wcm9qZWN0OmhvdmVyIHtcbiAgICBmaWxsOiB2YXIoLS1iYWNrZ3JvdW5kLWxpZ2h0KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xufVxuXG5saS5wcm9qZWN0OmhvdmVyID4gLmRlbGV0ZS1wcm9qZWN0IHtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4ubmV3LXByb2plY3QsXG4ubmV3LXRhc2ssXG4udGFzay1kZWxldGUge1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWxpZ2h0KTtcbn1cblxuLm5ldy1wcm9qZWN0ID4gZm9ybSxcbi5uZXctdGFzayA+IGZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IDEwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udGFzay1kZWxldGUgPiBmb3JtIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogMTBweDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcbn1cblxuLnRhc2stZGVsZXRlID4gZm9ybSA+IGRpdiB7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xuICAgIGdyaWQtcm93OiAxIC8gMjtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbn1cblxuLnRhc2stZGVsZXRlID4gZm9ybSA+IGJ1dHRvbjpudGgtY2hpbGQoMSkge1xuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcbiAgICBncmlkLXJvdzogMiAvIDM7XG59XG5cbi50YXNrLWRlbGV0ZSA+IGZvcm0gPiBidXR0b246bnRoLWNoaWxkKDIpIHtcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xufVxuXG5cbi5uZXctdGFzayA+IGZvcm0gPiAudGFzay1wcm9qZWN0LWZpZWxkLWRpdixcbi5uZXctdGFzayA+IGZvcm0gPiAudGFzay10aXRsZS1maWVsZC1kaXYsXG4ubmV3LXRhc2sgPiBmb3JtID4gLnRhc2stbm90ZXMtZmllbGQtZGl2LFxuLm5ldy10YXNrID4gZm9ybSA+IC50YXNrLXByaW9yaXR5LWZpZWxkLWRpdixcbi5uZXctdGFzayA+IGZvcm0gPiAudGFzay1kYXRlLWZpZWxkLWRpdixcbi5uZXctcHJvamVjdCA+IGZvcm0gIC5wcm9qZWN0LW5hbWUtZmllbGQtZGl2LFxuLm5ldy1wcm9qZWN0ID4gZm9ybSAgLnByb2plY3QtY29sb3ItZmllbGQtZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5uZXctdGFzayA+IGZvcm0gPiAudGFzay1kaWFsb2ctbmFtZSxcbi5uZXctcHJvamVjdCA+IGZvcm0gPiAucHJvamVjdC1kaWFsb2ctbmFtZSB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG4ubmV3LXRhc2sgPiBmb3JtID4gYnV0dG9uLFxuLm5ldy1wcm9qZWN0ID4gZm9ybSA+IGJ1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogMC41cHggc29saWQgdmFyKC0tYm9yZGVyLWRhcmspO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMgZWFzZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktbGlnaHQpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuXG4udGFzay1kZWxldGUgPiBmb3JtID4gYnV0dG9uW3R5cGU9J3N1Ym1pdCddLFxuLnRhc2stZGVsZXRlID4gZm9ybSA+IGJ1dHRvblt0eXBlPSdjbG9zZSddIHtcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xuICAgIGhlaWdodDogNDBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogMC41cHggc29saWQgdmFyKC0tYm9yZGVyLWRhcmspO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMgZWFzZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktbGlnaHQpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRhc2stZGVsZXRlID4gZm9ybSA+IGJ1dHRvblt0eXBlPSdzdWJtaXQnXSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWxpZ2h0KTtcbn1cblxuLnRhc2stZGVsZXRlID4gZm9ybSA+IGJ1dHRvblt0eXBlPSdjbG9zZSddIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbG9zZS1idXR0b24pO1xufVxuXG4udGFzay1kZWxldGUgPiBmb3JtID4gYnV0dG9uW3R5cGU9XCJjbG9zZVwiXTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY2xvc2UtYnV0dG9uLWhvdmVyKTtcbn1cblxuLnRhc2stZGVsZXRlID4gZm9ybSA+IGJ1dHRvblt0eXBlPVwiY2xvc2VcIl06YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbG9zZS1idXR0b24tYWN0aXZlKTtcbn1cblxuLm5ldy10YXNrID4gZm9ybSA+IGJ1dHRvbjpmb2N1cyxcbi5uZXctcHJvamVjdCA+IGZvcm0gPiBidXR0b246Zm9jdXMsXG4udGFzay1kZWxldGUgPiBmb3JtID4gYnV0dG9uOmZvY3VzIHtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuXG4ubmV3LXRhc2sgPiBmb3JtID4gYnV0dG9uOmhvdmVyLFxuLm5ldy1wcm9qZWN0ID4gZm9ybSA+IGJ1dHRvbjpob3Zlcixcbi50YXNrLWRlbGV0ZSA+IGZvcm0gPiBidXR0b25bdHlwZT1cInN1Ym1pdFwiXTpob3ZlciB7XG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCBibGFjaztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktY29sb3IpO1xufVxuXG4ubmV3LXRhc2sgPiBmb3JtID4gYnV0dG9uOmFjdGl2ZSxcbi5uZXctcHJvamVjdCA+IGZvcm0gPiBidXR0b246YWN0aXZlLFxuLnRhc2stZGVsZXRlID4gZm9ybSA+IGJ1dHRvblt0eXBlPVwic3VibWl0XCJdOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWRhcmspO1xufVxuXG5cblxuLm5ldy10YXNrID4gZm9ybSA+IC5jbG9zZS10YXNrLWRpYWxvZyxcbi5uZXctcHJvamVjdCA+IGZvcm0gPiAuY2xvc2UtcHJvamVjdC1kaWFsb2cge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTBweDtcbiAgICB0b3A6IDEwcHg7XG59XG5cbi5uZXctdGFzayA+IGZvcm0gPiAuY2xvc2UtdGFzay1kaWFsb2cgc3Bhbixcbi5uZXctcHJvamVjdCA+IGZvcm0gPiAuY2xvc2UtcHJvamVjdC1kaWFsb2cgc3BhbiB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICBvcGFjaXR5OiAwLjc7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjI1cywgb3BhY2l0eSAwLjI1cztcbn1cblxuLm5ldy10YXNrID4gZm9ybSA+IC5jbG9zZS10YXNrLWRpYWxvZzpob3ZlciBzcGFuLFxuLm5ldy1wcm9qZWN0ID4gZm9ybSA+IC5jbG9zZS1wcm9qZWN0LWRpYWxvZzpob3ZlciBzcGFuIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgc2NhbGUoMS4xKTtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLyogRGlhbG9nIGlucHV0IHN0eWxlcyAqL1xuXG4ubmV3LXRhc2sgPiBmb3JtIGlucHV0LFxuLm5ldy10YXNrID4gZm9ybSBzZWxlY3QsXG4ubmV3LXRhc2sgPiBmb3JtIHRleHRhcmVhLFxuLm5ldy1wcm9qZWN0ID4gZm9ybSBpbnB1dCxcbi5uZXctcHJvamVjdCA+IGZvcm0gc2VsZWN0LFxuLm5ldy1wcm9qZWN0ID4gZm9ybSB0ZXh0YXJlYSB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlcjogMC41cHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5uZXctdGFzayA+IGZvcm0gaW5wdXQ6aG92ZXIsXG4ubmV3LXRhc2sgPiBmb3JtIHNlbGVjdDpob3Zlcixcbi5uZXctdGFzayA+IGZvcm0gdGV4dGFyZWE6aG92ZXIsXG4ubmV3LXByb2plY3QgPiBmb3JtIGlucHV0OmhvdmVyLFxuLm5ldy1wcm9qZWN0ID4gZm9ybSBzZWxlY3Q6aG92ZXIsXG4ubmV3LXByb2plY3QgPiBmb3JtIHRleHRhcmVhOmhvdmVyIHtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCBibGFjaztcbn1cblxuLm5ldy10YXNrID4gZm9ybSBpbnB1dDo6cGxhY2Vob2xkZXIsXG4ubmV3LXRhc2sgPiBmb3JtIHNlbGVjdDo6cGxhY2Vob2xkZXIsXG4ubmV3LXRhc2sgPiBmb3JtIHRleHRhcmVhOjpwbGFjZWhvbGRlcixcbi5uZXctcHJvamVjdCA+IGZvcm0gaW5wdXQ6OnBsYWNlaG9sZGVyLFxuLm5ldy1wcm9qZWN0ID4gZm9ybSBzZWxlY3Q6OnBsYWNlaG9sZGVyLFxuLm5ldy1wcm9qZWN0ID4gZm9ybSB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0LW11dGVkKTtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5uZXctdGFzayA+IGZvcm0gdGV4dGFyZWEsXG4ubmV3LXByb2plY3QgPiBmb3JtIHRleHRhcmVhIHtcbiAgICByZXNpemU6IG5vbmU7XG59XG5cbi5wcm9qZWN0LWNvbG9yLWZpZWxkLWRpdiB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4ubmV3LXByb2plY3QgPiBmb3JtICNwcm9qZWN0LWNvbG9yIHtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLm5ldy1wcm9qZWN0ID4gZm9ybSAuaW5wdXQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xufVxuXG5cbi5pY29uIHtcbiAgICB3aWR0aDogMTVweDtcbiAgICBoZWlnaHQ6IDE1cHg7XG4gICAgLyogZmlsbDogcmVkOyAqL1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cblxuQG1lZGlhIChtYXgtd2lkdGg6IDg1MHB4KSB7XG4gICAgXG59XG5cblxuLm5vLXRhc2tzLWZpbGxlciB7XG4gICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0lBQ0ksbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4Qix1QkFBdUI7SUFDdkIsd0JBQXdCOztJQUV4QixxQkFBcUI7SUFDckIsMEJBQTBCLEVBQUUsT0FBTztJQUNuQyx5QkFBeUIsRUFBRSxPQUFPO0lBQ2xDLDBCQUEwQixFQUFFLE9BQU87O0lBRW5DLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLHVCQUF1QixFQUFFLE9BQU87SUFDaEMsd0JBQXdCOztJQUV4QixzQkFBc0I7SUFDdEIsMkJBQTJCLEVBQUUsT0FBTztJQUNwQywwQkFBMEI7SUFDMUIsMkJBQTJCLEVBQUUsT0FBTzs7SUFFcEMsZ0JBQWdCO0lBQ2hCLGtCQUFrQixFQUFFLE9BQU87SUFDM0Isa0JBQWtCO0lBQ2xCLGtCQUFrQixFQUFFLE9BQU87O0lBRTNCLGtCQUFrQjtJQUNsQix1QkFBdUIsRUFBRSxPQUFPO0lBQ2hDLG1CQUFtQixFQUFFLE9BQU87SUFDNUIsb0JBQW9COztJQUVwQixrQkFBa0I7SUFDbEIseUJBQXlCLEVBQUUsT0FBTztJQUNsQywwQkFBMEIsRUFBRSxPQUFPOztJQUVuQyxrQ0FBa0M7SUFDbEMsd0NBQXdDO0lBQ3hDLHlDQUF5Qzs7SUFFekMsMkJBQTJCLEVBQUUsT0FBTztJQUNwQyx1QkFBdUIsRUFBRSxPQUFPO0FBQ3BDOzs7QUFHQTtJQUNJLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsYUFBYTtFQUNmOztFQUVBO01BQ0ksK0JBQStCLEVBQUUsd0NBQXdDO01BQ3pFLGtCQUFrQjtNQUNsQixhQUFhO0VBQ2pCOztFQUVBO01BQ0ksbUNBQW1DLEVBQUUsd0NBQXdDO01BQzdFLGFBQWE7RUFDakI7O0VBRUE7TUFDSSw4QkFBOEIsRUFBRSx3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QUEyQztBQUMvQzs7QUFFQTtJQUNJLDRDQUE0QztBQUNoRDs7QUFFQTs7O0lBR0ksYUFBYTtBQUNqQjs7QUFFQTs7O0lBR0kseUJBQXlCO0lBQ3pCLHdDQUF3QztBQUM1Qzs7QUFFQTs7O0lBR0ksdUNBQXVDO0FBQzNDOzs7O0FBSUE7O0lBRUksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxTQUFTO0FBQ2I7O0FBRUE7O0lBRUksbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixlQUFlO0lBQ2YsMENBQTBDO0FBQzlDOztBQUVBOztJQUVJLG1DQUFtQztJQUNuQyxVQUFVO0lBQ1YsZUFBZTtBQUNuQjs7QUFFQSx3QkFBd0I7O0FBRXhCOzs7Ozs7SUFNSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLHVDQUF1QztJQUN2QywwQkFBMEI7SUFDMUIsa0JBQWtCO0FBQ3RCOztBQUVBOzs7Ozs7SUFNSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLHlCQUF5QjtBQUM3Qjs7QUFFQTs7Ozs7O0lBTUksd0JBQXdCO0lBQ3hCLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsNkJBQTZCO0FBQ2pDOzs7QUFHQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7OztBQUdBOztBQUVBOzs7QUFHQTtJQUNJLHdCQUF3QjtJQUN4QixrQkFBa0I7QUFDdEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TWF0ZXJpYWwrU3ltYm9scytPdXRsaW5lZDpvcHN6LHdnaHQsRklMTCxHUkFEQDIwLi40OCwxMDAuLjcwMCwwLi4xLC01MC4uMjAwJyk7XFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Sm9zZWZpbitTYW5zOndnaHRAMTAwJmZhbWlseT1MYXRvOndnaHRAMzAwJmZhbWlseT1OdW5pdG86aXRhbCx3Z2h0QDAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwJmZhbWlseT1Sb2JvdG86d2dodEAxMDAmZmFtaWx5PVJ1YmlrOndnaHRAMzAwJmRpc3BsYXk9c3dhcCcpO1xcblxcbjpyb290IHtcXG4gICAgLyogUHJpbWFyeSBjb2xvcnMgKi9cXG4gICAgLS1wcmltYXJ5LWNvbG9yOiAjMzQ5OGRiO1xcbiAgICAtLXByaW1hcnktZGFyazogIzI5ODBiOTtcXG4gICAgLS1wcmltYXJ5LWxpZ2h0OiAjODdDRUZBO1xcblxcbiAgICAvKiBTZWNvbmRhcnkgY29sb3JzICovXFxuICAgIC0tc2Vjb25kYXJ5LWNvbG9yOiAjMmVjYzcxOyAvKnVzZWQqL1xcbiAgICAtLXNlY29uZGFyeS1kYXJrOiAjMjdhZTYwOyAvKnVzZWQqL1xcbiAgICAtLXNlY29uZGFyeS1saWdodDogI2M4ZTZjOTsgLyp1c2VkKi9cXG5cXG4gICAgLyogQWNjZW50IGNvbG9ycyAqL1xcbiAgICAtLWFjY2VudC1jb2xvcjogI0JBMTgxQjtcXG4gICAgLS1hY2NlbnQtZGFyazogI0E0MTYxQTtcXG4gICAgLS1hY2NlbnQtbGlnaHQ6ICNFNTM4M0I7IC8qdXNlZCovXFxuICAgIC0tYWNjZW50LWRhcmtlcjogIzY2MDcwODtcXG5cXG4gICAgLyogQmFja2dyb3VuZCBjb2xvcnMgKi9cXG4gICAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjRjVFQkUwOyAvKnVzZWQqL1xcbiAgICAtLWJhY2tncm91bmQtZGFyazogI2JkYzNjNztcXG4gICAgLS1iYWNrZ3JvdW5kLWxpZ2h0OiAjRURFREU5OyAvKnVzZWQqL1xcblxcbiAgICAvKiBUZXh0IGNvbG9ycyAqL1xcbiAgICAtLXRleHQtY29sb3I6ICMzMzM7IC8qdXNlZCovXFxuICAgIC0tdGV4dC1saWdodDogI2ZmZjtcXG4gICAgLS10ZXh0LW11dGVkOiAjODg4OyAvKnVzZWQqL1xcblxcbiAgICAvKiBCb3JkZXIgY29sb3JzICovXFxuICAgIC0tYm9yZGVyLWNvbG9yOiAjRDZDQ0MyOyAvKnVzZWQqL1xcbiAgICAtLWJvcmRlci1kYXJrOiAjOTk5OyAvKnVzZWQqL1xcbiAgICAtLWJvcmRlci1saWdodDogI2VlZTtcXG5cXG4gICAgLyogQnV0dG9uIGNvbG9ycyAqL1xcbiAgICAtLWJ1dHRvbi1ob3ZlcjogI2JhMTgxYjI4OyAvKnVzZWQqL1xcbiAgICAtLWJ1dHRvbi1hY3RpdmU6ICNiYTE4MWI1YjsgLyp1c2VkKi9cXG5cXG4gICAgLS1jbG9zZS1idXR0b246IHJnYigxNjksIDE2OSwgMTY5KTtcXG4gICAgLS1jbG9zZS1idXR0b24taG92ZXI6IHJnYigxMzYsIDEzNiwgMTM2KTtcXG4gICAgLS1jbG9zZS1idXR0b24tYWN0aXZlOiByZ2IoMTA4LCAxMDgsIDEwOCk7XFxuXFxuICAgIC0tZWxlbWVudHMtaG92ZXI6ICNiYTE4MWIyODsgLyp1c2VkKi9cXG4gICAgLS1jaGVja2JveC1jb2xvcjogZ3JlZW47IC8qdXNlZCovXFxufVxcblxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICB3aWR0aDogNHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIHotaW5kZXg6IDk5OTk7XFxuICB9XFxuICBcXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1saWdodCk7IC8qIENoYW5nZSB0aGUgY29sb3IgdG8geW91ciBwcmVmZXJlbmNlICovXFxuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgICAgIHotaW5kZXg6IDk5OTk7XFxuICB9XFxuICBcXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXI6aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtbGlnaHQpOyAvKiBDaGFuZ2UgdGhlIGNvbG9yIHRvIHlvdXIgcHJlZmVyZW5jZSAqL1xcbiAgICAgIHotaW5kZXg6IDk5OTk7XFxuICB9XFxuICBcXG4gIDo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1kYXJrKTsgLyogQ2hhbmdlIHRoZSBjb2xvciB0byB5b3VyIHByZWZlcmVuY2UgKi9cXG4gICAgICB6LWluZGV4OiA5OTk5OyAgICBcXG4gIH1cXG5cXG5cXG46OmJhY2tkcm9wIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDg4O1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcXG59XFxuXFxuLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xcbiAgICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczpcXG4gICAgJ0ZJTEwnIDAsXFxuICAgICd3Z2h0JyA0MDAsXFxuICAgICdHUkFEJyAwLFxcbiAgICAnb3BzeicgMjRcXG59XFxuXFxuXFxuLyogR2VuZXJhbCBsYXlvdXQgKi9cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxuICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtbGlnaHQpO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuLm1haW4ge1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgyMDBweCwgMWZyKSAzZnI7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLm1haW4gPiAubGVmdCB7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgZmxleDogMCAwIDMwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICAvKiBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEwMHB4KTsgKi9cXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAvKiBvdmVyZmxvdzogYXV0bzsgKi9cXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICAvKiBwb3NpdGlvbjogc3RpY2t5OyAqL1xcbn1cXG5cXG4ubWFpbiA+IC5yaWdodCB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTAwcHgpO1xcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIC8qIGhlaWdodDogMTAwcHg7ICovXFxuICAgIC8qIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpOyAqL1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJvdHRvbTogMjBweDtcXG4gICAgLyogd2lkdGg6IDEwMCU7ICovXFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgYm94LXNoYWRvdzogMHB4IC01MHB4IDI0cHggLTIwcHggdmFyKC0tYmFja2dyb3VuZC1saWdodCk7XFxuICAgIC8qIGJveC1zaGFkb3c6IC0xNTBweCAtNDBweCAyMXB4IC0zMHB4IGJsYWNrOyAqL1xcblxcbn1cXG5cXG4uZm9vdGVyID4gLmZvb3Rlci1sZWZ0IHtcXG4gICAgZmxleDogMCAwIDMwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWNvbG9yKTtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcXG59XFxuXFxuLmZvb3RlciA+IC5mb290ZXItcmlnaHQge1xcbiAgICBmbGV4OiAxO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWxpZ2h0KTtcXG59XFxuXFxuLnJpZ2h0LWZpcnN0LWhlYWRlciB7XFxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xcbiAgICBmb250LXNpemU6IDI1cHg7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZGFyayk7XFxuICAgIHdpZHRoOiBjbGFtcCgzMDBweCwgNzAlLCA3MDBweCk7XFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcXG59XFxuXFxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24ge1xcbiAgICBwYWRkaW5nLXJpZ2h0OiBjbGFtcCgxMHB4LCA5JSwgMTAwcHgpO1xcbiAgICBwYWRkaW5nLWxlZnQ6IGNsYW1wKDEwcHgsIDklLCAxMDBweCk7XFxuICAgIC8qIHBhZGRpbmctbGVmdDogbWlubWF4KDEwcHgsIDEwMHB4KTsgKi9cXG4gICAgcGFkZGluZy10b3A6IDUwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyAqL1xcbiAgICAvKiBvdmVyZmxvdzogYXV0bzsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAzcHg7XFxuICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTUwcHg7XFxufVxcblxcbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2sge1xcbiAgICAvKiBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpOyAqL1xcbiAgICAvKiBib3JkZXItcmFkaXVzOiA1cHg7ICovXFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcXG4gICAgcGFkZGluZy10b3A6IDVweDtcXG5cXG4gICAgZmxleDogMDtcXG4gICAgLyogd2lkdGg6IGNsYW1wKDIwMHB4LCA2MCUsIDgwMHB4KTsgKi9cXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLyogbWF4LXdpZHRoOiA1MDBweDsgKi9cXG4gICAgdHJhbnNpdGlvbjogYWxsIDE3NW1zIGVhc2UtaW47XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgLyogZ2FwOiA1MHB4OyAqL1xcbiAgICAvKiBib3gtc2hhZG93OiAwcHggMXB4IDVweCAwcHggZ3JheTsgKi9cXG4gICAgLyogYm9yZGVyLXJhZGl1czogNXB4OyAqL1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgZ2FwOiBjbGFtcCgyMHB4LCA1JSwgNDBweCk7XFxuICAgIG1pbi13aWR0aDogMzAwcHg7XFxufVxcblxcblxcblxcbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2s6aG92ZXIgPiAudGFzay1yaWdodC1zZWN0aW9uID4gLnRhc2stdGl0bGUtZmllbGQsXFxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzazpob3ZlciA+IC50YXNrLXJpZ2h0LXNlY3Rpb24gPiAudGFzay1kYXRlLWZpZWxkIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0xMHB4KTtcXG59XFxuXFxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzayA+IC50YXNrLWxlZnQtc2VjdGlvbiB7XFxuICAgIHdpZHRoOiAyMHB4O1xcbiAgICBoZWlnaHQ6IDIwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgZWFzZTtcXG5cXG4gICAgLyogdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7ICovXFxufVxcblxcbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2sgPiAudGFzay1sZWZ0LXNlY3Rpb24uY2hlY2tlZCBzdmcgcGF0aCxcXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrID4gLnRhc2stbGVmdC1zZWN0aW9uLmNoZWNrZWQgc3ZnIGNpcmNsZSB7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxuICAgIHN0cm9rZTogdmFyKC0tY2hlY2tib3gtY29sb3IpO1xcbiAgICBzdHJva2Utd2lkdGg6IDFweDtcXG59XFxuXFxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzayA+IC50YXNrLWxlZnQtc2VjdGlvbi5jaGVja2VkIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrID4gLnRhc2stbGVmdC1zZWN0aW9uLnVuY2hlY2tlZCBzdmcgcGF0aCB7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcblxcbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2s6aG92ZXIgPiAudGFzay1sZWZ0LXNlY3Rpb24ge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzIGVhc2U7XFxufVxcblxcbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2s6aG92ZXIgPiAudGFzay1sZWZ0LXNlY3Rpb24gY2lyY2xlIHtcXG4gICAgc3Ryb2tlOiB2YXIoLS1jaGVja2JveC1jb2xvcik7XFxufVxcblxcbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2s6aG92ZXIgPiAudGFzay1sZWZ0LXNlY3Rpb24gcGF0aCwgXFxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzazpob3ZlciA+IC50YXNrLWxlZnQtc2VjdGlvbiBjaXJjbGUge1xcbiAgICAvKiBzdHJva2U6IHJlZDsgKi9cXG4gICAgLyogc3Ryb2tlLXdpZHRoOiAxcHg7ICovXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrID4gLnRhc2stbGVmdC1zZWN0aW9uID4gc3ZnIGNpcmNsZSB7XFxuICAgIGZpbGw6IG5vbmU7XFxuICAgIHN0cm9rZTogdmFyKC0tdGV4dC1tdXRlZCk7XFxufVxcblxcbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2sgPiAudGFzay1sZWZ0LXNlY3Rpb24gPiBzdmcgcGF0aCB7XFxuICAgIGZpbGw6IG5vbmU7XFxuICAgIHN0cm9rZTogdmFyKC0tdGV4dC1tdXRlZCk7XFxufVxcblxcbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2sgPiAudGFzay1yaWdodC1zZWN0aW9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0bztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcbiAgICAvKiBnYXA6IDVweDsgKi9cXG4gICAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4vKiAucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrID4gLnRhc2stcmlnaHQtc2VjdGlvbjpob3ZlciA+IC50YXNrLW5vdGVzLWZpZWxkIHtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBncmlkLXJvdzogNCAvIDU7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG59ICovXFxuXFxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzayA+IC50YXNrLXJpZ2h0LXNlY3Rpb246aG92ZXIge1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcXG59XFxuXFxuXFxuXFxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzayA+IC50YXNrLXJpZ2h0LXNlY3Rpb24gPiAudGFzay1wcm9qZWN0ID4gKiB7XFxuICAgIHBhZGRpbmc6IDFweCA1cHggMXB4IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZGFyayk7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuXFxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzayA+IC50YXNrLXJpZ2h0LXNlY3Rpb24gPiAudGFzay1wcm9qZWN0IHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG4gICAgLyoganVzdGlmeS1zZWxmOiBlbmQ7ICovXFxufVxcblxcbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2sgPiAudGFzay1yaWdodC1zZWN0aW9uID4gLnRhc2stdGl0bGUtZmllbGQge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbn1cXG5cXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrID4gLnRhc2stcmlnaHQtc2VjdGlvbiA+IC50YXNrLWRhdGUtZmllbGQge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICAgIGdyaWQtcm93OiA0IC8gNTtcXG4gICAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrID4gLnRhc2stcmlnaHQtc2VjdGlvbiA+IC50YXNrLW5vdGVzLWZpZWxkIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuXFxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzayA+IC50YXNrLXJpZ2h0LXNlY3Rpb24gPiAudGFzay1kZWxldGUtYnV0dG9uIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAganVzdGlmeS1zZWxmOiBlbmQ7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC43KTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG4gICAgb3BhY2l0eTogMDtcXG5cXG59XFxuXFxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzayA+IC50YXNrLXJpZ2h0LXNlY3Rpb246aG92ZXIgPiAudGFzay1kZWxldGUtYnV0dG9uIHtcXG4gICAgLyogdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpOyAqL1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrID4gLnRhc2stcmlnaHQtc2VjdGlvbiA+IC50YXNrLWRlbGV0ZS1idXR0b24gc3BhbiB7XFxuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWxpZ2h0KTtcXG59XFxuXFxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzayA+IC50YXNrLXJpZ2h0LXNlY3Rpb246aG92ZXIgPiAudGFzay1kZWxldGUtYnV0dG9uIHNwYW4ge1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWxpZ2h0KTtcXG59XFxuXFxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzayA+IC50YXNrLXJpZ2h0LXNlY3Rpb246aG92ZXIgPiAudGFzay1kZWxldGUtYnV0dG9uOmhvdmVyIHNwYW4ge1xcbiAgICAvKiB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7ICovXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxuICAgIGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWxpZ2h0KTtcXG5cXG59XFxuXFxuXFxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzayA+IC50YXNrLXJpZ2h0LXNlY3Rpb24gPiAudGFzay1kYXRlLWZpZWxkOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiRHVlOiBcXFwiO1xcbn1cXG5cXG5cXG5cXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrLWRpdmlkZXIge1xcbiAgICBtaW4taGVpZ2h0OiAxcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ib3JkZXItY29sb3IpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMTc1bXMgZWFzZS1pbjtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgbWluLXdpZHRoOiAzMDBweDtcXG59XFxuXFxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzay5oaWRkZW4sXFxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzay1kaXZpZGVyLmhpZGRlbiB7XFxuICAgIHRyYW5zaXRpb246IGFsbCAxNzVtcyBlYXNlLWluO1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrID4gZGl2ID4gZGl2IHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDE3NW1zIGVhc2UtaW47XFxufVxcblxcbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2sgPiBkaXYgPiBkaXYuaGlkZGVuIHtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuLnRhc2stcHJvamVjdC1jb2xvciB7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgd2lkdGg6IDEwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgYm9yZGVyOiAwLjVweCBzb2xpZCB2YXIoLS10ZXh0LW11dGVkKTtcXG59XFxuXFxuXFxuXFxuXFxuLyogTGVmdCBkaXYgbGF5b3V0ICovXFxuXFxuLmxlZnQgPiAubGVmdC1maXJzdC1zZWN0aW9uIHtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgLyogb3ZlcmZsb3c6IGF1dG87ICovXFxuICAgIGZsZXg6IDAgMCAyMDBweDtcXG4gICAgLyogbWFyZ2luLWxlZnQ6IDEwcHg7ICovXFxufVxcblxcbi5sZWZ0ID4gLmxlZnQtc2Vjb25kLXNlY3Rpb24ge1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICAvKiBvdmVyZmxvdzogYXV0bzsgKi9cXG4gICAgZmxleDogMSAwIDIwMHB4O1xcbiAgICAvKiBtYXJnaW4tbGVmdDogMTBweDsgKi9cXG59XFxuXFxuXFxuXFxuLmxlZnQgPiAubGVmdC1maXJzdC1zZWN0aW9uID4gcCB7XFxuICAgIHBhZGRpbmctbGVmdDogMjBweDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5sZWZ0ID4gLmxlZnQtZmlyc3Qtc2VjdGlvbiB1bCxcXG4ubGVmdCA+IC5sZWZ0LXNlY29uZC1zZWN0aW9uIHVsIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ubGVmdCA+IC5sZWZ0LWZpcnN0LXNlY3Rpb24gbGkge1xcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgei1pbmRleDogMTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG59XFxuXFxuLmxlZnQgPiAubGVmdC1zZWNvbmQtc2VjdGlvbiBsaSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmxlZnQgPiAubGVmdC1maXJzdC1zZWN0aW9uIGxpID4gLmltYWdlIHtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB3aWR0aDogMjBweDtcXG5cXG59XFxuXFxuXFxuLyogU2xpZGVyIG9uIHZpZXdzICovXFxuXFxuLmxlZnQgPiAubGVmdC1maXJzdC1zZWN0aW9uIC50YXNrLWFuaW1hdGlvbixcXG4ubGVmdCA+IC5sZWZ0LXNlY29uZC1zZWN0aW9uIGxpW2RhdGEtYWN0aXZlPSd0cnVlJ11+LnRhc2stYW5pbWF0aW9uIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAvKiB0b3A6IDA7ICovXFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCB2YXIoLS1hY2NlbnQtbGlnaHQpO1xcbiAgICB6LWluZGV4OiAwO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG5cXG4udmlld3MgPiBsaTpudGgtY2hpbGQoMSlbZGF0YS1hY3RpdmU9J3RydWUnXX4udGFzay1hbmltYXRpb24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdG9wOiAwO1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4udmlld3MgPiBsaTpudGgtY2hpbGQoMilbZGF0YS1hY3RpdmU9J3RydWUnXX4udGFzay1hbmltYXRpb24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdG9wOiA1MHB4O1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4udmlld3MgPiBsaTpudGgtY2hpbGQoMylbZGF0YS1hY3RpdmU9J3RydWUnXX4udGFzay1hbmltYXRpb24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdG9wOiAxMDBweDtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuXFxuLyogVmlld3Mgc3R5bGVzICovXFxuXFxuLmxlZnQgPiAubGVmdC1maXJzdC1zZWN0aW9uIGxpW2RhdGEtYWN0aXZlPSdmYWxzZSddOmhvdmVyLFxcbi5sZWZ0ID4gLmxlZnQtc2Vjb25kLXNlY3Rpb24gbGk6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1lbGVtZW50cy1ob3Zlcik7XFxufVxcblxcbi5sZWZ0ID4gLmxlZnQtZmlyc3Qtc2VjdGlvbiBsaVtkYXRhLWFjdGl2ZT0ndHJ1ZSddID4gZGl2ID4gc3ZnIHtcXG4gICAgZmlsbDogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG59XFxuXFxuLmxlZnQgPiAubGVmdC1maXJzdC1zZWN0aW9uIGxpW2RhdGEtYWN0aXZlPSd0cnVlJ10gPiBwIHtcXG4gICAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XFxufVxcblxcbi5sZWZ0ID4gLmxlZnQtc2Vjb25kLXNlY3Rpb24gbGkuZm9udC1hY2NlbnQgPiBkaXYge1xcbiAgICBjb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG59XFxuXFxuLmxlZnQgPiAubGVmdC1maXJzdC1zZWN0aW9uIGxpW2RhdGEtYWN0aXZlPSdmYWxzZSddOmFjdGl2ZSxcXG4ubGVmdCA+IC5sZWZ0LXNlY29uZC1zZWN0aW9uIGxpOmFjdGl2ZTpub3QoLmhvdmVyZWQtZGVsZXRlKSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiYTE4MWI1YjtcXG59XFxuXFxuXFxuXFxuXFxuLyogU2xpZGVyIG9uIHByb2plY3RzICovXFxuXFxuLnNlY29uZC1zZWN0aW9uLWxpc3QgPiBsaTpudGgtY2hpbGQoMSlbZGF0YS1hY3RpdmU9J3RydWUnXX4udGFzay1hbmltYXRpb24ge1xcbiAgICAvKiB3aWR0aDogMTAwJTsgKi9cXG4gICAgdG9wOiAwO1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uc2Vjb25kLXNlY3Rpb24tbGlzdCA+IGxpOm50aC1jaGlsZCgyKVtkYXRhLWFjdGl2ZT0ndHJ1ZSddfi50YXNrLWFuaW1hdGlvbiB7XFxuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xcbiAgICB0b3A6IDUwcHg7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5zZWNvbmQtc2VjdGlvbi1saXN0ID4gbGk6bnRoLWNoaWxkKDMpW2RhdGEtYWN0aXZlPSd0cnVlJ11+LnRhc2stYW5pbWF0aW9uIHtcXG4gICAgLyogd2lkdGg6IDEwMCU7ICovXFxuICAgIHRvcDogMTAwcHg7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5zZWNvbmQtc2VjdGlvbi1saXN0ID4gbGk6bnRoLWNoaWxkKDQpW2RhdGEtYWN0aXZlPSd0cnVlJ11+LnRhc2stYW5pbWF0aW9uIHtcXG4gICAgLyogd2lkdGg6IDEwMCU7ICovXFxuICAgIHRvcDogMTUwcHg7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5zZWNvbmQtc2VjdGlvbi1saXN0ID4gbGk6bnRoLWNoaWxkKDUpW2RhdGEtYWN0aXZlPSd0cnVlJ11+LnRhc2stYW5pbWF0aW9uIHtcXG4gICAgLyogd2lkdGg6IDEwMCU7ICovXFxuICAgIHRvcDogMjAwcHg7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5zZWNvbmQtc2VjdGlvbi1saXN0ID4gbGk6bnRoLWNoaWxkKDYpW2RhdGEtYWN0aXZlPSd0cnVlJ11+LnRhc2stYW5pbWF0aW9uIHtcXG4gICAgLyogd2lkdGg6IDEwMCU7ICovXFxuICAgIHRvcDogMjUwcHg7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5zZWNvbmQtc2VjdGlvbi1saXN0ID4gbGk6bnRoLWNoaWxkKDcpW2RhdGEtYWN0aXZlPSd0cnVlJ11+LnRhc2stYW5pbWF0aW9uIHtcXG4gICAgLyogd2lkdGg6IDEwMCU7ICovXFxuICAgIHRvcDogMzAwcHg7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5zZWNvbmQtc2VjdGlvbi1saXN0ID4gbGk6bnRoLWNoaWxkKDgpW2RhdGEtYWN0aXZlPSd0cnVlJ11+LnRhc2stYW5pbWF0aW9uIHtcXG4gICAgLyogd2lkdGg6IDEwMCU7ICovXFxuICAgIHRvcDogMzUwcHg7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5zZWNvbmQtc2VjdGlvbi1saXN0ID4gbGk6bnRoLWNoaWxkKDkpW2RhdGEtYWN0aXZlPSd0cnVlJ11+LnRhc2stYW5pbWF0aW9uIHtcXG4gICAgLyogd2lkdGg6IDEwMCU7ICovXFxuICAgIHRvcDogNDAwcHg7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5zZWNvbmQtc2VjdGlvbi1saXN0ID4gbGk6bnRoLWNoaWxkKDEwKVtkYXRhLWFjdGl2ZT0ndHJ1ZSddfi50YXNrLWFuaW1hdGlvbiB7XFxuICAgIC8qIHdpZHRoOiAxMDAlOyAqL1xcbiAgICB0b3A6IDQ1MHB4O1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uc2Vjb25kLXNlY3Rpb24tbGlzdCA+IGxpOm50aC1jaGlsZCgxMSlbZGF0YS1hY3RpdmU9J3RydWUnXX4udGFzay1hbmltYXRpb24ge1xcbiAgICAvKiB3aWR0aDogMTAwJTsgKi9cXG4gICAgdG9wOiA1MDBweDtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnNlY29uZC1zZWN0aW9uLWxpc3QgPiBsaTpudGgtY2hpbGQoMTIpW2RhdGEtYWN0aXZlPSd0cnVlJ11+LnRhc2stYW5pbWF0aW9uIHtcXG4gICAgLyogd2lkdGg6IDEwMCU7ICovXFxuICAgIHRvcDogNTUwcHg7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5sZWZ0ID4gLmxlZnQtc2Vjb25kLXNlY3Rpb24gPiBwIHtcXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmxlZnQgPiAubGVmdC1zZWNvbmQtc2VjdGlvbiBsaSB7XFxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxufVxcblxcbi5sZWZ0ID4gLmxlZnQtc2Vjb25kLXNlY3Rpb24gLmNyZWF0ZS1wcm9qZWN0IHtcXG4gICAgLyogbWFyZ2luLWxlZnQ6IDUwcHg7ICovXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICAvKiBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgKi9cXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubGVmdCA+IC5sZWZ0LXNlY29uZC1zZWN0aW9uIC5jcmVhdGUtcHJvamVjdCBkaXYge1xcbiAgICAvKiBmb250LXN0eWxlOiBpdGFsaWM7ICovXFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuXFxuLmxlZnQgPiAubGVmdC1zZWNvbmQtc2VjdGlvbiAuY3JlYXRlLXByb2plY3Q6aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmExODFiMjg7XFxufVxcblxcbi5sZWZ0ID4gLmxlZnQtc2Vjb25kLXNlY3Rpb24gLmNyZWF0ZS1wcm9qZWN0OmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiYTE4MWI1Ylxcbn1cXG5cXG4ubGVmdCA+IC5sZWZ0LXNlY29uZC1zZWN0aW9uIC5jcmVhdGUtcHJvamVjdCA+IGRpdjpmaXJzdC1jaGlsZHtcXG4gICAgaGVpZ2h0OiAxNXB4O1xcbiAgICB3aWR0aDogMTVweDtcXG59XFxuXFxuXFxuLyogRm9vdGVyIGFkZCBuZXcgdGFzayBidXR0b24gKi9cXG5cXG4uZm9vdGVyID4gLmZvb3Rlci1yaWdodCA+IC5jcmVhdGUtdGFzayB7XFxuICAgIC8qIGhlaWdodDogMTAwJTsgKi9cXG4gICAgLyogd2lkdGg6IGNhbGMoMTAwJSAtIDMwMHB4KTsgKi9cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZm9vdGVyID4gLmZvb3Rlci1yaWdodCA+IC5jcmVhdGUtdGFzayA+IC5jcmVhdGUtdGFzay1jb250YWluZXIge1xcbiAgICB3aWR0aDogMTUwcHg7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG4gICAgLyogYm9yZGVyLXJhZGl1czogMTBweDsgKi9cXG4gICAgLyogYm9yZGVyOiAwLjVweCBzb2xpZCB2YXIoLS1ib3JkZXItZGFyayk7ICovXFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDJweCB2YXIoLS1ib3JkZXItY29sb3IpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4xcyBlYXNlLWluLW91dDtcXG5cXG5cXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjZTBlMGUwO1xcbiAgICAvKiBib3gtc2hhZG93OiAgOHB4IDhweCAxNnB4ICM5ZjlmOWYsXFxuICAgICAgICAgICAgICAgICAtOHB4IC04cHggMTZweCAjZmZmZmZmOyAqL1xcbn1cXG5cXG5cXG5cXG4uZm9vdGVyID4gLmZvb3Rlci1yaWdodCA+IC5jcmVhdGUtdGFzayA+IC5jcmVhdGUtdGFzay1jb250YWluZXIgZGl2Om50aC1jaGlsZCgyKSB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLmZvb3RlciA+IC5mb290ZXItcmlnaHQgPiAuY3JlYXRlLXRhc2sgPiAuY3JlYXRlLXRhc2stY29udGFpbmVyID4gZGl2OmZpcnN0LWNoaWxkIHtcXG4gICAgaGVpZ2h0OiAyMHB4O1xcbiAgICB3aWR0aDogMjBweDtcXG59XFxuXFxuLmZvb3RlciA+IC5mb290ZXItcmlnaHQgPiAuY3JlYXRlLXRhc2sgPiAuY3JlYXRlLXRhc2stY29udGFpbmVyOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWhvdmVyKTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcblxcbn1cXG5cXG4uZm9vdGVyID4gLmZvb3Rlci1yaWdodCA+IC5jcmVhdGUtdGFzayA+IC5jcmVhdGUtdGFzay1jb250YWluZXI6YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWFjdGl2ZSlcXG59XFxuXFxuXFxuLyogRGlhbG9nIGxheW91dCBhbmQgYW5pbWF0aW9ucyAqL1xcblxcbmRpYWxvZyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDM1cHg7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDM1cHg7XFxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG4gICAgLyogcGFkZGluZy1sZWZ0OiAzNXB4OyAqL1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMC41cHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcXG59XFxuXFxuZGlhbG9nOmZvY3VzIHtcXG4gICAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuZGlhbG9nLmhpZGRlbiB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRvcDogLTIwMCU7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dCwgXFxuICAgICAgICAgICAgICAgIHRvcCAxMDAwbXMgZWFzZS1pbi1vdXQsXFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybSAxMDAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbmRpYWxvZy5oaWRkZW4gPiBmb3JtID4gKiB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgdG9wOiAxMHB4O1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG5kaWFsb2cuZGlzcGxheWVkIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdG9wOiAwJTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGN1YmljLWJlemllcigwLjE4LDAuODksMC40MywxLjE5KTtcXG4gICAgLyogdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGVhc2U7ICovXFxufVxcblxcbmRpYWxvZy5kaXNwbGF5ZWQgPiBmb3JtID4gKiB7XFxuICAgIHRvcDogMHB4O1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgKi9cXG59XFxuXFxuZGlhbG9nLmRpc3BsYXllZC5uZXctcHJvamVjdCA+IGZvcm0gLnByb2plY3QtZGlhbG9nLW5hbWUge1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0IDIwMG1zO1xcbn1cXG5cXG5kaWFsb2cuZGlzcGxheWVkLm5ldy1wcm9qZWN0ID4gZm9ybSAuaW5wdXQtY29udGFpbmVyIHtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dCAyNTBtcztcXG59XFxuXFxuZGlhbG9nLmRpc3BsYXllZC5uZXctcHJvamVjdCA+IGZvcm0gLnByb2plY3QtbmFtZS1maWVsZC1kaXYge1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0IDMwMG1zO1xcbn1cXG5cXG5kaWFsb2cuZGlzcGxheWVkLm5ldy1wcm9qZWN0ID4gZm9ybSAucHJvamVjdC1jb2xvci1maWVsZC1kaXYge1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0IDM1MG1zO1xcbn1cXG5cXG5kaWFsb2cuZGlzcGxheWVkLm5ldy1wcm9qZWN0ID4gZm9ybSA+IGJ1dHRvbiB7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbi1vdXQgNDAwbXM7XFxufVxcblxcbmRpYWxvZy5kaXNwbGF5ZWQubmV3LXByb2plY3QgPiBmb3JtID4gLmNsb3NlLXByb2plY3QtZGlhbG9nIHtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dCA0NTBtcztcXG59XFxuXFxuXFxuZGlhbG9nLmRpc3BsYXllZC5uZXctdGFzayA+IGZvcm0gLnRhc2stZGlhbG9nLW5hbWUge1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0IDIwMG1zO1xcbn1cXG5cXG5kaWFsb2cuZGlzcGxheWVkLm5ldy10YXNrID4gZm9ybSA+IC50YXNrLXByb2plY3QtZmllbGQtZGl2IHtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dCAyNTBtcztcXG59XFxuXFxuZGlhbG9nLmRpc3BsYXllZC5uZXctdGFzayA+IGZvcm0gPiAudGFzay10aXRsZS1maWVsZC1kaXYge1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0IDMwMG1zO1xcbn1cXG5cXG5kaWFsb2cuZGlzcGxheWVkLm5ldy10YXNrID4gZm9ybSA+IC50YXNrLW5vdGVzLWZpZWxkLWRpdiB7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbi1vdXQgMzUwbXM7XFxufVxcblxcbmRpYWxvZy5kaXNwbGF5ZWQubmV3LXRhc2sgPiBmb3JtID4gLnRhc2stcHJpb3JpdHktZmllbGQtZGl2IHtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dCA0MDBtcztcXG59XFxuXFxuZGlhbG9nLmRpc3BsYXllZC5uZXctdGFzayA+IGZvcm0gPiAudGFzay1kYXRlLWZpZWxkLWRpdiB7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbi1vdXQgNDUwbXM7XFxufVxcblxcbmRpYWxvZy5kaXNwbGF5ZWQubmV3LXRhc2sgPiBmb3JtID4gYnV0dG9uIHtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dCA1MDBtcywgYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UsIGJvcmRlci1jb2xvciAwLjFzIGVhc2U7XFxufVxcblxcbmRpYWxvZy5kaXNwbGF5ZWQubmV3LXRhc2sgPiBmb3JtID4gLmNsb3NlLXRhc2stZGlhbG9nIHtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dCA1NTBtcztcXG59XFxuXFxuZGlhbG9nLmRpc3BsYXllZC50YXNrLWRlbGV0ZSA+IGZvcm0gPiBidXR0b24ge1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDEwMG1zIGVhc2UtaW4tb3V0IDIwMG1zLCBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZSwgYm9yZGVyLWNvbG9yIDAuMXMgZWFzZTtcXG59XFxuXFxuXFxuLmRlbGV0ZS1wcm9qZWN0IHtcXG4gICAgd2lkdGg6IDIwcHg7XFxuICAgIGhlaWdodDogMjBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBmaWxsOiB2YXIoLS1hY2NlbnQtY29sb3IpO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbn1cXG5cXG4uZGVsZXRlLXByb2plY3Q6aG92ZXIge1xcbiAgICBmaWxsOiB2YXIoLS1iYWNrZ3JvdW5kLWxpZ2h0KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWNvbG9yKTtcXG59XFxuXFxubGkucHJvamVjdDpob3ZlciA+IC5kZWxldGUtcHJvamVjdCB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5uZXctcHJvamVjdCxcXG4ubmV3LXRhc2ssXFxuLnRhc2stZGVsZXRlIHtcXG4gICAgd2lkdGg6IDQwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWxpZ2h0KTtcXG59XFxuXFxuLm5ldy1wcm9qZWN0ID4gZm9ybSxcXG4ubmV3LXRhc2sgPiBmb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi50YXNrLWRlbGV0ZSA+IGZvcm0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxufVxcblxcbi50YXNrLWRlbGV0ZSA+IGZvcm0gPiBkaXYge1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi50YXNrLWRlbGV0ZSA+IGZvcm0gPiBidXR0b246bnRoLWNoaWxkKDEpIHtcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxufVxcblxcbi50YXNrLWRlbGV0ZSA+IGZvcm0gPiBidXR0b246bnRoLWNoaWxkKDIpIHtcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxufVxcblxcblxcbi5uZXctdGFzayA+IGZvcm0gPiAudGFzay1wcm9qZWN0LWZpZWxkLWRpdixcXG4ubmV3LXRhc2sgPiBmb3JtID4gLnRhc2stdGl0bGUtZmllbGQtZGl2LFxcbi5uZXctdGFzayA+IGZvcm0gPiAudGFzay1ub3Rlcy1maWVsZC1kaXYsXFxuLm5ldy10YXNrID4gZm9ybSA+IC50YXNrLXByaW9yaXR5LWZpZWxkLWRpdixcXG4ubmV3LXRhc2sgPiBmb3JtID4gLnRhc2stZGF0ZS1maWVsZC1kaXYsXFxuLm5ldy1wcm9qZWN0ID4gZm9ybSAgLnByb2plY3QtbmFtZS1maWVsZC1kaXYsXFxuLm5ldy1wcm9qZWN0ID4gZm9ybSAgLnByb2plY3QtY29sb3ItZmllbGQtZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLm5ldy10YXNrID4gZm9ybSA+IC50YXNrLWRpYWxvZy1uYW1lLFxcbi5uZXctcHJvamVjdCA+IGZvcm0gPiAucHJvamVjdC1kaWFsb2ctbmFtZSB7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAyNXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbn1cXG5cXG4ubmV3LXRhc2sgPiBmb3JtID4gYnV0dG9uLFxcbi5uZXctcHJvamVjdCA+IGZvcm0gPiBidXR0b24ge1xcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIHZhcigtLWJvcmRlci1kYXJrKTtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnktbGlnaHQpO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcbi50YXNrLWRlbGV0ZSA+IGZvcm0gPiBidXR0b25bdHlwZT0nc3VibWl0J10sXFxuLnRhc2stZGVsZXRlID4gZm9ybSA+IGJ1dHRvblt0eXBlPSdjbG9zZSddIHtcXG4gICAgbWFyZ2luLXRvcDogMjVweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogMC41cHggc29saWQgdmFyKC0tYm9yZGVyLWRhcmspO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2U7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1saWdodCk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2stZGVsZXRlID4gZm9ybSA+IGJ1dHRvblt0eXBlPSdzdWJtaXQnXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1saWdodCk7XFxufVxcblxcbi50YXNrLWRlbGV0ZSA+IGZvcm0gPiBidXR0b25bdHlwZT0nY2xvc2UnXSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsb3NlLWJ1dHRvbik7XFxufVxcblxcbi50YXNrLWRlbGV0ZSA+IGZvcm0gPiBidXR0b25bdHlwZT1cXFwiY2xvc2VcXFwiXTpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNsb3NlLWJ1dHRvbi1ob3Zlcik7XFxufVxcblxcbi50YXNrLWRlbGV0ZSA+IGZvcm0gPiBidXR0b25bdHlwZT1cXFwiY2xvc2VcXFwiXTphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jbG9zZS1idXR0b24tYWN0aXZlKTtcXG59XFxuXFxuLm5ldy10YXNrID4gZm9ybSA+IGJ1dHRvbjpmb2N1cyxcXG4ubmV3LXByb2plY3QgPiBmb3JtID4gYnV0dG9uOmZvY3VzLFxcbi50YXNrLWRlbGV0ZSA+IGZvcm0gPiBidXR0b246Zm9jdXMge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5cXG4ubmV3LXRhc2sgPiBmb3JtID4gYnV0dG9uOmhvdmVyLFxcbi5uZXctcHJvamVjdCA+IGZvcm0gPiBidXR0b246aG92ZXIsXFxuLnRhc2stZGVsZXRlID4gZm9ybSA+IGJ1dHRvblt0eXBlPVxcXCJzdWJtaXRcXFwiXTpob3ZlciB7XFxuICAgIGJvcmRlcjogMC41cHggc29saWQgYmxhY2s7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeS1jb2xvcik7XFxufVxcblxcbi5uZXctdGFzayA+IGZvcm0gPiBidXR0b246YWN0aXZlLFxcbi5uZXctcHJvamVjdCA+IGZvcm0gPiBidXR0b246YWN0aXZlLFxcbi50YXNrLWRlbGV0ZSA+IGZvcm0gPiBidXR0b25bdHlwZT1cXFwic3VibWl0XFxcIl06YWN0aXZlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWRhcmspO1xcbn1cXG5cXG5cXG5cXG4ubmV3LXRhc2sgPiBmb3JtID4gLmNsb3NlLXRhc2stZGlhbG9nLFxcbi5uZXctcHJvamVjdCA+IGZvcm0gPiAuY2xvc2UtcHJvamVjdC1kaWFsb2cge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHJpZ2h0OiAxMHB4O1xcbiAgICB0b3A6IDEwcHg7XFxufVxcblxcbi5uZXctdGFzayA+IGZvcm0gPiAuY2xvc2UtdGFzay1kaWFsb2cgc3BhbixcXG4ubmV3LXByb2plY3QgPiBmb3JtID4gLmNsb3NlLXByb2plY3QtZGlhbG9nIHNwYW4ge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICBvcGFjaXR5OiAwLjc7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMjVzLCBvcGFjaXR5IDAuMjVzO1xcbn1cXG5cXG4ubmV3LXRhc2sgPiBmb3JtID4gLmNsb3NlLXRhc2stZGlhbG9nOmhvdmVyIHNwYW4sXFxuLm5ldy1wcm9qZWN0ID4gZm9ybSA+IC5jbG9zZS1wcm9qZWN0LWRpYWxvZzpob3ZlciBzcGFuIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpIHNjYWxlKDEuMSk7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogRGlhbG9nIGlucHV0IHN0eWxlcyAqL1xcblxcbi5uZXctdGFzayA+IGZvcm0gaW5wdXQsXFxuLm5ldy10YXNrID4gZm9ybSBzZWxlY3QsXFxuLm5ldy10YXNrID4gZm9ybSB0ZXh0YXJlYSxcXG4ubmV3LXByb2plY3QgPiBmb3JtIGlucHV0LFxcbi5uZXctcHJvamVjdCA+IGZvcm0gc2VsZWN0LFxcbi5uZXctcHJvamVjdCA+IGZvcm0gdGV4dGFyZWEge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcblxcbi5uZXctdGFzayA+IGZvcm0gaW5wdXQ6aG92ZXIsXFxuLm5ldy10YXNrID4gZm9ybSBzZWxlY3Q6aG92ZXIsXFxuLm5ldy10YXNrID4gZm9ybSB0ZXh0YXJlYTpob3ZlcixcXG4ubmV3LXByb2plY3QgPiBmb3JtIGlucHV0OmhvdmVyLFxcbi5uZXctcHJvamVjdCA+IGZvcm0gc2VsZWN0OmhvdmVyLFxcbi5uZXctcHJvamVjdCA+IGZvcm0gdGV4dGFyZWE6aG92ZXIge1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBib3JkZXI6IDAuNXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4ubmV3LXRhc2sgPiBmb3JtIGlucHV0OjpwbGFjZWhvbGRlcixcXG4ubmV3LXRhc2sgPiBmb3JtIHNlbGVjdDo6cGxhY2Vob2xkZXIsXFxuLm5ldy10YXNrID4gZm9ybSB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIsXFxuLm5ldy1wcm9qZWN0ID4gZm9ybSBpbnB1dDo6cGxhY2Vob2xkZXIsXFxuLm5ldy1wcm9qZWN0ID4gZm9ybSBzZWxlY3Q6OnBsYWNlaG9sZGVyLFxcbi5uZXctcHJvamVjdCA+IGZvcm0gdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXG4gICAgY29sb3I6IHZhcigtLXRleHQtbXV0ZWQpO1xcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5uZXctdGFzayA+IGZvcm0gdGV4dGFyZWEsXFxuLm5ldy1wcm9qZWN0ID4gZm9ybSB0ZXh0YXJlYSB7XFxuICAgIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLnByb2plY3QtY29sb3ItZmllbGQtZGl2IHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4ubmV3LXByb2plY3QgPiBmb3JtICNwcm9qZWN0LWNvbG9yIHtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICB3aWR0aDogODBweDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5uZXctcHJvamVjdCA+IGZvcm0gLmlucHV0LWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG59XFxuXFxuXFxuLmljb24ge1xcbiAgICB3aWR0aDogMTVweDtcXG4gICAgaGVpZ2h0OiAxNXB4O1xcbiAgICAvKiBmaWxsOiByZWQ7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogODUwcHgpIHtcXG4gICAgXFxufVxcblxcblxcbi5uby10YXNrcy1maWxsZXIge1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1tdXRlZCk7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuXG5cbi8vIFByb2plY3QgbW9kdWxlIFxuY29uc3QgUHJvamVjdE1vZHVsZSA9IChmdW5jdGlvbigpIHtcblxuICAgIC8vIFByb2plY3RzIGluIGRlZmF1bHQgY29uZmlndXJhdGlvblxuICAgIGxldCBwcm9qZWN0cyA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICBuYW1lOiAnU3BvcnQnLFxuICAgICAgICAgICAgY29sb3I6ICcjZGFiOGRlJyxcbiAgICAgICAgICAgIGFjdGl2ZTogJ2ZhbHNlJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgICBuYW1lOiAnTWF0aCcsXG4gICAgICAgICAgICBjb2xvcjogJyM5M2M3YjQnLFxuICAgICAgICAgICAgYWN0aXZlOiAnZmFsc2UnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogMyxcbiAgICAgICAgICAgIG5hbWU6ICdQcm9ncmFtbWluZycsXG4gICAgICAgICAgICBjb2xvcjogJyNlOGNlYjUnLFxuICAgICAgICAgICAgYWN0aXZlOiAnZmFsc2UnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogNCxcbiAgICAgICAgICAgIG5hbWU6ICdMZWlzdXJlJyxcbiAgICAgICAgICAgIGNvbG9yOiAnI2E2YjVmZicsXG4gICAgICAgICAgICBhY3RpdmU6ICdmYWxzZScsXG4gICAgICAgIH0sXG4gICAgXTtcblxuICAgIGxldCBwcm9qZWN0c0NvdW50ID0gcHJvamVjdHMubGVuZ3RoO1xuICAgIFxuICAgIC8vIEFkZCBuZXcgcHJvamVjdFxuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QobmFtZSwgY29sb3IpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IHt9O1xuICAgICAgICBwcm9qZWN0c0NvdW50ID0gcHJvamVjdHNDb3VudCArIDE7XG4gICAgICAgIHByb2plY3QuaWQgPSBwcm9qZWN0c0NvdW50O1xuICAgICAgICBwcm9qZWN0Lm5hbWUgPSBuYW1lO1xuICAgICAgICBwcm9qZWN0LmNvbG9yID0gY29sb3I7XG5cbiAgICAgICAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcblxuICAgICAgICByZXR1cm4gcHJvamVjdDtcbiAgICB9XG5cbiAgICAvLyBSZXRyaWV2ZSBsaXN0IG9mIHByb2plY3RzIChvYmplY3RzKVxuICAgIGZ1bmN0aW9uIGdldFByb2plY3RPYmplY3RzKCkge1xuICAgICAgICByZXR1cm4gcHJvamVjdHMuc2xpY2UoKTtcbiAgICB9XG5cbiAgICAvLyBSZXRyaWV2ZSBsaXN0IG9mIHByb2plY3QgKHZhbHVlcylcbiAgICBmdW5jdGlvbiBnZXRQcm9qZWN0VmFsdWVzKCkge1xuICAgICAgICBsZXQgcHJvamVjdFZhbHVlcyA9IFtdO1xuICAgICAgICBwcm9qZWN0cy5mb3JFYWNoKChwKSA9PiB7XG4gICAgICAgICAgICBwcm9qZWN0VmFsdWVzLnB1c2gocC5uYW1lKTtcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBwcm9qZWN0VmFsdWVzO1xuICAgIH1cblxuICAgIC8vIFJldHJpZXZlIHRoZSBpZCBvZiBhIHByb2plY3QgdGhhdCBtYXRjaGVzIHRoZSBwcm92aWRlZCBuYW1lXG4gICAgZnVuY3Rpb24gZmluZElkQnlOYW1lKG5hbWUpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0Lm5hbWUgPT09IG5hbWUpO1xuICAgICAgICByZXR1cm4gcHJvamVjdCA/IHByb2plY3QuaWQgOiBudWxsO1xuICAgIH1cblxuICAgIC8vIFJldHJpZXZlIHRoZSBjb2xvciBvZiBhIHByb2plY3QgdGhhdCBtYXRjaGVzIHRoZSBwcm92aWRlZCBuYW1lXG4gICAgZnVuY3Rpb24gZmluZENvbG9yQnlOYW1lKG5hbWUpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzLmZpbmQocHJvamVjdCA9PiBwcm9qZWN0Lm5hbWUgPT09IG5hbWUpO1xuICAgICAgICByZXR1cm4gcHJvamVjdCA/IHByb2plY3QuY29sb3IgOiBudWxsO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGNyZWF0ZVByb2plY3QsXG4gICAgICAgIGdldFByb2plY3RPYmplY3RzLFxuICAgICAgICBnZXRQcm9qZWN0VmFsdWVzLFxuICAgICAgICBmaW5kSWRCeU5hbWUsXG4gICAgICAgIGZpbmRDb2xvckJ5TmFtZSxcbiAgICB9XG4gICAgXG59KSgpO1xuXG5cbi8vIFRhc2sgbW9kdWxlIFxuY29uc3QgVGFza01vZHVsZSA9IChmdW5jdGlvbigpIHtcblxuXG4gICAgLy8gVGhpcyBzaG91bGQgYmUgaW4gZGlmZmVyZW50IG1vZHVsZSAoRE9NIG1vZHVsZSBwZXJoYXBzKVxuICAgIGxldCBhY3RpdmVfdmlldyA9ICd0b2RheSc7XG4gICAgbGV0IGFjdGl2ZV9wcm9qZWN0ID0gJyc7XG5cbiAgICAvLyBUaGlzIHNob3VsZCBiZSBpbiBkaWZmZXJlbnQgbW9kdWxlIChET00gbW9kdWxlIHBlcmhhcHMpXG4gICAgZnVuY3Rpb24gY2hhbmdlQWN0aXZlVmlldyh2aWV3KSB7XG4gICAgICAgIGFjdGl2ZV92aWV3ID0gdmlldztcbiAgICB9XG5cbiAgICAvLyBUaGlzIHNob3VsZCBiZSBpbiBkaWZmZXJlbnQgbW9kdWxlIChET00gbW9kdWxlIHBlcmhhcHMpXG4gICAgZnVuY3Rpb24gZ2V0QWN0aXZlVmlldygpIHtcbiAgICAgICAgcmV0dXJuIGFjdGl2ZV92aWV3O1xuICAgIH1cblxuXG4gICAgLy8gVGhpcyBzaG91bGQgYmUgaW4gZGlmZmVyZW50IG1vZHVsZSAoRE9NIG1vZHVsZSBwZXJoYXBzKVxuICAgIGZ1bmN0aW9uIGNoYW5nZUFjdGl2ZVByb2plY3QocHJvamVjdCkge1xuICAgICAgICBhY3RpdmVfcHJvamVjdCA9IHByb2plY3Q7XG4gICAgfVxuXG4gICAgLy8gVGhpcyBzaG91bGQgYmUgaW4gZGlmZmVyZW50IG1vZHVsZSAoRE9NIG1vZHVsZSBwZXJoYXBzKSAgICBcbiAgICBmdW5jdGlvbiBnZXRBY3RpdmVQcm9qZWN0KCkge1xuICAgICAgICByZXR1cm4gYWN0aXZlX3Byb2plY3Q7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVsZXRlVGFzayh0YXNrSWQpIHtcbiAgICAgICAgdGFza3MgPSB0YXNrcy5maWx0ZXIoKHRhc2spID0+IHRhc2suaWQgIT09IHRhc2tJZCk7XG4gICAgfVxuXG5cbiAgICAvLyBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7IFxuICAgIC8vIGNvbnN0IHRvbW9ycm93ID0gbmV3IERhdGUobmV3IERhdGUoKS5nZXRUaW1lKCkgKyAyNCAqIDYwICogNjAgKiAxMDAwKTtcbiAgICAvLyBjb25zdCBkYXlBZnRlclRvbW9ycm93ID0gbmV3IERhdGUobmV3IERhdGUoKS5nZXRUaW1lKCkgKyA0OCAqIDYwICogNjAgKiAxMDAwKTtcblxuICAgIGxldCB0YXNrcyA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICBwcm9qZWN0SWQ6IDEsXG4gICAgICAgICAgICBwcm9qZWN0TmFtZTogJ1Nwb3J0JyxcbiAgICAgICAgICAgIHByb2plY3RDb2xvcjogJyNkYWI4ZGUnLFxuICAgICAgICAgICAgdGl0bGU6ICdDb21wbGV0ZSBFeGVyY2lzZSAxJyxcbiAgICAgICAgICAgIG5vdGVzOiAnUmVtZW1iZXIgdG8gZm9jdXMgb24gdGhlIGtleSBjb25jZXB0cycsXG4gICAgICAgICAgICBwcmlvcml0eTogJ0hpZ2gnLFxuICAgICAgICAgICAgZGF0ZTogJzIwMjMtMTEtMjInLFxuICAgICAgICAgICAgY29tcGxldGVkOiAndHJ1ZScsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgICAgcHJvamVjdElkOiAyLFxuICAgICAgICAgICAgcHJvamVjdE5hbWU6ICdNYXRoJyxcbiAgICAgICAgICAgIHByb2plY3RDb2xvcjogJyM5M2M3YjQnLFxuICAgICAgICAgICAgdGl0bGU6ICdTdHVkeSBBbGdlYnJhJyxcbiAgICAgICAgICAgIG5vdGVzOiAnUmV2aWV3IGNoYXB0ZXJzIDMgYW5kIDQgZm9yIHRoZSB1cGNvbWluZyB0ZXN0JyxcbiAgICAgICAgICAgIHByaW9yaXR5OiAnTWVkaXVtJyxcbiAgICAgICAgICAgIGRhdGU6ICcyMDIzLTExLTIyJyxcbiAgICAgICAgICAgIGNvbXBsZXRlZDogJ2ZhbHNlJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDMsXG4gICAgICAgICAgICBwcm9qZWN0SWQ6IDMsXG4gICAgICAgICAgICBwcm9qZWN0TmFtZTogJ1Byb2dyYW1taW5nJyxcbiAgICAgICAgICAgIHByb2plY3RDb2xvcjogJyNlOGNlYjUnLFxuICAgICAgICAgICAgdGl0bGU6ICdDb2RlIFJldmlldyBmb3IgUHJvamVjdCBYJyxcbiAgICAgICAgICAgIG5vdGVzOiAnQWRkIG5vdGVzIHJlZ2FyZGluZyBjb2RlIHF1YWxpdHksIG9wdGltaXphdGlvbnMsIGFuZCBwb3RlbnRpYWwgaW1wcm92ZW1lbnRzIGhlcmUuIEVuc3VyZSBjb21wcmVoZW5zaXZlIGNoZWNrcyBmb3Igc3ludGF4IGVycm9ycywgYWxnb3JpdGhtaWMgZWZmaWNpZW5jaWVzLCBhbmQgYmVzdCBwcmFjdGljZXMuIFByb3ZpZGUgZGV0YWlsZWQgY29tbWVudHMgb24gZnVuY3Rpb25zLCB2YXJpYWJsZXMsIGFuZCBsb2dpYyB0byBlbmhhbmNlIHJlYWRhYmlsaXR5LicsXG4gICAgICAgICAgICBwcmlvcml0eTogJ0hpZ2gnLFxuICAgICAgICAgICAgZGF0ZTogJzIwMjMtMTEtMjInLFxuICAgICAgICAgICAgY29tcGxldGVkOiAnZmFsc2UnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogNCxcbiAgICAgICAgICAgIHByb2plY3RJZDogNCxcbiAgICAgICAgICAgIHByb2plY3ROYW1lOiAnTGVpc3VyZScsXG4gICAgICAgICAgICBwcm9qZWN0Q29sb3I6ICcjYTZiNWZmJyxcbiAgICAgICAgICAgIHRpdGxlOiAnQnV5IGdyb2NlcmllcycsXG4gICAgICAgICAgICBub3RlczogJ01pbGssIGVnZ3MsIGJyZWFkLCBhbmQgZnJ1aXRzJyxcbiAgICAgICAgICAgIHByaW9yaXR5OiAnTG93JyxcbiAgICAgICAgICAgIGRhdGU6ICcyMDIzLTExLTIzJyxcbiAgICAgICAgICAgIGNvbXBsZXRlZDogJ2ZhbHNlJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDUsXG4gICAgICAgICAgICBwcm9qZWN0SWQ6IDEsXG4gICAgICAgICAgICBwcm9qZWN0TmFtZTogJ1Nwb3J0JyxcbiAgICAgICAgICAgIHByb2plY3RDb2xvcjogJyNkYWI4ZGUnLFxuICAgICAgICAgICAgdGl0bGU6ICdSZWFkIFwiVGhlIEdyZWF0IEdhdHNieVwiJyxcbiAgICAgICAgICAgIG5vdGVzOiAnQ29tcGxldGUgY2hhcHRlcnMgMS0zIGJ5IHRoZSBlbmQgb2YgdGhlIHdlZWsnLFxuICAgICAgICAgICAgcHJpb3JpdHk6ICdNZWRpdW0nLFxuICAgICAgICAgICAgZGF0ZTogJzIwMjMtMTEtMjMnLFxuICAgICAgICAgICAgY29tcGxldGVkOiAndHJ1ZScsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiA2LFxuICAgICAgICAgICAgcHJvamVjdElkOiAyLFxuICAgICAgICAgICAgcHJvamVjdE5hbWU6ICdNYXRoJyxcbiAgICAgICAgICAgIHByb2plY3RDb2xvcjogJyM5M2M3YjQnLFxuICAgICAgICAgICAgdGl0bGU6ICdQcmVwYXJlIHByZXNlbnRhdGlvbiBzbGlkZXMnLFxuICAgICAgICAgICAgbm90ZXM6ICdJbmNvcnBvcmF0ZSBmZWVkYmFjayBmcm9tIHRlYW0gbWVtYmVycycsXG4gICAgICAgICAgICBwcmlvcml0eTogJ0hpZ2gnLFxuICAgICAgICAgICAgZGF0ZTogJzIwMjMtMTEtMjMnLFxuICAgICAgICAgICAgY29tcGxldGVkOiAnZmFsc2UnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogNyxcbiAgICAgICAgICAgIHByb2plY3RJZDogMyxcbiAgICAgICAgICAgIHByb2plY3ROYW1lOiAnUHJvZ3JhbW1pbmcnLFxuICAgICAgICAgICAgcHJvamVjdENvbG9yOiAnI2U4Y2ViNScsXG4gICAgICAgICAgICB0aXRsZTogJ1ByYWN0aWNlIGd1aXRhcicsXG4gICAgICAgICAgICBub3RlczogJ0xlYXJuIG5ldyBjaG9yZHMgYW5kIHByYWN0aWNlIHNjYWxlcycsXG4gICAgICAgICAgICBwcmlvcml0eTogJ01lZGl1bScsXG4gICAgICAgICAgICBkYXRlOiAnMjAyMy0xMS0yNCcsXG4gICAgICAgICAgICBjb21wbGV0ZWQ6ICdmYWxzZScsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiA4LFxuICAgICAgICAgICAgcHJvamVjdElkOiA0LFxuICAgICAgICAgICAgcHJvamVjdE5hbWU6ICdMZWlzdXJlJyxcbiAgICAgICAgICAgIHByb2plY3RDb2xvcjogJyNhNmI1ZmYnLFxuICAgICAgICAgICAgdGl0bGU6ICdXcml0ZSBkb2N1bWVudGF0aW9uJyxcbiAgICAgICAgICAgIG5vdGVzOiAnRG9jdW1lbnQgdGhlIG5ldyBBUEkgZW5kcG9pbnRzJyxcbiAgICAgICAgICAgIHByaW9yaXR5OiAnSGlnaCcsXG4gICAgICAgICAgICBkYXRlOiAnMjAyMy0xMS0yNCcsXG4gICAgICAgICAgICBjb21wbGV0ZWQ6ICdmYWxzZScsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiA5LFxuICAgICAgICAgICAgcHJvamVjdElkOiA0LFxuICAgICAgICAgICAgcHJvamVjdE5hbWU6ICdMZWlzdXJlJyxcbiAgICAgICAgICAgIHByb2plY3RDb2xvcjogJyNhNmI1ZmYnLFxuICAgICAgICAgICAgdGl0bGU6ICdXcml0ZSBkb2N1bWVudGF0aW9uJyxcbiAgICAgICAgICAgIG5vdGVzOiAnRG9jdW1lbnQgdGhlIG5ldyBBUEkgZW5kcG9pbnRzJyxcbiAgICAgICAgICAgIHByaW9yaXR5OiAnSGlnaCcsXG4gICAgICAgICAgICBkYXRlOiAnMjAyMy0xMS0yNCcsXG4gICAgICAgICAgICBjb21wbGV0ZWQ6ICdmYWxzZScsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAxMCxcbiAgICAgICAgICAgIHByb2plY3RJZDogNCxcbiAgICAgICAgICAgIHByb2plY3ROYW1lOiAnTGVpc3VyZScsXG4gICAgICAgICAgICBwcm9qZWN0Q29sb3I6ICcjYTZiNWZmJyxcbiAgICAgICAgICAgIHRpdGxlOiAnV3JpdGUgZG9jdW1lbnRhdGlvbicsXG4gICAgICAgICAgICBub3RlczogJ0RvY3VtZW50IHRoZSBuZXcgQVBJIGVuZHBvaW50cycsXG4gICAgICAgICAgICBwcmlvcml0eTogJ0hpZ2gnLFxuICAgICAgICAgICAgZGF0ZTogJzIwMjMtMTEtMjQnLFxuICAgICAgICAgICAgY29tcGxldGVkOiAnZmFsc2UnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogMTEsXG4gICAgICAgICAgICBwcm9qZWN0SWQ6IDQsXG4gICAgICAgICAgICBwcm9qZWN0TmFtZTogJ0xlaXN1cmUnLFxuICAgICAgICAgICAgcHJvamVjdENvbG9yOiAnI2E2YjVmZicsXG4gICAgICAgICAgICB0aXRsZTogJ1dyaXRlIGRvY3VtZW50YXRpb24nLFxuICAgICAgICAgICAgbm90ZXM6ICdEb2N1bWVudCB0aGUgbmV3IEFQSSBlbmRwb2ludHMnLFxuICAgICAgICAgICAgcHJpb3JpdHk6ICdIaWdoJyxcbiAgICAgICAgICAgIGRhdGU6ICcyMDIzLTExLTI0JyxcbiAgICAgICAgICAgIGNvbXBsZXRlZDogJ2ZhbHNlJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDEyLFxuICAgICAgICAgICAgcHJvamVjdElkOiA0LFxuICAgICAgICAgICAgcHJvamVjdE5hbWU6ICdMZWlzdXJlJyxcbiAgICAgICAgICAgIHByb2plY3RDb2xvcjogJyNhNmI1ZmYnLFxuICAgICAgICAgICAgdGl0bGU6ICdXcml0ZSBkb2N1bWVudGF0aW9uJyxcbiAgICAgICAgICAgIG5vdGVzOiAnRG9jdW1lbnQgdGhlIG5ldyBBUEkgZW5kcG9pbnRzJyxcbiAgICAgICAgICAgIHByaW9yaXR5OiAnSGlnaCcsXG4gICAgICAgICAgICBkYXRlOiAnMjAyMy0xMS0yNCcsXG4gICAgICAgICAgICBjb21wbGV0ZWQ6ICdmYWxzZScsXG4gICAgICAgIH0sXG5cbiAgICAgICAgXG5cbiAgICBdO1xuICAgIFxuICAgIGxldCB0YXNrc0NvdW50ID0gdGFza3MubGVuZ3RoO1xuXG4gICAgLy8gQWRkIG5ldyB0YXNrIG9iamVjdFxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRhc2socHJvamVjdE5hbWUsIHRpdGxlLCBub3RlcywgZGF0ZSkge1xuICAgICAgICBjb25zdCB0YXNrID0ge307XG4gICAgICAgIHRhc2tzQ291bnQgPSB0YXNrc0NvdW50ICsgMTtcbiAgICAgICAgdGFzay5pZCA9IHRhc2tzQ291bnQ7XG4gICAgICAgIHRhc2sucHJvamVjdElkID0gUHJvamVjdE1vZHVsZS5maW5kSWRCeU5hbWUocHJvamVjdE5hbWUpO1xuICAgICAgICB0YXNrLnByb2plY3ROYW1lID0gcHJvamVjdE5hbWU7XG4gICAgICAgIHRhc2sucHJvamVjdENvbG9yID0gUHJvamVjdE1vZHVsZS5maW5kQ29sb3JCeU5hbWUocHJvamVjdE5hbWUpO1xuICAgICAgICB0YXNrLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRhc2subm90ZXMgPSBub3RlcztcbiAgICAgICAgLy8gdGFzay5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0YXNrLmRhdGUgPSBkYXRlO1xuICBcbiAgICAgICAgdGFza3MucHVzaCh0YXNrKTtcbiAgICAgICAgcmV0dXJuIHRhc2s7XG4gICAgfVxuXG4gICAgLy8gUmV0cmlldmUgYWxsIHRhc2tzXG4gICAgZnVuY3Rpb24gZ2V0QWxsVGFza3MoKSB7XG4gICAgICAgIGNoYW5nZUFjdGl2ZVZpZXcoJ2FsbCcpO1xuICAgICAgICByZXR1cm4gdGFza3Muc2xpY2UoKTtcbiAgICB9XG5cbiAgICAvLyBSZXRyaWV2ZSB0b2RheSdzIHRhc2tzXG4gICAgZnVuY3Rpb24gZ2V0VG9kYXlUYXNrcygpIHtcbiAgICAgICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpOyAgICAgICAgXG4gICAgICAgIGNvbnN0IHRhc2tzVG9SZXR1cm4gPSBbXTtcbiAgICAgICAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGF0ZVN0cmluZyA9IHRhc2suZGF0ZTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGVQYXJ0cyA9IGRhdGVTdHJpbmcuc3BsaXQoXCItXCIpO1xuXG4gICAgICAgICAgICBjb25zdCB5ZWFyID0gcGFyc2VJbnQoZGF0ZVBhcnRzWzBdKTtcbiAgICAgICAgICAgIGNvbnN0IG1vbnRoID0gcGFyc2VJbnQoZGF0ZVBhcnRzWzFdKTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBwYXJzZUludChkYXRlUGFydHNbMl0pO1xuXG4gICAgICAgICAgICBjb25zdCB0YXNrRGF0ZSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSwgZGF0ZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGlzU2FtZVllYXIgPSB0YXNrRGF0ZS5nZXRGdWxsWWVhcigpID09PSB0b2RheS5nZXRGdWxsWWVhcigpO1xuICAgICAgICAgICAgY29uc3QgaXNTYW1lTW9udGggPSB0YXNrRGF0ZS5nZXRNb250aCgpID09PSB0b2RheS5nZXRNb250aCgpO1xuICAgICAgICAgICAgY29uc3QgaXNTYW1lRGF5ID0gdGFza0RhdGUuZ2V0RGF0ZSgpID09PSB0b2RheS5nZXREYXRlKCk7XG5cblxuICAgICAgICAgICAgaWYgKGlzU2FtZVllYXIgJiYgaXNTYW1lTW9udGggJiYgaXNTYW1lRGF5KSB7XG4gICAgICAgICAgICAgICAgdGFza3NUb1JldHVybi5wdXNoKHRhc2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGNoYW5nZUFjdGl2ZVZpZXcoJ3RvZGF5Jyk7XG4gICAgICAgIHJldHVybiB0YXNrc1RvUmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFJldHJpZXZlIHRvbW9ycm93J3MgdGFza3NcbiAgICBmdW5jdGlvbiBnZXRUb21vcnJvd1Rhc2tzKCkge1xuXG4gICAgICAgIGNvbnN0IHRvbW9ycm93ID0gbmV3IERhdGUobmV3IERhdGUoKS5nZXRUaW1lKCkgKyAyNCAqIDYwICogNjAgKiAxMDAwKTsgICAgICAgXG4gICAgICAgIGNvbnN0IHRhc2tzVG9SZXR1cm4gPSBbXTtcbiAgICAgICAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGF0ZVN0cmluZyA9IHRhc2suZGF0ZTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGVQYXJ0cyA9IGRhdGVTdHJpbmcuc3BsaXQoXCItXCIpO1xuXG4gICAgICAgICAgICBjb25zdCB5ZWFyID0gcGFyc2VJbnQoZGF0ZVBhcnRzWzBdKTtcbiAgICAgICAgICAgIGNvbnN0IG1vbnRoID0gcGFyc2VJbnQoZGF0ZVBhcnRzWzFdKTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBwYXJzZUludChkYXRlUGFydHNbMl0pO1xuXG4gICAgICAgICAgICBjb25zdCB0YXNrRGF0ZSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSwgZGF0ZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGlzU2FtZVllYXIgPSB0YXNrRGF0ZS5nZXRGdWxsWWVhcigpID09PSB0b21vcnJvdy5nZXRGdWxsWWVhcigpO1xuICAgICAgICAgICAgY29uc3QgaXNTYW1lTW9udGggPSB0YXNrRGF0ZS5nZXRNb250aCgpID09PSB0b21vcnJvdy5nZXRNb250aCgpO1xuICAgICAgICAgICAgY29uc3QgaXNTYW1lRGF5ID0gdGFza0RhdGUuZ2V0RGF0ZSgpID09PSB0b21vcnJvdy5nZXREYXRlKCk7XG5cblxuICAgICAgICAgICAgaWYgKGlzU2FtZVllYXIgJiYgaXNTYW1lTW9udGggJiYgaXNTYW1lRGF5KSB7XG4gICAgICAgICAgICAgICAgdGFza3NUb1JldHVybi5wdXNoKHRhc2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIGNoYW5nZUFjdGl2ZVZpZXcoJ3RvbW9ycm93Jyk7XG4gICAgICAgIHJldHVybiB0YXNrc1RvUmV0dXJuO1xuXG5cbiAgICB9XG5cbiAgICAvLyBSZXRyaWV2ZSB0YXNrcyBmcm9tIGFjdGl2ZSB2aWV3XG4gICAgZnVuY3Rpb24gZ2V0VGFza3NGcm9tQWN0aXZlVmlldygpIHtcbiAgICAgICAgaWYgKGdldEFjdGl2ZVZpZXcoKSA9PT0gJ3RvZGF5Jykge1xuICAgICAgICAgICAgcmV0dXJuIGdldFRvZGF5VGFza3MoKTtcbiAgICAgICAgfSBlbHNlIGlmIChnZXRBY3RpdmVWaWV3KCkgPT09ICd0b21vcnJvdycpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXRUb21vcnJvd1Rhc2tzKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoZ2V0QWN0aXZlVmlldygpID09PSAnYWxsJykge1xuICAgICAgICAgICAgcmV0dXJuIGdldEFsbFRhc2tzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXRyaWV2ZSBhIHByb2plY3QncyB0YXNrc1xuICAgIGZ1bmN0aW9uIGdldFByb2plY3RUYXNrcyhwcm9qZWN0LCB0YXNrcykge1xuICAgICAgICBpZiAocHJvamVjdCA9PSAnJykge1xuICAgICAgICAgICAgcmV0dXJuIHRhc2tzO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdGFza3NUb1JldHVybiA9IFtdO1xuICAgICAgICBcbiAgICAgICAgdGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgIGlmICh0YXNrLnByb2plY3ROYW1lID09IHByb2plY3QpIHtcbiAgICAgICAgICAgICAgICB0YXNrc1RvUmV0dXJuLnB1c2godGFzayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgY2hhbmdlQWN0aXZlUHJvamVjdChwcm9qZWN0KTtcblxuICAgICAgICByZXR1cm4gdGFza3NUb1JldHVybjtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjcmVhdGVUYXNrLFxuICAgICAgICBnZXRBbGxUYXNrcyxcbiAgICAgICAgZ2V0VG9kYXlUYXNrcyxcbiAgICAgICAgZ2V0VG9tb3Jyb3dUYXNrcyxcbiAgICAgICAgY2hhbmdlQWN0aXZlVmlldyxcbiAgICAgICAgZ2V0QWN0aXZlVmlldyxcbiAgICAgICAgY2hhbmdlQWN0aXZlUHJvamVjdCxcbiAgICAgICAgZ2V0QWN0aXZlUHJvamVjdCxcbiAgICAgICAgZ2V0UHJvamVjdFRhc2tzLFxuICAgICAgICBnZXRUYXNrc0Zyb21BY3RpdmVWaWV3LFxuICAgICAgICBkZWxldGVUYXNrLFxuICAgIH1cbiAgICBcbn0pKCk7XG5cblxuLy8gRE9NIG1vZHVsZVxuY29uc3QgRE9NTW9kdWxlID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVNYWluRGl2KCkge1xuICAgICAgICBjb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuICAgICAgICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1haW5EaXYuY2xhc3NMaXN0LmFkZCgnbWFpbicpO1xuICAgICAgICBib2R5LmFwcGVuZChtYWluRGl2KTtcbiAgICB9XG5cbiAgICBjb25zdCBjcmVhdGVEaWFsb2dzID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgICAgICAgLy8gbmV3UHJvamVjdERpYWxvZ0hhbmRsZXIoKTtcbiAgICAgICAgLy8gbmV3VGFza0RpYWxvZ0hhbmRsZXIoKTtcblxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVUYXNrRGVsZXRlRGlhbG9nKCkge1xuICAgICAgICAgICAgY29uc3QgdGFza0RlbGV0ZURpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpYWxvZycpO1xuICAgICAgICAgICAgdGFza0RlbGV0ZURpYWxvZy5jbGFzc0xpc3QuYWRkKCd0YXNrLWRlbGV0ZScsICdoaWRkZW4nKTtcblxuICAgICAgICAgICAgY29uc3QgZGVsZXRlQ29uZmlybUZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgICAgICB0YXNrRGVsZXRlRGlhbG9nLmFwcGVuZChkZWxldGVDb25maXJtRm9ybSk7XG5cbiAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUNvbmZpcm1UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkZWxldGVDb25maXJtVGV4dC5jbGFzc0xpc3QuYWRkKCdjb25maXJtLXRleHQnKTtcbiAgICAgICAgICAgIGRlbGV0ZUNvbmZpcm1UZXh0LnRleHRDb250ZW50ID0gXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgdGFzaz9cIlxuICAgICAgICAgICAgZGVsZXRlQ29uZmlybUZvcm0uYXBwZW5kKGRlbGV0ZUNvbmZpcm1UZXh0KTtcblxuICAgICAgICAgICAgY29uc3QgZGVsZXRlQ29uZmlybUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgZGVsZXRlQ29uZmlybUJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gICAgICAgICAgICBkZWxldGVDb25maXJtQnV0dG9uLnRleHRDb250ZW50ID0gJ0NvbmZpcm0nO1xuICAgICAgICAgICAgZGVsZXRlQ29uZmlybUZvcm0uYXBwZW5kKGRlbGV0ZUNvbmZpcm1CdXR0b24pO1xuXG4gICAgICAgICAgICBjb25zdCBkZWxldGVDYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGRlbGV0ZUNhbmNlbEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2xvc2UnKTtcbiAgICAgICAgICAgIGRlbGV0ZUNhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuICAgICAgICAgICAgZGVsZXRlQ29uZmlybUZvcm0uYXBwZW5kKGRlbGV0ZUNhbmNlbEJ1dHRvbik7XG5cbiAgICAgICAgICAgIGJvZHkuYXBwZW5kKHRhc2tEZWxldGVEaWFsb2cpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlUHJvamVjdERlbGV0ZURpYWxvZygpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3REZWxldGVEaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaWFsb2cnKTtcbiAgICAgICAgICAgIHByb2plY3REZWxldGVEaWFsb2cuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1kZWxldGUnLCAnaGlkZGVuJyk7XG4gICAgICAgICAgICBib2R5LmFwcGVuZChwcm9qZWN0RGVsZXRlRGlhbG9nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIG5ld1Byb2plY3REaWFsb2dIYW5kbGVyKCkge1xuICAgICAgICAgICAgY29uc3QgbmV3UHJvamVjdERpYWxvZyA9IGNyZWF0ZVByb2plY3REaWFsb2coKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1Byb2plY3REaWFsb2dGb3JtID0gY3JlYXRlUHJvamVjdERpYWxvZ0Zvcm0oKTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlUHJvamVjdERpYWxvZygpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdQcm9qZWN0RGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJyk7XG4gICAgICAgICAgICAgICAgbmV3UHJvamVjdERpYWxvZy5jbGFzc0xpc3QuYWRkKCduZXctcHJvamVjdCcsICdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICBib2R5LmFwcGVuZChuZXdQcm9qZWN0RGlhbG9nKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3UHJvamVjdERpYWxvZztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlUHJvamVjdERpYWxvZ0Zvcm0oKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3UHJvamVjdERpYWxvZ0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgICAgICAgICAgbmV3UHJvamVjdERpYWxvZy5hcHBlbmQobmV3UHJvamVjdERpYWxvZ0Zvcm0pO1xuICAgICAgICAgICAgICAgIG5ld1Byb2plY3REaWFsb2dGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaWFsb2cubmV3LXByb2plY3QgPiBmb3JtIGlucHV0I3Byb2plY3QtbmFtZScpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0Q29sb3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaWFsb2cubmV3LXByb2plY3QgPiBmb3JtIGlucHV0I3Byb2plY3QtY29sb3InKTtcbiAgICAgICAgICAgICAgICAgICAgUHJvamVjdE1vZHVsZS5jcmVhdGVQcm9qZWN0KHByb2plY3ROYW1lLnZhbHVlLCBwcm9qZWN0Q29sb3IudmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICBET01Nb2R1bGUuY3JlYXRlTGVmdERpdi5jcmVhdGVQcm9qZWN0cyhQcm9qZWN0TW9kdWxlLmdldFByb2plY3RPYmplY3RzKCkpO1xuICAgICAgICAgICAgICAgICAgICBET01Nb2R1bGUuY3JlYXRlRGlhbG9ncy5uZXdUYXNrRGlhbG9nSGFuZGxlcigpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGRpYWxvZ05hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBkaWFsb2dOYW1lLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtZGlhbG9nLW5hbWUnKTtcbiAgICAgICAgICAgICAgICBkaWFsb2dOYW1lLnRleHRDb250ZW50ID0gJ05ldyBQcm9qZWN0JztcbiAgICAgICAgICAgICAgICBuZXdQcm9qZWN0RGlhbG9nRm9ybS5hcHBlbmQoZGlhbG9nTmFtZSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2lucHV0LWNvbnRhaW5lcicpO1xuICAgICAgICAgICAgICAgIG5ld1Byb2plY3REaWFsb2dGb3JtLmFwcGVuZChpbnB1dENvbnRhaW5lcik7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBuYW1lRmllbGREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBuYW1lRmllbGREaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1uYW1lLWZpZWxkLWRpdicpO1xuICAgICAgICAgICAgICAgIGlucHV0Q29udGFpbmVyLmFwcGVuZChuYW1lRmllbGREaXYpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgbmFtZUZpZWxkTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgICAgIG5hbWVGaWVsZExhYmVsLnRleHRDb250ZW50ID0gJ05hbWUqJztcbiAgICAgICAgICAgICAgICBuYW1lRmllbGRMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcm9qZWN0LW5hbWUnKTtcbiAgICAgICAgICAgICAgICBuYW1lRmllbGREaXYuYXBwZW5kKG5hbWVGaWVsZExhYmVsKTtcbiAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBuYW1lRmllbGRJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgbmFtZUZpZWxkSW5wdXQudGV4dENvbnRlbnQgPSAnTmFtZSc7XG4gICAgICAgICAgICAgICAgbmFtZUZpZWxkSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKTtcbiAgICAgICAgICAgICAgICBuYW1lRmllbGRJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3QtbmFtZScpO1xuICAgICAgICAgICAgICAgIG5hbWVGaWVsZElucHV0LnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnQXdlc29tZSBwcm9qZWN0Li4uJyk7XG4gICAgICAgICAgICAgICAgbmFtZUZpZWxkSW5wdXQuc2V0QXR0cmlidXRlKCdyZXF1aXJlZCcsICdyZXF1aXJlZCcpO1xuICAgICAgICAgICAgICAgIG5hbWVGaWVsZERpdi5hcHBlbmQobmFtZUZpZWxkSW5wdXQpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgY29sb3JGaWVsZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGNvbG9yRmllbGREaXYuY2xhc3NMaXN0LmFkZCgncHJvamVjdC1jb2xvci1maWVsZC1kaXYnKTtcbiAgICAgICAgICAgICAgICBpbnB1dENvbnRhaW5lci5hcHBlbmQoY29sb3JGaWVsZERpdik7XG4gICAgXG4gICAgICAgICAgICAgICAgY29uc3QgY29sb3JGaWVsZExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgICAgICBjb2xvckZpZWxkTGFiZWwudGV4dENvbnRlbnQgPSAnQ29sb3InO1xuICAgICAgICAgICAgICAgIGNvbG9yRmllbGRMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdwcm9qZWN0LWNvbG9yJyk7XG4gICAgICAgICAgICAgICAgY29sb3JGaWVsZERpdi5hcHBlbmQoY29sb3JGaWVsZExhYmVsKTtcbiAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBjb2xvckZpZWxkSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgIGNvbG9yRmllbGRJbnB1dC50ZXh0Q29udGVudCA9ICdDb2xvcic7XG4gICAgICAgICAgICAgICAgY29sb3JGaWVsZElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdjb2xvcicpO1xuICAgICAgICAgICAgICAgIGNvbG9yRmllbGRJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Byb2plY3QtY29sb3InKTtcbiAgICAgICAgICAgICAgICBjb2xvckZpZWxkRGl2LmFwcGVuZChjb2xvckZpZWxkSW5wdXQpO1xuICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IHN1Ym1pdFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICBzdWJtaXRQcm9qZWN0QnV0dG9uLnNldEF0dHJpYnV0ZSgndHlwZScsICdzdWJtaXQnKTtcbiAgICAgICAgICAgICAgICBzdWJtaXRQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gJ1NhdmUnO1xuICAgICAgICAgICAgICAgIG5ld1Byb2plY3REaWFsb2dGb3JtLmFwcGVuZChzdWJtaXRQcm9qZWN0QnV0dG9uKTtcbiAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBjbG9zZVByb2plY3REaWFsb2dEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBjbG9zZVByb2plY3REaWFsb2dEaXYuY2xhc3NMaXN0LmFkZCgnY2xvc2UtcHJvamVjdC1kaWFsb2cnKTtcbiAgICAgICAgICAgICAgICBuZXdQcm9qZWN0RGlhbG9nRm9ybS5hcHBlbmQoY2xvc2VQcm9qZWN0RGlhbG9nRGl2KTtcbiAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBjbG9zZVByb2plY3REaWFsb2dTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgICAgIGNsb3NlUHJvamVjdERpYWxvZ1NwYW4uY2xhc3NMaXN0LmFkZCgnbWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCcpO1xuICAgICAgICAgICAgICAgIGNsb3NlUHJvamVjdERpYWxvZ1NwYW4udGV4dENvbnRlbnQgPSAnY2xvc2UnO1xuICAgICAgICAgICAgICAgIGNsb3NlUHJvamVjdERpYWxvZ0Rpdi5hcHBlbmQoY2xvc2VQcm9qZWN0RGlhbG9nU3Bhbik7XG5cbiAgICAgICAgICAgICAgICAvLyBBZGQgY2xvc2UgYW5pbWF0aW9uIG9uIFNhdmUgYW5kIENsb3NlXG4gICAgICAgICAgICAgICAgaGFuZGxlQ2xvc2VBbmltYXRpb24obmV3UHJvamVjdERpYWxvZ0Zvcm0sIG5ld1Byb2plY3REaWFsb2csICdzdWJtaXQnLCBuZXdQcm9qZWN0RGlhbG9nRm9ybSk7XG4gICAgICAgICAgICAgICAgaGFuZGxlQ2xvc2VBbmltYXRpb24oY2xvc2VQcm9qZWN0RGlhbG9nU3BhbiwgbmV3UHJvamVjdERpYWxvZywgJ2NsaWNrJywgbmV3UHJvamVjdERpYWxvZ0Zvcm0pO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ld1Byb2plY3REaWFsb2dGb3JtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gbmV3VGFza0RpYWxvZ0hhbmRsZXIoKSB7XG5cbiAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nVGFza0RpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdGFzaycpO1xuICAgICAgICAgICAgaWYgKGV4aXN0aW5nVGFza0RpYWxvZykge1xuICAgICAgICAgICAgICAgIGV4aXN0aW5nVGFza0RpYWxvZy5yZW1vdmUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgbmV3VGFza0RpYWxvZyA9IGNyZWF0ZVRhc2tEaWFsb2coKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1Rhc2tEaWFsb2dGb3JtID0gY3JlYXRlVGFza0RpYWxvZ0Zvcm0oKTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlVGFza0RpYWxvZygpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdUYXNrRGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJyk7XG4gICAgICAgICAgICAgICAgbmV3VGFza0RpYWxvZy5jbGFzc0xpc3QuYWRkKCduZXctdGFzaycsICdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICBib2R5LmFwcGVuZChuZXdUYXNrRGlhbG9nKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3VGFza0RpYWxvZztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlVGFza0RpYWxvZ0Zvcm0oKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdUYXNrRGlhbG9nRm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctdGFzayA+IGZvcm0nKTtcbiAgICAgICAgICAgICAgICBpZiAoZXhpc3RpbmdUYXNrRGlhbG9nRm9ybSkge1xuICAgICAgICAgICAgICAgICAgICBleGlzdGluZ1Rhc2tEaWFsb2dGb3JtLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBuZXdUYXNrRGlhbG9nRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgICAgICAgICBuZXdUYXNrRGlhbG9nLmFwcGVuZChuZXdUYXNrRGlhbG9nRm9ybSk7XG4gICAgICAgICAgICAgICAgbmV3VGFza0RpYWxvZ0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXNrUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpYWxvZy5uZXctdGFzayA+IGZvcm0gI3Rhc2stcHJvamVjdCcpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaWFsb2cubmV3LXRhc2sgPiBmb3JtICN0YXNrLXRpdGxlJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tOb3RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpYWxvZy5uZXctdGFzayA+IGZvcm0gI3Rhc2stbm90ZXMnKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGlhbG9nLm5ldy10YXNrID4gZm9ybSAjdGFzay1wcmlvcml0eScpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXNrRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpYWxvZy5uZXctdGFzayA+IGZvcm0gI3Rhc2stZGF0ZScpO1xuICAgICAgICAgICAgICAgICAgICBUYXNrTW9kdWxlLmNyZWF0ZVRhc2sodGFza1Byb2plY3QudmFsdWUsIHRhc2tUaXRsZS52YWx1ZSwgdGFza05vdGVzLnZhbHVlLCB0YXNrRGF0ZS52YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgRE9NTW9kdWxlLmNyZWF0ZVJpZ2h0RGl2LmNyZWF0ZVRhc2tzKFRhc2tNb2R1bGUuZ2V0UHJvamVjdFRhc2tzKFRhc2tNb2R1bGUuZ2V0QWN0aXZlUHJvamVjdCgpLCBUYXNrTW9kdWxlLmdldFRhc2tzRnJvbUFjdGl2ZVZpZXcoKSkpO1xuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICBjb25zdCBkaWFsb2dOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZGlhbG9nTmFtZS5jbGFzc0xpc3QuYWRkKCd0YXNrLWRpYWxvZy1uYW1lJyk7XG4gICAgICAgICAgICAgICAgZGlhbG9nTmFtZS50ZXh0Q29udGVudCA9ICdOZXcgVGFzayc7XG4gICAgICAgICAgICAgICAgbmV3VGFza0RpYWxvZ0Zvcm0uYXBwZW5kKGRpYWxvZ05hbWUpO1xuICAgIFxuXG4gICAgICAgICAgICAgICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1hdHRlRGF0ZSA9IHRvZGF5LnRvSVNPU3RyaW5nKCkuc3BsaXQoJ1QnKVswXTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Rhc2tEaWFsb2dGaWVsZHNUZW1wbGF0ZSA9IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudF90eXBlOiAnc2VsZWN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdl9jbGFzczogJ3Rhc2stcHJvamVjdC1maWVsZC1kaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudF9pZDogJ3Rhc2stcHJvamVjdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dF90eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1Byb2plY3QnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENvbnRlbnQ6ICdQcm9qZWN0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdF9vcHRpb25zOiBQcm9qZWN0TW9kdWxlLmdldFByb2plY3RWYWx1ZXMoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcl9zdHlsZTogJ3BvaW50ZXInLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50X3R5cGU6ICdpbnB1dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXZfY2xhc3M6ICd0YXNrLXRpdGxlLWZpZWxkLWRpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50X2lkOiAndGFzay10aXRsZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dF90eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1RpdGxlIConLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENvbnRlbnQ6ICdUaXRsZScsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X3BsYWNlaG9sZGVyOiAnUmVhZCBhIGJvb2snLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6ICdyZXF1aXJlZCcsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRfdHlwZTogJ3RleHRhcmVhJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdl9jbGFzczogJ3Rhc2stbm90ZXMtZmllbGQtZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRfaWQ6ICd0YXNrLW5vdGVzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0X3R5cGU6ICcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdOb3RlcycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q29udGVudDogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0X3BsYWNlaG9sZGVyOiAnQXQgbGVhc3QgYSBwYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgZWxlbWVudF90eXBlOiAnc2VsZWN0JyxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGRpdl9jbGFzczogJ3Rhc2stcHJpb3JpdHktZmllbGQtZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGVsZW1lbnRfaWQ6ICd0YXNrLXByaW9yaXR5JyxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGlucHV0X3R5cGU6ICcnLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgbGFiZWw6ICdQcmlvcml0eScsXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB0ZXh0Q29udGVudDogJ1ByaW9yaXR5JyxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHNlbGVjdF9vcHRpb25zOiBbJ0hpZ2gnLCAnTm9ybWFsJywgJ0xvdyddLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgc2VsZWN0X2RlZmF1bHQ6ICdOb3JtYWwnLFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgY3Vyc29yX3N0eWxlOiAncG9pbnRlcicsXG4gICAgICAgICAgICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRfdHlwZTogJ2lucHV0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdl9jbGFzczogJ3Rhc2stZGF0ZS1maWVsZC1kaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudF9pZDogJ3Rhc2stZGF0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dF90eXBlOiAnZGF0ZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0RhdGUgKicsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q29udGVudDogJ0RhdGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ6ICdyZXF1aXJlZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZm9ybWF0dGVEYXRlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF07XG4gICAgXG4gICAgICAgICAgICAgICAgbmV3VGFza0RpYWxvZ0ZpZWxkc1RlbXBsYXRlLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkRGl2LmNsYXNzTGlzdC5hZGQoZWxlbWVudC5kaXZfY2xhc3MpO1xuICAgICAgICAgICAgICAgICAgICBuZXdUYXNrRGlhbG9nRm9ybS5hcHBlbmQoZmllbGREaXYpO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWVsZExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgICAgICAgICAgZmllbGRMYWJlbC50ZXh0Q29udGVudCA9IGVsZW1lbnQubGFiZWw7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCBlbGVtZW50LmVsZW1lbnRfaWQpO1xuICAgICAgICAgICAgICAgICAgICBmaWVsZERpdi5hcHBlbmQoZmllbGRMYWJlbCk7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQuZWxlbWVudF90eXBlKTtcbiAgICAgICAgICAgICAgICAgICAgZmllbGRJbnB1dC50ZXh0Q29udGVudCA9IGVsZW1lbnQudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgZWxlbWVudC5pbnB1dF90eXBlKTtcbiAgICAgICAgICAgICAgICAgICAgZmllbGRJbnB1dC5zZXRBdHRyaWJ1dGUoJ2lkJywgZWxlbWVudC5lbGVtZW50X2lkKTtcbiAgICAgICAgICAgICAgICAgICAgZmllbGRJbnB1dC5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywgZWxlbWVudC50ZXh0X3BsYWNlaG9sZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgZmllbGRJbnB1dC5zZXRBdHRyaWJ1dGUoZWxlbWVudC5yZXF1aXJlZCwgZWxlbWVudC5yZXF1aXJlZCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZElucHV0LnZhbHVlID0gZWxlbWVudC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBmaWVsZElucHV0LnN0eWxlLmN1cnNvciA9IGVsZW1lbnQuY3Vyc29yX3N0eWxlO1xuICAgICAgICAgICAgICAgICAgICBmaWVsZERpdi5hcHBlbmQoZmllbGRJbnB1dCk7XG5cblxuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5lbGVtZW50X3R5cGUgPT09ICdzZWxlY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNlbGVjdF9vcHRpb25zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCd2YWx1ZScsIGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IGl0ZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRJbnB1dC5hcHBlbmQob3B0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbSA9PT0gZWxlbWVudC5zZWxlY3RfZGVmYXVsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb24uc2V0QXR0cmlidXRlKCdzZWxlY3RlZCcsICcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH0pXG4gICAgXG4gICAgICAgICAgICAgICAgY29uc3Qgc3VibWl0VGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIHN1Ym1pdFRhc2tCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICAgICAgICAgICAgICAgIHN1Ym1pdFRhc2tCdXR0b24udGV4dENvbnRlbnQgPSAnU2F2ZSc7XG4gICAgICAgICAgICAgICAgbmV3VGFza0RpYWxvZ0Zvcm0uYXBwZW5kKHN1Ym1pdFRhc2tCdXR0b24pO1xuICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IGNsb3NlVGFza0RpYWxvZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGNsb3NlVGFza0RpYWxvZ0Rpdi5jbGFzc0xpc3QuYWRkKCdjbG9zZS10YXNrLWRpYWxvZycpO1xuICAgICAgICAgICAgICAgIG5ld1Rhc2tEaWFsb2dGb3JtLmFwcGVuZChjbG9zZVRhc2tEaWFsb2dEaXYpO1xuICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IGNsb3NlVGFza0RpYWxvZ1NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICAgICAgY2xvc2VUYXNrRGlhbG9nU3Bhbi5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkJyk7XG4gICAgICAgICAgICAgICAgY2xvc2VUYXNrRGlhbG9nU3Bhbi50ZXh0Q29udGVudCA9ICdjbG9zZSc7XG4gICAgICAgICAgICAgICAgY2xvc2VUYXNrRGlhbG9nRGl2LmFwcGVuZChjbG9zZVRhc2tEaWFsb2dTcGFuKTtcbiAgICBcbiAgICAgICAgICAgICAgICAvLyBBZGQgY2xvc2UgYW5pbWF0aW9uIG9uIFNhdmUgYW5kIENsb3NlXG4gICAgICAgICAgICAgICAgaGFuZGxlQ2xvc2VBbmltYXRpb24obmV3VGFza0RpYWxvZ0Zvcm0sIG5ld1Rhc2tEaWFsb2csICdzdWJtaXQnLCBuZXdUYXNrRGlhbG9nRm9ybSk7XG4gICAgICAgICAgICAgICAgaGFuZGxlQ2xvc2VBbmltYXRpb24oY2xvc2VUYXNrRGlhbG9nU3BhbiwgbmV3VGFza0RpYWxvZywgJ2NsaWNrJywgbmV3VGFza0RpYWxvZ0Zvcm0pO1xuICAgICAgICAgICAgfSAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBDbG9zZSBhbmltYXRpb24gb24gRVNDXG4gICAgICAgIGZ1bmN0aW9uIGFkZEVzY0V2ZW5MaXN0ZW5lcigpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICAgIGlmIChldmVudC5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wZW5EaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaWFsb2dbb3Blbl0nKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wZW5EaWFsb2cpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsb3NlRGlhbG9nKG9wZW5EaWFsb2cpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuXG5cbiAgICAgICAgLy8gQ2xvc2UgYW5pbWF0aW9uIGhhbmRsZXJcbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlQ2xvc2VBbmltYXRpb24oZXZlbnRFbGVtZW50LCBkaWFsb2csIGV2ZW50VHlwZSwgZm9ybSkge1xuICAgICAgICAgICAgZXZlbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRUeXBlLCBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1uYW1lJyk7XG5cbiAgICAgICAgICAgICAgICBwcm9qZWN0TmFtZS52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgICAgIC8vIGZvcm0ucmVzZXQoKTtcbiAgICAgICAgICAgICAgICBjbG9zZURpYWxvZyhkaWFsb2cpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDbG9zZSBkaWFsb2dcbiAgICAgICAgZnVuY3Rpb24gY2xvc2VEaWFsb2coZGlhbG9nKSB7XG4gICAgICAgICAgICBkaWFsb2cuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgICAgICBkaWFsb2cuY2xhc3NMaXN0LnJlbW92ZSgnZGlzcGxheWVkJyk7XG4gICAgICAgICAgICBkaWFsb2cuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGZ1bmN0aW9uIGhhbmRsZVRyYW5zaXRpb25FbmQoKSB7XG4gICAgICAgICAgICAgICAgZGlhbG9nLmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgZGlhbG9nLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBoYW5kbGVUcmFuc2l0aW9uRW5kKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5ld1Byb2plY3REaWFsb2dIYW5kbGVyLFxuICAgICAgICAgICAgbmV3VGFza0RpYWxvZ0hhbmRsZXIsXG4gICAgICAgICAgICBhZGRFc2NFdmVuTGlzdGVuZXIsXG4gICAgICAgICAgICBjcmVhdGVUYXNrRGVsZXRlRGlhbG9nLFxuICAgICAgICAgICAgY3JlYXRlUHJvamVjdERlbGV0ZURpYWxvZyxcbiAgICAgICAgICAgIGhhbmRsZUNsb3NlQW5pbWF0aW9uLFxuICAgICAgICB9XG5cbiAgICB9KSgpO1xuICAgIFxuXG4gICAgLy8gSGFuZGxlciBmb3IgbGVmdCBkaXZcbiAgICBjb25zdCBjcmVhdGVMZWZ0RGl2ID0gKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAvLyBDcmVhdGUgbGF5b3V0IHN0cnVjdHVyZVxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVTdHJ1Y3R1cmUgKCkge1xuICAgICAgICAgICAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG4gICAgICAgICAgICBjb25zdCBsZWZ0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBsZWZ0RGl2LmNsYXNzTGlzdC5hZGQoJ2xlZnQnKTtcbiAgICAgICAgICAgIG1haW5EaXYuYXBwZW5kKGxlZnREaXYpO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgbGVmdEZpcnN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBsZWZ0Rmlyc3REaXYuY2xhc3NMaXN0LmFkZCgnbGVmdC1maXJzdC1zZWN0aW9uJyk7XG4gICAgICAgICAgICBsZWZ0Rmlyc3REaXYuZGF0YXNldC5hY3RpdmUgPSAnVG9kYXknO1xuXG4gICAgICAgICAgICBsZWZ0RGl2LmFwcGVuZChsZWZ0Rmlyc3REaXYpO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgZmlyc3RTZWN0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBmaXJzdFNlY3Rpb25MYWJlbC50ZXh0Q29udGVudCA9ICdUYXNrcyc7XG4gICAgICAgICAgICBsZWZ0Rmlyc3REaXYuYXBwZW5kKGZpcnN0U2VjdGlvbkxhYmVsKTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0U2VjdGlvbkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICAgICAgZmlyc3RTZWN0aW9uTGlzdC5jbGFzc0xpc3QuYWRkKCd2aWV3cycpO1xuICAgICAgICAgICAgbGVmdEZpcnN0RGl2LmFwcGVuZChmaXJzdFNlY3Rpb25MaXN0KTtcblxuICAgICAgICAgICAgY29uc3QgZmlyc3RTZWN0aW9uTGluZUl0ZW1zID0gW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudF90eXBlOiAnbGknLFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50X2NsYXNzOiAndGFzay1maWx0ZXInLFxuICAgICAgICAgICAgICAgICAgICBkYXRhc2V0X2FjdGl2ZTogJ3RydWUnLFxuICAgICAgICAgICAgICAgICAgICBjaGlsZF9lbGVtZW50czogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRfdHlwZTogJ2RpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudF9jbGFzczogJ2ltYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50X2lubmVySHRtbDogJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+Y2FsZW5kYXItdG9kYXktb3V0bGluZTwvdGl0bGU+PHBhdGggZD1cIk0xOSAzSDE4VjFIMTZWM0g4VjFINlYzSDVDMy45IDMgMyAzLjg5IDMgNVYxOUMzIDIwLjExIDMuOSAyMSA1IDIxSDE5QzIwLjExIDIxIDIxIDIwLjExIDIxIDE5VjVDMjEgMy44OSAyMC4xMSAzIDE5IDNNMTkgMTlINVY5SDE5VjE5TTE5IDdINVY1SDE5TTcgMTFIMTJWMTZIN1wiIC8+PC9zdmc+JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudF90eXBlOiAncCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudF90ZXh0Q29udGVudDogJ1RvZGF5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb246ICdnZXRUb2RheVRhc2tzJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudF90eXBlOiAnbGknLFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50X2NsYXNzOiAndGFzay1maWx0ZXInLFxuICAgICAgICAgICAgICAgICAgICBkYXRhc2V0X2FjdGl2ZTogJ2ZhbHNlJyxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRfZWxlbWVudHM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50X3R5cGU6ICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRfY2xhc3M6ICdpbWFnZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudF9pbm5lckh0bWw6ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPmNhbGVuZGFyLXN0YXJ0LW91dGxpbmU8L3RpdGxlPjxwYXRoIGQ9XCJNMTMgMThMOSAxNFYxN0g0VjE0SDJWMjJINFYxOUg5VjIyTDEzIDE4TTE5IDNIMThWMUgxNlYzSDhWMUg2VjNINUMzLjkgMyAzIDMuOSAzIDVWMTJINVY5SDE5VjE5SDE0LjhMMTIuOCAyMUgxOUMyMC4xIDIxIDIxIDIwLjEgMjEgMTlWNUMyMSAzLjkgMjAuMSAzIDE5IDNNNSA3VjVIMTlWN0g1WlwiIC8+PC9zdmc+JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudF90eXBlOiAncCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudF90ZXh0Q29udGVudDogJ1RvbW9ycm93JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb246ICdnZXRUb21vcnJvd1Rhc2tzJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudF90eXBlOiAnbGknLFxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50X2NsYXNzOiAndGFzay1maWx0ZXInLFxuICAgICAgICAgICAgICAgICAgICBkYXRhc2V0X2FjdGl2ZTogJ2ZhbHNlJyxcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRfZWxlbWVudHM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50X3R5cGU6ICdkaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRfY2xhc3M6ICdpbWFnZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudF9pbm5lckh0bWw6ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPmNhbGVuZGFyLW1vbnRoLW91dGxpbmU8L3RpdGxlPjxwYXRoIGQ9XCJNNyAxMUg5VjEzSDdWMTFNMjEgNVYxOUMyMSAyMC4xMSAyMC4xMSAyMSAxOSAyMUg1QzMuODkgMjEgMyAyMC4xIDMgMTlWNUMzIDMuOSAzLjkgMyA1IDNINlYxSDhWM0gxNlYxSDE4VjNIMTlDMjAuMTEgMyAyMSAzLjkgMjEgNU01IDdIMTlWNUg1VjdNMTkgMTlWOUg1VjE5SDE5TTE1IDEzVjExSDE3VjEzSDE1TTExIDEzVjExSDEzVjEzSDExTTcgMTVIOVYxN0g3VjE1TTE1IDE3VjE1SDE3VjE3SDE1TTExIDE3VjE1SDEzVjE3SDExWlwiIC8+PC9zdmc+JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudF90eXBlOiAncCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudF90ZXh0Q29udGVudDogJ0FsbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uOiAnZ2V0QWxsVGFza3MnLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZmlyc3RTZWN0aW9uTGluZUl0ZW1zLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGluZUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGVsZW1lbnQuZWxlbWVudF90eXBlKTtcbiAgICAgICAgICAgICAgICBsaW5lSXRlbS5jbGFzc0xpc3QuYWRkKGVsZW1lbnQuZWxlbWVudF9jbGFzcyk7XG4gICAgICAgICAgICAgICAgbGluZUl0ZW0uZGF0YXNldC5hY3RpdmUgPSBlbGVtZW50LmRhdGFzZXRfYWN0aXZlO1xuICAgICAgICAgICAgICAgIGZpcnN0U2VjdGlvbkxpc3QuYXBwZW5kKGxpbmVJdGVtKTtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5jaGlsZF9lbGVtZW50cykge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNoaWxkX2VsZW1lbnRzLmZvckVhY2goY2hpbGRfZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsaW5lSXRlbUNoaWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChjaGlsZF9lbGVtZW50LmVsZW1lbnRfdHlwZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lSXRlbUNoaWxkLmNsYXNzTGlzdC5hZGQoY2hpbGRfZWxlbWVudC5lbGVtZW50X2NsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGlsZF9lbGVtZW50LmVsZW1lbnRfaW5uZXJIdG1sKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZUl0ZW1DaGlsZC5pbm5lckhUTUwgPSBgJHtjaGlsZF9lbGVtZW50LmVsZW1lbnRfaW5uZXJIdG1sfWA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGRfZWxlbWVudC5lbGVtZW50X3RleHRDb250ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZUl0ZW1DaGlsZC50ZXh0Q29udGVudCA9IGNoaWxkX2VsZW1lbnQuZWxlbWVudF90ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVJdGVtLmFwcGVuZChsaW5lSXRlbUNoaWxkKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgdGFza3NGdW5jdGlvbiA9IFRhc2tNb2R1bGVbZWxlbWVudC5mdW5jdGlvbl07XG4gICAgICAgICAgICAgICAgbGluZUl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgRE9NTW9kdWxlLmNyZWF0ZVJpZ2h0RGl2LmNyZWF0ZVRhc2tzKFRhc2tNb2R1bGUuZ2V0UHJvamVjdFRhc2tzKFRhc2tNb2R1bGUuZ2V0QWN0aXZlUHJvamVjdCgpLCB0YXNrc0Z1bmN0aW9uKCkpKTtcbiAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmlnaHRGaXJzdEhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yaWdodC1maXJzdC1oZWFkZXInKTsgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICByaWdodEZpcnN0SGVhZGVyLnRleHRDb250ZW50ID0gVGFza01vZHVsZS5nZXRBY3RpdmVWaWV3KCkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBUYXNrTW9kdWxlLmdldEFjdGl2ZVZpZXcoKS5zbGljZSgxKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKFRhc2tNb2R1bGUuZ2V0QWN0aXZlUHJvamVjdCgpKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0Rmlyc3RIZWFkZXIudGV4dENvbnRlbnQgKz0gXCIgLSBcIiArIFRhc2tNb2R1bGUuZ2V0QWN0aXZlUHJvamVjdCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyBET01Nb2R1bGUuY3JlYXRlUmlnaHREaXYuY3JlYXRlVGFza3ModGFza3NGdW5jdGlvbigpKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coVGFza01vZHVsZS5nZXRBY3RpdmVQcm9qZWN0KCkpO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhUYXNrTW9kdWxlLmdldFByb2plY3RUYXNrcyhUYXNrTW9kdWxlLmdldEFjdGl2ZVByb2plY3QoKSwgdGFza3NGdW5jdGlvbigpKSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRhc2tzRnVuY3Rpb24oKSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFRhc2tNb2R1bGUuZ2V0QWN0aXZlUHJvamVjdCgpKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coVGFza01vZHVsZS5nZXRQcm9qZWN0VGFza3MoVGFza01vZHVsZS5nZXRBY3RpdmVQcm9qZWN0KCksIHRhc2tzRnVuY3Rpb24oKSkpO1xuICAgICAgICAgICAgICAgIH0gKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgXG5cbiAgICAgICAgICAgIGNvbnN0IGFuaW1hdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgYW5pbWF0aW9uRGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2stYW5pbWF0aW9uJywgJ3N0YXJ0LXRvZGF5Jyk7XG4gICAgICAgICAgICBmaXJzdFNlY3Rpb25MaXN0LmFwcGVuZChhbmltYXRpb25EaXYpO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgbGVmdFNlY29uZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbGVmdFNlY29uZERpdi5jbGFzc0xpc3QuYWRkKCdsZWZ0LXNlY29uZC1zZWN0aW9uJyk7XG4gICAgICAgICAgICBsZWZ0RGl2LmFwcGVuZChsZWZ0U2Vjb25kRGl2KTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IHNlY29uZFNlY3Rpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIHNlY29uZFNlY3Rpb25MYWJlbC50ZXh0Q29udGVudCA9ICdQcm9qZWN0cyc7XG4gICAgICAgICAgICBsZWZ0U2Vjb25kRGl2LmFwcGVuZChzZWNvbmRTZWN0aW9uTGFiZWwpO1xuICAgIFxuICAgICAgICAgICAgY29uc3Qgc2Vjb25kU2VjdGlvbkxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICAgICAgICAgICAgc2Vjb25kU2VjdGlvbkxpc3QuY2xhc3NMaXN0LmFkZCgnc2Vjb25kLXNlY3Rpb24tbGlzdCcpO1xuICAgICAgICAgICAgbGVmdFNlY29uZERpdi5hcHBlbmQoc2Vjb25kU2VjdGlvbkxpc3QpO1xuXG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSBkYXRhLWFjdGl2ZSBwcm9wZXJ0eSBvbiAudGFzay1maWxlciBhbmQgb24gcGFyZW50IC5sZWZ0LWZpcnN0LXNlY3Rpb25cbiAgICAgICAgICAgIEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgndGFzay1maWx0ZXInKSkuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIGl0ZW0ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbGVmdEZpcnN0RGl2LmRhdGFzZXQuYWN0aXZlID0gaXRlbS50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0YXNrLWZpbHRlcicpKS5mb3JFYWNoKChpdGVtMikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0gPT09IGl0ZW0yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbTIuZGF0YXNldC5hY3RpdmUgPSAndHJ1ZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtMi5kYXRhc2V0LmFjdGl2ZSA9ICdmYWxzZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW5kZXIgcHJvamVjdHMgaW4gLnNlY29uZC1zZWN0aW9uLWxpc3RcbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlUHJvamVjdHMocHJvamVjdHMpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RMaW5lSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdCcpO1xuICAgICAgICAgICAgaWYgKHByb2plY3RMaW5lSXRlbXMpIHtcbiAgICAgICAgICAgICAgICBwcm9qZWN0TGluZUl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHByb2plY3RzLmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2Vjb25kU2VjdGlvbkxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2Vjb25kLXNlY3Rpb24tbGlzdCcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RMaW5lSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICAgICAgcHJvamVjdExpbmVJdGVtLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0TGluZUl0ZW0uZGF0YXNldC5hY3RpdmUgPSBlbGVtZW50LmFjdGl2ZTtcbiAgICAgICAgICAgICAgICBzZWNvbmRTZWN0aW9uTGlzdC5hcHBlbmQocHJvamVjdExpbmVJdGVtKTtcblxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IGNpcmNsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIC8vIGNpcmNsZS5jbGFzc0xpc3QuYWRkKCdjaXJjbGUnKTtcbiAgICAgICAgICAgICAgICAvLyBjaXJjbGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gZWxlbWVudC5jb2xvcjtcbiAgICAgICAgICAgICAgICAvLyBwcm9qZWN0TGluZUl0ZW0uYXBwZW5kKGNpcmNsZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGljb24uY2xhc3NMaXN0LmFkZCgnaWNvbicpO1xuICAgICAgICAgICAgICAgIGljb24uaW5uZXJIVE1MID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2Utd2lkdGg9XCIwLjVcIiBzdHJva2U9XCJ2YXIoLS1ib3JkZXItZGFyaylcIj5cbiAgICAgICAgICAgICAgICA8dGl0bGU+Y2hlY2tib3gtbXVsdGlwbGUtYmxhbmstY2lyY2xlPC90aXRsZT5cbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE0LDJBOCw4IDAgMCwwIDYsMTBBOCw4IDAgMCwwIDE0LDE4QTgsOCAwIDAsMCAyMiwxMEE4LDggMCAwLDAgMTQsMk00LjkzLDUuODJDMy4wOCw3LjM0IDIsOS42MSAyLDEyQTgsOCAwIDAsMCAxMCwyMEMxMC42NCwyMCAxMS4yNywxOS45MiAxMS44OCwxOS43N0MxMC4xMiwxOS4zOCA4LjUsMTguNSA3LjE3LDE3LjI5QzUuMjIsMTYuMjUgNCwxNC4yMSA0LDEyQzQsMTEuNyA0LjAzLDExLjQxIDQuMDcsMTEuMTFDNC4wMywxMC43NCA0LDEwLjM3IDQsMTBDNCw4LjU2IDQuMzIsNy4xMyA0LjkzLDUuODJaXCIvPlxuICAgICAgICAgICAgICAgIDwvc3ZnPmA7XG4gICAgICAgICAgICAgICAgLy8gaWNvbi5pbm5lckhUTUwgPSBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT5sZWFmPC90aXRsZT48cGF0aCBkPVwiTTE3LDhDOCwxMCA1LjksMTYuMTcgMy44MiwyMS4zNEw1LjcxLDIyTDYuNjYsMTkuN0M3LjE0LDE5Ljg3IDcuNjQsMjAgOCwyMEMxOSwyMCAyMiwzIDIyLDNDMjEsNSAxNCw1LjI1IDksNi4yNUM0LDcuMjUgMiwxMS41IDIsMTMuNUMyLDE1LjUgMy43NSwxNy4yNSAzLjc1LDE3LjI1QzcsOCAxNyw4IDE3LDhaXCIgLz48L3N2Zz5gO1xuICAgICAgICAgICAgICAgIC8vIGljb24uaW5uZXJIVE1MID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+bGVhZjwvdGl0bGU+PHBhdGggZD1cIk0xNyw4QzgsMTAgNS45LDE2LjE3IDMuODIsMjEuMzRMNS43MSwyMkw2LjY2LDE5LjdDNy4xNCwxOS44NyA3LjY0LDIwIDgsMjBDMTksMjAgMjIsMyAyMiwzQzIxLDUgMTQsNS4yNSA5LDYuMjVDNCw3LjI1IDIsMTEuNSAyLDEzLjVDMiwxNS41IDMuNzUsMTcuMjUgMy43NSwxNy4yNUM3LDggMTcsOCAxNyw4WlwiIC8+PC9zdmc+YDtcblxuXG4gICAgICAgICAgICAgICAgaWNvbi5zdHlsZS5maWxsID0gZWxlbWVudC5jb2xvcjtcbiAgICAgICAgICAgICAgICBwcm9qZWN0TGluZUl0ZW0uYXBwZW5kKGljb24pO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3RMaW5lSXRlbU5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0TGluZUl0ZW1OYW1lLnRleHRDb250ZW50ID0gZWxlbWVudC5uYW1lO1xuICAgICAgICAgICAgICAgIHByb2plY3RMaW5lSXRlbS5hcHBlbmQocHJvamVjdExpbmVJdGVtTmFtZSk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0TGluZUl0ZW1EZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0TGluZUl0ZW1EZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnZGVsZXRlLXByb2plY3QnKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0TGluZUl0ZW1EZWxldGVCdXR0b24uaW5uZXJIVE1MID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+ZGVsZXRlLW91dGxpbmU8L3RpdGxlPjxwYXRoIGQ9XCJNNiwxOUEyLDIgMCAwLDAgOCwyMUgxNkEyLDIgMCAwLDAgMTgsMTlWN0g2VjE5TTgsOUgxNlYxOUg4VjlNMTUuNSw0TDE0LjUsM0g5LjVMOC41LDRINVY2SDE5VjRIMTUuNVpcIiAvPjwvc3ZnPmA7XG4gICAgICAgICAgICAgICAgcHJvamVjdExpbmVJdGVtLmFwcGVuZChwcm9qZWN0TGluZUl0ZW1EZWxldGVCdXR0b24pO1xuXG5cbiAgICAgICAgICAgICAgICBwcm9qZWN0TGluZUl0ZW1EZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0TGluZUl0ZW1EZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgnaG92ZXJlZCcpO1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0TGluZUl0ZW0uY2xhc3NMaXN0LmFkZCgnaG92ZXJlZC1kZWxldGUnKTtcbiAgICAgICAgICAgICAgICB9KSBcblxuICAgICAgICAgICAgICAgIHByb2plY3RMaW5lSXRlbURlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0TGluZUl0ZW1EZWxldGVCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXJlZCcpO1xuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0TGluZUl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaG92ZXJlZC1kZWxldGUnKTtcbiAgICAgICAgICAgICAgICB9KSBcblxuICAgICAgICAgICAgICAgIHByb2plY3RMaW5lSXRlbURlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RMaW5lSXRlbURlbGV0ZUJ1dHRvbik7XG4gICAgICAgICAgICAgICAgfSlcblxuXG5cbiAgICAgICAgICAgICAgICBwcm9qZWN0TGluZUl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlbGV0ZUhvdmVyZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlLXByb2plY3QuaG92ZXJlZCcpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWRlbGV0ZUhvdmVyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChUYXNrTW9kdWxlLmdldEFjdGl2ZVByb2plY3QoKSA9PT0gcHJvamVjdExpbmVJdGVtTmFtZS50ZXh0Q29udGVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRhc2tNb2R1bGUuY2hhbmdlQWN0aXZlUHJvamVjdCgnJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRhc2tNb2R1bGUuY2hhbmdlQWN0aXZlUHJvamVjdChwcm9qZWN0TGluZUl0ZW1OYW1lLnRleHRDb250ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIERPTU1vZHVsZS5jcmVhdGVSaWdodERpdi5jcmVhdGVUYXNrcyhUYXNrTW9kdWxlLmdldFByb2plY3RUYXNrcyhUYXNrTW9kdWxlLmdldEFjdGl2ZVByb2plY3QoKSwgVGFza01vZHVsZS5nZXRUYXNrc0Zyb21BY3RpdmVWaWV3KCkpKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJpZ2h0Rmlyc3RIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmlnaHQtZmlyc3QtaGVhZGVyJyk7ICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0Rmlyc3RIZWFkZXIudGV4dENvbnRlbnQgPSBUYXNrTW9kdWxlLmdldEFjdGl2ZVZpZXcoKS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIFRhc2tNb2R1bGUuZ2V0QWN0aXZlVmlldygpLnNsaWNlKDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFRhc2tNb2R1bGUuZ2V0QWN0aXZlUHJvamVjdCgpKSB7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmlnaHRGaXJzdEhlYWRlci50ZXh0Q29udGVudCArPSBcIiAtIFwiICsgVGFza01vZHVsZS5nZXRBY3RpdmVQcm9qZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBjb25zdCBleGlzdGluZ0FuaW1hdGlvbkRpdjIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2Vjb25kLXNlY3Rpb24tbGlzdCA+IC50YXNrLWFuaW1hdGlvbicpO1xuICAgICAgICAgICAgaWYgKGV4aXN0aW5nQW5pbWF0aW9uRGl2Mikge1xuICAgICAgICAgICAgICAgIGV4aXN0aW5nQW5pbWF0aW9uRGl2Mi5yZW1vdmUoKTtcblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBzZWNvbmRTZWN0aW9uTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWNvbmQtc2VjdGlvbi1saXN0Jyk7XG4gICAgICAgICAgICBjb25zdCBhbmltYXRpb25EaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBhbmltYXRpb25EaXYyLmNsYXNzTGlzdC5hZGQoJ3Rhc2stYW5pbWF0aW9uJywgJ3N0YXJ0LWZpcnN0Jyk7XG4gICAgICAgICAgICBzZWNvbmRTZWN0aW9uTGlzdC5hcHBlbmQoYW5pbWF0aW9uRGl2Mik7XG5cbiAgICAgICAgICAgIC8vIFVwZGF0ZSBkYXRhLWFjdGl2ZSBwcm9wZXJ0eSBvbiAucHJvamVjdFxuICAgICAgICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwcm9qZWN0JykpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBpdGVtLm9uY2xpY2sgPSAoKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVsZXRlSG92ZXJlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZWxldGUtcHJvamVjdC5ob3ZlcmVkJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZGVsZXRlSG92ZXJlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdwcm9qZWN0JykpLmZvckVhY2goKGl0ZW0yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0gPT09IGl0ZW0yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmRhdGFzZXQuYWN0aXZlID09ICd0cnVlJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFza19hbmltYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQtZmlyc3QnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tfYW5pbWF0aW9uLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtMi5jbGFzc0xpc3QucmVtb3ZlKCdmb250LWFjY2VudCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbTIuZGF0YXNldC5hY3RpdmUgPSAnZmFsc2UnO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tfYW5pbWF0aW9uLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbTIuZGF0YXNldC5hY3RpdmUgPSAndHJ1ZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtMi5jbGFzc0xpc3QuYWRkKCdmb250LWFjY2VudCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtMi5kYXRhc2V0LmFjdGl2ZSA9ICdmYWxzZSc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0yLmNsYXNzTGlzdC5yZW1vdmUoJ2ZvbnQtYWNjZW50Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjcmVhdGVTdHJ1Y3R1cmUsXG4gICAgICAgICAgICBjcmVhdGVQcm9qZWN0cyxcbiAgICAgICAgfVxuICAgIH0pKCk7XG5cbiAgICAvLyBIYW5kbGVyIGZvciByaWdodCBkaXZcbiAgICBjb25zdCBjcmVhdGVSaWdodERpdiA9IChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgLy8gQ3JlYXRlIGxheW91dCBzdHJ1Y3R1cmVcbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlU3RydWN0dXJlKCkge1xuICAgICAgICAgICAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluJyk7XG4gICAgICAgICAgICBjb25zdCByaWdodERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcmlnaHREaXYuY2xhc3NMaXN0LmFkZCgncmlnaHQnKTtcbiAgICAgICAgICAgIG1haW5EaXYuYXBwZW5kKHJpZ2h0RGl2KTtcblxuICAgICAgICAgICAgY29uc3QgcmlnaHRGaXJzdEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcmlnaHRGaXJzdEhlYWRlci5jbGFzc0xpc3QuYWRkKCdyaWdodC1maXJzdC1oZWFkZXInKTtcbiAgICAgICAgICAgIHJpZ2h0Rmlyc3RIZWFkZXIudGV4dENvbnRlbnQgPSBcIkFsbFwiO1xuICAgICAgICAgICAgcmlnaHREaXYuYXBwZW5kKHJpZ2h0Rmlyc3RIZWFkZXIpO1xuXG4gICAgXG4gICAgICAgICAgICBjb25zdCByaWdodEZpcnN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICByaWdodEZpcnN0RGl2LmNsYXNzTGlzdC5hZGQoJ3JpZ2h0LWZpcnN0LXNlY3Rpb24nKTtcbiAgICAgICAgICAgIHJpZ2h0RGl2LmFwcGVuZChyaWdodEZpcnN0RGl2KTtcbiAgICAgICAgfVxuXG4gICAgICAgICAvLyBSZW5kZXIgdGFza3NcbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlVGFza3ModGFza3MpIHtcblxuICAgICAgICAgICAgY29uc3QgdGFza0xpbmVJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrLCAudGFzay1kaXZpZGVyJyk7XG4gICAgICAgICAgICBjb25zdCBmaWxsZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubm8tdGFza3MtZmlsbGVyJyk7XG4gICAgICAgICAgICBpZiAoZmlsbGVyKSB7XG4gICAgICAgICAgICAgICAgZmlsbGVyLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRhc2tMaW5lSXRlbXMpIHtcbiAgICAgICAgICAgICAgICB0YXNrTGluZUl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ucmVtb3ZlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBjb3VudGVyID0gMDtcbiAgICAgICAgICAgIGxldCBzdWJfY291bnRlciA9IDA7XG5cbiAgICAgICAgICAgIGlmICh0YXNrcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBjb25zdCByaWdodEZpcnN0U2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yaWdodC1maXJzdC1zZWN0aW9uJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgZmlsbGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgZmlsbGVyLmNsYXNzTGlzdC5hZGQoJ25vLXRhc2tzLWZpbGxlcicpO1xuICAgICAgICAgICAgICAgIGZpbGxlci50ZXh0Q29udGVudCA9IGBTZWVtcyBsaWtlIHlvdSBkb24ndCBoYXZlIGFueSB0YXNrcyBoZXJlISBXaGV0aGVyIGl0IGlzIGdvb2Qgb3IgYmFkLCBvbmx5IHRpbWUgd2lsbCB0ZWxsLi4uYDtcbiAgICAgICAgICAgICAgICByaWdodEZpcnN0U2VjdGlvbi5hcHBlbmQoZmlsbGVyKTtcblxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIHRhc2tzLmZvckVhY2goZWxlbWVudCA9PiB7XG5cblxuICAgICAgICAgICAgICAgIGNvbnN0IHJpZ2h0Rmlyc3RTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJpZ2h0LWZpcnN0LXNlY3Rpb24nKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrTGluZUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICB0YXNrTGluZUl0ZW0uY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuICAgICAgICAgICAgICAgIHRhc2tMaW5lSXRlbS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICByaWdodEZpcnN0U2VjdGlvbi5hcHBlbmQodGFza0xpbmVJdGVtKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tMaW5lSXRlbUxlZnRTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgdGFza0xpbmVJdGVtTGVmdFNlY3Rpb24uY2xhc3NMaXN0LmFkZCgndGFzay1sZWZ0LXNlY3Rpb24nKTtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudC5jb21wbGV0ZWQgPT09ICd0cnVlJykge1xuICAgICAgICAgICAgICAgICAgICB0YXNrTGluZUl0ZW1MZWZ0U2VjdGlvbi5jbGFzc0xpc3QuYWRkKCdjaGVja2VkJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGFza0xpbmVJdGVtTGVmdFNlY3Rpb24uY2xhc3NMaXN0LmFkZCgndW5jaGVja2VkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRhc2tMaW5lSXRlbUxlZnRTZWN0aW9uLmlubmVySFRNTCA9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+XG4gICAgICAgICAgICAgICAgPHRpdGxlPmNoZWNrLWNpcmNsZS1vdXRsaW5lPC90aXRsZT5cbiAgICAgICAgICAgICAgICA8IS0tIE91dGVyIGNpcmNsZSAtLT5cbiAgICAgICAgICAgICAgICA8Y2lyY2xlIGN4PVwiMTJcIiBjeT1cIjEyXCIgcj1cIjEwXCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMC41XCIgZmlsbD1cIm5vbmVcIiAvPlxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIDwhLS0gQ2hlY2ttYXJrIHBhdGggLS0+XG4gICAgICAgICAgICAgICAgPHBhdGggZD1cIk03LDEzLjUgTDEwLDE2LjUgTDE3LDkuNVwiIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiIHN0cm9rZS13aWR0aD1cIjAuNVwiIGZpbGw9XCJub25lXCIgLz5cbiAgICAgICAgICAgICAgICA8L3N2Zz5gO1xuXG4gICAgICAgICAgICAgICAgdGFza0xpbmVJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXNrTGluZUl0ZW1MZWZ0U2VjdGlvbi5jbGFzc0xpc3QuY29udGFpbnMoJ3VuY2hlY2tlZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrTGluZUl0ZW1MZWZ0U2VjdGlvbi5jbGFzc0xpc3QucmVtb3ZlKCd1bmNoZWNrZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tMaW5lSXRlbUxlZnRTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ2NoZWNrZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRhc2tMaW5lSXRlbS5zdHlsZS5iYWNrZ3JvdW5kID0gJ2JsdWUnO1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNvbXBsZXRlZCA9ICd0cnVlJztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tMaW5lSXRlbUxlZnRTZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoJ2NoZWNrZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tMaW5lSXRlbUxlZnRTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3VuY2hlY2tlZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jb21wbGV0ZWQgPSAnZmFsc2UnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgICAgIHRhc2tMaW5lSXRlbS5hcHBlbmQodGFza0xpbmVJdGVtTGVmdFNlY3Rpb24pO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdGFza0xpbmVJdGVtUmlnaHRTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgdGFza0xpbmVJdGVtUmlnaHRTZWN0aW9uLmNsYXNzTGlzdC5hZGQoJ3Rhc2stcmlnaHQtc2VjdGlvbicpO1xuXG4gICAgICAgICAgICAgICAgLy8gY29uc3QgYWZ0ZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgLy8gYWZ0ZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hvdmVyLWVmZmVjdCcpO1xuICAgICAgICAgICAgICAgIC8vIHRhc2tMaW5lSXRlbVJpZ2h0U2VjdGlvbi5hcHBlbmQoYWZ0ZXJFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAvLyBhZnRlckVsZW1lbnQudGV4dENvbnRlbnQgPSBlbGVtZW50Lm5vdGVzO1xuXG4gICAgICAgICAgICAgICAgLy8gaWYgKGFmdGVyRWxlbWVudC50ZXh0Q29udGVudCAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgdGFza0xpbmVJdGVtUmlnaHRTZWN0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsICgpID0+IHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGFmdGVyRWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB0YXNrTGluZUl0ZW1SaWdodFNlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgYWZ0ZXJFbGVtZW50LnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLy8gICAgIH0pXG4gICAgICAgICAgICAgICAgLy8gfVxuXG4gICAgICAgICAgICAgICAgdGFza0xpbmVJdGVtLmFwcGVuZCh0YXNrTGluZUl0ZW1SaWdodFNlY3Rpb24pO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdGFza0xpbmVJdGVtRGl2aWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIHRhc2tMaW5lSXRlbURpdmlkZXIuY2xhc3NMaXN0LmFkZCgndGFzay1kaXZpZGVyJyk7XG4gICAgICAgICAgICAgICAgdGFza0xpbmVJdGVtRGl2aWRlci5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICByaWdodEZpcnN0U2VjdGlvbi5hcHBlbmQodGFza0xpbmVJdGVtRGl2aWRlcik7XG5cbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrRmllbGRzVGVtcGxhdGUgPSBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdl9jbGFzczogJ3Rhc2stcHJvamVjdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZF9lbGVtZW50czogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGl2X2NsYXNzOiAndGFzay1wcm9qZWN0LWZpZWxkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENvbnRlbnQ6IGVsZW1lbnQucHJvamVjdE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBlbGVtZW50LnByb2plY3RDb2xvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXZfY2xhc3M6ICd0YXNrLXRpdGxlLWZpZWxkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDb250ZW50OiBlbGVtZW50LnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXZfY2xhc3M6ICd0YXNrLW5vdGVzLWZpZWxkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDb250ZW50OiBlbGVtZW50Lm5vdGVzLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBkaXZfY2xhc3M6ICd0YXNrLXByaW9yaXR5LWZpZWxkJyxcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRleHRDb250ZW50OiBlbGVtZW50LnByaW9yaXR5LFxuICAgICAgICAgICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXZfY2xhc3M6ICd0YXNrLWRhdGUtZmllbGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENvbnRlbnQ6IGVsZW1lbnQuZGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGl2X2NsYXNzOiAndGFzay1kZWxldGUtYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogYDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiPmNsb3NlPC9zcGFuPmAsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICBcblxuXG4gICAgICAgICAgICAgICAgdGFza0ZpZWxkc1RlbXBsYXRlLmZvckVhY2goZmllbGQgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXNrRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgdGFza0ZpZWxkLmNsYXNzTGlzdC5hZGQoZmllbGQuZGl2X2NsYXNzKTtcbiAgICAgICAgICAgICAgICAgICAgdGFza0ZpZWxkLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGQudGV4dENvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tGaWVsZC50ZXh0Q29udGVudCA9IGZpZWxkLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZC5pbm5lckhUTUwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tGaWVsZC5pbm5lckhUTUwgPSBmaWVsZC5pbm5lckhUTUw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkLmRpdl9jbGFzcyA9PT0gJ3Rhc2stZGVsZXRlLWJ1dHRvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tGaWVsZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbmZpcm1UYXNrRGVsZXRlRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZGVsZXRlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY29uZmlybVRhc2tEZWxldGVGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZGVsZXRlID4gZm9ybScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1UYXNrRGVsZXRlRGlhbG9nLnNob3dNb2RhbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1UYXNrRGVsZXRlRGlhbG9nLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm1UYXNrRGVsZXRlRGlhbG9nLmNsYXNzTGlzdC5hZGQoJ2Rpc3BsYXllZCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbmZpcm1UYXNrRGVsZXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2stZGVsZXRlID4gZm9ybSA+IGJ1dHRvblt0eXBlPVwic3VibWl0XCJdJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FuY2VsVGFza0RlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWRlbGV0ZSA+IGZvcm0gPiBidXR0b25bdHlwZT1cImNsb3NlXCJdJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maXJtVGFza0RlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coVGFza01vZHVsZS5nZXRBbGxUYXNrcygpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGFza01vZHVsZS5kZWxldGVUYXNrKGVsZW1lbnQuaWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhUYXNrTW9kdWxlLmdldEFsbFRhc2tzKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBET01Nb2R1bGUuY3JlYXRlRGlhbG9ncy5oYW5kbGVDbG9zZUFuaW1hdGlvbihjb25maXJtVGFza0RlbGV0ZUZvcm0sIGNvbmZpcm1UYXNrRGVsZXRlRGlhbG9nLCAnc3VibWl0JywgY29uZmlybVRhc2tEZWxldGVGb3JtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRE9NTW9kdWxlLmNyZWF0ZVJpZ2h0RGl2LmNyZWF0ZVRhc2tzKFRhc2tNb2R1bGUuZ2V0UHJvamVjdFRhc2tzKFRhc2tNb2R1bGUuZ2V0QWN0aXZlUHJvamVjdCgpLCBUYXNrTW9kdWxlLmdldFRhc2tzRnJvbUFjdGl2ZVZpZXcoKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxUYXNrRGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhUYXNrTW9kdWxlLmdldEFsbFRhc2tzKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhUYXNrTW9kdWxlLmdldEFsbFRhc2tzKCkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBET01Nb2R1bGUuY3JlYXRlRGlhbG9ncy5oYW5kbGVDbG9zZUFuaW1hdGlvbihjb25maXJtVGFza0RlbGV0ZUZvcm0sIGNvbmZpcm1UYXNrRGVsZXRlRGlhbG9nLCAnc3VibWl0JywgY29uZmlybVRhc2tEZWxldGVGb3JtKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRE9NTW9kdWxlLmNyZWF0ZVJpZ2h0RGl2LmNyZWF0ZVRhc2tzKFRhc2tNb2R1bGUuZ2V0UHJvamVjdFRhc2tzKFRhc2tNb2R1bGUuZ2V0QWN0aXZlUHJvamVjdCgpLCBUYXNrTW9kdWxlLmdldFRhc2tzRnJvbUFjdGl2ZVZpZXcoKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdGFza0ZpZWxkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGZpZWxkLmNvbG9yO1xuICAgICAgICAgICAgICAgICAgICB0YXNrTGluZUl0ZW1SaWdodFNlY3Rpb24uYXBwZW5kKHRhc2tGaWVsZCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZC5jaGlsZF9lbGVtZW50cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQuY2hpbGRfZWxlbWVudHMuZm9yRWFjaChjaGlsZF9lbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGlsZF9kaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZF9kaXYuY2xhc3NMaXN0LmFkZChjaGlsZF9lbGVtZW50LmRpdl9jbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRfZGl2LnRleHRDb250ZW50ID0gY2hpbGRfZWxlbWVudC50ZXh0Q29udGVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZF9kaXYuc3R5bGUuY29sb3IgPSBjaGlsZF9lbGVtZW50LmNvbG9yO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkX2Rpdi5zdHlsZS5ib3JkZXJDb2xvciA9IGNoaWxkX2VsZW1lbnQuY29sb3I7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFza0ZpZWxkLmFwcGVuZChjaGlsZF9kaXYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tGaWVsZC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgICB9LCAyMCAqIHN1Yl9jb3VudGVyKTtcbiAgICAgICAgICAgICAgICAgICAgc3ViX2NvdW50ZXIgPSBzdWJfY291bnRlciArIDE7XG5cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGFza0xpbmVJdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgICAgfSwgODAgKiBjb3VudGVyKTtcbiAgICAgICAgICAgICAgICBjb3VudGVyID0gY291bnRlciArIDE7XG5cbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGFza0xpbmVJdGVtRGl2aWRlci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICAgIH0sIDEwMCAqIGNvdW50ZXIpO1xuXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNyZWF0ZVN0cnVjdHVyZSxcbiAgICAgICAgICAgIGNyZWF0ZVRhc2tzLFxuICAgICAgICB9XG4gICAgfSkoKTtcblxuICAgIGNvbnN0IGNyZWF0ZUZvb3RlckRpdiA9IChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlU3RydWN0dXJlKCkge1xuICAgICAgICAgICAgY29uc3QgcmlnaHREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmlnaHQnKTtcbiAgICAgICAgICAgIGNvbnN0IGZvb3RlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZm9vdGVyRGl2LmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xuICAgICAgICAgICAgcmlnaHREaXYuYXBwZW5kKGZvb3RlckRpdik7XG5cbiAgICAgICAgICAgIGNvbnN0IGZvb3RlclJpZ2h0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBmb290ZXJSaWdodERpdi5jbGFzc0xpc3QuYWRkKCdmb290ZXItcmlnaHQnKTtcbiAgICAgICAgICAgIGZvb3RlckRpdi5hcHBlbmQoZm9vdGVyUmlnaHREaXYpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlQnV0dG9ucygpIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgbGVmdFNlY29uZFNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGVmdC1zZWNvbmQtc2VjdGlvbicpO1xuICAgICAgICAgICAgY29uc3QgZm9vdGVyUmlnaHREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyLXJpZ2h0Jyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNyZWF0ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNyZWF0ZVByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnY3JlYXRlLXByb2plY3QnKTtcbiAgICAgICAgICAgIGxlZnRTZWNvbmRTZWN0aW9uLmFwcGVuZChjcmVhdGVQcm9qZWN0QnV0dG9uKTtcbiAgICAgICAgICAgIGNyZWF0ZVByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3UHJvamVjdERpYWxvZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5uZXctcHJvamVjdCcpO1xuICAgICAgICAgICAgICAgIG5ld1Byb2plY3REaWFsb2cuc2hvd01vZGFsKCk7XG4gICAgICAgICAgICAgICAgbmV3UHJvamVjdERpYWxvZy5jbGFzc0xpc3QuYWRkKCdkaXNwbGF5ZWQnKTtcbiAgICAgICAgICAgICAgICBuZXdQcm9qZWN0RGlhbG9nLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgY29uc3QgY3JlYXRlUHJvamVjdEJ1dHRvbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNyZWF0ZVByb2plY3RCdXR0b25JY29uLmlubmVySFRNTCA9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPnBsdXM8L3RpdGxlPjxwYXRoIGQ9XCJNMTksMTNIMTNWMTlIMTFWMTNINVYxMUgxMVY1SDEzVjExSDE5VjEzWlwiIC8+PC9zdmc+YDtcbiAgICAgICAgICAgIGNyZWF0ZVByb2plY3RCdXR0b24uYXBwZW5kKGNyZWF0ZVByb2plY3RCdXR0b25JY29uKTtcblxuICAgICAgICAgICAgY29uc3QgY3JlYXRlUHJvamVjdEJ1dHRvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjcmVhdGVQcm9qZWN0QnV0dG9uTGFiZWwudGV4dENvbnRlbnQgPSAnQWRkIFByb2plY3QnO1xuICAgICAgICAgICAgY3JlYXRlUHJvamVjdEJ1dHRvbi5hcHBlbmQoY3JlYXRlUHJvamVjdEJ1dHRvbkxhYmVsKTtcblxuICAgICAgICAgICAgY29uc3QgY3JlYXRlVGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY3JlYXRlVGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdjcmVhdGUtdGFzaycpO1xuICAgICAgICAgICAgZm9vdGVyUmlnaHREaXYuYXBwZW5kKGNyZWF0ZVRhc2tCdXR0b24pO1xuXG4gICAgICAgICAgICBjcmVhdGVUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Rhc2tEaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRhc2snKTtcbiAgICAgICAgICAgICAgICBuZXdUYXNrRGlhbG9nLnNob3dNb2RhbCgpO1xuICAgICAgICAgICAgICAgIG5ld1Rhc2tEaWFsb2cuY2xhc3NMaXN0LmFkZCgnZGlzcGxheWVkJyk7XG4gICAgICAgICAgICAgICAgbmV3VGFza0RpYWxvZy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIH0pXG5cblxuICAgICAgICAgICAgY29uc3QgY3JlYXRlVGFza0J1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY3JlYXRlVGFza0J1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjcmVhdGUtdGFzay1jb250YWluZXInKVxuICAgICAgICAgICAgY3JlYXRlVGFza0J1dHRvbi5hcHBlbmQoY3JlYXRlVGFza0J1dHRvbkNvbnRhaW5lcik7XG5cblxuICAgICAgICAgICAgY29uc3QgY3JlYXRlVGFza0J1dHRvbkljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGNyZWF0ZVRhc2tCdXR0b25JY29uLmlubmVySFRNTCA9IGA8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHRpdGxlPnBsdXM8L3RpdGxlPjxwYXRoIGQ9XCJNMTksMTNIMTNWMTlIMTFWMTNINVYxMUgxMVY1SDEzVjExSDE5VjEzWlwiIC8+PC9zdmc+YDtcbiAgICAgICAgICAgIGNyZWF0ZVRhc2tCdXR0b25Db250YWluZXIuYXBwZW5kKGNyZWF0ZVRhc2tCdXR0b25JY29uKTtcblxuICAgICAgICAgICAgY29uc3QgY3JlYXRlVGFza0J1dHRvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjcmVhdGVUYXNrQnV0dG9uTGFiZWwudGV4dENvbnRlbnQgPSAnQWRkIFRhc2snO1xuICAgICAgICAgICAgY3JlYXRlVGFza0J1dHRvbkNvbnRhaW5lci5hcHBlbmQoY3JlYXRlVGFza0J1dHRvbkxhYmVsKTtcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjcmVhdGVTdHJ1Y3R1cmUsXG4gICAgICAgICAgICBjcmVhdGVCdXR0b25zLFxuICAgICAgICB9XG4gICAgfSkoKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIGNyZWF0ZU1haW5EaXYsXG4gICAgICAgIGNyZWF0ZURpYWxvZ3MsXG4gICAgICAgIGNyZWF0ZUxlZnREaXYsXG4gICAgICAgIGNyZWF0ZVJpZ2h0RGl2LFxuICAgICAgICBjcmVhdGVGb290ZXJEaXYsXG4gICAgfVxufSkoKTtcblxuXG5ET01Nb2R1bGUuY3JlYXRlTWFpbkRpdigpO1xuRE9NTW9kdWxlLmNyZWF0ZURpYWxvZ3MubmV3UHJvamVjdERpYWxvZ0hhbmRsZXIoKTtcbkRPTU1vZHVsZS5jcmVhdGVEaWFsb2dzLm5ld1Rhc2tEaWFsb2dIYW5kbGVyKCk7XG5ET01Nb2R1bGUuY3JlYXRlRGlhbG9ncy5jcmVhdGVQcm9qZWN0RGVsZXRlRGlhbG9nKCk7XG5ET01Nb2R1bGUuY3JlYXRlRGlhbG9ncy5jcmVhdGVUYXNrRGVsZXRlRGlhbG9nKCk7XG5ET01Nb2R1bGUuY3JlYXRlRGlhbG9ncy5hZGRFc2NFdmVuTGlzdGVuZXIoKTtcbkRPTU1vZHVsZS5jcmVhdGVMZWZ0RGl2LmNyZWF0ZVN0cnVjdHVyZSgpO1xuRE9NTW9kdWxlLmNyZWF0ZUxlZnREaXYuY3JlYXRlUHJvamVjdHMoUHJvamVjdE1vZHVsZS5nZXRQcm9qZWN0T2JqZWN0cygpKTtcbkRPTU1vZHVsZS5jcmVhdGVSaWdodERpdi5jcmVhdGVTdHJ1Y3R1cmUoKTtcbkRPTU1vZHVsZS5jcmVhdGVSaWdodERpdi5jcmVhdGVUYXNrcyhUYXNrTW9kdWxlLmdldFRvZGF5VGFza3MoKSk7XG5ET01Nb2R1bGUuY3JlYXRlRm9vdGVyRGl2LmNyZWF0ZVN0cnVjdHVyZSgpO1xuRE9NTW9kdWxlLmNyZWF0ZUZvb3RlckRpdi5jcmVhdGVCdXR0b25zKCk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbihldmVudCkge1xuICAgIGlmIChldmVudC5rZXkgPT09IFwiNVwiKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFByb2plY3RNb2R1bGUuZ2V0UHJvamVjdE9iamVjdHMoKSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFRhc2tNb2R1bGUuZ2V0VG9kYXlUYXNrcygpKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coVGFza01vZHVsZS5nZXRUb21vcnJvd1Rhc2tzKCkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhUYXNrTW9kdWxlLmdldEFsbFRhc2tzKCkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhUYXNrTW9kdWxlLmdldFByb2plY3RUYXNrcygnTWF0aCcsIFRhc2tNb2R1bGUuZ2V0VG9kYXlUYXNrcygpKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFRhc2tNb2R1bGUuZ2V0QWN0aXZlUHJvamVjdCgpKTtcbiAgICAgICAgY29uc29sZS5sb2coVGFza01vZHVsZS5nZXRBY3RpdmVWaWV3KCkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhUYXNrTW9kdWxlLmdldEFjdGl2ZVByb2plY3QoKSk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFRhc2tNb2R1bGUuZ2V0QWN0aXZlVmlldygpKTtcbiAgICB9XG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==