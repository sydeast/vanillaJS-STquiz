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



    setEventListeners(){
    const playBtn = document.getElementById('playBtn')
    playBtn.addEventListener('click', startQuiz)

    }



}
Highscore.all = [];