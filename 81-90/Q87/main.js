"use strict";
//Explain how the this keyword changes its value when used inside a nested function within a method.
const myObject = {
    name: "MyObject",
    nestedMethod: function () {
        // Using a regular function
        setTimeout(function () {
            console.log("Inside nested function:", `this.name`); // 'this' refers to the global object, not myObject
        }, 1000);
        // Using an arrow function
        setTimeout(() => {
            console.log("Inside arrow function:", this.name); // 'this' still refers to myObject
        }, 2000);
    }
};
myObject.nestedMethod();
