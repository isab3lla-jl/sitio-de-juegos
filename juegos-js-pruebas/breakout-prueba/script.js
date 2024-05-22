const grid = document.querySelector(".grid");
const scoreDis = document.querySelector("#score")
const x = document.querySelector("#x");
const startButton = document.querySelector("#start");

const blockW = 100;
const blockH = 20;
const boardW = 560;
const boardH = 300;
const ballD = 20;

let timerId, score = 0;
const playerStart = [230,10];
let currentPosP = playerStart;
const ballStart = [270,40];
let currentPosB = ballStart;
let xDirection = 3, yDirection = 3;

//create Block
class Block {
    constructor(xAxis, yAxis) {
        this.bottomLeft = [xAxis, yAxis];
        this.bottomRight = [xAxis + blockW, yAxis];
        this.topLeft = [xAxis, yAxis + blockH];
        this.topRight = [xAxis + blockW, yAxis + blockH];
    }
};
//all my blocks
const blocks = [
    new Block(10,270),
    new Block(120,270),
    new Block(230,270),
    new Block(340,270),
    new Block(450,270),
    new Block(10,240),
    new Block(120,240),
    new Block(230,240),
    new Block(340,240),
    new Block(450,240),
    new Block(10,210),
    new Block(120,210),
    new Block(230,210),
    new Block(340,210),
    new Block(450,210),
];
//draw all my blocks
function addBlocks() {
    for (let i = 0; i < blocks.length; i++) {
        const block = document.createElement("div");
        block.classList.add("block");
        block.style.left = blocks[i].bottomLeft[0] + "px";
        block.style.bottom = blocks[i].bottomLeft[1] + "px";
        grid.appendChild(block);
    }
};

addBlocks()

//add player
const player = document.createElement("div");
player.classList.add("player");
drawPlayer();
grid.appendChild(player);

//draw player
function drawPlayer() {
    player.style.left = currentPosP[0] + "px";
    player.style.bottom = currentPosP[1] + "px";
};

//draw ball
function drawBall() {
    ball.style.left = currentPosB[0] + "px"
    ball.style.bottom = currentPosB[1] + "px"
};

//move player
function movePlayer(e) {
    switch(e.key) {
        case "ArrowLeft":
            if (currentPosP[0] > 0) {
                currentPosP[0] -=10;
                drawPlayer();
            }
            break;
        case "ArrowRight":
            if (currentPosP[0] < boardW - blockW) {
                currentPosP[0] +=10;
                drawPlayer();
            }
            break;  
    }
};

document.addEventListener("keydown", movePlayer);

//add ball
const ball = document.createElement("div");
ball.classList.add("ball");
drawBall();
grid.appendChild(ball);

//move ball
function moveBall() {
    currentPosB[0] += xDirection;
    currentPosB[1] += yDirection;
    drawBall();
    ballSpeed();
    checkForWallCollisions();
};

startButton.addEventListener("click", () => {
    timerId = setInterval(moveBall, 30);
})

//check for collisions
function checkForWallCollisions() {
    //block collisions
    for (let i = 0; i < blocks.length; i++) {
        if (
            currentPosB[0] > blocks[i].bottomLeft[0] && currentPosB[0] < blocks[i].bottomRight[0] &&
            (currentPosB[1] + ballD) > blocks[i].bottomLeft[1] && currentPosB[1] < blocks[i].topLeft[1]
        ) {
            const allBlocks = Array.from(document.querySelectorAll(".block"));
            allBlocks[i].classList.remove("block");
            blocks.splice(i, 1);
            changeDirection();
            score ++;
            scoreDis.innerHTML = score;
        }
    }

    //wall collisions
    if (
        currentPosB[0] >= (boardW - ballD) || 
        currentPosB[1] >= (boardH - ballD) ||
        currentPosB[0] <=0 
        ) {
            changeDirection();
    }

    //player collisions
    if (
        currentPosB[0] > currentPosP[0] && currentPosB[0] < currentPosP[0] + blockW && 
        currentPosB[1] > currentPosP[1] && currentPosB [1] < currentPosP[1] + blockH
        ) {
        changeDirection();
    }

    //game over
    if ( currentPosB[1] <= 0) {
        clearInterval(timerId);
        x.innerHTML = "";
        scoreDis.innerHTML = "Perdiste lol";
        document.removeEventListener("keydown", movePlayer);
    }

    //win
    if (blocks.length === 0) {
        confetti();
        clearInterval(timerId);
        x.innerHTML = "";
        scoreDis.innerHTML = "Ganaste!";
        document.removeEventListener("keydown", movePlayer);
    }
};

function ballSpeed() {
    if (blocks.length < 10) {
        clearInterval(timerId);
        timerId = setInterval(moveBall, 20);
    }
    if (blocks.length < 5) {
        clearInterval(timerId);
        timerId = setInterval(moveBall, 15);
    }
}

function changeDirection() {
    if (xDirection === 3 && yDirection === 3) {
        yDirection = -3;
        return;
    }
    if (xDirection === 3 && yDirection === -3) {
        xDirection = -3;
        return;
    }
    if (xDirection === -3 && yDirection === -3) {
        yDirection = 3;
        return;
    }
    if (xDirection == -3 && yDirection === 3) {
        xDirection = 3;
        return;
    }
}

//funcion de confetti
function confetti() {

    var box = document.getElementById("box");
    var colors = ["red", "green", "blue", "yellow", "purple", "orange", "pink"];

    for (var i = 0; i < 1000; i++) {
        var div = document.createElement("div");
        div.classList.add("confetti");
        box.appendChild(div);
    }

    var confetti = document.querySelectorAll(".confetti");

    for (var i = 0; i < confetti.length; i++) {

        var size = Math.random() * 0.01 * [i];

        confetti[i].style.width = 5 + size + "px";
        confetti[i].style.height = 16 + size + "px";
        confetti[i].style.left = Math.random() * innerWidth + "px";

        var background = colors[Math.floor(Math.random() * colors.length)];
        confetti[i].style.backgroundColor = background;

        box.children[i].style.transform = "rotate(" + size*[i] + "deg)";

    }
}