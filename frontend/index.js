const startBtn = document.getElementById('startBtn')
const qBox = document.getElementById('quiz-container')
const baseURL = "http://localhost:3000/questions"

startBtn.onclick = function start() {
    // alert('Game started!');
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
    .then(json => {debugger})

}


