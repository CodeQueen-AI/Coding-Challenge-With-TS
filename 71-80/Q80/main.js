//Use an if-else-if chain to categorize a person's age group (child, teenager, adult)
function categorizeAge(age) {
    if (age < 13) {
        return 'Child';
    }
    else if (age >= 13 && age <= 19) {
        return 'Teenager';
    }
    else {
        return 'Adult';
    }
}
var personAge = parseInt(prompt("Enter the person's age: ") || "0");
var ageGroup = categorizeAge(personAge);
console.log("The person is in the age group:\u00A0".concat(ageGroup));
