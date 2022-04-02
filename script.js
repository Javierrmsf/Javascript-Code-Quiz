var timeEl = document.querySelector("#timeleft");
var secondsLeft = 75;

//getting the question text from html
let questiontitle =document.getElementById("questiontitle")

//getting the answer choices from html
let choice1 =document.getElementById("A1")
let choice2 =document.getElementById("B1")
let choice3 =document.getElementById("C1")
let choice4 =document.getElementById("D1")



//getting the score from the html
var scoreinscreen = document.querySelector(".scoretext")

//getting the time countdown from the html


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let questions = [
{
ask:"Commonly used data types DO NOT Include:",
choices:["1. strings","2. booleans","3. alerts","4. numbers"],
answer: "3. alerts"

},
{
ask:"The condition in an if / else statement is enclosed within______.",
choices:["1. quotes","2. curly brackets","3. parenthesis","4. square brackets"],
answer:"3. parenthesis"
},
{
ask:"Arrays in JavaScript can be used to store",
choices:["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
answer:"4. all of the above"
},
{
ask:"String values must be enclosed within ____ when being assigned to variables",
choices:["1. commas","2. curly brackets","3. quotes","4. parenthesis"],
answer:"3. quotes"
},
{
ask:"A very useful tool used during development and debugging for printing content to the debugger is:",
choices:["1. Javascript","2. terminal/bash","3. for loops","4. console.log"],
answer:"4. console.log"
},
]

/////////////////////////////////////////////////////

let currentquestion = 0;
let score = 0;
let totalQuestions = questions.length; //setting total questions as the amount of elements in the questions array
//////////////////////////////////////////////////////

function showQuestion() {
   
    let question = questions[currentquestion];

    questiontitle.innerHTML = question.ask;
    
    choice1.innerHTML = question.choices[0];
    choice2.innerHTML = question.choices[1];
    choice3.innerHTML = question.choices[2];
    choice4.innerHTML = question.choices[3];
    
}

////////////////////////////////////checking if the answer is correct


function checkAnswer(answer) {
    if (answer === questions[currentquestion].answer) {
        score+=11; 
        alert("Correct");
    } else {
        secondsLeft-=11;
        alert("Wrong");
    }
    scoreinscreen.innerHTML = score;
   
}


function nextQuestion() {
    currentquestion++;
    if (currentquestion === totalQuestions) {
        localStorage.setItem('mostRecentScore', score)
        return window.location.assign('./endingscreen.html')

    } else {
        showQuestion();    
    }
}

function changeQuestion(event) {
    event.preventDefault();
    let answer = event.target.innerHTML;
    checkAnswer(answer);
    nextQuestion();
}


choice1.addEventListener("click", changeQuestion);
choice2.addEventListener("click", changeQuestion);
choice3.addEventListener("click", changeQuestion);
choice4.addEventListener("click", changeQuestion);

///////////////////////////////////////////// adding timer


function setTime() {
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft;
  
      if(secondsLeft === 0) {
        
       
            localStorage.setItem('mostRecentScore', score)
            return window.location.assign('./endingscreen.html')
    
    

        
      }
  
    }, 1000);
  }



showQuestion();
setTime();
