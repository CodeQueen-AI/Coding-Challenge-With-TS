//Iterate over a Map of student IDs and names, and log each pair to the console.
// Define a Map of student IDs and names
const studentMap: Map<number, string> = new Map();
studentMap.set(1, 'John');
studentMap.set(2, 'Alice');
studentMap.set(3, 'Bob');

// Iterate over the Map using forEach method
console.log("Student IDs and Names:");
studentMap.forEach((name, id) => {
    console.log(`Student ID: ${id}, Name: ${name}`);
});