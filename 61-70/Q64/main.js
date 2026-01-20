// Write a function that checks if a Map contains a key for "Canada" and logs the capital if it exists.
function checkForCanada(map) {
    if (map.has('Canada')) {
        var capital = map.get('Canada');
        if (capital) {
            console.log("The capital of Canada is ".concat(capital, "."));
        }
        else {
            console.log("The capital for Canada is not available.");
        }
    }
    else {
        console.log("Canada is not found in the Map.");
    }
}
checkForCanada(countryCapitalMap);
