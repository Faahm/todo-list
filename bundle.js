/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
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
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --primary: #7047d1;
  --background: #f7f5fd;
  --text: #06030b;
  --secondary: #e28ca3;
  --accent: #d87164;
}

*,
*::before,
*::after {
  font-family: inherit;
  box-sizing: border-box;
}

body {
  margin: 0;
  padding: 64px;
  font-family: "Work Sans", sans-serif;
  font-weight: 300;
  font-size: 1.5rem;
  background-color: var(--primary);
  color: var(--background);
  display: grid;
  grid-template-areas:
    "header header header header"
    "lists . active . "
    "lists . delete .";
  grid-template-rows: auto 1fr;
  grid-template-columns: minmax(100px, 300px) minmax(250px, 500px) 1fr 1fr;
}

.tasks {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.task {
  display: flex;
  justify-content: space-between;
}

.task-header {
  display: flex;
  gap: 4px;
}

.task-priority {
  width: 16px;
  height: auto;
  border-radius: 16px;
}

.todo-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.modal {
  color: var(--text);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.4rem;
  width: 450px;
  padding: 1.3rem;
  min-height: 250px;
  position: fixed;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 15px;
}

.modal input {
  padding: 0.7rem 1rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 0.9em;
}

.btn-open {
  font-size: 1rem;
}

.btn-close {
  font-size: 1.5rem;
  font-weight: 600;
  color: red !important;
}

.overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
  z-index: 1;
}

.hidden {
  display: none;
}

.title {
  grid-area: header;
  text-align: center;
  font-size: calc(7vw + 2rem);
  font-weight: 900;
  color: var(--secondary);
  letter-spacing: 2px;
  margin: -0.3em 0 0.5em;
}

.all-projects {
  grid-area: lists;
}

.task-project {
  font-size: 1.2rem;
  line-height: 1.7;
  list-style: circle;
  padding-left: 1.1em;
}

.project-name,
.project-item {
  cursor: pointer;
}

.project-name:hover {
  opacity: 0.7;
}

form {
  display: flex;
}

.btn {
  cursor: pointer;
  background: 0;
  border: 0;
  padding: 0;
  color: inherit;
}

.btn.create {
  font-size: 1.5rem;
  font-weight: 900;
  transition: opacity 250ms ease-in;
}

.btn.create:hover {
  opacity: 0.7;
}

.btn.delete {
  opacity: 0.7;
  font-size: 1rem;
  transition: color 200ms;
}

.btn.delete:hover {
  color: var(--accent);
}

.new {
  width: 90%;
  background: transparent;
  border: 0;
  color: inherit;
  border-bottom: 1px solid currentColor;
  font-size: inherit;
  outline: none;
  padding: 0.25em;
  transition: border-bottom 150ms ease-in;
}

.new::placeholder {
  opacity: 0.4;
}

.new:focus {
  border-bottom-width: 3px;
}

.new:focus::-webkit-input-placeholder {
  opacity: 0.15;
}

.new:focus:-ms-input-placeholder {
  opacity: 0.15;
}

.new:focus::-ms-input-placeholder {
  opacity: 0.15;
}

.new:focus::placeholder {
  opacity: 0.15;
}

.new.project {
  font-size: 1.1rem;
}

.new.todo {
  margin-bottom: 0;
}

.todo-project {
  grid-area: active;
  --spacer: 2rem;
  background: var(--background);
  color: var(--text);
  width: 60vw;
  height: auto;
}

.todo-header {
  padding: var(--spacer);
  background: var(--secondary);
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.project-title {
  margin: 0 1em 0 0;
}

.todo-body {
  padding: var(--spacer);
  position: relative;
}

.new-task-creator .create {
  color: var(--primary);
}

[type="checkbox"] {
  opacity: 0;
  position: absolute;
}

.todo label {
  display: flex-inline;
  align-items: center;
  position: relative;
}

.todo {
  position: relative;
  margin-bottom: 1.25em;
}

.todo::after {
  content: "";
  position: absolute;
  right: 0;
  left: 0;
  bottom: -0.5em;
  height: 1px;
  background: currentColor;
  opacity: 0.1;
}

.custom-checkbox {
  --size: 0.75em;
  display: inline-block;
  width: var(--size);
  height: var(--size);
  cursor: pointer;
  border: 2px solid currentColor;
  border-radius: 25%;
}

[type="checkbox"]:checked + label .custom-checkbox {
  background: var(--primary);
  border-color: var(--primary);
  box-shadow: inset 0 0 0px 2px white;
}

[type="checkbox"]:checked + label {
  opacity: 0.5;
}

.todo label::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  left: 1.5em;
  top: 50%;
  height: 3px;
  background: currentColor;
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transform-origin: right;
  transform-origin: right;
  transition: -webkit-transform 150ms ease-in-out;
  transition: transform 150ms ease-in-out;
  transition: transform 150ms ease-in-out, -webkit-transform 150ms ease-in-out;
}

[type="checkbox"]:checked + label::after {
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
  -webkit-transform-origin: left;
  transform-origin: left;
}

.delete-stuff {
  grid-area: delete;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  color: var(--accent) !important;

  color: var(--background);
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n  --primary: #7047d1;\r\n  --background: #f7f5fd;\r\n  --text: #06030b;\r\n  --secondary: #e28ca3;\r\n  --accent: #d87164;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  font-family: inherit;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 64px;\r\n  font-family: \"Work Sans\", sans-serif;\r\n  font-weight: 300;\r\n  font-size: 1.5rem;\r\n  background-color: var(--primary);\r\n  color: var(--background);\r\n  display: grid;\r\n  grid-template-areas:\r\n    \"header header header header\"\r\n    \"lists . active . \"\r\n    \"lists . delete .\";\r\n  grid-template-rows: auto 1fr;\r\n  grid-template-columns: minmax(100px, 300px) minmax(250px, 500px) 1fr 1fr;\r\n}\r\n\r\n.tasks {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 8px;\r\n}\r\n\r\n.task {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.task-header {\r\n  display: flex;\r\n  gap: 4px;\r\n}\r\n\r\n.task-priority {\r\n  width: 16px;\r\n  height: auto;\r\n  border-radius: 16px;\r\n}\r\n\r\n.todo-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 16px;\r\n}\r\n\r\n.modal {\r\n  color: var(--text);\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  gap: 0.4rem;\r\n  width: 450px;\r\n  padding: 1.3rem;\r\n  min-height: 250px;\r\n  position: fixed;\r\n  z-index: 2;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  background-color: white;\r\n  border: 1px solid #ddd;\r\n  border-radius: 15px;\r\n}\r\n\r\n.modal input {\r\n  padding: 0.7rem 1rem;\r\n  border: 1px solid #ddd;\r\n  border-radius: 5px;\r\n  font-size: 0.9em;\r\n}\r\n\r\n.btn-open {\r\n  font-size: 1rem;\r\n}\r\n\r\n.btn-close {\r\n  font-size: 1.5rem;\r\n  font-weight: 600;\r\n  color: red !important;\r\n}\r\n\r\n.overlay {\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: rgba(0, 0, 0, 0.5);\r\n  backdrop-filter: blur(3px);\r\n  z-index: 1;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n.title {\r\n  grid-area: header;\r\n  text-align: center;\r\n  font-size: calc(7vw + 2rem);\r\n  font-weight: 900;\r\n  color: var(--secondary);\r\n  letter-spacing: 2px;\r\n  margin: -0.3em 0 0.5em;\r\n}\r\n\r\n.all-projects {\r\n  grid-area: lists;\r\n}\r\n\r\n.task-project {\r\n  font-size: 1.2rem;\r\n  line-height: 1.7;\r\n  list-style: circle;\r\n  padding-left: 1.1em;\r\n}\r\n\r\n.project-name,\r\n.project-item {\r\n  cursor: pointer;\r\n}\r\n\r\n.project-name:hover {\r\n  opacity: 0.7;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n}\r\n\r\n.btn {\r\n  cursor: pointer;\r\n  background: 0;\r\n  border: 0;\r\n  padding: 0;\r\n  color: inherit;\r\n}\r\n\r\n.btn.create {\r\n  font-size: 1.5rem;\r\n  font-weight: 900;\r\n  transition: opacity 250ms ease-in;\r\n}\r\n\r\n.btn.create:hover {\r\n  opacity: 0.7;\r\n}\r\n\r\n.btn.delete {\r\n  opacity: 0.7;\r\n  font-size: 1rem;\r\n  transition: color 200ms;\r\n}\r\n\r\n.btn.delete:hover {\r\n  color: var(--accent);\r\n}\r\n\r\n.new {\r\n  width: 90%;\r\n  background: transparent;\r\n  border: 0;\r\n  color: inherit;\r\n  border-bottom: 1px solid currentColor;\r\n  font-size: inherit;\r\n  outline: none;\r\n  padding: 0.25em;\r\n  transition: border-bottom 150ms ease-in;\r\n}\r\n\r\n.new::placeholder {\r\n  opacity: 0.4;\r\n}\r\n\r\n.new:focus {\r\n  border-bottom-width: 3px;\r\n}\r\n\r\n.new:focus::-webkit-input-placeholder {\r\n  opacity: 0.15;\r\n}\r\n\r\n.new:focus:-ms-input-placeholder {\r\n  opacity: 0.15;\r\n}\r\n\r\n.new:focus::-ms-input-placeholder {\r\n  opacity: 0.15;\r\n}\r\n\r\n.new:focus::placeholder {\r\n  opacity: 0.15;\r\n}\r\n\r\n.new.project {\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.new.todo {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.todo-project {\r\n  grid-area: active;\r\n  --spacer: 2rem;\r\n  background: var(--background);\r\n  color: var(--text);\r\n  width: 60vw;\r\n  height: auto;\r\n}\r\n\r\n.todo-header {\r\n  padding: var(--spacer);\r\n  background: var(--secondary);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n}\r\n\r\n.project-title {\r\n  margin: 0 1em 0 0;\r\n}\r\n\r\n.todo-body {\r\n  padding: var(--spacer);\r\n  position: relative;\r\n}\r\n\r\n.new-task-creator .create {\r\n  color: var(--primary);\r\n}\r\n\r\n[type=\"checkbox\"] {\r\n  opacity: 0;\r\n  position: absolute;\r\n}\r\n\r\n.todo label {\r\n  display: flex-inline;\r\n  align-items: center;\r\n  position: relative;\r\n}\r\n\r\n.todo {\r\n  position: relative;\r\n  margin-bottom: 1.25em;\r\n}\r\n\r\n.todo::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  right: 0;\r\n  left: 0;\r\n  bottom: -0.5em;\r\n  height: 1px;\r\n  background: currentColor;\r\n  opacity: 0.1;\r\n}\r\n\r\n.custom-checkbox {\r\n  --size: 0.75em;\r\n  display: inline-block;\r\n  width: var(--size);\r\n  height: var(--size);\r\n  cursor: pointer;\r\n  border: 2px solid currentColor;\r\n  border-radius: 25%;\r\n}\r\n\r\n[type=\"checkbox\"]:checked + label .custom-checkbox {\r\n  background: var(--primary);\r\n  border-color: var(--primary);\r\n  box-shadow: inset 0 0 0px 2px white;\r\n}\r\n\r\n[type=\"checkbox\"]:checked + label {\r\n  opacity: 0.5;\r\n}\r\n\r\n.todo label::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  left: 0;\r\n  right: 0;\r\n  left: 1.5em;\r\n  top: 50%;\r\n  height: 3px;\r\n  background: currentColor;\r\n  -webkit-transform: scaleX(0);\r\n  transform: scaleX(0);\r\n  -webkit-transform-origin: right;\r\n  transform-origin: right;\r\n  transition: -webkit-transform 150ms ease-in-out;\r\n  transition: transform 150ms ease-in-out;\r\n  transition: transform 150ms ease-in-out, -webkit-transform 150ms ease-in-out;\r\n}\r\n\r\n[type=\"checkbox\"]:checked + label::after {\r\n  -webkit-transform: scaleX(1);\r\n  transform: scaleX(1);\r\n  -webkit-transform-origin: left;\r\n  transform-origin: left;\r\n}\r\n\r\n.delete-stuff {\r\n  grid-area: delete;\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  width: 100%;\r\n  color: var(--accent) !important;\r\n\r\n  color: var(--background);\r\n}\r\n"],"sourceRoot":""}]);
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

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/modules/modal.js":
/*!******************************!*\
  !*** ./src/modules/modal.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function openModal(modalType) {
  const modal = document.querySelector(`[data-modal="${modalType}"]`);
  modal.classList.remove("hidden");
  document.querySelector(".overlay").classList.remove("hidden");
}

function closeModal(modalType) {
  const modal = document.querySelector(`[data-modal="${modalType}"]`);
  modal.classList.add("hidden");
  document.querySelector(".overlay").classList.add("hidden");
}

function setupOverlayListener() {
  const overlay = document.querySelector(".overlay");
  overlay.addEventListener("click", () => {
    document
      .querySelectorAll(".modal")
      .forEach((modal) => modal.classList.add("hidden"));
    overlay.classList.add("hidden");
  });
}

function setupEscapeListener() {
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      document
        .querySelectorAll(".modal")
        .forEach((modal) => modal.classList.add("hidden"));
      document.querySelector(".overlay").classList.add("hidden");
    }
  });
}

document.addEventListener("click", (e) => {
  if (e.target.matches("[data-modal-open]")) {
    const modalType = e.target.getAttribute("data-modal-open");
    openModal(modalType);
  }
});

document.addEventListener("click", (e) => {
  if (e.target.matches("[data-modal-close]")) {
    const modalType = e.target.getAttribute("data-modal-close");
    closeModal(modalType);
  }
  if (e.target.matches(".overlay")) {
    document
      .querySelectorAll(".modal")
      .forEach((modal) => modal.classList.add("hidden"));
    overlay.classList.add("hidden");
  }
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  openModal,
  closeModal,
  setupOverlayListener,
  setupEscapeListener,
});


/***/ }),

