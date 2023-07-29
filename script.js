const questions = [
    {
        question: "Which of the following is not FrontEnd Frameworks?",
        answers: [
            {text: "React.js", correct: false},
            {text: "Vue.js", correct: false},
            {text: "Django", correct: true},
            {text: "Next.js", correct: false},
        ]
    },
    {
        
        question: "JavaScrip can be run in web browser's devtools console?",
        answers: [
            {text: "True", correct: true},
            {text: "false", correct: false},
            {text: "VsCode", correct: false},
            {text: "Live Server", correct: false},
        ]  
    },
    {
        
        question: "Which of the following is a valid comment in JavaScript?",
        answers: [
            {text: "\\Comment 1", correct: false},
            {text: "##Comment##", correct: false},
            {text: "/Comment 2", correct: false},
            {text: "//Comment 4", correct: true},
        ]
    },
    {
        
        question: "Which of the following is the Logical AND operator in JavaScript?",
        answers: [
            {text: "&", correct: false},
            {text: "||", correct: false},
            {text: "&&", correct: true},
            {text: "|/", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("nextBtn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function  showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none"
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}


function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    } else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}


function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz(); 
    }
})

startQuiz();


let apps = document.getElementById("apps");

        function openPopup(){
            apps.classList.add("open-popup");
        }
