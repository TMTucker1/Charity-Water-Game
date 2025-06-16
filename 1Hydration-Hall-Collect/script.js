// Game configuration and state variables
const GOAL_CANS = 20;        // Total items needed to collect (matching your HTML)
let currentCans = 0;         // Current number of items collected
let gameActive = false;      // Tracks if game is currently running
let spawnInterval;          // Holds the interval for spawning items
let gameTimer;              // Holds the game timer interval
let timeLeft = 30;          // Time left in seconds

// Creates the 4x4 game grid where items will appear
function createGrid() {
  const grid = document.querySelector('.game-grid');
  grid.innerHTML = ''; // Clear any existing grid cells
  for (let i = 0; i < 16; i++) {
    const cell = document.createElement('div');
    cell.className = 'grid-cell'; // Each cell represents a grid square
    grid.appendChild(cell);
  }
}

// Update the display elements
function updateDisplay() {
  document.getElementById('current-cans').textContent = currentCans;
  document.getElementById('timer').textContent = timeLeft;
}

// Handle clicking on items (water cans or penalty circles)
function handleItemClick(event) {
  if (!gameActive) return;
  
  // Check if the clicked element is a water can
  if (event.target.classList.contains('water-can')) {
    currentCans++;
    updateDisplay();
    
    // Remove the water can from the grid
    const wrapper = event.target.closest('.item-wrapper');
    if (wrapper) {
      wrapper.remove();
    }
    
    // Check if goal is reached
    if (currentCans >= GOAL_CANS) {
      endGame();
      showAchievement('Congratulations! You collected all the water cans!');
      
      // Send completion message to parent window if embedded
      if (window.parent !== window) {
        window.parent.postMessage({
          type: 'missionComplete', 
          mission: 'hydration-hall', 
          score: currentCans,
          timeRemaining: timeLeft
        }, '*');
      }
    }
  }
  
  // Check if the clicked element is a penalty circle
  if (event.target.classList.contains('penalty-circle')) {
    currentCans = Math.max(0, currentCans - 1); // Remove 1 point, but don't go below 0
    updateDisplay();
    
    // Remove the penalty circle from the grid
    const wrapper = event.target.closest('.item-wrapper');
    if (wrapper) {
      wrapper.remove();
    }
    
    // Show brief penalty message
    showPenaltyMessage();
  }
}

// Show penalty message briefly
function showPenaltyMessage() {
  const achievementDiv = document.getElementById('achievements');
  achievementDiv.textContent = 'Oops! -1 Point!';
  achievementDiv.style.display = 'block';
  achievementDiv.style.background = '#F5402C';
  achievementDiv.style.color = 'white';
  achievementDiv.style.padding = '10px';
  achievementDiv.style.borderRadius = '8px';
  achievementDiv.style.marginBottom = '20px';
  achievementDiv.style.textAlign = 'center';
  achievementDiv.style.fontWeight = 'bold';
  
  // Hide the message after 1 second
  setTimeout(() => {
    achievementDiv.style.display = 'none';
  }, 1000);
}

// Start the game timer
function startTimer() {
  gameTimer = setInterval(() => {
    timeLeft--;
    updateDisplay();
    
    if (timeLeft <= 0) {
      endGame();
      showAchievement('Time\'s up! You collected ' + currentCans + ' water cans.');
    }
  }, 1000);
}

// Show achievement message
function showAchievement(message) {
  const achievementDiv = document.getElementById('achievements');
  achievementDiv.textContent = message;
  achievementDiv.style.display = 'block';
  achievementDiv.style.background = '#4FCB53';
  achievementDiv.style.color = 'white';
  achievementDiv.style.padding = '15px';
  achievementDiv.style.borderRadius = '8px';
  achievementDiv.style.marginBottom = '20px';
  achievementDiv.style.textAlign = 'center';
  achievementDiv.style.fontWeight = 'bold';
}

// Ensure the grid is created when the page loads
createGrid();

// Spawns a new item in a random grid cell (either water can or penalty circle)
function spawnItem() {
  if (!gameActive) return; // Stop if the game is not active
  const cells = document.querySelectorAll('.grid-cell');
  
  // Find empty cells (cells without items)
  const emptyCells = Array.from(cells).filter(cell => !cell.querySelector('.item-wrapper'));
  
  if (emptyCells.length === 0) return; // No empty cells available
  
  // Select a random empty cell
  const randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];

  // Decide what to spawn (70% water can, 30% penalty circle)
  const spawnWaterCan = Math.random() < 0.7;
  
  // Create the item wrapper
  const itemWrapper = document.createElement('div');
  itemWrapper.className = 'item-wrapper';
  
  if (spawnWaterCan) {
    // Create water can
    itemWrapper.innerHTML = '<div class="water-can"></div>';
  } else {
    // Create penalty circle
    itemWrapper.innerHTML = '<div class="penalty-circle">✕</div>';
  }
  
  randomCell.appendChild(itemWrapper);
  
  // Auto-remove the item after 2 seconds if not clicked
  setTimeout(() => {
    if (itemWrapper.parentNode && gameActive) {
      itemWrapper.remove();
    }
  }, 2000);
}

// Initializes and starts a new game
function startGame() {
  if (gameActive) return; // Prevent starting a new game if one is already active
  
  // Reset game state
  gameActive = true;
  currentCans = 0;
  timeLeft = 30;
  
  // Clear achievements
  document.getElementById('achievements').style.display = 'none';
  
  // Update display
  updateDisplay();
  
  // Set up the game grid
  createGrid();
  
  // Add click event listener to the grid for item clicks
  const grid = document.querySelector('.game-grid');
  grid.addEventListener('click', handleItemClick);
  
  // Start spawning items faster and timer
  spawnInterval = setInterval(spawnItem, 800); // Spawn items every 0.8 seconds (faster)
  startTimer();
  
  // Change button text
  document.getElementById('start-game').textContent = 'Game Running...';
  document.getElementById('start-game').disabled = true;
}

function endGame() {
  gameActive = false; // Mark the game as inactive
  clearInterval(spawnInterval); // Stop spawning items
  clearInterval(gameTimer); // Stop the timer
  
  // Remove click event listener
  const grid = document.querySelector('.game-grid');
  grid.removeEventListener('click', handleItemClick);
  
  // Reset button
  document.getElementById('start-game').textContent = 'Start New Game';
  document.getElementById('start-game').disabled = false;
}

// Set up click handler for the start button
document.getElementById('start-game').addEventListener('click', startGame);

// Initialize display
updateDisplay();
