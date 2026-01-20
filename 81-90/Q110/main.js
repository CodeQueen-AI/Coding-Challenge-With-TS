//Create a function that assigns a grade (A, B, C, D, F) based on a student's score.
function assignGrade(score) {
    if (score >= 90) {
        return 'A';
    }
    else if (score >= 80) {
        return 'B';
    }
    else if (score >= 70) {
        return 'C';
    }
    else if (score >= 60) {
        return 'D';
    }
    else {
        return 'F';
    }
}

var studentScore = parseInt(prompt("Enter the student's score: ") || "0");
var studentGrade = assignGrade(studentScore);
console.log("The students grade is: ".concat(studentGrade));
