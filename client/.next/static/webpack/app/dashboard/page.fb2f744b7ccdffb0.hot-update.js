"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/dashboard/page",{

/***/ "(app-pages-browser)/./app/dashboard/page.js":
/*!*******************************!*\
  !*** ./app/dashboard/page.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _components_jobDescription__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/jobDescription */ \"(app-pages-browser)/./app/dashboard/components/jobDescription.js\");\n// client/app/dashboard/page.js\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst Dashboard = ()=>{\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { user } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.auth);\n    // Redirect to the homepage if not authenticated\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!user) {\n            router.push(\"/\"); // Redirect to the login page if not logged in\n        }\n    }, [\n        user,\n        router\n    ]);\n    if (!user) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/samuelwachira/Documents/recapp/client/app/dashboard/page.js\",\n            lineNumber: 22,\n            columnNumber: 12\n        }, undefined); // Show loading while checking authentication\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"The Dashboard\"\n            }, void 0, false, {\n                fileName: \"/Users/samuelwachira/Documents/recapp/client/app/dashboard/page.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_jobDescription__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/samuelwachira/Documents/recapp/client/app/dashboard/page.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(Dashboard, \"r2UQ1qTHTH2hyi1u6MlMixf7SLc=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector\n    ];\n});\n_c = Dashboard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\nvar _c;\n$RefreshReg$(_c, \"Dashboard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9kYXNoYm9hcmQvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsK0JBQStCOzs7QUFHRztBQUNRO0FBQ0U7QUFDYTtBQUd6RCxNQUFNSSxZQUFZOztJQUNoQixNQUFNQyxTQUFTSCwwREFBU0E7SUFDeEIsTUFBTSxFQUFFSSxJQUFJLEVBQUUsR0FBR0wsd0RBQVdBLENBQUMsQ0FBQ00sUUFBVUEsTUFBTUMsSUFBSTtJQUVsRCxnREFBZ0Q7SUFDaERSLGdEQUFTQSxDQUFDO1FBQ1IsSUFBSSxDQUFDTSxNQUFNO1lBQ1RELE9BQU9JLElBQUksQ0FBQyxNQUFNLDhDQUE4QztRQUNsRTtJQUNGLEdBQUc7UUFBQ0g7UUFBTUQ7S0FBTztJQUVqQixJQUFJLENBQUNDLE1BQU07UUFDVCxxQkFBTyw4REFBQ0k7c0JBQUU7Ozs7O3VCQUFnQiw2Q0FBNkM7SUFDekU7SUFFQSxxQkFDRTs7MEJBQ0UsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNSLGtFQUFjQTs7Ozs7OztBQUdyQjtHQXJCTUM7O1FBQ1dGLHNEQUFTQTtRQUNQRCxvREFBV0E7OztLQUZ4Qkc7QUF1Qk4sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2Rhc2hib2FyZC9wYWdlLmpzP2JmNjYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY2xpZW50L2FwcC9kYXNoYm9hcmQvcGFnZS5qc1xuXCJ1c2UgY2xpZW50XCI7IC8vIFRoaXMgaXMgYSBjbGllbnQgY29tcG9uZW50XG5cbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZVNlbGVjdG9yIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcbmltcG9ydCBKb2JEZXNjcmlwdGlvbiBmcm9tIFwiLi9jb21wb25lbnRzL2pvYkRlc2NyaXB0aW9uXCI7XG5cblxuY29uc3QgRGFzaGJvYXJkID0gKCkgPT4ge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgeyB1c2VyIH0gPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmF1dGgpO1xuXG4gIC8vIFJlZGlyZWN0IHRvIHRoZSBob21lcGFnZSBpZiBub3QgYXV0aGVudGljYXRlZFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICghdXNlcikge1xuICAgICAgcm91dGVyLnB1c2goJy8nKTsgLy8gUmVkaXJlY3QgdG8gdGhlIGxvZ2luIHBhZ2UgaWYgbm90IGxvZ2dlZCBpblxuICAgIH1cbiAgfSwgW3VzZXIsIHJvdXRlcl0pO1xuXG4gIGlmICghdXNlcikge1xuICAgIHJldHVybiA8cD5Mb2FkaW5nLi4uPC9wPjsgLy8gU2hvdyBsb2FkaW5nIHdoaWxlIGNoZWNraW5nIGF1dGhlbnRpY2F0aW9uXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8aDE+VGhlIERhc2hib2FyZDwvaDE+XG4gICAgICA8Sm9iRGVzY3JpcHRpb24gLz5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZDtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTZWxlY3RvciIsInVzZVJvdXRlciIsIkpvYkRlc2NyaXB0aW9uIiwiRGFzaGJvYXJkIiwicm91dGVyIiwidXNlciIsInN0YXRlIiwiYXV0aCIsInB1c2giLCJwIiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/dashboard/page.js\n"));

/***/ })

});