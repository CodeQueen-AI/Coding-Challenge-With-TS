//Refactoring to Arrow Functions: Take a simple function that calculates the area of a rectangle and 
//refactor it into an arrow function.
// Original function for calculating the area of a rectangle
function calculateArea(width, height) {
    return width * height;
}
var calculateAreaArrow = function (width, height) { return width * height; };
console.log(calculateAreaArrow(5, 7));
