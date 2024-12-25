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
        timeId: null,
        countDownTimerId: null,
    }
};

// Atualiza a velocidade com base no número de pontos
function adjustDifficulty() {
    if(state.values.result % 5 === 0 && state.values.gameVelocity > 300) {
        state.values.gameVelocity -= 100;
        clearInterval(state.actions.timeId);
        state.actions.timeId = setInterval(randomSquare,state.values.gameVelocity);
    }
}

// Determina o tempo do jogo//
function countDown() {
    state.values.currentTime--;
    state.view.timeLeft.textContent = state.values.currentTime;

    if (state.values.currentTime <= 0){
        clearInterval(state.actions.countDownTimerId);
        clearInterval(state.actions.timeId);
        playSound("game_over.wav");
        alert("Game Over! O seu resultado foi: " + state.values.result);
    }
}

function playSound(audioName) {
    let audio = new Audio(`./assets/audios/${audioName}`);
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
                playSound("hit.m4a");
                adjustDifficulty();
            }
        });
    });
}

// Determina como o jogo deve se comportar ao ser inicializado//
function initialize() {
    addListenerHitbox();
    state.actions.timeId = setInterval(randomSquare, state.values.gameVelocity); // Inicia o jogo com a velocidade inicial
    state.actions.countDownTimerId = setInterval(countDown, 1000);
}

initialize();
