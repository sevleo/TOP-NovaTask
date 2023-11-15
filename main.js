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
    --secondary-color: #2ecc71;
    --secondary-dark: #27ae60;
    --secondary-light: #c8e6c9;

    /* Accent colors */
    --accent-color: #BA181B;
    --accent-dark: #A4161A;
    --accent-light: #E5383B;
    --accent-darker: #660708;

    /* Background colors */
    --background-color: #F5EBE0; /*used*/
    --background-dark: #bdc3c7;
    --background-light: #EDEDE9; /*used*/

    /* Text colors */
    --text-color: #333; /*used*/
    --text-light: #fff;
    --text-muted: #888;

    /* Border colors */
    --border-color: #D6CCC2; /*used*/
    --border-dark: #999;
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
    background-color: var(--background-color);
    flex: 0 0 300px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    height: calc(100% - 100px);
}

.main > .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: start;
}

.main > .footer {
    display: flex;
    height: 100px;
    border-top: 1px solid var(--border-color);
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

.footer {
    position: fixed;
    bottom: 0;
    width: 100%;
}


/* Left div layout */

.left > .left-first-section,
.left > .left-second-section {
    margin-top: 40px;
    margin-left: 10px;
}

.left > .left-first-section p {
    padding: 10px;
    font-style: italic;
    font-weight: 200;
}

.left > .left-first-section li {
    padding: 10px;
    list-style: none;
    margin-left: 10px;
}

.left > .left-second-section p {
    padding: 10px;
    font-style: italic;
    font-weight: 200;
}

.left > .left-second-section li {
    padding: 10px;
    list-style: none;
    margin-left: 10px;
}


/* Dialog layout and animations */

.new-project {
    width: 300px;
    height: 300px;
    background-color: azure;
}

.new-task {
    width: 300px;
    height: 300px;
    background-color: azure;
}

dialog {
    position: absolute;
    margin: auto;
    padding: 20px;
    border-radius: 5px;
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

dialog.displayed.new-project > form > .project-name-field-div {
    transition: all 300ms ease-in-out 250ms;
}

dialog.displayed.new-project > form > button {
    transition: all 300ms ease-in-out 300ms;
}

dialog.displayed.new-project > form > .close-project-dialog {
    transition: all 300ms ease-in-out 350ms;
}

dialog.displayed.new-task > form > .task-project-field-div {
    transition: all 300ms ease-in-out 250ms;
}

dialog.displayed.new-task > form > .task-title-field-div {
    transition: all 300ms ease-in-out 300ms;
}

dialog.displayed.new-task > form > .task-notes-field-div {
    transition: all 300ms ease-in-out 350ms;
}

dialog.displayed.new-task > form > .task-priority-field-div {
    transition: all 300ms ease-in-out 400ms;
}

dialog.displayed.new-task > form > .task-date-field-div {
    transition: all 300ms ease-in-out 450ms;
}

dialog.displayed.new-task > form > button {
    transition: all 300ms ease-in-out 500ms;
}

dialog.displayed.new-task > form > .close-project-dialog {
    transition: all 300ms ease-in-out 550ms;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAGA;IACI,mBAAmB;IACnB,wBAAwB;IACxB,uBAAuB;IACvB,wBAAwB;;IAExB,qBAAqB;IACrB,0BAA0B;IAC1B,yBAAyB;IACzB,0BAA0B;;IAE1B,kBAAkB;IAClB,uBAAuB;IACvB,sBAAsB;IACtB,uBAAuB;IACvB,wBAAwB;;IAExB,sBAAsB;IACtB,2BAA2B,EAAE,OAAO;IACpC,0BAA0B;IAC1B,2BAA2B,EAAE,OAAO;;IAEpC,gBAAgB;IAChB,kBAAkB,EAAE,OAAO;IAC3B,kBAAkB;IAClB,kBAAkB;;IAElB,kBAAkB;IAClB,uBAAuB,EAAE,OAAO;IAChC,mBAAmB;IACnB,oBAAoB;AACxB;;;AAGA;IACI,2BAA2B;IAC3B,0BAA0B;AAC9B;;AAEA;IACI;;;;;AAKJ;;;AAGA,mBAAmB;;AAEnB;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,wBAAwB;IACxB,iCAAiC;IACjC,gBAAgB;AACpB;;AAEA;IACI,yCAAyC;IACzC,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,2CAA2C;IAC3C,yCAAyC;IACzC,eAAe;IACf,aAAa;IACb,sBAAsB;IACtB,sBAAsB;IACtB,0BAA0B;AAC9B;;AAEA;IACI,OAAO;IACP,aAAa;IACb,sBAAsB;IACtB,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,aAAa;IACb,yCAAyC;AAC7C;;AAEA;IACI,eAAe;IACf,yCAAyC;IACzC,2CAA2C;AAC/C;;AAEA;IACI,OAAO;IACP,yCAAyC;AAC7C;;AAEA;IACI,4BAA4B;IAC5B,YAAY;IACZ,WAAW;IACX,cAAc;IACd,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,mBAAmB;AACvB;;AAEA;IACI,qCAAqC;IACrC,mBAAmB;IACnB,aAAa;IACb,OAAO;IACP,+BAA+B;IAC/B,sBAAsB;AAC1B;;AAEA;IACI,eAAe;IACf,SAAS;IACT,WAAW;AACf;;;AAGA,oBAAoB;;AAEpB;;IAEI,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,kBAAkB;IAClB,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,iBAAiB;AACrB;;;AAGA,iCAAiC;;AAEjC;IACI,YAAY;IACZ,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,kBAAkB;AACtB;;AAEA;IACI,UAAU;IACV,UAAU;IACV,qBAAqB;IACrB;;4CAEwC;AAC5C;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,UAAU;AACd;;AAEA;IACI,UAAU;IACV,OAAO;IACP,mBAAmB;IACnB,6DAA6D;AACjE;;AAEA;IACI,QAAQ;IACR,UAAU;AACd;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,uCAAuC;AAC3C;;AAEA;IACI,uCAAuC;AAC3C","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');\n@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@100&family=Lato:wght@300&family=Nunito:ital,wght@0,200;0,300;0,400;0,500;1,200;1,300;1,400;1,500&family=Roboto:wght@100&family=Rubik:wght@300&display=swap');\n\n:root {\n    /* Primary colors */\n    --primary-color: #3498db;\n    --primary-dark: #2980b9;\n    --primary-light: #87CEFA;\n\n    /* Secondary colors */\n    --secondary-color: #2ecc71;\n    --secondary-dark: #27ae60;\n    --secondary-light: #c8e6c9;\n\n    /* Accent colors */\n    --accent-color: #BA181B;\n    --accent-dark: #A4161A;\n    --accent-light: #E5383B;\n    --accent-darker: #660708;\n\n    /* Background colors */\n    --background-color: #F5EBE0; /*used*/\n    --background-dark: #bdc3c7;\n    --background-light: #EDEDE9; /*used*/\n\n    /* Text colors */\n    --text-color: #333; /*used*/\n    --text-light: #fff;\n    --text-muted: #888;\n\n    /* Border colors */\n    --border-color: #D6CCC2; /*used*/\n    --border-dark: #999;\n    --border-light: #eee;\n}\n\n\n::backdrop {\n    background-color: #00000088;\n    backdrop-filter: blur(3px);\n}\n\n.material-symbols-outlined {\n    font-variation-settings:\n    'FILL' 0,\n    'wght' 400,\n    'GRAD' 0,\n    'opsz' 24\n}\n\n\n/* General layout */\n\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    color: var(--text-color);\n    font-family: 'Nunito', sans-serif;\n    font-weight: 300;\n}\n\nbody {\n    background-color: var(--background-light);\n    height: 100vh;\n    width: 100vw;\n}\n\n.main {\n    height: 100%;\n    width: 100%;\n    display: flex;\n}\n\n.main > .left {\n    border-right: 1px solid var(--border-color);\n    background-color: var(--background-color);\n    flex: 0 0 300px;\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n    height: calc(100% - 100px);\n}\n\n.main > .right {\n    flex: 1;\n    display: flex;\n    flex-direction: column;\n    justify-content: start;\n}\n\n.main > .footer {\n    display: flex;\n    height: 100px;\n    border-top: 1px solid var(--border-color);\n}\n\n.main > .footer > .footer-left {\n    flex: 0 0 300px;\n    background-color: var(--background-color);\n    border-right: 1px solid var(--border-color);\n}\n\n.main > .footer > .footer-right {\n    flex: 1;\n    background-color: var(--background-light);\n}\n\n.right-first-section {\n    padding: 50px 10px 50px 10px;\n    height: 100%;\n    width: 100%;\n    overflow: auto;\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n    align-items: center;\n}\n\n.right-first-section > .task {\n    border: 1px solid var(--border-color);\n    border-radius: 30px;\n    padding: 20px;\n    flex: 1;\n    width: clamp(200px, 60%, 800px);\n    /* max-width: 500px; */\n}\n\n.footer {\n    position: fixed;\n    bottom: 0;\n    width: 100%;\n}\n\n\n/* Left div layout */\n\n.left > .left-first-section,\n.left > .left-second-section {\n    margin-top: 40px;\n    margin-left: 10px;\n}\n\n.left > .left-first-section p {\n    padding: 10px;\n    font-style: italic;\n    font-weight: 200;\n}\n\n.left > .left-first-section li {\n    padding: 10px;\n    list-style: none;\n    margin-left: 10px;\n}\n\n.left > .left-second-section p {\n    padding: 10px;\n    font-style: italic;\n    font-weight: 200;\n}\n\n.left > .left-second-section li {\n    padding: 10px;\n    list-style: none;\n    margin-left: 10px;\n}\n\n\n/* Dialog layout and animations */\n\n.new-project {\n    width: 300px;\n    height: 300px;\n    background-color: azure;\n}\n\n.new-task {\n    width: 300px;\n    height: 300px;\n    background-color: azure;\n}\n\ndialog {\n    position: absolute;\n    margin: auto;\n    padding: 20px;\n    border-radius: 5px;\n}\n\ndialog.hidden {\n    opacity: 0;\n    top: -200%;\n    transform: scale(0.5);\n    transition: opacity 300ms ease-in-out, \n                top 1000ms ease-in-out,\n                transform 1000ms ease-in-out;\n}\n\ndialog.hidden > form > * {\n    position: relative;\n    top: 10px;\n    opacity: 0;\n}\n\ndialog.displayed {\n    opacity: 1;\n    top: 0%;\n    transform: scale(1);\n    transition: transform 300ms cubic-bezier(0.18,0.89,0.43,1.19);\n}\n\ndialog.displayed > form > * {\n    top: 0px;\n    opacity: 1;\n}\n\ndialog.displayed.new-project > form > .project-name-field-div {\n    transition: all 300ms ease-in-out 250ms;\n}\n\ndialog.displayed.new-project > form > button {\n    transition: all 300ms ease-in-out 300ms;\n}\n\ndialog.displayed.new-project > form > .close-project-dialog {\n    transition: all 300ms ease-in-out 350ms;\n}\n\ndialog.displayed.new-task > form > .task-project-field-div {\n    transition: all 300ms ease-in-out 250ms;\n}\n\ndialog.displayed.new-task > form > .task-title-field-div {\n    transition: all 300ms ease-in-out 300ms;\n}\n\ndialog.displayed.new-task > form > .task-notes-field-div {\n    transition: all 300ms ease-in-out 350ms;\n}\n\ndialog.displayed.new-task > form > .task-priority-field-div {\n    transition: all 300ms ease-in-out 400ms;\n}\n\ndialog.displayed.new-task > form > .task-date-field-div {\n    transition: all 300ms ease-in-out 450ms;\n}\n\ndialog.displayed.new-task > form > button {\n    transition: all 300ms ease-in-out 500ms;\n}\n\ndialog.displayed.new-task > form > .close-project-dialog {\n    transition: all 300ms ease-in-out 550ms;\n}"],"sourceRoot":""}]);
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
        },
        {
            id: 2,
            name: 'Math',
        },
        {
            id: 3,
            name: 'Programming',
        },
        {
            id: 4,
            name: 'Leisure',
        },
    ];

    let projectsCount = projects.length;
    
    // Add new project
    function createProject(name) {
        const project = {};
        projectsCount = projectsCount + 1;
        project.id = projectsCount;
        project.name = name;

        projects.push(project);

        return project;
    }

    // Retrieve projects
    function getProjects() {
        return projects.slice();
    }

    return {
        createProject,
        getProjects,
    }
    
})();


