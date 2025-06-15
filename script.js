// script.js

const funFacts = [
  "785 million people in the world don't have clean water. That's 1 in 10 people on the planet.",
  "Women and girls spend an estimated 200 million hours every day collecting water.",
  "Access to clean water can improve health, education, and economic outcomes for entire communities.",
  "Every $1 invested in clean water can yield $4–$12 in economic returns.",
  "Diseases from dirty water kill more people every year than all forms of violence, including war."
];

// Splash screen logic
document.getElementById('enter-button').onclick = function() {
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
      document.getElementById('game-screen').classList.remove('hidden');
    }
  }, 1000);
};

// Game state
const missions = [
  { name: "Dorm Rooms", type: "none" },
  { name: "Library", type: "logic" },
  { name: "Science Hall", type: "trivia" },
  { name: "Student Center", type: "whack" }
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

}
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