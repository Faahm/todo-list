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

/* [type="checkbox"] {
  opacity: 0;
  position: absolute;
} */

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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n  --primary: #7047d1;\r\n  --background: #f7f5fd;\r\n  --text: #06030b;\r\n  --secondary: #e28ca3;\r\n  --accent: #d87164;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  font-family: inherit;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 64px;\r\n  font-family: \"Work Sans\", sans-serif;\r\n  font-weight: 300;\r\n  font-size: 1.5rem;\r\n  background-color: var(--primary);\r\n  color: var(--background);\r\n  display: grid;\r\n  grid-template-areas:\r\n    \"header header header header\"\r\n    \"lists . active . \"\r\n    \"lists . delete .\";\r\n  grid-template-rows: auto 1fr;\r\n  grid-template-columns: minmax(100px, 300px) minmax(250px, 500px) 1fr 1fr;\r\n}\r\n\r\n.btn.delete {\r\n  margin-top: 8px;\r\n  color: var(--background);\r\n  background-color: red;\r\n  padding: 8px;\r\n  border-radius: 8px;\r\n}\r\n\r\n.todo-header .project-title {\r\n  flex-grow: 1;\r\n}\r\n\r\n.todo-header .project-title-input {\r\n  width: 100%;\r\n  font-size: inherit;\r\n  border: none;\r\n  border-bottom: 2px solid transparent;\r\n  outline: none;\r\n  transition: border-bottom-color 0.3s;\r\n}\r\n\r\n.todo-header .project-title-input:focus {\r\n  border-bottom-color: var(--primary);\r\n}\r\n\r\n.todo-item {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.todo-item p,\r\n.todo-item h2,\r\n.todo-item input,\r\n.todo-item textarea,\r\n.todo-item select {\r\n  flex-grow: 1;\r\n  margin: 0;\r\n}\r\n\r\n.todo-item .btn.edit {\r\n  margin-left: 1rem;\r\n}\r\n\r\n.todos {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 8px;\r\n}\r\n\r\n.todo {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.task-header {\r\n  display: flex;\r\n  gap: 4px;\r\n}\r\n\r\n.task-priority {\r\n  width: 16px;\r\n  height: auto;\r\n  border-radius: 16px;\r\n}\r\n\r\n.todo-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 16px;\r\n}\r\n\r\n.modal {\r\n  color: var(--text);\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  gap: 0.4rem;\r\n  width: 450px;\r\n  padding: 1.3rem;\r\n  min-height: 250px;\r\n  position: fixed;\r\n  z-index: 2;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  background-color: white;\r\n  border: 1px solid #ddd;\r\n  border-radius: 15px;\r\n}\r\n\r\n.modal input {\r\n  padding: 0.7rem 1rem;\r\n  border: 1px solid #ddd;\r\n  border-radius: 5px;\r\n  font-size: 0.9em;\r\n}\r\n\r\n.btn-open {\r\n  font-size: 1rem;\r\n}\r\n\r\n.btn-close {\r\n  font-size: 1.5rem;\r\n  font-weight: 600;\r\n  color: red !important;\r\n}\r\n\r\n.overlay {\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: rgba(0, 0, 0, 0.5);\r\n  backdrop-filter: blur(3px);\r\n  z-index: 1;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n.title {\r\n  grid-area: header;\r\n  text-align: center;\r\n  font-size: calc(7vw + 2rem);\r\n  font-weight: 900;\r\n  color: var(--secondary);\r\n  letter-spacing: 2px;\r\n  margin: -0.3em 0 0.5em;\r\n}\r\n\r\n.all-projects {\r\n  grid-area: lists;\r\n}\r\n\r\n.task-project {\r\n  font-size: 1.2rem;\r\n  line-height: 1.7;\r\n  list-style: circle;\r\n  padding-left: 1.1em;\r\n}\r\n\r\n.project-name,\r\n.project-item {\r\n  cursor: pointer;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n}\r\n\r\n.btn {\r\n  cursor: pointer;\r\n  background: 0;\r\n  border: 0;\r\n  padding: 0;\r\n  color: inherit;\r\n}\r\n\r\n.btn.create {\r\n  font-size: 1.5rem;\r\n  font-weight: 900;\r\n  transition: opacity 250ms ease-in;\r\n}\r\n\r\n.btn.create:hover {\r\n  opacity: 0.7;\r\n}\r\n\r\n.btn.delete {\r\n  opacity: 0.7;\r\n  font-size: 1rem;\r\n  transition: color 200ms;\r\n}\r\n\r\n.btn.delete:hover {\r\n  color: var(--accent);\r\n}\r\n\r\n.new {\r\n  width: 90%;\r\n  background: transparent;\r\n  border: 0;\r\n  color: inherit;\r\n  border-bottom: 1px solid currentColor;\r\n  font-size: inherit;\r\n  outline: none;\r\n  padding: 0.25em;\r\n  transition: border-bottom 150ms ease-in;\r\n}\r\n\r\n.new::placeholder {\r\n  opacity: 0.4;\r\n}\r\n\r\n.new:focus {\r\n  border-bottom-width: 3px;\r\n}\r\n\r\n.new:focus::placeholder {\r\n  opacity: 0.15;\r\n}\r\n\r\n.new.project {\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.new.todo {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.todo-project {\r\n  grid-area: active;\r\n  --spacer: 2rem;\r\n  background: var(--background);\r\n  color: var(--text);\r\n  width: 60vw;\r\n  height: auto;\r\n  border-radius: 16px;\r\n}\r\n\r\n.todo-header {\r\n  padding: var(--spacer);\r\n  background: var(--secondary);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  border-radius: 16px 16px 0 0;\r\n}\r\n\r\n.project-title {\r\n  margin: 0 1em 0 0;\r\n}\r\n\r\n.todo-body {\r\n  padding: var(--spacer);\r\n  position: relative;\r\n}\r\n\r\n.new-todo-creator .create {\r\n  color: var(--primary);\r\n}\r\n\r\n/* [type=\"checkbox\"] {\r\n  opacity: 0;\r\n  position: absolute;\r\n} */\r\n\r\n.todo label {\r\n  display: flex-inline;\r\n  align-items: center;\r\n  position: relative;\r\n}\r\n\r\n.todo {\r\n  position: relative;\r\n  margin-bottom: 1.25em;\r\n}\r\n\r\n.todo::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  right: 0;\r\n  left: 0;\r\n  bottom: -0.5em;\r\n  height: 1px;\r\n  background: currentColor;\r\n  opacity: 0.1;\r\n}\r\n\r\n.delete-stuff {\r\n  grid-area: delete;\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  width: 100%;\r\n  color: var(--accent) !important;\r\n\r\n  color: var(--background);\r\n}\r\n"],"sourceRoot":""}]);
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
  if (
    e.target.tagName.toLowerCase() === "input" &&
    e.target.type === "checkbox"
  ) {
    console.log(e.target.tagName.toLowerCase());
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
  if (e.target.tagName.toLowerCase() === "label") {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sT0FBTyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLE9BQU8sYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sU0FBUyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZ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QTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsMEJBQTBCLDhDQUFLO0FBQy9CO0FBQ0E7QUFDQSxJQUFJLDhDQUFLO0FBQ1QsSUFBSSxnREFBTztBQUNYO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLGlFQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsRUFBQzs7Ozs7OztVQ3hSRjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ2U7QUFDQTtBQUNJO0FBQ1Y7QUFDNEI7QUFDTjtBQUNwRDtBQUNBLHNEQUFLO0FBQ0wsc0RBQUs7QUFDTDtBQUNBLG1EQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL21vZGFsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Byb2plY3RGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvc3RhdGUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy90b2RvRnVuY3Rpb25zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3VpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xyXG4gIC0tcHJpbWFyeTogIzcwNDdkMTtcclxuICAtLWJhY2tncm91bmQ6ICNmN2Y1ZmQ7XHJcbiAgLS10ZXh0OiAjMDYwMzBiO1xyXG4gIC0tc2Vjb25kYXJ5OiAjZTI4Y2EzO1xyXG4gIC0tYWNjZW50OiAjZDg3MTY0O1xyXG59XHJcblxyXG4qLFxyXG4qOjpiZWZvcmUsXHJcbio6OmFmdGVyIHtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogNjRweDtcclxuICBmb250LWZhbWlseTogXCJXb3JrIFNhbnNcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogMzAwO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG4gIGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICBcImhlYWRlciBoZWFkZXIgaGVhZGVyIGhlYWRlclwiXHJcbiAgICBcImxpc3RzIC4gYWN0aXZlIC4gXCJcclxuICAgIFwibGlzdHMgLiBkZWxldGUgLlwiO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogYXV0byAxZnI7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMTAwcHgsIDMwMHB4KSBtaW5tYXgoMjUwcHgsIDUwMHB4KSAxZnIgMWZyO1xyXG59XHJcblxyXG4uYnRuLmRlbGV0ZSB7XHJcbiAgbWFyZ2luLXRvcDogOHB4O1xyXG4gIGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuLnRvZG8taGVhZGVyIC5wcm9qZWN0LXRpdGxlIHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuXHJcbi50b2RvLWhlYWRlciAucHJvamVjdC10aXRsZS1pbnB1dCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tLWNvbG9yIDAuM3M7XHJcbn1cclxuXHJcbi50b2RvLWhlYWRlciAucHJvamVjdC10aXRsZS1pbnB1dDpmb2N1cyB7XHJcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbn1cclxuXHJcbi50b2RvLWl0ZW0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLnRvZG8taXRlbSBwLFxyXG4udG9kby1pdGVtIGgyLFxyXG4udG9kby1pdGVtIGlucHV0LFxyXG4udG9kby1pdGVtIHRleHRhcmVhLFxyXG4udG9kby1pdGVtIHNlbGVjdCB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnRvZG8taXRlbSAuYnRuLmVkaXQge1xyXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG59XHJcblxyXG4udG9kb3Mge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDhweDtcclxufVxyXG5cclxuLnRvZG8ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4udGFzay1oZWFkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiA0cHg7XHJcbn1cclxuXHJcbi50YXNrLXByaW9yaXR5IHtcclxuICB3aWR0aDogMTZweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxufVxyXG5cclxuLnRvZG8tZm9ybSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMTZweDtcclxufVxyXG5cclxuLm1vZGFsIHtcclxuICBjb2xvcjogdmFyKC0tdGV4dCk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGdhcDogMC40cmVtO1xyXG4gIHdpZHRoOiA0NTBweDtcclxuICBwYWRkaW5nOiAxLjNyZW07XHJcbiAgbWluLWhlaWdodDogMjUwcHg7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG5cclxuLm1vZGFsIGlucHV0IHtcclxuICBwYWRkaW5nOiAwLjdyZW0gMXJlbTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBmb250LXNpemU6IDAuOWVtO1xyXG59XHJcblxyXG4uYnRuLW9wZW4ge1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxuLmJ0bi1jbG9zZSB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5vdmVybGF5IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLmhpZGRlbiB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBncmlkLWFyZWE6IGhlYWRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiBjYWxjKDd2dyArIDJyZW0pO1xyXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuICBtYXJnaW46IC0wLjNlbSAwIDAuNWVtO1xyXG59XHJcblxyXG4uYWxsLXByb2plY3RzIHtcclxuICBncmlkLWFyZWE6IGxpc3RzO1xyXG59XHJcblxyXG4udGFzay1wcm9qZWN0IHtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBsaW5lLWhlaWdodDogMS43O1xyXG4gIGxpc3Qtc3R5bGU6IGNpcmNsZTtcclxuICBwYWRkaW5nLWxlZnQ6IDEuMWVtO1xyXG59XHJcblxyXG4ucHJvamVjdC1uYW1lLFxyXG4ucHJvamVjdC1pdGVtIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kOiAwO1xyXG4gIGJvcmRlcjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG59XHJcblxyXG4uYnRuLmNyZWF0ZSB7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDI1MG1zIGVhc2UtaW47XHJcbn1cclxuXHJcbi5idG4uY3JlYXRlOmhvdmVyIHtcclxuICBvcGFjaXR5OiAwLjc7XHJcbn1cclxuXHJcbi5idG4uZGVsZXRlIHtcclxuICBvcGFjaXR5OiAwLjc7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIHRyYW5zaXRpb246IGNvbG9yIDIwMG1zO1xyXG59XHJcblxyXG4uYnRuLmRlbGV0ZTpob3ZlciB7XHJcbiAgY29sb3I6IHZhcigtLWFjY2VudCk7XHJcbn1cclxuXHJcbi5uZXcge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBjdXJyZW50Q29sb3I7XHJcbiAgZm9udC1zaXplOiBpbmhlcml0O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgcGFkZGluZzogMC4yNWVtO1xyXG4gIHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20gMTUwbXMgZWFzZS1pbjtcclxufVxyXG5cclxuLm5ldzo6cGxhY2Vob2xkZXIge1xyXG4gIG9wYWNpdHk6IDAuNDtcclxufVxyXG5cclxuLm5ldzpmb2N1cyB7XHJcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogM3B4O1xyXG59XHJcblxyXG4ubmV3OmZvY3VzOjpwbGFjZWhvbGRlciB7XHJcbiAgb3BhY2l0eTogMC4xNTtcclxufVxyXG5cclxuLm5ldy5wcm9qZWN0IHtcclxuICBmb250LXNpemU6IDEuMXJlbTtcclxufVxyXG5cclxuLm5ldy50b2RvIHtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4udG9kby1wcm9qZWN0IHtcclxuICBncmlkLWFyZWE6IGFjdGl2ZTtcclxuICAtLXNwYWNlcjogMnJlbTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTtcclxuICBjb2xvcjogdmFyKC0tdGV4dCk7XHJcbiAgd2lkdGg6IDYwdnc7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbn1cclxuXHJcbi50b2RvLWhlYWRlciB7XHJcbiAgcGFkZGluZzogdmFyKC0tc3BhY2VyKTtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnkpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweCAxNnB4IDAgMDtcclxufVxyXG5cclxuLnByb2plY3QtdGl0bGUge1xyXG4gIG1hcmdpbjogMCAxZW0gMCAwO1xyXG59XHJcblxyXG4udG9kby1ib2R5IHtcclxuICBwYWRkaW5nOiB2YXIoLS1zcGFjZXIpO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLm5ldy10b2RvLWNyZWF0b3IgLmNyZWF0ZSB7XHJcbiAgY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG59XHJcblxyXG4vKiBbdHlwZT1cImNoZWNrYm94XCJdIHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufSAqL1xyXG5cclxuLnRvZG8gbGFiZWwge1xyXG4gIGRpc3BsYXk6IGZsZXgtaW5saW5lO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4udG9kbyB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbi1ib3R0b206IDEuMjVlbTtcclxufVxyXG5cclxuLnRvZG86OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogLTAuNWVtO1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIGJhY2tncm91bmQ6IGN1cnJlbnRDb2xvcjtcclxuICBvcGFjaXR5OiAwLjE7XHJcbn1cclxuXHJcbi5kZWxldGUtc3R1ZmYge1xyXG4gIGdyaWQtYXJlYTogZGVsZXRlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgY29sb3I6IHZhcigtLWFjY2VudCkgIWltcG9ydGFudDtcclxuXHJcbiAgY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xyXG59XHJcbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixpQkFBaUI7QUFDbkI7O0FBRUE7OztFQUdFLG9CQUFvQjtFQUNwQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsYUFBYTtFQUNiLG9DQUFvQztFQUNwQyxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdDQUFnQztFQUNoQyx3QkFBd0I7RUFDeEIsYUFBYTtFQUNiOzs7c0JBR29CO0VBQ3BCLDRCQUE0QjtFQUM1Qix3RUFBd0U7QUFDMUU7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osb0NBQW9DO0VBQ3BDLGFBQWE7RUFDYixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNuQixtQkFBbUI7QUFDckI7O0FBRUE7Ozs7O0VBS0UsWUFBWTtFQUNaLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsVUFBVTtFQUNWLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLHVCQUF1QjtFQUN2QixzQkFBc0I7RUFDdEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLE1BQU07RUFDTixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7RUFDUixXQUFXO0VBQ1gsWUFBWTtFQUNaLDhCQUE4QjtFQUM5QiwwQkFBMEI7RUFDMUIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQiwyQkFBMkI7RUFDM0IsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLFNBQVM7RUFDVCxVQUFVO0VBQ1YsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLFNBQVM7RUFDVCxjQUFjO0VBQ2QscUNBQXFDO0VBQ3JDLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsZUFBZTtFQUNmLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHdCQUF3QjtBQUMxQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsNkJBQTZCO0VBQzdCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsNEJBQTRCO0FBQzlCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTs7O0dBR0c7O0FBRUg7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixPQUFPO0VBQ1AsY0FBYztFQUNkLFdBQVc7RUFDWCx3QkFBd0I7RUFDeEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsV0FBVztFQUNYLCtCQUErQjs7RUFFL0Isd0JBQXdCO0FBQzFCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjpyb290IHtcXHJcXG4gIC0tcHJpbWFyeTogIzcwNDdkMTtcXHJcXG4gIC0tYmFja2dyb3VuZDogI2Y3ZjVmZDtcXHJcXG4gIC0tdGV4dDogIzA2MDMwYjtcXHJcXG4gIC0tc2Vjb25kYXJ5OiAjZTI4Y2EzO1xcclxcbiAgLS1hY2NlbnQ6ICNkODcxNjQ7XFxyXFxufVxcclxcblxcclxcbiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiA2NHB4O1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJXb3JrIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxyXFxuICBjb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXHJcXG4gICAgXFxcImhlYWRlciBoZWFkZXIgaGVhZGVyIGhlYWRlclxcXCJcXHJcXG4gICAgXFxcImxpc3RzIC4gYWN0aXZlIC4gXFxcIlxcclxcbiAgICBcXFwibGlzdHMgLiBkZWxldGUgLlxcXCI7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMTAwcHgsIDMwMHB4KSBtaW5tYXgoMjUwcHgsIDUwMHB4KSAxZnIgMWZyO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLmRlbGV0ZSB7XFxyXFxuICBtYXJnaW4tdG9wOiA4cHg7XFxyXFxuICBjb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICBwYWRkaW5nOiA4cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWhlYWRlciAucHJvamVjdC10aXRsZSB7XFxyXFxuICBmbGV4LWdyb3c6IDE7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWhlYWRlciAucHJvamVjdC10aXRsZS1pbnB1dCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICB0cmFuc2l0aW9uOiBib3JkZXItYm90dG9tLWNvbG9yIDAuM3M7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWhlYWRlciAucHJvamVjdC10aXRsZS1pbnB1dDpmb2N1cyB7XFxyXFxuICBib3JkZXItYm90dG9tLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8taXRlbSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XFxyXFxufVxcclxcblxcclxcbi50b2RvLWl0ZW0gcCxcXHJcXG4udG9kby1pdGVtIGgyLFxcclxcbi50b2RvLWl0ZW0gaW5wdXQsXFxyXFxuLnRvZG8taXRlbSB0ZXh0YXJlYSxcXHJcXG4udG9kby1pdGVtIHNlbGVjdCB7XFxyXFxuICBmbGV4LWdyb3c6IDE7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWl0ZW0gLmJ0bi5lZGl0IHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kb3Mge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBnYXA6IDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2staGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBnYXA6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stcHJpb3JpdHkge1xcclxcbiAgd2lkdGg6IDE2cHg7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwge1xcclxcbiAgY29sb3I6IHZhcigtLXRleHQpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGdhcDogMC40cmVtO1xcclxcbiAgd2lkdGg6IDQ1MHB4O1xcclxcbiAgcGFkZGluZzogMS4zcmVtO1xcclxcbiAgbWluLWhlaWdodDogMjUwcHg7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbCBpbnB1dCB7XFxyXFxuICBwYWRkaW5nOiAwLjdyZW0gMXJlbTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICBmb250LXNpemU6IDAuOWVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLW9wZW4ge1xcclxcbiAgZm9udC1zaXplOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLWNsb3NlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGNvbG9yOiByZWQgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLm92ZXJsYXkge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgYm90dG9tOiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcXHJcXG4gIHotaW5kZXg6IDE7XFxyXFxufVxcclxcblxcclxcbi5oaWRkZW4ge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRpdGxlIHtcXHJcXG4gIGdyaWQtYXJlYTogaGVhZGVyO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiBjYWxjKDd2dyArIDJyZW0pO1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcXHJcXG4gIG1hcmdpbjogLTAuM2VtIDAgMC41ZW07XFxyXFxufVxcclxcblxcclxcbi5hbGwtcHJvamVjdHMge1xcclxcbiAgZ3JpZC1hcmVhOiBsaXN0cztcXHJcXG59XFxyXFxuXFxyXFxuLnRhc2stcHJvamVjdCB7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjc7XFxyXFxuICBsaXN0LXN0eWxlOiBjaXJjbGU7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDEuMWVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1uYW1lLFxcclxcbi5wcm9qZWN0LWl0ZW0ge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxufVxcclxcblxcclxcbi5idG4ge1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYmFja2dyb3VuZDogMDtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBjb2xvcjogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi5jcmVhdGUge1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBmb250LXdlaWdodDogOTAwO1xcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAyNTBtcyBlYXNlLWluO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLmNyZWF0ZTpob3ZlciB7XFxyXFxuICBvcGFjaXR5OiAwLjc7XFxyXFxufVxcclxcblxcclxcbi5idG4uZGVsZXRlIHtcXHJcXG4gIG9wYWNpdHk6IDAuNztcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIHRyYW5zaXRpb246IGNvbG9yIDIwMG1zO1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLmRlbGV0ZTpob3ZlciB7XFxyXFxuICBjb2xvcjogdmFyKC0tYWNjZW50KTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldyB7XFxyXFxuICB3aWR0aDogOTAlO1xcclxcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxuICBjb2xvcjogaW5oZXJpdDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBjdXJyZW50Q29sb3I7XFxyXFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgcGFkZGluZzogMC4yNWVtO1xcclxcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbSAxNTBtcyBlYXNlLWluO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3OjpwbGFjZWhvbGRlciB7XFxyXFxuICBvcGFjaXR5OiAwLjQ7XFxyXFxufVxcclxcblxcclxcbi5uZXc6Zm9jdXMge1xcclxcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3OmZvY3VzOjpwbGFjZWhvbGRlciB7XFxyXFxuICBvcGFjaXR5OiAwLjE1O1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LnByb2plY3Qge1xcclxcbiAgZm9udC1zaXplOiAxLjFyZW07XFxyXFxufVxcclxcblxcclxcbi5uZXcudG9kbyB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1wcm9qZWN0IHtcXHJcXG4gIGdyaWQtYXJlYTogYWN0aXZlO1xcclxcbiAgLS1zcGFjZXI6IDJyZW07XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcXHJcXG4gIHdpZHRoOiA2MHZ3O1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8taGVhZGVyIHtcXHJcXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlcik7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnkpO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBib3JkZXItcmFkaXVzOiAxNnB4IDE2cHggMCAwO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC10aXRsZSB7XFxyXFxuICBtYXJnaW46IDAgMWVtIDAgMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tYm9keSB7XFxyXFxuICBwYWRkaW5nOiB2YXIoLS1zcGFjZXIpO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LXRvZG8tY3JlYXRvciAuY3JlYXRlIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXHJcXG59XFxyXFxuXFxyXFxuLyogW3R5cGU9XFxcImNoZWNrYm94XFxcIl0ge1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG59ICovXFxyXFxuXFxyXFxuLnRvZG8gbGFiZWwge1xcclxcbiAgZGlzcGxheTogZmxleC1pbmxpbmU7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kbyB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxLjI1ZW07XFxyXFxufVxcclxcblxcclxcbi50b2RvOjphZnRlciB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcIjtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHJpZ2h0OiAwO1xcclxcbiAgbGVmdDogMDtcXHJcXG4gIGJvdHRvbTogLTAuNWVtO1xcclxcbiAgaGVpZ2h0OiAxcHg7XFxyXFxuICBiYWNrZ3JvdW5kOiBjdXJyZW50Q29sb3I7XFxyXFxuICBvcGFjaXR5OiAwLjE7XFxyXFxufVxcclxcblxcclxcbi5kZWxldGUtc3R1ZmYge1xcclxcbiAgZ3JpZC1hcmVhOiBkZWxldGU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQpICFpbXBvcnRhbnQ7XFxyXFxuXFxyXFxuICBjb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZnVuY3Rpb24gb3Blbk1vZGFsKG1vZGFsVHlwZSkge1xyXG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtbW9kYWw9XCIke21vZGFsVHlwZX1cIl1gKTtcclxuICBtb2RhbC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKS5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjbG9zZU1vZGFsKG1vZGFsVHlwZSkge1xyXG4gIGNvbnN0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtbW9kYWw9XCIke21vZGFsVHlwZX1cIl1gKTtcclxuICBtb2RhbC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXR1cE92ZXJsYXlMaXN0ZW5lcigpIHtcclxuICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpO1xyXG4gIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcclxuICAgIGRvY3VtZW50XHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1vZGFsXCIpXHJcbiAgICAgIC5mb3JFYWNoKChtb2RhbCkgPT4gbW9kYWwuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKSk7XHJcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldHVwRXNjYXBlTGlzdGVuZXIoKSB7XHJcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcclxuICAgIGlmIChlLmtleSA9PT0gXCJFc2NhcGVcIikge1xyXG4gICAgICBkb2N1bWVudFxyXG4gICAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1vZGFsXCIpXHJcbiAgICAgICAgLmZvckVhY2goKG1vZGFsKSA9PiBtb2RhbC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpKTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5vdmVybGF5XCIpLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gIGlmIChlLnRhcmdldC5tYXRjaGVzKFwiW2RhdGEtbW9kYWwtb3Blbl1cIikpIHtcclxuICAgIGNvbnN0IG1vZGFsVHlwZSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtbW9kYWwtb3BlblwiKTtcclxuICAgIG9wZW5Nb2RhbChtb2RhbFR5cGUpO1xyXG4gIH1cclxufSk7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICBpZiAoZS50YXJnZXQubWF0Y2hlcyhcIltkYXRhLW1vZGFsLWNsb3NlXVwiKSkge1xyXG4gICAgY29uc3QgbW9kYWxUeXBlID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKFwiZGF0YS1tb2RhbC1jbG9zZVwiKTtcclxuICAgIGNsb3NlTW9kYWwobW9kYWxUeXBlKTtcclxuICB9XHJcbiAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoXCIub3ZlcmxheVwiKSkge1xyXG4gICAgZG9jdW1lbnRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3JBbGwoXCIubW9kYWxcIilcclxuICAgICAgLmZvckVhY2goKG1vZGFsKSA9PiBtb2RhbC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpKTtcclxuICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG9wZW5Nb2RhbCxcclxuICBjbG9zZU1vZGFsLFxyXG4gIHNldHVwT3ZlcmxheUxpc3RlbmVyLFxyXG4gIHNldHVwRXNjYXBlTGlzdGVuZXIsXHJcbn07XHJcbiIsImltcG9ydCBzdGF0ZSBmcm9tIFwiLi9zdGF0ZVwiO1xyXG5pbXBvcnQgc3RvcmFnZSBmcm9tIFwiLi9zdG9yYWdlXCI7XHJcbmltcG9ydCB1aSBmcm9tIFwiLi91aVwiO1xyXG5cclxuY29uc3QgbmV3UHJvamVjdEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbmV3LXByb2plY3QtZm9ybV1cIik7XHJcbmNvbnN0IG5ld1Byb2plY3RJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1uZXctcHJvamVjdC1pbnB1dF1cIik7XHJcbmNvbnN0IGRlbGV0ZVByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gIFwiW2RhdGEtZGVsZXRlLXByb2plY3QtYnV0dG9uXVwiXHJcbik7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHRpdGxlKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGlkOiBEYXRlLm5vdygpLnRvU3RyaW5nKCksXHJcbiAgICB0aXRsZTogdGl0bGUsXHJcbiAgICB0b2RvczogW10sXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlTmV3UHJvamVjdFN1Ym1pdChlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGxldCBwcm9qZWN0cyA9IHN0YXRlLmdldFByb2plY3RzKCk7XHJcbiAgY29uc3QgcHJvamVjdE5hbWUgPSBuZXdQcm9qZWN0SW5wdXQudmFsdWU7XHJcbiAgaWYgKHByb2plY3ROYW1lID09IG51bGwgfHwgcHJvamVjdE5hbWUgPT09IFwiXCIpIHJldHVybjtcclxuICBjb25zdCBwcm9qZWN0ID0gY3JlYXRlUHJvamVjdChwcm9qZWN0TmFtZSk7XHJcbiAgbmV3UHJvamVjdElucHV0LnZhbHVlID0gbnVsbDtcclxuICBwcm9qZWN0cy5wdXNoKHByb2plY3QpO1xyXG4gIHN0YXRlLnNldFByb2plY3RzKHByb2plY3RzKTtcclxuICBsZXQgc2VsZWN0ZWRQcm9qZWN0SWQgPSBzdGF0ZS5nZXRTZWxlY3RlZFByb2plY3RJZCgpO1xyXG4gIHNlbGVjdGVkUHJvamVjdElkID0gcHJvamVjdC5pZDtcclxuICBzdGF0ZS5zZXRTZWxlY3RlZFByb2plY3RJZChzZWxlY3RlZFByb2plY3RJZCk7XHJcbiAgc3RvcmFnZS5zYXZlKCk7XHJcbiAgdWkucmVuZGVyKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVByb2plY3RUaXRsZShwcm9qZWN0SWQsIG5ld1RpdGxlKSB7XHJcbiAgbGV0IHByb2plY3RzID0gc3RhdGUuZ2V0UHJvamVjdHMoKTtcclxuICBjb25zdCBwcm9qZWN0ID0gcHJvamVjdHMuZmluZCgocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gcHJvamVjdElkKTtcclxuICBpZiAocHJvamVjdCkge1xyXG4gICAgcHJvamVjdC50aXRsZSA9IG5ld1RpdGxlO1xyXG4gICAgc3RhdGUuc2V0UHJvamVjdHMocHJvamVjdHMpO1xyXG4gICAgc3RvcmFnZS5zYXZlKCk7XHJcbiAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVEZWxldGVQcm9qZWN0KCkge1xyXG4gIGxldCBwcm9qZWN0cyA9IHN0YXRlLmdldFByb2plY3RzKCk7XHJcbiAgbGV0IHNlbGVjdGVkUHJvamVjdElkID0gc3RhdGUuZ2V0U2VsZWN0ZWRQcm9qZWN0SWQoKTtcclxuICBjb25zdCBwcm9qZWN0SW5kZXggPSBwcm9qZWN0cy5maW5kSW5kZXgoXHJcbiAgICAocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gc2VsZWN0ZWRQcm9qZWN0SWRcclxuICApO1xyXG5cclxuICBwcm9qZWN0cyA9IHByb2plY3RzLmZpbHRlcigocHJvamVjdCkgPT4gcHJvamVjdC5pZCAhPT0gc2VsZWN0ZWRQcm9qZWN0SWQpO1xyXG5cclxuICBsZXQgbmV3U2VsZWN0ZWRQcm9qZWN0SWQgPSBudWxsO1xyXG4gIGlmIChwcm9qZWN0cy5sZW5ndGggPiAwKSB7XHJcbiAgICBpZiAocHJvamVjdEluZGV4ID4gMCkge1xyXG4gICAgICBuZXdTZWxlY3RlZFByb2plY3RJZCA9IHByb2plY3RzW3Byb2plY3RJbmRleCAtIDFdLmlkO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbmV3U2VsZWN0ZWRQcm9qZWN0SWQgPSBwcm9qZWN0c1swXS5pZDtcclxuICAgIH1cclxuICB9XHJcbiAgc2VsZWN0ZWRQcm9qZWN0SWQgPSBuZXdTZWxlY3RlZFByb2plY3RJZDtcclxuICBzdGF0ZS5zZXRQcm9qZWN0cyhwcm9qZWN0cyk7XHJcbiAgc3RhdGUuc2V0U2VsZWN0ZWRQcm9qZWN0SWQoc2VsZWN0ZWRQcm9qZWN0SWQpO1xyXG4gIHN0b3JhZ2Uuc2F2ZSgpO1xyXG4gIHVpLnJlbmRlcigpO1xyXG59XHJcblxyXG5uZXdQcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZU5ld1Byb2plY3RTdWJtaXQpO1xyXG5kZWxldGVQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVEZWxldGVQcm9qZWN0KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBoYW5kbGVOZXdQcm9qZWN0U3VibWl0LFxyXG4gIHVwZGF0ZVByb2plY3RUaXRsZSxcclxuICBoYW5kbGVEZWxldGVQcm9qZWN0LFxyXG59O1xyXG4iLCIvLyB0YXNrLiBpcyBhZGRlZCB0byBhdm9pZCBhbnkgY29sbGlzaW9ucy9jb25mbGljdHMgd2l0aCB0aGUgc3lzdGVtIGZpbGVzIGFuZCB3ZWJzaXRlc1xyXG5jb25zdCBMT0NBTF9TVE9SQUdFX1BST0pFQ1RTX0tFWSA9IFwidGFzay5wcm9qZWN0c1wiO1xyXG5jb25zdCBMT0NBTF9TVE9SQUdFX1NFTEVDVEVEX1BST0pFQ1RfSURfS0VZID0gXCJ0YXNrLnNlbGVjdGVkUHJvamVjdElkXCI7XHJcblxyXG5sZXQgcHJvamVjdHMgPVxyXG4gIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oTE9DQUxfU1RPUkFHRV9QUk9KRUNUU19LRVkpKSB8fCBbXTtcclxubGV0IHNlbGVjdGVkUHJvamVjdElkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXHJcbiAgTE9DQUxfU1RPUkFHRV9TRUxFQ1RFRF9QUk9KRUNUX0lEX0tFWVxyXG4pO1xyXG5cclxuZnVuY3Rpb24gZ2V0TG9jYWxTdG9yYWdlUHJvamVjdHNLZXkoKSB7XHJcbiAgcmV0dXJuIExPQ0FMX1NUT1JBR0VfUFJPSkVDVFNfS0VZO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRMb2NhbFN0b3JhZ2VTZWxlY3RlZFByb2plY3RJZEtleSgpIHtcclxuICByZXR1cm4gTE9DQUxfU1RPUkFHRV9TRUxFQ1RFRF9QUk9KRUNUX0lEX0tFWTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UHJvamVjdHMoKSB7XHJcbiAgcmV0dXJuIHByb2plY3RzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXRQcm9qZWN0cyhuZXdQcm9qZWN0cykge1xyXG4gIHByb2plY3RzID0gbmV3UHJvamVjdHM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFNlbGVjdGVkUHJvamVjdElkKCkge1xyXG4gIHJldHVybiBzZWxlY3RlZFByb2plY3RJZDtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0U2VsZWN0ZWRQcm9qZWN0SWQobmV3U2VsZWN0ZWRQcm9qZWN0SWQpIHtcclxuICBzZWxlY3RlZFByb2plY3RJZCA9IG5ld1NlbGVjdGVkUHJvamVjdElkO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgZ2V0TG9jYWxTdG9yYWdlUHJvamVjdHNLZXksXHJcbiAgZ2V0TG9jYWxTdG9yYWdlU2VsZWN0ZWRQcm9qZWN0SWRLZXksXHJcbiAgZ2V0UHJvamVjdHMsXHJcbiAgc2V0UHJvamVjdHMsXHJcbiAgZ2V0U2VsZWN0ZWRQcm9qZWN0SWQsXHJcbiAgc2V0U2VsZWN0ZWRQcm9qZWN0SWQsXHJcbn07XHJcbiIsImltcG9ydCBzdGF0ZSBmcm9tIFwiLi9zdGF0ZVwiO1xyXG5mdW5jdGlvbiBzYXZlKCkge1xyXG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxyXG4gICAgc3RhdGUuZ2V0TG9jYWxTdG9yYWdlUHJvamVjdHNLZXkoKSxcclxuICAgIEpTT04uc3RyaW5naWZ5KHN0YXRlLmdldFByb2plY3RzKCkpXHJcbiAgKTtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcclxuICAgIHN0YXRlLmdldExvY2FsU3RvcmFnZVNlbGVjdGVkUHJvamVjdElkS2V5KCksXHJcbiAgICBzdGF0ZS5nZXRTZWxlY3RlZFByb2plY3RJZCgpXHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHNhdmUsXHJcbn07XHJcbiIsImltcG9ydCBzdG9yYWdlIGZyb20gXCIuL3N0b3JhZ2VcIjtcclxuaW1wb3J0IHVpIGZyb20gXCIuL3VpXCI7XHJcbmltcG9ydCBzdGF0ZSBmcm9tIFwiLi9zdGF0ZVwiO1xyXG5pbXBvcnQgbW9kYWwgZnJvbSBcIi4vbW9kYWxcIjtcclxuXHJcbmNvbnN0IHRvZG9zQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXRhc2tzXVwiKTtcclxuY29uc3QgbmV3VG9kb0Zvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbmV3LXRvZG8tZm9ybV1cIik7XHJcbmNvbnN0IG5ld1RvZG9UaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1uZXctdG9kby10aXRsZV1cIik7XHJcbmNvbnN0IG5ld1RvZG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgXCJbZGF0YS1uZXctdG9kby1kZXNjcmlwdGlvbl1cIlxyXG4pO1xyXG5jb25zdCBuZXdUb2RvRHVlRGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1uZXctdG9kby1kdWVdXCIpO1xyXG5jb25zdCBuZXdUb2RvUHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbmV3LXRvZG8tcHJpb3JpdHldXCIpO1xyXG5jb25zdCBjbGVhckNvbXBsZXRlVG9kb3NCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gIFwiW2RhdGEtY2xlYXItY29tcGxldGUtdGFza3MtYnV0dG9uXVwiXHJcbik7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUb2RvKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHkpIHtcclxuICByZXR1cm4ge1xyXG4gICAgaWQ6IERhdGUubm93KCkudG9TdHJpbmcoKSxcclxuICAgIHRpdGxlOiB0aXRsZSxcclxuICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcclxuICAgIGR1ZURhdGU6IGR1ZURhdGUsXHJcbiAgICBwcmlvcml0eTogcHJpb3JpdHksXHJcbiAgICBjb21wbGV0ZTogZmFsc2UsXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlTmV3VG9kb1N1Ym1pdChlKSB7XHJcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIGNvbnN0IHRvZG9UaXRsZSA9IG5ld1RvZG9UaXRsZS52YWx1ZTtcclxuICBjb25zdCB0b2RvRGVzY3JpcHRpb24gPSBuZXdUb2RvRGVzY3JpcHRpb24udmFsdWU7XHJcbiAgY29uc3QgdG9kb0R1ZURhdGUgPSBuZXdUb2RvRHVlRGF0ZS52YWx1ZTtcclxuICBjb25zdCB0b2RvUHJpb3JpdHkgPSBuZXdUb2RvUHJpb3JpdHkudmFsdWU7XHJcblxyXG4gIGlmICh0b2RvVGl0bGUgPT0gbnVsbCB8fCB0b2RvVGl0bGUgPT09IFwiXCIpIHJldHVybjtcclxuXHJcbiAgY29uc3QgdG9kbyA9IGNyZWF0ZVRvZG8oXHJcbiAgICB0b2RvVGl0bGUsXHJcbiAgICB0b2RvRGVzY3JpcHRpb24sXHJcbiAgICB0b2RvRHVlRGF0ZSxcclxuICAgIHRvZG9Qcmlvcml0eVxyXG4gICk7XHJcbiAgbmV3VG9kb1RpdGxlLnZhbHVlID0gbnVsbDtcclxuICBuZXdUb2RvRGVzY3JpcHRpb24udmFsdWUgPSBudWxsO1xyXG4gIG5ld1RvZG9EdWVEYXRlLnZhbHVlID0gbnVsbDtcclxuICBuZXdUb2RvUHJpb3JpdHkudmFsdWUgPSBudWxsO1xyXG4gIGNvbnN0IHByb2plY3RzID0gc3RhdGUuZ2V0UHJvamVjdHMoKTtcclxuICBjb25zdCBzZWxlY3RlZFByb2plY3RJZCA9IHN0YXRlLmdldFNlbGVjdGVkUHJvamVjdElkKCk7XHJcbiAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0ID0gcHJvamVjdHMuZmluZChcclxuICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBzZWxlY3RlZFByb2plY3RJZFxyXG4gICk7XHJcbiAgc2VsZWN0ZWRQcm9qZWN0LnRvZG9zLnB1c2godG9kbyk7XHJcbiAgc3RvcmFnZS5zYXZlKCk7XHJcbiAgdWkucmVuZGVyKCk7XHJcbiAgbW9kYWwuY2xvc2VNb2RhbChcIm5ldy10b2RvXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVUb2RvSXRlbUNoZWNrKGUpIHtcclxuICBpZiAoXHJcbiAgICBlLnRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwiaW5wdXRcIiAmJlxyXG4gICAgZS50YXJnZXQudHlwZSA9PT0gXCJjaGVja2JveFwiXHJcbiAgKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCkpO1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0SWQgPSBzdGF0ZS5nZXRTZWxlY3RlZFByb2plY3RJZCgpO1xyXG4gICAgY29uc3QgcHJvamVjdHMgPSBzdGF0ZS5nZXRQcm9qZWN0cygpO1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0ID0gcHJvamVjdHMuZmluZChcclxuICAgICAgKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IHNlbGVjdGVkUHJvamVjdElkXHJcbiAgICApO1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRUYXNrID0gc2VsZWN0ZWRQcm9qZWN0LnRvZG9zLmZpbmQoXHJcbiAgICAgICh0YXNrKSA9PiB0YXNrLmlkID09PSBlLnRhcmdldC5pZFxyXG4gICAgKTtcclxuICAgIHNlbGVjdGVkVGFzay5jb21wbGV0ZSA9IGUudGFyZ2V0LmNoZWNrZWQ7XHJcbiAgICBzdG9yYWdlLnNhdmUoKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVRvZG9FbGVtZW50KHRvZG9JZCwga2V5LCB2YWx1ZSkge1xyXG4gIGNvbnN0IHNlbGVjdGVkUHJvamVjdElkID0gc3RhdGUuZ2V0U2VsZWN0ZWRQcm9qZWN0SWQoKTtcclxuICBjb25zdCBwcm9qZWN0cyA9IHN0YXRlLmdldFByb2plY3RzKCk7XHJcbiAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0ID0gcHJvamVjdHMuZmluZChcclxuICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBzZWxlY3RlZFByb2plY3RJZFxyXG4gICk7XHJcbiAgY29uc3Qgc2VsZWN0ZWRUb2RvID0gc2VsZWN0ZWRQcm9qZWN0LnRvZG9zLmZpbmQoKHRvZG8pID0+IHRvZG8uaWQgPT09IHRvZG9JZCk7XHJcblxyXG4gIHNlbGVjdGVkVG9kb1trZXldID0gdmFsdWU7XHJcbiAgc3RvcmFnZS5zYXZlKCk7XHJcbiAgdWkucmVuZGVyKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUNsZWFyQ29tcGxldGVUb2RvcygpIHtcclxuICBjb25zdCBwcm9qZWN0cyA9IHN0YXRlLmdldFByb2plY3RzKCk7XHJcbiAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0SWQgPSBzdGF0ZS5nZXRTZWxlY3RlZFByb2plY3RJZCgpO1xyXG4gIGNvbnN0IHNlbGVjdGVkUHJvamVjdCA9IHByb2plY3RzLmZpbmQoXHJcbiAgICAocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gc2VsZWN0ZWRQcm9qZWN0SWRcclxuICApO1xyXG4gIHNlbGVjdGVkUHJvamVjdC50b2RvcyA9IHNlbGVjdGVkUHJvamVjdC50b2Rvcy5maWx0ZXIoXHJcbiAgICAodGFzaykgPT4gIXRhc2suY29tcGxldGVcclxuICApO1xyXG4gIHN0b3JhZ2Uuc2F2ZSgpO1xyXG4gIHVpLnJlbmRlcigpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVEZWxldGVUb2RvSXRlbSh0b2RvSWQpIHtcclxuICBjb25zdCBzZWxlY3RlZFByb2plY3RJZCA9IHN0YXRlLmdldFNlbGVjdGVkUHJvamVjdElkKCk7XHJcbiAgbGV0IHByb2plY3RzID0gc3RhdGUuZ2V0UHJvamVjdHMoKTtcclxuICBjb25zdCBzZWxlY3RlZFByb2plY3QgPSBwcm9qZWN0cy5maW5kKFxyXG4gICAgKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IHNlbGVjdGVkUHJvamVjdElkXHJcbiAgKTtcclxuXHJcbiAgc2VsZWN0ZWRQcm9qZWN0LnRvZG9zID0gc2VsZWN0ZWRQcm9qZWN0LnRvZG9zLmZpbHRlcihcclxuICAgICh0b2RvKSA9PiB0b2RvLmlkICE9PSB0b2RvSWRcclxuICApO1xyXG4gIHN0YXRlLnNldFByb2plY3RzKHByb2plY3RzKTtcclxuICBzdG9yYWdlLnNhdmUoKTtcclxuICB1aS5yZW5kZXIoKTtcclxuICBtb2RhbC5jbG9zZU1vZGFsKFwidmlldy10b2RvXCIpO1xyXG59XHJcblxyXG50b2Rvc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlVG9kb0l0ZW1DaGVjayk7XHJcblxyXG5uZXdUb2RvRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZU5ld1RvZG9TdWJtaXQpO1xyXG5jbGVhckNvbXBsZXRlVG9kb3NCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUNsZWFyQ29tcGxldGVUb2Rvcyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgaGFuZGxlTmV3VG9kb1N1Ym1pdCxcclxuICBoYW5kbGVUb2RvSXRlbUNoZWNrLFxyXG4gIHVwZGF0ZVRvZG9FbGVtZW50LFxyXG4gIGhhbmRsZUNsZWFyQ29tcGxldGVUb2RvcyxcclxuICBoYW5kbGVEZWxldGVUb2RvSXRlbSxcclxufTtcclxuIiwiaW1wb3J0IHN0YXRlIGZyb20gXCIuL3N0YXRlXCI7XHJcbmltcG9ydCBzdG9yYWdlIGZyb20gXCIuL3N0b3JhZ2VcIjtcclxuaW1wb3J0IHByb2plY3RGdW5jdGlvbnMgZnJvbSBcIi4vcHJvamVjdEZ1bmN0aW9uc1wiO1xyXG5pbXBvcnQgdG9kb0Z1bmN0aW9ucyBmcm9tIFwiLi90b2RvRnVuY3Rpb25zXCI7XHJcbmltcG9ydCBtb2RhbCBmcm9tIFwiLi9tb2RhbFwiO1xyXG5cclxuY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtcHJvamVjdHNdXCIpO1xyXG5jb25zdCB0b2Rvc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10YXNrc11cIik7XHJcbmNvbnN0IHRvZG9UZW1wbGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby10ZW1wbGF0ZVwiKTtcclxuY29uc3QgcHJvamVjdERpc3BsYXlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gIFwiW2RhdGEtcHJvamVjdC1kaXNwbGF5LWNvbnRhaW5lcl1cIlxyXG4pO1xyXG5jb25zdCBwcm9qZWN0VGl0bGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXByb2plY3QtdGl0bGVdXCIpO1xyXG5jb25zdCBwcm9qZWN0VGl0bGVFZGl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICBcIltkYXRhLXByb2plY3QtdGl0bGUtZWRpdC1idG5dXCJcclxuKTtcclxuXHJcbmNvbnN0IHByaW9yaXR5TWFwcGluZyA9IHtcclxuICBncmVlbjogXCJMb3dcIixcclxuICBvcmFuZ2U6IFwiTWVkaXVtXCIsXHJcbiAgcmVkOiBcIkhpZ2hcIixcclxufTtcclxuXHJcbmxldCBjdXJyZW50VG9kb0lkID0gbnVsbDtcclxuXHJcbmZ1bmN0aW9uIGNsZWFyRWxlbWVudChlbGVtZW50KSB7XHJcbiAgd2hpbGUgKGVsZW1lbnQuZmlyc3RDaGlsZCkge1xyXG4gICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50LmZpcnN0Q2hpbGQpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdHMoKSB7XHJcbiAgY29uc3QgcHJvamVjdHMgPSBzdGF0ZS5nZXRQcm9qZWN0cygpO1xyXG4gIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgIGNvbnN0IHByb2plY3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgcHJvamVjdEl0ZW0uZGF0YXNldC5wcm9qZWN0SWQgPSBwcm9qZWN0LmlkO1xyXG4gICAgcHJvamVjdEl0ZW0uY2xhc3NMaXN0LmFkZChcInByb2plY3QtaXRlbVwiKTtcclxuICAgIHByb2plY3RJdGVtLmlubmVyVGV4dCA9IHByb2plY3QudGl0bGU7XHJcbiAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0SXRlbSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlclRvZG9zKHNlbGVjdGVkUHJvamVjdCkge1xyXG4gIHNlbGVjdGVkUHJvamVjdC50b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XHJcbiAgICBjb25zdCB0b2RvRWxlbWVudCA9IGRvY3VtZW50LmltcG9ydE5vZGUodG9kb1RlbXBsYXRlLmNvbnRlbnQsIHRydWUpO1xyXG4gICAgY29uc3QgY2hlY2tib3ggPSB0b2RvRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIik7XHJcbiAgICBjaGVja2JveC5pZCA9IHRvZG8uaWQ7XHJcbiAgICBjaGVja2JveC5jaGVja2VkID0gdG9kby5jb21wbGV0ZTtcclxuICAgIGNvbnN0IGxhYmVsID0gdG9kb0VsZW1lbnQucXVlcnlTZWxlY3RvcihcImxhYmVsXCIpO1xyXG4gICAgbGFiZWwuaHRtbEZvciA9IHRvZG8uaWQ7XHJcbiAgICBsYWJlbC5hcHBlbmQodG9kby50aXRsZSk7XHJcbiAgICBjb25zdCBkdWVEYXRlID0gdG9kb0VsZW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWVcIik7XHJcbiAgICBkdWVEYXRlLmlubmVyVGV4dCA9IGBEdWUgZGF0ZTogJHt0b2RvLmR1ZURhdGV9YDtcclxuICAgIGNvbnN0IHByaW9yaXR5ID0gdG9kb0VsZW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcmlvcml0eVwiKTtcclxuICAgIHByaW9yaXR5LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRvZG8ucHJpb3JpdHk7XHJcblxyXG4gICAgdG9kb3NDb250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0VsZW1lbnQpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZW5kZXIoKSB7XHJcbiAgY2xlYXJFbGVtZW50KHByb2plY3RzQ29udGFpbmVyKTtcclxuICByZW5kZXJQcm9qZWN0cygpO1xyXG4gIGNvbnN0IHByb2plY3RzID0gc3RhdGUuZ2V0UHJvamVjdHMoKTtcclxuICBjb25zdCBzZWxlY3RlZFByb2plY3RJZCA9IHN0YXRlLmdldFNlbGVjdGVkUHJvamVjdElkKCk7XHJcblxyXG4gIGNvbnN0IHNlbGVjdGVkUHJvamVjdCA9IHByb2plY3RzLmZpbmQoXHJcbiAgICAocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gc2VsZWN0ZWRQcm9qZWN0SWRcclxuICApO1xyXG4gIGlmIChzZWxlY3RlZFByb2plY3RJZCA9PSBudWxsIHx8IHNlbGVjdGVkUHJvamVjdCA9PSBudWxsKSB7XHJcbiAgICBwcm9qZWN0RGlzcGxheUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgfSBlbHNlIHtcclxuICAgIHByb2plY3REaXNwbGF5Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xyXG4gICAgcHJvamVjdFRpdGxlRWxlbWVudC5pbm5lclRleHQgPSBzZWxlY3RlZFByb2plY3QudGl0bGU7XHJcbiAgICBjbGVhckVsZW1lbnQodG9kb3NDb250YWluZXIpO1xyXG4gICAgcmVuZGVyVG9kb3Moc2VsZWN0ZWRQcm9qZWN0KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUVkaXRQcm9qZWN0VGl0bGUoKSB7XHJcbiAgY29uc3QgaXNFZGl0aW5nID0gcHJvamVjdFRpdGxlRWRpdEJ0bi5pbm5lclRleHQgPT09IFwiU2F2ZVwiO1xyXG4gIGlmIChpc0VkaXRpbmcpIHtcclxuICAgIGNvbnN0IHByb2plY3RUaXRsZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LXRpdGxlLWlucHV0XCIpO1xyXG4gICAgY29uc3QgbmV3VGl0bGUgPSBwcm9qZWN0VGl0bGVJbnB1dC52YWx1ZS50cmltKCk7XHJcbiAgICBpZiAobmV3VGl0bGUgJiYgbmV3VGl0bGUgIT09IHByb2plY3RUaXRsZUVsZW1lbnQuaW5uZXJUZXh0KSB7XHJcbiAgICAgIHByb2plY3RGdW5jdGlvbnMudXBkYXRlUHJvamVjdFRpdGxlKFxyXG4gICAgICAgIHN0YXRlLmdldFNlbGVjdGVkUHJvamVjdElkKCksXHJcbiAgICAgICAgbmV3VGl0bGVcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHByb2plY3RUaXRsZUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIHByb2plY3RUaXRsZUVkaXRCdG4uaW5uZXJUZXh0ID0gXCJFZGl0XCI7XHJcbiAgICBwcm9qZWN0VGl0bGVJbnB1dC5yZW1vdmUoKTtcclxuICAgIHJlbmRlcigpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBwcm9qZWN0VGl0bGVFbGVtZW50LmlubmVyVGV4dDtcclxuICAgIHByb2plY3RUaXRsZUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3RUaXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgcHJvamVjdFRpdGxlSW5wdXQudHlwZSA9IFwidGV4dFwiO1xyXG4gICAgcHJvamVjdFRpdGxlSW5wdXQudmFsdWUgPSBwcm9qZWN0VGl0bGU7XHJcbiAgICBwcm9qZWN0VGl0bGVJbnB1dC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC10aXRsZS1pbnB1dFwiKTtcclxuXHJcbiAgICBwcm9qZWN0VGl0bGVFbGVtZW50LnBhcmVudEVsZW1lbnQuaW5zZXJ0QmVmb3JlKFxyXG4gICAgICBwcm9qZWN0VGl0bGVJbnB1dCxcclxuICAgICAgcHJvamVjdFRpdGxlRWRpdEJ0blxyXG4gICAgKTtcclxuICAgIHByb2plY3RUaXRsZUlucHV0LmZvY3VzKCk7XHJcbiAgICBwcm9qZWN0VGl0bGVFZGl0QnRuLmlubmVyVGV4dCA9IFwiU2F2ZVwiO1xyXG4gICAgcHJvamVjdFRpdGxlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIChlKSA9PiB7XHJcbiAgICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XHJcbiAgICAgICAgcHJvamVjdFRpdGxlRWRpdEJ0bi5jbGljaygpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZVZpZXdUb2RvRGV0YWlscyhlKSB7XHJcbiAgaWYgKGUudGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJpbnB1dFwiKSByZXR1cm47IC8vIElnbm9yZSBjaGVja2JveCBjbGlja3NcclxuICBjb25zdCBzZWxlY3RlZFByb2plY3RJZCA9IHN0YXRlLmdldFNlbGVjdGVkUHJvamVjdElkKCk7XHJcbiAgY29uc3QgcHJvamVjdHMgPSBzdGF0ZS5nZXRQcm9qZWN0cygpO1xyXG4gIGNvbnN0IHNlbGVjdGVkUHJvamVjdCA9IHByb2plY3RzLmZpbmQoXHJcbiAgICAocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gc2VsZWN0ZWRQcm9qZWN0SWRcclxuICApO1xyXG4gIGNvbnN0IHRvZG9JZCA9IGUuY3VycmVudFRhcmdldC5xdWVyeVNlbGVjdG9yKFwiaW5wdXRcIikuaWQ7XHJcbiAgY3VycmVudFRvZG9JZCA9IHRvZG9JZDtcclxuICBjb25zdCBzZWxlY3RlZFRvZG8gPSBzZWxlY3RlZFByb2plY3QudG9kb3MuZmluZCgodG9kbykgPT4gdG9kby5pZCA9PT0gdG9kb0lkKTtcclxuXHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXRvZG8tdGl0bGVdXCIpLmlubmVyVGV4dCA9IHNlbGVjdGVkVG9kby50aXRsZTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdG9kby10aXRsZS1pbnB1dF1cIikudmFsdWUgPSBzZWxlY3RlZFRvZG8udGl0bGU7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXRvZG8tZGVzY3JpcHRpb25dXCIpLmlubmVyVGV4dCA9XHJcbiAgICBzZWxlY3RlZFRvZG8uZGVzY3JpcHRpb247XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXRvZG8tZGVzY3JpcHRpb24taW5wdXRdXCIpLnZhbHVlID1cclxuICAgIHNlbGVjdGVkVG9kby5kZXNjcmlwdGlvbjtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gICAgXCJbZGF0YS10b2RvLWR1ZS1kYXRlXVwiXHJcbiAgKS5pbm5lclRleHQgPSBgRHVlIGRhdGU6ICR7c2VsZWN0ZWRUb2RvLmR1ZURhdGV9YDtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdG9kby1kdWUtZGF0ZS1pbnB1dF1cIikudmFsdWUgPVxyXG4gICAgc2VsZWN0ZWRUb2RvLmR1ZURhdGU7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXRvZG8tcHJpb3JpdHldXCIpLmlubmVyVGV4dCA9IGBQcmlvcml0eTogJHtcclxuICAgIHByaW9yaXR5TWFwcGluZ1tzZWxlY3RlZFRvZG8ucHJpb3JpdHldXHJcbiAgfWA7XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXRvZG8tcHJpb3JpdHktaW5wdXRdXCIpLnZhbHVlID1cclxuICAgIHNlbGVjdGVkVG9kby5wcmlvcml0eTtcclxuXHJcbiAgY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWRlbGV0ZS10b2RvLWJ1dHRvbl1cIik7XHJcbiAgZGVsZXRlQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB0b2RvRnVuY3Rpb25zLmhhbmRsZURlbGV0ZVRvZG9JdGVtKHRvZG9JZCk7XHJcblxyXG4gIG1vZGFsLm9wZW5Nb2RhbChcInZpZXctdG9kb1wiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlRWRpdFRvZG9FbGVtZW50KFxyXG4gIGVkaXRCdG4sXHJcbiAgZGlzcGxheUVsZW1lbnQsXHJcbiAgaW5wdXRFbGVtZW50LFxyXG4gIHNhdmVDYWxsYmFja1xyXG4pIHtcclxuICBjb25zdCBpc0VkaXRpbmcgPSBlZGl0QnRuLmlubmVyVGV4dCA9PT0gXCJTYXZlXCI7XHJcbiAgaWYgKGlzRWRpdGluZykge1xyXG4gICAgY29uc3QgbmV3VmFsdWUgPSBpbnB1dEVsZW1lbnQudmFsdWUudHJpbSgpO1xyXG4gICAgc2F2ZUNhbGxiYWNrKG5ld1ZhbHVlKTtcclxuICAgIGRpc3BsYXlFbGVtZW50LmlubmVyVGV4dCA9IG5ld1ZhbHVlO1xyXG4gICAgZGlzcGxheUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcclxuICAgIGlucHV0RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gICAgZWRpdEJ0bi5pbm5lclRleHQgPSBcIkVkaXRcIjtcclxuICAgIHN0b3JhZ2Uuc2F2ZSgpO1xyXG4gICAgcmVuZGVyKCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGlucHV0RWxlbWVudC52YWx1ZSA9IGRpc3BsYXlFbGVtZW50LmlubmVyVGV4dDtcclxuICAgIGRpc3BsYXlFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgIGlucHV0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xyXG4gICAgaW5wdXRFbGVtZW50LmZvY3VzKCk7XHJcbiAgICBlZGl0QnRuLmlubmVyVGV4dCA9IFwiU2F2ZVwiO1xyXG4gIH1cclxufVxyXG5cclxuZG9jdW1lbnRcclxuICAucXVlcnlTZWxlY3RvcihcIltkYXRhLWVkaXQtdG9kby10aXRsZV1cIilcclxuICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBoYW5kbGVFZGl0VG9kb0VsZW1lbnQoXHJcbiAgICAgIGUudGFyZ2V0LFxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdG9kby10aXRsZV1cIiksXHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10b2RvLXRpdGxlLWlucHV0XVwiKSxcclxuICAgICAgKG5ld1ZhbHVlKSA9PlxyXG4gICAgICAgIHRvZG9GdW5jdGlvbnMudXBkYXRlVG9kb0VsZW1lbnQoY3VycmVudFRvZG9JZCwgXCJ0aXRsZVwiLCBuZXdWYWx1ZSlcclxuICAgICk7XHJcbiAgfSk7XHJcblxyXG5kb2N1bWVudFxyXG4gIC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtZWRpdC10b2RvLWRlc2NyaXB0aW9uXVwiKVxyXG4gIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIGhhbmRsZUVkaXRUb2RvRWxlbWVudChcclxuICAgICAgZS50YXJnZXQsXHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10b2RvLWRlc2NyaXB0aW9uXVwiKSxcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXRvZG8tZGVzY3JpcHRpb24taW5wdXRdXCIpLFxyXG4gICAgICAobmV3VmFsdWUpID0+XHJcbiAgICAgICAgdG9kb0Z1bmN0aW9ucy51cGRhdGVUb2RvRWxlbWVudChjdXJyZW50VG9kb0lkLCBcImRlc2NyaXB0aW9uXCIsIG5ld1ZhbHVlKVxyXG4gICAgKTtcclxuICB9KTtcclxuXHJcbmRvY3VtZW50XHJcbiAgLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1lZGl0LXRvZG8tZHVlLWRhdGVdXCIpXHJcbiAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgaGFuZGxlRWRpdFRvZG9FbGVtZW50KFxyXG4gICAgICBlLnRhcmdldCxcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXRvZG8tZHVlLWRhdGVdXCIpLFxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdG9kby1kdWUtZGF0ZS1pbnB1dF1cIiksXHJcbiAgICAgIChuZXdWYWx1ZSkgPT5cclxuICAgICAgICB0b2RvRnVuY3Rpb25zLnVwZGF0ZVRvZG9FbGVtZW50KGN1cnJlbnRUb2RvSWQsIFwiZHVlRGF0ZVwiLCBuZXdWYWx1ZSlcclxuICAgICk7XHJcbiAgfSk7XHJcblxyXG5kb2N1bWVudFxyXG4gIC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtZWRpdC10b2RvLXByaW9yaXR5XVwiKVxyXG4gIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIGhhbmRsZUVkaXRUb2RvRWxlbWVudChcclxuICAgICAgZS50YXJnZXQsXHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10b2RvLXByaW9yaXR5XVwiKSxcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXRvZG8tcHJpb3JpdHktaW5wdXRdXCIpLFxyXG4gICAgICAobmV3VmFsdWUpID0+XHJcbiAgICAgICAgdG9kb0Z1bmN0aW9ucy51cGRhdGVUb2RvRWxlbWVudChjdXJyZW50VG9kb0lkLCBcInByaW9yaXR5XCIsIG5ld1ZhbHVlKVxyXG4gICAgKTtcclxuICB9KTtcclxuXHJcbnByb2plY3RUaXRsZUVkaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUVkaXRQcm9qZWN0VGl0bGUpO1xyXG5cclxuZG9jdW1lbnRcclxuICAucXVlcnlTZWxlY3RvcihcIltkYXRhLXRvZG8tdGl0bGUtaW5wdXRdXCIpXHJcbiAgLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XHJcbiAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtZWRpdC10b2RvLXRpdGxlXVwiKS5jbGljaygpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuZG9jdW1lbnRcclxuICAucXVlcnlTZWxlY3RvcihcIltkYXRhLXRvZG8tZGVzY3JpcHRpb24taW5wdXRdXCIpXHJcbiAgLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XHJcbiAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtZWRpdC10b2RvLWRlc2NyaXB0aW9uXVwiKS5jbGljaygpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuZG9jdW1lbnRcclxuICAucXVlcnlTZWxlY3RvcihcIltkYXRhLXRvZG8tZHVlLWRhdGUtaW5wdXRdXCIpXHJcbiAgLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XHJcbiAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtZWRpdC10b2RvLWR1ZS1kYXRlXVwiKS5jbGljaygpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuZG9jdW1lbnRcclxuICAucXVlcnlTZWxlY3RvcihcIltkYXRhLXRvZG8tcHJpb3JpdHktaW5wdXRdXCIpXHJcbiAgLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XHJcbiAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtZWRpdC10b2RvLXByaW9yaXR5XVwiKS5jbGljaygpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxucHJvamVjdHNDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgbGV0IHNlbGVjdGVkUHJvamVjdElkID0gc3RhdGUuZ2V0U2VsZWN0ZWRQcm9qZWN0SWQoKTtcclxuICBpZiAoZS50YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcImxpXCIpIHtcclxuICAgIHNlbGVjdGVkUHJvamVjdElkID0gZS50YXJnZXQuZGF0YXNldC5wcm9qZWN0SWQ7XHJcbiAgICBzdGF0ZS5zZXRTZWxlY3RlZFByb2plY3RJZChzZWxlY3RlZFByb2plY3RJZCk7XHJcbiAgICBzdG9yYWdlLnNhdmUoKTtcclxuICAgIHJlbmRlcigpO1xyXG4gIH1cclxufSk7XHJcblxyXG50b2Rvc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICBpZiAoZS50YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcImxhYmVsXCIpIHtcclxuICAgIGhhbmRsZVZpZXdUb2RvRGV0YWlscyhlKTtcclxuICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIHRvZG9zQ29udGFpbmVyLFxyXG4gIGNsZWFyRWxlbWVudCxcclxuICByZW5kZXJQcm9qZWN0cyxcclxuICByZW5kZXJUb2RvcyxcclxuICByZW5kZXIsXHJcbn07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XHJcbmltcG9ydCBtb2RhbCBmcm9tIFwiLi9tb2R1bGVzL21vZGFsXCI7XHJcbmltcG9ydCBzdGF0ZSBmcm9tIFwiLi9tb2R1bGVzL3N0YXRlXCI7XHJcbmltcG9ydCBzdG9yYWdlIGZyb20gXCIuL21vZHVsZXMvc3RvcmFnZVwiO1xyXG5pbXBvcnQgdWkgZnJvbSBcIi4vbW9kdWxlcy91aVwiO1xyXG5pbXBvcnQgcHJvamVjdEZ1bmN0aW9ucyBmcm9tIFwiLi9tb2R1bGVzL3Byb2plY3RGdW5jdGlvbnNcIjtcclxuaW1wb3J0IHRvZG9GdW5jdGlvbnMgZnJvbSBcIi4vbW9kdWxlcy90b2RvRnVuY3Rpb25zXCI7XHJcblxyXG5tb2RhbC5zZXR1cE92ZXJsYXlMaXN0ZW5lcigpO1xyXG5tb2RhbC5zZXR1cEVzY2FwZUxpc3RlbmVyKCk7XHJcblxyXG51aS5yZW5kZXIoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9