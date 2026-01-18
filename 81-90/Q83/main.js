//Converting to Upper and Lower Case: Create a function that takes a string, converts it to uppercase, then to 
//lowercase, and logs both.
function convertCase(str) {
    var upperStr = str.toUpperCase(); // Converts to uppercase
    var lowerStr = str.toLowerCase(); // Converts to lowercase
    console.log("Uppercase:", upperStr, "Lowercase:", lowerStr);
}
convertCase("Hello World"); // Outputs: "Uppercase: HELLO WORLD Lowercase: hello world"
