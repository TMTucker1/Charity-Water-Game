class Player {
    constructor() {
        this.position = 'Dorm Rooms'; // Starting position
        this.score = 0; // Initial score
    }

    move(newPosition) {
        this.position = newPosition;
        console.log(`Player moved to: ${this.position}`);
    }

    earnPoints(points) {
        this.score += points;
        console.log(`Player earned points: ${points}. Total score: ${this.score}`);
    }

    getScore() {
        return this.score;
    }

    getPosition() {
        return this.position;
    }
}

export default Player;