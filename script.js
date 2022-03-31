//getting the question text from html
let questiontitle =document.getElementById("questiontitle")

//getting the answer choices from html
let choice1 =document.getElementById("A1")
let choice2 =document.getElementById("B1")
let choice3 =document.getElementById("C1")
let choice4 =document.getElementById("D1")


//getting the score from the html
const scoreinscreen = document.querySelector(".scoretext")

//getting the time countdown from the html

const timeelement = document.querySelector(".timeleft")

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

let questions = [
{
ask:"what is 2 + 2",
choices:["1","2","3","4"],
answer: "4"

},
{
ask:"what is 3 + 2",
choices:["2","1","5","17"],
answer:"5"
},
{
ask:"what is 4 + 2",
choices:["6", "4", "21", "17"],
answer:"6"
},
{
ask:"what is 9 + 2 ",
choices:["2","4","21","11"],
answer:"11"
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
        score++;
        alert("Correct");
    } else {
        alert("Wrong");
    }
}

function nextQuestion() {
    currentquestion++;
    if (currentquestion === totalQuestions) {
        alert("Quiz Over");
    } else {
        showQuestion();
    }
}


choice1.addEventListener("click", nextQuestion);
choice2.addEventListener("click", nextQuestion);
choice3.addEventListener("click", nextQuestion);
choice4.addEventListener("click", nextQuestion);

showQuestion();