/***/ "./src/modules/projectFunctions.js":
/*!*****************************************!*\
  !*** ./src/modules/projectFunctions.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./src/modules/state.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./src/modules/storage.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui */ "./src/modules/ui.js");




const newProjectForm = document.querySelector("[data-new-project-form]");
const newProjectInput = document.querySelector("[data-new-project-input]");
const deleteProjectButton = document.querySelector(
  "[data-delete-project-button]"
);

function createProject(title) {
  return {
    id: Date.now().toString(),
    title: title,
    todos: [],
  };
}

function handleNewProjectSubmit(e) {
  e.preventDefault();
  let projects = _state__WEBPACK_IMPORTED_MODULE_0__["default"].getProjects();
  const projectName = newProjectInput.value;
  if (projectName == null || projectName === "") return;
  const project = createProject(projectName);
  newProjectInput.value = null;
  projects.push(project);
  _state__WEBPACK_IMPORTED_MODULE_0__["default"].setProjects(projects);
  let selectedProjectId = _state__WEBPACK_IMPORTED_MODULE_0__["default"].getSelectedProjectId();
  selectedProjectId = project.id;
  _state__WEBPACK_IMPORTED_MODULE_0__["default"].setSelectedProjectId(selectedProjectId);
  _storage__WEBPACK_IMPORTED_MODULE_1__["default"].save();
  _ui__WEBPACK_IMPORTED_MODULE_2__["default"].render();
}

function updateProjectTitle(projectId, newTitle) {
  let projects = _state__WEBPACK_IMPORTED_MODULE_0__["default"].getProjects();
  const project = projects.find((project) => project.id === projectId);
  if (project) {
    project.title = newTitle;
    _state__WEBPACK_IMPORTED_MODULE_0__["default"].setProjects(projects);
    _storage__WEBPACK_IMPORTED_MODULE_1__["default"].save();
  }
}

function handleDeleteProject() {
  let projects = _state__WEBPACK_IMPORTED_MODULE_0__["default"].getProjects();
  let selectedProjectId = _state__WEBPACK_IMPORTED_MODULE_0__["default"].getSelectedProjectId();
  const projectIndex = projects.findIndex(
    (project) => project.id === selectedProjectId
  );

  projects = projects.filter((project) => project.id !== selectedProjectId);

  let newSelectedProjectId = null;
  if (projects.length > 0) {
    if (projectIndex > 0) {
      newSelectedProjectId = projects[projectIndex - 1].id;
    } else {
      newSelectedProjectId = projects[0].id;
    }
  }
  selectedProjectId = newSelectedProjectId;
  _state__WEBPACK_IMPORTED_MODULE_0__["default"].setProjects(projects);
  _state__WEBPACK_IMPORTED_MODULE_0__["default"].setSelectedProjectId(selectedProjectId);
  _storage__WEBPACK_IMPORTED_MODULE_1__["default"].save();
  _ui__WEBPACK_IMPORTED_MODULE_2__["default"].render();
}

newProjectForm.addEventListener("submit", handleNewProjectSubmit);
deleteProjectButton.addEventListener("click", handleDeleteProject);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  handleNewProjectSubmit,
  updateProjectTitle,
  handleDeleteProject,
});


/***/ }),

/***/ "./src/modules/state.js":
/*!******************************!*\
  !*** ./src/modules/state.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// task. is added to avoid any collisions/conflicts with the system files and websites
const LOCAL_STORAGE_PROJECTS_KEY = "task.projects";
const LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY = "task.selectedProjectId";

let projects =
  JSON.parse(localStorage.getItem(LOCAL_STORAGE_PROJECTS_KEY)) || [];
let selectedProjectId = localStorage.getItem(
  LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY
);

function getLocalStorageProjectsKey() {
  return LOCAL_STORAGE_PROJECTS_KEY;
}

function getLocalStorageSelectedProjectIdKey() {
  return LOCAL_STORAGE_SELECTED_PROJECT_ID_KEY;
}

function getProjects() {
  return projects;
}

function setProjects(newProjects) {
  projects = newProjects;
}

function getSelectedProjectId() {
  return selectedProjectId;
}

function setSelectedProjectId(newSelectedProjectId) {
  selectedProjectId = newSelectedProjectId;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  getLocalStorageProjectsKey,
  getLocalStorageSelectedProjectIdKey,
  getProjects,
  setProjects,
  getSelectedProjectId,
  setSelectedProjectId,
});


/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./src/modules/state.js");

function save() {
  localStorage.setItem(
    _state__WEBPACK_IMPORTED_MODULE_0__["default"].getLocalStorageProjectsKey(),
    JSON.stringify(_state__WEBPACK_IMPORTED_MODULE_0__["default"].getProjects())
  );
  localStorage.setItem(
    _state__WEBPACK_IMPORTED_MODULE_0__["default"].getLocalStorageSelectedProjectIdKey(),
    _state__WEBPACK_IMPORTED_MODULE_0__["default"].getSelectedProjectId()
  );
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  save,
});


/***/ }),

/***/ "./src/modules/todoFunctions.js":
/*!**************************************!*\
  !*** ./src/modules/todoFunctions.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ "./src/modules/storage.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ "./src/modules/ui.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state */ "./src/modules/state.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal */ "./src/modules/modal.js");





const todosContainer = document.querySelector("[data-tasks]");
const newTodoForm = document.querySelector("[data-new-todo-form]");
const newTodoTitle = document.querySelector("[data-new-todo-title]");
const newTodoDescription = document.querySelector(
  "[data-new-todo-description]"
);
const newTodoDueDate = document.querySelector("[data-new-todo-due]");
const newTodoPriority = document.querySelector("[data-new-todo-priority]");
const clearCompleteTodosButton = document.querySelector(
  "[data-clear-complete-tasks-button]"
);

function createTodo(title, description, dueDate, priority) {
  return {
    id: Date.now().toString(),
    title: title,
    description: description,
    dueDate: dueDate,
    priority: priority,
    complete: false,
  };
}

function handleNewTodoSubmit(e) {
  e.preventDefault();
  const todoTitle = newTodoTitle.value;
  const todoDescription = newTodoDescription.value;
  const todoDueDate = newTodoDueDate.value;
  const todoPriority = newTodoPriority.value;

  if (todoTitle == null || todoTitle === "") return;

  const todo = createTodo(
    todoTitle,
    todoDescription,
    todoDueDate,
    todoPriority
  );
  newTodoTitle.value = null;
  newTodoDescription.value = null;
  newTodoDueDate.value = null;
  newTodoPriority.value = null;
  const projects = _state__WEBPACK_IMPORTED_MODULE_2__["default"].getProjects();
  const selectedProjectId = _state__WEBPACK_IMPORTED_MODULE_2__["default"].getSelectedProjectId();
  const selectedProject = projects.find(
    (project) => project.id === selectedProjectId
  );
  selectedProject.todos.push(todo);
  _storage__WEBPACK_IMPORTED_MODULE_0__["default"].save();
  _ui__WEBPACK_IMPORTED_MODULE_1__["default"].render();
  _modal__WEBPACK_IMPORTED_MODULE_3__["default"].closeModal("new-todo");
}

function handleTodoItemCheck(e) {
  if (e.target.tagName.toLowerCase() === "input") {
    const selectedProjectId = _state__WEBPACK_IMPORTED_MODULE_2__["default"].getSelectedProjectId();
    const projects = _state__WEBPACK_IMPORTED_MODULE_2__["default"].getProjects();
    const selectedProject = projects.find(
      (project) => project.id === selectedProjectId
    );
    const selectedTask = selectedProject.todos.find(
      (task) => task.id === e.target.id
    );
    selectedTask.complete = e.target.checked;
    _storage__WEBPACK_IMPORTED_MODULE_0__["default"].save();
  }
}

function updateTodoElement(todoId, key, value) {
  const selectedProjectId = _state__WEBPACK_IMPORTED_MODULE_2__["default"].getSelectedProjectId();
  const projects = _state__WEBPACK_IMPORTED_MODULE_2__["default"].getProjects();
  const selectedProject = projects.find(
    (project) => project.id === selectedProjectId
  );
  const selectedTodo = selectedProject.todos.find((todo) => todo.id === todoId);
  if (selectedTodo) {
    selectedTodo[key] = value;
    _storage__WEBPACK_IMPORTED_MODULE_0__["default"].save();
    _ui__WEBPACK_IMPORTED_MODULE_1__["default"].render();
  } else {
    console.error(`Todo with ID ${todoId} not found.`);
  }
}

function handleClearCompleteTodos() {
  const projects = _state__WEBPACK_IMPORTED_MODULE_2__["default"].getProjects();
  const selectedProjectId = _state__WEBPACK_IMPORTED_MODULE_2__["default"].getSelectedProjectId();
  const selectedProject = projects.find(
    (project) => project.id === selectedProjectId
  );
  selectedProject.todos = selectedProject.todos.filter(
    (task) => !task.complete
  );
  _storage__WEBPACK_IMPORTED_MODULE_0__["default"].save();
  _ui__WEBPACK_IMPORTED_MODULE_1__["default"].render();
}

function handleDeleteTodoItem(todoId) {
  const selectedProjectId = _state__WEBPACK_IMPORTED_MODULE_2__["default"].getSelectedProjectId();
  let projects = _state__WEBPACK_IMPORTED_MODULE_2__["default"].getProjects();
  const selectedProject = projects.find(
    (project) => project.id === selectedProjectId
  );

  selectedProject.todos = selectedProject.todos.filter(
    (todo) => todo.id !== todoId
  );
  _state__WEBPACK_IMPORTED_MODULE_2__["default"].setProjects(projects);
  _storage__WEBPACK_IMPORTED_MODULE_0__["default"].save();
  _ui__WEBPACK_IMPORTED_MODULE_1__["default"].render();
  _modal__WEBPACK_IMPORTED_MODULE_3__["default"].closeModal("view-todo");
}

todosContainer.addEventListener("click", handleTodoItemCheck);

