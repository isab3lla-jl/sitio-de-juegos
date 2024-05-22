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
            computerChoice = "Pistola";
            break;
        case 3:
            computerChoice = "Relampago";
            break;
        case 4:
            computerChoice = "Diablo";
            break;
        case 5:
            computerChoice = "Dragon";
            break;
        case 6:
            computerChoice = "Agua";
            break;
        case 7:
            computerChoice = "Aire";
            break;
        case 8:
            computerChoice = "Papel";
            break;
        case 9:
            computerChoice = "Esponja";
            break;
        case 10:
            computerChoice = "Lobo";
            break;
        case 11:
            computerChoice = "Arbol";
            break;
        case 12:
            computerChoice = "Humano";
            break;
        case 13:
            computerChoice = "Serpiente";
            break;
        case 14:
            computerChoice = "Tijeras";
            break;
        case 15:
            computerChoice = "Fuego";
    }

    computerChoiceDis.innerHTML = computerChoice;
}

function getResult() {
    const outcomes = {
        "Piedra": {
            "Piedra": "Empate!",
            "Fuego": "Perdiste!", "Tijeras": "Perdiste!", "Serpiente": "Perdiste!", "Humano": "Perdiste!", "Arbol": "Perdiste!", "Lobo": "Perdiste!", "Esponja": "Perdiste!",
            "Papel": "Ganaste!", "Aire": "Ganaste!", "Agua": "Ganaste!", "Dragon": "Ganaste!", "Diablo": "Ganaste!", "Relampago": "Ganaste!", "Pistola": "Ganaste!"},
        "Fuego": {
            "Fuego": "Empate!",
            "Tijeras": "Perdiste!", "Serpiente": "Perdiste!", "Humano": "Perdiste!", "Arbol": "Perdiste!", "Lobo": "Perdiste!", "Esponja": "Perdiste!", "Papel": "Perdiste!",
            "Aire": "Ganaste!", "Agua": "Ganaste!", "Dragon": "Ganaste!", "Diablo": "Ganaste!", "Relampago": "Ganaste!", "Pistola": "Ganaste!", "Piedra": "Ganaste!"},
        "Tijeras": {
            "Tijeras": "Empate!",
            "Serpiente": "Perdiste!", "Humano": "Perdiste!", "Arbol": "Perdiste!", "Lobo": "Perdiste!", "Esponja": "Perdiste!", "Papel": "Perdiste!", "Aire": "Perdiste!",
            "Agua": "Ganaste!", "Dragon": "Ganaste!", "Diablo": "Ganaste!", "Relampago": "Ganaste!", "Pistola": "Ganaste!", "Piedra": "Ganaste!", "Fuego": "Ganaste!"},
        "Serpiente": {
            "Serpiente": "Empate!",
            "Humano": "Perdiste!", "Arbol": "Perdiste!", "Lobo": "Perdiste!", "Esponja": "Perdiste!", "Papel": "Perdiste!", "Aire": "Perdiste!", "Agua": "Perdiste!",
            "Dragon": "Ganaste!", "Diablo": "Ganaste!", "Relampago": "Ganaste!", "Pistola": "Ganaste!", "Piedra": "Ganaste!", "Fuego": "Ganaste!", "Tijeras" : "Ganaste!"},
        "Humano": {
            "Humano": "Empate!",
            "Arbol": "Perdiste!", "Lobo": "Perdiste!", "Esponja": "Perdiste!", "Papel": "Perdiste!", "Aire": "Perdiste!", "Agua": "Perdiste!", "Dragon": "Perdiste!",
            "Diablo": "Ganaste!", "Relampago": "Ganaste!", "Pistola": "Ganaste!", "Piedra": "Ganaste!", "Fuego": "Ganaste!", "Tijeras" : "Ganaste!", "Serpiente": "Ganaste!"},
        "Arbol": {
            "Arbol": "Empate!",
            "Lobo": "Perdiste!", "Esponja": "Perdiste!", "Papel": "Perdiste!", "Aire": "Perdiste!", "Agua": "Perdiste!", "Dragon": "Perdiste!", "Diablo": "Perdiste!",
            "Relampago": "Ganaste!", "Pistola": "Ganaste!", "Piedra": "Ganaste!", "Fuego": "Ganaste!", "Tijeras" : "Ganaste!", "Serpiente": "Ganaste!", "Humano": "Ganaste!"},
        "Lobo": {
            "Lobo": "Empate!",
            "Esponja": "Perdiste!", "Papel": "Perdiste!", "Aire": "Perdiste!", "Agua": "Perdiste!", "Dragon": "Perdiste!", "Diablo": "Perdiste!", "Relampago": "Perdiste!",
            "Pistola": "Ganaste!", "Piedra": "Ganaste!", "Fuego": "Ganaste!", "Tijeras" : "Ganaste!", "Serpiente": "Ganaste!", "Humano": "Ganaste!", "Arbol": "Ganaste!"},
        "Esponja": {
            "Esponja": "Empate!",
            "Papel": "Perdiste!", "Aire": "Perdiste!", "Agua": "Perdiste!", "Dragon": "Perdiste!", "Diablo": "Perdiste!", "Relampago": "Perdiste!", "Pistola": "Perdiste!",
            "Piedra": "Ganaste!", "Fuego": "Ganaste!", "Tijeras" : "Ganaste!", "Serpiente": "Ganaste!", "Humano": "Ganaste!", "Arbol": "Ganaste!", "Lobo": "Ganaste!"},
        "Papel": {
            "Papel": "Empate!",
            "Aire": "Perdiste!", "Agua": "Perdiste!", "Dragon": "Perdiste!", "Diablo": "Perdiste!", "Relampago": "Perdiste!", "Pistola": "Perdiste!", "Piedra": "Perdiste!",
            "Fuego": "Ganaste!", "Tijeras" : "Ganaste!", "Serpiente": "Ganaste!", "Humano": "Ganaste!", "Arbol": "Ganaste!", "Lobo": "Ganaste!", "Esponja": "Ganaste!"},
        "Aire": {
            "Aire": "Empate!",
            "Agua": "Perdiste!", "Dragon": "Perdiste!", "Diablo": "Perdiste!", "Relampago": "Perdiste!", "Pistola": "Perdiste!", "Piedra": "Perdiste!", "Fuego": "Perdiste!",
            "Tijeras" : "Ganaste!", "Serpiente": "Ganaste!", "Humano": "Ganaste!", "Arbol": "Ganaste!", "Lobo": "Ganaste!", "Esponja": "Ganaste!", "Papel": "Ganaste!"},
        "Agua": {
            "Agua": "Empate!",
            "Dragon": "Perdiste!", "Diablo": "Perdiste!", "Relampago": "Perdiste!", "Pistola": "Perdiste!", "Piedra": "Perdiste!", "Fuego": "Perdiste!", "Tijeras": "Perdiste!",
            "Serpiente": "Ganaste!", "Humano": "Ganaste!", "Arbol": "Ganaste!", "Lobo": "Ganaste!", "Esponja": "Ganaste!", "Papel": "Ganaste!", "Aire": "Ganaste!"},
        "Dragon": {
            "Dragon": "Empate!",
            "Diablo": "Perdiste!", "Relampago": "Perdiste!", "Pistola": "Perdiste!", "Piedra": "Perdiste!", "Fuego": "Perdiste!", "Tijeras": "Perdiste!", "Serpiente": "Perdiste!",
            "Humano": "Ganaste!", "Arbol": "Ganaste!", "Lobo": "Ganaste!", "Esponja": "Ganaste!", "Papel": "Ganaste!", "Aire": "Ganaste!", "Agua": "Ganaste!"},
        "Diablo": {
            "Diablo": "Empate!",
            "Relampago": "Perdiste!", "Pistola": "Perdiste!", "Piedra": "Perdiste!", "Fuego": "Perdiste!", "Tijeras": "Perdiste!", "Serpiente": "Perdiste!", "Humano": "Perdiste!",
            "Arbol": "Ganaste!", "Lobo": "Ganaste!", "Esponja": "Ganaste!", "Papel": "Ganaste!", "Aire": "Ganaste!", "Agua": "Ganaste!", "Dragon": "Ganaste!"},
        "Relampago": {
            "Relampago": "Empate!",
            "Pistola": "Perdiste!", "Piedra": "Perdiste!", "Fuego": "Perdiste!", "Tijeras": "Perdiste!", "Serpiente": "Perdiste!", "Humano": "Perdiste!", "Arbol": "Perdiste!",
            "Lobo": "Ganaste!", "Esponja": "Ganaste!", "Papel": "Ganaste!", "Aire": "Ganaste!", "Agua": "Ganaste!", "Dragon": "Ganaste!", "Diablo": "Ganaste!"},
        "Pistola": {
            "Pistola": "Empate!",
            "Piedra": "Perdiste!", "Fuego": "Perdiste!", "Tijeras": "Perdiste!", "Serpiente": "Perdiste!", "Humano": "Perdiste!", "Arbol": "Perdiste!", "Lobo": "Perdiste!",
            "Esponja": "Ganaste!", "Papel": "Ganaste!", "Aire": "Ganaste!", "Agua": "Ganaste!", "Dragon": "Ganaste!", "Diablo": "Ganaste!", "Relampago": "Ganaste!"}
    };
    result = outcomes[computerChoice][userChoice]
    if (result === "Ganaste!") {
        confetti();
        setTimeout(() => { document.querySelectorAll('.confetti').forEach(e => e.remove()); }, 2000);
    } else {
        document.querySelectorAll('.confetti').forEach(e => e.remove());
    }
    resultDis.innerHTML = result
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

/* 717 lineas
function getResult() {
    if (computerChoice === userChoice) {
        result = "Empate!";
    }
    //piedra
    if (computerChoice === "Piedra" && userChoice === "Fuego") {
        result = "Perdiste!";
    }
    if (computerChoice === "Piedra" && userChoice === "Tijeras") {
        result = "Perdiste!";
    }
    if (computerChoice === "Piedra" && userChoice === "Serpiente") {
        result = "Perdiste!";
    }
    if (computerChoice === "Piedra" && userChoice === "Humano") {
        result = "Perdiste!";
    }
    if (computerChoice === "Piedra" && userChoice === "Arbol") {
        result = "Perdiste!";
    }
    if (computerChoice === "Piedra" && userChoice === "Lobo") {
        result = "Perdiste!";
    }
    if (computerChoice === "Piedra" && userChoice === "Esponja") {
        result = "Perdiste!";
    }
    if (computerChoice === "Piedra" && userChoice === "Papel") {
        result = "Ganaste!";
    }
    if (computerChoice === "Piedra" && userChoice === "Aire") {
        result = "Ganaste!";
    }
    if (computerChoice === "Piedra" && userChoice === "Agua") {
        result = "Ganaste!";
    }
    if (computerChoice === "Piedra" && userChoice === "Dragon") {
        result = "Ganaste!";
    }
    if (computerChoice === "Piedra" && userChoice === "Diablo") {
        result = "Ganaste!";
    }
    if (computerChoice === "Piedra" && userChoice === "Relampago") {
        result = "Ganaste!";
    }
    if (computerChoice === "Piedra" && userChoice === "Pistola") {
        result = "Ganaste!";
    }
    //fuego
    if (computerChoice === "Fuego" && userChoice === "Tijeras") {
        result = "Perdiste!";
    }
    if (computerChoice === "Fuego" && userChoice === "Serpiente") {
        result = "Perdiste!";
    }
    if (computerChoice === "Fuego" && userChoice === "Humano") {
        result = "Perdiste!";
    }
    if (computerChoice === "Fuego" && userChoice === "Arbol") {
        result = "Perdiste!";
    }
    if (computerChoice === "Fuego" && userChoice === "Lobo") {
        result = "Perdiste!";
    }
    if (computerChoice === "Fuego" && userChoice === "Esponja") {
        result = "Perdiste!";
    }
    if (computerChoice === "Fuego" && userChoice === "Papel") {
        result = "Perdiste!";
    }
    if (computerChoice === "Fuego" && userChoice === "Aire") {
        result = "Ganaste!";
    }
    if (computerChoice === "Fuego" && userChoice === "Agua") {
        result = "Ganaste!";
    }
    if (computerChoice === "Fuego" && userChoice === "Dragon") {
        result = "Ganaste!";
    }
    if (computerChoice === "Fuego" && userChoice === "Diablo") {
        result = "Ganaste!";
    }
    if (computerChoice === "Fuego" && userChoice === "Relampago") {
        result = "Ganaste!";
    }
    if (computerChoice === "Fuego" && userChoice === "Pistola") {
        result = "Ganaste!";
    }
    if (computerChoice === "Fuego" && userChoice === "Piedra") {
        result = "Ganaste!";
    }
    //tijeras
    if (computerChoice === "Tijeras" && userChoice === "Serpiente") {
        result = "Perdiste!";
    }
    if (computerChoice === "Tijeras" && userChoice === "Humano") {
        result = "Perdiste!";
    }
    if (computerChoice === "Tijeras" && userChoice === "Arbol") {
        result = "Perdiste!";
    }
    if (computerChoice === "Tijeras" && userChoice === "Lobo") {
        result = "Perdiste!";
    }
    if (computerChoice === "Tijeras" && userChoice === "Esponja") {
        result = "Perdiste!";
    }
    if (computerChoice === "Tijeras" && userChoice === "Papel") {
        result = "Perdiste!";
    }
    if (computerChoice === "Tijeras" && userChoice === "Aire") {
        result = "Perdiste!";
    }
    if (computerChoice === "Tijeras" && userChoice === "Agua") {
        result = "Ganaste!";
    }
    if (computerChoice === "Tijeras" && userChoice === "Dragon") {
        result = "Ganaste!";
    }
    if (computerChoice === "Tijeras" && userChoice === "Diablo") {
        result = "Ganaste!";
    }
    if (computerChoice === "Tijeras" && userChoice === "Relampagoo") {
        result = "Ganaste!";
    }
    if (computerChoice === "Tijeras" && userChoice === "Pistola") {
        result = "Ganaste!";
    }
    if (computerChoice === "Tijeras" && userChoice === "Piedra") {
        result = "Ganaste!";
    }
    if (computerChoice === "Tijeras" && userChoice === "Fuego") {
        result = "Ganaste!";
    }
    //serpiente
    if (computerChoice === "Serpiente" && userChoice === "Humano") {
        result = "Perdiste!";
    }
    if (computerChoice === "Serpiente" && userChoice === "Arbol") {
        result = "Perdiste!";
    }
    if (computerChoice === "Serpiente" && userChoice === "Lobo") {
        result = "Perdiste!";
    }
    if (computerChoice === "Serpiente" && userChoice === "Esponja") {
        result = "Perdiste!";
    }
    if (computerChoice === "Serpiente" && userChoice === "Papel") {
        result = "Perdiste!";
    }
    if (computerChoice === "Serpiente" && userChoice === "Aire") {
        result = "Perdiste!";
    }
    if (computerChoice === "Serpiente" && userChoice === "Agua") {
        result = "Perdiste!";
    }
    if (computerChoice === "Serpiente" && userChoice === "Dragon") {
        result = "Ganaste!";
    }
    if (computerChoice === "Serpiente" && userChoice === "Dibalo") {
        result = "Ganaste!";
    }
    if (computerChoice === "Serpiente" && userChoice === "Relampago") {
        result = "Ganaste!";
    }
    if (computerChoice === "Serpiente" && userChoice === "Pistola") {
        result = "Ganaste!";
    }
    if (computerChoice === "Serpiente" && userChoice === "Piedra") {
        result = "Ganaste!";
    }
    if (computerChoice === "Serpiente" && userChoice === "Fuego") {
        result = "Ganaste!";
    }
    if (computerChoice === "Serpiente" && userChoice === "Tijeras") {
        result = "Ganaste!";
    }
    //humano
    if (computerChoice === "Humano" && userChoice === "Arbol") {
        result = "Perdiste!";
    }
    if (computerChoice === "Humano" && userChoice === "Lobo") {
        result = "Perdiste!";
    }
    if (computerChoice === "Humano" && userChoice === "Esponja") {
        result = "Perdiste!";
    }
    if (computerChoice === "Humano" && userChoice === "Papel") {
        result = "Perdiste!";
    }
    if (computerChoice === "Humano" && userChoice === "Aire") {
        result = "Perdiste!";
    }
    if (computerChoice === "Humano" && userChoice === "Agua") {
        result = "Perdiste!";
    }
    if (computerChoice === "Humano" && userChoice === "Dragon") {
        result = "Perdiste!";
    }
    if (computerChoice === "Humano" && userChoice === "Diablo") {
        result = "Ganaste!";
    }
    if (computerChoice === "Humano" && userChoice === "Relampago") {
        result = "Ganaste!";
    }
    if (computerChoice === "Humano" && userChoice === "Pistola") {
        result = "Ganaste!";
    }
    if (computerChoice === "Humano" && userChoice === "Piedra") {
        result = "Ganaste!";
    }
    if (computerChoice === "Humano" && userChoice === "Fuego") {
        result = "Ganaste!";
    }
    if (computerChoice === "Humano" && userChoice === "Tijeras") {
        result = "Ganaste!";
    }
    if (computerChoice === "Humano" && userChoice === "Serpiente") {
        result = "Ganaste!";
    }
    //arbol
    if (computerChoice === "Arbol" && userChoice === "Lobo") {
        result = "Perdiste!";
    }
    if (computerChoice === "Arbol" && userChoice === "Esponja") {
        result = "Perdiste!";
    }
    if (computerChoice === "Arbol" && userChoice === "Papel") {
        result = "Perdiste!";
    }
    if (computerChoice === "Arbol" && userChoice === "Aire") {
        result = "Perdiste!";
    }
    if (computerChoice === "Arbol" && userChoice === "Agua") {
        result = "Perdiste!";
    }
    if (computerChoice === "Arbol" && userChoice === "Dragon") {
        result = "Perdiste!";
    }
    if (computerChoice === "Arbol" && userChoice === "Diablo") {
        result = "Perdiste!";
    }
    if (computerChoice === "Arbol" && userChoice === "Relampago") {
        result = "Ganaste!";
    }
    if (computerChoice === "Arbol" && userChoice === "Pistola") {
        result = "Ganaste!";
    }
    if (computerChoice === "Arbol" && userChoice === "Piedra") {
        result = "Ganaste!";
    }
    if (computerChoice === "Arbol" && userChoice === "Fuego") {
        result = "Ganaste!";
    }
    if (computerChoice === "Arbol" && userChoice === "Tijeras") {
        result = "Ganaste!";
    }
    if (computerChoice === "Arbol" && userChoice === "Serpiente") {
        result = "Ganaste!";
    }
    if (computerChoice === "Arbol" && userChoice === "Humano") {
        result = "Ganaste!";
    }
    //lobo
    if (computerChoice === "Lobo" && userChoice === "Esponja") {
        result = "Perdiste!";
    }
    if (computerChoice === "Lobo" && userChoice === "Papel") {
        result = "Perdiste!";
    }
    if (computerChoice === "Lobo" && userChoice === "Aire") {
        result = "Perdiste!";
    }
    if (computerChoice === "Lobo" && userChoice === "Agua") {
        result = "Perdiste!";
    }
    if (computerChoice === "Lobo" && userChoice === "Dragon") {
        result = "Perdiste!";
    }
    if (computerChoice === "Lobo" && userChoice === "Diablo") {
        result = "Perdiste!";
    }
    if (computerChoice === "Lobo" && userChoice === "Relampago") {
        result = "Perdiste!";
    }
    if (computerChoice === "Lobo" && userChoice === "Pistola") {
        result = "Ganaste!";
    }
    if (computerChoice === "Lobo" && userChoice === "Piedra") {
        result = "Ganaste!";
    }
    if (computerChoice === "Lobo" && userChoice === "Fuego") {
        result = "Ganaste!";
    }
    if (computerChoice === "Lobo" && userChoice === "Tijeras") {
        result = "Ganaste!";
    }
    if (computerChoice === "Lobo" && userChoice === "Serpiente") {
        result = "Ganaste!";
    }
    if (computerChoice === "Lobo" && userChoice === "Humano") {
        result = "Ganaste!";
    }
    if (computerChoice === "Lobo" && userChoice === "Arbol") {
        result = "Ganaste!";
    }
    //esponja
    if (computerChoice === "Esponja" && userChoice === "Papel") {
        result = "Perdiste!";
    }
    if (computerChoice === "Esponja" && userChoice === "Aire") {
        result = "Perdiste!";
    }
    if (computerChoice === "Esponja" && userChoice === "Agua") {
        result = "Perdiste!";
    }
    if (computerChoice === "Esponja" && userChoice === "Dragon") {
        result = "Perdiste!";
    }
    if (computerChoice === "Esponja" && userChoice === "Dibalo") {
        result = "Perdiste!";
    }
    if (computerChoice === "Esponja" && userChoice === "Relampago") {
        result = "Perdiste!";
    }
    if (computerChoice === "Esponja" && userChoice === "Pistola") {
        result = "Perdiste!";
    }
    if (computerChoice === "Esponja" && userChoice === "Piedra") {
        result = "Ganaste!";
    }
    if (computerChoice === "Esponja" && userChoice === "Fuego") {
        result = "Ganaste!";
    }
    if (computerChoice === "Esponja" && userChoice === "Tijeras") {
        result = "Ganaste!";
    }
    if (computerChoice === "Esponja" && userChoice === "Serpiente") {
        result = "Ganaste!";
    }
    if (computerChoice === "Esponja" && userChoice === "Humano") {
        result = "Ganaste!";
    }
    if (computerChoice === "Esponja" && userChoice === "Arbol") {
        result = "Ganaste!";
    }
    if (computerChoice === "Esponja" && userChoice === "Lobo") {
        result = "Ganaste!";
    }
    //papel
    if (computerChoice === "Papel" && userChoice === "Aire") {
        result = "Perdiste!";
    }
    if (computerChoice === "Papel" && userChoice === "Agua") {
        result = "Perdiste!";
    }
    if (computerChoice === "Papel" && userChoice === "Dragon") {
        result = "Perdiste!";
    }
    if (computerChoice === "Papel" && userChoice === "Diablo") {
        result = "Perdiste!";
    }
    if (computerChoice === "Papel" && userChoice === "Relampago") {
        result = "Perdiste!";
    }
    if (computerChoice === "Papel" && userChoice === "Pistola") {
        result = "Perdiste!";
    }
    if (computerChoice === "Papel" && userChoice === "Piedra") {
        result = "Perdiste!";
    }
    if (computerChoice === "Papel" && userChoice === "Fuego") {
        result = "Ganaste!";
    }
    if (computerChoice === "Papel" && userChoice === "Tijeras") {
        result = "Ganaste!";
    }
    if (computerChoice === "Papel" && userChoice === "Serpiente") {
        result = "Ganaste!";
    }
    if (computerChoice === "Papel" && userChoice === "Humano") {
        result = "Ganaste!";
    }
    if (computerChoice === "Papel" && userChoice === "Arbol") {
        result = "Ganaste!";
    }
    if (computerChoice === "Papel" && userChoice === "Lobo") {
        result = "Ganaste!";
    }
    if (computerChoice === "Papel" && userChoice === "Esponja") {
        result = "Ganaste!";
    }
    //aire
    if (computerChoice === "Aire" && userChoice === "Agua") {
        result = "Perdiste!";
    }
    if (computerChoice === "Aire" && userChoice === "Dragon") {
        result = "Perdiste!";
    }
    if (computerChoice === "Aire" && userChoice === "Dibalo") {
        result = "Perdiste!";
    }
    if (computerChoice === "Aire" && userChoice === "Relampago") {
        result = "Perdiste!";
    }
    if (computerChoice === "Aire" && userChoice === "Pistola") {
        result = "Perdiste!";
    }
    if (computerChoice === "Aire" && userChoice === "Piedra") {
        result = "Perdiste!";
    }
    if (computerChoice === "Aire" && userChoice === "Fuego") {
        result = "Perdiste!";
    }
    if (computerChoice === "Aire" && userChoice === "Tijeras") {
        result = "Ganaste!";
    }
    if (computerChoice === "Aire" && userChoice === "Serpiente") {
        result = "Ganaste!";
    }
    if (computerChoice === "Aire" && userChoice === "Humano") {
        result = "Ganaste!";
    }
    if (computerChoice === "Aire" && userChoice === "Arbol") {
        result = "Ganaste!";
    }
    if (computerChoice === "Aire" && userChoice === "Lobo") {
        result = "Ganaste!";
    }
    if (computerChoice === "Aire" && userChoice === "Esponja") {
        result = "Ganaste!";
    }
    if (computerChoice === "Aire" && userChoice === "Papel") {
        result = "Ganaste!";
    }
    //agua
    if (computerChoice === "Agua" && userChoice === "Dragon") {
        result = "Perdiste!";
    }
    if (computerChoice === "Agua" && userChoice === "Diablo") {
        result = "Perdiste!";
    }
    if (computerChoice === "Agua" && userChoice === "Relampago") {
        result = "Perdiste!";
    }
    if (computerChoice === "Agua" && userChoice === "Pistola") {
        result = "Perdiste!";
    }
    if (computerChoice === "Agua" && userChoice === "Piedra") {
        result = "Perdiste!";
    }
    if (computerChoice === "Agua" && userChoice === "Fuego") {
        result = "Perdiste!";
    }
    if (computerChoice === "Agua" && userChoice === "Tijeras") {
        result = "Perdiste!";
    }
    if (computerChoice === "Agua" && userChoice === "Serpiente") {
        result = "Ganaste!";
    }
    if (computerChoice === "Agua" && userChoice === "Humano") {
        result = "Ganaste!";
    }
    if (computerChoice === "Agua" && userChoice === "Arbol") {
        result = "Ganaste!";
    }
    if (computerChoice === "Agua" && userChoice === "Lobo") {
        result = "Ganaste!";
    }
    if (computerChoice === "Agua" && userChoice === "Esponja") {
        result = "Ganaste!";
    }
    if (computerChoice === "Agua" && userChoice === "Papel") {
        result = "Ganaste!";
    }
    if (computerChoice === "Agua" && userChoice === "Aire") {
        result = "Ganaste!";
    }
    //dragon
    if (computerChoice === "Dragon" && userChoice === "Diablo") {
        result = "Perdiste!";
    }
    if (computerChoice === "Dragon" && userChoice === "Relampago") {
        result = "Perdiste!";
    }
    if (computerChoice === "Dragon" && userChoice === "Pistola") {
        result = "Perdiste!";
    }
    if (computerChoice === "Dragon" && userChoice === "Piedra") {
        result = "Perdiste!";
    }
    if (computerChoice === "Dragon" && userChoice === "Fuego") {
        result = "Perdiste!";
    }
    if (computerChoice === "Dragon" && userChoice === "Tijeras") {
        result = "Perdiste!";
    }
    if (computerChoice === "Dragon" && userChoice === "Serpiente") {
        result = "Perdiste!";
    }
    if (computerChoice === "Dragon" && userChoice === "Humano") {
        result = "Ganaste!";
    }
    if (computerChoice === "Dragon" && userChoice === "Arbol") {
        result = "Ganaste!";
    }
    if (computerChoice === "Dragon" && userChoice === "Lobo") {
        result = "Ganaste!";
    }
    if (computerChoice === "Dragon" && userChoice === "Esponja") {
        result = "Ganaste!";
    }
    if (computerChoice === "Dragon" && userChoice === "Papel") {
        result = "Ganaste!";
    }
    if (computerChoice === "Dragon" && userChoice === "Aire") {
        result = "Ganaste!";
    }
    if (computerChoice === "Dragon" && userChoice === "Agua") {
        result = "Ganaste!";
    }
    //diablo
    if (computerChoice === "Diablo" && userChoice === "Relampago") {
        result = "Perdiste!";
    }
    if (computerChoice === "Diablo" && userChoice === "Pistola") {
        result = "Perdiste!";
    }
    if (computerChoice === "Diablo" && userChoice === "Piedra") {
        result = "Perdiste!";
    }
    if (computerChoice === "Diablo" && userChoice === "Fuego") {
        result = "Perdiste!";
    }
    if (computerChoice === "Diablo" && userChoice === "Tiejras") {
        result = "Perdiste!";
    }
    if (computerChoice === "Diablo" && userChoice === "Serpiente") {
        result = "Perdiste!";
    }
    if (computerChoice === "Diablo" && userChoice === "Humano") {
        result = "Perdiste!";
    }
    if (computerChoice === "Diablo" && userChoice === "Arbol") {
        result = "Ganaste!";
    }
    if (computerChoice === "Diablo" && userChoice === "Lobo") {
        result = "Ganaste!";
    }
    if (computerChoice === "Diablo" && userChoice === "Esponja") {
        result = "Ganaste!";
    }
    if (computerChoice === "Diablo" && userChoice === "Papel") {
        result = "Ganaste!";
    }
    if (computerChoice === "Diablo" && userChoice === "Aire") {
        result = "Ganaste!";
    }
    if (computerChoice === "Diablo" && userChoice === "Agua") {
        result = "Ganaste!";
    }
    if (computerChoice === "Diablo" && userChoice === "Dragon") {
        result = "Ganaste!";
    }
    //relampago
    if (computerChoice === "Relampago" && userChoice === "Pistola") {
        result = "Perdiste!";
    }
    if (computerChoice === "Relampago" && userChoice === "Piedra") {
        result = "Perdiste!";
    }
    if (computerChoice === "Relampago" && userChoice === "Fuego") {
        result = "Perdiste!";
    }
    if (computerChoice === "Relampago" && userChoice === "Tijeras") {
        result = "Perdiste!";
    }
    if (computerChoice === "Relampago" && userChoice === "Serpiente") {
        result = "Perdiste!";
    }
    if (computerChoice === "Relampago" && userChoice === "Humano") {
        result = "Perdiste!";
    }
    if (computerChoice === "Relampago" && userChoice === "Arbol") {
        result = "Perdiste!";
    }
    if (computerChoice === "Relampago" && userChoice === "Lobo") {
        result = "Ganaste!";
    }
    if (computerChoice === "Relampago" && userChoice === "Esponja") {
        result = "Ganaste!";
    }
    if (computerChoice === "Relampago" && userChoice === "Papel") {
        result = "Ganaste!";
    }
    if (computerChoice === "Relampago" && userChoice === "Aire") {
        result = "Ganaste!";
    }
    if (computerChoice === "Relampago" && userChoice === "Agua") {
        result = "Ganaste!";
    }
    if (computerChoice === "Relampago" && userChoice === "Dragon") {
        result = "Ganaste!";
    }
    if (computerChoice === "Relampago" && userChoice === "Diablo") {
        result = "Ganaste!";
    }
    //pistola
    if (computerChoice === "Pistola" && userChoice === "Piedra") {
        result = "Perdiste!";
    }
    if (computerChoice === "Pistola" && userChoice === "Fuego") {
        result = "Perdiste!";
    }
    if (computerChoice === "Pistola" && userChoice === "Tijeras") {
        result = "Perdiste!";
    }
    if (computerChoice === "Pistola" && userChoice === "Serpiente") {
        result = "Perdiste!";
    }
    if (computerChoice === "Pistola" && userChoice === "Humano") {
        result = "Perdiste!";
    }
    if (computerChoice === "Pistola" && userChoice === "Arbol") {
        result = "Perdiste!";
    }
    if (computerChoice === "Pistola" && userChoice === "Lobo") {
        result = "Perdiste!";
    }
    if (computerChoice === "Pistola" && userChoice === "Esponja") {
        result = "Ganaste!";
    }
    if (computerChoice === "Pistola" && userChoice === "Papel") {
        result = "Ganaste!";
    }
    if (computerChoice === "Pistola" && userChoice === "Aire") {
        result = "Ganaste!";
    }
    if (computerChoice === "Pistola" && userChoice === "Agua") {
        result = "Ganaste!";
    }
    if (computerChoice === "Pistola" && userChoice === "Dragon") {
        result = "Ganaste!";
    }
    if (computerChoice === "Pistola" && userChoice === "Diablo") {
        result = "Ganaste!";
    }
    if (computerChoice === "Pistola" && userChoice === "Relampago") {
        result = "Ganaste!";
    }
    resultDis.innerHTML = result;
} */