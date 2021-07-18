// Target HTML elements 
var startQuizDiv = document.getElementById("start-page");
var quizBody = document.getElementById("quiz-start");
var quizTimer = document.getElementById("timer");
var quizQuestions = document.getElementById("questions");
var answerOptions = document.getElementById("answer-options");
var answerResult = document.getElementById("answer-result");
var resultBox = document.getElementById("results-box");
var finalScore = document.getElementById("score");
var startBtn = document.getElementById("start-btn")
var questionText = document.getElementById("question-text");
var buttonA = document.getElementById("a");
var buttonB = document.getElementById("b");
var buttonC = document.getElementById("c");
var buttonD = document.getElementById("d");
var buttonRestart = document.getElementById("restart");
var buttonQuit = document.getElementById("quit");

// Quiz questions object array
var quizQuestions = [{
    question: "How many elements can you apply an 'ID' attribute to?",
    choiceA: "As many as you want",
    choiceB: "3",
    choiceC: "1",
    choiceD: "128",
    correctAnswer: "c"},
  {
    question: "What does DOM stand for?",
    choiceA: "Document Object Model",
    choiceB: "Display Object Management",
    choiceC: "Digital Ordinance Model",
    choiceD: "Desktop Oriented Mode",
    correctAnswer: "a"},
   {
    question: "What is used primarily to add styling to a web page?",
    choiceA: "HTML",
    choiceB: "CSS",
    choiceC: "Python",
    choiceD: "React.js",
    correctAnswer: "b"},
    {
    question: "What HTML tags are JavaScript code wrapped in?",
    choiceA: "&lt;div&gt;",
    choiceB: "&lt;link&gt;",
    choiceC: "&lt;head&gt;",
    choiceD: "&lt;script&gt;",
    correctAnswer: "d"},
    {
    question: "When is localStorage data cleared?",
    choiceA: "No expiration time",
    choiceB: "On page reload",
    choiceC: "On browser close",
    choiceD: "On computer restart",
    correctAnswer: "a"},  
    {
    question: "What does WWW stand for?",
    choiceA: "Web World Workings",
    choiceB: "Weak Winter Wind",
    choiceC: "World Wide Web",
    choiceD: "Wendy Wants Waffles",
    correctAnswer: "c"},
    {
    question: "What HTML attribute references an external JavaScript file?",
    choiceA: "href",
    choiceB: "src",
    choiceC: "class",
    choiceD: "index",
    correctAnswer: "b"},

];

var finalQuestionIndex = quizQuestions.length;
var currentQuestionIndex = 0;
var timeLeft = 76;
var timerInterval;
var score = 0;
var correct;

// Hide div elements until start button click
window.onload = function() {
    startQuizDiv.style.display = "block";
    quizBody.style.display = "none";
    resultBox.style.display = "none";
}

// If start button clicked
function startQuiz() {
    quizBody.style.display = "block";
    startQuizDiv.style.display = "none";
    resultBox.style.display = "none";
    generateQuizQuestions();

// Timer 
    timerInterval = setInterval(function() {
        timeLeft--; 
        quizTimer.textContent = "Remaining Time: " + timeLeft;

        if(timeLeft === 0) {
         clearInterval(timerInterval);
            showScore();
        }
    }, 1000); 
}

// Function to cycle through questions object array
function generateQuizQuestions() {
    startQuizDiv.style.display = "none";
    if (currentQuestionIndex === finalQuestionIndex) {
        return showScore();
    }
    var currentQuestion = quizQuestions[currentQuestionIndex];
    questionText.innerHTML = currentQuestion.question;
    buttonA.innerHTML = currentQuestion.choiceA;
    buttonB.innerHTML = currentQuestion.choiceB;
    buttonC.innerHTML = currentQuestion.choiceC;
    buttonD.innerHTML = currentQuestion.choiceD;
}

// Check user responses 
function checkAnswer(answer) {
    correct = quizQuestions[currentQuestionIndex].correctAnswer;
        if (answer === correct && currentQuestionIndex !== finalQuestionIndex) {
            score++;
            alert('Correct!'); 
            currentQuestionIndex++;
            generateQuizQuestions();
        }
        else if (answer !== correct && currentQuestionIndex !== finalQuestionIndex) {
            alert('Incorrect!')
            timeLeft -= 10;
            currentQuestionIndex++;
            generateQuizQuestions();
        }

}