"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.js":
/*!*********************!*\
  !*** ./app/page.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _store_authSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/authSlice */ \"(app-pages-browser)/./store/authSlice.js\");\n/* harmony import */ var _barrel_optimize_names_FcGoogle_react_icons_fc__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! __barrel_optimize__?names=FcGoogle!=!react-icons/fc */ \"(app-pages-browser)/./node_modules/react-icons/fc/index.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n // Import Google icon\n // Import framer-motion\nconst Page = ()=>{\n    _s();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const { user, status, error } = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector)((state)=>state.auth);\n    const handleSignIn = ()=>{\n        dispatch((0,_store_authSlice__WEBPACK_IMPORTED_MODULE_3__.signInWithGoogle)());\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (user) {\n            router.push(\"/dashboard\");\n        }\n    }, [\n        user,\n        router\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen flex overflow-hidden font-sans bg-gradient-to-r from-gray-700 via-gray-900 to-black\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-1 flex items-center justify-center text-teal-400 p-8 overflow-hidden\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                    className: \"max-w-lg\",\n                    initial: {\n                        x: \"-100%\"\n                    },\n                    animate: {\n                        x: 0\n                    },\n                    transition: {\n                        type: \"spring\",\n                        stiffness: 50,\n                        damping: 20\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-5xl font-extrabold mb-4\",\n                            children: \"Welcome to Cover Letter Generator\"\n                        }, void 0, false, {\n                            fileName: \"/Users/samuelwachira/Documents/recapp/client/app/page.js\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-xl leading-relaxed\",\n                            children: \"Create personalized cover letters effortlessly with our AI-powered generator. Sign in to get started.\"\n                        }, void 0, false, {\n                            fileName: \"/Users/samuelwachira/Documents/recapp/client/app/page.js\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/samuelwachira/Documents/recapp/client/app/page.js\",\n                    lineNumber: 29,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/samuelwachira/Documents/recapp/client/app/page.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                className: \"flex-1 flex items-center justify-center p-8\",\n                initial: {\n                    opacity: 0\n                },\n                animate: {\n                    opacity: 1\n                },\n                transition: {\n                    duration: 1,\n                    delay: 0.5\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {\n                    className: \"max-w-md w-full bg-gray-800 bg-opacity-80 rounded-lg shadow-md p-6\",\n                    initial: {\n                        opacity: 0\n                    },\n                    animate: {\n                        opacity: 1\n                    },\n                    transition: {\n                        delay: 0.3,\n                        duration: 0.8\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                            className: \"text-3xl font-semibold text-teal-400 mb-6 text-center\",\n                            children: \"Sign In\"\n                        }, void 0, false, {\n                            fileName: \"/Users/samuelwachira/Documents/recapp/client/app/page.js\",\n                            lineNumber: 55,\n                            columnNumber: 11\n                        }, undefined),\n                        status === \"loading\" && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-center text-gray-300 mb-4\",\n                            children: \"Loading...\"\n                        }, void 0, false, {\n                            fileName: \"/Users/samuelwachira/Documents/recapp/client/app/page.js\",\n                            lineNumber: 57,\n                            columnNumber: 36\n                        }, undefined),\n                        error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-center text-red-500 mb-4\",\n                            children: error\n                        }, void 0, false, {\n                            fileName: \"/Users/samuelwachira/Documents/recapp/client/app/page.js\",\n                            lineNumber: 58,\n                            columnNumber: 21\n                        }, undefined),\n                        !user ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.button, {\n                                    onClick: handleSignIn,\n                                    className: \"w-full flex items-center justify-center px-4 py-2 mb-4 text-white bg-teal-500 hover:bg-teal-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400\",\n                                    whileHover: {\n                                        scale: 1.05\n                                    },\n                                    whileTap: {\n                                        scale: 0.95\n                                    },\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_FcGoogle_react_icons_fc__WEBPACK_IMPORTED_MODULE_6__.FcGoogle, {\n                                            className: \"w-6 h-6 mr-2\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/samuelwachira/Documents/recapp/client/app/page.js\",\n                                            lineNumber: 69,\n                                            columnNumber: 17\n                                        }, undefined),\n                                        \" \",\n                                        \"Sign in with Google\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/samuelwachira/Documents/recapp/client/app/page.js\",\n                                    lineNumber: 63,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mt-4\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"mb-4\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                        htmlFor: \"email\",\n                                                        className: \"block text-teal-400\",\n                                                        children: \"Email\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/samuelwachira/Documents/recapp/client/app/page.js\",\n                                                        lineNumber: 77,\n                                                        columnNumber: 21\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.input, {\n                                                        type: \"email\",\n                                                        id: \"email\",\n                                                        className: \"w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 bg-gray-900 text-white\",\n                                                        whileFocus: {\n                                                            scale: 1.02\n                                                        }\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/samuelwachira/Documents/recapp/client/app/page.js\",\n                                                        lineNumber: 78,\n                                                        columnNumber: 21\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/samuelwachira/Documents/recapp/client/app/page.js\",\n                                                lineNumber: 76,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"mb-6\",\n                                                children: [\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                                        htmlFor: \"password\",\n                                                        className: \"block text-teal-400\",\n                                                        children: \"Password\"\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/samuelwachira/Documents/recapp/client/app/page.js\",\n                                                        lineNumber: 86,\n                                                        columnNumber: 21\n                                                    }, undefined),\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.input, {\n                                                        type: \"password\",\n                                                        id: \"password\",\n                                                        className: \"w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-teal-400 bg-gray-900 text-white\",\n                                                        whileFocus: {\n                                                            scale: 1.02\n                                                        }\n                                                    }, void 0, false, {\n                                                        fileName: \"/Users/samuelwachira/Documents/recapp/client/app/page.js\",\n                                                        lineNumber: 87,\n                                                        columnNumber: 21\n                                                    }, undefined)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/samuelwachira/Documents/recapp/client/app/page.js\",\n                                                lineNumber: 85,\n                                                columnNumber: 19\n                                            }, undefined),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.button, {\n                                                type: \"submit\",\n                                                className: \"w-full px-4 py-2 text-white bg-teal-500 hover:bg-teal-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400\",\n                                                whileHover: {\n                                                    scale: 1.05\n                                                },\n                                                whileTap: {\n                                                    scale: 0.95\n                                                },\n                                                children: \"Login\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/samuelwachira/Documents/recapp/client/app/page.js\",\n                                                lineNumber: 94,\n                                                columnNumber: 19\n                                            }, undefined)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/samuelwachira/Documents/recapp/client/app/page.js\",\n                                        lineNumber: 75,\n                                        columnNumber: 17\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"/Users/samuelwachira/Documents/recapp/client/app/page.js\",\n                                    lineNumber: 74,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-center text-gray-300\",\n                            children: \"Redirecting to dashboard...\"\n                        }, void 0, false, {\n                            fileName: \"/Users/samuelwachira/Documents/recapp/client/app/page.js\",\n                            lineNumber: 106,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/samuelwachira/Documents/recapp/client/app/page.js\",\n                    lineNumber: 49,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/samuelwachira/Documents/recapp/client/app/page.js\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/samuelwachira/Documents/recapp/client/app/page.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Page, \"ks9p8Qn0EGl2HrAOvbbbTeQ3sk0=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch,\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_4__.useSelector\n    ];\n});\n_c = Page;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Page);\nvar _c;\n$RefreshReg$(_c, \"Page\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixpREFBTUEsQ0FBQzBCLE1BQU07Z0RBQ1pULE1BQUs7Z0RBQ0xMLFdBQVU7Z0RBQ1ZnQixZQUFZO29EQUFFQyxPQUFPO2dEQUFLO2dEQUMxQkMsVUFBVTtvREFBRUQsT0FBTztnREFBSzswREFDekI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt5REFPUCw4REFBQ1I7NEJBQUVULFdBQVU7c0NBQTRCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1yRDtHQXRHTVg7O1FBQ2FOLG9EQUFXQTtRQUNiRSxzREFBU0E7UUFDUUQsb0RBQVdBOzs7S0FIdkNLO0FBd0dOLCtEQUFlQSxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLmpzP2JlNjciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7IC8vIFRoaXMgaXMgYSBjbGllbnQgY29tcG9uZW50XG5cbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XG5pbXBvcnQgeyBzaWduSW5XaXRoR29vZ2xlIH0gZnJvbSAnLi4vc3RvcmUvYXV0aFNsaWNlJztcbmltcG9ydCB7IEZjR29vZ2xlIH0gZnJvbSAncmVhY3QtaWNvbnMvZmMnOyAvLyBJbXBvcnQgR29vZ2xlIGljb25cbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nOyAvLyBJbXBvcnQgZnJhbWVyLW1vdGlvblxuXG5jb25zdCBQYWdlID0gKCkgPT4ge1xuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuICBjb25zdCB7IHVzZXIsIHN0YXR1cywgZXJyb3IgfSA9IHVzZVNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYXV0aCk7XG5cbiAgY29uc3QgaGFuZGxlU2lnbkluID0gKCkgPT4ge1xuICAgIGRpc3BhdGNoKHNpZ25JbldpdGhHb29nbGUoKSk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAodXNlcikge1xuICAgICAgcm91dGVyLnB1c2goJy9kYXNoYm9hcmQnKTtcbiAgICB9XG4gIH0sIFt1c2VyLCByb3V0ZXJdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGZsZXggb3ZlcmZsb3ctaGlkZGVuIGZvbnQtc2FucyBiZy1ncmFkaWVudC10by1yIGZyb20tZ3JheS03MDAgdmlhLWdyYXktOTAwIHRvLWJsYWNrXCI+XG4gICAgICB7LyogTGVmdCBzaWRlOiBXZWxjb21lIFRleHQgKi99XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LXRlYWwtNDAwIHAtOCBvdmVyZmxvdy1oaWRkZW5cIj5cbiAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJtYXgtdy1sZ1wiXG4gICAgICAgICAgaW5pdGlhbD17eyB4OiAnLTEwMCUnIH19XG4gICAgICAgICAgYW5pbWF0ZT17eyB4OiAwIH19XG4gICAgICAgICAgdHJhbnNpdGlvbj17eyB0eXBlOiAnc3ByaW5nJywgc3RpZmZuZXNzOiA1MCwgZGFtcGluZzogMjAgfX1cbiAgICAgICAgPlxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTV4bCBmb250LWV4dHJhYm9sZCBtYi00XCI+V2VsY29tZSB0byBDb3ZlciBMZXR0ZXIgR2VuZXJhdG9yPC9oMT5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LXhsIGxlYWRpbmctcmVsYXhlZFwiPlxuICAgICAgICAgICAgQ3JlYXRlIHBlcnNvbmFsaXplZCBjb3ZlciBsZXR0ZXJzIGVmZm9ydGxlc3NseSB3aXRoIG91ciBBSS1wb3dlcmVkIGdlbmVyYXRvci4gU2lnbiBpbiB0byBnZXQgc3RhcnRlZC5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICB7LyogUmlnaHQgc2lkZTogTG9naW4gRm9ybSAqL31cbiAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImZsZXgtMSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBwLThcIlxuICAgICAgICBpbml0aWFsPXt7IG9wYWNpdHk6IDAgfX1cbiAgICAgICAgYW5pbWF0ZT17eyBvcGFjaXR5OiAxIH19XG4gICAgICAgIHRyYW5zaXRpb249e3sgZHVyYXRpb246IDEsIGRlbGF5OiAwLjUgfX1cbiAgICAgID5cbiAgICAgICAgPG1vdGlvbi5kaXZcbiAgICAgICAgICBjbGFzc05hbWU9XCJtYXgtdy1tZCB3LWZ1bGwgYmctZ3JheS04MDAgYmctb3BhY2l0eS04MCByb3VuZGVkLWxnIHNoYWRvdy1tZCBwLTZcIlxuICAgICAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMCB9fVxuICAgICAgICAgIGFuaW1hdGU9e3sgb3BhY2l0eTogMSB9fVxuICAgICAgICAgIHRyYW5zaXRpb249e3sgZGVsYXk6IDAuMywgZHVyYXRpb246IDAuOCB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtc2VtaWJvbGQgdGV4dC10ZWFsLTQwMCBtYi02IHRleHQtY2VudGVyXCI+U2lnbiBJbjwvaDI+XG5cbiAgICAgICAgICB7c3RhdHVzID09PSAnbG9hZGluZycgJiYgPHAgY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1ncmF5LTMwMCBtYi00XCI+TG9hZGluZy4uLjwvcD59XG4gICAgICAgICAge2Vycm9yICYmIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtcmVkLTUwMCBtYi00XCI+e2Vycm9yfTwvcD59XG5cbiAgICAgICAgICB7IXVzZXIgPyAoXG4gICAgICAgICAgICA8PlxuICAgICAgICAgICAgICB7LyogR29vZ2xlIFNpZ24tSW4gQnV0dG9uICovfVxuICAgICAgICAgICAgICA8bW90aW9uLmJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNpZ25Jbn1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcHgtNCBweS0yIG1iLTQgdGV4dC13aGl0ZSBiZy10ZWFsLTUwMCBob3ZlcjpiZy10ZWFsLTYwMCByb3VuZGVkLWxnIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1vZmZzZXQtMiBmb2N1czpyaW5nLXRlYWwtNDAwXCJcbiAgICAgICAgICAgICAgICB3aGlsZUhvdmVyPXt7IHNjYWxlOiAxLjA1IH19XG4gICAgICAgICAgICAgICAgd2hpbGVUYXA9e3sgc2NhbGU6IDAuOTUgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxGY0dvb2dsZSBjbGFzc05hbWU9XCJ3LTYgaC02IG1yLTJcIiAvPiB7LyogR29vZ2xlIEljb24gKi99XG4gICAgICAgICAgICAgICAgU2lnbiBpbiB3aXRoIEdvb2dsZVxuICAgICAgICAgICAgICA8L21vdGlvbi5idXR0b24+XG5cbiAgICAgICAgICAgICAgey8qIE9wdGlvbmFsOiBBZGQgZW1haWwvcGFzc3dvcmQgZmllbGRzICovfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTRcIj5cbiAgICAgICAgICAgICAgICA8Zm9ybT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsXCIgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC10ZWFsLTQwMFwiPkVtYWlsPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5pbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMgcHktMiBtdC0xIGJvcmRlciByb3VuZGVkLW1kIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy10ZWFsLTQwMCBiZy1ncmF5LTkwMCB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICB3aGlsZUZvY3VzPXt7IHNjYWxlOiAxLjAyIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItNlwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPVwiYmxvY2sgdGV4dC10ZWFsLTQwMFwiPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPG1vdGlvbi5pbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHB4LTMgcHktMiBtdC0xIGJvcmRlciByb3VuZGVkLW1kIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy10ZWFsLTQwMCBiZy1ncmF5LTkwMCB0ZXh0LXdoaXRlXCJcbiAgICAgICAgICAgICAgICAgICAgICB3aGlsZUZvY3VzPXt7IHNjYWxlOiAxLjAyIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxtb3Rpb24uYnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcHgtNCBweS0yIHRleHQtd2hpdGUgYmctdGVhbC01MDAgaG92ZXI6YmctdGVhbC02MDAgcm91bmRlZC1sZyBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctb2Zmc2V0LTIgZm9jdXM6cmluZy10ZWFsLTQwMFwiXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlSG92ZXI9e3sgc2NhbGU6IDEuMDUgfX1cbiAgICAgICAgICAgICAgICAgICAgd2hpbGVUYXA9e3sgc2NhbGU6IDAuOTUgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgTG9naW5cbiAgICAgICAgICAgICAgICAgIDwvbW90aW9uLmJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC8+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtZ3JheS0zMDBcIj5SZWRpcmVjdGluZyB0byBkYXNoYm9hcmQuLi48L3A+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgPC9tb3Rpb24uZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZTtcbiJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VEaXNwYXRjaCIsInVzZVNlbGVjdG9yIiwidXNlUm91dGVyIiwic2lnbkluV2l0aEdvb2dsZSIsIkZjR29vZ2xlIiwibW90aW9uIiwiUGFnZSIsImRpc3BhdGNoIiwicm91dGVyIiwidXNlciIsInN0YXR1cyIsImVycm9yIiwic3RhdGUiLCJhdXRoIiwiaGFuZGxlU2lnbkluIiwicHVzaCIsImRpdiIsImNsYXNzTmFtZSIsImluaXRpYWwiLCJ4IiwiYW5pbWF0ZSIsInRyYW5zaXRpb24iLCJ0eXBlIiwic3RpZmZuZXNzIiwiZGFtcGluZyIsImgxIiwicCIsIm9wYWNpdHkiLCJkdXJhdGlvbiIsImRlbGF5IiwiaDIiLCJidXR0b24iLCJvbkNsaWNrIiwid2hpbGVIb3ZlciIsInNjYWxlIiwid2hpbGVUYXAiLCJmb3JtIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJpZCIsIndoaWxlRm9jdXMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.js\n"));

/***/ })

});