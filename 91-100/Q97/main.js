// Write a function that returns the current date in the format "DD-MM-YYYY".
// This function formats the current date as DD-MM-YYYY
function getCurrentDateFormatted() {
    var now = new Date();
    var day = String(now.getDate()).padStart(2, '0'); // Ensures the day is two digits
    var month = String(now.getMonth() + 1).padStart(2, '0'); // Adds 1 because months are 0-indexed
    var year = now.getFullYear();
    return "".concat(day, "-").concat(month, "-").concat(year);
}
console.log(getCurrentDateFormatted()); 