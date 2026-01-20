"use strict";
//Create a loop that iterates through a string and stops when it finds the first vowel.
const str = "Hello, World!";
const vowels = ['a', 'e', 'i', 'o', 'u'];
for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    if (vowels.includes(char)) {
        console.log("First vowel found:", char);
        break;
    }
}
