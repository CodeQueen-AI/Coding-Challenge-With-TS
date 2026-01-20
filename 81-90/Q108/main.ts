//Compare two strings to check if they are identical, ignoring case sensitivity.
function areStringsIdenticalIgnoreCase(str1: string, str2: string): boolean {
    return str1.toLowerCase() === str2.toLowerCase();
}
// Test the function
const string1: string = prompt("Enter the first string: ") || "";
const string2: string = prompt("Enter the second string: ") || "";
if (areStringsIdenticalIgnoreCase(string1, string2)) {
    console.log("The strings are identical ignoring case sensitivity.");
} else {
    console.log("The strings are not identical ignoring case sensitivity.");
}