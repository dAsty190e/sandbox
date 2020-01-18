// create some variables (var const, let)
var someVariable = "good morning";
var someVar = "good morning my love";

// log those variables here (console.log)
console.log(someVariable);
console.log(someVar);

// build some if else conditions (if {} if else {} else {})
var day = 276;
if (day == 365) {
    console.log("happy end of the year!");
} else if (day == 1) {
    console.log('happy new year!');
} else {
    console.log("its a normally day");
}

var dayOfTheWeek = "saturday";
if (dayOfTheWeek == "saturday") {
    console.log("great day");
} else if (dayOfTheWeek == "monday") {
    console.log("I hate this day");
} else {
    console.log("normal day");
}

// project: use variales and if else conditions to setup a classroom grading tool that will give a grade based on the percentage of correct answers
// steps to complete
// 1) create a variable for the number of total questions (10)
var totalQuestions = 10;
// 2) create a variable for the number of questions the student got correct (0-10)
var correctAnswers = 11;
// 3) use another variable to keep track of the grade
var studentGrade = "";

// use if else to grade the students test score
if (correctAnswers > totalQuestions) {
    studentGrade = "A+";
}
// 10 == A
else if (correctAnswers == totalQuestions) {
    studentGrade = "A";
}
// 8-9 == B
else if (correctAnswers < 10 && correctAnswers >= 8) {
    studentGrade = "B";
}
// 6-7 == C
else if (correctAnswers < 8 && correctAnswers >= 6) {
    studentGrade = "C";
}
// 4-5 == D
else if (correctAnswers < 6 && correctAnswers >= 4) {
    studentGrade = "D";
}
// < 4 == F
else {
    studentGrade = "F";
}

// log the students grade

console.log("your test score is " + studentGrade);
// "Cyour test grade is C"
// console.log(`your grade is ${studentGrade}`);
// console.log(`${studentGrade} is your grade`);
