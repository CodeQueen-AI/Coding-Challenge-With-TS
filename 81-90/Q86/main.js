"use strict";
//Modify a method in an object to use the this keyword to access another property in the same object.
const myObject = {
    name: "MyObject",
    description: "This is my object.",
    getDescription: function () {
        return `${this.name}: t${this.description}`;
    }
};
console.log(myObject.getDescription()); // Output: MyObject: This is my object.
