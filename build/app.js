webpackJsonp([0],{

/***/ 19:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony default export */ exports["a"] = function () {
  const element = document.createElement('h1');

  element.className = 'pure-button';
  element.innerHTML = 'Hello broh!';

  return element;
};


/***/ },

/***/ 20:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 21:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 34:
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_purecss__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_purecss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_purecss__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_css__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__main_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__main_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__component__ = __webpack_require__(19);





let demoComponent = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__component__["a" /* default */])();

document.body.appendChild(demoComponent);

// HMR interface
if(false) {
  // Capture hot update
  module.hot.accept('./component', () => {
    console.log('hello!');
    // We have to go through CommonJS here and capture the
    // default export explicitly!
    const nextComponent = require('./component').default();

    // Replace old content with the hot loaded one
    document.body.replaceChild(nextComponent, demoComponent);

    demoComponent = nextComponent;
  });
}


/***/ }

},[34]);
//# sourceMappingURL=app.js.map