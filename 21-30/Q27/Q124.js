"use strict";
//Create a function inside an object that returns the object's own name property using the this keyword.
const myObject = {
    name: "MyObject",
    getName: function () {
        return this.name;
    }
};
console.log(myObject.getName()); // Output: MyObject
