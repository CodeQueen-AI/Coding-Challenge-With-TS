//Find the Average Grade: Given a list of grades, calculate the average grade.
var grades = [88, 94, 72, 99, 53, 77];
var averageGrade = grades.reduce(function (total, grade) { return total + grade; }, 0) / grades.length;
console.log(averageGrade);
