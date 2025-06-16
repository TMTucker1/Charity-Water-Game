class RippleRecallMemory {
    constructor() {
        this.matches = 0;
        this.moves = 0;
        this.timeStarted = null;
        this.timeElapsed = 0;
        this.timer = null;
        this.flippedCards = [];
        this.isChecking = false;
        this.totalPairs = 8;
        
        // Water-themed card symbols
        this.cardSymbols = [
            '💧', '🌊', '🚰', '⛲',
            '🏊', '🚿', '🌧️', '☔'
        ];
        
        this.initializeElements();
        this.bindEvents();
    }
    
    initializeElements() {
        this.startButton = document.getElementById('start-mission');
        this.gameContainer = document.getElementById('game-container');
        this.missionButton = document.querySelector('.mission-button');
        this.memoryGrid = document.getElementById('memory-grid');
        this.matchesElement = document.getElementById('matches');
        this.movesElement = document.getElementById('moves');
        this.timerElement = document.getElementById('timer');
        this.resultScreen = document.getElementById('result-screen');
        this.resultTitle = document.getElementById('result-title');
        this.resultMessage = document.getElementById('result-message');
        this.finalTime = document.getElementById('final-time');
        this.finalMoves = document.getElementById('final-moves');
        this.playAgainButton = document.getElementById('play-again');
    }
    
    bindEvents() {
        this.startButton.addEventListener('click', () => this.startGame());
        this.playAgainButton.addEventListener('click', () => this.resetGame());
    }
    
    startGame() {
        this.matches = 0;
        this.moves = 0;
        this.timeStarted = Date.now();
        this.timeElapsed = 0;
        this.flippedCards = [];
        this.isChecking = false;
        
        this.missionButton.classList.add('hidden');
        this.gameContainer.classList.remove('hidden');
        this.resultScreen.classList.add('hidden');
        
        this.updateStats();
        this.createCards();
        this.startTimer();
    }
    
    createCards() {
        // Create pairs of cards
        const cardPairs = [...this.cardSymbols, ...this.cardSymbols];
        // Shuffle the cards
        const shuffledCards = this.shuffleArray(cardPairs);
        
        this.memoryGrid.innerHTML = '';
        
        shuffledCards.forEach((symbol, index) => {
            const card = document.createElement('div');
            card.className = 'memory-card';
            card.dataset.symbol = symbol;
            card.dataset.index = index;
            
            card.innerHTML = `
                <div class="card-content">${symbol}</div>
            `;
            
            card.addEventListener('click', () => this.flipCard(card));
            this.memoryGrid.appendChild(card);
        });
    }
    
    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }
    
    flipCard(card) {
        if (this.isChecking || 
            card.classList.contains('flipped') || 
            card.classList.contains('matched') ||
            this.flippedCards.length >= 2) {
            return;
        }
        
        card.classList.add('flipped');
        this.flippedCards.push(card);
        
        if (this.flippedCards.length === 2) {
            this.moves++;
            this.updateStats();
            this.checkMatch();
        }
    }
    
    checkMatch() {
        this.isChecking = true;
        const [card1, card2] = this.flippedCards;
        
        if (card1.dataset.symbol === card2.dataset.symbol) {
            // Match found
            setTimeout(() => {
                card1.classList.add('matched');
                card2.classList.add('matched');
                card1.classList.remove('flipped');
                card2.classList.remove('flipped');
                
                this.matches++;
                this.updateStats();
                this.flippedCards = [];
                this.isChecking = false;
                
                if (this.matches === this.totalPairs) {
                    this.gameComplete();
                }
            }, 500);
        } else {
            // No match
            setTimeout(() => {
                card1.classList.remove('flipped');
                card2.classList.remove('flipped');
                this.flippedCards = [];
                this.isChecking = false;
            }, 1000);
        }
    }
    
    startTimer() {
        this.timer = setInterval(() => {
            this.timeElapsed = Date.now() - this.timeStarted;
            this.updateTimer();
        }, 100);
    }
    
    updateTimer() {
        const seconds = Math.floor(this.timeElapsed / 1000);
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        
        this.timerElement.textContent = 
            `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    }
    
    updateStats() {
        this.matchesElement.textContent = this.matches;
        this.movesElement.textContent = this.moves;
    }
    
    gameComplete() {
        clearInterval(this.timer);
        
        setTimeout(() => {
            this.gameContainer.classList.add('hidden');
            this.resultScreen.classList.remove('hidden');
            
            this.resultTitle.textContent = "🎉 Mission Accomplished! 🎉";
            this.resultMessage.innerHTML = `
                Excellent memory skills! You've successfully matched all the water-themed cards.<br>
                Your sharp memory helps spread awareness about water conservation and the importance of clean water access worldwide.
            `;
            
            const finalSeconds = Math.floor(this.timeElapsed / 1000);
            const finalMinutes = Math.floor(finalSeconds / 60);
            const remainingSeconds = finalSeconds % 60;
            
            this.finalTime.textContent = 
                `${finalMinutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
            this.finalMoves.textContent = this.moves;
        }, 1000);
    }
    
    resetGame() {
        clearInterval(this.timer);
        this.resultScreen.classList.add('hidden');
        this.missionButton.classList.remove('hidden');
        this.gameContainer.classList.add('hidden');
        
        this.matches = 0;
        this.moves = 0;
        this.timeElapsed = 0;
        this.updateStats();
        this.timerElement.textContent = '00:00';
    }
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new RippleRecallMemory();
});