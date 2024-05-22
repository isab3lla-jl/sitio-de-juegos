const computerChoiceDis = document.getElementById('comp_c');
const userChoiceDis = document.getElementById('user_c');
const resultDis = document.getElementById('result');
const possibleChoices = document.querySelectorAll('.choice');
let userChoice, computerChoice, result;

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', () => {
    userChoice = event.target.id;
    userChoiceDis.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
}))

function generateComputerChoice() {
    const randomNum = Math.floor(Math.random() * possibleChoices.length) + 1;
    
    switch (randomNum) {
        case 1:
            computerChoice = "Piedra";
            break;
        case 2:
            computerChoice = "Papel";
            break;
        case 3:
            computerChoice = "Tijeras";
            break;
        case 4:
            computerChoice = "Agua";
            break;
        case 5:
            computerChoice = "Aire";
            break;
        case 6:
            computerChoice = "Esponja";
            break;
        case 7:
            computerChoice = "Fuego";
    }

    computerChoiceDis.innerHTML = computerChoice;
}

function getResult(){
    const outcomes = {
        "Piedra": {
            "Piedra": "Empate!",
            "Fuego": "Perdiste!", "Tijeras": "Perdiste!", "Esponja": "Perdiste!",
            "Papel": "Ganaste!", "Aire": "Ganaste!", "Agua": "Ganaste!"},
        "Papel": {
            "Papel": "Empate!",
            "Piedra": "Perdiste!", "Agua": "Perdiste!", "Aire": "Perdiste!",
            "Fuego": "Ganaste!", "Tijeras": "Ganaste!", "Esponja": "Ganaste!"},
        "Tijeras": {
            "Tijeras": "Empate!",
            "Esponja": "Perdiste!", "Papel": "Perdiste!", "Aire": "Perdiste!",
            "Agua": "Ganaste!", "Piedra": "Ganaste!", "Fuego": "Ganaste!"},
        "Agua": {
            "Agua": "Empate!",
            "Piedra": "Perdiste!", "Fuego": "Perdiste!", "Tijeras": "Perdiste!",
            "Esponja": "Ganaste!", "Papel": "Ganaste!", "Aire": "Ganaste!"},
        "Aire": {
            "Aire": "Empate!",
            "Agua": "Perdiste!", "Piedra": "Perdiste!", "Fuego": "Perdiste!",
            "Tijeras": "Ganaste!", "Esponja": "Ganaste!", "Papel": "Ganaste!"},
        "Esponja": {
            "Esponja": "Empate!",
            "Papel": "Perdiste!", "Aire": "Perdiste!", "Agua": "Perdiste!",
            "Piedra": "Ganaste!", "Fuego": "Ganaste!", "Tijeras": "Ganaste!"},
        "Fuego": {
            "Fuego": "Empate!",
            "Tijeras": "Perdiste!", "Esponja": "Perdiste!", "Papel": "Perdiste!",
            "Aire": "Ganaste!", "Agua": "Ganaste!", "Piedra": "Ganaste!"}
    };
    result = outcomes[computerChoice][userChoice];
    if (result === "Ganaste!") {
        confetti();
        setTimeout(() => { document.querySelectorAll('.confetti').forEach(e => e.remove()); }, 2000);
    } else {
        document.querySelectorAll('.confetti').forEach(e => e.remove());
    }
    resultDis.innerHTML = result;
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
/* 108 lineas
function getResult() {
    if (computerChoice === userChoice) {
        result = 'Empate!';
    }
    if (computerChoice === 'Piedra' && userChoice === 'Papel') {
        result = 'Ganaste!';
    }
    if (computerChoice === 'Piedra' && userChoice === 'Tijeras') {
        result = 'Perdiste!';
    }
    if (computerChoice === 'Piedra' && userChoice === 'Lagartija') {
        result = 'Perdiste!';
    }
    if (computerChoice === 'Piedra' && userChoice === 'Spock') {
        result = 'Ganaste!';
    }
    if (computerChoice === 'Papel' && userChoice === 'Tijeras') {
        result = 'Ganaste!';
    }
    if (computerChoice === 'Papel' && userChoice === 'Piedra') {
        result = 'Perdiste!';
    }
    if (computerChoice === 'Papel' && userChoice === 'Lagartija') {
        result = 'Ganaste!';
    }
    if (computerChoice === 'Papel' && userChoice === 'Spock') {
        result = 'Perdiste!';
    }
    if (computerChoice === 'Tijeras' && userChoice === 'Papel') {
        result = 'Perdiste!';
    };
    if (computerChoice === 'Tijeras' && userChoice === 'Piedra') {
        result = 'Ganaste!';
    }
    if (computerChoice === 'Tijeras' && userChoice === 'Spock') {
        result = 'Ganaste!';
    }
    if (computerChoice === 'Tijeras' && userChoice === 'Lagartija') {
        result = 'Perdiste!';
    }
    if (computerChoice === 'Spock' && userChoice === 'Lagartija') {
        result = 'Ganaste!';
    }
    if (computerChoice === 'Spock' && userChoice === 'Tijeras') {
        result = 'Perdiste!';
    }
    if (computerChoice === 'Spock' && userChoice === 'Papel') {
        result = 'Ganaste!';
    }
    if (computerChoice === 'Spock' && userChoice === 'Piedra') {
        result = 'Perdiste!';
    }
    if (computerChoice === 'Lagartija' && userChoice === 'Spock') {
        result = 'Perdiste!';
    }
    if (computerChoice === 'Lagartija' && userChoice === 'Tijeras') {
        result = 'Ganaste!';
    }
    if (computerChoice === 'Lagartija' && userChoice === 'Piedra') {
        result = 'Ganaste!';
    }
    if (computerChoice === 'Lagartija' && userChoice === 'Papel') {
        result = 'Perdiste!';
    }
    resultDis.innerHTML = result;
} */