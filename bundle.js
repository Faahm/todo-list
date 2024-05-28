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
  width: max-content;
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
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,qBAAqB;EACrB,eAAe;EACf,oBAAoB;EACpB,iBAAiB;AACnB;;AAEA;;;EAGE,oBAAoB;EACpB,sBAAsB;AACxB;;AAEA;EACE,SAAS;EACT,aAAa;EACb,oCAAoC;EACpC,gBAAgB;EAChB,iBAAiB;EACjB,gCAAgC;EAChC,wBAAwB;EACxB,aAAa;EACb;;;sBAGoB;EACpB,4BAA4B;EAC5B,wEAAwE;AAC1E;;AAEA;EACE,eAAe;EACf,wBAAwB;EACxB,qBAAqB;EACrB,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,YAAY;EACZ,oCAAoC;EACpC,aAAa;EACb,oCAAoC;AACtC;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;;;;;EAKE,YAAY;EACZ,SAAS;AACX;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,aAAa;EACb,QAAQ;AACV;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,WAAW;EACX,YAAY;EACZ,eAAe;EACf,iBAAiB;EACjB,eAAe;EACf,UAAU;EACV,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,uBAAuB;EACvB,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,oBAAoB;EACpB,sBAAsB;EACtB,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,qBAAqB;AACvB;;AAEA;EACE,eAAe;EACf,MAAM;EACN,SAAS;EACT,OAAO;EACP,QAAQ;EACR,WAAW;EACX,YAAY;EACZ,8BAA8B;EAC9B,0BAA0B;EAC1B,UAAU;AACZ;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,2BAA2B;EAC3B,gBAAgB;EAChB,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;;EAEE,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,eAAe;EACf,aAAa;EACb,SAAS;EACT,UAAU;EACV,cAAc;AAChB;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,iCAAiC;AACnC;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,uBAAuB;AACzB;;AAEA;EACE,oBAAoB;AACtB;;AAEA;EACE,UAAU;EACV,uBAAuB;EACvB,SAAS;EACT,cAAc;EACd,qCAAqC;EACrC,kBAAkB;EAClB,aAAa;EACb,eAAe;EACf,uCAAuC;AACzC;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,wBAAwB;AAC1B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,cAAc;EACd,6BAA6B;EAC7B,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;EACtB,4BAA4B;EAC5B,aAAa;EACb,mBAAmB;EACnB,8BAA8B;EAC9B,4BAA4B;AAC9B;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,oBAAoB;EACpB,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,qBAAqB;AACvB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,QAAQ;EACR,OAAO;EACP,cAAc;EACd,WAAW;EACX,wBAAwB;EACxB,YAAY;AACd;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,6BAA6B;EAC7B,WAAW;EACX,+BAA+B;;EAE/B,wBAAwB;AAC1B","sourcesContent":[":root {\r\n  --primary: #7047d1;\r\n  --background: #f7f5fd;\r\n  --text: #06030b;\r\n  --secondary: #e28ca3;\r\n  --accent: #d87164;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  font-family: inherit;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n  padding: 64px;\r\n  font-family: \"Work Sans\", sans-serif;\r\n  font-weight: 300;\r\n  font-size: 1.5rem;\r\n  background-color: var(--primary);\r\n  color: var(--background);\r\n  display: grid;\r\n  grid-template-areas:\r\n    \"header header header header\"\r\n    \"lists . active . \"\r\n    \"lists . delete .\";\r\n  grid-template-rows: auto 1fr;\r\n  grid-template-columns: minmax(100px, 300px) minmax(250px, 500px) 1fr 1fr;\r\n}\r\n\r\n.btn.delete {\r\n  margin-top: 8px;\r\n  color: var(--background);\r\n  background-color: red;\r\n  padding: 8px;\r\n  border-radius: 8px;\r\n}\r\n\r\n.todo-header .project-title {\r\n  flex-grow: 1;\r\n}\r\n\r\n.todo-header .project-title-input {\r\n  width: 100%;\r\n  font-size: inherit;\r\n  border: none;\r\n  border-bottom: 2px solid transparent;\r\n  outline: none;\r\n  transition: border-bottom-color 0.3s;\r\n}\r\n\r\n.todo-header .project-title-input:focus {\r\n  border-bottom-color: var(--primary);\r\n}\r\n\r\n.todo-item {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  margin-bottom: 1rem;\r\n}\r\n\r\n.todo-item p,\r\n.todo-item h2,\r\n.todo-item input,\r\n.todo-item textarea,\r\n.todo-item select {\r\n  flex-grow: 1;\r\n  margin: 0;\r\n}\r\n\r\n.todo-item .btn.edit {\r\n  margin-left: 1rem;\r\n}\r\n\r\n.todos {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 8px;\r\n}\r\n\r\n.todo {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.task-header {\r\n  display: flex;\r\n  gap: 4px;\r\n}\r\n\r\n.task-priority {\r\n  width: 16px;\r\n  height: auto;\r\n  border-radius: 16px;\r\n}\r\n\r\n.todo-form {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 16px;\r\n}\r\n\r\n.modal {\r\n  color: var(--text);\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  gap: 0.4rem;\r\n  width: 450px;\r\n  padding: 1.3rem;\r\n  min-height: 250px;\r\n  position: fixed;\r\n  z-index: 2;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n  background-color: white;\r\n  border: 1px solid #ddd;\r\n  border-radius: 15px;\r\n}\r\n\r\n.modal input {\r\n  padding: 0.7rem 1rem;\r\n  border: 1px solid #ddd;\r\n  border-radius: 5px;\r\n  font-size: 0.9em;\r\n}\r\n\r\n.btn-open {\r\n  font-size: 1rem;\r\n}\r\n\r\n.btn-close {\r\n  font-size: 1.5rem;\r\n  font-weight: 600;\r\n  color: red !important;\r\n}\r\n\r\n.overlay {\r\n  position: fixed;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: rgba(0, 0, 0, 0.5);\r\n  backdrop-filter: blur(3px);\r\n  z-index: 1;\r\n}\r\n\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n.title {\r\n  grid-area: header;\r\n  text-align: center;\r\n  font-size: calc(7vw + 2rem);\r\n  font-weight: 900;\r\n  color: var(--secondary);\r\n  letter-spacing: 2px;\r\n  margin: -0.3em 0 0.5em;\r\n}\r\n\r\n.all-projects {\r\n  grid-area: lists;\r\n  width: max-content;\r\n}\r\n\r\n.task-project {\r\n  font-size: 1.2rem;\r\n  line-height: 1.7;\r\n  list-style: circle;\r\n  padding-left: 1.1em;\r\n}\r\n\r\n.project-name,\r\n.project-item {\r\n  cursor: pointer;\r\n}\r\n\r\nform {\r\n  display: flex;\r\n}\r\n\r\n.btn {\r\n  cursor: pointer;\r\n  background: 0;\r\n  border: 0;\r\n  padding: 0;\r\n  color: inherit;\r\n}\r\n\r\n.btn.create {\r\n  font-size: 1.5rem;\r\n  font-weight: 900;\r\n  transition: opacity 250ms ease-in;\r\n}\r\n\r\n.btn.create:hover {\r\n  opacity: 0.7;\r\n}\r\n\r\n.btn.delete {\r\n  opacity: 0.7;\r\n  font-size: 1rem;\r\n  transition: color 200ms;\r\n}\r\n\r\n.btn.delete:hover {\r\n  color: var(--accent);\r\n}\r\n\r\n.new {\r\n  width: 90%;\r\n  background: transparent;\r\n  border: 0;\r\n  color: inherit;\r\n  border-bottom: 1px solid currentColor;\r\n  font-size: inherit;\r\n  outline: none;\r\n  padding: 0.25em;\r\n  transition: border-bottom 150ms ease-in;\r\n}\r\n\r\n.new::placeholder {\r\n  opacity: 0.4;\r\n}\r\n\r\n.new:focus {\r\n  border-bottom-width: 3px;\r\n}\r\n\r\n.new:focus::placeholder {\r\n  opacity: 0.15;\r\n}\r\n\r\n.new.project {\r\n  font-size: 1.1rem;\r\n}\r\n\r\n.new.todo {\r\n  margin-bottom: 0;\r\n}\r\n\r\n.todo-project {\r\n  grid-area: active;\r\n  --spacer: 2rem;\r\n  background: var(--background);\r\n  color: var(--text);\r\n  width: 60vw;\r\n  height: auto;\r\n  border-radius: 16px;\r\n}\r\n\r\n.todo-header {\r\n  padding: var(--spacer);\r\n  background: var(--secondary);\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  border-radius: 16px 16px 0 0;\r\n}\r\n\r\n.project-title {\r\n  margin: 0 1em 0 0;\r\n}\r\n\r\n.todo-body {\r\n  padding: var(--spacer);\r\n  position: relative;\r\n}\r\n\r\n.new-todo-creator .create {\r\n  color: var(--primary);\r\n}\r\n\r\n.todo label {\r\n  display: flex-inline;\r\n  align-items: center;\r\n  position: relative;\r\n}\r\n\r\n.todo {\r\n  position: relative;\r\n  margin-bottom: 1.25em;\r\n}\r\n\r\n.todo::after {\r\n  content: \"\";\r\n  position: absolute;\r\n  right: 0;\r\n  left: 0;\r\n  bottom: -0.5em;\r\n  height: 1px;\r\n  background: currentColor;\r\n  opacity: 0.1;\r\n}\r\n\r\n.delete-stuff {\r\n  grid-area: delete;\r\n  display: flex;\r\n  justify-content: space-evenly;\r\n  width: 100%;\r\n  color: var(--accent) !important;\r\n\r\n  color: var(--background);\r\n}\r\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGdGQUFnRixZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxPQUFPLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLE9BQU8sT0FBTyxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxTQUFTLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxP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QUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLDBCQUEwQiw4Q0FBSztBQUMvQjtBQUNBO0FBQ0EsSUFBSSw4Q0FBSztBQUNULElBQUksZ0RBQU87QUFDWDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxpRUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUM7Ozs7Ozs7VUMxUkY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNlO0FBQ0E7QUFDSTtBQUNWO0FBQzRCO0FBQ047QUFDcEQ7QUFDQSxzREFBSztBQUNMLHNEQUFLO0FBQ0w7QUFDQSxtREFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9tb2RhbC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9wcm9qZWN0RnVuY3Rpb25zLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3N0YXRlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvdG9kb0Z1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy91aS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYDpyb290IHtcclxuICAtLXByaW1hcnk6ICM3MDQ3ZDE7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZjdmNWZkO1xyXG4gIC0tdGV4dDogIzA2MDMwYjtcclxuICAtLXNlY29uZGFyeTogI2UyOGNhMztcclxuICAtLWFjY2VudDogI2Q4NzE2NDtcclxufVxyXG5cclxuKixcclxuKjo6YmVmb3JlLFxyXG4qOjphZnRlciB7XHJcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDY0cHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiV29yayBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcclxuICBjb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgXCJoZWFkZXIgaGVhZGVyIGhlYWRlciBoZWFkZXJcIlxyXG4gICAgXCJsaXN0cyAuIGFjdGl2ZSAuIFwiXHJcbiAgICBcImxpc3RzIC4gZGVsZXRlIC5cIjtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gMWZyO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDEwMHB4LCAzMDBweCkgbWlubWF4KDI1MHB4LCA1MDBweCkgMWZyIDFmcjtcclxufVxyXG5cclxuLmJ0bi5kZWxldGUge1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICBjb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbn1cclxuXHJcbi50b2RvLWhlYWRlciAucHJvamVjdC10aXRsZSB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG59XHJcblxyXG4udG9kby1oZWFkZXIgLnByb2plY3QtdGl0bGUtaW5wdXQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbS1jb2xvciAwLjNzO1xyXG59XHJcblxyXG4udG9kby1oZWFkZXIgLnByb2plY3QtdGl0bGUtaW5wdXQ6Zm9jdXMge1xyXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHZhcigtLXByaW1hcnkpO1xyXG59XHJcblxyXG4udG9kby1pdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbn1cclxuXHJcbi50b2RvLWl0ZW0gcCxcclxuLnRvZG8taXRlbSBoMixcclxuLnRvZG8taXRlbSBpbnB1dCxcclxuLnRvZG8taXRlbSB0ZXh0YXJlYSxcclxuLnRvZG8taXRlbSBzZWxlY3Qge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi50b2RvLWl0ZW0gLmJ0bi5lZGl0IHtcclxuICBtYXJnaW4tbGVmdDogMXJlbTtcclxufVxyXG5cclxuLnRvZG9zIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZ2FwOiA4cHg7XHJcbn1cclxuXHJcbi50b2RvIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLnRhc2staGVhZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogNHB4O1xyXG59XHJcblxyXG4udGFzay1wcmlvcml0eSB7XHJcbiAgd2lkdGg6IDE2cHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbn1cclxuXHJcbi50b2RvLWZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBnYXA6IDE2cHg7XHJcbn1cclxuXHJcbi5tb2RhbCB7XHJcbiAgY29sb3I6IHZhcigtLXRleHQpO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBnYXA6IDAuNHJlbTtcclxuICB3aWR0aDogNDUwcHg7XHJcbiAgcGFkZGluZzogMS4zcmVtO1xyXG4gIG1pbi1oZWlnaHQ6IDI1MHB4O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAyO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuXHJcbi5tb2RhbCBpbnB1dCB7XHJcbiAgcGFkZGluZzogMC43cmVtIDFyZW07XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgZm9udC1zaXplOiAwLjllbTtcclxufVxyXG5cclxuLmJ0bi1vcGVuIHtcclxuICBmb250LXNpemU6IDFyZW07XHJcbn1cclxuXHJcbi5idG4tY2xvc2Uge1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6IHJlZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ub3ZlcmxheSB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5oaWRkZW4ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgZ3JpZC1hcmVhOiBoZWFkZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogY2FsYyg3dncgKyAycmVtKTtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xyXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbiAgbWFyZ2luOiAtMC4zZW0gMCAwLjVlbTtcclxufVxyXG5cclxuLmFsbC1wcm9qZWN0cyB7XHJcbiAgZ3JpZC1hcmVhOiBsaXN0cztcclxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbn1cclxuXHJcbi50YXNrLXByb2plY3Qge1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjc7XHJcbiAgbGlzdC1zdHlsZTogY2lyY2xlO1xyXG4gIHBhZGRpbmctbGVmdDogMS4xZW07XHJcbn1cclxuXHJcbi5wcm9qZWN0LW5hbWUsXHJcbi5wcm9qZWN0LWl0ZW0ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuZm9ybSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQ6IDA7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5idG4uY3JlYXRlIHtcclxuICBmb250LXNpemU6IDEuNXJlbTtcclxuICBmb250LXdlaWdodDogOTAwO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMjUwbXMgZWFzZS1pbjtcclxufVxyXG5cclxuLmJ0bi5jcmVhdGU6aG92ZXIge1xyXG4gIG9wYWNpdHk6IDAuNztcclxufVxyXG5cclxuLmJ0bi5kZWxldGUge1xyXG4gIG9wYWNpdHk6IDAuNztcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgdHJhbnNpdGlvbjogY29sb3IgMjAwbXM7XHJcbn1cclxuXHJcbi5idG4uZGVsZXRlOmhvdmVyIHtcclxuICBjb2xvcjogdmFyKC0tYWNjZW50KTtcclxufVxyXG5cclxuLm5ldyB7XHJcbiAgd2lkdGg6IDkwJTtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICBib3JkZXI6IDA7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGN1cnJlbnRDb2xvcjtcclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBwYWRkaW5nOiAwLjI1ZW07XHJcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbSAxNTBtcyBlYXNlLWluO1xyXG59XHJcblxyXG4ubmV3OjpwbGFjZWhvbGRlciB7XHJcbiAgb3BhY2l0eTogMC40O1xyXG59XHJcblxyXG4ubmV3OmZvY3VzIHtcclxuICBib3JkZXItYm90dG9tLXdpZHRoOiAzcHg7XHJcbn1cclxuXHJcbi5uZXc6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcclxuICBvcGFjaXR5OiAwLjE1O1xyXG59XHJcblxyXG4ubmV3LnByb2plY3Qge1xyXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xyXG59XHJcblxyXG4ubmV3LnRvZG8ge1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbi50b2RvLXByb2plY3Qge1xyXG4gIGdyaWQtYXJlYTogYWN0aXZlO1xyXG4gIC0tc3BhY2VyOiAycmVtO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQpO1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcclxuICB3aWR0aDogNjB2dztcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcclxufVxyXG5cclxuLnRvZG8taGVhZGVyIHtcclxuICBwYWRkaW5nOiB2YXIoLS1zcGFjZXIpO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXNlY29uZGFyeSk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBib3JkZXItcmFkaXVzOiAxNnB4IDE2cHggMCAwO1xyXG59XHJcblxyXG4ucHJvamVjdC10aXRsZSB7XHJcbiAgbWFyZ2luOiAwIDFlbSAwIDA7XHJcbn1cclxuXHJcbi50b2RvLWJvZHkge1xyXG4gIHBhZGRpbmc6IHZhcigtLXNwYWNlcik7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubmV3LXRvZG8tY3JlYXRvciAuY3JlYXRlIHtcclxuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XHJcbn1cclxuXHJcbi50b2RvIGxhYmVsIHtcclxuICBkaXNwbGF5OiBmbGV4LWlubGluZTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLnRvZG8ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW4tYm90dG9tOiAxLjI1ZW07XHJcbn1cclxuXHJcbi50b2RvOjphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3R0b206IC0wLjVlbTtcclxuICBoZWlnaHQ6IDFweDtcclxuICBiYWNrZ3JvdW5kOiBjdXJyZW50Q29sb3I7XHJcbiAgb3BhY2l0eTogMC4xO1xyXG59XHJcblxyXG4uZGVsZXRlLXN0dWZmIHtcclxuICBncmlkLWFyZWE6IGRlbGV0ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQpICFpbXBvcnRhbnQ7XHJcblxyXG4gIGNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5j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QWE7RUFDYixlQUFlO0VBQ2YsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCw2QkFBNkI7RUFDN0Isa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5Qiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsT0FBTztFQUNQLGNBQWM7RUFDZCxXQUFXO0VBQ1gsd0JBQXdCO0VBQ3hCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLFdBQVc7RUFDWCwrQkFBK0I7O0VBRS9CLHdCQUF3QjtBQUMxQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICAtLXByaW1hcnk6ICM3MDQ3ZDE7XFxyXFxuICAtLWJhY2tncm91bmQ6ICNmN2Y1ZmQ7XFxyXFxuICAtLXRleHQ6ICMwNjAzMGI7XFxyXFxuICAtLXNlY29uZGFyeTogI2UyOGNhMztcXHJcXG4gIC0tYWNjZW50OiAjZDg3MTY0O1xcclxcbn1cXHJcXG5cXHJcXG4qLFxcclxcbio6OmJlZm9yZSxcXHJcXG4qOjphZnRlciB7XFxyXFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogNjRweDtcXHJcXG4gIGZvbnQtZmFtaWx5OiBcXFwiV29yayBTYW5zXFxcIiwgc2Fucy1zZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcclxcbiAgY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxyXFxuICAgIFxcXCJoZWFkZXIgaGVhZGVyIGhlYWRlciBoZWFkZXJcXFwiXFxyXFxuICAgIFxcXCJsaXN0cyAuIGFjdGl2ZSAuIFxcXCJcXHJcXG4gICAgXFxcImxpc3RzIC4gZGVsZXRlIC5cXFwiO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIDFmcjtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDEwMHB4LCAzMDBweCkgbWlubWF4KDI1MHB4LCA1MDBweCkgMWZyIDFmcjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi5kZWxldGUge1xcclxcbiAgbWFyZ2luLXRvcDogOHB4O1xcclxcbiAgY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcclxcbiAgcGFkZGluZzogOHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1oZWFkZXIgLnByb2plY3QtdGl0bGUge1xcclxcbiAgZmxleC1ncm93OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1oZWFkZXIgLnByb2plY3QtdGl0bGUtaW5wdXQge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgdHJhbnNpdGlvbjogYm9yZGVyLWJvdHRvbS1jb2xvciAwLjNzO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1oZWFkZXIgLnByb2plY3QtdGl0bGUtaW5wdXQ6Zm9jdXMge1xcclxcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWl0ZW0ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1pdGVtIHAsXFxyXFxuLnRvZG8taXRlbSBoMixcXHJcXG4udG9kby1pdGVtIGlucHV0LFxcclxcbi50b2RvLWl0ZW0gdGV4dGFyZWEsXFxyXFxuLnRvZG8taXRlbSBzZWxlY3Qge1xcclxcbiAgZmxleC1ncm93OiAxO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1pdGVtIC5idG4uZWRpdCB7XFxyXFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG9zIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiA4cHg7XFxyXFxufVxcclxcblxcclxcbi50b2RvIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxufVxcclxcblxcclxcbi50YXNrLWhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZ2FwOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi50YXNrLXByaW9yaXR5IHtcXHJcXG4gIHdpZHRoOiAxNnB4O1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsIHtcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBnYXA6IDAuNHJlbTtcXHJcXG4gIHdpZHRoOiA0NTBweDtcXHJcXG4gIHBhZGRpbmc6IDEuM3JlbTtcXHJcXG4gIG1pbi1oZWlnaHQ6IDI1MHB4O1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgei1pbmRleDogMjtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XFxyXFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW9kYWwgaW5wdXQge1xcclxcbiAgcGFkZGluZzogMC43cmVtIDFyZW07XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgZm9udC1zaXplOiAwLjllbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1vcGVuIHtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1jbG9zZSB7XFxyXFxuICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5vdmVybGF5IHtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xcclxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4uaGlkZGVuIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi50aXRsZSB7XFxyXFxuICBncmlkLWFyZWE6IGhlYWRlcjtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogY2FsYyg3dncgKyAycmVtKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA5MDA7XFxyXFxuICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XFxyXFxuICBtYXJnaW46IC0wLjNlbSAwIDAuNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4uYWxsLXByb2plY3RzIHtcXHJcXG4gIGdyaWQtYXJlYTogbGlzdHM7XFxyXFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxyXFxufVxcclxcblxcclxcbi50YXNrLXByb2plY3Qge1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICBsaW5lLWhlaWdodDogMS43O1xcclxcbiAgbGlzdC1zdHlsZTogY2lyY2xlO1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxLjFlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtbmFtZSxcXHJcXG4ucHJvamVjdC1pdGVtIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuZm9ybSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuIHtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJhY2tncm91bmQ6IDA7XFxyXFxuICBib3JkZXI6IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgY29sb3I6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbi5idG4uY3JlYXRlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDkwMDtcXHJcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMjUwbXMgZWFzZS1pbjtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi5jcmVhdGU6aG92ZXIge1xcclxcbiAgb3BhY2l0eTogMC43O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLmRlbGV0ZSB7XFxyXFxuICBvcGFjaXR5OiAwLjc7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICB0cmFuc2l0aW9uOiBjb2xvciAyMDBtcztcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi5kZWxldGU6aG92ZXIge1xcclxcbiAgY29sb3I6IHZhcigtLWFjY2VudCk7XFxyXFxufVxcclxcblxcclxcbi5uZXcge1xcclxcbiAgd2lkdGg6IDkwJTtcXHJcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbiAgY29sb3I6IGluaGVyaXQ7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgY3VycmVudENvbG9yO1xcclxcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDAuMjVlbTtcXHJcXG4gIHRyYW5zaXRpb246IGJvcmRlci1ib3R0b20gMTUwbXMgZWFzZS1pbjtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldzo6cGxhY2Vob2xkZXIge1xcclxcbiAgb3BhY2l0eTogMC40O1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3OmZvY3VzIHtcXHJcXG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldzpmb2N1czo6cGxhY2Vob2xkZXIge1xcclxcbiAgb3BhY2l0eTogMC4xNTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldy5wcm9qZWN0IHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4xcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubmV3LnRvZG8ge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tcHJvamVjdCB7XFxyXFxuICBncmlkLWFyZWE6IGFjdGl2ZTtcXHJcXG4gIC0tc3BhY2VyOiAycmVtO1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZCk7XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dCk7XFxyXFxuICB3aWR0aDogNjB2dztcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWhlYWRlciB7XFxyXFxuICBwYWRkaW5nOiB2YXIoLS1zcGFjZXIpO1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5KTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYm9yZGVyLXJhZGl1czogMTZweCAxNnB4IDAgMDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtdGl0bGUge1xcclxcbiAgbWFyZ2luOiAwIDFlbSAwIDA7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWJvZHkge1xcclxcbiAgcGFkZGluZzogdmFyKC0tc3BhY2VyKTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLm5ldy10b2RvLWNyZWF0b3IgLmNyZWF0ZSB7XFxyXFxuICBjb2xvcjogdmFyKC0tcHJpbWFyeSk7XFxyXFxufVxcclxcblxcclxcbi50b2RvIGxhYmVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXgtaW5saW5lO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8ge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMS4yNWVtO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kbzo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICBib3R0b206IC0wLjVlbTtcXHJcXG4gIGhlaWdodDogMXB4O1xcclxcbiAgYmFja2dyb3VuZDogY3VycmVudENvbG9yO1xcclxcbiAgb3BhY2l0eTogMC4xO1xcclxcbn1cXHJcXG5cXHJcXG4uZGVsZXRlLXN0dWZmIHtcXHJcXG4gIGdyaWQtYXJlYTogZGVsZXRlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBjb2xvcjogdmFyKC0tYWNjZW50KSAhaW1wb3J0YW50O1xcclxcblxcclxcbiAgY29sb3I6IHZhcigtLWJhY2tncm91bmQpO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIG9wZW5Nb2RhbChtb2RhbFR5cGUpIHtcclxuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLW1vZGFsPVwiJHttb2RhbFR5cGV9XCJdYCk7XHJcbiAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIikuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gY2xvc2VNb2RhbChtb2RhbFR5cGUpIHtcclxuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLW1vZGFsPVwiJHttb2RhbFR5cGV9XCJdYCk7XHJcbiAgbW9kYWwuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLm92ZXJsYXlcIikuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0dXBPdmVybGF5TGlzdGVuZXIoKSB7XHJcbiAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKTtcclxuICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XHJcbiAgICBkb2N1bWVudFxyXG4gICAgICAucXVlcnlTZWxlY3RvckFsbChcIi5tb2RhbFwiKVxyXG4gICAgICAuZm9yRWFjaCgobW9kYWwpID0+IG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIikpO1xyXG4gICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBzZXR1cEVzY2FwZUxpc3RlbmVyKCkge1xyXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIChlKSA9PiB7XHJcbiAgICBpZiAoZS5rZXkgPT09IFwiRXNjYXBlXCIpIHtcclxuICAgICAgZG9jdW1lbnRcclxuICAgICAgICAucXVlcnlTZWxlY3RvckFsbChcIi5tb2RhbFwiKVxyXG4gICAgICAgIC5mb3JFYWNoKChtb2RhbCkgPT4gbW9kYWwuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKSk7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIub3ZlcmxheVwiKS5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG59XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICBpZiAoZS50YXJnZXQubWF0Y2hlcyhcIltkYXRhLW1vZGFsLW9wZW5dXCIpKSB7XHJcbiAgICBjb25zdCBtb2RhbFR5cGUgPSBlLnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLW1vZGFsLW9wZW5cIik7XHJcbiAgICBvcGVuTW9kYWwobW9kYWxUeXBlKTtcclxuICB9XHJcbn0pO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgaWYgKGUudGFyZ2V0Lm1hdGNoZXMoXCJbZGF0YS1tb2RhbC1jbG9zZV1cIikpIHtcclxuICAgIGNvbnN0IG1vZGFsVHlwZSA9IGUudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtbW9kYWwtY2xvc2VcIik7XHJcbiAgICBjbG9zZU1vZGFsKG1vZGFsVHlwZSk7XHJcbiAgfVxyXG4gIGlmIChlLnRhcmdldC5tYXRjaGVzKFwiLm92ZXJsYXlcIikpIHtcclxuICAgIGRvY3VtZW50XHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1vZGFsXCIpXHJcbiAgICAgIC5mb3JFYWNoKChtb2RhbCkgPT4gbW9kYWwuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKSk7XHJcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgfVxyXG59KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBvcGVuTW9kYWwsXHJcbiAgY2xvc2VNb2RhbCxcclxuICBzZXR1cE92ZXJsYXlMaXN0ZW5lcixcclxuICBzZXR1cEVzY2FwZUxpc3RlbmVyLFxyXG59O1xyXG4iLCJpbXBvcnQgc3RhdGUgZnJvbSBcIi4vc3RhdGVcIjtcclxuaW1wb3J0IHN0b3JhZ2UgZnJvbSBcIi4vc3RvcmFnZVwiO1xyXG5pbXBvcnQgdWkgZnJvbSBcIi4vdWlcIjtcclxuXHJcbmNvbnN0IG5ld1Byb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW5ldy1wcm9qZWN0LWZvcm1dXCIpO1xyXG5jb25zdCBuZXdQcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbmV3LXByb2plY3QtaW5wdXRdXCIpO1xyXG5jb25zdCBkZWxldGVQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICBcIltkYXRhLWRlbGV0ZS1wcm9qZWN0LWJ1dHRvbl1cIlxyXG4pO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdCh0aXRsZSkge1xyXG4gIHJldHVybiB7XHJcbiAgICBpZDogRGF0ZS5ub3coKS50b1N0cmluZygpLFxyXG4gICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgdG9kb3M6IFtdLFxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZU5ld1Byb2plY3RTdWJtaXQoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBsZXQgcHJvamVjdHMgPSBzdGF0ZS5nZXRQcm9qZWN0cygpO1xyXG4gIGNvbnN0IHByb2plY3ROYW1lID0gbmV3UHJvamVjdElucHV0LnZhbHVlO1xyXG4gIGlmIChwcm9qZWN0TmFtZSA9PSBudWxsIHx8IHByb2plY3ROYW1lID09PSBcIlwiKSByZXR1cm47XHJcbiAgY29uc3QgcHJvamVjdCA9IGNyZWF0ZVByb2plY3QocHJvamVjdE5hbWUpO1xyXG4gIG5ld1Byb2plY3RJbnB1dC52YWx1ZSA9IG51bGw7XHJcbiAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcclxuICBzdGF0ZS5zZXRQcm9qZWN0cyhwcm9qZWN0cyk7XHJcbiAgbGV0IHNlbGVjdGVkUHJvamVjdElkID0gc3RhdGUuZ2V0U2VsZWN0ZWRQcm9qZWN0SWQoKTtcclxuICBzZWxlY3RlZFByb2plY3RJZCA9IHByb2plY3QuaWQ7XHJcbiAgc3RhdGUuc2V0U2VsZWN0ZWRQcm9qZWN0SWQoc2VsZWN0ZWRQcm9qZWN0SWQpO1xyXG4gIHN0b3JhZ2Uuc2F2ZSgpO1xyXG4gIHVpLnJlbmRlcigpO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVQcm9qZWN0VGl0bGUocHJvamVjdElkLCBuZXdUaXRsZSkge1xyXG4gIGxldCBwcm9qZWN0cyA9IHN0YXRlLmdldFByb2plY3RzKCk7XHJcbiAgY29uc3QgcHJvamVjdCA9IHByb2plY3RzLmZpbmQoKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IHByb2plY3RJZCk7XHJcbiAgaWYgKHByb2plY3QpIHtcclxuICAgIHByb2plY3QudGl0bGUgPSBuZXdUaXRsZTtcclxuICAgIHN0YXRlLnNldFByb2plY3RzKHByb2plY3RzKTtcclxuICAgIHN0b3JhZ2Uuc2F2ZSgpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlRGVsZXRlUHJvamVjdCgpIHtcclxuICBsZXQgcHJvamVjdHMgPSBzdGF0ZS5nZXRQcm9qZWN0cygpO1xyXG4gIGxldCBzZWxlY3RlZFByb2plY3RJZCA9IHN0YXRlLmdldFNlbGVjdGVkUHJvamVjdElkKCk7XHJcbiAgY29uc3QgcHJvamVjdEluZGV4ID0gcHJvamVjdHMuZmluZEluZGV4KFxyXG4gICAgKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IHNlbGVjdGVkUHJvamVjdElkXHJcbiAgKTtcclxuXHJcbiAgcHJvamVjdHMgPSBwcm9qZWN0cy5maWx0ZXIoKHByb2plY3QpID0+IHByb2plY3QuaWQgIT09IHNlbGVjdGVkUHJvamVjdElkKTtcclxuXHJcbiAgbGV0IG5ld1NlbGVjdGVkUHJvamVjdElkID0gbnVsbDtcclxuICBpZiAocHJvamVjdHMubGVuZ3RoID4gMCkge1xyXG4gICAgaWYgKHByb2plY3RJbmRleCA+IDApIHtcclxuICAgICAgbmV3U2VsZWN0ZWRQcm9qZWN0SWQgPSBwcm9qZWN0c1twcm9qZWN0SW5kZXggLSAxXS5pZDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG5ld1NlbGVjdGVkUHJvamVjdElkID0gcHJvamVjdHNbMF0uaWQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHNlbGVjdGVkUHJvamVjdElkID0gbmV3U2VsZWN0ZWRQcm9qZWN0SWQ7XHJcbiAgc3RhdGUuc2V0UHJvamVjdHMocHJvamVjdHMpO1xyXG4gIHN0YXRlLnNldFNlbGVjdGVkUHJvamVjdElkKHNlbGVjdGVkUHJvamVjdElkKTtcclxuICBzdG9yYWdlLnNhdmUoKTtcclxuICB1aS5yZW5kZXIoKTtcclxufVxyXG5cclxubmV3UHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVOZXdQcm9qZWN0U3VibWl0KTtcclxuZGVsZXRlUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlRGVsZXRlUHJvamVjdCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgaGFuZGxlTmV3UHJvamVjdFN1Ym1pdCxcclxuICB1cGRhdGVQcm9qZWN0VGl0bGUsXHJcbiAgaGFuZGxlRGVsZXRlUHJvamVjdCxcclxufTtcclxuIiwiLy8gdGFzay4gaXMgYWRkZWQgdG8gYXZvaWQgYW55IGNvbGxpc2lvbnMvY29uZmxpY3RzIHdpdGggdGhlIHN5c3RlbSBmaWxlcyBhbmQgd2Vic2l0ZXNcclxuY29uc3QgTE9DQUxfU1RPUkFHRV9QUk9KRUNUU19LRVkgPSBcInRhc2sucHJvamVjdHNcIjtcclxuY29uc3QgTE9DQUxfU1RPUkFHRV9TRUxFQ1RFRF9QUk9KRUNUX0lEX0tFWSA9IFwidGFzay5zZWxlY3RlZFByb2plY3RJZFwiO1xyXG5cclxubGV0IHByb2plY3RzID1cclxuICBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKExPQ0FMX1NUT1JBR0VfUFJPSkVDVFNfS0VZKSkgfHwgW107XHJcbmxldCBzZWxlY3RlZFByb2plY3RJZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFxyXG4gIExPQ0FMX1NUT1JBR0VfU0VMRUNURURfUFJPSkVDVF9JRF9LRVlcclxuKTtcclxuXHJcbmZ1bmN0aW9uIGdldExvY2FsU3RvcmFnZVByb2plY3RzS2V5KCkge1xyXG4gIHJldHVybiBMT0NBTF9TVE9SQUdFX1BST0pFQ1RTX0tFWTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0TG9jYWxTdG9yYWdlU2VsZWN0ZWRQcm9qZWN0SWRLZXkoKSB7XHJcbiAgcmV0dXJuIExPQ0FMX1NUT1JBR0VfU0VMRUNURURfUFJPSkVDVF9JRF9LRVk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFByb2plY3RzKCkge1xyXG4gIHJldHVybiBwcm9qZWN0cztcclxufVxyXG5cclxuZnVuY3Rpb24gc2V0UHJvamVjdHMobmV3UHJvamVjdHMpIHtcclxuICBwcm9qZWN0cyA9IG5ld1Byb2plY3RzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRTZWxlY3RlZFByb2plY3RJZCgpIHtcclxuICByZXR1cm4gc2VsZWN0ZWRQcm9qZWN0SWQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNldFNlbGVjdGVkUHJvamVjdElkKG5ld1NlbGVjdGVkUHJvamVjdElkKSB7XHJcbiAgc2VsZWN0ZWRQcm9qZWN0SWQgPSBuZXdTZWxlY3RlZFByb2plY3RJZDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGdldExvY2FsU3RvcmFnZVByb2plY3RzS2V5LFxyXG4gIGdldExvY2FsU3RvcmFnZVNlbGVjdGVkUHJvamVjdElkS2V5LFxyXG4gIGdldFByb2plY3RzLFxyXG4gIHNldFByb2plY3RzLFxyXG4gIGdldFNlbGVjdGVkUHJvamVjdElkLFxyXG4gIHNldFNlbGVjdGVkUHJvamVjdElkLFxyXG59O1xyXG4iLCJpbXBvcnQgc3RhdGUgZnJvbSBcIi4vc3RhdGVcIjtcclxuZnVuY3Rpb24gc2F2ZSgpIHtcclxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcclxuICAgIHN0YXRlLmdldExvY2FsU3RvcmFnZVByb2plY3RzS2V5KCksXHJcbiAgICBKU09OLnN0cmluZ2lmeShzdGF0ZS5nZXRQcm9qZWN0cygpKVxyXG4gICk7XHJcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXHJcbiAgICBzdGF0ZS5nZXRMb2NhbFN0b3JhZ2VTZWxlY3RlZFByb2plY3RJZEtleSgpLFxyXG4gICAgc3RhdGUuZ2V0U2VsZWN0ZWRQcm9qZWN0SWQoKVxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBzYXZlLFxyXG59O1xyXG4iLCJpbXBvcnQgc3RvcmFnZSBmcm9tIFwiLi9zdG9yYWdlXCI7XHJcbmltcG9ydCB1aSBmcm9tIFwiLi91aVwiO1xyXG5pbXBvcnQgc3RhdGUgZnJvbSBcIi4vc3RhdGVcIjtcclxuaW1wb3J0IG1vZGFsIGZyb20gXCIuL21vZGFsXCI7XHJcblxyXG5jb25zdCB0b2Rvc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10b2Rvc11cIik7XHJcbmNvbnN0IG5ld1RvZG9Gb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW5ldy10b2RvLWZvcm1dXCIpO1xyXG5jb25zdCBuZXdUb2RvVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbmV3LXRvZG8tdGl0bGVdXCIpO1xyXG5jb25zdCBuZXdUb2RvRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gIFwiW2RhdGEtbmV3LXRvZG8tZGVzY3JpcHRpb25dXCJcclxuKTtcclxuY29uc3QgbmV3VG9kb0R1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtbmV3LXRvZG8tZHVlXVwiKTtcclxuY29uc3QgbmV3VG9kb1ByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLW5ldy10b2RvLXByaW9yaXR5XVwiKTtcclxuY29uc3QgY2xlYXJDb21wbGV0ZVRvZG9zQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICBcIltkYXRhLWNsZWFyLWNvbXBsZXRlLXRhc2tzLWJ1dHRvbl1cIlxyXG4pO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlVG9kbyh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGlkOiBEYXRlLm5vdygpLnRvU3RyaW5nKCksXHJcbiAgICB0aXRsZTogdGl0bGUsXHJcbiAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb24sXHJcbiAgICBkdWVEYXRlOiBkdWVEYXRlLFxyXG4gICAgcHJpb3JpdHk6IHByaW9yaXR5LFxyXG4gICAgY29tcGxldGU6IGZhbHNlLFxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZU5ld1RvZG9TdWJtaXQoZSkge1xyXG4gIGUucHJldmVudERlZmF1bHQoKTtcclxuICBjb25zdCB0b2RvVGl0bGUgPSBuZXdUb2RvVGl0bGUudmFsdWU7XHJcbiAgY29uc3QgdG9kb0Rlc2NyaXB0aW9uID0gbmV3VG9kb0Rlc2NyaXB0aW9uLnZhbHVlO1xyXG4gIGNvbnN0IHRvZG9EdWVEYXRlID0gbmV3VG9kb0R1ZURhdGUudmFsdWU7XHJcbiAgY29uc3QgdG9kb1ByaW9yaXR5ID0gbmV3VG9kb1ByaW9yaXR5LnZhbHVlO1xyXG5cclxuICBpZiAodG9kb1RpdGxlID09IG51bGwgfHwgdG9kb1RpdGxlID09PSBcIlwiKSByZXR1cm47XHJcblxyXG4gIGNvbnN0IHRvZG8gPSBjcmVhdGVUb2RvKFxyXG4gICAgdG9kb1RpdGxlLFxyXG4gICAgdG9kb0Rlc2NyaXB0aW9uLFxyXG4gICAgdG9kb0R1ZURhdGUsXHJcbiAgICB0b2RvUHJpb3JpdHlcclxuICApO1xyXG4gIG5ld1RvZG9UaXRsZS52YWx1ZSA9IG51bGw7XHJcbiAgbmV3VG9kb0Rlc2NyaXB0aW9uLnZhbHVlID0gbnVsbDtcclxuICBuZXdUb2RvRHVlRGF0ZS52YWx1ZSA9IG51bGw7XHJcbiAgbmV3VG9kb1ByaW9yaXR5LnZhbHVlID0gbnVsbDtcclxuICBjb25zdCBwcm9qZWN0cyA9IHN0YXRlLmdldFByb2plY3RzKCk7XHJcbiAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0SWQgPSBzdGF0ZS5nZXRTZWxlY3RlZFByb2plY3RJZCgpO1xyXG4gIGNvbnN0IHNlbGVjdGVkUHJvamVjdCA9IHByb2plY3RzLmZpbmQoXHJcbiAgICAocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gc2VsZWN0ZWRQcm9qZWN0SWRcclxuICApO1xyXG4gIHNlbGVjdGVkUHJvamVjdC50b2Rvcy5wdXNoKHRvZG8pO1xyXG4gIHN0b3JhZ2Uuc2F2ZSgpO1xyXG4gIHVpLnJlbmRlcigpO1xyXG4gIG1vZGFsLmNsb3NlTW9kYWwoXCJuZXctdG9kb1wiKTtcclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlVG9kb0l0ZW1DaGVjayhlKSB7XHJcbiAgaWYgKFxyXG4gICAgZS50YXJnZXQudGFnTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcImlucHV0XCIgJiZcclxuICAgIGUudGFyZ2V0LnR5cGUgPT09IFwiY2hlY2tib3hcIlxyXG4gICkge1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0SWQgPSBzdGF0ZS5nZXRTZWxlY3RlZFByb2plY3RJZCgpO1xyXG4gICAgY29uc3QgcHJvamVjdHMgPSBzdGF0ZS5nZXRQcm9qZWN0cygpO1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0ID0gcHJvamVjdHMuZmluZChcclxuICAgICAgKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IHNlbGVjdGVkUHJvamVjdElkXHJcbiAgICApO1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRUYXNrID0gc2VsZWN0ZWRQcm9qZWN0LnRvZG9zLmZpbmQoXHJcbiAgICAgICh0YXNrKSA9PiB0YXNrLmlkID09PSBlLnRhcmdldC5pZFxyXG4gICAgKTtcclxuICAgIHNlbGVjdGVkVGFzay5jb21wbGV0ZSA9IGUudGFyZ2V0LmNoZWNrZWQ7XHJcbiAgICBzdG9yYWdlLnNhdmUoKTtcclxuICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZVRvZG9FbGVtZW50KHRvZG9JZCwga2V5LCB2YWx1ZSkge1xyXG4gIGNvbnN0IHNlbGVjdGVkUHJvamVjdElkID0gc3RhdGUuZ2V0U2VsZWN0ZWRQcm9qZWN0SWQoKTtcclxuICBjb25zdCBwcm9qZWN0cyA9IHN0YXRlLmdldFByb2plY3RzKCk7XHJcbiAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0ID0gcHJvamVjdHMuZmluZChcclxuICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBzZWxlY3RlZFByb2plY3RJZFxyXG4gICk7XHJcbiAgY29uc3Qgc2VsZWN0ZWRUb2RvID0gc2VsZWN0ZWRQcm9qZWN0LnRvZG9zLmZpbmQoKHRvZG8pID0+IHRvZG8uaWQgPT09IHRvZG9JZCk7XHJcblxyXG4gIHNlbGVjdGVkVG9kb1trZXldID0gdmFsdWU7XHJcbiAgc3RvcmFnZS5zYXZlKCk7XHJcbiAgdWkucmVuZGVyKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGhhbmRsZUNsZWFyQ29tcGxldGVUb2RvcygpIHtcclxuICBjb25zdCBwcm9qZWN0cyA9IHN0YXRlLmdldFByb2plY3RzKCk7XHJcbiAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0SWQgPSBzdGF0ZS5nZXRTZWxlY3RlZFByb2plY3RJZCgpO1xyXG4gIGNvbnN0IHNlbGVjdGVkUHJvamVjdCA9IHByb2plY3RzLmZpbmQoXHJcbiAgICAocHJvamVjdCkgPT4gcHJvamVjdC5pZCA9PT0gc2VsZWN0ZWRQcm9qZWN0SWRcclxuICApO1xyXG4gIHNlbGVjdGVkUHJvamVjdC50b2RvcyA9IHNlbGVjdGVkUHJvamVjdC50b2Rvcy5maWx0ZXIoXHJcbiAgICAodGFzaykgPT4gIXRhc2suY29tcGxldGVcclxuICApO1xyXG4gIHN0b3JhZ2Uuc2F2ZSgpO1xyXG4gIHVpLnJlbmRlcigpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVEZWxldGVUb2RvSXRlbSh0b2RvSWQpIHtcclxuICBjb25zdCBzZWxlY3RlZFByb2plY3RJZCA9IHN0YXRlLmdldFNlbGVjdGVkUHJvamVjdElkKCk7XHJcbiAgbGV0IHByb2plY3RzID0gc3RhdGUuZ2V0UHJvamVjdHMoKTtcclxuICBjb25zdCBzZWxlY3RlZFByb2plY3QgPSBwcm9qZWN0cy5maW5kKFxyXG4gICAgKHByb2plY3QpID0+IHByb2plY3QuaWQgPT09IHNlbGVjdGVkUHJvamVjdElkXHJcbiAgKTtcclxuXHJcbiAgc2VsZWN0ZWRQcm9qZWN0LnRvZG9zID0gc2VsZWN0ZWRQcm9qZWN0LnRvZG9zLmZpbHRlcihcclxuICAgICh0b2RvKSA9PiB0b2RvLmlkICE9PSB0b2RvSWRcclxuICApO1xyXG4gIHN0YXRlLnNldFByb2plY3RzKHByb2plY3RzKTtcclxuICBzdG9yYWdlLnNhdmUoKTtcclxuICB1aS5yZW5kZXIoKTtcclxuICBtb2RhbC5jbG9zZU1vZGFsKFwidmlldy10b2RvXCIpO1xyXG59XHJcblxyXG4vLyB0b2Rvc0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlVG9kb0l0ZW1DaGVjayk7XHJcblxyXG5uZXdUb2RvRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZU5ld1RvZG9TdWJtaXQpO1xyXG5jbGVhckNvbXBsZXRlVG9kb3NCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGhhbmRsZUNsZWFyQ29tcGxldGVUb2Rvcyk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgaGFuZGxlTmV3VG9kb1N1Ym1pdCxcclxuICBoYW5kbGVUb2RvSXRlbUNoZWNrLFxyXG4gIHVwZGF0ZVRvZG9FbGVtZW50LFxyXG4gIGhhbmRsZUNsZWFyQ29tcGxldGVUb2RvcyxcclxuICBoYW5kbGVEZWxldGVUb2RvSXRlbSxcclxufTtcclxuIiwiaW1wb3J0IHN0YXRlIGZyb20gXCIuL3N0YXRlXCI7XHJcbmltcG9ydCBzdG9yYWdlIGZyb20gXCIuL3N0b3JhZ2VcIjtcclxuaW1wb3J0IHByb2plY3RGdW5jdGlvbnMgZnJvbSBcIi4vcHJvamVjdEZ1bmN0aW9uc1wiO1xyXG5pbXBvcnQgdG9kb0Z1bmN0aW9ucyBmcm9tIFwiLi90b2RvRnVuY3Rpb25zXCI7XHJcbmltcG9ydCBtb2RhbCBmcm9tIFwiLi9tb2RhbFwiO1xyXG5cclxuY29uc3QgcHJvamVjdHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtcHJvamVjdHNdXCIpO1xyXG5jb25zdCB0b2Rvc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10b2Rvc11cIik7XHJcbmNvbnN0IHRvZG9UZW1wbGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kby10ZW1wbGF0ZVwiKTtcclxuY29uc3QgcHJvamVjdERpc3BsYXlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxyXG4gIFwiW2RhdGEtcHJvamVjdC1kaXNwbGF5LWNvbnRhaW5lcl1cIlxyXG4pO1xyXG5jb25zdCBwcm9qZWN0VGl0bGVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXByb2plY3QtdGl0bGVdXCIpO1xyXG5jb25zdCBwcm9qZWN0VGl0bGVFZGl0QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcclxuICBcIltkYXRhLXByb2plY3QtdGl0bGUtZWRpdC1idG5dXCJcclxuKTtcclxuXHJcbmNvbnN0IHByaW9yaXR5TWFwcGluZyA9IHtcclxuICBncmVlbjogXCJMb3dcIixcclxuICBvcmFuZ2U6IFwiTWVkaXVtXCIsXHJcbiAgcmVkOiBcIkhpZ2hcIixcclxufTtcclxuXHJcbmxldCBjdXJyZW50VG9kb0lkID0gbnVsbDtcclxuXHJcbmZ1bmN0aW9uIGNsZWFyRWxlbWVudChlbGVtZW50KSB7XHJcbiAgd2hpbGUgKGVsZW1lbnQuZmlyc3RDaGlsZCkge1xyXG4gICAgZWxlbWVudC5yZW1vdmVDaGlsZChlbGVtZW50LmZpcnN0Q2hpbGQpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVuZGVyUHJvamVjdHMoKSB7XHJcbiAgY29uc3QgcHJvamVjdHMgPSBzdGF0ZS5nZXRQcm9qZWN0cygpO1xyXG4gIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcclxuICAgIGNvbnN0IHByb2plY3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgcHJvamVjdEl0ZW0uZGF0YXNldC5wcm9qZWN0SWQgPSBwcm9qZWN0LmlkO1xyXG4gICAgcHJvamVjdEl0ZW0uY2xhc3NMaXN0LmFkZChcInByb2plY3QtaXRlbVwiKTtcclxuICAgIHByb2plY3RJdGVtLmlubmVyVGV4dCA9IHByb2plY3QudGl0bGU7XHJcbiAgICBwcm9qZWN0c0NvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0SXRlbSk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlclRvZG9zKHNlbGVjdGVkUHJvamVjdCkge1xyXG4gIHNlbGVjdGVkUHJvamVjdC50b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XHJcbiAgICBjb25zdCB0b2RvRWxlbWVudCA9IGRvY3VtZW50LmltcG9ydE5vZGUodG9kb1RlbXBsYXRlLmNvbnRlbnQsIHRydWUpO1xyXG4gICAgY29uc3QgY2hlY2tib3ggPSB0b2RvRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdG9kby1jaGVja2JveF1cIik7XHJcbiAgICBjaGVja2JveC5pZCA9IHRvZG8uaWQ7XHJcbiAgICBjaGVja2JveC5jaGVja2VkID0gdG9kby5jb21wbGV0ZTtcclxuICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2RvRnVuY3Rpb25zLmhhbmRsZVRvZG9JdGVtQ2hlY2spO1xyXG4gICAgY29uc3QgbGFiZWwgPSB0b2RvRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdG9kby1sYWJlbF1cIik7XHJcbiAgICBsYWJlbC5odG1sRm9yID0gdG9kby5pZDtcclxuICAgIGxhYmVsLmFwcGVuZCh0b2RvLnRpdGxlKTtcclxuICAgIGxhYmVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4gaGFuZGxlVmlld1RvZG9EZXRhaWxzKGUpKTtcclxuICAgIGNvbnN0IGR1ZURhdGUgPSB0b2RvRWxlbWVudC5nZXRFbGVtZW50QnlJZChcImR1ZVwiKTtcclxuICAgIGR1ZURhdGUuaW5uZXJUZXh0ID0gYER1ZSBkYXRlOiAke3RvZG8uZHVlRGF0ZX1gO1xyXG4gICAgY29uc3QgcHJpb3JpdHkgPSB0b2RvRWxlbWVudC5nZXRFbGVtZW50QnlJZChcInByaW9yaXR5XCIpO1xyXG4gICAgcHJpb3JpdHkuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gdG9kby5wcmlvcml0eTtcclxuXHJcbiAgICB0b2Rvc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvRWxlbWVudCk7XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlbmRlcigpIHtcclxuICBjbGVhckVsZW1lbnQocHJvamVjdHNDb250YWluZXIpO1xyXG4gIHJlbmRlclByb2plY3RzKCk7XHJcbiAgY29uc3QgcHJvamVjdHMgPSBzdGF0ZS5nZXRQcm9qZWN0cygpO1xyXG4gIGNvbnN0IHNlbGVjdGVkUHJvamVjdElkID0gc3RhdGUuZ2V0U2VsZWN0ZWRQcm9qZWN0SWQoKTtcclxuXHJcbiAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0ID0gcHJvamVjdHMuZmluZChcclxuICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBzZWxlY3RlZFByb2plY3RJZFxyXG4gICk7XHJcbiAgaWYgKHNlbGVjdGVkUHJvamVjdElkID09IG51bGwgfHwgc2VsZWN0ZWRQcm9qZWN0ID09IG51bGwpIHtcclxuICAgIHByb2plY3REaXNwbGF5Q29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICB9IGVsc2Uge1xyXG4gICAgcHJvamVjdERpc3BsYXlDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiXCI7XHJcbiAgICBwcm9qZWN0VGl0bGVFbGVtZW50LmlubmVyVGV4dCA9IHNlbGVjdGVkUHJvamVjdC50aXRsZTtcclxuICAgIGNsZWFyRWxlbWVudCh0b2Rvc0NvbnRhaW5lcik7XHJcbiAgICByZW5kZXJUb2RvcyhzZWxlY3RlZFByb2plY3QpO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlRWRpdFByb2plY3RUaXRsZSgpIHtcclxuICBjb25zdCBpc0VkaXRpbmcgPSBwcm9qZWN0VGl0bGVFZGl0QnRuLmlubmVyVGV4dCA9PT0gXCJTYXZlXCI7XHJcbiAgaWYgKGlzRWRpdGluZykge1xyXG4gICAgY29uc3QgcHJvamVjdFRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtdGl0bGUtaW5wdXRcIik7XHJcbiAgICBjb25zdCBuZXdUaXRsZSA9IHByb2plY3RUaXRsZUlucHV0LnZhbHVlLnRyaW0oKTtcclxuICAgIGlmIChuZXdUaXRsZSAmJiBuZXdUaXRsZSAhPT0gcHJvamVjdFRpdGxlRWxlbWVudC5pbm5lclRleHQpIHtcclxuICAgICAgcHJvamVjdEZ1bmN0aW9ucy51cGRhdGVQcm9qZWN0VGl0bGUoXHJcbiAgICAgICAgc3RhdGUuZ2V0U2VsZWN0ZWRQcm9qZWN0SWQoKSxcclxuICAgICAgICBuZXdUaXRsZVxyXG4gICAgICApO1xyXG4gICAgfVxyXG4gICAgcHJvamVjdFRpdGxlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgcHJvamVjdFRpdGxlRWRpdEJ0bi5pbm5lclRleHQgPSBcIkVkaXRcIjtcclxuICAgIHByb2plY3RUaXRsZUlucHV0LnJlbW92ZSgpO1xyXG4gICAgcmVuZGVyKCk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IHByb2plY3RUaXRsZUVsZW1lbnQuaW5uZXJUZXh0O1xyXG4gICAgcHJvamVjdFRpdGxlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcblxyXG4gICAgY29uc3QgcHJvamVjdFRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBwcm9qZWN0VGl0bGVJbnB1dC50eXBlID0gXCJ0ZXh0XCI7XHJcbiAgICBwcm9qZWN0VGl0bGVJbnB1dC52YWx1ZSA9IHByb2plY3RUaXRsZTtcclxuICAgIHByb2plY3RUaXRsZUlucHV0LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LXRpdGxlLWlucHV0XCIpO1xyXG5cclxuICAgIHByb2plY3RUaXRsZUVsZW1lbnQucGFyZW50RWxlbWVudC5pbnNlcnRCZWZvcmUoXHJcbiAgICAgIHByb2plY3RUaXRsZUlucHV0LFxyXG4gICAgICBwcm9qZWN0VGl0bGVFZGl0QnRuXHJcbiAgICApO1xyXG4gICAgcHJvamVjdFRpdGxlSW5wdXQuZm9jdXMoKTtcclxuICAgIHByb2plY3RUaXRsZUVkaXRCdG4uaW5uZXJUZXh0ID0gXCJTYXZlXCI7XHJcbiAgICBwcm9qZWN0VGl0bGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgKGUpID0+IHtcclxuICAgICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIpIHtcclxuICAgICAgICBwcm9qZWN0VGl0bGVFZGl0QnRuLmNsaWNrKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZnVuY3Rpb24gaGFuZGxlVmlld1RvZG9EZXRhaWxzKGUpIHtcclxuICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gIGNvbnN0IHNlbGVjdGVkUHJvamVjdElkID0gc3RhdGUuZ2V0U2VsZWN0ZWRQcm9qZWN0SWQoKTtcclxuICBjb25zdCBwcm9qZWN0cyA9IHN0YXRlLmdldFByb2plY3RzKCk7XHJcbiAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0ID0gcHJvamVjdHMuZmluZChcclxuICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkID09PSBzZWxlY3RlZFByb2plY3RJZFxyXG4gICk7XHJcbiAgY29uc3QgdG9kb0lkID0gZS5jdXJyZW50VGFyZ2V0LmdldEF0dHJpYnV0ZShcImZvclwiKTtcclxuICBjdXJyZW50VG9kb0lkID0gdG9kb0lkO1xyXG4gIGNvbnN0IHNlbGVjdGVkVG9kbyA9IHNlbGVjdGVkUHJvamVjdC50b2Rvcy5maW5kKCh0b2RvKSA9PiB0b2RvLmlkID09PSB0b2RvSWQpO1xyXG5cclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdG9kby10aXRsZV1cIikuaW5uZXJUZXh0ID0gc2VsZWN0ZWRUb2RvLnRpdGxlO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10b2RvLXRpdGxlLWlucHV0XVwiKS52YWx1ZSA9IHNlbGVjdGVkVG9kby50aXRsZTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdG9kby1kZXNjcmlwdGlvbl1cIikuaW5uZXJUZXh0ID1cclxuICAgIHNlbGVjdGVkVG9kby5kZXNjcmlwdGlvbjtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdG9kby1kZXNjcmlwdGlvbi1pbnB1dF1cIikudmFsdWUgPVxyXG4gICAgc2VsZWN0ZWRUb2RvLmRlc2NyaXB0aW9uO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXHJcbiAgICBcIltkYXRhLXRvZG8tZHVlLWRhdGVdXCJcclxuICApLmlubmVyVGV4dCA9IGBEdWUgZGF0ZTogJHtzZWxlY3RlZFRvZG8uZHVlRGF0ZX1gO1xyXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10b2RvLWR1ZS1kYXRlLWlucHV0XVwiKS52YWx1ZSA9XHJcbiAgICBzZWxlY3RlZFRvZG8uZHVlRGF0ZTtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdG9kby1wcmlvcml0eV1cIikuaW5uZXJUZXh0ID0gYFByaW9yaXR5OiAke1xyXG4gICAgcHJpb3JpdHlNYXBwaW5nW3NlbGVjdGVkVG9kby5wcmlvcml0eV1cclxuICB9YDtcclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdG9kby1wcmlvcml0eS1pbnB1dF1cIikudmFsdWUgPVxyXG4gICAgc2VsZWN0ZWRUb2RvLnByaW9yaXR5O1xyXG5cclxuICBjb25zdCBkZWxldGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtZGVsZXRlLXRvZG8tYnV0dG9uXVwiKTtcclxuICBkZWxldGVCdXR0b24ub25jbGljayA9ICgpID0+IHRvZG9GdW5jdGlvbnMuaGFuZGxlRGVsZXRlVG9kb0l0ZW0odG9kb0lkKTtcclxuXHJcbiAgbW9kYWwub3Blbk1vZGFsKFwidmlldy10b2RvXCIpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBoYW5kbGVFZGl0VG9kb0VsZW1lbnQoXHJcbiAgZWRpdEJ0bixcclxuICBkaXNwbGF5RWxlbWVudCxcclxuICBpbnB1dEVsZW1lbnQsXHJcbiAgc2F2ZUNhbGxiYWNrXHJcbikge1xyXG4gIGNvbnN0IGlzRWRpdGluZyA9IGVkaXRCdG4uaW5uZXJUZXh0ID09PSBcIlNhdmVcIjtcclxuICBpZiAoaXNFZGl0aW5nKSB7XHJcbiAgICBjb25zdCBuZXdWYWx1ZSA9IGlucHV0RWxlbWVudC52YWx1ZS50cmltKCk7XHJcbiAgICBzYXZlQ2FsbGJhY2sobmV3VmFsdWUpO1xyXG4gICAgZGlzcGxheUVsZW1lbnQuaW5uZXJUZXh0ID0gbmV3VmFsdWU7XHJcbiAgICBkaXNwbGF5RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICBlZGl0QnRuLmlubmVyVGV4dCA9IFwiRWRpdFwiO1xyXG4gICAgc3RvcmFnZS5zYXZlKCk7XHJcbiAgICByZW5kZXIoKTtcclxuICB9IGVsc2Uge1xyXG4gICAgaW5wdXRFbGVtZW50LnZhbHVlID0gZGlzcGxheUVsZW1lbnQuaW5uZXJUZXh0O1xyXG4gICAgZGlzcGxheUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XHJcbiAgICBpbnB1dEVsZW1lbnQuZm9jdXMoKTtcclxuICAgIGVkaXRCdG4uaW5uZXJUZXh0ID0gXCJTYXZlXCI7XHJcbiAgfVxyXG59XHJcblxyXG5kb2N1bWVudFxyXG4gIC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtZWRpdC10b2RvLXRpdGxlXVwiKVxyXG4gIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICAgIGhhbmRsZUVkaXRUb2RvRWxlbWVudChcclxuICAgICAgZS50YXJnZXQsXHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10b2RvLXRpdGxlXVwiKSxcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXRvZG8tdGl0bGUtaW5wdXRdXCIpLFxyXG4gICAgICAobmV3VmFsdWUpID0+XHJcbiAgICAgICAgdG9kb0Z1bmN0aW9ucy51cGRhdGVUb2RvRWxlbWVudChjdXJyZW50VG9kb0lkLCBcInRpdGxlXCIsIG5ld1ZhbHVlKVxyXG4gICAgKTtcclxuICB9KTtcclxuXHJcbmRvY3VtZW50XHJcbiAgLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1lZGl0LXRvZG8tZGVzY3JpcHRpb25dXCIpXHJcbiAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgaGFuZGxlRWRpdFRvZG9FbGVtZW50KFxyXG4gICAgICBlLnRhcmdldCxcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXRvZG8tZGVzY3JpcHRpb25dXCIpLFxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdG9kby1kZXNjcmlwdGlvbi1pbnB1dF1cIiksXHJcbiAgICAgIChuZXdWYWx1ZSkgPT5cclxuICAgICAgICB0b2RvRnVuY3Rpb25zLnVwZGF0ZVRvZG9FbGVtZW50KGN1cnJlbnRUb2RvSWQsIFwiZGVzY3JpcHRpb25cIiwgbmV3VmFsdWUpXHJcbiAgICApO1xyXG4gIH0pO1xyXG5cclxuZG9jdW1lbnRcclxuICAucXVlcnlTZWxlY3RvcihcIltkYXRhLWVkaXQtdG9kby1kdWUtZGF0ZV1cIilcclxuICAuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICBoYW5kbGVFZGl0VG9kb0VsZW1lbnQoXHJcbiAgICAgIGUudGFyZ2V0LFxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdG9kby1kdWUtZGF0ZV1cIiksXHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS10b2RvLWR1ZS1kYXRlLWlucHV0XVwiKSxcclxuICAgICAgKG5ld1ZhbHVlKSA9PlxyXG4gICAgICAgIHRvZG9GdW5jdGlvbnMudXBkYXRlVG9kb0VsZW1lbnQoY3VycmVudFRvZG9JZCwgXCJkdWVEYXRlXCIsIG5ld1ZhbHVlKVxyXG4gICAgKTtcclxuICB9KTtcclxuXHJcbmRvY3VtZW50XHJcbiAgLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1lZGl0LXRvZG8tcHJpb3JpdHldXCIpXHJcbiAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4gICAgaGFuZGxlRWRpdFRvZG9FbGVtZW50KFxyXG4gICAgICBlLnRhcmdldCxcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLXRvZG8tcHJpb3JpdHldXCIpLFxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdG9kby1wcmlvcml0eS1pbnB1dF1cIiksXHJcbiAgICAgIChuZXdWYWx1ZSkgPT5cclxuICAgICAgICB0b2RvRnVuY3Rpb25zLnVwZGF0ZVRvZG9FbGVtZW50KGN1cnJlbnRUb2RvSWQsIFwicHJpb3JpdHlcIiwgbmV3VmFsdWUpXHJcbiAgICApO1xyXG4gIH0pO1xyXG5cclxucHJvamVjdFRpdGxlRWRpdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlRWRpdFByb2plY3RUaXRsZSk7XHJcblxyXG5kb2N1bWVudFxyXG4gIC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdG9kby10aXRsZS1pbnB1dF1cIilcclxuICAuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcclxuICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1lZGl0LXRvZG8tdGl0bGVdXCIpLmNsaWNrKCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG5kb2N1bWVudFxyXG4gIC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdG9kby1kZXNjcmlwdGlvbi1pbnB1dF1cIilcclxuICAuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcclxuICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1lZGl0LXRvZG8tZGVzY3JpcHRpb25dXCIpLmNsaWNrKCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG5kb2N1bWVudFxyXG4gIC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdG9kby1kdWUtZGF0ZS1pbnB1dF1cIilcclxuICAuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcclxuICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1lZGl0LXRvZG8tZHVlLWRhdGVdXCIpLmNsaWNrKCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG5kb2N1bWVudFxyXG4gIC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtdG9kby1wcmlvcml0eS1pbnB1dF1cIilcclxuICAuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcclxuICAgIGlmIChlLmtleSA9PT0gXCJFbnRlclwiKSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1lZGl0LXRvZG8tcHJpb3JpdHldXCIpLmNsaWNrKCk7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG5wcm9qZWN0c0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcclxuICBsZXQgc2VsZWN0ZWRQcm9qZWN0SWQgPSBzdGF0ZS5nZXRTZWxlY3RlZFByb2plY3RJZCgpO1xyXG4gIGlmIChlLnRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwibGlcIikge1xyXG4gICAgc2VsZWN0ZWRQcm9qZWN0SWQgPSBlLnRhcmdldC5kYXRhc2V0LnByb2plY3RJZDtcclxuICAgIHN0YXRlLnNldFNlbGVjdGVkUHJvamVjdElkKHNlbGVjdGVkUHJvamVjdElkKTtcclxuICAgIHN0b3JhZ2Uuc2F2ZSgpO1xyXG4gICAgcmVuZGVyKCk7XHJcbiAgfVxyXG59KTtcclxuXHJcbi8vIHRvZG9zQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xyXG4vLyAgIGlmIChlLnRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwibGFiZWxcIikge1xyXG4vLyAgICAgaGFuZGxlVmlld1RvZG9EZXRhaWxzKGUpO1xyXG4vLyAgIH1cclxuLy8gfSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgdG9kb3NDb250YWluZXIsXHJcbiAgY2xlYXJFbGVtZW50LFxyXG4gIHJlbmRlclByb2plY3RzLFxyXG4gIHJlbmRlclRvZG9zLFxyXG4gIHJlbmRlcixcclxufTtcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcclxuaW1wb3J0IG1vZGFsIGZyb20gXCIuL21vZHVsZXMvbW9kYWxcIjtcclxuaW1wb3J0IHN0YXRlIGZyb20gXCIuL21vZHVsZXMvc3RhdGVcIjtcclxuaW1wb3J0IHN0b3JhZ2UgZnJvbSBcIi4vbW9kdWxlcy9zdG9yYWdlXCI7XHJcbmltcG9ydCB1aSBmcm9tIFwiLi9tb2R1bGVzL3VpXCI7XHJcbmltcG9ydCBwcm9qZWN0RnVuY3Rpb25zIGZyb20gXCIuL21vZHVsZXMvcHJvamVjdEZ1bmN0aW9uc1wiO1xyXG5pbXBvcnQgdG9kb0Z1bmN0aW9ucyBmcm9tIFwiLi9tb2R1bGVzL3RvZG9GdW5jdGlvbnNcIjtcclxuXHJcbm1vZGFsLnNldHVwT3ZlcmxheUxpc3RlbmVyKCk7XHJcbm1vZGFsLnNldHVwRXNjYXBlTGlzdGVuZXIoKTtcclxuXHJcbnVpLnJlbmRlcigpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=