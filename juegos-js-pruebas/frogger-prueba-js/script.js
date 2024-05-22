const timeDis = document.querySelector("#time");
const startPauseButton = document.querySelector("#startPause");
const squares = document.querySelectorAll(".grid div");
const logsLeft = document.querySelectorAll(".logLeft");
const logsRight = document.querySelectorAll(".logRight");
const carsLeft = document.querySelectorAll(".carLeft");
const carsRight = document.querySelectorAll(".carRight");
let currentIndex = 76;
let width = 9;
let timerId = [];
let timeId;
let currentTime = 15;
let isGameRunning = false; // Track whether the game is currently running

startPauseButton.addEventListener("click", function() {
    if (isGameRunning) {
        // Pause the game
        clearInterval(timerId[0]);
        clearInterval(timerId[1]);
        clearInterval(timeId);
        document.removeEventListener("keyup", moveFrog);
        isGameRunning = false;
    } else {
        // Start the game
        timeId = setInterval(time, 1000);
        timerId[0] = setInterval(autoMoveLogs, 250);
        timerId[1] = setInterval(autoMoveCars, 300);
        document.addEventListener('keyup', moveFrog);
        isGameRunning = true;
    }
});

function moveFrog(e) {

    squares[currentIndex].classList.remove("frog");

    switch(e.key) {
        case "ArrowLeft":
            if (currentIndex % width != 0) {
            currentIndex -= 1;
            }
            break;
        case "ArrowRight":
            if (currentIndex % width < width - 1) {
            currentIndex += 1;
            }
            break;
        case "ArrowUp":
            if (currentIndex - width >= 0) {
            currentIndex -= width;
            }
            break;
        case "ArrowDown":
            if (currentIndex + width < width * width) {
            currentIndex += width;
            }
    }

    squares[currentIndex].classList.add("frog");

}

function checkOutcome() {
    win();
    lose();
}

function time() {
    currentTime--
    timeDis.textContent = currentTime
}

function autoMoveLogs() {
    logsLeft.forEach(logLeft => moveLogLeft(logLeft));
    logsRight.forEach(logRight => moveLogRight(logRight));
    checkOutcome();
}
function autoMoveCars() {
    carsLeft.forEach(carLeft => moveCarLeft(carLeft));
    carsRight.forEach(carRight => moveCarRight(carRight));
    checkOutcome();
}

function moveLogLeft(logLeft) {
    switch(true) {
        case logLeft.classList.contains("l1"):
            logLeft.classList.remove("l1");
            logLeft.classList.add("l2");
            break;
        case logLeft.classList.contains("l2"):
            logLeft.classList.remove("l2");
            logLeft.classList.add("l3");
            break;
        case logLeft.classList.contains("l3"):
            logLeft.classList.remove("l3");
            logLeft.classList.add("l4");
            break;
        case logLeft.classList.contains("l4"):
            logLeft.classList.remove("l4");
            logLeft.classList.add("l5");
            break;
        case logLeft.classList.contains("l5"):
            logLeft.classList.remove("l5");
            logLeft.classList.add("l1");
            break;
    }
}
function moveLogRight(logRight) {
    switch(true) {
        case logRight.classList.contains("l1"):
            logRight.classList.remove("l1");
            logRight.classList.add("l5");
            break;
        case logRight.classList.contains("l2"):
            logRight.classList.remove("l2");
            logRight.classList.add("l1");
            break;
        case logRight.classList.contains("l3"):
            logRight.classList.remove("l3");
            logRight.classList.add("l2");
            break;
        case logRight.classList.contains("l4"):
            logRight.classList.remove("l4");
            logRight.classList.add("l3");
            break;
        case logRight.classList.contains("l5"):
            logRight.classList.remove("l5");
            logRight.classList.add("l4");
            break;
    }
}

function moveCarLeft(carLeft) {
    switch(true) {
        case carLeft.classList.contains("c1"):
            carLeft.classList.remove("c1");
            carLeft.classList.add("c2");
            break;
        case carLeft.classList.contains("c2"):
            carLeft.classList.remove("c2");
            carLeft.classList.add("c3");
            break;
        case carLeft.classList.contains("c3"):
            carLeft.classList.remove("c3");
            carLeft.classList.add("c4");
            break;
        case carLeft.classList.contains("c4"):
            carLeft.classList.remove("c4");
            carLeft.classList.add("c5");
            break;
        case carLeft.classList.contains("c5"):
            carLeft.classList.remove("c5");
            carLeft.classList.add("c6");
            break;
        case carLeft.classList.contains("c6"):
            carLeft.classList.remove("c6");
            carLeft.classList.add("c1");
            break;
    }
}
function moveCarRight(carRight) {
    switch(true) {
        case carRight.classList.contains("c1"):
            carRight.classList.remove("c1");
            carRight.classList.add("c6");
            break;
        case carRight.classList.contains("c2"):
            carRight.classList.remove("c2");
            carRight.classList.add("c1");
            break;
        case carRight.classList.contains("c3"):
            carRight.classList.remove("c3");
            carRight.classList.add("c2");
            break;
        case carRight.classList.contains("c4"):
            carRight.classList.remove("c4");
            carRight.classList.add("c3");
            break;
        case carRight.classList.contains("c5"):
            carRight.classList.remove("c5");
            carRight.classList.add("c4");
            break;
        case carRight.classList.contains("c6"):
            carRight.classList.remove("c6");
            carRight.classList.add("c5");
            break;
    }
}

function openPopup(oldId, newId) {
    popupId = document.getElementById(oldId);
    popupId.id = newId;
    popupIdBtn = document.getElementById(oldId + "-btn");
    popupIdBtn.id = "close-popup"
    popupId.focus(); // Set focus to the popup element
}

function lose() {
    if(
        squares[currentIndex].classList.contains("c2") ||
        squares[currentIndex].classList.contains("c4") ||
        squares[currentIndex].classList.contains("c5")
    ) {
        clearInterval(timerId[0]);
        clearInterval(timerId[1]);
        clearInterval(timeId);
        squares[currentIndex].classList.remove("frog");
        document.removeEventListener("keyup", moveFrog);
        openPopup("carro", "open-popup");
    } else if(
        squares[currentIndex].classList.contains("l4") ||
        squares[currentIndex].classList.contains("l5")
    ) {
        clearInterval(timerId[0]);
        clearInterval(timerId[1]);
        clearInterval(timeId);
        squares[currentIndex].classList.remove("frog");
        document.removeEventListener("keyup", moveFrog);
        openPopup("agua", "open-popup");
    } else if(currentTime === 0) {
        clearInterval(timerId[0]);
        clearInterval(timerId[1]);
        clearInterval(timeId);
        squares[currentIndex].classList.remove("frog");
        document.removeEventListener("keyup", moveFrog);
        openPopup("tiempo", "open-popup");
    }
}

function win() {
    if(squares[currentIndex].classList.contains("endingBlock")) {
        confetti();
        clearInterval(timerId[0]);
        clearInterval(timerId[1]);
        clearInterval(timeId);
        document.removeEventListener("keyup", moveFrog);
        openPopup("win", "open-popup");
    }
}

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