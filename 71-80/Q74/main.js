//Swapping Variables: Demonstrate how to swap the values of two variables. Start with variables a = 5 and 
//b = 10, then swap their values so that a becomes 10 and b becomes 5.
// This function swaps the values of two variables
function swapValues() {
    var a = 5, b = 10; 
    console.log("Before swap: a =", a, "b =", b);
    var temp = a; 
    a = b;
    b = temp; 
    console.log("After swap: a =", a, "b =", b); 
}
swapValues();