newTodoForm.addEventListener("submit", handleNewTodoSubmit);
clearCompleteTodosButton.addEventListener("click", handleClearCompleteTodos);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  handleNewTodoSubmit,
  handleTodoItemCheck,
  updateTodoElement,
  handleClearCompleteTodos,
  handleDeleteTodoItem,
});


/***/ }),

/***/ "./src/modules/ui.js":
/*!***************************!*\
  !*** ./src/modules/ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./src/modules/state.js");
/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage */ "./src/modules/storage.js");
/* harmony import */ var _projectFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectFunctions */ "./src/modules/projectFunctions.js");
/* harmony import */ var _todoFunctions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todoFunctions */ "./src/modules/todoFunctions.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal */ "./src/modules/modal.js");






const projectsContainer = document.querySelector("[data-projects]");
const todosContainer = document.querySelector("[data-tasks]");
const todoTemplate = document.getElementById("todo-template");
const projectDisplayContainer = document.querySelector(
  "[data-project-display-container]"
);
const projectTitleElement = document.querySelector("[data-project-title]");
const projectTitleEditBtn = document.querySelector(
  "[data-project-title-edit-btn]"
);

let currentTodoId = null;

function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function renderProjects() {
  const projects = _state__WEBPACK_IMPORTED_MODULE_0__["default"].getProjects();
  projects.forEach((project) => {
    const projectItem = document.createElement("li");
    projectItem.dataset.projectId = project.id;
    projectItem.classList.add("project-item");
    projectItem.innerText = project.title;
    projectsContainer.appendChild(projectItem);
  });
}

function renderTodos(selectedProject) {
  selectedProject.todos.forEach((todo) => {
    const todoElement = document.importNode(todoTemplate.content, true);
    const checkbox = todoElement.querySelector("input");
    checkbox.id = todo.id;
    checkbox.checked = todo.complete;
    const label = todoElement.querySelector("label");
    label.htmlFor = todo.id;
    label.append(todo.title);
    const dueDate = todoElement.getElementById("due");
    dueDate.innerText = `Due date: ${todo.dueDate}`;
    const priority = todoElement.getElementById("priority");
    priority.style.backgroundColor = todo.priority;

    todosContainer.appendChild(todoElement);
  });
}

function render() {
  clearElement(projectsContainer);
  renderProjects();
  const projects = _state__WEBPACK_IMPORTED_MODULE_0__["default"].getProjects();
  const selectedProjectId = _state__WEBPACK_IMPORTED_MODULE_0__["default"].getSelectedProjectId();

  const selectedProject = projects.find(
    (project) => project.id === selectedProjectId
  );
  if (selectedProjectId == null || selectedProject == null) {
    projectDisplayContainer.style.display = "none";
  } else {
    projectDisplayContainer.style.display = "";
    projectTitleElement.innerText = selectedProject.title;
    clearElement(todosContainer);
    renderTodos(selectedProject);
  }
}

function handleEditProjectTitle() {
  const isEditing = projectTitleEditBtn.innerText === "Save";
  if (isEditing) {
    const projectTitleInput = document.querySelector(".project-title-input");
    const newTitle = projectTitleInput.value.trim();
    if (newTitle && newTitle !== projectTitleElement.innerText) {
      _projectFunctions__WEBPACK_IMPORTED_MODULE_2__["default"].updateProjectTitle(
        _state__WEBPACK_IMPORTED_MODULE_0__["default"].getSelectedProjectId(),
        newTitle
      );
    }
    projectTitleElement.style.display = "block";
    projectTitleEditBtn.innerText = "Edit";
    projectTitleInput.remove();
    render();
  } else {
    const projectTitle = projectTitleElement.innerText;
    projectTitleElement.style.display = "none";

    const projectTitleInput = document.createElement("input");
    projectTitleInput.type = "text";
    projectTitleInput.value = projectTitle;
    projectTitleInput.classList.add("project-title-input");

    projectTitleElement.parentElement.insertBefore(
      projectTitleInput,
      projectTitleEditBtn
    );
    projectTitleInput.focus();
    projectTitleEditBtn.innerText = "Save";
    projectTitleInput.addEventListener("keypress", (e) => {
      if (e.key === "Enter") {
        projectTitleEditBtn.click();
      }
    });
  }
}

function handleViewTodoDetails(e) {
  const priorityMapping = {
    green: "Low",
    orange: "Medium",
    red: "High",
  };

  if (e.target.tagName.toLowerCase() === "input") return; // Ignore checkbox clicks
  const selectedProjectId = _state__WEBPACK_IMPORTED_MODULE_0__["default"].getSelectedProjectId();
  const projects = _state__WEBPACK_IMPORTED_MODULE_0__["default"].getProjects();
  const selectedProject = projects.find(
    (project) => project.id === selectedProjectId
  );
  const todoId = e.currentTarget.querySelector("input").id;
  currentTodoId = todoId;
  const selectedTodo = selectedProject.todos.find((todo) => todo.id === todoId);

  document.querySelector("[data-todo-title]").innerText = selectedTodo.title;
  document.querySelector("[data-todo-title-input]").value = selectedTodo.title;
  document.querySelector("[data-todo-description]").innerText =
    selectedTodo.description;
  document.querySelector("[data-todo-description-input]").value =
    selectedTodo.description;
  document.querySelector(
    "[data-todo-due-date]"
  ).innerText = `Due date: ${selectedTodo.dueDate}`;
  document.querySelector("[data-todo-due-date-input]").value =
    selectedTodo.dueDate;
  document.querySelector("[data-todo-priority]").innerText = `Priority: ${
    priorityMapping[selectedTodo.priority]
  }`;
  document.querySelector("[data-todo-priority-input]").value =
    selectedTodo.priority;

  const deleteButton = document.querySelector("[data-delete-todo-button]");
  deleteButton.onclick = () => _todoFunctions__WEBPACK_IMPORTED_MODULE_3__["default"].handleDeleteTodoItem(todoId);

  _modal__WEBPACK_IMPORTED_MODULE_4__["default"].openModal("view-todo");
}

function handleEditTodoElement(
  editBtn,
  displayElement,
  inputElement,
  saveCallback
) {
  const isEditing = editBtn.innerText === "Save";
  if (isEditing) {
    const newValue = inputElement.value.trim();
    saveCallback(newValue);
    displayElement.innerText = newValue;
    displayElement.style.display = "block";
    inputElement.classList.add("hidden");
    editBtn.innerText = "Edit";
    _storage__WEBPACK_IMPORTED_MODULE_1__["default"].save();
    render();
  } else {
    inputElement.value = displayElement.innerText;
    displayElement.style.display = "none";
    inputElement.classList.remove("hidden");
    inputElement.focus();
    editBtn.innerText = "Save";
  }
}

// Use currentTodoId in the edit button click handlers
document
  .querySelector("[data-edit-todo-title]")
  .addEventListener("click", (e) => {
    handleEditTodoElement(
      e.target,
      document.querySelector("[data-todo-title]"),
      document.querySelector("[data-todo-title-input]"),
      (newValue) =>
        _todoFunctions__WEBPACK_IMPORTED_MODULE_3__["default"].updateTodoElement(currentTodoId, "title", newValue)
    );
  });

document
  .querySelector("[data-edit-todo-description]")
  .addEventListener("click", (e) => {
    handleEditTodoElement(
      e.target,
      document.querySelector("[data-todo-description]"),
      document.querySelector("[data-todo-description-input]"),
      (newValue) =>
        _todoFunctions__WEBPACK_IMPORTED_MODULE_3__["default"].updateTodoElement(currentTodoId, "description", newValue)
    );
  });

document
  .querySelector("[data-edit-todo-due-date]")
  .addEventListener("click", (e) => {
    handleEditTodoElement(
      e.target,
      document.querySelector("[data-todo-due-date]"),
      document.querySelector("[data-todo-due-date-input]"),
      (newValue) =>
        _todoFunctions__WEBPACK_IMPORTED_MODULE_3__["default"].updateTodoElement(currentTodoId, "dueDate", newValue)
    );
  });

document
  .querySelector("[data-edit-todo-priority]")
  .addEventListener("click", (e) => {
    handleEditTodoElement(
      e.target,
      document.querySelector("[data-todo-priority]"),
      document.querySelector("[data-todo-priority-input]"),
      (newValue) =>
        _todoFunctions__WEBPACK_IMPORTED_MODULE_3__["default"].updateTodoElement(currentTodoId, "priority", newValue)
    );
  });

projectTitleEditBtn.addEventListener("click", handleEditProjectTitle);

document
  .querySelector("[data-todo-title-input]")
  .addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      document.querySelector("[data-edit-todo-title]").click();
    }
  });

document
  .querySelector("[data-todo-description-input]")
  .addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      document.querySelector("[data-edit-todo-description]").click();
    }
  });

document
  .querySelector("[data-todo-due-date-input]")
  .addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      document.querySelector("[data-edit-todo-due-date]").click();
    }
  });

document
  .querySelector("[data-todo-priority-input]")
  .addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      document.querySelector("[data-edit-todo-priority]").click();
    }
  });

projectsContainer.addEventListener("click", (e) => {
  let selectedProjectId = _state__WEBPACK_IMPORTED_MODULE_0__["default"].getSelectedProjectId();
  if (e.target.tagName.toLowerCase() === "li") {
    selectedProjectId = e.target.dataset.projectId;
    _state__WEBPACK_IMPORTED_MODULE_0__["default"].setSelectedProjectId(selectedProjectId);
    _storage__WEBPACK_IMPORTED_MODULE_1__["default"].save();
    render();
  }
});

todosContainer.addEventListener("click", (e) => {
  if (e.target.tagName.toLowerCase() !== "input") {
    handleViewTodoDetails(e);
  }
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  todosContainer,
  clearElement,
  renderProjects,
  renderTodos,
  render,
});


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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modal */ "./src/modules/modal.js");
/* harmony import */ var _modules_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/state */ "./src/modules/state.js");
/* harmony import */ var _modules_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/storage */ "./src/modules/storage.js");
/* harmony import */ var _modules_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/ui */ "./src/modules/ui.js");
/* harmony import */ var _modules_projectFunctions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/projectFunctions */ "./src/modules/projectFunctions.js");
/* harmony import */ var _modules_todoFunctions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/todoFunctions */ "./src/modules/todoFunctions.js");








_modules_modal__WEBPACK_IMPORTED_MODULE_1__["default"].setupOverlayListener();
_modules_modal__WEBPACK_IMPORTED_MODULE_1__["default"].setupEscapeListener();

