(this["webpackJsonpchripr"] = this["webpackJsonpchripr"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/App.css ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body {\r\n  background: rgb(0, 32, 50);\r\n  margin: 0;\r\n}\r\n* {\r\n  scrollbar-width: none;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n.searchPage,\r\n.homePage,\r\n.aboutPage {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 15vh auto 0 auto;\r\n  overflow-x: scroll;\r\n}\r\n", "",{"version":3,"sources":["webpack://src/App.css"],"names":[],"mappings":"AAAA;EACE,0BAA0B;EAC1B,SAAS;AACX;AACA;EACE,qBAAqB;AACvB;;AAEA;EACE,aAAa;AACf;;AAEA;;;EAGE,sBAAsB;AACxB;AACA;;;EAGE,aAAa;EACb,sBAAsB;EACtB,wBAAwB;EACxB,kBAAkB;AACpB","sourcesContent":["body {\r\n  background: rgb(0, 32, 50);\r\n  margin: 0;\r\n}\r\n* {\r\n  scrollbar-width: none;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n  display: none;\r\n}\r\n\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n.searchPage,\r\n.homePage,\r\n.aboutPage {\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: 15vh auto 0 auto;\r\n  overflow-x: scroll;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Sidebar.css":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/components/Sidebar.css ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".quill-logo {\r\n  padding: 0;\r\n  display: block;\r\n  height: 14vh;\r\n  margin-inline: auto;\r\n  margin-block: 1.5em;\r\n}\r\n.quill-logo:hover {\r\n  opacity: 0.5;\r\n}\r\n\r\n.sidebar {\r\n  position: fixed;\r\n  height: 100vh;\r\n  width: 18vw;\r\n  background: rgb(0, 32, 50);\r\n  border-right: 0.005em solid rgb(80, 80, 90);\r\n  z-index: 50;\r\n  top: 0;\r\n}\r\n.nav-menu {\r\n  display: flex;\r\n  flex-direction: column;\r\n  grid-gap: 6em;\r\n  gap: 6em;\r\n  margin-top: 7em;\r\n  list-style: none;\r\n}\r\n.nav-links {\r\n  display: flex;\r\n  font-size: 5.5vh;\r\n  color: white;\r\n  margin-inline: auto;\r\n}\r\n.nav-links:hover {\r\n  color: skyblue;\r\n  padding-bottom: 0.2em;\r\n  border-bottom: 4px solid #fff;\r\n  transition: all 0.4s ease-out;\r\n}\r\n.is-active {\r\n  color: skyblue;\r\n  padding-bottom: 0.15em;\r\n  border-bottom: 4px solid #fff;\r\n  transition: all 0.4s ease-out;\r\n}\r\n.fa-bars {\r\n  color: #fff;\r\n}\r\n.nav-links-mobile {\r\n  display: none;\r\n}\r\n", "",{"version":3,"sources":["webpack://src/components/Sidebar.css"],"names":[],"mappings":"AAAA;EACE,UAAU;EACV,cAAc;EACd,YAAY;EACZ,mBAAmB;EACnB,mBAAmB;AACrB;AACA;EACE,YAAY;AACd;;AAEA;EACE,eAAe;EACf,aAAa;EACb,WAAW;EACX,0BAA0B;EAC1B,2CAA2C;EAC3C,WAAW;EACX,MAAM;AACR;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,aAAQ;EAAR,QAAQ;EACR,eAAe;EACf,gBAAgB;AAClB;AACA;EACE,aAAa;EACb,gBAAgB;EAChB,YAAY;EACZ,mBAAmB;AACrB;AACA;EACE,cAAc;EACd,qBAAqB;EACrB,6BAA6B;EAC7B,6BAA6B;AAC/B;AACA;EACE,cAAc;EACd,sBAAsB;EACtB,6BAA6B;EAC7B,6BAA6B;AAC/B;AACA;EACE,WAAW;AACb;AACA;EACE,aAAa;AACf","sourcesContent":[".quill-logo {\r\n  padding: 0;\r\n  display: block;\r\n  height: 14vh;\r\n  margin-inline: auto;\r\n  margin-block: 1.5em;\r\n}\r\n.quill-logo:hover {\r\n  opacity: 0.5;\r\n}\r\n\r\n.sidebar {\r\n  position: fixed;\r\n  height: 100vh;\r\n  width: 18vw;\r\n  background: rgb(0, 32, 50);\r\n  border-right: 0.005em solid rgb(80, 80, 90);\r\n  z-index: 50;\r\n  top: 0;\r\n}\r\n.nav-menu {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 6em;\r\n  margin-top: 7em;\r\n  list-style: none;\r\n}\r\n.nav-links {\r\n  display: flex;\r\n  font-size: 5.5vh;\r\n  color: white;\r\n  margin-inline: auto;\r\n}\r\n.nav-links:hover {\r\n  color: skyblue;\r\n  padding-bottom: 0.2em;\r\n  border-bottom: 4px solid #fff;\r\n  transition: all 0.4s ease-out;\r\n}\r\n.is-active {\r\n  color: skyblue;\r\n  padding-bottom: 0.15em;\r\n  border-bottom: 4px solid #fff;\r\n  transition: all 0.4s ease-out;\r\n}\r\n.fa-bars {\r\n  color: #fff;\r\n}\r\n.nav-links-mobile {\r\n  display: none;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/about.css":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/pages/about.css ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ":root {\r\n  /* --typewriterSpeed: 5s; */\r\n  --typewriterSpeed: 3.4s;\r\n}\r\n.aboutPage {\r\n  width: 100%;\r\n  display: grid;\r\n  place-content: center;\r\n  text-align: center;\r\n  color: white;\r\n  font-family: 'Trebuchet MS';\r\n  padding-bottom: 10vh;\r\n}\r\n.about {\r\n  margin: 0 4em 0 18em;\r\n}\r\n.aboutH1 {\r\n  margin: 0 auto 0 auto;\r\n  font-size: 3vw;\r\n  position: relative;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n}\r\n.aboutH1::before,\r\n.aboutH1::after {\r\n  content: '';\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n}\r\n.aboutH1::before {\r\n  background-color: rgb(0, 32, 50);\r\n  animation: typewriter var(--typewriterSpeed) steps(32) 1.2s forwards;\r\n}\r\n.aboutH1::after {\r\n  width: 0.2em;\r\n  background: lightsteelblue;\r\n  animation: typewriter var(--typewriterSpeed) steps(32) 1.2s forwards,\r\n    blink 1200ms steps(32) infinite;\r\n}\r\n.aboutH2 {\r\n  font-size: 1.75vw;\r\n  margin: 1.25em auto 0 auto;\r\n  padding: 0 5em 0 5em;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  opacity: 0;\r\n  transform: translateY(3rem);\r\n  animation: fadeIn 2.75s ease calc(var(--typewriterSpeed) + 1s) forwards;\r\n}\r\nul {\r\n  list-style-type: none;\r\n  text-align: left;\r\n  /* margin: 0; */\r\n}\r\n.section2 {\r\n  display: flex;\r\n  margin: 2.75em auto 0 auto;\r\n  justify-content: space-around;\r\n}\r\n.aboutApp {\r\n  font-size: 1.15vw;\r\n  opacity: 0;\r\n  transform: translateY(3rem);\r\n  animation: fadeIn 2.75s ease calc(var(--typewriterSpeed) + 1s) forwards;\r\n}\r\n.aboutDuane {\r\n  opacity: 0;\r\n  transform: translateY(2rem);\r\n  animation: fadeIn 4s ease calc(var(--typewriterSpeed) + 2s) forwards;\r\n}\r\n.duaneImg {\r\n  height: 20vh;\r\n  margin: 0 auto 15px auto;\r\n  border-radius: 400px;\r\n}\r\n.aboutDuane > h2 {\r\n  font-size: 2vw;\r\n  margin: 0 0 0 0;\r\n}\r\n.aboutDuane > h3 {\r\n  font-size: 1.5vw;\r\n  margin: 0 0 1.5em 0;\r\n}\r\n.links {\r\n  display: flex;\r\n  flex-direction: column;\r\n  grid-gap: 0.5em;\r\n  gap: 0.5em;\r\n}\r\n.link {\r\n  font-size: 1.4vw;\r\n  color: ghostwhite;\r\n  text-decoration: none;\r\n}\r\n.link:hover {\r\n  color: skyblue;\r\n}\r\n@keyframes typewriter {\r\n  to {\r\n    left: 100%;\r\n  }\r\n}\r\n@keyframes blink {\r\n  to {\r\n    background: transparent;\r\n  }\r\n}\r\n@keyframes fadeIn {\r\n  to {\r\n    opacity: 1;\r\n    transform: translateY(0);\r\n  }\r\n}\r\n@keyframes fadeUp {\r\n  to {\r\n    opacity: 1;\r\n    transform: translateY(0);\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://src/pages/about.css"],"names":[],"mappings":"AAAA;EACE,2BAA2B;EAC3B,uBAAuB;AACzB;AACA;EACE,WAAW;EACX,aAAa;EACb,qBAAqB;EACrB,kBAAkB;EAClB,YAAY;EACZ,2BAA2B;EAC3B,oBAAoB;AACtB;AACA;EACE,oBAAoB;AACtB;AACA;EACE,qBAAqB;EACrB,cAAc;EACd,kBAAkB;EAClB,uBAAkB;EAAlB,kBAAkB;AACpB;AACA;;EAEE,WAAW;EACX,kBAAkB;EAClB,MAAM;EACN,QAAQ;EACR,SAAS;EACT,OAAO;AACT;AACA;EACE,gCAAgC;EAChC,oEAAoE;AACtE;AACA;EACE,YAAY;EACZ,0BAA0B;EAC1B;mCACiC;AACnC;AACA;EACE,iBAAiB;EACjB,0BAA0B;EAC1B,oBAAoB;EACpB,uBAAkB;EAAlB,kBAAkB;EAClB,UAAU;EACV,2BAA2B;EAC3B,uEAAuE;AACzE;AACA;EACE,qBAAqB;EACrB,gBAAgB;EAChB,eAAe;AACjB;AACA;EACE,aAAa;EACb,0BAA0B;EAC1B,6BAA6B;AAC/B;AACA;EACE,iBAAiB;EACjB,UAAU;EACV,2BAA2B;EAC3B,uEAAuE;AACzE;AACA;EACE,UAAU;EACV,2BAA2B;EAC3B,oEAAoE;AACtE;AACA;EACE,YAAY;EACZ,wBAAwB;EACxB,oBAAoB;AACtB;AACA;EACE,cAAc;EACd,eAAe;AACjB;AACA;EACE,gBAAgB;EAChB,mBAAmB;AACrB;AACA;EACE,aAAa;EACb,sBAAsB;EACtB,eAAU;EAAV,UAAU;AACZ;AACA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,qBAAqB;AACvB;AACA;EACE,cAAc;AAChB;AACA;EACE;IACE,UAAU;EACZ;AACF;AACA;EACE;IACE,uBAAuB;EACzB;AACF;AACA;EACE;IACE,UAAU;IACV,wBAAwB;EAC1B;AACF;AACA;EACE;IACE,UAAU;IACV,wBAAwB;EAC1B;AACF","sourcesContent":[":root {\r\n  /* --typewriterSpeed: 5s; */\r\n  --typewriterSpeed: 3.4s;\r\n}\r\n.aboutPage {\r\n  width: 100%;\r\n  display: grid;\r\n  place-content: center;\r\n  text-align: center;\r\n  color: white;\r\n  font-family: 'Trebuchet MS';\r\n  padding-bottom: 10vh;\r\n}\r\n.about {\r\n  margin: 0 4em 0 18em;\r\n}\r\n.aboutH1 {\r\n  margin: 0 auto 0 auto;\r\n  font-size: 3vw;\r\n  position: relative;\r\n  width: fit-content;\r\n}\r\n.aboutH1::before,\r\n.aboutH1::after {\r\n  content: '';\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n}\r\n.aboutH1::before {\r\n  background-color: rgb(0, 32, 50);\r\n  animation: typewriter var(--typewriterSpeed) steps(32) 1.2s forwards;\r\n}\r\n.aboutH1::after {\r\n  width: 0.2em;\r\n  background: lightsteelblue;\r\n  animation: typewriter var(--typewriterSpeed) steps(32) 1.2s forwards,\r\n    blink 1200ms steps(32) infinite;\r\n}\r\n.aboutH2 {\r\n  font-size: 1.75vw;\r\n  margin: 1.25em auto 0 auto;\r\n  padding: 0 5em 0 5em;\r\n  width: fit-content;\r\n  opacity: 0;\r\n  transform: translateY(3rem);\r\n  animation: fadeIn 2.75s ease calc(var(--typewriterSpeed) + 1s) forwards;\r\n}\r\nul {\r\n  list-style-type: none;\r\n  text-align: left;\r\n  /* margin: 0; */\r\n}\r\n.section2 {\r\n  display: flex;\r\n  margin: 2.75em auto 0 auto;\r\n  justify-content: space-around;\r\n}\r\n.aboutApp {\r\n  font-size: 1.15vw;\r\n  opacity: 0;\r\n  transform: translateY(3rem);\r\n  animation: fadeIn 2.75s ease calc(var(--typewriterSpeed) + 1s) forwards;\r\n}\r\n.aboutDuane {\r\n  opacity: 0;\r\n  transform: translateY(2rem);\r\n  animation: fadeIn 4s ease calc(var(--typewriterSpeed) + 2s) forwards;\r\n}\r\n.duaneImg {\r\n  height: 20vh;\r\n  margin: 0 auto 15px auto;\r\n  border-radius: 400px;\r\n}\r\n.aboutDuane > h2 {\r\n  font-size: 2vw;\r\n  margin: 0 0 0 0;\r\n}\r\n.aboutDuane > h3 {\r\n  font-size: 1.5vw;\r\n  margin: 0 0 1.5em 0;\r\n}\r\n.links {\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 0.5em;\r\n}\r\n.link {\r\n  font-size: 1.4vw;\r\n  color: ghostwhite;\r\n  text-decoration: none;\r\n}\r\n.link:hover {\r\n  color: skyblue;\r\n}\r\n@keyframes typewriter {\r\n  to {\r\n    left: 100%;\r\n  }\r\n}\r\n@keyframes blink {\r\n  to {\r\n    background: transparent;\r\n  }\r\n}\r\n@keyframes fadeIn {\r\n  to {\r\n    opacity: 1;\r\n    transform: translateY(0);\r\n  }\r\n}\r\n@keyframes fadeUp {\r\n  to {\r\n    opacity: 1;\r\n    transform: translateY(0);\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/home.css":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/pages/home.css ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".popular-streams {\r\n  color: white;\r\n  font-family: 'Trebuchet MS';\r\n}\r\n.homeContainer {\r\n  display: flex;\r\n  flex-direction: row;\r\n  margin: 0.85em 8vw 0 20vw;\r\n  grid-gap: 1.25em;\r\n  gap: 1.25em;\r\n}\r\n.moreUsers,\r\n.loading-mini {\r\n  position: sticky;\r\n  margin: auto 0 0 auto;\r\n  text-align: left;\r\n  font-family: 'Trebuchet MS';\r\n  color: ghostwhite;\r\n  font-size: 2vw;\r\n}\r\n.moreUsers {\r\n  position: fixed;\r\n  top: 11.7vh;\r\n  right: 2px;\r\n  opacity: 0;\r\n  z-index: 10;\r\n  animation: blink-fade 2s ease-out 5s 6 alternate;\r\n}\r\n.loading {\r\n  font-family: 'Trebuchet MS';\r\n  color: ghostwhite;\r\n  font-size: calc(6px + 3vw);\r\n  text-align: center;\r\n  margin: 2em 6em 0 8em;\r\n}\r\n.loading,\r\n.loading-mini {\r\n  animation: blink-blue 1s ease-out 8 alternate;\r\n}\r\n.title {\r\n  margin: 0.1em 0 0.1em 0;\r\n}\r\n.accordion {\r\n  min-width: 20vw;\r\n}\r\n.accordion-btn {\r\n  font-size: 1.5vw;\r\n  font-weight: bold;\r\n  color: black;\r\n  background-color: rgb(253, 253, 256);\r\n  width: 100%;\r\n  padding: 0 2px 0 2px;\r\n  margin: 0 0 0.15em 0;\r\n  text-align: center;\r\n  cursor: pointer;\r\n}\r\n.accordion-btn:hover {\r\n  color: rgb(16, 143, 194);\r\n  background-color: lightsteelblue;\r\n}\r\n.caret-container {\r\n  text-align: right;\r\n}\r\n.caret-rotate {\r\n  transform: rotate(180deg);\r\n}\r\n.accordion-content {\r\n  font-size: 1.15vw;\r\n  font-weight: 600;\r\n  color: black;\r\n  background-color: rgb(247, 251, 255);\r\n  padding: 8px;\r\n  height: 70vh;\r\n  overflow: auto;\r\n}\r\n.accordion-tweets {\r\n  font-family: 'Trebuchet MS';\r\n  margin-bottom: 1.15em;\r\n}\r\n@keyframes blink-fade {\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n@keyframes blink-blue {\r\n  to {\r\n    color: rgb(20, 157, 211);\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://src/pages/home.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,2BAA2B;AAC7B;AACA;EACE,aAAa;EACb,mBAAmB;EACnB,yBAAyB;EACzB,gBAAW;EAAX,WAAW;AACb;AACA;;EAEE,gBAAgB;EAChB,qBAAqB;EACrB,gBAAgB;EAChB,2BAA2B;EAC3B,iBAAiB;EACjB,cAAc;AAChB;AACA;EACE,eAAe;EACf,WAAW;EACX,UAAU;EACV,UAAU;EACV,WAAW;EACX,gDAAgD;AAClD;AACA;EACE,2BAA2B;EAC3B,iBAAiB;EACjB,0BAA0B;EAC1B,kBAAkB;EAClB,qBAAqB;AACvB;AACA;;EAEE,6CAA6C;AAC/C;AACA;EACE,uBAAuB;AACzB;AACA;EACE,eAAe;AACjB;AACA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,YAAY;EACZ,oCAAoC;EACpC,WAAW;EACX,oBAAoB;EACpB,oBAAoB;EACpB,kBAAkB;EAClB,eAAe;AACjB;AACA;EACE,wBAAwB;EACxB,gCAAgC;AAClC;AACA;EACE,iBAAiB;AACnB;AACA;EACE,yBAAyB;AAC3B;AACA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,YAAY;EACZ,oCAAoC;EACpC,YAAY;EACZ,YAAY;EACZ,cAAc;AAChB;AACA;EACE,2BAA2B;EAC3B,qBAAqB;AACvB;AACA;EACE;IACE,UAAU;EACZ;AACF;AACA;EACE;IACE,wBAAwB;EAC1B;AACF","sourcesContent":[".popular-streams {\r\n  color: white;\r\n  font-family: 'Trebuchet MS';\r\n}\r\n.homeContainer {\r\n  display: flex;\r\n  flex-direction: row;\r\n  margin: 0.85em 8vw 0 20vw;\r\n  gap: 1.25em;\r\n}\r\n.moreUsers,\r\n.loading-mini {\r\n  position: sticky;\r\n  margin: auto 0 0 auto;\r\n  text-align: left;\r\n  font-family: 'Trebuchet MS';\r\n  color: ghostwhite;\r\n  font-size: 2vw;\r\n}\r\n.moreUsers {\r\n  position: fixed;\r\n  top: 11.7vh;\r\n  right: 2px;\r\n  opacity: 0;\r\n  z-index: 10;\r\n  animation: blink-fade 2s ease-out 5s 6 alternate;\r\n}\r\n.loading {\r\n  font-family: 'Trebuchet MS';\r\n  color: ghostwhite;\r\n  font-size: calc(6px + 3vw);\r\n  text-align: center;\r\n  margin: 2em 6em 0 8em;\r\n}\r\n.loading,\r\n.loading-mini {\r\n  animation: blink-blue 1s ease-out 8 alternate;\r\n}\r\n.title {\r\n  margin: 0.1em 0 0.1em 0;\r\n}\r\n.accordion {\r\n  min-width: 20vw;\r\n}\r\n.accordion-btn {\r\n  font-size: 1.5vw;\r\n  font-weight: bold;\r\n  color: black;\r\n  background-color: rgb(253, 253, 256);\r\n  width: 100%;\r\n  padding: 0 2px 0 2px;\r\n  margin: 0 0 0.15em 0;\r\n  text-align: center;\r\n  cursor: pointer;\r\n}\r\n.accordion-btn:hover {\r\n  color: rgb(16, 143, 194);\r\n  background-color: lightsteelblue;\r\n}\r\n.caret-container {\r\n  text-align: right;\r\n}\r\n.caret-rotate {\r\n  transform: rotate(180deg);\r\n}\r\n.accordion-content {\r\n  font-size: 1.15vw;\r\n  font-weight: 600;\r\n  color: black;\r\n  background-color: rgb(247, 251, 255);\r\n  padding: 8px;\r\n  height: 70vh;\r\n  overflow: auto;\r\n}\r\n.accordion-tweets {\r\n  font-family: 'Trebuchet MS';\r\n  margin-bottom: 1.15em;\r\n}\r\n@keyframes blink-fade {\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n@keyframes blink-blue {\r\n  to {\r\n    color: rgb(20, 157, 211);\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/search.css":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/pages/search.css ***!
  \*********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".topbar {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background: rgb(0, 32, 50);\r\n  height: 15vh;\r\n  width: 100vw;\r\n  position: fixed;\r\n  top: 0;\r\n  z-index: 2;\r\n}\r\n.searchBar {\r\n  box-sizing: border-box;\r\n  border: none;\r\n  border-radius: 9px 0 0 9px;\r\n  color: ghostwhite;\r\n  background-color: rgb(43, 43, 99);\r\n  width: 38vw;\r\n  height: 5vh;\r\n  font-size: calc(10px + 1vw);\r\n  font-weight: 800;\r\n  text-align: center;\r\n  padding-left: 1em;\r\n}\r\n.searchBar::placeholder {\r\n  font-weight: 300;\r\n  color: rgb(121, 173, 241);\r\n}\r\n.searchBar:focus,\r\n.search-icon:active {\r\n  color: black;\r\n  background-color: ghostwhite;\r\n  outline: none;\r\n}\r\n.search-icon {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 2em;\r\n  font-size: 2em;\r\n  text-align: left;\r\n  border-radius: 0 9px 9px 0;\r\n  padding: 0;\r\n  cursor: pointer;\r\n}\r\n.search-icon:focus {\r\n  color: ghostwhite;\r\n  background-color: darkblue;\r\n}\r\n\r\n.searchContainer {\r\n  font-family: 'Trebuchet MS';\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin-bottom: 4em;\r\n  grid-gap: 1.25em;\r\n  gap: 1.25em;\r\n  width: 100%;\r\n  z-index: 1;\r\n}\r\n.card {\r\n  grid-area: card;\r\n  display: flex;\r\n  flex-direction: row;\r\n  border-radius: 0.14em;\r\n  padding: 1.5em 2.25em 1.5em 1.5em;\r\n  background-color: white;\r\n  width: 50vw;\r\n  transition: box-shadow 0.2s ease-in-out, transform 0.1s ease-in-out;\r\n}\r\n.card:hover {\r\n  box-shadow: 3px 3px 3px 1px rgba(83, 83, 180, 0.4);\r\n  transform: scale(1.075);\r\n  border: black 0.05em solid;\r\n}\r\n.tweetInfo {\r\n  display: flex;\r\n  font-size: 1.2em;\r\n  font-weight: bold;\r\n  margin-bottom: 0.75em;\r\n}\r\n.username,\r\n.time-stamp {\r\n  font-weight: lighter;\r\n  color: grey;\r\n}\r\n.tweetText {\r\n  font-size: 1.25em;\r\n  font-weight: 600;\r\n  line-height: 1.15;\r\n}\r\n.ant-card-body {\r\n  margin-left: 0.75em;\r\n}\r\n.buttons {\r\n  display: flex;\r\n}\r\n.like,\r\n.comment,\r\n.share,\r\n.retweet {\r\n  font-size: 1.3em;\r\n  padding: 1.5em 1em 0 1em;\r\n}\r\n.like {\r\n  padding-left: 0;\r\n}\r\n.like:hover,\r\n.share:hover,\r\n.comment:hover,\r\n.retweet:hover {\r\n  color: rgb(0, 117, 250);\r\n}\r\n.like:active,\r\n.share:active,\r\n.comment:active,\r\n.retweet:active {\r\n  color: red;\r\n}\r\n.like:hover::after,\r\n.share:hover::after,\r\n.comment:hover::after,\r\n.retweet:hover::after {\r\n  content: attr(tooltip);\r\n  font-size: 0.75em;\r\n}\r\n", "",{"version":3,"sources":["webpack://src/pages/search.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,0BAA0B;EAC1B,YAAY;EACZ,YAAY;EACZ,eAAe;EACf,MAAM;EACN,UAAU;AACZ;AACA;EACE,sBAAsB;EACtB,YAAY;EACZ,0BAA0B;EAC1B,iBAAiB;EACjB,iCAAiC;EACjC,WAAW;EACX,WAAW;EACX,2BAA2B;EAC3B,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;AACnB;AACA;EACE,gBAAgB;EAChB,yBAAyB;AAC3B;AACA;;EAEE,YAAY;EACZ,4BAA4B;EAC5B,aAAa;AACf;AACA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,UAAU;EACV,cAAc;EACd,gBAAgB;EAChB,0BAA0B;EAC1B,UAAU;EACV,eAAe;AACjB;AACA;EACE,iBAAiB;EACjB,0BAA0B;AAC5B;;AAEA;EACE,2BAA2B;EAC3B,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,kBAAkB;EAClB,gBAAW;EAAX,WAAW;EACX,WAAW;EACX,UAAU;AACZ;AACA;EACE,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,qBAAqB;EACrB,iCAAiC;EACjC,uBAAuB;EACvB,WAAW;EACX,mEAAmE;AACrE;AACA;EACE,kDAAkD;EAClD,uBAAuB;EACvB,0BAA0B;AAC5B;AACA;EACE,aAAa;EACb,gBAAgB;EAChB,iBAAiB;EACjB,qBAAqB;AACvB;AACA;;EAEE,oBAAoB;EACpB,WAAW;AACb;AACA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,iBAAiB;AACnB;AACA;EACE,mBAAmB;AACrB;AACA;EACE,aAAa;AACf;AACA;;;;EAIE,gBAAgB;EAChB,wBAAwB;AAC1B;AACA;EACE,eAAe;AACjB;AACA;;;;EAIE,uBAAuB;AACzB;AACA;;;;EAIE,UAAU;AACZ;AACA;;;;EAIE,sBAAsB;EACtB,iBAAiB;AACnB","sourcesContent":[".topbar {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  background: rgb(0, 32, 50);\r\n  height: 15vh;\r\n  width: 100vw;\r\n  position: fixed;\r\n  top: 0;\r\n  z-index: 2;\r\n}\r\n.searchBar {\r\n  box-sizing: border-box;\r\n  border: none;\r\n  border-radius: 9px 0 0 9px;\r\n  color: ghostwhite;\r\n  background-color: rgb(43, 43, 99);\r\n  width: 38vw;\r\n  height: 5vh;\r\n  font-size: calc(10px + 1vw);\r\n  font-weight: 800;\r\n  text-align: center;\r\n  padding-left: 1em;\r\n}\r\n.searchBar::placeholder {\r\n  font-weight: 300;\r\n  color: rgb(121, 173, 241);\r\n}\r\n.searchBar:focus,\r\n.search-icon:active {\r\n  color: black;\r\n  background-color: ghostwhite;\r\n  outline: none;\r\n}\r\n.search-icon {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  width: 2em;\r\n  font-size: 2em;\r\n  text-align: left;\r\n  border-radius: 0 9px 9px 0;\r\n  padding: 0;\r\n  cursor: pointer;\r\n}\r\n.search-icon:focus {\r\n  color: ghostwhite;\r\n  background-color: darkblue;\r\n}\r\n\r\n.searchContainer {\r\n  font-family: 'Trebuchet MS';\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  margin-bottom: 4em;\r\n  gap: 1.25em;\r\n  width: 100%;\r\n  z-index: 1;\r\n}\r\n.card {\r\n  grid-area: card;\r\n  display: flex;\r\n  flex-direction: row;\r\n  border-radius: 0.14em;\r\n  padding: 1.5em 2.25em 1.5em 1.5em;\r\n  background-color: white;\r\n  width: 50vw;\r\n  transition: box-shadow 0.2s ease-in-out, transform 0.1s ease-in-out;\r\n}\r\n.card:hover {\r\n  box-shadow: 3px 3px 3px 1px rgba(83, 83, 180, 0.4);\r\n  transform: scale(1.075);\r\n  border: black 0.05em solid;\r\n}\r\n.tweetInfo {\r\n  display: flex;\r\n  font-size: 1.2em;\r\n  font-weight: bold;\r\n  margin-bottom: 0.75em;\r\n}\r\n.username,\r\n.time-stamp {\r\n  font-weight: lighter;\r\n  color: grey;\r\n}\r\n.tweetText {\r\n  font-size: 1.25em;\r\n  font-weight: 600;\r\n  line-height: 1.15;\r\n}\r\n.ant-card-body {\r\n  margin-left: 0.75em;\r\n}\r\n.buttons {\r\n  display: flex;\r\n}\r\n.like,\r\n.comment,\r\n.share,\r\n.retweet {\r\n  font-size: 1.3em;\r\n  padding: 1.5em 1em 0 1em;\r\n}\r\n.like {\r\n  padding-left: 0;\r\n}\r\n.like:hover,\r\n.share:hover,\r\n.comment:hover,\r\n.retweet:hover {\r\n  color: rgb(0, 117, 250);\r\n}\r\n.like:active,\r\n.share:active,\r\n.comment:active,\r\n.retweet:active {\r\n  color: red;\r\n}\r\n.like:hover::after,\r\n.share:hover::after,\r\n.comment:hover::after,\r\n.retweet:hover::after {\r\n  content: attr(tooltip);\r\n  font-size: 0.75em;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/welcome.css":
/*!**********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!./node_modules/postcss-loader/src??postcss!./src/pages/welcome.css ***!
  \**********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".modal {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 30vw;\r\n  font-size: 2.12vw;\r\n  font-family: 'Trebuchet MS';\r\n  text-align: center;\r\n  color: ghostwhite;\r\n  background-color: black;\r\n  margin: 18vh 0 0 37vw;\r\n  padding: 1.5vh;\r\n  border-radius: 3px;\r\n}\r\n.browseAsGuest {\r\n  font-family: 'Trebuchet MS';\r\n  font-size: 1.1vw;\r\n  font-weight: bold;\r\n  text-decoration: none;\r\n  color: black;\r\n  background-color: ghostwhite;\r\n  padding: 0.6vw;\r\n  margin: 2.75vh 0 0.6vh auto;\r\n  border: none;\r\n  border-radius: 2px;\r\n}\r\n.browseAsGuest:hover {\r\n  color: skyblue;\r\n  background-color: rgb(31, 31, 34);\r\n}\r\n\r\n#username,\r\n#password {\r\n  margin: auto;\r\n  font-weight: bold;\r\n  display: inline-block;\r\n  width: 150px;\r\n  text-align: left;\r\n}\r\n\r\n#username-label,\r\n#password-label {\r\n  font-size: calc(4px + 1vw);\r\n  margin: 3vh 3.75vw 2px 0;\r\n}\r\n#password {\r\n  margin-bottom: 2vw;\r\n}\r\n", "",{"version":3,"sources":["webpack://src/pages/welcome.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,iBAAiB;EACjB,2BAA2B;EAC3B,kBAAkB;EAClB,iBAAiB;EACjB,uBAAuB;EACvB,qBAAqB;EACrB,cAAc;EACd,kBAAkB;AACpB;AACA;EACE,2BAA2B;EAC3B,gBAAgB;EAChB,iBAAiB;EACjB,qBAAqB;EACrB,YAAY;EACZ,4BAA4B;EAC5B,cAAc;EACd,2BAA2B;EAC3B,YAAY;EACZ,kBAAkB;AACpB;AACA;EACE,cAAc;EACd,iCAAiC;AACnC;;AAEA;;EAEE,YAAY;EACZ,iBAAiB;EACjB,qBAAqB;EACrB,YAAY;EACZ,gBAAgB;AAClB;;AAEA;;EAEE,0BAA0B;EAC1B,wBAAwB;AAC1B;AACA;EACE,kBAAkB;AACpB","sourcesContent":[".modal {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 30vw;\r\n  font-size: 2.12vw;\r\n  font-family: 'Trebuchet MS';\r\n  text-align: center;\r\n  color: ghostwhite;\r\n  background-color: black;\r\n  margin: 18vh 0 0 37vw;\r\n  padding: 1.5vh;\r\n  border-radius: 3px;\r\n}\r\n.browseAsGuest {\r\n  font-family: 'Trebuchet MS';\r\n  font-size: 1.1vw;\r\n  font-weight: bold;\r\n  text-decoration: none;\r\n  color: black;\r\n  background-color: ghostwhite;\r\n  padding: 0.6vw;\r\n  margin: 2.75vh 0 0.6vh auto;\r\n  border: none;\r\n  border-radius: 2px;\r\n}\r\n.browseAsGuest:hover {\r\n  color: skyblue;\r\n  background-color: rgb(31, 31, 34);\r\n}\r\n\r\n#username,\r\n#password {\r\n  margin: auto;\r\n  font-weight: bold;\r\n  display: inline-block;\r\n  width: 150px;\r\n  text-align: left;\r\n}\r\n\r\n#username-label,\r\n#password-label {\r\n  font-size: calc(4px + 1vw);\r\n  margin: 3vh 3.75vw 2px 0;\r\n}\r\n#password {\r\n  margin-bottom: 2vw;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/App.css":
/*!*********************!*\
  !*** ./src/App.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../node_modules/postcss-loader/src??postcss!./App.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/App.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _pages_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home */ "./src/pages/home.js");
/* harmony import */ var _pages_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/search */ "./src/pages/search.js");
/* harmony import */ var _pages_about__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/about */ "./src/pages/about.js");
/* harmony import */ var _pages_welcome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/welcome */ "./src/pages/welcome.js");
/* harmony import */ var _components_Sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Sidebar */ "./src/components/Sidebar.js");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./App.css */ "./src/App.css");
/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\xampp\\htdocs\\SDMM\\chirpr\\client\\src\\App.js";










