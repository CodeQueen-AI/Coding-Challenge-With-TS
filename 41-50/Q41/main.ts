// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the 
// name of each magician in the array.
function show_magicians(magicians: string[]): void {
    console.log("List of magicians:");
    for (let magician of magicians) {
        console.log(magician);
    }
}
let magicianNames: string[] = ["Dynamo", "Criss angel", "Teller", "penn"];
show_magicians(magicianNames);