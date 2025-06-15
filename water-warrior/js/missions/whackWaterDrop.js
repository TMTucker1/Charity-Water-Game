class WhackWaterDrop extends Mission {
    constructor() {
        super();
        this.points = 0;
        this.timeLimit = 30; // seconds
        this.score = 0;
        this.drops = [];
        this.interval = null;
    }

    startGame() {
        this.score = 0;
        this.generateDrops();
        this.showDrops();
        this.startTimer();
    }

    generateDrops() {
        this.drops = [];
        for (let i = 0; i < 5; i++) {
            const drop = {
                id: i,
                position: this.getRandomPosition(),
                active: false
            };
            this.drops.push(drop);
        }
    }

    getRandomPosition() {
        const x = Math.floor(Math.random() * 80); // Random x position
        const y = Math.floor(Math.random() * 80); // Random y position
        return { x, y };
    }

    showDrops() {
        this.drops.forEach(drop => {
            if (!drop.active) {
                drop.active = true;
                this.displayDrop(drop);
                setTimeout(() => this.hideDrop(drop), 1000); // Drop visible for 1 second
            }
        });
    }

    displayDrop(drop) {
        const dropElement = document.createElement('div');
        dropElement.className = 'water-drop';
        dropElement.style.left = `${drop.position.x}%`;
        dropElement.style.top = `${drop.position.y}%`;
        dropElement.onclick = () => this.hitDrop(drop, dropElement);
        document.body.appendChild(dropElement);
    }

    hideDrop(drop) {
        drop.active = false;
        const dropElements = document.querySelectorAll('.water-drop');
        dropElements.forEach(element => {
            element.remove();
        });
        this.showDrops(); // Show new drops
    }

    hitDrop(drop, element) {
        this.score++;
        this.points += 10; // Earn points for hitting a drop
        element.remove(); // Remove the hit drop
        drop.active = false; // Mark drop as inactive
    }

    startTimer() {
        let timeLeft = this.timeLimit;
        this.interval = setInterval(() => {
            if (timeLeft <= 0) {
                clearInterval(this.interval);
                this.endGame();
            }
            timeLeft--;
        }, 1000);
    }

    endGame() {
        alert(`Game Over! Your score: ${this.score}`);
        // Logic to handle end of game, e.g., saving score, transitioning to next mission
    }
}

export default WhackWaterDrop;