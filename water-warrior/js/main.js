// This file contains the main game logic for Water Warrior.
// It initializes the game, sets up event listeners, and manages the game state.

let player;
let currentMission = null;
let score = 0;

document.addEventListener('DOMContentLoaded', () => {
    player = new Player();
    initializeMap();
    setupEventListeners();
    updateScoreDisplay();
});

function initializeMap() {
    // Initialize the game map and set the player's starting position
    const mapElement = document.getElementById('map');
    mapElement.innerHTML = '<div class="building" id="dorm-rooms">Dorm Rooms</div>';
    // Add other buildings and paths here
}

function setupEventListeners() {
    const missionButtons = document.querySelectorAll('.mission-button');
    missionButtons.forEach(button => {
        button.addEventListener('click', () => {
            startMission(button.dataset.missionType);
        });
    });
}

function startMission(missionType) {
    if (currentMission) {
        alert('Finish the current mission first!');
        return;
    }

    switch (missionType) {
        case 'logicPuzzle':
            currentMission = new LogicPuzzle();
            break;
        case 'trivia':
            currentMission = new Trivia();
            break;
        case 'whackWaterDrop':
            currentMission = new WhackWaterDrop();
            break;
        default:
            alert('Unknown mission type!');
            return;
    }

    currentMission.execute().then(points => {
        score += points;
        updateScoreDisplay();
        currentMission = null; // Reset current mission
    });
}

function updateScoreDisplay() {
    const scoreDisplay = document.getElementById('score');
    scoreDisplay.textContent = `Score: ${score}`;
}