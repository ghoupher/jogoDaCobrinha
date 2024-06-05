let canvas = document.getElementById("snake"); //pega um paramentro de canvas dentro do obejto documento da cobrinha
let context = canvas.getContext("2d"); //contexto do canvas pega contexto do objeto 
let box = 32;
let Snake = [];
Snake[0] = {
    x: 8 * box,
    y: 8 * box
}

let direction = "right";
let gameInterval 
let isGamePaused = false

function criarBG(){ //função criar jogo 

    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarSnake() {
    for(i=0; i < Snake.length; i++) {
        context.fillStyle = "green";
        context.fillRect(Snake[i].x, Snake[i].y, box, box);
    }
    console.log("-------- SNAKE", Snake)
}

function updateSnakePosition() {
    let snakeX = Snake[0].x
    let snakeY = Snake[0].y
    console.log("------------- X", Snake.x)

    if (direction == "right") snakeX += box;
    if (direction == "left") snakeX -= box;
    if (direction == "up") snakeY -= box;
    if (direction == "down") snakeY += box;

    Snake.pop();

    let newHead = {
        x: snakeX,
        y: snakeY,
    }

    Snake.unshift(newHead);
}

document.addEventListener("keydown", pauseGame)
document.addEventListener("keydown", updateDirection)

function updateDirection(event) {
    if(event.keyCode == 37 && direction != "right") direction = "left" 
    if(event.keyCode == 38 && direction != "down") direction = "up" 
    if(event.keyCode == 39 && direction != "left") direction = "right" 
    if(event.keyCode == 40 && direction != "up") direction = "down"

    console.log("--------------- Direction now ", event)
}

function pauseGame(event) {
    if(event.keyCode == 27) {
        console.log("test")
        isGamePaused 
            ? gameInterval = setInterval(iniciarJogo, 150) 
            : clearInterval(gameInterval)
        isGamePaused = !isGamePaused;
    }
}

function iniciarJogo() {
    criarBG();
    criarSnake();
    updateSnakePosition();
    addObstacle()
}

function getRandomInt(max) {
    return Math.floor(Math.random() * box * 8);
  }

function addObstacle() {
    context.fillRect(getRandomInt(), getRandomInt(), 1 * box, 1 * box);
}

// obstacleInterval = setInterval(addObstacle, 5000)

gameInterval = setInterval(iniciarJogo, 1000)

console.log("---------- game interval ". gameInterval)


