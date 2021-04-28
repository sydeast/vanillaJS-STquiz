class Leaderboard {
    constructor(){
        this.init()
    }

    init(){
        this.renderLeaderboard()
        // this.getHighscores()
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

//     getHighscores(){
//     fetch('http://localhost:3000/quizzes/1/highscores')
//         .then(r =>r.json())
//         .then(scores => {
//             scores.data.forEach(
//                 item => {
//                     new Highscore(item)
//                     debugger
//                     // renderHighscores()
//                 }
//             )
//         })
// }
}