//getting the question text from html
const innerquestion = document.querySelector(".innerQuestion");

//getting the answer choices from html
let choice1 =document.getElementById("A1")
let choice2 =document.getElementById("B1")
let choice3 =document.getElementById("C1")
let choice4 =document.getElementById("D1")

//getting the score from the html
const scoreinscreen = document.querySelector(".scoretext")

//getting the time countdown from the html

const timeelement = document.querySelector(".timeleft")

//////////////////////////////////////////////

let questions = [
{
question:"what is 2 + 2",
choices:["1","2","3","4"],
answer: "4"

},
{
question:"what is 3 + 2",
choices:["2","1","5","17"],
answer:"5"
},
{
question:"what is 4 + 2",
choices:["6", "4", "21", "17"],
answer:"6"
},
{
question:"what is 9 + 2 ",
choices:["2","4","21","11"],
answer:"11"
},


















]