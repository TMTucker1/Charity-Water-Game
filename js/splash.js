document.addEventListener('DOMContentLoaded', function() {
    const enterButton = document.getElementById('enter-button');
    const splashScreen = document.getElementById('splash-screen');
    const gameScreen = document.getElementById('game-screen');

    // When the enter button is clicked, transition to the game
    enterButton.addEventListener('click', function() {
        // Add fade-out animation class
        splashScreen.classList.add('fade-out');
        
        // After animation completes, hide splash and show game
        setTimeout(function() {
            splashScreen.classList.add('hidden');
            gameScreen.classList.remove('hidden');
            // Initialize the game here if needed
            if (typeof initGame === 'function') {
                initGame();
            }
        }, 500); // Matches the CSS transition time
    });
});