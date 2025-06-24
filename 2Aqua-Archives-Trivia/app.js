class WaterCrisisTrivia {
    constructor() {
        this.score = 0;
        this.currentQuestion = 0;
        this.selectedQuestions = [];
        this.isAnswered = false;
        
        // Additional water crisis facts for "Did You Know?" popup
        this.didYouKnowFacts = [
            "The human body is about 60% water, and we can only survive 3-5 days without it.",
            "It takes 2,700 liters of water to produce a single cotton t-shirt.",
            "A leaky faucet can waste over 3,000 gallons of water per year.",
            "Only 0.007% of the planet's water is available to fuel and feed its 6.8 billion people.",
            "The average distance women in Africa and Asia walk to collect water is 3.7 miles.",
            "Water-related diseases are responsible for more deaths in children than HIV/AIDS, malaria, and tuberculosis combined.",
            "Americans use 5 times the amount of water that Europeans use daily.",
            "A person can live about a month without food, but only about a week without water.",
            "More people have access to a mobile phone than to a toilet.",
            "The weight of water that women in Africa and Asia carry on their heads is equivalent to airline luggage limits - 44 pounds.",
            "Unsafe water kills more children each year than war, malaria, HIV/AIDS and traffic accidents combined.",
            "Every 20 seconds, a child dies from a water-related disease.",
            "Agriculture accounts for 70% of global freshwater use.",
            "By 2025, half of the world's population will be living in water-stressed areas.",
            "Clean water and sanitation can increase a country's GDP by up to 7%.",
            "In Madagascar, children under 5 are 3 times more likely to die if they don't have access to improved water sources.",
            "Treating diarrhea costs $43 billion annually in India alone.",
            "Girls are twice as likely to be out of school in areas without clean water.",
            "180 million people drink water that puts them at risk of getting cancer.",
            "Water scarcity affects 40% of the global population and this figure is rising.",
            "One flush of a Western toilet uses as much water as most Africans have for an entire day's washing, drinking, cleaning and cooking.",
            "The UN estimates that each person needs a minimum of 20 liters of clean water a day for basic needs.",
            "Climate change could displace 200 million people by 2050 due to water scarcity.",
            "Over 2 billion people live in countries experiencing high water stress.",
            "Improving water supply and sanitation could prevent 361,000 deaths of children under 5 each year."
        ];
        
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
            // Play win sound for perfect score
            this.playWinSound();
        } else {
            this.resultTitle.textContent = "Mission Incomplete";
            this.resultTitle.style.color = "#f44336";
            this.resultMessage.innerHTML = `
                You scored ${this.score}/10 correct answers.<br>
                To complete the Aqua Archives mission, you need to answer all 10 questions correctly.<br><br>
                Don't give up! Try again to learn more about the global water crisis and how we can help solve it.
            `;
            // Play lost sound for imperfect score
            this.playLostSound();
        }
        
        // Show "Did You Know?" popup after a short delay
        setTimeout(() => {
            this.showDidYouKnowPopup();
        }, 2000);
    }
    
    // NEW METHOD: Show "Did You Know?" popup
    showDidYouKnowPopup() {
        // Get a random fact that wasn't in the quiz
        const randomFact = this.didYouKnowFacts[Math.floor(Math.random() * this.didYouKnowFacts.length)];
        
        // Create popup overlay
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
            animation: fadeIn 0.3s ease-in;
        `;
        
        // Create popup content
        const popup = document.createElement('div');
        popup.style.cssText = `
            background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
            color: white;
            padding: 30px;
            border-radius: 20px;
            max-width: 500px;
            margin: 20px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
            animation: slideIn 0.4s ease-out;
            position: relative;
            border: 3px solid #00d4ff;
        `;
        
        popup.innerHTML = `
            <div style="text-align: center;">
                <div style="font-size: 3rem; margin-bottom: 15px;">💡</div>
                <h2 style="color: #00d4ff; margin-bottom: 20px; font-size: 28px; text-shadow: 2px 2px 4px rgba(0,0,0,0.3);">
                    Did You Know?
                </h2>
                <div style="background: rgba(255,255,255,0.1); padding: 20px; border-radius: 15px; margin-bottom: 25px; backdrop-filter: blur(10px);">
                    <p style="font-size: 18px; line-height: 1.6; margin: 0;">
                        ${randomFact}
                    </p>
                </div>
                <p style="font-size: 14px; opacity: 0.8; margin-bottom: 20px;">
                    Keep learning and spreading awareness about the global water crisis!
                </p>
                <button id="close-did-you-know" style="
                    background: linear-gradient(45deg, #00d4ff, #0099cc);
                    color: white;
                    border: none;
                    padding: 12px 30px;
                    border-radius: 25px;
                    font-size: 16px;
                    font-weight: bold;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    box-shadow: 0 4px 15px rgba(0,212,255,0.3);
                ">Got It!</button>
            </div>
        `;
        
        // Add animations
        const style = document.createElement('style');
        style.textContent = `
            @keyframes fadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            @keyframes slideIn {
                from { transform: scale(0.8) translateY(-20px); opacity: 0; }
                to { transform: scale(1) translateY(0); opacity: 1; }
            }
            @keyframes fadeOut {
                from { opacity: 1; }
                to { opacity: 0; }
            }
        `;
        document.head.appendChild(style);
        
        overlay.appendChild(popup);
        document.body.appendChild(overlay);
        
        // Close popup functionality
        const closeButton = popup.querySelector('#close-did-you-know');
        closeButton.onclick = function() {
            overlay.style.animation = 'fadeOut 0.3s ease-out forwards';
            setTimeout(() => {
                if (document.body.contains(overlay)) {
                    document.body.removeChild(overlay);
                }
                if (document.head.contains(style)) {
                    document.head.removeChild(style);
                }
            }, 300);
        };
        
        // Add hover effect to button
        closeButton.addEventListener('mouseover', () => {
            closeButton.style.transform = 'translateY(-2px)';
            closeButton.style.boxShadow = '0 6px 20px rgba(0,212,255,0.4)';
        });
        
        closeButton.addEventListener('mouseout', () => {
            closeButton.style.transform = 'translateY(0)';
            closeButton.style.boxShadow = '0 4px 15px rgba(0,212,255,0.3)';
        });
        
        // Close on overlay click (but not popup content)
        overlay.onclick = function(e) {
            if (e.target === overlay) {
                closeButton.click();
            }
        };
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