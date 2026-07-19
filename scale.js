let gameScale = 1;

function scaleGame(){
    const gameWidth = 1920;
    const gameHeight = 1080;

    gameScale = Math.min(
        windowWidth / gameWidth, 
        windowHeight / gameHeight
    );

    const container = document.getElementById("game-container");
    container.style.transform = `translate(-50%, -50%) scale(${gameScale})`;
}

function gameMouseX(){
    return (mouseX - gameOffsetX) / gameScale;
}

function gameMouseY(){
    return (mouseY - gameOffsetY) / gameScale;
}