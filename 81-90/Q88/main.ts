//Write an if statement that logs "Good Morning" if the current time is before 12 PM.
// Get the current hour using Date object
const currentHour: number = new Date().getHours();
// Check if the current hour is before 12 PM
if (currentHour < 12) {
    console.log("Good Morning");
} else {
    console.log("It's afternoon or later.");
}


