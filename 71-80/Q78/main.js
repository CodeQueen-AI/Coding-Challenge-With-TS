//Function Expressions vs. Function Declarations: Compare function expressions and declarations by creating
// one of each that performs the same task, such as squaring a number

function squareDeclaration(number) {
    return number * number;
}
var squareExpression = function (number) {
    return number * number;
};
console.log(squareDeclaration(4)); 
console.log(squareExpression(4)); 