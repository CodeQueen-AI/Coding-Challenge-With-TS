//Keep Only Strings: Given a mix of different types of items, make a new list that has only the word
// A mixed bag of items
var mixedArray = [1, "apple", 2, "banana", true, "carrot"];
var stringsArray = mixedArray.filter(function (item) { return typeof item === "string"; });
console.log(stringsArray); 