///Simulate a dice roll using JavaScript and return a random integer between 1 and 6.
// This function simulates rolling a dice and returns a number between 1 and 6
function rollDice() {
    return Math.floor(Math.random() * 6) + 1; 
}
console.log(rollDice()); 