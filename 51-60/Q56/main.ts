//Implement a switch statement that evaluates an expression and uses the default case if none of the cases match.
function evaluateExpression(value: number): void {
    switch (value) {
        case 1:
            console.log("The value is 1");
            break;
        case 2:
            console.log("The value is 2");
            break;
        case 3:
            console.log("The value is 3");
            break;
        default:
            console.log("The value is not 1, 2, or 3");
            break;
    }
}

evaluateExpression(2); // Output: The value is 2
evaluateExpression(5); // Output: The value is not 1, 2, or 3