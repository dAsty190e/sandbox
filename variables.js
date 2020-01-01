// variables https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/var
// console.log https://developer.mozilla.org/ru/docs/Web/API/Console/log



var myFirstVariable = 100;
var mySecondVariable = 99;

console.log(myFirstVariable); // 100
console.log(mySecondVariable); // 99
console.log(myFirstVariable + mySecondVariable); // 199
// console.log(myThirdVariable); // throws an error
console.log(myFirstVariable); // 100

// variables can be: var, const, let

// a const once set can never be changed
myFirstVariable = 101;
console.log(myFirstVariable); // 101

// a variable is a block of memory, reserved for a value/information

// primitive javascript values numbers, strings
const aNumber = 1000;
let aString = "hello world";

// constants cannot be changed once set the first time
// aNumber = 2000;

console.log(aNumber);
console.log(aString);

// more complex values are arrays and objects

/* objective: 
1 create a new file called variables2.js
2 create 3 variables and assign them values
3 print out (console.log) those variables
4 add comments to the file
5 run the file in the command line interface (CLI)
*/

var girl = "Dasha";
var boy = "Tim";

console.log(girl + " say hello to " + boy) 
