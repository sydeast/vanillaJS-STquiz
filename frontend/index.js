const startBtn = document.getElementById('startBtn')
const qBox = document.getElementById('quiz-container')
const baseURL = "http://localhost:3000/questions"

//scoring
let score = 0;
const correctPoints = 10;


//question stuff

let availableQuestions = [];
// const questionIndex = "";
let currentQuestion = {};


//game start
startBtn.onclick = () => {
    // alert('Game started!');
    score = 0;

    //change container to display instructions
    qBox.innerHTML = `
        <div id="question-box">
        <h3 class="text-center">buy’ ngop (That's good news!)</h3>
        <p>All questions are True/False. Click one answer to reveal the truth!</p>
        <button id="next-btn"> Next </button>
        <div> `

    const nextBtn = document.getElementById('next-btn')
    nextBtn.addEventListener("click", handleClick);
}
function handleClick(e){
    fetch(baseURL)
    .then(r => r.json())
    .then(renderQuestion)
}

function renderQuestion(arg){
    availableQuestions = arg["data"]
    const questionIndex = availableQuestions[Math.floor(Math.random() * availableQuestions.length)]
    currentQuestion = questionIndex.attributes


        qBox.innerHTML = `
            <div class="question-content">
                <p id="questCon">${currentQuestion.content}</p>
                <div id="ansBtns">
                    <button id="true-btn" value="true">True</button>
                    <button id="false-btn" value="false">False</button>
                </div>
            </div>

        `

    const ansBtns = document.getElementById('ansBtns')
    // compare answers in hereq
    ansBtns.addEventListener("click", function(e) {
        if(e.returnValue === currentQuestion.answer){
            console.log(availableQuestions)
            correctAnswer(e)
        } else if (e.returnValue !== currentQuestion.answer) {

            console.log(availableQuestions)
            incorrectAnswer(e)
        }

    })


}

function correctAnswer(e) {

    handleClick(e)
}

function incorrectAnswer(e) {

    handleClick(e)
}


// //remove question from the bank
// availableQuestions.splice(questionIndex, 1)
// //let user know if they got the answer rgt or wrg
// //move on to next question
