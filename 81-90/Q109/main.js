//Write an if statement that logs "Good Morning" if the current time is before 12 PM

var currentHour = new Date().getHours();
if (currentHour < 12) {
    console.log("Good Morning");
}
else {
    console.log("It's afternoon or later.");
}
