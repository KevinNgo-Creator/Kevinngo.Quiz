var questionContainerEl= document.getElementById('question-container')
let shuffledQuestion, currentQuestion
var questionEl = document.getElementById('question')
var asnwerButtonELement = document.getElementById ('answer-buttons')
var nextButton =document.getElementById('next-button')
var choicesEl = document.getElementById()

// click listem
var startButton = document.getElementById('start-button')
startButton.addEventListener('click', startQuiz)
nextButton.addEventListener('click', () => {
    currentQuestion++
    setNextQuestion()
})

//function
function startQuiz (){
    startButton.classList.add('hide')
    shuffledQuestion = questions.sort(() => Math.random() - .5)
    currentQuestion = 0
    // questionContainerEl.classList.remove('hide')
    nextQuestion()
}

function nextQuestion (){
    resetState()
    showQuestion(shuffledQuestion[currentQuestion])
}

function showQuestion(question) {
    questionEl.innerText = question.question
    question.choicesEl.forEach(answers => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answers.correct) {
            button.dataset.correct = answer.correct
        } 
        button.addEventListener('click', selectAnswer)
        asnwerButtonELement.appendChild(button)
})}

function resetState(){
    nextButton.classList.add('hide')
    while (asnwerButtonELement.firstChild){
        asnwerButtonELement.removeChild(asnwerButtonELement.firstChild)
}}

function selectAnswer(e){
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
})
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
}}

var questions = [{
    question: 'what is 2 + 2 ? ',
    choices: ["strings", "booleans", "alerts", "numbers"],
    answers: "4"
}],
// var questions = [{
//     question: 'Commonly used data types DO NOT include:',
//     choices: ["strings", "booleans", "alerts", "numbers"],
//     answer: "alerts"
// }],