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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root.light-mode {
  /* Font */
  --font-color: #333; /*used in font*/

  /* Backgrounds */
  --background-light: #edede9; /*used in backgrounds*/
  --background-color: #3f1e093e; /*used in navigation panel on the left*/

  /* Borders */
  --border-color: #a9a9a9; /*used in border colors*/
  --border-dark: #999; /*used in border colors*/

  /* Buttons */
  --submit-button-hover: #2ecc71; /*used in Submit button hover*/
  --submit-button-active: #27ae60; /*used in Submit button active*/
  --submit-button: #c8e6c9; /*used in Submit button*/

  --new-task-button: #4e4e4e47;
  --new-task-button-hover: #4e4e4e47; /*used in new task button hover*/
  --new-task-button-active: #8e8e8e; /*used in new task button active*/
  --new-task-button-border: black;

  --dialog-close-button: rgb(169, 169, 169); /*used in dialog close button*/
  --dialog-close-button-hover: rgb(
    136,
    136,
    136
  ); /*used in dialog close button hover*/
  --dialog-close-button-active: rgb(
    108,
    108,
    108
  ); /*used in dialog close button active*/

  /* Icons */
  --icons-views: #811c1c; /*used in task delete and edit icons, project delete icon, and in views on the left*/

  /* Scroll bar and slider */
  --scrollbar-slider: #4c1f1f; /*used scroll bar and slider animation*/
  --navigation-elements-hover: #7a7a7a28; /*used in navigation panel on the left hover*/
  --navigation-elements-active: #df1c1f28;

  /* Input placeholder and checkboxes */
  --input-placeholders-and-checkbox: #888; /*used input placeholders and in checkbox icon */
  --checkbox: green; /*used in checkbox*/
}

:root.dark-mode {
  /* Font */
  --font-color: #f2ecff; /*used in font*/

  /* Backgrounds */
  --background-light: #3e3e3e; /*used in backgrounds*/
  --background-color: #272727; /*used in navigation panel on the left*/

  /* Borders */
  --border-color: black; /*used in border colors*/
  --border-dark: #999; /*used in border colors*/

  /* Buttons */
  --submit-button-hover: #d51c1f28; /*used in Submit button hover*/
  --submit-button-active: #ba181b5b; /*used in Submit button active*/
  --submit-button: #ba181b28; /*used in Submit button*/

  --new-task-button: #ba181b28;
  --new-task-button-hover: #ba181b28; /*used in new task button hover*/
  --new-task-button-active: #ba181b5b; /*used in new task button active*/
  --new-task-button-border: black;

  --dialog-close-button: rgb(169, 169, 169); /*used in dialog close button*/
  --dialog-close-button-hover: rgb(
    136,
    136,
    136
  ); /*used in dialog close button hover*/
  --dialog-close-button-active: rgb(
    108,
    108,
    108
  ); /*used in dialog close button active*/

  /* Icons */
  --icons-views: #884040; /*used in task delete and edit icons, project delete icon, and in views on the left*/

  /* Scroll bar and slider */
  --scrollbar-slider: #ab3737; /*used scroll bar and slider animation*/
  --navigation-elements-hover: #7a7a7a28; /*used in navigation panel on the left hover*/
  --navigation-elements-active: #df1c1f28;

  /* Input placeholder and checkboxes */
  --input-placeholders-and-checkbox: #888; /*used input placeholders and in checkbox icon */
  --checkbox: green; /*used in checkbox*/
}

::-webkit-scrollbar {
  width: 4px;
  border-radius: 5px;
  z-index: 9999;
}

::-webkit-scrollbar-thumb {
  background: var(--scrollbar-slider); /* Change the color to your preference */
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
    "FILL" 0,
    "wght" 400,
    "GRAD" 0,
    "opsz" 24;
}

/* General layout */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: var(--font-color);
  font-family: "Nunito", sans-serif;
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
  /* border-bottom: 1px solid var(--border-dark); */
  width: clamp(300px, 70%, 700px);
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
  transition: all 175ms ease-in;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  cursor: pointer;
  gap: clamp(20px, 5%, 40px);
  min-width: 300px;
}

.right-first-section > .task > .task-left-section {
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: transform 0.1s ease;
}

.right-first-section > .task > .task-left-section.checked svg path,
.right-first-section > .task > .task-left-section.checked svg circle {
  transition: all 0.3s ease;
  stroke: var(--checkbox);
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
  stroke: var(--checkbox);
}

.right-first-section > .task:hover > .task-left-section path,
.right-first-section > .task:hover > .task-left-section circle {
  transition: all 0.3s ease-in-out;
}

.right-first-section > .task > .task-left-section > svg circle {
  fill: none;
  stroke: var(--input-placeholders-and-checkbox);
}

.right-first-section > .task > .task-left-section > svg path {
  fill: none;
  stroke: var(--input-placeholders-and-checkbox);
}

.right-first-section > .task > .task-right-section {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: 1fr 1fr 1fr 1fr;
  align-items: center;
}

.right-first-section > .task > .task-right-section:hover {
  transition: all 1s ease;
}

.right-first-section > .task > .task-right-section > .task-project > * {
  padding: 1px 5px 1px 5px;
  border-radius: 5px;
  border: 1px solid var(--border-dark);
  font-size: 12px;
  font-weight: 400;
}

.right-first-section > .task > .task-right-section > .task-project {
  grid-column: 1 / 9;
  grid-row: 1 / 2;

  display: flex;
  align-items: center;
  gap: 10px;
}

.right-first-section > .task > .task-right-section > .task-title-field {
  grid-column: 1 / 9;
  grid-row: 2 / 3;
  font-size: 18px;
}

.right-first-section > .task > .task-right-section > .task-date-field {
  grid-column: 1 / 9;
  grid-row: 4 / 5;
  font-size: 12px;
}

.right-first-section > .task > .task-right-section > .task-notes-field {
  grid-column: 1 / 9;
  grid-row: 3 / 4;
  font-size: 12px;
}

.right-first-section > .task > .task-right-section > .task-delete-button {
  grid-column: 8 / 9;
  grid-row: 2 / 4;
  font-size: 12px;
  justify-self: center;
  transform: scale(1);
  transition: all 0.3s ease;
  opacity: 0;
}
.right-first-section > .task > .task-right-section > .task-edit-button {
  grid-column: 7 / 8;
  grid-row: 2 / 4;
  font-size: 12px;
  justify-self: center;
  transform: scale(1);
  transition: all 0.3s ease;
  opacity: 0;
}

.right-first-section > .task > .task-right-section:hover > .task-delete-button,
.right-first-section > .task > .task-right-section:hover > .task-edit-button {
  opacity: 1;
}

.right-first-section > .task > .task-right-section > .task-delete-button span,
.right-first-section > .task > .task-right-section > .task-edit-button span {
  color: var(--icons-views);
  background-color: var(--background-light);
}

.right-first-section
  > .task
  > .task-right-section:hover
  > .task-delete-button
  span,
.right-first-section
  > .task
  > .task-right-section:hover
  > .task-edit-button
  span {
  transition: all 0.3s ease;
  border-radius: 50%;
  color: var(--icons-views);
  background-color: var(--background-light);
}

.right-first-section
  > .task
  > .task-right-section:hover
  > .task-delete-button:hover
  span,
.right-first-section
  > .task
  > .task-right-section:hover
  > .task-edit-button:hover
  span {
  background-color: var(--icons-views);
  color: var(--background-light);
}

.right-first-section > .task > .task-right-section > .task-date-field::before {
  content: "\\1F3AF";
  display: inline-block;
  font-family: "Segoe UI", sans-serif;
  margin-right: 5px;
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
  border: 0.5px solid var(--input-placeholders-and-checkbox);
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
.left > .left-second-section li[data-active="true"] ~ .task-animation {
  position: absolute;
  /* top: 0; */
  height: 50px;
  border-left: 6px solid var(--scrollbar-slider);
  z-index: 0;
  transition: all 0.3s ease;
  opacity: 0;
}

.views > li:nth-child(1)[data-active="true"] ~ .task-animation {
  width: 100%;
  top: 0;
  opacity: 1;
}

.views > li:nth-child(2)[data-active="true"] ~ .task-animation {
  width: 100%;
  top: 50px;
  opacity: 1;
}

.views > li:nth-child(3)[data-active="true"] ~ .task-animation {
  width: 100%;
  top: 100px;
  opacity: 1;
}

/* Views styles */

.left > .left-first-section li[data-active="false"]:hover,
.left > .left-second-section li:hover {
  background-color: var(--navigation-elements-hover);
}

.left > .left-first-section li[data-active="true"] > div > svg {
  fill: var(--icons-views);
}

.left > .left-first-section li[data-active="false"] > div > svg {
  fill: var(--font-color);
}

.left > .left-first-section li[data-active="true"] > p {
  color: var(--icons-views);
}

.left > .left-second-section li.font-accent > div {
  color: var(--icons-views);
}

.left > .left-first-section li[data-active="false"]:active,
.left > .left-second-section li:active:not(.hovered-delete) {
  background-color: var(--navigation-elements-active);
}

/* Slider on projects */

.second-section-list > li:nth-child(1)[data-active="true"] ~ .task-animation {
  /* width: 100%; */
  top: 0;
  opacity: 1;
}

.second-section-list > li:nth-child(2)[data-active="true"] ~ .task-animation {
  /* width: 100%; */
  top: 50px;
  opacity: 1;
}

.second-section-list > li:nth-child(3)[data-active="true"] ~ .task-animation {
  /* width: 100%; */
  top: 100px;
  opacity: 1;
}

.second-section-list > li:nth-child(4)[data-active="true"] ~ .task-animation {
  /* width: 100%; */
  top: 150px;
  opacity: 1;
}

.second-section-list > li:nth-child(5)[data-active="true"] ~ .task-animation {
  /* width: 100%; */
  top: 200px;
  opacity: 1;
}

.second-section-list > li:nth-child(6)[data-active="true"] ~ .task-animation {
  /* width: 100%; */
  top: 250px;
  opacity: 1;
}

.second-section-list > li:nth-child(7)[data-active="true"] ~ .task-animation {
  /* width: 100%; */
  top: 300px;
  opacity: 1;
}

.second-section-list > li:nth-child(8)[data-active="true"] ~ .task-animation {
  /* width: 100%; */
  top: 350px;
  opacity: 1;
}

.second-section-list > li:nth-child(9)[data-active="true"] ~ .task-animation {
  /* width: 100%; */
  top: 400px;
  opacity: 1;
}

.second-section-list > li:nth-child(10)[data-active="true"] ~ .task-animation {
  /* width: 100%; */
  top: 450px;
  opacity: 1;
}

.second-section-list > li:nth-child(11)[data-active="true"] ~ .task-animation {
  /* width: 100%; */
  top: 500px;
  opacity: 1;
}

.second-section-list > li:nth-child(12)[data-active="true"] ~ .task-animation {
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
  background-color: #ba181b5b;
}

.left > .left-second-section .create-project > div:first-child {
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
  box-shadow: 0px 0px 5px 2px var(--new-task-button-border);
  transition: all 0.1s ease-in-out;

  border-radius: 5px;
  background: var(--new-task-button);
  /* box-shadow:  8px 8px 16px #9f9f9f,
                 -8px -8px 16px #ffffff; */
}

.footer
  > .footer-right
  > .create-task
  > .create-task-container
  div:nth-child(2) {
  font-size: 20px;
}

.footer
  > .footer-right
  > .create-task
  > .create-task-container
  > div:first-child {
  height: 20px;
  width: 20px;
}

.footer > .footer-right > .create-task > .create-task-container:hover {
  background-color: var(--new-task-button-hover);
  transform: scale(1.1);
}

.footer > .footer-right > .create-task > .create-task-container:active {
  background-color: var(--new-task-button-active);
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
  transition:
    opacity 300ms ease-in-out,
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
  transition: transform 300ms cubic-bezier(0.18, 0.89, 0.43, 1.19);
  /* transition: transform 300ms ease; */
}

dialog.displayed > form > * {
  top: 0px;
  opacity: 1;
  /* background-color: black; */
}

dialog.displayed.new-project > form .project-dialog-name {
  transition: opacity 300ms ease-in-out 200ms;
  border-bottom: 1px solid var(--border-dark);
  width: 100%;
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

dialog.displayed.new-task > form .task-dialog-name,
dialog.displayed.edit-task > form .task-dialog-name {
  transition: opacity 300ms ease-in-out 200ms;
  border-bottom: 1px solid var(--border-dark);
  width: 100%;
}

dialog.displayed.new-task > form > .task-project-field-div,
dialog.displayed.edit-task > form > .task-project-field-div {
  transition: opacity 300ms ease-in-out 250ms;
}

dialog.displayed.new-task > form > .task-title-field-div,
dialog.displayed.edit-task > form > .task-title-field-div {
  transition: opacity 300ms ease-in-out 300ms;
}

dialog.displayed.new-task > form > .task-notes-field-div,
dialog.displayed.edit-task > form > .task-notes-field-div {
  transition: opacity 300ms ease-in-out 350ms;
}

dialog.displayed.new-task > form > .task-priority-field-div,
dialog.displayed.edit-task > form > .task-priority-field-div {
  transition: opacity 300ms ease-in-out 400ms;
}

dialog.displayed.new-task > form > .task-date-field-div,
dialog.displayed.edit-task > form > .task-date-field-div {
  transition: opacity 300ms ease-in-out 450ms;
}

dialog.displayed.new-task > form > button,
dialog.displayed.edit-task > form > button {
  transition:
    opacity 300ms ease-in-out 500ms,
    background-color 0.3s ease,
    border-color 0.1s ease;
}

dialog.displayed.new-task > form > .close-task-dialog,
dialog.displayed.edit-task > form > .close-task-dialog {
  transition: opacity 300ms ease-in-out 550ms;
}

dialog.displayed.task-delete > form > button,
dialog.displayed.project-delete > form > button {
  transition:
    opacity 100ms ease-in-out 200ms,
    background-color 0.3s ease,
    border-color 0.1s ease;
}

.delete-project-button {
  width: 20px;
  height: 20px;
  margin-left: auto;
  margin-right: 20px;
  opacity: 0;
  border-radius: 50%;
  fill: var(--icons-views);
  transition: all 0.3s ease;
}

.delete-project-button:hover {
  fill: var(--background-light);
  background-color: var(--icons-views);
}

li.project:hover > .delete-project-button {
  opacity: 1;
}

.new-project,
.new-task,
.edit-task,
.task-delete,
.project-delete {
  width: 400px;
  background-color: var(--background-light);
}

.new-project > form,
.new-task > form,
.edit-task > form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 100%;
}

.task-delete > form,
.project-delete > form {
  display: grid;
  gap: 10px;
  height: 100%;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
}

.task-delete > form > div,
.project-delete > form > div {
  grid-column: 1 / 3;
  grid-row: 1 / 2;
  justify-self: center;
}

.task-delete > form > button:nth-child(1),
.project-delete > form > button:nth-child(1) {
  grid-column: 2 / 3;
  grid-row: 2 / 3;
}

.task-delete > form > button:nth-child(2),
.project-delete > form > button:nth-child(2) {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
}

.new-task > form > .task-project-field-div,
.new-task > form > .task-title-field-div,
.new-task > form > .task-notes-field-div,
.new-task > form > .task-priority-field-div,
.new-task > form > .task-date-field-div,
.edit-task > form > .task-project-field-div,
.edit-task > form > .task-title-field-div,
.edit-task > form > .task-notes-field-div,
.edit-task > form > .task-priority-field-div,
.edit-task > form > .task-date-field-div,
.new-project > form .project-name-field-div,
.new-project > form .project-color-field-div {
  display: flex;
  flex-direction: column;
}

.new-task > form > .task-dialog-name,
.edit-task > form > .task-dialog-name,
.new-project > form > .project-dialog-name {
  align-self: center;
  font-size: 25px;
  margin-bottom: 15px;
}

.new-task > form > button,
.edit-task > form > button,
.new-project > form > button {
  margin-top: 25px;
  height: 40px;
  width: 50%;
  align-self: center;
  border-radius: 5px;
  border: 0.5px solid var(--border-dark);
  transition: background-color 1s ease;
  background-color: var(--submit-button);
  cursor: pointer;
}

.task-delete > form > button[type="submit"],
.task-delete > form > button[type="close"],
.project-delete > form > button[type="submit"],
.project-delete > form > button[type="close"] {
  margin-top: 25px;
  height: 40px;
  width: 100%;
  align-self: center;
  border-radius: 5px;
  border: 0.5px solid var(--border-dark);
  transition: background-color 1s ease;
  background-color: var(--submit-button);
  cursor: pointer;
}

.task-delete > form > button[type="submit"],
.project-delete > form > button[type="submit"] {
  background-color: var(--submit-button);
}

.task-delete > form > button[type="close"],
.project-delete > form > button[type="close"] {
  background-color: var(--dialog-close-button);
}

.task-delete > form > button[type="close"]:hover,
.project-delete > form > button[type="close"]:hover {
  background-color: var(--dialog-close-button-hover);
}

.task-delete > form > button[type="close"]:active,
.project-delete > form > button[type="close"]:active {
  background-color: var(--dialog-close-button-active);
}

.new-task > form > button:focus,
.edit-task > form > button:focus,
.new-project > form > button:focus,
.task-delete > form > button:focus,
.project-delete > form > button:focus {
  outline: none;
}

.new-task > form > button:hover,
.edit-task > form > button:hover,
.new-project > form > button:hover,
.task-delete > form > button[type="submit"]:hover,
.project-delete > form > button[type="submit"]:hover {
  border: 0.5px solid black;
  background-color: var(--submit-button-hover);
}

.new-task > form > button:active,
.edit-task > form > button:active,
.new-project > form > button:active,
.task-delete > form > button[type="submit"]:active,
.project-delete > form > button[type="submit"]:active {
  background-color: var(--submit-button-active);
}

.new-task > form > .close-task-dialog,
.edit-task > form > .close-task-dialog,
.new-project > form > .close-project-dialog {
  position: absolute;
  right: 10px;
  top: 10px;
}

.new-task > form > .close-task-dialog span,
.edit-task > form > .close-task-dialog span,
.new-project > form > .close-project-dialog span {
  transform: scale(1);
  opacity: 0.7;
  cursor: pointer;
  transition:
    transform 0.25s,
    opacity 0.25s;
}

.new-task > form > .close-task-dialog:hover span,
.edit-task > form > .close-task-dialog:hover span,
.new-project > form > .close-project-dialog:hover span {
  transform: rotate(90deg) scale(1.1);
  opacity: 1;
  cursor: pointer;
}

/* Dialog input styles */

.new-task > form input,
.new-task > form select,
.new-task > form textarea,
.edit-task > form input,
.edit-task > form select,
.edit-task > form textarea,
.new-project > form input,
.new-project > form select,
.new-project > form textarea {
  outline: none;
  padding: 10px;
  border: 0.5px solid var(--border-color);
  transition: all 0.25s ease;
  border-radius: 5px;
  color: black;
}

.new-task > form input:hover,
.new-task > form select:hover,
.new-task > form textarea:hover,
.edit-task > form input:hover,
.edit-task > form select:hover,
.edit-task > form textarea:hover,
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
.edit-task > form input::placeholder,
.edit-task > form select::placeholder,
.edit-task > form textarea::placeholder,
.new-project > form input::placeholder,
.new-project > form select::placeholder,
.new-project > form textarea::placeholder {
  color: var(--input-placeholders-and-checkbox);
  font-style: italic;
}

.new-task > form textarea,
.edit-task > form textarea,
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

.no-tasks-filler {
  color: var(--input-placeholders-and-checkbox);
  font-style: italic;
}

#toggle-mode-button {
  /* height: 100px; */
  /* width: 100px; */
  /* background-color: black; */
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
  z-index: 5;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE 10+ */
  user-select: none; /* Standard syntax */
}

#toggle-mode-button span {
  transform: scale(1.2);
}

dialog.new-task,
dialog.edit-task {
  height: 460px;
}

dialog.new-task > form > button[type="submit"],
dialog.edit-task > form > button[type="submit"] {
  margin-top: auto;
}

dialog.new-project {
  height: 250px;
}

dialog.new-project > form > button[type="submit"] {
  margin-top: auto;
}

dialog.task-delete,
dialog.project-delete {
  height: 200px;
}

dialog.task-delete > form > button,
dialog.project-delete > form > button {
  margin-top: auto;
}
`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200\");\n@import url(\"https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100&family=Lato:wght@300&family=Nunito:ital,wght@0,200;0,300;0,400;0,500;1,200;1,300;1,400;1,500&family=Roboto:wght@100&family=Rubik:wght@300&display=swap\");\n@import url(\"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0\");\n\n:root.light-mode {\n  /* Font */\n  --font-color: #333; /*used in font*/\n\n  /* Backgrounds */\n  --background-light: #edede9; /*used in backgrounds*/\n  --background-color: #3f1e093e; /*used in navigation panel on the left*/\n\n  /* Borders */\n  --border-color: #a9a9a9; /*used in border colors*/\n  --border-dark: #999; /*used in border colors*/\n\n  /* Buttons */\n  --submit-button-hover: #2ecc71; /*used in Submit button hover*/\n  --submit-button-active: #27ae60; /*used in Submit button active*/\n  --submit-button: #c8e6c9; /*used in Submit button*/\n\n  --new-task-button: #4e4e4e47;\n  --new-task-button-hover: #4e4e4e47; /*used in new task button hover*/\n  --new-task-button-active: #8e8e8e; /*used in new task button active*/\n  --new-task-button-border: black;\n\n  --dialog-close-button: rgb(169, 169, 169); /*used in dialog close button*/\n  --dialog-close-button-hover: rgb(\n    136,\n    136,\n    136\n  ); /*used in dialog close button hover*/\n  --dialog-close-button-active: rgb(\n    108,\n    108,\n    108\n  ); /*used in dialog close button active*/\n\n  /* Icons */\n  --icons-views: #811c1c; /*used in task delete and edit icons, project delete icon, and in views on the left*/\n\n  /* Scroll bar and slider */\n  --scrollbar-slider: #4c1f1f; /*used scroll bar and slider animation*/\n  --navigation-elements-hover: #7a7a7a28; /*used in navigation panel on the left hover*/\n  --navigation-elements-active: #df1c1f28;\n\n  /* Input placeholder and checkboxes */\n  --input-placeholders-and-checkbox: #888; /*used input placeholders and in checkbox icon */\n  --checkbox: green; /*used in checkbox*/\n}\n\n:root.dark-mode {\n  /* Font */\n  --font-color: #f2ecff; /*used in font*/\n\n  /* Backgrounds */\n  --background-light: #3e3e3e; /*used in backgrounds*/\n  --background-color: #272727; /*used in navigation panel on the left*/\n\n  /* Borders */\n  --border-color: black; /*used in border colors*/\n  --border-dark: #999; /*used in border colors*/\n\n  /* Buttons */\n  --submit-button-hover: #d51c1f28; /*used in Submit button hover*/\n  --submit-button-active: #ba181b5b; /*used in Submit button active*/\n  --submit-button: #ba181b28; /*used in Submit button*/\n\n  --new-task-button: #ba181b28;\n  --new-task-button-hover: #ba181b28; /*used in new task button hover*/\n  --new-task-button-active: #ba181b5b; /*used in new task button active*/\n  --new-task-button-border: black;\n\n  --dialog-close-button: rgb(169, 169, 169); /*used in dialog close button*/\n  --dialog-close-button-hover: rgb(\n    136,\n    136,\n    136\n  ); /*used in dialog close button hover*/\n  --dialog-close-button-active: rgb(\n    108,\n    108,\n    108\n  ); /*used in dialog close button active*/\n\n  /* Icons */\n  --icons-views: #884040; /*used in task delete and edit icons, project delete icon, and in views on the left*/\n\n  /* Scroll bar and slider */\n  --scrollbar-slider: #ab3737; /*used scroll bar and slider animation*/\n  --navigation-elements-hover: #7a7a7a28; /*used in navigation panel on the left hover*/\n  --navigation-elements-active: #df1c1f28;\n\n  /* Input placeholder and checkboxes */\n  --input-placeholders-and-checkbox: #888; /*used input placeholders and in checkbox icon */\n  --checkbox: green; /*used in checkbox*/\n}\n\n::-webkit-scrollbar {\n  width: 4px;\n  border-radius: 5px;\n  z-index: 9999;\n}\n\n::-webkit-scrollbar-thumb {\n  background: var(--scrollbar-slider); /* Change the color to your preference */\n  border-radius: 6px;\n  z-index: 9999;\n}\n\n::-webkit-scrollbar:hover {\n  background: var(--background-light); /* Change the color to your preference */\n  z-index: 9999;\n}\n\n::-webkit-scrollbar-thumb:hover {\n  background: var(--accent-dark); /* Change the color to your preference */\n  z-index: 9999;\n}\n\n::backdrop {\n  background-color: #00000088;\n  backdrop-filter: blur(3px);\n}\n\n.material-symbols-outlined {\n  font-variation-settings:\n    \"FILL\" 0,\n    \"wght\" 400,\n    \"GRAD\" 0,\n    \"opsz\" 24;\n}\n\n/* General layout */\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  color: var(--font-color);\n  font-family: \"Nunito\", sans-serif;\n  font-weight: 300;\n}\n\nbody {\n  background-color: var(--background-light);\n  height: 100vh;\n  width: 100vw;\n  overflow-x: hidden;\n}\n\n.main {\n  height: 100%;\n  width: 100%;\n  display: grid;\n  grid-template-columns: minmax(200px, 1fr) 3fr;\n  position: relative;\n}\n\n.main > .left {\n  border-right: 1px solid var(--border-color);\n  border-bottom: 1px solid var(--border-color);\n  background-color: var(--background-color);\n  flex: 0 0 300px;\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  /* height: calc(100% - 100px); */\n  height: 100%;\n  /* overflow: auto; */\n  grid-column: 1 / 2;\n  /* position: sticky; */\n}\n\n.main > .right {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: start;\n  height: calc(100% - 100px);\n  grid-column: 2 / 3;\n  position: relative;\n}\n\n.footer {\n  display: flex;\n  /* height: 100px; */\n  /* border-top: 1px solid var(--border-color); */\n  position: fixed;\n  bottom: 20px;\n  /* width: 100%; */\n  left: 50%;\n  box-shadow: 0px -50px 24px -20px var(--background-light);\n  /* box-shadow: -150px -40px 21px -30px black; */\n}\n\n.footer > .footer-left {\n  flex: 0 0 300px;\n  background-color: var(--background-color);\n  border-right: 1px solid var(--border-color);\n}\n\n.footer > .footer-right {\n  flex: 1;\n  background-color: var(--background-light);\n}\n\n.right-first-header {\n  padding-top: 20px;\n  padding-left: 10px;\n  margin-left: 30px;\n  font-size: 25px;\n  /* border-bottom: 1px solid var(--border-dark); */\n  width: clamp(300px, 70%, 700px);\n}\n\n.right-first-section {\n  padding-right: clamp(10px, 9%, 100px);\n  padding-left: clamp(10px, 9%, 100px);\n  /* padding-left: minmax(10px, 100px); */\n  padding-top: 50px;\n  height: 100%;\n  width: 100%;\n  /* background-color: black; */\n  /* overflow: auto; */\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  /* align-items: center; */\n  position: relative;\n  margin-bottom: 150px;\n}\n\n.right-first-section > .task {\n  /* border: 1px solid var(--border-color); */\n  /* border-radius: 5px; */\n  width: 100%;\n  padding-left: 5px;\n  padding-bottom: 5px;\n  padding-top: 5px;\n\n  flex: 0;\n  /* width: clamp(200px, 60%, 800px); */\n  opacity: 1;\n  transition: all 175ms ease-in;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: relative;\n  cursor: pointer;\n  gap: clamp(20px, 5%, 40px);\n  min-width: 300px;\n}\n\n.right-first-section > .task > .task-left-section {\n  width: 30px;\n  height: 30px;\n  cursor: pointer;\n  transition: transform 0.1s ease;\n}\n\n.right-first-section > .task > .task-left-section.checked svg path,\n.right-first-section > .task > .task-left-section.checked svg circle {\n  transition: all 0.3s ease;\n  stroke: var(--checkbox);\n  stroke-width: 1px;\n}\n\n.right-first-section > .task > .task-left-section.checked {\n  transform: scale(1.1);\n}\n\n.right-first-section > .task > .task-left-section.unchecked svg path {\n  opacity: 0;\n}\n\n.right-first-section > .task:hover > .task-left-section {\n  transform: scale(1.1);\n  transition: transform 0.1s ease;\n}\n\n.right-first-section > .task:hover > .task-left-section circle {\n  stroke: var(--checkbox);\n}\n\n.right-first-section > .task:hover > .task-left-section path,\n.right-first-section > .task:hover > .task-left-section circle {\n  transition: all 0.3s ease-in-out;\n}\n\n.right-first-section > .task > .task-left-section > svg circle {\n  fill: none;\n  stroke: var(--input-placeholders-and-checkbox);\n}\n\n.right-first-section > .task > .task-left-section > svg path {\n  fill: none;\n  stroke: var(--input-placeholders-and-checkbox);\n}\n\n.right-first-section > .task > .task-right-section {\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(8, 1fr);\n  grid-template-rows: 1fr 1fr 1fr 1fr;\n  align-items: center;\n}\n\n.right-first-section > .task > .task-right-section:hover {\n  transition: all 1s ease;\n}\n\n.right-first-section > .task > .task-right-section > .task-project > * {\n  padding: 1px 5px 1px 5px;\n  border-radius: 5px;\n  border: 1px solid var(--border-dark);\n  font-size: 12px;\n  font-weight: 400;\n}\n\n.right-first-section > .task > .task-right-section > .task-project {\n  grid-column: 1 / 9;\n  grid-row: 1 / 2;\n\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.right-first-section > .task > .task-right-section > .task-title-field {\n  grid-column: 1 / 9;\n  grid-row: 2 / 3;\n  font-size: 18px;\n}\n\n.right-first-section > .task > .task-right-section > .task-date-field {\n  grid-column: 1 / 9;\n  grid-row: 4 / 5;\n  font-size: 12px;\n}\n\n.right-first-section > .task > .task-right-section > .task-notes-field {\n  grid-column: 1 / 9;\n  grid-row: 3 / 4;\n  font-size: 12px;\n}\n\n.right-first-section > .task > .task-right-section > .task-delete-button {\n  grid-column: 8 / 9;\n  grid-row: 2 / 4;\n  font-size: 12px;\n  justify-self: center;\n  transform: scale(1);\n  transition: all 0.3s ease;\n  opacity: 0;\n}\n.right-first-section > .task > .task-right-section > .task-edit-button {\n  grid-column: 7 / 8;\n  grid-row: 2 / 4;\n  font-size: 12px;\n  justify-self: center;\n  transform: scale(1);\n  transition: all 0.3s ease;\n  opacity: 0;\n}\n\n.right-first-section > .task > .task-right-section:hover > .task-delete-button,\n.right-first-section > .task > .task-right-section:hover > .task-edit-button {\n  opacity: 1;\n}\n\n.right-first-section > .task > .task-right-section > .task-delete-button span,\n.right-first-section > .task > .task-right-section > .task-edit-button span {\n  color: var(--icons-views);\n  background-color: var(--background-light);\n}\n\n.right-first-section\n  > .task\n  > .task-right-section:hover\n  > .task-delete-button\n  span,\n.right-first-section\n  > .task\n  > .task-right-section:hover\n  > .task-edit-button\n  span {\n  transition: all 0.3s ease;\n  border-radius: 50%;\n  color: var(--icons-views);\n  background-color: var(--background-light);\n}\n\n.right-first-section\n  > .task\n  > .task-right-section:hover\n  > .task-delete-button:hover\n  span,\n.right-first-section\n  > .task\n  > .task-right-section:hover\n  > .task-edit-button:hover\n  span {\n  background-color: var(--icons-views);\n  color: var(--background-light);\n}\n\n.right-first-section > .task > .task-right-section > .task-date-field::before {\n  content: \"\\1F3AF\";\n  display: inline-block;\n  font-family: \"Segoe UI\", sans-serif;\n  margin-right: 5px;\n}\n\n.right-first-section > .task-divider {\n  min-height: 1px;\n  width: 100%;\n  background-color: var(--border-color);\n  transition: all 175ms ease-in;\n  opacity: 1;\n  min-width: 300px;\n}\n\n.right-first-section > .task.hidden,\n.right-first-section > .task-divider.hidden {\n  transition: all 175ms ease-in;\n  opacity: 0;\n}\n\n.right-first-section > .task > div > div {\n  opacity: 1;\n  transition: all 175ms ease-in;\n}\n\n.right-first-section > .task > div > div.hidden {\n  opacity: 0;\n}\n\n.task-project-color {\n  height: 10px;\n  width: 10px;\n  border-radius: 50%;\n  border: 0.5px solid var(--input-placeholders-and-checkbox);\n}\n\n/* Left div layout */\n\n.left > .left-first-section {\n  margin-top: 20px;\n  /* overflow: auto; */\n  flex: 0 0 200px;\n  /* margin-left: 10px; */\n}\n\n.left > .left-second-section {\n  margin-top: 20px;\n  /* overflow: auto; */\n  flex: 1 0 200px;\n  /* margin-left: 10px; */\n}\n\n.left > .left-first-section > p {\n  padding-left: 20px;\n  font-style: italic;\n  font-weight: 200;\n  height: 50px;\n  display: flex;\n  align-items: center;\n}\n\n.left > .left-first-section ul,\n.left > .left-second-section ul {\n  position: relative;\n}\n\n.left > .left-first-section li {\n  padding-left: 30px;\n  list-style: none;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  z-index: 1;\n  position: relative;\n  cursor: pointer;\n  gap: 10px;\n}\n\n.left > .left-second-section li {\n  cursor: pointer;\n}\n\n.left > .left-first-section li > .image {\n  height: 20px;\n  width: 20px;\n}\n\n/* Slider on views */\n\n.left > .left-first-section .task-animation,\n.left > .left-second-section li[data-active=\"true\"] ~ .task-animation {\n  position: absolute;\n  /* top: 0; */\n  height: 50px;\n  border-left: 6px solid var(--scrollbar-slider);\n  z-index: 0;\n  transition: all 0.3s ease;\n  opacity: 0;\n}\n\n.views > li:nth-child(1)[data-active=\"true\"] ~ .task-animation {\n  width: 100%;\n  top: 0;\n  opacity: 1;\n}\n\n.views > li:nth-child(2)[data-active=\"true\"] ~ .task-animation {\n  width: 100%;\n  top: 50px;\n  opacity: 1;\n}\n\n.views > li:nth-child(3)[data-active=\"true\"] ~ .task-animation {\n  width: 100%;\n  top: 100px;\n  opacity: 1;\n}\n\n/* Views styles */\n\n.left > .left-first-section li[data-active=\"false\"]:hover,\n.left > .left-second-section li:hover {\n  background-color: var(--navigation-elements-hover);\n}\n\n.left > .left-first-section li[data-active=\"true\"] > div > svg {\n  fill: var(--icons-views);\n}\n\n.left > .left-first-section li[data-active=\"false\"] > div > svg {\n  fill: var(--font-color);\n}\n\n.left > .left-first-section li[data-active=\"true\"] > p {\n  color: var(--icons-views);\n}\n\n.left > .left-second-section li.font-accent > div {\n  color: var(--icons-views);\n}\n\n.left > .left-first-section li[data-active=\"false\"]:active,\n.left > .left-second-section li:active:not(.hovered-delete) {\n  background-color: var(--navigation-elements-active);\n}\n\n/* Slider on projects */\n\n.second-section-list > li:nth-child(1)[data-active=\"true\"] ~ .task-animation {\n  /* width: 100%; */\n  top: 0;\n  opacity: 1;\n}\n\n.second-section-list > li:nth-child(2)[data-active=\"true\"] ~ .task-animation {\n  /* width: 100%; */\n  top: 50px;\n  opacity: 1;\n}\n\n.second-section-list > li:nth-child(3)[data-active=\"true\"] ~ .task-animation {\n  /* width: 100%; */\n  top: 100px;\n  opacity: 1;\n}\n\n.second-section-list > li:nth-child(4)[data-active=\"true\"] ~ .task-animation {\n  /* width: 100%; */\n  top: 150px;\n  opacity: 1;\n}\n\n.second-section-list > li:nth-child(5)[data-active=\"true\"] ~ .task-animation {\n  /* width: 100%; */\n  top: 200px;\n  opacity: 1;\n}\n\n.second-section-list > li:nth-child(6)[data-active=\"true\"] ~ .task-animation {\n  /* width: 100%; */\n  top: 250px;\n  opacity: 1;\n}\n\n.second-section-list > li:nth-child(7)[data-active=\"true\"] ~ .task-animation {\n  /* width: 100%; */\n  top: 300px;\n  opacity: 1;\n}\n\n.second-section-list > li:nth-child(8)[data-active=\"true\"] ~ .task-animation {\n  /* width: 100%; */\n  top: 350px;\n  opacity: 1;\n}\n\n.second-section-list > li:nth-child(9)[data-active=\"true\"] ~ .task-animation {\n  /* width: 100%; */\n  top: 400px;\n  opacity: 1;\n}\n\n.second-section-list > li:nth-child(10)[data-active=\"true\"] ~ .task-animation {\n  /* width: 100%; */\n  top: 450px;\n  opacity: 1;\n}\n\n.second-section-list > li:nth-child(11)[data-active=\"true\"] ~ .task-animation {\n  /* width: 100%; */\n  top: 500px;\n  opacity: 1;\n}\n\n.second-section-list > li:nth-child(12)[data-active=\"true\"] ~ .task-animation {\n  /* width: 100%; */\n  top: 550px;\n  opacity: 1;\n}\n\n.left > .left-second-section > p {\n  padding-left: 20px;\n  font-style: italic;\n  font-weight: 200;\n  height: 50px;\n  display: flex;\n  align-items: center;\n}\n\n.left > .left-second-section li {\n  padding-left: 30px;\n  list-style: none;\n  height: 50px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.left > .left-second-section .create-project {\n  /* margin-left: 50px; */\n  margin-top: 20px;\n  padding-left: 30px;\n  height: 50px;\n  display: flex;\n  width: 100%;\n  align-items: center;\n  gap: 10px;\n  /* justify-content: center; */\n  cursor: pointer;\n}\n\n.left > .left-second-section .create-project div {\n  /* font-style: italic; */\n  font-size: 15px;\n}\n\n.left > .left-second-section .create-project:hover {\n  background-color: #ba181b28;\n}\n\n.left > .left-second-section .create-project:active {\n  background-color: #ba181b5b;\n}\n\n.left > .left-second-section .create-project > div:first-child {\n  height: 15px;\n  width: 15px;\n}\n\n/* Footer add new task button */\n\n.footer > .footer-right > .create-task {\n  /* height: 100%; */\n  /* width: calc(100% - 300px); */\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  cursor: pointer;\n  justify-content: center;\n}\n\n.footer > .footer-right > .create-task > .create-task-container {\n  width: 150px;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10px;\n  /* border-radius: 10px; */\n  /* border: 0.5px solid var(--border-dark); */\n  box-shadow: 0px 0px 5px 2px var(--new-task-button-border);\n  transition: all 0.1s ease-in-out;\n\n  border-radius: 5px;\n  background: var(--new-task-button);\n  /* box-shadow:  8px 8px 16px #9f9f9f,\n                 -8px -8px 16px #ffffff; */\n}\n\n.footer\n  > .footer-right\n  > .create-task\n  > .create-task-container\n  div:nth-child(2) {\n  font-size: 20px;\n}\n\n.footer\n  > .footer-right\n  > .create-task\n  > .create-task-container\n  > div:first-child {\n  height: 20px;\n  width: 20px;\n}\n\n.footer > .footer-right > .create-task > .create-task-container:hover {\n  background-color: var(--new-task-button-hover);\n  transform: scale(1.1);\n}\n\n.footer > .footer-right > .create-task > .create-task-container:active {\n  background-color: var(--new-task-button-active);\n}\n\n/* Dialog layout and animations */\n\ndialog {\n  position: absolute;\n  margin: auto;\n  padding-left: 35px;\n  padding-right: 35px;\n  padding-top: 10px;\n  padding-bottom: 20px;\n  /* padding-left: 35px; */\n  border-radius: 5px;\n  border: 0.5px solid var(--border-color);\n}\n\ndialog:focus {\n  outline: none;\n}\n\ndialog.hidden {\n  opacity: 0;\n  top: -200%;\n  transform: scale(0.5);\n  transition:\n    opacity 300ms ease-in-out,\n    top 1000ms ease-in-out,\n    transform 1000ms ease-in-out;\n}\n\ndialog.hidden > form > * {\n  position: relative;\n  top: 10px;\n  opacity: 0;\n}\n\ndialog.displayed {\n  opacity: 1;\n  top: 0%;\n  transform: scale(1);\n  transition: transform 300ms cubic-bezier(0.18, 0.89, 0.43, 1.19);\n  /* transition: transform 300ms ease; */\n}\n\ndialog.displayed > form > * {\n  top: 0px;\n  opacity: 1;\n  /* background-color: black; */\n}\n\ndialog.displayed.new-project > form .project-dialog-name {\n  transition: opacity 300ms ease-in-out 200ms;\n  border-bottom: 1px solid var(--border-dark);\n  width: 100%;\n}\n\ndialog.displayed.new-project > form .input-container {\n  transition: opacity 300ms ease-in-out 250ms;\n}\n\ndialog.displayed.new-project > form .project-name-field-div {\n  transition: opacity 300ms ease-in-out 300ms;\n}\n\ndialog.displayed.new-project > form .project-color-field-div {\n  transition: opacity 300ms ease-in-out 350ms;\n}\n\ndialog.displayed.new-project > form > button {\n  transition: opacity 300ms ease-in-out 400ms;\n}\n\ndialog.displayed.new-project > form > .close-project-dialog {\n  transition: opacity 300ms ease-in-out 450ms;\n}\n\ndialog.displayed.new-task > form .task-dialog-name,\ndialog.displayed.edit-task > form .task-dialog-name {\n  transition: opacity 300ms ease-in-out 200ms;\n  border-bottom: 1px solid var(--border-dark);\n  width: 100%;\n}\n\ndialog.displayed.new-task > form > .task-project-field-div,\ndialog.displayed.edit-task > form > .task-project-field-div {\n  transition: opacity 300ms ease-in-out 250ms;\n}\n\ndialog.displayed.new-task > form > .task-title-field-div,\ndialog.displayed.edit-task > form > .task-title-field-div {\n  transition: opacity 300ms ease-in-out 300ms;\n}\n\ndialog.displayed.new-task > form > .task-notes-field-div,\ndialog.displayed.edit-task > form > .task-notes-field-div {\n  transition: opacity 300ms ease-in-out 350ms;\n}\n\ndialog.displayed.new-task > form > .task-priority-field-div,\ndialog.displayed.edit-task > form > .task-priority-field-div {\n  transition: opacity 300ms ease-in-out 400ms;\n}\n\ndialog.displayed.new-task > form > .task-date-field-div,\ndialog.displayed.edit-task > form > .task-date-field-div {\n  transition: opacity 300ms ease-in-out 450ms;\n}\n\ndialog.displayed.new-task > form > button,\ndialog.displayed.edit-task > form > button {\n  transition:\n    opacity 300ms ease-in-out 500ms,\n    background-color 0.3s ease,\n    border-color 0.1s ease;\n}\n\ndialog.displayed.new-task > form > .close-task-dialog,\ndialog.displayed.edit-task > form > .close-task-dialog {\n  transition: opacity 300ms ease-in-out 550ms;\n}\n\ndialog.displayed.task-delete > form > button,\ndialog.displayed.project-delete > form > button {\n  transition:\n    opacity 100ms ease-in-out 200ms,\n    background-color 0.3s ease,\n    border-color 0.1s ease;\n}\n\n.delete-project-button {\n  width: 20px;\n  height: 20px;\n  margin-left: auto;\n  margin-right: 20px;\n  opacity: 0;\n  border-radius: 50%;\n  fill: var(--icons-views);\n  transition: all 0.3s ease;\n}\n\n.delete-project-button:hover {\n  fill: var(--background-light);\n  background-color: var(--icons-views);\n}\n\nli.project:hover > .delete-project-button {\n  opacity: 1;\n}\n\n.new-project,\n.new-task,\n.edit-task,\n.task-delete,\n.project-delete {\n  width: 400px;\n  background-color: var(--background-light);\n}\n\n.new-project > form,\n.new-task > form,\n.edit-task > form {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  height: 100%;\n}\n\n.task-delete > form,\n.project-delete > form {\n  display: grid;\n  gap: 10px;\n  height: 100%;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n}\n\n.task-delete > form > div,\n.project-delete > form > div {\n  grid-column: 1 / 3;\n  grid-row: 1 / 2;\n  justify-self: center;\n}\n\n.task-delete > form > button:nth-child(1),\n.project-delete > form > button:nth-child(1) {\n  grid-column: 2 / 3;\n  grid-row: 2 / 3;\n}\n\n.task-delete > form > button:nth-child(2),\n.project-delete > form > button:nth-child(2) {\n  grid-column: 1 / 2;\n  grid-row: 2 / 3;\n}\n\n.new-task > form > .task-project-field-div,\n.new-task > form > .task-title-field-div,\n.new-task > form > .task-notes-field-div,\n.new-task > form > .task-priority-field-div,\n.new-task > form > .task-date-field-div,\n.edit-task > form > .task-project-field-div,\n.edit-task > form > .task-title-field-div,\n.edit-task > form > .task-notes-field-div,\n.edit-task > form > .task-priority-field-div,\n.edit-task > form > .task-date-field-div,\n.new-project > form .project-name-field-div,\n.new-project > form .project-color-field-div {\n  display: flex;\n  flex-direction: column;\n}\n\n.new-task > form > .task-dialog-name,\n.edit-task > form > .task-dialog-name,\n.new-project > form > .project-dialog-name {\n  align-self: center;\n  font-size: 25px;\n  margin-bottom: 15px;\n}\n\n.new-task > form > button,\n.edit-task > form > button,\n.new-project > form > button {\n  margin-top: 25px;\n  height: 40px;\n  width: 50%;\n  align-self: center;\n  border-radius: 5px;\n  border: 0.5px solid var(--border-dark);\n  transition: background-color 1s ease;\n  background-color: var(--submit-button);\n  cursor: pointer;\n}\n\n.task-delete > form > button[type=\"submit\"],\n.task-delete > form > button[type=\"close\"],\n.project-delete > form > button[type=\"submit\"],\n.project-delete > form > button[type=\"close\"] {\n  margin-top: 25px;\n  height: 40px;\n  width: 100%;\n  align-self: center;\n  border-radius: 5px;\n  border: 0.5px solid var(--border-dark);\n  transition: background-color 1s ease;\n  background-color: var(--submit-button);\n  cursor: pointer;\n}\n\n.task-delete > form > button[type=\"submit\"],\n.project-delete > form > button[type=\"submit\"] {\n  background-color: var(--submit-button);\n}\n\n.task-delete > form > button[type=\"close\"],\n.project-delete > form > button[type=\"close\"] {\n  background-color: var(--dialog-close-button);\n}\n\n.task-delete > form > button[type=\"close\"]:hover,\n.project-delete > form > button[type=\"close\"]:hover {\n  background-color: var(--dialog-close-button-hover);\n}\n\n.task-delete > form > button[type=\"close\"]:active,\n.project-delete > form > button[type=\"close\"]:active {\n  background-color: var(--dialog-close-button-active);\n}\n\n.new-task > form > button:focus,\n.edit-task > form > button:focus,\n.new-project > form > button:focus,\n.task-delete > form > button:focus,\n.project-delete > form > button:focus {\n  outline: none;\n}\n\n.new-task > form > button:hover,\n.edit-task > form > button:hover,\n.new-project > form > button:hover,\n.task-delete > form > button[type=\"submit\"]:hover,\n.project-delete > form > button[type=\"submit\"]:hover {\n  border: 0.5px solid black;\n  background-color: var(--submit-button-hover);\n}\n\n.new-task > form > button:active,\n.edit-task > form > button:active,\n.new-project > form > button:active,\n.task-delete > form > button[type=\"submit\"]:active,\n.project-delete > form > button[type=\"submit\"]:active {\n  background-color: var(--submit-button-active);\n}\n\n.new-task > form > .close-task-dialog,\n.edit-task > form > .close-task-dialog,\n.new-project > form > .close-project-dialog {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n}\n\n.new-task > form > .close-task-dialog span,\n.edit-task > form > .close-task-dialog span,\n.new-project > form > .close-project-dialog span {\n  transform: scale(1);\n  opacity: 0.7;\n  cursor: pointer;\n  transition:\n    transform 0.25s,\n    opacity 0.25s;\n}\n\n.new-task > form > .close-task-dialog:hover span,\n.edit-task > form > .close-task-dialog:hover span,\n.new-project > form > .close-project-dialog:hover span {\n  transform: rotate(90deg) scale(1.1);\n  opacity: 1;\n  cursor: pointer;\n}\n\n/* Dialog input styles */\n\n.new-task > form input,\n.new-task > form select,\n.new-task > form textarea,\n.edit-task > form input,\n.edit-task > form select,\n.edit-task > form textarea,\n.new-project > form input,\n.new-project > form select,\n.new-project > form textarea {\n  outline: none;\n  padding: 10px;\n  border: 0.5px solid var(--border-color);\n  transition: all 0.25s ease;\n  border-radius: 5px;\n  color: black;\n}\n\n.new-task > form input:hover,\n.new-task > form select:hover,\n.new-task > form textarea:hover,\n.edit-task > form input:hover,\n.edit-task > form select:hover,\n.edit-task > form textarea:hover,\n.new-project > form input:hover,\n.new-project > form select:hover,\n.new-project > form textarea:hover {\n  outline: none;\n  padding: 10px;\n  border: 0.5px solid black;\n}\n\n.new-task > form input::placeholder,\n.new-task > form select::placeholder,\n.new-task > form textarea::placeholder,\n.edit-task > form input::placeholder,\n.edit-task > form select::placeholder,\n.edit-task > form textarea::placeholder,\n.new-project > form input::placeholder,\n.new-project > form select::placeholder,\n.new-project > form textarea::placeholder {\n  color: var(--input-placeholders-and-checkbox);\n  font-style: italic;\n}\n\n.new-task > form textarea,\n.edit-task > form textarea,\n.new-project > form textarea {\n  resize: none;\n}\n\n.project-color-field-div {\n  align-self: center;\n}\n\n.new-project > form #project-color {\n  height: 40px;\n  width: 80px;\n  padding: 5px;\n  cursor: pointer;\n}\n\n.new-project > form .input-container {\n  display: flex;\n  width: 100%;\n  justify-content: space-around;\n}\n\n.icon {\n  width: 15px;\n  height: 15px;\n  /* fill: red; */\n  display: flex;\n  justify-content: center;\n}\n\n.no-tasks-filler {\n  color: var(--input-placeholders-and-checkbox);\n  font-style: italic;\n}\n\n#toggle-mode-button {\n  /* height: 100px; */\n  /* width: 100px; */\n  /* background-color: black; */\n  position: absolute;\n  top: 15px;\n  right: 15px;\n  cursor: pointer;\n  z-index: 5;\n  -webkit-user-select: none; /* Safari */\n  -moz-user-select: none; /* Firefox */\n  -ms-user-select: none; /* IE 10+ */\n  user-select: none; /* Standard syntax */\n}\n\n#toggle-mode-button span {\n  transform: scale(1.2);\n}\n\ndialog.new-task,\ndialog.edit-task {\n  height: 460px;\n}\n\ndialog.new-task > form > button[type=\"submit\"],\ndialog.edit-task > form > button[type=\"submit\"] {\n  margin-top: auto;\n}\n\ndialog.new-project {\n  height: 250px;\n}\n\ndialog.new-project > form > button[type=\"submit\"] {\n  margin-top: auto;\n}\n\ndialog.task-delete,\ndialog.project-delete {\n  height: 200px;\n}\n\ndialog.task-delete > form > button,\ndialog.project-delete > form > button {\n  margin-top: auto;\n}\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();
  while (output.length < targetLength) {
    output = '0' + output;
  }
  return sign + output;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultLocale/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultOptions: () => (/* binding */ getDefaultOptions),
/* harmony export */   setDefaultOptions: () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/formatters/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/formatters/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_lib/getUTCDayOfYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js");
/* harmony import */ var _lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js");
/* harmony import */ var _lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_lib/getUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js");
/* harmony import */ var _lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");
/* harmony import */ var _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lightFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js");







var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
};
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */

var formatters = {
  // Era
  G: function G(date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;
    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B
      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ
      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function y(date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear();
      // Returns 1 for 1 BC (which is year 0 in JavaScript)
      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].y(date, token);
  },
  // Local week-numbering year
  Y: function Y(date, token, localize, options) {
    var signedWeekYear = (0,_lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date, options);
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;

    // Two digit year
    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(twoDigitYear, 2);
    }

    // Ordinal number
    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    }

    // Padding
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function R(date, token) {
    var isoWeekYear = (0,_lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date);

    // Padding
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function u(date, token) {
    var year = date.getUTCFullYear();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(year, token.length);
  },
  // Quarter
  Q: function Q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04
      case 'QQ':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4
      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...
      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function q(date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04
      case 'qq':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4
      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...
      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function M(date, token, localize) {
    var month = date.getUTCMonth();
    switch (token) {
      case 'M':
      case 'MM':
        return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].M(date, token);
      // 1st, 2nd, ..., 12th
      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec
      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D
      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December
      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function L(date, token, localize) {
    var month = date.getUTCMonth();
    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12
      case 'LL':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(month + 1, 2);
      // 1st, 2nd, ..., 12th
      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec
      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D
      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December
      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function w(date, token, localize, options) {
    var week = (0,_lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(date, options);
    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(week, token.length);
  },
  // ISO week of year
  I: function I(date, token, localize) {
    var isoWeek = (0,_lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(date);
    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeek, token.length);
  },
  // Day of the month
  d: function d(date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].d(date, token);
  },
  // Day of year
  D: function D(date, token, localize) {
    var dayOfYear = (0,_lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(date);
    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dayOfYear, token.length);
  },
  // Day of week
  E: function E(date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T
      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu
      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday
      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function e(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value
      case 'ee':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th
      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });
      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T
      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu
      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday
      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function c(date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value
      case 'cc':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th
      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });
      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T
      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu
      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday
      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function i(date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02
      case 'ii':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoDayOfWeek, token.length);
      // 2nd
      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue
      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T
      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu
      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday
      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function a(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    switch (token) {
      case 'a':
      case 'aa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });
      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();
      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });
      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function b(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }
    switch (token) {
      case 'b':
      case 'bb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });
      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();
      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });
      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function B(date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }
    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });
      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });
      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function h(date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].h(date, token);
  },
  // Hour [0-23]
  H: function H(date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].H(date, token);
  },
  // Hour [0-11]
  K: function K(date, token, localize) {
    var hours = date.getUTCHours() % 12;
    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Hour [1-24]
  k: function k(date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;
    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Minute
  m: function m(date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].m(date, token);
  },
  // Second
  s: function s(date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].s(date, token);
  },
  // Fraction of second
  S: function S(date, token) {
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function X(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    if (timezoneOffset === 0) {
      return 'Z';
    }
    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function x(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function O(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long
      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function z(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();
    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long
      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function t(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function T(date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  }
};
function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(minutes, 2);
}
function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.abs(offset) / 60, 2);
  }
  return formatTimezone(offset, dirtyDelimiter);
}
function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.floor(absOffset / 60), 2);
  var minutes = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */
var formatters = {
  // Year
  y: function y(date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |

    var signedYear = date.getUTCFullYear();
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function M(date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(month + 1, 2);
  },
  // Day of the month
  d: function d(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function a(date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';
    switch (token) {
      case 'a':
      case 'aa':
        return dayPeriodEnumValue.toUpperCase();
      case 'aaa':
        return dayPeriodEnumValue;
      case 'aaaaa':
        return dayPeriodEnumValue[0];
      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function h(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function H(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours(), token.length);
  },
  // Minute
  m: function m(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function s(date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function S(date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(fractionalSeconds, token.length);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/longFormatters/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var dateLongFormatter = function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });
    case 'PP':
      return formatLong.date({
        width: 'medium'
      });
    case 'PPP':
      return formatLong.date({
        width: 'long'
      });
    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
};
var timeLongFormatter = function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });
    case 'pp':
      return formatLong.time({
        width: 'medium'
      });
    case 'ppp':
      return formatLong.time({
        width: 'long'
      });
    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
};
var dateTimeLongFormatter = function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];
  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }
  var dateTimeFormat;
  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;
    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;
    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;
    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }
  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
};
var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (longFormatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCDayOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


var MILLISECONDS_IN_DAY = 86400000;
function getUTCDayOfYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000;
function getUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date).getTime() - (0,_startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date).getTime();

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");



function getUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfThisYear);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeek/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000;
function getUTCWeek(dirtyDate, options) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date, options).getTime() - (0,_startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date, options).getTime();

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");





function getUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_2__.getDefaultOptions)();
  var firstWeekContainsDate = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);

  // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }
  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeekOfNextYear, options);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeekOfThisYear, options);
  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/protectedTokens/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isProtectedDayOfYearToken: () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   isProtectedWeekYearToken: () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   throwProtectedError: () => (/* binding */ throwProtectedError)
/* harmony export */ });
var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


function startOfUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var weekStartsOn = 1;
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



function startOfUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var year = (0,_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuary);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




function startOfUTCWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");





function startOfUTCWeekYear(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var firstWeekContainsDate = (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
  var year = (0,_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate, options);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(firstWeek, options);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }
  var number = Number(dirtyNumber);
  if (isNaN(number)) {
    return number;
  }
  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/addMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */
function addMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var timestamp = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime();
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
  return new Date(timestamp + amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/constants/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/constants/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   daysInWeek: () => (/* binding */ daysInWeek),
/* harmony export */   daysInYear: () => (/* binding */ daysInYear),
/* harmony export */   maxTime: () => (/* binding */ maxTime),
/* harmony export */   millisecondsInHour: () => (/* binding */ millisecondsInHour),
/* harmony export */   millisecondsInMinute: () => (/* binding */ millisecondsInMinute),
/* harmony export */   millisecondsInSecond: () => (/* binding */ millisecondsInSecond),
/* harmony export */   minTime: () => (/* binding */ minTime),
/* harmony export */   minutesInHour: () => (/* binding */ minutesInHour),
/* harmony export */   monthsInQuarter: () => (/* binding */ monthsInQuarter),
/* harmony export */   monthsInYear: () => (/* binding */ monthsInYear),
/* harmony export */   quartersInYear: () => (/* binding */ quartersInYear),
/* harmony export */   secondsInDay: () => (/* binding */ secondsInDay),
/* harmony export */   secondsInHour: () => (/* binding */ secondsInHour),
/* harmony export */   secondsInMinute: () => (/* binding */ secondsInMinute),
/* harmony export */   secondsInMonth: () => (/* binding */ secondsInMonth),
/* harmony export */   secondsInQuarter: () => (/* binding */ secondsInQuarter),
/* harmony export */   secondsInWeek: () => (/* binding */ secondsInWeek),
/* harmony export */   secondsInYear: () => (/* binding */ secondsInYear)
/* harmony export */ });
/**
 * Days in 1 week.
 *
 * @name daysInWeek
 * @constant
 * @type {number}
 * @default
 */
var daysInWeek = 7;

/**
 * Days in 1 year
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 *
 * @name daysInYear
 * @constant
 * @type {number}
 * @default
 */
var daysInYear = 365.2425;

/**
 * Maximum allowed time.
 *
 * @name maxTime
 * @constant
 * @type {number}
 * @default
 */
var maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;

/**
 * Milliseconds in 1 minute
 *
 * @name millisecondsInMinute
 * @constant
 * @type {number}
 * @default
 */
var millisecondsInMinute = 60000;

/**
 * Milliseconds in 1 hour
 *
 * @name millisecondsInHour
 * @constant
 * @type {number}
 * @default
 */
var millisecondsInHour = 3600000;

/**
 * Milliseconds in 1 second
 *
 * @name millisecondsInSecond
 * @constant
 * @type {number}
 * @default
 */
var millisecondsInSecond = 1000;

/**
 * Minimum allowed time.
 *
 * @name minTime
 * @constant
 * @type {number}
 * @default
 */
var minTime = -maxTime;

/**
 * Minutes in 1 hour
 *
 * @name minutesInHour
 * @constant
 * @type {number}
 * @default
 */
var minutesInHour = 60;

/**
 * Months in 1 quarter
 *
 * @name monthsInQuarter
 * @constant
 * @type {number}
 * @default
 */
var monthsInQuarter = 3;

/**
 * Months in 1 year
 *
 * @name monthsInYear
 * @constant
 * @type {number}
 * @default
 */
var monthsInYear = 12;

/**
 * Quarters in 1 year
 *
 * @name quartersInYear
 * @constant
 * @type {number}
 * @default
 */
var quartersInYear = 4;

/**
 * Seconds in 1 hour
 *
 * @name secondsInHour
 * @constant
 * @type {number}
 * @default
 */
var secondsInHour = 3600;

/**
 * Seconds in 1 minute
 *
 * @name secondsInMinute
 * @constant
 * @type {number}
 * @default
 */
var secondsInMinute = 60;

/**
 * Seconds in 1 day
 *
 * @name secondsInDay
 * @constant
 * @type {number}
 * @default
 */
var secondsInDay = secondsInHour * 24;

/**
 * Seconds in 1 week
 *
 * @name secondsInWeek
 * @constant
 * @type {number}
 * @default
 */
var secondsInWeek = secondsInDay * 7;

/**
 * Seconds in 1 year
 *
 * @name secondsInYear
 * @constant
 * @type {number}
 * @default
 */
var secondsInYear = secondsInDay * daysInYear;

/**
 * Seconds in 1 month
 *
 * @name secondsInMonth
 * @constant
 * @type {number}
 * @default
 */
var secondsInMonth = secondsInYear / 12;

/**
 * Seconds in 1 quarter
 *
 * @name secondsInQuarter
 * @constant
 * @type {number}
 * @default
 */
var secondsInQuarter = secondsInMonth * 3;

/***/ }),

/***/ "./node_modules/date-fns/esm/format/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/format/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ format)
/* harmony export */ });
/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../isValid/index.js */ "./node_modules/date-fns/esm/isValid/index.js");
/* harmony import */ var _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../subMilliseconds/index.js */ "./node_modules/date-fns/esm/subMilliseconds/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_lib/format/formatters/index.js */ "./node_modules/date-fns/esm/_lib/format/formatters/index.js");
/* harmony import */ var _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/format/longFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_lib/protectedTokens/index.js */ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");
/* harmony import */ var _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/defaultLocale/index.js */ "./node_modules/date-fns/esm/_lib/defaultLocale/index.js");










 // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;

// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;

/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, options) {
  var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : _lib_defaultLocale_index_js__WEBPACK_IMPORTED_MODULE_2__["default"];
  var firstWeekContainsDate = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1);

  // Test if weekStartsOn is between 1 and 7 _and_ is not NaN
  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }
  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }
  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }
  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }
  var originalDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(dirtyDate);
  if (!(0,_isValid_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(originalDate)) {
    throw new RangeError('Invalid time value');
  }

  // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376
  var timezoneOffset = (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(originalDate);
  var utcDate = (0,_subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_7__["default"])(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];
    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_8__["default"][firstCharacter];
      return longFormatter(substring, locale.formatLong);
    }
    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }
    var firstCharacter = substring[0];
    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }
    var formatter = _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_9__["default"][firstCharacter];
    if (formatter) {
      if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.isProtectedWeekYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
      }
      if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.isProtectedDayOfYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_10__.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
      }
      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }
    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }
    return substring;
  }).join('');
  return result;
}
function cleanEscapedString(input) {
  var matched = input.match(escapedStringRegExp);
  if (!matched) {
    return input;
  }
  return matched[1].replace(doubleQuoteRegExp, "'");
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param {*} value - the value to check
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */
function isDate(value) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  return value instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(value) === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isValid/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isValid/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _isDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isDate/index.js */ "./node_modules/date-fns/esm/isDate/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */
function isValid(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  if (!(0,_isDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate) && typeof dirtyDate !== 'number') {
    return false;
  }
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  return !isNaN(Number(date));
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, options) {
    var context = options !== null && options !== void 0 && options.context ? String(options.context) : 'standalone';
    var valuesArray;
    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;
      var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;
      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }
    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
    // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
    return valuesArray[index];
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);
    if (!matchResult) {
      return null;
    }
    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}
function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }
  return undefined;
}
function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return undefined;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};
var formatDistance = function formatDistance(token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }
  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }
  return result;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};
var formatRelative = function formatRelative(token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatRelative);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};
var ordinalNumber = function ordinalNumber(dirtyNumber, _options) {
  var number = Number(dirtyNumber);

  // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';
      case 2:
        return number + 'nd';
      case 3:
        return number + 'rd';
    }
  }
  return number + 'th';
};
var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function argumentCallback(quarter) {
      return quarter - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js");
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function valueCallback(value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function valueCallback(index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js");





/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  options: {
    weekStartsOn: 0 /* Sunday */,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ "./node_modules/date-fns/esm/parseISO/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/date-fns/esm/parseISO/index.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ parseISO)
/* harmony export */ });
/* harmony import */ var _constants_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../constants/index.js */ "./node_modules/date-fns/esm/constants/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name parseISO
 * @category Common Helpers
 * @summary Parse ISO string
 *
 * @description
 * Parse the given string in ISO 8601 format and return an instance of Date.
 *
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If the argument isn't a string, the function cannot parse the string or
 * the values are invalid, it returns Invalid Date.
 *
 * @param {String} argument - the value to convert
 * @param {Object} [options] - an object with options.
 * @param {0|1|2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.additionalDigits` must be 0, 1 or 2
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * const result = parseISO('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert string '+02014101' to date,
 * // if the additional number of digits in the extended year format is 1:
 * const result = parseISO('+02014101', { additionalDigits: 1 })
 * //=> Fri Apr 11 2014 00:00:00
 */
function parseISO(argument, options) {
  var _options$additionalDi;
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var additionalDigits = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])((_options$additionalDi = options === null || options === void 0 ? void 0 : options.additionalDigits) !== null && _options$additionalDi !== void 0 ? _options$additionalDi : 2);
  if (additionalDigits !== 2 && additionalDigits !== 1 && additionalDigits !== 0) {
    throw new RangeError('additionalDigits must be 0, 1 or 2');
  }
  if (!(typeof argument === 'string' || Object.prototype.toString.call(argument) === '[object String]')) {
    return new Date(NaN);
  }
  var dateStrings = splitDateString(argument);
  var date;
  if (dateStrings.date) {
    var parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }
  if (!date || isNaN(date.getTime())) {
    return new Date(NaN);
  }
  var timestamp = date.getTime();
  var time = 0;
  var offset;
  if (dateStrings.time) {
    time = parseTime(dateStrings.time);
    if (isNaN(time)) {
      return new Date(NaN);
    }
  }
  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);
    if (isNaN(offset)) {
      return new Date(NaN);
    }
  } else {
    var dirtyDate = new Date(timestamp + time);
    // js parsed string assuming it's in UTC timezone
    // but we need it to be parsed in our timezone
    // so we use utc values to build date in our timezone.
    // Year values from 0 to 99 map to the years 1900 to 1999
    // so set year explicitly with setFullYear.
    var result = new Date(0);
    result.setFullYear(dirtyDate.getUTCFullYear(), dirtyDate.getUTCMonth(), dirtyDate.getUTCDate());
    result.setHours(dirtyDate.getUTCHours(), dirtyDate.getUTCMinutes(), dirtyDate.getUTCSeconds(), dirtyDate.getUTCMilliseconds());
    return result;
  }
  return new Date(timestamp + time + offset);
}
var patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
var dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
var timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
var timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function splitDateString(dateString) {
  var dateStrings = {};
  var array = dateString.split(patterns.dateTimeDelimiter);
  var timeString;

  // The regex match should only return at maximum two array elements.
  // [date], [time], or [date, time].
  if (array.length > 2) {
    return dateStrings;
  }
  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];
    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(dateStrings.date.length, dateString.length);
    }
  }
  if (timeString) {
    var token = patterns.timezone.exec(timeString);
    if (token) {
      dateStrings.time = timeString.replace(token[1], '');
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }
  return dateStrings;
}
function parseYear(dateString, additionalDigits) {
  var regex = new RegExp('^(?:(\\d{4}|[+-]\\d{' + (4 + additionalDigits) + '})|(\\d{2}|[+-]\\d{' + (2 + additionalDigits) + '})$)');
  var captures = dateString.match(regex);
  // Invalid ISO-formatted year
  if (!captures) return {
    year: NaN,
    restDateString: ''
  };
  var year = captures[1] ? parseInt(captures[1]) : null;
  var century = captures[2] ? parseInt(captures[2]) : null;

  // either year or century is null, not both
  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}
function parseDate(dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) return new Date(NaN);
  var captures = dateString.match(dateRegex);
  // Invalid ISO-formatted string
  if (!captures) return new Date(NaN);
  var isWeekDate = !!captures[4];
  var dayOfYear = parseDateUnit(captures[1]);
  var month = parseDateUnit(captures[2]) - 1;
  var day = parseDateUnit(captures[3]);
  var week = parseDateUnit(captures[4]);
  var dayOfWeek = parseDateUnit(captures[5]) - 1;
  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }
    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    var date = new Date(0);
    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }
    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}
function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}
function parseTime(timeString) {
  var captures = timeString.match(timeRegex);
  if (!captures) return NaN; // Invalid ISO-formatted time

  var hours = parseTimeUnit(captures[1]);
  var minutes = parseTimeUnit(captures[2]);
  var seconds = parseTimeUnit(captures[3]);
  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }
  return hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute + seconds * 1000;
}
function parseTimeUnit(value) {
  return value && parseFloat(value.replace(',', '.')) || 0;
}
function parseTimezone(timezoneString) {
  if (timezoneString === 'Z') return 0;
  var captures = timezoneString.match(timezoneRegex);
  if (!captures) return 0;
  var sign = captures[1] === '+' ? -1 : 1;
  var hours = parseInt(captures[2]);
  var minutes = captures[3] && parseInt(captures[3]) || 0;
  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }
  return sign * (hours * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInHour + minutes * _constants_index_js__WEBPACK_IMPORTED_MODULE_2__.millisecondsInMinute);
}
function dayOfISOWeekYear(isoWeekYear, week, day) {
  var date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  var fourthOfJanuaryDay = date.getUTCDay() || 7;
  var diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}

// Validation functions

// February is null to handle the leap year (using ||)
var daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}
function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}
function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}
function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }
  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}
function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/subMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/subMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subMilliseconds)
/* harmony export */ });
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ "./node_modules/date-fns/esm/addMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */
function subMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (argument instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      // eslint-disable-next-line no-console
      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}

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

/***/ }),

/***/ "./src/DOMModule.js":
/*!**************************!*\
  !*** ./src/DOMModule.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DOMModule: () => (/* binding */ DOMModule)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/parseISO/index.js");
/* harmony import */ var _ProjectModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectModule */ "./src/ProjectModule.js");
/* harmony import */ var _TaskModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TaskModule */ "./src/TaskModule.js");
/* harmony import */ var _LocalStorageModule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LocalStorageModule */ "./src/LocalStorageModule.js");







// DOM module
const DOMModule = (function () {
  function createMainDiv() {
    const body = document.querySelector("body");
    const mainDiv = document.createElement("div");
    mainDiv.classList.add("main");
    body.append(mainDiv);

    // Light/Dark mode switcher
    const html = document.querySelector("html");
    html.classList.add("dark-mode");
    const modeToggleButton = document.createElement("div");
    modeToggleButton.setAttribute("id", "toggle-mode-button");
    modeToggleButton.classList.add("dark");
    mainDiv.append(modeToggleButton);

    const modeToggleIcon = document.createElement("span");
    modeToggleIcon.classList.add("material-symbols-outlined");
    modeToggleIcon.innerHTML = "dark_mode";
    modeToggleButton.append(modeToggleIcon);

    modeToggleButton.addEventListener("click", () => {
      if (modeToggleButton.classList.contains("light")) {
        modeToggleButton.classList.remove("light");
        modeToggleButton.classList.add("dark");
        modeToggleIcon.innerHTML = "dark_mode";
        html.classList.remove("light-mode");
        html.classList.add("dark-mode");
      } else {
        modeToggleButton.classList.remove("dark");
        modeToggleButton.classList.add("light");
        modeToggleIcon.innerHTML = "light_mode";
        html.classList.remove("dark-mode");
        html.classList.add("light-mode");
      }
    });
  }

  const createDialogs = (function () {
    const body = document.querySelector("body");
    // newProjectDialogHandler();
    // newTaskDialogHandler();

    function createTaskDeleteDialog() {
      const taskDeleteDialog = document.createElement("dialog");
      taskDeleteDialog.classList.add("task-delete", "hidden");

      const deleteConfirmForm = document.createElement("form");
      taskDeleteDialog.append(deleteConfirmForm);

      const deleteConfirmText = document.createElement("div");
      deleteConfirmText.classList.add("confirm-text");
      deleteConfirmText.textContent =
        "Are you sure you want to delete this task?";
      deleteConfirmForm.append(deleteConfirmText);

      const deleteConfirmButton = document.createElement("button");
      deleteConfirmButton.setAttribute("type", "submit");
      deleteConfirmButton.textContent = "Confirm";
      deleteConfirmForm.append(deleteConfirmButton);

      const deleteCancelButton = document.createElement("button");
      deleteCancelButton.setAttribute("type", "close");
      deleteCancelButton.textContent = "Cancel";
      deleteConfirmForm.append(deleteCancelButton);

      body.append(taskDeleteDialog);
    }

    function createProjectDeleteDialog() {
      const projectDeleteDialog = document.createElement("dialog");
      projectDeleteDialog.classList.add("project-delete", "hidden");

      const deleteConfirmForm = document.createElement("form");
      projectDeleteDialog.append(deleteConfirmForm);

      const deleteConfirmText = document.createElement("div");
      deleteConfirmText.classList.add("confirm-text");
      deleteConfirmText.textContent =
        "Are you sure you want to delete the project? All tasks that belong to this project will be deleted too.";
      deleteConfirmForm.append(deleteConfirmText);

      const deleteConfirmButton = document.createElement("button");
      deleteConfirmButton.setAttribute("type", "submit");
      deleteConfirmButton.textContent = "Confirm";
      deleteConfirmForm.append(deleteConfirmButton);

      const deleteCancelButton = document.createElement("button");
      deleteCancelButton.setAttribute("type", "close");
      deleteCancelButton.textContent = "Cancel";
      deleteConfirmForm.append(deleteCancelButton);

      body.append(projectDeleteDialog);
    }

    function newProjectDialogHandler() {
      const newProjectDialog = createProjectDialog();
      const newProjectDialogForm = createProjectDialogForm();

      function createProjectDialog() {
        const newProjectDialog = document.createElement("dialog");
        newProjectDialog.classList.add("new-project", "hidden");
        body.append(newProjectDialog);
        return newProjectDialog;
      }

      function createProjectDialogForm() {
        const newProjectDialogForm = document.createElement("form");
        newProjectDialog.append(newProjectDialogForm);
        newProjectDialogForm.addEventListener("submit", () => {
          const projectName = document.querySelector(
            "dialog.new-project > form input#project-name",
          );
          const projectColor = document.querySelector(
            "dialog.new-project > form input#project-color",
          );
          _ProjectModule__WEBPACK_IMPORTED_MODULE_0__.ProjectModule.createProject(projectName.value, projectColor.value);
          DOMModule.createLeftDiv.createProjects(
            _ProjectModule__WEBPACK_IMPORTED_MODULE_0__.ProjectModule.getProjectObjects(),
          );
          DOMModule.createDialogs.newTaskDialogHandler();
        });

        const dialogName = document.createElement("div");
        dialogName.classList.add("project-dialog-name");
        dialogName.textContent = "New Project";
        newProjectDialogForm.append(dialogName);

        const inputContainer = document.createElement("div");
        inputContainer.classList.add("input-container");
        newProjectDialogForm.append(inputContainer);

        const nameFieldDiv = document.createElement("div");
        nameFieldDiv.classList.add("project-name-field-div");
        inputContainer.append(nameFieldDiv);

        const nameFieldLabel = document.createElement("label");
        nameFieldLabel.textContent = "Name*";
        nameFieldLabel.setAttribute("for", "project-name");
        nameFieldDiv.append(nameFieldLabel);

        const nameFieldInput = document.createElement("input");
        nameFieldInput.textContent = "Name";
        nameFieldInput.setAttribute("type", "text");
        nameFieldInput.setAttribute("id", "project-name");
        nameFieldInput.setAttribute("placeholder", "Awesome project...");
        nameFieldInput.setAttribute("required", "required");
        nameFieldDiv.append(nameFieldInput);

        const colorFieldDiv = document.createElement("div");
        colorFieldDiv.classList.add("project-color-field-div");
        inputContainer.append(colorFieldDiv);

        const colorFieldLabel = document.createElement("label");
        colorFieldLabel.textContent = "Color";
        colorFieldLabel.setAttribute("for", "project-color");
        colorFieldDiv.append(colorFieldLabel);

        const colorFieldInput = document.createElement("input");
        colorFieldInput.textContent = "Color";
        colorFieldInput.setAttribute("type", "color");
        colorFieldInput.setAttribute("id", "project-color");
        colorFieldDiv.append(colorFieldInput);

        const submitProjectButton = document.createElement("button");
        submitProjectButton.setAttribute("type", "submit");
        submitProjectButton.textContent = "Save";
        newProjectDialogForm.append(submitProjectButton);

        const closeProjectDialogDiv = document.createElement("div");
        closeProjectDialogDiv.classList.add("close-project-dialog");
        newProjectDialogForm.append(closeProjectDialogDiv);

        const closeProjectDialogSpan = document.createElement("span");
        closeProjectDialogSpan.classList.add("material-symbols-outlined");
        closeProjectDialogSpan.textContent = "close";
        closeProjectDialogDiv.append(closeProjectDialogSpan);

        // Add close animation on Save and Close
        handleCloseAnimation(
          newProjectDialogForm,
          newProjectDialog,
          "submit",
          newProjectDialogForm,
        );
        handleCloseAnimation(
          closeProjectDialogSpan,
          newProjectDialog,
          "click",
          newProjectDialogForm,
        );

        return newProjectDialogForm;
      }
    }

    function newTaskDialogHandler() {
      const existingTaskDialog = document.querySelector(".new-task");
      if (existingTaskDialog) {
        existingTaskDialog.remove();
      }

      const newTaskDialog = createTaskDialog();
      const newTaskDialogForm = createTaskDialogForm();

      function createTaskDialog() {
        const newTaskDialog = document.createElement("dialog");
        newTaskDialog.classList.add("new-task", "hidden");
        body.append(newTaskDialog);
        return newTaskDialog;
      }

      function createTaskDialogForm() {
        const existingTaskDialogForm =
          document.querySelector(".new-task > form");
        if (existingTaskDialogForm) {
          existingTaskDialogForm.remove();
        }
        const newTaskDialogForm = document.createElement("form");
        newTaskDialog.append(newTaskDialogForm);
        newTaskDialogForm.addEventListener("submit", () => {
          const taskProject = document.querySelector(
            "dialog.new-task > form #task-project",
          );
          const taskTitle = document.querySelector(
            "dialog.new-task > form #task-title",
          );
          const taskNotes = document.querySelector(
            "dialog.new-task > form #task-notes",
          );
          // const taskPriority = document.querySelector('dialog.new-task > form #task-priority');
          const taskDate = document.querySelector(
            "dialog.new-task > form #task-date",
          );
          _TaskModule__WEBPACK_IMPORTED_MODULE_1__.TaskModule.createTask(
            taskProject.value,
            taskTitle.value,
            taskNotes.value,
            taskDate.value,
          );

          DOMModule.createRightDiv.createTasks(
            _TaskModule__WEBPACK_IMPORTED_MODULE_1__.TaskModule.getProjectTasks(
              _TaskModule__WEBPACK_IMPORTED_MODULE_1__.TaskModule.getActiveProject(),
              _TaskModule__WEBPACK_IMPORTED_MODULE_1__.TaskModule.getTasksFromActiveView(),
            ),
          );
        });

        const dialogName = document.createElement("div");
        dialogName.classList.add("task-dialog-name");
        dialogName.textContent = "New Task";
        newTaskDialogForm.append(dialogName);

        const today = new Date();
        const formatteDate = today.toISOString().split("T")[0];

        const newTaskDialogFieldsTemplate = [
          {
            element_type: "select",
            div_class: "task-project-field-div",
            element_id: "task-project",
            input_type: "text",
            label: "Project",
            textContent: "Project",
            select_options: _ProjectModule__WEBPACK_IMPORTED_MODULE_0__.ProjectModule.getProjectValues(),
            cursor_style: "pointer",
          },
          {
            element_type: "input",
            div_class: "task-title-field-div",
            element_id: "task-title",
            input_type: "text",
            label: "Title *",
            textContent: "Title",
            text_placeholder: "Read a book",
            required: "required",
          },
          {
            element_type: "textarea",
            div_class: "task-notes-field-div",
            element_id: "task-notes",
            input_type: "",
            label: "Notes",
            textContent: "",
            text_placeholder: "At least a page",
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
            element_type: "input",
            div_class: "task-date-field-div",
            element_id: "task-date",
            input_type: "date",
            label: "Date *",
            textContent: "Date",
            required: "required",
            value: formatteDate,
          },
        ];

        newTaskDialogFieldsTemplate.forEach((element) => {
          const fieldDiv = document.createElement("div");
          fieldDiv.classList.add(element.div_class);
          newTaskDialogForm.append(fieldDiv);

          const fieldLabel = document.createElement("label");
          fieldLabel.textContent = element.label;
          fieldLabel.setAttribute("for", element.element_id);
          fieldDiv.append(fieldLabel);

          const fieldInput = document.createElement(element.element_type);
          fieldInput.textContent = element.textContent;
          fieldInput.setAttribute("type", element.input_type);
          fieldInput.setAttribute("id", element.element_id);
          fieldInput.setAttribute("placeholder", element.text_placeholder);
          fieldInput.setAttribute(element.required, element.required);
          if (element.value) {
            fieldInput.value = element.value;
          }
          fieldInput.style.cursor = element.cursor_style;
          fieldDiv.append(fieldInput);

          if (element.element_type === "select") {
            element.select_options.forEach((item) => {
              const option = document.createElement("option");
              option.setAttribute("value", item);
              option.textContent = item;
              fieldInput.append(option);
              if (item === element.select_default) {
                option.setAttribute("selected", "");
              }
            });
          }
        });

        const submitTaskButton = document.createElement("button");
        submitTaskButton.setAttribute("type", "submit");
        submitTaskButton.textContent = "Save";
        newTaskDialogForm.append(submitTaskButton);

        const closeTaskDialogDiv = document.createElement("div");
        closeTaskDialogDiv.classList.add("close-task-dialog");
        newTaskDialogForm.append(closeTaskDialogDiv);

        const closeTaskDialogSpan = document.createElement("span");
        closeTaskDialogSpan.classList.add("material-symbols-outlined");
        closeTaskDialogSpan.textContent = "close";
        closeTaskDialogDiv.append(closeTaskDialogSpan);

        // Add close animation on Save and Close
        handleCloseAnimation(
          newTaskDialogForm,
          newTaskDialog,
          "submit",
          newTaskDialogForm,
        );
        handleCloseAnimation(
          closeTaskDialogSpan,
          newTaskDialog,
          "click",
          newTaskDialogForm,
        );
      }
    }

    function editTaskDialogHandler(taskId) {
      const existingTaskDialog = document.querySelector(".edit-task");
      if (existingTaskDialog) {
        existingTaskDialog.remove();
      }

      const editTaskDialog = createEditTaskDialog();
      const editTaskDialogForm = createEditTaskDialogForm();

      function createEditTaskDialog() {
        const newTaskDialog = document.createElement("dialog");
        newTaskDialog.classList.add("edit-task", "hidden");
        body.append(newTaskDialog);
        return newTaskDialog;
      }

      function createEditTaskDialogForm() {
        const existingTaskDialogForm =
          document.querySelector(".edit-task > form");
        if (existingTaskDialogForm) {
          existingTaskDialogForm.remove();
        }
        const editTaskDialogForm = document.createElement("form");
        editTaskDialog.append(editTaskDialogForm);

        editTaskDialogForm.addEventListener("submit", () => {
          const taskProject = document.querySelector(
            "dialog.edit-task > form #task-project",
          );
          const taskTitle = document.querySelector(
            "dialog.edit-task > form #task-title",
          );
          const taskNotes = document.querySelector(
            "dialog.edit-task > form #task-notes",
          );
          // const taskPriority = document.querySelector('dialog.new-task > form #task-priority');
          const taskDate = document.querySelector(
            "dialog.edit-task > form #task-date",
          );
          _TaskModule__WEBPACK_IMPORTED_MODULE_1__.TaskModule.updateTask(
            taskProject.value,
            taskTitle.value,
            taskNotes.value,
            taskDate.value,
            taskId,
          );

          DOMModule.createRightDiv.createTasks(
            _TaskModule__WEBPACK_IMPORTED_MODULE_1__.TaskModule.getProjectTasks(
              _TaskModule__WEBPACK_IMPORTED_MODULE_1__.TaskModule.getActiveProject(),
              _TaskModule__WEBPACK_IMPORTED_MODULE_1__.TaskModule.getTasksFromActiveView(),
            ),
          );
        });

        const dialogName = document.createElement("div");
        dialogName.classList.add("task-dialog-name");
        dialogName.textContent = "Edit Task";
        editTaskDialogForm.append(dialogName);

        const taskObject = _TaskModule__WEBPACK_IMPORTED_MODULE_1__.TaskModule.findObjectById(taskId);

        const newTaskDialogFieldsTemplate = [
          {
            element_type: "select",
            div_class: "task-project-field-div",
            element_id: "task-project",
            input_type: "text",
            label: "Project",
            textContent: "Project",
            select_options: _ProjectModule__WEBPACK_IMPORTED_MODULE_0__.ProjectModule.getProjectValues(),
            cursor_style: "pointer",
            value: "Math",
          },
          {
            element_type: "input",
            div_class: "task-title-field-div",
            element_id: "task-title",
            input_type: "text",
            label: "Title *",
            textContent: "Title",
            text_placeholder: "Read a book",
            required: "required",
            value: taskObject.title,
          },
          {
            element_type: "textarea",
            div_class: "task-notes-field-div",
            element_id: "task-notes",
            input_type: "",
            label: "Notes",
            textContent: "",
            text_placeholder: "At least a page",
            value: taskObject.notes,
          },
          {
            element_type: "input",
            div_class: "task-date-field-div",
            element_id: "task-date",
            input_type: "date",
            label: "Date *",
            textContent: "Date",
            required: "required",
            value: taskObject.date,
          },
        ];

        newTaskDialogFieldsTemplate.forEach((element) => {
          const fieldDiv = document.createElement("div");
          fieldDiv.classList.add(element.div_class);
          editTaskDialogForm.append(fieldDiv);

          const fieldLabel = document.createElement("label");
          fieldLabel.textContent = element.label;
          fieldLabel.setAttribute("for", element.element_id);
          fieldDiv.append(fieldLabel);

          const fieldInput = document.createElement(element.element_type);
          fieldInput.textContent = element.textContent;
          fieldInput.setAttribute("type", element.input_type);
          fieldInput.setAttribute("id", element.element_id);
          fieldInput.setAttribute("placeholder", element.text_placeholder);
          fieldInput.setAttribute(element.required, element.required);
          if (element.value) {
            fieldInput.value = element.value;
          }
          fieldInput.style.cursor = element.cursor_style;
          fieldDiv.append(fieldInput);

          if (element.element_type === "select") {
            element.select_options.forEach((item) => {
              const option = document.createElement("option");
              option.setAttribute("value", item);
              option.textContent = item;
              fieldInput.append(option);
              if (item === taskObject.projectName) {
                option.setAttribute("selected", "selected");
              }
            });
          }
        });

        const submitTaskButton = document.createElement("button");
        submitTaskButton.setAttribute("type", "submit");
        submitTaskButton.textContent = "Save";
        editTaskDialogForm.append(submitTaskButton);

        const closeTaskDialogDiv = document.createElement("div");
        closeTaskDialogDiv.classList.add("close-task-dialog");
        editTaskDialogForm.append(closeTaskDialogDiv);

        const closeTaskDialogSpan = document.createElement("span");
        closeTaskDialogSpan.classList.add("material-symbols-outlined");
        closeTaskDialogSpan.textContent = "close";
        closeTaskDialogDiv.append(closeTaskDialogSpan);

        // Add close animation on Save and Close
        handleCloseAnimation(
          editTaskDialogForm,
          editTaskDialog,
          "submit",
          editTaskDialogForm,
        );
        handleCloseAnimation(
          closeTaskDialogSpan,
          editTaskDialog,
          "click",
          editTaskDialogForm,
        );
      }
    }

    // Close animation on ESC
    function addEscEvenListener() {
      document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
          event.preventDefault();
          const openDialog = document.querySelector("dialog[open]");
          if (openDialog) {
            closeDialog(openDialog);
          }
        }
      });
    }

    // Close animation handler
    function handleCloseAnimation(eventElement, dialog, eventType, form) {
      eventElement.addEventListener(eventType, (event) => {
        event.preventDefault();

        const projectName = document.querySelector("#project-name");
        projectName.value = "";

        const taskTitle = document.querySelector("#task-title");
        taskTitle.value = "";

        const taskNotes = document.querySelector("#task-notes");
        taskNotes.value = "";

        // form.reset();
        closeDialog(dialog);
      });
    }

    // Close dialog
    function closeDialog(dialog) {
      dialog.classList.add("hidden");
      dialog.classList.remove("displayed");
      dialog.addEventListener("transitionend", function handleTransitionEnd() {
        dialog.close();
        dialog.removeEventListener("transitionend", handleTransitionEnd);
      });
    }

    return {
      newProjectDialogHandler,
      newTaskDialogHandler,
      addEscEvenListener,
      createTaskDeleteDialog,
      createProjectDeleteDialog,
      handleCloseAnimation,
      editTaskDialogHandler,
    };
  })();

  // Handler for left div
  const createLeftDiv = (function () {
    // Create layout structure
    function createStructure() {
      const mainDiv = document.querySelector(".main");
      const leftDiv = document.createElement("div");
      leftDiv.classList.add("left");
      mainDiv.append(leftDiv);

      const leftFirstDiv = document.createElement("div");
      leftFirstDiv.classList.add("left-first-section");
      leftFirstDiv.dataset.active = "Today";

      leftDiv.append(leftFirstDiv);

      const firstSectionLabel = document.createElement("p");
      firstSectionLabel.textContent = "Tasks";
      leftFirstDiv.append(firstSectionLabel);

      const firstSectionList = document.createElement("ul");
      firstSectionList.classList.add("views");
      leftFirstDiv.append(firstSectionList);

      const firstSectionLineItems = [
        {
          element_type: "li",
          element_class: "task-filter",
          dataset_active: "true",
          child_elements: [
            {
              element_type: "div",
              element_class: "image",
              element_innerHtml:
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>calendar-today-outline</title><path d="M19 3H18V1H16V3H8V1H6V3H5C3.9 3 3 3.89 3 5V19C3 20.11 3.9 21 5 21H19C20.11 21 21 20.11 21 19V5C21 3.89 20.11 3 19 3M19 19H5V9H19V19M19 7H5V5H19M7 11H12V16H7" /></svg>',
            },
            {
              element_type: "p",
              element_textContent: "Today",
            },
          ],
          function: "getTodayTasks",
        },
        {
          element_type: "li",
          element_class: "task-filter",
          dataset_active: "false",
          child_elements: [
            {
              element_type: "div",
              element_class: "image",
              element_innerHtml:
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>calendar-start-outline</title><path d="M13 18L9 14V17H4V14H2V22H4V19H9V22L13 18M19 3H18V1H16V3H8V1H6V3H5C3.9 3 3 3.9 3 5V12H5V9H19V19H14.8L12.8 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M5 7V5H19V7H5Z" /></svg>',
            },
            {
              element_type: "p",
              element_textContent: "Tomorrow",
            },
          ],
          function: "getTomorrowTasks",
        },
        {
          element_type: "li",
          element_class: "task-filter",
          dataset_active: "false",
          child_elements: [
            {
              element_type: "div",
              element_class: "image",
              element_innerHtml:
                '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>calendar-month-outline</title><path d="M7 11H9V13H7V11M21 5V19C21 20.11 20.11 21 19 21H5C3.89 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3H6V1H8V3H16V1H18V3H19C20.11 3 21 3.9 21 5M5 7H19V5H5V7M19 19V9H5V19H19M15 13V11H17V13H15M11 13V11H13V13H11M7 15H9V17H7V15M15 17V15H17V17H15M11 17V15H13V17H11Z" /></svg>',
            },
            {
              element_type: "p",
              element_textContent: "All",
            },
          ],
          function: "getAllTasks",
        },
      ];

      firstSectionLineItems.forEach((element) => {
        const lineItem = document.createElement(element.element_type);
        lineItem.classList.add(element.element_class);
        lineItem.dataset.active = element.dataset_active;
        firstSectionList.append(lineItem);
        if (element.child_elements) {
          element.child_elements.forEach((child_element) => {
            const lineItemChild = document.createElement(
              child_element.element_type,
            );
            lineItemChild.classList.add(child_element.element_class);
            if (child_element.element_innerHtml) {
              lineItemChild.innerHTML = `${child_element.element_innerHtml}`;
            }
            if (child_element.element_textContent) {
              lineItemChild.textContent = child_element.element_textContent;
            }
            lineItem.append(lineItemChild);
          });
        }
        const tasksFunction = _TaskModule__WEBPACK_IMPORTED_MODULE_1__.TaskModule[element.function];
        lineItem.addEventListener("click", () => {
          DOMModule.createRightDiv.createTasks(
            _TaskModule__WEBPACK_IMPORTED_MODULE_1__.TaskModule.getProjectTasks(
              _TaskModule__WEBPACK_IMPORTED_MODULE_1__.TaskModule.getActiveProject(),
              tasksFunction(),
            ),
          );

          const rightFirstHeader = document.querySelector(
            ".right-first-header",
          );
          rightFirstHeader.textContent =
            _TaskModule__WEBPACK_IMPORTED_MODULE_1__.TaskModule.getActiveView().charAt(0).toUpperCase() +
            _TaskModule__WEBPACK_IMPORTED_MODULE_1__.TaskModule.getActiveView().slice(1);
          if (_TaskModule__WEBPACK_IMPORTED_MODULE_1__.TaskModule.getActiveProject()) {
            rightFirstHeader.textContent += ` - ${_TaskModule__WEBPACK_IMPORTED_MODULE_1__.TaskModule.getActiveProject()}`;
          }
        });
      });

      const animationDiv = document.createElement("div");
      animationDiv.classList.add("task-animation", "start-today");
      firstSectionList.append(animationDiv);

      const leftSecondDiv = document.createElement("div");
      leftSecondDiv.classList.add("left-second-section");
      leftDiv.append(leftSecondDiv);

      const secondSectionLabel = document.createElement("p");
      secondSectionLabel.textContent = "Projects";
      leftSecondDiv.append(secondSectionLabel);

      const secondSectionList = document.createElement("ul");
      secondSectionList.classList.add("second-section-list");
      leftSecondDiv.append(secondSectionList);

      // Update data-active property on .task-filer and on parent .left-first-section
      Array.from(document.getElementsByClassName("task-filter")).forEach(
        (item) => {
          item.onclick = () => {
            // leftFirstDiv.dataset.active = item.textContent;
            Array.from(document.getElementsByClassName("task-filter")).forEach(
              (item2) => {
                if (item === item2) {
                  item2.dataset.active = "true";
                } else {
                  item2.dataset.active = "false";
                }
              },
            );
          };
        },
      );
    }

    // Render projects in .second-section-list
    function createProjects(projects) {
      const projectLineItems = document.querySelectorAll(".project");
      if (projectLineItems) {
        projectLineItems.forEach((item) => {
          item.remove();
        });
      }

      projects.forEach((element) => {
        const secondSectionList = document.querySelector(
          ".second-section-list",
        );
        const projectLineItem = document.createElement("li");
        projectLineItem.classList.add("project");
        projectLineItem.dataset.active = element.active;
        secondSectionList.append(projectLineItem);

        // const circle = document.createElement('div');
        // circle.classList.add('circle');
        // circle.style.backgroundColor = element.color;
        // projectLineItem.append(circle);
        const icon = document.createElement("div");
        icon.classList.add("icon");
        icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="0.5" stroke="var(--border-dark)">
                <title>checkbox-multiple-blank-circle</title>
                <path d="M14,2A8,8 0 0,0 6,10A8,8 0 0,0 14,18A8,8 0 0,0 22,10A8,8 0 0,0 14,2M4.93,5.82C3.08,7.34 2,9.61 2,12A8,8 0 0,0 10,20C10.64,20 11.27,19.92 11.88,19.77C10.12,19.38 8.5,18.5 7.17,17.29C5.22,16.25 4,14.21 4,12C4,11.7 4.03,11.41 4.07,11.11C4.03,10.74 4,10.37 4,10C4,8.56 4.32,7.13 4.93,5.82Z"/>
                </svg>`;
        // icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>leaf</title><path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" /></svg>`;
        // icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>leaf</title><path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z" /></svg>`;

        icon.style.fill = element.color;
        projectLineItem.append(icon);

        const projectLineItemName = document.createElement("div");
        projectLineItemName.textContent = element.name;
        projectLineItem.append(projectLineItemName);

        const projectLineItemDeleteButton = document.createElement("div");
        projectLineItemDeleteButton.classList.add("delete-project-button");
        projectLineItemDeleteButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>delete-outline</title><path d="M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z" /></svg>`;
        projectLineItem.append(projectLineItemDeleteButton);

        projectLineItemDeleteButton.addEventListener("click", () => {
          const confirmProjectDeleteDialog =
            document.querySelector(".project-delete");
          const confirmProjectDeleteForm = document.querySelector(
            ".project-delete > form",
          );
          confirmProjectDeleteDialog.showModal();
          confirmProjectDeleteDialog.classList.remove("hidden");
          confirmProjectDeleteDialog.classList.add("displayed");

          const confirmProjectDeleteButton = document.querySelector(
            '.project-delete > form > button[type="submit"]',
          );
          const cancelProjectDeleteButton = document.querySelector(
            '.project-delete > form > button[type="close"]',
          );
          confirmProjectDeleteButton.addEventListener("click", () => {
            // TaskModule.deleteTask(element.id);
            // DOMModule.createDialogs.handleCloseAnimation(confirmTaskDeleteForm, confirmTaskDeleteDialog, 'submit', confirmTaskDeleteForm);
            // DOMModule.createRightDiv.createTasks(TaskModule.getProjectTasks(TaskModule.getActiveProject(), TaskModule.getTasksFromActiveView()));
            _ProjectModule__WEBPACK_IMPORTED_MODULE_0__.ProjectModule.deleteProject(element.id);
            DOMModule.createDialogs.handleCloseAnimation(
              confirmProjectDeleteForm,
              confirmProjectDeleteDialog,
              "submit",
              confirmProjectDeleteForm,
            );
            DOMModule.createLeftDiv.createProjects(
              _ProjectModule__WEBPACK_IMPORTED_MODULE_0__.ProjectModule.getProjectObjects(),
            );
            _TaskModule__WEBPACK_IMPORTED_MODULE_1__.TaskModule.deleteTaskByProjectId(element.id);

            if (_TaskModule__WEBPACK_IMPORTED_MODULE_1__.TaskModule.getActiveProject() === element.name) {
              _TaskModule__WEBPACK_IMPORTED_MODULE_1__.TaskModule.changeActiveProject("");
              const rightFirstHeader = document.querySelector(
                ".right-first-header",
              );
              rightFirstHeader.textContent =
                _TaskModule__WEBPACK_IMPORTED_MODULE_1__.TaskModule.getActiveView().charAt(0).toUpperCase() +
                _TaskModule__WEBPACK_IMPORTED_MODULE_1__.TaskModule.getActiveView().slice(1);
            }
            // DOMModule.createDialogs.newTaskDialogHandler();
            DOMModule.createRightDiv.createTasks(
              _TaskModule__WEBPACK_IMPORTED_MODULE_1__.TaskModule.getProjectTasks(
                _TaskModule__WEBPACK_IMPORTED_MODULE_1__.TaskModule.getActiveProject(),
                _TaskModule__WEBPACK_IMPORTED_MODULE_1__.TaskModule.getTasksFromActiveView(),
              ),
            );
          });

          cancelProjectDeleteButton.addEventListener("click", () => {
            DOMModule.createDialogs.handleCloseAnimation(
              confirmProjectDeleteForm,
              confirmProjectDeleteDialog,
              "submit",
              confirmProjectDeleteForm,
            );
          });
        });

        projectLineItemDeleteButton.addEventListener("mouseover", () => {
          projectLineItemDeleteButton.classList.add("hovered");
          projectLineItem.classList.add("hovered-delete");
        });

        projectLineItemDeleteButton.addEventListener("mouseleave", () => {
          projectLineItemDeleteButton.classList.remove("hovered");
          projectLineItem.classList.remove("hovered-delete");
        });

        projectLineItem.addEventListener("click", () => {
          const deleteHovered = document.querySelector(
            ".delete-project-button.hovered",
          );
          if (!deleteHovered) {
            if (
              _TaskModule__WEBPACK_IMPORTED_MODULE_1__.TaskModule.getActiveProject() === projectLineItemName.textContent
            ) {
              _TaskModule__WEBPACK_IMPORTED_MODULE_1__.TaskModule.changeActiveProject("");
            } else {
              _TaskModule__WEBPACK_IMPORTED_MODULE_1__.TaskModule.changeActiveProject(projectLineItemName.textContent);
            }
            DOMModule.createRightDiv.createTasks(
              _TaskModule__WEBPACK_IMPORTED_MODULE_1__.TaskModule.getProjectTasks(
                _TaskModule__WEBPACK_IMPORTED_MODULE_1__.TaskModule.getActiveProject(),
                _TaskModule__WEBPACK_IMPORTED_MODULE_1__.TaskModule.getTasksFromActiveView(),
              ),
            );

            const rightFirstHeader = document.querySelector(
              ".right-first-header",
            );
            rightFirstHeader.textContent =
              _TaskModule__WEBPACK_IMPORTED_MODULE_1__.TaskModule.getActiveView().charAt(0).toUpperCase() +
              _TaskModule__WEBPACK_IMPORTED_MODULE_1__.TaskModule.getActiveView().slice(1);
            if (_TaskModule__WEBPACK_IMPORTED_MODULE_1__.TaskModule.getActiveProject()) {
              rightFirstHeader.textContent += ` - ${_TaskModule__WEBPACK_IMPORTED_MODULE_1__.TaskModule.getActiveProject()}`;
            }
          }
        });
      });

      const existingAnimationDiv2 = document.querySelector(
        ".second-section-list > .task-animation",
      );
      if (existingAnimationDiv2) {
        existingAnimationDiv2.remove();
      }

      const secondSectionList = document.querySelector(".second-section-list");
      const animationDiv2 = document.createElement("div");
      animationDiv2.classList.add("task-animation", "start-first");
      secondSectionList.append(animationDiv2);

      // Update data-active property on .project
      Array.from(document.getElementsByClassName("project")).forEach((item) => {
        item.onclick = () => {
          const deleteHovered = document.querySelector(
            ".delete-project-button.hovered",
          );
          if (!deleteHovered) {
            Array.from(document.getElementsByClassName("project")).forEach(
              (item2) => {
                if (item === item2) {
                  if (item.dataset.active == "true") {
                    const task_animation =
                      document.querySelector(".start-first");
                    task_animation.style.opacity = "0";
                    item2.classList.remove("font-accent");
                    setTimeout(() => {
                      item2.dataset.active = "false";
                      task_animation.style.opacity = "1";
                    }, 300);
                  } else {
                    item2.dataset.active = "true";
                    item2.classList.add("font-accent");
                  }
                } else {
                  item2.dataset.active = "false";
                  item2.classList.remove("font-accent");
                }
              },
            );
          }
        };
      });
    }

    return {
      createStructure,
      createProjects,
    };
  })();

  // Handler for right div
  const createRightDiv = (function () {
    // Create layout structure
    function createStructure() {
      const mainDiv = document.querySelector(".main");
      const rightDiv = document.createElement("div");
      rightDiv.classList.add("right");
      mainDiv.append(rightDiv);

      const rightFirstHeader = document.createElement("div");
      rightFirstHeader.classList.add("right-first-header");
      rightFirstHeader.textContent = "All";
      rightDiv.append(rightFirstHeader);

      const rightFirstDiv = document.createElement("div");
      rightFirstDiv.classList.add("right-first-section");
      rightDiv.append(rightFirstDiv);
    }

    // Render tasks
    function createTasks(tasks) {
      const taskLineItems = document.querySelectorAll(".task, .task-divider");
      const filler = document.querySelector(".no-tasks-filler");
      if (filler) {
        filler.remove();
      }
      if (taskLineItems) {
        taskLineItems.forEach((item) => {
          item.remove();
        });
      }

      let counter = 0;
      let sub_counter = 0;

      if (tasks.length === 0) {
        const rightFirstSection = document.querySelector(
          ".right-first-section",
        );
        const filler = document.createElement("div");
        filler.classList.add("no-tasks-filler");
        filler.textContent = `Seems like you don't have any tasks here! Whether it is good or bad, only time will tell...`;
        rightFirstSection.append(filler);
      }

      tasks.forEach((element) => {
        const rightFirstSection = document.querySelector(
          ".right-first-section",
        );
        const taskLineItem = document.createElement("div");
        taskLineItem.classList.add("task");
        taskLineItem.classList.add("hidden");
        rightFirstSection.append(taskLineItem);

        const taskLineItemLeftSection = document.createElement("div");
        taskLineItemLeftSection.classList.add("task-left-section");
        if (element.completed === "true") {
          taskLineItemLeftSection.classList.add("checked");
        } else {
          taskLineItemLeftSection.classList.add("unchecked");
        }
        taskLineItemLeftSection.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <title>check-circle-outline</title>
                <!-- Outer circle -->
                <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="0.5" fill="none" />
                
                <!-- Checkmark path -->
                <path d="M7,13.5 L10,16.5 L17,9.5" stroke="currentColor" stroke-width="0.5" fill="none" />
                </svg>`;

        taskLineItem.addEventListener("click", () => {
          if (taskLineItemLeftSection.classList.contains("unchecked")) {
            taskLineItemLeftSection.classList.remove("unchecked");
            taskLineItemLeftSection.classList.add("checked");
            // taskLineItem.style.background = 'blue';

            element.completed = "true";
          } else {
            taskLineItemLeftSection.classList.remove("checked");
            taskLineItemLeftSection.classList.add("unchecked");
            element.completed = "false";
          }
          (0,_LocalStorageModule__WEBPACK_IMPORTED_MODULE_2__.deleteTaskFromLocalStorage)(element);
          (0,_LocalStorageModule__WEBPACK_IMPORTED_MODULE_2__.saveTaskToLocalStorage)(element);
        });

        taskLineItem.append(taskLineItemLeftSection);

        const taskLineItemRightSection = document.createElement("div");
        taskLineItemRightSection.classList.add("task-right-section");

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

        const taskLineItemDivider = document.createElement("div");
        taskLineItemDivider.classList.add("task-divider");
        taskLineItemDivider.classList.add("hidden");
        rightFirstSection.append(taskLineItemDivider);

        const taskFieldsTemplate = [
          {
            div_class: "task-project",
            child_elements: [
              {
                div_class: "task-project-field",
                textContent: element.projectName,
                color: element.projectColor,
              },
            ],
          },
          {
            div_class: "task-title-field",
            textContent: element.title,
          },
          {
            div_class: "task-notes-field",
            textContent: element.notes,
          },
          // {
          //     div_class: 'task-priority-field',
          //     textContent: element.priority,
          // },
          {
            div_class: "task-date-field",
            textContent: (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_4__["default"])(element.date), "EEE, do MMM"),
          },
          {
            div_class: "task-delete-button",
            innerHTML: `<span class="material-symbols-outlined">close</span>`,
          },
          {
            div_class: "task-edit-button",
            innerHTML: `<span class="material-symbols-outlined">edit</span>`,
          },
        ];

        taskFieldsTemplate.forEach((field) => {
          const taskField = document.createElement("div");
          taskField.classList.add(field.div_class);
          taskField.classList.add("hidden");
          if (field.textContent) {
            taskField.textContent = field.textContent;
          }
          if (field.innerHTML) {
            taskField.innerHTML = field.innerHTML;
          }
          if (field.div_class === "task-delete-button") {
            taskField.addEventListener("click", () => {
              const confirmTaskDeleteDialog =
                document.querySelector(".task-delete");
              const confirmTaskDeleteForm = document.querySelector(
                ".task-delete > form",
              );
              confirmTaskDeleteDialog.showModal();
              confirmTaskDeleteDialog.classList.remove("hidden");
              confirmTaskDeleteDialog.classList.add("displayed");

              const confirmTaskDeleteButton = document.querySelector(
                '.task-delete > form > button[type="submit"]',
              );
              const cancelTaskDeleteButton = document.querySelector(
                '.task-delete > form > button[type="close"]',
              );

              confirmTaskDeleteButton.addEventListener("click", () => {
                _TaskModule__WEBPACK_IMPORTED_MODULE_1__.TaskModule.deleteTaskById(element.id);
                DOMModule.createDialogs.handleCloseAnimation(
                  confirmTaskDeleteForm,
                  confirmTaskDeleteDialog,
                  "submit",
                  confirmTaskDeleteForm,
                );
                DOMModule.createRightDiv.createTasks(
                  _TaskModule__WEBPACK_IMPORTED_MODULE_1__.TaskModule.getProjectTasks(
                    _TaskModule__WEBPACK_IMPORTED_MODULE_1__.TaskModule.getActiveProject(),
                    _TaskModule__WEBPACK_IMPORTED_MODULE_1__.TaskModule.getTasksFromActiveView(),
                  ),
                );
              });

              function handleCancelTaskDelete() {
                DOMModule.createDialogs.handleCloseAnimation(
                  confirmTaskDeleteForm,
                  confirmTaskDeleteDialog,
                  "submit",
                  confirmTaskDeleteForm,
                );
                cancelTaskDeleteButton.removeEventListener(
                  "click",
                  handleCancelTaskDelete,
                );
              }

              cancelTaskDeleteButton.addEventListener(
                "click",
                handleCancelTaskDelete,
              );
            });
          }

          if (field.div_class == "task-edit-button") {
            taskField.addEventListener("click", () => {
              DOMModule.createDialogs.editTaskDialogHandler(element.id);
              const editTaskDialog = document.querySelector(".edit-task");
              editTaskDialog.showModal();
              editTaskDialog.classList.add("displayed");
              editTaskDialog.classList.remove("hidden");
            });
          }

          taskField.style.backgroundColor = field.color;
          taskLineItemRightSection.append(taskField);
          if (field.child_elements) {
            field.child_elements.forEach((child_element) => {
              const child_div = document.createElement("div");
              child_div.classList.add(child_element.div_class);
              child_div.textContent = child_element.textContent;
              child_div.style.color = child_element.color;
              child_div.style.borderColor = child_element.color;
              taskField.append(child_div);
            });
          }
          setTimeout(() => {
            taskField.classList.remove("hidden");
          }, 20 * sub_counter);
          sub_counter += 1;
        });
        setTimeout(() => {
          taskLineItem.classList.remove("hidden");
        }, 80 * counter);
        counter += 1;

        setTimeout(() => {
          taskLineItemDivider.classList.remove("hidden");
        }, 100 * counter);
      });
    }

    return {
      createStructure,
      createTasks,
    };
  })();

  const createFooterDiv = (function () {
    function createStructure() {
      const rightDiv = document.querySelector(".right");
      const footerDiv = document.createElement("div");
      footerDiv.classList.add("footer");
      rightDiv.append(footerDiv);

      const footerRightDiv = document.createElement("div");
      footerRightDiv.classList.add("footer-right");
      footerDiv.append(footerRightDiv);
    }

    function createButtons() {
      const leftSecondSection = document.querySelector(".left-second-section");
      const footerRightDiv = document.querySelector(".footer-right");

      const createProjectButton = document.createElement("div");
      createProjectButton.classList.add("create-project");
      leftSecondSection.append(createProjectButton);
      createProjectButton.addEventListener("click", () => {
        const newProjectDialog = document.querySelector(".new-project");
        newProjectDialog.showModal();
        newProjectDialog.classList.add("displayed");
        newProjectDialog.classList.remove("hidden");
      });

      const createProjectButtonIcon = document.createElement("div");
      createProjectButtonIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>`;
      createProjectButton.append(createProjectButtonIcon);

      const createProjectButtonLabel = document.createElement("div");
      createProjectButtonLabel.textContent = "Add Project";
      createProjectButton.append(createProjectButtonLabel);

      const createTaskButton = document.createElement("div");
      createTaskButton.classList.add("create-task");
      footerRightDiv.append(createTaskButton);

      createTaskButton.addEventListener("click", () => {
        const newTaskDialog = document.querySelector(".new-task");
        newTaskDialog.showModal();
        newTaskDialog.classList.add("displayed");
        newTaskDialog.classList.remove("hidden");
      });

      const createTaskButtonContainer = document.createElement("div");
      createTaskButtonContainer.classList.add("create-task-container");
      createTaskButton.append(createTaskButtonContainer);

      const createTaskButtonIcon = document.createElement("div");
      createTaskButtonIcon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>plus</title><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>`;
      createTaskButtonContainer.append(createTaskButtonIcon);

      const createTaskButtonLabel = document.createElement("div");
      createTaskButtonLabel.textContent = "Add Task";
      createTaskButtonContainer.append(createTaskButtonLabel);
    }
    return {
      createStructure,
      createButtons,
    };
  })();

  return {
    createMainDiv,
    createDialogs,
    createLeftDiv,
    createRightDiv,
    createFooterDiv,
  };
})();


/***/ }),

/***/ "./src/LocalStorageModule.js":
/*!***********************************!*\
  !*** ./src/LocalStorageModule.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkProjectsInLocalStorage: () => (/* binding */ checkProjectsInLocalStorage),
/* harmony export */   checkTasksInLocalStorage: () => (/* binding */ checkTasksInLocalStorage),
/* harmony export */   deleteProjectFromLocalStorage: () => (/* binding */ deleteProjectFromLocalStorage),
/* harmony export */   deleteTaskFromLocalStorage: () => (/* binding */ deleteTaskFromLocalStorage),
/* harmony export */   saveProjectToLocalStorage: () => (/* binding */ saveProjectToLocalStorage),
/* harmony export */   saveTaskToLocalStorage: () => (/* binding */ saveTaskToLocalStorage),
/* harmony export */   switchLocalStorageStatus: () => (/* binding */ switchLocalStorageStatus)
/* harmony export */ });
/* eslint-disable no-use-before-define */


// Local Storage Logic
const localStorageStatus = {
  loaded: "false",
};

function switchLocalStorageStatus() {
  if (storageAvailable("localStorage")) {
    if (localStorageStatus.loaded === "false") {
      localStorageStatus.loaded = "true";
      localStorage.setItem("localStorageLoaded", localStorageStatus.loaded);
    }
  }
}

// Local storage for tasks
function saveTaskToLocalStorage(taskObject) {
  if (storageAvailable("localStorage")) {
    localStorage.setItem(`task ${taskObject.id}`, JSON.stringify(taskObject));
    // console.log(JSON.parse(localStorage.getItem('task ' + taskObject.id)));
  }
}

function deleteTaskFromLocalStorage(taskObject) {
  if (storageAvailable("localStorage")) {
    localStorage.removeItem(`task ${taskObject.id}`);
  }
}

function checkTasksInLocalStorage() {
  if (storageAvailable("localStorage")) {
    if (localStorage.getItem("localStorageLoaded")) {
      const tasks = [];

      const keys = Object.values(localStorage);
      keys.forEach((key) => {
        const parsedKey = JSON.parse(key);
        if (parsedKey.title) {
          tasks.push(parsedKey);
        }
      });
      return tasks;
    }
  }
}

// Local sotrage for projects
function saveProjectToLocalStorage(projectObject) {
  if (storageAvailable("localStorage")) {
    localStorage.setItem(
      `project ${projectObject.id}`,
      JSON.stringify(projectObject),
    );
    // console.log(JSON.parse(localStorage.getItem('task ' + taskObject.id)));
  }
}

function deleteProjectFromLocalStorage(projectObject) {
  if (storageAvailable("localStorage")) {
    localStorage.removeItem(`project ${projectObject.id}`);
  }
}

function checkProjectsInLocalStorage() {
  if (storageAvailable("localStorage")) {
    if (localStorage.getItem("localStorageLoaded")) {
      const projects = [];

      const keys = Object.values(localStorage);
      keys.forEach((key) => {
        const parsedKey = JSON.parse(key);
        if (parsedKey.name) {
          projects.push(parsedKey);
        }
      });
      return projects;
    }
  }
}

// Check if local storage is available
function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage &&
      storage.length !== 0
    );
  }
}


/***/ }),

/***/ "./src/ProjectModule.js":
/*!******************************!*\
  !*** ./src/ProjectModule.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProjectModule: () => (/* binding */ ProjectModule)
/* harmony export */ });
/* harmony import */ var _LocalStorageModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LocalStorageModule */ "./src/LocalStorageModule.js");




// Project module
const ProjectModule = (function () {
  let projects = [];

  const storedProjects = (0,_LocalStorageModule__WEBPACK_IMPORTED_MODULE_0__.checkProjectsInLocalStorage)();
  if (storedProjects) {
    projects = storedProjects;
  } else {
    // Mock projects
    projects = [
      {
        id: 1,
        name: "Sport",
        color: "#dab8de",
        active: "false",
      },
      {
        id: 2,
        name: "Math",
        color: "#93c7b4",
        active: "false",
      },
      {
        id: 3,
        name: "Programming",
        color: "#e8ceb5",
        active: "false",
      },
      {
        id: 4,
        name: "Leisure",
        color: "#a6b5ff",
        active: "false",
      },
    ];

    projects.forEach((project) => {
      (0,_LocalStorageModule__WEBPACK_IMPORTED_MODULE_0__.saveProjectToLocalStorage)(project);
    });
  }

  let projectsCount = projects.length;

  // Add new project
  function createProject(name, color) {
    const project = {};
    projectsCount += 1;
    project.id = projectsCount;
    project.name = name;
    project.color = color;

    projects.push(project);
    (0,_LocalStorageModule__WEBPACK_IMPORTED_MODULE_0__.saveProjectToLocalStorage)(project);

    return project;
  }

  // Retrieve list of projects (objects)
  function getProjectObjects() {
    return projects.slice();
  }

  // Retrieve list of project (values)
  function getProjectValues() {
    const projectValues = [];
    projects.forEach((p) => {
      projectValues.push(p.name);
    });

    return projectValues;
  }

  // Retrieve the id of a project that matches the provided name
  function findIdByName(name) {
    const project = projects.find((project) => project.name === name);
    return project ? project.id : null;
  }

  // Retrieve the color of a project that matches the provided name
  function findColorByName(name) {
    const project = projects.find((project) => project.name === name);
    return project ? project.color : null;
  }

  // Delete project
  function deleteProject(projectId) {
    projects.forEach((projectObject) => {
      if (projectObject.id === projectId) {
        (0,_LocalStorageModule__WEBPACK_IMPORTED_MODULE_0__.deleteProjectFromLocalStorage)(projectObject);
      }
    });

    projects = projects.filter((project) => project.id !== projectId);
  }

  return {
    createProject,
    getProjectObjects,
    getProjectValues,
    findIdByName,
    findColorByName,
    deleteProject,
  };
})();


/***/ }),

/***/ "./src/TaskModule.js":
/*!***************************!*\
  !*** ./src/TaskModule.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TaskModule: () => (/* binding */ TaskModule)
/* harmony export */ });
/* harmony import */ var date_fns_format__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns/format */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var _ProjectModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectModule */ "./src/ProjectModule.js");
/* harmony import */ var _LocalStorageModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LocalStorageModule */ "./src/LocalStorageModule.js");






// Task module
const TaskModule = (function () {
  // This should be in different module (DOM module perhaps)
  let active_view = "today";
  let active_project = "";

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

  // Retrieve the object that matches the provided ID
  function findObjectById(taskId) {
    const taskObject = tasks.find((task) => task.id === taskId);
    return taskObject || null;
  }

  function deleteTaskById(taskId) {
    tasks.forEach((taskObject) => {
      if (taskObject.id === taskId) {
        (0,_LocalStorageModule__WEBPACK_IMPORTED_MODULE_1__.deleteTaskFromLocalStorage)(taskObject);
      }
    });

    tasks = tasks.filter((task) => task.id !== taskId);
  }

  function deleteTaskByProjectId(projectId) {
    tasks.forEach((taskObject) => {
      if (taskObject.projectId === projectId) {
        (0,_LocalStorageModule__WEBPACK_IMPORTED_MODULE_1__.deleteTaskFromLocalStorage)(taskObject);
      }
    });

    tasks = tasks.filter((task) => task.projectId !== projectId);
  }

  // const today = new Date();
  // const tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
  // const dayAfterTomorrow = new Date(new Date().getTime() + 48 * 60 * 60 * 1000);

  let tasks = [];

  const storedTasks = (0,_LocalStorageModule__WEBPACK_IMPORTED_MODULE_1__.checkTasksInLocalStorage)();
  if (storedTasks) {
    tasks = storedTasks;
  } else {
    // Mock projects
    tasks = [
      {
        id: 1,
        projectId: 1,
        projectName: "Sport",
        projectColor: "#dab8de",
        title: "Jogging in the park",
        notes: "Aim for a 5 km run. Focus on breathing techniques.",
        priority: "High",
        date: (0,date_fns_format__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date(), "yyyy-MM-dd"),
        completed: "true",
      },
      {
        id: 2,
        projectId: 2,
        projectName: "Math",
        projectColor: "#93c7b4",
        title: "Solving Linear Equations",
        notes: "Work through exercises 3.1 to 3.5 in the textbook.",
        priority: "Medium",
        date: (0,date_fns_format__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date(), "yyyy-MM-dd"),
        completed: "false",
      },
      {
        id: 3,
        projectId: 3,
        projectName: "Programming",
        projectColor: "#e8ceb5",
        title: "Algorithm Optimization",
        notes:
          "Refactor code for efficiency. Focus on reducing time complexity.",
        priority: "Medium",
        date: (0,date_fns_format__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date(), "yyyy-MM-dd"),
        completed: "false",
      },
      {
        id: 4,
        projectId: 4,
        projectName: "Leisure",
        projectColor: "#a6b5ff",
        title: "Painting a Scenery",
        notes: "Gather art supplies and start painting a landscape.",
        priority: "Low",
        date: (0,date_fns_format__WEBPACK_IMPORTED_MODULE_2__["default"])(new Date(), "yyyy-MM-dd"),
        completed: "false",
      },
      {
        id: 5,
        projectId: 1,
        projectName: "Sport",
        projectColor: "#dab8de",
        title: "Morning Yoga Session",
        notes: "Practice sun salutations and meditation for 20 minutes.",
        priority: "Medium",
        date: (0,date_fns_format__WEBPACK_IMPORTED_MODULE_2__["default"])(
          new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
          "yyyy-MM-dd",
        ),
        completed: "false",
      },
      {
        id: 6,
        projectId: 2,
        projectName: "Math",
        projectColor: "#93c7b4",
        title: "Understanding Calculus Concepts",
        notes:
          "Review derivatives and integrals to grasp fundamental concepts.",
        priority: "High",
        date: (0,date_fns_format__WEBPACK_IMPORTED_MODULE_2__["default"])(
          new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
          "yyyy-MM-dd",
        ),
        completed: "false",
      },
      {
        id: 7,
        projectId: 3,
        projectName: "Programming",
        projectColor: "#e8ceb5",
        title: "Debugging Complex Functions",
        notes:
          "Identify and fix bugs in the core functionalities of the application.",
        priority: "High",
        date: (0,date_fns_format__WEBPACK_IMPORTED_MODULE_2__["default"])(
          new Date(new Date().getTime() + 48 * 60 * 60 * 1000),
          "yyyy-MM-dd",
        ),
        completed: "false",
      },
      {
        id: 8,
        projectId: 4,
        projectName: "Leisure",
        projectColor: "#a6b5ff",
        title: "Cooking a New Recipe",
        notes: "Try out a new recipe for a three-course meal.",
        priority: "Medium",
        date: (0,date_fns_format__WEBPACK_IMPORTED_MODULE_2__["default"])(
          new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
          "yyyy-MM-dd",
        ),
        completed: "false",
      },
      // {
      //     id: 35,
      //     projectId: 1,
      //     projectName: 'Sport',
      //     projectColor: '#dab8de',
      //     title: 'Swimming Practice',
      //     notes: 'Focus on improving stroke techniques and endurance in the pool.',
      //     priority: 'High',
      //     date: format(new Date(new Date().getTime() + 24 * 60 * 60 * 1000), 'yyyy-MM-dd'),
      //     completed: 'false',
      // },
      // {
      //     id: 36,
      //     projectId: 2,
      //     projectName: 'Math',
      //     projectColor: '#93c7b4',
      //     title: 'Mathematics Problem Solving',
      //     notes: 'Solve complex mathematical problems involving algebra and geometry.',
      //     priority: 'Medium',
      //     date: format(new Date(new Date().getTime() + 48 * 60 * 60 * 1000), 'yyyy-MM-dd'),
      //     completed: 'false',
      // },
      // {
      //     id: 37,
      //     projectId: 3,
      //     projectName: 'Programming',
      //     projectColor: '#e8ceb5',
      //     title: 'Learning New Coding Languages',
      //     notes: 'Start learning Python and its libraries for data analysis.',
      //     priority: 'High',
      //     date: format(new Date(new Date().getTime() + 48 * 60 * 60 * 1000), 'yyyy-MM-dd'),
      //     completed: 'false',
      // },
      // {
      //     id: 38,
      //     projectId: 4,
      //     projectName: 'Leisure',
      //     projectColor: '#a6b5ff',
      //     title: 'Gardening Day',
      //     notes: 'Plant new flowers and herbs in the garden.',
      //     priority: 'Low',
      //     date: format(new Date(), 'yyyy-MM-dd'),
      //     completed: 'false',
      // },
      // {
      //     id: 39,
      //     projectId: 1,
      //     projectName: 'Sport',
      //     projectColor: '#dab8de',
      //     title: 'Cycling Adventure',
      //     notes: 'Plan and embark on a scenic cycling route around the city outskirts.',
      //     priority: 'Medium',
      //     date: format(new Date(new Date().getTime() + 48 * 60 * 60 * 1000), 'yyyy-MM-dd'),
      //     completed: 'false',
      // },
      // {
      //     id: 40,
      //     projectId: 2,
      //     projectName: 'Math',
      //     projectColor: '#93c7b4',
      //     title: 'Mathematics Quiz Prep',
      //     notes: 'Prepare for the upcoming quiz by revising previous chapters.',
      //     priority: 'High',
      //     date: format(new Date(new Date().getTime() + 72 * 60 * 60 * 1000), 'yyyy-MM-dd'),
      //     completed: 'false',
      // },
      // {
      //     id: 41,
      //     projectId: 3,
      //     projectName: 'Programming',
      //     projectColor: '#e8ceb5',
      //     title: 'Creating Interactive Web Design',
      //     notes: 'Implement CSS animations and JavaScript interactivity on a webpage.',
      //     priority: 'High',
      //     date: format(new Date(new Date().getTime() + 72 * 60 * 60 * 1000), 'yyyy-MM-dd'),
      //     completed: 'false',
      // },
      // {
      //     id: 42,
      //     projectId: 4,
      //     projectName: 'Leisure',
      //     projectColor: '#a6b5ff',
      //     title: 'Book Reading Time',
      //     notes: 'Start a new novel and aim to finish the first five chapters.',
      //     priority: 'Medium',
      //     date: format(new Date(new Date().getTime() + 72 * 60 * 60 * 1000), 'yyyy-MM-dd'),
      //     completed: 'false',
      // },
      // {
      //     id: 43,
      //     projectId: 1,
      //     projectName: 'Sport',
      //     projectColor: '#dab8de',
      //     title: 'Basketball Skills Practice',
      //     notes: 'Work on dribbling, shooting, and defensive techniques.',
      //     priority: 'High',
      //     date: format(new Date(new Date().getTime() + 72 * 60 * 60 * 1000), 'yyyy-MM-dd'),
      //     completed: 'false',
      // },
      // {
      //     id: 44,
      //     projectId: 2,
      //     projectName: 'Math',
      //     projectColor: '#93c7b4',
      //     title: 'Understanding Trigonometry',
      //     notes: 'Study trigonometric functions and their applications.',
      //     priority: 'Medium',
      //     date: format(new Date(new Date().getTime() + 72 * 60 * 60 * 1000), 'yyyy-MM-dd'),
      //     completed: 'false',
      // },
      // {
      //     id: 45,
      //     projectId: 3,
      //     projectName: 'Programming',
      //     projectColor: '#e8ceb5',
      //     title: 'Database Optimization',
      //     notes: 'Optimize database queries for faster response times.',
      //     priority: 'High',
      //     date: format(new Date(new Date().getTime() + 96 * 60 * 60 * 1000), 'yyyy-MM-dd'),
      //     completed: 'false',
      // },
      // {
      //     id: 46,
      //     projectId: 4,
      //     projectName: 'Leisure',
      //     projectColor: '#a6b5ff',
      //     title: 'Photography Walk',
      //     notes: 'Capture interesting shots around the neighborhood.',
      //     priority: 'Low',
      //     date: format(new Date(new Date().getTime() + 96 * 60 * 60 * 1000), 'yyyy-MM-dd'),
      //     completed: 'false',
      // },
      // {
      //     id: 47,
      //     projectId: 1,
      //     projectName: 'Sport',
      //     projectColor: '#dab8de',
      //     title: 'Hiking Trail Exploration',
      //     notes: 'Discover and explore new hiking trails in the nearby forest.',
      //     priority: 'Medium',
      //     date: format(new Date(new Date().getTime() + 96 * 60 * 60 * 1000), 'yyyy-MM-dd'),
      //     completed: 'false',
      // },
      // {
      //     id: 48,
      //     projectId: 2,
      //     projectName: 'Math',
      //     projectColor: '#93c7b4',
      //     title: 'Advanced Algebra Revision',
      //     notes: 'Review advanced algebraic concepts like matrices and determinants.',
      //     priority: 'High',
      //     date: format(new Date(new Date().getTime() + 96 * 60 * 60 * 1000), 'yyyy-MM-dd'),
      //     completed: 'false',
      // },
      // {
      //     id: 49,
      //     projectId: 3,
      //     projectName: 'Programming',
      //     projectColor: '#e8ceb5',
      //     title: 'Implementing Data Structures',
      //     notes: 'Code different data structures - stacks, queues, and linked lists.',
      //     priority: 'High',
      //     date: format(new Date(new Date().getTime() + 96 * 60 * 60 * 1000), 'yyyy-MM-dd'),
      //     completed: 'false',
      // },
      // {
      //     id: 50,
      //     projectId: 4,
      //     projectName: 'Leisure',
      //     projectColor: '#a6b5ff',
      //     title: 'DIY Craft Day',
      //     notes: 'Create handmade crafts using recycled materials.',
      //     priority: 'Low',
      //     date: format(new Date(new Date().getTime() + 120 * 60 * 60 * 1000), 'yyyy-MM-dd'),
      //     completed: 'false',
      // },
    ];

    tasks.forEach((task) => {
      (0,_LocalStorageModule__WEBPACK_IMPORTED_MODULE_1__.saveTaskToLocalStorage)(task);
    });
  }

  let tasksCount = tasks.length;

  // Add new task object
  function createTask(projectName, title, notes, date) {
    const task = {};
    tasksCount += 1;
    task.id = tasksCount;
    task.projectId = _ProjectModule__WEBPACK_IMPORTED_MODULE_0__.ProjectModule.findIdByName(projectName);
    task.projectName = projectName;
    task.projectColor = _ProjectModule__WEBPACK_IMPORTED_MODULE_0__.ProjectModule.findColorByName(projectName);
    task.title = title;
    task.notes = notes;
    // task.priority = priority;
    task.date = date;

    tasks.push(task);
    (0,_LocalStorageModule__WEBPACK_IMPORTED_MODULE_1__.saveTaskToLocalStorage)(task);

    return task;
  }

  // Update an existing task object
  function updateTask(projectName, title, notes, date, taskId) {
    const task = {};
    tasks.forEach((task) => {
      if (task.id === taskId) {
        task.projectName = projectName;
        task.projectId = _ProjectModule__WEBPACK_IMPORTED_MODULE_0__.ProjectModule.findIdByName(projectName);
        task.projectColor = _ProjectModule__WEBPACK_IMPORTED_MODULE_0__.ProjectModule.findColorByName(projectName);
        task.title = title;
        task.notes = notes;
        task.date = date;
        return task;
      }
    });
  }

  // Retrieve all tasks
  function getAllTasks() {
    changeActiveView("all");
    const sortedTasks = tasks
      .slice()
      .sort((a, b) => new Date(a.date) - new Date(b.date));
    return sortedTasks;
  }

  // Retrieve today's tasks
  function getTodayTasks() {
    const today = new Date();
    const tasksToReturn = [];
    let taskDate = "";
    tasks.forEach((task) => {
      const dateString = task.date;
      if (task.date instanceof Date) {
        taskDate = task.date;
      } else {
        const dateParts = dateString.split("-");

        const year = parseInt(dateParts[0]);
        const month = parseInt(dateParts[1]);
        const date = parseInt(dateParts[2]);

        taskDate = new Date(year, month - 1, date);
      }

      const isSameYear = taskDate.getFullYear() === today.getFullYear();
      const isSameMonth = taskDate.getMonth() === today.getMonth();
      const isSameDay = taskDate.getDate() === today.getDate();

      if (isSameYear && isSameMonth && isSameDay) {
        tasksToReturn.push(task);
      }
    });

    changeActiveView("today");
    return tasksToReturn;
  }

  // Retrieve tomorrow's tasks
  function getTomorrowTasks() {
    const tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
    const tasksToReturn = [];
    let taskDate = "";
    tasks.forEach((task) => {
      const dateString = task.date;
      if (task.date instanceof Date) {
        taskDate = task.date;
      } else {
        const dateParts = dateString.split("-");

        const year = parseInt(dateParts[0]);
        const month = parseInt(dateParts[1]);
        const date = parseInt(dateParts[2]);

        taskDate = new Date(year, month - 1, date);
      }

      const isSameYear = taskDate.getFullYear() === tomorrow.getFullYear();
      const isSameMonth = taskDate.getMonth() === tomorrow.getMonth();
      const isSameDay = taskDate.getDate() === tomorrow.getDate();

      if (isSameYear && isSameMonth && isSameDay) {
        tasksToReturn.push(task);
      }
    });

    changeActiveView("tomorrow");
    return tasksToReturn;
  }

  // Retrieve tasks from active view
  function getTasksFromActiveView() {
    if (getActiveView() === "today") {
      return getTodayTasks();
    }
    if (getActiveView() === "tomorrow") {
      return getTomorrowTasks();
    }
    if (getActiveView() === "all") {
      return getAllTasks();
    }
  }

  // Retrieve a project's tasks
  function getProjectTasks(project, tasks) {
    if (project == "") {
      return tasks;
    }

    const tasksToReturn = [];

    tasks.forEach((task) => {
      if (task.projectName == project) {
        tasksToReturn.push(task);
      }
    });

    changeActiveProject(project);

    return tasksToReturn;
  }

  return {
    createTask,
    updateTask,
    getAllTasks,
    getTodayTasks,
    getTomorrowTasks,
    changeActiveView,
    getActiveView,
    changeActiveProject,
    getActiveProject,
    getProjectTasks,
    getTasksFromActiveView,
    deleteTaskById,
    deleteTaskByProjectId,
    findObjectById,
  };
})();


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

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
/* harmony import */ var _DOMModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMModule */ "./src/DOMModule.js");
/* harmony import */ var _ProjectModule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProjectModule */ "./src/ProjectModule.js");
/* harmony import */ var _TaskModule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TaskModule */ "./src/TaskModule.js");
/* harmony import */ var _LocalStorageModule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LocalStorageModule */ "./src/LocalStorageModule.js");






_DOMModule__WEBPACK_IMPORTED_MODULE_1__.DOMModule.createMainDiv();
_DOMModule__WEBPACK_IMPORTED_MODULE_1__.DOMModule.createDialogs.newProjectDialogHandler();
_DOMModule__WEBPACK_IMPORTED_MODULE_1__.DOMModule.createDialogs.newTaskDialogHandler();
_DOMModule__WEBPACK_IMPORTED_MODULE_1__.DOMModule.createDialogs.createProjectDeleteDialog();
_DOMModule__WEBPACK_IMPORTED_MODULE_1__.DOMModule.createDialogs.createTaskDeleteDialog();
_DOMModule__WEBPACK_IMPORTED_MODULE_1__.DOMModule.createDialogs.addEscEvenListener();
_DOMModule__WEBPACK_IMPORTED_MODULE_1__.DOMModule.createLeftDiv.createStructure();
_DOMModule__WEBPACK_IMPORTED_MODULE_1__.DOMModule.createLeftDiv.createProjects(_ProjectModule__WEBPACK_IMPORTED_MODULE_2__.ProjectModule.getProjectObjects());
_DOMModule__WEBPACK_IMPORTED_MODULE_1__.DOMModule.createRightDiv.createStructure();
_DOMModule__WEBPACK_IMPORTED_MODULE_1__.DOMModule.createRightDiv.createTasks(_TaskModule__WEBPACK_IMPORTED_MODULE_3__.TaskModule.getTodayTasks());
_DOMModule__WEBPACK_IMPORTED_MODULE_1__.DOMModule.createFooterDiv.createStructure();
_DOMModule__WEBPACK_IMPORTED_MODULE_1__.DOMModule.createFooterDiv.createButtons();
(0,_LocalStorageModule__WEBPACK_IMPORTED_MODULE_4__.switchLocalStorageStatus)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0Esd0JBQXdCO0FBQ3hCOztBQUVBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSx3QkFBd0I7QUFDeEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTs7QUFFQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxtQkFBbUI7QUFDbkIsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQiw2Q0FBNkM7QUFDN0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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LGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLFlBQVksVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFlBQVksYUFBYSxPQUFPLGNBQWMsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLGNBQWMsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsT0FBTyxhQUFhLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxhQUFhLE9BQU8sWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLGFBQWEsT0FBTyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sYUFBYSxNQUFNLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxhQUFhLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsY0FBYyxhQUFhLGFBQWEsTUFBTSxPQUFPLE9BQU8sU0FBUyxVQUFVLE9BQU8sU0FBUyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLGFBQWEsTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksUUFBUSxPQUFPLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxXQUFXLE1BQU0sTUFBTSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxPQUFPLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLE9BQU8sT0FBTyxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxTQUFTLFVBQVUsWUFBWSxPQUFPLE9BQU8sVUFBVSxZQUFZLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLFdBQVcsWUFBWSxPQUFPLE1BQU0sWUFBWSxXQUFXLE9BQU8sTUFBTSxZQUFZLFdBQVcsT0FBTyxnQkFBZ0IsVUFBVSxZQUFZLE9BQU8sT0FBTyxZQUFZLFdBQVcsWUFBWSxPQUFPLE9BQU8sWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxRQUFRLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxZQUFZLE9B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QUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0Es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Q1Y7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdExtQztBQUNnQjtBQUNsQjtBQUNvQjtBQUNRO0FBQzJCO0FBQzZCO0FBQ3pFO0FBQ007QUFDVztBQUNULENBQUM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxXQUFXO0FBQzVEO0FBQ0EsaURBQWlELFdBQVc7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRUFBb0U7QUFDcEUsd0JBQXdCLDRDQUE0QztBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUseURBQWE7QUFDdkI7QUFDQSxZQUFZLHlEQUFhO0FBQ3pCO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxtREFBVTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSxtREFBVTtBQUN0QixjQUFjLG1EQUFVO0FBQ3hCLGNBQWMsbURBQVU7QUFDeEI7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHlEQUFhO0FBQ3pDO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsbURBQVU7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWSxtREFBVTtBQUN0QixjQUFjLG1EQUFVO0FB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O0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQSxNQUFNLDJFQUFzQjtBQUM1QixLQUFLO0FBQ0w7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQix5REFBYTtBQUNsQztBQUNBLHdCQUF3Qix5REFBYTtBQUNyQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUksMkVBQXNCOztBQUUxQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qix5REFBYTtBQUN0Qyw0QkFBNEIseURBQWE7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ3RnQmM7QUFDZjs7QUFFQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsR0FBRztBQUNIOzs7Ozs7VUNSQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FzQjtBQUNrQjtBQUNRO0FBQ047QUFDc0I7O0FBRWhFLGlEQUFTO0FBQ1QsaURBQVM7QUFDVCxpREFBUztBQUNULGlEQUFTO0FBQ1QsaURBQVM7QUFDVCxpREFBUztBQUNULGlEQUFTO0FBQ1QsaURBQVMsOEJBQThCLHlEQUFhO0FBQ3BELGlEQUFTO0FBQ1QsaURBQVMsNEJBQTRCLG1EQUFVO0FBQy9DLGlEQUFTO0FBQ1QsaURBQVM7QUFDVCw2RUFBd0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub3ZhdGFzay8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL25vdmF0YXNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9ub3ZhdGFzay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL25vdmF0YXNrLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9ub3ZhdGFzay8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9kZWZhdWx0TG9jYWxlL2luZGV4LmpzIiwid2VicGFjazovL25vdmF0YXNrLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzIiwid2VicGFjazovL25vdmF0YXNrLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9mb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL25vdmF0YXNrLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2Zvcm1hdC9saWdodEZvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbm92YXRhc2svLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2xvbmdGb3JtYXR0ZXJzL2luZGV4LmpzIiwid2VicGFjazovL25vdmF0YXNrLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbm92YXRhc2svLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDRGF5T2ZZZWFyL2luZGV4LmpzIiwid2VicGFjazovL25vdmF0YXNrLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ0lTT1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbm92YXRhc2svLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbm92YXRhc2svLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly9ub3ZhdGFzay8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENXZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly9ub3ZhdGFzay8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9wcm90ZWN0ZWRUb2tlbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbm92YXRhc2svLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzIiwid2VicGFjazovL25vdmF0YXNrLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzIiwid2VicGFjazovL25vdmF0YXNrLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENJU09XZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly9ub3ZhdGFzay8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly9ub3ZhdGFzay8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9zdGFydE9mVVRDV2Vla1llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbm92YXRhc2svLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzIiwid2VicGFjazovL25vdmF0YXNrLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9hZGRNaWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbm92YXRhc2svLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2NvbnN0YW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly9ub3ZhdGFzay8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZm9ybWF0L2luZGV4LmpzIiwid2VicGFjazovL25vdmF0YXNrLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbm92YXRhc2svLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVmFsaWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbm92YXRhc2svLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuL2luZGV4LmpzIiwid2VicGFjazovL25vdmF0YXNrLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vbm92YXRhc2svLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9ub3ZhdGFzay8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9ub3ZhdGFzay8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbm92YXRhc2svLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdExvbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbm92YXRhc2svLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzIiwid2VicGFjazovL25vdmF0YXNrLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9sb2NhbGl6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9ub3ZhdGFzay8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbWF0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vbm92YXRhc2svLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9pbmRleC5qcyIsIndlYnBhY2s6Ly9ub3ZhdGFzay8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vcGFyc2VJU08vaW5kZXguanMiLCJ3ZWJwYWNrOi8vbm92YXRhc2svLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N1Yk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9ub3ZhdGFzay8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vdG9EYXRlL2luZGV4LmpzIiwid2VicGFjazovL25vdmF0YXNrLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9ub3ZhdGFzay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9ub3ZhdGFzay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbm92YXRhc2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbm92YXRhc2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbm92YXRhc2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9ub3ZhdGFzay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL25vdmF0YXNrLy4vc3JjL0RPTU1vZHVsZS5qcyIsIndlYnBhY2s6Ly9ub3ZhdGFzay8uL3NyYy9Mb2NhbFN0b3JhZ2VNb2R1bGUuanMiLCJ3ZWJwYWNrOi8vbm92YXRhc2svLi9zcmMvUHJvamVjdE1vZHVsZS5qcyIsIndlYnBhY2s6Ly9ub3ZhdGFzay8uL3NyYy9UYXNrTW9kdWxlLmpzIiwid2VicGFjazovL25vdmF0YXNrLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9ub3ZhdGFzay93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9ub3ZhdGFzay93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9ub3ZhdGFzay93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbm92YXRhc2svd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9ub3ZhdGFzay93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL25vdmF0YXNrL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9ub3ZhdGFzay8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1hdGVyaWFsK1N5bWJvbHMrT3V0bGluZWQ6b3Bzeix3Z2h0LEZJTEwsR1JBREAyMC4uNDgsMTAwLi43MDAsMC4uMSwtNTAuLjIwMCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUpvc2VmaW4rU2Fuczp3Z2h0QDEwMCZmYW1pbHk9TGF0bzp3Z2h0QDMwMCZmYW1pbHk9TnVuaXRvOml0YWwsd2dodEAwLDIwMDswLDMwMDswLDQwMDswLDUwMDsxLDIwMDsxLDMwMDsxLDQwMDsxLDUwMCZmYW1pbHk9Um9ib3RvOndnaHRAMTAwJmZhbWlseT1SdWJpazp3Z2h0QDMwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NYXRlcmlhbCtTeW1ib2xzK091dGxpbmVkOm9wc3osd2dodCxGSUxMLEdSQURAMjQsNDAwLDAsMCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3QubGlnaHQtbW9kZSB7XG4gIC8qIEZvbnQgKi9cbiAgLS1mb250LWNvbG9yOiAjMzMzOyAvKnVzZWQgaW4gZm9udCovXG5cbiAgLyogQmFja2dyb3VuZHMgKi9cbiAgLS1iYWNrZ3JvdW5kLWxpZ2h0OiAjZWRlZGU5OyAvKnVzZWQgaW4gYmFja2dyb3VuZHMqL1xuICAtLWJhY2tncm91bmQtY29sb3I6ICMzZjFlMDkzZTsgLyp1c2VkIGluIG5hdmlnYXRpb24gcGFuZWwgb24gdGhlIGxlZnQqL1xuXG4gIC8qIEJvcmRlcnMgKi9cbiAgLS1ib3JkZXItY29sb3I6ICNhOWE5YTk7IC8qdXNlZCBpbiBib3JkZXIgY29sb3JzKi9cbiAgLS1ib3JkZXItZGFyazogIzk5OTsgLyp1c2VkIGluIGJvcmRlciBjb2xvcnMqL1xuXG4gIC8qIEJ1dHRvbnMgKi9cbiAgLS1zdWJtaXQtYnV0dG9uLWhvdmVyOiAjMmVjYzcxOyAvKnVzZWQgaW4gU3VibWl0IGJ1dHRvbiBob3ZlciovXG4gIC0tc3VibWl0LWJ1dHRvbi1hY3RpdmU6ICMyN2FlNjA7IC8qdXNlZCBpbiBTdWJtaXQgYnV0dG9uIGFjdGl2ZSovXG4gIC0tc3VibWl0LWJ1dHRvbjogI2M4ZTZjOTsgLyp1c2VkIGluIFN1Ym1pdCBidXR0b24qL1xuXG4gIC0tbmV3LXRhc2stYnV0dG9uOiAjNGU0ZTRlNDc7XG4gIC0tbmV3LXRhc2stYnV0dG9uLWhvdmVyOiAjNGU0ZTRlNDc7IC8qdXNlZCBpbiBuZXcgdGFzayBidXR0b24gaG92ZXIqL1xuICAtLW5ldy10YXNrLWJ1dHRvbi1hY3RpdmU6ICM4ZThlOGU7IC8qdXNlZCBpbiBuZXcgdGFzayBidXR0b24gYWN0aXZlKi9cbiAgLS1uZXctdGFzay1idXR0b24tYm9yZGVyOiBibGFjaztcblxuICAtLWRpYWxvZy1jbG9zZS1idXR0b246IHJnYigxNjksIDE2OSwgMTY5KTsgLyp1c2VkIGluIGRpYWxvZyBjbG9zZSBidXR0b24qL1xuICAtLWRpYWxvZy1jbG9zZS1idXR0b24taG92ZXI6IHJnYihcbiAgICAxMzYsXG4gICAgMTM2LFxuICAgIDEzNlxuICApOyAvKnVzZWQgaW4gZGlhbG9nIGNsb3NlIGJ1dHRvbiBob3ZlciovXG4gIC0tZGlhbG9nLWNsb3NlLWJ1dHRvbi1hY3RpdmU6IHJnYihcbiAgICAxMDgsXG4gICAgMTA4LFxuICAgIDEwOFxuICApOyAvKnVzZWQgaW4gZGlhbG9nIGNsb3NlIGJ1dHRvbiBhY3RpdmUqL1xuXG4gIC8qIEljb25zICovXG4gIC0taWNvbnMtdmlld3M6ICM4MTFjMWM7IC8qdXNlZCBpbiB0YXNrIGRlbGV0ZSBhbmQgZWRpdCBpY29ucywgcHJvamVjdCBkZWxldGUgaWNvbiwgYW5kIGluIHZpZXdzIG9uIHRoZSBsZWZ0Ki9cblxuICAvKiBTY3JvbGwgYmFyIGFuZCBzbGlkZXIgKi9cbiAgLS1zY3JvbGxiYXItc2xpZGVyOiAjNGMxZjFmOyAvKnVzZWQgc2Nyb2xsIGJhciBhbmQgc2xpZGVyIGFuaW1hdGlvbiovXG4gIC0tbmF2aWdhdGlvbi1lbGVtZW50cy1ob3ZlcjogIzdhN2E3YTI4OyAvKnVzZWQgaW4gbmF2aWdhdGlvbiBwYW5lbCBvbiB0aGUgbGVmdCBob3ZlciovXG4gIC0tbmF2aWdhdGlvbi1lbGVtZW50cy1hY3RpdmU6ICNkZjFjMWYyODtcblxuICAvKiBJbnB1dCBwbGFjZWhvbGRlciBhbmQgY2hlY2tib3hlcyAqL1xuICAtLWlucHV0LXBsYWNlaG9sZGVycy1hbmQtY2hlY2tib3g6ICM4ODg7IC8qdXNlZCBpbnB1dCBwbGFjZWhvbGRlcnMgYW5kIGluIGNoZWNrYm94IGljb24gKi9cbiAgLS1jaGVja2JveDogZ3JlZW47IC8qdXNlZCBpbiBjaGVja2JveCovXG59XG5cbjpyb290LmRhcmstbW9kZSB7XG4gIC8qIEZvbnQgKi9cbiAgLS1mb250LWNvbG9yOiAjZjJlY2ZmOyAvKnVzZWQgaW4gZm9udCovXG5cbiAgLyogQmFja2dyb3VuZHMgKi9cbiAgLS1iYWNrZ3JvdW5kLWxpZ2h0OiAjM2UzZTNlOyAvKnVzZWQgaW4gYmFja2dyb3VuZHMqL1xuICAtLWJhY2tncm91bmQtY29sb3I6ICMyNzI3Mjc7IC8qdXNlZCBpbiBuYXZpZ2F0aW9uIHBhbmVsIG9uIHRoZSBsZWZ0Ki9cblxuICAvKiBCb3JkZXJzICovXG4gIC0tYm9yZGVyLWNvbG9yOiBibGFjazsgLyp1c2VkIGluIGJvcmRlciBjb2xvcnMqL1xuICAtLWJvcmRlci1kYXJrOiAjOTk5OyAvKnVzZWQgaW4gYm9yZGVyIGNvbG9ycyovXG5cbiAgLyogQnV0dG9ucyAqL1xuICAtLXN1Ym1pdC1idXR0b24taG92ZXI6ICNkNTFjMWYyODsgLyp1c2VkIGluIFN1Ym1pdCBidXR0b24gaG92ZXIqL1xuICAtLXN1Ym1pdC1idXR0b24tYWN0aXZlOiAjYmExODFiNWI7IC8qdXNlZCBpbiBTdWJtaXQgYnV0dG9uIGFjdGl2ZSovXG4gIC0tc3VibWl0LWJ1dHRvbjogI2JhMTgxYjI4OyAvKnVzZWQgaW4gU3VibWl0IGJ1dHRvbiovXG5cbiAgLS1uZXctdGFzay1idXR0b246ICNiYTE4MWIyODtcbiAgLS1uZXctdGFzay1idXR0b24taG92ZXI6ICNiYTE4MWIyODsgLyp1c2VkIGluIG5ldyB0YXNrIGJ1dHRvbiBob3ZlciovXG4gIC0tbmV3LXRhc2stYnV0dG9uLWFjdGl2ZTogI2JhMTgxYjViOyAvKnVzZWQgaW4gbmV3IHRhc2sgYnV0dG9uIGFjdGl2ZSovXG4gIC0tbmV3LXRhc2stYnV0dG9uLWJvcmRlcjogYmxhY2s7XG5cbiAgLS1kaWFsb2ctY2xvc2UtYnV0dG9uOiByZ2IoMTY5LCAxNjksIDE2OSk7IC8qdXNlZCBpbiBkaWFsb2cgY2xvc2UgYnV0dG9uKi9cbiAgLS1kaWFsb2ctY2xvc2UtYnV0dG9uLWhvdmVyOiByZ2IoXG4gICAgMTM2LFxuICAgIDEzNixcbiAgICAxMzZcbiAgKTsgLyp1c2VkIGluIGRpYWxvZyBjbG9zZSBidXR0b24gaG92ZXIqL1xuICAtLWRpYWxvZy1jbG9zZS1idXR0b24tYWN0aXZlOiByZ2IoXG4gICAgMTA4LFxuICAgIDEwOCxcbiAgICAxMDhcbiAgKTsgLyp1c2VkIGluIGRpYWxvZyBjbG9zZSBidXR0b24gYWN0aXZlKi9cblxuICAvKiBJY29ucyAqL1xuICAtLWljb25zLXZpZXdzOiAjODg0MDQwOyAvKnVzZWQgaW4gdGFzayBkZWxldGUgYW5kIGVkaXQgaWNvbnMsIHByb2plY3QgZGVsZXRlIGljb24sIGFuZCBpbiB2aWV3cyBvbiB0aGUgbGVmdCovXG5cbiAgLyogU2Nyb2xsIGJhciBhbmQgc2xpZGVyICovXG4gIC0tc2Nyb2xsYmFyLXNsaWRlcjogI2FiMzczNzsgLyp1c2VkIHNjcm9sbCBiYXIgYW5kIHNsaWRlciBhbmltYXRpb24qL1xuICAtLW5hdmlnYXRpb24tZWxlbWVudHMtaG92ZXI6ICM3YTdhN2EyODsgLyp1c2VkIGluIG5hdmlnYXRpb24gcGFuZWwgb24gdGhlIGxlZnQgaG92ZXIqL1xuICAtLW5hdmlnYXRpb24tZWxlbWVudHMtYWN0aXZlOiAjZGYxYzFmMjg7XG5cbiAgLyogSW5wdXQgcGxhY2Vob2xkZXIgYW5kIGNoZWNrYm94ZXMgKi9cbiAgLS1pbnB1dC1wbGFjZWhvbGRlcnMtYW5kLWNoZWNrYm94OiAjODg4OyAvKnVzZWQgaW5wdXQgcGxhY2Vob2xkZXJzIGFuZCBpbiBjaGVja2JveCBpY29uICovXG4gIC0tY2hlY2tib3g6IGdyZWVuOyAvKnVzZWQgaW4gY2hlY2tib3gqL1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDRweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICB6LWluZGV4OiA5OTk5O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc2Nyb2xsYmFyLXNsaWRlcik7IC8qIENoYW5nZSB0aGUgY29sb3IgdG8geW91ciBwcmVmZXJlbmNlICovXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgei1pbmRleDogOTk5OTtcbn1cblxuOjotd2Via2l0LXNjcm9sbGJhcjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtbGlnaHQpOyAvKiBDaGFuZ2UgdGhlIGNvbG9yIHRvIHlvdXIgcHJlZmVyZW5jZSAqL1xuICB6LWluZGV4OiA5OTk5O1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWRhcmspOyAvKiBDaGFuZ2UgdGhlIGNvbG9yIHRvIHlvdXIgcHJlZmVyZW5jZSAqL1xuICB6LWluZGV4OiA5OTk5O1xufVxuXG46OmJhY2tkcm9wIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDg4O1xuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcbn1cblxuLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczpcbiAgICBcIkZJTExcIiAwLFxuICAgIFwid2dodFwiIDQwMCxcbiAgICBcIkdSQURcIiAwLFxuICAgIFwib3BzelwiIDI0O1xufVxuXG4vKiBHZW5lcmFsIGxheW91dCAqL1xuXG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXdlaWdodDogMzAwO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1saWdodCk7XG4gIGhlaWdodDogMTAwdmg7XG4gIHdpZHRoOiAxMDB2dztcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG4ubWFpbiB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDIwMHB4LCAxZnIpIDNmcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubWFpbiA+IC5sZWZ0IHtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xuICBmbGV4OiAwIDAgMzAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gIC8qIGhlaWdodDogY2FsYygxMDAlIC0gMTAwcHgpOyAqL1xuICBoZWlnaHQ6IDEwMCU7XG4gIC8qIG92ZXJmbG93OiBhdXRvOyAqL1xuICBncmlkLWNvbHVtbjogMSAvIDI7XG4gIC8qIHBvc2l0aW9uOiBzdGlja3k7ICovXG59XG5cbi5tYWluID4gLnJpZ2h0IHtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMDBweCk7XG4gIGdyaWQtY29sdW1uOiAyIC8gMztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgLyogaGVpZ2h0OiAxMDBweDsgKi9cbiAgLyogYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7ICovXG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAyMHB4O1xuICAvKiB3aWR0aDogMTAwJTsgKi9cbiAgbGVmdDogNTAlO1xuICBib3gtc2hhZG93OiAwcHggLTUwcHggMjRweCAtMjBweCB2YXIoLS1iYWNrZ3JvdW5kLWxpZ2h0KTtcbiAgLyogYm94LXNoYWRvdzogLTE1MHB4IC00MHB4IDIxcHggLTMwcHggYmxhY2s7ICovXG59XG5cbi5mb290ZXIgPiAuZm9vdGVyLWxlZnQge1xuICBmbGV4OiAwIDAgMzAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xufVxuXG4uZm9vdGVyID4gLmZvb3Rlci1yaWdodCB7XG4gIGZsZXg6IDE7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtbGlnaHQpO1xufVxuXG4ucmlnaHQtZmlyc3QtaGVhZGVyIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgLyogYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1kYXJrKTsgKi9cbiAgd2lkdGg6IGNsYW1wKDMwMHB4LCA3MCUsIDcwMHB4KTtcbn1cblxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24ge1xuICBwYWRkaW5nLXJpZ2h0OiBjbGFtcCgxMHB4LCA5JSwgMTAwcHgpO1xuICBwYWRkaW5nLWxlZnQ6IGNsYW1wKDEwcHgsIDklLCAxMDBweCk7XG4gIC8qIHBhZGRpbmctbGVmdDogbWlubWF4KDEwcHgsIDEwMHB4KTsgKi9cbiAgcGFkZGluZy10b3A6IDUwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyAqL1xuICAvKiBvdmVyZmxvdzogYXV0bzsgKi9cbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZ2FwOiAzcHg7XG4gIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luLWJvdHRvbTogMTUwcHg7XG59XG5cbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2sge1xuICAvKiBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpOyAqL1xuICAvKiBib3JkZXItcmFkaXVzOiA1cHg7ICovXG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgcGFkZGluZy10b3A6IDVweDtcblxuICBmbGV4OiAwO1xuICAvKiB3aWR0aDogY2xhbXAoMjAwcHgsIDYwJSwgODAwcHgpOyAqL1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiBhbGwgMTc1bXMgZWFzZS1pbjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZ2FwOiBjbGFtcCgyMHB4LCA1JSwgNDBweCk7XG4gIG1pbi13aWR0aDogMzAwcHg7XG59XG5cbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2sgPiAudGFzay1sZWZ0LXNlY3Rpb24ge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzIGVhc2U7XG59XG5cbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2sgPiAudGFzay1sZWZ0LXNlY3Rpb24uY2hlY2tlZCBzdmcgcGF0aCxcbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2sgPiAudGFzay1sZWZ0LXNlY3Rpb24uY2hlY2tlZCBzdmcgY2lyY2xlIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgc3Ryb2tlOiB2YXIoLS1jaGVja2JveCk7XG4gIHN0cm9rZS13aWR0aDogMXB4O1xufVxuXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrID4gLnRhc2stbGVmdC1zZWN0aW9uLmNoZWNrZWQge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG5cbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2sgPiAudGFzay1sZWZ0LXNlY3Rpb24udW5jaGVja2VkIHN2ZyBwYXRoIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzazpob3ZlciA+IC50YXNrLWxlZnQtc2VjdGlvbiB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMXMgZWFzZTtcbn1cblxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzazpob3ZlciA+IC50YXNrLWxlZnQtc2VjdGlvbiBjaXJjbGUge1xuICBzdHJva2U6IHZhcigtLWNoZWNrYm94KTtcbn1cblxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzazpob3ZlciA+IC50YXNrLWxlZnQtc2VjdGlvbiBwYXRoLFxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzazpob3ZlciA+IC50YXNrLWxlZnQtc2VjdGlvbiBjaXJjbGUge1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcbn1cblxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzayA+IC50YXNrLWxlZnQtc2VjdGlvbiA+IHN2ZyBjaXJjbGUge1xuICBmaWxsOiBub25lO1xuICBzdHJva2U6IHZhcigtLWlucHV0LXBsYWNlaG9sZGVycy1hbmQtY2hlY2tib3gpO1xufVxuXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrID4gLnRhc2stbGVmdC1zZWN0aW9uID4gc3ZnIHBhdGgge1xuICBmaWxsOiBub25lO1xuICBzdHJva2U6IHZhcigtLWlucHV0LXBsYWNlaG9sZGVycy1hbmQtY2hlY2tib3gpO1xufVxuXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrID4gLnRhc2stcmlnaHQtc2VjdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg4LCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzayA+IC50YXNrLXJpZ2h0LXNlY3Rpb246aG92ZXIge1xuICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcbn1cblxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzayA+IC50YXNrLXJpZ2h0LXNlY3Rpb24gPiAudGFzay1wcm9qZWN0ID4gKiB7XG4gIHBhZGRpbmc6IDFweCA1cHggMXB4IDVweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZGFyayk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cblxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzayA+IC50YXNrLXJpZ2h0LXNlY3Rpb24gPiAudGFzay1wcm9qZWN0IHtcbiAgZ3JpZC1jb2x1bW46IDEgLyA5O1xuICBncmlkLXJvdzogMSAvIDI7XG5cbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xufVxuXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrID4gLnRhc2stcmlnaHQtc2VjdGlvbiA+IC50YXNrLXRpdGxlLWZpZWxkIHtcbiAgZ3JpZC1jb2x1bW46IDEgLyA5O1xuICBncmlkLXJvdzogMiAvIDM7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzayA+IC50YXNrLXJpZ2h0LXNlY3Rpb24gPiAudGFzay1kYXRlLWZpZWxkIHtcbiAgZ3JpZC1jb2x1bW46IDEgLyA5O1xuICBncmlkLXJvdzogNCAvIDU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzayA+IC50YXNrLXJpZ2h0LXNlY3Rpb24gPiAudGFzay1ub3Rlcy1maWVsZCB7XG4gIGdyaWQtY29sdW1uOiAxIC8gOTtcbiAgZ3JpZC1yb3c6IDMgLyA0O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2sgPiAudGFzay1yaWdodC1zZWN0aW9uID4gLnRhc2stZGVsZXRlLWJ1dHRvbiB7XG4gIGdyaWQtY29sdW1uOiA4IC8gOTtcbiAgZ3JpZC1yb3c6IDIgLyA0O1xuICBmb250LXNpemU6IDEycHg7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICBvcGFjaXR5OiAwO1xufVxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzayA+IC50YXNrLXJpZ2h0LXNlY3Rpb24gPiAudGFzay1lZGl0LWJ1dHRvbiB7XG4gIGdyaWQtY29sdW1uOiA3IC8gODtcbiAgZ3JpZC1yb3c6IDIgLyA0O1xuICBmb250LXNpemU6IDEycHg7XG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICBvcGFjaXR5OiAwO1xufVxuXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrID4gLnRhc2stcmlnaHQtc2VjdGlvbjpob3ZlciA+IC50YXNrLWRlbGV0ZS1idXR0b24sXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrID4gLnRhc2stcmlnaHQtc2VjdGlvbjpob3ZlciA+IC50YXNrLWVkaXQtYnV0dG9uIHtcbiAgb3BhY2l0eTogMTtcbn1cblxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzayA+IC50YXNrLXJpZ2h0LXNlY3Rpb24gPiAudGFzay1kZWxldGUtYnV0dG9uIHNwYW4sXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrID4gLnRhc2stcmlnaHQtc2VjdGlvbiA+IC50YXNrLWVkaXQtYnV0dG9uIHNwYW4ge1xuICBjb2xvcjogdmFyKC0taWNvbnMtdmlld3MpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWxpZ2h0KTtcbn1cblxuLnJpZ2h0LWZpcnN0LXNlY3Rpb25cbiAgPiAudGFza1xuICA+IC50YXNrLXJpZ2h0LXNlY3Rpb246aG92ZXJcbiAgPiAudGFzay1kZWxldGUtYnV0dG9uXG4gIHNwYW4sXG4ucmlnaHQtZmlyc3Qtc2VjdGlvblxuICA+IC50YXNrXG4gID4gLnRhc2stcmlnaHQtc2VjdGlvbjpob3ZlclxuICA+IC50YXNrLWVkaXQtYnV0dG9uXG4gIHNwYW4ge1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGNvbG9yOiB2YXIoLS1pY29ucy12aWV3cyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtbGlnaHQpO1xufVxuXG4ucmlnaHQtZmlyc3Qtc2VjdGlvblxuICA+IC50YXNrXG4gID4gLnRhc2stcmlnaHQtc2VjdGlvbjpob3ZlclxuICA+IC50YXNrLWRlbGV0ZS1idXR0b246aG92ZXJcbiAgc3Bhbixcbi5yaWdodC1maXJzdC1zZWN0aW9uXG4gID4gLnRhc2tcbiAgPiAudGFzay1yaWdodC1zZWN0aW9uOmhvdmVyXG4gID4gLnRhc2stZWRpdC1idXR0b246aG92ZXJcbiAgc3BhbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWljb25zLXZpZXdzKTtcbiAgY29sb3I6IHZhcigtLWJhY2tncm91bmQtbGlnaHQpO1xufVxuXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrID4gLnRhc2stcmlnaHQtc2VjdGlvbiA+IC50YXNrLWRhdGUtZmllbGQ6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXDFGM0FGXCI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1mYW1pbHk6IFwiU2Vnb2UgVUlcIiwgc2Fucy1zZXJpZjtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5cbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2stZGl2aWRlciB7XG4gIG1pbi1oZWlnaHQ6IDFweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvcmRlci1jb2xvcik7XG4gIHRyYW5zaXRpb246IGFsbCAxNzVtcyBlYXNlLWluO1xuICBvcGFjaXR5OiAxO1xuICBtaW4td2lkdGg6IDMwMHB4O1xufVxuXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrLmhpZGRlbixcbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2stZGl2aWRlci5oaWRkZW4ge1xuICB0cmFuc2l0aW9uOiBhbGwgMTc1bXMgZWFzZS1pbjtcbiAgb3BhY2l0eTogMDtcbn1cblxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzayA+IGRpdiA+IGRpdiB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IGFsbCAxNzVtcyBlYXNlLWluO1xufVxuXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrID4gZGl2ID4gZGl2LmhpZGRlbiB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi50YXNrLXByb2plY3QtY29sb3Ige1xuICBoZWlnaHQ6IDEwcHg7XG4gIHdpZHRoOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMC41cHggc29saWQgdmFyKC0taW5wdXQtcGxhY2Vob2xkZXJzLWFuZC1jaGVja2JveCk7XG59XG5cbi8qIExlZnQgZGl2IGxheW91dCAqL1xuXG4ubGVmdCA+IC5sZWZ0LWZpcnN0LXNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICAvKiBvdmVyZmxvdzogYXV0bzsgKi9cbiAgZmxleDogMCAwIDIwMHB4O1xuICAvKiBtYXJnaW4tbGVmdDogMTBweDsgKi9cbn1cblxuLmxlZnQgPiAubGVmdC1zZWNvbmQtc2VjdGlvbiB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIC8qIG92ZXJmbG93OiBhdXRvOyAqL1xuICBmbGV4OiAxIDAgMjAwcHg7XG4gIC8qIG1hcmdpbi1sZWZ0OiAxMHB4OyAqL1xufVxuXG4ubGVmdCA+IC5sZWZ0LWZpcnN0LXNlY3Rpb24gPiBwIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIGhlaWdodDogNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmxlZnQgPiAubGVmdC1maXJzdC1zZWN0aW9uIHVsLFxuLmxlZnQgPiAubGVmdC1zZWNvbmQtc2VjdGlvbiB1bCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmxlZnQgPiAubGVmdC1maXJzdC1zZWN0aW9uIGxpIHtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHotaW5kZXg6IDE7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBnYXA6IDEwcHg7XG59XG5cbi5sZWZ0ID4gLmxlZnQtc2Vjb25kLXNlY3Rpb24gbGkge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5sZWZ0ID4gLmxlZnQtZmlyc3Qtc2VjdGlvbiBsaSA+IC5pbWFnZSB7XG4gIGhlaWdodDogMjBweDtcbiAgd2lkdGg6IDIwcHg7XG59XG5cbi8qIFNsaWRlciBvbiB2aWV3cyAqL1xuXG4ubGVmdCA+IC5sZWZ0LWZpcnN0LXNlY3Rpb24gLnRhc2stYW5pbWF0aW9uLFxuLmxlZnQgPiAubGVmdC1zZWNvbmQtc2VjdGlvbiBsaVtkYXRhLWFjdGl2ZT1cInRydWVcIl0gfiAudGFzay1hbmltYXRpb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIC8qIHRvcDogMDsgKi9cbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHZhcigtLXNjcm9sbGJhci1zbGlkZXIpO1xuICB6LWluZGV4OiAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICBvcGFjaXR5OiAwO1xufVxuXG4udmlld3MgPiBsaTpudGgtY2hpbGQoMSlbZGF0YS1hY3RpdmU9XCJ0cnVlXCJdIH4gLnRhc2stYW5pbWF0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogMDtcbiAgb3BhY2l0eTogMTtcbn1cblxuLnZpZXdzID4gbGk6bnRoLWNoaWxkKDIpW2RhdGEtYWN0aXZlPVwidHJ1ZVwiXSB+IC50YXNrLWFuaW1hdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDUwcHg7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi52aWV3cyA+IGxpOm50aC1jaGlsZCgzKVtkYXRhLWFjdGl2ZT1cInRydWVcIl0gfiAudGFzay1hbmltYXRpb24ge1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiAxMDBweDtcbiAgb3BhY2l0eTogMTtcbn1cblxuLyogVmlld3Mgc3R5bGVzICovXG5cbi5sZWZ0ID4gLmxlZnQtZmlyc3Qtc2VjdGlvbiBsaVtkYXRhLWFjdGl2ZT1cImZhbHNlXCJdOmhvdmVyLFxuLmxlZnQgPiAubGVmdC1zZWNvbmQtc2VjdGlvbiBsaTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdmlnYXRpb24tZWxlbWVudHMtaG92ZXIpO1xufVxuXG4ubGVmdCA+IC5sZWZ0LWZpcnN0LXNlY3Rpb24gbGlbZGF0YS1hY3RpdmU9XCJ0cnVlXCJdID4gZGl2ID4gc3ZnIHtcbiAgZmlsbDogdmFyKC0taWNvbnMtdmlld3MpO1xufVxuXG4ubGVmdCA+IC5sZWZ0LWZpcnN0LXNlY3Rpb24gbGlbZGF0YS1hY3RpdmU9XCJmYWxzZVwiXSA+IGRpdiA+IHN2ZyB7XG4gIGZpbGw6IHZhcigtLWZvbnQtY29sb3IpO1xufVxuXG4ubGVmdCA+IC5sZWZ0LWZpcnN0LXNlY3Rpb24gbGlbZGF0YS1hY3RpdmU9XCJ0cnVlXCJdID4gcCB7XG4gIGNvbG9yOiB2YXIoLS1pY29ucy12aWV3cyk7XG59XG5cbi5sZWZ0ID4gLmxlZnQtc2Vjb25kLXNlY3Rpb24gbGkuZm9udC1hY2NlbnQgPiBkaXYge1xuICBjb2xvcjogdmFyKC0taWNvbnMtdmlld3MpO1xufVxuXG4ubGVmdCA+IC5sZWZ0LWZpcnN0LXNlY3Rpb24gbGlbZGF0YS1hY3RpdmU9XCJmYWxzZVwiXTphY3RpdmUsXG4ubGVmdCA+IC5sZWZ0LXNlY29uZC1zZWN0aW9uIGxpOmFjdGl2ZTpub3QoLmhvdmVyZWQtZGVsZXRlKSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5hdmlnYXRpb24tZWxlbWVudHMtYWN0aXZlKTtcbn1cblxuLyogU2xpZGVyIG9uIHByb2plY3RzICovXG5cbi5zZWNvbmQtc2VjdGlvbi1saXN0ID4gbGk6bnRoLWNoaWxkKDEpW2RhdGEtYWN0aXZlPVwidHJ1ZVwiXSB+IC50YXNrLWFuaW1hdGlvbiB7XG4gIC8qIHdpZHRoOiAxMDAlOyAqL1xuICB0b3A6IDA7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5zZWNvbmQtc2VjdGlvbi1saXN0ID4gbGk6bnRoLWNoaWxkKDIpW2RhdGEtYWN0aXZlPVwidHJ1ZVwiXSB+IC50YXNrLWFuaW1hdGlvbiB7XG4gIC8qIHdpZHRoOiAxMDAlOyAqL1xuICB0b3A6IDUwcHg7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5zZWNvbmQtc2VjdGlvbi1saXN0ID4gbGk6bnRoLWNoaWxkKDMpW2RhdGEtYWN0aXZlPVwidHJ1ZVwiXSB+IC50YXNrLWFuaW1hdGlvbiB7XG4gIC8qIHdpZHRoOiAxMDAlOyAqL1xuICB0b3A6IDEwMHB4O1xuICBvcGFjaXR5OiAxO1xufVxuXG4uc2Vjb25kLXNlY3Rpb24tbGlzdCA+IGxpOm50aC1jaGlsZCg0KVtkYXRhLWFjdGl2ZT1cInRydWVcIl0gfiAudGFzay1hbmltYXRpb24ge1xuICAvKiB3aWR0aDogMTAwJTsgKi9cbiAgdG9wOiAxNTBweDtcbiAgb3BhY2l0eTogMTtcbn1cblxuLnNlY29uZC1zZWN0aW9uLWxpc3QgPiBsaTpudGgtY2hpbGQoNSlbZGF0YS1hY3RpdmU9XCJ0cnVlXCJdIH4gLnRhc2stYW5pbWF0aW9uIHtcbiAgLyogd2lkdGg6IDEwMCU7ICovXG4gIHRvcDogMjAwcHg7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5zZWNvbmQtc2VjdGlvbi1saXN0ID4gbGk6bnRoLWNoaWxkKDYpW2RhdGEtYWN0aXZlPVwidHJ1ZVwiXSB+IC50YXNrLWFuaW1hdGlvbiB7XG4gIC8qIHdpZHRoOiAxMDAlOyAqL1xuICB0b3A6IDI1MHB4O1xuICBvcGFjaXR5OiAxO1xufVxuXG4uc2Vjb25kLXNlY3Rpb24tbGlzdCA+IGxpOm50aC1jaGlsZCg3KVtkYXRhLWFjdGl2ZT1cInRydWVcIl0gfiAudGFzay1hbmltYXRpb24ge1xuICAvKiB3aWR0aDogMTAwJTsgKi9cbiAgdG9wOiAzMDBweDtcbiAgb3BhY2l0eTogMTtcbn1cblxuLnNlY29uZC1zZWN0aW9uLWxpc3QgPiBsaTpudGgtY2hpbGQoOClbZGF0YS1hY3RpdmU9XCJ0cnVlXCJdIH4gLnRhc2stYW5pbWF0aW9uIHtcbiAgLyogd2lkdGg6IDEwMCU7ICovXG4gIHRvcDogMzUwcHg7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5zZWNvbmQtc2VjdGlvbi1saXN0ID4gbGk6bnRoLWNoaWxkKDkpW2RhdGEtYWN0aXZlPVwidHJ1ZVwiXSB+IC50YXNrLWFuaW1hdGlvbiB7XG4gIC8qIHdpZHRoOiAxMDAlOyAqL1xuICB0b3A6IDQwMHB4O1xuICBvcGFjaXR5OiAxO1xufVxuXG4uc2Vjb25kLXNlY3Rpb24tbGlzdCA+IGxpOm50aC1jaGlsZCgxMClbZGF0YS1hY3RpdmU9XCJ0cnVlXCJdIH4gLnRhc2stYW5pbWF0aW9uIHtcbiAgLyogd2lkdGg6IDEwMCU7ICovXG4gIHRvcDogNDUwcHg7XG4gIG9wYWNpdHk6IDE7XG59XG5cbi5zZWNvbmQtc2VjdGlvbi1saXN0ID4gbGk6bnRoLWNoaWxkKDExKVtkYXRhLWFjdGl2ZT1cInRydWVcIl0gfiAudGFzay1hbmltYXRpb24ge1xuICAvKiB3aWR0aDogMTAwJTsgKi9cbiAgdG9wOiA1MDBweDtcbiAgb3BhY2l0eTogMTtcbn1cblxuLnNlY29uZC1zZWN0aW9uLWxpc3QgPiBsaTpudGgtY2hpbGQoMTIpW2RhdGEtYWN0aXZlPVwidHJ1ZVwiXSB+IC50YXNrLWFuaW1hdGlvbiB7XG4gIC8qIHdpZHRoOiAxMDAlOyAqL1xuICB0b3A6IDU1MHB4O1xuICBvcGFjaXR5OiAxO1xufVxuXG4ubGVmdCA+IC5sZWZ0LXNlY29uZC1zZWN0aW9uID4gcCB7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBmb250LXdlaWdodDogMjAwO1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5sZWZ0ID4gLmxlZnQtc2Vjb25kLXNlY3Rpb24gbGkge1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGhlaWdodDogNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAxMHB4O1xufVxuXG4ubGVmdCA+IC5sZWZ0LXNlY29uZC1zZWN0aW9uIC5jcmVhdGUtcHJvamVjdCB7XG4gIC8qIG1hcmdpbi1sZWZ0OiA1MHB4OyAqL1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgLyoganVzdGlmeS1jb250ZW50OiBjZW50ZXI7ICovXG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmxlZnQgPiAubGVmdC1zZWNvbmQtc2VjdGlvbiAuY3JlYXRlLXByb2plY3QgZGl2IHtcbiAgLyogZm9udC1zdHlsZTogaXRhbGljOyAqL1xuICBmb250LXNpemU6IDE1cHg7XG59XG5cbi5sZWZ0ID4gLmxlZnQtc2Vjb25kLXNlY3Rpb24gLmNyZWF0ZS1wcm9qZWN0OmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JhMTgxYjI4O1xufVxuXG4ubGVmdCA+IC5sZWZ0LXNlY29uZC1zZWN0aW9uIC5jcmVhdGUtcHJvamVjdDphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmExODFiNWI7XG59XG5cbi5sZWZ0ID4gLmxlZnQtc2Vjb25kLXNlY3Rpb24gLmNyZWF0ZS1wcm9qZWN0ID4gZGl2OmZpcnN0LWNoaWxkIHtcbiAgaGVpZ2h0OiAxNXB4O1xuICB3aWR0aDogMTVweDtcbn1cblxuLyogRm9vdGVyIGFkZCBuZXcgdGFzayBidXR0b24gKi9cblxuLmZvb3RlciA+IC5mb290ZXItcmlnaHQgPiAuY3JlYXRlLXRhc2sge1xuICAvKiBoZWlnaHQ6IDEwMCU7ICovXG4gIC8qIHdpZHRoOiBjYWxjKDEwMCUgLSAzMDBweCk7ICovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMTBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmZvb3RlciA+IC5mb290ZXItcmlnaHQgPiAuY3JlYXRlLXRhc2sgPiAuY3JlYXRlLXRhc2stY29udGFpbmVyIHtcbiAgd2lkdGg6IDE1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDEwcHg7XG4gIC8qIGJvcmRlci1yYWRpdXM6IDEwcHg7ICovXG4gIC8qIGJvcmRlcjogMC41cHggc29saWQgdmFyKC0tYm9yZGVyLWRhcmspOyAqL1xuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCAycHggdmFyKC0tbmV3LXRhc2stYnV0dG9uLWJvcmRlcik7XG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xuXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tbmV3LXRhc2stYnV0dG9uKTtcbiAgLyogYm94LXNoYWRvdzogIDhweCA4cHggMTZweCAjOWY5ZjlmLFxuICAgICAgICAgICAgICAgICAtOHB4IC04cHggMTZweCAjZmZmZmZmOyAqL1xufVxuXG4uZm9vdGVyXG4gID4gLmZvb3Rlci1yaWdodFxuICA+IC5jcmVhdGUtdGFza1xuICA+IC5jcmVhdGUtdGFzay1jb250YWluZXJcbiAgZGl2Om50aC1jaGlsZCgyKSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmZvb3RlclxuICA+IC5mb290ZXItcmlnaHRcbiAgPiAuY3JlYXRlLXRhc2tcbiAgPiAuY3JlYXRlLXRhc2stY29udGFpbmVyXG4gID4gZGl2OmZpcnN0LWNoaWxkIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMjBweDtcbn1cblxuLmZvb3RlciA+IC5mb290ZXItcmlnaHQgPiAuY3JlYXRlLXRhc2sgPiAuY3JlYXRlLXRhc2stY29udGFpbmVyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmV3LXRhc2stYnV0dG9uLWhvdmVyKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG4uZm9vdGVyID4gLmZvb3Rlci1yaWdodCA+IC5jcmVhdGUtdGFzayA+IC5jcmVhdGUtdGFzay1jb250YWluZXI6YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmV3LXRhc2stYnV0dG9uLWFjdGl2ZSk7XG59XG5cbi8qIERpYWxvZyBsYXlvdXQgYW5kIGFuaW1hdGlvbnMgKi9cblxuZGlhbG9nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW46IGF1dG87XG4gIHBhZGRpbmctbGVmdDogMzVweDtcbiAgcGFkZGluZy1yaWdodDogMzVweDtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAvKiBwYWRkaW5nLWxlZnQ6IDM1cHg7ICovXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xufVxuXG5kaWFsb2c6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5kaWFsb2cuaGlkZGVuIHtcbiAgb3BhY2l0eTogMDtcbiAgdG9wOiAtMjAwJTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xuICB0cmFuc2l0aW9uOlxuICAgIG9wYWNpdHkgMzAwbXMgZWFzZS1pbi1vdXQsXG4gICAgdG9wIDEwMDBtcyBlYXNlLWluLW91dCxcbiAgICB0cmFuc2Zvcm0gMTAwMG1zIGVhc2UtaW4tb3V0O1xufVxuXG5kaWFsb2cuaGlkZGVuID4gZm9ybSA+ICoge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogMTBweDtcbiAgb3BhY2l0eTogMDtcbn1cblxuZGlhbG9nLmRpc3BsYXllZCB7XG4gIG9wYWNpdHk6IDE7XG4gIHRvcDogMCU7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC4xOCwgMC44OSwgMC40MywgMS4xOSk7XG4gIC8qIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBlYXNlOyAqL1xufVxuXG5kaWFsb2cuZGlzcGxheWVkID4gZm9ybSA+ICoge1xuICB0b3A6IDBweDtcbiAgb3BhY2l0eTogMTtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7ICovXG59XG5cbmRpYWxvZy5kaXNwbGF5ZWQubmV3LXByb2plY3QgPiBmb3JtIC5wcm9qZWN0LWRpYWxvZy1uYW1lIHtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dCAyMDBtcztcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1kYXJrKTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbmRpYWxvZy5kaXNwbGF5ZWQubmV3LXByb2plY3QgPiBmb3JtIC5pbnB1dC1jb250YWluZXIge1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0IDI1MG1zO1xufVxuXG5kaWFsb2cuZGlzcGxheWVkLm5ldy1wcm9qZWN0ID4gZm9ybSAucHJvamVjdC1uYW1lLWZpZWxkLWRpdiB7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbi1vdXQgMzAwbXM7XG59XG5cbmRpYWxvZy5kaXNwbGF5ZWQubmV3LXByb2plY3QgPiBmb3JtIC5wcm9qZWN0LWNvbG9yLWZpZWxkLWRpdiB7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbi1vdXQgMzUwbXM7XG59XG5cbmRpYWxvZy5kaXNwbGF5ZWQubmV3LXByb2plY3QgPiBmb3JtID4gYnV0dG9uIHtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dCA0MDBtcztcbn1cblxuZGlhbG9nLmRpc3BsYXllZC5uZXctcHJvamVjdCA+IGZvcm0gPiAuY2xvc2UtcHJvamVjdC1kaWFsb2cge1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0IDQ1MG1zO1xufVxuXG5kaWFsb2cuZGlzcGxheWVkLm5ldy10YXNrID4gZm9ybSAudGFzay1kaWFsb2ctbmFtZSxcbmRpYWxvZy5kaXNwbGF5ZWQuZWRpdC10YXNrID4gZm9ybSAudGFzay1kaWFsb2ctbmFtZSB7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbi1vdXQgMjAwbXM7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZGFyayk7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5kaWFsb2cuZGlzcGxheWVkLm5ldy10YXNrID4gZm9ybSA+IC50YXNrLXByb2plY3QtZmllbGQtZGl2LFxuZGlhbG9nLmRpc3BsYXllZC5lZGl0LXRhc2sgPiBmb3JtID4gLnRhc2stcHJvamVjdC1maWVsZC1kaXYge1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0IDI1MG1zO1xufVxuXG5kaWFsb2cuZGlzcGxheWVkLm5ldy10YXNrID4gZm9ybSA+IC50YXNrLXRpdGxlLWZpZWxkLWRpdixcbmRpYWxvZy5kaXNwbGF5ZWQuZWRpdC10YXNrID4gZm9ybSA+IC50YXNrLXRpdGxlLWZpZWxkLWRpdiB7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbi1vdXQgMzAwbXM7XG59XG5cbmRpYWxvZy5kaXNwbGF5ZWQubmV3LXRhc2sgPiBmb3JtID4gLnRhc2stbm90ZXMtZmllbGQtZGl2LFxuZGlhbG9nLmRpc3BsYXllZC5lZGl0LXRhc2sgPiBmb3JtID4gLnRhc2stbm90ZXMtZmllbGQtZGl2IHtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dCAzNTBtcztcbn1cblxuZGlhbG9nLmRpc3BsYXllZC5uZXctdGFzayA+IGZvcm0gPiAudGFzay1wcmlvcml0eS1maWVsZC1kaXYsXG5kaWFsb2cuZGlzcGxheWVkLmVkaXQtdGFzayA+IGZvcm0gPiAudGFzay1wcmlvcml0eS1maWVsZC1kaXYge1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0IDQwMG1zO1xufVxuXG5kaWFsb2cuZGlzcGxheWVkLm5ldy10YXNrID4gZm9ybSA+IC50YXNrLWRhdGUtZmllbGQtZGl2LFxuZGlhbG9nLmRpc3BsYXllZC5lZGl0LXRhc2sgPiBmb3JtID4gLnRhc2stZGF0ZS1maWVsZC1kaXYge1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0IDQ1MG1zO1xufVxuXG5kaWFsb2cuZGlzcGxheWVkLm5ldy10YXNrID4gZm9ybSA+IGJ1dHRvbixcbmRpYWxvZy5kaXNwbGF5ZWQuZWRpdC10YXNrID4gZm9ybSA+IGJ1dHRvbiB7XG4gIHRyYW5zaXRpb246XG4gICAgb3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dCA1MDBtcyxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZSxcbiAgICBib3JkZXItY29sb3IgMC4xcyBlYXNlO1xufVxuXG5kaWFsb2cuZGlzcGxheWVkLm5ldy10YXNrID4gZm9ybSA+IC5jbG9zZS10YXNrLWRpYWxvZyxcbmRpYWxvZy5kaXNwbGF5ZWQuZWRpdC10YXNrID4gZm9ybSA+IC5jbG9zZS10YXNrLWRpYWxvZyB7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbi1vdXQgNTUwbXM7XG59XG5cbmRpYWxvZy5kaXNwbGF5ZWQudGFzay1kZWxldGUgPiBmb3JtID4gYnV0dG9uLFxuZGlhbG9nLmRpc3BsYXllZC5wcm9qZWN0LWRlbGV0ZSA+IGZvcm0gPiBidXR0b24ge1xuICB0cmFuc2l0aW9uOlxuICAgIG9wYWNpdHkgMTAwbXMgZWFzZS1pbi1vdXQgMjAwbXMsXG4gICAgYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UsXG4gICAgYm9yZGVyLWNvbG9yIDAuMXMgZWFzZTtcbn1cblxuLmRlbGV0ZS1wcm9qZWN0LWJ1dHRvbiB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIG9wYWNpdHk6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgZmlsbDogdmFyKC0taWNvbnMtdmlld3MpO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuXG4uZGVsZXRlLXByb2plY3QtYnV0dG9uOmhvdmVyIHtcbiAgZmlsbDogdmFyKC0tYmFja2dyb3VuZC1saWdodCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWljb25zLXZpZXdzKTtcbn1cblxubGkucHJvamVjdDpob3ZlciA+IC5kZWxldGUtcHJvamVjdC1idXR0b24ge1xuICBvcGFjaXR5OiAxO1xufVxuXG4ubmV3LXByb2plY3QsXG4ubmV3LXRhc2ssXG4uZWRpdC10YXNrLFxuLnRhc2stZGVsZXRlLFxuLnByb2plY3QtZGVsZXRlIHtcbiAgd2lkdGg6IDQwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kLWxpZ2h0KTtcbn1cblxuLm5ldy1wcm9qZWN0ID4gZm9ybSxcbi5uZXctdGFzayA+IGZvcm0sXG4uZWRpdC10YXNrID4gZm9ybSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGdhcDogMTBweDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4udGFzay1kZWxldGUgPiBmb3JtLFxuLnByb2plY3QtZGVsZXRlID4gZm9ybSB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdhcDogMTBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcbn1cblxuLnRhc2stZGVsZXRlID4gZm9ybSA+IGRpdixcbi5wcm9qZWN0LWRlbGV0ZSA+IGZvcm0gPiBkaXYge1xuICBncmlkLWNvbHVtbjogMSAvIDM7XG4gIGdyaWQtcm93OiAxIC8gMjtcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG59XG5cbi50YXNrLWRlbGV0ZSA+IGZvcm0gPiBidXR0b246bnRoLWNoaWxkKDEpLFxuLnByb2plY3QtZGVsZXRlID4gZm9ybSA+IGJ1dHRvbjpudGgtY2hpbGQoMSkge1xuICBncmlkLWNvbHVtbjogMiAvIDM7XG4gIGdyaWQtcm93OiAyIC8gMztcbn1cblxuLnRhc2stZGVsZXRlID4gZm9ybSA+IGJ1dHRvbjpudGgtY2hpbGQoMiksXG4ucHJvamVjdC1kZWxldGUgPiBmb3JtID4gYnV0dG9uOm50aC1jaGlsZCgyKSB7XG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcbiAgZ3JpZC1yb3c6IDIgLyAzO1xufVxuXG4ubmV3LXRhc2sgPiBmb3JtID4gLnRhc2stcHJvamVjdC1maWVsZC1kaXYsXG4ubmV3LXRhc2sgPiBmb3JtID4gLnRhc2stdGl0bGUtZmllbGQtZGl2LFxuLm5ldy10YXNrID4gZm9ybSA+IC50YXNrLW5vdGVzLWZpZWxkLWRpdixcbi5uZXctdGFzayA+IGZvcm0gPiAudGFzay1wcmlvcml0eS1maWVsZC1kaXYsXG4ubmV3LXRhc2sgPiBmb3JtID4gLnRhc2stZGF0ZS1maWVsZC1kaXYsXG4uZWRpdC10YXNrID4gZm9ybSA+IC50YXNrLXByb2plY3QtZmllbGQtZGl2LFxuLmVkaXQtdGFzayA+IGZvcm0gPiAudGFzay10aXRsZS1maWVsZC1kaXYsXG4uZWRpdC10YXNrID4gZm9ybSA+IC50YXNrLW5vdGVzLWZpZWxkLWRpdixcbi5lZGl0LXRhc2sgPiBmb3JtID4gLnRhc2stcHJpb3JpdHktZmllbGQtZGl2LFxuLmVkaXQtdGFzayA+IGZvcm0gPiAudGFzay1kYXRlLWZpZWxkLWRpdixcbi5uZXctcHJvamVjdCA+IGZvcm0gLnByb2plY3QtbmFtZS1maWVsZC1kaXYsXG4ubmV3LXByb2plY3QgPiBmb3JtIC5wcm9qZWN0LWNvbG9yLWZpZWxkLWRpdiB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi5uZXctdGFzayA+IGZvcm0gPiAudGFzay1kaWFsb2ctbmFtZSxcbi5lZGl0LXRhc2sgPiBmb3JtID4gLnRhc2stZGlhbG9nLW5hbWUsXG4ubmV3LXByb2plY3QgPiBmb3JtID4gLnByb2plY3QtZGlhbG9nLW5hbWUge1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxuLm5ldy10YXNrID4gZm9ybSA+IGJ1dHRvbixcbi5lZGl0LXRhc2sgPiBmb3JtID4gYnV0dG9uLFxuLm5ldy1wcm9qZWN0ID4gZm9ybSA+IGJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG4gIGhlaWdodDogNDBweDtcbiAgd2lkdGg6IDUwJTtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJvcmRlcjogMC41cHggc29saWQgdmFyKC0tYm9yZGVyLWRhcmspO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDFzIGVhc2U7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1Ym1pdC1idXR0b24pO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50YXNrLWRlbGV0ZSA+IGZvcm0gPiBidXR0b25bdHlwZT1cInN1Ym1pdFwiXSxcbi50YXNrLWRlbGV0ZSA+IGZvcm0gPiBidXR0b25bdHlwZT1cImNsb3NlXCJdLFxuLnByb2plY3QtZGVsZXRlID4gZm9ybSA+IGJ1dHRvblt0eXBlPVwic3VibWl0XCJdLFxuLnByb2plY3QtZGVsZXRlID4gZm9ybSA+IGJ1dHRvblt0eXBlPVwiY2xvc2VcIl0ge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCB2YXIoLS1ib3JkZXItZGFyayk7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMgZWFzZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VibWl0LWJ1dHRvbik7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRhc2stZGVsZXRlID4gZm9ybSA+IGJ1dHRvblt0eXBlPVwic3VibWl0XCJdLFxuLnByb2plY3QtZGVsZXRlID4gZm9ybSA+IGJ1dHRvblt0eXBlPVwic3VibWl0XCJdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VibWl0LWJ1dHRvbik7XG59XG5cbi50YXNrLWRlbGV0ZSA+IGZvcm0gPiBidXR0b25bdHlwZT1cImNsb3NlXCJdLFxuLnByb2plY3QtZGVsZXRlID4gZm9ybSA+IGJ1dHRvblt0eXBlPVwiY2xvc2VcIl0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kaWFsb2ctY2xvc2UtYnV0dG9uKTtcbn1cblxuLnRhc2stZGVsZXRlID4gZm9ybSA+IGJ1dHRvblt0eXBlPVwiY2xvc2VcIl06aG92ZXIsXG4ucHJvamVjdC1kZWxldGUgPiBmb3JtID4gYnV0dG9uW3R5cGU9XCJjbG9zZVwiXTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRpYWxvZy1jbG9zZS1idXR0b24taG92ZXIpO1xufVxuXG4udGFzay1kZWxldGUgPiBmb3JtID4gYnV0dG9uW3R5cGU9XCJjbG9zZVwiXTphY3RpdmUsXG4ucHJvamVjdC1kZWxldGUgPiBmb3JtID4gYnV0dG9uW3R5cGU9XCJjbG9zZVwiXTphY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kaWFsb2ctY2xvc2UtYnV0dG9uLWFjdGl2ZSk7XG59XG5cbi5uZXctdGFzayA+IGZvcm0gPiBidXR0b246Zm9jdXMsXG4uZWRpdC10YXNrID4gZm9ybSA+IGJ1dHRvbjpmb2N1cyxcbi5uZXctcHJvamVjdCA+IGZvcm0gPiBidXR0b246Zm9jdXMsXG4udGFzay1kZWxldGUgPiBmb3JtID4gYnV0dG9uOmZvY3VzLFxuLnByb2plY3QtZGVsZXRlID4gZm9ybSA+IGJ1dHRvbjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5uZXctdGFzayA+IGZvcm0gPiBidXR0b246aG92ZXIsXG4uZWRpdC10YXNrID4gZm9ybSA+IGJ1dHRvbjpob3Zlcixcbi5uZXctcHJvamVjdCA+IGZvcm0gPiBidXR0b246aG92ZXIsXG4udGFzay1kZWxldGUgPiBmb3JtID4gYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl06aG92ZXIsXG4ucHJvamVjdC1kZWxldGUgPiBmb3JtID4gYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl06aG92ZXIge1xuICBib3JkZXI6IDAuNXB4IHNvbGlkIGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdWJtaXQtYnV0dG9uLWhvdmVyKTtcbn1cblxuLm5ldy10YXNrID4gZm9ybSA+IGJ1dHRvbjphY3RpdmUsXG4uZWRpdC10YXNrID4gZm9ybSA+IGJ1dHRvbjphY3RpdmUsXG4ubmV3LXByb2plY3QgPiBmb3JtID4gYnV0dG9uOmFjdGl2ZSxcbi50YXNrLWRlbGV0ZSA+IGZvcm0gPiBidXR0b25bdHlwZT1cInN1Ym1pdFwiXTphY3RpdmUsXG4ucHJvamVjdC1kZWxldGUgPiBmb3JtID4gYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl06YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VibWl0LWJ1dHRvbi1hY3RpdmUpO1xufVxuXG4ubmV3LXRhc2sgPiBmb3JtID4gLmNsb3NlLXRhc2stZGlhbG9nLFxuLmVkaXQtdGFzayA+IGZvcm0gPiAuY2xvc2UtdGFzay1kaWFsb2csXG4ubmV3LXByb2plY3QgPiBmb3JtID4gLmNsb3NlLXByb2plY3QtZGlhbG9nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgdG9wOiAxMHB4O1xufVxuXG4ubmV3LXRhc2sgPiBmb3JtID4gLmNsb3NlLXRhc2stZGlhbG9nIHNwYW4sXG4uZWRpdC10YXNrID4gZm9ybSA+IC5jbG9zZS10YXNrLWRpYWxvZyBzcGFuLFxuLm5ldy1wcm9qZWN0ID4gZm9ybSA+IC5jbG9zZS1wcm9qZWN0LWRpYWxvZyBzcGFuIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgb3BhY2l0eTogMC43O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246XG4gICAgdHJhbnNmb3JtIDAuMjVzLFxuICAgIG9wYWNpdHkgMC4yNXM7XG59XG5cbi5uZXctdGFzayA+IGZvcm0gPiAuY2xvc2UtdGFzay1kaWFsb2c6aG92ZXIgc3Bhbixcbi5lZGl0LXRhc2sgPiBmb3JtID4gLmNsb3NlLXRhc2stZGlhbG9nOmhvdmVyIHNwYW4sXG4ubmV3LXByb2plY3QgPiBmb3JtID4gLmNsb3NlLXByb2plY3QtZGlhbG9nOmhvdmVyIHNwYW4ge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgc2NhbGUoMS4xKTtcbiAgb3BhY2l0eTogMTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4vKiBEaWFsb2cgaW5wdXQgc3R5bGVzICovXG5cbi5uZXctdGFzayA+IGZvcm0gaW5wdXQsXG4ubmV3LXRhc2sgPiBmb3JtIHNlbGVjdCxcbi5uZXctdGFzayA+IGZvcm0gdGV4dGFyZWEsXG4uZWRpdC10YXNrID4gZm9ybSBpbnB1dCxcbi5lZGl0LXRhc2sgPiBmb3JtIHNlbGVjdCxcbi5lZGl0LXRhc2sgPiBmb3JtIHRleHRhcmVhLFxuLm5ldy1wcm9qZWN0ID4gZm9ybSBpbnB1dCxcbi5uZXctcHJvamVjdCA+IGZvcm0gc2VsZWN0LFxuLm5ldy1wcm9qZWN0ID4gZm9ybSB0ZXh0YXJlYSB7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlcjogMC41cHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMjVzIGVhc2U7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgY29sb3I6IGJsYWNrO1xufVxuXG4ubmV3LXRhc2sgPiBmb3JtIGlucHV0OmhvdmVyLFxuLm5ldy10YXNrID4gZm9ybSBzZWxlY3Q6aG92ZXIsXG4ubmV3LXRhc2sgPiBmb3JtIHRleHRhcmVhOmhvdmVyLFxuLmVkaXQtdGFzayA+IGZvcm0gaW5wdXQ6aG92ZXIsXG4uZWRpdC10YXNrID4gZm9ybSBzZWxlY3Q6aG92ZXIsXG4uZWRpdC10YXNrID4gZm9ybSB0ZXh0YXJlYTpob3Zlcixcbi5uZXctcHJvamVjdCA+IGZvcm0gaW5wdXQ6aG92ZXIsXG4ubmV3LXByb2plY3QgPiBmb3JtIHNlbGVjdDpob3Zlcixcbi5uZXctcHJvamVjdCA+IGZvcm0gdGV4dGFyZWE6aG92ZXIge1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXI6IDAuNXB4IHNvbGlkIGJsYWNrO1xufVxuXG4ubmV3LXRhc2sgPiBmb3JtIGlucHV0OjpwbGFjZWhvbGRlcixcbi5uZXctdGFzayA+IGZvcm0gc2VsZWN0OjpwbGFjZWhvbGRlcixcbi5uZXctdGFzayA+IGZvcm0gdGV4dGFyZWE6OnBsYWNlaG9sZGVyLFxuLmVkaXQtdGFzayA+IGZvcm0gaW5wdXQ6OnBsYWNlaG9sZGVyLFxuLmVkaXQtdGFzayA+IGZvcm0gc2VsZWN0OjpwbGFjZWhvbGRlcixcbi5lZGl0LXRhc2sgPiBmb3JtIHRleHRhcmVhOjpwbGFjZWhvbGRlcixcbi5uZXctcHJvamVjdCA+IGZvcm0gaW5wdXQ6OnBsYWNlaG9sZGVyLFxuLm5ldy1wcm9qZWN0ID4gZm9ybSBzZWxlY3Q6OnBsYWNlaG9sZGVyLFxuLm5ldy1wcm9qZWN0ID4gZm9ybSB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogdmFyKC0taW5wdXQtcGxhY2Vob2xkZXJzLWFuZC1jaGVja2JveCk7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuLm5ldy10YXNrID4gZm9ybSB0ZXh0YXJlYSxcbi5lZGl0LXRhc2sgPiBmb3JtIHRleHRhcmVhLFxuLm5ldy1wcm9qZWN0ID4gZm9ybSB0ZXh0YXJlYSB7XG4gIHJlc2l6ZTogbm9uZTtcbn1cblxuLnByb2plY3QtY29sb3ItZmllbGQtZGl2IHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4ubmV3LXByb2plY3QgPiBmb3JtICNwcm9qZWN0LWNvbG9yIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICB3aWR0aDogODBweDtcbiAgcGFkZGluZzogNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5uZXctcHJvamVjdCA+IGZvcm0gLmlucHV0LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbn1cblxuLmljb24ge1xuICB3aWR0aDogMTVweDtcbiAgaGVpZ2h0OiAxNXB4O1xuICAvKiBmaWxsOiByZWQ7ICovXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4ubm8tdGFza3MtZmlsbGVyIHtcbiAgY29sb3I6IHZhcigtLWlucHV0LXBsYWNlaG9sZGVycy1hbmQtY2hlY2tib3gpO1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbiN0b2dnbGUtbW9kZS1idXR0b24ge1xuICAvKiBoZWlnaHQ6IDEwMHB4OyAqL1xuICAvKiB3aWR0aDogMTAwcHg7ICovXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyAqL1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTVweDtcbiAgcmlnaHQ6IDE1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgei1pbmRleDogNTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogU2FmYXJpICovXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7IC8qIEZpcmVmb3ggKi9cbiAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAvKiBJRSAxMCsgKi9cbiAgdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFN0YW5kYXJkIHN5bnRheCAqL1xufVxuXG4jdG9nZ2xlLW1vZGUtYnV0dG9uIHNwYW4ge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG59XG5cbmRpYWxvZy5uZXctdGFzayxcbmRpYWxvZy5lZGl0LXRhc2sge1xuICBoZWlnaHQ6IDQ2MHB4O1xufVxuXG5kaWFsb2cubmV3LXRhc2sgPiBmb3JtID4gYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0sXG5kaWFsb2cuZWRpdC10YXNrID4gZm9ybSA+IGJ1dHRvblt0eXBlPVwic3VibWl0XCJdIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbn1cblxuZGlhbG9nLm5ldy1wcm9qZWN0IHtcbiAgaGVpZ2h0OiAyNTBweDtcbn1cblxuZGlhbG9nLm5ldy1wcm9qZWN0ID4gZm9ybSA+IGJ1dHRvblt0eXBlPVwic3VibWl0XCJdIHtcbiAgbWFyZ2luLXRvcDogYXV0bztcbn1cblxuZGlhbG9nLnRhc2stZGVsZXRlLFxuZGlhbG9nLnByb2plY3QtZGVsZXRlIHtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxuZGlhbG9nLnRhc2stZGVsZXRlID4gZm9ybSA+IGJ1dHRvbixcbmRpYWxvZy5wcm9qZWN0LWRlbGV0ZSA+IGZvcm0gPiBidXR0b24ge1xuICBtYXJnaW4tdG9wOiBhdXRvO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFJQTtFQUNFLFNBQVM7RUFDVCxrQkFBa0IsRUFBRSxlQUFlOztFQUVuQyxnQkFBZ0I7RUFDaEIsMkJBQTJCLEVBQUUsc0JBQXNCO0VBQ25ELDZCQUE2QixFQUFFLHVDQUF1Qzs7RUFFdEUsWUFBWTtFQUNaLHVCQUF1QixFQUFFLHdCQUF3QjtFQUNqRCxtQkFBbUIsRUFBRSx3QkFBd0I7O0VBRTdDLFlBQVk7RUFDWiw4QkFBOEIsRUFBRSw4QkFBOEI7RUFDOUQsK0JBQStCLEVBQUUsK0JBQStCO0VBQ2hFLHdCQUF3QixFQUFFLHdCQUF3Qjs7RUFFbEQsNEJBQTRCO0VBQzVCLGtDQUFrQyxFQUFFLGdDQUFnQztFQUNwRSxpQ0FBaUMsRUFBRSxpQ0FBaUM7RUFDcEUsK0JBQStCOztFQUUvQix5Q0FBeUMsRUFBRSw4QkFBOEI7RUFDekU7Ozs7R0FJQyxFQUFFLG9DQUFvQztFQUN2Qzs7OztHQUlDLEVBQUUscUNBQXFDOztFQUV4QyxVQUFVO0VBQ1Ysc0JBQXNCLEVBQUUsb0ZBQW9GOztFQUU1RywwQkFBMEI7RUFDMUIsMkJBQTJCLEVBQUUsdUNBQXVDO0VBQ3BFLHNDQUFzQyxFQUFFLDZDQUE2QztFQUNyRix1Q0FBdUM7O0VBRXZDLHFDQUFxQztFQUNyQyx1Q0FBdUMsRUFBRSxnREFBZ0Q7RUFDekYsaUJBQWlCLEVBQUUsbUJBQW1CO0FBQ3hDOztBQUVBO0VBQ0UsU0FBUztFQUNULHFCQUFxQixFQUFFLGVBQWU7O0VBRXRDLGdCQUFn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O0FBRUE7O0VBRUUsYUFBYTtBQUNmOztBQUVBOztFQUVFLGdCQUFnQjtBQUNsQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NYXRlcmlhbCtTeW1ib2xzK091dGxpbmVkOm9wc3osd2dodCxGSUxMLEdSQURAMjAuLjQ4LDEwMC4uNzAwLDAuLjEsLTUwLi4yMDBcXFwiKTtcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Kb3NlZmluK1NhbnM6d2dodEAxMDAmZmFtaWx5PUxhdG86d2dodEAzMDAmZmFtaWx5PU51bml0bzppdGFsLHdnaHRAMCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDAmZmFtaWx5PVJvYm90bzp3Z2h0QDEwMCZmYW1pbHk9UnViaWs6d2dodEAzMDAmZGlzcGxheT1zd2FwXFxcIik7XFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TWF0ZXJpYWwrU3ltYm9scytPdXRsaW5lZDpvcHN6LHdnaHQsRklMTCxHUkFEQDI0LDQwMCwwLDBcXFwiKTtcXG5cXG46cm9vdC5saWdodC1tb2RlIHtcXG4gIC8qIEZvbnQgKi9cXG4gIC0tZm9udC1jb2xvcjogIzMzMzsgLyp1c2VkIGluIGZvbnQqL1xcblxcbiAgLyogQmFja2dyb3VuZHMgKi9cXG4gIC0tYmFja2dyb3VuZC1saWdodDogI2VkZWRlOTsgLyp1c2VkIGluIGJhY2tncm91bmRzKi9cXG4gIC0tYmFja2dyb3VuZC1jb2xvcjogIzNmMWUwOTNlOyAvKnVzZWQgaW4gbmF2aWdhdGlvbiBwYW5lbCBvbiB0aGUgbGVmdCovXFxuXFxuICAvKiBCb3JkZXJzICovXFxuICAtLWJvcmRlci1jb2xvcjogI2E5YTlhOTsgLyp1c2VkIGluIGJvcmRlciBjb2xvcnMqL1xcbiAgLS1ib3JkZXItZGFyazogIzk5OTsgLyp1c2VkIGluIGJvcmRlciBjb2xvcnMqL1xcblxcbiAgLyogQnV0dG9ucyAqL1xcbiAgLS1zdWJtaXQtYnV0dG9uLWhvdmVyOiAjMmVjYzcxOyAvKnVzZWQgaW4gU3VibWl0IGJ1dHRvbiBob3ZlciovXFxuICAtLXN1Ym1pdC1idXR0b24tYWN0aXZlOiAjMjdhZTYwOyAvKnVzZWQgaW4gU3VibWl0IGJ1dHRvbiBhY3RpdmUqL1xcbiAgLS1zdWJtaXQtYnV0dG9uOiAjYzhlNmM5OyAvKnVzZWQgaW4gU3VibWl0IGJ1dHRvbiovXFxuXFxuICAtLW5ldy10YXNrLWJ1dHRvbjogIzRlNGU0ZTQ3O1xcbiAgLS1uZXctdGFzay1idXR0b24taG92ZXI6ICM0ZTRlNGU0NzsgLyp1c2VkIGluIG5ldyB0YXNrIGJ1dHRvbiBob3ZlciovXFxuICAtLW5ldy10YXNrLWJ1dHRvbi1hY3RpdmU6ICM4ZThlOGU7IC8qdXNlZCBpbiBuZXcgdGFzayBidXR0b24gYWN0aXZlKi9cXG4gIC0tbmV3LXRhc2stYnV0dG9uLWJvcmRlcjogYmxhY2s7XFxuXFxuICAtLWRpYWxvZy1jbG9zZS1idXR0b246IHJnYigxNjksIDE2OSwgMTY5KTsgLyp1c2VkIGluIGRpYWxvZyBjbG9zZSBidXR0b24qL1xcbiAgLS1kaWFsb2ctY2xvc2UtYnV0dG9uLWhvdmVyOiByZ2IoXFxuICAgIDEzNixcXG4gICAgMTM2LFxcbiAgICAxMzZcXG4gICk7IC8qdXNlZCBpbiBkaWFsb2cgY2xvc2UgYnV0dG9uIGhvdmVyKi9cXG4gIC0tZGlhbG9nLWNsb3NlLWJ1dHRvbi1hY3RpdmU6IHJnYihcXG4gICAgMTA4LFxcbiAgICAxMDgsXFxuICAgIDEwOFxcbiAgKTsgLyp1c2VkIGluIGRpYWxvZyBjbG9zZSBidXR0b24gYWN0aXZlKi9cXG5cXG4gIC8qIEljb25zICovXFxuICAtLWljb25zLXZpZXdzOiAjODExYzFjOyAvKnVzZWQgaW4gdGFzayBkZWxldGUgYW5kIGVkaXQgaWNvbnMsIHByb2plY3QgZGVsZXRlIGljb24sIGFuZCBpbiB2aWV3cyBvbiB0aGUgbGVmdCovXFxuXFxuICAvKiBTY3JvbGwgYmFyIGFuZCBzbGlkZXIgKi9cXG4gIC0tc2Nyb2xsYmFyLXNsaWRlcjogIzRjMWYxZjsgLyp1c2VkIHNjcm9sbCBiYXIgYW5kIHNsaWRlciBhbmltYXRpb24qL1xcbiAgLS1uYXZpZ2F0aW9uLWVsZW1lbnRzLWhvdmVyOiAjN2E3YTdhMjg7IC8qdXNlZCBpbiBuYXZpZ2F0aW9uIHBhbmVsIG9uIHRoZSBsZWZ0IGhvdmVyKi9cXG4gIC0tbmF2aWdhdGlvbi1lbGVtZW50cy1hY3RpdmU6ICNkZjFjMWYyODtcXG5cXG4gIC8qIElucHV0IHBsYWNlaG9sZGVyIGFuZCBjaGVja2JveGVzICovXFxuICAtLWlucHV0LXBsYWNlaG9sZGVycy1hbmQtY2hlY2tib3g6ICM4ODg7IC8qdXNlZCBpbnB1dCBwbGFjZWhvbGRlcnMgYW5kIGluIGNoZWNrYm94IGljb24gKi9cXG4gIC0tY2hlY2tib3g6IGdyZWVuOyAvKnVzZWQgaW4gY2hlY2tib3gqL1xcbn1cXG5cXG46cm9vdC5kYXJrLW1vZGUge1xcbiAgLyogRm9udCAqL1xcbiAgLS1mb250LWNvbG9yOiAjZjJlY2ZmOyAvKnVzZWQgaW4gZm9udCovXFxuXFxuICAvKiBCYWNrZ3JvdW5kcyAqL1xcbiAgLS1iYWNrZ3JvdW5kLWxpZ2h0OiAjM2UzZTNlOyAvKnVzZWQgaW4gYmFja2dyb3VuZHMqL1xcbiAgLS1iYWNrZ3JvdW5kLWNvbG9yOiAjMjcyNzI3OyAvKnVzZWQgaW4gbmF2aWdhdGlvbiBwYW5lbCBvbiB0aGUgbGVmdCovXFxuXFxuICAvKiBCb3JkZXJzICovXFxuICAtLWJvcmRlci1jb2xvcjogYmxhY2s7IC8qdXNlZCBpbiBib3JkZXIgY29sb3JzKi9cXG4gIC0tYm9yZGVyLWRhcms6ICM5OTk7IC8qdXNlZCBpbiBib3JkZXIgY29sb3JzKi9cXG5cXG4gIC8qIEJ1dHRvbnMgKi9cXG4gIC0tc3VibWl0LWJ1dHRvbi1ob3ZlcjogI2Q1MWMxZjI4OyAvKnVzZWQgaW4gU3VibWl0IGJ1dHRvbiBob3ZlciovXFxuICAtLXN1Ym1pdC1idXR0b24tYWN0aXZlOiAjYmExODFiNWI7IC8qdXNlZCBpbiBTdWJtaXQgYnV0dG9uIGFjdGl2ZSovXFxuICAtLXN1Ym1pdC1idXR0b246ICNiYTE4MWIyODsgLyp1c2VkIGluIFN1Ym1pdCBidXR0b24qL1xcblxcbiAgLS1uZXctdGFzay1idXR0b246ICNiYTE4MWIyODtcXG4gIC0tbmV3LXRhc2stYnV0dG9uLWhvdmVyOiAjYmExODFiMjg7IC8qdXNlZCBpbiBuZXcgdGFzayBidXR0b24gaG92ZXIqL1xcbiAgLS1uZXctdGFzay1idXR0b24tYWN0aXZlOiAjYmExODFiNWI7IC8qdXNlZCBpbiBuZXcgdGFzayBidXR0b24gYWN0aXZlKi9cXG4gIC0tbmV3LXRhc2stYnV0dG9uLWJvcmRlcjogYmxhY2s7XFxuXFxuICAtLWRpYWxvZy1jbG9zZS1idXR0b246IHJnYigxNjksIDE2OSwgMTY5KTsgLyp1c2VkIGluIGRpYWxvZyBjbG9zZSBidXR0b24qL1xcbiAgLS1kaWFsb2ctY2xvc2UtYnV0dG9uLWhvdmVyOiByZ2IoXFxuICAgIDEzNixcXG4gICAgMTM2LFxcbiAgICAxMzZcXG4gICk7IC8qdXNlZCBpbiBkaWFsb2cgY2xvc2UgYnV0dG9uIGhvdmVyKi9cXG4gIC0tZGlhbG9nLWNsb3NlLWJ1dHRvbi1hY3RpdmU6IHJnYihcXG4gICAgMTA4LFxcbiAgICAxMDgsXFxuICAgIDEwOFxcbiAgKTsgLyp1c2VkIGluIGRpYWxvZyBjbG9zZSBidXR0b24gYWN0aXZlKi9cXG5cXG4gIC8qIEljb25zICovXFxuICAtLWljb25zLXZpZXdzOiAjODg0MDQwOyAvKnVzZWQgaW4gdGFzayBkZWxldGUgYW5kIGVkaXQgaWNvbnMsIHByb2plY3QgZGVsZXRlIGljb24sIGFuZCBpbiB2aWV3cyBvbiB0aGUgbGVmdCovXFxuXFxuICAvKiBTY3JvbGwgYmFyIGFuZCBzbGlkZXIgKi9cXG4gIC0tc2Nyb2xsYmFyLXNsaWRlcjogI2FiMzczNzsgLyp1c2VkIHNjcm9sbCBiYXIgYW5kIHNsaWRlciBhbmltYXRpb24qL1xcbiAgLS1uYXZpZ2F0aW9uLWVsZW1lbnRzLWhvdmVyOiAjN2E3YTdhMjg7IC8qdXNlZCBpbiBuYXZpZ2F0aW9uIHBhbmVsIG9uIHRoZSBsZWZ0IGhvdmVyKi9cXG4gIC0tbmF2aWdhdGlvbi1lbGVtZW50cy1hY3RpdmU6ICNkZjFjMWYyODtcXG5cXG4gIC8qIElucHV0IHBsYWNlaG9sZGVyIGFuZCBjaGVja2JveGVzICovXFxuICAtLWlucHV0LXBsYWNlaG9sZGVycy1hbmQtY2hlY2tib3g6ICM4ODg7IC8qdXNlZCBpbnB1dCBwbGFjZWhvbGRlcnMgYW5kIGluIGNoZWNrYm94IGljb24gKi9cXG4gIC0tY2hlY2tib3g6IGdyZWVuOyAvKnVzZWQgaW4gY2hlY2tib3gqL1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA0cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB6LWluZGV4OiA5OTk5O1xcbn1cXG5cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXNjcm9sbGJhci1zbGlkZXIpOyAvKiBDaGFuZ2UgdGhlIGNvbG9yIHRvIHlvdXIgcHJlZmVyZW5jZSAqL1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgei1pbmRleDogOTk5OTtcXG59XFxuXFxuOjotd2Via2l0LXNjcm9sbGJhcjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWxpZ2h0KTsgLyogQ2hhbmdlIHRoZSBjb2xvciB0byB5b3VyIHByZWZlcmVuY2UgKi9cXG4gIHotaW5kZXg6IDk5OTk7XFxufVxcblxcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWRhcmspOyAvKiBDaGFuZ2UgdGhlIGNvbG9yIHRvIHlvdXIgcHJlZmVyZW5jZSAqL1xcbiAgei1pbmRleDogOTk5OTtcXG59XFxuXFxuOjpiYWNrZHJvcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwODg7XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcXG59XFxuXFxuLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xcbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6XFxuICAgIFxcXCJGSUxMXFxcIiAwLFxcbiAgICBcXFwid2dodFxcXCIgNDAwLFxcbiAgICBcXFwiR1JBRFxcXCIgMCxcXG4gICAgXFxcIm9wc3pcXFwiIDI0O1xcbn1cXG5cXG4vKiBHZW5lcmFsIGxheW91dCAqL1xcblxcbioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBjb2xvcjogdmFyKC0tZm9udC1jb2xvcik7XFxuICBmb250LWZhbWlseTogXFxcIk51bml0b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogMzAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtbGlnaHQpO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuLm1haW4ge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMjAwcHgsIDFmcikgM2ZyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4ubWFpbiA+IC5sZWZ0IHtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgZmxleDogMCAwIDMwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgLyogaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMDBweCk7ICovXFxuICBoZWlnaHQ6IDEwMCU7XFxuICAvKiBvdmVyZmxvdzogYXV0bzsgKi9cXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIC8qIHBvc2l0aW9uOiBzdGlja3k7ICovXFxufVxcblxcbi5tYWluID4gLnJpZ2h0IHtcXG4gIGZsZXg6IDE7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEwMHB4KTtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmZvb3RlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLyogaGVpZ2h0OiAxMDBweDsgKi9cXG4gIC8qIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpOyAqL1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAyMHB4O1xcbiAgLyogd2lkdGg6IDEwMCU7ICovXFxuICBsZWZ0OiA1MCU7XFxuICBib3gtc2hhZG93OiAwcHggLTUwcHggMjRweCAtMjBweCB2YXIoLS1iYWNrZ3JvdW5kLWxpZ2h0KTtcXG4gIC8qIGJveC1zaGFkb3c6IC0xNTBweCAtNDBweCAyMXB4IC0zMHB4IGJsYWNrOyAqL1xcbn1cXG5cXG4uZm9vdGVyID4gLmZvb3Rlci1sZWZ0IHtcXG4gIGZsZXg6IDAgMCAzMDBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcXG59XFxuXFxuLmZvb3RlciA+IC5mb290ZXItcmlnaHQge1xcbiAgZmxleDogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtbGlnaHQpO1xcbn1cXG5cXG4ucmlnaHQtZmlyc3QtaGVhZGVyIHtcXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICAvKiBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLWRhcmspOyAqL1xcbiAgd2lkdGg6IGNsYW1wKDMwMHB4LCA3MCUsIDcwMHB4KTtcXG59XFxuXFxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24ge1xcbiAgcGFkZGluZy1yaWdodDogY2xhbXAoMTBweCwgOSUsIDEwMHB4KTtcXG4gIHBhZGRpbmctbGVmdDogY2xhbXAoMTBweCwgOSUsIDEwMHB4KTtcXG4gIC8qIHBhZGRpbmctbGVmdDogbWlubWF4KDEwcHgsIDEwMHB4KTsgKi9cXG4gIHBhZGRpbmctdG9wOiA1MHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjazsgKi9cXG4gIC8qIG92ZXJmbG93OiBhdXRvOyAqL1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDNweDtcXG4gIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW4tYm90dG9tOiAxNTBweDtcXG59XFxuXFxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzayB7XFxuICAvKiBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpOyAqL1xcbiAgLyogYm9yZGVyLXJhZGl1czogNXB4OyAqL1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxuICBwYWRkaW5nLXRvcDogNXB4O1xcblxcbiAgZmxleDogMDtcXG4gIC8qIHdpZHRoOiBjbGFtcCgyMDBweCwgNjAlLCA4MDBweCk7ICovXFxuICBvcGFjaXR5OiAxO1xcbiAgdHJhbnNpdGlvbjogYWxsIDE3NW1zIGVhc2UtaW47XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGdhcDogY2xhbXAoMjBweCwgNSUsIDQwcHgpO1xcbiAgbWluLXdpZHRoOiAzMDBweDtcXG59XFxuXFxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzayA+IC50YXNrLWxlZnQtc2VjdGlvbiB7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjFzIGVhc2U7XFxufVxcblxcbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2sgPiAudGFzay1sZWZ0LXNlY3Rpb24uY2hlY2tlZCBzdmcgcGF0aCxcXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrID4gLnRhc2stbGVmdC1zZWN0aW9uLmNoZWNrZWQgc3ZnIGNpcmNsZSB7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbiAgc3Ryb2tlOiB2YXIoLS1jaGVja2JveCk7XFxuICBzdHJva2Utd2lkdGg6IDFweDtcXG59XFxuXFxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzayA+IC50YXNrLWxlZnQtc2VjdGlvbi5jaGVja2VkIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcXG59XFxuXFxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzayA+IC50YXNrLWxlZnQtc2VjdGlvbi51bmNoZWNrZWQgc3ZnIHBhdGgge1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzazpob3ZlciA+IC50YXNrLWxlZnQtc2VjdGlvbiB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xcyBlYXNlO1xcbn1cXG5cXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrOmhvdmVyID4gLnRhc2stbGVmdC1zZWN0aW9uIGNpcmNsZSB7XFxuICBzdHJva2U6IHZhcigtLWNoZWNrYm94KTtcXG59XFxuXFxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzazpob3ZlciA+IC50YXNrLWxlZnQtc2VjdGlvbiBwYXRoLFxcbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2s6aG92ZXIgPiAudGFzay1sZWZ0LXNlY3Rpb24gY2lyY2xlIHtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrID4gLnRhc2stbGVmdC1zZWN0aW9uID4gc3ZnIGNpcmNsZSB7XFxuICBmaWxsOiBub25lO1xcbiAgc3Ryb2tlOiB2YXIoLS1pbnB1dC1wbGFjZWhvbGRlcnMtYW5kLWNoZWNrYm94KTtcXG59XFxuXFxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzayA+IC50YXNrLWxlZnQtc2VjdGlvbiA+IHN2ZyBwYXRoIHtcXG4gIGZpbGw6IG5vbmU7XFxuICBzdHJva2U6IHZhcigtLWlucHV0LXBsYWNlaG9sZGVycy1hbmQtY2hlY2tib3gpO1xcbn1cXG5cXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrID4gLnRhc2stcmlnaHQtc2VjdGlvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg4LCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciAxZnI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrID4gLnRhc2stcmlnaHQtc2VjdGlvbjpob3ZlciB7XFxuICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcXG59XFxuXFxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzayA+IC50YXNrLXJpZ2h0LXNlY3Rpb24gPiAudGFzay1wcm9qZWN0ID4gKiB7XFxuICBwYWRkaW5nOiAxcHggNXB4IDFweCA1cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZGFyayk7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG5cXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrID4gLnRhc2stcmlnaHQtc2VjdGlvbiA+IC50YXNrLXByb2plY3Qge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyA5O1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2sgPiAudGFzay1yaWdodC1zZWN0aW9uID4gLnRhc2stdGl0bGUtZmllbGQge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyA5O1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrID4gLnRhc2stcmlnaHQtc2VjdGlvbiA+IC50YXNrLWRhdGUtZmllbGQge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyA5O1xcbiAgZ3JpZC1yb3c6IDQgLyA1O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG5cXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrID4gLnRhc2stcmlnaHQtc2VjdGlvbiA+IC50YXNrLW5vdGVzLWZpZWxkIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gOTtcXG4gIGdyaWQtcm93OiAzIC8gNDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuXFxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzayA+IC50YXNrLXJpZ2h0LXNlY3Rpb24gPiAudGFzay1kZWxldGUtYnV0dG9uIHtcXG4gIGdyaWQtY29sdW1uOiA4IC8gOTtcXG4gIGdyaWQtcm93OiAyIC8gNDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrID4gLnRhc2stcmlnaHQtc2VjdGlvbiA+IC50YXNrLWVkaXQtYnV0dG9uIHtcXG4gIGdyaWQtY29sdW1uOiA3IC8gODtcXG4gIGdyaWQtcm93OiAyIC8gNDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrID4gLnRhc2stcmlnaHQtc2VjdGlvbjpob3ZlciA+IC50YXNrLWRlbGV0ZS1idXR0b24sXFxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzayA+IC50YXNrLXJpZ2h0LXNlY3Rpb246aG92ZXIgPiAudGFzay1lZGl0LWJ1dHRvbiB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrID4gLnRhc2stcmlnaHQtc2VjdGlvbiA+IC50YXNrLWRlbGV0ZS1idXR0b24gc3BhbixcXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrID4gLnRhc2stcmlnaHQtc2VjdGlvbiA+IC50YXNrLWVkaXQtYnV0dG9uIHNwYW4ge1xcbiAgY29sb3I6IHZhcigtLWljb25zLXZpZXdzKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtbGlnaHQpO1xcbn1cXG5cXG4ucmlnaHQtZmlyc3Qtc2VjdGlvblxcbiAgPiAudGFza1xcbiAgPiAudGFzay1yaWdodC1zZWN0aW9uOmhvdmVyXFxuICA+IC50YXNrLWRlbGV0ZS1idXR0b25cXG4gIHNwYW4sXFxuLnJpZ2h0LWZpcnN0LXNlY3Rpb25cXG4gID4gLnRhc2tcXG4gID4gLnRhc2stcmlnaHQtc2VjdGlvbjpob3ZlclxcbiAgPiAudGFzay1lZGl0LWJ1dHRvblxcbiAgc3BhbiB7XFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgY29sb3I6IHZhcigtLWljb25zLXZpZXdzKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtbGlnaHQpO1xcbn1cXG5cXG4ucmlnaHQtZmlyc3Qtc2VjdGlvblxcbiAgPiAudGFza1xcbiAgPiAudGFzay1yaWdodC1zZWN0aW9uOmhvdmVyXFxuICA+IC50YXNrLWRlbGV0ZS1idXR0b246aG92ZXJcXG4gIHNwYW4sXFxuLnJpZ2h0LWZpcnN0LXNlY3Rpb25cXG4gID4gLnRhc2tcXG4gID4gLnRhc2stcmlnaHQtc2VjdGlvbjpob3ZlclxcbiAgPiAudGFzay1lZGl0LWJ1dHRvbjpob3ZlclxcbiAgc3BhbiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pY29ucy12aWV3cyk7XFxuICBjb2xvcjogdmFyKC0tYmFja2dyb3VuZC1saWdodCk7XFxufVxcblxcbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2sgPiAudGFzay1yaWdodC1zZWN0aW9uID4gLnRhc2stZGF0ZS1maWVsZDo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcMUYzQUZcXFwiO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTZWdvZSBVSVxcXCIsIHNhbnMtc2VyaWY7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuXFxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzay1kaXZpZGVyIHtcXG4gIG1pbi1oZWlnaHQ6IDFweDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYm9yZGVyLWNvbG9yKTtcXG4gIHRyYW5zaXRpb246IGFsbCAxNzVtcyBlYXNlLWluO1xcbiAgb3BhY2l0eTogMTtcXG4gIG1pbi13aWR0aDogMzAwcHg7XFxufVxcblxcbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2suaGlkZGVuLFxcbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2stZGl2aWRlci5oaWRkZW4ge1xcbiAgdHJhbnNpdGlvbjogYWxsIDE3NW1zIGVhc2UtaW47XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4ucmlnaHQtZmlyc3Qtc2VjdGlvbiA+IC50YXNrID4gZGl2ID4gZGl2IHtcXG4gIG9wYWNpdHk6IDE7XFxuICB0cmFuc2l0aW9uOiBhbGwgMTc1bXMgZWFzZS1pbjtcXG59XFxuXFxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzayA+IGRpdiA+IGRpdi5oaWRkZW4ge1xcbiAgb3BhY2l0eTogMDtcXG59XFxuXFxuLnRhc2stcHJvamVjdC1jb2xvciB7XFxuICBoZWlnaHQ6IDEwcHg7XFxuICB3aWR0aDogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJvcmRlcjogMC41cHggc29saWQgdmFyKC0taW5wdXQtcGxhY2Vob2xkZXJzLWFuZC1jaGVja2JveCk7XFxufVxcblxcbi8qIExlZnQgZGl2IGxheW91dCAqL1xcblxcbi5sZWZ0ID4gLmxlZnQtZmlyc3Qtc2VjdGlvbiB7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgLyogb3ZlcmZsb3c6IGF1dG87ICovXFxuICBmbGV4OiAwIDAgMjAwcHg7XFxuICAvKiBtYXJnaW4tbGVmdDogMTBweDsgKi9cXG59XFxuXFxuLmxlZnQgPiAubGVmdC1zZWNvbmQtc2VjdGlvbiB7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgLyogb3ZlcmZsb3c6IGF1dG87ICovXFxuICBmbGV4OiAxIDAgMjAwcHg7XFxuICAvKiBtYXJnaW4tbGVmdDogMTBweDsgKi9cXG59XFxuXFxuLmxlZnQgPiAubGVmdC1maXJzdC1zZWN0aW9uID4gcCB7XFxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXdlaWdodDogMjAwO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5sZWZ0ID4gLmxlZnQtZmlyc3Qtc2VjdGlvbiB1bCxcXG4ubGVmdCA+IC5sZWZ0LXNlY29uZC1zZWN0aW9uIHVsIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmxlZnQgPiAubGVmdC1maXJzdC1zZWN0aW9uIGxpIHtcXG4gIHBhZGRpbmctbGVmdDogMzBweDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHotaW5kZXg6IDE7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5sZWZ0ID4gLmxlZnQtc2Vjb25kLXNlY3Rpb24gbGkge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubGVmdCA+IC5sZWZ0LWZpcnN0LXNlY3Rpb24gbGkgPiAuaW1hZ2Uge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxufVxcblxcbi8qIFNsaWRlciBvbiB2aWV3cyAqL1xcblxcbi5sZWZ0ID4gLmxlZnQtZmlyc3Qtc2VjdGlvbiAudGFzay1hbmltYXRpb24sXFxuLmxlZnQgPiAubGVmdC1zZWNvbmQtc2VjdGlvbiBsaVtkYXRhLWFjdGl2ZT1cXFwidHJ1ZVxcXCJdIH4gLnRhc2stYW5pbWF0aW9uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIC8qIHRvcDogMDsgKi9cXG4gIGhlaWdodDogNTBweDtcXG4gIGJvcmRlci1sZWZ0OiA2cHggc29saWQgdmFyKC0tc2Nyb2xsYmFyLXNsaWRlcik7XFxuICB6LWluZGV4OiAwO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG4gIG9wYWNpdHk6IDA7XFxufVxcblxcbi52aWV3cyA+IGxpOm50aC1jaGlsZCgxKVtkYXRhLWFjdGl2ZT1cXFwidHJ1ZVxcXCJdIH4gLnRhc2stYW5pbWF0aW9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdG9wOiAwO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnZpZXdzID4gbGk6bnRoLWNoaWxkKDIpW2RhdGEtYWN0aXZlPVxcXCJ0cnVlXFxcIl0gfiAudGFzay1hbmltYXRpb24ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0b3A6IDUwcHg7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4udmlld3MgPiBsaTpudGgtY2hpbGQoMylbZGF0YS1hY3RpdmU9XFxcInRydWVcXFwiXSB+IC50YXNrLWFuaW1hdGlvbiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRvcDogMTAwcHg7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4vKiBWaWV3cyBzdHlsZXMgKi9cXG5cXG4ubGVmdCA+IC5sZWZ0LWZpcnN0LXNlY3Rpb24gbGlbZGF0YS1hY3RpdmU9XFxcImZhbHNlXFxcIl06aG92ZXIsXFxuLmxlZnQgPiAubGVmdC1zZWNvbmQtc2VjdGlvbiBsaTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uYXZpZ2F0aW9uLWVsZW1lbnRzLWhvdmVyKTtcXG59XFxuXFxuLmxlZnQgPiAubGVmdC1maXJzdC1zZWN0aW9uIGxpW2RhdGEtYWN0aXZlPVxcXCJ0cnVlXFxcIl0gPiBkaXYgPiBzdmcge1xcbiAgZmlsbDogdmFyKC0taWNvbnMtdmlld3MpO1xcbn1cXG5cXG4ubGVmdCA+IC5sZWZ0LWZpcnN0LXNlY3Rpb24gbGlbZGF0YS1hY3RpdmU9XFxcImZhbHNlXFxcIl0gPiBkaXYgPiBzdmcge1xcbiAgZmlsbDogdmFyKC0tZm9udC1jb2xvcik7XFxufVxcblxcbi5sZWZ0ID4gLmxlZnQtZmlyc3Qtc2VjdGlvbiBsaVtkYXRhLWFjdGl2ZT1cXFwidHJ1ZVxcXCJdID4gcCB7XFxuICBjb2xvcjogdmFyKC0taWNvbnMtdmlld3MpO1xcbn1cXG5cXG4ubGVmdCA+IC5sZWZ0LXNlY29uZC1zZWN0aW9uIGxpLmZvbnQtYWNjZW50ID4gZGl2IHtcXG4gIGNvbG9yOiB2YXIoLS1pY29ucy12aWV3cyk7XFxufVxcblxcbi5sZWZ0ID4gLmxlZnQtZmlyc3Qtc2VjdGlvbiBsaVtkYXRhLWFjdGl2ZT1cXFwiZmFsc2VcXFwiXTphY3RpdmUsXFxuLmxlZnQgPiAubGVmdC1zZWNvbmQtc2VjdGlvbiBsaTphY3RpdmU6bm90KC5ob3ZlcmVkLWRlbGV0ZSkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbmF2aWdhdGlvbi1lbGVtZW50cy1hY3RpdmUpO1xcbn1cXG5cXG4vKiBTbGlkZXIgb24gcHJvamVjdHMgKi9cXG5cXG4uc2Vjb25kLXNlY3Rpb24tbGlzdCA+IGxpOm50aC1jaGlsZCgxKVtkYXRhLWFjdGl2ZT1cXFwidHJ1ZVxcXCJdIH4gLnRhc2stYW5pbWF0aW9uIHtcXG4gIC8qIHdpZHRoOiAxMDAlOyAqL1xcbiAgdG9wOiAwO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnNlY29uZC1zZWN0aW9uLWxpc3QgPiBsaTpudGgtY2hpbGQoMilbZGF0YS1hY3RpdmU9XFxcInRydWVcXFwiXSB+IC50YXNrLWFuaW1hdGlvbiB7XFxuICAvKiB3aWR0aDogMTAwJTsgKi9cXG4gIHRvcDogNTBweDtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5zZWNvbmQtc2VjdGlvbi1saXN0ID4gbGk6bnRoLWNoaWxkKDMpW2RhdGEtYWN0aXZlPVxcXCJ0cnVlXFxcIl0gfiAudGFzay1hbmltYXRpb24ge1xcbiAgLyogd2lkdGg6IDEwMCU7ICovXFxuICB0b3A6IDEwMHB4O1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnNlY29uZC1zZWN0aW9uLWxpc3QgPiBsaTpudGgtY2hpbGQoNClbZGF0YS1hY3RpdmU9XFxcInRydWVcXFwiXSB+IC50YXNrLWFuaW1hdGlvbiB7XFxuICAvKiB3aWR0aDogMTAwJTsgKi9cXG4gIHRvcDogMTUwcHg7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uc2Vjb25kLXNlY3Rpb24tbGlzdCA+IGxpOm50aC1jaGlsZCg1KVtkYXRhLWFjdGl2ZT1cXFwidHJ1ZVxcXCJdIH4gLnRhc2stYW5pbWF0aW9uIHtcXG4gIC8qIHdpZHRoOiAxMDAlOyAqL1xcbiAgdG9wOiAyMDBweDtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5zZWNvbmQtc2VjdGlvbi1saXN0ID4gbGk6bnRoLWNoaWxkKDYpW2RhdGEtYWN0aXZlPVxcXCJ0cnVlXFxcIl0gfiAudGFzay1hbmltYXRpb24ge1xcbiAgLyogd2lkdGg6IDEwMCU7ICovXFxuICB0b3A6IDI1MHB4O1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnNlY29uZC1zZWN0aW9uLWxpc3QgPiBsaTpudGgtY2hpbGQoNylbZGF0YS1hY3RpdmU9XFxcInRydWVcXFwiXSB+IC50YXNrLWFuaW1hdGlvbiB7XFxuICAvKiB3aWR0aDogMTAwJTsgKi9cXG4gIHRvcDogMzAwcHg7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uc2Vjb25kLXNlY3Rpb24tbGlzdCA+IGxpOm50aC1jaGlsZCg4KVtkYXRhLWFjdGl2ZT1cXFwidHJ1ZVxcXCJdIH4gLnRhc2stYW5pbWF0aW9uIHtcXG4gIC8qIHdpZHRoOiAxMDAlOyAqL1xcbiAgdG9wOiAzNTBweDtcXG4gIG9wYWNpdHk6IDE7XFxufVxcblxcbi5zZWNvbmQtc2VjdGlvbi1saXN0ID4gbGk6bnRoLWNoaWxkKDkpW2RhdGEtYWN0aXZlPVxcXCJ0cnVlXFxcIl0gfiAudGFzay1hbmltYXRpb24ge1xcbiAgLyogd2lkdGg6IDEwMCU7ICovXFxuICB0b3A6IDQwMHB4O1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnNlY29uZC1zZWN0aW9uLWxpc3QgPiBsaTpudGgtY2hpbGQoMTApW2RhdGEtYWN0aXZlPVxcXCJ0cnVlXFxcIl0gfiAudGFzay1hbmltYXRpb24ge1xcbiAgLyogd2lkdGg6IDEwMCU7ICovXFxuICB0b3A6IDQ1MHB4O1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnNlY29uZC1zZWN0aW9uLWxpc3QgPiBsaTpudGgtY2hpbGQoMTEpW2RhdGEtYWN0aXZlPVxcXCJ0cnVlXFxcIl0gfiAudGFzay1hbmltYXRpb24ge1xcbiAgLyogd2lkdGg6IDEwMCU7ICovXFxuICB0b3A6IDUwMHB4O1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnNlY29uZC1zZWN0aW9uLWxpc3QgPiBsaTpudGgtY2hpbGQoMTIpW2RhdGEtYWN0aXZlPVxcXCJ0cnVlXFxcIl0gfiAudGFzay1hbmltYXRpb24ge1xcbiAgLyogd2lkdGg6IDEwMCU7ICovXFxuICB0b3A6IDU1MHB4O1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmxlZnQgPiAubGVmdC1zZWNvbmQtc2VjdGlvbiA+IHAge1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ubGVmdCA+IC5sZWZ0LXNlY29uZC1zZWN0aW9uIGxpIHtcXG4gIHBhZGRpbmctbGVmdDogMzBweDtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmxlZnQgPiAubGVmdC1zZWNvbmQtc2VjdGlvbiAuY3JlYXRlLXByb2plY3Qge1xcbiAgLyogbWFyZ2luLWxlZnQ6IDUwcHg7ICovXFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubGVmdCA+IC5sZWZ0LXNlY29uZC1zZWN0aW9uIC5jcmVhdGUtcHJvamVjdCBkaXYge1xcbiAgLyogZm9udC1zdHlsZTogaXRhbGljOyAqL1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbn1cXG5cXG4ubGVmdCA+IC5sZWZ0LXNlY29uZC1zZWN0aW9uIC5jcmVhdGUtcHJvamVjdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmExODFiMjg7XFxufVxcblxcbi5sZWZ0ID4gLmxlZnQtc2Vjb25kLXNlY3Rpb24gLmNyZWF0ZS1wcm9qZWN0OmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmExODFiNWI7XFxufVxcblxcbi5sZWZ0ID4gLmxlZnQtc2Vjb25kLXNlY3Rpb24gLmNyZWF0ZS1wcm9qZWN0ID4gZGl2OmZpcnN0LWNoaWxkIHtcXG4gIGhlaWdodDogMTVweDtcXG4gIHdpZHRoOiAxNXB4O1xcbn1cXG5cXG4vKiBGb290ZXIgYWRkIG5ldyB0YXNrIGJ1dHRvbiAqL1xcblxcbi5mb290ZXIgPiAuZm9vdGVyLXJpZ2h0ID4gLmNyZWF0ZS10YXNrIHtcXG4gIC8qIGhlaWdodDogMTAwJTsgKi9cXG4gIC8qIHdpZHRoOiBjYWxjKDEwMCUgLSAzMDBweCk7ICovXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uZm9vdGVyID4gLmZvb3Rlci1yaWdodCA+IC5jcmVhdGUtdGFzayA+IC5jcmVhdGUtdGFzay1jb250YWluZXIge1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBweDtcXG4gIC8qIGJvcmRlci1yYWRpdXM6IDEwcHg7ICovXFxuICAvKiBib3JkZXI6IDAuNXB4IHNvbGlkIHZhcigtLWJvcmRlci1kYXJrKTsgKi9cXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDJweCB2YXIoLS1uZXctdGFzay1idXR0b24tYm9yZGVyKTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjFzIGVhc2UtaW4tb3V0O1xcblxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZDogdmFyKC0tbmV3LXRhc2stYnV0dG9uKTtcXG4gIC8qIGJveC1zaGFkb3c6ICA4cHggOHB4IDE2cHggIzlmOWY5ZixcXG4gICAgICAgICAgICAgICAgIC04cHggLThweCAxNnB4ICNmZmZmZmY7ICovXFxufVxcblxcbi5mb290ZXJcXG4gID4gLmZvb3Rlci1yaWdodFxcbiAgPiAuY3JlYXRlLXRhc2tcXG4gID4gLmNyZWF0ZS10YXNrLWNvbnRhaW5lclxcbiAgZGl2Om50aC1jaGlsZCgyKSB7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi5mb290ZXJcXG4gID4gLmZvb3Rlci1yaWdodFxcbiAgPiAuY3JlYXRlLXRhc2tcXG4gID4gLmNyZWF0ZS10YXNrLWNvbnRhaW5lclxcbiAgPiBkaXY6Zmlyc3QtY2hpbGQge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgd2lkdGg6IDIwcHg7XFxufVxcblxcbi5mb290ZXIgPiAuZm9vdGVyLXJpZ2h0ID4gLmNyZWF0ZS10YXNrID4gLmNyZWF0ZS10YXNrLWNvbnRhaW5lcjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1uZXctdGFzay1idXR0b24taG92ZXIpO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcbn1cXG5cXG4uZm9vdGVyID4gLmZvb3Rlci1yaWdodCA+IC5jcmVhdGUtdGFzayA+IC5jcmVhdGUtdGFzay1jb250YWluZXI6YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW5ldy10YXNrLWJ1dHRvbi1hY3RpdmUpO1xcbn1cXG5cXG4vKiBEaWFsb2cgbGF5b3V0IGFuZCBhbmltYXRpb25zICovXFxuXFxuZGlhbG9nIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIHBhZGRpbmctbGVmdDogMzVweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDM1cHg7XFxuICBwYWRkaW5nLXRvcDogMTBweDtcXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbiAgLyogcGFkZGluZy1sZWZ0OiAzNXB4OyAqL1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiAwLjVweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xcbn1cXG5cXG5kaWFsb2c6Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuZGlhbG9nLmhpZGRlbiB7XFxuICBvcGFjaXR5OiAwO1xcbiAgdG9wOiAtMjAwJTtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMC41KTtcXG4gIHRyYW5zaXRpb246XFxuICAgIG9wYWNpdHkgMzAwbXMgZWFzZS1pbi1vdXQsXFxuICAgIHRvcCAxMDAwbXMgZWFzZS1pbi1vdXQsXFxuICAgIHRyYW5zZm9ybSAxMDAwbXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbmRpYWxvZy5oaWRkZW4gPiBmb3JtID4gKiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDEwcHg7XFxuICBvcGFjaXR5OiAwO1xcbn1cXG5cXG5kaWFsb2cuZGlzcGxheWVkIHtcXG4gIG9wYWNpdHk6IDE7XFxuICB0b3A6IDAlO1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC4xOCwgMC44OSwgMC40MywgMS4xOSk7XFxuICAvKiB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgZWFzZTsgKi9cXG59XFxuXFxuZGlhbG9nLmRpc3BsYXllZCA+IGZvcm0gPiAqIHtcXG4gIHRvcDogMHB4O1xcbiAgb3BhY2l0eTogMTtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyAqL1xcbn1cXG5cXG5kaWFsb2cuZGlzcGxheWVkLm5ldy1wcm9qZWN0ID4gZm9ybSAucHJvamVjdC1kaWFsb2ctbmFtZSB7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0IDIwMG1zO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1kYXJrKTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5kaWFsb2cuZGlzcGxheWVkLm5ldy1wcm9qZWN0ID4gZm9ybSAuaW5wdXQtY29udGFpbmVyIHtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbi1vdXQgMjUwbXM7XFxufVxcblxcbmRpYWxvZy5kaXNwbGF5ZWQubmV3LXByb2plY3QgPiBmb3JtIC5wcm9qZWN0LW5hbWUtZmllbGQtZGl2IHtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbi1vdXQgMzAwbXM7XFxufVxcblxcbmRpYWxvZy5kaXNwbGF5ZWQubmV3LXByb2plY3QgPiBmb3JtIC5wcm9qZWN0LWNvbG9yLWZpZWxkLWRpdiB7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0IDM1MG1zO1xcbn1cXG5cXG5kaWFsb2cuZGlzcGxheWVkLm5ldy1wcm9qZWN0ID4gZm9ybSA+IGJ1dHRvbiB7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0IDQwMG1zO1xcbn1cXG5cXG5kaWFsb2cuZGlzcGxheWVkLm5ldy1wcm9qZWN0ID4gZm9ybSA+IC5jbG9zZS1wcm9qZWN0LWRpYWxvZyB7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0IDQ1MG1zO1xcbn1cXG5cXG5kaWFsb2cuZGlzcGxheWVkLm5ldy10YXNrID4gZm9ybSAudGFzay1kaWFsb2ctbmFtZSxcXG5kaWFsb2cuZGlzcGxheWVkLmVkaXQtdGFzayA+IGZvcm0gLnRhc2stZGlhbG9nLW5hbWUge1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dCAyMDBtcztcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItZGFyayk7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuZGlhbG9nLmRpc3BsYXllZC5uZXctdGFzayA+IGZvcm0gPiAudGFzay1wcm9qZWN0LWZpZWxkLWRpdixcXG5kaWFsb2cuZGlzcGxheWVkLmVkaXQtdGFzayA+IGZvcm0gPiAudGFzay1wcm9qZWN0LWZpZWxkLWRpdiB7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0IDI1MG1zO1xcbn1cXG5cXG5kaWFsb2cuZGlzcGxheWVkLm5ldy10YXNrID4gZm9ybSA+IC50YXNrLXRpdGxlLWZpZWxkLWRpdixcXG5kaWFsb2cuZGlzcGxheWVkLmVkaXQtdGFzayA+IGZvcm0gPiAudGFzay10aXRsZS1maWVsZC1kaXYge1xcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlLWluLW91dCAzMDBtcztcXG59XFxuXFxuZGlhbG9nLmRpc3BsYXllZC5uZXctdGFzayA+IGZvcm0gPiAudGFzay1ub3Rlcy1maWVsZC1kaXYsXFxuZGlhbG9nLmRpc3BsYXllZC5lZGl0LXRhc2sgPiBmb3JtID4gLnRhc2stbm90ZXMtZmllbGQtZGl2IHtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbi1vdXQgMzUwbXM7XFxufVxcblxcbmRpYWxvZy5kaXNwbGF5ZWQubmV3LXRhc2sgPiBmb3JtID4gLnRhc2stcHJpb3JpdHktZmllbGQtZGl2LFxcbmRpYWxvZy5kaXNwbGF5ZWQuZWRpdC10YXNrID4gZm9ybSA+IC50YXNrLXByaW9yaXR5LWZpZWxkLWRpdiB7XFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0IDQwMG1zO1xcbn1cXG5cXG5kaWFsb2cuZGlzcGxheWVkLm5ldy10YXNrID4gZm9ybSA+IC50YXNrLWRhdGUtZmllbGQtZGl2LFxcbmRpYWxvZy5kaXNwbGF5ZWQuZWRpdC10YXNrID4gZm9ybSA+IC50YXNrLWRhdGUtZmllbGQtZGl2IHtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbi1vdXQgNDUwbXM7XFxufVxcblxcbmRpYWxvZy5kaXNwbGF5ZWQubmV3LXRhc2sgPiBmb3JtID4gYnV0dG9uLFxcbmRpYWxvZy5kaXNwbGF5ZWQuZWRpdC10YXNrID4gZm9ybSA+IGJ1dHRvbiB7XFxuICB0cmFuc2l0aW9uOlxcbiAgICBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0IDUwMG1zLFxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZSxcXG4gICAgYm9yZGVyLWNvbG9yIDAuMXMgZWFzZTtcXG59XFxuXFxuZGlhbG9nLmRpc3BsYXllZC5uZXctdGFzayA+IGZvcm0gPiAuY2xvc2UtdGFzay1kaWFsb2csXFxuZGlhbG9nLmRpc3BsYXllZC5lZGl0LXRhc2sgPiBmb3JtID4gLmNsb3NlLXRhc2stZGlhbG9nIHtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbi1vdXQgNTUwbXM7XFxufVxcblxcbmRpYWxvZy5kaXNwbGF5ZWQudGFzay1kZWxldGUgPiBmb3JtID4gYnV0dG9uLFxcbmRpYWxvZy5kaXNwbGF5ZWQucHJvamVjdC1kZWxldGUgPiBmb3JtID4gYnV0dG9uIHtcXG4gIHRyYW5zaXRpb246XFxuICAgIG9wYWNpdHkgMTAwbXMgZWFzZS1pbi1vdXQgMjAwbXMsXFxuICAgIGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLFxcbiAgICBib3JkZXItY29sb3IgMC4xcyBlYXNlO1xcbn1cXG5cXG4uZGVsZXRlLXByb2plY3QtYnV0dG9uIHtcXG4gIHdpZHRoOiAyMHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuICBvcGFjaXR5OiAwO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgZmlsbDogdmFyKC0taWNvbnMtdmlld3MpO1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG59XFxuXFxuLmRlbGV0ZS1wcm9qZWN0LWJ1dHRvbjpob3ZlciB7XFxuICBmaWxsOiB2YXIoLS1iYWNrZ3JvdW5kLWxpZ2h0KTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWljb25zLXZpZXdzKTtcXG59XFxuXFxubGkucHJvamVjdDpob3ZlciA+IC5kZWxldGUtcHJvamVjdC1idXR0b24ge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuXFxuLm5ldy1wcm9qZWN0LFxcbi5uZXctdGFzayxcXG4uZWRpdC10YXNrLFxcbi50YXNrLWRlbGV0ZSxcXG4ucHJvamVjdC1kZWxldGUge1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1saWdodCk7XFxufVxcblxcbi5uZXctcHJvamVjdCA+IGZvcm0sXFxuLm5ldy10YXNrID4gZm9ybSxcXG4uZWRpdC10YXNrID4gZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMTBweDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnRhc2stZGVsZXRlID4gZm9ybSxcXG4ucHJvamVjdC1kZWxldGUgPiBmb3JtIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBnYXA6IDEwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxufVxcblxcbi50YXNrLWRlbGV0ZSA+IGZvcm0gPiBkaXYsXFxuLnByb2plY3QtZGVsZXRlID4gZm9ybSA+IGRpdiB7XFxuICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICBncmlkLXJvdzogMSAvIDI7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2stZGVsZXRlID4gZm9ybSA+IGJ1dHRvbjpudGgtY2hpbGQoMSksXFxuLnByb2plY3QtZGVsZXRlID4gZm9ybSA+IGJ1dHRvbjpudGgtY2hpbGQoMSkge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcbn1cXG5cXG4udGFzay1kZWxldGUgPiBmb3JtID4gYnV0dG9uOm50aC1jaGlsZCgyKSxcXG4ucHJvamVjdC1kZWxldGUgPiBmb3JtID4gYnV0dG9uOm50aC1jaGlsZCgyKSB7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBncmlkLXJvdzogMiAvIDM7XFxufVxcblxcbi5uZXctdGFzayA+IGZvcm0gPiAudGFzay1wcm9qZWN0LWZpZWxkLWRpdixcXG4ubmV3LXRhc2sgPiBmb3JtID4gLnRhc2stdGl0bGUtZmllbGQtZGl2LFxcbi5uZXctdGFzayA+IGZvcm0gPiAudGFzay1ub3Rlcy1maWVsZC1kaXYsXFxuLm5ldy10YXNrID4gZm9ybSA+IC50YXNrLXByaW9yaXR5LWZpZWxkLWRpdixcXG4ubmV3LXRhc2sgPiBmb3JtID4gLnRhc2stZGF0ZS1maWVsZC1kaXYsXFxuLmVkaXQtdGFzayA+IGZvcm0gPiAudGFzay1wcm9qZWN0LWZpZWxkLWRpdixcXG4uZWRpdC10YXNrID4gZm9ybSA+IC50YXNrLXRpdGxlLWZpZWxkLWRpdixcXG4uZWRpdC10YXNrID4gZm9ybSA+IC50YXNrLW5vdGVzLWZpZWxkLWRpdixcXG4uZWRpdC10YXNrID4gZm9ybSA+IC50YXNrLXByaW9yaXR5LWZpZWxkLWRpdixcXG4uZWRpdC10YXNrID4gZm9ybSA+IC50YXNrLWRhdGUtZmllbGQtZGl2LFxcbi5uZXctcHJvamVjdCA+IGZvcm0gLnByb2plY3QtbmFtZS1maWVsZC1kaXYsXFxuLm5ldy1wcm9qZWN0ID4gZm9ybSAucHJvamVjdC1jb2xvci1maWVsZC1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5uZXctdGFzayA+IGZvcm0gPiAudGFzay1kaWFsb2ctbmFtZSxcXG4uZWRpdC10YXNrID4gZm9ybSA+IC50YXNrLWRpYWxvZy1uYW1lLFxcbi5uZXctcHJvamVjdCA+IGZvcm0gPiAucHJvamVjdC1kaWFsb2ctbmFtZSB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDI1cHg7XFxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xcbn1cXG5cXG4ubmV3LXRhc2sgPiBmb3JtID4gYnV0dG9uLFxcbi5lZGl0LXRhc2sgPiBmb3JtID4gYnV0dG9uLFxcbi5uZXctcHJvamVjdCA+IGZvcm0gPiBidXR0b24ge1xcbiAgbWFyZ2luLXRvcDogMjVweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIHdpZHRoOiA1MCU7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IDAuNXB4IHNvbGlkIHZhcigtLWJvcmRlci1kYXJrKTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMgZWFzZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1Ym1pdC1idXR0b24pO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay1kZWxldGUgPiBmb3JtID4gYnV0dG9uW3R5cGU9XFxcInN1Ym1pdFxcXCJdLFxcbi50YXNrLWRlbGV0ZSA+IGZvcm0gPiBidXR0b25bdHlwZT1cXFwiY2xvc2VcXFwiXSxcXG4ucHJvamVjdC1kZWxldGUgPiBmb3JtID4gYnV0dG9uW3R5cGU9XFxcInN1Ym1pdFxcXCJdLFxcbi5wcm9qZWN0LWRlbGV0ZSA+IGZvcm0gPiBidXR0b25bdHlwZT1cXFwiY2xvc2VcXFwiXSB7XFxuICBtYXJnaW4tdG9wOiAyNXB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IDAuNXB4IHNvbGlkIHZhcigtLWJvcmRlci1kYXJrKTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMXMgZWFzZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1Ym1pdC1idXR0b24pO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFzay1kZWxldGUgPiBmb3JtID4gYnV0dG9uW3R5cGU9XFxcInN1Ym1pdFxcXCJdLFxcbi5wcm9qZWN0LWRlbGV0ZSA+IGZvcm0gPiBidXR0b25bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VibWl0LWJ1dHRvbik7XFxufVxcblxcbi50YXNrLWRlbGV0ZSA+IGZvcm0gPiBidXR0b25bdHlwZT1cXFwiY2xvc2VcXFwiXSxcXG4ucHJvamVjdC1kZWxldGUgPiBmb3JtID4gYnV0dG9uW3R5cGU9XFxcImNsb3NlXFxcIl0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGlhbG9nLWNsb3NlLWJ1dHRvbik7XFxufVxcblxcbi50YXNrLWRlbGV0ZSA+IGZvcm0gPiBidXR0b25bdHlwZT1cXFwiY2xvc2VcXFwiXTpob3ZlcixcXG4ucHJvamVjdC1kZWxldGUgPiBmb3JtID4gYnV0dG9uW3R5cGU9XFxcImNsb3NlXFxcIl06aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGlhbG9nLWNsb3NlLWJ1dHRvbi1ob3Zlcik7XFxufVxcblxcbi50YXNrLWRlbGV0ZSA+IGZvcm0gPiBidXR0b25bdHlwZT1cXFwiY2xvc2VcXFwiXTphY3RpdmUsXFxuLnByb2plY3QtZGVsZXRlID4gZm9ybSA+IGJ1dHRvblt0eXBlPVxcXCJjbG9zZVxcXCJdOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kaWFsb2ctY2xvc2UtYnV0dG9uLWFjdGl2ZSk7XFxufVxcblxcbi5uZXctdGFzayA+IGZvcm0gPiBidXR0b246Zm9jdXMsXFxuLmVkaXQtdGFzayA+IGZvcm0gPiBidXR0b246Zm9jdXMsXFxuLm5ldy1wcm9qZWN0ID4gZm9ybSA+IGJ1dHRvbjpmb2N1cyxcXG4udGFzay1kZWxldGUgPiBmb3JtID4gYnV0dG9uOmZvY3VzLFxcbi5wcm9qZWN0LWRlbGV0ZSA+IGZvcm0gPiBidXR0b246Zm9jdXMge1xcbiAgb3V0bGluZTogbm9uZTtcXG59XFxuXFxuLm5ldy10YXNrID4gZm9ybSA+IGJ1dHRvbjpob3ZlcixcXG4uZWRpdC10YXNrID4gZm9ybSA+IGJ1dHRvbjpob3ZlcixcXG4ubmV3LXByb2plY3QgPiBmb3JtID4gYnV0dG9uOmhvdmVyLFxcbi50YXNrLWRlbGV0ZSA+IGZvcm0gPiBidXR0b25bdHlwZT1cXFwic3VibWl0XFxcIl06aG92ZXIsXFxuLnByb2plY3QtZGVsZXRlID4gZm9ybSA+IGJ1dHRvblt0eXBlPVxcXCJzdWJtaXRcXFwiXTpob3ZlciB7XFxuICBib3JkZXI6IDAuNXB4IHNvbGlkIGJsYWNrO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3VibWl0LWJ1dHRvbi1ob3Zlcik7XFxufVxcblxcbi5uZXctdGFzayA+IGZvcm0gPiBidXR0b246YWN0aXZlLFxcbi5lZGl0LXRhc2sgPiBmb3JtID4gYnV0dG9uOmFjdGl2ZSxcXG4ubmV3LXByb2plY3QgPiBmb3JtID4gYnV0dG9uOmFjdGl2ZSxcXG4udGFzay1kZWxldGUgPiBmb3JtID4gYnV0dG9uW3R5cGU9XFxcInN1Ym1pdFxcXCJdOmFjdGl2ZSxcXG4ucHJvamVjdC1kZWxldGUgPiBmb3JtID4gYnV0dG9uW3R5cGU9XFxcInN1Ym1pdFxcXCJdOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zdWJtaXQtYnV0dG9uLWFjdGl2ZSk7XFxufVxcblxcbi5uZXctdGFzayA+IGZvcm0gPiAuY2xvc2UtdGFzay1kaWFsb2csXFxuLmVkaXQtdGFzayA+IGZvcm0gPiAuY2xvc2UtdGFzay1kaWFsb2csXFxuLm5ldy1wcm9qZWN0ID4gZm9ybSA+IC5jbG9zZS1wcm9qZWN0LWRpYWxvZyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMTBweDtcXG4gIHRvcDogMTBweDtcXG59XFxuXFxuLm5ldy10YXNrID4gZm9ybSA+IC5jbG9zZS10YXNrLWRpYWxvZyBzcGFuLFxcbi5lZGl0LXRhc2sgPiBmb3JtID4gLmNsb3NlLXRhc2stZGlhbG9nIHNwYW4sXFxuLm5ldy1wcm9qZWN0ID4gZm9ybSA+IC5jbG9zZS1wcm9qZWN0LWRpYWxvZyBzcGFuIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICBvcGFjaXR5OiAwLjc7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOlxcbiAgICB0cmFuc2Zvcm0gMC4yNXMsXFxuICAgIG9wYWNpdHkgMC4yNXM7XFxufVxcblxcbi5uZXctdGFzayA+IGZvcm0gPiAuY2xvc2UtdGFzay1kaWFsb2c6aG92ZXIgc3BhbixcXG4uZWRpdC10YXNrID4gZm9ybSA+IC5jbG9zZS10YXNrLWRpYWxvZzpob3ZlciBzcGFuLFxcbi5uZXctcHJvamVjdCA+IGZvcm0gPiAuY2xvc2UtcHJvamVjdC1kaWFsb2c6aG92ZXIgc3BhbiB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgc2NhbGUoMS4xKTtcXG4gIG9wYWNpdHk6IDE7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIERpYWxvZyBpbnB1dCBzdHlsZXMgKi9cXG5cXG4ubmV3LXRhc2sgPiBmb3JtIGlucHV0LFxcbi5uZXctdGFzayA+IGZvcm0gc2VsZWN0LFxcbi5uZXctdGFzayA+IGZvcm0gdGV4dGFyZWEsXFxuLmVkaXQtdGFzayA+IGZvcm0gaW5wdXQsXFxuLmVkaXQtdGFzayA+IGZvcm0gc2VsZWN0LFxcbi5lZGl0LXRhc2sgPiBmb3JtIHRleHRhcmVhLFxcbi5uZXctcHJvamVjdCA+IGZvcm0gaW5wdXQsXFxuLm5ldy1wcm9qZWN0ID4gZm9ybSBzZWxlY3QsXFxuLm5ldy1wcm9qZWN0ID4gZm9ybSB0ZXh0YXJlYSB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlcjogMC41cHggc29saWQgdmFyKC0tYm9yZGVyLWNvbG9yKTtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG5cXG4ubmV3LXRhc2sgPiBmb3JtIGlucHV0OmhvdmVyLFxcbi5uZXctdGFzayA+IGZvcm0gc2VsZWN0OmhvdmVyLFxcbi5uZXctdGFzayA+IGZvcm0gdGV4dGFyZWE6aG92ZXIsXFxuLmVkaXQtdGFzayA+IGZvcm0gaW5wdXQ6aG92ZXIsXFxuLmVkaXQtdGFzayA+IGZvcm0gc2VsZWN0OmhvdmVyLFxcbi5lZGl0LXRhc2sgPiBmb3JtIHRleHRhcmVhOmhvdmVyLFxcbi5uZXctcHJvamVjdCA+IGZvcm0gaW5wdXQ6aG92ZXIsXFxuLm5ldy1wcm9qZWN0ID4gZm9ybSBzZWxlY3Q6aG92ZXIsXFxuLm5ldy1wcm9qZWN0ID4gZm9ybSB0ZXh0YXJlYTpob3ZlciB7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJvcmRlcjogMC41cHggc29saWQgYmxhY2s7XFxufVxcblxcbi5uZXctdGFzayA+IGZvcm0gaW5wdXQ6OnBsYWNlaG9sZGVyLFxcbi5uZXctdGFzayA+IGZvcm0gc2VsZWN0OjpwbGFjZWhvbGRlcixcXG4ubmV3LXRhc2sgPiBmb3JtIHRleHRhcmVhOjpwbGFjZWhvbGRlcixcXG4uZWRpdC10YXNrID4gZm9ybSBpbnB1dDo6cGxhY2Vob2xkZXIsXFxuLmVkaXQtdGFzayA+IGZvcm0gc2VsZWN0OjpwbGFjZWhvbGRlcixcXG4uZWRpdC10YXNrID4gZm9ybSB0ZXh0YXJlYTo6cGxhY2Vob2xkZXIsXFxuLm5ldy1wcm9qZWN0ID4gZm9ybSBpbnB1dDo6cGxhY2Vob2xkZXIsXFxuLm5ldy1wcm9qZWN0ID4gZm9ybSBzZWxlY3Q6OnBsYWNlaG9sZGVyLFxcbi5uZXctcHJvamVjdCA+IGZvcm0gdGV4dGFyZWE6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiB2YXIoLS1pbnB1dC1wbGFjZWhvbGRlcnMtYW5kLWNoZWNrYm94KTtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLm5ldy10YXNrID4gZm9ybSB0ZXh0YXJlYSxcXG4uZWRpdC10YXNrID4gZm9ybSB0ZXh0YXJlYSxcXG4ubmV3LXByb2plY3QgPiBmb3JtIHRleHRhcmVhIHtcXG4gIHJlc2l6ZTogbm9uZTtcXG59XFxuXFxuLnByb2plY3QtY29sb3ItZmllbGQtZGl2IHtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLm5ldy1wcm9qZWN0ID4gZm9ybSAjcHJvamVjdC1jb2xvciB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICB3aWR0aDogODBweDtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm5ldy1wcm9qZWN0ID4gZm9ybSAuaW5wdXQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbn1cXG5cXG4uaWNvbiB7XFxuICB3aWR0aDogMTVweDtcXG4gIGhlaWdodDogMTVweDtcXG4gIC8qIGZpbGw6IHJlZDsgKi9cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLm5vLXRhc2tzLWZpbGxlciB7XFxuICBjb2xvcjogdmFyKC0taW5wdXQtcGxhY2Vob2xkZXJzLWFuZC1jaGVja2JveCk7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbiN0b2dnbGUtbW9kZS1idXR0b24ge1xcbiAgLyogaGVpZ2h0OiAxMDBweDsgKi9cXG4gIC8qIHdpZHRoOiAxMDBweDsgKi9cXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IGJsYWNrOyAqL1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAxNXB4O1xcbiAgcmlnaHQ6IDE1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB6LWluZGV4OiA1O1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogU2FmYXJpICovXFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lOyAvKiBGaXJlZm94ICovXFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIElFIDEwKyAqL1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFN0YW5kYXJkIHN5bnRheCAqL1xcbn1cXG5cXG4jdG9nZ2xlLW1vZGUtYnV0dG9uIHNwYW4ge1xcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbn1cXG5cXG5kaWFsb2cubmV3LXRhc2ssXFxuZGlhbG9nLmVkaXQtdGFzayB7XFxuICBoZWlnaHQ6IDQ2MHB4O1xcbn1cXG5cXG5kaWFsb2cubmV3LXRhc2sgPiBmb3JtID4gYnV0dG9uW3R5cGU9XFxcInN1Ym1pdFxcXCJdLFxcbmRpYWxvZy5lZGl0LXRhc2sgPiBmb3JtID4gYnV0dG9uW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxufVxcblxcbmRpYWxvZy5uZXctcHJvamVjdCB7XFxuICBoZWlnaHQ6IDI1MHB4O1xcbn1cXG5cXG5kaWFsb2cubmV3LXByb2plY3QgPiBmb3JtID4gYnV0dG9uW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxufVxcblxcbmRpYWxvZy50YXNrLWRlbGV0ZSxcXG5kaWFsb2cucHJvamVjdC1kZWxldGUge1xcbiAgaGVpZ2h0OiAyMDBweDtcXG59XFxuXFxuZGlhbG9nLnRhc2stZGVsZXRlID4gZm9ybSA+IGJ1dHRvbixcXG5kaWFsb2cucHJvamVjdC1kZWxldGUgPiBmb3JtID4gYnV0dG9uIHtcXG4gIG1hcmdpbi10b3A6IGF1dG87XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTGVhZGluZ1plcm9zKG51bWJlciwgdGFyZ2V0TGVuZ3RoKSB7XG4gIHZhciBzaWduID0gbnVtYmVyIDwgMCA/ICctJyA6ICcnO1xuICB2YXIgb3V0cHV0ID0gTWF0aC5hYnMobnVtYmVyKS50b1N0cmluZygpO1xuICB3aGlsZSAob3V0cHV0Lmxlbmd0aCA8IHRhcmdldExlbmd0aCkge1xuICAgIG91dHB1dCA9ICcwJyArIG91dHB1dDtcbiAgfVxuICByZXR1cm4gc2lnbiArIG91dHB1dDtcbn0iLCJpbXBvcnQgZGVmYXVsdExvY2FsZSBmcm9tIFwiLi4vLi4vbG9jYWxlL2VuLVVTL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBkZWZhdWx0TG9jYWxlOyIsInZhciBkZWZhdWx0T3B0aW9ucyA9IHt9O1xuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRPcHRpb25zKCkge1xuICByZXR1cm4gZGVmYXVsdE9wdGlvbnM7XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0RGVmYXVsdE9wdGlvbnMobmV3T3B0aW9ucykge1xuICBkZWZhdWx0T3B0aW9ucyA9IG5ld09wdGlvbnM7XG59IiwiaW1wb3J0IGdldFVUQ0RheU9mWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENEYXlPZlllYXIvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENJU09XZWVrIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENJU09XZWVrWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ1dlZWsgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IGdldFVUQ1dlZWtZZWFyIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgYWRkTGVhZGluZ1plcm9zIGZyb20gXCIuLi8uLi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanNcIjtcbmltcG9ydCBsaWdodEZvcm1hdHRlcnMgZnJvbSBcIi4uL2xpZ2h0Rm9ybWF0dGVycy9pbmRleC5qc1wiO1xudmFyIGRheVBlcmlvZEVudW0gPSB7XG4gIGFtOiAnYW0nLFxuICBwbTogJ3BtJyxcbiAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gIG5vb246ICdub29uJyxcbiAgbW9ybmluZzogJ21vcm5pbmcnLFxuICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICBldmVuaW5nOiAnZXZlbmluZycsXG4gIG5pZ2h0OiAnbmlnaHQnXG59O1xuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgTWlsbGlzZWNvbmRzIGluIGRheSAgICAgICAgICAgIHxcbiAqIHwgIGIgIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgIHwgIEIgIHwgRmxleGlibGUgZGF5IHBlcmlvZCAgICAgICAgICAgIHxcbiAqIHwgIGMgIHwgU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWsgIHwgIEMqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgRGF5IG9mIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGUgIHwgTG9jYWwgZGF5IG9mIHdlZWsgICAgICAgICAgICAgIHwgIEUgIHwgRGF5IG9mIHdlZWsgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGYgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEYqIHwgRGF5IG9mIHdlZWsgaW4gbW9udGggICAgICAgICAgIHxcbiAqIHwgIGcqIHwgTW9kaWZpZWQgSnVsaWFuIGRheSAgICAgICAgICAgIHwgIEcgIHwgRXJhICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGkhIHwgSVNPIGRheSBvZiB3ZWVrICAgICAgICAgICAgICAgIHwgIEkhIHwgSVNPIHdlZWsgb2YgeWVhciAgICAgICAgICAgICAgIHxcbiAqIHwgIGoqIHwgTG9jYWxpemVkIGhvdXIgdy8gZGF5IHBlcmlvZCAgIHwgIEoqIHwgTG9jYWxpemVkIGhvdXIgdy9vIGRheSBwZXJpb2QgIHxcbiAqIHwgIGsgIHwgSG91ciBbMS0yNF0gICAgICAgICAgICAgICAgICAgIHwgIEsgIHwgSG91ciBbMC0xMV0gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGwqIHwgKGRlcHJlY2F0ZWQpICAgICAgICAgICAgICAgICAgIHwgIEwgIHwgU3RhbmQtYWxvbmUgbW9udGggICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE4gIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG8hIHwgT3JkaW5hbCBudW1iZXIgbW9kaWZpZXIgICAgICAgIHwgIE8gIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHAhIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgIHwgIFAhIHwgTG9uZyBsb2NhbGl6ZWQgZGF0ZSAgICAgICAgICAgIHxcbiAqIHwgIHEgIHwgU3RhbmQtYWxvbmUgcXVhcnRlciAgICAgICAgICAgIHwgIFEgIHwgUXVhcnRlciAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHIqIHwgUmVsYXRlZCBHcmVnb3JpYW4geWVhciAgICAgICAgIHwgIFIhIHwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHQhIHwgU2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICAgICAgIHwgIFQhIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgIHxcbiAqIHwgIHUgIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgIHwgIFUqIHwgQ3ljbGljIHllYXIgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHYqIHwgVGltZXpvbmUgKGdlbmVyaWMgbm9uLWxvY2F0LikgIHwgIFYqIHwgVGltZXpvbmUgKGxvY2F0aW9uKSAgICAgICAgICAgIHxcbiAqIHwgIHcgIHwgTG9jYWwgd2VlayBvZiB5ZWFyICAgICAgICAgICAgIHwgIFcqIHwgV2VlayBvZiBtb250aCAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHggIHwgVGltZXpvbmUgKElTTy04NjAxIHcvbyBaKSAgICAgIHwgIFggIHwgVGltZXpvbmUgKElTTy04NjAxKSAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhciAgICAgIHxcbiAqIHwgIHogIHwgVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdC4pIHwgIFoqIHwgVGltZXpvbmUgKGFsaWFzZXMpICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgISBhcmUgbm9uLXN0YW5kYXJkLCBidXQgaW1wbGVtZW50ZWQgYnkgZGF0ZS1mbnM6XG4gKiAtIGBvYCBtb2RpZmllcyB0aGUgcHJldmlvdXMgdG9rZW4gdG8gdHVybiBpdCBpbnRvIGFuIG9yZGluYWwgKHNlZSBgZm9ybWF0YCBkb2NzKVxuICogLSBgaWAgaXMgSVNPIGRheSBvZiB3ZWVrLiBGb3IgYGlgIGFuZCBgaWlgIGlzIHJldHVybnMgbnVtZXJpYyBJU08gd2VlayBkYXlzLFxuICogICBpLmUuIDcgZm9yIFN1bmRheSwgMSBmb3IgTW9uZGF5LCBldGMuXG4gKiAtIGBJYCBpcyBJU08gd2VlayBvZiB5ZWFyLCBhcyBvcHBvc2VkIHRvIGB3YCB3aGljaCBpcyBsb2NhbCB3ZWVrIG9mIHllYXIuXG4gKiAtIGBSYCBpcyBJU08gd2Vlay1udW1iZXJpbmcgeWVhciwgYXMgb3Bwb3NlZCB0byBgWWAgd2hpY2ggaXMgbG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhci5cbiAqICAgYFJgIGlzIHN1cHBvc2VkIHRvIGJlIHVzZWQgaW4gY29uanVuY3Rpb24gd2l0aCBgSWAgYW5kIGBpYFxuICogICBmb3IgdW5pdmVyc2FsIElTTyB3ZWVrLW51bWJlcmluZyBkYXRlLCB3aGVyZWFzXG4gKiAgIGBZYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYHdgIGFuZCBgZWBcbiAqICAgZm9yIHdlZWstbnVtYmVyaW5nIGRhdGUgc3BlY2lmaWMgdG8gdGhlIGxvY2FsZS5cbiAqIC0gYFBgIGlzIGxvbmcgbG9jYWxpemVkIGRhdGUgZm9ybWF0XG4gKiAtIGBwYCBpcyBsb25nIGxvY2FsaXplZCB0aW1lIGZvcm1hdFxuICovXG5cbnZhciBmb3JtYXR0ZXJzID0ge1xuICAvLyBFcmFcbiAgRzogZnVuY3Rpb24gRyhkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZXJhID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpID4gMCA/IDEgOiAwO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEFELCBCQ1xuICAgICAgY2FzZSAnRyc6XG4gICAgICBjYXNlICdHRyc6XG4gICAgICBjYXNlICdHR0cnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnXG4gICAgICAgIH0pO1xuICAgICAgLy8gQSwgQlxuICAgICAgY2FzZSAnR0dHR0cnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZXJhKGVyYSwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93J1xuICAgICAgICB9KTtcbiAgICAgIC8vIEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0XG4gICAgICBjYXNlICdHR0dHJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFllYXJcbiAgeTogZnVuY3Rpb24geShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICAvLyBPcmRpbmFsIG51bWJlclxuICAgIGlmICh0b2tlbiA9PT0gJ3lvJykge1xuICAgICAgdmFyIHNpZ25lZFllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gICAgICAvLyBSZXR1cm5zIDEgZm9yIDEgQkMgKHdoaWNoIGlzIHllYXIgMCBpbiBKYXZhU2NyaXB0KVxuICAgICAgdmFyIHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHllYXIsIHtcbiAgICAgICAgdW5pdDogJ3llYXInXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy55KGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gTG9jYWwgd2Vlay1udW1iZXJpbmcgeWVhclxuICBZOiBmdW5jdGlvbiBZKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBzaWduZWRXZWVrWWVhciA9IGdldFVUQ1dlZWtZZWFyKGRhdGUsIG9wdGlvbnMpO1xuICAgIC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG4gICAgdmFyIHdlZWtZZWFyID0gc2lnbmVkV2Vla1llYXIgPiAwID8gc2lnbmVkV2Vla1llYXIgOiAxIC0gc2lnbmVkV2Vla1llYXI7XG5cbiAgICAvLyBUd28gZGlnaXQgeWVhclxuICAgIGlmICh0b2tlbiA9PT0gJ1lZJykge1xuICAgICAgdmFyIHR3b0RpZ2l0WWVhciA9IHdlZWtZZWFyICUgMTAwO1xuICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyh0d29EaWdpdFllYXIsIDIpO1xuICAgIH1cblxuICAgIC8vIE9yZGluYWwgbnVtYmVyXG4gICAgaWYgKHRva2VuID09PSAnWW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih3ZWVrWWVhciwge1xuICAgICAgICB1bml0OiAneWVhcidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIFBhZGRpbmdcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHdlZWtZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICBSOiBmdW5jdGlvbiBSKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIGlzb1dlZWtZZWFyID0gZ2V0VVRDSVNPV2Vla1llYXIoZGF0ZSk7XG5cbiAgICAvLyBQYWRkaW5nXG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRXh0ZW5kZWQgeWVhci4gVGhpcyBpcyBhIHNpbmdsZSBudW1iZXIgZGVzaWduYXRpbmcgdGhlIHllYXIgb2YgdGhpcyBjYWxlbmRhciBzeXN0ZW0uXG4gIC8vIFRoZSBtYWluIGRpZmZlcmVuY2UgYmV0d2VlbiBgeWAgYW5kIGB1YCBsb2NhbGl6ZXJzIGFyZSBCLkMuIHllYXJzOlxuICAvLyB8IFllYXIgfCBgeWAgfCBgdWAgfFxuICAvLyB8LS0tLS0tfC0tLS0tfC0tLS0tfFxuICAvLyB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICAvLyB8IEJDIDEgfCAgIDEgfCAgIDAgfFxuICAvLyB8IEJDIDIgfCAgIDIgfCAgLTEgfFxuICAvLyBBbHNvIGB5eWAgYWx3YXlzIHJldHVybnMgdGhlIGxhc3QgdHdvIGRpZ2l0cyBvZiBhIHllYXIsXG4gIC8vIHdoaWxlIGB1dWAgcGFkcyBzaW5nbGUgZGlnaXQgeWVhcnMgdG8gMiBjaGFyYWN0ZXJzIGFuZCByZXR1cm5zIG90aGVyIHllYXJzIHVuY2hhbmdlZC5cbiAgdTogZnVuY3Rpb24gdShkYXRlLCB0b2tlbikge1xuICAgIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gUXVhcnRlclxuICBROiBmdW5jdGlvbiBRKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldFVUQ01vbnRoKCkgKyAxKSAvIDMpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgJ1EnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKHF1YXJ0ZXIpO1xuICAgICAgLy8gMDEsIDAyLCAwMywgMDRcbiAgICAgIGNhc2UgJ1FRJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhxdWFydGVyLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAzcmQsIDR0aFxuICAgICAgY2FzZSAnUW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7XG4gICAgICAgICAgdW5pdDogJ3F1YXJ0ZXInXG4gICAgICAgIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcbiAgICAgIGNhc2UgJ1FRUSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcbiAgICAgIGNhc2UgJ1FRUVFRJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLlxuICAgICAgY2FzZSAnUVFRUSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBxdWFydGVyXG4gIHE6IGZ1bmN0aW9uIHEoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIHF1YXJ0ZXIgPSBNYXRoLmNlaWwoKGRhdGUuZ2V0VVRDTW9udGgoKSArIDEpIC8gMyk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSAncSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuICAgICAgY2FzZSAncXEnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHF1YXJ0ZXIsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG4gICAgICBjYXNlICdxbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB1bml0OiAncXVhcnRlcidcbiAgICAgICAgfSk7XG4gICAgICAvLyBRMSwgUTIsIFEzLCBRNFxuICAgICAgY2FzZSAncXFxJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuICAgICAgY2FzZSAncXFxcXEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG4gICAgICBjYXNlICdxcXFxJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIE1vbnRoXG4gIE06IGZ1bmN0aW9uIE0oZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ00nOlxuICAgICAgY2FzZSAnTU0nOlxuICAgICAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLk0oZGF0ZSwgdG9rZW4pO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuICAgICAgY2FzZSAnTW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHtcbiAgICAgICAgICB1bml0OiAnbW9udGgnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG4gICAgICBjYXNlICdNTU0nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBKLCBGLCAuLi4sIERcbiAgICAgIGNhc2UgJ01NTU1NJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG4gICAgICBjYXNlICdNTU1NJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgbW9udGhcbiAgTDogZnVuY3Rpb24gTChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgbW9udGggPSBkYXRlLmdldFVUQ01vbnRoKCk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgLi4uLCAxMlxuICAgICAgY2FzZSAnTCc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobW9udGggKyAxKTtcbiAgICAgIC8vIDAxLCAwMiwgLi4uLCAxMlxuICAgICAgY2FzZSAnTEwnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKG1vbnRoICsgMSwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgLi4uLCAxMnRoXG4gICAgICBjYXNlICdMbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwge1xuICAgICAgICAgIHVuaXQ6ICdtb250aCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcbiAgICAgIGNhc2UgJ0xMTCc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEosIEYsIC4uLiwgRFxuICAgICAgY2FzZSAnTExMTEwnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUubW9udGgobW9udGgsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFudWFyeSwgRmVicnVhcnksIC4uLiwgRGVjZW1iZXJcbiAgICAgIGNhc2UgJ0xMTEwnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBMb2NhbCB3ZWVrIG9mIHllYXJcbiAgdzogZnVuY3Rpb24gdyhkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgd2VlayA9IGdldFVUQ1dlZWsoZGF0ZSwgb3B0aW9ucyk7XG4gICAgaWYgKHRva2VuID09PSAnd28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcih3ZWVrLCB7XG4gICAgICAgIHVuaXQ6ICd3ZWVrJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSVNPIHdlZWsgb2YgeWVhclxuICBJOiBmdW5jdGlvbiBJKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBpc29XZWVrID0gZ2V0VVRDSVNPV2VlayhkYXRlKTtcbiAgICBpZiAodG9rZW4gPT09ICdJbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb1dlZWssIHtcbiAgICAgICAgdW5pdDogJ3dlZWsnXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29XZWVrLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBEYXkgb2YgdGhlIG1vbnRoXG4gIGQ6IGZ1bmN0aW9uIGQoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnZG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ0RhdGUoKSwge1xuICAgICAgICB1bml0OiAnZGF0ZSdcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLmQoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBEYXkgb2YgeWVhclxuICBEOiBmdW5jdGlvbiBEKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZlllYXIgPSBnZXRVVENEYXlPZlllYXIoZGF0ZSk7XG4gICAgaWYgKHRva2VuID09PSAnRG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXlPZlllYXIsIHtcbiAgICAgICAgdW5pdDogJ2RheU9mWWVhcidcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRheU9mWWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHdlZWtcbiAgRTogZnVuY3Rpb24gRShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBUdWVcbiAgICAgIGNhc2UgJ0UnOlxuICAgICAgY2FzZSAnRUUnOlxuICAgICAgY2FzZSAnRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG4gICAgICBjYXNlICdFRUVFRSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG4gICAgICBjYXNlICdFRUVFRUUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcbiAgICAgIGNhc2UgJ0VFRUUnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIExvY2FsIGRheSBvZiB3ZWVrXG4gIGU6IGZ1bmN0aW9uIGUoZGF0ZSwgdG9rZW4sIGxvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGxvY2FsRGF5T2ZXZWVrID0gKGRheU9mV2VlayAtIG9wdGlvbnMud2Vla1N0YXJ0c09uICsgOCkgJSA3IHx8IDc7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gTnVtZXJpY2FsIHZhbHVlIChOdGggZGF5IG9mIHdlZWsgd2l0aCBjdXJyZW50IGxvY2FsZSBvciB3ZWVrU3RhcnRzT24pXG4gICAgICBjYXNlICdlJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG4gICAgICBjYXNlICdlZSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobG9jYWxEYXlPZldlZWssIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG4gICAgICBjYXNlICdlbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGxvY2FsRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG4gICAgICBjYXNlICdlZWUnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcbiAgICAgIGNhc2UgJ2VlZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcbiAgICAgIGNhc2UgJ2VlZWVlZSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSAnZWVlZSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gU3RhbmQtYWxvbmUgbG9jYWwgZGF5IG9mIHdlZWtcbiAgYzogZnVuY3Rpb24gYyhkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBOdW1lcmljYWwgdmFsdWUgKHNhbWUgYXMgaW4gYGVgKVxuICAgICAgY2FzZSAnYyc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobG9jYWxEYXlPZldlZWspO1xuICAgICAgLy8gUGFkZGVkIG51bWVyaWNhbCB2YWx1ZVxuICAgICAgY2FzZSAnY2MnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGxvY2FsRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG4gICAgICBjYXNlICdjbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGxvY2FsRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG4gICAgICBjYXNlICdjY2MnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcbiAgICAgIGNhc2UgJ2NjY2NjJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcbiAgICAgIGNhc2UgJ2NjY2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSAnY2NjYyc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gSVNPIGRheSBvZiB3ZWVrXG4gIGk6IGZ1bmN0aW9uIGkoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gICAgdmFyIGlzb0RheU9mV2VlayA9IGRheU9mV2VlayA9PT0gMCA/IDcgOiBkYXlPZldlZWs7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMlxuICAgICAgY2FzZSAnaSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcoaXNvRGF5T2ZXZWVrKTtcbiAgICAgIC8vIDAyXG4gICAgICBjYXNlICdpaSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvRGF5T2ZXZWVrLCB0b2tlbi5sZW5ndGgpO1xuICAgICAgLy8gMm5kXG4gICAgICBjYXNlICdpbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGlzb0RheU9mV2Vlaywge1xuICAgICAgICAgIHVuaXQ6ICdkYXknXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlXG4gICAgICBjYXNlICdpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcbiAgICAgIGNhc2UgJ2lpaWlpJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcbiAgICAgIGNhc2UgJ2lpaWlpaSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuICAgICAgY2FzZSAnaWlpaSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gQU0gb3IgUE1cbiAgYTogZnVuY3Rpb24gYShkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZSA9IGhvdXJzIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2EnOlxuICAgICAgY2FzZSAnYWEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIGNhc2UgJ2FhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pLnRvTG93ZXJDYXNlKCk7XG4gICAgICBjYXNlICdhYWFhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIGNhc2UgJ2FhYWEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIEFNLCBQTSwgbWlkbmlnaHQsIG5vb25cbiAgYjogZnVuY3Rpb24gYihkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZTtcbiAgICBpZiAoaG91cnMgPT09IDEyKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm5vb247XG4gICAgfSBlbHNlIGlmIChob3VycyA9PT0gMCkge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5taWRuaWdodDtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gaG91cnMgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG4gICAgfVxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2InOlxuICAgICAgY2FzZSAnYmInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIGNhc2UgJ2JiYic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pLnRvTG93ZXJDYXNlKCk7XG4gICAgICBjYXNlICdiYmJiYic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIGNhc2UgJ2JiYmInOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIGluIHRoZSBtb3JuaW5nLCBpbiB0aGUgYWZ0ZXJub29uLCBpbiB0aGUgZXZlbmluZywgYXQgbmlnaHRcbiAgQjogZnVuY3Rpb24gQihkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZTtcbiAgICBpZiAoaG91cnMgPj0gMTcpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0uZXZlbmluZztcbiAgICB9IGVsc2UgaWYgKGhvdXJzID49IDEyKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLmFmdGVybm9vbjtcbiAgICB9IGVsc2UgaWYgKGhvdXJzID49IDQpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubW9ybmluZztcbiAgICB9IGVsc2Uge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5uaWdodDtcbiAgICB9XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnQic6XG4gICAgICBjYXNlICdCQic6XG4gICAgICBjYXNlICdCQkInOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIGNhc2UgJ0JCQkJCJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgY2FzZSAnQkJCQic6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5UGVyaW9kKGRheVBlcmlvZEVudW1WYWx1ZSwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gSG91ciBbMS0xMl1cbiAgaDogZnVuY3Rpb24gaChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdobycpIHtcbiAgICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyO1xuICAgICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDEyO1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5oKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0yM11cbiAgSDogZnVuY3Rpb24gSChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdIbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDSG91cnMoKSwge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLkgoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBIb3VyIFswLTExXVxuICBLOiBmdW5jdGlvbiBLKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyO1xuICAgIGlmICh0b2tlbiA9PT0gJ0tvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gSG91ciBbMS0yNF1cbiAgazogZnVuY3Rpb24gayhkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDI0O1xuICAgIGlmICh0b2tlbiA9PT0gJ2tvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaG91cnMsIHtcbiAgICAgICAgdW5pdDogJ2hvdXInXG4gICAgICB9KTtcbiAgICB9XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhob3VycywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWludXRlXG4gIG06IGZ1bmN0aW9uIG0oZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnbW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ01pbnV0ZXMoKSwge1xuICAgICAgICB1bml0OiAnbWludXRlJ1xuICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMubShkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIFNlY29uZFxuICBzOiBmdW5jdGlvbiBzKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ3NvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENTZWNvbmRzKCksIHtcbiAgICAgICAgdW5pdDogJ3NlY29uZCdcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLnMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBGcmFjdGlvbiBvZiBzZWNvbmRcbiAgUzogZnVuY3Rpb24gUyhkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuUyhkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBhbHdheXMgYCdaJ2ApXG4gIFg6IGZ1bmN0aW9uIFgoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcbiAgICBpZiAodGltZXpvbmVPZmZzZXQgPT09IDApIHtcbiAgICAgIHJldHVybiAnWic7XG4gICAgfVxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXG4gICAgICBjYXNlICdYJzpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyh0aW1lem9uZU9mZnNldCk7XG5cbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYYFxuICAgICAgY2FzZSAnWFhYWCc6XG4gICAgICBjYXNlICdYWCc6XG4gICAgICAgIC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQpO1xuXG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGBYWFhgXG4gICAgICBjYXNlICdYWFhYWCc6XG4gICAgICBjYXNlICdYWFgnOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICB9XG4gIH0sXG4gIC8vIFRpbWV6b25lIChJU08tODYwMS4gSWYgb2Zmc2V0IGlzIDAsIG91dHB1dCBpcyBgJyswMDowMCdgIG9yIGVxdWl2YWxlbnQpXG4gIHg6IGZ1bmN0aW9uIHgoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBIb3VycyBhbmQgb3B0aW9uYWwgbWludXRlc1xuICAgICAgY2FzZSAneCc6XG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXModGltZXpvbmVPZmZzZXQpO1xuXG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eGBcbiAgICAgIGNhc2UgJ3h4eHgnOlxuICAgICAgY2FzZSAneHgnOlxuICAgICAgICAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0KTtcblxuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHh4YFxuICAgICAgY2FzZSAneHh4eHgnOlxuICAgICAgY2FzZSAneHh4JzogLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoR01UKVxuICBPOiBmdW5jdGlvbiBPKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gU2hvcnRcbiAgICAgIGNhc2UgJ08nOlxuICAgICAgY2FzZSAnT08nOlxuICAgICAgY2FzZSAnT09PJzpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmVTaG9ydCh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICAgIC8vIExvbmdcbiAgICAgIGNhc2UgJ09PT08nOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0aW9uKVxuICB6OiBmdW5jdGlvbiB6KGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gU2hvcnRcbiAgICAgIGNhc2UgJ3onOlxuICAgICAgY2FzZSAnenonOlxuICAgICAgY2FzZSAnenp6JzpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmVTaG9ydCh0aW1lem9uZU9mZnNldCwgJzonKTtcbiAgICAgIC8vIExvbmdcbiAgICAgIGNhc2UgJ3p6enonOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuICdHTVQnICsgZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBTZWNvbmRzIHRpbWVzdGFtcFxuICB0OiBmdW5jdGlvbiB0KGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWVzdGFtcCA9IE1hdGguZmxvb3Iob3JpZ2luYWxEYXRlLmdldFRpbWUoKSAvIDEwMDApO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModGltZXN0YW1wLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaWxsaXNlY29uZHMgdGltZXN0YW1wXG4gIFQ6IGZ1bmN0aW9uIFQoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXN0YW1wID0gb3JpZ2luYWxEYXRlLmdldFRpbWUoKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHRpbWVzdGFtcCwgdG9rZW4ubGVuZ3RoKTtcbiAgfVxufTtcbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lU2hvcnQob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gIHZhciBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICB2YXIgaG91cnMgPSBNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKTtcbiAgdmFyIG1pbnV0ZXMgPSBhYnNPZmZzZXQgJSA2MDtcbiAgaWYgKG1pbnV0ZXMgPT09IDApIHtcbiAgICByZXR1cm4gc2lnbiArIFN0cmluZyhob3Vycyk7XG4gIH1cbiAgdmFyIGRlbGltaXRlciA9IGRpcnR5RGVsaW1pdGVyIHx8ICcnO1xuICByZXR1cm4gc2lnbiArIFN0cmluZyhob3VycykgKyBkZWxpbWl0ZXIgKyBhZGRMZWFkaW5nWmVyb3MobWludXRlcywgMik7XG59XG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVdpdGhPcHRpb25hbE1pbnV0ZXMob2Zmc2V0LCBkaXJ0eURlbGltaXRlcikge1xuICBpZiAob2Zmc2V0ICUgNjAgPT09IDApIHtcbiAgICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gICAgcmV0dXJuIHNpZ24gKyBhZGRMZWFkaW5nWmVyb3MoTWF0aC5hYnMob2Zmc2V0KSAvIDYwLCAyKTtcbiAgfVxuICByZXR1cm4gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkaXJ0eURlbGltaXRlcik7XG59XG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZShvZmZzZXQsIGRpcnR5RGVsaW1pdGVyKSB7XG4gIHZhciBkZWxpbWl0ZXIgPSBkaXJ0eURlbGltaXRlciB8fCAnJztcbiAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICB2YXIgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgdmFyIGhvdXJzID0gYWRkTGVhZGluZ1plcm9zKE1hdGguZmxvb3IoYWJzT2Zmc2V0IC8gNjApLCAyKTtcbiAgdmFyIG1pbnV0ZXMgPSBhZGRMZWFkaW5nWmVyb3MoYWJzT2Zmc2V0ICUgNjAsIDIpO1xuICByZXR1cm4gc2lnbiArIGhvdXJzICsgZGVsaW1pdGVyICsgbWludXRlcztcbn1cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdHRlcnM7IiwiaW1wb3J0IGFkZExlYWRpbmdaZXJvcyBmcm9tIFwiLi4vLi4vYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzXCI7XG4vKlxuICogfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAgYSAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgfCAgQSogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgZCAgfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgfCAgRCAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgaCAgfCBIb3VyIFsxLTEyXSAgICAgICAgICAgICAgICAgICAgfCAgSCAgfCBIb3VyIFswLTIzXSAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgbSAgfCBNaW51dGUgICAgICAgICAgICAgICAgICAgICAgICAgfCAgTSAgfCBNb250aCAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICogfCAgcyAgfCBTZWNvbmQgICAgICAgICAgICAgICAgICAgICAgICAgfCAgUyAgfCBGcmFjdGlvbiBvZiBzZWNvbmQgICAgICAgICAgICAgfFxuICogfCAgeSAgfCBZZWFyIChhYnMpICAgICAgICAgICAgICAgICAgICAgfCAgWSAgfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICogYXJlIG5vdCBpbXBsZW1lbnRlZCBidXQgcmVzZXJ2ZWQgYnkgVW5pY29kZSBzdGFuZGFyZC5cbiAqL1xudmFyIGZvcm1hdHRlcnMgPSB7XG4gIC8vIFllYXJcbiAgeTogZnVuY3Rpb24geShkYXRlLCB0b2tlbikge1xuICAgIC8vIEZyb20gaHR0cDovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS0zMS90cjM1LWRhdGVzLmh0bWwjRGF0ZV9Gb3JtYXRfdG9rZW5zXG4gICAgLy8gfCBZZWFyICAgICB8ICAgICB5IHwgeXkgfCAgIHl5eSB8ICB5eXl5IHwgeXl5eXkgfFxuICAgIC8vIHwtLS0tLS0tLS0tfC0tLS0tLS18LS0tLXwtLS0tLS0tfC0tLS0tLS18LS0tLS0tLXxcbiAgICAvLyB8IEFEIDEgICAgIHwgICAgIDEgfCAwMSB8ICAgMDAxIHwgIDAwMDEgfCAwMDAwMSB8XG4gICAgLy8gfCBBRCAxMiAgICB8ICAgIDEyIHwgMTIgfCAgIDAxMiB8ICAwMDEyIHwgMDAwMTIgfFxuICAgIC8vIHwgQUQgMTIzICAgfCAgIDEyMyB8IDIzIHwgICAxMjMgfCAgMDEyMyB8IDAwMTIzIHxcbiAgICAvLyB8IEFEIDEyMzQgIHwgIDEyMzQgfCAzNCB8ICAxMjM0IHwgIDEyMzQgfCAwMTIzNCB8XG4gICAgLy8gfCBBRCAxMjM0NSB8IDEyMzQ1IHwgNDUgfCAxMjM0NSB8IDEyMzQ1IHwgMTIzNDUgfFxuXG4gICAgdmFyIHNpZ25lZFllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gICAgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcbiAgICB2YXIgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModG9rZW4gPT09ICd5eScgPyB5ZWFyICUgMTAwIDogeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTW9udGhcbiAgTTogZnVuY3Rpb24gTShkYXRlLCB0b2tlbikge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcbiAgICByZXR1cm4gdG9rZW4gPT09ICdNJyA/IFN0cmluZyhtb250aCArIDEpIDogYWRkTGVhZGluZ1plcm9zKG1vbnRoICsgMSwgMik7XG4gIH0sXG4gIC8vIERheSBvZiB0aGUgbW9udGhcbiAgZDogZnVuY3Rpb24gZChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENEYXRlKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEFNIG9yIFBNXG4gIGE6IGZ1bmN0aW9uIGEoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF0ZS5nZXRVVENIb3VycygpIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ2EnOlxuICAgICAgY2FzZSAnYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlLnRvVXBwZXJDYXNlKCk7XG4gICAgICBjYXNlICdhYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlO1xuICAgICAgY2FzZSAnYWFhYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlWzBdO1xuICAgICAgY2FzZSAnYWFhYSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlID09PSAnYW0nID8gJ2EubS4nIDogJ3AubS4nO1xuICAgIH1cbiAgfSxcbiAgLy8gSG91ciBbMS0xMl1cbiAgaDogZnVuY3Rpb24gaChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENIb3VycygpICUgMTIgfHwgMTIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEhvdXIgWzAtMjNdXG4gIEg6IGZ1bmN0aW9uIEgoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDSG91cnMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWludXRlXG4gIG06IGZ1bmN0aW9uIG0oZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDTWludXRlcygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBTZWNvbmRcbiAgczogZnVuY3Rpb24gcyhkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENTZWNvbmRzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEZyYWN0aW9uIG9mIHNlY29uZFxuICBTOiBmdW5jdGlvbiBTKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIG51bWJlck9mRGlnaXRzID0gdG9rZW4ubGVuZ3RoO1xuICAgIHZhciBtaWxsaXNlY29uZHMgPSBkYXRlLmdldFVUQ01pbGxpc2Vjb25kcygpO1xuICAgIHZhciBmcmFjdGlvbmFsU2Vjb25kcyA9IE1hdGguZmxvb3IobWlsbGlzZWNvbmRzICogTWF0aC5wb3coMTAsIG51bWJlck9mRGlnaXRzIC0gMykpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZnJhY3Rpb25hbFNlY29uZHMsIHRva2VuLmxlbmd0aCk7XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXR0ZXJzOyIsInZhciBkYXRlTG9uZ0Zvcm1hdHRlciA9IGZ1bmN0aW9uIGRhdGVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSAnUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuICAgIGNhc2UgJ1BQJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuICAgIGNhc2UgJ1BQUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG4gICAgY2FzZSAnUFBQUCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgfVxufTtcbnZhciB0aW1lTG9uZ0Zvcm1hdHRlciA9IGZ1bmN0aW9uIHRpbWVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSAncCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuICAgIGNhc2UgJ3BwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuICAgIGNhc2UgJ3BwcCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdsb25nJ1xuICAgICAgfSk7XG4gICAgY2FzZSAncHBwcCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgfVxufTtcbnZhciBkYXRlVGltZUxvbmdGb3JtYXR0ZXIgPSBmdW5jdGlvbiBkYXRlVGltZUxvbmdGb3JtYXR0ZXIocGF0dGVybiwgZm9ybWF0TG9uZykge1xuICB2YXIgbWF0Y2hSZXN1bHQgPSBwYXR0ZXJuLm1hdGNoKC8oUCspKHArKT8vKSB8fCBbXTtcbiAgdmFyIGRhdGVQYXR0ZXJuID0gbWF0Y2hSZXN1bHRbMV07XG4gIHZhciB0aW1lUGF0dGVybiA9IG1hdGNoUmVzdWx0WzJdO1xuICBpZiAoIXRpbWVQYXR0ZXJuKSB7XG4gICAgcmV0dXJuIGRhdGVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpO1xuICB9XG4gIHZhciBkYXRlVGltZUZvcm1hdDtcbiAgc3dpdGNoIChkYXRlUGF0dGVybikge1xuICAgIGNhc2UgJ1AnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnUFAnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ1BQUCc6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ1BQUFAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICBkYXRlVGltZUZvcm1hdCA9IGZvcm1hdExvbmcuZGF0ZVRpbWUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuICB9XG4gIHJldHVybiBkYXRlVGltZUZvcm1hdC5yZXBsYWNlKCd7e2RhdGV9fScsIGRhdGVMb25nRm9ybWF0dGVyKGRhdGVQYXR0ZXJuLCBmb3JtYXRMb25nKSkucmVwbGFjZSgne3t0aW1lfX0nLCB0aW1lTG9uZ0Zvcm1hdHRlcih0aW1lUGF0dGVybiwgZm9ybWF0TG9uZykpO1xufTtcbnZhciBsb25nRm9ybWF0dGVycyA9IHtcbiAgcDogdGltZUxvbmdGb3JtYXR0ZXIsXG4gIFA6IGRhdGVUaW1lTG9uZ0Zvcm1hdHRlclxufTtcbmV4cG9ydCBkZWZhdWx0IGxvbmdGb3JtYXR0ZXJzOyIsIi8qKlxuICogR29vZ2xlIENocm9tZSBhcyBvZiA2Ny4wLjMzOTYuODcgaW50cm9kdWNlZCB0aW1lem9uZXMgd2l0aCBvZmZzZXQgdGhhdCBpbmNsdWRlcyBzZWNvbmRzLlxuICogVGhleSB1c3VhbGx5IGFwcGVhciBmb3IgZGF0ZXMgdGhhdCBkZW5vdGUgdGltZSBiZWZvcmUgdGhlIHRpbWV6b25lcyB3ZXJlIGludHJvZHVjZWRcbiAqIChlLmcuIGZvciAnRXVyb3BlL1ByYWd1ZScgdGltZXpvbmUgdGhlIG9mZnNldCBpcyBHTVQrMDA6NTc6NDQgYmVmb3JlIDEgT2N0b2JlciAxODkxXG4gKiBhbmQgR01UKzAxOjAwOjAwIGFmdGVyIHRoYXQgZGF0ZSlcbiAqXG4gKiBEYXRlI2dldFRpbWV6b25lT2Zmc2V0IHJldHVybnMgdGhlIG9mZnNldCBpbiBtaW51dGVzIGFuZCB3b3VsZCByZXR1cm4gNTcgZm9yIHRoZSBleGFtcGxlIGFib3ZlLFxuICogd2hpY2ggd291bGQgbGVhZCB0byBpbmNvcnJlY3QgY2FsY3VsYXRpb25zLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGUgdGltZXpvbmUgb2Zmc2V0IGluIG1pbGxpc2Vjb25kcyB0aGF0IHRha2VzIHNlY29uZHMgaW4gYWNjb3VudC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlKSB7XG4gIHZhciB1dGNEYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIGRhdGUuZ2V0RGF0ZSgpLCBkYXRlLmdldEhvdXJzKCksIGRhdGUuZ2V0TWludXRlcygpLCBkYXRlLmdldFNlY29uZHMoKSwgZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSkpO1xuICB1dGNEYXRlLnNldFVUQ0Z1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSk7XG4gIHJldHVybiBkYXRlLmdldFRpbWUoKSAtIHV0Y0RhdGUuZ2V0VGltZSgpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX0RBWSA9IDg2NDAwMDAwO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDRGF5T2ZZZWFyKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpO1xuICBkYXRlLnNldFVUQ01vbnRoKDAsIDEpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlllYXJUaW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgdmFyIGRpZmZlcmVuY2UgPSB0aW1lc3RhbXAgLSBzdGFydE9mWWVhclRpbWVzdGFtcDtcbiAgcmV0dXJuIE1hdGguZmxvb3IoZGlmZmVyZW5jZSAvIE1JTExJU0VDT05EU19JTl9EQVkpICsgMTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX1dFRUsgPSA2MDQ4MDAwMDA7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENJU09XZWVrKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRpZmYgPSBzdGFydE9mVVRDSVNPV2VlayhkYXRlKS5nZXRUaW1lKCkgLSBzdGFydE9mVVRDSVNPV2Vla1llYXIoZGF0ZSkuZ2V0VGltZSgpO1xuXG4gIC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBNSUxMSVNFQ09ORFNfSU5fV0VFSykgKyAxO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIgKyAxLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIpO1xuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhciA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0Z1bGxZZWFyKHllYXIsIDAsIDQpO1xuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZlVUQ0lTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhcik7XG4gIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mTmV4dFllYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXIgKyAxO1xuICB9IGVsc2UgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDE7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2Vla1llYXIgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX1dFRUsgPSA2MDQ4MDAwMDA7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRpZmYgPSBzdGFydE9mVVRDV2VlayhkYXRlLCBvcHRpb25zKS5nZXRUaW1lKCkgLSBzdGFydE9mVVRDV2Vla1llYXIoZGF0ZSwgb3B0aW9ucykuZ2V0VGltZSgpO1xuXG4gIC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBNSUxMSVNFQ09ORFNfSU5fV0VFSykgKyAxO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENXZWVrWWVhcihkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkZmlyc3RXZWVrQ29uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkZmlyc3RXZWVrQ29uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX29wdGlvbnMkZmlyc3RXZWVrQ29uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRmaXJzdFdlZWtDb24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMSk7XG5cbiAgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAxIGFuZCA3IF9hbmRfIGlzIG5vdCBOYU5cbiAgaWYgKCEoZmlyc3RXZWVrQ29udGFpbnNEYXRlID49IDEgJiYgZmlyc3RXZWVrQ29udGFpbnNEYXRlIDw9IDcpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2ZpcnN0V2Vla0NvbnRhaW5zRGF0ZSBtdXN0IGJlIGJldHdlZW4gMSBhbmQgNyBpbmNsdXNpdmVseScpO1xuICB9XG4gIHZhciBmaXJzdFdlZWtPZk5leHRZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0VVRDRnVsbFllYXIoeWVhciArIDEsIDAsIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIGZpcnN0V2Vla09mTmV4dFllYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mVVRDV2VlayhmaXJzdFdlZWtPZk5leHRZZWFyLCBvcHRpb25zKTtcbiAgdmFyIGZpcnN0V2Vla09mVGhpc1llYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWtPZlRoaXNZZWFyLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgc3RhcnRPZlRoaXNZZWFyID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrT2ZUaGlzWWVhciwgb3B0aW9ucyk7XG4gIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mTmV4dFllYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXIgKyAxO1xuICB9IGVsc2UgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDE7XG4gIH1cbn0iLCJ2YXIgcHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW5zID0gWydEJywgJ0REJ107XG52YXIgcHJvdGVjdGVkV2Vla1llYXJUb2tlbnMgPSBbJ1lZJywgJ1lZWVknXTtcbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiBwcm90ZWN0ZWREYXlPZlllYXJUb2tlbnMuaW5kZXhPZih0b2tlbikgIT09IC0xO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbih0b2tlbikge1xuICByZXR1cm4gcHJvdGVjdGVkV2Vla1llYXJUb2tlbnMuaW5kZXhPZih0b2tlbikgIT09IC0xO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRocm93UHJvdGVjdGVkRXJyb3IodG9rZW4sIGZvcm1hdCwgaW5wdXQpIHtcbiAgaWYgKHRva2VuID09PSAnWVlZWScpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgeXl5eWAgaW5zdGVhZCBvZiBgWVlZWWAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIHllYXJzIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnWVknKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYHl5YCBpbnN0ZWFkIG9mIGBZWWAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIHllYXJzIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnRCcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgZGAgaW5zdGVhZCBvZiBgRGAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnREQnKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYGRkYCBpbnN0ZWFkIG9mIGBERGAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcIikpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENJU09XZWVrKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IDE7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldFVUQ0RheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgZ2V0VVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uL2dldFVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciB5ZWFyID0gZ2V0VVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeSA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnkuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIGRhdGUgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnkpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9kZWZhdWx0T3B0aW9ucy9pbmRleC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZlVUQ1dlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJHdlZWtTdGFydHNPbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkd2Vla1N0YXJ0c09uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX29wdGlvbnMkd2Vla1N0YXJ0c09uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMCk7XG5cbiAgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldFVUQ0RheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgZ2V0VVRDV2Vla1llYXIgZnJvbSBcIi4uL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHsgZ2V0RGVmYXVsdE9wdGlvbnMgfSBmcm9tIFwiLi4vZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENXZWVrWWVhcihkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9yZWYyLCBfcmVmMywgX29wdGlvbnMkZmlyc3RXZWVrQ29uLCBfb3B0aW9ucyRsb2NhbGUsIF9vcHRpb25zJGxvY2FsZSRvcHRpbywgX2RlZmF1bHRPcHRpb25zJGxvY2FsLCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwyO1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IHRvSW50ZWdlcigoX3JlZiA9IChfcmVmMiA9IChfcmVmMyA9IChfb3B0aW9ucyRmaXJzdFdlZWtDb24gPSBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfb3B0aW9ucyRmaXJzdFdlZWtDb24gIT09IHZvaWQgMCA/IF9vcHRpb25zJGZpcnN0V2Vla0NvbiA6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfb3B0aW9ucyRsb2NhbGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUkb3B0aW8gPSBfb3B0aW9ucyRsb2NhbGUub3B0aW9ucykgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlJG9wdGlvID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfb3B0aW9ucyRsb2NhbGUkb3B0aW8uZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiBkZWZhdWx0T3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYyICE9PSB2b2lkIDAgPyBfcmVmMiA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPSBkZWZhdWx0T3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwub3B0aW9ucykgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RlZmF1bHRPcHRpb25zJGxvY2FsMi5maXJzdFdlZWtDb250YWluc0RhdGUpICE9PSBudWxsICYmIF9yZWYgIT09IHZvaWQgMCA/IF9yZWYgOiAxKTtcbiAgdmFyIHllYXIgPSBnZXRVVENXZWVrWWVhcihkaXJ0eURhdGUsIG9wdGlvbnMpO1xuICB2YXIgZmlyc3RXZWVrID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vlay5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCBmaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICBmaXJzdFdlZWsuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBkYXRlID0gc3RhcnRPZlVUQ1dlZWsoZmlyc3RXZWVrLCBvcHRpb25zKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuICBpZiAoaXNOYU4obnVtYmVyKSkge1xuICAgIHJldHVybiBudW1iZXI7XG4gIH1cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBhZGRNaWxsaXNlY29uZHNcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgbWlsbGlzZWNvbmRzIHRvIGJlIGFkZGVkLiBQb3NpdGl2ZSBkZWNpbWFscyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguZmxvb3JgLCBkZWNpbWFscyBsZXNzIHRoYW4gemVybyB3aWxsIGJlIHJvdW5kZWQgdXNpbmcgYE1hdGguY2VpbGAuXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIG1pbGxpc2Vjb25kcyBhZGRlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgNzUwIG1pbGxpc2Vjb25kcyB0byAxMCBKdWx5IDIwMTQgMTI6NDU6MzAuMDAwOlxuICogY29uc3QgcmVzdWx0ID0gYWRkTWlsbGlzZWNvbmRzKG5ldyBEYXRlKDIwMTQsIDYsIDEwLCAxMiwgNDUsIDMwLCAwKSwgNzUwKVxuICogLy89PiBUaHUgSnVsIDEwIDIwMTQgMTI6NDU6MzAuNzUwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZE1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgdGltZXN0YW1wID0gdG9EYXRlKGRpcnR5RGF0ZSkuZ2V0VGltZSgpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgcmV0dXJuIG5ldyBEYXRlKHRpbWVzdGFtcCArIGFtb3VudCk7XG59IiwiLyoqXG4gKiBEYXlzIGluIDEgd2Vlay5cbiAqXG4gKiBAbmFtZSBkYXlzSW5XZWVrXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIGRheXNJbldlZWsgPSA3O1xuXG4vKipcbiAqIERheXMgaW4gMSB5ZWFyXG4gKiBPbmUgeWVhcnMgZXF1YWxzIDM2NS4yNDI1IGRheXMgYWNjb3JkaW5nIHRvIHRoZSBmb3JtdWxhOlxuICpcbiAqID4gTGVhcCB5ZWFyIG9jY3VyZXMgZXZlcnkgNCB5ZWFycywgZXhjZXB0IGZvciB5ZWFycyB0aGF0IGFyZSBkaXZpc2FibGUgYnkgMTAwIGFuZCBub3QgZGl2aXNhYmxlIGJ5IDQwMC5cbiAqID4gMSBtZWFuIHllYXIgPSAoMzY1KzEvNC0xLzEwMCsxLzQwMCkgZGF5cyA9IDM2NS4yNDI1IGRheXNcbiAqXG4gKiBAbmFtZSBkYXlzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIGRheXNJblllYXIgPSAzNjUuMjQyNTtcblxuLyoqXG4gKiBNYXhpbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAbmFtZSBtYXhUaW1lXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIG1heFRpbWUgPSBNYXRoLnBvdygxMCwgOCkgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xuXG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIG1pbnV0ZVxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luTWludXRlXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luTWludXRlID0gNjAwMDA7XG5cbi8qKlxuICogTWlsbGlzZWNvbmRzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luSG91clxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBtaWxsaXNlY29uZHNJbkhvdXIgPSAzNjAwMDAwO1xuXG4vKipcbiAqIE1pbGxpc2Vjb25kcyBpbiAxIHNlY29uZFxuICpcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luU2Vjb25kXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIG1pbGxpc2Vjb25kc0luU2Vjb25kID0gMTAwMDtcblxuLyoqXG4gKiBNaW5pbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAbmFtZSBtaW5UaW1lXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIG1pblRpbWUgPSAtbWF4VGltZTtcblxuLyoqXG4gKiBNaW51dGVzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIG1pbnV0ZXNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgbWludXRlc0luSG91ciA9IDYwO1xuXG4vKipcbiAqIE1vbnRocyBpbiAxIHF1YXJ0ZXJcbiAqXG4gKiBAbmFtZSBtb250aHNJblF1YXJ0ZXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgbW9udGhzSW5RdWFydGVyID0gMztcblxuLyoqXG4gKiBNb250aHMgaW4gMSB5ZWFyXG4gKlxuICogQG5hbWUgbW9udGhzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIG1vbnRoc0luWWVhciA9IDEyO1xuXG4vKipcbiAqIFF1YXJ0ZXJzIGluIDEgeWVhclxuICpcbiAqIEBuYW1lIHF1YXJ0ZXJzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIHF1YXJ0ZXJzSW5ZZWFyID0gNDtcblxuLyoqXG4gKiBTZWNvbmRzIGluIDEgaG91clxuICpcbiAqIEBuYW1lIHNlY29uZHNJbkhvdXJcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgc2Vjb25kc0luSG91ciA9IDM2MDA7XG5cbi8qKlxuICogU2Vjb25kcyBpbiAxIG1pbnV0ZVxuICpcbiAqIEBuYW1lIHNlY29uZHNJbk1pbnV0ZVxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBzZWNvbmRzSW5NaW51dGUgPSA2MDtcblxuLyoqXG4gKiBTZWNvbmRzIGluIDEgZGF5XG4gKlxuICogQG5hbWUgc2Vjb25kc0luRGF5XG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIHNlY29uZHNJbkRheSA9IHNlY29uZHNJbkhvdXIgKiAyNDtcblxuLyoqXG4gKiBTZWNvbmRzIGluIDEgd2Vla1xuICpcbiAqIEBuYW1lIHNlY29uZHNJbldlZWtcbiAqIEBjb25zdGFudFxuICogQHR5cGUge251bWJlcn1cbiAqIEBkZWZhdWx0XG4gKi9cbmV4cG9ydCB2YXIgc2Vjb25kc0luV2VlayA9IHNlY29uZHNJbkRheSAqIDc7XG5cbi8qKlxuICogU2Vjb25kcyBpbiAxIHllYXJcbiAqXG4gKiBAbmFtZSBzZWNvbmRzSW5ZZWFyXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIHNlY29uZHNJblllYXIgPSBzZWNvbmRzSW5EYXkgKiBkYXlzSW5ZZWFyO1xuXG4vKipcbiAqIFNlY29uZHMgaW4gMSBtb250aFxuICpcbiAqIEBuYW1lIHNlY29uZHNJbk1vbnRoXG4gKiBAY29uc3RhbnRcbiAqIEB0eXBlIHtudW1iZXJ9XG4gKiBAZGVmYXVsdFxuICovXG5leHBvcnQgdmFyIHNlY29uZHNJbk1vbnRoID0gc2Vjb25kc0luWWVhciAvIDEyO1xuXG4vKipcbiAqIFNlY29uZHMgaW4gMSBxdWFydGVyXG4gKlxuICogQG5hbWUgc2Vjb25kc0luUXVhcnRlclxuICogQGNvbnN0YW50XG4gKiBAdHlwZSB7bnVtYmVyfVxuICogQGRlZmF1bHRcbiAqL1xuZXhwb3J0IHZhciBzZWNvbmRzSW5RdWFydGVyID0gc2Vjb25kc0luTW9udGggKiAzOyIsImltcG9ydCBpc1ZhbGlkIGZyb20gXCIuLi9pc1ZhbGlkL2luZGV4LmpzXCI7XG5pbXBvcnQgc3ViTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9zdWJNaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdHRlcnMgZnJvbSBcIi4uL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMvaW5kZXguanNcIjtcbmltcG9ydCBsb25nRm9ybWF0dGVycyBmcm9tIFwiLi4vX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMvaW5kZXguanNcIjtcbmltcG9ydCBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCB7IGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4sIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbiwgdGhyb3dQcm90ZWN0ZWRFcnJvciB9IGZyb20gXCIuLi9fbGliL3Byb3RlY3RlZFRva2Vucy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBnZXREZWZhdWx0T3B0aW9ucyB9IGZyb20gXCIuLi9fbGliL2RlZmF1bHRPcHRpb25zL2luZGV4LmpzXCI7XG5pbXBvcnQgZGVmYXVsdExvY2FsZSBmcm9tIFwiLi4vX2xpYi9kZWZhdWx0TG9jYWxlL2luZGV4LmpzXCI7IC8vIFRoaXMgUmVnRXhwIGNvbnNpc3RzIG9mIHRocmVlIHBhcnRzIHNlcGFyYXRlZCBieSBgfGA6XG4vLyAtIFt5WVFxTUx3SWREZWNpaEhLa21zXW8gbWF0Y2hlcyBhbnkgYXZhaWxhYmxlIG9yZGluYWwgbnVtYmVyIHRva2VuXG4vLyAgIChvbmUgb2YgdGhlIGNlcnRhaW4gbGV0dGVycyBmb2xsb3dlZCBieSBgb2ApXG4vLyAtIChcXHcpXFwxKiBtYXRjaGVzIGFueSBzZXF1ZW5jZXMgb2YgdGhlIHNhbWUgbGV0dGVyXG4vLyAtICcnIG1hdGNoZXMgdHdvIHF1b3RlIGNoYXJhY3RlcnMgaW4gYSByb3dcbi8vIC0gJygnJ3xbXiddKSsoJ3wkKSBtYXRjaGVzIGFueXRoaW5nIHN1cnJvdW5kZWQgYnkgdHdvIHF1b3RlIGNoYXJhY3RlcnMgKCcpLFxuLy8gICBleGNlcHQgYSBzaW5nbGUgcXVvdGUgc3ltYm9sLCB3aGljaCBlbmRzIHRoZSBzZXF1ZW5jZS5cbi8vICAgVHdvIHF1b3RlIGNoYXJhY3RlcnMgZG8gbm90IGVuZCB0aGUgc2VxdWVuY2UuXG4vLyAgIElmIHRoZXJlIGlzIG5vIG1hdGNoaW5nIHNpbmdsZSBxdW90ZVxuLy8gICB0aGVuIHRoZSBzZXF1ZW5jZSB3aWxsIGNvbnRpbnVlIHVudGlsIHRoZSBlbmQgb2YgdGhlIHN0cmluZy5cbi8vIC0gLiBtYXRjaGVzIGFueSBzaW5nbGUgY2hhcmFjdGVyIHVubWF0Y2hlZCBieSBwcmV2aW91cyBwYXJ0cyBvZiB0aGUgUmVnRXhwc1xudmFyIGZvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvW3lZUXFNTHdJZERlY2loSEtrbXNdb3woXFx3KVxcMSp8Jyd8JygnJ3xbXiddKSsoJ3wkKXwuL2c7XG5cbi8vIFRoaXMgUmVnRXhwIGNhdGNoZXMgc3ltYm9scyBlc2NhcGVkIGJ5IHF1b3RlcywgYW5kIGFsc29cbi8vIHNlcXVlbmNlcyBvZiBzeW1ib2xzIFAsIHAsIGFuZCB0aGUgY29tYmluYXRpb25zIGxpa2UgYFBQUFBQUFBwcHBwcGBcbnZhciBsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9IC9QK3ArfFArfHArfCcnfCcoJyd8W14nXSkrKCd8JCl8Li9nO1xudmFyIGVzY2FwZWRTdHJpbmdSZWdFeHAgPSAvXicoW15dKj8pJz8kLztcbnZhciBkb3VibGVRdW90ZVJlZ0V4cCA9IC8nJy9nO1xudmFyIHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwID0gL1thLXpBLVpdLztcblxuLyoqXG4gKiBAbmFtZSBmb3JtYXRcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgRm9ybWF0IHRoZSBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmcgaW4gdGhlIGdpdmVuIGZvcm1hdC4gVGhlIHJlc3VsdCBtYXkgdmFyeSBieSBsb2NhbGUuXG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGUgYGZvcm1hdGAgdG9rZW5zIGRpZmZlciBmcm9tIE1vbWVudC5qcyBhbmQgb3RoZXIgbGlicmFyaWVzLlxuICogPiBTZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqXG4gKiBUaGUgY2hhcmFjdGVycyB3cmFwcGVkIGJldHdlZW4gdHdvIHNpbmdsZSBxdW90ZXMgY2hhcmFjdGVycyAoJykgYXJlIGVzY2FwZWQuXG4gKiBUd28gc2luZ2xlIHF1b3RlcyBpbiBhIHJvdywgd2hldGhlciBpbnNpZGUgb3Igb3V0c2lkZSBhIHF1b3RlZCBzZXF1ZW5jZSwgcmVwcmVzZW50IGEgJ3JlYWwnIHNpbmdsZSBxdW90ZS5cbiAqIChzZWUgdGhlIGxhc3QgZXhhbXBsZSlcbiAqXG4gKiBGb3JtYXQgb2YgdGhlIHN0cmluZyBpcyBiYXNlZCBvbiBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiBodHRwczovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS1kYXRlcy5odG1sI0RhdGVfRmllbGRfU3ltYm9sX1RhYmxlXG4gKiB3aXRoIGEgZmV3IGFkZGl0aW9ucyAoc2VlIG5vdGUgNyBiZWxvdyB0aGUgdGFibGUpLlxuICpcbiAqIEFjY2VwdGVkIHBhdHRlcm5zOlxuICogfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUGF0dGVybiB8IFJlc3VsdCBleGFtcGxlcyAgICAgICAgICAgICAgICAgICB8IE5vdGVzIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS18XG4gKiB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHLi5HR0cgIHwgQUQsIEJDICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHRyAgICB8IEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0dHICAgfCBBLCBCICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IENhbGVuZGFyIHllYXIgICAgICAgICAgICAgICAgICAgfCB5ICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeW8gICAgICB8IDQ0dGgsIDFzdCwgMHRoLCAxN3RoICAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5ICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXl5ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgfCBZICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWW8gICAgICB8IDQ0dGgsIDFzdCwgMTkwMHRoLCAyMDE3dGggICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVlZICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICAgfCBSICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlIgICAgICB8IC00MywgMDAsIDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUiAgICAgfCAtMDQzLCAwMDAsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlJSICAgIHwgLTAwNDMsIDAwMDAsIDAwMDEsIDE5MDAsIDIwMTcgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUlIgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSw3IHxcbiAqIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgICB8IHUgICAgICAgfCAtNDMsIDAsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dSAgICAgIHwgLTQzLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1ICAgICB8IC0wNDMsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dXUgICAgfCAtMDA0MywgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1dSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBRdWFydGVyIChmb3JtYXR0aW5nKSAgICAgICAgICAgIHwgUSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUVEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRUSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBRdWFydGVyIChzdGFuZC1hbG9uZSkgICAgICAgICAgIHwgcSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcXEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxcSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBNb250aCAoZm9ybWF0dGluZykgICAgICAgICAgICAgIHwgTSAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1vICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTSAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU0gICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NTSAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNb250aCAoc3RhbmQtYWxvbmUpICAgICAgICAgICAgIHwgTCAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTCAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTEwgICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMTCAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgIHwgdyAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHdvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3dyAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgIHwgSSAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IElvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJSSAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgIHwgZCAgICAgICB8IDEsIDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzMXN0ICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkZCAgICAgIHwgMDEsIDAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgIHwgRCAgICAgICB8IDEsIDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzNjV0aCwgMzY2dGggICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBERCAgICAgIHwgMDEsIDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgIHwgOSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREREICAgICB8IDAwMSwgMDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEREREQgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XG4gKiB8IERheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICAgICAgfCBFLi5FRUUgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUVFICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRUUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgIHwgaSAgICAgICB8IDEsIDIsIDMsIC4uLiwgNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA3dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaSAgICAgIHwgMDEsIDAyLCAuLi4sIDA3ICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWkgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyLDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpaSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWlpICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8IDcgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICB8IGUgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWUgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZWUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlZSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChzdGFuZC1hbG9uZSkgfCBjICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY28gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2MgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjYyAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2NjICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjY2MgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgYS4uYWEgICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYSAgICAgfCBhbSwgcG0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhICAgIHwgYS5tLiwgcC5tLiAgICAgICAgICAgICAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYWEgICB8IGEsIHAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICB8IGIuLmJiICAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmIgICAgIHwgYW0sIHBtLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYiAgICB8IGEubS4sIHAubS4sIG5vb24sIG1pZG5pZ2h0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmJiICAgfCBhLCBwLCBuLCBtaSAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICAgfCBCLi5CQkIgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQiAgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkJCICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICAgfCBoICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDEydGggICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhoICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICAgfCBIICAgICAgIHwgMCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSG8gICAgICB8IDB0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhIICAgICAgfCAwMCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICAgfCBLICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMCAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDB0aCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtLICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICAgfCBrICAgICAgIHwgMjQsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga28gICAgICB8IDI0dGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtrICAgICAgfCAyNCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW8gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1tICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc28gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNzICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICAgfCBTICAgICAgIHwgMCwgMSwgLi4uLCA5ICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1MgICAgICB8IDAwLCAwMSwgLi4uLCA5OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTUyAgICAgfCAwMDAsIDAwMSwgLi4uLCA5OTkgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1NTICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy8gWikgICAgICAgIHwgWCAgICAgICB8IC0wOCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYICAgICAgfCAtMDgwMCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFggICAgIHwgLTA4OjAwLCArMDU6MzAsIFogICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWCAgICB8IC0wODAwLCArMDUzMCwgWiwgKzEyMzQ1NiAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFhYICAgfCAtMDg6MDAsICswNTozMCwgWiwgKzEyOjM0OjU2ICAgICAgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICAgfCB4ICAgICAgIHwgLTA4LCArMDUzMCwgKzAwICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHggICAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eCAgICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4ICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCwgKzEyMzQ1NiAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eHggICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAsICsxMjozNDo1NiB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgICB8IE8uLi5PT08gfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBPT09PICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiAgICAgfFxuICogfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgIHwgei4uLnp6eiB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8IDYgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHp6enogICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyLDYgICB8XG4gKiB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICAgfCB0ICAgICAgIHwgNTEyOTY5NTIwICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdHQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICB8IFQgICAgICAgfCA1MTI5Njk1MjA5MDAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBUVCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxuICogfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgIHwgUCAgICAgICB8IDA0LzI5LzE0NTMgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQICAgICAgfCBBcHIgMjksIDE0NTMgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFAgICAgIHwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUCAgICB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICB8IDIsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgICB8IHAgICAgICAgfCAxMjowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcCAgICAgIHwgMTI6MDA6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwICAgICB8IDEyOjAwOjAwIEFNIEdNVCsyICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcHAgICAgfCAxMjowMDowMCBBTSBHTVQrMDI6MDAgICAgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IENvbWJpbmF0aW9uIG9mIGRhdGUgYW5kIHRpbWUgICAgfCBQcCAgICAgIHwgMDQvMjkvMTQ1MywgMTI6MDAgQU0gICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBwcCAgICB8IEFwciAyOSwgMTQ1MywgMTI6MDA6MDAgQU0gICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUHBwcCAgfCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQcHBwcHwgRnJpZGF5LCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgIHwgMiw3ICAgfFxuICogTm90ZXM6XG4gKiAxLiBcIkZvcm1hdHRpbmdcIiB1bml0cyAoZS5nLiBmb3JtYXR0aW5nIHF1YXJ0ZXIpIGluIHRoZSBkZWZhdWx0IGVuLVVTIGxvY2FsZVxuICogICAgYXJlIHRoZSBzYW1lIGFzIFwic3RhbmQtYWxvbmVcIiB1bml0cywgYnV0IGFyZSBkaWZmZXJlbnQgaW4gc29tZSBsYW5ndWFnZXMuXG4gKiAgICBcIkZvcm1hdHRpbmdcIiB1bml0cyBhcmUgZGVjbGluZWQgYWNjb3JkaW5nIHRvIHRoZSBydWxlcyBvZiB0aGUgbGFuZ3VhZ2VcbiAqICAgIGluIHRoZSBjb250ZXh0IG9mIGEgZGF0ZS4gXCJTdGFuZC1hbG9uZVwiIHVuaXRzIGFyZSBhbHdheXMgbm9taW5hdGl2ZSBzaW5ndWxhcjpcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIExMTEwnLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIE1NTU0nLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkdSdgXG4gKlxuICogMi4gQW55IHNlcXVlbmNlIG9mIHRoZSBpZGVudGljYWwgbGV0dGVycyBpcyBhIHBhdHRlcm4sIHVubGVzcyBpdCBpcyBlc2NhcGVkIGJ5XG4gKiAgICB0aGUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgKHNlZSBiZWxvdykuXG4gKiAgICBJZiB0aGUgc2VxdWVuY2UgaXMgbG9uZ2VyIHRoYW4gbGlzdGVkIGluIHRhYmxlIChlLmcuIGBFRUVFRUVFRUVFRWApXG4gKiAgICB0aGUgb3V0cHV0IHdpbGwgYmUgdGhlIHNhbWUgYXMgZGVmYXVsdCBwYXR0ZXJuIGZvciB0aGlzIHVuaXQsIHVzdWFsbHlcbiAqICAgIHRoZSBsb25nZXN0IG9uZSAoaW4gY2FzZSBvZiBJU08gd2Vla2RheXMsIGBFRUVFYCkuIERlZmF1bHQgcGF0dGVybnMgZm9yIHVuaXRzXG4gKiAgICBhcmUgbWFya2VkIHdpdGggXCIyXCIgaW4gdGhlIGxhc3QgY29sdW1uIG9mIHRoZSB0YWJsZS5cbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTScpIC8vPT4gJ05vdidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU0nKSAvLz0+ICdOJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogMy4gU29tZSBwYXR0ZXJucyBjb3VsZCBiZSB1bmxpbWl0ZWQgbGVuZ3RoIChzdWNoIGFzIGB5eXl5eXl5eWApLlxuICogICAgVGhlIG91dHB1dCB3aWxsIGJlIHBhZGRlZCB3aXRoIHplcm9zIHRvIG1hdGNoIHRoZSBsZW5ndGggb2YgdGhlIHBhdHRlcm4uXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICd5eXl5eXl5eScpIC8vPT4gJzAwMDAyMDE3J2BcbiAqXG4gKiA0LiBgUVFRUVFgIGFuZCBgcXFxcXFgIGNvdWxkIGJlIG5vdCBzdHJpY3RseSBudW1lcmljYWwgaW4gc29tZSBsb2NhbGVzLlxuICogICAgVGhlc2UgdG9rZW5zIHJlcHJlc2VudCB0aGUgc2hvcnRlc3QgZm9ybSBvZiB0aGUgcXVhcnRlci5cbiAqXG4gKiA1LiBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgcGF0dGVybnMgYXJlIEIuQy4geWVhcnM6XG4gKlxuICogICAgfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS18LS0tLS18XG4gKiAgICB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICogICAgfCBCQyAxIHwgICAxIHwgICAwIHxcbiAqICAgIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gKlxuICogICAgQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICogICAgd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkOlxuICpcbiAqICAgIHwgWWVhciB8IGB5eWAgfCBgdXVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS0tfC0tLS0tLXxcbiAqICAgIHwgMSAgICB8ICAgMDEgfCAgIDAxIHxcbiAqICAgIHwgMTQgICB8ICAgMTQgfCAgIDE0IHxcbiAqICAgIHwgMzc2ICB8ICAgNzYgfCAgMzc2IHxcbiAqICAgIHwgMTQ1MyB8ICAgNTMgfCAxNDUzIHxcbiAqXG4gKiAgICBUaGUgc2FtZSBkaWZmZXJlbmNlIGlzIHRydWUgZm9yIGxvY2FsIGFuZCBJU08gd2Vlay1udW1iZXJpbmcgeWVhcnMgKGBZYCBhbmQgYFJgKSxcbiAqICAgIGV4Y2VwdCBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFycyBhcmUgZGVwZW5kZW50IG9uIGBvcHRpb25zLndlZWtTdGFydHNPbmBcbiAqICAgIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIChjb21wYXJlIFtnZXRJU09XZWVrWWVhcl17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRJU09XZWVrWWVhcn1cbiAqICAgIGFuZCBbZ2V0V2Vla1llYXJde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0V2Vla1llYXJ9KS5cbiAqXG4gKiA2LiBTcGVjaWZpYyBub24tbG9jYXRpb24gdGltZXpvbmVzIGFyZSBjdXJyZW50bHkgdW5hdmFpbGFibGUgaW4gYGRhdGUtZm5zYCxcbiAqICAgIHNvIHJpZ2h0IG5vdyB0aGVzZSB0b2tlbnMgZmFsbCBiYWNrIHRvIEdNVCB0aW1lem9uZXMuXG4gKlxuICogNy4gVGhlc2UgcGF0dGVybnMgYXJlIG5vdCBpbiB0aGUgVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogICAgLSBgaWA6IElTTyBkYXkgb2Ygd2Vla1xuICogICAgLSBgSWA6IElTTyB3ZWVrIG9mIHllYXJcbiAqICAgIC0gYFJgOiBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICogICAgLSBgdGA6IHNlY29uZHMgdGltZXN0YW1wXG4gKiAgICAtIGBUYDogbWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgb2A6IG9yZGluYWwgbnVtYmVyIG1vZGlmaWVyXG4gKiAgICAtIGBQYDogbG9uZyBsb2NhbGl6ZWQgZGF0ZVxuICogICAgLSBgcGA6IGxvbmcgbG9jYWxpemVkIHRpbWVcbiAqXG4gKiA4LiBgWVlgIGFuZCBgWVlZWWAgdG9rZW5zIHJlcHJlc2VudCB3ZWVrLW51bWJlcmluZyB5ZWFycyBidXQgdGhleSBhcmUgb2Z0ZW4gY29uZnVzZWQgd2l0aCB5ZWFycy5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICpcbiAqIDkuIGBEYCBhbmQgYEREYCB0b2tlbnMgcmVwcmVzZW50IGRheXMgb2YgdGhlIHllYXIgYnV0IHRoZXkgYXJlIG9mdGVuIGNvbmZ1c2VkIHdpdGggZGF5cyBvZiB0aGUgbW9udGguXG4gKiAgICBZb3Ugc2hvdWxkIGVuYWJsZSBgb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zYCB0byB1c2UgdGhlbS4gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0ge1N0cmluZ30gZm9ybWF0IC0gdGhlIHN0cmluZyBvZiB0b2tlbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZT0xXSAtIHRoZSBkYXkgb2YgSmFudWFyeSwgd2hpY2ggaXNcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zPWZhbHNlXSAtIGlmIHRydWUsIGFsbG93cyB1c2FnZSBvZiB0aGUgd2Vlay1udW1iZXJpbmcgeWVhciB0b2tlbnMgYFlZYCBhbmQgYFlZWVlgO1xuICogICBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2Vucz1mYWxzZV0gLSBpZiB0cnVlLCBhbGxvd3MgdXNhZ2Ugb2YgdGhlIGRheSBvZiB5ZWFyIHRva2VucyBgRGAgYW5kIGBERGA7XG4gKiAgIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdW5pY29kZVRva2Vucy5tZFxuICogQHJldHVybnMge1N0cmluZ30gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZ1xuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYGRhdGVgIG11c3Qgbm90IGJlIEludmFsaWQgRGF0ZVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGxvY2FsaXplYCBwcm9wZXJ0eVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMubG9jYWxlYCBtdXN0IGNvbnRhaW4gYGZvcm1hdExvbmdgIHByb3BlcnR5XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy53ZWVrU3RhcnRzT25gIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3XG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYHl5eXlgIGluc3RlYWQgb2YgYFlZWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgeXlgIGluc3RlYWQgb2YgYFlZYCBmb3IgZm9ybWF0dGluZyB5ZWFycyB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYGRgIGluc3RlYWQgb2YgYERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9ibG9iL21hc3Rlci9kb2NzL3VuaWNvZGVUb2tlbnMubWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IHVzZSBgZGRgIGluc3RlYWQgb2YgYEREYCBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91bmljb2RlVG9rZW5zLm1kXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBmb3JtYXQgc3RyaW5nIGNvbnRhaW5zIGFuIHVuZXNjYXBlZCBsYXRpbiBhbHBoYWJldCBjaGFyYWN0ZXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUmVwcmVzZW50IDExIEZlYnJ1YXJ5IDIwMTQgaW4gbWlkZGxlLWVuZGlhbiBmb3JtYXQ6XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgMSwgMTEpLCAnTU0vZGQveXl5eScpXG4gKiAvLz0+ICcwMi8xMS8yMDE0J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMiBKdWx5IDIwMTQgaW4gRXNwZXJhbnRvOlxuICogaW1wb3J0IHsgZW9Mb2NhbGUgfSBmcm9tICdkYXRlLWZucy9sb2NhbGUvZW8nXG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiksIFwiZG8gJ2RlJyBNTU1NIHl5eXlcIiwge1xuICogICBsb2NhbGU6IGVvTG9jYWxlXG4gKiB9KVxuICogLy89PiAnMi1hIGRlIGp1bGlvIDIwMTQnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEVzY2FwZSBzdHJpbmcgYnkgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnM6XG4gKiBjb25zdCByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgNiwgMiwgMTUpLCBcImggJ28nJ2Nsb2NrJ1wiKVxuICogLy89PiBcIjMgbydjbG9ja1wiXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9ybWF0KGRpcnR5RGF0ZSwgZGlydHlGb3JtYXRTdHIsIG9wdGlvbnMpIHtcbiAgdmFyIF9yZWYsIF9vcHRpb25zJGxvY2FsZSwgX3JlZjIsIF9yZWYzLCBfcmVmNCwgX29wdGlvbnMkZmlyc3RXZWVrQ29uLCBfb3B0aW9ucyRsb2NhbGUyLCBfb3B0aW9ucyRsb2NhbGUyJG9wdGksIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMiwgX3JlZjUsIF9yZWY2LCBfcmVmNywgX29wdGlvbnMkd2Vla1N0YXJ0c09uLCBfb3B0aW9ucyRsb2NhbGUzLCBfb3B0aW9ucyRsb2NhbGUzJG9wdGksIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDMsIF9kZWZhdWx0T3B0aW9ucyRsb2NhbDQ7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZm9ybWF0U3RyID0gU3RyaW5nKGRpcnR5Rm9ybWF0U3RyKTtcbiAgdmFyIGRlZmF1bHRPcHRpb25zID0gZ2V0RGVmYXVsdE9wdGlvbnMoKTtcbiAgdmFyIGxvY2FsZSA9IChfcmVmID0gKF9vcHRpb25zJGxvY2FsZSA9IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5sb2NhbGUpICE9PSBudWxsICYmIF9vcHRpb25zJGxvY2FsZSAhPT0gdm9pZCAwID8gX29wdGlvbnMkbG9jYWxlIDogZGVmYXVsdE9wdGlvbnMubG9jYWxlKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogZGVmYXVsdExvY2FsZTtcbiAgdmFyIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IHRvSW50ZWdlcigoX3JlZjIgPSAoX3JlZjMgPSAoX3JlZjQgPSAoX29wdGlvbnMkZmlyc3RXZWVrQ29uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX29wdGlvbnMkZmlyc3RXZWVrQ29uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyRmaXJzdFdlZWtDb24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUyID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZTIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUyJG9wdGkgPSBfb3B0aW9ucyRsb2NhbGUyLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZTIkb3B0aSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlMiRvcHRpLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSkgIT09IG51bGwgJiYgX3JlZjQgIT09IHZvaWQgMCA/IF9yZWY0IDogZGVmYXVsdE9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMyAhPT0gdm9pZCAwID8gX3JlZjMgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIuZmlyc3RXZWVrQ29udGFpbnNEYXRlKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAxKTtcblxuICAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDEgYW5kIDcgX2FuZF8gaXMgbm90IE5hTlxuICBpZiAoIShmaXJzdFdlZWtDb250YWluc0RhdGUgPj0gMSAmJiBmaXJzdFdlZWtDb250YWluc0RhdGUgPD0gNykpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignZmlyc3RXZWVrQ29udGFpbnNEYXRlIG11c3QgYmUgYmV0d2VlbiAxIGFuZCA3IGluY2x1c2l2ZWx5Jyk7XG4gIH1cbiAgdmFyIHdlZWtTdGFydHNPbiA9IHRvSW50ZWdlcigoX3JlZjUgPSAoX3JlZjYgPSAoX3JlZjcgPSAoX29wdGlvbnMkd2Vla1N0YXJ0c09uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX29wdGlvbnMkd2Vla1N0YXJ0c09uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUzID0gb3B0aW9ucy5sb2NhbGUpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZTMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUzJG9wdGkgPSBfb3B0aW9ucyRsb2NhbGUzLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZTMkb3B0aSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlMyRvcHRpLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjcgIT09IHZvaWQgMCA/IF9yZWY3IDogZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmNiAhPT0gdm9pZCAwID8gX3JlZjYgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsMyA9IGRlZmF1bHRPcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMyA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kZWZhdWx0T3B0aW9ucyRsb2NhbDQgPSBfZGVmYXVsdE9wdGlvbnMkbG9jYWwzLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDQud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmNSAhPT0gdm9pZCAwID8gX3JlZjUgOiAwKTtcblxuICAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDAgYW5kIDYgX2FuZF8gaXMgbm90IE5hTlxuICBpZiAoISh3ZWVrU3RhcnRzT24gPj0gMCAmJiB3ZWVrU3RhcnRzT24gPD0gNikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignd2Vla1N0YXJ0c09uIG11c3QgYmUgYmV0d2VlbiAwIGFuZCA2IGluY2x1c2l2ZWx5Jyk7XG4gIH1cbiAgaWYgKCFsb2NhbGUubG9jYWxpemUpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbG9jYWxlIG11c3QgY29udGFpbiBsb2NhbGl6ZSBwcm9wZXJ0eScpO1xuICB9XG4gIGlmICghbG9jYWxlLmZvcm1hdExvbmcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbG9jYWxlIG11c3QgY29udGFpbiBmb3JtYXRMb25nIHByb3BlcnR5Jyk7XG4gIH1cbiAgdmFyIG9yaWdpbmFsRGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICBpZiAoIWlzVmFsaWQob3JpZ2luYWxEYXRlKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHRpbWUgdmFsdWUnKTtcbiAgfVxuXG4gIC8vIENvbnZlcnQgdGhlIGRhdGUgaW4gc3lzdGVtIHRpbWV6b25lIHRvIHRoZSBzYW1lIGRhdGUgaW4gVVRDKzAwOjAwIHRpbWV6b25lLlxuICAvLyBUaGlzIGVuc3VyZXMgdGhhdCB3aGVuIFVUQyBmdW5jdGlvbnMgd2lsbCBiZSBpbXBsZW1lbnRlZCwgbG9jYWxlcyB3aWxsIGJlIGNvbXBhdGlibGUgd2l0aCB0aGVtLlxuICAvLyBTZWUgYW4gaXNzdWUgYWJvdXQgVVRDIGZ1bmN0aW9uczogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcbiAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhvcmlnaW5hbERhdGUpO1xuICB2YXIgdXRjRGF0ZSA9IHN1Yk1pbGxpc2Vjb25kcyhvcmlnaW5hbERhdGUsIHRpbWV6b25lT2Zmc2V0KTtcbiAgdmFyIGZvcm1hdHRlck9wdGlvbnMgPSB7XG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiBmaXJzdFdlZWtDb250YWluc0RhdGUsXG4gICAgd2Vla1N0YXJ0c09uOiB3ZWVrU3RhcnRzT24sXG4gICAgbG9jYWxlOiBsb2NhbGUsXG4gICAgX29yaWdpbmFsRGF0ZTogb3JpZ2luYWxEYXRlXG4gIH07XG4gIHZhciByZXN1bHQgPSBmb3JtYXRTdHIubWF0Y2gobG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHApLm1hcChmdW5jdGlvbiAoc3Vic3RyaW5nKSB7XG4gICAgdmFyIGZpcnN0Q2hhcmFjdGVyID0gc3Vic3RyaW5nWzBdO1xuICAgIGlmIChmaXJzdENoYXJhY3RlciA9PT0gJ3AnIHx8IGZpcnN0Q2hhcmFjdGVyID09PSAnUCcpIHtcbiAgICAgIHZhciBsb25nRm9ybWF0dGVyID0gbG9uZ0Zvcm1hdHRlcnNbZmlyc3RDaGFyYWN0ZXJdO1xuICAgICAgcmV0dXJuIGxvbmdGb3JtYXR0ZXIoc3Vic3RyaW5nLCBsb2NhbGUuZm9ybWF0TG9uZyk7XG4gICAgfVxuICAgIHJldHVybiBzdWJzdHJpbmc7XG4gIH0pLmpvaW4oJycpLm1hdGNoKGZvcm1hdHRpbmdUb2tlbnNSZWdFeHApLm1hcChmdW5jdGlvbiAoc3Vic3RyaW5nKSB7XG4gICAgLy8gUmVwbGFjZSB0d28gc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgd2l0aCBvbmUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlclxuICAgIGlmIChzdWJzdHJpbmcgPT09IFwiJydcIikge1xuICAgICAgcmV0dXJuIFwiJ1wiO1xuICAgIH1cbiAgICB2YXIgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyID09PSBcIidcIikge1xuICAgICAgcmV0dXJuIGNsZWFuRXNjYXBlZFN0cmluZyhzdWJzdHJpbmcpO1xuICAgIH1cbiAgICB2YXIgZm9ybWF0dGVyID0gZm9ybWF0dGVyc1tmaXJzdENoYXJhY3Rlcl07XG4gICAgaWYgKGZvcm1hdHRlcikge1xuICAgICAgaWYgKCEob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnMpICYmIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbihzdWJzdHJpbmcpKSB7XG4gICAgICAgIHRocm93UHJvdGVjdGVkRXJyb3Ioc3Vic3RyaW5nLCBkaXJ0eUZvcm1hdFN0ciwgU3RyaW5nKGRpcnR5RGF0ZSkpO1xuICAgICAgfVxuICAgICAgaWYgKCEob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy51c2VBZGRpdGlvbmFsRGF5T2ZZZWFyVG9rZW5zKSAmJiBpc1Byb3RlY3RlZERheU9mWWVhclRva2VuKHN1YnN0cmluZykpIHtcbiAgICAgICAgdGhyb3dQcm90ZWN0ZWRFcnJvcihzdWJzdHJpbmcsIGRpcnR5Rm9ybWF0U3RyLCBTdHJpbmcoZGlydHlEYXRlKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gZm9ybWF0dGVyKHV0Y0RhdGUsIHN1YnN0cmluZywgbG9jYWxlLmxvY2FsaXplLCBmb3JtYXR0ZXJPcHRpb25zKTtcbiAgICB9XG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyLm1hdGNoKHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwKSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0Zvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlciBgJyArIGZpcnN0Q2hhcmFjdGVyICsgJ2AnKTtcbiAgICB9XG4gICAgcmV0dXJuIHN1YnN0cmluZztcbiAgfSkuam9pbignJyk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBjbGVhbkVzY2FwZWRTdHJpbmcoaW5wdXQpIHtcbiAgdmFyIG1hdGNoZWQgPSBpbnB1dC5tYXRjaChlc2NhcGVkU3RyaW5nUmVnRXhwKTtcbiAgaWYgKCFtYXRjaGVkKSB7XG4gICAgcmV0dXJuIGlucHV0O1xuICB9XG4gIHJldHVybiBtYXRjaGVkWzFdLnJlcGxhY2UoZG91YmxlUXVvdGVSZWdFeHAsIFwiJ1wiKTtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIHZhbHVlIGEgZGF0ZT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZS4gVGhlIGZ1bmN0aW9uIHdvcmtzIGZvciBkYXRlcyB0cmFuc2ZlcnJlZCBhY3Jvc3MgaWZyYW1lcy5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gdGhlIHZhbHVlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBkYXRlXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKE5hTikpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHNvbWUgdmFsdWU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoJzIwMTQtMDItMzEnKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gb2JqZWN0OlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKHt9KVxuICogLy89PiBmYWxzZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc0RhdGUodmFsdWUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgfHwgX3R5cGVvZih2YWx1ZSkgPT09ICdvYmplY3QnICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IERhdGVdJztcbn0iLCJpbXBvcnQgaXNEYXRlIGZyb20gXCIuLi9pc0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNWYWxpZFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB2YWxpZD9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgZmFsc2UgaWYgYXJndW1lbnQgaXMgSW52YWxpZCBEYXRlIGFuZCB0cnVlIG90aGVyd2lzZS5cbiAqIEFyZ3VtZW50IGlzIGNvbnZlcnRlZCB0byBEYXRlIHVzaW5nIGB0b0RhdGVgLiBTZWUgW3RvRGF0ZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy90b0RhdGV9XG4gKiBJbnZhbGlkIERhdGUgaXMgYSBEYXRlLCB3aG9zZSB0aW1lIHZhbHVlIGlzIE5hTi5cbiAqXG4gKiBUaW1lIHZhbHVlIG9mIERhdGU6IGh0dHA6Ly9lczUuZ2l0aHViLmlvLyN4MTUuOS4xLjFcbiAqXG4gKiBAcGFyYW0geyp9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHZhbGlkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgyMDE0LCAxLCAzMSkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWx1ZSwgY29udmVydGFibGUgaW50byBhIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKDEzOTM4MDQ4MDAwMDApXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSBpbnZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKCcnKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNWYWxpZChkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIGlmICghaXNEYXRlKGRpcnR5RGF0ZSkgJiYgdHlwZW9mIGRpcnR5RGF0ZSAhPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgcmV0dXJuICFpc05hTihOdW1iZXIoZGF0ZSkpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkRm9ybWF0TG9uZ0ZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgLy8gVE9ETzogUmVtb3ZlIFN0cmluZygpXG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgIHZhciBmb3JtYXQgPSBhcmdzLmZvcm1hdHNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0c1thcmdzLmRlZmF1bHRXaWR0aF07XG4gICAgcmV0dXJuIGZvcm1hdDtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZExvY2FsaXplRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKGRpcnR5SW5kZXgsIG9wdGlvbnMpIHtcbiAgICB2YXIgY29udGV4dCA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMuY29udGV4dCA/IFN0cmluZyhvcHRpb25zLmNvbnRleHQpIDogJ3N0YW5kYWxvbmUnO1xuICAgIHZhciB2YWx1ZXNBcnJheTtcbiAgICBpZiAoY29udGV4dCA9PT0gJ2Zvcm1hdHRpbmcnICYmIGFyZ3MuZm9ybWF0dGluZ1ZhbHVlcykge1xuICAgICAgdmFyIGRlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdEZvcm1hdHRpbmdXaWR0aCB8fCBhcmdzLmRlZmF1bHRXaWR0aDtcbiAgICAgIHZhciB3aWR0aCA9IG9wdGlvbnMgIT09IG51bGwgJiYgb3B0aW9ucyAhPT0gdm9pZCAwICYmIG9wdGlvbnMud2lkdGggPyBTdHJpbmcob3B0aW9ucy53aWR0aCkgOiBkZWZhdWx0V2lkdGg7XG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1t3aWR0aF0gfHwgYXJncy5mb3JtYXR0aW5nVmFsdWVzW2RlZmF1bHRXaWR0aF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBfZGVmYXVsdFdpZHRoID0gYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICB2YXIgX3dpZHRoID0gb3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLnZhbHVlc1tfd2lkdGhdIHx8IGFyZ3MudmFsdWVzW19kZWZhdWx0V2lkdGhdO1xuICAgIH1cbiAgICB2YXIgaW5kZXggPSBhcmdzLmFyZ3VtZW50Q2FsbGJhY2sgPyBhcmdzLmFyZ3VtZW50Q2FsbGJhY2soZGlydHlJbmRleCkgOiBkaXJ0eUluZGV4O1xuICAgIC8vIEB0cy1pZ25vcmU6IEZvciBzb21lIHJlYXNvbiBUeXBlU2NyaXB0IGp1c3QgZG9uJ3Qgd2FudCB0byBtYXRjaCBpdCwgbm8gbWF0dGVyIGhvdyBoYXJkIHdlIHRyeS4gSSBjaGFsbGVuZ2UgeW91IHRvIHRyeSB0byByZW1vdmUgaXQhXG4gICAgcmV0dXJuIHZhbHVlc0FycmF5W2luZGV4XTtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1hdGNoRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKHN0cmluZykge1xuICAgIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoO1xuICAgIHZhciBtYXRjaFBhdHRlcm4gPSB3aWR0aCAmJiBhcmdzLm1hdGNoUGF0dGVybnNbd2lkdGhdIHx8IGFyZ3MubWF0Y2hQYXR0ZXJuc1thcmdzLmRlZmF1bHRNYXRjaFdpZHRoXTtcbiAgICB2YXIgbWF0Y2hSZXN1bHQgPSBzdHJpbmcubWF0Y2gobWF0Y2hQYXR0ZXJuKTtcbiAgICBpZiAoIW1hdGNoUmVzdWx0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VQYXR0ZXJucyA9IHdpZHRoICYmIGFyZ3MucGFyc2VQYXR0ZXJuc1t3aWR0aF0gfHwgYXJncy5wYXJzZVBhdHRlcm5zW2FyZ3MuZGVmYXVsdFBhcnNlV2lkdGhdO1xuICAgIHZhciBrZXkgPSBBcnJheS5pc0FycmF5KHBhcnNlUGF0dGVybnMpID8gZmluZEluZGV4KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgIH0pIDogZmluZEtleShwYXJzZVBhdHRlcm5zLCBmdW5jdGlvbiAocGF0dGVybikge1xuICAgICAgcmV0dXJuIHBhdHRlcm4udGVzdChtYXRjaGVkU3RyaW5nKTtcbiAgICB9KTtcbiAgICB2YXIgdmFsdWU7XG4gICAgdmFsdWUgPSBhcmdzLnZhbHVlQ2FsbGJhY2sgPyBhcmdzLnZhbHVlQ2FsbGJhY2soa2V5KSA6IGtleTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB2YXIgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHJlc3RcbiAgICB9O1xuICB9O1xufVxuZnVuY3Rpb24gZmluZEtleShvYmplY3QsIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgaWYgKG9iamVjdC5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIHByZWRpY2F0ZShvYmplY3Rba2V5XSkpIHtcbiAgICAgIHJldHVybiBrZXk7XG4gICAgfVxuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBmaW5kSW5kZXgoYXJyYXksIHByZWRpY2F0ZSkge1xuICBmb3IgKHZhciBrZXkgPSAwOyBrZXkgPCBhcnJheS5sZW5ndGg7IGtleSsrKSB7XG4gICAgaWYgKHByZWRpY2F0ZShhcnJheVtrZXldKSkge1xuICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZE1hdGNoUGF0dGVybkZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKGFyZ3MubWF0Y2hQYXR0ZXJuKTtcbiAgICBpZiAoIW1hdGNoUmVzdWx0KSByZXR1cm4gbnVsbDtcbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuICAgIHZhciBwYXJzZVJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLnBhcnNlUGF0dGVybik7XG4gICAgaWYgKCFwYXJzZVJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIHZhbHVlID0gYXJncy52YWx1ZUNhbGxiYWNrID8gYXJncy52YWx1ZUNhbGxiYWNrKHBhcnNlUmVzdWx0WzBdKSA6IHBhcnNlUmVzdWx0WzBdO1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHZhciByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogcmVzdFxuICAgIH07XG4gIH07XG59IiwidmFyIGZvcm1hdERpc3RhbmNlTG9jYWxlID0ge1xuICBsZXNzVGhhblhTZWNvbmRzOiB7XG4gICAgb25lOiAnbGVzcyB0aGFuIGEgc2Vjb25kJyxcbiAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gc2Vjb25kcydcbiAgfSxcbiAgeFNlY29uZHM6IHtcbiAgICBvbmU6ICcxIHNlY29uZCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gc2Vjb25kcydcbiAgfSxcbiAgaGFsZkFNaW51dGU6ICdoYWxmIGEgbWludXRlJyxcbiAgbGVzc1RoYW5YTWludXRlczoge1xuICAgIG9uZTogJ2xlc3MgdGhhbiBhIG1pbnV0ZScsXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IG1pbnV0ZXMnXG4gIH0sXG4gIHhNaW51dGVzOiB7XG4gICAgb25lOiAnMSBtaW51dGUnLFxuICAgIG90aGVyOiAne3tjb3VudH19IG1pbnV0ZXMnXG4gIH0sXG4gIGFib3V0WEhvdXJzOiB7XG4gICAgb25lOiAnYWJvdXQgMSBob3VyJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBob3VycydcbiAgfSxcbiAgeEhvdXJzOiB7XG4gICAgb25lOiAnMSBob3VyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBob3VycydcbiAgfSxcbiAgeERheXM6IHtcbiAgICBvbmU6ICcxIGRheScsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gZGF5cydcbiAgfSxcbiAgYWJvdXRYV2Vla3M6IHtcbiAgICBvbmU6ICdhYm91dCAxIHdlZWsnLFxuICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHdlZWtzJ1xuICB9LFxuICB4V2Vla3M6IHtcbiAgICBvbmU6ICcxIHdlZWsnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHdlZWtzJ1xuICB9LFxuICBhYm91dFhNb250aHM6IHtcbiAgICBvbmU6ICdhYm91dCAxIG1vbnRoJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBtb250aHMnXG4gIH0sXG4gIHhNb250aHM6IHtcbiAgICBvbmU6ICcxIG1vbnRoJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtb250aHMnXG4gIH0sXG4gIGFib3V0WFllYXJzOiB7XG4gICAgb25lOiAnYWJvdXQgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgeFllYXJzOiB7XG4gICAgb25lOiAnMSB5ZWFyJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgb3ZlclhZZWFyczoge1xuICAgIG9uZTogJ292ZXIgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ292ZXIge3tjb3VudH19IHllYXJzJ1xuICB9LFxuICBhbG1vc3RYWWVhcnM6IHtcbiAgICBvbmU6ICdhbG1vc3QgMSB5ZWFyJyxcbiAgICBvdGhlcjogJ2FsbW9zdCB7e2NvdW50fX0geWVhcnMnXG4gIH1cbn07XG52YXIgZm9ybWF0RGlzdGFuY2UgPSBmdW5jdGlvbiBmb3JtYXREaXN0YW5jZSh0b2tlbiwgY291bnQsIG9wdGlvbnMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgdmFyIHRva2VuVmFsdWUgPSBmb3JtYXREaXN0YW5jZUxvY2FsZVt0b2tlbl07XG4gIGlmICh0eXBlb2YgdG9rZW5WYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vbmU7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vdGhlci5yZXBsYWNlKCd7e2NvdW50fX0nLCBjb3VudC50b1N0cmluZygpKTtcbiAgfVxuICBpZiAob3B0aW9ucyAhPT0gbnVsbCAmJiBvcHRpb25zICE9PSB2b2lkIDAgJiYgb3B0aW9ucy5hZGRTdWZmaXgpIHtcbiAgICBpZiAob3B0aW9ucy5jb21wYXJpc29uICYmIG9wdGlvbnMuY29tcGFyaXNvbiA+IDApIHtcbiAgICAgIHJldHVybiAnaW4gJyArIHJlc3VsdDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHJlc3VsdCArICcgYWdvJztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXREaXN0YW5jZTsiLCJpbXBvcnQgYnVpbGRGb3JtYXRMb25nRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanNcIjtcbnZhciBkYXRlRm9ybWF0cyA9IHtcbiAgZnVsbDogJ0VFRUUsIE1NTU0gZG8sIHknLFxuICBsb25nOiAnTU1NTSBkbywgeScsXG4gIG1lZGl1bTogJ01NTSBkLCB5JyxcbiAgc2hvcnQ6ICdNTS9kZC95eXl5J1xufTtcbnZhciB0aW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogJ2g6bW06c3MgYSB6enp6JyxcbiAgbG9uZzogJ2g6bW06c3MgYSB6JyxcbiAgbWVkaXVtOiAnaDptbTpzcyBhJyxcbiAgc2hvcnQ6ICdoOm1tIGEnXG59O1xudmFyIGRhdGVUaW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIGxvbmc6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBtZWRpdW06ICd7e2RhdGV9fSwge3t0aW1lfX0nLFxuICBzaG9ydDogJ3t7ZGF0ZX19LCB7e3RpbWV9fSdcbn07XG52YXIgZm9ybWF0TG9uZyA9IHtcbiAgZGF0ZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICB0aW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogdGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIGRhdGVUaW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZVRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0TG9uZzsiLCJ2YXIgZm9ybWF0UmVsYXRpdmVMb2NhbGUgPSB7XG4gIGxhc3RXZWVrOiBcIidsYXN0JyBlZWVlICdhdCcgcFwiLFxuICB5ZXN0ZXJkYXk6IFwiJ3llc3RlcmRheSBhdCcgcFwiLFxuICB0b2RheTogXCIndG9kYXkgYXQnIHBcIixcbiAgdG9tb3Jyb3c6IFwiJ3RvbW9ycm93IGF0JyBwXCIsXG4gIG5leHRXZWVrOiBcImVlZWUgJ2F0JyBwXCIsXG4gIG90aGVyOiAnUCdcbn07XG52YXIgZm9ybWF0UmVsYXRpdmUgPSBmdW5jdGlvbiBmb3JtYXRSZWxhdGl2ZSh0b2tlbiwgX2RhdGUsIF9iYXNlRGF0ZSwgX29wdGlvbnMpIHtcbiAgcmV0dXJuIGZvcm1hdFJlbGF0aXZlTG9jYWxlW3Rva2VuXTtcbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXRSZWxhdGl2ZTsiLCJpbXBvcnQgYnVpbGRMb2NhbGl6ZUZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTG9jYWxpemVGbi9pbmRleC5qc1wiO1xudmFyIGVyYVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0InLCAnQSddLFxuICBhYmJyZXZpYXRlZDogWydCQycsICdBRCddLFxuICB3aWRlOiBbJ0JlZm9yZSBDaHJpc3QnLCAnQW5ubyBEb21pbmknXVxufTtcbnZhciBxdWFydGVyVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnMScsICcyJywgJzMnLCAnNCddLFxuICBhYmJyZXZpYXRlZDogWydRMScsICdRMicsICdRMycsICdRNCddLFxuICB3aWRlOiBbJzFzdCBxdWFydGVyJywgJzJuZCBxdWFydGVyJywgJzNyZCBxdWFydGVyJywgJzR0aCBxdWFydGVyJ11cbn07XG5cbi8vIE5vdGU6IGluIEVuZ2xpc2gsIHRoZSBuYW1lcyBvZiBkYXlzIG9mIHRoZSB3ZWVrIGFuZCBtb250aHMgYXJlIGNhcGl0YWxpemVkLlxuLy8gSWYgeW91IGFyZSBtYWtpbmcgYSBuZXcgbG9jYWxlIGJhc2VkIG9uIHRoaXMgb25lLCBjaGVjayBpZiB0aGUgc2FtZSBpcyB0cnVlIGZvciB0aGUgbGFuZ3VhZ2UgeW91J3JlIHdvcmtpbmcgb24uXG4vLyBHZW5lcmFsbHksIGZvcm1hdHRlZCBkYXRlcyBzaG91bGQgbG9vayBsaWtlIHRoZXkgYXJlIGluIHRoZSBtaWRkbGUgb2YgYSBzZW50ZW5jZSxcbi8vIGUuZy4gaW4gU3BhbmlzaCBsYW5ndWFnZSB0aGUgd2Vla2RheXMgYW5kIG1vbnRocyBzaG91bGQgYmUgaW4gdGhlIGxvd2VyY2FzZS5cbnZhciBtb250aFZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ0onLCAnRicsICdNJywgJ0EnLCAnTScsICdKJywgJ0onLCAnQScsICdTJywgJ08nLCAnTicsICdEJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0phbicsICdGZWInLCAnTWFyJywgJ0FwcicsICdNYXknLCAnSnVuJywgJ0p1bCcsICdBdWcnLCAnU2VwJywgJ09jdCcsICdOb3YnLCAnRGVjJ10sXG4gIHdpZGU6IFsnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLCAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLCAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlciddXG59O1xudmFyIGRheVZhbHVlcyA9IHtcbiAgbmFycm93OiBbJ1MnLCAnTScsICdUJywgJ1cnLCAnVCcsICdGJywgJ1MnXSxcbiAgc2hvcnQ6IFsnU3UnLCAnTW8nLCAnVHUnLCAnV2UnLCAnVGgnLCAnRnInLCAnU2EnXSxcbiAgYWJicmV2aWF0ZWQ6IFsnU3VuJywgJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0J10sXG4gIHdpZGU6IFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXVxufTtcbnZhciBkYXlQZXJpb2RWYWx1ZXMgPSB7XG4gIG5hcnJvdzoge1xuICAgIGFtOiAnYScsXG4gICAgcG06ICdwJyxcbiAgICBtaWRuaWdodDogJ21pJyxcbiAgICBub29uOiAnbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH0sXG4gIGFiYnJldmlhdGVkOiB7XG4gICAgYW06ICdBTScsXG4gICAgcG06ICdQTScsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9LFxuICB3aWRlOiB7XG4gICAgYW06ICdhLm0uJyxcbiAgICBwbTogJ3AubS4nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfVxufTtcbnZhciBmb3JtYXR0aW5nRGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICdtaScsXG4gICAgbm9vbjogJ24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH1cbn07XG52YXIgb3JkaW5hbE51bWJlciA9IGZ1bmN0aW9uIG9yZGluYWxOdW1iZXIoZGlydHlOdW1iZXIsIF9vcHRpb25zKSB7XG4gIHZhciBudW1iZXIgPSBOdW1iZXIoZGlydHlOdW1iZXIpO1xuXG4gIC8vIElmIG9yZGluYWwgbnVtYmVycyBkZXBlbmQgb24gY29udGV4dCwgZm9yIGV4YW1wbGUsXG4gIC8vIGlmIHRoZXkgYXJlIGRpZmZlcmVudCBmb3IgZGlmZmVyZW50IGdyYW1tYXRpY2FsIGdlbmRlcnMsXG4gIC8vIHVzZSBgb3B0aW9ucy51bml0YC5cbiAgLy9cbiAgLy8gYHVuaXRgIGNhbiBiZSAneWVhcicsICdxdWFydGVyJywgJ21vbnRoJywgJ3dlZWsnLCAnZGF0ZScsICdkYXlPZlllYXInLFxuICAvLyAnZGF5JywgJ2hvdXInLCAnbWludXRlJywgJ3NlY29uZCcuXG5cbiAgdmFyIHJlbTEwMCA9IG51bWJlciAlIDEwMDtcbiAgaWYgKHJlbTEwMCA+IDIwIHx8IHJlbTEwMCA8IDEwKSB7XG4gICAgc3dpdGNoIChyZW0xMDAgJSAxMCkge1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gbnVtYmVyICsgJ3N0JztcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuIG51bWJlciArICduZCc7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAncmQnO1xuICAgIH1cbiAgfVxuICByZXR1cm4gbnVtYmVyICsgJ3RoJztcbn07XG52YXIgbG9jYWxpemUgPSB7XG4gIG9yZGluYWxOdW1iZXI6IG9yZGluYWxOdW1iZXIsXG4gIGVyYTogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IGVyYVZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRMb2NhbGl6ZUZuKHtcbiAgICB2YWx1ZXM6IHF1YXJ0ZXJWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgYXJndW1lbnRDYWxsYmFjazogZnVuY3Rpb24gYXJndW1lbnRDYWxsYmFjayhxdWFydGVyKSB7XG4gICAgICByZXR1cm4gcXVhcnRlciAtIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5OiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5VmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXlQZXJpb2Q6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgZm9ybWF0dGluZ1ZhbHVlczogZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoOiAnd2lkZSdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBsb2NhbGl6ZTsiLCJpbXBvcnQgYnVpbGRNYXRjaEZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qc1wiO1xuaW1wb3J0IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qc1wiO1xudmFyIG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXihcXGQrKSh0aHxzdHxuZHxyZCk/L2k7XG52YXIgcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9cXGQrL2k7XG52YXIgbWF0Y2hFcmFQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihifGEpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihiXFwuP1xccz9jXFwuP3xiXFwuP1xccz9jXFwuP1xccz9lXFwuP3xhXFwuP1xccz9kXFwuP3xjXFwuP1xccz9lXFwuPykvaSxcbiAgd2lkZTogL14oYmVmb3JlIGNocmlzdHxiZWZvcmUgY29tbW9uIGVyYXxhbm5vIGRvbWluaXxjb21tb24gZXJhKS9pXG59O1xudmFyIHBhcnNlRXJhUGF0dGVybnMgPSB7XG4gIGFueTogWy9eYi9pLCAvXihhfGMpL2ldXG59O1xudmFyIG1hdGNoUXVhcnRlclBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eWzEyMzRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXnFbMTIzNF0vaSxcbiAgd2lkZTogL15bMTIzNF0odGh8c3R8bmR8cmQpPyBxdWFydGVyL2lcbn07XG52YXIgcGFyc2VRdWFydGVyUGF0dGVybnMgPSB7XG4gIGFueTogWy8xL2ksIC8yL2ksIC8zL2ksIC80L2ldXG59O1xudmFyIG1hdGNoTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltqZm1hc29uZF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGphbnxmZWJ8bWFyfGFwcnxtYXl8anVufGp1bHxhdWd8c2VwfG9jdHxub3Z8ZGVjKS9pLFxuICB3aWRlOiAvXihqYW51YXJ5fGZlYnJ1YXJ5fG1hcmNofGFwcmlsfG1heXxqdW5lfGp1bHl8YXVndXN0fHNlcHRlbWJlcnxvY3RvYmVyfG5vdmVtYmVyfGRlY2VtYmVyKS9pXG59O1xudmFyIHBhcnNlTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15qL2ksIC9eZi9pLCAvXm0vaSwgL15hL2ksIC9ebS9pLCAvXmovaSwgL15qL2ksIC9eYS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV0sXG4gIGFueTogWy9eamEvaSwgL15mL2ksIC9ebWFyL2ksIC9eYXAvaSwgL15tYXkvaSwgL15qdW4vaSwgL15qdWwvaSwgL15hdS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV1cbn07XG52YXIgbWF0Y2hEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltzbXR3Zl0vaSxcbiAgc2hvcnQ6IC9eKHN1fG1vfHR1fHdlfHRofGZyfHNhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oc3VufG1vbnx0dWV8d2VkfHRodXxmcml8c2F0KS9pLFxuICB3aWRlOiAvXihzdW5kYXl8bW9uZGF5fHR1ZXNkYXl8d2VkbmVzZGF5fHRodXJzZGF5fGZyaWRheXxzYXR1cmRheSkvaVxufTtcbnZhciBwYXJzZURheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXnMvaSwgL15tL2ksIC9edC9pLCAvXncvaSwgL150L2ksIC9eZi9pLCAvXnMvaV0sXG4gIGFueTogWy9ec3UvaSwgL15tL2ksIC9edHUvaSwgL153L2ksIC9edGgvaSwgL15mL2ksIC9ec2EvaV1cbn07XG52YXIgbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihhfHB8bWl8bnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2ksXG4gIGFueTogL14oW2FwXVxcLj9cXHM/bVxcLj98bWlkbmlnaHR8bm9vbnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2lcbn07XG52YXIgcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgYW55OiB7XG4gICAgYW06IC9eYS9pLFxuICAgIHBtOiAvXnAvaSxcbiAgICBtaWRuaWdodDogL15taS9pLFxuICAgIG5vb246IC9ebm8vaSxcbiAgICBtb3JuaW5nOiAvbW9ybmluZy9pLFxuICAgIGFmdGVybm9vbjogL2FmdGVybm9vbi9pLFxuICAgIGV2ZW5pbmc6IC9ldmVuaW5nL2ksXG4gICAgbmlnaHQ6IC9uaWdodC9pXG4gIH1cbn07XG52YXIgbWF0Y2ggPSB7XG4gIG9yZGluYWxOdW1iZXI6IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oe1xuICAgIG1hdGNoUGF0dGVybjogbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICBwYXJzZVBhdHRlcm46IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gdmFsdWVDYWxsYmFjayh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgfVxuICB9KSxcbiAgZXJhOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZUVyYVBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KSxcbiAgcXVhcnRlcjogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaFF1YXJ0ZXJQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55JyxcbiAgICB2YWx1ZUNhbGxiYWNrOiBmdW5jdGlvbiB2YWx1ZUNhbGxiYWNrKGluZGV4KSB7XG4gICAgICByZXR1cm4gaW5kZXggKyAxO1xuICAgIH1cbiAgfSksXG4gIG1vbnRoOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlTW9udGhQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheTogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSksXG4gIGRheVBlcmlvZDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaERheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnYW55JyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZURheVBlcmlvZFBhdHRlcm5zLFxuICAgIGRlZmF1bHRQYXJzZVdpZHRoOiAnYW55J1xuICB9KVxufTtcbmV4cG9ydCBkZWZhdWx0IG1hdGNoOyIsImltcG9ydCBmb3JtYXREaXN0YW5jZSBmcm9tIFwiLi9fbGliL2Zvcm1hdERpc3RhbmNlL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0TG9uZyBmcm9tIFwiLi9fbGliL2Zvcm1hdExvbmcvaW5kZXguanNcIjtcbmltcG9ydCBmb3JtYXRSZWxhdGl2ZSBmcm9tIFwiLi9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzXCI7XG5pbXBvcnQgbG9jYWxpemUgZnJvbSBcIi4vX2xpYi9sb2NhbGl6ZS9pbmRleC5qc1wiO1xuaW1wb3J0IG1hdGNoIGZyb20gXCIuL19saWIvbWF0Y2gvaW5kZXguanNcIjtcbi8qKlxuICogQHR5cGUge0xvY2FsZX1cbiAqIEBjYXRlZ29yeSBMb2NhbGVzXG4gKiBAc3VtbWFyeSBFbmdsaXNoIGxvY2FsZSAoVW5pdGVkIFN0YXRlcykuXG4gKiBAbGFuZ3VhZ2UgRW5nbGlzaFxuICogQGlzby02MzktMiBlbmdcbiAqIEBhdXRob3IgU2FzaGEgS29zcyBbQGtvc3Nub2NvcnBde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9rb3Nzbm9jb3JwfVxuICogQGF1dGhvciBMZXNoYSBLb3NzIFtAbGVzaGFrb3NzXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbGVzaGFrb3NzfVxuICovXG52YXIgbG9jYWxlID0ge1xuICBjb2RlOiAnZW4tVVMnLFxuICBmb3JtYXREaXN0YW5jZTogZm9ybWF0RGlzdGFuY2UsXG4gIGZvcm1hdExvbmc6IGZvcm1hdExvbmcsXG4gIGZvcm1hdFJlbGF0aXZlOiBmb3JtYXRSZWxhdGl2ZSxcbiAgbG9jYWxpemU6IGxvY2FsaXplLFxuICBtYXRjaDogbWF0Y2gsXG4gIG9wdGlvbnM6IHtcbiAgICB3ZWVrU3RhcnRzT246IDAgLyogU3VuZGF5ICovLFxuICAgIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZTogMVxuICB9XG59O1xuZXhwb3J0IGRlZmF1bHQgbG9jYWxlOyIsImltcG9ydCB7IG1pbGxpc2Vjb25kc0luSG91ciwgbWlsbGlzZWNvbmRzSW5NaW51dGUgfSBmcm9tIFwiLi4vY29uc3RhbnRzL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgcGFyc2VJU09cbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgUGFyc2UgSVNPIHN0cmluZ1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUGFyc2UgdGhlIGdpdmVuIHN0cmluZyBpbiBJU08gODYwMSBmb3JtYXQgYW5kIHJldHVybiBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEZ1bmN0aW9uIGFjY2VwdHMgY29tcGxldGUgSVNPIDg2MDEgZm9ybWF0cyBhcyB3ZWxsIGFzIHBhcnRpYWwgaW1wbGVtZW50YXRpb25zLlxuICogSVNPIDg2MDE6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPXzg2MDFcbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXNuJ3QgYSBzdHJpbmcsIHRoZSBmdW5jdGlvbiBjYW5ub3QgcGFyc2UgdGhlIHN0cmluZyBvclxuICogdGhlIHZhbHVlcyBhcmUgaW52YWxpZCwgaXQgcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGFyZ3VtZW50IC0gdGhlIHZhbHVlIHRvIGNvbnZlcnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHswfDF8Mn0gW29wdGlvbnMuYWRkaXRpb25hbERpZ2l0cz0yXSAtIHRoZSBhZGRpdGlvbmFsIG51bWJlciBvZiBkaWdpdHMgaW4gdGhlIGV4dGVuZGVkIHllYXIgZm9ybWF0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMuYWRkaXRpb25hbERpZ2l0c2AgbXVzdCBiZSAwLCAxIG9yIDJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCBzdHJpbmcgJzIwMTQtMDItMTFUMTE6MzA6MzAnIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBwYXJzZUlTTygnMjAxNC0wMi0xMVQxMTozMDozMCcpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHN0cmluZyAnKzAyMDE0MTAxJyB0byBkYXRlLFxuICogLy8gaWYgdGhlIGFkZGl0aW9uYWwgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZXh0ZW5kZWQgeWVhciBmb3JtYXQgaXMgMTpcbiAqIGNvbnN0IHJlc3VsdCA9IHBhcnNlSVNPKCcrMDIwMTQxMDEnLCB7IGFkZGl0aW9uYWxEaWdpdHM6IDEgfSlcbiAqIC8vPT4gRnJpIEFwciAxMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhcnNlSVNPKGFyZ3VtZW50LCBvcHRpb25zKSB7XG4gIHZhciBfb3B0aW9ucyRhZGRpdGlvbmFsRGk7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgYWRkaXRpb25hbERpZ2l0cyA9IHRvSW50ZWdlcigoX29wdGlvbnMkYWRkaXRpb25hbERpID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmFkZGl0aW9uYWxEaWdpdHMpICE9PSBudWxsICYmIF9vcHRpb25zJGFkZGl0aW9uYWxEaSAhPT0gdm9pZCAwID8gX29wdGlvbnMkYWRkaXRpb25hbERpIDogMik7XG4gIGlmIChhZGRpdGlvbmFsRGlnaXRzICE9PSAyICYmIGFkZGl0aW9uYWxEaWdpdHMgIT09IDEgJiYgYWRkaXRpb25hbERpZ2l0cyAhPT0gMCkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdhZGRpdGlvbmFsRGlnaXRzIG11c3QgYmUgMCwgMSBvciAyJyk7XG4gIH1cbiAgaWYgKCEodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpID09PSAnW29iamVjdCBTdHJpbmddJykpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxuICB2YXIgZGF0ZVN0cmluZ3MgPSBzcGxpdERhdGVTdHJpbmcoYXJndW1lbnQpO1xuICB2YXIgZGF0ZTtcbiAgaWYgKGRhdGVTdHJpbmdzLmRhdGUpIHtcbiAgICB2YXIgcGFyc2VZZWFyUmVzdWx0ID0gcGFyc2VZZWFyKGRhdGVTdHJpbmdzLmRhdGUsIGFkZGl0aW9uYWxEaWdpdHMpO1xuICAgIGRhdGUgPSBwYXJzZURhdGUocGFyc2VZZWFyUmVzdWx0LnJlc3REYXRlU3RyaW5nLCBwYXJzZVllYXJSZXN1bHQueWVhcik7XG4gIH1cbiAgaWYgKCFkYXRlIHx8IGlzTmFOKGRhdGUuZ2V0VGltZSgpKSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG4gIHZhciB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgdmFyIHRpbWUgPSAwO1xuICB2YXIgb2Zmc2V0O1xuICBpZiAoZGF0ZVN0cmluZ3MudGltZSkge1xuICAgIHRpbWUgPSBwYXJzZVRpbWUoZGF0ZVN0cmluZ3MudGltZSk7XG4gICAgaWYgKGlzTmFOKHRpbWUpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gIH1cbiAgaWYgKGRhdGVTdHJpbmdzLnRpbWV6b25lKSB7XG4gICAgb2Zmc2V0ID0gcGFyc2VUaW1lem9uZShkYXRlU3RyaW5ncy50aW1lem9uZSk7XG4gICAgaWYgKGlzTmFOKG9mZnNldCkpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB2YXIgZGlydHlEYXRlID0gbmV3IERhdGUodGltZXN0YW1wICsgdGltZSk7XG4gICAgLy8ganMgcGFyc2VkIHN0cmluZyBhc3N1bWluZyBpdCdzIGluIFVUQyB0aW1lem9uZVxuICAgIC8vIGJ1dCB3ZSBuZWVkIGl0IHRvIGJlIHBhcnNlZCBpbiBvdXIgdGltZXpvbmVcbiAgICAvLyBzbyB3ZSB1c2UgdXRjIHZhbHVlcyB0byBidWlsZCBkYXRlIGluIG91ciB0aW1lem9uZS5cbiAgICAvLyBZZWFyIHZhbHVlcyBmcm9tIDAgdG8gOTkgbWFwIHRvIHRoZSB5ZWFycyAxOTAwIHRvIDE5OTlcbiAgICAvLyBzbyBzZXQgeWVhciBleHBsaWNpdGx5IHdpdGggc2V0RnVsbFllYXIuXG4gICAgdmFyIHJlc3VsdCA9IG5ldyBEYXRlKDApO1xuICAgIHJlc3VsdC5zZXRGdWxsWWVhcihkaXJ0eURhdGUuZ2V0VVRDRnVsbFllYXIoKSwgZGlydHlEYXRlLmdldFVUQ01vbnRoKCksIGRpcnR5RGF0ZS5nZXRVVENEYXRlKCkpO1xuICAgIHJlc3VsdC5zZXRIb3VycyhkaXJ0eURhdGUuZ2V0VVRDSG91cnMoKSwgZGlydHlEYXRlLmdldFVUQ01pbnV0ZXMoKSwgZGlydHlEYXRlLmdldFVUQ1NlY29uZHMoKSwgZGlydHlEYXRlLmdldFVUQ01pbGxpc2Vjb25kcygpKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIHJldHVybiBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lICsgb2Zmc2V0KTtcbn1cbnZhciBwYXR0ZXJucyA9IHtcbiAgZGF0ZVRpbWVEZWxpbWl0ZXI6IC9bVCBdLyxcbiAgdGltZVpvbmVEZWxpbWl0ZXI6IC9bWiBdL2ksXG4gIHRpbWV6b25lOiAvKFtaKy1dLiopJC9cbn07XG52YXIgZGF0ZVJlZ2V4ID0gL14tPyg/OihcXGR7M30pfChcXGR7Mn0pKD86LT8oXFxkezJ9KSk/fFcoXFxkezJ9KSg/Oi0/KFxcZHsxfSkpP3wpJC87XG52YXIgdGltZVJlZ2V4ID0gL14oXFxkezJ9KD86Wy4sXVxcZCopPykoPzo6PyhcXGR7Mn0oPzpbLixdXFxkKik/KSk/KD86Oj8oXFxkezJ9KD86Wy4sXVxcZCopPykpPyQvO1xudmFyIHRpbWV6b25lUmVnZXggPSAvXihbKy1dKShcXGR7Mn0pKD86Oj8oXFxkezJ9KSk/JC87XG5mdW5jdGlvbiBzcGxpdERhdGVTdHJpbmcoZGF0ZVN0cmluZykge1xuICB2YXIgZGF0ZVN0cmluZ3MgPSB7fTtcbiAgdmFyIGFycmF5ID0gZGF0ZVN0cmluZy5zcGxpdChwYXR0ZXJucy5kYXRlVGltZURlbGltaXRlcik7XG4gIHZhciB0aW1lU3RyaW5nO1xuXG4gIC8vIFRoZSByZWdleCBtYXRjaCBzaG91bGQgb25seSByZXR1cm4gYXQgbWF4aW11bSB0d28gYXJyYXkgZWxlbWVudHMuXG4gIC8vIFtkYXRlXSwgW3RpbWVdLCBvciBbZGF0ZSwgdGltZV0uXG4gIGlmIChhcnJheS5sZW5ndGggPiAyKSB7XG4gICAgcmV0dXJuIGRhdGVTdHJpbmdzO1xuICB9XG4gIGlmICgvOi8udGVzdChhcnJheVswXSkpIHtcbiAgICB0aW1lU3RyaW5nID0gYXJyYXlbMF07XG4gIH0gZWxzZSB7XG4gICAgZGF0ZVN0cmluZ3MuZGF0ZSA9IGFycmF5WzBdO1xuICAgIHRpbWVTdHJpbmcgPSBhcnJheVsxXTtcbiAgICBpZiAocGF0dGVybnMudGltZVpvbmVEZWxpbWl0ZXIudGVzdChkYXRlU3RyaW5ncy5kYXRlKSkge1xuICAgICAgZGF0ZVN0cmluZ3MuZGF0ZSA9IGRhdGVTdHJpbmcuc3BsaXQocGF0dGVybnMudGltZVpvbmVEZWxpbWl0ZXIpWzBdO1xuICAgICAgdGltZVN0cmluZyA9IGRhdGVTdHJpbmcuc3Vic3RyKGRhdGVTdHJpbmdzLmRhdGUubGVuZ3RoLCBkYXRlU3RyaW5nLmxlbmd0aCk7XG4gICAgfVxuICB9XG4gIGlmICh0aW1lU3RyaW5nKSB7XG4gICAgdmFyIHRva2VuID0gcGF0dGVybnMudGltZXpvbmUuZXhlYyh0aW1lU3RyaW5nKTtcbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWUgPSB0aW1lU3RyaW5nLnJlcGxhY2UodG9rZW5bMV0sICcnKTtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWV6b25lID0gdG9rZW5bMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWUgPSB0aW1lU3RyaW5nO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZGF0ZVN0cmluZ3M7XG59XG5mdW5jdGlvbiBwYXJzZVllYXIoZGF0ZVN0cmluZywgYWRkaXRpb25hbERpZ2l0cykge1xuICB2YXIgcmVnZXggPSBuZXcgUmVnRXhwKCdeKD86KFxcXFxkezR9fFsrLV1cXFxcZHsnICsgKDQgKyBhZGRpdGlvbmFsRGlnaXRzKSArICd9KXwoXFxcXGR7Mn18WystXVxcXFxkeycgKyAoMiArIGFkZGl0aW9uYWxEaWdpdHMpICsgJ30pJCknKTtcbiAgdmFyIGNhcHR1cmVzID0gZGF0ZVN0cmluZy5tYXRjaChyZWdleCk7XG4gIC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB5ZWFyXG4gIGlmICghY2FwdHVyZXMpIHJldHVybiB7XG4gICAgeWVhcjogTmFOLFxuICAgIHJlc3REYXRlU3RyaW5nOiAnJ1xuICB9O1xuICB2YXIgeWVhciA9IGNhcHR1cmVzWzFdID8gcGFyc2VJbnQoY2FwdHVyZXNbMV0pIDogbnVsbDtcbiAgdmFyIGNlbnR1cnkgPSBjYXB0dXJlc1syXSA/IHBhcnNlSW50KGNhcHR1cmVzWzJdKSA6IG51bGw7XG5cbiAgLy8gZWl0aGVyIHllYXIgb3IgY2VudHVyeSBpcyBudWxsLCBub3QgYm90aFxuICByZXR1cm4ge1xuICAgIHllYXI6IGNlbnR1cnkgPT09IG51bGwgPyB5ZWFyIDogY2VudHVyeSAqIDEwMCxcbiAgICByZXN0RGF0ZVN0cmluZzogZGF0ZVN0cmluZy5zbGljZSgoY2FwdHVyZXNbMV0gfHwgY2FwdHVyZXNbMl0pLmxlbmd0aClcbiAgfTtcbn1cbmZ1bmN0aW9uIHBhcnNlRGF0ZShkYXRlU3RyaW5nLCB5ZWFyKSB7XG4gIC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB5ZWFyXG4gIGlmICh5ZWFyID09PSBudWxsKSByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgdmFyIGNhcHR1cmVzID0gZGF0ZVN0cmluZy5tYXRjaChkYXRlUmVnZXgpO1xuICAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgc3RyaW5nXG4gIGlmICghY2FwdHVyZXMpIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB2YXIgaXNXZWVrRGF0ZSA9ICEhY2FwdHVyZXNbNF07XG4gIHZhciBkYXlPZlllYXIgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzFdKTtcbiAgdmFyIG1vbnRoID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1syXSkgLSAxO1xuICB2YXIgZGF5ID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1szXSk7XG4gIHZhciB3ZWVrID0gcGFyc2VEYXRlVW5pdChjYXB0dXJlc1s0XSk7XG4gIHZhciBkYXlPZldlZWsgPSBwYXJzZURhdGVVbml0KGNhcHR1cmVzWzVdKSAtIDE7XG4gIGlmIChpc1dlZWtEYXRlKSB7XG4gICAgaWYgKCF2YWxpZGF0ZVdlZWtEYXRlKHllYXIsIHdlZWssIGRheU9mV2VlaykpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICAgIH1cbiAgICByZXR1cm4gZGF5T2ZJU09XZWVrWWVhcih5ZWFyLCB3ZWVrLCBkYXlPZldlZWspO1xuICB9IGVsc2Uge1xuICAgIHZhciBkYXRlID0gbmV3IERhdGUoMCk7XG4gICAgaWYgKCF2YWxpZGF0ZURhdGUoeWVhciwgbW9udGgsIGRheSkgfHwgIXZhbGlkYXRlRGF5T2ZZZWFyRGF0ZSh5ZWFyLCBkYXlPZlllYXIpKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgICB9XG4gICAgZGF0ZS5zZXRVVENGdWxsWWVhcih5ZWFyLCBtb250aCwgTWF0aC5tYXgoZGF5T2ZZZWFyLCBkYXkpKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxufVxuZnVuY3Rpb24gcGFyc2VEYXRlVW5pdCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPyBwYXJzZUludCh2YWx1ZSkgOiAxO1xufVxuZnVuY3Rpb24gcGFyc2VUaW1lKHRpbWVTdHJpbmcpIHtcbiAgdmFyIGNhcHR1cmVzID0gdGltZVN0cmluZy5tYXRjaCh0aW1lUmVnZXgpO1xuICBpZiAoIWNhcHR1cmVzKSByZXR1cm4gTmFOOyAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgdGltZVxuXG4gIHZhciBob3VycyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbMV0pO1xuICB2YXIgbWludXRlcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbMl0pO1xuICB2YXIgc2Vjb25kcyA9IHBhcnNlVGltZVVuaXQoY2FwdHVyZXNbM10pO1xuICBpZiAoIXZhbGlkYXRlVGltZShob3VycywgbWludXRlcywgc2Vjb25kcykpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG4gIHJldHVybiBob3VycyAqIG1pbGxpc2Vjb25kc0luSG91ciArIG1pbnV0ZXMgKiBtaWxsaXNlY29uZHNJbk1pbnV0ZSArIHNlY29uZHMgKiAxMDAwO1xufVxuZnVuY3Rpb24gcGFyc2VUaW1lVW5pdCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgJiYgcGFyc2VGbG9hdCh2YWx1ZS5yZXBsYWNlKCcsJywgJy4nKSkgfHwgMDtcbn1cbmZ1bmN0aW9uIHBhcnNlVGltZXpvbmUodGltZXpvbmVTdHJpbmcpIHtcbiAgaWYgKHRpbWV6b25lU3RyaW5nID09PSAnWicpIHJldHVybiAwO1xuICB2YXIgY2FwdHVyZXMgPSB0aW1lem9uZVN0cmluZy5tYXRjaCh0aW1lem9uZVJlZ2V4KTtcbiAgaWYgKCFjYXB0dXJlcykgcmV0dXJuIDA7XG4gIHZhciBzaWduID0gY2FwdHVyZXNbMV0gPT09ICcrJyA/IC0xIDogMTtcbiAgdmFyIGhvdXJzID0gcGFyc2VJbnQoY2FwdHVyZXNbMl0pO1xuICB2YXIgbWludXRlcyA9IGNhcHR1cmVzWzNdICYmIHBhcnNlSW50KGNhcHR1cmVzWzNdKSB8fCAwO1xuICBpZiAoIXZhbGlkYXRlVGltZXpvbmUoaG91cnMsIG1pbnV0ZXMpKSB7XG4gICAgcmV0dXJuIE5hTjtcbiAgfVxuICByZXR1cm4gc2lnbiAqIChob3VycyAqIG1pbGxpc2Vjb25kc0luSG91ciArIG1pbnV0ZXMgKiBtaWxsaXNlY29uZHNJbk1pbnV0ZSk7XG59XG5mdW5jdGlvbiBkYXlPZklTT1dlZWtZZWFyKGlzb1dlZWtZZWFyLCB3ZWVrLCBkYXkpIHtcbiAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgwKTtcbiAgZGF0ZS5zZXRVVENGdWxsWWVhcihpc29XZWVrWWVhciwgMCwgNCk7XG4gIHZhciBmb3VydGhPZkphbnVhcnlEYXkgPSBkYXRlLmdldFVUQ0RheSgpIHx8IDc7XG4gIHZhciBkaWZmID0gKHdlZWsgLSAxKSAqIDcgKyBkYXkgKyAxIC0gZm91cnRoT2ZKYW51YXJ5RGF5O1xuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgKyBkaWZmKTtcbiAgcmV0dXJuIGRhdGU7XG59XG5cbi8vIFZhbGlkYXRpb24gZnVuY3Rpb25zXG5cbi8vIEZlYnJ1YXJ5IGlzIG51bGwgdG8gaGFuZGxlIHRoZSBsZWFwIHllYXIgKHVzaW5nIHx8KVxudmFyIGRheXNJbk1vbnRocyA9IFszMSwgbnVsbCwgMzEsIDMwLCAzMSwgMzAsIDMxLCAzMSwgMzAsIDMxLCAzMCwgMzFdO1xuZnVuY3Rpb24gaXNMZWFwWWVhckluZGV4KHllYXIpIHtcbiAgcmV0dXJuIHllYXIgJSA0MDAgPT09IDAgfHwgeWVhciAlIDQgPT09IDAgJiYgeWVhciAlIDEwMCAhPT0gMDtcbn1cbmZ1bmN0aW9uIHZhbGlkYXRlRGF0ZSh5ZWFyLCBtb250aCwgZGF0ZSkge1xuICByZXR1cm4gbW9udGggPj0gMCAmJiBtb250aCA8PSAxMSAmJiBkYXRlID49IDEgJiYgZGF0ZSA8PSAoZGF5c0luTW9udGhzW21vbnRoXSB8fCAoaXNMZWFwWWVhckluZGV4KHllYXIpID8gMjkgOiAyOCkpO1xufVxuZnVuY3Rpb24gdmFsaWRhdGVEYXlPZlllYXJEYXRlKHllYXIsIGRheU9mWWVhcikge1xuICByZXR1cm4gZGF5T2ZZZWFyID49IDEgJiYgZGF5T2ZZZWFyIDw9IChpc0xlYXBZZWFySW5kZXgoeWVhcikgPyAzNjYgOiAzNjUpO1xufVxuZnVuY3Rpb24gdmFsaWRhdGVXZWVrRGF0ZShfeWVhciwgd2VlaywgZGF5KSB7XG4gIHJldHVybiB3ZWVrID49IDEgJiYgd2VlayA8PSA1MyAmJiBkYXkgPj0gMCAmJiBkYXkgPD0gNjtcbn1cbmZ1bmN0aW9uIHZhbGlkYXRlVGltZShob3VycywgbWludXRlcywgc2Vjb25kcykge1xuICBpZiAoaG91cnMgPT09IDI0KSB7XG4gICAgcmV0dXJuIG1pbnV0ZXMgPT09IDAgJiYgc2Vjb25kcyA9PT0gMDtcbiAgfVxuICByZXR1cm4gc2Vjb25kcyA+PSAwICYmIHNlY29uZHMgPCA2MCAmJiBtaW51dGVzID49IDAgJiYgbWludXRlcyA8IDYwICYmIGhvdXJzID49IDAgJiYgaG91cnMgPCAyNTtcbn1cbmZ1bmN0aW9uIHZhbGlkYXRlVGltZXpvbmUoX2hvdXJzLCBtaW51dGVzKSB7XG4gIHJldHVybiBtaW51dGVzID49IDAgJiYgbWludXRlcyA8PSA1OTtcbn0iLCJpbXBvcnQgYWRkTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9hZGRNaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBzdWJNaWxsaXNlY29uZHNcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gYmUgc3VidHJhY3RlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtaWxsaXNlY29uZHMgc3VidHJhY3RlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdWJ0cmFjdCA3NTAgbWlsbGlzZWNvbmRzIGZyb20gMTAgSnVseSAyMDE0IDEyOjQ1OjMwLjAwMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN1Yk1pbGxpc2Vjb25kcyhuZXcgRGF0ZSgyMDE0LCA2LCAxMCwgMTIsIDQ1LCAzMCwgMCksIDc1MClcbiAqIC8vPT4gVGh1IEp1bCAxMCAyMDE0IDEyOjQ1OjI5LjI1MFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdWJNaWxsaXNlY29uZHMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIHJldHVybiBhZGRNaWxsaXNlY29uZHMoZGlydHlEYXRlLCAtYW1vdW50KTtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7XG5cbiAgLy8gQ2xvbmUgdGhlIGRhdGVcbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgZm9ybWF0LCBwYXJzZUlTTyB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IHsgUHJvamVjdE1vZHVsZSB9IGZyb20gXCIuL1Byb2plY3RNb2R1bGVcIjtcbmltcG9ydCB7IFRhc2tNb2R1bGUgfSBmcm9tIFwiLi9UYXNrTW9kdWxlXCI7XG5pbXBvcnQge1xuICBzYXZlVGFza1RvTG9jYWxTdG9yYWdlLFxuICBkZWxldGVUYXNrRnJvbUxvY2FsU3RvcmFnZSxcbn0gZnJvbSBcIi4vTG9jYWxTdG9yYWdlTW9kdWxlXCI7XG5cbmV4cG9ydCB7IERPTU1vZHVsZSB9O1xuXG4vLyBET00gbW9kdWxlXG5jb25zdCBET01Nb2R1bGUgPSAoZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBjcmVhdGVNYWluRGl2KCkge1xuICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKTtcbiAgICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtYWluRGl2LmNsYXNzTGlzdC5hZGQoXCJtYWluXCIpO1xuICAgIGJvZHkuYXBwZW5kKG1haW5EaXYpO1xuXG4gICAgLy8gTGlnaHQvRGFyayBtb2RlIHN3aXRjaGVyXG4gICAgY29uc3QgaHRtbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJodG1sXCIpO1xuICAgIGh0bWwuY2xhc3NMaXN0LmFkZChcImRhcmstbW9kZVwiKTtcbiAgICBjb25zdCBtb2RlVG9nZ2xlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBtb2RlVG9nZ2xlQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9nZ2xlLW1vZGUtYnV0dG9uXCIpO1xuICAgIG1vZGVUb2dnbGVCdXR0b24uY2xhc3NMaXN0LmFkZChcImRhcmtcIik7XG4gICAgbWFpbkRpdi5hcHBlbmQobW9kZVRvZ2dsZUJ1dHRvbik7XG5cbiAgICBjb25zdCBtb2RlVG9nZ2xlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIG1vZGVUb2dnbGVJY29uLmNsYXNzTGlzdC5hZGQoXCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCIpO1xuICAgIG1vZGVUb2dnbGVJY29uLmlubmVySFRNTCA9IFwiZGFya19tb2RlXCI7XG4gICAgbW9kZVRvZ2dsZUJ1dHRvbi5hcHBlbmQobW9kZVRvZ2dsZUljb24pO1xuXG4gICAgbW9kZVRvZ2dsZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaWYgKG1vZGVUb2dnbGVCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKFwibGlnaHRcIikpIHtcbiAgICAgICAgbW9kZVRvZ2dsZUJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKFwibGlnaHRcIik7XG4gICAgICAgIG1vZGVUb2dnbGVCdXR0b24uY2xhc3NMaXN0LmFkZChcImRhcmtcIik7XG4gICAgICAgIG1vZGVUb2dnbGVJY29uLmlubmVySFRNTCA9IFwiZGFya19tb2RlXCI7XG4gICAgICAgIGh0bWwuY2xhc3NMaXN0LnJlbW92ZShcImxpZ2h0LW1vZGVcIik7XG4gICAgICAgIGh0bWwuY2xhc3NMaXN0LmFkZChcImRhcmstbW9kZVwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1vZGVUb2dnbGVCdXR0b24uY2xhc3NMaXN0LnJlbW92ZShcImRhcmtcIik7XG4gICAgICAgIG1vZGVUb2dnbGVCdXR0b24uY2xhc3NMaXN0LmFkZChcImxpZ2h0XCIpO1xuICAgICAgICBtb2RlVG9nZ2xlSWNvbi5pbm5lckhUTUwgPSBcImxpZ2h0X21vZGVcIjtcbiAgICAgICAgaHRtbC5jbGFzc0xpc3QucmVtb3ZlKFwiZGFyay1tb2RlXCIpO1xuICAgICAgICBodG1sLmNsYXNzTGlzdC5hZGQoXCJsaWdodC1tb2RlXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgY3JlYXRlRGlhbG9ncyA9IChmdW5jdGlvbiAoKSB7XG4gICAgY29uc3QgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJib2R5XCIpO1xuICAgIC8vIG5ld1Byb2plY3REaWFsb2dIYW5kbGVyKCk7XG4gICAgLy8gbmV3VGFza0RpYWxvZ0hhbmRsZXIoKTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRhc2tEZWxldGVEaWFsb2coKSB7XG4gICAgICBjb25zdCB0YXNrRGVsZXRlRGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpYWxvZ1wiKTtcbiAgICAgIHRhc2tEZWxldGVEaWFsb2cuY2xhc3NMaXN0LmFkZChcInRhc2stZGVsZXRlXCIsIFwiaGlkZGVuXCIpO1xuXG4gICAgICBjb25zdCBkZWxldGVDb25maXJtRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgICAgdGFza0RlbGV0ZURpYWxvZy5hcHBlbmQoZGVsZXRlQ29uZmlybUZvcm0pO1xuXG4gICAgICBjb25zdCBkZWxldGVDb25maXJtVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBkZWxldGVDb25maXJtVGV4dC5jbGFzc0xpc3QuYWRkKFwiY29uZmlybS10ZXh0XCIpO1xuICAgICAgZGVsZXRlQ29uZmlybVRleHQudGV4dENvbnRlbnQgPVxuICAgICAgICBcIkFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyB0YXNrP1wiO1xuICAgICAgZGVsZXRlQ29uZmlybUZvcm0uYXBwZW5kKGRlbGV0ZUNvbmZpcm1UZXh0KTtcblxuICAgICAgY29uc3QgZGVsZXRlQ29uZmlybUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBkZWxldGVDb25maXJtQnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG4gICAgICBkZWxldGVDb25maXJtQnV0dG9uLnRleHRDb250ZW50ID0gXCJDb25maXJtXCI7XG4gICAgICBkZWxldGVDb25maXJtRm9ybS5hcHBlbmQoZGVsZXRlQ29uZmlybUJ1dHRvbik7XG5cbiAgICAgIGNvbnN0IGRlbGV0ZUNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBkZWxldGVDYW5jZWxCdXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNsb3NlXCIpO1xuICAgICAgZGVsZXRlQ2FuY2VsQnV0dG9uLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcbiAgICAgIGRlbGV0ZUNvbmZpcm1Gb3JtLmFwcGVuZChkZWxldGVDYW5jZWxCdXR0b24pO1xuXG4gICAgICBib2R5LmFwcGVuZCh0YXNrRGVsZXRlRGlhbG9nKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0RGVsZXRlRGlhbG9nKCkge1xuICAgICAgY29uc3QgcHJvamVjdERlbGV0ZURpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaWFsb2dcIik7XG4gICAgICBwcm9qZWN0RGVsZXRlRGlhbG9nLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWRlbGV0ZVwiLCBcImhpZGRlblwiKTtcblxuICAgICAgY29uc3QgZGVsZXRlQ29uZmlybUZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICAgIHByb2plY3REZWxldGVEaWFsb2cuYXBwZW5kKGRlbGV0ZUNvbmZpcm1Gb3JtKTtcblxuICAgICAgY29uc3QgZGVsZXRlQ29uZmlybVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZGVsZXRlQ29uZmlybVRleHQuY2xhc3NMaXN0LmFkZChcImNvbmZpcm0tdGV4dFwiKTtcbiAgICAgIGRlbGV0ZUNvbmZpcm1UZXh0LnRleHRDb250ZW50ID1cbiAgICAgICAgXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoZSBwcm9qZWN0PyBBbGwgdGFza3MgdGhhdCBiZWxvbmcgdG8gdGhpcyBwcm9qZWN0IHdpbGwgYmUgZGVsZXRlZCB0b28uXCI7XG4gICAgICBkZWxldGVDb25maXJtRm9ybS5hcHBlbmQoZGVsZXRlQ29uZmlybVRleHQpO1xuXG4gICAgICBjb25zdCBkZWxldGVDb25maXJtQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIGRlbGV0ZUNvbmZpcm1CdXR0b24uc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInN1Ym1pdFwiKTtcbiAgICAgIGRlbGV0ZUNvbmZpcm1CdXR0b24udGV4dENvbnRlbnQgPSBcIkNvbmZpcm1cIjtcbiAgICAgIGRlbGV0ZUNvbmZpcm1Gb3JtLmFwcGVuZChkZWxldGVDb25maXJtQnV0dG9uKTtcblxuICAgICAgY29uc3QgZGVsZXRlQ2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIGRlbGV0ZUNhbmNlbEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2xvc2VcIik7XG4gICAgICBkZWxldGVDYW5jZWxCdXR0b24udGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICAgICAgZGVsZXRlQ29uZmlybUZvcm0uYXBwZW5kKGRlbGV0ZUNhbmNlbEJ1dHRvbik7XG5cbiAgICAgIGJvZHkuYXBwZW5kKHByb2plY3REZWxldGVEaWFsb2cpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5ld1Byb2plY3REaWFsb2dIYW5kbGVyKCkge1xuICAgICAgY29uc3QgbmV3UHJvamVjdERpYWxvZyA9IGNyZWF0ZVByb2plY3REaWFsb2coKTtcbiAgICAgIGNvbnN0IG5ld1Byb2plY3REaWFsb2dGb3JtID0gY3JlYXRlUHJvamVjdERpYWxvZ0Zvcm0oKTtcblxuICAgICAgZnVuY3Rpb24gY3JlYXRlUHJvamVjdERpYWxvZygpIHtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdERpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaWFsb2dcIik7XG4gICAgICAgIG5ld1Byb2plY3REaWFsb2cuY2xhc3NMaXN0LmFkZChcIm5ldy1wcm9qZWN0XCIsIFwiaGlkZGVuXCIpO1xuICAgICAgICBib2R5LmFwcGVuZChuZXdQcm9qZWN0RGlhbG9nKTtcbiAgICAgICAgcmV0dXJuIG5ld1Byb2plY3REaWFsb2c7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3REaWFsb2dGb3JtKCkge1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0RGlhbG9nRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgICAgICBuZXdQcm9qZWN0RGlhbG9nLmFwcGVuZChuZXdQcm9qZWN0RGlhbG9nRm9ybSk7XG4gICAgICAgIG5ld1Byb2plY3REaWFsb2dGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIFwiZGlhbG9nLm5ldy1wcm9qZWN0ID4gZm9ybSBpbnB1dCNwcm9qZWN0LW5hbWVcIixcbiAgICAgICAgICApO1xuICAgICAgICAgIGNvbnN0IHByb2plY3RDb2xvciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBcImRpYWxvZy5uZXctcHJvamVjdCA+IGZvcm0gaW5wdXQjcHJvamVjdC1jb2xvclwiLFxuICAgICAgICAgICk7XG4gICAgICAgICAgUHJvamVjdE1vZHVsZS5jcmVhdGVQcm9qZWN0KHByb2plY3ROYW1lLnZhbHVlLCBwcm9qZWN0Q29sb3IudmFsdWUpO1xuICAgICAgICAgIERPTU1vZHVsZS5jcmVhdGVMZWZ0RGl2LmNyZWF0ZVByb2plY3RzKFxuICAgICAgICAgICAgUHJvamVjdE1vZHVsZS5nZXRQcm9qZWN0T2JqZWN0cygpLFxuICAgICAgICAgICk7XG4gICAgICAgICAgRE9NTW9kdWxlLmNyZWF0ZURpYWxvZ3MubmV3VGFza0RpYWxvZ0hhbmRsZXIoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZGlhbG9nTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGRpYWxvZ05hbWUuY2xhc3NMaXN0LmFkZChcInByb2plY3QtZGlhbG9nLW5hbWVcIik7XG4gICAgICAgIGRpYWxvZ05hbWUudGV4dENvbnRlbnQgPSBcIk5ldyBQcm9qZWN0XCI7XG4gICAgICAgIG5ld1Byb2plY3REaWFsb2dGb3JtLmFwcGVuZChkaWFsb2dOYW1lKTtcblxuICAgICAgICBjb25zdCBpbnB1dENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGlucHV0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJpbnB1dC1jb250YWluZXJcIik7XG4gICAgICAgIG5ld1Byb2plY3REaWFsb2dGb3JtLmFwcGVuZChpbnB1dENvbnRhaW5lcik7XG5cbiAgICAgICAgY29uc3QgbmFtZUZpZWxkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbmFtZUZpZWxkRGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LW5hbWUtZmllbGQtZGl2XCIpO1xuICAgICAgICBpbnB1dENvbnRhaW5lci5hcHBlbmQobmFtZUZpZWxkRGl2KTtcblxuICAgICAgICBjb25zdCBuYW1lRmllbGRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgbmFtZUZpZWxkTGFiZWwudGV4dENvbnRlbnQgPSBcIk5hbWUqXCI7XG4gICAgICAgIG5hbWVGaWVsZExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInByb2plY3QtbmFtZVwiKTtcbiAgICAgICAgbmFtZUZpZWxkRGl2LmFwcGVuZChuYW1lRmllbGRMYWJlbCk7XG5cbiAgICAgICAgY29uc3QgbmFtZUZpZWxkSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIG5hbWVGaWVsZElucHV0LnRleHRDb250ZW50ID0gXCJOYW1lXCI7XG4gICAgICAgIG5hbWVGaWVsZElucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgICAgICBuYW1lRmllbGRJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3QtbmFtZVwiKTtcbiAgICAgICAgbmFtZUZpZWxkSW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgXCJBd2Vzb21lIHByb2plY3QuLi5cIik7XG4gICAgICAgIG5hbWVGaWVsZElucHV0LnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwicmVxdWlyZWRcIik7XG4gICAgICAgIG5hbWVGaWVsZERpdi5hcHBlbmQobmFtZUZpZWxkSW5wdXQpO1xuXG4gICAgICAgIGNvbnN0IGNvbG9yRmllbGREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb2xvckZpZWxkRGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWNvbG9yLWZpZWxkLWRpdlwiKTtcbiAgICAgICAgaW5wdXRDb250YWluZXIuYXBwZW5kKGNvbG9yRmllbGREaXYpO1xuXG4gICAgICAgIGNvbnN0IGNvbG9yRmllbGRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgY29sb3JGaWVsZExhYmVsLnRleHRDb250ZW50ID0gXCJDb2xvclwiO1xuICAgICAgICBjb2xvckZpZWxkTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwicHJvamVjdC1jb2xvclwiKTtcbiAgICAgICAgY29sb3JGaWVsZERpdi5hcHBlbmQoY29sb3JGaWVsZExhYmVsKTtcblxuICAgICAgICBjb25zdCBjb2xvckZpZWxkSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgICAgIGNvbG9yRmllbGRJbnB1dC50ZXh0Q29udGVudCA9IFwiQ29sb3JcIjtcbiAgICAgICAgY29sb3JGaWVsZElucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJjb2xvclwiKTtcbiAgICAgICAgY29sb3JGaWVsZElucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdC1jb2xvclwiKTtcbiAgICAgICAgY29sb3JGaWVsZERpdi5hcHBlbmQoY29sb3JGaWVsZElucHV0KTtcblxuICAgICAgICBjb25zdCBzdWJtaXRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgc3VibWl0UHJvamVjdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICAgICAgICBzdWJtaXRQcm9qZWN0QnV0dG9uLnRleHRDb250ZW50ID0gXCJTYXZlXCI7XG4gICAgICAgIG5ld1Byb2plY3REaWFsb2dGb3JtLmFwcGVuZChzdWJtaXRQcm9qZWN0QnV0dG9uKTtcblxuICAgICAgICBjb25zdCBjbG9zZVByb2plY3REaWFsb2dEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjbG9zZVByb2plY3REaWFsb2dEaXYuY2xhc3NMaXN0LmFkZChcImNsb3NlLXByb2plY3QtZGlhbG9nXCIpO1xuICAgICAgICBuZXdQcm9qZWN0RGlhbG9nRm9ybS5hcHBlbmQoY2xvc2VQcm9qZWN0RGlhbG9nRGl2KTtcblxuICAgICAgICBjb25zdCBjbG9zZVByb2plY3REaWFsb2dTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIGNsb3NlUHJvamVjdERpYWxvZ1NwYW4uY2xhc3NMaXN0LmFkZChcIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIik7XG4gICAgICAgIGNsb3NlUHJvamVjdERpYWxvZ1NwYW4udGV4dENvbnRlbnQgPSBcImNsb3NlXCI7XG4gICAgICAgIGNsb3NlUHJvamVjdERpYWxvZ0Rpdi5hcHBlbmQoY2xvc2VQcm9qZWN0RGlhbG9nU3Bhbik7XG5cbiAgICAgICAgLy8gQWRkIGNsb3NlIGFuaW1hdGlvbiBvbiBTYXZlIGFuZCBDbG9zZVxuICAgICAgICBoYW5kbGVDbG9zZUFuaW1hdGlvbihcbiAgICAgICAgICBuZXdQcm9qZWN0RGlhbG9nRm9ybSxcbiAgICAgICAgICBuZXdQcm9qZWN0RGlhbG9nLFxuICAgICAgICAgIFwic3VibWl0XCIsXG4gICAgICAgICAgbmV3UHJvamVjdERpYWxvZ0Zvcm0sXG4gICAgICAgICk7XG4gICAgICAgIGhhbmRsZUNsb3NlQW5pbWF0aW9uKFxuICAgICAgICAgIGNsb3NlUHJvamVjdERpYWxvZ1NwYW4sXG4gICAgICAgICAgbmV3UHJvamVjdERpYWxvZyxcbiAgICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgICAgbmV3UHJvamVjdERpYWxvZ0Zvcm0sXG4gICAgICAgICk7XG5cbiAgICAgICAgcmV0dXJuIG5ld1Byb2plY3REaWFsb2dGb3JtO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIG5ld1Rhc2tEaWFsb2dIYW5kbGVyKCkge1xuICAgICAgY29uc3QgZXhpc3RpbmdUYXNrRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uZXctdGFza1wiKTtcbiAgICAgIGlmIChleGlzdGluZ1Rhc2tEaWFsb2cpIHtcbiAgICAgICAgZXhpc3RpbmdUYXNrRGlhbG9nLnJlbW92ZSgpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBuZXdUYXNrRGlhbG9nID0gY3JlYXRlVGFza0RpYWxvZygpO1xuICAgICAgY29uc3QgbmV3VGFza0RpYWxvZ0Zvcm0gPSBjcmVhdGVUYXNrRGlhbG9nRm9ybSgpO1xuXG4gICAgICBmdW5jdGlvbiBjcmVhdGVUYXNrRGlhbG9nKCkge1xuICAgICAgICBjb25zdCBuZXdUYXNrRGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpYWxvZ1wiKTtcbiAgICAgICAgbmV3VGFza0RpYWxvZy5jbGFzc0xpc3QuYWRkKFwibmV3LXRhc2tcIiwgXCJoaWRkZW5cIik7XG4gICAgICAgIGJvZHkuYXBwZW5kKG5ld1Rhc2tEaWFsb2cpO1xuICAgICAgICByZXR1cm4gbmV3VGFza0RpYWxvZztcbiAgICAgIH1cblxuICAgICAgZnVuY3Rpb24gY3JlYXRlVGFza0RpYWxvZ0Zvcm0oKSB7XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nVGFza0RpYWxvZ0Zvcm0gPVxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmV3LXRhc2sgPiBmb3JtXCIpO1xuICAgICAgICBpZiAoZXhpc3RpbmdUYXNrRGlhbG9nRm9ybSkge1xuICAgICAgICAgIGV4aXN0aW5nVGFza0RpYWxvZ0Zvcm0ucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbmV3VGFza0RpYWxvZ0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbiAgICAgICAgbmV3VGFza0RpYWxvZy5hcHBlbmQobmV3VGFza0RpYWxvZ0Zvcm0pO1xuICAgICAgICBuZXdUYXNrRGlhbG9nRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsICgpID0+IHtcbiAgICAgICAgICBjb25zdCB0YXNrUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBcImRpYWxvZy5uZXctdGFzayA+IGZvcm0gI3Rhc2stcHJvamVjdFwiLFxuICAgICAgICAgICk7XG4gICAgICAgICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIFwiZGlhbG9nLm5ldy10YXNrID4gZm9ybSAjdGFzay10aXRsZVwiLFxuICAgICAgICAgICk7XG4gICAgICAgICAgY29uc3QgdGFza05vdGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIFwiZGlhbG9nLm5ldy10YXNrID4gZm9ybSAjdGFzay1ub3Rlc1wiLFxuICAgICAgICAgICk7XG4gICAgICAgICAgLy8gY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGlhbG9nLm5ldy10YXNrID4gZm9ybSAjdGFzay1wcmlvcml0eScpO1xuICAgICAgICAgIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIFwiZGlhbG9nLm5ldy10YXNrID4gZm9ybSAjdGFzay1kYXRlXCIsXG4gICAgICAgICAgKTtcbiAgICAgICAgICBUYXNrTW9kdWxlLmNyZWF0ZVRhc2soXG4gICAgICAgICAgICB0YXNrUHJvamVjdC52YWx1ZSxcbiAgICAgICAgICAgIHRhc2tUaXRsZS52YWx1ZSxcbiAgICAgICAgICAgIHRhc2tOb3Rlcy52YWx1ZSxcbiAgICAgICAgICAgIHRhc2tEYXRlLnZhbHVlLFxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBET01Nb2R1bGUuY3JlYXRlUmlnaHREaXYuY3JlYXRlVGFza3MoXG4gICAgICAgICAgICBUYXNrTW9kdWxlLmdldFByb2plY3RUYXNrcyhcbiAgICAgICAgICAgICAgVGFza01vZHVsZS5nZXRBY3RpdmVQcm9qZWN0KCksXG4gICAgICAgICAgICAgIFRhc2tNb2R1bGUuZ2V0VGFza3NGcm9tQWN0aXZlVmlldygpLFxuICAgICAgICAgICAgKSxcbiAgICAgICAgICApO1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBkaWFsb2dOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGlhbG9nTmFtZS5jbGFzc0xpc3QuYWRkKFwidGFzay1kaWFsb2ctbmFtZVwiKTtcbiAgICAgICAgZGlhbG9nTmFtZS50ZXh0Q29udGVudCA9IFwiTmV3IFRhc2tcIjtcbiAgICAgICAgbmV3VGFza0RpYWxvZ0Zvcm0uYXBwZW5kKGRpYWxvZ05hbWUpO1xuXG4gICAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICAgICAgY29uc3QgZm9ybWF0dGVEYXRlID0gdG9kYXkudG9JU09TdHJpbmcoKS5zcGxpdChcIlRcIilbMF07XG5cbiAgICAgICAgY29uc3QgbmV3VGFza0RpYWxvZ0ZpZWxkc1RlbXBsYXRlID0gW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGVsZW1lbnRfdHlwZTogXCJzZWxlY3RcIixcbiAgICAgICAgICAgIGRpdl9jbGFzczogXCJ0YXNrLXByb2plY3QtZmllbGQtZGl2XCIsXG4gICAgICAgICAgICBlbGVtZW50X2lkOiBcInRhc2stcHJvamVjdFwiLFxuICAgICAgICAgICAgaW5wdXRfdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICBsYWJlbDogXCJQcm9qZWN0XCIsXG4gICAgICAgICAgICB0ZXh0Q29udGVudDogXCJQcm9qZWN0XCIsXG4gICAgICAgICAgICBzZWxlY3Rfb3B0aW9uczogUHJvamVjdE1vZHVsZS5nZXRQcm9qZWN0VmFsdWVzKCksXG4gICAgICAgICAgICBjdXJzb3Jfc3R5bGU6IFwicG9pbnRlclwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgZWxlbWVudF90eXBlOiBcImlucHV0XCIsXG4gICAgICAgICAgICBkaXZfY2xhc3M6IFwidGFzay10aXRsZS1maWVsZC1kaXZcIixcbiAgICAgICAgICAgIGVsZW1lbnRfaWQ6IFwidGFzay10aXRsZVwiLFxuICAgICAgICAgICAgaW5wdXRfdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICBsYWJlbDogXCJUaXRsZSAqXCIsXG4gICAgICAgICAgICB0ZXh0Q29udGVudDogXCJUaXRsZVwiLFxuICAgICAgICAgICAgdGV4dF9wbGFjZWhvbGRlcjogXCJSZWFkIGEgYm9va1wiLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGVsZW1lbnRfdHlwZTogXCJ0ZXh0YXJlYVwiLFxuICAgICAgICAgICAgZGl2X2NsYXNzOiBcInRhc2stbm90ZXMtZmllbGQtZGl2XCIsXG4gICAgICAgICAgICBlbGVtZW50X2lkOiBcInRhc2stbm90ZXNcIixcbiAgICAgICAgICAgIGlucHV0X3R5cGU6IFwiXCIsXG4gICAgICAgICAgICBsYWJlbDogXCJOb3Rlc1wiLFxuICAgICAgICAgICAgdGV4dENvbnRlbnQ6IFwiXCIsXG4gICAgICAgICAgICB0ZXh0X3BsYWNlaG9sZGVyOiBcIkF0IGxlYXN0IGEgcGFnZVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgLy8ge1xuICAgICAgICAgIC8vICAgICBlbGVtZW50X3R5cGU6ICdzZWxlY3QnLFxuICAgICAgICAgIC8vICAgICBkaXZfY2xhc3M6ICd0YXNrLXByaW9yaXR5LWZpZWxkLWRpdicsXG4gICAgICAgICAgLy8gICAgIGVsZW1lbnRfaWQ6ICd0YXNrLXByaW9yaXR5JyxcbiAgICAgICAgICAvLyAgICAgaW5wdXRfdHlwZTogJycsXG4gICAgICAgICAgLy8gICAgIGxhYmVsOiAnUHJpb3JpdHknLFxuICAgICAgICAgIC8vICAgICB0ZXh0Q29udGVudDogJ1ByaW9yaXR5JyxcbiAgICAgICAgICAvLyAgICAgc2VsZWN0X29wdGlvbnM6IFsnSGlnaCcsICdOb3JtYWwnLCAnTG93J10sXG4gICAgICAgICAgLy8gICAgIHNlbGVjdF9kZWZhdWx0OiAnTm9ybWFsJyxcbiAgICAgICAgICAvLyAgICAgY3Vyc29yX3N0eWxlOiAncG9pbnRlcicsXG4gICAgICAgICAgLy8gfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBlbGVtZW50X3R5cGU6IFwiaW5wdXRcIixcbiAgICAgICAgICAgIGRpdl9jbGFzczogXCJ0YXNrLWRhdGUtZmllbGQtZGl2XCIsXG4gICAgICAgICAgICBlbGVtZW50X2lkOiBcInRhc2stZGF0ZVwiLFxuICAgICAgICAgICAgaW5wdXRfdHlwZTogXCJkYXRlXCIsXG4gICAgICAgICAgICBsYWJlbDogXCJEYXRlICpcIixcbiAgICAgICAgICAgIHRleHRDb250ZW50OiBcIkRhdGVcIixcbiAgICAgICAgICAgIHJlcXVpcmVkOiBcInJlcXVpcmVkXCIsXG4gICAgICAgICAgICB2YWx1ZTogZm9ybWF0dGVEYXRlLFxuICAgICAgICAgIH0sXG4gICAgICAgIF07XG5cbiAgICAgICAgbmV3VGFza0RpYWxvZ0ZpZWxkc1RlbXBsYXRlLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICBjb25zdCBmaWVsZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgZmllbGREaXYuY2xhc3NMaXN0LmFkZChlbGVtZW50LmRpdl9jbGFzcyk7XG4gICAgICAgICAgbmV3VGFza0RpYWxvZ0Zvcm0uYXBwZW5kKGZpZWxkRGl2KTtcblxuICAgICAgICAgIGNvbnN0IGZpZWxkTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgICAgZmllbGRMYWJlbC50ZXh0Q29udGVudCA9IGVsZW1lbnQubGFiZWw7XG4gICAgICAgICAgZmllbGRMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgZWxlbWVudC5lbGVtZW50X2lkKTtcbiAgICAgICAgICBmaWVsZERpdi5hcHBlbmQoZmllbGRMYWJlbCk7XG5cbiAgICAgICAgICBjb25zdCBmaWVsZElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50LmVsZW1lbnRfdHlwZSk7XG4gICAgICAgICAgZmllbGRJbnB1dC50ZXh0Q29udGVudCA9IGVsZW1lbnQudGV4dENvbnRlbnQ7XG4gICAgICAgICAgZmllbGRJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIGVsZW1lbnQuaW5wdXRfdHlwZSk7XG4gICAgICAgICAgZmllbGRJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBlbGVtZW50LmVsZW1lbnRfaWQpO1xuICAgICAgICAgIGZpZWxkSW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgZWxlbWVudC50ZXh0X3BsYWNlaG9sZGVyKTtcbiAgICAgICAgICBmaWVsZElucHV0LnNldEF0dHJpYnV0ZShlbGVtZW50LnJlcXVpcmVkLCBlbGVtZW50LnJlcXVpcmVkKTtcbiAgICAgICAgICBpZiAoZWxlbWVudC52YWx1ZSkge1xuICAgICAgICAgICAgZmllbGRJbnB1dC52YWx1ZSA9IGVsZW1lbnQudmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZpZWxkSW5wdXQuc3R5bGUuY3Vyc29yID0gZWxlbWVudC5jdXJzb3Jfc3R5bGU7XG4gICAgICAgICAgZmllbGREaXYuYXBwZW5kKGZpZWxkSW5wdXQpO1xuXG4gICAgICAgICAgaWYgKGVsZW1lbnQuZWxlbWVudF90eXBlID09PSBcInNlbGVjdFwiKSB7XG4gICAgICAgICAgICBlbGVtZW50LnNlbGVjdF9vcHRpb25zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGl0ZW0pO1xuICAgICAgICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBpdGVtO1xuICAgICAgICAgICAgICBmaWVsZElucHV0LmFwcGVuZChvcHRpb24pO1xuICAgICAgICAgICAgICBpZiAoaXRlbSA9PT0gZWxlbWVudC5zZWxlY3RfZGVmYXVsdCkge1xuICAgICAgICAgICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCBcIlwiKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBzdWJtaXRUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgc3VibWl0VGFza0J1dHRvbi5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwic3VibWl0XCIpO1xuICAgICAgICBzdWJtaXRUYXNrQnV0dG9uLnRleHRDb250ZW50ID0gXCJTYXZlXCI7XG4gICAgICAgIG5ld1Rhc2tEaWFsb2dGb3JtLmFwcGVuZChzdWJtaXRUYXNrQnV0dG9uKTtcblxuICAgICAgICBjb25zdCBjbG9zZVRhc2tEaWFsb2dEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjbG9zZVRhc2tEaWFsb2dEaXYuY2xhc3NMaXN0LmFkZChcImNsb3NlLXRhc2stZGlhbG9nXCIpO1xuICAgICAgICBuZXdUYXNrRGlhbG9nRm9ybS5hcHBlbmQoY2xvc2VUYXNrRGlhbG9nRGl2KTtcblxuICAgICAgICBjb25zdCBjbG9zZVRhc2tEaWFsb2dTcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgICAgIGNsb3NlVGFza0RpYWxvZ1NwYW4uY2xhc3NMaXN0LmFkZChcIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIik7XG4gICAgICAgIGNsb3NlVGFza0RpYWxvZ1NwYW4udGV4dENvbnRlbnQgPSBcImNsb3NlXCI7XG4gICAgICAgIGNsb3NlVGFza0RpYWxvZ0Rpdi5hcHBlbmQoY2xvc2VUYXNrRGlhbG9nU3Bhbik7XG5cbiAgICAgICAgLy8gQWRkIGNsb3NlIGFuaW1hdGlvbiBvbiBTYXZlIGFuZCBDbG9zZVxuICAgICAgICBoYW5kbGVDbG9zZUFuaW1hdGlvbihcbiAgICAgICAgICBuZXdUYXNrRGlhbG9nRm9ybSxcbiAgICAgICAgICBuZXdUYXNrRGlhbG9nLFxuICAgICAgICAgIFwic3VibWl0XCIsXG4gICAgICAgICAgbmV3VGFza0RpYWxvZ0Zvcm0sXG4gICAgICAgICk7XG4gICAgICAgIGhhbmRsZUNsb3NlQW5pbWF0aW9uKFxuICAgICAgICAgIGNsb3NlVGFza0RpYWxvZ1NwYW4sXG4gICAgICAgICAgbmV3VGFza0RpYWxvZyxcbiAgICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgICAgbmV3VGFza0RpYWxvZ0Zvcm0sXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZWRpdFRhc2tEaWFsb2dIYW5kbGVyKHRhc2tJZCkge1xuICAgICAgY29uc3QgZXhpc3RpbmdUYXNrRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0LXRhc2tcIik7XG4gICAgICBpZiAoZXhpc3RpbmdUYXNrRGlhbG9nKSB7XG4gICAgICAgIGV4aXN0aW5nVGFza0RpYWxvZy5yZW1vdmUoKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgZWRpdFRhc2tEaWFsb2cgPSBjcmVhdGVFZGl0VGFza0RpYWxvZygpO1xuICAgICAgY29uc3QgZWRpdFRhc2tEaWFsb2dGb3JtID0gY3JlYXRlRWRpdFRhc2tEaWFsb2dGb3JtKCk7XG5cbiAgICAgIGZ1bmN0aW9uIGNyZWF0ZUVkaXRUYXNrRGlhbG9nKCkge1xuICAgICAgICBjb25zdCBuZXdUYXNrRGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpYWxvZ1wiKTtcbiAgICAgICAgbmV3VGFza0RpYWxvZy5jbGFzc0xpc3QuYWRkKFwiZWRpdC10YXNrXCIsIFwiaGlkZGVuXCIpO1xuICAgICAgICBib2R5LmFwcGVuZChuZXdUYXNrRGlhbG9nKTtcbiAgICAgICAgcmV0dXJuIG5ld1Rhc2tEaWFsb2c7XG4gICAgICB9XG5cbiAgICAgIGZ1bmN0aW9uIGNyZWF0ZUVkaXRUYXNrRGlhbG9nRm9ybSgpIHtcbiAgICAgICAgY29uc3QgZXhpc3RpbmdUYXNrRGlhbG9nRm9ybSA9XG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0LXRhc2sgPiBmb3JtXCIpO1xuICAgICAgICBpZiAoZXhpc3RpbmdUYXNrRGlhbG9nRm9ybSkge1xuICAgICAgICAgIGV4aXN0aW5nVGFza0RpYWxvZ0Zvcm0ucmVtb3ZlKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZWRpdFRhc2tEaWFsb2dGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgICAgIGVkaXRUYXNrRGlhbG9nLmFwcGVuZChlZGl0VGFza0RpYWxvZ0Zvcm0pO1xuXG4gICAgICAgIGVkaXRUYXNrRGlhbG9nRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsICgpID0+IHtcbiAgICAgICAgICBjb25zdCB0YXNrUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBcImRpYWxvZy5lZGl0LXRhc2sgPiBmb3JtICN0YXNrLXByb2plY3RcIixcbiAgICAgICAgICApO1xuICAgICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICBcImRpYWxvZy5lZGl0LXRhc2sgPiBmb3JtICN0YXNrLXRpdGxlXCIsXG4gICAgICAgICAgKTtcbiAgICAgICAgICBjb25zdCB0YXNrTm90ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgXCJkaWFsb2cuZWRpdC10YXNrID4gZm9ybSAjdGFzay1ub3Rlc1wiLFxuICAgICAgICAgICk7XG4gICAgICAgICAgLy8gY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGlhbG9nLm5ldy10YXNrID4gZm9ybSAjdGFzay1wcmlvcml0eScpO1xuICAgICAgICAgIGNvbnN0IHRhc2tEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIFwiZGlhbG9nLmVkaXQtdGFzayA+IGZvcm0gI3Rhc2stZGF0ZVwiLFxuICAgICAgICAgICk7XG4gICAgICAgICAgVGFza01vZHVsZS51cGRhdGVUYXNrKFxuICAgICAgICAgICAgdGFza1Byb2plY3QudmFsdWUsXG4gICAgICAgICAgICB0YXNrVGl0bGUudmFsdWUsXG4gICAgICAgICAgICB0YXNrTm90ZXMudmFsdWUsXG4gICAgICAgICAgICB0YXNrRGF0ZS52YWx1ZSxcbiAgICAgICAgICAgIHRhc2tJZCxcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgRE9NTW9kdWxlLmNyZWF0ZVJpZ2h0RGl2LmNyZWF0ZVRhc2tzKFxuICAgICAgICAgICAgVGFza01vZHVsZS5nZXRQcm9qZWN0VGFza3MoXG4gICAgICAgICAgICAgIFRhc2tNb2R1bGUuZ2V0QWN0aXZlUHJvamVjdCgpLFxuICAgICAgICAgICAgICBUYXNrTW9kdWxlLmdldFRhc2tzRnJvbUFjdGl2ZVZpZXcoKSxcbiAgICAgICAgICAgICksXG4gICAgICAgICAgKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZGlhbG9nTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGRpYWxvZ05hbWUuY2xhc3NMaXN0LmFkZChcInRhc2stZGlhbG9nLW5hbWVcIik7XG4gICAgICAgIGRpYWxvZ05hbWUudGV4dENvbnRlbnQgPSBcIkVkaXQgVGFza1wiO1xuICAgICAgICBlZGl0VGFza0RpYWxvZ0Zvcm0uYXBwZW5kKGRpYWxvZ05hbWUpO1xuXG4gICAgICAgIGNvbnN0IHRhc2tPYmplY3QgPSBUYXNrTW9kdWxlLmZpbmRPYmplY3RCeUlkKHRhc2tJZCk7XG5cbiAgICAgICAgY29uc3QgbmV3VGFza0RpYWxvZ0ZpZWxkc1RlbXBsYXRlID0gW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGVsZW1lbnRfdHlwZTogXCJzZWxlY3RcIixcbiAgICAgICAgICAgIGRpdl9jbGFzczogXCJ0YXNrLXByb2plY3QtZmllbGQtZGl2XCIsXG4gICAgICAgICAgICBlbGVtZW50X2lkOiBcInRhc2stcHJvamVjdFwiLFxuICAgICAgICAgICAgaW5wdXRfdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICBsYWJlbDogXCJQcm9qZWN0XCIsXG4gICAgICAgICAgICB0ZXh0Q29udGVudDogXCJQcm9qZWN0XCIsXG4gICAgICAgICAgICBzZWxlY3Rfb3B0aW9uczogUHJvamVjdE1vZHVsZS5nZXRQcm9qZWN0VmFsdWVzKCksXG4gICAgICAgICAgICBjdXJzb3Jfc3R5bGU6IFwicG9pbnRlclwiLFxuICAgICAgICAgICAgdmFsdWU6IFwiTWF0aFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgZWxlbWVudF90eXBlOiBcImlucHV0XCIsXG4gICAgICAgICAgICBkaXZfY2xhc3M6IFwidGFzay10aXRsZS1maWVsZC1kaXZcIixcbiAgICAgICAgICAgIGVsZW1lbnRfaWQ6IFwidGFzay10aXRsZVwiLFxuICAgICAgICAgICAgaW5wdXRfdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICBsYWJlbDogXCJUaXRsZSAqXCIsXG4gICAgICAgICAgICB0ZXh0Q29udGVudDogXCJUaXRsZVwiLFxuICAgICAgICAgICAgdGV4dF9wbGFjZWhvbGRlcjogXCJSZWFkIGEgYm9va1wiLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICAgIHZhbHVlOiB0YXNrT2JqZWN0LnRpdGxlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgZWxlbWVudF90eXBlOiBcInRleHRhcmVhXCIsXG4gICAgICAgICAgICBkaXZfY2xhc3M6IFwidGFzay1ub3Rlcy1maWVsZC1kaXZcIixcbiAgICAgICAgICAgIGVsZW1lbnRfaWQ6IFwidGFzay1ub3Rlc1wiLFxuICAgICAgICAgICAgaW5wdXRfdHlwZTogXCJcIixcbiAgICAgICAgICAgIGxhYmVsOiBcIk5vdGVzXCIsXG4gICAgICAgICAgICB0ZXh0Q29udGVudDogXCJcIixcbiAgICAgICAgICAgIHRleHRfcGxhY2Vob2xkZXI6IFwiQXQgbGVhc3QgYSBwYWdlXCIsXG4gICAgICAgICAgICB2YWx1ZTogdGFza09iamVjdC5ub3RlcyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGVsZW1lbnRfdHlwZTogXCJpbnB1dFwiLFxuICAgICAgICAgICAgZGl2X2NsYXNzOiBcInRhc2stZGF0ZS1maWVsZC1kaXZcIixcbiAgICAgICAgICAgIGVsZW1lbnRfaWQ6IFwidGFzay1kYXRlXCIsXG4gICAgICAgICAgICBpbnB1dF90eXBlOiBcImRhdGVcIixcbiAgICAgICAgICAgIGxhYmVsOiBcIkRhdGUgKlwiLFxuICAgICAgICAgICAgdGV4dENvbnRlbnQ6IFwiRGF0ZVwiLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IFwicmVxdWlyZWRcIixcbiAgICAgICAgICAgIHZhbHVlOiB0YXNrT2JqZWN0LmRhdGUsXG4gICAgICAgICAgfSxcbiAgICAgICAgXTtcblxuICAgICAgICBuZXdUYXNrRGlhbG9nRmllbGRzVGVtcGxhdGUuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGZpZWxkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICBmaWVsZERpdi5jbGFzc0xpc3QuYWRkKGVsZW1lbnQuZGl2X2NsYXNzKTtcbiAgICAgICAgICBlZGl0VGFza0RpYWxvZ0Zvcm0uYXBwZW5kKGZpZWxkRGl2KTtcblxuICAgICAgICAgIGNvbnN0IGZpZWxkTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgICAgZmllbGRMYWJlbC50ZXh0Q29udGVudCA9IGVsZW1lbnQubGFiZWw7XG4gICAgICAgICAgZmllbGRMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgZWxlbWVudC5lbGVtZW50X2lkKTtcbiAgICAgICAgICBmaWVsZERpdi5hcHBlbmQoZmllbGRMYWJlbCk7XG5cbiAgICAgICAgICBjb25zdCBmaWVsZElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50LmVsZW1lbnRfdHlwZSk7XG4gICAgICAgICAgZmllbGRJbnB1dC50ZXh0Q29udGVudCA9IGVsZW1lbnQudGV4dENvbnRlbnQ7XG4gICAgICAgICAgZmllbGRJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIGVsZW1lbnQuaW5wdXRfdHlwZSk7XG4gICAgICAgICAgZmllbGRJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBlbGVtZW50LmVsZW1lbnRfaWQpO1xuICAgICAgICAgIGZpZWxkSW5wdXQuc2V0QXR0cmlidXRlKFwicGxhY2Vob2xkZXJcIiwgZWxlbWVudC50ZXh0X3BsYWNlaG9sZGVyKTtcbiAgICAgICAgICBmaWVsZElucHV0LnNldEF0dHJpYnV0ZShlbGVtZW50LnJlcXVpcmVkLCBlbGVtZW50LnJlcXVpcmVkKTtcbiAgICAgICAgICBpZiAoZWxlbWVudC52YWx1ZSkge1xuICAgICAgICAgICAgZmllbGRJbnB1dC52YWx1ZSA9IGVsZW1lbnQudmFsdWU7XG4gICAgICAgICAgfVxuICAgICAgICAgIGZpZWxkSW5wdXQuc3R5bGUuY3Vyc29yID0gZWxlbWVudC5jdXJzb3Jfc3R5bGU7XG4gICAgICAgICAgZmllbGREaXYuYXBwZW5kKGZpZWxkSW5wdXQpO1xuXG4gICAgICAgICAgaWYgKGVsZW1lbnQuZWxlbWVudF90eXBlID09PSBcInNlbGVjdFwiKSB7XG4gICAgICAgICAgICBlbGVtZW50LnNlbGVjdF9vcHRpb25zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgICAgb3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIGl0ZW0pO1xuICAgICAgICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBpdGVtO1xuICAgICAgICAgICAgICBmaWVsZElucHV0LmFwcGVuZChvcHRpb24pO1xuICAgICAgICAgICAgICBpZiAoaXRlbSA9PT0gdGFza09iamVjdC5wcm9qZWN0TmFtZSkge1xuICAgICAgICAgICAgICAgIG9wdGlvbi5zZXRBdHRyaWJ1dGUoXCJzZWxlY3RlZFwiLCBcInNlbGVjdGVkXCIpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHN1Ym1pdFRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBzdWJtaXRUYXNrQnV0dG9uLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJzdWJtaXRcIik7XG4gICAgICAgIHN1Ym1pdFRhc2tCdXR0b24udGV4dENvbnRlbnQgPSBcIlNhdmVcIjtcbiAgICAgICAgZWRpdFRhc2tEaWFsb2dGb3JtLmFwcGVuZChzdWJtaXRUYXNrQnV0dG9uKTtcblxuICAgICAgICBjb25zdCBjbG9zZVRhc2tEaWFsb2dEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjbG9zZVRhc2tEaWFsb2dEaXYuY2xhc3NMaXN0LmFkZChcImNsb3NlLXRhc2stZGlhbG9nXCIpO1xuICAgICAgICBlZGl0VGFza0RpYWxvZ0Zvcm0uYXBwZW5kKGNsb3NlVGFza0RpYWxvZ0Rpdik7XG5cbiAgICAgICAgY29uc3QgY2xvc2VUYXNrRGlhbG9nU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgICAgICBjbG9zZVRhc2tEaWFsb2dTcGFuLmNsYXNzTGlzdC5hZGQoXCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCIpO1xuICAgICAgICBjbG9zZVRhc2tEaWFsb2dTcGFuLnRleHRDb250ZW50ID0gXCJjbG9zZVwiO1xuICAgICAgICBjbG9zZVRhc2tEaWFsb2dEaXYuYXBwZW5kKGNsb3NlVGFza0RpYWxvZ1NwYW4pO1xuXG4gICAgICAgIC8vIEFkZCBjbG9zZSBhbmltYXRpb24gb24gU2F2ZSBhbmQgQ2xvc2VcbiAgICAgICAgaGFuZGxlQ2xvc2VBbmltYXRpb24oXG4gICAgICAgICAgZWRpdFRhc2tEaWFsb2dGb3JtLFxuICAgICAgICAgIGVkaXRUYXNrRGlhbG9nLFxuICAgICAgICAgIFwic3VibWl0XCIsXG4gICAgICAgICAgZWRpdFRhc2tEaWFsb2dGb3JtLFxuICAgICAgICApO1xuICAgICAgICBoYW5kbGVDbG9zZUFuaW1hdGlvbihcbiAgICAgICAgICBjbG9zZVRhc2tEaWFsb2dTcGFuLFxuICAgICAgICAgIGVkaXRUYXNrRGlhbG9nLFxuICAgICAgICAgIFwiY2xpY2tcIixcbiAgICAgICAgICBlZGl0VGFza0RpYWxvZ0Zvcm0sXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ2xvc2UgYW5pbWF0aW9uIG9uIEVTQ1xuICAgIGZ1bmN0aW9uIGFkZEVzY0V2ZW5MaXN0ZW5lcigpIHtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChldmVudCkgPT4ge1xuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVzY2FwZVwiKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICBjb25zdCBvcGVuRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImRpYWxvZ1tvcGVuXVwiKTtcbiAgICAgICAgICBpZiAob3BlbkRpYWxvZykge1xuICAgICAgICAgICAgY2xvc2VEaWFsb2cob3BlbkRpYWxvZyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBDbG9zZSBhbmltYXRpb24gaGFuZGxlclxuICAgIGZ1bmN0aW9uIGhhbmRsZUNsb3NlQW5pbWF0aW9uKGV2ZW50RWxlbWVudCwgZGlhbG9nLCBldmVudFR5cGUsIGZvcm0pIHtcbiAgICAgIGV2ZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Byb2plY3QtbmFtZVwiKTtcbiAgICAgICAgcHJvamVjdE5hbWUudmFsdWUgPSBcIlwiO1xuXG4gICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdGFzay10aXRsZVwiKTtcbiAgICAgICAgdGFza1RpdGxlLnZhbHVlID0gXCJcIjtcblxuICAgICAgICBjb25zdCB0YXNrTm90ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3Rhc2stbm90ZXNcIik7XG4gICAgICAgIHRhc2tOb3Rlcy52YWx1ZSA9IFwiXCI7XG5cbiAgICAgICAgLy8gZm9ybS5yZXNldCgpO1xuICAgICAgICBjbG9zZURpYWxvZyhkaWFsb2cpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gQ2xvc2UgZGlhbG9nXG4gICAgZnVuY3Rpb24gY2xvc2VEaWFsb2coZGlhbG9nKSB7XG4gICAgICBkaWFsb2cuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgIGRpYWxvZy5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzcGxheWVkXCIpO1xuICAgICAgZGlhbG9nLmFkZEV2ZW50TGlzdGVuZXIoXCJ0cmFuc2l0aW9uZW5kXCIsIGZ1bmN0aW9uIGhhbmRsZVRyYW5zaXRpb25FbmQoKSB7XG4gICAgICAgIGRpYWxvZy5jbG9zZSgpO1xuICAgICAgICBkaWFsb2cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRyYW5zaXRpb25lbmRcIiwgaGFuZGxlVHJhbnNpdGlvbkVuZCk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgbmV3UHJvamVjdERpYWxvZ0hhbmRsZXIsXG4gICAgICBuZXdUYXNrRGlhbG9nSGFuZGxlcixcbiAgICAgIGFkZEVzY0V2ZW5MaXN0ZW5lcixcbiAgICAgIGNyZWF0ZVRhc2tEZWxldGVEaWFsb2csXG4gICAgICBjcmVhdGVQcm9qZWN0RGVsZXRlRGlhbG9nLFxuICAgICAgaGFuZGxlQ2xvc2VBbmltYXRpb24sXG4gICAgICBlZGl0VGFza0RpYWxvZ0hhbmRsZXIsXG4gICAgfTtcbiAgfSkoKTtcblxuICAvLyBIYW5kbGVyIGZvciBsZWZ0IGRpdlxuICBjb25zdCBjcmVhdGVMZWZ0RGl2ID0gKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBDcmVhdGUgbGF5b3V0IHN0cnVjdHVyZVxuICAgIGZ1bmN0aW9uIGNyZWF0ZVN0cnVjdHVyZSgpIHtcbiAgICAgIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIik7XG4gICAgICBjb25zdCBsZWZ0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGxlZnREaXYuY2xhc3NMaXN0LmFkZChcImxlZnRcIik7XG4gICAgICBtYWluRGl2LmFwcGVuZChsZWZ0RGl2KTtcblxuICAgICAgY29uc3QgbGVmdEZpcnN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGxlZnRGaXJzdERpdi5jbGFzc0xpc3QuYWRkKFwibGVmdC1maXJzdC1zZWN0aW9uXCIpO1xuICAgICAgbGVmdEZpcnN0RGl2LmRhdGFzZXQuYWN0aXZlID0gXCJUb2RheVwiO1xuXG4gICAgICBsZWZ0RGl2LmFwcGVuZChsZWZ0Rmlyc3REaXYpO1xuXG4gICAgICBjb25zdCBmaXJzdFNlY3Rpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgZmlyc3RTZWN0aW9uTGFiZWwudGV4dENvbnRlbnQgPSBcIlRhc2tzXCI7XG4gICAgICBsZWZ0Rmlyc3REaXYuYXBwZW5kKGZpcnN0U2VjdGlvbkxhYmVsKTtcblxuICAgICAgY29uc3QgZmlyc3RTZWN0aW9uTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgIGZpcnN0U2VjdGlvbkxpc3QuY2xhc3NMaXN0LmFkZChcInZpZXdzXCIpO1xuICAgICAgbGVmdEZpcnN0RGl2LmFwcGVuZChmaXJzdFNlY3Rpb25MaXN0KTtcblxuICAgICAgY29uc3QgZmlyc3RTZWN0aW9uTGluZUl0ZW1zID0gW1xuICAgICAgICB7XG4gICAgICAgICAgZWxlbWVudF90eXBlOiBcImxpXCIsXG4gICAgICAgICAgZWxlbWVudF9jbGFzczogXCJ0YXNrLWZpbHRlclwiLFxuICAgICAgICAgIGRhdGFzZXRfYWN0aXZlOiBcInRydWVcIixcbiAgICAgICAgICBjaGlsZF9lbGVtZW50czogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBlbGVtZW50X3R5cGU6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIGVsZW1lbnRfY2xhc3M6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgZWxlbWVudF9pbm5lckh0bWw6XG4gICAgICAgICAgICAgICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+Y2FsZW5kYXItdG9kYXktb3V0bGluZTwvdGl0bGU+PHBhdGggZD1cIk0xOSAzSDE4VjFIMTZWM0g4VjFINlYzSDVDMy45IDMgMyAzLjg5IDMgNVYxOUMzIDIwLjExIDMuOSAyMSA1IDIxSDE5QzIwLjExIDIxIDIxIDIwLjExIDIxIDE5VjVDMjEgMy44OSAyMC4xMSAzIDE5IDNNMTkgMTlINVY5SDE5VjE5TTE5IDdINVY1SDE5TTcgMTFIMTJWMTZIN1wiIC8+PC9zdmc+JyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGVsZW1lbnRfdHlwZTogXCJwXCIsXG4gICAgICAgICAgICAgIGVsZW1lbnRfdGV4dENvbnRlbnQ6IFwiVG9kYXlcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgICBmdW5jdGlvbjogXCJnZXRUb2RheVRhc2tzXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBlbGVtZW50X3R5cGU6IFwibGlcIixcbiAgICAgICAgICBlbGVtZW50X2NsYXNzOiBcInRhc2stZmlsdGVyXCIsXG4gICAgICAgICAgZGF0YXNldF9hY3RpdmU6IFwiZmFsc2VcIixcbiAgICAgICAgICBjaGlsZF9lbGVtZW50czogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBlbGVtZW50X3R5cGU6IFwiZGl2XCIsXG4gICAgICAgICAgICAgIGVsZW1lbnRfY2xhc3M6IFwiaW1hZ2VcIixcbiAgICAgICAgICAgICAgZWxlbWVudF9pbm5lckh0bWw6XG4gICAgICAgICAgICAgICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+Y2FsZW5kYXItc3RhcnQtb3V0bGluZTwvdGl0bGU+PHBhdGggZD1cIk0xMyAxOEw5IDE0VjE3SDRWMTRIMlYyMkg0VjE5SDlWMjJMMTMgMThNMTkgM0gxOFYxSDE2VjNIOFYxSDZWM0g1QzMuOSAzIDMgMy45IDMgNVYxMkg1VjlIMTlWMTlIMTQuOEwxMi44IDIxSDE5QzIwLjEgMjEgMjEgMjAuMSAyMSAxOVY1QzIxIDMuOSAyMC4xIDMgMTkgM001IDdWNUgxOVY3SDVaXCIgLz48L3N2Zz4nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZWxlbWVudF90eXBlOiBcInBcIixcbiAgICAgICAgICAgICAgZWxlbWVudF90ZXh0Q29udGVudDogXCJUb21vcnJvd1wiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIGZ1bmN0aW9uOiBcImdldFRvbW9ycm93VGFza3NcIixcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGVsZW1lbnRfdHlwZTogXCJsaVwiLFxuICAgICAgICAgIGVsZW1lbnRfY2xhc3M6IFwidGFzay1maWx0ZXJcIixcbiAgICAgICAgICBkYXRhc2V0X2FjdGl2ZTogXCJmYWxzZVwiLFxuICAgICAgICAgIGNoaWxkX2VsZW1lbnRzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGVsZW1lbnRfdHlwZTogXCJkaXZcIixcbiAgICAgICAgICAgICAgZWxlbWVudF9jbGFzczogXCJpbWFnZVwiLFxuICAgICAgICAgICAgICBlbGVtZW50X2lubmVySHRtbDpcbiAgICAgICAgICAgICAgICAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT5jYWxlbmRhci1tb250aC1vdXRsaW5lPC90aXRsZT48cGF0aCBkPVwiTTcgMTFIOVYxM0g3VjExTTIxIDVWMTlDMjEgMjAuMTEgMjAuMTEgMjEgMTkgMjFINUMzLjg5IDIxIDMgMjAuMSAzIDE5VjVDMyAzLjkgMy45IDMgNSAzSDZWMUg4VjNIMTZWMUgxOFYzSDE5QzIwLjExIDMgMjEgMy45IDIxIDVNNSA3SDE5VjVINVY3TTE5IDE5VjlINVYxOUgxOU0xNSAxM1YxMUgxN1YxM0gxNU0xMSAxM1YxMUgxM1YxM0gxMU03IDE1SDlWMTdIN1YxNU0xNSAxN1YxNUgxN1YxN0gxNU0xMSAxN1YxNUgxM1YxN0gxMVpcIiAvPjwvc3ZnPicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBlbGVtZW50X3R5cGU6IFwicFwiLFxuICAgICAgICAgICAgICBlbGVtZW50X3RleHRDb250ZW50OiBcIkFsbFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIGZ1bmN0aW9uOiBcImdldEFsbFRhc2tzXCIsXG4gICAgICAgIH0sXG4gICAgICBdO1xuXG4gICAgICBmaXJzdFNlY3Rpb25MaW5lSXRlbXMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCBsaW5lSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudC5lbGVtZW50X3R5cGUpO1xuICAgICAgICBsaW5lSXRlbS5jbGFzc0xpc3QuYWRkKGVsZW1lbnQuZWxlbWVudF9jbGFzcyk7XG4gICAgICAgIGxpbmVJdGVtLmRhdGFzZXQuYWN0aXZlID0gZWxlbWVudC5kYXRhc2V0X2FjdGl2ZTtcbiAgICAgICAgZmlyc3RTZWN0aW9uTGlzdC5hcHBlbmQobGluZUl0ZW0pO1xuICAgICAgICBpZiAoZWxlbWVudC5jaGlsZF9lbGVtZW50cykge1xuICAgICAgICAgIGVsZW1lbnQuY2hpbGRfZWxlbWVudHMuZm9yRWFjaCgoY2hpbGRfZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgbGluZUl0ZW1DaGlsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAgICAgICAgIGNoaWxkX2VsZW1lbnQuZWxlbWVudF90eXBlLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIGxpbmVJdGVtQ2hpbGQuY2xhc3NMaXN0LmFkZChjaGlsZF9lbGVtZW50LmVsZW1lbnRfY2xhc3MpO1xuICAgICAgICAgICAgaWYgKGNoaWxkX2VsZW1lbnQuZWxlbWVudF9pbm5lckh0bWwpIHtcbiAgICAgICAgICAgICAgbGluZUl0ZW1DaGlsZC5pbm5lckhUTUwgPSBgJHtjaGlsZF9lbGVtZW50LmVsZW1lbnRfaW5uZXJIdG1sfWA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2hpbGRfZWxlbWVudC5lbGVtZW50X3RleHRDb250ZW50KSB7XG4gICAgICAgICAgICAgIGxpbmVJdGVtQ2hpbGQudGV4dENvbnRlbnQgPSBjaGlsZF9lbGVtZW50LmVsZW1lbnRfdGV4dENvbnRlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsaW5lSXRlbS5hcHBlbmQobGluZUl0ZW1DaGlsZCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdGFza3NGdW5jdGlvbiA9IFRhc2tNb2R1bGVbZWxlbWVudC5mdW5jdGlvbl07XG4gICAgICAgIGxpbmVJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgRE9NTW9kdWxlLmNyZWF0ZVJpZ2h0RGl2LmNyZWF0ZVRhc2tzKFxuICAgICAgICAgICAgVGFza01vZHVsZS5nZXRQcm9qZWN0VGFza3MoXG4gICAgICAgICAgICAgIFRhc2tNb2R1bGUuZ2V0QWN0aXZlUHJvamVjdCgpLFxuICAgICAgICAgICAgICB0YXNrc0Z1bmN0aW9uKCksXG4gICAgICAgICAgICApLFxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBjb25zdCByaWdodEZpcnN0SGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIFwiLnJpZ2h0LWZpcnN0LWhlYWRlclwiLFxuICAgICAgICAgICk7XG4gICAgICAgICAgcmlnaHRGaXJzdEhlYWRlci50ZXh0Q29udGVudCA9XG4gICAgICAgICAgICBUYXNrTW9kdWxlLmdldEFjdGl2ZVZpZXcoKS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArXG4gICAgICAgICAgICBUYXNrTW9kdWxlLmdldEFjdGl2ZVZpZXcoKS5zbGljZSgxKTtcbiAgICAgICAgICBpZiAoVGFza01vZHVsZS5nZXRBY3RpdmVQcm9qZWN0KCkpIHtcbiAgICAgICAgICAgIHJpZ2h0Rmlyc3RIZWFkZXIudGV4dENvbnRlbnQgKz0gYCAtICR7VGFza01vZHVsZS5nZXRBY3RpdmVQcm9qZWN0KCl9YDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGFuaW1hdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBhbmltYXRpb25EaXYuY2xhc3NMaXN0LmFkZChcInRhc2stYW5pbWF0aW9uXCIsIFwic3RhcnQtdG9kYXlcIik7XG4gICAgICBmaXJzdFNlY3Rpb25MaXN0LmFwcGVuZChhbmltYXRpb25EaXYpO1xuXG4gICAgICBjb25zdCBsZWZ0U2Vjb25kRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGxlZnRTZWNvbmREaXYuY2xhc3NMaXN0LmFkZChcImxlZnQtc2Vjb25kLXNlY3Rpb25cIik7XG4gICAgICBsZWZ0RGl2LmFwcGVuZChsZWZ0U2Vjb25kRGl2KTtcblxuICAgICAgY29uc3Qgc2Vjb25kU2VjdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICBzZWNvbmRTZWN0aW9uTGFiZWwudGV4dENvbnRlbnQgPSBcIlByb2plY3RzXCI7XG4gICAgICBsZWZ0U2Vjb25kRGl2LmFwcGVuZChzZWNvbmRTZWN0aW9uTGFiZWwpO1xuXG4gICAgICBjb25zdCBzZWNvbmRTZWN0aW9uTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgIHNlY29uZFNlY3Rpb25MaXN0LmNsYXNzTGlzdC5hZGQoXCJzZWNvbmQtc2VjdGlvbi1saXN0XCIpO1xuICAgICAgbGVmdFNlY29uZERpdi5hcHBlbmQoc2Vjb25kU2VjdGlvbkxpc3QpO1xuXG4gICAgICAvLyBVcGRhdGUgZGF0YS1hY3RpdmUgcHJvcGVydHkgb24gLnRhc2stZmlsZXIgYW5kIG9uIHBhcmVudCAubGVmdC1maXJzdC1zZWN0aW9uXG4gICAgICBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJ0YXNrLWZpbHRlclwiKSkuZm9yRWFjaChcbiAgICAgICAgKGl0ZW0pID0+IHtcbiAgICAgICAgICBpdGVtLm9uY2xpY2sgPSAoKSA9PiB7XG4gICAgICAgICAgICAvLyBsZWZ0Rmlyc3REaXYuZGF0YXNldC5hY3RpdmUgPSBpdGVtLnRleHRDb250ZW50O1xuICAgICAgICAgICAgQXJyYXkuZnJvbShkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwidGFzay1maWx0ZXJcIikpLmZvckVhY2goXG4gICAgICAgICAgICAgIChpdGVtMikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtID09PSBpdGVtMikge1xuICAgICAgICAgICAgICAgICAgaXRlbTIuZGF0YXNldC5hY3RpdmUgPSBcInRydWVcIjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgaXRlbTIuZGF0YXNldC5hY3RpdmUgPSBcImZhbHNlXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBSZW5kZXIgcHJvamVjdHMgaW4gLnNlY29uZC1zZWN0aW9uLWxpc3RcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0cyhwcm9qZWN0cykge1xuICAgICAgY29uc3QgcHJvamVjdExpbmVJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIucHJvamVjdFwiKTtcbiAgICAgIGlmIChwcm9qZWN0TGluZUl0ZW1zKSB7XG4gICAgICAgIHByb2plY3RMaW5lSXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgIGl0ZW0ucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBwcm9qZWN0cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IHNlY29uZFNlY3Rpb25MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICBcIi5zZWNvbmQtc2VjdGlvbi1saXN0XCIsXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHByb2plY3RMaW5lSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgcHJvamVjdExpbmVJdGVtLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xuICAgICAgICBwcm9qZWN0TGluZUl0ZW0uZGF0YXNldC5hY3RpdmUgPSBlbGVtZW50LmFjdGl2ZTtcbiAgICAgICAgc2Vjb25kU2VjdGlvbkxpc3QuYXBwZW5kKHByb2plY3RMaW5lSXRlbSk7XG5cbiAgICAgICAgLy8gY29uc3QgY2lyY2xlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIC8vIGNpcmNsZS5jbGFzc0xpc3QuYWRkKCdjaXJjbGUnKTtcbiAgICAgICAgLy8gY2lyY2xlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGVsZW1lbnQuY29sb3I7XG4gICAgICAgIC8vIHByb2plY3RMaW5lSXRlbS5hcHBlbmQoY2lyY2xlKTtcbiAgICAgICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGljb24uY2xhc3NMaXN0LmFkZChcImljb25cIik7XG4gICAgICAgIGljb24uaW5uZXJIVE1MID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2Utd2lkdGg9XCIwLjVcIiBzdHJva2U9XCJ2YXIoLS1ib3JkZXItZGFyaylcIj5cbiAgICAgICAgICAgICAgICA8dGl0bGU+Y2hlY2tib3gtbXVsdGlwbGUtYmxhbmstY2lyY2xlPC90aXRsZT5cbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTE0LDJBOCw4IDAgMCwwIDYsMTBBOCw4IDAgMCwwIDE0LDE4QTgsOCAwIDAsMCAyMiwxMEE4LDggMCAwLDAgMTQsMk00LjkzLDUuODJDMy4wOCw3LjM0IDIsOS42MSAyLDEyQTgsOCAwIDAsMCAxMCwyMEMxMC42NCwyMCAxMS4yNywxOS45MiAxMS44OCwxOS43N0MxMC4xMiwxOS4zOCA4LjUsMTguNSA3LjE3LDE3LjI5QzUuMjIsMTYuMjUgNCwxNC4yMSA0LDEyQzQsMTEuNyA0LjAzLDExLjQxIDQuMDcsMTEuMTFDNC4wMywxMC43NCA0LDEwLjM3IDQsMTBDNCw4LjU2IDQuMzIsNy4xMyA0LjkzLDUuODJaXCIvPlxuICAgICAgICAgICAgICAgIDwvc3ZnPmA7XG4gICAgICAgIC8vIGljb24uaW5uZXJIVE1MID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48dGl0bGU+bGVhZjwvdGl0bGU+PHBhdGggZD1cIk0xNyw4QzgsMTAgNS45LDE2LjE3IDMuODIsMjEuMzRMNS43MSwyMkw2LjY2LDE5LjdDNy4xNCwxOS44NyA3LjY0LDIwIDgsMjBDMTksMjAgMjIsMyAyMiwzQzIxLDUgMTQsNS4yNSA5LDYuMjVDNCw3LjI1IDIsMTEuNSAyLDEzLjVDMiwxNS41IDMuNzUsMTcuMjUgMy43NSwxNy4yNUM3LDggMTcsOCAxNyw4WlwiIC8+PC9zdmc+YDtcbiAgICAgICAgLy8gaWNvbi5pbm5lckhUTUwgPSBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT5sZWFmPC90aXRsZT48cGF0aCBkPVwiTTE3LDhDOCwxMCA1LjksMTYuMTcgMy44MiwyMS4zNEw1LjcxLDIyTDYuNjYsMTkuN0M3LjE0LDE5Ljg3IDcuNjQsMjAgOCwyMEMxOSwyMCAyMiwzIDIyLDNDMjEsNSAxNCw1LjI1IDksNi4yNUM0LDcuMjUgMiwxMS41IDIsMTMuNUMyLDE1LjUgMy43NSwxNy4yNSAzLjc1LDE3LjI1QzcsOCAxNyw4IDE3LDhaXCIgLz48L3N2Zz5gO1xuXG4gICAgICAgIGljb24uc3R5bGUuZmlsbCA9IGVsZW1lbnQuY29sb3I7XG4gICAgICAgIHByb2plY3RMaW5lSXRlbS5hcHBlbmQoaWNvbik7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdExpbmVJdGVtTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHByb2plY3RMaW5lSXRlbU5hbWUudGV4dENvbnRlbnQgPSBlbGVtZW50Lm5hbWU7XG4gICAgICAgIHByb2plY3RMaW5lSXRlbS5hcHBlbmQocHJvamVjdExpbmVJdGVtTmFtZSk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdExpbmVJdGVtRGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcHJvamVjdExpbmVJdGVtRGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtcHJvamVjdC1idXR0b25cIik7XG4gICAgICAgIHByb2plY3RMaW5lSXRlbURlbGV0ZUJ1dHRvbi5pbm5lckhUTUwgPSBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT5kZWxldGUtb3V0bGluZTwvdGl0bGU+PHBhdGggZD1cIk02LDE5QTIsMiAwIDAsMCA4LDIxSDE2QTIsMiAwIDAsMCAxOCwxOVY3SDZWMTlNOCw5SDE2VjE5SDhWOU0xNS41LDRMMTQuNSwzSDkuNUw4LjUsNEg1VjZIMTlWNEgxNS41WlwiIC8+PC9zdmc+YDtcbiAgICAgICAgcHJvamVjdExpbmVJdGVtLmFwcGVuZChwcm9qZWN0TGluZUl0ZW1EZWxldGVCdXR0b24pO1xuXG4gICAgICAgIHByb2plY3RMaW5lSXRlbURlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGNvbmZpcm1Qcm9qZWN0RGVsZXRlRGlhbG9nID1cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1kZWxldGVcIik7XG4gICAgICAgICAgY29uc3QgY29uZmlybVByb2plY3REZWxldGVGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIFwiLnByb2plY3QtZGVsZXRlID4gZm9ybVwiLFxuICAgICAgICAgICk7XG4gICAgICAgICAgY29uZmlybVByb2plY3REZWxldGVEaWFsb2cuc2hvd01vZGFsKCk7XG4gICAgICAgICAgY29uZmlybVByb2plY3REZWxldGVEaWFsb2cuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICAgICAgICBjb25maXJtUHJvamVjdERlbGV0ZURpYWxvZy5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheWVkXCIpO1xuXG4gICAgICAgICAgY29uc3QgY29uZmlybVByb2plY3REZWxldGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgJy5wcm9qZWN0LWRlbGV0ZSA+IGZvcm0gPiBidXR0b25bdHlwZT1cInN1Ym1pdFwiXScsXG4gICAgICAgICAgKTtcbiAgICAgICAgICBjb25zdCBjYW5jZWxQcm9qZWN0RGVsZXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICcucHJvamVjdC1kZWxldGUgPiBmb3JtID4gYnV0dG9uW3R5cGU9XCJjbG9zZVwiXScsXG4gICAgICAgICAgKTtcbiAgICAgICAgICBjb25maXJtUHJvamVjdERlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgLy8gVGFza01vZHVsZS5kZWxldGVUYXNrKGVsZW1lbnQuaWQpO1xuICAgICAgICAgICAgLy8gRE9NTW9kdWxlLmNyZWF0ZURpYWxvZ3MuaGFuZGxlQ2xvc2VBbmltYXRpb24oY29uZmlybVRhc2tEZWxldGVGb3JtLCBjb25maXJtVGFza0RlbGV0ZURpYWxvZywgJ3N1Ym1pdCcsIGNvbmZpcm1UYXNrRGVsZXRlRm9ybSk7XG4gICAgICAgICAgICAvLyBET01Nb2R1bGUuY3JlYXRlUmlnaHREaXYuY3JlYXRlVGFza3MoVGFza01vZHVsZS5nZXRQcm9qZWN0VGFza3MoVGFza01vZHVsZS5nZXRBY3RpdmVQcm9qZWN0KCksIFRhc2tNb2R1bGUuZ2V0VGFza3NGcm9tQWN0aXZlVmlldygpKSk7XG4gICAgICAgICAgICBQcm9qZWN0TW9kdWxlLmRlbGV0ZVByb2plY3QoZWxlbWVudC5pZCk7XG4gICAgICAgICAgICBET01Nb2R1bGUuY3JlYXRlRGlhbG9ncy5oYW5kbGVDbG9zZUFuaW1hdGlvbihcbiAgICAgICAgICAgICAgY29uZmlybVByb2plY3REZWxldGVGb3JtLFxuICAgICAgICAgICAgICBjb25maXJtUHJvamVjdERlbGV0ZURpYWxvZyxcbiAgICAgICAgICAgICAgXCJzdWJtaXRcIixcbiAgICAgICAgICAgICAgY29uZmlybVByb2plY3REZWxldGVGb3JtLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIERPTU1vZHVsZS5jcmVhdGVMZWZ0RGl2LmNyZWF0ZVByb2plY3RzKFxuICAgICAgICAgICAgICBQcm9qZWN0TW9kdWxlLmdldFByb2plY3RPYmplY3RzKCksXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgVGFza01vZHVsZS5kZWxldGVUYXNrQnlQcm9qZWN0SWQoZWxlbWVudC5pZCk7XG5cbiAgICAgICAgICAgIGlmIChUYXNrTW9kdWxlLmdldEFjdGl2ZVByb2plY3QoKSA9PT0gZWxlbWVudC5uYW1lKSB7XG4gICAgICAgICAgICAgIFRhc2tNb2R1bGUuY2hhbmdlQWN0aXZlUHJvamVjdChcIlwiKTtcbiAgICAgICAgICAgICAgY29uc3QgcmlnaHRGaXJzdEhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgXCIucmlnaHQtZmlyc3QtaGVhZGVyXCIsXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIHJpZ2h0Rmlyc3RIZWFkZXIudGV4dENvbnRlbnQgPVxuICAgICAgICAgICAgICAgIFRhc2tNb2R1bGUuZ2V0QWN0aXZlVmlldygpLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICtcbiAgICAgICAgICAgICAgICBUYXNrTW9kdWxlLmdldEFjdGl2ZVZpZXcoKS5zbGljZSgxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIERPTU1vZHVsZS5jcmVhdGVEaWFsb2dzLm5ld1Rhc2tEaWFsb2dIYW5kbGVyKCk7XG4gICAgICAgICAgICBET01Nb2R1bGUuY3JlYXRlUmlnaHREaXYuY3JlYXRlVGFza3MoXG4gICAgICAgICAgICAgIFRhc2tNb2R1bGUuZ2V0UHJvamVjdFRhc2tzKFxuICAgICAgICAgICAgICAgIFRhc2tNb2R1bGUuZ2V0QWN0aXZlUHJvamVjdCgpLFxuICAgICAgICAgICAgICAgIFRhc2tNb2R1bGUuZ2V0VGFza3NGcm9tQWN0aXZlVmlldygpLFxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGNhbmNlbFByb2plY3REZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIERPTU1vZHVsZS5jcmVhdGVEaWFsb2dzLmhhbmRsZUNsb3NlQW5pbWF0aW9uKFxuICAgICAgICAgICAgICBjb25maXJtUHJvamVjdERlbGV0ZUZvcm0sXG4gICAgICAgICAgICAgIGNvbmZpcm1Qcm9qZWN0RGVsZXRlRGlhbG9nLFxuICAgICAgICAgICAgICBcInN1Ym1pdFwiLFxuICAgICAgICAgICAgICBjb25maXJtUHJvamVjdERlbGV0ZUZvcm0sXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBwcm9qZWN0TGluZUl0ZW1EZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCAoKSA9PiB7XG4gICAgICAgICAgcHJvamVjdExpbmVJdGVtRGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJob3ZlcmVkXCIpO1xuICAgICAgICAgIHByb2plY3RMaW5lSXRlbS5jbGFzc0xpc3QuYWRkKFwiaG92ZXJlZC1kZWxldGVcIik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHByb2plY3RMaW5lSXRlbURlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2VsZWF2ZVwiLCAoKSA9PiB7XG4gICAgICAgICAgcHJvamVjdExpbmVJdGVtRGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoXCJob3ZlcmVkXCIpO1xuICAgICAgICAgIHByb2plY3RMaW5lSXRlbS5jbGFzc0xpc3QucmVtb3ZlKFwiaG92ZXJlZC1kZWxldGVcIik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHByb2plY3RMaW5lSXRlbS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGRlbGV0ZUhvdmVyZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgXCIuZGVsZXRlLXByb2plY3QtYnV0dG9uLmhvdmVyZWRcIixcbiAgICAgICAgICApO1xuICAgICAgICAgIGlmICghZGVsZXRlSG92ZXJlZCkge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICBUYXNrTW9kdWxlLmdldEFjdGl2ZVByb2plY3QoKSA9PT0gcHJvamVjdExpbmVJdGVtTmFtZS50ZXh0Q29udGVudFxuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgIFRhc2tNb2R1bGUuY2hhbmdlQWN0aXZlUHJvamVjdChcIlwiKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIFRhc2tNb2R1bGUuY2hhbmdlQWN0aXZlUHJvamVjdChwcm9qZWN0TGluZUl0ZW1OYW1lLnRleHRDb250ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIERPTU1vZHVsZS5jcmVhdGVSaWdodERpdi5jcmVhdGVUYXNrcyhcbiAgICAgICAgICAgICAgVGFza01vZHVsZS5nZXRQcm9qZWN0VGFza3MoXG4gICAgICAgICAgICAgICAgVGFza01vZHVsZS5nZXRBY3RpdmVQcm9qZWN0KCksXG4gICAgICAgICAgICAgICAgVGFza01vZHVsZS5nZXRUYXNrc0Zyb21BY3RpdmVWaWV3KCksXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBjb25zdCByaWdodEZpcnN0SGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICAgXCIucmlnaHQtZmlyc3QtaGVhZGVyXCIsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcmlnaHRGaXJzdEhlYWRlci50ZXh0Q29udGVudCA9XG4gICAgICAgICAgICAgIFRhc2tNb2R1bGUuZ2V0QWN0aXZlVmlldygpLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICtcbiAgICAgICAgICAgICAgVGFza01vZHVsZS5nZXRBY3RpdmVWaWV3KCkuc2xpY2UoMSk7XG4gICAgICAgICAgICBpZiAoVGFza01vZHVsZS5nZXRBY3RpdmVQcm9qZWN0KCkpIHtcbiAgICAgICAgICAgICAgcmlnaHRGaXJzdEhlYWRlci50ZXh0Q29udGVudCArPSBgIC0gJHtUYXNrTW9kdWxlLmdldEFjdGl2ZVByb2plY3QoKX1gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgZXhpc3RpbmdBbmltYXRpb25EaXYyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgXCIuc2Vjb25kLXNlY3Rpb24tbGlzdCA+IC50YXNrLWFuaW1hdGlvblwiLFxuICAgICAgKTtcbiAgICAgIGlmIChleGlzdGluZ0FuaW1hdGlvbkRpdjIpIHtcbiAgICAgICAgZXhpc3RpbmdBbmltYXRpb25EaXYyLnJlbW92ZSgpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBzZWNvbmRTZWN0aW9uTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc2Vjb25kLXNlY3Rpb24tbGlzdFwiKTtcbiAgICAgIGNvbnN0IGFuaW1hdGlvbkRpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgYW5pbWF0aW9uRGl2Mi5jbGFzc0xpc3QuYWRkKFwidGFzay1hbmltYXRpb25cIiwgXCJzdGFydC1maXJzdFwiKTtcbiAgICAgIHNlY29uZFNlY3Rpb25MaXN0LmFwcGVuZChhbmltYXRpb25EaXYyKTtcblxuICAgICAgLy8gVXBkYXRlIGRhdGEtYWN0aXZlIHByb3BlcnR5IG9uIC5wcm9qZWN0XG4gICAgICBBcnJheS5mcm9tKGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwcm9qZWN0XCIpKS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGl0ZW0ub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgICBjb25zdCBkZWxldGVIb3ZlcmVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgIFwiLmRlbGV0ZS1wcm9qZWN0LWJ1dHRvbi5ob3ZlcmVkXCIsXG4gICAgICAgICAgKTtcbiAgICAgICAgICBpZiAoIWRlbGV0ZUhvdmVyZWQpIHtcbiAgICAgICAgICAgIEFycmF5LmZyb20oZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInByb2plY3RcIikpLmZvckVhY2goXG4gICAgICAgICAgICAgIChpdGVtMikgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChpdGVtID09PSBpdGVtMikge1xuICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uZGF0YXNldC5hY3RpdmUgPT0gXCJ0cnVlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFza19hbmltYXRpb24gPVxuICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhcnQtZmlyc3RcIik7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tfYW5pbWF0aW9uLnN0eWxlLm9wYWNpdHkgPSBcIjBcIjtcbiAgICAgICAgICAgICAgICAgICAgaXRlbTIuY2xhc3NMaXN0LnJlbW92ZShcImZvbnQtYWNjZW50XCIpO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBpdGVtMi5kYXRhc2V0LmFjdGl2ZSA9IFwiZmFsc2VcIjtcbiAgICAgICAgICAgICAgICAgICAgICB0YXNrX2FuaW1hdGlvbi5zdHlsZS5vcGFjaXR5ID0gXCIxXCI7XG4gICAgICAgICAgICAgICAgICAgIH0sIDMwMCk7XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpdGVtMi5kYXRhc2V0LmFjdGl2ZSA9IFwidHJ1ZVwiO1xuICAgICAgICAgICAgICAgICAgICBpdGVtMi5jbGFzc0xpc3QuYWRkKFwiZm9udC1hY2NlbnRcIik7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGl0ZW0yLmRhdGFzZXQuYWN0aXZlID0gXCJmYWxzZVwiO1xuICAgICAgICAgICAgICAgICAgaXRlbTIuY2xhc3NMaXN0LnJlbW92ZShcImZvbnQtYWNjZW50XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNyZWF0ZVN0cnVjdHVyZSxcbiAgICAgIGNyZWF0ZVByb2plY3RzLFxuICAgIH07XG4gIH0pKCk7XG5cbiAgLy8gSGFuZGxlciBmb3IgcmlnaHQgZGl2XG4gIGNvbnN0IGNyZWF0ZVJpZ2h0RGl2ID0gKGZ1bmN0aW9uICgpIHtcbiAgICAvLyBDcmVhdGUgbGF5b3V0IHN0cnVjdHVyZVxuICAgIGZ1bmN0aW9uIGNyZWF0ZVN0cnVjdHVyZSgpIHtcbiAgICAgIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm1haW5cIik7XG4gICAgICBjb25zdCByaWdodERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICByaWdodERpdi5jbGFzc0xpc3QuYWRkKFwicmlnaHRcIik7XG4gICAgICBtYWluRGl2LmFwcGVuZChyaWdodERpdik7XG5cbiAgICAgIGNvbnN0IHJpZ2h0Rmlyc3RIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgcmlnaHRGaXJzdEhlYWRlci5jbGFzc0xpc3QuYWRkKFwicmlnaHQtZmlyc3QtaGVhZGVyXCIpO1xuICAgICAgcmlnaHRGaXJzdEhlYWRlci50ZXh0Q29udGVudCA9IFwiQWxsXCI7XG4gICAgICByaWdodERpdi5hcHBlbmQocmlnaHRGaXJzdEhlYWRlcik7XG5cbiAgICAgIGNvbnN0IHJpZ2h0Rmlyc3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgcmlnaHRGaXJzdERpdi5jbGFzc0xpc3QuYWRkKFwicmlnaHQtZmlyc3Qtc2VjdGlvblwiKTtcbiAgICAgIHJpZ2h0RGl2LmFwcGVuZChyaWdodEZpcnN0RGl2KTtcbiAgICB9XG5cbiAgICAvLyBSZW5kZXIgdGFza3NcbiAgICBmdW5jdGlvbiBjcmVhdGVUYXNrcyh0YXNrcykge1xuICAgICAgY29uc3QgdGFza0xpbmVJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGFzaywgLnRhc2stZGl2aWRlclwiKTtcbiAgICAgIGNvbnN0IGZpbGxlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubm8tdGFza3MtZmlsbGVyXCIpO1xuICAgICAgaWYgKGZpbGxlcikge1xuICAgICAgICBmaWxsZXIucmVtb3ZlKCk7XG4gICAgICB9XG4gICAgICBpZiAodGFza0xpbmVJdGVtcykge1xuICAgICAgICB0YXNrTGluZUl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICBpdGVtLnJlbW92ZSgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgICAgbGV0IHN1Yl9jb3VudGVyID0gMDtcblxuICAgICAgaWYgKHRhc2tzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjb25zdCByaWdodEZpcnN0U2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgXCIucmlnaHQtZmlyc3Qtc2VjdGlvblwiLFxuICAgICAgICApO1xuICAgICAgICBjb25zdCBmaWxsZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBmaWxsZXIuY2xhc3NMaXN0LmFkZChcIm5vLXRhc2tzLWZpbGxlclwiKTtcbiAgICAgICAgZmlsbGVyLnRleHRDb250ZW50ID0gYFNlZW1zIGxpa2UgeW91IGRvbid0IGhhdmUgYW55IHRhc2tzIGhlcmUhIFdoZXRoZXIgaXQgaXMgZ29vZCBvciBiYWQsIG9ubHkgdGltZSB3aWxsIHRlbGwuLi5gO1xuICAgICAgICByaWdodEZpcnN0U2VjdGlvbi5hcHBlbmQoZmlsbGVyKTtcbiAgICAgIH1cblxuICAgICAgdGFza3MuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCByaWdodEZpcnN0U2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgXCIucmlnaHQtZmlyc3Qtc2VjdGlvblwiLFxuICAgICAgICApO1xuICAgICAgICBjb25zdCB0YXNrTGluZUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0YXNrTGluZUl0ZW0uY2xhc3NMaXN0LmFkZChcInRhc2tcIik7XG4gICAgICAgIHRhc2tMaW5lSXRlbS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgICByaWdodEZpcnN0U2VjdGlvbi5hcHBlbmQodGFza0xpbmVJdGVtKTtcblxuICAgICAgICBjb25zdCB0YXNrTGluZUl0ZW1MZWZ0U2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRhc2tMaW5lSXRlbUxlZnRTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJ0YXNrLWxlZnQtc2VjdGlvblwiKTtcbiAgICAgICAgaWYgKGVsZW1lbnQuY29tcGxldGVkID09PSBcInRydWVcIikge1xuICAgICAgICAgIHRhc2tMaW5lSXRlbUxlZnRTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJjaGVja2VkXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRhc2tMaW5lSXRlbUxlZnRTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJ1bmNoZWNrZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgdGFza0xpbmVJdGVtTGVmdFNlY3Rpb24uaW5uZXJIVE1MID0gYDxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj5cbiAgICAgICAgICAgICAgICA8dGl0bGU+Y2hlY2stY2lyY2xlLW91dGxpbmU8L3RpdGxlPlxuICAgICAgICAgICAgICAgIDwhLS0gT3V0ZXIgY2lyY2xlIC0tPlxuICAgICAgICAgICAgICAgIDxjaXJjbGUgY3g9XCIxMlwiIGN5PVwiMTJcIiByPVwiMTBcIiBzdHJva2U9XCJjdXJyZW50Q29sb3JcIiBzdHJva2Utd2lkdGg9XCIwLjVcIiBmaWxsPVwibm9uZVwiIC8+XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgPCEtLSBDaGVja21hcmsgcGF0aCAtLT5cbiAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTcsMTMuNSBMMTAsMTYuNSBMMTcsOS41XCIgc3Ryb2tlPVwiY3VycmVudENvbG9yXCIgc3Ryb2tlLXdpZHRoPVwiMC41XCIgZmlsbD1cIm5vbmVcIiAvPlxuICAgICAgICAgICAgICAgIDwvc3ZnPmA7XG5cbiAgICAgICAgdGFza0xpbmVJdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgaWYgKHRhc2tMaW5lSXRlbUxlZnRTZWN0aW9uLmNsYXNzTGlzdC5jb250YWlucyhcInVuY2hlY2tlZFwiKSkge1xuICAgICAgICAgICAgdGFza0xpbmVJdGVtTGVmdFNlY3Rpb24uY2xhc3NMaXN0LnJlbW92ZShcInVuY2hlY2tlZFwiKTtcbiAgICAgICAgICAgIHRhc2tMaW5lSXRlbUxlZnRTZWN0aW9uLmNsYXNzTGlzdC5hZGQoXCJjaGVja2VkXCIpO1xuICAgICAgICAgICAgLy8gdGFza0xpbmVJdGVtLnN0eWxlLmJhY2tncm91bmQgPSAnYmx1ZSc7XG5cbiAgICAgICAgICAgIGVsZW1lbnQuY29tcGxldGVkID0gXCJ0cnVlXCI7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhc2tMaW5lSXRlbUxlZnRTZWN0aW9uLmNsYXNzTGlzdC5yZW1vdmUoXCJjaGVja2VkXCIpO1xuICAgICAgICAgICAgdGFza0xpbmVJdGVtTGVmdFNlY3Rpb24uY2xhc3NMaXN0LmFkZChcInVuY2hlY2tlZFwiKTtcbiAgICAgICAgICAgIGVsZW1lbnQuY29tcGxldGVkID0gXCJmYWxzZVwiO1xuICAgICAgICAgIH1cbiAgICAgICAgICBkZWxldGVUYXNrRnJvbUxvY2FsU3RvcmFnZShlbGVtZW50KTtcbiAgICAgICAgICBzYXZlVGFza1RvTG9jYWxTdG9yYWdlKGVsZW1lbnQpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0YXNrTGluZUl0ZW0uYXBwZW5kKHRhc2tMaW5lSXRlbUxlZnRTZWN0aW9uKTtcblxuICAgICAgICBjb25zdCB0YXNrTGluZUl0ZW1SaWdodFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB0YXNrTGluZUl0ZW1SaWdodFNlY3Rpb24uY2xhc3NMaXN0LmFkZChcInRhc2stcmlnaHQtc2VjdGlvblwiKTtcblxuICAgICAgICAvLyBjb25zdCBhZnRlckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgLy8gYWZ0ZXJFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hvdmVyLWVmZmVjdCcpO1xuICAgICAgICAvLyB0YXNrTGluZUl0ZW1SaWdodFNlY3Rpb24uYXBwZW5kKGFmdGVyRWxlbWVudCk7XG4gICAgICAgIC8vIGFmdGVyRWxlbWVudC50ZXh0Q29udGVudCA9IGVsZW1lbnQubm90ZXM7XG5cbiAgICAgICAgLy8gaWYgKGFmdGVyRWxlbWVudC50ZXh0Q29udGVudCAhPT0gJycpIHtcbiAgICAgICAgLy8gICAgIHRhc2tMaW5lSXRlbVJpZ2h0U2VjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoKSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgYWZ0ZXJFbGVtZW50LnN0eWxlLm9wYWNpdHkgPSBcIjFcIjtcbiAgICAgICAgLy8gICAgICAgICB0YXNrTGluZUl0ZW1SaWdodFNlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoKSA9PiB7XG4gICAgICAgIC8vICAgICAgICAgICAgIGFmdGVyRWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gXCIwXCI7XG4gICAgICAgIC8vICAgICAgICAgfSlcbiAgICAgICAgLy8gICAgIH0pXG4gICAgICAgIC8vIH1cblxuICAgICAgICB0YXNrTGluZUl0ZW0uYXBwZW5kKHRhc2tMaW5lSXRlbVJpZ2h0U2VjdGlvbik7XG5cbiAgICAgICAgY29uc3QgdGFza0xpbmVJdGVtRGl2aWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHRhc2tMaW5lSXRlbURpdmlkZXIuY2xhc3NMaXN0LmFkZChcInRhc2stZGl2aWRlclwiKTtcbiAgICAgICAgdGFza0xpbmVJdGVtRGl2aWRlci5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgICByaWdodEZpcnN0U2VjdGlvbi5hcHBlbmQodGFza0xpbmVJdGVtRGl2aWRlcik7XG5cbiAgICAgICAgY29uc3QgdGFza0ZpZWxkc1RlbXBsYXRlID0gW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGRpdl9jbGFzczogXCJ0YXNrLXByb2plY3RcIixcbiAgICAgICAgICAgIGNoaWxkX2VsZW1lbnRzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBkaXZfY2xhc3M6IFwidGFzay1wcm9qZWN0LWZpZWxkXCIsXG4gICAgICAgICAgICAgICAgdGV4dENvbnRlbnQ6IGVsZW1lbnQucHJvamVjdE5hbWUsXG4gICAgICAgICAgICAgICAgY29sb3I6IGVsZW1lbnQucHJvamVjdENvbG9yLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGRpdl9jbGFzczogXCJ0YXNrLXRpdGxlLWZpZWxkXCIsXG4gICAgICAgICAgICB0ZXh0Q29udGVudDogZWxlbWVudC50aXRsZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGRpdl9jbGFzczogXCJ0YXNrLW5vdGVzLWZpZWxkXCIsXG4gICAgICAgICAgICB0ZXh0Q29udGVudDogZWxlbWVudC5ub3RlcyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIC8vIHtcbiAgICAgICAgICAvLyAgICAgZGl2X2NsYXNzOiAndGFzay1wcmlvcml0eS1maWVsZCcsXG4gICAgICAgICAgLy8gICAgIHRleHRDb250ZW50OiBlbGVtZW50LnByaW9yaXR5LFxuICAgICAgICAgIC8vIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgZGl2X2NsYXNzOiBcInRhc2stZGF0ZS1maWVsZFwiLFxuICAgICAgICAgICAgdGV4dENvbnRlbnQ6IGZvcm1hdChwYXJzZUlTTyhlbGVtZW50LmRhdGUpLCBcIkVFRSwgZG8gTU1NXCIpLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgZGl2X2NsYXNzOiBcInRhc2stZGVsZXRlLWJ1dHRvblwiLFxuICAgICAgICAgICAgaW5uZXJIVE1MOiBgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkXCI+Y2xvc2U8L3NwYW4+YCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGRpdl9jbGFzczogXCJ0YXNrLWVkaXQtYnV0dG9uXCIsXG4gICAgICAgICAgICBpbm5lckhUTUw6IGA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWRcIj5lZGl0PC9zcGFuPmAsXG4gICAgICAgICAgfSxcbiAgICAgICAgXTtcblxuICAgICAgICB0YXNrRmllbGRzVGVtcGxhdGUuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICAgICAgICBjb25zdCB0YXNrRmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgIHRhc2tGaWVsZC5jbGFzc0xpc3QuYWRkKGZpZWxkLmRpdl9jbGFzcyk7XG4gICAgICAgICAgdGFza0ZpZWxkLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICAgICAgaWYgKGZpZWxkLnRleHRDb250ZW50KSB7XG4gICAgICAgICAgICB0YXNrRmllbGQudGV4dENvbnRlbnQgPSBmaWVsZC50ZXh0Q29udGVudDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGZpZWxkLmlubmVySFRNTCkge1xuICAgICAgICAgICAgdGFza0ZpZWxkLmlubmVySFRNTCA9IGZpZWxkLmlubmVySFRNTDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGZpZWxkLmRpdl9jbGFzcyA9PT0gXCJ0YXNrLWRlbGV0ZS1idXR0b25cIikge1xuICAgICAgICAgICAgdGFza0ZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IGNvbmZpcm1UYXNrRGVsZXRlRGlhbG9nID1cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2stZGVsZXRlXCIpO1xuICAgICAgICAgICAgICBjb25zdCBjb25maXJtVGFza0RlbGV0ZUZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgIFwiLnRhc2stZGVsZXRlID4gZm9ybVwiLFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICBjb25maXJtVGFza0RlbGV0ZURpYWxvZy5zaG93TW9kYWwoKTtcbiAgICAgICAgICAgICAgY29uZmlybVRhc2tEZWxldGVEaWFsb2cuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICAgICAgICAgICAgY29uZmlybVRhc2tEZWxldGVEaWFsb2cuY2xhc3NMaXN0LmFkZChcImRpc3BsYXllZFwiKTtcblxuICAgICAgICAgICAgICBjb25zdCBjb25maXJtVGFza0RlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAgICAgICAgICAgJy50YXNrLWRlbGV0ZSA+IGZvcm0gPiBidXR0b25bdHlwZT1cInN1Ym1pdFwiXScsXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGNvbnN0IGNhbmNlbFRhc2tEZWxldGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgICAgICcudGFzay1kZWxldGUgPiBmb3JtID4gYnV0dG9uW3R5cGU9XCJjbG9zZVwiXScsXG4gICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgY29uZmlybVRhc2tEZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICBUYXNrTW9kdWxlLmRlbGV0ZVRhc2tCeUlkKGVsZW1lbnQuaWQpO1xuICAgICAgICAgICAgICAgIERPTU1vZHVsZS5jcmVhdGVEaWFsb2dzLmhhbmRsZUNsb3NlQW5pbWF0aW9uKFxuICAgICAgICAgICAgICAgICAgY29uZmlybVRhc2tEZWxldGVGb3JtLFxuICAgICAgICAgICAgICAgICAgY29uZmlybVRhc2tEZWxldGVEaWFsb2csXG4gICAgICAgICAgICAgICAgICBcInN1Ym1pdFwiLFxuICAgICAgICAgICAgICAgICAgY29uZmlybVRhc2tEZWxldGVGb3JtLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgRE9NTW9kdWxlLmNyZWF0ZVJpZ2h0RGl2LmNyZWF0ZVRhc2tzKFxuICAgICAgICAgICAgICAgICAgVGFza01vZHVsZS5nZXRQcm9qZWN0VGFza3MoXG4gICAgICAgICAgICAgICAgICAgIFRhc2tNb2R1bGUuZ2V0QWN0aXZlUHJvamVjdCgpLFxuICAgICAgICAgICAgICAgICAgICBUYXNrTW9kdWxlLmdldFRhc2tzRnJvbUFjdGl2ZVZpZXcoKSxcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgZnVuY3Rpb24gaGFuZGxlQ2FuY2VsVGFza0RlbGV0ZSgpIHtcbiAgICAgICAgICAgICAgICBET01Nb2R1bGUuY3JlYXRlRGlhbG9ncy5oYW5kbGVDbG9zZUFuaW1hdGlvbihcbiAgICAgICAgICAgICAgICAgIGNvbmZpcm1UYXNrRGVsZXRlRm9ybSxcbiAgICAgICAgICAgICAgICAgIGNvbmZpcm1UYXNrRGVsZXRlRGlhbG9nLFxuICAgICAgICAgICAgICAgICAgXCJzdWJtaXRcIixcbiAgICAgICAgICAgICAgICAgIGNvbmZpcm1UYXNrRGVsZXRlRm9ybSxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGNhbmNlbFRhc2tEZWxldGVCdXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgICAgIFwiY2xpY2tcIixcbiAgICAgICAgICAgICAgICAgIGhhbmRsZUNhbmNlbFRhc2tEZWxldGUsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGNhbmNlbFRhc2tEZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICAgICBcImNsaWNrXCIsXG4gICAgICAgICAgICAgICAgaGFuZGxlQ2FuY2VsVGFza0RlbGV0ZSxcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChmaWVsZC5kaXZfY2xhc3MgPT0gXCJ0YXNrLWVkaXQtYnV0dG9uXCIpIHtcbiAgICAgICAgICAgIHRhc2tGaWVsZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICBET01Nb2R1bGUuY3JlYXRlRGlhbG9ncy5lZGl0VGFza0RpYWxvZ0hhbmRsZXIoZWxlbWVudC5pZCk7XG4gICAgICAgICAgICAgIGNvbnN0IGVkaXRUYXNrRGlhbG9nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lZGl0LXRhc2tcIik7XG4gICAgICAgICAgICAgIGVkaXRUYXNrRGlhbG9nLnNob3dNb2RhbCgpO1xuICAgICAgICAgICAgICBlZGl0VGFza0RpYWxvZy5jbGFzc0xpc3QuYWRkKFwiZGlzcGxheWVkXCIpO1xuICAgICAgICAgICAgICBlZGl0VGFza0RpYWxvZy5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGFza0ZpZWxkLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGZpZWxkLmNvbG9yO1xuICAgICAgICAgIHRhc2tMaW5lSXRlbVJpZ2h0U2VjdGlvbi5hcHBlbmQodGFza0ZpZWxkKTtcbiAgICAgICAgICBpZiAoZmllbGQuY2hpbGRfZWxlbWVudHMpIHtcbiAgICAgICAgICAgIGZpZWxkLmNoaWxkX2VsZW1lbnRzLmZvckVhY2goKGNoaWxkX2VsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgY2hpbGRfZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgY2hpbGRfZGl2LmNsYXNzTGlzdC5hZGQoY2hpbGRfZWxlbWVudC5kaXZfY2xhc3MpO1xuICAgICAgICAgICAgICBjaGlsZF9kaXYudGV4dENvbnRlbnQgPSBjaGlsZF9lbGVtZW50LnRleHRDb250ZW50O1xuICAgICAgICAgICAgICBjaGlsZF9kaXYuc3R5bGUuY29sb3IgPSBjaGlsZF9lbGVtZW50LmNvbG9yO1xuICAgICAgICAgICAgICBjaGlsZF9kaXYuc3R5bGUuYm9yZGVyQ29sb3IgPSBjaGlsZF9lbGVtZW50LmNvbG9yO1xuICAgICAgICAgICAgICB0YXNrRmllbGQuYXBwZW5kKGNoaWxkX2Rpdik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0YXNrRmllbGQuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICAgICAgICB9LCAyMCAqIHN1Yl9jb3VudGVyKTtcbiAgICAgICAgICBzdWJfY291bnRlciArPSAxO1xuICAgICAgICB9KTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGFza0xpbmVJdGVtLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICAgIH0sIDgwICogY291bnRlcik7XG4gICAgICAgIGNvdW50ZXIgKz0gMTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0YXNrTGluZUl0ZW1EaXZpZGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gICAgICAgIH0sIDEwMCAqIGNvdW50ZXIpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNyZWF0ZVN0cnVjdHVyZSxcbiAgICAgIGNyZWF0ZVRhc2tzLFxuICAgIH07XG4gIH0pKCk7XG5cbiAgY29uc3QgY3JlYXRlRm9vdGVyRGl2ID0gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVTdHJ1Y3R1cmUoKSB7XG4gICAgICBjb25zdCByaWdodERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucmlnaHRcIik7XG4gICAgICBjb25zdCBmb290ZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZm9vdGVyRGl2LmNsYXNzTGlzdC5hZGQoXCJmb290ZXJcIik7XG4gICAgICByaWdodERpdi5hcHBlbmQoZm9vdGVyRGl2KTtcblxuICAgICAgY29uc3QgZm9vdGVyUmlnaHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgZm9vdGVyUmlnaHREaXYuY2xhc3NMaXN0LmFkZChcImZvb3Rlci1yaWdodFwiKTtcbiAgICAgIGZvb3RlckRpdi5hcHBlbmQoZm9vdGVyUmlnaHREaXYpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbnMoKSB7XG4gICAgICBjb25zdCBsZWZ0U2Vjb25kU2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubGVmdC1zZWNvbmQtc2VjdGlvblwiKTtcbiAgICAgIGNvbnN0IGZvb3RlclJpZ2h0RGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb290ZXItcmlnaHRcIik7XG5cbiAgICAgIGNvbnN0IGNyZWF0ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgY3JlYXRlUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiY3JlYXRlLXByb2plY3RcIik7XG4gICAgICBsZWZ0U2Vjb25kU2VjdGlvbi5hcHBlbmQoY3JlYXRlUHJvamVjdEJ1dHRvbik7XG4gICAgICBjcmVhdGVQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3REaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ldy1wcm9qZWN0XCIpO1xuICAgICAgICBuZXdQcm9qZWN0RGlhbG9nLnNob3dNb2RhbCgpO1xuICAgICAgICBuZXdQcm9qZWN0RGlhbG9nLmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5ZWRcIik7XG4gICAgICAgIG5ld1Byb2plY3REaWFsb2cuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBjcmVhdGVQcm9qZWN0QnV0dG9uSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjcmVhdGVQcm9qZWN0QnV0dG9uSWNvbi5pbm5lckhUTUwgPSBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT5wbHVzPC90aXRsZT48cGF0aCBkPVwiTTE5LDEzSDEzVjE5SDExVjEzSDVWMTFIMTFWNUgxM1YxMUgxOVYxM1pcIiAvPjwvc3ZnPmA7XG4gICAgICBjcmVhdGVQcm9qZWN0QnV0dG9uLmFwcGVuZChjcmVhdGVQcm9qZWN0QnV0dG9uSWNvbik7XG5cbiAgICAgIGNvbnN0IGNyZWF0ZVByb2plY3RCdXR0b25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjcmVhdGVQcm9qZWN0QnV0dG9uTGFiZWwudGV4dENvbnRlbnQgPSBcIkFkZCBQcm9qZWN0XCI7XG4gICAgICBjcmVhdGVQcm9qZWN0QnV0dG9uLmFwcGVuZChjcmVhdGVQcm9qZWN0QnV0dG9uTGFiZWwpO1xuXG4gICAgICBjb25zdCBjcmVhdGVUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNyZWF0ZVRhc2tCdXR0b24uY2xhc3NMaXN0LmFkZChcImNyZWF0ZS10YXNrXCIpO1xuICAgICAgZm9vdGVyUmlnaHREaXYuYXBwZW5kKGNyZWF0ZVRhc2tCdXR0b24pO1xuXG4gICAgICBjcmVhdGVUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1Rhc2tEaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm5ldy10YXNrXCIpO1xuICAgICAgICBuZXdUYXNrRGlhbG9nLnNob3dNb2RhbCgpO1xuICAgICAgICBuZXdUYXNrRGlhbG9nLmNsYXNzTGlzdC5hZGQoXCJkaXNwbGF5ZWRcIik7XG4gICAgICAgIG5ld1Rhc2tEaWFsb2cuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBjcmVhdGVUYXNrQnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNyZWF0ZVRhc2tCdXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImNyZWF0ZS10YXNrLWNvbnRhaW5lclwiKTtcbiAgICAgIGNyZWF0ZVRhc2tCdXR0b24uYXBwZW5kKGNyZWF0ZVRhc2tCdXR0b25Db250YWluZXIpO1xuXG4gICAgICBjb25zdCBjcmVhdGVUYXNrQnV0dG9uSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjcmVhdGVUYXNrQnV0dG9uSWNvbi5pbm5lckhUTUwgPSBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjx0aXRsZT5wbHVzPC90aXRsZT48cGF0aCBkPVwiTTE5LDEzSDEzVjE5SDExVjEzSDVWMTFIMTFWNUgxM1YxMUgxOVYxM1pcIiAvPjwvc3ZnPmA7XG4gICAgICBjcmVhdGVUYXNrQnV0dG9uQ29udGFpbmVyLmFwcGVuZChjcmVhdGVUYXNrQnV0dG9uSWNvbik7XG5cbiAgICAgIGNvbnN0IGNyZWF0ZVRhc2tCdXR0b25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjcmVhdGVUYXNrQnV0dG9uTGFiZWwudGV4dENvbnRlbnQgPSBcIkFkZCBUYXNrXCI7XG4gICAgICBjcmVhdGVUYXNrQnV0dG9uQ29udGFpbmVyLmFwcGVuZChjcmVhdGVUYXNrQnV0dG9uTGFiZWwpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgY3JlYXRlU3RydWN0dXJlLFxuICAgICAgY3JlYXRlQnV0dG9ucyxcbiAgICB9O1xuICB9KSgpO1xuXG4gIHJldHVybiB7XG4gICAgY3JlYXRlTWFpbkRpdixcbiAgICBjcmVhdGVEaWFsb2dzLFxuICAgIGNyZWF0ZUxlZnREaXYsXG4gICAgY3JlYXRlUmlnaHREaXYsXG4gICAgY3JlYXRlRm9vdGVyRGl2LFxuICB9O1xufSkoKTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVzZS1iZWZvcmUtZGVmaW5lICovXG5leHBvcnQge1xuICBzd2l0Y2hMb2NhbFN0b3JhZ2VTdGF0dXMsXG4gIHNhdmVUYXNrVG9Mb2NhbFN0b3JhZ2UsXG4gIGRlbGV0ZVRhc2tGcm9tTG9jYWxTdG9yYWdlLFxuICBjaGVja1Rhc2tzSW5Mb2NhbFN0b3JhZ2UsXG4gIHNhdmVQcm9qZWN0VG9Mb2NhbFN0b3JhZ2UsXG4gIGRlbGV0ZVByb2plY3RGcm9tTG9jYWxTdG9yYWdlLFxuICBjaGVja1Byb2plY3RzSW5Mb2NhbFN0b3JhZ2UsXG59O1xuXG4vLyBMb2NhbCBTdG9yYWdlIExvZ2ljXG5jb25zdCBsb2NhbFN0b3JhZ2VTdGF0dXMgPSB7XG4gIGxvYWRlZDogXCJmYWxzZVwiLFxufTtcblxuZnVuY3Rpb24gc3dpdGNoTG9jYWxTdG9yYWdlU3RhdHVzKCkge1xuICBpZiAoc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSkge1xuICAgIGlmIChsb2NhbFN0b3JhZ2VTdGF0dXMubG9hZGVkID09PSBcImZhbHNlXCIpIHtcbiAgICAgIGxvY2FsU3RvcmFnZVN0YXR1cy5sb2FkZWQgPSBcInRydWVcIjtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwibG9jYWxTdG9yYWdlTG9hZGVkXCIsIGxvY2FsU3RvcmFnZVN0YXR1cy5sb2FkZWQpO1xuICAgIH1cbiAgfVxufVxuXG4vLyBMb2NhbCBzdG9yYWdlIGZvciB0YXNrc1xuZnVuY3Rpb24gc2F2ZVRhc2tUb0xvY2FsU3RvcmFnZSh0YXNrT2JqZWN0KSB7XG4gIGlmIChzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpKSB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYHRhc2sgJHt0YXNrT2JqZWN0LmlkfWAsIEpTT04uc3RyaW5naWZ5KHRhc2tPYmplY3QpKTtcbiAgICAvLyBjb25zb2xlLmxvZyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrICcgKyB0YXNrT2JqZWN0LmlkKSkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVRhc2tGcm9tTG9jYWxTdG9yYWdlKHRhc2tPYmplY3QpIHtcbiAgaWYgKHN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIikpIHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShgdGFzayAke3Rhc2tPYmplY3QuaWR9YCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tUYXNrc0luTG9jYWxTdG9yYWdlKCkge1xuICBpZiAoc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSkge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsU3RvcmFnZUxvYWRlZFwiKSkge1xuICAgICAgY29uc3QgdGFza3MgPSBbXTtcblxuICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC52YWx1ZXMobG9jYWxTdG9yYWdlKTtcbiAgICAgIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcnNlZEtleSA9IEpTT04ucGFyc2Uoa2V5KTtcbiAgICAgICAgaWYgKHBhcnNlZEtleS50aXRsZSkge1xuICAgICAgICAgIHRhc2tzLnB1c2gocGFyc2VkS2V5KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gdGFza3M7XG4gICAgfVxuICB9XG59XG5cbi8vIExvY2FsIHNvdHJhZ2UgZm9yIHByb2plY3RzXG5mdW5jdGlvbiBzYXZlUHJvamVjdFRvTG9jYWxTdG9yYWdlKHByb2plY3RPYmplY3QpIHtcbiAgaWYgKHN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIikpIHtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgIGBwcm9qZWN0ICR7cHJvamVjdE9iamVjdC5pZH1gLFxuICAgICAgSlNPTi5zdHJpbmdpZnkocHJvamVjdE9iamVjdCksXG4gICAgKTtcbiAgICAvLyBjb25zb2xlLmxvZyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrICcgKyB0YXNrT2JqZWN0LmlkKSkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVByb2plY3RGcm9tTG9jYWxTdG9yYWdlKHByb2plY3RPYmplY3QpIHtcbiAgaWYgKHN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIikpIHtcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShgcHJvamVjdCAke3Byb2plY3RPYmplY3QuaWR9YCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tQcm9qZWN0c0luTG9jYWxTdG9yYWdlKCkge1xuICBpZiAoc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSkge1xuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImxvY2FsU3RvcmFnZUxvYWRlZFwiKSkge1xuICAgICAgY29uc3QgcHJvamVjdHMgPSBbXTtcblxuICAgICAgY29uc3Qga2V5cyA9IE9iamVjdC52YWx1ZXMobG9jYWxTdG9yYWdlKTtcbiAgICAgIGtleXMuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcnNlZEtleSA9IEpTT04ucGFyc2Uoa2V5KTtcbiAgICAgICAgaWYgKHBhcnNlZEtleS5uYW1lKSB7XG4gICAgICAgICAgcHJvamVjdHMucHVzaChwYXJzZWRLZXkpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHJldHVybiBwcm9qZWN0cztcbiAgICB9XG4gIH1cbn1cblxuLy8gQ2hlY2sgaWYgbG9jYWwgc3RvcmFnZSBpcyBhdmFpbGFibGVcbmZ1bmN0aW9uIHN0b3JhZ2VBdmFpbGFibGUodHlwZSkge1xuICBsZXQgc3RvcmFnZTtcbiAgdHJ5IHtcbiAgICBzdG9yYWdlID0gd2luZG93W3R5cGVdO1xuICAgIGNvbnN0IHggPSBcIl9fc3RvcmFnZV90ZXN0X19cIjtcbiAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XG4gICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGUgaW5zdGFuY2VvZiBET01FeGNlcHRpb24gJiZcbiAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgIChlLmNvZGUgPT09IDIyIHx8XG4gICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgZS5jb2RlID09PSAxMDE0IHx8XG4gICAgICAgIC8vIHRlc3QgbmFtZSBmaWVsZCB0b28sIGJlY2F1c2UgY29kZSBtaWdodCBub3QgYmUgcHJlc2VudFxuICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgIGUubmFtZSA9PT0gXCJRdW90YUV4Y2VlZGVkRXJyb3JcIiB8fFxuICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgIGUubmFtZSA9PT0gXCJOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRFwiKSAmJlxuICAgICAgLy8gYWNrbm93bGVkZ2UgUXVvdGFFeGNlZWRlZEVycm9yIG9ubHkgaWYgdGhlcmUncyBzb21ldGhpbmcgYWxyZWFkeSBzdG9yZWRcbiAgICAgIHN0b3JhZ2UgJiZcbiAgICAgIHN0b3JhZ2UubGVuZ3RoICE9PSAwXG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgY2hlY2tQcm9qZWN0c0luTG9jYWxTdG9yYWdlLFxuICBkZWxldGVQcm9qZWN0RnJvbUxvY2FsU3RvcmFnZSxcbiAgc2F2ZVByb2plY3RUb0xvY2FsU3RvcmFnZSxcbn0gZnJvbSBcIi4vTG9jYWxTdG9yYWdlTW9kdWxlXCI7XG5cbmV4cG9ydCB7IFByb2plY3RNb2R1bGUgfTtcblxuLy8gUHJvamVjdCBtb2R1bGVcbmNvbnN0IFByb2plY3RNb2R1bGUgPSAoZnVuY3Rpb24gKCkge1xuICBsZXQgcHJvamVjdHMgPSBbXTtcblxuICBjb25zdCBzdG9yZWRQcm9qZWN0cyA9IGNoZWNrUHJvamVjdHNJbkxvY2FsU3RvcmFnZSgpO1xuICBpZiAoc3RvcmVkUHJvamVjdHMpIHtcbiAgICBwcm9qZWN0cyA9IHN0b3JlZFByb2plY3RzO1xuICB9IGVsc2Uge1xuICAgIC8vIE1vY2sgcHJvamVjdHNcbiAgICBwcm9qZWN0cyA9IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIG5hbWU6IFwiU3BvcnRcIixcbiAgICAgICAgY29sb3I6IFwiI2RhYjhkZVwiLFxuICAgICAgICBhY3RpdmU6IFwiZmFsc2VcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAyLFxuICAgICAgICBuYW1lOiBcIk1hdGhcIixcbiAgICAgICAgY29sb3I6IFwiIzkzYzdiNFwiLFxuICAgICAgICBhY3RpdmU6IFwiZmFsc2VcIixcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGlkOiAzLFxuICAgICAgICBuYW1lOiBcIlByb2dyYW1taW5nXCIsXG4gICAgICAgIGNvbG9yOiBcIiNlOGNlYjVcIixcbiAgICAgICAgYWN0aXZlOiBcImZhbHNlXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogNCxcbiAgICAgICAgbmFtZTogXCJMZWlzdXJlXCIsXG4gICAgICAgIGNvbG9yOiBcIiNhNmI1ZmZcIixcbiAgICAgICAgYWN0aXZlOiBcImZhbHNlXCIsXG4gICAgICB9LFxuICAgIF07XG5cbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICBzYXZlUHJvamVjdFRvTG9jYWxTdG9yYWdlKHByb2plY3QpO1xuICAgIH0pO1xuICB9XG5cbiAgbGV0IHByb2plY3RzQ291bnQgPSBwcm9qZWN0cy5sZW5ndGg7XG5cbiAgLy8gQWRkIG5ldyBwcm9qZWN0XG4gIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QobmFtZSwgY29sb3IpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0ge307XG4gICAgcHJvamVjdHNDb3VudCArPSAxO1xuICAgIHByb2plY3QuaWQgPSBwcm9qZWN0c0NvdW50O1xuICAgIHByb2plY3QubmFtZSA9IG5hbWU7XG4gICAgcHJvamVjdC5jb2xvciA9IGNvbG9yO1xuXG4gICAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgICBzYXZlUHJvamVjdFRvTG9jYWxTdG9yYWdlKHByb2plY3QpO1xuXG4gICAgcmV0dXJuIHByb2plY3Q7XG4gIH1cblxuICAvLyBSZXRyaWV2ZSBsaXN0IG9mIHByb2plY3RzIChvYmplY3RzKVxuICBmdW5jdGlvbiBnZXRQcm9qZWN0T2JqZWN0cygpIHtcbiAgICByZXR1cm4gcHJvamVjdHMuc2xpY2UoKTtcbiAgfVxuXG4gIC8vIFJldHJpZXZlIGxpc3Qgb2YgcHJvamVjdCAodmFsdWVzKVxuICBmdW5jdGlvbiBnZXRQcm9qZWN0VmFsdWVzKCkge1xuICAgIGNvbnN0IHByb2plY3RWYWx1ZXMgPSBbXTtcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwKSA9PiB7XG4gICAgICBwcm9qZWN0VmFsdWVzLnB1c2gocC5uYW1lKTtcbiAgICB9KTtcblxuICAgIHJldHVybiBwcm9qZWN0VmFsdWVzO1xuICB9XG5cbiAgLy8gUmV0cmlldmUgdGhlIGlkIG9mIGEgcHJvamVjdCB0aGF0IG1hdGNoZXMgdGhlIHByb3ZpZGVkIG5hbWVcbiAgZnVuY3Rpb24gZmluZElkQnlOYW1lKG5hbWUpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5uYW1lID09PSBuYW1lKTtcbiAgICByZXR1cm4gcHJvamVjdCA/IHByb2plY3QuaWQgOiBudWxsO1xuICB9XG5cbiAgLy8gUmV0cmlldmUgdGhlIGNvbG9yIG9mIGEgcHJvamVjdCB0aGF0IG1hdGNoZXMgdGhlIHByb3ZpZGVkIG5hbWVcbiAgZnVuY3Rpb24gZmluZENvbG9yQnlOYW1lKG5hbWUpIHtcbiAgICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5uYW1lID09PSBuYW1lKTtcbiAgICByZXR1cm4gcHJvamVjdCA/IHByb2plY3QuY29sb3IgOiBudWxsO1xuICB9XG5cbiAgLy8gRGVsZXRlIHByb2plY3RcbiAgZnVuY3Rpb24gZGVsZXRlUHJvamVjdChwcm9qZWN0SWQpIHtcbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0T2JqZWN0KSA9PiB7XG4gICAgICBpZiAocHJvamVjdE9iamVjdC5pZCA9PT0gcHJvamVjdElkKSB7XG4gICAgICAgIGRlbGV0ZVByb2plY3RGcm9tTG9jYWxTdG9yYWdlKHByb2plY3RPYmplY3QpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcHJvamVjdHMgPSBwcm9qZWN0cy5maWx0ZXIoKHByb2plY3QpID0+IHByb2plY3QuaWQgIT09IHByb2plY3RJZCk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNyZWF0ZVByb2plY3QsXG4gICAgZ2V0UHJvamVjdE9iamVjdHMsXG4gICAgZ2V0UHJvamVjdFZhbHVlcyxcbiAgICBmaW5kSWRCeU5hbWUsXG4gICAgZmluZENvbG9yQnlOYW1lLFxuICAgIGRlbGV0ZVByb2plY3QsXG4gIH07XG59KSgpO1xuIiwiaW1wb3J0IGZvcm1hdCBmcm9tIFwiZGF0ZS1mbnMvZm9ybWF0XCI7XG5pbXBvcnQgeyBQcm9qZWN0TW9kdWxlIH0gZnJvbSBcIi4vUHJvamVjdE1vZHVsZVwiO1xuaW1wb3J0IHtcbiAgY2hlY2tUYXNrc0luTG9jYWxTdG9yYWdlLFxuICBkZWxldGVUYXNrRnJvbUxvY2FsU3RvcmFnZSxcbiAgc2F2ZVRhc2tUb0xvY2FsU3RvcmFnZSxcbn0gZnJvbSBcIi4vTG9jYWxTdG9yYWdlTW9kdWxlXCI7XG5cbmV4cG9ydCB7IFRhc2tNb2R1bGUgfTtcblxuLy8gVGFzayBtb2R1bGVcbmNvbnN0IFRhc2tNb2R1bGUgPSAoZnVuY3Rpb24gKCkge1xuICAvLyBUaGlzIHNob3VsZCBiZSBpbiBkaWZmZXJlbnQgbW9kdWxlIChET00gbW9kdWxlIHBlcmhhcHMpXG4gIGxldCBhY3RpdmVfdmlldyA9IFwidG9kYXlcIjtcbiAgbGV0IGFjdGl2ZV9wcm9qZWN0ID0gXCJcIjtcblxuICAvLyBUaGlzIHNob3VsZCBiZSBpbiBkaWZmZXJlbnQgbW9kdWxlIChET00gbW9kdWxlIHBlcmhhcHMpXG4gIGZ1bmN0aW9uIGNoYW5nZUFjdGl2ZVZpZXcodmlldykge1xuICAgIGFjdGl2ZV92aWV3ID0gdmlldztcbiAgfVxuXG4gIC8vIFRoaXMgc2hvdWxkIGJlIGluIGRpZmZlcmVudCBtb2R1bGUgKERPTSBtb2R1bGUgcGVyaGFwcylcbiAgZnVuY3Rpb24gZ2V0QWN0aXZlVmlldygpIHtcbiAgICByZXR1cm4gYWN0aXZlX3ZpZXc7XG4gIH1cblxuICAvLyBUaGlzIHNob3VsZCBiZSBpbiBkaWZmZXJlbnQgbW9kdWxlIChET00gbW9kdWxlIHBlcmhhcHMpXG4gIGZ1bmN0aW9uIGNoYW5nZUFjdGl2ZVByb2plY3QocHJvamVjdCkge1xuICAgIGFjdGl2ZV9wcm9qZWN0ID0gcHJvamVjdDtcbiAgfVxuXG4gIC8vIFRoaXMgc2hvdWxkIGJlIGluIGRpZmZlcmVudCBtb2R1bGUgKERPTSBtb2R1bGUgcGVyaGFwcylcbiAgZnVuY3Rpb24gZ2V0QWN0aXZlUHJvamVjdCgpIHtcbiAgICByZXR1cm4gYWN0aXZlX3Byb2plY3Q7XG4gIH1cblxuICAvLyBSZXRyaWV2ZSB0aGUgb2JqZWN0IHRoYXQgbWF0Y2hlcyB0aGUgcHJvdmlkZWQgSURcbiAgZnVuY3Rpb24gZmluZE9iamVjdEJ5SWQodGFza0lkKSB7XG4gICAgY29uc3QgdGFza09iamVjdCA9IHRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suaWQgPT09IHRhc2tJZCk7XG4gICAgcmV0dXJuIHRhc2tPYmplY3QgfHwgbnVsbDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlbGV0ZVRhc2tCeUlkKHRhc2tJZCkge1xuICAgIHRhc2tzLmZvckVhY2goKHRhc2tPYmplY3QpID0+IHtcbiAgICAgIGlmICh0YXNrT2JqZWN0LmlkID09PSB0YXNrSWQpIHtcbiAgICAgICAgZGVsZXRlVGFza0Zyb21Mb2NhbFN0b3JhZ2UodGFza09iamVjdCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0YXNrcyA9IHRhc2tzLmZpbHRlcigodGFzaykgPT4gdGFzay5pZCAhPT0gdGFza0lkKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRlbGV0ZVRhc2tCeVByb2plY3RJZChwcm9qZWN0SWQpIHtcbiAgICB0YXNrcy5mb3JFYWNoKCh0YXNrT2JqZWN0KSA9PiB7XG4gICAgICBpZiAodGFza09iamVjdC5wcm9qZWN0SWQgPT09IHByb2plY3RJZCkge1xuICAgICAgICBkZWxldGVUYXNrRnJvbUxvY2FsU3RvcmFnZSh0YXNrT2JqZWN0KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRhc2tzID0gdGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLnByb2plY3RJZCAhPT0gcHJvamVjdElkKTtcbiAgfVxuXG4gIC8vIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgLy8gY29uc3QgdG9tb3Jyb3cgPSBuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldFRpbWUoKSArIDI0ICogNjAgKiA2MCAqIDEwMDApO1xuICAvLyBjb25zdCBkYXlBZnRlclRvbW9ycm93ID0gbmV3IERhdGUobmV3IERhdGUoKS5nZXRUaW1lKCkgKyA0OCAqIDYwICogNjAgKiAxMDAwKTtcblxuICBsZXQgdGFza3MgPSBbXTtcblxuICBjb25zdCBzdG9yZWRUYXNrcyA9IGNoZWNrVGFza3NJbkxvY2FsU3RvcmFnZSgpO1xuICBpZiAoc3RvcmVkVGFza3MpIHtcbiAgICB0YXNrcyA9IHN0b3JlZFRhc2tzO1xuICB9IGVsc2Uge1xuICAgIC8vIE1vY2sgcHJvamVjdHNcbiAgICB0YXNrcyA9IFtcbiAgICAgIHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIHByb2plY3RJZDogMSxcbiAgICAgICAgcHJvamVjdE5hbWU6IFwiU3BvcnRcIixcbiAgICAgICAgcHJvamVjdENvbG9yOiBcIiNkYWI4ZGVcIixcbiAgICAgICAgdGl0bGU6IFwiSm9nZ2luZyBpbiB0aGUgcGFya1wiLFxuICAgICAgICBub3RlczogXCJBaW0gZm9yIGEgNSBrbSBydW4uIEZvY3VzIG9uIGJyZWF0aGluZyB0ZWNobmlxdWVzLlwiLFxuICAgICAgICBwcmlvcml0eTogXCJIaWdoXCIsXG4gICAgICAgIGRhdGU6IGZvcm1hdChuZXcgRGF0ZSgpLCBcInl5eXktTU0tZGRcIiksXG4gICAgICAgIGNvbXBsZXRlZDogXCJ0cnVlXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMixcbiAgICAgICAgcHJvamVjdElkOiAyLFxuICAgICAgICBwcm9qZWN0TmFtZTogXCJNYXRoXCIsXG4gICAgICAgIHByb2plY3RDb2xvcjogXCIjOTNjN2I0XCIsXG4gICAgICAgIHRpdGxlOiBcIlNvbHZpbmcgTGluZWFyIEVxdWF0aW9uc1wiLFxuICAgICAgICBub3RlczogXCJXb3JrIHRocm91Z2ggZXhlcmNpc2VzIDMuMSB0byAzLjUgaW4gdGhlIHRleHRib29rLlwiLFxuICAgICAgICBwcmlvcml0eTogXCJNZWRpdW1cIixcbiAgICAgICAgZGF0ZTogZm9ybWF0KG5ldyBEYXRlKCksIFwieXl5eS1NTS1kZFwiKSxcbiAgICAgICAgY29tcGxldGVkOiBcImZhbHNlXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogMyxcbiAgICAgICAgcHJvamVjdElkOiAzLFxuICAgICAgICBwcm9qZWN0TmFtZTogXCJQcm9ncmFtbWluZ1wiLFxuICAgICAgICBwcm9qZWN0Q29sb3I6IFwiI2U4Y2ViNVwiLFxuICAgICAgICB0aXRsZTogXCJBbGdvcml0aG0gT3B0aW1pemF0aW9uXCIsXG4gICAgICAgIG5vdGVzOlxuICAgICAgICAgIFwiUmVmYWN0b3IgY29kZSBmb3IgZWZmaWNpZW5jeS4gRm9jdXMgb24gcmVkdWNpbmcgdGltZSBjb21wbGV4aXR5LlwiLFxuICAgICAgICBwcmlvcml0eTogXCJNZWRpdW1cIixcbiAgICAgICAgZGF0ZTogZm9ybWF0KG5ldyBEYXRlKCksIFwieXl5eS1NTS1kZFwiKSxcbiAgICAgICAgY29tcGxldGVkOiBcImZhbHNlXCIsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpZDogNCxcbiAgICAgICAgcHJvamVjdElkOiA0LFxuICAgICAgICBwcm9qZWN0TmFtZTogXCJMZWlzdXJlXCIsXG4gICAgICAgIHByb2plY3RDb2xvcjogXCIjYTZiNWZmXCIsXG4gICAgICAgIHRpdGxlOiBcIlBhaW50aW5nIGEgU2NlbmVyeVwiLFxuICAgICAgICBub3RlczogXCJHYXRoZXIgYXJ0IHN1cHBsaWVzIGFuZCBzdGFydCBwYWludGluZyBhIGxhbmRzY2FwZS5cIixcbiAgICAgICAgcHJpb3JpdHk6IFwiTG93XCIsXG4gICAgICAgIGRhdGU6IGZvcm1hdChuZXcgRGF0ZSgpLCBcInl5eXktTU0tZGRcIiksXG4gICAgICAgIGNvbXBsZXRlZDogXCJmYWxzZVwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDUsXG4gICAgICAgIHByb2plY3RJZDogMSxcbiAgICAgICAgcHJvamVjdE5hbWU6IFwiU3BvcnRcIixcbiAgICAgICAgcHJvamVjdENvbG9yOiBcIiNkYWI4ZGVcIixcbiAgICAgICAgdGl0bGU6IFwiTW9ybmluZyBZb2dhIFNlc3Npb25cIixcbiAgICAgICAgbm90ZXM6IFwiUHJhY3RpY2Ugc3VuIHNhbHV0YXRpb25zIGFuZCBtZWRpdGF0aW9uIGZvciAyMCBtaW51dGVzLlwiLFxuICAgICAgICBwcmlvcml0eTogXCJNZWRpdW1cIixcbiAgICAgICAgZGF0ZTogZm9ybWF0KFxuICAgICAgICAgIG5ldyBEYXRlKG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgMjQgKiA2MCAqIDYwICogMTAwMCksXG4gICAgICAgICAgXCJ5eXl5LU1NLWRkXCIsXG4gICAgICAgICksXG4gICAgICAgIGNvbXBsZXRlZDogXCJmYWxzZVwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDYsXG4gICAgICAgIHByb2plY3RJZDogMixcbiAgICAgICAgcHJvamVjdE5hbWU6IFwiTWF0aFwiLFxuICAgICAgICBwcm9qZWN0Q29sb3I6IFwiIzkzYzdiNFwiLFxuICAgICAgICB0aXRsZTogXCJVbmRlcnN0YW5kaW5nIENhbGN1bHVzIENvbmNlcHRzXCIsXG4gICAgICAgIG5vdGVzOlxuICAgICAgICAgIFwiUmV2aWV3IGRlcml2YXRpdmVzIGFuZCBpbnRlZ3JhbHMgdG8gZ3Jhc3AgZnVuZGFtZW50YWwgY29uY2VwdHMuXCIsXG4gICAgICAgIHByaW9yaXR5OiBcIkhpZ2hcIixcbiAgICAgICAgZGF0ZTogZm9ybWF0KFxuICAgICAgICAgIG5ldyBEYXRlKG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgMjQgKiA2MCAqIDYwICogMTAwMCksXG4gICAgICAgICAgXCJ5eXl5LU1NLWRkXCIsXG4gICAgICAgICksXG4gICAgICAgIGNvbXBsZXRlZDogXCJmYWxzZVwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDcsXG4gICAgICAgIHByb2plY3RJZDogMyxcbiAgICAgICAgcHJvamVjdE5hbWU6IFwiUHJvZ3JhbW1pbmdcIixcbiAgICAgICAgcHJvamVjdENvbG9yOiBcIiNlOGNlYjVcIixcbiAgICAgICAgdGl0bGU6IFwiRGVidWdnaW5nIENvbXBsZXggRnVuY3Rpb25zXCIsXG4gICAgICAgIG5vdGVzOlxuICAgICAgICAgIFwiSWRlbnRpZnkgYW5kIGZpeCBidWdzIGluIHRoZSBjb3JlIGZ1bmN0aW9uYWxpdGllcyBvZiB0aGUgYXBwbGljYXRpb24uXCIsXG4gICAgICAgIHByaW9yaXR5OiBcIkhpZ2hcIixcbiAgICAgICAgZGF0ZTogZm9ybWF0KFxuICAgICAgICAgIG5ldyBEYXRlKG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgNDggKiA2MCAqIDYwICogMTAwMCksXG4gICAgICAgICAgXCJ5eXl5LU1NLWRkXCIsXG4gICAgICAgICksXG4gICAgICAgIGNvbXBsZXRlZDogXCJmYWxzZVwiLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgaWQ6IDgsXG4gICAgICAgIHByb2plY3RJZDogNCxcbiAgICAgICAgcHJvamVjdE5hbWU6IFwiTGVpc3VyZVwiLFxuICAgICAgICBwcm9qZWN0Q29sb3I6IFwiI2E2YjVmZlwiLFxuICAgICAgICB0aXRsZTogXCJDb29raW5nIGEgTmV3IFJlY2lwZVwiLFxuICAgICAgICBub3RlczogXCJUcnkgb3V0IGEgbmV3IHJlY2lwZSBmb3IgYSB0aHJlZS1jb3Vyc2UgbWVhbC5cIixcbiAgICAgICAgcHJpb3JpdHk6IFwiTWVkaXVtXCIsXG4gICAgICAgIGRhdGU6IGZvcm1hdChcbiAgICAgICAgICBuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldFRpbWUoKSArIDI0ICogNjAgKiA2MCAqIDEwMDApLFxuICAgICAgICAgIFwieXl5eS1NTS1kZFwiLFxuICAgICAgICApLFxuICAgICAgICBjb21wbGV0ZWQ6IFwiZmFsc2VcIixcbiAgICAgIH0sXG4gICAgICAvLyB7XG4gICAgICAvLyAgICAgaWQ6IDM1LFxuICAgICAgLy8gICAgIHByb2plY3RJZDogMSxcbiAgICAgIC8vICAgICBwcm9qZWN0TmFtZTogJ1Nwb3J0JyxcbiAgICAgIC8vICAgICBwcm9qZWN0Q29sb3I6ICcjZGFiOGRlJyxcbiAgICAgIC8vICAgICB0aXRsZTogJ1N3aW1taW5nIFByYWN0aWNlJyxcbiAgICAgIC8vICAgICBub3RlczogJ0ZvY3VzIG9uIGltcHJvdmluZyBzdHJva2UgdGVjaG5pcXVlcyBhbmQgZW5kdXJhbmNlIGluIHRoZSBwb29sLicsXG4gICAgICAvLyAgICAgcHJpb3JpdHk6ICdIaWdoJyxcbiAgICAgIC8vICAgICBkYXRlOiBmb3JtYXQobmV3IERhdGUobmV3IERhdGUoKS5nZXRUaW1lKCkgKyAyNCAqIDYwICogNjAgKiAxMDAwKSwgJ3l5eXktTU0tZGQnKSxcbiAgICAgIC8vICAgICBjb21wbGV0ZWQ6ICdmYWxzZScsXG4gICAgICAvLyB9LFxuICAgICAgLy8ge1xuICAgICAgLy8gICAgIGlkOiAzNixcbiAgICAgIC8vICAgICBwcm9qZWN0SWQ6IDIsXG4gICAgICAvLyAgICAgcHJvamVjdE5hbWU6ICdNYXRoJyxcbiAgICAgIC8vICAgICBwcm9qZWN0Q29sb3I6ICcjOTNjN2I0JyxcbiAgICAgIC8vICAgICB0aXRsZTogJ01hdGhlbWF0aWNzIFByb2JsZW0gU29sdmluZycsXG4gICAgICAvLyAgICAgbm90ZXM6ICdTb2x2ZSBjb21wbGV4IG1hdGhlbWF0aWNhbCBwcm9ibGVtcyBpbnZvbHZpbmcgYWxnZWJyYSBhbmQgZ2VvbWV0cnkuJyxcbiAgICAgIC8vICAgICBwcmlvcml0eTogJ01lZGl1bScsXG4gICAgICAvLyAgICAgZGF0ZTogZm9ybWF0KG5ldyBEYXRlKG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgNDggKiA2MCAqIDYwICogMTAwMCksICd5eXl5LU1NLWRkJyksXG4gICAgICAvLyAgICAgY29tcGxldGVkOiAnZmFsc2UnLFxuICAgICAgLy8gfSxcbiAgICAgIC8vIHtcbiAgICAgIC8vICAgICBpZDogMzcsXG4gICAgICAvLyAgICAgcHJvamVjdElkOiAzLFxuICAgICAgLy8gICAgIHByb2plY3ROYW1lOiAnUHJvZ3JhbW1pbmcnLFxuICAgICAgLy8gICAgIHByb2plY3RDb2xvcjogJyNlOGNlYjUnLFxuICAgICAgLy8gICAgIHRpdGxlOiAnTGVhcm5pbmcgTmV3IENvZGluZyBMYW5ndWFnZXMnLFxuICAgICAgLy8gICAgIG5vdGVzOiAnU3RhcnQgbGVhcm5pbmcgUHl0aG9uIGFuZCBpdHMgbGlicmFyaWVzIGZvciBkYXRhIGFuYWx5c2lzLicsXG4gICAgICAvLyAgICAgcHJpb3JpdHk6ICdIaWdoJyxcbiAgICAgIC8vICAgICBkYXRlOiBmb3JtYXQobmV3IERhdGUobmV3IERhdGUoKS5nZXRUaW1lKCkgKyA0OCAqIDYwICogNjAgKiAxMDAwKSwgJ3l5eXktTU0tZGQnKSxcbiAgICAgIC8vICAgICBjb21wbGV0ZWQ6ICdmYWxzZScsXG4gICAgICAvLyB9LFxuICAgICAgLy8ge1xuICAgICAgLy8gICAgIGlkOiAzOCxcbiAgICAgIC8vICAgICBwcm9qZWN0SWQ6IDQsXG4gICAgICAvLyAgICAgcHJvamVjdE5hbWU6ICdMZWlzdXJlJyxcbiAgICAgIC8vICAgICBwcm9qZWN0Q29sb3I6ICcjYTZiNWZmJyxcbiAgICAgIC8vICAgICB0aXRsZTogJ0dhcmRlbmluZyBEYXknLFxuICAgICAgLy8gICAgIG5vdGVzOiAnUGxhbnQgbmV3IGZsb3dlcnMgYW5kIGhlcmJzIGluIHRoZSBnYXJkZW4uJyxcbiAgICAgIC8vICAgICBwcmlvcml0eTogJ0xvdycsXG4gICAgICAvLyAgICAgZGF0ZTogZm9ybWF0KG5ldyBEYXRlKCksICd5eXl5LU1NLWRkJyksXG4gICAgICAvLyAgICAgY29tcGxldGVkOiAnZmFsc2UnLFxuICAgICAgLy8gfSxcbiAgICAgIC8vIHtcbiAgICAgIC8vICAgICBpZDogMzksXG4gICAgICAvLyAgICAgcHJvamVjdElkOiAxLFxuICAgICAgLy8gICAgIHByb2plY3ROYW1lOiAnU3BvcnQnLFxuICAgICAgLy8gICAgIHByb2plY3RDb2xvcjogJyNkYWI4ZGUnLFxuICAgICAgLy8gICAgIHRpdGxlOiAnQ3ljbGluZyBBZHZlbnR1cmUnLFxuICAgICAgLy8gICAgIG5vdGVzOiAnUGxhbiBhbmQgZW1iYXJrIG9uIGEgc2NlbmljIGN5Y2xpbmcgcm91dGUgYXJvdW5kIHRoZSBjaXR5IG91dHNraXJ0cy4nLFxuICAgICAgLy8gICAgIHByaW9yaXR5OiAnTWVkaXVtJyxcbiAgICAgIC8vICAgICBkYXRlOiBmb3JtYXQobmV3IERhdGUobmV3IERhdGUoKS5nZXRUaW1lKCkgKyA0OCAqIDYwICogNjAgKiAxMDAwKSwgJ3l5eXktTU0tZGQnKSxcbiAgICAgIC8vICAgICBjb21wbGV0ZWQ6ICdmYWxzZScsXG4gICAgICAvLyB9LFxuICAgICAgLy8ge1xuICAgICAgLy8gICAgIGlkOiA0MCxcbiAgICAgIC8vICAgICBwcm9qZWN0SWQ6IDIsXG4gICAgICAvLyAgICAgcHJvamVjdE5hbWU6ICdNYXRoJyxcbiAgICAgIC8vICAgICBwcm9qZWN0Q29sb3I6ICcjOTNjN2I0JyxcbiAgICAgIC8vICAgICB0aXRsZTogJ01hdGhlbWF0aWNzIFF1aXogUHJlcCcsXG4gICAgICAvLyAgICAgbm90ZXM6ICdQcmVwYXJlIGZvciB0aGUgdXBjb21pbmcgcXVpeiBieSByZXZpc2luZyBwcmV2aW91cyBjaGFwdGVycy4nLFxuICAgICAgLy8gICAgIHByaW9yaXR5OiAnSGlnaCcsXG4gICAgICAvLyAgICAgZGF0ZTogZm9ybWF0KG5ldyBEYXRlKG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgNzIgKiA2MCAqIDYwICogMTAwMCksICd5eXl5LU1NLWRkJyksXG4gICAgICAvLyAgICAgY29tcGxldGVkOiAnZmFsc2UnLFxuICAgICAgLy8gfSxcbiAgICAgIC8vIHtcbiAgICAgIC8vICAgICBpZDogNDEsXG4gICAgICAvLyAgICAgcHJvamVjdElkOiAzLFxuICAgICAgLy8gICAgIHByb2plY3ROYW1lOiAnUHJvZ3JhbW1pbmcnLFxuICAgICAgLy8gICAgIHByb2plY3RDb2xvcjogJyNlOGNlYjUnLFxuICAgICAgLy8gICAgIHRpdGxlOiAnQ3JlYXRpbmcgSW50ZXJhY3RpdmUgV2ViIERlc2lnbicsXG4gICAgICAvLyAgICAgbm90ZXM6ICdJbXBsZW1lbnQgQ1NTIGFuaW1hdGlvbnMgYW5kIEphdmFTY3JpcHQgaW50ZXJhY3Rpdml0eSBvbiBhIHdlYnBhZ2UuJyxcbiAgICAgIC8vICAgICBwcmlvcml0eTogJ0hpZ2gnLFxuICAgICAgLy8gICAgIGRhdGU6IGZvcm1hdChuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldFRpbWUoKSArIDcyICogNjAgKiA2MCAqIDEwMDApLCAneXl5eS1NTS1kZCcpLFxuICAgICAgLy8gICAgIGNvbXBsZXRlZDogJ2ZhbHNlJyxcbiAgICAgIC8vIH0sXG4gICAgICAvLyB7XG4gICAgICAvLyAgICAgaWQ6IDQyLFxuICAgICAgLy8gICAgIHByb2plY3RJZDogNCxcbiAgICAgIC8vICAgICBwcm9qZWN0TmFtZTogJ0xlaXN1cmUnLFxuICAgICAgLy8gICAgIHByb2plY3RDb2xvcjogJyNhNmI1ZmYnLFxuICAgICAgLy8gICAgIHRpdGxlOiAnQm9vayBSZWFkaW5nIFRpbWUnLFxuICAgICAgLy8gICAgIG5vdGVzOiAnU3RhcnQgYSBuZXcgbm92ZWwgYW5kIGFpbSB0byBmaW5pc2ggdGhlIGZpcnN0IGZpdmUgY2hhcHRlcnMuJyxcbiAgICAgIC8vICAgICBwcmlvcml0eTogJ01lZGl1bScsXG4gICAgICAvLyAgICAgZGF0ZTogZm9ybWF0KG5ldyBEYXRlKG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgNzIgKiA2MCAqIDYwICogMTAwMCksICd5eXl5LU1NLWRkJyksXG4gICAgICAvLyAgICAgY29tcGxldGVkOiAnZmFsc2UnLFxuICAgICAgLy8gfSxcbiAgICAgIC8vIHtcbiAgICAgIC8vICAgICBpZDogNDMsXG4gICAgICAvLyAgICAgcHJvamVjdElkOiAxLFxuICAgICAgLy8gICAgIHByb2plY3ROYW1lOiAnU3BvcnQnLFxuICAgICAgLy8gICAgIHByb2plY3RDb2xvcjogJyNkYWI4ZGUnLFxuICAgICAgLy8gICAgIHRpdGxlOiAnQmFza2V0YmFsbCBTa2lsbHMgUHJhY3RpY2UnLFxuICAgICAgLy8gICAgIG5vdGVzOiAnV29yayBvbiBkcmliYmxpbmcsIHNob290aW5nLCBhbmQgZGVmZW5zaXZlIHRlY2huaXF1ZXMuJyxcbiAgICAgIC8vICAgICBwcmlvcml0eTogJ0hpZ2gnLFxuICAgICAgLy8gICAgIGRhdGU6IGZvcm1hdChuZXcgRGF0ZShuZXcgRGF0ZSgpLmdldFRpbWUoKSArIDcyICogNjAgKiA2MCAqIDEwMDApLCAneXl5eS1NTS1kZCcpLFxuICAgICAgLy8gICAgIGNvbXBsZXRlZDogJ2ZhbHNlJyxcbiAgICAgIC8vIH0sXG4gICAgICAvLyB7XG4gICAgICAvLyAgICAgaWQ6IDQ0LFxuICAgICAgLy8gICAgIHByb2plY3RJZDogMixcbiAgICAgIC8vICAgICBwcm9qZWN0TmFtZTogJ01hdGgnLFxuICAgICAgLy8gICAgIHByb2plY3RDb2xvcjogJyM5M2M3YjQnLFxuICAgICAgLy8gICAgIHRpdGxlOiAnVW5kZXJzdGFuZGluZyBUcmlnb25vbWV0cnknLFxuICAgICAgLy8gICAgIG5vdGVzOiAnU3R1ZHkgdHJpZ29ub21ldHJpYyBmdW5jdGlvbnMgYW5kIHRoZWlyIGFwcGxpY2F0aW9ucy4nLFxuICAgICAgLy8gICAgIHByaW9yaXR5OiAnTWVkaXVtJyxcbiAgICAgIC8vICAgICBkYXRlOiBmb3JtYXQobmV3IERhdGUobmV3IERhdGUoKS5nZXRUaW1lKCkgKyA3MiAqIDYwICogNjAgKiAxMDAwKSwgJ3l5eXktTU0tZGQnKSxcbiAgICAgIC8vICAgICBjb21wbGV0ZWQ6ICdmYWxzZScsXG4gICAgICAvLyB9LFxuICAgICAgLy8ge1xuICAgICAgLy8gICAgIGlkOiA0NSxcbiAgICAgIC8vICAgICBwcm9qZWN0SWQ6IDMsXG4gICAgICAvLyAgICAgcHJvamVjdE5hbWU6ICdQcm9ncmFtbWluZycsXG4gICAgICAvLyAgICAgcHJvamVjdENvbG9yOiAnI2U4Y2ViNScsXG4gICAgICAvLyAgICAgdGl0bGU6ICdEYXRhYmFzZSBPcHRpbWl6YXRpb24nLFxuICAgICAgLy8gICAgIG5vdGVzOiAnT3B0aW1pemUgZGF0YWJhc2UgcXVlcmllcyBmb3IgZmFzdGVyIHJlc3BvbnNlIHRpbWVzLicsXG4gICAgICAvLyAgICAgcHJpb3JpdHk6ICdIaWdoJyxcbiAgICAgIC8vICAgICBkYXRlOiBmb3JtYXQobmV3IERhdGUobmV3IERhdGUoKS5nZXRUaW1lKCkgKyA5NiAqIDYwICogNjAgKiAxMDAwKSwgJ3l5eXktTU0tZGQnKSxcbiAgICAgIC8vICAgICBjb21wbGV0ZWQ6ICdmYWxzZScsXG4gICAgICAvLyB9LFxuICAgICAgLy8ge1xuICAgICAgLy8gICAgIGlkOiA0NixcbiAgICAgIC8vICAgICBwcm9qZWN0SWQ6IDQsXG4gICAgICAvLyAgICAgcHJvamVjdE5hbWU6ICdMZWlzdXJlJyxcbiAgICAgIC8vICAgICBwcm9qZWN0Q29sb3I6ICcjYTZiNWZmJyxcbiAgICAgIC8vICAgICB0aXRsZTogJ1Bob3RvZ3JhcGh5IFdhbGsnLFxuICAgICAgLy8gICAgIG5vdGVzOiAnQ2FwdHVyZSBpbnRlcmVzdGluZyBzaG90cyBhcm91bmQgdGhlIG5laWdoYm9yaG9vZC4nLFxuICAgICAgLy8gICAgIHByaW9yaXR5OiAnTG93JyxcbiAgICAgIC8vICAgICBkYXRlOiBmb3JtYXQobmV3IERhdGUobmV3IERhdGUoKS5nZXRUaW1lKCkgKyA5NiAqIDYwICogNjAgKiAxMDAwKSwgJ3l5eXktTU0tZGQnKSxcbiAgICAgIC8vICAgICBjb21wbGV0ZWQ6ICdmYWxzZScsXG4gICAgICAvLyB9LFxuICAgICAgLy8ge1xuICAgICAgLy8gICAgIGlkOiA0NyxcbiAgICAgIC8vICAgICBwcm9qZWN0SWQ6IDEsXG4gICAgICAvLyAgICAgcHJvamVjdE5hbWU6ICdTcG9ydCcsXG4gICAgICAvLyAgICAgcHJvamVjdENvbG9yOiAnI2RhYjhkZScsXG4gICAgICAvLyAgICAgdGl0bGU6ICdIaWtpbmcgVHJhaWwgRXhwbG9yYXRpb24nLFxuICAgICAgLy8gICAgIG5vdGVzOiAnRGlzY292ZXIgYW5kIGV4cGxvcmUgbmV3IGhpa2luZyB0cmFpbHMgaW4gdGhlIG5lYXJieSBmb3Jlc3QuJyxcbiAgICAgIC8vICAgICBwcmlvcml0eTogJ01lZGl1bScsXG4gICAgICAvLyAgICAgZGF0ZTogZm9ybWF0KG5ldyBEYXRlKG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgOTYgKiA2MCAqIDYwICogMTAwMCksICd5eXl5LU1NLWRkJyksXG4gICAgICAvLyAgICAgY29tcGxldGVkOiAnZmFsc2UnLFxuICAgICAgLy8gfSxcbiAgICAgIC8vIHtcbiAgICAgIC8vICAgICBpZDogNDgsXG4gICAgICAvLyAgICAgcHJvamVjdElkOiAyLFxuICAgICAgLy8gICAgIHByb2plY3ROYW1lOiAnTWF0aCcsXG4gICAgICAvLyAgICAgcHJvamVjdENvbG9yOiAnIzkzYzdiNCcsXG4gICAgICAvLyAgICAgdGl0bGU6ICdBZHZhbmNlZCBBbGdlYnJhIFJldmlzaW9uJyxcbiAgICAgIC8vICAgICBub3RlczogJ1JldmlldyBhZHZhbmNlZCBhbGdlYnJhaWMgY29uY2VwdHMgbGlrZSBtYXRyaWNlcyBhbmQgZGV0ZXJtaW5hbnRzLicsXG4gICAgICAvLyAgICAgcHJpb3JpdHk6ICdIaWdoJyxcbiAgICAgIC8vICAgICBkYXRlOiBmb3JtYXQobmV3IERhdGUobmV3IERhdGUoKS5nZXRUaW1lKCkgKyA5NiAqIDYwICogNjAgKiAxMDAwKSwgJ3l5eXktTU0tZGQnKSxcbiAgICAgIC8vICAgICBjb21wbGV0ZWQ6ICdmYWxzZScsXG4gICAgICAvLyB9LFxuICAgICAgLy8ge1xuICAgICAgLy8gICAgIGlkOiA0OSxcbiAgICAgIC8vICAgICBwcm9qZWN0SWQ6IDMsXG4gICAgICAvLyAgICAgcHJvamVjdE5hbWU6ICdQcm9ncmFtbWluZycsXG4gICAgICAvLyAgICAgcHJvamVjdENvbG9yOiAnI2U4Y2ViNScsXG4gICAgICAvLyAgICAgdGl0bGU6ICdJbXBsZW1lbnRpbmcgRGF0YSBTdHJ1Y3R1cmVzJyxcbiAgICAgIC8vICAgICBub3RlczogJ0NvZGUgZGlmZmVyZW50IGRhdGEgc3RydWN0dXJlcyAtIHN0YWNrcywgcXVldWVzLCBhbmQgbGlua2VkIGxpc3RzLicsXG4gICAgICAvLyAgICAgcHJpb3JpdHk6ICdIaWdoJyxcbiAgICAgIC8vICAgICBkYXRlOiBmb3JtYXQobmV3IERhdGUobmV3IERhdGUoKS5nZXRUaW1lKCkgKyA5NiAqIDYwICogNjAgKiAxMDAwKSwgJ3l5eXktTU0tZGQnKSxcbiAgICAgIC8vICAgICBjb21wbGV0ZWQ6ICdmYWxzZScsXG4gICAgICAvLyB9LFxuICAgICAgLy8ge1xuICAgICAgLy8gICAgIGlkOiA1MCxcbiAgICAgIC8vICAgICBwcm9qZWN0SWQ6IDQsXG4gICAgICAvLyAgICAgcHJvamVjdE5hbWU6ICdMZWlzdXJlJyxcbiAgICAgIC8vICAgICBwcm9qZWN0Q29sb3I6ICcjYTZiNWZmJyxcbiAgICAgIC8vICAgICB0aXRsZTogJ0RJWSBDcmFmdCBEYXknLFxuICAgICAgLy8gICAgIG5vdGVzOiAnQ3JlYXRlIGhhbmRtYWRlIGNyYWZ0cyB1c2luZyByZWN5Y2xlZCBtYXRlcmlhbHMuJyxcbiAgICAgIC8vICAgICBwcmlvcml0eTogJ0xvdycsXG4gICAgICAvLyAgICAgZGF0ZTogZm9ybWF0KG5ldyBEYXRlKG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgMTIwICogNjAgKiA2MCAqIDEwMDApLCAneXl5eS1NTS1kZCcpLFxuICAgICAgLy8gICAgIGNvbXBsZXRlZDogJ2ZhbHNlJyxcbiAgICAgIC8vIH0sXG4gICAgXTtcblxuICAgIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIHNhdmVUYXNrVG9Mb2NhbFN0b3JhZ2UodGFzayk7XG4gICAgfSk7XG4gIH1cblxuICBsZXQgdGFza3NDb3VudCA9IHRhc2tzLmxlbmd0aDtcblxuICAvLyBBZGQgbmV3IHRhc2sgb2JqZWN0XG4gIGZ1bmN0aW9uIGNyZWF0ZVRhc2socHJvamVjdE5hbWUsIHRpdGxlLCBub3RlcywgZGF0ZSkge1xuICAgIGNvbnN0IHRhc2sgPSB7fTtcbiAgICB0YXNrc0NvdW50ICs9IDE7XG4gICAgdGFzay5pZCA9IHRhc2tzQ291bnQ7XG4gICAgdGFzay5wcm9qZWN0SWQgPSBQcm9qZWN0TW9kdWxlLmZpbmRJZEJ5TmFtZShwcm9qZWN0TmFtZSk7XG4gICAgdGFzay5wcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lO1xuICAgIHRhc2sucHJvamVjdENvbG9yID0gUHJvamVjdE1vZHVsZS5maW5kQ29sb3JCeU5hbWUocHJvamVjdE5hbWUpO1xuICAgIHRhc2sudGl0bGUgPSB0aXRsZTtcbiAgICB0YXNrLm5vdGVzID0gbm90ZXM7XG4gICAgLy8gdGFzay5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIHRhc2suZGF0ZSA9IGRhdGU7XG5cbiAgICB0YXNrcy5wdXNoKHRhc2spO1xuICAgIHNhdmVUYXNrVG9Mb2NhbFN0b3JhZ2UodGFzayk7XG5cbiAgICByZXR1cm4gdGFzaztcbiAgfVxuXG4gIC8vIFVwZGF0ZSBhbiBleGlzdGluZyB0YXNrIG9iamVjdFxuICBmdW5jdGlvbiB1cGRhdGVUYXNrKHByb2plY3ROYW1lLCB0aXRsZSwgbm90ZXMsIGRhdGUsIHRhc2tJZCkge1xuICAgIGNvbnN0IHRhc2sgPSB7fTtcbiAgICB0YXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICBpZiAodGFzay5pZCA9PT0gdGFza0lkKSB7XG4gICAgICAgIHRhc2sucHJvamVjdE5hbWUgPSBwcm9qZWN0TmFtZTtcbiAgICAgICAgdGFzay5wcm9qZWN0SWQgPSBQcm9qZWN0TW9kdWxlLmZpbmRJZEJ5TmFtZShwcm9qZWN0TmFtZSk7XG4gICAgICAgIHRhc2sucHJvamVjdENvbG9yID0gUHJvamVjdE1vZHVsZS5maW5kQ29sb3JCeU5hbWUocHJvamVjdE5hbWUpO1xuICAgICAgICB0YXNrLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRhc2subm90ZXMgPSBub3RlcztcbiAgICAgICAgdGFzay5kYXRlID0gZGF0ZTtcbiAgICAgICAgcmV0dXJuIHRhc2s7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAvLyBSZXRyaWV2ZSBhbGwgdGFza3NcbiAgZnVuY3Rpb24gZ2V0QWxsVGFza3MoKSB7XG4gICAgY2hhbmdlQWN0aXZlVmlldyhcImFsbFwiKTtcbiAgICBjb25zdCBzb3J0ZWRUYXNrcyA9IHRhc2tzXG4gICAgICAuc2xpY2UoKVxuICAgICAgLnNvcnQoKGEsIGIpID0+IG5ldyBEYXRlKGEuZGF0ZSkgLSBuZXcgRGF0ZShiLmRhdGUpKTtcbiAgICByZXR1cm4gc29ydGVkVGFza3M7XG4gIH1cblxuICAvLyBSZXRyaWV2ZSB0b2RheSdzIHRhc2tzXG4gIGZ1bmN0aW9uIGdldFRvZGF5VGFza3MoKSB7XG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IHRhc2tzVG9SZXR1cm4gPSBbXTtcbiAgICBsZXQgdGFza0RhdGUgPSBcIlwiO1xuICAgIHRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgIGNvbnN0IGRhdGVTdHJpbmcgPSB0YXNrLmRhdGU7XG4gICAgICBpZiAodGFzay5kYXRlIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICB0YXNrRGF0ZSA9IHRhc2suZGF0ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IGRhdGVQYXJ0cyA9IGRhdGVTdHJpbmcuc3BsaXQoXCItXCIpO1xuXG4gICAgICAgIGNvbnN0IHllYXIgPSBwYXJzZUludChkYXRlUGFydHNbMF0pO1xuICAgICAgICBjb25zdCBtb250aCA9IHBhcnNlSW50KGRhdGVQYXJ0c1sxXSk7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBwYXJzZUludChkYXRlUGFydHNbMl0pO1xuXG4gICAgICAgIHRhc2tEYXRlID0gbmV3IERhdGUoeWVhciwgbW9udGggLSAxLCBkYXRlKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgaXNTYW1lWWVhciA9IHRhc2tEYXRlLmdldEZ1bGxZZWFyKCkgPT09IHRvZGF5LmdldEZ1bGxZZWFyKCk7XG4gICAgICBjb25zdCBpc1NhbWVNb250aCA9IHRhc2tEYXRlLmdldE1vbnRoKCkgPT09IHRvZGF5LmdldE1vbnRoKCk7XG4gICAgICBjb25zdCBpc1NhbWVEYXkgPSB0YXNrRGF0ZS5nZXREYXRlKCkgPT09IHRvZGF5LmdldERhdGUoKTtcblxuICAgICAgaWYgKGlzU2FtZVllYXIgJiYgaXNTYW1lTW9udGggJiYgaXNTYW1lRGF5KSB7XG4gICAgICAgIHRhc2tzVG9SZXR1cm4ucHVzaCh0YXNrKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNoYW5nZUFjdGl2ZVZpZXcoXCJ0b2RheVwiKTtcbiAgICByZXR1cm4gdGFza3NUb1JldHVybjtcbiAgfVxuXG4gIC8vIFJldHJpZXZlIHRvbW9ycm93J3MgdGFza3NcbiAgZnVuY3Rpb24gZ2V0VG9tb3Jyb3dUYXNrcygpIHtcbiAgICBjb25zdCB0b21vcnJvdyA9IG5ldyBEYXRlKG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgMjQgKiA2MCAqIDYwICogMTAwMCk7XG4gICAgY29uc3QgdGFza3NUb1JldHVybiA9IFtdO1xuICAgIGxldCB0YXNrRGF0ZSA9IFwiXCI7XG4gICAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgY29uc3QgZGF0ZVN0cmluZyA9IHRhc2suZGF0ZTtcbiAgICAgIGlmICh0YXNrLmRhdGUgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHRhc2tEYXRlID0gdGFzay5kYXRlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc3QgZGF0ZVBhcnRzID0gZGF0ZVN0cmluZy5zcGxpdChcIi1cIik7XG5cbiAgICAgICAgY29uc3QgeWVhciA9IHBhcnNlSW50KGRhdGVQYXJ0c1swXSk7XG4gICAgICAgIGNvbnN0IG1vbnRoID0gcGFyc2VJbnQoZGF0ZVBhcnRzWzFdKTtcbiAgICAgICAgY29uc3QgZGF0ZSA9IHBhcnNlSW50KGRhdGVQYXJ0c1syXSk7XG5cbiAgICAgICAgdGFza0RhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIGRhdGUpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBpc1NhbWVZZWFyID0gdGFza0RhdGUuZ2V0RnVsbFllYXIoKSA9PT0gdG9tb3Jyb3cuZ2V0RnVsbFllYXIoKTtcbiAgICAgIGNvbnN0IGlzU2FtZU1vbnRoID0gdGFza0RhdGUuZ2V0TW9udGgoKSA9PT0gdG9tb3Jyb3cuZ2V0TW9udGgoKTtcbiAgICAgIGNvbnN0IGlzU2FtZURheSA9IHRhc2tEYXRlLmdldERhdGUoKSA9PT0gdG9tb3Jyb3cuZ2V0RGF0ZSgpO1xuXG4gICAgICBpZiAoaXNTYW1lWWVhciAmJiBpc1NhbWVNb250aCAmJiBpc1NhbWVEYXkpIHtcbiAgICAgICAgdGFza3NUb1JldHVybi5wdXNoKHRhc2spO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgY2hhbmdlQWN0aXZlVmlldyhcInRvbW9ycm93XCIpO1xuICAgIHJldHVybiB0YXNrc1RvUmV0dXJuO1xuICB9XG5cbiAgLy8gUmV0cmlldmUgdGFza3MgZnJvbSBhY3RpdmUgdmlld1xuICBmdW5jdGlvbiBnZXRUYXNrc0Zyb21BY3RpdmVWaWV3KCkge1xuICAgIGlmIChnZXRBY3RpdmVWaWV3KCkgPT09IFwidG9kYXlcIikge1xuICAgICAgcmV0dXJuIGdldFRvZGF5VGFza3MoKTtcbiAgICB9XG4gICAgaWYgKGdldEFjdGl2ZVZpZXcoKSA9PT0gXCJ0b21vcnJvd1wiKSB7XG4gICAgICByZXR1cm4gZ2V0VG9tb3Jyb3dUYXNrcygpO1xuICAgIH1cbiAgICBpZiAoZ2V0QWN0aXZlVmlldygpID09PSBcImFsbFwiKSB7XG4gICAgICByZXR1cm4gZ2V0QWxsVGFza3MoKTtcbiAgICB9XG4gIH1cblxuICAvLyBSZXRyaWV2ZSBhIHByb2plY3QncyB0YXNrc1xuICBmdW5jdGlvbiBnZXRQcm9qZWN0VGFza3MocHJvamVjdCwgdGFza3MpIHtcbiAgICBpZiAocHJvamVjdCA9PSBcIlwiKSB7XG4gICAgICByZXR1cm4gdGFza3M7XG4gICAgfVxuXG4gICAgY29uc3QgdGFza3NUb1JldHVybiA9IFtdO1xuXG4gICAgdGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgaWYgKHRhc2sucHJvamVjdE5hbWUgPT0gcHJvamVjdCkge1xuICAgICAgICB0YXNrc1RvUmV0dXJuLnB1c2godGFzayk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjaGFuZ2VBY3RpdmVQcm9qZWN0KHByb2plY3QpO1xuXG4gICAgcmV0dXJuIHRhc2tzVG9SZXR1cm47XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGNyZWF0ZVRhc2ssXG4gICAgdXBkYXRlVGFzayxcbiAgICBnZXRBbGxUYXNrcyxcbiAgICBnZXRUb2RheVRhc2tzLFxuICAgIGdldFRvbW9ycm93VGFza3MsXG4gICAgY2hhbmdlQWN0aXZlVmlldyxcbiAgICBnZXRBY3RpdmVWaWV3LFxuICAgIGNoYW5nZUFjdGl2ZVByb2plY3QsXG4gICAgZ2V0QWN0aXZlUHJvamVjdCxcbiAgICBnZXRQcm9qZWN0VGFza3MsXG4gICAgZ2V0VGFza3NGcm9tQWN0aXZlVmlldyxcbiAgICBkZWxldGVUYXNrQnlJZCxcbiAgICBkZWxldGVUYXNrQnlQcm9qZWN0SWQsXG4gICAgZmluZE9iamVjdEJ5SWQsXG4gIH07XG59KSgpO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3R5cGVvZihvKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvO1xuICB9IDogZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbztcbiAgfSwgX3R5cGVvZihvKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlcy5jc3NcIjtcbmltcG9ydCB7IERPTU1vZHVsZSB9IGZyb20gXCIuL0RPTU1vZHVsZVwiO1xuaW1wb3J0IHsgUHJvamVjdE1vZHVsZSB9IGZyb20gXCIuL1Byb2plY3RNb2R1bGVcIjtcbmltcG9ydCB7IFRhc2tNb2R1bGUgfSBmcm9tIFwiLi9UYXNrTW9kdWxlXCI7XG5pbXBvcnQgeyBzd2l0Y2hMb2NhbFN0b3JhZ2VTdGF0dXMgfSBmcm9tIFwiLi9Mb2NhbFN0b3JhZ2VNb2R1bGVcIjtcblxuRE9NTW9kdWxlLmNyZWF0ZU1haW5EaXYoKTtcbkRPTU1vZHVsZS5jcmVhdGVEaWFsb2dzLm5ld1Byb2plY3REaWFsb2dIYW5kbGVyKCk7XG5ET01Nb2R1bGUuY3JlYXRlRGlhbG9ncy5uZXdUYXNrRGlhbG9nSGFuZGxlcigpO1xuRE9NTW9kdWxlLmNyZWF0ZURpYWxvZ3MuY3JlYXRlUHJvamVjdERlbGV0ZURpYWxvZygpO1xuRE9NTW9kdWxlLmNyZWF0ZURpYWxvZ3MuY3JlYXRlVGFza0RlbGV0ZURpYWxvZygpO1xuRE9NTW9kdWxlLmNyZWF0ZURpYWxvZ3MuYWRkRXNjRXZlbkxpc3RlbmVyKCk7XG5ET01Nb2R1bGUuY3JlYXRlTGVmdERpdi5jcmVhdGVTdHJ1Y3R1cmUoKTtcbkRPTU1vZHVsZS5jcmVhdGVMZWZ0RGl2LmNyZWF0ZVByb2plY3RzKFByb2plY3RNb2R1bGUuZ2V0UHJvamVjdE9iamVjdHMoKSk7XG5ET01Nb2R1bGUuY3JlYXRlUmlnaHREaXYuY3JlYXRlU3RydWN0dXJlKCk7XG5ET01Nb2R1bGUuY3JlYXRlUmlnaHREaXYuY3JlYXRlVGFza3MoVGFza01vZHVsZS5nZXRUb2RheVRhc2tzKCkpO1xuRE9NTW9kdWxlLmNyZWF0ZUZvb3RlckRpdi5jcmVhdGVTdHJ1Y3R1cmUoKTtcbkRPTU1vZHVsZS5jcmVhdGVGb290ZXJEaXYuY3JlYXRlQnV0dG9ucygpO1xuc3dpdGNoTG9jYWxTdG9yYWdlU3RhdHVzKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=