const App = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])("div", {
    className: "App",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["BrowserRouter"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(_components_Sidebar__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
          className: "page-content",
          path: "/",
          exact: true,
          component: _pages_welcome__WEBPACK_IMPORTED_MODULE_5__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
          className: "page-content",
          path: "/home",
          exact: true,
          component: _pages_home__WEBPACK_IMPORTED_MODULE_2__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
          className: "page-content",
          path: "/search",
          exact: true,
          component: _pages_search__WEBPACK_IMPORTED_MODULE_3__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
          className: "page-content",
          path: "/about",
          exact: true,
          component: _pages_about__WEBPACK_IMPORTED_MODULE_4__["default"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/Accordion.js":
/*!*************************************!*\
  !*** ./src/components/Accordion.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\xampp\\htdocs\\SDMM\\chirpr\\client\\src\\components\\Accordion.js";





const Accordion = props => {
  var _props$userStream;

  const [active, setActive] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [display, setDisplay] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('none');
  const [caret, setCaret] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('caret');

  const toggleAccordion = () => {
    setActive(!active);
    setDisplay(active ? 'inherit' : 'none');
    setCaret(active ? 'caret-rotate' : 'caret');
  };

  const handleTimeStamp = dateString => {
    let timestamp = new Date(dateString);
    return timestamp.toDateString();
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
      className: "accordion",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("button", {
        className: `accordion-btn ${active} `,
        onClick: toggleAccordion,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
          className: "title",
          children: props.title
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "caret-container",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_1__["CaretDownFilled"], {
            className: caret
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
        style: {
          display: `${display}`
        },
        className: "accordion-content",
        children: (_props$userStream = props.userStream) === null || _props$userStream === void 0 ? void 0 : _props$userStream.map((tweet, index) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("div", {
          className: "single-tweet",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
            className: "time-stamp",
            children: `${handleTimeStamp(tweet.created_at)}`
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__["jsxDEV"])("p", {
            className: "accordion-tweets",
            children: tweet.text
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 13
        }, undefined))
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (Accordion);

/***/ }),

/***/ "./src/components/Sidebar.css":
/*!************************************!*\
  !*** ./src/components/Sidebar.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./Sidebar.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Sidebar.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/components/Sidebar.js":
/*!***********************************!*\
  !*** ./src/components/Sidebar.js ***!
  \***********************************/
/*! exports provided: Navbar, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navbar", function() { return Navbar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _images_quill_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/quill.png */ "./src/images/quill.png");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _Sidebar_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Sidebar.css */ "./src/components/Sidebar.css");
/* harmony import */ var _Sidebar_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Sidebar_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\xampp\\htdocs\\SDMM\\chirpr\\client\\src\\components\\Sidebar.js";







function Navbar() {
  const [click, setClick] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const handleClick = () => setClick(!click);

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      className: "sidebar",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
        to: "/home",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("img", {
          className: "quill-logo",
          onClick: handleClick,
          src: _images_quill_png__WEBPACK_IMPORTED_MODULE_2__["default"],
          alt: "Chirpr logo"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        className: click ? 'nav-menu active' : 'nav-menu',
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
          to: "/home",
          activeClassName: "is-active",
          className: "nav-links",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["HomeOutlined"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 28,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
          to: "/search",
          activeClassName: "is-active",
          className: "nav-links",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["SearchOutlined"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["NavLink"], {
          to: "/about",
          activeClassName: "is-active",
          className: "nav-links",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["InfoCircleOutlined"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this)
  }, void 0, false);
}
/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./src/images/birdGif.gif":
/*!********************************!*\
  !*** ./src/images/birdGif.gif ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "media/birdGif.751af24b.gif");

/***/ }),

/***/ "./src/images/duane.jpg":
/*!******************************!*\
  !*** ./src/images/duane.jpg ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "media/duane.df0bef81.jpg");

/***/ }),

