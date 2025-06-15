class Trivia extends Mission {
    constructor() {
        super();
        this.missionType = 'Trivia';
        this.pointsEarned = 10; // Points earned for completing the trivia mission
        this.questions = []; // Array to hold trivia questions
        this.currentQuestionIndex = 0; // Track the current question
    }

    loadQuestions(questions) {
        this.questions = questions;
    }

    displayQuestion() {
        if (this.currentQuestionIndex < this.questions.length) {
            const question = this.questions[this.currentQuestionIndex];
            // Display the question and possible answers (assuming a simple text display)
            const questionElement = document.getElementById('question');
            questionElement.innerText = question.question;

            const answersElement = document.getElementById('answers');
            answersElement.innerHTML = ''; // Clear previous answers

            question.answers.forEach((answer, index) => {
                const button = document.createElement('button');
                button.innerText = answer;
                button.onclick = () => this.checkAnswer(index);
                answersElement.appendChild(button);
            });
        } else {
            this.completeMission();
        }
    }

    checkAnswer(selectedIndex) {
        const question = this.questions[this.currentQuestionIndex];
        if (question.correctAnswerIndex === selectedIndex) {
            alert('Correct!');
            this.currentQuestionIndex++;
            this.displayQuestion();
        } else {
            alert('Wrong answer. Try again!');
        }
    }

    completeMission() {
        alert(`Mission complete! You earned ${this.pointsEarned} points.`);
        // Logic to add points to player's score can be added here
    }
}

export default Trivia;