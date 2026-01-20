//Compare let and const: Create two examples where let allows reassignment but const does not. Try to reassign
// a const-declared variable and catch the error.
// Using `let` for a variable that can be reassigned
var age = 25;
age = 26; 
console.log(age); 
var Name = "Alice";
try {
    Name = "Bob"; 
}
catch (error) {
    console.log("Error: Can't reassign a `const`-declared variable."); 
}