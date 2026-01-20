//Create a Map that stores the names of countries as keys and their capitals as values. Add three countries to the Map.
// Create a Map to store countries and their capitals
const countryCapitalMap: Map<string, string> = new Map();
// Add countries and their capitals to the Map
countryCapitalMap.set('USA', 'Washington D.C.');
countryCapitalMap.set('France', 'Paris');
countryCapitalMap.set('Japan', 'Tokyo');
// Display the Map
console.log("Countries and their capitals:");
for (const [country, capital] of countryCapitalMap.entries()) {
    console.log(`${country}: ${capital}`);
}
