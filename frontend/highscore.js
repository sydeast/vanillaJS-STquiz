class Highscore {

    constructor(highscore){
        const {id, attributes} = highscore
        this.id = id
        this.name = attributes.name
        this.score = attributes.score
        this.renderLeaderboard()
        this.scoreLi = this.buildLi()
        this.setEventListeners()
        Highscore.all.push
    }

    renderLeaderboard(){
        const qBox = document.getElementById('quiz-container');
        qBox.innerHTML = `
            <div id="highscores">
                <span>Try your luck or Head Home: <button type="submit" id="playBtn">Click Me and Play the Star Trek Quiz</button></span>
                <span><button type="submit" id="homeBtn" onclick="goHome()">Go Back to Homepage</button></span>
                <h2>Leaderboard</h2>
                <p>How well did you do?</p>
                <ol id="score-list">
                </ol>
                <button>
            </div>
        `

}

    buildLi(){
        const li = document.createElement('li')
        const scoreList = document.getElementById('score-list')
        li.dataset.id = this.id
        li.innerHTML = this.scoreInnerHTML()
        scoreList.appendChild(li)
    
    }

    scoreInnerHTML(){
        const score = this.score
        const name = this.name
        return `
            <span>${score}pts - ${name}</span>
        `
    }

    // renderHighscores(){

    // }

    setEventListeners(){
    const playBtn = document.getElementById('playBtn')
    playBtn.addEventListener('click', startQuiz)
    }



}
Highscore.all = [];