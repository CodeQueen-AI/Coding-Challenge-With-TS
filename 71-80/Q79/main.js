//Create a Map that stores the names of countries as keys and their capitals as values. Add three countries to the Map.
// Create a Map to store countries and their capitals
var countryCapitalMap = new Map();
// Add countries and their capitals to the Map
countryCapitalMap.set('USA', 'Washington D.C.');
countryCapitalMap.set('France', 'Paris');
countryCapitalMap.set('Japan', 'Tokyo');
// Display the Map
console.log("Countries and their capitals:");
for (var _i = 0, _a = countryCapitalMap.entries(); _i < _a.length; _i++) {
    var _b = _a[_i], country = _b[0], capital = _b[1];
    console.log("".concat(country, ":\u00A0").concat(capital));
}
