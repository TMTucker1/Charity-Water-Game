// script.js

const funFacts = [
  "785 million people in the world don't have clean water. That's 1 in 10 people on the planet.",
  "Women and girls spend an estimated 200 million hours every day collecting water.",
  "Access to clean water can improve health, education, and economic outcomes for entire communities.",
  "Every $1 invested in clean water can yield $4–$12 in economic returns.",
  "Diseases from dirty water kill more people every year than all forms of violence, including war."
];

// Splash screen logic
document.addEventListener('DOMContentLoaded', function() {
  // Splash screen logic
  const enterButton = document.getElementById('enter-button');
  if (enterButton) {
    enterButton.onclick = function() {
      document.getElementById('fun-fact-modal').classList.remove('hidden');
      document.getElementById('splash-content').style.visibility = 'hidden';

      // Pick a random fun fact
      const fact = funFacts[Math.floor(Math.random() * funFacts.length)];
      document.querySelector('#fun-fact-modal p').textContent = fact;

      // 30 second countdown
      let seconds = 1;
      const timer = document.getElementById('fun-fact-timer');
      timer.textContent = `Continuing in ${seconds} seconds...`;
      const interval = setInterval(() => {
        seconds--;
        timer.textContent = `Continuing in ${seconds} seconds...`;
        if (seconds <= 0) {
          clearInterval(interval);
          document.getElementById('splash-screen').classList.add('hidden');
          document.getElementById('fun-fact-modal').classList.add('hidden');
          // Show the new game screen
          document.getElementById('gameScreen').classList.remove('hidden');
        }
      }, 1000);
    };
  }

  // Menu item click logic - wrapped in DOMContentLoaded
  document.querySelectorAll('.menu-item').forEach(btn => {
    btn.onclick = function() {
      const area = document.getElementById('gameArea');
      const menuType = this.getAttribute('data-menu');
      
      // Clear existing content and reset classes
      area.className = 'flex-1 flex items-center justify-center text-xl font-semibold p-8 transition-colors duration-300 text-center relative overflow-hidden';
      
      // Create screen content based on menu selection
      switch(menuType) {
        case 'Home':
          area.innerHTML = `
            <!-- Background image layer -->
            <div style="position:absolute; inset:0; background: url('assets/images/jerry-cans.jpg') center center / cover no-repeat; opacity:0.75; z-index:0;"></div>
            <!-- Foreground content -->
            <div style="background: rgba(255,255,255,0.85); border-radius: 1rem; padding: 2rem; z-index: 1; position: relative;">
              <h2 class="text-3xl font-bold mb-4">Welcome to Water Warrior!</h2>
              <p>
                This game is aimed to raise awareness about the global water crisis in a way that's interactive, engaging, and accessible.<br><br>
                By turning learning into gameplay, it empowers players—especially students and young changemakers—to understand the real-world impact of clean water access.<br><br>
                All facts and stories shared are real life items from Charity:Water's work.
              </p>
            </div>
          `;
          break;
          
        case 'Game Rules':
          area.innerHTML = `
            <div style="background: rgba(255,255,255,0.95); border-radius: 1rem; padding: 2rem; z-index: 1; position: relative; max-width: 800px;">
              <h2 class="text-3xl font-bold mb-6 text-blue-600">Game Rules</h2>
              <div class="text-left space-y-4">
                <p class="text-lg"><strong>How to Play Water Warrior:</strong></p>
                <ul class="list-disc list-inside space-y-2 ml-4">
                  <li>Complete missions to earn points</li>
                  <li>Use points to purchase items in the store</li>
                  <li>Learn about the global water crisis through interactive gameplay</li>
                  <li>Unlock new areas as you progress</li>
                </ul>
                <p class="text-sm text-gray-600 mt-4">Navigate using the menu on the left to access different game features.</p>
              </div>
            </div>
          `;
          break;
          
        case 'Missions':
          area.innerHTML = `
            <div style="background: rgba(255,255,255,0.95); border-radius: 1rem; padding: 2rem; z-index: 1; position: relative; max-width: 800px;">
              <h2 class="text-3xl font-bold mb-6 text-green-600">Missions</h2>
              <div class="text-left space-y-4">
                <p class="text-lg">Available Missions:</p>
                <h3 class="font-bold">Aqua Archives - Trivia Questions</h3>
                  <p class="text-sm">Solve water-related trivia questions.</p>
                </div>
                <div class="bg-green-100 p-4 rounded-lg">
                  <h3 class="font-bold">Water Wisdom Labs - Logic Puzzle</h3>
                  <p class="text-sm">A place for solving water logic puzzles.</p>
                </div>
                <div class="bg-yellow-100 p-4 rounded-lg">
                  <h3 class="font-bold">Ripple Recall - Memory Match</h3>
                  <p class="text-sm">Memory-based matching game with water-themed cards.</p>
                </div>
                <div class="bg-purple-100 p-4 rounded-lg">
                  <h3 class="font-bold">Hydration Hall - Collect Jerry Cans</h3>
                  <p class="text-sm">Collect jerry cans while avoiding obstacles!</p>
                </div>
              </div>
            </div>
          `;
          break;
          
        case 'Inventory':
          area.innerHTML = `
            <div style="background: rgba(255,255,255,0.95); border-radius: 1rem; padding: 2rem; z-index: 1; position: relative; max-width: 800px;">
              <h2 class="text-3xl font-bold mb-6 text-purple-600">Inventory</h2>
              <div class="text-left space-y-4">
                <p class="text-lg">Your Items:</p>
                <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                  <div class="bg-gray-100 p-4 rounded-lg text-center">
                    <div class="text-2xl mb-2">🪣</div>
                    <p class="text-sm">Water Bucket</p>
                    <p class="text-xs text-gray-600">Qty: 0</p>
                  </div>
                  <div class="bg-gray-100 p-4 rounded-lg text-center">
                    <div class="text-2xl mb-2">🚰</div>
                    <p class="text-sm">Water Filter</p>
                    <p class="text-xs text-gray-600">Qty: 0</p>
                  </div>
                  <div class="bg-gray-100 p-4 rounded-lg text-center">
                    <div class="text-2xl mb-2">💧</div>
                    <p class="text-sm">Clean Water</p>
                    <p class="text-xs text-gray-600">Qty: 0</p>
                  </div>
                </div>
                <p class="text-sm text-gray-600 mt-4">Complete missions and visit the store to acquire items!</p>
              </div>
            </div>
          `;
          break;
          
        case 'Rewards':
          area.innerHTML = `
            <div style="background: rgba(255,255,255,0.95); border-radius: 1rem; padding: 2rem; z-index: 1; position: relative; max-width: 800px;">
              <h2 class="text-3xl font-bold mb-6 text-yellow-600">Rewards & Achievements</h2>
              <div class="text-left space-y-4">
                <p class="text-lg">Your Progress:</p>
                <div class="space-y-3 mt-4">
                  <div class="bg-yellow-100 p-3 rounded-lg flex items-center">
                    <span class="text-2xl mr-3">🏆</span>
                    <div>
                      <h3 class="font-bold">Water Warrior Beginner</h3>
                      <p class="text-sm text-gray-600">Complete your first mission</p>
                    </div>
                  </div>
                  <div class="bg-gray-100 p-3 rounded-lg flex items-center opacity-50">
                    <span class="text-2xl mr-3">🎯</span>
                    <div>
                      <h3 class="font-bold">Mission Master</h3>
                      <p class="text-sm text-gray-600">Complete all missions</p>
                    </div>
                  </div>
                  <div class="bg-gray-100 p-3 rounded-lg flex items-center opacity-50">
                    <span class="text-2xl mr-3">💎</span>
                    <div>
                      <h3 class="font-bold">Water Expert</h3>
                      <p class="text-sm text-gray-600">Score 100% on all trivia</p>
                    </div>
                  </div>
                </div>
                <div class="mt-6 p-4 bg-blue-50 rounded-lg">
                  <p class="font-bold text-blue-800">Current Points: <span id="user-points">0</span></p>
                </div>
              </div>
            </div>
          `;
          break;
          
        case 'About Charity:Water':
          area.innerHTML = `
            <div style="background: rgba(255,255,255,0.95); border-radius: 1rem; padding: 2rem; z-index: 1; position: relative; max-width: 800px;">
              <h2 class="text-3xl font-bold mb-6 text-blue-600">About Charity: Water</h2>
              <div class="text-left space-y-4">
                <p class="text-lg">Our Mission:</p>
                <p>Charity: water is a nonprofit organization bringing clean and safe drinking water to people in developing countries.</p>
                
                <div class="mt-6 space-y-3">
                  <div class="bg-blue-50 p-4 rounded-lg">
                    <h3 class="font-bold text-blue-800">100% Model</h3>
                    <p class="text-sm">100% of public donations go directly to funding water projects.</p>
                  </div>
                  <div class="bg-green-50 p-4 rounded-lg">
                    <h3 class="font-bold text-green-800">Transparency</h3>
                    <p class="text-sm">Every project is tracked and verified using GPS coordinates and photos.</p>
                  </div>
                  <div class="bg-yellow-50 p-4 rounded-lg">
                    <h3 class="font-bold text-yellow-800">Impact</h3>
                    <p class="text-sm">Over 18 million people have been served with clean water since 2006.</p>
                  </div>
                </div>
                
                <div class="mt-6 text-center">
                  <p class="text-sm text-gray-600">Learn more at <a href="https://www.charitywater.org" class="text-blue-600 underline" target="_blank">charitywater.org</a></p>
                </div>
              </div>
            </div>
          `;
          break;
          
        default:
          area.innerHTML = `
            <div style="background: rgba(255,255,255,0.95); border-radius: 1rem; padding: 2rem; z-index: 1; position: relative;">
              <h2 class="text-3xl font-bold mb-4">Page Not Found</h2>
              <p>This page is under construction.</p>
            </div>
          `;
      }
    };
  });
});