/***/ "./src/images/quill.png":
/*!******************************!*\
  !*** ./src/images/quill.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "media/quill.8e4258e6.png");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App */ "./src/App.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\xampp\\htdocs\\SDMM\\chirpr\\client\\src\\index.js";




react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, {
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(_App__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 6,
  columnNumber: 3
}, undefined), document.getElementById('root'));

/***/ }),

/***/ "./src/pages/about.css":
/*!*****************************!*\
  !*** ./src/pages/about.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./about.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/about.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/pages/about.js":
/*!****************************!*\
  !*** ./src/pages/about.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_duane_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/duane.jpg */ "./src/images/duane.jpg");
/* harmony import */ var _about_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about.css */ "./src/pages/about.css");
/* harmony import */ var _about_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_about_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\xampp\\htdocs\\SDMM\\chirpr\\client\\src\\pages\\about.js";





const about = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
    className: "aboutPage",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
      className: "about",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h1", {
        className: "aboutH1",
        children: "Chirpr | Built by Duane McDonald"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h2", {
        className: "aboutH2",
        children: "Chirpr is an app experimenting with the Twitter Standard API 2 and web scraping. Chirpr uses realtime tweets & streams from twitter users."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("section", {
        className: "section2",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "aboutApp",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h2", {
            children: "Built with:"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 16,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("ul", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("li", {
              children: "HTML 5"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("li", {
              children: "GitHub"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 19,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("li", {
              children: "Git"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 20,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("li", {
              children: "Axios"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 21,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("li", {
              children: "React.js"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("li", {
              children: "Express.js"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 23,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("li", {
              children: "Puppeteer.js"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("li", {
              children: "CSS Animations"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("li", {
              children: "Twitter API 2.0"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("li", {
              children: "CPanel Hosting"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
          className: "aboutDuane",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("img", {
            className: "duaneImg",
            src: _images_duane_jpg__WEBPACK_IMPORTED_MODULE_1__["default"],
            alt: "Duane McDonald"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h2", {
            children: "Duane McDonald"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h3", {
            children: "Software Engineer"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("div", {
            className: "links",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("a", {
              className: "link",
              target: "_blank",
              rel: "noopener noreferrer",
              href: "https://github.com/DuaneMcD",
              children: "Github.com/DuaneMcD"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("a", {
              className: "link",
              target: "_blank",
              rel: "noopener noreferrer",
              href: "https://DuaneMcDonald.com",
              children: "DuaneMcDonald.com"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("a", {
              className: "link",
              target: "_blank",
              rel: "noopener noreferrer",
              href: "https://www.linkedin.com/in/duane-mcd",
              children: "LinkedIn"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 49,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (about);

/***/ }),

/***/ "./src/pages/home.css":
/*!****************************!*\
  !*** ./src/pages/home.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./home.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/home.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Accordion */ "./src/components/Accordion.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _home_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home.css */ "./src/pages/home.css");
/* harmony import */ var _home_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_home_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\xampp\\htdocs\\SDMM\\chirpr\\client\\src\\pages\\home.js";








const Home = () => {
  const [loading, setLoading] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const [mostFollowedUsers, setMostFollowedUsers] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [mostFollowedIDs, setMostFollowedIDs] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [tweetsArray, setTweetsArray] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [includesArray, setIncludesArray] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [usernameArray, setUsernameArray] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);

  const loadingIcon = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["LoadingOutlined"], {
    style: {
      fontSize: 24
    },
    spin: true
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 23
  }, undefined);

  const getFavoriteUsers = async () => {
    const mostFollowedUsers = await fetch(`http://localhost:3000/puppet/`);
    const favoriteUsersJson = await mostFollowedUsers.json();
    return setMostFollowedUsers(favoriteUsersJson);
  };

  const getFavoriteIds = async () => {
    const idNumbers = [];

    for (let i = 0; i < mostFollowedUsers.length; i++) {
      const idNumber = await fetch(`http://localhost:3000/users/${mostFollowedUsers[i]}`);
      const idNumberJson = idNumber.json();
      idNumbers.push(await idNumberJson);
    }

    setLoading(true);
    console.log(idNumbers);
    return setMostFollowedIDs(idNumbers);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getFavoriteUsers();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    getFavoriteIds();
  }, [mostFollowedUsers]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    fetchUserTweets();
  }, [mostFollowedIDs]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    handleUserData();
  }, [tweetsArray]);

  const fetchUserTweets = async () => {
    const tweets = [];
    mostFollowedIDs.map(async id => {
      const response = await fetch(`http://localhost:3000/timeline/${id}`);
      const message = await response.json();
      tweets.push(await message.data);
      setTweetsArray(tweets);
      setIncludesArray(await message.includes);
    });
  };

  const handleUserData = async () => {
    let twitterHandles = [];

    for (let i = 0; i < tweetsArray.length; i++) {
      var _twitHandle$;

      const twitHandle = tweetsArray[i];
      let handle = await getUserInfo((_twitHandle$ = twitHandle[0]) === null || _twitHandle$ === void 0 ? void 0 : _twitHandle$.author_id);
      twitterHandles.push(handle);
    }

    setUsernameArray(twitterHandles);
    setLoading(false);
  };

  const getUserInfo = async id => {
    const response = await fetch(`http://localhost:3000/idlookup/${id}`);
    const message = await response.json();
    return await message.data.username;
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      className: "homePage",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        className: "topbar",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("h1", {
          className: "popular-streams",
          children: "Explore Trending Twitter Feeds "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 9
      }, undefined), loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
        className: "loading-mini",
        children: "Loading..."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 11
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
        className: "moreUsers",
        children: "more users \u27A1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        className: "homeContainer",
        children: loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          className: "loading",
          children: "LOADING TWEETS..."
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 13
        }, undefined) : tweetsArray.map((tweet, index) => {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_components_Accordion__WEBPACK_IMPORTED_MODULE_1__["default"], {
            title: `@${usernameArray[index]}`,
            userStream: tweet
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 17
          }, undefined);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/pages/search.css":
/*!******************************!*\
  !*** ./src/pages/search.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./search.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/search.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/pages/search.js":
/*!*****************************!*\
  !*** ./src/pages/search.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _images_birdGif_gif__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/birdGif.gif */ "./src/images/birdGif.gif");
/* harmony import */ var _search_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search.css */ "./src/pages/search.css");
/* harmony import */ var _search_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_search_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\xampp\\htdocs\\SDMM\\chirpr\\client\\src\\pages\\search.js";








const Search = () => {
  const [searchInput, setSearchInput] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const [tweetsArray, setTweetsArray] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [userInfo, setUserInfo] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const [searched, setSearched] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  const handleKeyDown = e => {
    if (e.keyCode === 13) {
      setSearched(true);
      handleSearch();
    }
  };

  const handleSearch = async () => {
    let newID = '';

    try {
      newID = await getUserId(searchInput);
    } catch (error) {
      alert(`Sorry, Twitter username ${searchInput} not found`);
      return;
    }

    await getUserInfo(newID);
    await fetchUserTweets(newID);
  };

  const getUserInfo = async id => {
    const response = await fetch(`http://localhost:3000/idlookup/${id}`);
    const message = await response.json();
    setUserInfo(message.data);
  };

  const getUserId = async user => {
    const response = await fetch(`http://localhost:3000/users/${user}`);
    const message = await response.json();
    return message;
  };

  const fetchUserTweets = async userId => {
    const response = await fetch(`http://localhost:3000/timeline/${userId}`);
    const message = await response.json();
    setTweetsArray(await message.data);
    return message;
  };

  const handleTimeStamp = dateString => {
    let timestamp = new Date(dateString);
    return timestamp.toDateString();
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
      className: "searchPage",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        className: "topbar",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("input", {
          className: "searchBar",
          type: "search",
          spellCheck: true,
          placeholder: "Search by username to view timeline",
          onKeyDown: handleKeyDown,
          onChange: e => setSearchInput(e.target.value),
          results: 8
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 66,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["SearchOutlined"], {
          className: "searchBar search-icon",
          onClick: handleSearch
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
        className: "searchContainer",
        children: searched === false ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
          className: "noSearch",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("img", {
            src: _images_birdGif_gif__WEBPACK_IMPORTED_MODULE_3__["default"],
            alt: "Chirpr Logo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 13
        }, undefined) : tweetsArray === undefined ? null : tweetsArray.map((tweet, index) => {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["Fragment"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
              className: "stream-container",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
                hoverable: true,
                className: "card",
                cover: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("img", {
                  alt: "User",
                  src: userInfo.profile_image_url
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 95,
                  columnNumber: 25
                }, undefined),
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                  className: "tweetInfo",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
                    className: "name",
                    children: userInfo.name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 98,
                    columnNumber: 25
                  }, undefined), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 98,
                    columnNumber: 65
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
                    className: "username",
                    children: ' @' + userInfo.username
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 99,
                    columnNumber: 25
                  }, undefined), ' ', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("br", {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 102,
                    columnNumber: 25
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("p", {
                    className: "time-stamp",
                    children: `▪ ${handleTimeStamp(tweet.created_at)}`
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 103,
                    columnNumber: 25
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 97,
                  columnNumber: 23
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                  className: "tweetText",
                  children: tweet.text
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 107,
                  columnNumber: 23
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])("div", {
                  className: "buttons",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["LikeFilled"], {
                    className: "like",
                    tooltip: "Liked! +1"
                  }, 'like', false, {
                    fileName: _jsxFileName,
                    lineNumber: 109,
                    columnNumber: 25
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["RetweetOutlined"], {
                    className: "retweet",
                    tooltip: "Retweet! \uD83D\uDC25"
                  }, 'retweet', false, {
                    fileName: _jsxFileName,
                    lineNumber: 114,
                    columnNumber: 25
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["EditFilled"], {
                    className: "comment",
                    tooltip: "Commented! \uD83D\uDCE9"
                  }, 'comment', false, {
                    fileName: _jsxFileName,
                    lineNumber: 119,
                    columnNumber: 25
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__["jsxDEV"])(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["SendOutlined"], {
                    className: "share",
                    tooltip: "Shared! \u2665"
                  }, 'share', false, {
                    fileName: _jsxFileName,
                    lineNumber: 124,
                    columnNumber: 25
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 108,
                  columnNumber: 23
                }, undefined)]
              }, tweet.id, true, {
                fileName: _jsxFileName,
                lineNumber: 90,
                columnNumber: 21
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 19
            }, undefined)
          }, void 0, false);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "./src/pages/welcome.css":
/*!*******************************!*\
  !*** ./src/pages/welcome.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-4-1!../../node_modules/postcss-loader/src??postcss!./welcome.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/pages/welcome.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/pages/welcome.js":
/*!******************************!*\
  !*** ./src/pages/welcome.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _welcome_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./welcome.css */ "./src/pages/welcome.css");
/* harmony import */ var _welcome_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_welcome_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\xampp\\htdocs\\SDMM\\chirpr\\client\\src\\pages\\welcome.js";






const Welcome = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("main", {
      className: "modal",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h2", {
        children: "Welcome To Chirpr"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
        id: "username-label",
        htmlFor: "username",
        children: "Username"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 10,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
        id: "username",
        type: "text"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
        id: "password-label",
        htmlFor: "password",
        children: "Password"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
        id: "password",
        type: "text"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
        className: "browseAsGuest",
        to: "/home",
        children: "Browse as Guest"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, undefined)
  }, void 0, false);
};

/* harmony default export */ __webpack_exports__["default"] = (Welcome);

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\xampp\htdocs\SDMM\chirpr\client\node_modules\react-dev-utils\webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! C:\xampp\htdocs\SDMM\chirpr\client\src\index.js */"./src/index.js");


/***/ })

},[[0,"runtime-main","vendors~main"]]]);
//# sourceMappingURL=main.chunk.js.map