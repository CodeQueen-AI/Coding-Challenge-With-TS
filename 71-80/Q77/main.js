//Default Parameters: Write a function that greets a user. It should take the user's name as a parameter and 
//say hello. If no name is given, it should greet an anonymous user.
// This function greets a user by name, or greets an anonymous user if no name is provided
function greetUser(name) {
    if (name === void 0) { name = "anonymous"; }
    console.log("Hello, ".concat(name, "!"));
}
greetUser("Alice");
greetUser();