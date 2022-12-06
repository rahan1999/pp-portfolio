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

/***/ "./components/menu.js":
/*!****************************!*\
  !*** ./components/menu.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Menu; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nlet menu_classList = \"duration-1000 w-[20%] text-center top_menu text-xs md:text-base\";\nlet bar_position = [\n    \"ml-[0%]\",\n    \"ml-[20%]\",\n    \"ml-[40%]\",\n    \"ml-[60%]\",\n    \"ml-[80%]\"\n];\nlet bar_toggle = 0;\nfunction Menu() {\n    _s();\n    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{\n        window.onscroll = function() {\n            onView();\n        };\n    });\n    const onView = ()=>{\n        const box = document.querySelectorAll(\".box\");\n        for(let i = 0; i < box.length; i++){\n            let rect = box[i].getBoundingClientRect();\n            const isInViewport = rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);\n            if (isInViewport === true) {\n                toggle(i);\n            }\n        }\n    };\n    const toggle = (id)=>{\n        let element = document.querySelectorAll(\".top_menu\");\n        let barBufor = document.getElementById(\"bar\");\n        let removeBufor = bar_position[bar_toggle];\n        let bufor = bar_position[id];\n        for(let i = 0; i < element.length; i++){\n            element[i].classList.remove(\"font-extrabold\");\n        }\n        barBufor.classList.remove(removeBufor);\n        element[id].classList.add(\"font-extrabold\");\n        barBufor.classList.add(bufor);\n        bar_toggle = id;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"flex flex-row justify-around w-screen h-10 fixed px-3 z-10\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"...\",\n                className: \"hidden lg:block\"\n            }, void 0, false, {\n                fileName: \"/Users/pafcio/Desktop/CV i Portfolio/V2/react/components/menu.js\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col justify-evenly w-full lg:w-1/2 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row justify-between align-middle\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"font-extrabold \".concat(menu_classList),\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/#\",\n                                    children: \"TOP\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/pafcio/Desktop/CV i Portfolio/V2/react/components/menu.js\",\n                                    lineNumber: 61,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/pafcio/Desktop/CV i Portfolio/V2/react/components/menu.js\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: menu_classList,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/#about\",\n                                    children: \"O MNIE\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/pafcio/Desktop/CV i Portfolio/V2/react/components/menu.js\",\n                                    lineNumber: 64,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/pafcio/Desktop/CV i Portfolio/V2/react/components/menu.js\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: menu_classList,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/#cv\",\n                                    children: \"CV\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/pafcio/Desktop/CV i Portfolio/V2/react/components/menu.js\",\n                                    lineNumber: 67,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/pafcio/Desktop/CV i Portfolio/V2/react/components/menu.js\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: menu_classList,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/#\",\n                                    children: \"PORTFOLIO\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/pafcio/Desktop/CV i Portfolio/V2/react/components/menu.js\",\n                                    lineNumber: 70,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/pafcio/Desktop/CV i Portfolio/V2/react/components/menu.js\",\n                                lineNumber: 69,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: menu_classList,\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                    href: \"/#footer\",\n                                    children: \"KONTAKT\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/pafcio/Desktop/CV i Portfolio/V2/react/components/menu.js\",\n                                    lineNumber: 73,\n                                    columnNumber: 13\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/pafcio/Desktop/CV i Portfolio/V2/react/components/menu.js\",\n                                lineNumber: 72,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/pafcio/Desktop/CV i Portfolio/V2/react/components/menu.js\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\",\n                                id: \"bufor\"\n                            }, void 0, false, {\n                                fileName: \"/Users/pafcio/Desktop/CV i Portfolio/V2/react/components/menu.js\",\n                                lineNumber: 77,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"duration-1000 h-0.5 w-[20%] bg-black rounded\",\n                                id: \"bar\"\n                            }, void 0, false, {\n                                fileName: \"/Users/pafcio/Desktop/CV i Portfolio/V2/react/components/menu.js\",\n                                lineNumber: 78,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/pafcio/Desktop/CV i Portfolio/V2/react/components/menu.js\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/pafcio/Desktop/CV i Portfolio/V2/react/components/menu.js\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/pafcio/Desktop/CV i Portfolio/V2/react/components/menu.js\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, this);\n}\n_s(Menu, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n_c = Menu;\nvar _c;\n$RefreshReg$(_c, \"Menu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Oi8vX05fRS8uL2NvbXBvbmVudHMvbWVudS5qcz82MDE3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5sZXQgbWVudV9jbGFzc0xpc3QgPVxuICBcImR1cmF0aW9uLTEwMDAgdy1bMjAlXSB0ZXh0LWNlbnRlciB0b3BfbWVudSB0ZXh0LXhzIG1kOnRleHQtYmFzZVwiO1xubGV0IGJhcl9wb3NpdGlvbiA9IFtcIm1sLVswJV1cIiwgXCJtbC1bMjAlXVwiLCBcIm1sLVs0MCVdXCIsIFwibWwtWzYwJV1cIiwgXCJtbC1bODAlXVwiXTtcbmxldCBiYXJfdG9nZ2xlID0gMDtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVudSgpIHtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICB3aW5kb3cub25zY3JvbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBvblZpZXcoKTtcbiAgICB9O1xuICB9KTtcblxuICBjb25zdCBvblZpZXcgPSAoKSA9PiB7XG4gICAgY29uc3QgYm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5ib3hcIik7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJveC5sZW5ndGg7IGkrKykge1xuICAgICAgbGV0IHJlY3QgPSBib3hbaV0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgIGNvbnN0IGlzSW5WaWV3cG9ydCA9XG4gICAgICAgIHJlY3QudG9wID49IDAgJiZcbiAgICAgICAgcmVjdC5sZWZ0ID49IDAgJiZcbiAgICAgICAgcmVjdC5ib3R0b20gPD1cbiAgICAgICAgICAod2luZG93LmlubmVySGVpZ2h0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpICYmXG4gICAgICAgIHJlY3QucmlnaHQgPD1cbiAgICAgICAgICAod2luZG93LmlubmVyV2lkdGggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKTtcblxuICAgICAgaWYgKGlzSW5WaWV3cG9ydCA9PT0gdHJ1ZSkge1xuICAgICAgICB0b2dnbGUoaSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHRvZ2dsZSA9IChpZCkgPT4ge1xuICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50b3BfbWVudVwiKTtcbiAgICBsZXQgYmFyQnVmb3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJhclwiKTtcbiAgICBsZXQgcmVtb3ZlQnVmb3IgPSBiYXJfcG9zaXRpb25bYmFyX3RvZ2dsZV07XG4gICAgbGV0IGJ1Zm9yID0gYmFyX3Bvc2l0aW9uW2lkXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudC5sZW5ndGg7IGkrKykge1xuICAgICAgZWxlbWVudFtpXS5jbGFzc0xpc3QucmVtb3ZlKFwiZm9udC1leHRyYWJvbGRcIik7XG4gICAgfVxuXG4gICAgYmFyQnVmb3IuY2xhc3NMaXN0LnJlbW92ZShyZW1vdmVCdWZvcik7XG5cbiAgICBlbGVtZW50W2lkXS5jbGFzc0xpc3QuYWRkKFwiZm9udC1leHRyYWJvbGRcIik7XG5cbiAgICBiYXJCdWZvci5jbGFzc0xpc3QuYWRkKGJ1Zm9yKTtcblxuICAgIGJhcl90b2dnbGUgPSBpZDtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxuYXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBqdXN0aWZ5LWFyb3VuZCB3LXNjcmVlbiBoLTEwIGZpeGVkIHB4LTMgei0xMFwiPlxuICAgICAgPGltZyBzcmM9XCIuLi5cIiBjbGFzc05hbWU9XCJoaWRkZW4gbGc6YmxvY2tcIiAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktZXZlbmx5IHctZnVsbCBsZzp3LTEvMiBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGp1c3RpZnktYmV0d2VlbiBhbGlnbi1taWRkbGVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGZvbnQtZXh0cmFib2xkICR7bWVudV9jbGFzc0xpc3R9YH0+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5UT1A8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e21lbnVfY2xhc3NMaXN0fT5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI2Fib3V0XCI+TyBNTklFPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXttZW51X2NsYXNzTGlzdH0+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiLyNjdlwiPkNWPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXttZW51X2NsYXNzTGlzdH0+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiLyNcIj5QT1JURk9MSU88L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e21lbnVfY2xhc3NMaXN0fT5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvI2Zvb3RlclwiPktPTlRBS1Q8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXhcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiIGlkPVwiYnVmb3JcIj48L2Rpdj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJkdXJhdGlvbi0xMDAwIGgtMC41IHctWzIwJV0gYmctYmxhY2sgcm91bmRlZFwiXG4gICAgICAgICAgICBpZD1cImJhclwiXG4gICAgICAgICAgPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmF2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiTGluayIsIm1lbnVfY2xhc3NMaXN0IiwiYmFyX3Bvc2l0aW9uIiwiYmFyX3RvZ2dsZSIsIk1lbnUiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJvbnNjcm9sbCIsIm9uVmlldyIsImJveCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImkiLCJsZW5ndGgiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaXNJblZpZXdwb3J0IiwidG9wIiwibGVmdCIsImJvdHRvbSIsImlubmVySGVpZ2h0IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xpZW50SGVpZ2h0IiwicmlnaHQiLCJpbm5lcldpZHRoIiwiY2xpZW50V2lkdGgiLCJ0b2dnbGUiLCJpZCIsImVsZW1lbnQiLCJiYXJCdWZvciIsImdldEVsZW1lbnRCeUlkIiwicmVtb3ZlQnVmb3IiLCJidWZvciIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsIm5hdiIsImNsYXNzTmFtZSIsImltZyIsInNyYyIsImRpdiIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/menu.js\n"));

/***/ })

});