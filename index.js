const answers = document.querySelector('.answers');

answers.addEventListener('click', (event) => {
    if (event.target !== answers) {
        console.log(event.target.textContent);
        if (event.target.textContent === "Answer 1") {
            console.log("right answer!");
        }
    }
});