// Task module 
const TaskModule = (function() {

    let tasks = [
        {
            id: 0,
            project: 0,
            title: 'Complete Exercise 1',
            notes: 'Remember to focus on the key concepts',
            priority: 'High',
            date: '2023-11-15',
        },
        {
            id: 1,
            project: 1,
            title: 'Study Algebra',
            notes: 'Review chapters 3 and 4 for the upcoming test',
            priority: 'Medium',
            date: '2023-11-17',
        },
        {
            id: 2,
            project: 2,
            title: 'Code Review for Project X',
            notes: 'Check for code quality and potential optimizations',
            priority: 'High',
            date: '2023-11-18',
        },
        {
            id: 3,
            project: 3,
            title: 'Buy groceries',
            notes: 'Milk, eggs, bread, and fruits',
            priority: 'Low',
            date: '2023-11-20',
        },
        {
            id: 4,
            project: 4,
            title: 'Read "The Great Gatsby"',
            notes: 'Complete chapters 1-3 by the end of the week',
            priority: 'Medium',
            date: '2023-11-22',
        },
        {
            id: 5,
            project: 0,
            title: 'Prepare presentation slides',
            notes: 'Incorporate feedback from team members',
            priority: 'High',
            date: '2023-11-25',
        },
        {
            id: 6,
            project: 1,
            title: 'Practice guitar',
            notes: 'Learn new chords and practice scales',
            priority: 'Medium',
            date: '2023-11-28',
        },
        {
            id: 7,
            project: 2,
            title: 'Write documentation',
            notes: 'Document the new API endpoints',
            priority: 'High',
            date: '2023-11-30',
        },
        {
            id: 8,
            project: 3,
            title: 'Plan weekend hike',
            notes: 'Check weather forecast and pack essentials',
            priority: 'Low',
            date: '2023-12-02',
        },
        {
            id: 9,
            project: 4,
            title: 'Watch coding tutorial',
            notes: 'Focus on advanced JavaScript concepts',
            priority: 'Medium',
            date: '2023-12-05',
        },
        {
            id: 10,
            project: 0,
            title: 'Review meeting notes',
            notes: 'Prepare action items for follow-up',
            priority: 'High',
            date: '2023-12-08',
        },
        {
            id: 11,
            project: 1,
            title: 'Create flashcards',
            notes: 'For memorizing important math formulas',
            priority: 'Medium',
            date: '2023-12-10',
        },
        {
            id: 12,
            project: 2,
            title: 'Refactor code',
            notes: 'Address code smells and improve readability',
            priority: 'High',
            date: '2023-12-12',
        },
        {
            id: 13,
            project: 3,
            title: 'Water the plants',
            notes: 'Check soil moisture and water accordingly',
            priority: 'Low',
            date: '2023-12-15',
        },
        {
            id: 14,
            project: 4,
            title: 'Practice mindfulness meditation',
            notes: 'Take a break and clear the mind',
            priority: 'Medium',
            date: '2023-12-18',
        },

    ];
    
    // Add new task object
    function createTask(project, title, notes, priority, date) {
        const task = {};
        task.project = project;
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

    function createDialogs() {
        const body = document.querySelector('body');
        newProjectDialogHandler();
        newTaskDialogHandler();

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
                    ProjectModule.createProject(projectName.value);
                    DOMModule.createLeftDiv.createProjects(ProjectModule.getProjects());
                    });

                const nameFieldDiv = document.createElement('div');
                nameFieldDiv.classList.add('project-name-field-div');
                newProjectDialogForm.append(nameFieldDiv);
    
                const nameFieldLabel = document.createElement('label');
                nameFieldLabel.textContent = 'Name';
                nameFieldLabel.setAttribute('for', 'project-name');
                nameFieldDiv.append(nameFieldLabel);
    
                const nameFieldInput = document.createElement('input');
                nameFieldInput.textContent = 'Name';
                nameFieldInput.setAttribute('type', 'text');
                nameFieldInput.setAttribute('id', 'project-name');
                nameFieldDiv.append(nameFieldInput);
    
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
            const newTaskDialog = createTaskDialog();
            const newTaskDialogForm = createTaskDialogForm();

            function createTaskDialog() {
                const newTaskDialog = document.createElement('dialog');
                newTaskDialog.classList.add('new-task', 'hidden');
                body.append(newTaskDialog);
                return newTaskDialog;
            }

            function createTaskDialogForm() {
                const newTaskDialogForm = document.createElement('form');
                newTaskDialog.append(newTaskDialogForm);
    
                const newTaskDialogFieldsTemplate = [
                    {
                        div_class: 'task-project-field-div',
                        input_id: 'task-project',
                        type: 'text',
                        label: 'Project',
                    },
                    {
                        div_class: 'task-title-field-div',
                        input_id: 'task-title',
                        type: 'text',
                        label: 'Title',
                    },
                    {
                        div_class: 'task-notes-field-div',
                        input_id: 'task-notes',
                        type: 'text',
                        label: 'Notes',
                    },
                    {
                        div_class: 'task-priority-field-div',
                        input_id: 'task-priority',
                        type: 'text',
                        label: 'Priority',
                    },
                    {
                        div_class: 'task-date-field-div',
                        input_id: 'task-date',
                        type: 'text',
                        label: 'Date',
                    },
                ];
    
                newTaskDialogFieldsTemplate.forEach(element => {
                    const fieldDiv = document.createElement('div');
                    fieldDiv.classList.add(element.div_class);
                    newTaskDialogForm.append(fieldDiv);
    
                    const fieldLabel = document.createElement('label');
                    fieldLabel.textContent = element.label;
                    fieldLabel.setAttribute('for', element.input_id);
                    fieldDiv.append(fieldLabel);
    
                    const fieldInput = document.createElement('input');
                    fieldInput.textContent = element.label;
                    fieldInput.setAttribute('type', element.type);
                    fieldInput.setAttribute('id', element.input_id);
                    fieldDiv.append(fieldInput);
                })
    
                const submitTaskButton = document.createElement('button');
                submitTaskButton.setAttribute('type', 'submit');
                submitTaskButton.textContent = 'Save';
                newTaskDialogForm.append(submitTaskButton);
    
                const closeTaskDialogDiv = document.createElement('div');
                closeTaskDialogDiv.classList.add('close-project-dialog');
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
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                event.preventDefault();
                const openDialog = document.querySelector('dialog[open]');
                if (openDialog) {
                    closeDialog(openDialog);
                }
            }
        });

        // Close animation handler
        function handleCloseAnimation(eventElement, dialog, eventType, form) {
            eventElement.addEventListener(eventType, function handleSubmit(event) {
                event.preventDefault();
                form.reset();
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
    }
    

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
            leftDiv.append(leftFirstDiv);
    
            const firstSectionLabel = document.createElement('p');
            firstSectionLabel.textContent = 'Tasks';
            leftFirstDiv.append(firstSectionLabel);
    
            const firstSectionList = document.createElement('ul');
            leftFirstDiv.append(firstSectionList);
    
            const firstLineItem = document.createElement('li');
            firstLineItem.textContent = 'Today';
            firstSectionList.append(firstLineItem);

            const secondLineItem = document.createElement('li');
            secondLineItem.textContent = 'Tomorrow';
            firstSectionList.append(secondLineItem);
    
            const leftSecondDiv = document.createElement('div');
            leftSecondDiv.classList.add('left-second-section');
            leftDiv.append(leftSecondDiv);
    
            const secondSectionLabel = document.createElement('p');
            secondSectionLabel.textContent = 'Projects';
            leftSecondDiv.append(secondSectionLabel);
    
            const secondSectionList = document.createElement('ul');
            secondSectionList.classList.add('second-section-list');
            leftSecondDiv.append(secondSectionList);
        }

        // Render projects
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
                projectLineItem.textContent = element.name;
                secondSectionList.append(projectLineItem);
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
            tasks.forEach(element => {
                const rightFirstSection = document.querySelector('.right-first-section');
                const taskLineItem = document.createElement('div');
                taskLineItem.classList.add('task');
                rightFirstSection.append(taskLineItem);

                const taskFieldsTemplate = [
                    {
                        div_class: 'task-project-field',
                        textContent: element.project,
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
                    taskLineItem.append(taskField);

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

            const footerLeftDiv = document.createElement('div');
            footerLeftDiv.classList.add('footer-left');
            footerDiv.append(footerLeftDiv);

            const footerRightDiv = document.createElement('div');
            footerRightDiv.classList.add('footer-right');
            footerDiv.append(footerRightDiv);
        }

        function createButtons() {
            const footerLeftDiv = document.querySelector('.footer-left');
            const footerRightDiv = document.querySelector('.footer-right');

            const createProjectButton = document.createElement('button');
            createProjectButton.classList.add('create-project');
            createProjectButton.textContent = 'Create Project';
            footerLeftDiv.append(createProjectButton);
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
DOMModule.createDialogs();
DOMModule.createLeftDiv.createStructure();
DOMModule.createLeftDiv.createProjects(ProjectModule.getProjects());
DOMModule.createRightDiv.createStructure();
DOMModule.createRightDiv.createTasks(TaskModule.getTasks());
DOMModule.createFooterDiv.createStructure();
DOMModule.createFooterDiv.createButtons();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCOztBQUVyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7OztBQUdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub3ZhdGFzay8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL25vdmF0YXNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9ub3ZhdGFzay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL25vdmF0YXNrLy4vc3JjL3N0eWxlcy5jc3M/NDRiMiIsIndlYnBhY2s6Ly9ub3ZhdGFzay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9ub3ZhdGFzay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbm92YXRhc2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vbm92YXRhc2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vbm92YXRhc2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9ub3ZhdGFzay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL25vdmF0YXNrL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL25vdmF0YXNrL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL25vdmF0YXNrL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9ub3ZhdGFzay93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL25vdmF0YXNrL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vbm92YXRhc2svd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL25vdmF0YXNrLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TWF0ZXJpYWwrU3ltYm9scytPdXRsaW5lZDpvcHN6LHdnaHQsRklMTCxHUkFEQDIwLi40OCwxMDAuLjcwMCwwLi4xLC01MC4uMjAwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Sm9zZWZpbitTYW5zOndnaHRAMTAwJmZhbWlseT1MYXRvOndnaHRAMzAwJmZhbWlseT1OdW5pdG86aXRhbCx3Z2h0QDAsMjAwOzAsMzAwOzAsNDAwOzAsNTAwOzEsMjAwOzEsMzAwOzEsNDAwOzEsNTAwJmZhbWlseT1Sb2JvdG86d2dodEAxMDAmZmFtaWx5PVJ1YmlrOndnaHRAMzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xuICAgIC8qIFByaW1hcnkgY29sb3JzICovXG4gICAgLS1wcmltYXJ5LWNvbG9yOiAjMzQ5OGRiO1xuICAgIC0tcHJpbWFyeS1kYXJrOiAjMjk4MGI5O1xuICAgIC0tcHJpbWFyeS1saWdodDogIzg3Q0VGQTtcblxuICAgIC8qIFNlY29uZGFyeSBjb2xvcnMgKi9cbiAgICAtLXNlY29uZGFyeS1jb2xvcjogIzJlY2M3MTtcbiAgICAtLXNlY29uZGFyeS1kYXJrOiAjMjdhZTYwO1xuICAgIC0tc2Vjb25kYXJ5LWxpZ2h0OiAjYzhlNmM5O1xuXG4gICAgLyogQWNjZW50IGNvbG9ycyAqL1xuICAgIC0tYWNjZW50LWNvbG9yOiAjQkExODFCO1xuICAgIC0tYWNjZW50LWRhcms6ICNBNDE2MUE7XG4gICAgLS1hY2NlbnQtbGlnaHQ6ICNFNTM4M0I7XG4gICAgLS1hY2NlbnQtZGFya2VyOiAjNjYwNzA4O1xuXG4gICAgLyogQmFja2dyb3VuZCBjb2xvcnMgKi9cbiAgICAtLWJhY2tncm91bmQtY29sb3I6ICNGNUVCRTA7IC8qdXNlZCovXG4gICAgLS1iYWNrZ3JvdW5kLWRhcms6ICNiZGMzYzc7XG4gICAgLS1iYWNrZ3JvdW5kLWxpZ2h0OiAjRURFREU5OyAvKnVzZWQqL1xuXG4gICAgLyogVGV4dCBjb2xvcnMgKi9cbiAgICAtLXRleHQtY29sb3I6ICMzMzM7IC8qdXNlZCovXG4gICAgLS10ZXh0LWxpZ2h0OiAjZmZmO1xuICAgIC0tdGV4dC1tdXRlZDogIzg4ODtcblxuICAgIC8qIEJvcmRlciBjb2xvcnMgKi9cbiAgICAtLWJvcmRlci1jb2xvcjogI0Q2Q0NDMjsgLyp1c2VkKi9cbiAgICAtLWJvcmRlci1kYXJrOiAjOTk5O1xuICAgIC0tYm9yZGVyLWxpZ2h0OiAjZWVlO1xufVxuXG5cbjo6YmFja2Ryb3Age1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDA4ODtcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcbn1cblxuLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xuICAgIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOlxuICAgICdGSUxMJyAwLFxuICAgICd3Z2h0JyA0MDAsXG4gICAgJ0dSQUQnIDAsXG4gICAgJ29wc3onIDI0XG59XG5cblxuLyogR2VuZXJhbCBsYXlvdXQgKi9cblxuKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XG4gICAgZm9udC1mYW1pbHk6ICdOdW5pdG8nLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbmJvZHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtbGlnaHQpO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMHZ3O1xufVxuXG4ubWFpbiB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5tYWluID4gLmxlZnQge1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1jb2xvcik7XG4gICAgZmxleDogMCAwIDMwMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTAwcHgpO1xufVxuXG4ubWFpbiA+IC5yaWdodCB7XG4gICAgZmxleDogMTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbn1cblxuLm1haW4gPiAuZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG59XG5cbi5tYWluID4gLmZvb3RlciA+IC5mb290ZXItbGVmdCB7XG4gICAgZmxleDogMCAwIDMwMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG59XG5cbi5tYWluID4gLmZvb3RlciA+IC5mb290ZXItcmlnaHQge1xuICAgIGZsZXg6IDE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1saWdodCk7XG59XG5cbi5yaWdodC1maXJzdC1zZWN0aW9uIHtcbiAgICBwYWRkaW5nOiA1MHB4IDEwcHggNTBweCAxMHB4O1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxNXB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5yaWdodC1maXJzdC1zZWN0aW9uID4gLnRhc2sge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGZsZXg6IDE7XG4gICAgd2lkdGg6IGNsYW1wKDIwMHB4LCA2MCUsIDgwMHB4KTtcbiAgICAvKiBtYXgtd2lkdGg6IDUwMHB4OyAqL1xufVxuXG4uZm9vdGVyIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5cbi8qIExlZnQgZGl2IGxheW91dCAqL1xuXG4ubGVmdCA+IC5sZWZ0LWZpcnN0LXNlY3Rpb24sXG4ubGVmdCA+IC5sZWZ0LXNlY29uZC1zZWN0aW9uIHtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4ubGVmdCA+IC5sZWZ0LWZpcnN0LXNlY3Rpb24gcCB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbn1cblxuLmxlZnQgPiAubGVmdC1maXJzdC1zZWN0aW9uIGxpIHtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi5sZWZ0ID4gLmxlZnQtc2Vjb25kLXNlY3Rpb24gcCB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbn1cblxuLmxlZnQgPiAubGVmdC1zZWNvbmQtc2VjdGlvbiBsaSB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG5cbi8qIERpYWxvZyBsYXlvdXQgYW5kIGFuaW1hdGlvbnMgKi9cblxuLm5ldy1wcm9qZWN0IHtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcbn1cblxuLm5ldy10YXNrIHtcbiAgICB3aWR0aDogMzAwcHg7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhenVyZTtcbn1cblxuZGlhbG9nIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG5kaWFsb2cuaGlkZGVuIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRvcDogLTIwMCU7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMzAwbXMgZWFzZS1pbi1vdXQsIFxuICAgICAgICAgICAgICAgIHRvcCAxMDAwbXMgZWFzZS1pbi1vdXQsXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtIDEwMDBtcyBlYXNlLWluLW91dDtcbn1cblxuZGlhbG9nLmhpZGRlbiA+IGZvcm0gPiAqIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiAxMHB4O1xuICAgIG9wYWNpdHk6IDA7XG59XG5cbmRpYWxvZy5kaXNwbGF5ZWQge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdG9wOiAwJTtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAzMDBtcyBjdWJpYy1iZXppZXIoMC4xOCwwLjg5LDAuNDMsMS4xOSk7XG59XG5cbmRpYWxvZy5kaXNwbGF5ZWQgPiBmb3JtID4gKiB7XG4gICAgdG9wOiAwcHg7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuZGlhbG9nLmRpc3BsYXllZC5uZXctcHJvamVjdCA+IGZvcm0gPiAucHJvamVjdC1uYW1lLWZpZWxkLWRpdiB7XG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2UtaW4tb3V0IDI1MG1zO1xufVxuXG5kaWFsb2cuZGlzcGxheWVkLm5ldy1wcm9qZWN0ID4gZm9ybSA+IGJ1dHRvbiB7XG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2UtaW4tb3V0IDMwMG1zO1xufVxuXG5kaWFsb2cuZGlzcGxheWVkLm5ldy1wcm9qZWN0ID4gZm9ybSA+IC5jbG9zZS1wcm9qZWN0LWRpYWxvZyB7XG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2UtaW4tb3V0IDM1MG1zO1xufVxuXG5kaWFsb2cuZGlzcGxheWVkLm5ldy10YXNrID4gZm9ybSA+IC50YXNrLXByb2plY3QtZmllbGQtZGl2IHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZS1pbi1vdXQgMjUwbXM7XG59XG5cbmRpYWxvZy5kaXNwbGF5ZWQubmV3LXRhc2sgPiBmb3JtID4gLnRhc2stdGl0bGUtZmllbGQtZGl2IHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZS1pbi1vdXQgMzAwbXM7XG59XG5cbmRpYWxvZy5kaXNwbGF5ZWQubmV3LXRhc2sgPiBmb3JtID4gLnRhc2stbm90ZXMtZmllbGQtZGl2IHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZS1pbi1vdXQgMzUwbXM7XG59XG5cbmRpYWxvZy5kaXNwbGF5ZWQubmV3LXRhc2sgPiBmb3JtID4gLnRhc2stcHJpb3JpdHktZmllbGQtZGl2IHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZS1pbi1vdXQgNDAwbXM7XG59XG5cbmRpYWxvZy5kaXNwbGF5ZWQubmV3LXRhc2sgPiBmb3JtID4gLnRhc2stZGF0ZS1maWVsZC1kaXYge1xuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlLWluLW91dCA0NTBtcztcbn1cblxuZGlhbG9nLmRpc3BsYXllZC5uZXctdGFzayA+IGZvcm0gPiBidXR0b24ge1xuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlLWluLW91dCA1MDBtcztcbn1cblxuZGlhbG9nLmRpc3BsYXllZC5uZXctdGFzayA+IGZvcm0gPiAuY2xvc2UtcHJvamVjdC1kaWFsb2cge1xuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlLWluLW91dCA1NTBtcztcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUdBO0lBQ0ksbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4Qix1QkFBdUI7SUFDdkIsd0JBQXdCOztJQUV4QixxQkFBcUI7SUFDckIsMEJBQTBCO0lBQzFCLHlCQUF5QjtJQUN6QiwwQkFBMEI7O0lBRTFCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2Qix3QkFBd0I7O0lBRXhCLHNCQUFzQjtJQUN0QiwyQkFBMkIsRUFBRSxPQUFPO0lBQ3BDLDBCQUEwQjtJQUMxQiwyQkFBMkIsRUFBRSxPQUFPOztJQUVwQyxnQkFBZ0I7SUFDaEIsa0JBQWtCLEVBQUUsT0FBTztJQUMzQixrQkFBa0I7SUFDbEIsa0JBQWtCOztJQUVsQixrQkFBa0I7SUFDbEIsdUJBQXVCLEVBQUUsT0FBTztJQUNoQyxtQkFBbUI7SUFDbkIsb0JBQW9CO0FBQ3hCOzs7QUFHQTtJQUNJLDJCQUEyQjtJQUMzQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSTs7Ozs7QUFLSjs7O0FBR0EsbUJBQW1COztBQUVuQjtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLHdCQUF3QjtJQUN4QixpQ0FBaUM7SUFDakMsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0kseUNBQXlDO0lBQ3pDLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksMkNBQTJDO0lBQzNDLHlDQUF5QztJQUN6QyxlQUFlO0lBQ2YsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksT0FBTztJQUNQLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYix5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxlQUFlO0lBQ2YseUNBQXlDO0lBQ3pDLDJDQUEyQztBQUMvQzs7QUFFQTtJQUNJLE9BQU87SUFDUCx5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsWUFBWTtJQUNaLFdBQVc7SUFDWCxjQUFjO0lBQ2QsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixTQUFTO0lBQ1QsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kscUNBQXFDO0lBQ3JDLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsT0FBTztJQUNQLCtCQUErQjtJQUMvQixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsU0FBUztJQUNULFdBQVc7QUFDZjs7O0FBR0Esb0JBQW9COztBQUVwQjs7SUFFSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7OztBQUdBLGlDQUFpQzs7QUFFakM7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFVBQVU7SUFDVixxQkFBcUI7SUFDckI7OzRDQUV3QztBQUM1Qzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsVUFBVTtBQUNkOztBQUVBO0lBQ0ksVUFBVTtJQUNWLE9BQU87SUFDUCxtQkFBbUI7SUFDbkIsNkRBQTZEO0FBQ2pFOztBQUVBO0lBQ0ksUUFBUTtJQUNSLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLHVDQUF1QztBQUMzQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1NYXRlcmlhbCtTeW1ib2xzK091dGxpbmVkOm9wc3osd2dodCxGSUxMLEdSQURAMjAuLjQ4LDEwMC4uNzAwLDAuLjEsLTUwLi4yMDAnKTtcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Kb3NlZmluK1NhbnM6d2dodEAxMDAmZmFtaWx5PUxhdG86d2dodEAzMDAmZmFtaWx5PU51bml0bzppdGFsLHdnaHRAMCwyMDA7MCwzMDA7MCw0MDA7MCw1MDA7MSwyMDA7MSwzMDA7MSw0MDA7MSw1MDAmZmFtaWx5PVJvYm90bzp3Z2h0QDEwMCZmYW1pbHk9UnViaWs6d2dodEAzMDAmZGlzcGxheT1zd2FwJyk7XFxuXFxuOnJvb3Qge1xcbiAgICAvKiBQcmltYXJ5IGNvbG9ycyAqL1xcbiAgICAtLXByaW1hcnktY29sb3I6ICMzNDk4ZGI7XFxuICAgIC0tcHJpbWFyeS1kYXJrOiAjMjk4MGI5O1xcbiAgICAtLXByaW1hcnktbGlnaHQ6ICM4N0NFRkE7XFxuXFxuICAgIC8qIFNlY29uZGFyeSBjb2xvcnMgKi9cXG4gICAgLS1zZWNvbmRhcnktY29sb3I6ICMyZWNjNzE7XFxuICAgIC0tc2Vjb25kYXJ5LWRhcms6ICMyN2FlNjA7XFxuICAgIC0tc2Vjb25kYXJ5LWxpZ2h0OiAjYzhlNmM5O1xcblxcbiAgICAvKiBBY2NlbnQgY29sb3JzICovXFxuICAgIC0tYWNjZW50LWNvbG9yOiAjQkExODFCO1xcbiAgICAtLWFjY2VudC1kYXJrOiAjQTQxNjFBO1xcbiAgICAtLWFjY2VudC1saWdodDogI0U1MzgzQjtcXG4gICAgLS1hY2NlbnQtZGFya2VyOiAjNjYwNzA4O1xcblxcbiAgICAvKiBCYWNrZ3JvdW5kIGNvbG9ycyAqL1xcbiAgICAtLWJhY2tncm91bmQtY29sb3I6ICNGNUVCRTA7IC8qdXNlZCovXFxuICAgIC0tYmFja2dyb3VuZC1kYXJrOiAjYmRjM2M3O1xcbiAgICAtLWJhY2tncm91bmQtbGlnaHQ6ICNFREVERTk7IC8qdXNlZCovXFxuXFxuICAgIC8qIFRleHQgY29sb3JzICovXFxuICAgIC0tdGV4dC1jb2xvcjogIzMzMzsgLyp1c2VkKi9cXG4gICAgLS10ZXh0LWxpZ2h0OiAjZmZmO1xcbiAgICAtLXRleHQtbXV0ZWQ6ICM4ODg7XFxuXFxuICAgIC8qIEJvcmRlciBjb2xvcnMgKi9cXG4gICAgLS1ib3JkZXItY29sb3I6ICNENkNDQzI7IC8qdXNlZCovXFxuICAgIC0tYm9yZGVyLWRhcms6ICM5OTk7XFxuICAgIC0tYm9yZGVyLWxpZ2h0OiAjZWVlO1xcbn1cXG5cXG5cXG46OmJhY2tkcm9wIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDg4O1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcXG59XFxuXFxuLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xcbiAgICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczpcXG4gICAgJ0ZJTEwnIDAsXFxuICAgICd3Z2h0JyA0MDAsXFxuICAgICdHUkFEJyAwLFxcbiAgICAnb3BzeicgMjRcXG59XFxuXFxuXFxuLyogR2VuZXJhbCBsYXlvdXQgKi9cXG5cXG4qIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XFxuICAgIGZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtbGlnaHQpO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxufVxcblxcbi5tYWluIHtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLm1haW4gPiAubGVmdCB7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBmbGV4OiAwIDAgMzAwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gMTAwcHgpO1xcbn1cXG5cXG4ubWFpbiA+IC5yaWdodCB7XFxuICAgIGZsZXg6IDE7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxufVxcblxcbi5tYWluID4gLmZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xcbn1cXG5cXG4ubWFpbiA+IC5mb290ZXIgPiAuZm9vdGVyLWxlZnQge1xcbiAgICBmbGV4OiAwIDAgMzAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhY2tncm91bmQtY29sb3IpO1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItY29sb3IpO1xcbn1cXG5cXG4ubWFpbiA+IC5mb290ZXIgPiAuZm9vdGVyLXJpZ2h0IHtcXG4gICAgZmxleDogMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZC1saWdodCk7XFxufVxcblxcbi5yaWdodC1maXJzdC1zZWN0aW9uIHtcXG4gICAgcGFkZGluZzogNTBweCAxMHB4IDUwcHggMTBweDtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTVweDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnJpZ2h0LWZpcnN0LXNlY3Rpb24gPiAudGFzayB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGZsZXg6IDE7XFxuICAgIHdpZHRoOiBjbGFtcCgyMDBweCwgNjAlLCA4MDBweCk7XFxuICAgIC8qIG1heC13aWR0aDogNTAwcHg7ICovXFxufVxcblxcbi5mb290ZXIge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcblxcbi8qIExlZnQgZGl2IGxheW91dCAqL1xcblxcbi5sZWZ0ID4gLmxlZnQtZmlyc3Qtc2VjdGlvbixcXG4ubGVmdCA+IC5sZWZ0LXNlY29uZC1zZWN0aW9uIHtcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcbi5sZWZ0ID4gLmxlZnQtZmlyc3Qtc2VjdGlvbiBwIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbn1cXG5cXG4ubGVmdCA+IC5sZWZ0LWZpcnN0LXNlY3Rpb24gbGkge1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuXFxuLmxlZnQgPiAubGVmdC1zZWNvbmQtc2VjdGlvbiBwIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbn1cXG5cXG4ubGVmdCA+IC5sZWZ0LXNlY29uZC1zZWN0aW9uIGxpIHtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcblxcblxcbi8qIERpYWxvZyBsYXlvdXQgYW5kIGFuaW1hdGlvbnMgKi9cXG5cXG4ubmV3LXByb2plY3Qge1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGF6dXJlO1xcbn1cXG5cXG4ubmV3LXRhc2sge1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGF6dXJlO1xcbn1cXG5cXG5kaWFsb2cge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbn1cXG5cXG5kaWFsb2cuaGlkZGVuIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdG9wOiAtMjAwJTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UtaW4tb3V0LCBcXG4gICAgICAgICAgICAgICAgdG9wIDEwMDBtcyBlYXNlLWluLW91dCxcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtIDEwMDBtcyBlYXNlLWluLW91dDtcXG59XFxuXFxuZGlhbG9nLmhpZGRlbiA+IGZvcm0gPiAqIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB0b3A6IDEwcHg7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbmRpYWxvZy5kaXNwbGF5ZWQge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0b3A6IDAlO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMzAwbXMgY3ViaWMtYmV6aWVyKDAuMTgsMC44OSwwLjQzLDEuMTkpO1xcbn1cXG5cXG5kaWFsb2cuZGlzcGxheWVkID4gZm9ybSA+ICoge1xcbiAgICB0b3A6IDBweDtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuZGlhbG9nLmRpc3BsYXllZC5uZXctcHJvamVjdCA+IGZvcm0gPiAucHJvamVjdC1uYW1lLWZpZWxkLWRpdiB7XFxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlLWluLW91dCAyNTBtcztcXG59XFxuXFxuZGlhbG9nLmRpc3BsYXllZC5uZXctcHJvamVjdCA+IGZvcm0gPiBidXR0b24ge1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZS1pbi1vdXQgMzAwbXM7XFxufVxcblxcbmRpYWxvZy5kaXNwbGF5ZWQubmV3LXByb2plY3QgPiBmb3JtID4gLmNsb3NlLXByb2plY3QtZGlhbG9nIHtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2UtaW4tb3V0IDM1MG1zO1xcbn1cXG5cXG5kaWFsb2cuZGlzcGxheWVkLm5ldy10YXNrID4gZm9ybSA+IC50YXNrLXByb2plY3QtZmllbGQtZGl2IHtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2UtaW4tb3V0IDI1MG1zO1xcbn1cXG5cXG5kaWFsb2cuZGlzcGxheWVkLm5ldy10YXNrID4gZm9ybSA+IC50YXNrLXRpdGxlLWZpZWxkLWRpdiB7XFxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlLWluLW91dCAzMDBtcztcXG59XFxuXFxuZGlhbG9nLmRpc3BsYXllZC5uZXctdGFzayA+IGZvcm0gPiAudGFzay1ub3Rlcy1maWVsZC1kaXYge1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZS1pbi1vdXQgMzUwbXM7XFxufVxcblxcbmRpYWxvZy5kaXNwbGF5ZWQubmV3LXRhc2sgPiBmb3JtID4gLnRhc2stcHJpb3JpdHktZmllbGQtZGl2IHtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2UtaW4tb3V0IDQwMG1zO1xcbn1cXG5cXG5kaWFsb2cuZGlzcGxheWVkLm5ldy10YXNrID4gZm9ybSA+IC50YXNrLWRhdGUtZmllbGQtZGl2IHtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGVhc2UtaW4tb3V0IDQ1MG1zO1xcbn1cXG5cXG5kaWFsb2cuZGlzcGxheWVkLm5ldy10YXNrID4gZm9ybSA+IGJ1dHRvbiB7XFxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcyBlYXNlLWluLW91dCA1MDBtcztcXG59XFxuXFxuZGlhbG9nLmRpc3BsYXllZC5uZXctdGFzayA+IGZvcm0gPiAuY2xvc2UtcHJvamVjdC1kaWFsb2cge1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXMgZWFzZS1pbi1vdXQgNTUwbXM7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMuY3NzJztcblxuXG4vLyBQcm9qZWN0IG1vZHVsZSBcbmNvbnN0IFByb2plY3RNb2R1bGUgPSAoZnVuY3Rpb24oKSB7XG5cbiAgICAvLyBQcm9qZWN0cyBpbiBkZWZhdWx0IGNvbmZpZ3VyYXRpb25cbiAgICBsZXQgcHJvamVjdHMgPSBbXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgbmFtZTogJ1Nwb3J0JyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgICBuYW1lOiAnTWF0aCcsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgICAgbmFtZTogJ1Byb2dyYW1taW5nJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDQsXG4gICAgICAgICAgICBuYW1lOiAnTGVpc3VyZScsXG4gICAgICAgIH0sXG4gICAgXTtcblxuICAgIGxldCBwcm9qZWN0c0NvdW50ID0gcHJvamVjdHMubGVuZ3RoO1xuICAgIFxuICAgIC8vIEFkZCBuZXcgcHJvamVjdFxuICAgIGZ1bmN0aW9uIGNyZWF0ZVByb2plY3QobmFtZSkge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0ge307XG4gICAgICAgIHByb2plY3RzQ291bnQgPSBwcm9qZWN0c0NvdW50ICsgMTtcbiAgICAgICAgcHJvamVjdC5pZCA9IHByb2plY3RzQ291bnQ7XG4gICAgICAgIHByb2plY3QubmFtZSA9IG5hbWU7XG5cbiAgICAgICAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcblxuICAgICAgICByZXR1cm4gcHJvamVjdDtcbiAgICB9XG5cbiAgICAvLyBSZXRyaWV2ZSBwcm9qZWN0c1xuICAgIGZ1bmN0aW9uIGdldFByb2plY3RzKCkge1xuICAgICAgICByZXR1cm4gcHJvamVjdHMuc2xpY2UoKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjcmVhdGVQcm9qZWN0LFxuICAgICAgICBnZXRQcm9qZWN0cyxcbiAgICB9XG4gICAgXG59KSgpO1xuXG5cbi8vIFRhc2sgbW9kdWxlIFxuY29uc3QgVGFza01vZHVsZSA9IChmdW5jdGlvbigpIHtcblxuICAgIGxldCB0YXNrcyA9IFtcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDAsXG4gICAgICAgICAgICBwcm9qZWN0OiAwLFxuICAgICAgICAgICAgdGl0bGU6ICdDb21wbGV0ZSBFeGVyY2lzZSAxJyxcbiAgICAgICAgICAgIG5vdGVzOiAnUmVtZW1iZXIgdG8gZm9jdXMgb24gdGhlIGtleSBjb25jZXB0cycsXG4gICAgICAgICAgICBwcmlvcml0eTogJ0hpZ2gnLFxuICAgICAgICAgICAgZGF0ZTogJzIwMjMtMTEtMTUnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgIHByb2plY3Q6IDEsXG4gICAgICAgICAgICB0aXRsZTogJ1N0dWR5IEFsZ2VicmEnLFxuICAgICAgICAgICAgbm90ZXM6ICdSZXZpZXcgY2hhcHRlcnMgMyBhbmQgNCBmb3IgdGhlIHVwY29taW5nIHRlc3QnLFxuICAgICAgICAgICAgcHJpb3JpdHk6ICdNZWRpdW0nLFxuICAgICAgICAgICAgZGF0ZTogJzIwMjMtMTEtMTcnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogMixcbiAgICAgICAgICAgIHByb2plY3Q6IDIsXG4gICAgICAgICAgICB0aXRsZTogJ0NvZGUgUmV2aWV3IGZvciBQcm9qZWN0IFgnLFxuICAgICAgICAgICAgbm90ZXM6ICdDaGVjayBmb3IgY29kZSBxdWFsaXR5IGFuZCBwb3RlbnRpYWwgb3B0aW1pemF0aW9ucycsXG4gICAgICAgICAgICBwcmlvcml0eTogJ0hpZ2gnLFxuICAgICAgICAgICAgZGF0ZTogJzIwMjMtMTEtMTgnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogMyxcbiAgICAgICAgICAgIHByb2plY3Q6IDMsXG4gICAgICAgICAgICB0aXRsZTogJ0J1eSBncm9jZXJpZXMnLFxuICAgICAgICAgICAgbm90ZXM6ICdNaWxrLCBlZ2dzLCBicmVhZCwgYW5kIGZydWl0cycsXG4gICAgICAgICAgICBwcmlvcml0eTogJ0xvdycsXG4gICAgICAgICAgICBkYXRlOiAnMjAyMy0xMS0yMCcsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiA0LFxuICAgICAgICAgICAgcHJvamVjdDogNCxcbiAgICAgICAgICAgIHRpdGxlOiAnUmVhZCBcIlRoZSBHcmVhdCBHYXRzYnlcIicsXG4gICAgICAgICAgICBub3RlczogJ0NvbXBsZXRlIGNoYXB0ZXJzIDEtMyBieSB0aGUgZW5kIG9mIHRoZSB3ZWVrJyxcbiAgICAgICAgICAgIHByaW9yaXR5OiAnTWVkaXVtJyxcbiAgICAgICAgICAgIGRhdGU6ICcyMDIzLTExLTIyJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDUsXG4gICAgICAgICAgICBwcm9qZWN0OiAwLFxuICAgICAgICAgICAgdGl0bGU6ICdQcmVwYXJlIHByZXNlbnRhdGlvbiBzbGlkZXMnLFxuICAgICAgICAgICAgbm90ZXM6ICdJbmNvcnBvcmF0ZSBmZWVkYmFjayBmcm9tIHRlYW0gbWVtYmVycycsXG4gICAgICAgICAgICBwcmlvcml0eTogJ0hpZ2gnLFxuICAgICAgICAgICAgZGF0ZTogJzIwMjMtMTEtMjUnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogNixcbiAgICAgICAgICAgIHByb2plY3Q6IDEsXG4gICAgICAgICAgICB0aXRsZTogJ1ByYWN0aWNlIGd1aXRhcicsXG4gICAgICAgICAgICBub3RlczogJ0xlYXJuIG5ldyBjaG9yZHMgYW5kIHByYWN0aWNlIHNjYWxlcycsXG4gICAgICAgICAgICBwcmlvcml0eTogJ01lZGl1bScsXG4gICAgICAgICAgICBkYXRlOiAnMjAyMy0xMS0yOCcsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiA3LFxuICAgICAgICAgICAgcHJvamVjdDogMixcbiAgICAgICAgICAgIHRpdGxlOiAnV3JpdGUgZG9jdW1lbnRhdGlvbicsXG4gICAgICAgICAgICBub3RlczogJ0RvY3VtZW50IHRoZSBuZXcgQVBJIGVuZHBvaW50cycsXG4gICAgICAgICAgICBwcmlvcml0eTogJ0hpZ2gnLFxuICAgICAgICAgICAgZGF0ZTogJzIwMjMtMTEtMzAnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogOCxcbiAgICAgICAgICAgIHByb2plY3Q6IDMsXG4gICAgICAgICAgICB0aXRsZTogJ1BsYW4gd2Vla2VuZCBoaWtlJyxcbiAgICAgICAgICAgIG5vdGVzOiAnQ2hlY2sgd2VhdGhlciBmb3JlY2FzdCBhbmQgcGFjayBlc3NlbnRpYWxzJyxcbiAgICAgICAgICAgIHByaW9yaXR5OiAnTG93JyxcbiAgICAgICAgICAgIGRhdGU6ICcyMDIzLTEyLTAyJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDksXG4gICAgICAgICAgICBwcm9qZWN0OiA0LFxuICAgICAgICAgICAgdGl0bGU6ICdXYXRjaCBjb2RpbmcgdHV0b3JpYWwnLFxuICAgICAgICAgICAgbm90ZXM6ICdGb2N1cyBvbiBhZHZhbmNlZCBKYXZhU2NyaXB0IGNvbmNlcHRzJyxcbiAgICAgICAgICAgIHByaW9yaXR5OiAnTWVkaXVtJyxcbiAgICAgICAgICAgIGRhdGU6ICcyMDIzLTEyLTA1JyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgICAgaWQ6IDEwLFxuICAgICAgICAgICAgcHJvamVjdDogMCxcbiAgICAgICAgICAgIHRpdGxlOiAnUmV2aWV3IG1lZXRpbmcgbm90ZXMnLFxuICAgICAgICAgICAgbm90ZXM6ICdQcmVwYXJlIGFjdGlvbiBpdGVtcyBmb3IgZm9sbG93LXVwJyxcbiAgICAgICAgICAgIHByaW9yaXR5OiAnSGlnaCcsXG4gICAgICAgICAgICBkYXRlOiAnMjAyMy0xMi0wOCcsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlkOiAxMSxcbiAgICAgICAgICAgIHByb2plY3Q6IDEsXG4gICAgICAgICAgICB0aXRsZTogJ0NyZWF0ZSBmbGFzaGNhcmRzJyxcbiAgICAgICAgICAgIG5vdGVzOiAnRm9yIG1lbW9yaXppbmcgaW1wb3J0YW50IG1hdGggZm9ybXVsYXMnLFxuICAgICAgICAgICAgcHJpb3JpdHk6ICdNZWRpdW0nLFxuICAgICAgICAgICAgZGF0ZTogJzIwMjMtMTItMTAnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogMTIsXG4gICAgICAgICAgICBwcm9qZWN0OiAyLFxuICAgICAgICAgICAgdGl0bGU6ICdSZWZhY3RvciBjb2RlJyxcbiAgICAgICAgICAgIG5vdGVzOiAnQWRkcmVzcyBjb2RlIHNtZWxscyBhbmQgaW1wcm92ZSByZWFkYWJpbGl0eScsXG4gICAgICAgICAgICBwcmlvcml0eTogJ0hpZ2gnLFxuICAgICAgICAgICAgZGF0ZTogJzIwMjMtMTItMTInLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogMTMsXG4gICAgICAgICAgICBwcm9qZWN0OiAzLFxuICAgICAgICAgICAgdGl0bGU6ICdXYXRlciB0aGUgcGxhbnRzJyxcbiAgICAgICAgICAgIG5vdGVzOiAnQ2hlY2sgc29pbCBtb2lzdHVyZSBhbmQgd2F0ZXIgYWNjb3JkaW5nbHknLFxuICAgICAgICAgICAgcHJpb3JpdHk6ICdMb3cnLFxuICAgICAgICAgICAgZGF0ZTogJzIwMjMtMTItMTUnLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBpZDogMTQsXG4gICAgICAgICAgICBwcm9qZWN0OiA0LFxuICAgICAgICAgICAgdGl0bGU6ICdQcmFjdGljZSBtaW5kZnVsbmVzcyBtZWRpdGF0aW9uJyxcbiAgICAgICAgICAgIG5vdGVzOiAnVGFrZSBhIGJyZWFrIGFuZCBjbGVhciB0aGUgbWluZCcsXG4gICAgICAgICAgICBwcmlvcml0eTogJ01lZGl1bScsXG4gICAgICAgICAgICBkYXRlOiAnMjAyMy0xMi0xOCcsXG4gICAgICAgIH0sXG5cbiAgICBdO1xuICAgIFxuICAgIC8vIEFkZCBuZXcgdGFzayBvYmplY3RcbiAgICBmdW5jdGlvbiBjcmVhdGVUYXNrKHByb2plY3QsIHRpdGxlLCBub3RlcywgcHJpb3JpdHksIGRhdGUpIHtcbiAgICAgICAgY29uc3QgdGFzayA9IHt9O1xuICAgICAgICB0YXNrLnByb2plY3QgPSBwcm9qZWN0O1xuICAgICAgICB0YXNrLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRhc2subm90ZXMgPSBub3RlcztcbiAgICAgICAgdGFzay5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgICAgICB0YXNrLmRhdGUgPSBkYXRlO1xuXG4gICAgICAgIHRhc2tzLnB1c2godGFzayk7XG5cbiAgICAgICAgcmV0dXJuIHRhc2s7XG4gICAgfVxuXG4gICAgLy8gUmV0cmlldmUgdGFza3NcbiAgICBmdW5jdGlvbiBnZXRUYXNrcygpIHtcbiAgICAgICAgcmV0dXJuIHRhc2tzLnNsaWNlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgY3JlYXRlVGFzayxcbiAgICAgICAgZ2V0VGFza3MsXG4gICAgfVxuICAgIFxufSkoKTtcblxuXG4vLyBET00gbW9kdWxlXG5jb25zdCBET01Nb2R1bGUgPSAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIGNyZWF0ZU1haW5EaXYoKSB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgICAgIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWFpbkRpdi5jbGFzc0xpc3QuYWRkKCdtYWluJyk7XG4gICAgICAgIGJvZHkuYXBwZW5kKG1haW5EaXYpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZURpYWxvZ3MoKSB7XG4gICAgICAgIGNvbnN0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gICAgICAgIG5ld1Byb2plY3REaWFsb2dIYW5kbGVyKCk7XG4gICAgICAgIG5ld1Rhc2tEaWFsb2dIYW5kbGVyKCk7XG5cbiAgICAgICAgZnVuY3Rpb24gbmV3UHJvamVjdERpYWxvZ0hhbmRsZXIoKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdQcm9qZWN0RGlhbG9nID0gY3JlYXRlUHJvamVjdERpYWxvZygpO1xuICAgICAgICAgICAgY29uc3QgbmV3UHJvamVjdERpYWxvZ0Zvcm0gPSBjcmVhdGVQcm9qZWN0RGlhbG9nRm9ybSgpO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0RGlhbG9nKCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Byb2plY3REaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaWFsb2cnKTtcbiAgICAgICAgICAgICAgICBuZXdQcm9qZWN0RGlhbG9nLmNsYXNzTGlzdC5hZGQoJ25ldy1wcm9qZWN0JywgJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgIGJvZHkuYXBwZW5kKG5ld1Byb2plY3REaWFsb2cpO1xuICAgICAgICAgICAgICAgIHJldHVybiBuZXdQcm9qZWN0RGlhbG9nO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0RGlhbG9nRm9ybSgpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdQcm9qZWN0RGlhbG9nRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICAgICAgICAgICAgICBuZXdQcm9qZWN0RGlhbG9nLmFwcGVuZChuZXdQcm9qZWN0RGlhbG9nRm9ybSk7XG4gICAgICAgICAgICAgICAgbmV3UHJvamVjdERpYWxvZ0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2RpYWxvZy5uZXctcHJvamVjdCA+IGZvcm0gaW5wdXQjcHJvamVjdC1uYW1lJyk7XG4gICAgICAgICAgICAgICAgICAgIFByb2plY3RNb2R1bGUuY3JlYXRlUHJvamVjdChwcm9qZWN0TmFtZS52YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIERPTU1vZHVsZS5jcmVhdGVMZWZ0RGl2LmNyZWF0ZVByb2plY3RzKFByb2plY3RNb2R1bGUuZ2V0UHJvamVjdHMoKSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgbmFtZUZpZWxkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgbmFtZUZpZWxkRGl2LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtbmFtZS1maWVsZC1kaXYnKTtcbiAgICAgICAgICAgICAgICBuZXdQcm9qZWN0RGlhbG9nRm9ybS5hcHBlbmQobmFtZUZpZWxkRGl2KTtcbiAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBuYW1lRmllbGRMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgICAgICAgICAgbmFtZUZpZWxkTGFiZWwudGV4dENvbnRlbnQgPSAnTmFtZSc7XG4gICAgICAgICAgICAgICAgbmFtZUZpZWxkTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAncHJvamVjdC1uYW1lJyk7XG4gICAgICAgICAgICAgICAgbmFtZUZpZWxkRGl2LmFwcGVuZChuYW1lRmllbGRMYWJlbCk7XG4gICAgXG4gICAgICAgICAgICAgICAgY29uc3QgbmFtZUZpZWxkSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgIG5hbWVGaWVsZElucHV0LnRleHRDb250ZW50ID0gJ05hbWUnO1xuICAgICAgICAgICAgICAgIG5hbWVGaWVsZElucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gICAgICAgICAgICAgICAgbmFtZUZpZWxkSW5wdXQuc2V0QXR0cmlidXRlKCdpZCcsICdwcm9qZWN0LW5hbWUnKTtcbiAgICAgICAgICAgICAgICBuYW1lRmllbGREaXYuYXBwZW5kKG5hbWVGaWVsZElucHV0KTtcbiAgICBcbiAgICAgICAgICAgICAgICBjb25zdCBzdWJtaXRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgc3VibWl0UHJvamVjdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gICAgICAgICAgICAgICAgc3VibWl0UHJvamVjdEJ1dHRvbi50ZXh0Q29udGVudCA9ICdTYXZlJztcbiAgICAgICAgICAgICAgICBuZXdQcm9qZWN0RGlhbG9nRm9ybS5hcHBlbmQoc3VibWl0UHJvamVjdEJ1dHRvbik7XG4gICAgXG4gICAgICAgICAgICAgICAgY29uc3QgY2xvc2VQcm9qZWN0RGlhbG9nRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgY2xvc2VQcm9qZWN0RGlhbG9nRGl2LmNsYXNzTGlzdC5hZGQoJ2Nsb3NlLXByb2plY3QtZGlhbG9nJyk7XG4gICAgICAgICAgICAgICAgbmV3UHJvamVjdERpYWxvZ0Zvcm0uYXBwZW5kKGNsb3NlUHJvamVjdERpYWxvZ0Rpdik7XG4gICAgXG4gICAgICAgICAgICAgICAgY29uc3QgY2xvc2VQcm9qZWN0RGlhbG9nU3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgICAgICBjbG9zZVByb2plY3REaWFsb2dTcGFuLmNsYXNzTGlzdC5hZGQoJ21hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQnKTtcbiAgICAgICAgICAgICAgICBjbG9zZVByb2plY3REaWFsb2dTcGFuLnRleHRDb250ZW50ID0gJ2Nsb3NlJztcbiAgICAgICAgICAgICAgICBjbG9zZVByb2plY3REaWFsb2dEaXYuYXBwZW5kKGNsb3NlUHJvamVjdERpYWxvZ1NwYW4pO1xuXG4gICAgICAgICAgICAgICAgLy8gQWRkIGNsb3NlIGFuaW1hdGlvbiBvbiBTYXZlIGFuZCBDbG9zZVxuICAgICAgICAgICAgICAgIGhhbmRsZUNsb3NlQW5pbWF0aW9uKG5ld1Byb2plY3REaWFsb2dGb3JtLCBuZXdQcm9qZWN0RGlhbG9nLCAnc3VibWl0JywgbmV3UHJvamVjdERpYWxvZ0Zvcm0pO1xuICAgICAgICAgICAgICAgIGhhbmRsZUNsb3NlQW5pbWF0aW9uKGNsb3NlUHJvamVjdERpYWxvZ1NwYW4sIG5ld1Byb2plY3REaWFsb2csICdjbGljaycsIG5ld1Byb2plY3REaWFsb2dGb3JtKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBuZXdQcm9qZWN0RGlhbG9nRm9ybTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIG5ld1Rhc2tEaWFsb2dIYW5kbGVyKCkge1xuICAgICAgICAgICAgY29uc3QgbmV3VGFza0RpYWxvZyA9IGNyZWF0ZVRhc2tEaWFsb2coKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1Rhc2tEaWFsb2dGb3JtID0gY3JlYXRlVGFza0RpYWxvZ0Zvcm0oKTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlVGFza0RpYWxvZygpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdUYXNrRGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJyk7XG4gICAgICAgICAgICAgICAgbmV3VGFza0RpYWxvZy5jbGFzc0xpc3QuYWRkKCduZXctdGFzaycsICdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICBib2R5LmFwcGVuZChuZXdUYXNrRGlhbG9nKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3VGFza0RpYWxvZztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gY3JlYXRlVGFza0RpYWxvZ0Zvcm0oKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV3VGFza0RpYWxvZ0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgICAgICAgICAgbmV3VGFza0RpYWxvZy5hcHBlbmQobmV3VGFza0RpYWxvZ0Zvcm0pO1xuICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Rhc2tEaWFsb2dGaWVsZHNUZW1wbGF0ZSA9IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGl2X2NsYXNzOiAndGFzay1wcm9qZWN0LWZpZWxkLWRpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dF9pZDogJ3Rhc2stcHJvamVjdCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1Byb2plY3QnLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXZfY2xhc3M6ICd0YXNrLXRpdGxlLWZpZWxkLWRpdicsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dF9pZDogJ3Rhc2stdGl0bGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdUaXRsZScsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdl9jbGFzczogJ3Rhc2stbm90ZXMtZmllbGQtZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0X2lkOiAndGFzay1ub3RlcycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ05vdGVzJyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGl2X2NsYXNzOiAndGFzay1wcmlvcml0eS1maWVsZC1kaXYnLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRfaWQ6ICd0YXNrLXByaW9yaXR5JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnUHJpb3JpdHknLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXZfY2xhc3M6ICd0YXNrLWRhdGUtZmllbGQtZGl2JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0X2lkOiAndGFzay1kYXRlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnRGF0ZScsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXTtcbiAgICBcbiAgICAgICAgICAgICAgICBuZXdUYXNrRGlhbG9nRmllbGRzVGVtcGxhdGUuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmllbGREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgZmllbGREaXYuY2xhc3NMaXN0LmFkZChlbGVtZW50LmRpdl9jbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgIG5ld1Rhc2tEaWFsb2dGb3JtLmFwcGVuZChmaWVsZERpdik7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICAgICAgICAgICAgICBmaWVsZExhYmVsLnRleHRDb250ZW50ID0gZWxlbWVudC5sYWJlbDtcbiAgICAgICAgICAgICAgICAgICAgZmllbGRMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGVsZW1lbnQuaW5wdXRfaWQpO1xuICAgICAgICAgICAgICAgICAgICBmaWVsZERpdi5hcHBlbmQoZmllbGRMYWJlbCk7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgICAgICBmaWVsZElucHV0LnRleHRDb250ZW50ID0gZWxlbWVudC5sYWJlbDtcbiAgICAgICAgICAgICAgICAgICAgZmllbGRJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCBlbGVtZW50LnR5cGUpO1xuICAgICAgICAgICAgICAgICAgICBmaWVsZElucHV0LnNldEF0dHJpYnV0ZSgnaWQnLCBlbGVtZW50LmlucHV0X2lkKTtcbiAgICAgICAgICAgICAgICAgICAgZmllbGREaXYuYXBwZW5kKGZpZWxkSW5wdXQpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgXG4gICAgICAgICAgICAgICAgY29uc3Qgc3VibWl0VGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgICAgIHN1Ym1pdFRhc2tCdXR0b24uc2V0QXR0cmlidXRlKCd0eXBlJywgJ3N1Ym1pdCcpO1xuICAgICAgICAgICAgICAgIHN1Ym1pdFRhc2tCdXR0b24udGV4dENvbnRlbnQgPSAnU2F2ZSc7XG4gICAgICAgICAgICAgICAgbmV3VGFza0RpYWxvZ0Zvcm0uYXBwZW5kKHN1Ym1pdFRhc2tCdXR0b24pO1xuICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IGNsb3NlVGFza0RpYWxvZ0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGNsb3NlVGFza0RpYWxvZ0Rpdi5jbGFzc0xpc3QuYWRkKCdjbG9zZS1wcm9qZWN0LWRpYWxvZycpO1xuICAgICAgICAgICAgICAgIG5ld1Rhc2tEaWFsb2dGb3JtLmFwcGVuZChjbG9zZVRhc2tEaWFsb2dEaXYpO1xuICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IGNsb3NlVGFza0RpYWxvZ1NwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICAgICAgY2xvc2VUYXNrRGlhbG9nU3Bhbi5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkJyk7XG4gICAgICAgICAgICAgICAgY2xvc2VUYXNrRGlhbG9nU3Bhbi50ZXh0Q29udGVudCA9ICdjbG9zZSc7XG4gICAgICAgICAgICAgICAgY2xvc2VUYXNrRGlhbG9nRGl2LmFwcGVuZChjbG9zZVRhc2tEaWFsb2dTcGFuKTtcbiAgICBcbiAgICAgICAgICAgICAgICAvLyBBZGQgY2xvc2UgYW5pbWF0aW9uIG9uIFNhdmUgYW5kIENsb3NlXG4gICAgICAgICAgICAgICAgaGFuZGxlQ2xvc2VBbmltYXRpb24obmV3VGFza0RpYWxvZ0Zvcm0sIG5ld1Rhc2tEaWFsb2csICdzdWJtaXQnLCBuZXdUYXNrRGlhbG9nRm9ybSk7XG4gICAgICAgICAgICAgICAgaGFuZGxlQ2xvc2VBbmltYXRpb24oY2xvc2VUYXNrRGlhbG9nU3BhbiwgbmV3VGFza0RpYWxvZywgJ2NsaWNrJywgbmV3VGFza0RpYWxvZ0Zvcm0pO1xuICAgICAgICAgICAgfSAgIFxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBDbG9zZSBhbmltYXRpb24gb24gRVNDXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG9wZW5EaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaWFsb2dbb3Blbl0nKTtcbiAgICAgICAgICAgICAgICBpZiAob3BlbkRpYWxvZykge1xuICAgICAgICAgICAgICAgICAgICBjbG9zZURpYWxvZyhvcGVuRGlhbG9nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIENsb3NlIGFuaW1hdGlvbiBoYW5kbGVyXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZUNsb3NlQW5pbWF0aW9uKGV2ZW50RWxlbWVudCwgZGlhbG9nLCBldmVudFR5cGUsIGZvcm0pIHtcbiAgICAgICAgICAgIGV2ZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50VHlwZSwgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBmb3JtLnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgY2xvc2VEaWFsb2coZGlhbG9nKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2xvc2UgZGlhbG9nXG4gICAgICAgIGZ1bmN0aW9uIGNsb3NlRGlhbG9nKGRpYWxvZykge1xuICAgICAgICAgICAgZGlhbG9nLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgICAgICAgZGlhbG9nLmNsYXNzTGlzdC5yZW1vdmUoJ2Rpc3BsYXllZCcpO1xuICAgICAgICAgICAgZGlhbG9nLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBmdW5jdGlvbiBoYW5kbGVUcmFuc2l0aW9uRW5kKCkge1xuICAgICAgICAgICAgICAgIGRpYWxvZy5jbG9zZSgpO1xuICAgICAgICAgICAgICAgIGRpYWxvZy5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgaGFuZGxlVHJhbnNpdGlvbkVuZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcblxuICAgIC8vIEhhbmRsZXIgZm9yIGxlZnQgZGl2XG4gICAgY29uc3QgY3JlYXRlTGVmdERpdiA9IChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgLy8gQ3JlYXRlIGxheW91dCBzdHJ1Y3R1cmVcbiAgICAgICAgZnVuY3Rpb24gY3JlYXRlU3RydWN0dXJlICgpIHtcbiAgICAgICAgICAgIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbicpO1xuICAgICAgICAgICAgY29uc3QgbGVmdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbGVmdERpdi5jbGFzc0xpc3QuYWRkKCdsZWZ0Jyk7XG4gICAgICAgICAgICBtYWluRGl2LmFwcGVuZChsZWZ0RGl2KTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IGxlZnRGaXJzdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgbGVmdEZpcnN0RGl2LmNsYXNzTGlzdC5hZGQoJ2xlZnQtZmlyc3Qtc2VjdGlvbicpO1xuICAgICAgICAgICAgbGVmdERpdi5hcHBlbmQobGVmdEZpcnN0RGl2KTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0U2VjdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgZmlyc3RTZWN0aW9uTGFiZWwudGV4dENvbnRlbnQgPSAnVGFza3MnO1xuICAgICAgICAgICAgbGVmdEZpcnN0RGl2LmFwcGVuZChmaXJzdFNlY3Rpb25MYWJlbCk7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBmaXJzdFNlY3Rpb25MaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgICAgIGxlZnRGaXJzdERpdi5hcHBlbmQoZmlyc3RTZWN0aW9uTGlzdCk7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBmaXJzdExpbmVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgIGZpcnN0TGluZUl0ZW0udGV4dENvbnRlbnQgPSAnVG9kYXknO1xuICAgICAgICAgICAgZmlyc3RTZWN0aW9uTGlzdC5hcHBlbmQoZmlyc3RMaW5lSXRlbSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHNlY29uZExpbmVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgIHNlY29uZExpbmVJdGVtLnRleHRDb250ZW50ID0gJ1RvbW9ycm93JztcbiAgICAgICAgICAgIGZpcnN0U2VjdGlvbkxpc3QuYXBwZW5kKHNlY29uZExpbmVJdGVtKTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IGxlZnRTZWNvbmREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGxlZnRTZWNvbmREaXYuY2xhc3NMaXN0LmFkZCgnbGVmdC1zZWNvbmQtc2VjdGlvbicpO1xuICAgICAgICAgICAgbGVmdERpdi5hcHBlbmQobGVmdFNlY29uZERpdik7XG4gICAgXG4gICAgICAgICAgICBjb25zdCBzZWNvbmRTZWN0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBzZWNvbmRTZWN0aW9uTGFiZWwudGV4dENvbnRlbnQgPSAnUHJvamVjdHMnO1xuICAgICAgICAgICAgbGVmdFNlY29uZERpdi5hcHBlbmQoc2Vjb25kU2VjdGlvbkxhYmVsKTtcbiAgICBcbiAgICAgICAgICAgIGNvbnN0IHNlY29uZFNlY3Rpb25MaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgICAgIHNlY29uZFNlY3Rpb25MaXN0LmNsYXNzTGlzdC5hZGQoJ3NlY29uZC1zZWN0aW9uLWxpc3QnKTtcbiAgICAgICAgICAgIGxlZnRTZWNvbmREaXYuYXBwZW5kKHNlY29uZFNlY3Rpb25MaXN0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbmRlciBwcm9qZWN0c1xuICAgICAgICBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0cyhwcm9qZWN0cykge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdExpbmVJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0Jyk7XG4gICAgICAgICAgICBpZiAocHJvamVjdExpbmVJdGVtcykge1xuICAgICAgICAgICAgICAgIHByb2plY3RMaW5lSXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5yZW1vdmUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcHJvamVjdHMuZm9yRWFjaChlbGVtZW50ID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzZWNvbmRTZWN0aW9uTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWNvbmQtc2VjdGlvbi1saXN0Jyk7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdExpbmVJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgICAgICBwcm9qZWN0TGluZUl0ZW0uY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuICAgICAgICAgICAgICAgIHByb2plY3RMaW5lSXRlbS50ZXh0Q29udGVudCA9IGVsZW1lbnQubmFtZTtcbiAgICAgICAgICAgICAgICBzZWNvbmRTZWN0aW9uTGlzdC5hcHBlbmQocHJvamVjdExpbmVJdGVtKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNyZWF0ZVN0cnVjdHVyZSxcbiAgICAgICAgICAgIGNyZWF0ZVByb2plY3RzLFxuICAgICAgICB9XG4gICAgfSkoKTtcblxuICAgIC8vIEhhbmRsZXIgZm9yIHJpZ2h0IGRpdlxuICAgIGNvbnN0IGNyZWF0ZVJpZ2h0RGl2ID0gKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAvLyBDcmVhdGUgbGF5b3V0IHN0cnVjdHVyZVxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVTdHJ1Y3R1cmUoKSB7XG4gICAgICAgICAgICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbiAgICAgICAgICAgIGNvbnN0IHJpZ2h0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICByaWdodERpdi5jbGFzc0xpc3QuYWRkKCdyaWdodCcpO1xuICAgICAgICAgICAgbWFpbkRpdi5hcHBlbmQocmlnaHREaXYpO1xuICAgIFxuICAgICAgICAgICAgY29uc3QgcmlnaHRGaXJzdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcmlnaHRGaXJzdERpdi5jbGFzc0xpc3QuYWRkKCdyaWdodC1maXJzdC1zZWN0aW9uJyk7XG4gICAgICAgICAgICByaWdodERpdi5hcHBlbmQocmlnaHRGaXJzdERpdik7XG4gICAgICAgIH1cblxuICAgICAgICAgLy8gUmVuZGVyIHRhc2tzXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVRhc2tzKHRhc2tzKSB7XG4gICAgICAgICAgICB0YXNrcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJpZ2h0Rmlyc3RTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJpZ2h0LWZpcnN0LXNlY3Rpb24nKTtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrTGluZUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICB0YXNrTGluZUl0ZW0uY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuICAgICAgICAgICAgICAgIHJpZ2h0Rmlyc3RTZWN0aW9uLmFwcGVuZCh0YXNrTGluZUl0ZW0pO1xuXG4gICAgICAgICAgICAgICAgY29uc3QgdGFza0ZpZWxkc1RlbXBsYXRlID0gW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXZfY2xhc3M6ICd0YXNrLXByb2plY3QtZmllbGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dENvbnRlbnQ6IGVsZW1lbnQucHJvamVjdCxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGl2X2NsYXNzOiAndGFzay10aXRsZS1maWVsZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q29udGVudDogZWxlbWVudC50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGl2X2NsYXNzOiAndGFzay1ub3Rlcy1maWVsZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q29udGVudDogZWxlbWVudC5ub3RlcyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGl2X2NsYXNzOiAndGFzay1wcmlvcml0eS1maWVsZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0Q29udGVudDogZWxlbWVudC5wcmlvcml0eSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGl2X2NsYXNzOiAndGFzay1kYXRlLWZpZWxkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHRDb250ZW50OiBlbGVtZW50LmRhdGUsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXTtcblxuICAgICAgICAgICAgICAgIHRhc2tGaWVsZHNUZW1wbGF0ZS5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGFza0ZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tGaWVsZC5jbGFzc0xpc3QuYWRkKGZpZWxkLmRpdl9jbGFzcyk7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tGaWVsZC50ZXh0Q29udGVudCA9IGZpZWxkLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgICAgICB0YXNrTGluZUl0ZW0uYXBwZW5kKHRhc2tGaWVsZCk7XG5cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY3JlYXRlU3RydWN0dXJlLFxuICAgICAgICAgICAgY3JlYXRlVGFza3MsXG4gICAgICAgIH1cbiAgICB9KSgpO1xuXG4gICAgY29uc3QgY3JlYXRlRm9vdGVyRGl2ID0gKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVTdHJ1Y3R1cmUoKSB7XG4gICAgICAgICAgICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4nKTtcbiAgICAgICAgICAgIGNvbnN0IGZvb3RlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZm9vdGVyRGl2LmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xuICAgICAgICAgICAgbWFpbkRpdi5hcHBlbmQoZm9vdGVyRGl2KTtcblxuICAgICAgICAgICAgY29uc3QgZm9vdGVyTGVmdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZm9vdGVyTGVmdERpdi5jbGFzc0xpc3QuYWRkKCdmb290ZXItbGVmdCcpO1xuICAgICAgICAgICAgZm9vdGVyRGl2LmFwcGVuZChmb290ZXJMZWZ0RGl2KTtcblxuICAgICAgICAgICAgY29uc3QgZm9vdGVyUmlnaHREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIGZvb3RlclJpZ2h0RGl2LmNsYXNzTGlzdC5hZGQoJ2Zvb3Rlci1yaWdodCcpO1xuICAgICAgICAgICAgZm9vdGVyRGl2LmFwcGVuZChmb290ZXJSaWdodERpdik7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBjcmVhdGVCdXR0b25zKCkge1xuICAgICAgICAgICAgY29uc3QgZm9vdGVyTGVmdERpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mb290ZXItbGVmdCcpO1xuICAgICAgICAgICAgY29uc3QgZm9vdGVyUmlnaHREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZm9vdGVyLXJpZ2h0Jyk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNyZWF0ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGNyZWF0ZVByb2plY3RCdXR0b24uY2xhc3NMaXN0LmFkZCgnY3JlYXRlLXByb2plY3QnKTtcbiAgICAgICAgICAgIGNyZWF0ZVByb2plY3RCdXR0b24udGV4dENvbnRlbnQgPSAnQ3JlYXRlIFByb2plY3QnO1xuICAgICAgICAgICAgZm9vdGVyTGVmdERpdi5hcHBlbmQoY3JlYXRlUHJvamVjdEJ1dHRvbik7XG4gICAgICAgICAgICBjcmVhdGVQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Byb2plY3REaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXByb2plY3QnKTtcbiAgICAgICAgICAgICAgICBuZXdQcm9qZWN0RGlhbG9nLnNob3dNb2RhbCgpO1xuICAgICAgICAgICAgICAgIG5ld1Byb2plY3REaWFsb2cuY2xhc3NMaXN0LmFkZCgnZGlzcGxheWVkJyk7XG4gICAgICAgICAgICAgICAgbmV3UHJvamVjdERpYWxvZy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGNvbnN0IGNyZWF0ZVRhc2tCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGNyZWF0ZVRhc2tCdXR0b24uY2xhc3NMaXN0LmFkZCgnY3JlYXRlLXRhc2snKTtcbiAgICAgICAgICAgIGNyZWF0ZVRhc2tCdXR0b24udGV4dENvbnRlbnQgPSAnQ3JlYXRlIFRhc2snO1xuICAgICAgICAgICAgZm9vdGVyUmlnaHREaXYuYXBwZW5kKGNyZWF0ZVRhc2tCdXR0b24pO1xuXG4gICAgICAgICAgICBjcmVhdGVUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Rhc2tEaWFsb2cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubmV3LXRhc2snKTtcbiAgICAgICAgICAgICAgICBuZXdUYXNrRGlhbG9nLnNob3dNb2RhbCgpO1xuICAgICAgICAgICAgICAgIG5ld1Rhc2tEaWFsb2cuY2xhc3NMaXN0LmFkZCgnZGlzcGxheWVkJyk7XG4gICAgICAgICAgICAgICAgbmV3VGFza0RpYWxvZy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY3JlYXRlU3RydWN0dXJlLFxuICAgICAgICAgICAgY3JlYXRlQnV0dG9ucyxcbiAgICAgICAgfVxuICAgIH0pKCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBjcmVhdGVNYWluRGl2LFxuICAgICAgICBjcmVhdGVEaWFsb2dzLFxuICAgICAgICBjcmVhdGVMZWZ0RGl2LFxuICAgICAgICBjcmVhdGVSaWdodERpdixcbiAgICAgICAgY3JlYXRlRm9vdGVyRGl2LFxuICAgIH1cbn0pKCk7XG5cblxuRE9NTW9kdWxlLmNyZWF0ZU1haW5EaXYoKTtcbkRPTU1vZHVsZS5jcmVhdGVEaWFsb2dzKCk7XG5ET01Nb2R1bGUuY3JlYXRlTGVmdERpdi5jcmVhdGVTdHJ1Y3R1cmUoKTtcbkRPTU1vZHVsZS5jcmVhdGVMZWZ0RGl2LmNyZWF0ZVByb2plY3RzKFByb2plY3RNb2R1bGUuZ2V0UHJvamVjdHMoKSk7XG5ET01Nb2R1bGUuY3JlYXRlUmlnaHREaXYuY3JlYXRlU3RydWN0dXJlKCk7XG5ET01Nb2R1bGUuY3JlYXRlUmlnaHREaXYuY3JlYXRlVGFza3MoVGFza01vZHVsZS5nZXRUYXNrcygpKTtcbkRPTU1vZHVsZS5jcmVhdGVGb290ZXJEaXYuY3JlYXRlU3RydWN0dXJlKCk7XG5ET01Nb2R1bGUuY3JlYXRlRm9vdGVyRGl2LmNyZWF0ZUJ1dHRvbnMoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=