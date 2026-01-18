//Explain how this behaves differently in arrow functions compared to traditional functions.
var Example = /** @class */ (function () {
    function Example(name) {
        var _this = this;
        this.arrowFunction = function () {
            console.log("Arrow function - Hello, " + _this.name);
        };
        this.name = name;
    }
    Example.prototype.traditionalFunction = function () {
        console.log("Traditional function - Hello, " + this.name);
    };
    return Example;
}());
var obj = new Example("World");
// Calling methods
obj.traditionalFunction(); // Output: Traditional function - Hello, World
obj.arrowFunction(); // Output: Arrow function - Hello, World
