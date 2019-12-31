var questionContainerEl= document.getElementById('question-container')
var questionEl = document.getElementById('question')
var answerButtonELement = document.getElementById ('answer-buttons')
var nextButton =document.getElementById('next-button')
var answer = document.getElementById('answer')
var btnAnswer = document.getElementById('btn-answer')
var scoreButton = document.getElementById('score-button')
let shuffledQuestion, currentQuestion
// click listen
var startButton = document.getElementById('start-button')
startButton.addEventListener('click', startQuiz)
nextButton.addEventListener('click', () => {
    currentQuestion++
    nextQuestion()
})
//function
function startQuiz (){
    startButton.classList.add('hide')
    shuffledQuestion = questions.sort(() => Math.random() - .5)
    currentQuestion = 0
    questionContainerEl.classList.remove('hide')
    nextButton.classList.remove('hide')
    nextQuestion()
}
function nextQuestion (){
    resetState()
    showQuestion(shuffledQuestion[currentQuestion])
    if (shuffledQuestion.length > currentQuestion + 1) {
    } else {
        nextButton.classList.add('hide')
        scoreButton.classList.remove('hide')
    }
}
function showQuestion(question) {
    questionEl.innerText = question.question
    question.answers.forEach(answers => {
        const button = document.createElement('button')
        button.innerText = answers.text
        button.classList.add('btn-answer')
        if (answers.correct) {
            button.dataset.correct = answer.correct
        } 
        button.addEventListener('click', selectAnswer)
        answerButtonELement.appendChild(button)
})}
function resetState(){
    while (answerButtonELement.firstChild){
        answerButtonELement.removeChild(answerButtonELement.firstChild)
}}
function selectAnswer(e){
}

var answerButton = document.getElementById('btn-answer')
answerButton.addEventListener('click', finalScore)
function finalScore(){
    score = 0
    if (answers == "undefined"){
        score++;
        alert("points")
    }
}

var questions = [{
    question: 'what is 2 + 2 ? ',
    answers: [
        {text: '4', correct:true },
        {text: '5', correct:false },
        {text: '6', correct:false },
        {text: '12', correct:false }
]},
{
    question: 'what is hello ? ',
    answers: [
        {text: 'greeting', correct:true },
        {text: '5', correct:false },
        {text: '6', correct:false },
        {text: '12', correct:false }
]},
{
    question: 'what is flower ? ',
    answers: [
        {text: 'plant', correct:true },
        {text: '5', correct:false },
        {text: '6', correct:false },
        {text: '12', correct:false }
]}]