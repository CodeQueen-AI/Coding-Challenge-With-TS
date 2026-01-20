//Generate a date object representing your next birthday and log it to the console.
// Generates a Date object for the next occurrence of a specific birthday
function getNextBirthday(month, day) {
    var today = new Date();
    var year = today.getFullYear();
    var birthday = new Date(year, month - 1, day); 
    if (birthday < today) {
        birthday.setFullYear(year + 1);
    }
    return birthday;
}
var nextBirthday = getNextBirthday(12, 25); 
console.log("Next birthday on:", nextBirthday.toLocaleDateString());