//Create an arrow function that takes multiple parameters and returns the product of all parameters.
var multiply = function () {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (product, num) { return product * num; }, 1);
};
