// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new 
// set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of 
// the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
//# Original guest list
var guestList = ["Jiya", "Mehak", "Tayyaba"];
console.log("Dear ".concat(guestList[0], ", you are invited to dinner."));
console.log("Dear ".concat(guestList[1], ", you are invited to dinner."));
console.log("Dear ".concat(guestList[2], ", you are invited to dinner."));
// Someone can't make it
var unableToAttend = guestList[0];
console.log("".concat(unableToAttend, " can't make it to the dinner."));
// Replace with a new guest
guestList[1] = "Warda";
console.log("Dear ".concat(guestList[0], ", you are invited to dinner."));
console.log("Dear ".concat(guestList[1], ", you are invited to dinner."));
console.log("Dear ".concat(guestList[2], ", you are invited to dinner."));
