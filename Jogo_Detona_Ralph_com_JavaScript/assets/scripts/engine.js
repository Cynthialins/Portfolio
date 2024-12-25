const state = {
    view: {
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        timeLeft: document.querySelector("#time-left"),
        score: document.querySelector("#score"),
    },

    values: {
        gameVelocity: 1000,
        hitPosition: 0,
        result: 0,
        currentTime: 60,
    },    

    actions: {
        timeId: setInterval(randomSquare, 1000), // Determina a velocidade com que o inimigo mudará de quadrado//
        countDownTimerId: setInterval(countDown, 1000),
    }
};

// Determina o tempo do jogo//
function countDown() {
    state.values.currentTime--;
    state.view.timeLeft.textContent = state.values.currentTime;

    if (state.values.currentTime <= 0){
        clearInterval(state.actions.countDownTimerId);
        clearInterval(state.actions.timeId);
        alert("Game Over! O seu resultado foi: " + state.values.result);
    }
}

function playSound() {
    let audio = new Audio("./assets/audios/hit.m4a");
    audio.volume = 0.2;
    audio.play();
}

// Determina que o inimigo irá aparecer em cada quadrado de maneira randomica//
function randomSquare() {
    state.view.squares.forEach((square) =>{
        square.classList.remove("enemy");
    });

    let randomNumber = Math.floor(Math.random() * 9);
    let randomSquare = state.view.squares[randomNumber];
    randomSquare.classList.add("enemy");
    state.values.hitPosition = randomSquare.id;
}

//Determina o que deverá ser feito ao clicar em cima do quadrado contendo o inimigo//
function addListenerHitbox() {
    state.view.squares.forEach((square) => {
        square.addEventListener("mousedown", () => {
            if (square.id === state.values.hitPosition) {
                state.values.result++;
                state.view.score.textContent = state.values.result;
                state.values.hitPosition = null;
                playSound();
            }
        });
    });
}

// Determina como o jogo deve se comportar ao ser inicializado//
function initialize() {
    addListenerHitbox();
}

initialize();
