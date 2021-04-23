const startBtn = document.getElementById('startBtn');
const seeHighscoresBtn = document.getElementById('seeHighscoresBtn')
const addNewQuestion = document.getElementById('addNewQuestionBtn')

const gameBox = document.getElementById('game-container');
const qBox = document.getElementById('quiz-container');

const hud = document.getElementById('hud');
const questionCounterText = document.getElementById('questionCounter');
const scoreText = document.getElementById('score');

const quizID = 1;

const baseURL = "http://localhost:3000/quizzes/1/questions";
//scoring
let score = 0;
const correctPoints = 10;


//question vars
let availableQuestions = [];
let questionIndex = "";
let currentQuestion = {};
const maxQuestion = 5;



//Listeners for other than start
seeHighscoresBtn.addEventListener('click', getHighscores)
addNewQuestion.addEventListener('click', addQuestion)

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

// THESE TWO NEEDS TO BE REFACTORED!!!!
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

//Ending the quiz
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
            <input type="submit" id="saveScoreBtn" value="Save" disabled/>
            <button type="submit" id="playAgainBtn">Play Again?</button>

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
//retrieve high scores
function getHighscores(e){
    fetch('http://localhost:3000/quizzes/1/highscores')
        .then(r =>r.json())
        .then(renderHighscores)
}

//display highscores
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

//
function addQuestion() {

    qBox.innerHTML = `
        <div id="addQuestionForm">
        <h3>Welcome to the our New Trivia Question form!</h3>
        <p>Instructions: </p>
        <p>1) The question must be related to Star Trek Universe in relation to its Film and Television canon, and it should be formatted in true/false statements. </p>
        <p>2) The answer field only takes integars. Zero (0) means False and One (1) means True. </p>
        <p>3) Have fun!</p>
        <form id="question-form">
           <label for="question-content">Question/Trivia:</label>
           <input type="text-area" name="content" id="question-content" required><br><br>
           <label for="question-answer">Answer Key:</label>
           <input type="number" name="answer" id="question-answer" defaultValue="0" min="0" max="1" required><br><br>
           <button type="submit" id="createQuestionBtn" value="Create">Create</button>
        </form>
        </div>
    `

    const createQuestion = document.getElementById('createQuestionBtn')
    createQuestion.addEventListener('click', saveQuestion)


}

function saveQuestion(_e){
    _e.preventDefault()
    const contentInput = document.querySelector('#question-content')
    const answerInput = document.querySelector('#question-answer')

    const questionInfo = {
        content: contentInput.value,
        answer: answerInput.value
    }

    const configObj = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify(questionInfo)
    }

    fetch('http://localhost:3000/quizzes/1/questions', configObj)
        .then(r => r.json())
        .then(json => fetchQuestion(json.data))
}

function fetchQuestion(arg){
    const questID = arg.id

    fetch(`http://localhost:3000/quizzes/1/questions/${questID}`)
        .then(r => r.json())
        .then(renderQuestion)
}

function renderQuestion(arg){
    const questContent = arg.content;
    const questAnswer = arg.answer;

    qBox.innerHTML = `
        <div id="questRender">
        <h4>Here is your trivia question! </h4>
        <p>Would you like edit or delete it? This will be the only time to do so.</p>
        <span>Question/Trivia: ${questContent}</span>
        <br>
        <span>Answer: ${questAnswer}</span>
        </div>
        <div id="btns">
        <button class="edit" data-id="${arg.id}">Edit</button>
        <button class="delete" data-id="${arg.id}">Delete</button>
        </div>
    `
    const selectBtns = document.getElementById('btns')
    selectBtns.addEventListener('click', handleBtnClick)

}

function handleBtnClick(_e){
        if(_e.target.innerText === "Edit"){
        //change the button fom edit to save
        _e.target.innerText = "Save"
        //replace the div with different input tags
        createEditFields(_e)
    } else if (_e.target.innerText === "Delete") {
        deleteItem(e)
    } else if (_e.target.innerText === "Save"){
        //change the button fom edit to save
        _e.target.innerText = "Edit"
        //save this info to the DB
        //turn all input fields back to normal read only fields
        saveUpdatedQuestion(_e.target)
    }

}

function createEditFields(arg){
    const questRender = document.getElementById('questRender')
    const questContent = questRender.children[2].innerText
    const questAnswer = questRender.children[4].innerText;

    questRender.innerHTML = `
        <h4>Here is your trivia question! </h4>
        <p>Would you like edit or delete it? This will be the only time to do so.</p>
        <form id="question-form">
        <label for="question-content">Question/Trivia:</label>
        <input type="text-area" name="content" placeholder="${questContent}">
        <label for="question-answer">Answer Key:</label>
        <input type="number" name="answer" id="question-answer" placeholder="${questAnswer}" min="0" max="1" required>
        </form>
    `
}
