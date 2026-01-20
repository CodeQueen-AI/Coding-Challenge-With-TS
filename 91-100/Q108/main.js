//Compare two strings to check if they are identical, ignoring case sensitivity.
function areStringsIdenticalIgnoreCase(str1, str2) {
    return str1.toLowerCase() === str2.toLowerCase();
}
var string1 = prompt("Enter the first string: ") || "";
var string2 = prompt("Enter the second string: ") || "";
if (areStringsIdenticalIgnoreCase(string1, string2)) {
    console.log("The strings are identical ignoring case sensitivity.");
}
else {
    console.log("The strings are not identical ignoring case sensitivity.");
}