// Game state
const missions = [
  { name: "Hydration Hall", type: "Collect" },
  { name: "Aqua Archives", type: "Trivia" },
  { name: "Water Wisdom Labs", type: "Logic" },
  { name: "Ripple Recall", type: "Memory Match" }
];
let currentMission = 0;
let points = 0;

// Show only the map at first, reveal other sections after first mission is started
const buildings = document.querySelectorAll('.building');
buildings.forEach(b => b.addEventListener('click', function() {
  const idx = parseInt(this.dataset.mission);
  if (idx === currentMission) {
    // Show mission and store sections after first click
    document.getElementById('mission-section').style.display = '';
    document.getElementById('store-section').style.display = '';
    startMission(idx);
  }
}));

function startMission(idx) {
  const mission = missions[idx];
  if (mission.type === "logic") showLogicPuzzle();
  else if (mission.type === "trivia") showTrivia();
  else if (mission.type === "whack") showWhack();
  else document.getElementById('mission-content').innerHTML = "<p>Welcome! Click the next building to start your mission.</p>";
}

// Mission 1: Logic Puzzle
function showLogicPuzzle() {
  document.getElementById('mission-content').innerHTML = `
    <div>
      <p><b>Logic Puzzle:</b> You have 3 jugs: 8L, 5L, and 3L. The 8L jug is full, others empty. Can you measure exactly 4L?</p>
      <button id="logic-yes">Yes</button>
      <button id="logic-no">No</button>
    </div>
  `;
  document.getElementById('logic-yes').onclick = () => finishMission(true, "Correct! You can measure 4L.");
  document.getElementById('logic-no').onclick = () => finishMission(false, "Actually, you can measure 4L!");
}

