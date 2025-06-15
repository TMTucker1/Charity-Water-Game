class LogicPuzzle extends Mission {
    constructor() {
        super();
        this.puzzles = [
            {
                question: "What has keys but can't open locks?",
                answer: "A piano",
                points: 10
            },
            {
                question: "I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?",
                answer: "An echo",
                points: 15
            },
            {
                question: "What can travel around the world while staying in a corner?",
                answer: "A stamp",
                points: 5
            }
        ];
        this.currentPuzzleIndex = 0;
    }

    startMission() {
        if (this.currentPuzzleIndex < this.puzzles.length) {
            const puzzle = this.puzzles[this.currentPuzzleIndex];
            const userAnswer = prompt(puzzle.question);
            this.validateAnswer(userAnswer, puzzle.answer, puzzle.points);
        } else {
            alert("All puzzles completed!");
        }
    }

    validateAnswer(userAnswer, correctAnswer, points) {
        if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
            alert(`Correct! You earned ${points} points.`);
            this.currentPuzzleIndex++;
        } else {
            alert("Incorrect. Try again!");
        }
        this.startMission();
    }
}

export default LogicPuzzle;