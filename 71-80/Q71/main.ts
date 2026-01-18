//Compare let and const: Create two examples where let allows reassignment but const does not. Try to reassign
// a const-declared variable and catch the error.
// Using `let` for a variable that can be reassigned
let age = 25;
age = 26; // Works fine because `let` allows reassignment
console.log(age); // Shows 26

// Trying to reassign a `const`-declared variable
const Name = "Alice";
try {
    Name = "Bob"; // This line will cause an error
} catch (error) {
    console.log("Error: Can't reassign a `const`-declared variable."); // This message is shown
}
// This example illustrates that `const` prevents changing the variable once it's set.

