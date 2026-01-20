//create a function that generates a random hexadecimal color code.
// This function generates a random hexadecimal color code
function getRandomHexColor() {
    var color = '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0');
    return color; 
}
console.log(getRandomHexColor()); 