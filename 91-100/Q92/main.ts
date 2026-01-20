//Write a condition using logical operators that checks if a number is divisible by both 2 and 3.
function isDivisibleBy2And3(number: number): boolean {
    return number % 2 === 0 && number % 3 === 0;
}
// Test the function
const num: number = parseInt(prompt("Enter a number: ") || "0");
if (isDivisibleBy2And3(num)) {
    console.log(`${num} is divisible by both 2 and 3.`);
} else {
    console.log(`${num} is not divisible by both 2 and 3.`);
}
