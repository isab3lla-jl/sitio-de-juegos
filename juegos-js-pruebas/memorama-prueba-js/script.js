//declara una colección de elementos donde cada elemento representa una carta con su nombre e imagen
const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
];

cardArray.sort(() => 0.5 - Math.random()); //mezcla las cartas de forma aleatoria

//toma la referencia de los elementos en el archivo html donde el juego sera mostrado
const gridDis = document.querySelector("#grid");
const resultDis = document.querySelector("#result");
const timeDis = document.querySelector("#time");
const startButton = document.querySelector("#start");
//inicia colecciones para saber las cartas que han sido escogidas y las cartas que ya han sido ganadas
let chosenCards = [];
let chosenCardsId = [];
const cardsWon = [];
//declara variable de tiempo
let minutes = `00`, seconds = `00`, chronometerDisplay = document.querySelector(`[data-chronometer]`), chronometerCall;
//declara variable con id del popup
let popupId, popupIdBtn;

//funcion para el cronometro
function chronometer() {
    seconds++;

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (seconds == 60) {
        seconds = "00";
        minutes++;
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
    }

    chronometerDisplay.textContent = `${minutes}:${seconds}`;
}

//agrega un escuchador de eventos al boton para que cuando le des click se haga la fucnion de empezar tiempo
startButton.addEventListener("click", (event) => {
    chronometerCall = setInterval(chronometer, 1000)
    event.target.setAttribute(`disabled`,``)
})

//funcion que crea el tablero agregando los elementos de las cartas al display de la cuadricula
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img'); //crea un elemento de imagen para cada carta
        card.setAttribute('src', 'images/blank.png'); //determina la imagen inicial de todas las cartas como blank.png (la "parte de atras" de las cartas)
        card.setAttribute('data-id', i); //determina el atributo para identificar cada carta
        card.addEventListener('click', flipCard); //agrega un escuchador de eventos a cada carta
        gridDis.appendChild(card); //adjunta cada carta a la cuadricula
    }
}
createBoard(); //llama la funcion para crear el tablero

//funciones para abrir y cerrar los popups
function openPopup(oldId, newId) {
    popupId = document.getElementById(oldId);
    popupId.id = newId;
    popupIdBtn = document.getElementById(oldId + "-btn");
    popupIdBtn.id = "close-popup"
    popupId.focus(); // Set focus to the popup element
}
function closePopup(popupId, originalId) {
    popupId.removeAttribute("id");
    popupId.id = originalId;
    popupIdBtn.removeAttribute("id");
    popupIdBtn.id = originalId + "-btn";
}
function winRestart() {
    location.href = "index.html";
}

//funcion para checar si dos cartas volteadas son iguales
function checkMatch () {
    const cards = document.querySelectorAll('.grid img'); //guarda todos los elementos de cartas
    const optionOneId = chosenCardsId[0]; //guarda el id de la primera carta seleccionada
    const optionTwoId = chosenCardsId[1]; //guarda el id de la segunda carta seleccionada
    //checa si la misma carta fue seleccionada dos veces
    if (optionOneId === optionTwoId) {
        openPopup("same-card", "open-popup");//muestra una alerta y reinicia ambas imagenes a blank.png
        document.addEventListener('keydown', function(event) {
            if (event.keyCode === 13) { // Check if the key pressed is Enter (key code 13)
                closePopup(popupId, "same-card");
            }
        });
        cards[optionOneId].setAttribute('src', 'images/blank.png');
        cards[optionTwoId].setAttribute('src', 'images/blank.png');
    } else if (chosenCards[0] == chosenCards[1] && cardsWon.length < ((cardArray.length)/2) + 1) { //si las cartas son iguales
        openPopup("match", "open-popup");
        document.addEventListener('keydown', function(event) {
            if (event.keyCode === 13) { // Check if the key pressed is Enter (key code 13)
                closePopup(popupId, "match");
            }
        }); //muestra mensaje de alerta
        //cambia ambas imagenes a una imagen en blanco para mostrar que ya fueron encontradas
        cards[optionOneId].setAttribute('src', 'images/white.png');
        cards[optionTwoId].setAttribute('src', 'images/white.png');
        //elimina el escuchador de eventos de las cartas encontradas
        cards[optionOneId].removeEventListener('click', flipCard);
        cards[optionTwoId].removeEventListener('click', flipCard);
        //agrega las cartas encontradas a la coleccion de cardsWon
        cardsWon.push(chosenCards);
    } else { //si las cartas no son iguales
        openPopup("try-again", "open-popup");
        document.addEventListener('keydown', function(event) {
            if (event.keyCode === 13) { // Check if the key pressed is Enter (key code 13)
                closePopup(popupId, "try-again");
            }
        }); //muestra un mensaje de alerta y reinicia las cartas a la imagen blank.png
        cards[optionOneId].setAttribute('src', 'images/blank.png');
        cards[optionTwoId].setAttribute('src', 'images/blank.png');
    }
    //actualiza el display para mostrar la cantidad de cartas ganadas
    resultDis.textContent = cardsWon.length;
    //limpia las colecciones de cartas escogidas y sus ids
    chosenCards = [];
    chosenCardsId = [];
    //checa si todas las cartas fueron encontradas
    if (cardsWon.length == (cardArray.length)/2){
        confetti();
        openPopup("win", "open-popup");
        document.addEventListener('keydown', function(event) {
            if (event.keyCode === 13) { // Check if the key pressed is Enter (key code 13)
                winRestart();
            }
        });
        clearInterval(chronometerCall);
        startButton.removeAttribute(`disabled`);
    }
}
//funcion de voltear una carta
function flipCard () {
    const cardId = this.getAttribute('data-id');//obtiene el id de la carta clickeada
    chosenCards.push(cardArray[cardId].name);//agrega el nombre de la carta a la coleccion chosenCards
    chosenCardsId.push(cardId); //agrega el id a la coleccion chosenCardsId
    this.setAttribute('src', cardArray[cardId].img); //selecciona la imagen de la carta escogida
    //checa si dos cartas han sido volteadas
    if (chosenCards.length === 2) {
        setTimeout(checkMatch, 300);// llama la funcion de checkMatch despues de un breve retraso (.5 segundos)
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