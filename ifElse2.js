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
    if (response >= 18) {
        console.log(`Thank you, here is your drivers lisence`);        
    } else {
        console.log('sorry, you are too young for a lisence');
    }
    realine.close();
});