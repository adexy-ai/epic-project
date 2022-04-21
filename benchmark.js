//This is the selector for the questions selected via the math.random method 
let question = document.getElementsByTagName("h1").innerHTML;
 console.log(question);

 //let myQuestion = document.getElementById("footer") //(need to generate a random question)

//This is the selector for the response options
let response = document.getElementsByTagName("button")
console.log(response);

//we need to creat a hidden tag with the question question array of object
//then creat  a variabel in js to select and modify 
let myMultiQuestions = document.querySelectorAll("div #button__container span")
console.log(myMultiQuestions)
 


 question = ["question1", "question2", "question 3", "question4", "question 5"]
 function multipleChoiceQuestion(question) {
     nextQuestion = Math.floor(Math.random() * question.length) + 1;
     return question[nextQuestion];
      }
 console.log(multipleChoiceQuestion(question));
//  //let anotherButton = document.querrySelector("#button__container")

 //document.getElementsByTagName(button).innerHTML =
    // "this is an example of a question" + element.innerHTML;



console.log("========================This print is to test if the js was linked to the html page========================")
alert("this js is working")

console.log("=============This is a method for window prompt option=====================")

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





// let an
//let question This is the question to be used for the array
//question  =  [
    
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