//Iterate over a Map of student IDs and names, and log each pair to the console.
// Define a Map of student IDs and names
var studentMap = new Map();
studentMap.set(1, 'John');
studentMap.set(2, 'Alice');
studentMap.set(3, 'Bob');
console.log("Student IDs and Names:");
studentMap.forEach(function (name, id) {
    console.log("Student ID: ".concat(id, ", Name:\u00A0").concat(name));
});
