let canvas = document.getElementById("snake"); //pega um paramentro de canvas dentro do obejto documento da cobrinha
let context = canvas.getContext("2d"); //contexto do canvas pega contexto do objeto 
let box = 32;
let Snake = [];
Snake[0] = {
    x: 8 * box,
    y: 8 * box
}

let direction = "right";

function criarBG(){ //função criar jogo 

    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarSnake() {

    for(i=0; i < Snake.length; i++) {
        context.fillStyle = "green";
        context.fillRect(Snake[i].x, Snake[i].y, box, box);
    }
}


// document.addEventListener("keydown", updateDirection)

// function updateDirection(event) {
//     if(event.keyCode == 37 && direction != "right") direction = "left" 
//     if(event.keyCode == 38 && direction != "down") direction = "up" 
//     if(event.keyCode == 39 && direction != "left") direction = "right" 
//     if(event.keyCode == 40 && direction != "up") direction = "down"

//     console.log("--------------- Direction now ", direction)
// }

function iniciarJogo() {
    criarBG();
    criarSnake();
}

iniciarJogo()


