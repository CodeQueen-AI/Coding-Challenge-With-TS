//Swapping Variables: Demonstrate how to swap the values of two variables. Start with variables a = 5 and 
//b = 10, then swap their values so that a becomes 10 and b becomes 5.
// This function swaps the values of two variables
function swapValues() {
    let a = 5, b = 10; // Initially, a is 5 and b is 10
    console.log("Before swap: a =", a, "b =", b);

    let temp = a; // Temporarily stores the value of a
    a = b; // Sets a to b's value
    b = temp; // Sets b to a's original value stored in temp

    console.log("After swap: a =", a, "b =", b); // Logs the swapped values
}

swapValues();
// We use a temporary variable to hold one value while we swap them, like a magic trick!
