class HomeNavigation {

    constructor(){
        this.initialize()
    }

    initialize(){
        this.homepageRender()
        this.setEventListeners()
    }


    homepageRender(){
        const qBox = document.getElementById('quiz-container');
        qBox.innerHTML =
            `<div id="quiz-container">
                    <div class="question-main">
                        <h2>Star Trek Quiz!</h2>
                        <p> Come take the Star Trek quiz and put your trekkie skills to work!</p>
                    </div>
                    <div id="answer-main">
                        <div class="start-btn">
                            <button type="submit" id="startBtn" onclick="startQuiz()">Start</button>
                            <button type="submit" id="seeHighscoresBtn">See Highscores</button>
                            <button type="submit" id="addNewQuestionBtn">Add a question!</button>
                        </div>
                    </div>
                </div>
                `

    }



    setEventListeners(){
        const startBtn = document.getElementById('startBtn');
        const seeHighscoresBtn = document.getElementById('seeHighscoresBtn')
        const addNewQuestion = document.getElementById('addNewQuestionBtn')
        

        startBtn.addEventListener('click', startQuiz)
        seeHighscoresBtn.addEventListener('click', getHighscores)
        addNewQuestion.addEventListener('click', addQuestion)

    }





}
