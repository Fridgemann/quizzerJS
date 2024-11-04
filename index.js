const quizApp = document.querySelector('.quiz-app');
const answers = document.querySelector('.answers');
const question = document.querySelector('.question');
let answerOptions = document.querySelectorAll('.ans');
const questions = {
    "Who invented the World Wide Web?" : [
        "Tim Berners-Lee", "Bill Gates", "Steve Jobs" , "Mark Zuckerberg"
    ],
    "What is the rarest naturally occuring element on Earth?" : [
        "Francium", "Astatine", "Promethium" , "Respiration"
    ]
};

const rightAnswers = ["Tim Berners-Lee", "Francium"];
const questionsKeys = Object.keys(questions);
let questionNum = 1;

question.textContent = questionNum + ". "  + questionsKeys[0];

let loopCount = 0;
answerOptions.forEach((elem) => {
    elem.textContent = questions[questionsKeys[0]][loopCount];
    loopCount += 1;
})

answers.addEventListener('click', (event) => {
    if (event.target !== answers) {
        console.log(event.target.textContent);
        if (rightAnswers.includes(event.target.textContent)) {
            event.target.style.backgroundColor = "green";
        }
        else {
            event.target.style.backgroundColor = "red";
            let elems = document.querySelectorAll('.ans');
            let targetElem = Array.from(elems).find(el => rightAnswers.includes(el.textContent.trim()));
            targetElem.style.backgroundColor = "green";
        }
    }
    let nextBtn = document.createElement('div');
    nextBtn.classList.toggle('next-btn');
    nextBtn.textContent = "Next";
    quizApp.appendChild(nextBtn);
    answers.style.pointerEvents = "none";
});

// find a way to display different questions

// question number

// background color change to green on true / red on false

// we need a next button

// add the next button as a div to quiz-app container

/* an array with right answers, if user's answer is included in the array
its correct */