// Mission 2: Trivia
function showTrivia() {
  document.getElementById('mission-content').innerHTML = `
    <div>
      <p><b>Trivia:</b> What percentage of the Earth's surface is covered by water?</p>
      <button class="trivia" data-correct="false">50%</button>
      <button class="trivia" data-correct="true">71%</button>
      <button class="trivia" data-correct="false">30%</button>
    </div>
  `;
  document.querySelectorAll('.trivia').forEach(btn => {
    btn.onclick = (e) => finishMission(
      btn.dataset.correct === "true",
      btn.dataset.correct === "true" ? "Correct! 71% is covered by water." : "Oops! The answer is 71%."
    );
  });
}

// Mission 3: Whack-a-Water-Drop
function showWhack() {
  let score = 0, total = 5, time = 0;
  document.getElementById('mission-content').innerHTML = `
    <div>
      <p><b>Whack-a-Water-Drop!</b> Click the water drops as fast as you can!</p>
      <div id="whack-area" style="position:relative;width:200px;height:120px;background:#eaf6fb;border-radius:8px;margin:1rem auto;"></div>
      <div id="whack-score">0 / ${total}</div>
    </div>
  `;
  function spawnDrop() {
    if (score >= total) {
      finishMission(true, "Great job! You whacked all the drops!");
      return;
    }
    const area = document.getElementById('whack-area');
    area.innerHTML = '';
    const drop = document.createElement('div');
    drop.style.position = 'absolute';
    drop.style.width = '32px';
    drop.style.height = '32px';
    drop.style.background = 'url("https://cdn-icons-png.flaticon.com/512/728/728093.png") no-repeat center/contain';
    drop.style.left = Math.random() * 160 + 'px';
    drop.style.top = Math.random() * 80 + 'px';
    drop.style.cursor = 'pointer';
    drop.setAttribute('aria-label', 'Water Drop');
    drop.onclick = () => {
      score++;
      document.getElementById('whack-score').textContent = `${score} / ${total}`;
      spawnDrop();
    };
    area.appendChild(drop);
  }
  spawnDrop();
}

