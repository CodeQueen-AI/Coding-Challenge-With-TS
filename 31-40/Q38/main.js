// Cities: Write a function called describe_city() that accepts the name of a city and its country. The function should 
// print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your
//  function for three different cities, at least one of which is not in the default country.
// Function to describe a city
function describe_city(city, country) {
    if (country === void 0) { country = "Unknown"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describe_city("Karachi", "Pakistan");
describe_city("New York", "USA");
describe_city("Tokyo"); 