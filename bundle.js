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

.btn.delete {
  margin-top: 8px;
  color: var(--background);
  background-color: red;
  padding: 8px;
  border-radius: 8px;
}

.todo-header .project-title {
  flex-grow: 1;
}

.todo-header .project-title-input {
  width: 100%;
  font-size: inherit;
  border: none;
  border-bottom: 2px solid transparent;
  outline: none;
  transition: border-bottom-color 0.3s;
}

.todo-header .project-title-input:focus {
  border-bottom-color: var(--primary);
}

.todo-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.todo-item p,
.todo-item h2,
.todo-item input,
.todo-item textarea,
.todo-item select {
  flex-grow: 1;
  margin: 0;
}

.todo-item .btn.edit {
  margin-left: 1rem;
}

.todos {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.todo {
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
  border-radius: 16px;
}

.todo-header {
  padding: var(--spacer);
  background: var(--secondary);
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 16px 16px 0 0;
}

.project-title {
  margin: 0 1em 0 0;
}

.todo-body {
  padding: var(--spacer);
  position: relative;
}

.new-todo-creator .create {
  color: var(--primary);
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

.delete-stuff {
  grid-area: delete;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  color: var(--accent) !important;

  color: var(--background);
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n  --primary: #7047d1;\r\n  --background: #f7f5fd;\r\n  --text: #06030b;\r\n  --secondary: #e28ca3;\r\n  --accent: #d87164;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  font-family: inherit;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 64px;\r\n  font-family: \"Work Sans\", sans-serif;\r\n  font-weight: 300;\r\n  font-size: 1.5rem;\r\n  background-color: var(--primary);\r\n  color: var(--background);\r\n  display: grid;\r\n  grid-template-areas:\r\n    \"header header header header\"\r\n    \"lists . active . \"\r\n    \"lists . delete .\";\r\n  grid-template-rows: auto 1fr;\r\n  grid-template-columns: minmax(100px, 300px) minmax(250px, 500px) 1fr 1fr;\r\n}\r\n\r\n.btn.delete {\r\n  margin-top: 8px;\r\n  color: var(--background);\r\n  background-color: red;\r\n  padding: 8px;\r\n  border-radius: 8px;\r\n}\r\n\r\n.todo-header .project-title {\r\n  flex-grow: 1;\r\n}\r\n\r\n.todo-header .project-title-input {\r\n  width: 100%;\r\n  font-size: inherit;\r\n  border: none;\r\n  border-bottom: 2px solid transparent;\r\n  outline: none;\r\n  transition: border-bottom-color 0.3s;\r\n}\r\n\r\n.todo-header .project-title-input:focus {\r\n  border-bottom-color: var(--primary);\r\n}\r\n\r\n.todo-item {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.todo-item p,\r\n.todo-item h2,\r\n.todo-item input,\r\n.todo-item textarea,\r\n.todo-item select {\r\n  flex-grow: 1;\r\n  margin: 0;\r\n}\r\n\r\n.todo-item .btn.edit {\r\n  margin-left: 1rem;\r\n}\r\n\r\n.todos {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 8px;\r\n}\r\n\r\n.todo {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.task-header {\r\n  display: flex;\r\n  gap: 4px;\r\n}\r\n\r\n.task-priority {\r\n  width: 16px;\r\n  height: auto;\r\n  border-radius: 16px;\r\n}\r\n\r\n.todo-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 16px;\r\n}\r\n\r\n.modal {\r\n  color: var(--text);\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  gap: 0.4rem;\r\n  width: 450px;\r\n  padding: 1.3rem;\r\n  min-height: 250px;\r\n  position: fixed;\r\n  z-index: 2;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  background-color: white;\r\n  border: 1px solid #ddd;\r\n  border-radius: 15px;\r\n}\r\n\r\n.modal input {\r\n  padding: 0.7rem 1rem;\r\n  border: 1px solid #ddd;\r\n  border-radius: 5px;\r\n  font-size: 0.9em;\r\n}\r\n\r\n.btn-open {\r\n  font-size: 1rem;\r\n}\r\n\r\n.btn-close {\r\n  font-size: 1.5rem;\r\n  font-weight: 600;\r\n  color: red !important;\r\n}\r\n\r\n.overlay {\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: rgba(0, 0, 0, 0.5);\r\n  backdrop-filter: blur(3px);\r\n  z-index: 1;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n.title {\r\n  grid-area: header;\r\n  text-align: center;\r\n  font-size: calc(7vw + 2rem);\r\n  font-weight: 900;\r\n  color: var(--secondary);\r\n  letter-spacing: 2px;\r\n  margin: -0.3em 0 0.5em;\r\n}\r\n\r\n.all-projects {\r\n  grid-area: lists;\r\n}\r\n\r\n.task-project {\r\n  font-size: 1.2rem;\r\n  line-height: 1.7;\r\n  list-style: circle;\r\n  padding-left: 1.1em;\r\n}\r\n\r\n.project-name,\r\n.project-item {\r\n  cursor: pointer;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n}\r\n\r\n.btn {\r\n  cursor: pointer;\r\n  background: 0;\r\n  border: 0;\r\n  padding: 0;\r\n  color: inherit;\r\n}\r\n\r\n.btn.create {\r\n  font-size: 1.5rem;\r\n  font-weight: 900;\r\n  transition: opacity 250ms ease-in;\r\n}\r\n\r\n.btn.create:hover {\r\n  opacity: 0.7;\r\n}\r\n\r\n.btn.delete {\r\n  opacity: 0.7;\r\n  font-size: 1rem;\r\n  transition: color 200ms;\r\n}\r\n\r\n.btn.delete:hover {\r\n  color: var(--accent);\r\n}\r\n\r\n.new {\r\n  width: 90%;\r\n  background: transparent;\r\n  border: 0;\r\n  color: inherit;\r\n  border-bottom: 1px solid currentColor;\r\n  font-size: inherit;\r\n  outline: none;\r\n  padding: 0.25em;\r\n  transition: border-bottom 150ms ease-in;\r\n}\r\n\r\n.new::placeholder {\r\n  opacity: 0.4;\r\n}\r\n\r\n.new:focus {\r\n  border-bottom-width: 3px;\r\n}\r\n\r\n.new:focus::placeholder {\r\n  opacity: 0.15;\r\n}\r\n\r\n.new.project {\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.new.todo {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.todo-project {\r\n  grid-area: active;\r\n  --spacer: 2rem;\r\n  background: var(--background);\r\n  color: var(--text);\r\n  width: 60vw;\r\n  height: auto;\r\n  border-radius: 16px;\r\n}\r\n\r\n.todo-header {\r\n  padding: var(--spacer);\r\n  background: var(--secondary);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  border-radius: 16px 16px 0 0;\r\n}\r\n\r\n.project-title {\r\n  margin: 0 1em 0 0;\r\n}\r\n\r\n.todo-body {\r\n  padding: var(--spacer);\r\n  position: relative;\r\n}\r\n\r\n.new-todo-creator .create {\r\n  color: var(--primary);\r\n}\r\n\r\n.todo label {\r\n  display: flex-inline;\r\n  align-items: center;\r\n  position: relative;\r\n}\r\n\r\n.todo {\r\n  position: relative;\r\n  margin-bottom: 1.25em;\r\n}\r\n\r\n.todo::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  right: 0;\r\n  left: 0;\r\n  bottom: -0.5em;\r\n  height: 1px;\r\n  background: currentColor;\r\n  opacity: 0.1;\r\n}\r\n\r\n.delete-stuff {\r\n  grid-area: delete;\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  width: 100%;\r\n  color: var(--accent) !important;\r\n\r\n  color: var(--background);\r\n}\r\n"],"sourceRoot":""}]);
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





const todosContainer = document.querySelector("[data-todos]");
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
  if (
    e.target.tagName.toLowerCase() === "input" &&
    e.target.type === "checkbox"
  ) {
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

  selectedTodo[key] = value;
  _storage__WEBPACK_IMPORTED_MODULE_0__["default"].save();
  _ui__WEBPACK_IMPORTED_MODULE_1__["default"].render();
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

// todosContainer.addEventListener("click", handleTodoItemCheck);

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
const todosContainer = document.querySelector("[data-todos]");
const todoTemplate = document.getElementById("todo-template");
const projectDisplayContainer = document.querySelector(
  "[data-project-display-container]"
);
const projectTitleElement = document.querySelector("[data-project-title]");
const projectTitleEditBtn = document.querySelector(
  "[data-project-title-edit-btn]"
);

const priorityMapping = {
  green: "Low",
  orange: "Medium",
  red: "High",
};

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
    const checkbox = todoElement.querySelector("[data-todo-checkbox]");
    checkbox.id = todo.id;
    checkbox.checked = todo.complete;
    checkbox.addEventListener("click", _todoFunctions__WEBPACK_IMPORTED_MODULE_3__["default"].handleTodoItemCheck);
    const label = todoElement.querySelector("[data-todo-label]");
    label.htmlFor = todo.id;
    label.append(todo.title);
    label.addEventListener("click", (e) => handleViewTodoDetails(e));
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
  e.stopPropagation();
  const selectedProjectId = _state__WEBPACK_IMPORTED_MODULE_0__["default"].getSelectedProjectId();
  const projects = _state__WEBPACK_IMPORTED_MODULE_0__["default"].getProjects();
  const selectedProject = projects.find(
    (project) => project.id === selectedProjectId
  );
  const todoId = e.currentTarget.getAttribute("for");
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

// todosContainer.addEventListener("click", (e) => {
//   if (e.target.tagName.toLowerCase() === "label") {
//     handleViewTodoDetails(e);
//   }
// });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sT0FBTyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLE9BQU8sYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sU0FBUyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZ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RztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSwwQkFBMEIsOENBQUs7QUFDL0I7QUFDQTtBQUNBLElBQUksOENBQUs7QUFDVCxJQUFJLGdEQUFPO0FBQ1g7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0EsaUVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxFQUFDOzs7Ozs7O1VDMVJGO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDZTtBQUNBO0FBQ0k7QUFDVjtBQUM0QjtBQUNOO0FBQ3BEO0FBQ0Esc0RBQUs7QUFDTCxzREFBSztBQUNMO0FBQ0EsbURBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvbW9kYWwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdEZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9zdGF0ZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9zdG9yYWdlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3RvZG9GdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdWkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGA6cm9vdCB7XHJcbiAgLS1wcmltYXJ5OiAjNzA0N2QxO1xyXG4gIC0tYmFja2dyb3VuZDogI2Y3ZjVmZDtcclxuICAtLXRleHQ6ICMwNjAzMGI7XHJcbiAgLS1zZWNvbmRhcnk6ICNlMjhjYTM7XHJcbiAgLS1hY2NlbnQ6ICNkODcxNjQ7XHJcbn1cclxuXHJcbiosXHJcbio6OmJlZm9yZSxcclxuKjo6YWZ0ZXIge1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiA2NHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIldvcmsgU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbiAgY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgIFwiaGVhZGVyIGhlYWRlciBoZWFkZXIgaGVhZGVyXCJcclxuICAgIFwibGlzdHMgLiBhY3RpdmUgLiBcIlxyXG4gICAgXCJsaXN0cyAuIGRlbGV0ZSAuXCI7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgxMDBweCwgMzAwcHgpIG1pbm1heCgyNTBweCwgNTAwcHgpIDFmciAxZnI7XHJcbn1cclxuXHJcbi5idG4uZGVsZXRlIHtcclxuICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG59XHJcblxyXG4udG9kby1oZWFkZXIgLnByb2plY3QtdGl0bGUge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxufVxyXG5cclxuLnRvZG8taGVhZGVyIC5wcm9qZWN0LXRpdGxlLWlucHV0IHtcclxuICB3aWR0aDogMTAwJTtcclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20tY29sb3IgMC4zcztcclxufVxyXG5cclxuLnRvZG8taGVhZGVyIC5wcm9qZWN0LXRpdGxlLWlucHV0OmZvY3VzIHtcclxuICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxufVxyXG5cclxuLnRvZG8taXRlbSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG59XHJcblxyXG4udG9kby1pdGVtIHAsXHJcbi50b2RvLWl0ZW0gaDIsXHJcbi50b2RvLWl0ZW0gaW5wdXQsXHJcbi50b2RvLWl0ZW0gdGV4dGFyZWEsXHJcbi50b2RvLWl0ZW0gc2VsZWN0IHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4udG9kby1pdGVtIC5idG4uZWRpdCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbn1cclxuXHJcbi50b2RvcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogOHB4O1xyXG59XHJcblxyXG4udG9kbyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi50YXNrLWhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDRweDtcclxufVxyXG5cclxuLnRhc2stcHJpb3JpdHkge1xyXG4gIHdpZHRoOiAxNnB4O1xyXG4gIGhlaWdodDogYXV0bztcclxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG59XHJcblxyXG4udG9kby1mb3JtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiAxNnB4O1xyXG59XHJcblxyXG4ubW9kYWwge1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ2FwOiAwLjRyZW07XHJcbiAgd2lkdGg6IDQ1MHB4O1xyXG4gIHBhZGRpbmc6IDEuM3JlbTtcclxuICBtaW4taGVpZ2h0OiAyNTBweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogMjtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcblxyXG4ubW9kYWwgaW5wdXQge1xyXG4gIHBhZGRpbmc6IDAuN3JlbSAxcmVtO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMC45ZW07XHJcbn1cclxuXHJcbi5idG4tb3BlbiB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG59XHJcblxyXG4uYnRuLWNsb3NlIHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiByZWQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm92ZXJsYXkge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcclxuICB6LWluZGV4OiAxO1xyXG59XHJcblxyXG4uaGlkZGVuIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IGNhbGMoN3Z3ICsgMnJlbSk7XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcclxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gIG1hcmdpbjogLTAuM2VtIDAgMC41ZW07XHJcbn1cclxuXHJcbi5hbGwtcHJvamVjdHMge1xyXG4gIGdyaWQtYXJlYTogbGlzdHM7XHJcbn1cclxuXHJcbi50YXNrLXByb2plY3Qge1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjc7XHJcbiAgbGlzdC1zdHlsZTogY2lyY2xlO1xyXG4gIHBhZGRpbmctbGVmdDogMS4xZW07XHJcbn1cclxuXHJcbi5wcm9qZWN0LW5hbWUsXHJcbi5wcm9qZWN0LWl0ZW0ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuZm9ybSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQ6IDA7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5idG4uY3JlYXRlIHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMjUwbXMgZWFzZS1pbjtcclxufVxyXG5cclxuLmJ0bi5jcmVhdGU6aG92ZXIge1xyXG4gIG9wYWNpdHk6IDAuNztcclxufVxyXG5cclxuLmJ0bi5kZWxldGUge1xyXG4gIG9wYWNpdHk6IDAuNztcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgdHJhbnNpdGlvbjogY29sb3IgMjAwbXM7XHJcbn1cclxuXHJcbi5idG4uZGVsZXRlOmhvdmVyIHtcclxuICBjb2xvcjogdmFyKC0tYWNjZW50KTtcclxufVxyXG5cclxuLm5ldyB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IDA7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBwYWRkaW5nOiAwLjI1ZW07XHJcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbSAxNTBtcyBlYXNlLWluO1xyXG59XHJcblxyXG4ubmV3OjpwbGFjZWhvbGRlciB7XHJcbiAgb3BhY2l0eTogMC40O1xyXG59XHJcblxyXG4ubmV3OmZvY3VzIHtcclxuICBib3JkZXItYm90dG9tLXdpZHRoOiAzcHg7XHJcbn1cclxuXHJcbi5uZXc6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcclxuICBvcGFjaXR5OiAwLjE1O1xyXG59XHJcblxyXG4ubmV3LnByb2plY3Qge1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG59XHJcblxyXG4ubmV3LnRvZG8ge1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi50b2RvLXByb2plY3Qge1xyXG4gIGdyaWQtYXJlYTogYWN0aXZlO1xyXG4gIC0tc3BhY2VyOiAycmVtO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcclxuICB3aWR0aDogNjB2dztcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxufVxyXG5cclxuLnRvZG8taGVhZGVyIHtcclxuICBwYWRkaW5nOiB2YXIoLS1zcGFjZXIpO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeSk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBib3JkZXItcmFkaXVzOiAxNnB4IDE2cHggMCAwO1xyXG59XHJcblxyXG4ucHJvamVjdC10aXRsZSB7XHJcbiAgbWFyZ2luOiAwIDFlbSAwIDA7XHJcbn1cclxuXHJcbi50b2RvLWJvZHkge1xyXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlcik7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubmV3LXRvZG8tY3JlYXRvciAuY3JlYXRlIHtcclxuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbn1cclxuXHJcbi50b2RvIGxhYmVsIHtcclxuICBkaXNwbGF5OiBmbGV4LWlubGluZTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnRvZG8ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tYm90dG9tOiAxLjI1ZW07XHJcbn1cclxuXHJcbi50b2RvOjphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IC0wLjVlbTtcclxuICBoZWlnaHQ6IDFweDtcclxuICBiYWNrZ3JvdW5kOiBjdXJyZW50Q29sb3I7XHJcbiAgb3BhY2l0eTogMC4xO1xyXG59XHJcblxyXG4uZGVsZXRlLXN0dWZmIHtcclxuICBncmlkLWFyZWE6IGRlbGV0ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQpICFpbXBvcnRhbnQ7XHJcblxyXG4gIGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFD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RUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLDZCQUE2QjtFQUM3QixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixPQUFPO0VBQ1AsY0FBYztFQUNkLFdBQVc7RUFDWCx3QkFBd0I7RUFDeEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsV0FBVztFQUNYLCtCQUErQjs7RUFFL0Isd0JBQXdCO0FBQzFCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gIC0tcHJpbWFyeTogIzcwNDdkMTtcXHJcXG4gIC0tYmFja2dyb3VuZDogI2Y3ZjVmZDtcXHJcXG4gIC0tdGV4dDogIzA2MDMwYjtcXHJcXG4gIC0tc2Vjb25kYXJ5OiAjZTI4Y2EzO1xcclxcbiAgLS1hY2NlbnQ6ICNkODcxNjQ7XFxyXFxufVxcclxcblxcclxcbiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiA2NHB4O1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJXb3JrIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxyXFxuICBjb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXHJcXG4gICAgXFxcImhlYWRlciBoZWFkZXIgaGVhZGVyIGhlYWRlclxcXCJcXHJcXG4gICAgXFxcImxpc3RzIC4gYWN0aXZlIC4gXFxcIlxcclxcbiAgICBcXFwibGlzdHMgLiBkZWxldGUgLlxcXCI7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMTAwcHgsIDMwMHB4KSBtaW5tYXgoMjUwcHgsIDUwMHB4KSAxZnIgMWZyO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLmRlbGV0ZSB7XFxyXFxuICBtYXJnaW4tdG9wOiA4cHg7XFxyXFxuICBjb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICBwYWRkaW5nOiA4cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWhlYWRlciAucHJvamVjdC10aXRsZSB7XFxyXFxuICBmbGV4LWdyb3c6IDE7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWhlYWRlciAucHJvamVjdC10aXRsZS1pbnB1dCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tLWNvbG9yIDAuM3M7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWhlYWRlciAucHJvamVjdC10aXRsZS1pbnB1dDpmb2N1cyB7XFxyXFxuICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8taXRlbSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcbi50b2RvLWl0ZW0gcCxcXHJcXG4udG9kby1pdGVtIGgyLFxcclxcbi50b2RvLWl0ZW0gaW5wdXQsXFxyXFxuLnRvZG8taXRlbSB0ZXh0YXJlYSxcXHJcXG4udG9kby1pdGVtIHNlbGVjdCB7XFxyXFxuICBmbGV4LWdyb3c6IDE7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWl0ZW0gLmJ0bi5lZGl0IHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb3Mge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2staGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stcHJpb3JpdHkge1xcclxcbiAgd2lkdGg6IDE2cHg7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwge1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogMC40cmVtO1xcclxcbiAgd2lkdGg6IDQ1MHB4O1xcclxcbiAgcGFkZGluZzogMS4zcmVtO1xcclxcbiAgbWluLWhlaWdodDogMjUwcHg7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbCBpbnB1dCB7XFxyXFxuICBwYWRkaW5nOiAwLjdyZW0gMXJlbTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBmb250LXNpemU6IDAuOWVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLW9wZW4ge1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLWNsb3NlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGNvbG9yOiByZWQgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLm92ZXJsYXkge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIHtcXHJcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiBjYWxjKDd2dyArIDJyZW0pO1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXHJcXG4gIG1hcmdpbjogLTAuM2VtIDAgMC41ZW07XFxyXFxufVxcclxcblxcclxcbi5hbGwtcHJvamVjdHMge1xcclxcbiAgZ3JpZC1hcmVhOiBsaXN0cztcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stcHJvamVjdCB7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjc7XFxyXFxuICBsaXN0LXN0eWxlOiBjaXJjbGU7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDEuMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1uYW1lLFxcclxcbi5wcm9qZWN0LWl0ZW0ge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5idG4ge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYmFja2dyb3VuZDogMDtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBjb2xvcjogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi5jcmVhdGUge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAyNTBtcyBlYXNlLWluO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLmNyZWF0ZTpob3ZlciB7XFxyXFxuICBvcGFjaXR5OiAwLjc7XFxyXFxufVxcclxcblxcclxcbi5idG4uZGVsZXRlIHtcXHJcXG4gIG9wYWNpdHk6IDAuNztcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIHRyYW5zaXRpb246IGNvbG9yIDIwMG1zO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLmRlbGV0ZTpob3ZlciB7XFxyXFxuICBjb2xvcjogdmFyKC0tYWNjZW50KTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldyB7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxuICBjb2xvcjogaW5oZXJpdDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBjdXJyZW50Q29sb3I7XFxyXFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgcGFkZGluZzogMC4yNWVtO1xcclxcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbSAxNTBtcyBlYXNlLWluO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3OjpwbGFjZWhvbGRlciB7XFxyXFxuICBvcGFjaXR5OiAwLjQ7XFxyXFxufVxcclxcblxcclxcbi5uZXc6Zm9jdXMge1xcclxcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3OmZvY3VzOjpwbGFjZWhvbGRlciB7XFxyXFxuICBvcGFjaXR5OiAwLjE1O1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LnByb2plY3Qge1xcclxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxufVxcclxcblxcclxcbi5uZXcudG9kbyB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1wcm9qZWN0IHtcXHJcXG4gIGdyaWQtYXJlYTogYWN0aXZlO1xcclxcbiAgLS1zcGFjZXI6IDJyZW07XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcXHJcXG4gIHdpZHRoOiA2MHZ3O1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8taGVhZGVyIHtcXHJcXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlcik7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnkpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBib3JkZXItcmFkaXVzOiAxNnB4IDE2cHggMCAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC10aXRsZSB7XFxyXFxuICBtYXJnaW46IDAgMWVtIDAgMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tYm9keSB7XFxyXFxuICBwYWRkaW5nOiB2YXIoLS1zcGFjZXIpO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LXRvZG8tY3JlYXRvciAuY3JlYXRlIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8gbGFiZWwge1xcclxcbiAgZGlzcGxheTogZmxleC1pbmxpbmU7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kbyB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxLjI1ZW07XFxyXFxufVxcclxcblxcclxcbi50b2RvOjphZnRlciB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGJvdHRvbTogLTAuNWVtO1xcclxcbiAgaGVpZ2h0OiAxcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiBjdXJyZW50Q29sb3I7XFxyXFxuICBvcGFjaXR5OiAwLjE7XFxyXFxufVxcclxcblxcclxcbi5kZWxldGUtc3R1ZmYge1xcclxcbiAgZ3JpZC1hcmVhOiBkZWxldGU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQpICFpbXBvcnRhbnQ7XFxyXFxuXFxyXFxuICBjb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gb3Blbk1vZGFsKG1vZGFsVHlwZSkge1xyXG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtbW9kYWw9XCIke21vZGFsVHlwZX1cIl1gKTtcclxuICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbG9zZU1vZGFsKG1vZGFsVHlwZSkge1xyXG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtbW9kYWw9XCIke21vZGFsVHlwZX1cIl1gKTtcclxuICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXR1cE92ZXJsYXlMaXN0ZW5lcigpIHtcclxuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpO1xyXG4gIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGRvY3VtZW50XHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1vZGFsXCIpXHJcbiAgICAgIC5mb3JFYWNoKChtb2RhbCkgPT4gbW9kYWwuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKSk7XHJcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldHVwRXNjYXBlTGlzdGVuZXIoKSB7XHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcclxuICAgIGlmIChlLmtleSA9PT0gXCJFc2NhcGVcIikge1xyXG4gICAgICBkb2N1bWVudFxyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1vZGFsXCIpXHJcbiAgICAgICAgLmZvckVhY2goKG1vZGFsKSA9PiBtb2RhbC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpKTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gIGlmIChlLnRhcmdldC5tYXRjaGVzKFwiW2RhdGEtbW9kYWwtb3Blbl1cIikpIHtcclxuICAgIGNvbnN0IG1vZGFsVHlwZSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtbW9kYWwtb3BlblwiKTtcclxuICAgIG9wZW5Nb2RhbChtb2RhbFR5cGUpO1xyXG4gIH1cclxufSk7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICBpZiAoZS50YXJnZXQubWF0Y2hlcyhcIltkYXRhLW1vZGFsLWNsb3NlXVwiKSkge1xyXG4gICAgY29uc3QgbW9kYWxUeXBlID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1tb2RhbC1jbG9zZVwiKTtcclxuICAgIGNsb3NlTW9kYWwobW9kYWxUeXBlKTtcclxuICB9XHJcbiAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoXCIub3ZlcmxheVwiKSkge1xyXG4gICAgZG9jdW1lbnRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCIubW9kYWxcIilcclxuICAgICAgLmZvckVhY2goKG1vZGFsKSA9PiBtb2RhbC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpKTtcclxuICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG9wZW5Nb2RhbCxcclxuICBjbG9zZU1vZGFsLFxyXG4gIHNldHVwT3ZlcmxheUxpc3RlbmVyLFxyXG4gIHNldHVwRXNjYXBlTGlzdGVuZXIsXHJcbn07XHJcbiIsImltcG9ydCBzdGF0ZSBmcm9tIFwiLi9zdGF0ZVwiO1xyXG5pbXBvcnQgc3RvcmFnZSBmcm9tIFwiLi9zdG9yYWdlXCI7XHJcbmltcG9ydCB1aSBmcm9tIFwiLi91aVwiO1xyXG5cclxuY29uc3QgbmV3UHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbmV3LXByb2plY3QtZm9ybV1cIik7XHJcbmNvbnN0IG5ld1Byb2plY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1uZXctcHJvamVjdC1pbnB1dF1cIik7XHJcbmNvbnN0IGRlbGV0ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gIFwiW2RhdGEtZGVsZXRlLXByb2plY3QtYnV0dG9uXVwiXHJcbik7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHRpdGxlKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGlkOiBEYXRlLm5vdygpLnRvU3RyaW5nKCksXHJcbiAgICB0aXRsZTogdGl0bGUsXHJcbiAgICB0b2RvczogW10sXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlTmV3UHJvamVjdFN1Ym1pdChlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGxldCBwcm9qZWN0cyA9IHN0YXRlLmdldFByb2plY3RzKCk7XHJcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBuZXdQcm9qZWN0SW5wdXQudmFsdWU7XHJcbiAgaWYgKHByb2plY3ROYW1lID09IG51bGwgfHwgcHJvamVjdE5hbWUgPT09IFwiXCIpIHJldHVybjtcclxuICBjb25zdCBwcm9qZWN0ID0gY3JlYXRlUHJvamVjdChwcm9qZWN0TmFtZSk7XHJcbiAgbmV3UHJvamVjdElucHV0LnZhbHVlID0gbnVsbDtcclxuICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xyXG4gIHN0YXRlLnNldFByb2plY3RzKHByb2plY3RzKTtcclxuICBsZXQgc2VsZWN0ZWRQcm9qZWN0SWQgPSBzdGF0ZS5nZXRTZWxlY3RlZFByb2plY3RJZCgpO1xyXG4gIHNlbGVjdGVkUHJvamVjdElkID0gcHJvamVjdC5pZDtcclxuICBzdGF0ZS5zZXRTZWxlY3RlZFByb2plY3RJZChzZWxlY3RlZFByb2plY3RJZCk7XHJcbiAgc3RvcmFnZS5zYXZlKCk7XHJcbiAgdWkucmVuZGVyKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVByb2plY3RUaXRsZShwcm9qZWN0SWQsIG5ld1RpdGxlKSB7XHJcbiAgbGV0IHByb2plY3RzID0gc3RhdGUuZ2V0UHJvamVjdHMoKTtcclxuICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gcHJvamVjdElkKTtcclxuICBpZiAocHJvamVjdCkge1xyXG4gICAgcHJvamVjdC50aXRsZSA9IG5ld1RpdGxlO1xyXG4gICAgc3RhdGUuc2V0UHJvamVjdHMocHJvamVjdHMpO1xyXG4gICAgc3RvcmFnZS5zYXZlKCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVEZWxldGVQcm9qZWN0KCkge1xyXG4gIGxldCBwcm9qZWN0cyA9IHN0YXRlLmdldFByb2plY3RzKCk7XHJcbiAgbGV0IHNlbGVjdGVkUHJvamVjdElkID0gc3RhdGUuZ2V0U2VsZWN0ZWRQcm9qZWN0SWQoKTtcclxuICBjb25zdCBwcm9qZWN0SW5kZXggPSBwcm9qZWN0cy5maW5kSW5kZXgoXHJcbiAgICAocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gc2VsZWN0ZWRQcm9qZWN0SWRcclxuICApO1xyXG5cclxuICBwcm9qZWN0cyA9IHByb2plY3RzLmZpbHRlcigocHJvamVjdCkgPT4gcHJvamVjdC5pZCAhPT0gc2VsZWN0ZWRQcm9qZWN0SWQpO1xyXG5cclxuICBsZXQgbmV3U2VsZWN0ZWRQcm9qZWN0SWQgPSBudWxsO1xyXG4gIGlmIChwcm9qZWN0cy5sZW5ndGggPiAwKSB7XHJcbiAgICBpZiAocHJvamVjdEluZGV4ID4gMCkge1xyXG4gICAgICBuZXdTZWxlY3RlZFByb2plY3RJZCA9IHByb2plY3RzW3Byb2plY3RJbmRleCAtIDFdLmlkO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbmV3U2VsZWN0ZWRQcm9qZWN0SWQgPSBwcm9qZWN0c1swXS5pZDtcclxuICAgIH1cclxuICB9XHJcbiAgc2VsZWN0ZWRQcm9qZWN0SWQgPSBuZXdTZWxlY3RlZFByb2plY3RJZDtcclxuICBzdGF0ZS5zZXRQcm9qZWN0cyhwcm9qZWN0cyk7XHJcbiAgc3RhdGUuc2V0U2VsZWN0ZWRQcm9qZWN0SWQoc2VsZWN0ZWRQcm9qZWN0SWQpO1xyXG4gIHN0b3JhZ2Uuc2F2ZSgpO1xyXG4gIHVpLnJlbmRlcigpO1xyXG59XHJcblxyXG5uZXdQcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZU5ld1Byb2plY3RTdWJtaXQpO1xyXG5kZWxldGVQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVEZWxldGVQcm9qZWN0KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBoYW5kbGVOZXdQcm9qZWN0U3VibWl0LFxyXG4gIHVwZGF0ZVByb2plY3RUaXRsZSxcclxuICBoYW5kbGVEZWxldGVQcm9qZWN0LFxyXG59O1xyXG4iLCIvLyB0YXNrLiBpcyBhZGRlZCB0byBhdm9pZCBhbnkgY29sbGlzaW9ucy9jb25mbGljdHMgd2l0aCB0aGUgc3lzdGVtIGZpbGVzIGFuZCB3ZWJzaXRlc1xyXG5jb25zdCBMT0NBTF9TVE9SQUdFX1BST0pFQ1RTX0tFWSA9IFwidGFzay5wcm9qZWN0c1wiO1xyXG5jb25zdCBMT0NBTF9TVE9SQUdFX1NFTEVDVEVEX1BST0pFQ1RfSURfS0VZID0gXCJ0YXNrLnNlbGVjdGVkUHJvamVjdElkXCI7XHJcblxyXG5sZXQgcHJvamVjdHMgPVxyXG4gIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oTE9DQUxfU1RPUkFHRV9QUk9KRUNUU19LRVkpKSB8fCBbXTtcclxubGV0IHNlbGVjdGVkUHJvamVjdElkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXHJcbiAgTE9DQUxfU1RPUkFHRV9TRUxFQ1RFRF9QUk9KRUNUX0lEX0tFWVxyXG4pO1xyXG5cclxuZnVuY3Rpb24gZ2V0TG9jYWxTdG9yYWdlUHJvamVjdHNLZXkoKSB7XHJcbiAgcmV0dXJuIExPQ0FMX1NUT1JBR0VfUFJPSkVDVFNfS0VZO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRMb2NhbFN0b3JhZ2VTZWxlY3RlZFByb2plY3RJZEtleSgpIHtcclxuICByZXR1cm4gTE9DQUxfU1RPUkFHRV9TRUxFQ1RFRF9QUk9KRUNUX0lEX0tFWTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UHJvamVjdHMoKSB7XHJcbiAgcmV0dXJuIHByb2plY3RzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRQcm9qZWN0cyhuZXdQcm9qZWN0cykge1xyXG4gIHByb2plY3RzID0gbmV3UHJvamVjdHM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFNlbGVjdGVkUHJvamVjdElkKCkge1xyXG4gIHJldHVybiBzZWxlY3RlZFByb2plY3RJZDtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0U2VsZWN0ZWRQcm9qZWN0SWQobmV3U2VsZWN0ZWRQcm9qZWN0SWQpIHtcclxuICBzZWxlY3RlZFByb2plY3RJZCA9IG5ld1NlbGVjdGVkUHJvamVjdElkO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgZ2V0TG9jYWxTdG9yYWdlUHJvamVjdHNLZXksXHJcbiAgZ2V0TG9jYWxTdG9yYWdlU2VsZWN0ZWRQcm9qZWN0SWRLZXksXHJcbiAgZ2V0UHJvamVjdHMsXHJcbiAgc2V0UHJvamVjdHMsXHJcbiAgZ2V0U2VsZWN0ZWRQcm9qZWN0SWQsXHJcbiAgc2V0U2VsZWN0ZWRQcm9qZWN0SWQsXHJcbn07XHJcbiIsImltcG9ydCBzdGF0ZSBmcm9tIFwiLi9zdGF0ZVwiO1xyXG5mdW5jdGlvbiBzYXZlKCkge1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxyXG4gICAgc3RhdGUuZ2V0TG9jYWxTdG9yYWdlUHJvamVjdHNLZXkoKSxcclxuICAgIEpTT04uc3RyaW5naWZ5KHN0YXRlLmdldFByb2plY3RzKCkpXHJcbiAgKTtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcclxuICAgIHN0YXRlLmdldExvY2FsU3RvcmFnZVNlbGVjdGVkUHJvamVjdElkS2V5KCksXHJcbiAgICBzdGF0ZS5nZXRTZWxlY3RlZFByb2plY3RJZCgpXHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHNhdmUsXHJcbn07XHJcbiIsImltcG9ydCBzdG9yYWdlIGZyb20gXCIuL3N0b3JhZ2VcIjtcclxuaW1wb3J0IHVpIGZyb20gXCIuL3VpXCI7XHJcbmltcG9ydCBzdGF0ZSBmcm9tIFwiLi9zdGF0ZVwiO1xyXG5pbXBvcnQgbW9kYWwgZnJvbSBcIi4vbW9kYWxcIjtcclxuXHJcbmNvbnN0IHRvZG9zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXRvZG9zXVwiKTtcclxuY29uc3QgbmV3VG9kb0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbmV3LXRvZG8tZm9ybV1cIik7XHJcbmNvbnN0IG5ld1RvZG9UaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1uZXctdG9kby10aXRsZV1cIik7XHJcbmNvbnN0IG5ld1RvZG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgXCJbZGF0YS1uZXctdG9kby1kZXNjcmlwdGlvbl1cIlxyXG4pO1xyXG5jb25zdCBuZXdUb2RvRHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1uZXctdG9kby1kdWVdXCIpO1xyXG5jb25zdCBuZXdUb2RvUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbmV3LXRvZG8tcHJpb3JpdHldXCIpO1xyXG5jb25zdCBjbGVhckNvbXBsZXRlVG9kb3NCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gIFwiW2RhdGEtY2xlYXItY29tcGxldGUtdGFza3MtYnV0dG9uXVwiXHJcbik7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcclxuICByZXR1cm4ge1xyXG4gICAgaWQ6IERhdGUubm93KCkudG9TdHJpbmcoKSxcclxuICAgIHRpdGxlOiB0aXRsZSxcclxuICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcclxuICAgIGR1ZURhdGU6IGR1ZURhdGUsXHJcbiAgICBwcmlvcml0eTogcHJpb3JpdHksXHJcbiAgICBjb21wbGV0ZTogZmFsc2UsXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlTmV3VG9kb1N1Ym1pdChlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGNvbnN0IHRvZG9UaXRsZSA9IG5ld1RvZG9UaXRsZS52YWx1ZTtcclxuICBjb25zdCB0b2RvRGVzY3JpcHRpb24gPSBuZXdUb2RvRGVzY3JpcHRpb24udmFsdWU7XHJcbiAgY29uc3QgdG9kb0R1ZURhdGUgPSBuZXdUb2RvRHVlRGF0ZS52YWx1ZTtcclxuICBjb25zdCB0b2RvUHJpb3JpdHkgPSBuZXdUb2RvUHJpb3JpdHkudmFsdWU7XHJcblxyXG4gIGlmICh0b2RvVGl0bGUgPT0gbnVsbCB8fCB0b2RvVGl0bGUgPT09IFwiXCIpIHJldHVybjtcclxuXHJcbiAgY29uc3QgdG9kbyA9IGNyZWF0ZVRvZG8oXHJcbiAgICB0b2RvVGl0bGUsXHJcbiAgICB0b2RvRGVzY3JpcHRpb24sXHJcbiAgICB0b2RvRHVlRGF0ZSxcclxuICAgIHRvZG9Qcmlvcml0eVxyXG4gICk7XHJcbiAgbmV3VG9kb1RpdGxlLnZhbHVlID0gbnVsbDtcclxuICBuZXdUb2RvRGVzY3JpcHRpb24udmFsdWUgPSBudWxsO1xyXG4gIG5ld1RvZG9EdWVEYXRlLnZhbHVlID0gbnVsbDtcclxuICBuZXdUb2RvUHJpb3JpdHkudmFsdWUgPSBudWxsO1xyXG4gIGNvbnN0IHByb2plY3RzID0gc3RhdGUuZ2V0UHJvamVjdHMoKTtcclxuICBjb25zdCBzZWxlY3RlZFByb2plY3RJZCA9IHN0YXRlLmdldFNlbGVjdGVkUHJvamVjdElkKCk7XHJcbiAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0ID0gcHJvamVjdHMuZmluZChcclxuICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBzZWxlY3RlZFByb2plY3RJZFxyXG4gICk7XHJcbiAgc2VsZWN0ZWRQcm9qZWN0LnRvZG9zLnB1c2godG9kbyk7XHJcbiAgc3RvcmFnZS5zYXZlKCk7XHJcbiAgdWkucmVuZGVyKCk7XHJcbiAgbW9kYWwuY2xvc2VNb2RhbChcIm5ldy10b2RvXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVUb2RvSXRlbUNoZWNrKGUpIHtcclxuICBpZiAoXHJcbiAgICBlLnRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwiaW5wdXRcIiAmJlxyXG4gICAgZS50YXJnZXQudHlwZSA9PT0gXCJjaGVja2JveFwiXHJcbiAgKSB7XHJcbiAgICBjb25zdCBzZWxlY3RlZFByb2plY3RJZCA9IHN0YXRlLmdldFNlbGVjdGVkUHJvamVjdElkKCk7XHJcbiAgICBjb25zdCBwcm9qZWN0cyA9IHN0YXRlLmdldFByb2plY3RzKCk7XHJcbiAgICBjb25zdCBzZWxlY3RlZFByb2plY3QgPSBwcm9qZWN0cy5maW5kKFxyXG4gICAgICAocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gc2VsZWN0ZWRQcm9qZWN0SWRcclxuICAgICk7XHJcbiAgICBjb25zdCBzZWxlY3RlZFRhc2sgPSBzZWxlY3RlZFByb2plY3QudG9kb3MuZmluZChcclxuICAgICAgKHRhc2spID0+IHRhc2suaWQgPT09IGUudGFyZ2V0LmlkXHJcbiAgICApO1xyXG4gICAgc2VsZWN0ZWRUYXNrLmNvbXBsZXRlID0gZS50YXJnZXQuY2hlY2tlZDtcclxuICAgIHN0b3JhZ2Uuc2F2ZSgpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlVG9kb0VsZW1lbnQodG9kb0lkLCBrZXksIHZhbHVlKSB7XHJcbiAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0SWQgPSBzdGF0ZS5nZXRTZWxlY3RlZFByb2plY3RJZCgpO1xyXG4gIGNvbnN0IHByb2plY3RzID0gc3RhdGUuZ2V0UHJvamVjdHMoKTtcclxuICBjb25zdCBzZWxlY3RlZFByb2plY3QgPSBwcm9qZWN0cy5maW5kKFxyXG4gICAgKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IHNlbGVjdGVkUHJvamVjdElkXHJcbiAgKTtcclxuICBjb25zdCBzZWxlY3RlZFRvZG8gPSBzZWxlY3RlZFByb2plY3QudG9kb3MuZmluZCgodG9kbykgPT4gdG9kby5pZCA9PT0gdG9kb0lkKTtcclxuXHJcbiAgc2VsZWN0ZWRUb2RvW2tleV0gPSB2YWx1ZTtcclxuICBzdG9yYWdlLnNhdmUoKTtcclxuICB1aS5yZW5kZXIoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlQ2xlYXJDb21wbGV0ZVRvZG9zKCkge1xyXG4gIGNvbnN0IHByb2plY3RzID0gc3RhdGUuZ2V0UHJvamVjdHMoKTtcclxuICBjb25zdCBzZWxlY3RlZFByb2plY3RJZCA9IHN0YXRlLmdldFNlbGVjdGVkUHJvamVjdElkKCk7XHJcbiAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0ID0gcHJvamVjdHMuZmluZChcclxuICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBzZWxlY3RlZFByb2plY3RJZFxyXG4gICk7XHJcbiAgc2VsZWN0ZWRQcm9qZWN0LnRvZG9zID0gc2VsZWN0ZWRQcm9qZWN0LnRvZG9zLmZpbHRlcihcclxuICAgICh0YXNrKSA9PiAhdGFzay5jb21wbGV0ZVxyXG4gICk7XHJcbiAgc3RvcmFnZS5zYXZlKCk7XHJcbiAgdWkucmVuZGVyKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZURlbGV0ZVRvZG9JdGVtKHRvZG9JZCkge1xyXG4gIGNvbnN0IHNlbGVjdGVkUHJvamVjdElkID0gc3RhdGUuZ2V0U2VsZWN0ZWRQcm9qZWN0SWQoKTtcclxuICBsZXQgcHJvamVjdHMgPSBzdGF0ZS5nZXRQcm9qZWN0cygpO1xyXG4gIGNvbnN0IHNlbGVjdGVkUHJvamVjdCA9IHByb2plY3RzLmZpbmQoXHJcbiAgICAocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gc2VsZWN0ZWRQcm9qZWN0SWRcclxuICApO1xyXG5cclxuICBzZWxlY3RlZFByb2plY3QudG9kb3MgPSBzZWxlY3RlZFByb2plY3QudG9kb3MuZmlsdGVyKFxyXG4gICAgKHRvZG8pID0+IHRvZG8uaWQgIT09IHRvZG9JZFxyXG4gICk7XHJcbiAgc3RhdGUuc2V0UHJvamVjdHMocHJvamVjdHMpO1xyXG4gIHN0b3JhZ2Uuc2F2ZSgpO1xyXG4gIHVpLnJlbmRlcigpO1xyXG4gIG1vZGFsLmNsb3NlTW9kYWwoXCJ2aWV3LXRvZG9cIik7XHJcbn1cclxuXHJcbi8vIHRvZG9zQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVUb2RvSXRlbUNoZWNrKTtcclxuXHJcbm5ld1RvZG9Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlTmV3VG9kb1N1Ym1pdCk7XHJcbmNsZWFyQ29tcGxldGVUb2Rvc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQ2xlYXJDb21wbGV0ZVRvZG9zKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBoYW5kbGVOZXdUb2RvU3VibWl0LFxyXG4gIGhhbmRsZVRvZG9JdGVtQ2hlY2ssXHJcbiAgdXBkYXRlVG9kb0VsZW1lbnQsXHJcbiAgaGFuZGxlQ2xlYXJDb21wbGV0ZVRvZG9zLFxyXG4gIGhhbmRsZURlbGV0ZVRvZG9JdGVtLFxyXG59O1xyXG4iLCJpbXBvcnQgc3RhdGUgZnJvbSBcIi4vc3RhdGVcIjtcclxuaW1wb3J0IHN0b3JhZ2UgZnJvbSBcIi4vc3RvcmFnZVwiO1xyXG5pbXBvcnQgcHJvamVjdEZ1bmN0aW9ucyBmcm9tIFwiLi9wcm9qZWN0RnVuY3Rpb25zXCI7XHJcbmltcG9ydCB0b2RvRnVuY3Rpb25zIGZyb20gXCIuL3RvZG9GdW5jdGlvbnNcIjtcclxuaW1wb3J0IG1vZGFsIGZyb20gXCIuL21vZGFsXCI7XHJcblxyXG5jb25zdCBwcm9qZWN0c0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1wcm9qZWN0c11cIik7XHJcbmNvbnN0IHRvZG9zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXRvZG9zXVwiKTtcclxuY29uc3QgdG9kb1RlbXBsYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2RvLXRlbXBsYXRlXCIpO1xyXG5jb25zdCBwcm9qZWN0RGlzcGxheUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgXCJbZGF0YS1wcm9qZWN0LWRpc3BsYXktY29udGFpbmVyXVwiXHJcbik7XHJcbmNvbnN0IHByb2plY3RUaXRsZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtcHJvamVjdC10aXRsZV1cIik7XHJcbmNvbnN0IHByb2plY3RUaXRsZUVkaXRCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gIFwiW2RhdGEtcHJvamVjdC10aXRsZS1lZGl0LWJ0bl1cIlxyXG4pO1xyXG5cclxuY29uc3QgcHJpb3JpdHlNYXBwaW5nID0ge1xyXG4gIGdyZWVuOiBcIkxvd1wiLFxyXG4gIG9yYW5nZTogXCJNZWRpdW1cIixcclxuICByZWQ6IFwiSGlnaFwiLFxyXG59O1xyXG5cclxubGV0IGN1cnJlbnRUb2RvSWQgPSBudWxsO1xyXG5cclxuZnVuY3Rpb24gY2xlYXJFbGVtZW50KGVsZW1lbnQpIHtcclxuICB3aGlsZSAoZWxlbWVudC5maXJzdENoaWxkKSB7XHJcbiAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGVsZW1lbnQuZmlyc3RDaGlsZCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXJQcm9qZWN0cygpIHtcclxuICBjb25zdCBwcm9qZWN0cyA9IHN0YXRlLmdldFByb2plY3RzKCk7XHJcbiAgcHJvamVjdHMuZm9yRWFjaCgocHJvamVjdCkgPT4ge1xyXG4gICAgY29uc3QgcHJvamVjdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcbiAgICBwcm9qZWN0SXRlbS5kYXRhc2V0LnByb2plY3RJZCA9IHByb2plY3QuaWQ7XHJcbiAgICBwcm9qZWN0SXRlbS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1pdGVtXCIpO1xyXG4gICAgcHJvamVjdEl0ZW0uaW5uZXJUZXh0ID0gcHJvamVjdC50aXRsZTtcclxuICAgIHByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RJdGVtKTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyVG9kb3Moc2VsZWN0ZWRQcm9qZWN0KSB7XHJcbiAgc2VsZWN0ZWRQcm9qZWN0LnRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcclxuICAgIGNvbnN0IHRvZG9FbGVtZW50ID0gZG9jdW1lbnQuaW1wb3J0Tm9kZSh0b2RvVGVtcGxhdGUuY29udGVudCwgdHJ1ZSk7XHJcbiAgICBjb25zdCBjaGVja2JveCA9IHRvZG9FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10b2RvLWNoZWNrYm94XVwiKTtcclxuICAgIGNoZWNrYm94LmlkID0gdG9kby5pZDtcclxuICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0b2RvLmNvbXBsZXRlO1xyXG4gICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZG9GdW5jdGlvbnMuaGFuZGxlVG9kb0l0ZW1DaGVjayk7XHJcbiAgICBjb25zdCBsYWJlbCA9IHRvZG9FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10b2RvLWxhYmVsXVwiKTtcclxuICAgIGxhYmVsLmh0bWxGb3IgPSB0b2RvLmlkO1xyXG4gICAgbGFiZWwuYXBwZW5kKHRvZG8udGl0bGUpO1xyXG4gICAgbGFiZWwuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiBoYW5kbGVWaWV3VG9kb0RldGFpbHMoZSkpO1xyXG4gICAgY29uc3QgZHVlRGF0ZSA9IHRvZG9FbGVtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlXCIpO1xyXG4gICAgZHVlRGF0ZS5pbm5lclRleHQgPSBgRHVlIGRhdGU6ICR7dG9kby5kdWVEYXRlfWA7XHJcbiAgICBjb25zdCBwcmlvcml0eSA9IHRvZG9FbGVtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpb3JpdHlcIik7XHJcbiAgICBwcmlvcml0eS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSB0b2RvLnByaW9yaXR5O1xyXG5cclxuICAgIHRvZG9zQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9FbGVtZW50KTtcclxuICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyKCkge1xyXG4gIGNsZWFyRWxlbWVudChwcm9qZWN0c0NvbnRhaW5lcik7XHJcbiAgcmVuZGVyUHJvamVjdHMoKTtcclxuICBjb25zdCBwcm9qZWN0cyA9IHN0YXRlLmdldFByb2plY3RzKCk7XHJcbiAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0SWQgPSBzdGF0ZS5nZXRTZWxlY3RlZFByb2plY3RJZCgpO1xyXG5cclxuICBjb25zdCBzZWxlY3RlZFByb2plY3QgPSBwcm9qZWN0cy5maW5kKFxyXG4gICAgKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IHNlbGVjdGVkUHJvamVjdElkXHJcbiAgKTtcclxuICBpZiAoc2VsZWN0ZWRQcm9qZWN0SWQgPT0gbnVsbCB8fCBzZWxlY3RlZFByb2plY3QgPT0gbnVsbCkge1xyXG4gICAgcHJvamVjdERpc3BsYXlDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBwcm9qZWN0RGlzcGxheUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJcIjtcclxuICAgIHByb2plY3RUaXRsZUVsZW1lbnQuaW5uZXJUZXh0ID0gc2VsZWN0ZWRQcm9qZWN0LnRpdGxlO1xyXG4gICAgY2xlYXJFbGVtZW50KHRvZG9zQ29udGFpbmVyKTtcclxuICAgIHJlbmRlclRvZG9zKHNlbGVjdGVkUHJvamVjdCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVFZGl0UHJvamVjdFRpdGxlKCkge1xyXG4gIGNvbnN0IGlzRWRpdGluZyA9IHByb2plY3RUaXRsZUVkaXRCdG4uaW5uZXJUZXh0ID09PSBcIlNhdmVcIjtcclxuICBpZiAoaXNFZGl0aW5nKSB7XHJcbiAgICBjb25zdCBwcm9qZWN0VGl0bGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC10aXRsZS1pbnB1dFwiKTtcclxuICAgIGNvbnN0IG5ld1RpdGxlID0gcHJvamVjdFRpdGxlSW5wdXQudmFsdWUudHJpbSgpO1xyXG4gICAgaWYgKG5ld1RpdGxlICYmIG5ld1RpdGxlICE9PSBwcm9qZWN0VGl0bGVFbGVtZW50LmlubmVyVGV4dCkge1xyXG4gICAgICBwcm9qZWN0RnVuY3Rpb25zLnVwZGF0ZVByb2plY3RUaXRsZShcclxuICAgICAgICBzdGF0ZS5nZXRTZWxlY3RlZFByb2plY3RJZCgpLFxyXG4gICAgICAgIG5ld1RpdGxlXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgICBwcm9qZWN0VGl0bGVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICBwcm9qZWN0VGl0bGVFZGl0QnRuLmlubmVyVGV4dCA9IFwiRWRpdFwiO1xyXG4gICAgcHJvamVjdFRpdGxlSW5wdXQucmVtb3ZlKCk7XHJcbiAgICByZW5kZXIoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gcHJvamVjdFRpdGxlRWxlbWVudC5pbm5lclRleHQ7XHJcbiAgICBwcm9qZWN0VGl0bGVFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuXHJcbiAgICBjb25zdCBwcm9qZWN0VGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIHByb2plY3RUaXRsZUlucHV0LnR5cGUgPSBcInRleHRcIjtcclxuICAgIHByb2plY3RUaXRsZUlucHV0LnZhbHVlID0gcHJvamVjdFRpdGxlO1xyXG4gICAgcHJvamVjdFRpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZChcInByb2plY3QtdGl0bGUtaW5wdXRcIik7XHJcblxyXG4gICAgcHJvamVjdFRpdGxlRWxlbWVudC5wYXJlbnRFbGVtZW50Lmluc2VydEJlZm9yZShcclxuICAgICAgcHJvamVjdFRpdGxlSW5wdXQsXHJcbiAgICAgIHByb2plY3RUaXRsZUVkaXRCdG5cclxuICAgICk7XHJcbiAgICBwcm9qZWN0VGl0bGVJbnB1dC5mb2N1cygpO1xyXG4gICAgcHJvamVjdFRpdGxlRWRpdEJ0bi5pbm5lclRleHQgPSBcIlNhdmVcIjtcclxuICAgIHByb2plY3RUaXRsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCAoZSkgPT4ge1xyXG4gICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xyXG4gICAgICAgIHByb2plY3RUaXRsZUVkaXRCdG4uY2xpY2soKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVWaWV3VG9kb0RldGFpbHMoZSkge1xyXG4gIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0SWQgPSBzdGF0ZS5nZXRTZWxlY3RlZFByb2plY3RJZCgpO1xyXG4gIGNvbnN0IHByb2plY3RzID0gc3RhdGUuZ2V0UHJvamVjdHMoKTtcclxuICBjb25zdCBzZWxlY3RlZFByb2plY3QgPSBwcm9qZWN0cy5maW5kKFxyXG4gICAgKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IHNlbGVjdGVkUHJvamVjdElkXHJcbiAgKTtcclxuICBjb25zdCB0b2RvSWQgPSBlLmN1cnJlbnRUYXJnZXQuZ2V0QXR0cmlidXRlKFwiZm9yXCIpO1xyXG4gIGN1cnJlbnRUb2RvSWQgPSB0b2RvSWQ7XHJcbiAgY29uc3Qgc2VsZWN0ZWRUb2RvID0gc2VsZWN0ZWRQcm9qZWN0LnRvZG9zLmZpbmQoKHRvZG8pID0+IHRvZG8uaWQgPT09IHRvZG9JZCk7XHJcblxyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10b2RvLXRpdGxlXVwiKS5pbm5lclRleHQgPSBzZWxlY3RlZFRvZG8udGl0bGU7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXRvZG8tdGl0bGUtaW5wdXRdXCIpLnZhbHVlID0gc2VsZWN0ZWRUb2RvLnRpdGxlO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10b2RvLWRlc2NyaXB0aW9uXVwiKS5pbm5lclRleHQgPVxyXG4gICAgc2VsZWN0ZWRUb2RvLmRlc2NyaXB0aW9uO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10b2RvLWRlc2NyaXB0aW9uLWlucHV0XVwiKS52YWx1ZSA9XHJcbiAgICBzZWxlY3RlZFRvZG8uZGVzY3JpcHRpb247XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICAgIFwiW2RhdGEtdG9kby1kdWUtZGF0ZV1cIlxyXG4gICkuaW5uZXJUZXh0ID0gYER1ZSBkYXRlOiAke3NlbGVjdGVkVG9kby5kdWVEYXRlfWA7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXRvZG8tZHVlLWRhdGUtaW5wdXRdXCIpLnZhbHVlID1cclxuICAgIHNlbGVjdGVkVG9kby5kdWVEYXRlO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10b2RvLXByaW9yaXR5XVwiKS5pbm5lclRleHQgPSBgUHJpb3JpdHk6ICR7XHJcbiAgICBwcmlvcml0eU1hcHBpbmdbc2VsZWN0ZWRUb2RvLnByaW9yaXR5XVxyXG4gIH1gO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10b2RvLXByaW9yaXR5LWlucHV0XVwiKS52YWx1ZSA9XHJcbiAgICBzZWxlY3RlZFRvZG8ucHJpb3JpdHk7XHJcblxyXG4gIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1kZWxldGUtdG9kby1idXR0b25dXCIpO1xyXG4gIGRlbGV0ZUJ1dHRvbi5vbmNsaWNrID0gKCkgPT4gdG9kb0Z1bmN0aW9ucy5oYW5kbGVEZWxldGVUb2RvSXRlbSh0b2RvSWQpO1xyXG5cclxuICBtb2RhbC5vcGVuTW9kYWwoXCJ2aWV3LXRvZG9cIik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUVkaXRUb2RvRWxlbWVudChcclxuICBlZGl0QnRuLFxyXG4gIGRpc3BsYXlFbGVtZW50LFxyXG4gIGlucHV0RWxlbWVudCxcclxuICBzYXZlQ2FsbGJhY2tcclxuKSB7XHJcbiAgY29uc3QgaXNFZGl0aW5nID0gZWRpdEJ0bi5pbm5lclRleHQgPT09IFwiU2F2ZVwiO1xyXG4gIGlmIChpc0VkaXRpbmcpIHtcclxuICAgIGNvbnN0IG5ld1ZhbHVlID0gaW5wdXRFbGVtZW50LnZhbHVlLnRyaW0oKTtcclxuICAgIHNhdmVDYWxsYmFjayhuZXdWYWx1ZSk7XHJcbiAgICBkaXNwbGF5RWxlbWVudC5pbm5lclRleHQgPSBuZXdWYWx1ZTtcclxuICAgIGRpc3BsYXlFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICAgIGVkaXRCdG4uaW5uZXJUZXh0ID0gXCJFZGl0XCI7XHJcbiAgICBzdG9yYWdlLnNhdmUoKTtcclxuICAgIHJlbmRlcigpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBpbnB1dEVsZW1lbnQudmFsdWUgPSBkaXNwbGF5RWxlbWVudC5pbm5lclRleHQ7XHJcbiAgICBkaXNwbGF5RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICAgIGlucHV0RWxlbWVudC5mb2N1cygpO1xyXG4gICAgZWRpdEJ0bi5pbm5lclRleHQgPSBcIlNhdmVcIjtcclxuICB9XHJcbn1cclxuXHJcbmRvY3VtZW50XHJcbiAgLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1lZGl0LXRvZG8tdGl0bGVdXCIpXHJcbiAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgaGFuZGxlRWRpdFRvZG9FbGVtZW50KFxyXG4gICAgICBlLnRhcmdldCxcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXRvZG8tdGl0bGVdXCIpLFxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdG9kby10aXRsZS1pbnB1dF1cIiksXHJcbiAgICAgIChuZXdWYWx1ZSkgPT5cclxuICAgICAgICB0b2RvRnVuY3Rpb25zLnVwZGF0ZVRvZG9FbGVtZW50KGN1cnJlbnRUb2RvSWQsIFwidGl0bGVcIiwgbmV3VmFsdWUpXHJcbiAgICApO1xyXG4gIH0pO1xyXG5cclxuZG9jdW1lbnRcclxuICAucXVlcnlTZWxlY3RvcihcIltkYXRhLWVkaXQtdG9kby1kZXNjcmlwdGlvbl1cIilcclxuICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBoYW5kbGVFZGl0VG9kb0VsZW1lbnQoXHJcbiAgICAgIGUudGFyZ2V0LFxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdG9kby1kZXNjcmlwdGlvbl1cIiksXHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10b2RvLWRlc2NyaXB0aW9uLWlucHV0XVwiKSxcclxuICAgICAgKG5ld1ZhbHVlKSA9PlxyXG4gICAgICAgIHRvZG9GdW5jdGlvbnMudXBkYXRlVG9kb0VsZW1lbnQoY3VycmVudFRvZG9JZCwgXCJkZXNjcmlwdGlvblwiLCBuZXdWYWx1ZSlcclxuICAgICk7XHJcbiAgfSk7XHJcblxyXG5kb2N1bWVudFxyXG4gIC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtZWRpdC10b2RvLWR1ZS1kYXRlXVwiKVxyXG4gIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIGhhbmRsZUVkaXRUb2RvRWxlbWVudChcclxuICAgICAgZS50YXJnZXQsXHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10b2RvLWR1ZS1kYXRlXVwiKSxcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXRvZG8tZHVlLWRhdGUtaW5wdXRdXCIpLFxyXG4gICAgICAobmV3VmFsdWUpID0+XHJcbiAgICAgICAgdG9kb0Z1bmN0aW9ucy51cGRhdGVUb2RvRWxlbWVudChjdXJyZW50VG9kb0lkLCBcImR1ZURhdGVcIiwgbmV3VmFsdWUpXHJcbiAgICApO1xyXG4gIH0pO1xyXG5cclxuZG9jdW1lbnRcclxuICAucXVlcnlTZWxlY3RvcihcIltkYXRhLWVkaXQtdG9kby1wcmlvcml0eV1cIilcclxuICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBoYW5kbGVFZGl0VG9kb0VsZW1lbnQoXHJcbiAgICAgIGUudGFyZ2V0LFxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdG9kby1wcmlvcml0eV1cIiksXHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10b2RvLXByaW9yaXR5LWlucHV0XVwiKSxcclxuICAgICAgKG5ld1ZhbHVlKSA9PlxyXG4gICAgICAgIHRvZG9GdW5jdGlvbnMudXBkYXRlVG9kb0VsZW1lbnQoY3VycmVudFRvZG9JZCwgXCJwcmlvcml0eVwiLCBuZXdWYWx1ZSlcclxuICAgICk7XHJcbiAgfSk7XHJcblxyXG5wcm9qZWN0VGl0bGVFZGl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVFZGl0UHJvamVjdFRpdGxlKTtcclxuXHJcbmRvY3VtZW50XHJcbiAgLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10b2RvLXRpdGxlLWlucHV0XVwiKVxyXG4gIC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xyXG4gICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWVkaXQtdG9kby10aXRsZV1cIikuY2xpY2soKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbmRvY3VtZW50XHJcbiAgLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10b2RvLWRlc2NyaXB0aW9uLWlucHV0XVwiKVxyXG4gIC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xyXG4gICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWVkaXQtdG9kby1kZXNjcmlwdGlvbl1cIikuY2xpY2soKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbmRvY3VtZW50XHJcbiAgLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10b2RvLWR1ZS1kYXRlLWlucHV0XVwiKVxyXG4gIC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xyXG4gICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWVkaXQtdG9kby1kdWUtZGF0ZV1cIikuY2xpY2soKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbmRvY3VtZW50XHJcbiAgLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10b2RvLXByaW9yaXR5LWlucHV0XVwiKVxyXG4gIC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCAoZSkgPT4ge1xyXG4gICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWVkaXQtdG9kby1wcmlvcml0eV1cIikuY2xpY2soKTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbnByb2plY3RzQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gIGxldCBzZWxlY3RlZFByb2plY3RJZCA9IHN0YXRlLmdldFNlbGVjdGVkUHJvamVjdElkKCk7XHJcbiAgaWYgKGUudGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJsaVwiKSB7XHJcbiAgICBzZWxlY3RlZFByb2plY3RJZCA9IGUudGFyZ2V0LmRhdGFzZXQucHJvamVjdElkO1xyXG4gICAgc3RhdGUuc2V0U2VsZWN0ZWRQcm9qZWN0SWQoc2VsZWN0ZWRQcm9qZWN0SWQpO1xyXG4gICAgc3RvcmFnZS5zYXZlKCk7XHJcbiAgICByZW5kZXIoKTtcclxuICB9XHJcbn0pO1xyXG5cclxuLy8gdG9kb3NDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbi8vICAgaWYgKGUudGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJsYWJlbFwiKSB7XHJcbi8vICAgICBoYW5kbGVWaWV3VG9kb0RldGFpbHMoZSk7XHJcbi8vICAgfVxyXG4vLyB9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICB0b2Rvc0NvbnRhaW5lcixcclxuICBjbGVhckVsZW1lbnQsXHJcbiAgcmVuZGVyUHJvamVjdHMsXHJcbiAgcmVuZGVyVG9kb3MsXHJcbiAgcmVuZGVyLFxyXG59O1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xyXG5pbXBvcnQgbW9kYWwgZnJvbSBcIi4vbW9kdWxlcy9tb2RhbFwiO1xyXG5pbXBvcnQgc3RhdGUgZnJvbSBcIi4vbW9kdWxlcy9zdGF0ZVwiO1xyXG5pbXBvcnQgc3RvcmFnZSBmcm9tIFwiLi9tb2R1bGVzL3N0b3JhZ2VcIjtcclxuaW1wb3J0IHVpIGZyb20gXCIuL21vZHVsZXMvdWlcIjtcclxuaW1wb3J0IHByb2plY3RGdW5jdGlvbnMgZnJvbSBcIi4vbW9kdWxlcy9wcm9qZWN0RnVuY3Rpb25zXCI7XHJcbmltcG9ydCB0b2RvRnVuY3Rpb25zIGZyb20gXCIuL21vZHVsZXMvdG9kb0Z1bmN0aW9uc1wiO1xyXG5cclxubW9kYWwuc2V0dXBPdmVybGF5TGlzdGVuZXIoKTtcclxubW9kYWwuc2V0dXBFc2NhcGVMaXN0ZW5lcigpO1xyXG5cclxudWkucmVuZGVyKCk7XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==