// Mission finish logic
function finishMission(success, msg) {
  if (success) {
    points += 5;
    document.getElementById('points').textContent = `Points: ${points}`;
    buildings[currentMission].classList.remove('active');
    buildings[currentMission].classList.add('completed');
    if (currentMission + 1 < buildings.length) {
      buildings[currentMission + 1].classList.add('active');
      currentMission++;
    }
  }
  document.getElementById('mission-content').innerHTML = `<p>${msg}</p>`;
}

// Store logic
document.querySelectorAll('.store-item').forEach(btn => {
  btn.onclick = function() {
    const cost = parseInt(this.dataset.cost);
    if (points >= cost) {
      points -= cost;
      document.getElementById('points').textContent = `Points: ${points}`;
      document.getElementById('store-message').textContent = `You bought a ${this.textContent.split(' ')[0]}!`;
    } else {
      document.getElementById('store-message').textContent = "Not enough points!";
    }
  };
});


if (document.getElementById('splash-screen')) {
  createRain();
  createPuddles();
}

document.getElementById('dorm-building').onclick = function() {
  document.getElementById('store-modal').classList.remove('hidden');
};
document.getElementById('dorm-building').onkeydown = function(e) {
  if (e.key === "Enter" || e.key === " ") {
    document.getElementById('store-modal').classList.remove('hidden');
  }
};
document.getElementById('close-store').onclick = function() {
  document.getElementById('store-modal').classList.add('hidden');
};

function updatePoints(points) {
  document.getElementById('user-points').textContent = 'Points: ' + points;
}
// Example usage: updatePoints(10);

// Replace 'yourSplashButtonId' with the actual ID of your splash screen button
document.getElementById('yourSplashButtonId').onclick = function() {
  document.getElementById('splash').style.display = 'none'; // or your splash hide logic
  document.getElementById('gameScreen').classList.remove('hidden');
};

// Expand menu on hover
const menu = document.getElementById('menu');
menu.addEventListener('mouseenter', () => {
  menu.classList.add('w-64');
  menu.classList.remove('w-16');
  document.querySelectorAll('.menu-label').forEach(el => el.classList.remove('hidden'));
});
menu.addEventListener('mouseleave', () => {
  menu.classList.remove('w-64');
  menu.classList.add('w-16');
  document.querySelectorAll('.menu-label').forEach(el => el.classList.add('hidden'));
});

