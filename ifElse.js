// ifElse conditions, https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/if...else
var age = 10;
if (age > 18) {
console.log("Hello, here is your drivers license");
} else {
console.log("Sorry, you are too young for a drivers license");
}

var cash = 10;
var amount = 100;
if (cash >= amount) {
    console.log("here are your groceries");
} else {
    console.log("Not enough cash");
}

var name = "lesya";
var person = "Zack";
if(name == "ted") {
    console.log("lesya hates to program")
    console.log("lesya hates to program")
    console.log("lesya hates to program")
} else {
    console.log("lesya loves to program")
    console.log("lesya loves to program")
    console.log("lesya loves to program")
}

// ifs can be alone
if (true) {

}

var number = 15
if (number <= 50 && number >= 25) {
    // 26 through 50
} else if (number < 25 && number >= 10) {
    // 10 through 24
} else {
    // all others
}

// = assignment
// == equality check

var date = 26;
if (date == 26) {
    console.log("true")
} else {
    console.log("false")
}