// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that 
// stores several examples. Use your list to print a series of statements about these items, such as “I would like to
//  own a Honda motorcycle.”
var vehicles = ["Honda motorcycle", "Hilux", "corolla car", "toyota car"];
vehicles.map(function (items) { return console.log("I would you like to own a ".concat(items)); });
