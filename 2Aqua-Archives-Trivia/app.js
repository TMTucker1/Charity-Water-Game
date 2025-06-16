

class WaterCrisisTrivia {
    constructor() {
        this.score = 0;
        this.currentQuestion = 0;
        this.selectedQuestions = [];
        this.isAnswered = false;
        
        this.initializeElements();
        this.bindEvents();
    }
    
    initializeElements() {
        this.startButton = document.getElementById('start-mission');
        this.quizContainer = document.getElementById('quiz-container');
        this.missionButton = document.querySelector('.mission-button');
        this.questionText = document.getElementById('question-text');
        this.answersContainer = document.getElementById('answers-container');
        this.feedback = document.getElementById('feedback');
        this.nextButton = document.getElementById('next-question');
        this.scoreElement = document.getElementById('score');
        this.questionNumber = document.getElementById('question-number');
        this.resultScreen = document.getElementById('result-screen');
        this.resultTitle = document.getElementById('result-title');
        this.resultMessage = document.getElementById('result-message');
        this.playAgainButton = document.getElementById('play-again');
    }
    
    bindEvents() {
        this.startButton.addEventListener('click', () => this.startGame());
        this.nextButton.addEventListener('click', () => this.nextQuestion());
        this.playAgainButton.addEventListener('click', () => this.resetGame());
    }
    
    startGame() {
        this.score = 0;
        this.currentQuestion = 0;
        this.selectedQuestions = this.getRandomQuestions(10);
        this.isAnswered = false;
        
        this.missionButton.classList.add('hidden');
        this.quizContainer.classList.remove('hidden');
        this.resultScreen.classList.add('hidden');
        
        this.updateScore();
        this.showQuestion();
    }
    
    getRandomQuestions(count) {
        const shuffled = [...questions].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }
    
    showQuestion() {
        if (this.currentQuestion >= this.selectedQuestions.length) {
            this.showResults();
            return;
        }
        
        const question = this.selectedQuestions[this.currentQuestion];
        this.questionText.textContent = question.question;
        this.questionNumber.textContent = this.currentQuestion + 1;
        
        this.answersContainer.innerHTML = '';
        this.feedback.classList.add('hidden');
        this.nextButton.classList.add('hidden');
        this.isAnswered = false;
        
        question.answers.forEach((answer, index) => {
            const button = document.createElement('button');
            button.textContent = answer;
            button.className = 'answer-btn';
            button.addEventListener('click', () => this.selectAnswer(index));
            this.answersContainer.appendChild(button);
        });
    }
    
    selectAnswer(selectedIndex) {
        if (this.isAnswered) return;
        
        this.isAnswered = true;
        const question = this.selectedQuestions[this.currentQuestion];
        const answerButtons = this.answersContainer.querySelectorAll('.answer-btn');
        
        answerButtons.forEach((button, index) => {
            button.classList.add('disabled');
            if (index === question.correct) {
                button.classList.add('correct');
            } else if (index === selectedIndex) {
                button.classList.add('incorrect');
            }
        });
        
        if (selectedIndex === question.correct) {
            this.score++;
            this.showFeedback(true, "Correct! Great job!");
        } else {
            this.showFeedback(false, `Incorrect. The correct answer is: ${question.answers[question.correct]}`);
        }
        
        this.updateScore();
        this.nextButton.classList.remove('hidden');
    }
    
    showFeedback(isCorrect, message) {
        this.feedback.textContent = message;
        this.feedback.className = `feedback ${isCorrect ? 'correct' : 'incorrect'}`;
        this.feedback.classList.remove('hidden');
    }
    
    updateScore() {
        this.scoreElement.textContent = this.score;
    }
    
    nextQuestion() {
        this.currentQuestion++;
        this.showQuestion();
    }
    
    showResults() {
        this.quizContainer.classList.add('hidden');
        this.resultScreen.classList.remove('hidden');
        
        if (this.score === 10) {
            this.resultTitle.textContent = "🎉 Mission Accomplished! 🎉";
            this.resultTitle.style.color = "#4CAF50";
            this.resultMessage.innerHTML = `
                Outstanding! You answered all 10 questions correctly!<br>
                You're now a certified water crisis expert. Your knowledge can help spread awareness about this critical global issue.<br><br>
                <strong>Remember:</strong> Every person deserves access to clean, safe water. Consider supporting charity: water's mission to bring clean water to everyone, everywhere.
            `;
        } else {
            this.resultTitle.textContent = "Mission Incomplete";
            this.resultTitle.style.color = "#f44336";
            this.resultMessage.innerHTML = `
                You scored ${this.score}/10 correct answers.<br>
                To complete the Aqua Archives mission, you need to answer all 10 questions correctly.<br><br>
                Don't give up! Try again to learn more about the global water crisis and how we can help solve it.
            `;
        }
    }
    
    resetGame() {
        this.resultScreen.classList.add('hidden');
        this.missionButton.classList.remove('hidden');
        this.quizContainer.classList.add('hidden');
        this.score = 0;
        this.currentQuestion = 0;
        this.updateScore();
        this.questionNumber.textContent = '1';
    }
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new WaterCrisisTrivia();
});