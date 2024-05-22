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
            computerChoice = "Piedra"
            break;
        case 2:
            computerChoice = "Papel";
            break;
        case 3:
            computerChoice = "Tijeras";
    }

    computerChoiceDis.innerHTML = computerChoice;
}

function getResult() {
    const outcomes = {
        "Piedra": { "Papel": "Ganaste!", "Tijeras": "Perdiste!", "Piedra": "Empate!" },
        "Papel": { "Piedra": "Perdiste!", "Tijeras": "Ganaste!", "Papel": "Empate!" },
        "Tijeras": { "Papel": "Perdiste!", "Piedra": "Ganaste!", "Tijeras": "Empate!" }
    }
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

/* la lógica con sentencias if es mas facil de entender como pruncipiante pero se vuelve redundante
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
    if (computerChoice === 'Papel' && userChoice === 'Tijeras') {
        result = 'Ganaste!';
    }
    if (computerChoice === 'Papel' && userChoice === 'Piedra') {
        result = 'Perdiste!';
    }
    if (computerChoice === 'Tijeras' && userChoice === 'Papel') {
        result = 'Perdiste!';
    };
    if (computerChoice === 'Tijeras' && userChoice === 'Piedra') {
        result = 'Ganaste!';
    }
    resultDis.innerHTML = result;
}
*/