// Random color generator
function randomColor() {
  const colors = [
    'bg-red-200', 'bg-green-200', 'bg-blue-200', 'bg-yellow-200',
    'bg-purple-200', 'bg-pink-200', 'bg-indigo-200', 'bg-teal-200'
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Menu item click logic
document.querySelectorAll('.menu-item').forEach(btn => {
  btn.onclick = function() {
    const area = document.getElementById('gameArea');
    const menuType = this.getAttribute('data-menu');
    
    // Clear existing content and reset classes
    area.className = 'flex-1 flex items-center justify-center text-xl font-semibold p-8 transition-colors duration-300 text-center relative overflow-hidden';
    
    // Create screen content based on menu selection
    switch(menuType) {
      case 'Home':
        area.innerHTML = `
          <!-- Background image layer -->
          <div style="position:absolute; inset:0; background: url('assets/images/jerry-cans.jpg') center center / cover no-repeat; opacity:0.75; z-index:0;"></div>
          <!-- Foreground content -->
          <div style="background: rgba(255,255,255,0.85); border-radius: 1rem; padding: 2rem; z-index: 1; position: relative;">
            <h2 class="text-3xl font-bold mb-4">Welcome to Water Warrior!</h2>
            <p>
              This game is aimed to raise awareness about the global water crisis in a way that's interactive, engaging, and accessible.<br><br>
              By turning learning into gameplay, it empowers players—especially students and young changemakers—to understand the real-world impact of clean water access.<br><br>
              All facts and stories shared are real life items from Charity:Water's work.
            </p>
          </div>
        `;
        break;
        
      case 'Game Rules':
        area.innerHTML = `
          <div style="background: rgba(255,255,255,0.95); border-radius: 1rem; padding: 2rem; z-index: 1; position: relative; max-width: 800px;">
            <h2 class="text-3xl font-bold mb-6 text-blue-600">Game Rules</h2>
            <div class="text-left space-y-4">
              <p class="text-lg"><strong>How to Play Water Warrior:</strong></p>
              <ul class="list-disc list-inside space-y-2 ml-4">
                <li>Complete missions to earn points</li>
                <li>Use points to purchase items in the store</li>
                <li>Learn about the global water crisis through interactive gameplay</li>
                <li>Unlock new areas as you progress</li>
              </ul>
              <p class="text-sm text-gray-600 mt-4">Navigate using the menu on the left to access different game features.</p>
            </div>
          </div>
        `;
        break;
        
      case 'Missions':
        area.innerHTML = `
          <div style="background: rgba(255,255,255,0.95); border-radius: 1rem; padding: 2rem; z-index: 1; position: relative; max-width: 800px;">
            <h2 class="text-3xl font-bold mb-6 text-green-600">Missions</h2>
            <div class="text-left space-y-4">
              <p class="text-lg">Available Missions:</p>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div class="bg-blue-100 p-4 rounded-lg">
                  <h3 class="font-bold">Aqua Archives - Trivia Questions</h3>
                  <p class="text-sm">Solve water-related trivia questions.</p>
                </div>
                <div class="bg-green-100 p-4 rounded-lg">
                  <h3 class="font-bold">Water Wisdom Labs - Logic Puzzle</h3>
                  <p class="text-sm">A place for solving water logic puzzles.</p>
                </div>
                <div class="bg-yellow-100 p-4 rounded-lg">
                  <h3 class="font-bold">Ripple Recall - Memory Match</h3>
                  <p class="text-sm">Memory-based matching game with water-themed cards.</p>
                </div>
                <div class="bg-purple-100 p-4 rounded-lg">
                  <h3 class="font-bold">Hydration Hall - Collect Jerry Cans</h3>
                  <p class="text-sm">Collect jerry cans while avoiding obstacles!</p>
                </div>
              </div>
            </div>
          </div>
        `;
        break;
        
      case 'Inventory':
        area.innerHTML = `
          <div style="background: rgba(255,255,255,0.95); border-radius: 1rem; padding: 2rem; z-index: 1; position: relative; max-width: 800px;">
            <h2 class="text-3xl font-bold mb-6 text-purple-600">Inventory</h2>
            <div class="text-left space-y-4">
              <p class="text-lg">Your Items:</p>
              <div class="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                <div class="bg-gray-100 p-4 rounded-lg text-center">
                  <div class="text-2xl mb-2">🪣</div>
                  <p class="text-sm">Water Bucket</p>
                  <p class="text-xs text-gray-600">Qty: 0</p>
                </div>
                <div class="bg-gray-100 p-4 rounded-lg text-center">
                  <div class="text-2xl mb-2">🚰</div>
                  <p class="text-sm">Water Filter</p>
                  <p class="text-xs text-gray-600">Qty: 0</p>
                </div>
                <div class="bg-gray-100 p-4 rounded-lg text-center">
                  <div class="text-2xl mb-2">💧</div>
                  <p class="text-sm">Clean Water</p>
                  <p class="text-xs text-gray-600">Qty: 0</p>
                </div>
              </div>
              <p class="text-sm text-gray-600 mt-4">Complete missions and visit the store to acquire items!</p>
            </div>
          </div>
        `;
        break;
        
      case 'Rewards':
        area.innerHTML = `
          <div style="background: rgba(255,255,255,0.95); border-radius: 1rem; padding: 2rem; z-index: 1; position: relative; max-width: 800px;">
            <h2 class="text-3xl font-bold mb-6 text-yellow-600">Rewards & Achievements</h2>
            <div class="text-left space-y-4">
              <p class="text-lg">Your Progress:</p>
              <div class="space-y-3 mt-4">
                <div class="bg-yellow-100 p-3 rounded-lg flex items-center">
                  <span class="text-2xl mr-3">🏆</span>
                  <div>
                    <h3 class="font-bold">Water Warrior Beginner</h3>
                    <p class="text-sm text-gray-600">Complete your first mission</p>
                  </div>
                </div>
                <div class="bg-gray-100 p-3 rounded-lg flex items-center opacity-50">
                  <span class="text-2xl mr-3">🎯</span>
                  <div>
                    <h3 class="font-bold">Mission Master</h3>
                    <p class="text-sm text-gray-600">Complete all missions</p>
                  </div>
                </div>
                <div class="bg-gray-100 p-3 rounded-lg flex items-center opacity-50">
                  <span class="text-2xl mr-3">💎</span>
                  <div>
                    <h3 class="font-bold">Water Expert</h3>
                    <p class="text-sm text-gray-600">Score 100% on all trivia</p>
                  </div>
                </div>
              </div>
              <div class="mt-6 p-4 bg-blue-50 rounded-lg">
                <p class="font-bold text-blue-800">Current Points: <span id="user-points">0</span></p>
              </div>
            </div>
          </div>
        `;
        break;
        
      case 'About Charity:Water':
        area.innerHTML = `
          <div style="background: rgba(255,255,255,0.95); border-radius: 1rem; padding: 2rem; z-index: 1; position: relative; max-width: 800px;">
            <h2 class="text-3xl font-bold mb-6 text-blue-600">About Charity: Water</h2>
            <div class="text-left space-y-4">
              <p class="text-lg">Our Mission:</p>
              <p>Charity: water is a nonprofit organization bringing clean and safe drinking water to people in developing countries.</p>
              
              <div class="mt-6 space-y-3">
                <div class="bg-blue-50 p-4 rounded-lg">
                  <h3 class="font-bold text-blue-800">100% Model</h3>
                  <p class="text-sm">100% of public donations go directly to funding water projects.</p>
                </div>
                <div class="bg-green-50 p-4 rounded-lg">
                  <h3 class="font-bold text-green-800">Transparency</h3>
                  <p class="text-sm">Every project is tracked and verified using GPS coordinates and photos.</p>
                </div>
                <div class="bg-yellow-50 p-4 rounded-lg">
                  <h3 class="font-bold text-yellow-800">Impact</h3>
                  <p class="text-sm">Over 18 million people have been served with clean water since 2006.</p>
                </div>
              </div>
              
              <div class="mt-6 text-center">
                <p class="text-sm text-gray-600">Learn more at <a href="https://www.charitywater.org" class="text-blue-600 underline" target="_blank">charitywater.org</a></p>
              </div>
            </div>
          </div>
        `;
        break;
        
      default:
        area.innerHTML = `
          <div style="background: rgba(255,255,255,0.95); border-radius: 1rem; padding: 2rem; z-index: 1; position: relative;">
            <h2 class="text-3xl font-bold mb-4">Page Not Found</h2>
            <p>This page is under construction.</p>
          </div>
        `;
    }
  };
});