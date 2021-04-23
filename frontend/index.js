const startBtn = document.getElementById('startBtn');
const seeHighscoresBtn = document.getElementById('seeHighscoresBtn')
const hud = document.getElementById('hud');
const gameBox = document.getElementById('game-container');
const qBox = document.getElementById('quiz-container');
const questionCounterText = document.getElementById('questionCounter');
const scoreText = document.getElementById('score');
const baseURL = "http://localhost:3000/quizzes/1/questions";
const quizID = 1;

//scoring
let score = 0;
const correctPoints = 10;


//question vars
let availableQuestions = [];
let questionIndex = "";
let currentQuestion = {};
const maxQuestion = 5;

seeHighscoresBtn.addEventListener('click', getHighscores)

//game start
startQuiz = () => {
    // set score
    score = 0;
    questionCounter = 0;
    //change container to display instructions
    qBox.innerHTML = `
        <div id="question-box">
        <h3 class="text-center">buy’ ngop (That's good news!)</h3>
        <p>All questions are True/False. Click one answer to reveal the truth!</p>
        <button id="next-btn"> Next </button>
        <div> `
    // add listener to Next button
    const nextBtn = document.getElementById('next-btn');
    nextBtn.addEventListener("click", handleClick);
}
// Fetch and Sort data and then render first question
function handleClick(e){
    fetch(baseURL)
    .then(r => r.json())
    .then(dataSort)
}
function dataSort(arg){
    availableQuestions = arg["data"]
    renderQuestion()
    // show score box
    hud.classList.add('is-visible')
}

function checkCanStillPlay(){
    availableQuestions.length == 0 || questionCounter >= maxQuestion ?
    endQuiz() :
    renderQuestion()
}


// Render questions
function renderQuestion(){
    questionCounter ++;
    questionCounterText.innerText = `${questionCounter}/${maxQuestion}`;
    questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];
    currentQuestion = questionIndex.attributes;


        qBox.innerHTML = `
            <div class="question-content">
                <p id="questCon">${currentQuestion.content}</p>
                <div id="ansBtns" class="answer-box">
                    <div class="ans-choice">
                    <button id="true-btn" value="true">True</button>
                    </div>
                    <div class="ans-choice">
                    <button id="false-btn" value="false">False</button>
                    </div>
                </div>
            </div>

        `

    const ansBtns = document.getElementById('ansBtns')
    // compare answers in here
    ansBtns.addEventListener("click", function(e) {
        availableQuestions = availableQuestions.filter(availableQuestions => availableQuestions !== questionIndex)
        const userAnswer = e.target.value

        // NEEDS TO BE REFACTORED!!!!
        //still gotta let user know if they got the answer rgt or wrg
        if(userAnswer === String(currentQuestion.answer)){

            console.log("correct", e.target.value, currentQuestion.answer)
            correctAnswer(e)
        } else if (userAnswer !== String(currentQuestion.answer)) {

            console.log("incorrect", e.target.value, currentQuestion.answer)
            incorrectAnswer(e)
        }

    })


}

// NEEDS TO BE REFACTORED!!!!
//still gotta let user know if they got the answer rgt or wrg
function correctAnswer(e) {
    score += correctPoints;
    scoreText.innerHTML = score;
    checkCanStillPlay()
}

function incorrectAnswer(e) {
    score += 0;
    scoreText.innerHTML = score;
    checkCanStillPlay()
}

//End the quiz
function endQuiz() {
    hud.classList.remove('is-visible')
    qBox.innerHTML = `
        <div id="end-main">
            <h2>Stunning!! You completed the quiz!</h2>
            <p id="${score}"> Final Score: ${score}</p>
        </div >
        <div id="enter-highscore">
        <form>
            <p> Enter your name to save your highscore now!
            <input type="text" name="nameInput" id="nameInput" placeholder="Enter Your Name Here"/>
            <input type="submit" class="btn" id="saveScoreBtn" value="Save" disabled/>
            <button type="submit" class="btn" id="playAgainBtn">Play Again?</button>
            <button type="submit" class="btn" id="addNewQuestion">Add a question!</button>
        </form>
    `
    //Disable the Save Name button until text is added
    const nameInput = document.getElementById('nameInput')
    const saveScoreBtn = document.getElementById('saveScoreBtn')

    nameInput.addEventListener('keyup', () => {
        saveScoreBtn.disabled = !nameInput.value;
        saveScoreBtn.onclick = (e) => {
        e.preventDefault();

        //Gather Highscore data and POST
        const highscoreInfo = {
            name: nameInput.value,
            score: score,
            // quiz_id: quizID
        }
        const configObj = {
            method: 'POST',
            headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(highscoreInfo)
        }
        //Save Highscore list and send user to the Highscore list
        fetch('http://localhost:3000/quizzes/1/highscores', configObj)
        .then(r => r.json())
        .then(getHighscores)

    }
    })
}

function getHighscores(e){
    fetch('http://localhost:3000/quizzes/1/highscores')
        .then(r =>r.json())
        .then(renderHighscores)
}

function renderHighscores(arg){
   const highscoreItems = arg["data"]
    qBox.innerHTML = `
        <div id="highscores">
            <span>Try your luck: <button type="submit" id="playBtn">Click Me and Play the Star Trek Quiz</button></span>
            <h2>HIGHSCORES</h2>
            <p>How well did you do?</p>
            <br>
            <ol id="score-list">
            </ol>
        <button>
        </div>
    `
    const scoreList = document.getElementById('score-list')

    highscoreItems.forEach(element => {
        const li = document.createElement('li')
        li.innerHTML = `
            <span>${element.attributes.score}pts - ${element.attributes.name}</span>
        `
        scoreList.appendChild(li)
    })

    const playBtn = document.getElementById('playBtn')
    playBtn.addEventListener('click', startQuiz)
}








