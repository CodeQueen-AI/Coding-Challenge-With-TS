//Use an if-else-if chain to categorize a person's age group (child, teenager, adult).
function categorizeAge(age: number): string {
    if (age < 13) {
        return 'Child';
    } else if (age >= 13 && age <= 19) {
        return 'Teenager';
    } else {
        return 'Adult';
    }
}

// Test the function
const personAge: number = parseInt(prompt("Enter the person's age: ") || "0");
const ageGroup: string = categorizeAge(personAge);
console.log(`The person is in the age group: ${ageGroup}`);
