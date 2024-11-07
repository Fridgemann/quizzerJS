const quizApp = document.querySelector('.quiz-app');
const answers = document.querySelector('.answers');
const question = document.querySelector('.question');
let answerOptions = document.querySelectorAll('.ans');
let score = 0;
const questions = {
    "Who invented the World Wide Web?" : [
        "Tim Berners-Lee", "Bill Gates", "Steve Jobs" , "Mark Zuckerberg"
    ],
    "What is the rarest naturally occuring element on Earth?" : [
        "Francium", "Astatine", "Promethium" , "Respiration"
    ],
    "Which planet is known as the Red Planet?": [
        "Venus", "Mars", "Jupiter", "Saturn"
    ],
    "What is the largest mammal in the world?": [
        "Elephant", "Blue Whale", "Giraffe", "Polar Bear"
    ]
};

const rightAnswers = ["Tim Berners-Lee", "Francium", "Mars", "Blue Whale"];
const questionsKeys = Object.keys(questions);
let questionNum = 1;

addQuestionAndAnswer();

function addQuestionAndAnswer() {
    if (questionNum <= rightAnswers.length) {
        question.textContent = questionNum + ". "  + questionsKeys[questionNum - 1];
        let loopCount = 0;
        answerOptions.forEach((elem) => {
            elem.textContent = questions[questionsKeys[questionNum - 1]][loopCount];
            loopCount += 1;
        })    
        questionNum += 1
        answers.style.pointerEvents = "auto";
    }


}


answers.addEventListener('click', (event) => {
    if (event.target !== answers) {
        console.log(event.target.textContent);
        if (rightAnswers.includes(event.target.textContent)) {
            event.target.classList.add('right-ans');
            score = score + 1;
        }
        else {
            let elems = document.querySelectorAll('.ans');
            let targetElem = Array.from(elems).find(el => rightAnswers.includes(el.textContent.trim()));
            event.target.classList.add('wrong-ans');
            targetElem.classList.add('right-ans');
        }
        answers.style.pointerEvents = "none";
        if (!(document.querySelector('.next-btn'))) {
            const nextBtn = document.createElement('div');
            nextBtn.textContent = "Next";
            nextBtn.classList.toggle('next-btn');
            quizApp.appendChild(nextBtn);
            nextBtn.addEventListener('click', () => {
                if (questionNum === rightAnswers.length) {
                    nextBtn.style.pointerEvents = "none";
                }
                addQuestionAndAnswer();
                if (document.querySelector('.right-ans')) {
                    rightElem = document.querySelector('.right-ans');
                    rightElem.classList.remove('right-ans');
                }
                if (document.querySelector('.wrong-ans')) {
                    wrongElem = document.querySelector('.wrong-ans');
                    wrongElem.classList.remove('wrong-ans');
                }
            })
        }
    }
    

    
    

});



// keep user score and display it at the end