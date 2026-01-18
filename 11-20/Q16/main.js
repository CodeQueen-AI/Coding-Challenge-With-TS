// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests 
// to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that 
// you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. 
// • Use append() to add one new guest to the end of your list. 
// • Print a new set of invitation messages, one for each person in your list.
var guestArr = ["Mehak", "Kinza", "Jiya", "warda"];
var cannotattend = "Kinza";
var newguest = "Tayyaba";
guestArr[guestArr.indexOf(cannotattend)] = newguest;
//console.log(guestArr)
// guestArr.map((item) => (
//  console.log(`Dear ${item}, I found a bigger Dinner Table`)
//));
var guestbegin = "Mahnoor";
guestArr.unshift(guestbegin);
//console.log(guestArr)
//guestArr.map((item) => (
//  console.log(`Dear ${item}, I found a bigger Dinner Table`)
//));
var middleguest = "Hifsa";
var middleIndex = guestArr.length / 2;
guestArr.splice(middleIndex, 0, middleguest);
//console.log(guestArr)
guestArr.push("Manahil");
console.log(guestArr);
guestArr.map(function (item) { return (console.log("Dear ".concat(item, ", You are cordinally invited in to dinner"))); });
