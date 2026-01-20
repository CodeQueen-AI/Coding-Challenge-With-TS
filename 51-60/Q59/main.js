"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myFunction = void 0;
// Explain how to export a function from one JavaScript file and import it into another file.
// utils.js
function myFunction() {
    console.log("This is my function.");
}
exports.myFunction = myFunction;
var utils_js_1 = require("./utils.js");
(0, utils_js_1.myFunction)();
