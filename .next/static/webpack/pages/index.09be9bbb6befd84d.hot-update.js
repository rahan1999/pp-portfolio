"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/cvsection.js":
/*!*********************************!*\
  !*** ./components/cvsection.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Cvsection; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contentbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contentbox */ \"./components/contentbox.js\");\n\n\nfunction Cvsection(param) {\n    let { main , titles , descriptions  } = param;\n    const titlearray = titles.split(\"-\");\n    const descriptionarray = descriptions.split(\"-\");\n    let contenttitle = [];\n    titlearray.forEach((item, index)=>{\n        contenttitle.push(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contentbox__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            title: item,\n            description: descriptionarray[index]\n        }, item, false, {\n            fileName: \"/Users/pafcio/Desktop/CV i Portfolio/V2/react/components/cvsection.js\",\n            lineNumber: 11,\n            columnNumber: 7\n        }, this));\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col h-auto items-center m-5 md:m-0 md:flex-row justify-between w-full\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"md:w-[30%] md:min-h-screen\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"bg-fixed bg-cover bg-no-repeat bg-clip-text text-transparent sticky top-6 md:top-60 text-5xl text-center\",\n                    children: main\n                }, void 0, false, {\n                    fileName: \"/Users/pafcio/Desktop/CV i Portfolio/V2/react/components/cvsection.js\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/pafcio/Desktop/CV i Portfolio/V2/react/components/cvsection.js\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full md:w-[70%] flex flex-row flex-wrap justify-around mt-10 md:mt-0 md:min-h-screen gap-x-14\",\n                children: contenttitle\n            }, void 0, false, {\n                fileName: \"/Users/pafcio/Desktop/CV i Portfolio/V2/react/components/cvsection.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/pafcio/Desktop/CV i Portfolio/V2/react/components/cvsection.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\n_c = Cvsection;\nvar _c;\n$RefreshReg$(_c, \"Cvsection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2N2c2VjdGlvbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFBc0M7QUFFdkIsU0FBU0MsVUFBVSxLQUE4QixFQUFFO1FBQWhDLEVBQUVDLEtBQUksRUFBRUMsT0FBTSxFQUFFQyxhQUFZLEVBQUUsR0FBOUI7SUFDaEMsTUFBTUMsYUFBYUYsT0FBT0csS0FBSyxDQUFDO0lBQ2hDLE1BQU1DLG1CQUFtQkgsYUFBYUUsS0FBSyxDQUFDO0lBRTVDLElBQUlFLGVBQWUsRUFBRTtJQUVyQkgsV0FBV0ksT0FBTyxDQUFDLENBQUNDLE1BQU1DLFFBQVU7UUFDbENILGFBQWFJLElBQUksZUFDZiw4REFBQ1osbURBQVVBO1lBRVRhLE9BQU9IO1lBQ1BJLGFBQWFQLGdCQUFnQixDQUFDSSxNQUFNO1dBRi9CRDs7Ozs7SUFLWDtJQUVBLHFCQUNFLDhEQUFDSztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNDO29CQUFHRCxXQUFVOzhCQUNYZDs7Ozs7Ozs7Ozs7MEJBR0wsOERBQUNhO2dCQUFJQyxXQUFVOzBCQUNaUjs7Ozs7Ozs7Ozs7O0FBSVQsQ0FBQztLQTVCdUJQIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvY3ZzZWN0aW9uLmpzPzA1MTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbnRlbnRib3ggZnJvbSBcIi4vY29udGVudGJveFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDdnNlY3Rpb24oeyBtYWluLCB0aXRsZXMsIGRlc2NyaXB0aW9ucyB9KSB7XG4gIGNvbnN0IHRpdGxlYXJyYXkgPSB0aXRsZXMuc3BsaXQoXCItXCIpO1xuICBjb25zdCBkZXNjcmlwdGlvbmFycmF5ID0gZGVzY3JpcHRpb25zLnNwbGl0KFwiLVwiKTtcblxuICBsZXQgY29udGVudHRpdGxlID0gW107XG5cbiAgdGl0bGVhcnJheS5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgIGNvbnRlbnR0aXRsZS5wdXNoKFxuICAgICAgPENvbnRlbnRib3hcbiAgICAgICAga2V5PXtpdGVtfVxuICAgICAgICB0aXRsZT17aXRlbX1cbiAgICAgICAgZGVzY3JpcHRpb249e2Rlc2NyaXB0aW9uYXJyYXlbaW5kZXhdfVxuICAgICAgPjwvQ29udGVudGJveD5cbiAgICApO1xuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBoLWF1dG8gaXRlbXMtY2VudGVyIG0tNSBtZDptLTAgbWQ6ZmxleC1yb3cganVzdGlmeS1iZXR3ZWVuIHctZnVsbFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZDp3LVszMCVdIG1kOm1pbi1oLXNjcmVlblwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiYmctZml4ZWQgYmctY292ZXIgYmctbm8tcmVwZWF0IGJnLWNsaXAtdGV4dCB0ZXh0LXRyYW5zcGFyZW50IHN0aWNreSB0b3AtNiBtZDp0b3AtNjAgdGV4dC01eGwgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICB7bWFpbn1cbiAgICAgICAgPC9oMT5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgbWQ6dy1bNzAlXSBmbGV4IGZsZXgtcm93IGZsZXgtd3JhcCBqdXN0aWZ5LWFyb3VuZCBtdC0xMCBtZDptdC0wIG1kOm1pbi1oLXNjcmVlbiBnYXAteC0xNFwiPlxuICAgICAgICB7Y29udGVudHRpdGxlfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQ29udGVudGJveCIsIkN2c2VjdGlvbiIsIm1haW4iLCJ0aXRsZXMiLCJkZXNjcmlwdGlvbnMiLCJ0aXRsZWFycmF5Iiwic3BsaXQiLCJkZXNjcmlwdGlvbmFycmF5IiwiY29udGVudHRpdGxlIiwiZm9yRWFjaCIsIml0ZW0iLCJpbmRleCIsInB1c2giLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/cvsection.js\n"));

/***/ })

});