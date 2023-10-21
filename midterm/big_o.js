let quizDiv = document.getElementById('quizdiv');
let submitButton = document.getElementById('submit');
// let insertionDiv = document.getElementById('insertiondiv');
// let quickDiv = document.getElementById('quickdiv');
// let mergeDiv = document.getElementById('mergediv');
// let binaryDiv = document.getElementById('binarydiv');
// let mergeBox = document.getElementById('mergebox');
// let jnameCard = document.getElementById('jnamecard');

// insertionDiv.addEventListener(
//   "mouseover",
//   (event) => {
//     event.target.style.color = "green";
//   },
//   false,
// );

// quickDiv.addEventListener( "mouseover", (event) => {
//     event.target.style.color = "green";
//   },
//   false,
// );

// mergeDiv.addEventListener("mouseover", (event) => {
//   event.target.style.color = "green";
// }, 
// false,
// );

// binaryDiv.addEventListener("mouseover", (event) => {
//   event.target.style.color = "green";
// }, 
// false,
// );

// array of question objects
let questions = [
  {
    //https://www.interviewbit.com/oops-interview-questions/
    question: "1. An entity which inherits from another class",
    answers: {
      a: "constructor",
      b: "subclass",
      c: "interface"
    },
    solution: "b"
  },
  {
    question: "2. Static polymorphism is commonly known as",
    answers: {
      a: "Dynamic Polymorphism",
      b: "Runtime polymorphism",
      c: "Compile time polymorphism"
    },
    solution: "c"
  },
  {
    //https://www.geeksforgeeks.org/oops-interview-questions/
    question: "3. Private, Public, and Protected are examples of ",
    answers: {
      a: "Access Modifiers",
      b: "Overriding",
      c: "Overloading"
    },
    solution: "a"
  }
  ];
  
  let quizArr = [];
questions.forEach (
  (q, num) => {

    let answers = [];

    for (let i in q.answers) {

      answers.push(`
        <p>
          <input type="radio" name="questiondiv${num}" value="${i}">
          <em>${i}.</em>
          ${q.answers[i]}
        </p>
        `);
    }

    quizArr.push(`
    <div class="questiondiv"> ${q.question} 
    </div>
    <div class="answers"> ${answers.join('')}
     </div>
      `);
  }
);
    
//removes commas from string
quizDiv.innerHTML = quizArr.join('');

  // Toggle Avengers button :
  var toggleButton3 = document.getElementById('toggleCardButton3');
  var card3 = document.getElementById('card3');
  var collapsableCard3 = new bootstrap.Collapse(card3, {toggle: true});

  toggleButton3.addEventListener('click', function () {
      collapsableCard3.toggle();

});

//if quiz submitted, color correct questions
submitButton.addEventListener('click', 
function () {

let answerDiv= quizDiv.querySelectorAll('.answers');
let questionSelected = quizDiv.querySelectorAll('.questiondiv');

questions.forEach ( 
  (q, num) => {
  let selectedAns = (answerDiv[num].querySelector(`input[name=questiondiv${num}]:checked`)).value;

  if (selectedAns === q.solution) {
    questionSelected[num].style.fontWeight = '900';
    questionSelected[num].style.color = 'lightgreen';

  }

});

});