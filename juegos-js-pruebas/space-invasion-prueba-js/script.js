const grid = document.querySelector(".grid");
const scoreDis = document.querySelector(".score");
const startButton = document.getElementById("start-button");
let currentShooterIndex = 202;
let width = 15;
let invadersId;
let direction = 1;
let goingRight = true;
let aliensRemoved = [];
let score = 0;

for (let i = 0; i < 225; i++) {
    const square = document.createElement("div");
    grid.appendChild(square);
}

const squares = Array.from(document.querySelectorAll(".grid div"));

const alienInvaders = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
    30, 31, 32, 33, 34, 35, 36, 37, 38, 39
];

function drawInvaders() {
    for (let i = 0; i < alienInvaders.length; i++) {
        if (!aliensRemoved.includes(i)) {
            squares[alienInvaders[i]].classList.add("invader");
        }
    }
}

function removeInvaders() {
    for (let i = 0; i < alienInvaders.length; i++) {
        squares[alienInvaders[i]].classList.remove("invader");
    }
}

function moveShooter(e) {
    squares[currentShooterIndex].classList.remove("shooter");
    switch (e.key) {
        case "ArrowLeft":
            if (currentShooterIndex % width !== 0) {
                currentShooterIndex -= 1;
            }
            break;
        case "ArrowRight":
            if (currentShooterIndex % width < width - 1) {
                currentShooterIndex += 1;
            }
            break;
    }
    squares[currentShooterIndex].classList.add("shooter");
}

function moveInvaders() {
    const leftEdge = alienInvaders[0] % width === 0;
    const rightEdge = alienInvaders[alienInvaders.length - 1] % width === width - 1;

    removeInvaders();

    if (rightEdge && goingRight) {
        for (let i = 0; i < alienInvaders.length; i++) {
            alienInvaders[i] += width;
        }
        direction = -1;
        goingRight = false;
    } else if (leftEdge && !goingRight) {
        for (let i = 0; i < alienInvaders.length; i++) {
            alienInvaders[i] += width;
        }
        direction = 1;
        goingRight = true;
    }

    for (let i = 0; i < alienInvaders.length; i++) {
        alienInvaders[i] += direction;
    }

    drawInvaders();

    if (squares[currentShooterIndex].classList.contains("invader", "shooter")) {
        clearInterval(invadersId);
        console.log("game over");
        openPopup("lose", "open-popup");
        document.removeEventListener("keydown", moveShooter);
        document.removeEventListener("keydown", shoot);
    }

    for (let i = 0; i < alienInvaders.length; i++) {
        if (alienInvaders[i] >= squares.length - width) {
            clearInterval(invadersId);
            console.log("game over");
            openPopup("lose", "open-popup");
            document.removeEventListener("keydown", moveShooter);
            document.removeEventListener("keydown", shoot);
        }
    }

    if (aliensRemoved.length === alienInvaders.length) {
        document.removeEventListener("keydown", moveShooter);
        document.removeEventListener("keydown", shoot);
        clearInterval(invadersId);
        console.log("win");
        confetti();
        setTimeout(() => { document.querySelectorAll('.confetti').forEach(e => e.remove()); }, 1500);
        openPopup("win", "open-popup");
    }
}

function openPopup(oldId, newId) {
    popupId = document.getElementById(oldId);
    popupId.id = newId;
    popupIdBtn = document.getElementById(oldId + "-btn");
    popupIdBtn.id = "close-popup"
    popupId.focus(); // Set focus to the popup element
}

function shoot(e) {
    let laserId;
    let currentLaserIndex = currentShooterIndex;

    function moveLaser() {
        if (currentLaserIndex < width) {
            clearInterval(laserId);
            squares[currentLaserIndex].classList.remove("laser");
            return;
        }

        squares[currentLaserIndex].classList.remove("laser");
        currentLaserIndex -= width;
        if (currentLaserIndex >= 0) {
            squares[currentLaserIndex].classList.add("laser");
        }

        if (squares[currentLaserIndex] && squares[currentLaserIndex].classList.contains("invader")) {
            squares[currentLaserIndex].classList.remove("laser");
            squares[currentLaserIndex].classList.remove("invader");
            squares[currentLaserIndex].classList.add("boom");

            setTimeout(() => squares[currentLaserIndex].classList.remove("boom"), 300);
            clearInterval(laserId);

            const alienRemoved = alienInvaders.indexOf(currentLaserIndex);
            score++;
            scoreDis.innerHTML = score;
            aliensRemoved.push(alienRemoved);
        }
    }

    switch (e.key) {
        case "ArrowUp":
            laserId = setInterval(moveLaser, 100);
            break;
    }
}

function startGame() {
    score = 0;
    scoreDis.innerHTML = score;
    aliensRemoved = [];
    clearInterval(invadersId);
    drawInvaders();
    squares[currentShooterIndex].classList.add("shooter");
    invadersId = setInterval(moveInvaders, 250);
    document.addEventListener("keydown", moveShooter);
    document.addEventListener("keydown", shoot);
}

startButton.addEventListener("click", startGame);

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