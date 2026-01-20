"use strict";
//Explain how the this keyword changes its value when used inside a nested function within a method
const myObject = {
    name: "MyObject",
    nestedMethod: function () {
        setTimeout(function () {
            console.log("Inside nested function:", `this.name`); 
        }, 1000);
        setTimeout(() => {
            console.log("Inside arrow function:", this.name); 
        }, 2000);
    }
};
myObject.nestedMethod();
