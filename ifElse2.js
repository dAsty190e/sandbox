// https://nodejs.org/api/readline.html
// readline allows your to ask questions and accept answers
const rl = require('readline');

// createInterface is used to setup the readline
const realine = rl.createInterface({
    input: process.stdin,
    output: process.stdout
});

var question = 'hello, welcome to the DMV. You need to be 18 or older for a drivers license. How old are you?';

// readline.question is used to ask a question
// readline.question([the question], ([the response]) => { do something with the response })
// the () => {} is called a callback function...
realine.question(question, (response) => {
    if (response >= 18 && response <= 70) {
        console.log(`Thank you, here is your drivers lisence`);
    } else if (response > 60) {
        console.log("you are too old");
    } else {
        console.log('sorry, you are too young for a lisence');
    }
    console.log("Thank you")
    realine.close();
});



// this is the setup

// https://nodejs.org/api/readline.html
// readline allows your to ask questions and accept answers
const rl = require('readline');

// createInterface is used to setup the readline
const realine = rl.createInterface({
    input: process.stdin,
    output: process.stdout
});

realine.question(question, (response) => {
    // questions here
    realine.close();
});
