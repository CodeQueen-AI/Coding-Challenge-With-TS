// Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.
function checkForCanada(map: Map<string, string>): void {
    if (map.has('Canada')) {
        const capital: string | undefined = map.get('Canada');
        if (capital) {
            console.log(`The capital of Canada is ${capital}.`);
        } else {
            console.log("The capital for Canada is not available.");
        }
    } else {
        console.log("Canada is not found in the Map.");
    }
}

// Test the function with the countryCapitalMap
checkForCanada(countryCapitalMap);