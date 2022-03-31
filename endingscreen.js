
/////////////////////////////////////////////////////////////
const username = document.querySelector('#username')

const mostRecentScore = localStorage.getItem('mostRecentScore')

const saveScoreBtn = document.querySelector("#savebutton")

const finalScore = document.querySelector("#thefinals") 

const highScores = JSON.parse(localStorage.getItem('highscores')) || []

finalScore.innerText = "all done, your final score is " + mostRecentScore
/////////////////////////////////////////////////////////////


function saveHighScore () {
    

    const score = {
        score: mostRecentScore, //taking the most recent score
        name:username.value   //taking the username input
    }

    highScores.push(score)


   highScores.sort((a,b) => {
       return b.score - a.score

   })
   
   localStorage.setItem('highScores', JSON.stringify(highScores))

   window.location.assign('/highscorescreen.html')

}

saveScoreBtn.addEventListener("click", saveHighScore); //triggers the saveHighscore function by clicking the save button

