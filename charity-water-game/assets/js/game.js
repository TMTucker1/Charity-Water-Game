function startGame() {
    // Logic to initialize and start the game
    window.location.href = "game.html";
}

document.addEventListener("DOMContentLoaded", function() {
    const enterButton = document.getElementById("enter-button");
    enterButton.addEventListener("click", startGame);
});