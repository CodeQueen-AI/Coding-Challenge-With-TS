// Cars: Write a function that stores information about a car in a Object. The function should always receive a 
// manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with 
// the required information and two other name-value pairs, such as a color or an optional feature. Print the Object 
// that’s returned to make sure all the information was stored correctly
// Function to store car information
function carInfo(manufacturer: string, model: string, ...extras: [string, any][]): Record<string, any> {
    const car: Record<string, any> = {
        "manufacturer": manufacturer,
        "model": model
    };
// Adding extra information to the car object
    extras.forEach(([key, value]) => {
        car[key] = value;
    });
    return car;
}
// Calling the function with required information and additional key-value pairs
const myCar = carInfo("Toyota", "Camry", ["color", "blue"], ["year", 2022]);
// Printing the car information
console.log(myCar);