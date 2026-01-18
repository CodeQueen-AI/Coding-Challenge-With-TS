// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array 
// of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate 
// array. Call show_magicians() with each array to show that you have one array of the original names and one array with
//  the Great added to each magician’s name.
function make_great(magicians: string[]): string[] {
    let modifiedMagicians: string[] = [];
    for (let magician of magicians) {
        modifiedMagicians.push("the Great " + magician);
    }
    return modifiedMagicians;
}
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

let magicians: string[] = ["Dymgo", "Harry Houdini", "Penn", "Teller"];
let modifiedMagicians: string[] = make_great([...magicians]);

console.log("Original Magicians:");
show_magicians(magicians);
console.log("\nModified Magicians:");
show_magicians(modifiedMagicians);