
// let myHeader = document.getElementsByTagName("h1");
// let myButton = document.getElementsByTagName("button")
// let myQuestion = document.getElementById("footer")(need to generate a random question)
//let question = ["question1", "question2", "question 3", "question4", "question 5"]
//Math.random

//let questions = [
/*     {
        prompt:'Arrays in JS are defined by which of the following statements?\n\
            (a) Ordered list of values\n\
            (b) Ordered list of objects\n\
            (c) Ordered list of strings\n\
            (d) Ordered list of functions',
        answer: 'a'
    },
    {
        prompt: 'Which of the following is not js data types?\n\
                (a) Null type\n\
                (b) Undefined type\n\
                (c) Number type\n\
                (d) All of the mentioned',
        answer: 'd'
    },
    {
        prompt: 'The function and var/let are known as?\n\
                (a) Keywords\n\
                (b) Data types\n\
                (c)Declaration statements\n\
                (d) error',
        answer: 'c'
    },
    {
        prompt: 'Which of the following statement is suitable to check if pattern matches the string text?\n\
                (a) test(text\n\
                (b) equals(pattern)\n\
                (c) test(pattern)\n\
                (d) text==pattern',
        answer: 'd'

    },
    {
        prompt: 'Which of the following is known as the equality operator, used to check whether two values are equal or not?\n\
                (a) =\n\
                (b)===\n\
                (c)==\n\
                (d)&&',
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
alert('You got' + score + '/' + questions.length); */

// let questions = [{
//     question: 'Arrays in JS are defined by which of the following statements?',
//     correctAnswer: 'Ordered list of values',
//     incorrectAnswers: ['Ordered list of objects','Ordered list of strings','Ordered list of functions'],
//     },
//     {
//     question: 'Which of the following is not js data types?',
//     correctAnswer: 'All of the mentioned',
//     incorrectAnswers: ['Null type','Undefined type','Number type'],
//     },
//     {
//     question: 'The function and var/let are known as?',
//     correctAnswer: 'Declaration statements',
//     incorrectAnswers: ['Keywords','Data types','Prototypes'],
//     },
//     {
//     question: 'Which of the following statement is suitable to check if pattern matches the string text?',
//     correctAnswer: 'text==pattern',
//     incorrectAnswers: ['test(text)','equals(pattern)','test(pattern)'],
//     },
//     {
//     question: 'Which of the following is known as the equality operator, used to check whether two values are equal or not?',
//     correctAnswer: '==',
//     incorrectAnswers: ['=', '===', '&&'],
//     }
// ]

// questions.forEach(function (prompt) {
// }
// )
// let displayQuestion = document.querySelector(".header__format")
// displayQuestion.innerText = 



//This is the selector for the response options
//let response = document.getElementsByTagName("button").innerHTML = "this should show in the button";
//console.log(response);

//we need to creat a hidden tag with the question question array of object
//then creat  a variabel in js to select and modify 
//let myMultiQuestions = document.querySelectorAll("div #button__container span").innerHTML = "This is an example question";
//console.log(myMultiQuestions)

question = ["question1", "question2", "question 3", "question4", "question 5"] 
answerOptions = [
        {
            a: 'ordered list of values',
            b: 'ordered list of objects',
            c: 'ordered list of strings',
            d: 'ordered list of functions'
     },
    {
         a: 'Null type',
         b: 'Undefined type',
         c: 'Number type',
         d: 'All of the mentioned'
    },
    {
        a: '1,2,3,6,7,8',
        b: '123',
        c: '1,2,3',
        d: 'Error'
     }]

function myFunction() {
    let answerOptions = document.getElementsByTagName("button")
    let myHeader = document.getElementsByTagName("h1");
    let questionNumber = document.querySelector("#question__num")
    console.log(questionNumber)
    questionNumber.innerHTML = parseInt(questionNumber.innerHTML) + 1
    console.log(questionNumber.innerHTML)
    myHeader[0].innerHTML = question[0]
    for (i = 0; i < question.length; i++) {
        for (answer in answerOptions[0]) {
            myButton[i].innerHTML = answerOptions[0][answer]
        }
   // }
    //myButton[0].innerHTML = answerOptions[0].a
    //myButton[1].innerHTML = answerOptions[0].b  
    //myButton[2].innerHTML = answerOptions[0].c
    //myButton[3].innerHTML = answerOptions[0].d}
    answerOptions.shift();
    question.shift();

}



 
//  //let anotherButton = document.querrySelector("#button__container")

 //document.getElementsByTagName(button).innerHTML =
    // "this is an example of a question" + element.innerHTML;



// console.log("========================This print is to test if the js was linked to the html page========================")
// alert("this js is working")

// console.log("=============This is a method for window prompt option=====================")

// let question = [
//     {
//         prompt: "what is your name?\n(a)red\n (b) Puple\n(c) Orange"
//         answer: "c"
//     },
//     {
//         prompt: "what is your name?\n(a)red\n (b) Puple\n(c) Orange"
//         answer: "b"
//     },
//     {
//         prompt: "what is your name?\n(a)red\n (b) Puple\n(c) Orange"
//         answer: "a"
//     },
//     {
//         prompt: "what is your name?\n(a)red\n (b) Puple\n(c) Orange"
//         answer: "d"
//     },
//     {
//         prompt: "what is your name?\n(a)red\n (b) Puple\n(c) Orange"
//         answer: "c"
//     },
// ];
// let score = 0;

// for (let i = 0; i < question.length; i++) {
//     let response = h1.prompt(question[i].prompt)
//     if (response === question[i].answer) {
//         score++;
//     //     alert("Correct!")
//     // } else {
//     //     alart(wrong)
//     // }
//         //link the result page here!
//         alert("you score is:" + score + " " + question.length);
//}






//let question This is the question to be used for the array

//optionsButton  =  [

//        {a: 'ordered list of values',
//         b: 'ordered list of objects',
//         c: 'ordered list of strings',
//         d: 'ordered list of functions'
//     },
//     {
//         a: 'Null type',
//         b: 'Undefined type',
//         c: 'Number type',
//         d: 'All of the mentioned'
//     },
//     {
//         a: '1,2,3,6,7,8',
//         b: '123',
//         c: '1,2,3',
//         d: 'Error'
//     },
//     {
//         a: '4',
//         b: '5',
//         c: '0',
//         d: 'error'
//     },
//     {
//         a: 'Keywords',
//         b: 'Data types',
//         c: 'Declaration statements',
//         d: 'Prototypes'
//     },
//     {
//         a: '===',
//         b: 'equals',
//         c: '==',
//         d: 'equals'
//     },
//     {
//         a: 'test(text)',
//         b: 'equals(pattern)',
//         c: 'test(pattern)',
//         d: 'text==pattern'
//     },
//     {
//         a: '=',
//         b: '===',
//         c: '==',
//         d: '&&'
//     }
// ]
// console.log(multipleAnswer);

// let actualAnswer = [{
//         1: 'a',
//         2: 'd',
//         3: 'a',
//         4: 'b',
//         5: 'c',
//         6: 'a',
//         7: 'd',
//         8: 'c'
// }
//]

// function getParams(key = null) {
//     let currentUrl = window.location.search;
//     let url = new URLSearchParams(currentUrl);

//     if (key) {
//         return url.get(key);
// }

//     for (let i of url.entries()) {
//         console.log(i);
//     }
// }