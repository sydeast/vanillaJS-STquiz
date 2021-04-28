class Highscore {

    constructor(highscore){
        const {id, attributes} = highscore
        this.id = id
        this.name = attributes.name
        this.score = attributes.score
        this.scoreLi = this.buildLi
        this.setEventListeners()
        Highscore.all.push
    }

    buildLi(){
        const li = document.createElement('li')
        li.dataset.id = this.id
        li.innerHTML = this.scoreInnerHTML()
        return li

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


    deleteHighscore(id){
        const dtlBtn = document.createElement('button')
        dtlBtn.id = 'delete-highscore'
        dtlBtn.className = "delete-highscore"
        dtlBtn.innerText = "Delete Your HighScore"
        dtlBtn.addEventListener('click', () =>{
        const dtlHS = new Delete;
        dtlHS.delete(`http://localhost:3000/quizzes/1/highscores/${li.dataset.id}`)})
        return dtlBtn

    }

    setEventListeners(){
    const playBtn = document.getElementById('playBtn')
    playBtn.addEventListener('click', startQuiz)

    }



}
Highscore.all = [];