_modules_ui__WEBPACK_IMPORTED_MODULE_4__["default"].render();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxPQUFPLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sT0FBTyxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxh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QUNBO0FBQ0k7QUFDVjtBQUM0QjtBQUNOO0FBQ3BEO0FBQ0Esc0RBQUs7QUFDTCxzREFBSztBQUNMO0FBQ0EsbURBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdEZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9zdGF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3RvZG9GdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdWkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XHJcbiAgLS1wcmltYXJ5OiAjNzA0N2QxO1xyXG4gIC0tYmFja2dyb3VuZDogI2Y3ZjVmZDtcclxuICAtLXRleHQ6ICMwNjAzMGI7XHJcbiAgLS1zZWNvbmRhcnk6ICNlMjhjYTM7XHJcbiAgLS1hY2NlbnQ6ICNkODcxNjQ7XHJcbn1cclxuXHJcbiosXHJcbio6OmJlZm9yZSxcclxuKjo6YWZ0ZXIge1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiA2NHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIldvcmsgU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgIFwiaGVhZGVyIGhlYWRlciBoZWFkZXIgaGVhZGVyXCJcclxuICAgIFwibGlzdHMgLiBhY3RpdmUgLiBcIlxyXG4gICAgXCJsaXN0cyAuIGRlbGV0ZSAuXCI7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgxMDBweCwgMzAwcHgpIG1pbm1heCgyNTBweCwgNTAwcHgpIDFmciAxZnI7XHJcbn1cclxuXHJcbi50YXNrcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogOHB4O1xyXG59XHJcblxyXG4udGFzayB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi50YXNrLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDRweDtcclxufVxyXG5cclxuLnRhc2stcHJpb3JpdHkge1xyXG4gIHdpZHRoOiAxNnB4O1xyXG4gIGhlaWdodDogYXV0bztcclxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG59XHJcblxyXG4udG9kby1mb3JtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAxNnB4O1xyXG59XHJcblxyXG4ubW9kYWwge1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ2FwOiAwLjRyZW07XHJcbiAgd2lkdGg6IDQ1MHB4O1xyXG4gIHBhZGRpbmc6IDEuM3JlbTtcclxuICBtaW4taGVpZ2h0OiAyNTBweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogMjtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcblxyXG4ubW9kYWwgaW5wdXQge1xyXG4gIHBhZGRpbmc6IDAuN3JlbSAxcmVtO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMC45ZW07XHJcbn1cclxuXHJcbi5idG4tb3BlbiB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG4uYnRuLWNsb3NlIHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiByZWQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm92ZXJsYXkge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uaGlkZGVuIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IGNhbGMoN3Z3ICsgMnJlbSk7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcclxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gIG1hcmdpbjogLTAuM2VtIDAgMC41ZW07XHJcbn1cclxuXHJcbi5hbGwtcHJvamVjdHMge1xyXG4gIGdyaWQtYXJlYTogbGlzdHM7XHJcbn1cclxuXHJcbi50YXNrLXByb2plY3Qge1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjc7XHJcbiAgbGlzdC1zdHlsZTogY2lyY2xlO1xyXG4gIHBhZGRpbmctbGVmdDogMS4xZW07XHJcbn1cclxuXHJcbi5wcm9qZWN0LW5hbWUsXHJcbi5wcm9qZWN0LWl0ZW0ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnByb2plY3QtbmFtZTpob3ZlciB7XHJcbiAgb3BhY2l0eTogMC43O1xyXG59XHJcblxyXG5mb3JtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZDogMDtcclxuICBib3JkZXI6IDA7XHJcbiAgcGFkZGluZzogMDtcclxuICBjb2xvcjogaW5oZXJpdDtcclxufVxyXG5cclxuLmJ0bi5jcmVhdGUge1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAyNTBtcyBlYXNlLWluO1xyXG59XHJcblxyXG4uYnRuLmNyZWF0ZTpob3ZlciB7XHJcbiAgb3BhY2l0eTogMC43O1xyXG59XHJcblxyXG4uYnRuLmRlbGV0ZSB7XHJcbiAgb3BhY2l0eTogMC43O1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICB0cmFuc2l0aW9uOiBjb2xvciAyMDBtcztcclxufVxyXG5cclxuLmJ0bi5kZWxldGU6aG92ZXIge1xyXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQpO1xyXG59XHJcblxyXG4ubmV3IHtcclxuICB3aWR0aDogOTAlO1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogMDtcclxuICBjb2xvcjogaW5oZXJpdDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgY3VycmVudENvbG9yO1xyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHBhZGRpbmc6IDAuMjVlbTtcclxuICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tIDE1MG1zIGVhc2UtaW47XHJcbn1cclxuXHJcbi5uZXc6OnBsYWNlaG9sZGVyIHtcclxuICBvcGFjaXR5OiAwLjQ7XHJcbn1cclxuXHJcbi5uZXc6Zm9jdXMge1xyXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDNweDtcclxufVxyXG5cclxuLm5ldzpmb2N1czo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgb3BhY2l0eTogMC4xNTtcclxufVxyXG5cclxuLm5ldzpmb2N1czotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xyXG4gIG9wYWNpdHk6IDAuMTU7XHJcbn1cclxuXHJcbi5uZXc6Zm9jdXM6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XHJcbiAgb3BhY2l0eTogMC4xNTtcclxufVxyXG5cclxuLm5ldzpmb2N1czo6cGxhY2Vob2xkZXIge1xyXG4gIG9wYWNpdHk6IDAuMTU7XHJcbn1cclxuXHJcbi5uZXcucHJvamVjdCB7XHJcbiAgZm9udC1zaXplOiAxLjFyZW07XHJcbn1cclxuXHJcbi5uZXcudG9kbyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuLnRvZG8tcHJvamVjdCB7XHJcbiAgZ3JpZC1hcmVhOiBhY3RpdmU7XHJcbiAgLS1zcGFjZXI6IDJyZW07XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7XHJcbiAgY29sb3I6IHZhcigtLXRleHQpO1xyXG4gIHdpZHRoOiA2MHZ3O1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLnRvZG8taGVhZGVyIHtcclxuICBwYWRkaW5nOiB2YXIoLS1zcGFjZXIpO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeSk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLnByb2plY3QtdGl0bGUge1xyXG4gIG1hcmdpbjogMCAxZW0gMCAwO1xyXG59XHJcblxyXG4udG9kby1ib2R5IHtcclxuICBwYWRkaW5nOiB2YXIoLS1zcGFjZXIpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLm5ldy10YXNrLWNyZWF0b3IgLmNyZWF0ZSB7XHJcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG59XHJcblxyXG5bdHlwZT1cImNoZWNrYm94XCJdIHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLnRvZG8gbGFiZWwge1xyXG4gIGRpc3BsYXk6IGZsZXgtaW5saW5lO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4udG9kbyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi1ib3R0b206IDEuMjVlbTtcclxufVxyXG5cclxuLnRvZG86OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogLTAuNWVtO1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIGJhY2tncm91bmQ6IGN1cnJlbnRDb2xvcjtcclxuICBvcGFjaXR5OiAwLjE7XHJcbn1cclxuXHJcbi5jdXN0b20tY2hlY2tib3gge1xyXG4gIC0tc2l6ZTogMC43NWVtO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogdmFyKC0tc2l6ZSk7XHJcbiAgaGVpZ2h0OiB2YXIoLS1zaXplKTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyOiAycHggc29saWQgY3VycmVudENvbG9yO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI1JTtcclxufVxyXG5cclxuW3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgbGFiZWwgLmN1c3RvbS1jaGVja2JveCB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XHJcbiAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuICBib3gtc2hhZG93OiBpbnNldCAwIDAgMHB4IDJweCB3aGl0ZTtcclxufVxyXG5cclxuW3R5cGU9XCJjaGVja2JveFwiXTpjaGVja2VkICsgbGFiZWwge1xyXG4gIG9wYWNpdHk6IDAuNTtcclxufVxyXG5cclxuLnRvZG8gbGFiZWw6OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGxlZnQ6IDEuNWVtO1xyXG4gIHRvcDogNTAlO1xyXG4gIGhlaWdodDogM3B4O1xyXG4gIGJhY2tncm91bmQ6IGN1cnJlbnRDb2xvcjtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDApO1xyXG4gIHRyYW5zZm9ybTogc2NhbGVYKDApO1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQ7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQ7XHJcbiAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMTUwbXMgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDE1MG1zIGVhc2UtaW4tb3V0O1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxNTBtcyBlYXNlLWluLW91dCwgLXdlYmtpdC10cmFuc2Zvcm0gMTUwbXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcblt0eXBlPVwiY2hlY2tib3hcIl06Y2hlY2tlZCArIGxhYmVsOjphZnRlciB7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuICB0cmFuc2Zvcm06IHNjYWxlWCgxKTtcclxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XHJcbiAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdDtcclxufVxyXG5cclxuLmRlbGV0ZS1zdHVmZiB7XHJcbiAgZ3JpZC1hcmVhOiBkZWxldGU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICB3aWR0aDogMTAwJTtcclxuICBjb2xvcjogdmFyKC0tYWNjZW50KSAhaW1wb3J0YW50O1xyXG5cclxuICBjb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XHJcbn1cclxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usa0JBQWtCO0VB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Qzs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsT0FBTztFQUNQLGNBQWM7RUFDZCxXQUFXO0VBQ1gsd0JBQXdCO0VBQ3hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsOEJBQThCO0VBQzlCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQiw0QkFBNEI7RUFDNUIsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsUUFBUTtFQUNSLFdBQVc7RUFDWCxRQUFRO0VBQ1IsV0FBVztFQUNYLHdCQUF3QjtFQUN4Qiw0QkFBNEI7RUFDNUIsb0JBQW9CO0VBQ3BCLCtCQUErQjtFQUMvQix1QkFBdUI7RUFDdkIsK0NBQStDO0VBQy9DLHVDQUF1QztFQUN2Qyw0RUFBNEU7QUFDOUU7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsb0JBQW9CO0VBQ3BCLDhCQUE4QjtFQUM5QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLDZCQUE2QjtFQUM3QixXQUFXO0VBQ1gsK0JBQStCOztFQUUvQix3QkFBd0I7QUFDMUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgLS1wcmltYXJ5OiAjNzA0N2QxO1xcclxcbiAgLS1iYWNrZ3JvdW5kOiAjZjdmNWZkO1xcclxcbiAgLS10ZXh0OiAjMDYwMzBiO1xcclxcbiAgLS1zZWNvbmRhcnk6ICNlMjhjYTM7XFxyXFxuICAtLWFjY2VudDogI2Q4NzE2NDtcXHJcXG59XFxyXFxuXFxyXFxuKixcXHJcXG4qOjpiZWZvcmUsXFxyXFxuKjo6YWZ0ZXIge1xcclxcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDY0cHg7XFxyXFxuICBmb250LWZhbWlseTogXFxcIldvcmsgU2Fuc1xcXCIsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcclxcbiAgICBcXFwiaGVhZGVyIGhlYWRlciBoZWFkZXIgaGVhZGVyXFxcIlxcclxcbiAgICBcXFwibGlzdHMgLiBhY3RpdmUgLiBcXFwiXFxyXFxuICAgIFxcXCJsaXN0cyAuIGRlbGV0ZSAuXFxcIjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgxMDBweCwgMzAwcHgpIG1pbm1heCgyNTBweCwgNTAwcHgpIDFmciAxZnI7XFxyXFxufVxcclxcblxcclxcbi50YXNrcyB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzayB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGdhcDogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1wcmlvcml0eSB7XFxyXFxuICB3aWR0aDogMTZweDtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWZvcm0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbCB7XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dCk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZ2FwOiAwLjRyZW07XFxyXFxuICB3aWR0aDogNDUwcHg7XFxyXFxuICBwYWRkaW5nOiAxLjNyZW07XFxyXFxuICBtaW4taGVpZ2h0OiAyNTBweDtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHotaW5kZXg6IDI7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsIGlucHV0IHtcXHJcXG4gIHBhZGRpbmc6IDAuN3JlbSAxcmVtO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXHJcXG4gIGZvbnQtc2l6ZTogMC45ZW07XFxyXFxufVxcclxcblxcclxcbi5idG4tb3BlbiB7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxufVxcclxcblxcclxcbi5idG4tY2xvc2Uge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xcclxcbn1cXHJcXG5cXHJcXG4ub3ZlcmxheSB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGRlbiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IGNhbGMoN3Z3ICsgMnJlbSk7XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xcclxcbiAgbWFyZ2luOiAtMC4zZW0gMCAwLjVlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmFsbC1wcm9qZWN0cyB7XFxyXFxuICBncmlkLWFyZWE6IGxpc3RzO1xcclxcbn1cXHJcXG5cXHJcXG4udGFzay1wcm9qZWN0IHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNztcXHJcXG4gIGxpc3Qtc3R5bGU6IGNpcmNsZTtcXHJcXG4gIHBhZGRpbmctbGVmdDogMS4xZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LW5hbWUsXFxyXFxuLnByb2plY3QtaXRlbSB7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LW5hbWU6aG92ZXIge1xcclxcbiAgb3BhY2l0eTogMC43O1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5idG4ge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYmFja2dyb3VuZDogMDtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBjb2xvcjogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi5jcmVhdGUge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAyNTBtcyBlYXNlLWluO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLmNyZWF0ZTpob3ZlciB7XFxyXFxuICBvcGFjaXR5OiAwLjc7XFxyXFxufVxcclxcblxcclxcbi5idG4uZGVsZXRlIHtcXHJcXG4gIG9wYWNpdHk6IDAuNztcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIHRyYW5zaXRpb246IGNvbG9yIDIwMG1zO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLmRlbGV0ZTpob3ZlciB7XFxyXFxuICBjb2xvcjogdmFyKC0tYWNjZW50KTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldyB7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxuICBjb2xvcjogaW5oZXJpdDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBjdXJyZW50Q29sb3I7XFxyXFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgcGFkZGluZzogMC4yNWVtO1xcclxcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbSAxNTBtcyBlYXNlLWluO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3OjpwbGFjZWhvbGRlciB7XFxyXFxuICBvcGFjaXR5OiAwLjQ7XFxyXFxufVxcclxcblxcclxcbi5uZXc6Zm9jdXMge1xcclxcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3OmZvY3VzOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcXHJcXG4gIG9wYWNpdHk6IDAuMTU7XFxyXFxufVxcclxcblxcclxcbi5uZXc6Zm9jdXM6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcXHJcXG4gIG9wYWNpdHk6IDAuMTU7XFxyXFxufVxcclxcblxcclxcbi5uZXc6Zm9jdXM6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxyXFxuICBvcGFjaXR5OiAwLjE1O1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3OmZvY3VzOjpwbGFjZWhvbGRlciB7XFxyXFxuICBvcGFjaXR5OiAwLjE1O1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LnByb2plY3Qge1xcclxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxufVxcclxcblxcclxcbi5uZXcudG9kbyB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1wcm9qZWN0IHtcXHJcXG4gIGdyaWQtYXJlYTogYWN0aXZlO1xcclxcbiAgLS1zcGFjZXI6IDJyZW07XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcXHJcXG4gIHdpZHRoOiA2MHZ3O1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1oZWFkZXIge1xcclxcbiAgcGFkZGluZzogdmFyKC0tc3BhY2VyKTtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeSk7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtdGl0bGUge1xcclxcbiAgbWFyZ2luOiAwIDFlbSAwIDA7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWJvZHkge1xcclxcbiAgcGFkZGluZzogdmFyKC0tc3BhY2VyKTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldy10YXNrLWNyZWF0b3IgLmNyZWF0ZSB7XFxyXFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxyXFxufVxcclxcblxcclxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdIHtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxufVxcclxcblxcclxcbi50b2RvIGxhYmVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXgtaW5saW5lO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8ge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMS4yNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kbzo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBib3R0b206IC0wLjVlbTtcXHJcXG4gIGhlaWdodDogMXB4O1xcclxcbiAgYmFja2dyb3VuZDogY3VycmVudENvbG9yO1xcclxcbiAgb3BhY2l0eTogMC4xO1xcclxcbn1cXHJcXG5cXHJcXG4uY3VzdG9tLWNoZWNrYm94IHtcXHJcXG4gIC0tc2l6ZTogMC43NWVtO1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgd2lkdGg6IHZhcigtLXNpemUpO1xcclxcbiAgaGVpZ2h0OiB2YXIoLS1zaXplKTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDI1JTtcXHJcXG59XFxyXFxuXFxyXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIGxhYmVsIC5jdXN0b20tY2hlY2tib3gge1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeSk7XFxyXFxuICBib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnkpO1xcclxcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDBweCAycHggd2hpdGU7XFxyXFxufVxcclxcblxcclxcblt0eXBlPVxcXCJjaGVja2JveFxcXCJdOmNoZWNrZWQgKyBsYWJlbCB7XFxyXFxuICBvcGFjaXR5OiAwLjU7XFxyXFxufVxcclxcblxcclxcbi50b2RvIGxhYmVsOjphZnRlciB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGxlZnQ6IDEuNWVtO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBoZWlnaHQ6IDNweDtcXHJcXG4gIGJhY2tncm91bmQ6IGN1cnJlbnRDb2xvcjtcXHJcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMCk7XFxyXFxuICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcXHJcXG4gIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogcmlnaHQ7XFxyXFxuICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodDtcXHJcXG4gIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDE1MG1zIGVhc2UtaW4tb3V0O1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDE1MG1zIGVhc2UtaW4tb3V0O1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDE1MG1zIGVhc2UtaW4tb3V0LCAtd2Via2l0LXRyYW5zZm9ybSAxNTBtcyBlYXNlLWluLW91dDtcXHJcXG59XFxyXFxuXFxyXFxuW3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZCArIGxhYmVsOjphZnRlciB7XFxyXFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDEpO1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZVgoMSk7XFxyXFxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IGxlZnQ7XFxyXFxuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0O1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlLXN0dWZmIHtcXHJcXG4gIGdyaWQtYXJlYTogZGVsZXRlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBjb2xvcjogdmFyKC0tYWNjZW50KSAhaW1wb3J0YW50O1xcclxcblxcclxcbiAgY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIG9wZW5Nb2RhbChtb2RhbFR5cGUpIHtcclxuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLW1vZGFsPVwiJHttb2RhbFR5cGV9XCJdYCk7XHJcbiAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIikuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xvc2VNb2RhbChtb2RhbFR5cGUpIHtcclxuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLW1vZGFsPVwiJHttb2RhbFR5cGV9XCJdYCk7XHJcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIikuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0dXBPdmVybGF5TGlzdGVuZXIoKSB7XHJcbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKTtcclxuICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBkb2N1bWVudFxyXG4gICAgICAucXVlcnlTZWxlY3RvckFsbChcIi5tb2RhbFwiKVxyXG4gICAgICAuZm9yRWFjaCgobW9kYWwpID0+IG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIikpO1xyXG4gICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXR1cEVzY2FwZUxpc3RlbmVyKCkge1xyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XHJcbiAgICBpZiAoZS5rZXkgPT09IFwiRXNjYXBlXCIpIHtcclxuICAgICAgZG9jdW1lbnRcclxuICAgICAgICAucXVlcnlTZWxlY3RvckFsbChcIi5tb2RhbFwiKVxyXG4gICAgICAgIC5mb3JFYWNoKChtb2RhbCkgPT4gbW9kYWwuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKSk7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICBpZiAoZS50YXJnZXQubWF0Y2hlcyhcIltkYXRhLW1vZGFsLW9wZW5dXCIpKSB7XHJcbiAgICBjb25zdCBtb2RhbFR5cGUgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLW1vZGFsLW9wZW5cIik7XHJcbiAgICBvcGVuTW9kYWwobW9kYWxUeXBlKTtcclxuICB9XHJcbn0pO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoXCJbZGF0YS1tb2RhbC1jbG9zZV1cIikpIHtcclxuICAgIGNvbnN0IG1vZGFsVHlwZSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtbW9kYWwtY2xvc2VcIik7XHJcbiAgICBjbG9zZU1vZGFsKG1vZGFsVHlwZSk7XHJcbiAgfVxyXG4gIGlmIChlLnRhcmdldC5tYXRjaGVzKFwiLm92ZXJsYXlcIikpIHtcclxuICAgIGRvY3VtZW50XHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1vZGFsXCIpXHJcbiAgICAgIC5mb3JFYWNoKChtb2RhbCkgPT4gbW9kYWwuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKSk7XHJcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBvcGVuTW9kYWwsXHJcbiAgY2xvc2VNb2RhbCxcclxuICBzZXR1cE92ZXJsYXlMaXN0ZW5lcixcclxuICBzZXR1cEVzY2FwZUxpc3RlbmVyLFxyXG59O1xyXG4iLCJpbXBvcnQgc3RhdGUgZnJvbSBcIi4vc3RhdGVcIjtcclxuaW1wb3J0IHN0b3JhZ2UgZnJvbSBcIi4vc3RvcmFnZVwiO1xyXG5pbXBvcnQgdWkgZnJvbSBcIi4vdWlcIjtcclxuXHJcbmNvbnN0IG5ld1Byb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW5ldy1wcm9qZWN0LWZvcm1dXCIpO1xyXG5jb25zdCBuZXdQcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbmV3LXByb2plY3QtaW5wdXRdXCIpO1xyXG5jb25zdCBkZWxldGVQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICBcIltkYXRhLWRlbGV0ZS1wcm9qZWN0LWJ1dHRvbl1cIlxyXG4pO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdCh0aXRsZSkge1xyXG4gIHJldHVybiB7XHJcbiAgICBpZDogRGF0ZS5ub3coKS50b1N0cmluZygpLFxyXG4gICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgdG9kb3M6IFtdLFxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZU5ld1Byb2plY3RTdWJtaXQoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBsZXQgcHJvamVjdHMgPSBzdGF0ZS5nZXRQcm9qZWN0cygpO1xyXG4gIGNvbnN0IHByb2plY3ROYW1lID0gbmV3UHJvamVjdElucHV0LnZhbHVlO1xyXG4gIGlmIChwcm9qZWN0TmFtZSA9PSBudWxsIHx8IHByb2plY3ROYW1lID09PSBcIlwiKSByZXR1cm47XHJcbiAgY29uc3QgcHJvamVjdCA9IGNyZWF0ZVByb2plY3QocHJvamVjdE5hbWUpO1xyXG4gIG5ld1Byb2plY3RJbnB1dC52YWx1ZSA9IG51bGw7XHJcbiAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcclxuICBzdGF0ZS5zZXRQcm9qZWN0cyhwcm9qZWN0cyk7XHJcbiAgbGV0IHNlbGVjdGVkUHJvamVjdElkID0gc3RhdGUuZ2V0U2VsZWN0ZWRQcm9qZWN0SWQoKTtcclxuICBzZWxlY3RlZFByb2plY3RJZCA9IHByb2plY3QuaWQ7XHJcbiAgc3RhdGUuc2V0U2VsZWN0ZWRQcm9qZWN0SWQoc2VsZWN0ZWRQcm9qZWN0SWQpO1xyXG4gIHN0b3JhZ2Uuc2F2ZSgpO1xyXG4gIHVpLnJlbmRlcigpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVQcm9qZWN0VGl0bGUocHJvamVjdElkLCBuZXdUaXRsZSkge1xyXG4gIGxldCBwcm9qZWN0cyA9IHN0YXRlLmdldFByb2plY3RzKCk7XHJcbiAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IHByb2plY3RJZCk7XHJcbiAgaWYgKHByb2plY3QpIHtcclxuICAgIHByb2plY3QudGl0bGUgPSBuZXdUaXRsZTtcclxuICAgIHN0YXRlLnNldFByb2plY3RzKHByb2plY3RzKTtcclxuICAgIHN0b3JhZ2Uuc2F2ZSgpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlRGVsZXRlUHJvamVjdCgpIHtcclxuICBsZXQgcHJvamVjdHMgPSBzdGF0ZS5nZXRQcm9qZWN0cygpO1xyXG4gIGxldCBzZWxlY3RlZFByb2plY3RJZCA9IHN0YXRlLmdldFNlbGVjdGVkUHJvamVjdElkKCk7XHJcbiAgY29uc3QgcHJvamVjdEluZGV4ID0gcHJvamVjdHMuZmluZEluZGV4KFxyXG4gICAgKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IHNlbGVjdGVkUHJvamVjdElkXHJcbiAgKTtcclxuXHJcbiAgcHJvamVjdHMgPSBwcm9qZWN0cy5maWx0ZXIoKHByb2plY3QpID0+IHByb2plY3QuaWQgIT09IHNlbGVjdGVkUHJvamVjdElkKTtcclxuXHJcbiAgbGV0IG5ld1NlbGVjdGVkUHJvamVjdElkID0gbnVsbDtcclxuICBpZiAocHJvamVjdHMubGVuZ3RoID4gMCkge1xyXG4gICAgaWYgKHByb2plY3RJbmRleCA+IDApIHtcclxuICAgICAgbmV3U2VsZWN0ZWRQcm9qZWN0SWQgPSBwcm9qZWN0c1twcm9qZWN0SW5kZXggLSAxXS5pZDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5ld1NlbGVjdGVkUHJvamVjdElkID0gcHJvamVjdHNbMF0uaWQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHNlbGVjdGVkUHJvamVjdElkID0gbmV3U2VsZWN0ZWRQcm9qZWN0SWQ7XHJcbiAgc3RhdGUuc2V0UHJvamVjdHMocHJvamVjdHMpO1xyXG4gIHN0YXRlLnNldFNlbGVjdGVkUHJvamVjdElkKHNlbGVjdGVkUHJvamVjdElkKTtcclxuICBzdG9yYWdlLnNhdmUoKTtcclxuICB1aS5yZW5kZXIoKTtcclxufVxyXG5cclxubmV3UHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVOZXdQcm9qZWN0U3VibWl0KTtcclxuZGVsZXRlUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlRGVsZXRlUHJvamVjdCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgaGFuZGxlTmV3UHJvamVjdFN1Ym1pdCxcclxuICB1cGRhdGVQcm9qZWN0VGl0bGUsXHJcbiAgaGFuZGxlRGVsZXRlUHJvamVjdCxcclxufTtcclxuIiwiLy8gdGFzay4gaXMgYWRkZWQgdG8gYXZvaWQgYW55IGNvbGxpc2lvbnMvY29uZmxpY3RzIHdpdGggdGhlIHN5c3RlbSBmaWxlcyBhbmQgd2Vic2l0ZXNcclxuY29uc3QgTE9DQUxfU1RPUkFHRV9QUk9KRUNUU19LRVkgPSBcInRhc2sucHJvamVjdHNcIjtcclxuY29uc3QgTE9DQUxfU1RPUkFHRV9TRUxFQ1RFRF9QUk9KRUNUX0lEX0tFWSA9IFwidGFzay5zZWxlY3RlZFByb2plY3RJZFwiO1xyXG5cclxubGV0IHByb2plY3RzID1cclxuICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKExPQ0FMX1NUT1JBR0VfUFJPSkVDVFNfS0VZKSkgfHwgW107XHJcbmxldCBzZWxlY3RlZFByb2plY3RJZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFxyXG4gIExPQ0FMX1NUT1JBR0VfU0VMRUNURURfUFJPSkVDVF9JRF9LRVlcclxuKTtcclxuXHJcbmZ1bmN0aW9uIGdldExvY2FsU3RvcmFnZVByb2plY3RzS2V5KCkge1xyXG4gIHJldHVybiBMT0NBTF9TVE9SQUdFX1BST0pFQ1RTX0tFWTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0TG9jYWxTdG9yYWdlU2VsZWN0ZWRQcm9qZWN0SWRLZXkoKSB7XHJcbiAgcmV0dXJuIExPQ0FMX1NUT1JBR0VfU0VMRUNURURfUFJPSkVDVF9JRF9LRVk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFByb2plY3RzKCkge1xyXG4gIHJldHVybiBwcm9qZWN0cztcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0UHJvamVjdHMobmV3UHJvamVjdHMpIHtcclxuICBwcm9qZWN0cyA9IG5ld1Byb2plY3RzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRTZWxlY3RlZFByb2plY3RJZCgpIHtcclxuICByZXR1cm4gc2VsZWN0ZWRQcm9qZWN0SWQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFNlbGVjdGVkUHJvamVjdElkKG5ld1NlbGVjdGVkUHJvamVjdElkKSB7XHJcbiAgc2VsZWN0ZWRQcm9qZWN0SWQgPSBuZXdTZWxlY3RlZFByb2plY3RJZDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGdldExvY2FsU3RvcmFnZVByb2plY3RzS2V5LFxyXG4gIGdldExvY2FsU3RvcmFnZVNlbGVjdGVkUHJvamVjdElkS2V5LFxyXG4gIGdldFByb2plY3RzLFxyXG4gIHNldFByb2plY3RzLFxyXG4gIGdldFNlbGVjdGVkUHJvamVjdElkLFxyXG4gIHNldFNlbGVjdGVkUHJvamVjdElkLFxyXG59O1xyXG4iLCJpbXBvcnQgc3RhdGUgZnJvbSBcIi4vc3RhdGVcIjtcclxuZnVuY3Rpb24gc2F2ZSgpIHtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcclxuICAgIHN0YXRlLmdldExvY2FsU3RvcmFnZVByb2plY3RzS2V5KCksXHJcbiAgICBKU09OLnN0cmluZ2lmeShzdGF0ZS5nZXRQcm9qZWN0cygpKVxyXG4gICk7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXHJcbiAgICBzdGF0ZS5nZXRMb2NhbFN0b3JhZ2VTZWxlY3RlZFByb2plY3RJZEtleSgpLFxyXG4gICAgc3RhdGUuZ2V0U2VsZWN0ZWRQcm9qZWN0SWQoKVxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBzYXZlLFxyXG59O1xyXG4iLCJpbXBvcnQgc3RvcmFnZSBmcm9tIFwiLi9zdG9yYWdlXCI7XHJcbmltcG9ydCB1aSBmcm9tIFwiLi91aVwiO1xyXG5pbXBvcnQgc3RhdGUgZnJvbSBcIi4vc3RhdGVcIjtcclxuaW1wb3J0IG1vZGFsIGZyb20gXCIuL21vZGFsXCI7XHJcblxyXG5jb25zdCB0b2Rvc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10YXNrc11cIik7XHJcbmNvbnN0IG5ld1RvZG9Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW5ldy10b2RvLWZvcm1dXCIpO1xyXG5jb25zdCBuZXdUb2RvVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbmV3LXRvZG8tdGl0bGVdXCIpO1xyXG5jb25zdCBuZXdUb2RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gIFwiW2RhdGEtbmV3LXRvZG8tZGVzY3JpcHRpb25dXCJcclxuKTtcclxuY29uc3QgbmV3VG9kb0R1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbmV3LXRvZG8tZHVlXVwiKTtcclxuY29uc3QgbmV3VG9kb1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW5ldy10b2RvLXByaW9yaXR5XVwiKTtcclxuY29uc3QgY2xlYXJDb21wbGV0ZVRvZG9zQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICBcIltkYXRhLWNsZWFyLWNvbXBsZXRlLXRhc2tzLWJ1dHRvbl1cIlxyXG4pO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGlkOiBEYXRlLm5vdygpLnRvU3RyaW5nKCksXHJcbiAgICB0aXRsZTogdGl0bGUsXHJcbiAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXHJcbiAgICBkdWVEYXRlOiBkdWVEYXRlLFxyXG4gICAgcHJpb3JpdHk6IHByaW9yaXR5LFxyXG4gICAgY29tcGxldGU6IGZhbHNlLFxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZU5ld1RvZG9TdWJtaXQoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBjb25zdCB0b2RvVGl0bGUgPSBuZXdUb2RvVGl0bGUudmFsdWU7XHJcbiAgY29uc3QgdG9kb0Rlc2NyaXB0aW9uID0gbmV3VG9kb0Rlc2NyaXB0aW9uLnZhbHVlO1xyXG4gIGNvbnN0IHRvZG9EdWVEYXRlID0gbmV3VG9kb0R1ZURhdGUudmFsdWU7XHJcbiAgY29uc3QgdG9kb1ByaW9yaXR5ID0gbmV3VG9kb1ByaW9yaXR5LnZhbHVlO1xyXG5cclxuICBpZiAodG9kb1RpdGxlID09IG51bGwgfHwgdG9kb1RpdGxlID09PSBcIlwiKSByZXR1cm47XHJcblxyXG4gIGNvbnN0IHRvZG8gPSBjcmVhdGVUb2RvKFxyXG4gICAgdG9kb1RpdGxlLFxyXG4gICAgdG9kb0Rlc2NyaXB0aW9uLFxyXG4gICAgdG9kb0R1ZURhdGUsXHJcbiAgICB0b2RvUHJpb3JpdHlcclxuICApO1xyXG4gIG5ld1RvZG9UaXRsZS52YWx1ZSA9IG51bGw7XHJcbiAgbmV3VG9kb0Rlc2NyaXB0aW9uLnZhbHVlID0gbnVsbDtcclxuICBuZXdUb2RvRHVlRGF0ZS52YWx1ZSA9IG51bGw7XHJcbiAgbmV3VG9kb1ByaW9yaXR5LnZhbHVlID0gbnVsbDtcclxuICBjb25zdCBwcm9qZWN0cyA9IHN0YXRlLmdldFByb2plY3RzKCk7XHJcbiAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0SWQgPSBzdGF0ZS5nZXRTZWxlY3RlZFByb2plY3RJZCgpO1xyXG4gIGNvbnN0IHNlbGVjdGVkUHJvamVjdCA9IHByb2plY3RzLmZpbmQoXHJcbiAgICAocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gc2VsZWN0ZWRQcm9qZWN0SWRcclxuICApO1xyXG4gIHNlbGVjdGVkUHJvamVjdC50b2Rvcy5wdXNoKHRvZG8pO1xyXG4gIHN0b3JhZ2Uuc2F2ZSgpO1xyXG4gIHVpLnJlbmRlcigpO1xyXG4gIG1vZGFsLmNsb3NlTW9kYWwoXCJuZXctdG9kb1wiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlVG9kb0l0ZW1DaGVjayhlKSB7XHJcbiAgaWYgKGUudGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJpbnB1dFwiKSB7XHJcbiAgICBjb25zdCBzZWxlY3RlZFByb2plY3RJZCA9IHN0YXRlLmdldFNlbGVjdGVkUHJvamVjdElkKCk7XHJcbiAgICBjb25zdCBwcm9qZWN0cyA9IHN0YXRlLmdldFByb2plY3RzKCk7XHJcbiAgICBjb25zdCBzZWxlY3RlZFByb2plY3QgPSBwcm9qZWN0cy5maW5kKFxyXG4gICAgICAocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gc2VsZWN0ZWRQcm9qZWN0SWRcclxuICAgICk7XHJcbiAgICBjb25zdCBzZWxlY3RlZFRhc2sgPSBzZWxlY3RlZFByb2plY3QudG9kb3MuZmluZChcclxuICAgICAgKHRhc2spID0+IHRhc2suaWQgPT09IGUudGFyZ2V0LmlkXHJcbiAgICApO1xyXG4gICAgc2VsZWN0ZWRUYXNrLmNvbXBsZXRlID0gZS50YXJnZXQuY2hlY2tlZDtcclxuICAgIHN0b3JhZ2Uuc2F2ZSgpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlVG9kb0VsZW1lbnQodG9kb0lkLCBrZXksIHZhbHVlKSB7XHJcbiAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0SWQgPSBzdGF0ZS5nZXRTZWxlY3RlZFByb2plY3RJZCgpO1xyXG4gIGNvbnN0IHByb2plY3RzID0gc3RhdGUuZ2V0UHJvamVjdHMoKTtcclxuICBjb25zdCBzZWxlY3RlZFByb2plY3QgPSBwcm9qZWN0cy5maW5kKFxyXG4gICAgKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IHNlbGVjdGVkUHJvamVjdElkXHJcbiAgKTtcclxuICBjb25zdCBzZWxlY3RlZFRvZG8gPSBzZWxlY3RlZFByb2plY3QudG9kb3MuZmluZCgodG9kbykgPT4gdG9kby5pZCA9PT0gdG9kb0lkKTtcclxuICBpZiAoc2VsZWN0ZWRUb2RvKSB7XHJcbiAgICBzZWxlY3RlZFRvZG9ba2V5XSA9IHZhbHVlO1xyXG4gICAgc3RvcmFnZS5zYXZlKCk7XHJcbiAgICB1aS5yZW5kZXIoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc29sZS5lcnJvcihgVG9kbyB3aXRoIElEICR7dG9kb0lkfSBub3QgZm91bmQuYCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVDbGVhckNvbXBsZXRlVG9kb3MoKSB7XHJcbiAgY29uc3QgcHJvamVjdHMgPSBzdGF0ZS5nZXRQcm9qZWN0cygpO1xyXG4gIGNvbnN0IHNlbGVjdGVkUHJvamVjdElkID0gc3RhdGUuZ2V0U2VsZWN0ZWRQcm9qZWN0SWQoKTtcclxuICBjb25zdCBzZWxlY3RlZFByb2plY3QgPSBwcm9qZWN0cy5maW5kKFxyXG4gICAgKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IHNlbGVjdGVkUHJvamVjdElkXHJcbiAgKTtcclxuICBzZWxlY3RlZFByb2plY3QudG9kb3MgPSBzZWxlY3RlZFByb2plY3QudG9kb3MuZmlsdGVyKFxyXG4gICAgKHRhc2spID0+ICF0YXNrLmNvbXBsZXRlXHJcbiAgKTtcclxuICBzdG9yYWdlLnNhdmUoKTtcclxuICB1aS5yZW5kZXIoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlRGVsZXRlVG9kb0l0ZW0odG9kb0lkKSB7XHJcbiAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0SWQgPSBzdGF0ZS5nZXRTZWxlY3RlZFByb2plY3RJZCgpO1xyXG4gIGxldCBwcm9qZWN0cyA9IHN0YXRlLmdldFByb2plY3RzKCk7XHJcbiAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0ID0gcHJvamVjdHMuZmluZChcclxuICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBzZWxlY3RlZFByb2plY3RJZFxyXG4gICk7XHJcblxyXG4gIHNlbGVjdGVkUHJvamVjdC50b2RvcyA9IHNlbGVjdGVkUHJvamVjdC50b2Rvcy5maWx0ZXIoXHJcbiAgICAodG9kbykgPT4gdG9kby5pZCAhPT0gdG9kb0lkXHJcbiAgKTtcclxuICBzdGF0ZS5zZXRQcm9qZWN0cyhwcm9qZWN0cyk7XHJcbiAgc3RvcmFnZS5zYXZlKCk7XHJcbiAgdWkucmVuZGVyKCk7XHJcbiAgbW9kYWwuY2xvc2VNb2RhbChcInZpZXctdG9kb1wiKTtcclxufVxyXG5cclxudG9kb3NDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZVRvZG9JdGVtQ2hlY2spO1xyXG5cclxubmV3VG9kb0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVOZXdUb2RvU3VibWl0KTtcclxuY2xlYXJDb21wbGV0ZVRvZG9zQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVDbGVhckNvbXBsZXRlVG9kb3MpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGhhbmRsZU5ld1RvZG9TdWJtaXQsXHJcbiAgaGFuZGxlVG9kb0l0ZW1DaGVjayxcclxuICB1cGRhdGVUb2RvRWxlbWVudCxcclxuICBoYW5kbGVDbGVhckNvbXBsZXRlVG9kb3MsXHJcbiAgaGFuZGxlRGVsZXRlVG9kb0l0ZW0sXHJcbn07XHJcbiIsImltcG9ydCBzdGF0ZSBmcm9tIFwiLi9zdGF0ZVwiO1xyXG5pbXBvcnQgc3RvcmFnZSBmcm9tIFwiLi9zdG9yYWdlXCI7XHJcbmltcG9ydCBwcm9qZWN0RnVuY3Rpb25zIGZyb20gXCIuL3Byb2plY3RGdW5jdGlvbnNcIjtcclxuaW1wb3J0IHRvZG9GdW5jdGlvbnMgZnJvbSBcIi4vdG9kb0Z1bmN0aW9uc1wiO1xyXG5pbXBvcnQgbW9kYWwgZnJvbSBcIi4vbW9kYWxcIjtcclxuXHJcbmNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXByb2plY3RzXVwiKTtcclxuY29uc3QgdG9kb3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdGFza3NdXCIpO1xyXG5jb25zdCB0b2RvVGVtcGxhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvZG8tdGVtcGxhdGVcIik7XHJcbmNvbnN0IHByb2plY3REaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICBcIltkYXRhLXByb2plY3QtZGlzcGxheS1jb250YWluZXJdXCJcclxuKTtcclxuY29uc3QgcHJvamVjdFRpdGxlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1wcm9qZWN0LXRpdGxlXVwiKTtcclxuY29uc3QgcHJvamVjdFRpdGxlRWRpdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgXCJbZGF0YS1wcm9qZWN0LXRpdGxlLWVkaXQtYnRuXVwiXHJcbik7XHJcblxyXG5sZXQgY3VycmVudFRvZG9JZCA9IG51bGw7XHJcblxyXG5mdW5jdGlvbiBjbGVhckVsZW1lbnQoZWxlbWVudCkge1xyXG4gIHdoaWxlIChlbGVtZW50LmZpcnN0Q2hpbGQpIHtcclxuICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQoZWxlbWVudC5maXJzdENoaWxkKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlclByb2plY3RzKCkge1xyXG4gIGNvbnN0IHByb2plY3RzID0gc3RhdGUuZ2V0UHJvamVjdHMoKTtcclxuICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XHJcbiAgICBjb25zdCBwcm9qZWN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgIHByb2plY3RJdGVtLmRhdGFzZXQucHJvamVjdElkID0gcHJvamVjdC5pZDtcclxuICAgIHByb2plY3RJdGVtLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWl0ZW1cIik7XHJcbiAgICBwcm9qZWN0SXRlbS5pbm5lclRleHQgPSBwcm9qZWN0LnRpdGxlO1xyXG4gICAgcHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdEl0ZW0pO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJUb2RvcyhzZWxlY3RlZFByb2plY3QpIHtcclxuICBzZWxlY3RlZFByb2plY3QudG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xyXG4gICAgY29uc3QgdG9kb0VsZW1lbnQgPSBkb2N1bWVudC5pbXBvcnROb2RlKHRvZG9UZW1wbGF0ZS5jb250ZW50LCB0cnVlKTtcclxuICAgIGNvbnN0IGNoZWNrYm94ID0gdG9kb0VsZW1lbnQucXVlcnlTZWxlY3RvcihcImlucHV0XCIpO1xyXG4gICAgY2hlY2tib3guaWQgPSB0b2RvLmlkO1xyXG4gICAgY2hlY2tib3guY2hlY2tlZCA9IHRvZG8uY29tcGxldGU7XHJcbiAgICBjb25zdCBsYWJlbCA9IHRvZG9FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJsYWJlbFwiKTtcclxuICAgIGxhYmVsLmh0bWxGb3IgPSB0b2RvLmlkO1xyXG4gICAgbGFiZWwuYXBwZW5kKHRvZG8udGl0bGUpO1xyXG4gICAgY29uc3QgZHVlRGF0ZSA9IHRvZG9FbGVtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlXCIpO1xyXG4gICAgZHVlRGF0ZS5pbm5lclRleHQgPSBgRHVlIGRhdGU6ICR7dG9kby5kdWVEYXRlfWA7XHJcbiAgICBjb25zdCBwcmlvcml0eSA9IHRvZG9FbGVtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpb3JpdHlcIik7XHJcbiAgICBwcmlvcml0eS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0b2RvLnByaW9yaXR5O1xyXG5cclxuICAgIHRvZG9zQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9FbGVtZW50KTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyKCkge1xyXG4gIGNsZWFyRWxlbWVudChwcm9qZWN0c0NvbnRhaW5lcik7XHJcbiAgcmVuZGVyUHJvamVjdHMoKTtcclxuICBjb25zdCBwcm9qZWN0cyA9IHN0YXRlLmdldFByb2plY3RzKCk7XHJcbiAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0SWQgPSBzdGF0ZS5nZXRTZWxlY3RlZFByb2plY3RJZCgpO1xyXG5cclxuICBjb25zdCBzZWxlY3RlZFByb2plY3QgPSBwcm9qZWN0cy5maW5kKFxyXG4gICAgKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IHNlbGVjdGVkUHJvamVjdElkXHJcbiAgKTtcclxuICBpZiAoc2VsZWN0ZWRQcm9qZWN0SWQgPT0gbnVsbCB8fCBzZWxlY3RlZFByb2plY3QgPT0gbnVsbCkge1xyXG4gICAgcHJvamVjdERpc3BsYXlDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBwcm9qZWN0RGlzcGxheUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcclxuICAgIHByb2plY3RUaXRsZUVsZW1lbnQuaW5uZXJUZXh0ID0gc2VsZWN0ZWRQcm9qZWN0LnRpdGxlO1xyXG4gICAgY2xlYXJFbGVtZW50KHRvZG9zQ29udGFpbmVyKTtcclxuICAgIHJlbmRlclRvZG9zKHNlbGVjdGVkUHJvamVjdCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVFZGl0UHJvamVjdFRpdGxlKCkge1xyXG4gIGNvbnN0IGlzRWRpdGluZyA9IHByb2plY3RUaXRsZUVkaXRCdG4uaW5uZXJUZXh0ID09PSBcIlNhdmVcIjtcclxuICBpZiAoaXNFZGl0aW5nKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0VGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC10aXRsZS1pbnB1dFwiKTtcclxuICAgIGNvbnN0IG5ld1RpdGxlID0gcHJvamVjdFRpdGxlSW5wdXQudmFsdWUudHJpbSgpO1xyXG4gICAgaWYgKG5ld1RpdGxlICYmIG5ld1RpdGxlICE9PSBwcm9qZWN0VGl0bGVFbGVtZW50LmlubmVyVGV4dCkge1xyXG4gICAgICBwcm9qZWN0RnVuY3Rpb25zLnVwZGF0ZVByb2plY3RUaXRsZShcclxuICAgICAgICBzdGF0ZS5nZXRTZWxlY3RlZFByb2plY3RJZCgpLFxyXG4gICAgICAgIG5ld1RpdGxlXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBwcm9qZWN0VGl0bGVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICBwcm9qZWN0VGl0bGVFZGl0QnRuLmlubmVyVGV4dCA9IFwiRWRpdFwiO1xyXG4gICAgcHJvamVjdFRpdGxlSW5wdXQucmVtb3ZlKCk7XHJcbiAgICByZW5kZXIoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gcHJvamVjdFRpdGxlRWxlbWVudC5pbm5lclRleHQ7XHJcbiAgICBwcm9qZWN0VGl0bGVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0VGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIHByb2plY3RUaXRsZUlucHV0LnR5cGUgPSBcInRleHRcIjtcclxuICAgIHByb2plY3RUaXRsZUlucHV0LnZhbHVlID0gcHJvamVjdFRpdGxlO1xyXG4gICAgcHJvamVjdFRpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZChcInByb2plY3QtdGl0bGUtaW5wdXRcIik7XHJcblxyXG4gICAgcHJvamVjdFRpdGxlRWxlbWVudC5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShcclxuICAgICAgcHJvamVjdFRpdGxlSW5wdXQsXHJcbiAgICAgIHByb2plY3RUaXRsZUVkaXRCdG5cclxuICAgICk7XHJcbiAgICBwcm9qZWN0VGl0bGVJbnB1dC5mb2N1cygpO1xyXG4gICAgcHJvamVjdFRpdGxlRWRpdEJ0bi5pbm5lclRleHQgPSBcIlNhdmVcIjtcclxuICAgIHByb2plY3RUaXRsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCAoZSkgPT4ge1xyXG4gICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xyXG4gICAgICAgIHByb2plY3RUaXRsZUVkaXRCdG4uY2xpY2soKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVWaWV3VG9kb0RldGFpbHMoZSkge1xyXG4gIGNvbnN0IHByaW9yaXR5TWFwcGluZyA9IHtcclxuICAgIGdyZWVuOiBcIkxvd1wiLFxyXG4gICAgb3JhbmdlOiBcIk1lZGl1bVwiLFxyXG4gICAgcmVkOiBcIkhpZ2hcIixcclxuICB9O1xyXG5cclxuICBpZiAoZS50YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcImlucHV0XCIpIHJldHVybjsgLy8gSWdub3JlIGNoZWNrYm94IGNsaWNrc1xyXG4gIGNvbnN0IHNlbGVjdGVkUHJvamVjdElkID0gc3RhdGUuZ2V0U2VsZWN0ZWRQcm9qZWN0SWQoKTtcclxuICBjb25zdCBwcm9qZWN0cyA9IHN0YXRlLmdldFByb2plY3RzKCk7XHJcbiAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0ID0gcHJvamVjdHMuZmluZChcclxuICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBzZWxlY3RlZFByb2plY3RJZFxyXG4gICk7XHJcbiAgY29uc3QgdG9kb0lkID0gZS5jdXJyZW50VGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoXCJpbnB1dFwiKS5pZDtcclxuICBjdXJyZW50VG9kb0lkID0gdG9kb0lkO1xyXG4gIGNvbnN0IHNlbGVjdGVkVG9kbyA9IHNlbGVjdGVkUHJvamVjdC50b2Rvcy5maW5kKCh0b2RvKSA9PiB0b2RvLmlkID09PSB0b2RvSWQpO1xyXG5cclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdG9kby10aXRsZV1cIikuaW5uZXJUZXh0ID0gc2VsZWN0ZWRUb2RvLnRpdGxlO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10b2RvLXRpdGxlLWlucHV0XVwiKS52YWx1ZSA9IHNlbGVjdGVkVG9kby50aXRsZTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdG9kby1kZXNjcmlwdGlvbl1cIikuaW5uZXJUZXh0ID1cclxuICAgIHNlbGVjdGVkVG9kby5kZXNjcmlwdGlvbjtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdG9kby1kZXNjcmlwdGlvbi1pbnB1dF1cIikudmFsdWUgPVxyXG4gICAgc2VsZWN0ZWRUb2RvLmRlc2NyaXB0aW9uO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICBcIltkYXRhLXRvZG8tZHVlLWRhdGVdXCJcclxuICApLmlubmVyVGV4dCA9IGBEdWUgZGF0ZTogJHtzZWxlY3RlZFRvZG8uZHVlRGF0ZX1gO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10b2RvLWR1ZS1kYXRlLWlucHV0XVwiKS52YWx1ZSA9XHJcbiAgICBzZWxlY3RlZFRvZG8uZHVlRGF0ZTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdG9kby1wcmlvcml0eV1cIikuaW5uZXJUZXh0ID0gYFByaW9yaXR5OiAke1xyXG4gICAgcHJpb3JpdHlNYXBwaW5nW3NlbGVjdGVkVG9kby5wcmlvcml0eV1cclxuICB9YDtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdG9kby1wcmlvcml0eS1pbnB1dF1cIikudmFsdWUgPVxyXG4gICAgc2VsZWN0ZWRUb2RvLnByaW9yaXR5O1xyXG5cclxuICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtZGVsZXRlLXRvZG8tYnV0dG9uXVwiKTtcclxuICBkZWxldGVCdXR0b24ub25jbGljayA9ICgpID0+IHRvZG9GdW5jdGlvbnMuaGFuZGxlRGVsZXRlVG9kb0l0ZW0odG9kb0lkKTtcclxuXHJcbiAgbW9kYWwub3Blbk1vZGFsKFwidmlldy10b2RvXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVFZGl0VG9kb0VsZW1lbnQoXHJcbiAgZWRpdEJ0bixcclxuICBkaXNwbGF5RWxlbWVudCxcclxuICBpbnB1dEVsZW1lbnQsXHJcbiAgc2F2ZUNhbGxiYWNrXHJcbikge1xyXG4gIGNvbnN0IGlzRWRpdGluZyA9IGVkaXRCdG4uaW5uZXJUZXh0ID09PSBcIlNhdmVcIjtcclxuICBpZiAoaXNFZGl0aW5nKSB7XHJcbiAgICBjb25zdCBuZXdWYWx1ZSA9IGlucHV0RWxlbWVudC52YWx1ZS50cmltKCk7XHJcbiAgICBzYXZlQ2FsbGJhY2sobmV3VmFsdWUpO1xyXG4gICAgZGlzcGxheUVsZW1lbnQuaW5uZXJUZXh0ID0gbmV3VmFsdWU7XHJcbiAgICBkaXNwbGF5RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICBlZGl0QnRuLmlubmVyVGV4dCA9IFwiRWRpdFwiO1xyXG4gICAgc3RvcmFnZS5zYXZlKCk7XHJcbiAgICByZW5kZXIoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgaW5wdXRFbGVtZW50LnZhbHVlID0gZGlzcGxheUVsZW1lbnQuaW5uZXJUZXh0O1xyXG4gICAgZGlzcGxheUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbiAgICBpbnB1dEVsZW1lbnQuZm9jdXMoKTtcclxuICAgIGVkaXRCdG4uaW5uZXJUZXh0ID0gXCJTYXZlXCI7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBVc2UgY3VycmVudFRvZG9JZCBpbiB0aGUgZWRpdCBidXR0b24gY2xpY2sgaGFuZGxlcnNcclxuZG9jdW1lbnRcclxuICAucXVlcnlTZWxlY3RvcihcIltkYXRhLWVkaXQtdG9kby10aXRsZV1cIilcclxuICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBoYW5kbGVFZGl0VG9kb0VsZW1lbnQoXHJcbiAgICAgIGUudGFyZ2V0LFxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdG9kby10aXRsZV1cIiksXHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10b2RvLXRpdGxlLWlucHV0XVwiKSxcclxuICAgICAgKG5ld1ZhbHVlKSA9PlxyXG4gICAgICAgIHRvZG9GdW5jdGlvbnMudXBkYXRlVG9kb0VsZW1lbnQoY3VycmVudFRvZG9JZCwgXCJ0aXRsZVwiLCBuZXdWYWx1ZSlcclxuICAgICk7XHJcbiAgfSk7XHJcblxyXG5kb2N1bWVudFxyXG4gIC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtZWRpdC10b2RvLWRlc2NyaXB0aW9uXVwiKVxyXG4gIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIGhhbmRsZUVkaXRUb2RvRWxlbWVudChcclxuICAgICAgZS50YXJnZXQsXHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10b2RvLWRlc2NyaXB0aW9uXVwiKSxcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXRvZG8tZGVzY3JpcHRpb24taW5wdXRdXCIpLFxyXG4gICAgICAobmV3VmFsdWUpID0+XHJcbiAgICAgICAgdG9kb0Z1bmN0aW9ucy51cGRhdGVUb2RvRWxlbWVudChjdXJyZW50VG9kb0lkLCBcImRlc2NyaXB0aW9uXCIsIG5ld1ZhbHVlKVxyXG4gICAgKTtcclxuICB9KTtcclxuXHJcbmRvY3VtZW50XHJcbiAgLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1lZGl0LXRvZG8tZHVlLWRhdGVdXCIpXHJcbiAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgaGFuZGxlRWRpdFRvZG9FbGVtZW50KFxyXG4gICAgICBlLnRhcmdldCxcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXRvZG8tZHVlLWRhdGVdXCIpLFxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdG9kby1kdWUtZGF0ZS1pbnB1dF1cIiksXHJcbiAgICAgIChuZXdWYWx1ZSkgPT5cclxuICAgICAgICB0b2RvRnVuY3Rpb25zLnVwZGF0ZVRvZG9FbGVtZW50KGN1cnJlbnRUb2RvSWQsIFwiZHVlRGF0ZVwiLCBuZXdWYWx1ZSlcclxuICAgICk7XHJcbiAgfSk7XHJcblxyXG5kb2N1bWVudFxyXG4gIC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtZWRpdC10b2RvLXByaW9yaXR5XVwiKVxyXG4gIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIGhhbmRsZUVkaXRUb2RvRWxlbWVudChcclxuICAgICAgZS50YXJnZXQsXHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10b2RvLXByaW9yaXR5XVwiKSxcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXRvZG8tcHJpb3JpdHktaW5wdXRdXCIpLFxyXG4gICAgICAobmV3VmFsdWUpID0+XHJcbiAgICAgICAgdG9kb0Z1bmN0aW9ucy51cGRhdGVUb2RvRWxlbWVudChjdXJyZW50VG9kb0lkLCBcInByaW9yaXR5XCIsIG5ld1ZhbHVlKVxyXG4gICAgKTtcclxuICB9KTtcclxuXHJcbnByb2plY3RUaXRsZUVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUVkaXRQcm9qZWN0VGl0bGUpO1xyXG5cclxuZG9jdW1lbnRcclxuICAucXVlcnlTZWxlY3RvcihcIltkYXRhLXRvZG8tdGl0bGUtaW5wdXRdXCIpXHJcbiAgLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XHJcbiAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtZWRpdC10b2RvLXRpdGxlXVwiKS5jbGljaygpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuZG9jdW1lbnRcclxuICAucXVlcnlTZWxlY3RvcihcIltkYXRhLXRvZG8tZGVzY3JpcHRpb24taW5wdXRdXCIpXHJcbiAgLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XHJcbiAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtZWRpdC10b2RvLWRlc2NyaXB0aW9uXVwiKS5jbGljaygpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuZG9jdW1lbnRcclxuICAucXVlcnlTZWxlY3RvcihcIltkYXRhLXRvZG8tZHVlLWRhdGUtaW5wdXRdXCIpXHJcbiAgLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XHJcbiAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtZWRpdC10b2RvLWR1ZS1kYXRlXVwiKS5jbGljaygpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuZG9jdW1lbnRcclxuICAucXVlcnlTZWxlY3RvcihcIltkYXRhLXRvZG8tcHJpb3JpdHktaW5wdXRdXCIpXHJcbiAgLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XHJcbiAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtZWRpdC10b2RvLXByaW9yaXR5XVwiKS5jbGljaygpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxucHJvamVjdHNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgbGV0IHNlbGVjdGVkUHJvamVjdElkID0gc3RhdGUuZ2V0U2VsZWN0ZWRQcm9qZWN0SWQoKTtcclxuICBpZiAoZS50YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcImxpXCIpIHtcclxuICAgIHNlbGVjdGVkUHJvamVjdElkID0gZS50YXJnZXQuZGF0YXNldC5wcm9qZWN0SWQ7XHJcbiAgICBzdGF0ZS5zZXRTZWxlY3RlZFByb2plY3RJZChzZWxlY3RlZFByb2plY3RJZCk7XHJcbiAgICBzdG9yYWdlLnNhdmUoKTtcclxuICAgIHJlbmRlcigpO1xyXG4gIH1cclxufSk7XHJcblxyXG50b2Rvc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICBpZiAoZS50YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpICE9PSBcImlucHV0XCIpIHtcclxuICAgIGhhbmRsZVZpZXdUb2RvRGV0YWlscyhlKTtcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHRvZG9zQ29udGFpbmVyLFxyXG4gIGNsZWFyRWxlbWVudCxcclxuICByZW5kZXJQcm9qZWN0cyxcclxuICByZW5kZXJUb2RvcyxcclxuICByZW5kZXIsXHJcbn07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCBtb2RhbCBmcm9tIFwiLi9tb2R1bGVzL21vZGFsXCI7XHJcbmltcG9ydCBzdGF0ZSBmcm9tIFwiLi9tb2R1bGVzL3N0YXRlXCI7XHJcbmltcG9ydCBzdG9yYWdlIGZyb20gXCIuL21vZHVsZXMvc3RvcmFnZVwiO1xyXG5pbXBvcnQgdWkgZnJvbSBcIi4vbW9kdWxlcy91aVwiO1xyXG5pbXBvcnQgcHJvamVjdEZ1bmN0aW9ucyBmcm9tIFwiLi9tb2R1bGVzL3Byb2plY3RGdW5jdGlvbnNcIjtcclxuaW1wb3J0IHRvZG9GdW5jdGlvbnMgZnJvbSBcIi4vbW9kdWxlcy90b2RvRnVuY3Rpb25zXCI7XHJcblxyXG5tb2RhbC5zZXR1cE92ZXJsYXlMaXN0ZW5lcigpO1xyXG5tb2RhbC5zZXR1cEVzY2FwZUxpc3RlbmVyKCk7XHJcblxyXG51aS5yZW5kZXIoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9