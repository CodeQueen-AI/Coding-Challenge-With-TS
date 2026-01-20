//Keep Only Strings: Given a mix of different types of items, make a new list that has only the word
// A mixed bag of items
let mixedArray = [1, "apple", 2, "banana", true, "carrot"];

// Picks out only the words
let stringsArray = mixedArray.filter(item => typeof item === "string");

// Shows the list of just   
console.log(stringsArray); // Output: ["apple", "banana", "carrot"]
