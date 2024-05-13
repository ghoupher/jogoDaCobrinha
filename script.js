let canvas = document.getElementById("Snake"); //pega um paramentro de canvas dentro do obejto documento da cobrinha
let context = canvas.getContext("2d"); //contexto do canvas pega contexto do objeto 
let box = 32;
let Snake = [];
Snake[0] = {
    X: 8 * box,
    Y: 8 * box
}
let direction = "right";

function criarBG(){ //função criar jogo 
    context.fillStyle = "lightgreen";
    context.filRect = (0, 0, 16 * box, 16 * box);
}

function criarSnake() {
    for(i=0; i < Snake.length; i++) {
        context.fillStyle = "green";
        context.fillRect(Snake[i].x, Snake[i].y, box, box);
    }
}
function iniciarJogo() {
    criarBG();
    criarSnake();
}

