// let myHeader = document.getElementsByTagName("h1");
// let myButton = document.getElementsByTagName("button")
// let myQuestion = document.getElementById("footer")(need to generate a random question)
//let question = ["question1", "question2", "question 3", "question4", "question 5"]
//Math.random

let questions = [
    {
        prompt:'Arrays in JS are defined by which of the following statements?\n(a) Ordered list of values\n\
            (b) Ordered list of objects\n\
            (c) Ordered list of strings\n(d) Ordered list of functions',
        answer: 'a'
    },
    {
        prompt: 'Which of the following is not js data types?\n(a) Null type\n\
                (b) Undefined type\n(c) Number type\n(d) All of the mentioned',
        answer: 'd'
    },
    {
        prompt: 'The function and var/let are known as?\n(a) Keywords\n(b) Data types\n\
                (c)Declaration statements\n(d) error',
        answer: 'c'
    },
    {
        prompt: 'Which of the following statement is suitable to check if pattern matches the string text?\n(a) test(text\n\
                (b) equals(pattern)\n(c) test(pattern)\n(d) text==pattern',
        answer: 'd'

    },
    {
        prompt: 'Which of the following is known as the equality operator, used to check whether two values are equal or not?\n\
                (a) =\n(b)===\n(c)==\n(d)&&',
        answer: 'c'
    }

]
console.log(questions);

let score = 0;

for (let index = 0; index < questions.length; index++) {
    let response = window.prompt(questions[index].prompt)
    if (response == questions[index].answer) {
        score++;
        alert('Correct answer!');
    } else {
        alert('Wrong, try again!')
    }
}
alert('You got' + score + '/' + questions.length);

// let anotherButton = document.querrySelector("#button__container")

// // document.getElementsByTagName(button).innerHTML =
// //     "this is an example of a question" + element.innerHTML;

// console.log("this is an exeample of output");
//alert("this js is working")