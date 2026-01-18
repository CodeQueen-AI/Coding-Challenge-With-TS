// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check
//  for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in
//  your array, the if block should print a statement, such as You really like bananas!
// let favorite_fruits: string[] = ["apple", "banana", "orange"];
// if (favorite_fruits.includes("apple")) {
//     console.log("I really like apples!");
// }
// if (favorite_fruits.includes("banana")) {
//     console.log("I really like bananas!");
// }
// if (favorite_fruits.includes("orange")) {
//     console.log("I really like oranges!");
// }
// if (favorite_fruits.includes("kiwi")) {
//     console.log("I really like kiwis!");
// }
// if (favorite_fruits.includes("strawberry")) {
//     console.log("I really like strawberries!");
//}
// // Array of favorite fruits
// const favorite_fruits: string[] = ["banana", "apple", "strawberry"];
// // Check if specific fruits are in the array
// if (favorite_fruits.includes("banana")) {
//     console.log("You really like bananas!");
// }
// if (favorite_fruits.includes("apple")) {
//     console.log("You really like apples!");
// }
// if (favorite_fruits.includes("strawberry")) {
//     console.log("You really like strawberries!");
// }
// if (favorite_fruits.includes("orange")) {
//     console.log("You really like oranges!");
// }
// if (favorite_fruits.includes("kiwi")) {
//     console.log("You really like kiwis!");
// }
// • Tests for equality and inequality with strings
var fruit1 = "Apple";
var fruit2 = "Litchi";
console.log("Equality test with strings::", fruit1 === "Litchi");
console.log("Inequality test with strings:", fruit2 !== "Apple");
// • Tests using the lower case function
var mixedCaseString = "HelloWorld";
console.log("Test no 1:", mixedCaseString.toLowerCase() === "helloworld");
console.log("Test no 2:", mixedCaseString.toLowerCase() === "hello world");
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var numberA = 10;
var numberB = 20;
console.log("Equality test with numbers:", numberA === 10);
console.log("Inequality test with numbers:", numberB !== 20);
console.log("Greater than test:", numberA < numberB);
console.log("Less than test:", numberA > numberB);
console.log("Greater than or equal to test:", numberA >= numberB);
console.log("Less than or equal to test:", numberA <= numberB);
// • Tests using "and" and "or" operators
var condition1 = true;
var condition2 = false;
console.log("And operator Test", condition1 && condition2);
console.log("OR operator Test", condition1 || condition2);
// • Test whether an item is in a array
var array = ["Apple", "Banana", "Orange", "Litchi"];
console.log("Item in array test:", array.includes("Orange"));
// • Test whether an item is not in a array
console.log("Item not in array test:", array.includes("Mango"));
