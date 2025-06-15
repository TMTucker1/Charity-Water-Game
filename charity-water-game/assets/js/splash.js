document.addEventListener('DOMContentLoaded', function() {
    const splashScreen = document.createElement('div');
    splashScreen.id = 'splash-screen';
    splashScreen.style.position = 'fixed';
    splashScreen.style.top = '0';
    splashScreen.style.left = '0';
    splashScreen.style.width = '100%';
    splashScreen.style.height = '100%';
    splashScreen.style.backgroundColor = 'white';
    splashScreen.style.display = 'flex';
    splashScreen.style.flexDirection = 'column';
    splashScreen.style.alignItems = 'center';
    splashScreen.style.justifyContent = 'center';
    splashScreen.style.zIndex = '1000';

    const logo = document.createElement('img');
    logo.src = 'assets/images/logo.svg';
    logo.alt = 'Charity:Water Logo';
    logo.style.width = '300px'; // Adjust size as needed
    logo.style.marginBottom = '20px';

    const enterButton = document.createElement('button');
    enterButton.innerText = 'Enter';
    enterButton.style.padding = '10px 20px';
    enterButton.style.fontSize = '16px';
    enterButton.style.cursor = 'pointer';

    enterButton.addEventListener('click', function() {
        splashScreen.style.display = 'none';
        window.location.href = 'game.html'; // Navigate to the game
    });

    splashScreen.appendChild(logo);
    splashScreen.appendChild(enterButton);
    document.body.appendChild(splashScreen);
});