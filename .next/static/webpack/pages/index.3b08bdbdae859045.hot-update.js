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

/***/ "./components/contentbox.js":
/*!**********************************!*\
  !*** ./components/contentbox.js ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Contentbox; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nfunction Contentbox(param) {\n    let { title , description  } = param;\n    let toggle = 0;\n    let size_up = [\n        \"w-[30rem]\",\n        \"h-96\",\n        \"rotate-[225deg]\"\n    ];\n    let size_down = [\n        \"w-60\",\n        \"h-32\",\n        \"rotate-45\"\n    ];\n    const extend = ()=>{\n        let element = document.getElementById(\"\".concat(title));\n        let elementarrow = document.getElementById(\"\".concat(title + \"_arrow\"));\n        let element_array = [\n            element,\n            element,\n            elementarrow\n        ];\n        let element_desc = document.getElementById(\"\".concat(title + \"_desc\"));\n        if (toggle === 0) {\n            for(let i = 0; i < 3; i++){\n                element_array[i].classList.replace(size_down[i], size_up[i]);\n            }\n            element_desc.classList.replace(\"hidden\", \"block\");\n            toggle = 1;\n        } else {\n            for(let i1 = 0; i1 < 3; i1++){\n                element_array[i1].classList.replace(size_up[i1], size_down[i1]);\n            }\n            element_desc.classList.replace(\"block\", \"hidden\");\n            toggle = 0;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"bg-fixed bg-cover bg-no-repeat cvContentDesc duration-1000 w-60 h-32 my-5 rounded-[2rem] flex flex-col items-center justify-between cursor-pointer shadow-md hover:shadow-sm\",\n        id: title,\n        onClick: extend,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-center bg-fixed bg-cover bg-no-repeat w-60 h-24 cvContentName rounded-[2rem] flex justify-center items-center text-4xl\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                    children: title\n                }, void 0, false, {\n                    fileName: \"/Users/pafcio/Desktop/CV i Portfolio/V2/react/components/contentbox.js\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/pafcio/Desktop/CV i Portfolio/V2/react/components/contentbox.js\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: title + \"_desc\",\n                className: \"hidden text-center text-xl p-6\",\n                children: description\n            }, void 0, false, {\n                fileName: \"/Users/pafcio/Desktop/CV i Portfolio/V2/react/components/contentbox.js\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"duration-1000 border-b-2 border-r-2 border-black w-6 h-6 m-2 rotate-45\",\n                id: title + \"_arrow\"\n            }, void 0, false, {\n                fileName: \"/Users/pafcio/Desktop/CV i Portfolio/V2/react/components/contentbox.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/pafcio/Desktop/CV i Portfolio/V2/react/components/contentbox.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_c = Contentbox;\nvar _c;\n$RefreshReg$(_c, \"Contentbox\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvbnRlbnRib3guanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFBZSxTQUFTQSxXQUFXLEtBQXNCLEVBQUU7UUFBeEIsRUFBRUMsTUFBSyxFQUFFQyxZQUFXLEVBQUUsR0FBdEI7SUFDakMsSUFBSUMsU0FBUztJQUNiLElBQUlDLFVBQVU7UUFBQztRQUFhO1FBQVE7S0FBa0I7SUFDdEQsSUFBSUMsWUFBWTtRQUFDO1FBQVE7UUFBUTtLQUFZO0lBRTdDLE1BQU1DLFNBQVMsSUFBTTtRQUNuQixJQUFJQyxVQUFVQyxTQUFTQyxjQUFjLENBQUMsR0FBUyxPQUFOUjtRQUN6QyxJQUFJUyxlQUFlRixTQUFTQyxjQUFjLENBQUMsR0FBb0IsT0FBakJSLFFBQVE7UUFDdEQsSUFBSVUsZ0JBQWdCO1lBQUNKO1lBQVNBO1lBQVNHO1NBQWE7UUFDcEQsSUFBSUUsZUFBZUosU0FBU0MsY0FBYyxDQUFDLEdBQW1CLE9BQWhCUixRQUFRO1FBRXRELElBQUlFLFdBQVcsR0FBRztZQUNoQixJQUFLLElBQUlVLElBQUksR0FBR0EsSUFBSSxHQUFHQSxJQUFLO2dCQUMxQkYsYUFBYSxDQUFDRSxFQUFFLENBQUNDLFNBQVMsQ0FBQ0MsT0FBTyxDQUFDVixTQUFTLENBQUNRLEVBQUUsRUFBRVQsT0FBTyxDQUFDUyxFQUFFO1lBQzdEO1lBRUFELGFBQWFFLFNBQVMsQ0FBQ0MsT0FBTyxDQUFDLFVBQVU7WUFFekNaLFNBQVM7UUFDWCxPQUFPO1lBQ0wsSUFBSyxJQUFJVSxLQUFJLEdBQUdBLEtBQUksR0FBR0EsS0FBSztnQkFDMUJGLGFBQWEsQ0FBQ0UsR0FBRSxDQUFDQyxTQUFTLENBQUNDLE9BQU8sQ0FBQ1gsT0FBTyxDQUFDUyxHQUFFLEVBQUVSLFNBQVMsQ0FBQ1EsR0FBRTtZQUM3RDtZQUVBRCxhQUFhRSxTQUFTLENBQUNDLE9BQU8sQ0FBQyxTQUFTO1lBRXhDWixTQUFTO1FBQ1gsQ0FBQztJQUNIO0lBRUEscUJBQ0UsOERBQUNhO1FBQ0NDLFdBQVU7UUFDVkMsSUFBSWpCO1FBQ0prQixTQUFTYjs7MEJBRVQsOERBQUNVO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRzs4QkFBSW5COzs7Ozs7Ozs7OzswQkFFUCw4REFBQ2U7Z0JBQUlFLElBQUlqQixRQUFRO2dCQUFTZ0IsV0FBVTswQkFDakNmOzs7Ozs7MEJBRUgsOERBQUNjO2dCQUNDQyxXQUFVO2dCQUNWQyxJQUFJakIsUUFBUTs7Ozs7Ozs7Ozs7O0FBSXBCLENBQUM7S0FoRHVCRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2NvbnRlbnRib3guanM/Y2Y0MSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250ZW50Ym94KHsgdGl0bGUsIGRlc2NyaXB0aW9uIH0pIHtcbiAgbGV0IHRvZ2dsZSA9IDA7XG4gIGxldCBzaXplX3VwID0gW1widy1bMzByZW1dXCIsIFwiaC05NlwiLCBcInJvdGF0ZS1bMjI1ZGVnXVwiXTtcbiAgbGV0IHNpemVfZG93biA9IFtcInctNjBcIiwgXCJoLTMyXCIsIFwicm90YXRlLTQ1XCJdO1xuXG4gIGNvbnN0IGV4dGVuZCA9ICgpID0+IHtcbiAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3RpdGxlfWApO1xuICAgIGxldCBlbGVtZW50YXJyb3cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHt0aXRsZSArIFwiX2Fycm93XCJ9YCk7XG4gICAgbGV0IGVsZW1lbnRfYXJyYXkgPSBbZWxlbWVudCwgZWxlbWVudCwgZWxlbWVudGFycm93XTtcbiAgICBsZXQgZWxlbWVudF9kZXNjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7dGl0bGUgKyBcIl9kZXNjXCJ9YCk7XG5cbiAgICBpZiAodG9nZ2xlID09PSAwKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgICBlbGVtZW50X2FycmF5W2ldLmNsYXNzTGlzdC5yZXBsYWNlKHNpemVfZG93bltpXSwgc2l6ZV91cFtpXSk7XG4gICAgICB9XG5cbiAgICAgIGVsZW1lbnRfZGVzYy5jbGFzc0xpc3QucmVwbGFjZShcImhpZGRlblwiLCBcImJsb2NrXCIpO1xuXG4gICAgICB0b2dnbGUgPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgICBlbGVtZW50X2FycmF5W2ldLmNsYXNzTGlzdC5yZXBsYWNlKHNpemVfdXBbaV0sIHNpemVfZG93bltpXSk7XG4gICAgICB9XG5cbiAgICAgIGVsZW1lbnRfZGVzYy5jbGFzc0xpc3QucmVwbGFjZShcImJsb2NrXCIsIFwiaGlkZGVuXCIpO1xuXG4gICAgICB0b2dnbGUgPSAwO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT1cImJnLWZpeGVkIGJnLWNvdmVyIGJnLW5vLXJlcGVhdCBjdkNvbnRlbnREZXNjIGR1cmF0aW9uLTEwMDAgdy02MCBoLTMyIG15LTUgcm91bmRlZC1bMnJlbV0gZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1iZXR3ZWVuIGN1cnNvci1wb2ludGVyIHNoYWRvdy1tZCBob3ZlcjpzaGFkb3ctc21cIlxuICAgICAgaWQ9e3RpdGxlfVxuICAgICAgb25DbGljaz17ZXh0ZW5kfVxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgYmctZml4ZWQgYmctY292ZXIgYmctbm8tcmVwZWF0IHctNjAgaC0yNCBjdkNvbnRlbnROYW1lIHJvdW5kZWQtWzJyZW1dIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHRleHQtNHhsXCI+XG4gICAgICAgIDxoMj57dGl0bGV9PC9oMj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBpZD17dGl0bGUgKyBcIl9kZXNjXCJ9IGNsYXNzTmFtZT1cImhpZGRlbiB0ZXh0LWNlbnRlciB0ZXh0LXhsIHAtNlwiPlxuICAgICAgICB7ZGVzY3JpcHRpb259XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwiZHVyYXRpb24tMTAwMCBib3JkZXItYi0yIGJvcmRlci1yLTIgYm9yZGVyLWJsYWNrIHctNiBoLTYgbS0yIHJvdGF0ZS00NVwiXG4gICAgICAgIGlkPXt0aXRsZSArIFwiX2Fycm93XCJ9XG4gICAgICA+PC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiQ29udGVudGJveCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJ0b2dnbGUiLCJzaXplX3VwIiwic2l6ZV9kb3duIiwiZXh0ZW5kIiwiZWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJlbGVtZW50YXJyb3ciLCJlbGVtZW50X2FycmF5IiwiZWxlbWVudF9kZXNjIiwiaSIsImNsYXNzTGlzdCIsInJlcGxhY2UiLCJkaXYiLCJjbGFzc05hbWUiLCJpZCIsIm9uQ2xpY2siLCJoMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/contentbox.js\n"));

/***/ })

});