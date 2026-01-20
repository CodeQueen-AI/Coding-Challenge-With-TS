//Determine if a given year is a leap year using comparison operators.
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
// Test the function
var year = parseInt(prompt("Enter a year: ") || "0");
if (isLeapYear(year)) {
    console.log("".concat(year, " is a leap year."));
}
else {
    console.log("".concat(year, " is not a\u00A0leap\u00A0year."));
}
