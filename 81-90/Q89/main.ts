//Create an arrow function that takes multiple parameters and returns the product of all parameters.
let multiply = (...numbers: number[]): number => {
    return numbers.reduce((product, num) => product * num, 1);
};



