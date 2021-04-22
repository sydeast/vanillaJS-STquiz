const startBtn = document.getElementById('startBtn');
const hud = document.getElementById('hud');
const gameBox = document.getElementById('game-container');
const qBox = document.getElementById('quiz-container');
const questionCounterText = document.getElementById('questionCounter');
const scoreText = document.getElementById('score');
const baseURL = "http://localhost:3000/questions";

//scoring
let score = 0;
const correctPoints = 10;


//question vars
let availableQuestions = [];
let questionIndex = "";
let currentQuestion = {};
const maxQuestion = 5;


//game start
startBtn.onclick = () => {
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
            <p> Final Score: ${score}</p>
        </div>
    `

}






