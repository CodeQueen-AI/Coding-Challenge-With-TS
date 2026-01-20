//Write a function that uses the .filter() method to return an array of numbers greater than 10.
// This function filters an array, keeping only numbers greater than 10
function filterGreaterThanTen(numbers) {
    return numbers.filter(function (number) { return number > 10; });
}
var numbers = [5, 10, 15, 20, 25];
console.log(filterGreaterThanTen(numbers)); 