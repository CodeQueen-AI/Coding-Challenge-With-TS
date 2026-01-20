"use strict";
//Create a switch case that matches several cases to the same code block, representing seasons.
function getSeason(month) {
    let season;
    switch (month) {
        case 12:
        case 1:
        case 2:
            season = "Winter";
            break;
        case 3:
        case 4:
        case 5:
            season = "Spring";
            break;
        case 6:
        case 7:
        case 8:
            season = "Summer";
            break;
        case 9:
        case 10:
        case 11:
            season = "Autumn";
            break;
        default:
            season = "Invalid month";
            break;
    }
    return season;
}
console.log(getSeason(1)); // Output: Winter
console.log(getSeason(4)); // Output: Spring
console.log(getSeason(7)); // Output: Summer
console.log(getSeason(10)); // Output: Autumn
console.log(getSeason(13)); // Output: Invalid month
