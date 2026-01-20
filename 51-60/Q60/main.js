//Write a function to remove the last element from an array and return the removed element
// This function removes the last element from an array and returns it
function removeLastElement(arr) {
    return arr.pop(); 
}
var fruits = ["Apple", "Banana", "Cherry"];
console.log(removeLastElement(fruits));
console.log(fruits); 