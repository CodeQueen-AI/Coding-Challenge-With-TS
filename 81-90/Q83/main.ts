//Converting to Upper and Lower Case: Create a function that takes a string, converts it to uppercase, then to 
//lowercase, and logs both.
function convertCase(str: string) {
    let upperStr = str.toUpperCase(); // Converts to uppercase
    let lowerStr = str.toLowerCase(); // Converts to lowercase

    console.log("Uppercase:", upperStr, "Lowercase:", lowerStr);
}

convertCase("Hello World"); // Outputs: "Uppercase: HELLO WORLD Lowercase: hello world"