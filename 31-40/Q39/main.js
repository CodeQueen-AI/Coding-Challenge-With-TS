// City Names: Write a function called city_country() that takes in the name of a city and its country. The function 
// should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
// Function to format city and country
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
// Calling the function with city-country pairs
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Paris", "France"));
console.log(city_country("Sydney", "Australia"));
