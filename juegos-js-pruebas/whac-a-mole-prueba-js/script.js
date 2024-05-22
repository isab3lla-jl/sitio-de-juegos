//selecciona todos los elementos de clase "square" y los almacena en la variable
const squares = document.querySelectorAll(".square");
//slelecciona el elemento con clase mole y lo guarda en la variable
const mole = document.querySelector(".mole");
//selecciona el elemento con id time y lo guarda en la variable
const time = document.querySelector("#time");
//selecciona el elemento con id score y lo guarda en la variable
const score = document.querySelector("#score");
//selecciona el elemento con id start y lo guarda en la variable
const startButton = document.querySelector("#start");
//declara las variables necesarias para la funcionalidad del juego
let result = 0, //para el puntaje 
    hitPosition,
    currentTime = 30, //determina el tiempo de inicio (30s)
    timerId, //controla el movimiento del topo
    countdownTimerId; //controla el temporizador

//declara variable con id del popup
let popupId, popupIdBtn;

//funcion para que el topo aparezca en un cuadro aleatorio
function randomSquare() {
    //elimina la clase mole de todos los cuadrados para que no haya un error mas adelante
    squares.forEach(square => {
        square.classList.remove("mole");
    });
    //selecciona un cuadrado aleatorio y le asigna la clase mole
    let randomSquare = squares[Math.floor(Math.random() * 9)];
    randomSquare.classList.add("mole");
    //guarda el id del cuadrado con el topo
    hitPosition = randomSquare.id;
}

//utiliza addEventListener para registrar un evento específico, en este caso es el click del mouse
squares.forEach(square => {
    square.addEventListener("mousedown", () => {
        //si el cuadro clickeado es el mismo que almacena el topo se aumenta el puntaje, se actualiza el display y se resetea la variable hitPosition
        if (square.id == hitPosition) {
            result++;
            console.log(result);
            score.textContent = result;
            hitPosition = null;
        }
    });
});

//funciones para popup de ganar
function openPopup(oldId, newId) {
    popupId = document.getElementById(oldId);
    popupId.id = newId;
    popupIdBtn = document.getElementById(oldId + "-btn");
    popupIdBtn.id = "close-popup"
    popupId.focus(); // Set focus to the popup element
    document.querySelector(".score").textContent = result;
}
function winRestart() {
    location.href = "index.html"
    //window.location.href = document.getElementById("win-btn").getAttribute("href");
}

//funcion para que el topo se mueva
function moveMole() {
    clearInterval(timerId); //limpia cualquier intervalo existente para evitar multiples intervalos al mismo tiempo
    timerId = setInterval(randomSquare, 750); //crea un intervalo para llamar la funcion randomSquare cada 750 milisegundos
}

//funcion para decrementar el timepo y mostrarlo en pantalla
function timer() {
    currentTime--;
    time.textContent = currentTime
    //si el timepo se termina limpia los dos intervalos, muestra el puntaje final, reinicia el tiempo y puntaje y actualiza el display 
    if (currentTime < 0) {
        confetti();
        openPopup("win", "open-popup");
        console.log(popupId);
        console.log(popupIdBtn);
        document.addEventListener('keydown', function(event) {
            if (event.keyCode === 13) { // Check if the key pressed is Enter (key code 13)
                winRestart();
            }
        });
        clearInterval(timerId);
        clearInterval(countdownTimerId);
        //alert("SE TERMINÓ TU TIEMPO tu puntaje final es " + result)
        currentTime = 30
        result = 0
        score.textContent = result;
        time.textContent = currentTime;
    }
}

//utiliza addEventListener para empezar el juego al picar el botón
startButton.addEventListener("click", () => {
    moveMole(); //llama la funcion que mueve el topo
    startTime(); //llama la funcion que empieza el tiempo
});

//funcion para empezar el timepo
function startTime() {
    countdownTimerId = setInterval(timer, 1000); //crea un intervalo para llamar la fucnion timer cada 1000 milisegundos (1 segundo)
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