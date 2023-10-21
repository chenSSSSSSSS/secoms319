let quizDiv = document.getElementById('quizdiv');
let submitButton = document.getElementById('submit');
let insertionDiv = document.getElementById('insertiondiv');
let quickDiv = document.getElementById('quickdiv');
let mergeDiv = document.getElementById('mergediv');
let binaryDiv = document.getElementById('binarydiv');
let mergeBox = document.getElementById('mergebox');
let jnameCard = document.getElementById('jnamecard');

insertionDiv.addEventListener(
  "mouseover",
  (event) => {
    event.target.style.color = "green";
    // event.target.style.border = "solid";
    // setTimeout(() => {
    //   event.target.style.color = "";
    //   event.target.style.fontWeight = "700";
    // }, 400);
  },
  false,
);

quickDiv.addEventListener( "mouseover", (event) => {
    event.target.style.color = "green";
    // event.target.style.border = "solid";
    // setTimeout(() => {
    //   event.target.style.color = "";
    //   event.target.style.fontWeight = "700";
    // }, 400);
  },
  false,
);

mergeDiv.addEventListener("mouseover", (event) => {
  event.target.style.color = "green";
  // event.target.style.border = "solid";
//   setTimeout(() => {
//     event.target.style.color = "";
//     event.target.style.fontWeight = "700";
//   }, 400);

}, 
false,
);

binaryDiv.addEventListener("mouseover", (event) => {
  event.target.style.color = "green";
  // event.target.style.border = "solid";
//   setTimeout(() => {
//     event.target.style.color = "";
//     event.target.style.fontWeight = "700";
//   }, 400);

}, 
false,
);

// array of question objects
let questions = [
  {
    question: "1. What is the time complexity of a binary search algorithm?",
    answers: {
      a: "O(1)",
      b: "O(log n)",
      c: "O(n log n)"
    },
    solution: "b"
  },
  {
    question: "2. Big-O represents the _ bound of an algorithm's time or space complexity",
    answers: {
      a: "upper",
      b: "lower",
      c: "average"
    },
    solution: "a"
  },
  {
    question: "3. What is the worst case complexity for searching in a Hashmap?",
    answers: {
      a: "O(n log n)",
      b: "O(n^2)",
      c: "O(n)"
    },
    solution: "c"
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