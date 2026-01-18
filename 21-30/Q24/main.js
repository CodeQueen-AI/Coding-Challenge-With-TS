// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more 
// comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// Tests for equality and inequality with strings
console.log("Equality test:", "apple" === "apple"); // True
console.log("Inequality test:", "orange" !== "orange"); // True
// Tests using the lower case function
console.log("Lowercase equality test:", "HELLO".toLowerCase() === "hello"); // True
console.log("Lowercase inequality test:", "HeLLo".toLowerCase() !== "hello"); // False
// Numerical tests
console.log("Equality test:", 10 === 10); // True
console.log("Inequality test:", 10 !== 10); // True
console.log("Greater than test:", 10 > 5); // True
console.log("Less than test:", 5 < 10); // True
console.log("Greater than or equal to test:", 10 >= 10); // True
console.log("Less than or equal to test:", 5 <= 10); // True
// Tests using "and" and "or" operators
console.log("AND operator test:", (10 > 5) && (5 < 10)); // True
console.log("OR operator test:", (10 > 5) || (5 < 10)); // True
// Test whether an item is in an array
var fruits = ["apple", "banana", "orange"];
console.log("Item in array test:", fruits.includes("banana")); // True
// Test whether an item is not in an array
console.log("Item not in array test:", !fruits.includes("grape")); // True
