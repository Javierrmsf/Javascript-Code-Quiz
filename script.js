//making the a variable for every card (for every div)
var card0 = document.querySelector(".card0");
var card1 = document.querySelector(".card1");
var card2 = document.querySelector(".card2");
var card3 = document.querySelector(".card3");
var card4 = document.querySelector(".card4");
var card5 = document.querySelector(".card5");

//making variables for click events
var choice0 = document.querySelector(".choice0")
var choice1 = document.querySelector(".choice1")
var choice2 = document.querySelector(".choice2")
var choice3 = document.querySelector(".choice3")
var choice4 = document.querySelector(".choice4")
var choice5 = document.querySelector(".choice5")

// formulas to display next question and hide the previous question
choice0.addEventListener("click", function(){
card0.setAttribute("style", "display:none");
card1.setAttribute("style", "display:contents");})

choice1.addEventListener("click", function(){
    card1.setAttribute("style", "display:none");
    card2.setAttribute("style", "display:contents");})

choice2.addEventListener("click", function(){
    card2.setAttribute("style", "display:none");
    card3.setAttribute("style", "display:contents");})

choice3.addEventListener("click", function(){
    card3.setAttribute("style", "display:none");
    card4.setAttribute("style", "display:contents");})

choice4.addEventListener("click", function(){
    card4.setAttribute("style", "display:none");
    card5.setAttribute("style", "display:contents");})