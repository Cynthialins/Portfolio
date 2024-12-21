const state = {
    view: {
        squares: document.querySelectorAll(".square"),
        enemy: document.querySelector(".enemy"),
        timeLeft: document.querySelector("#time-left"),
        score: document.querySelector("#score"),
    },

    values: {
        timeId: null,
        gameVelocity: 1000,
        hitPosition: 0,
        result: 0,
    }    
};

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

// Determina a velocidade com que o inimigo mudará de quadrado//
function moveEnemy() {
    state.values.timeId = setInterval(randomSquare, state.values.gameVelocity);
}

//Determina o que deverá ser feito ao clicar em cima do quadrado contendo o inimigo//
function addListenerHitbox() {
    state.view.squares.forEach((square) => {
        square.addEventListener("mousedown", () => {
            if (square.id === state.values.hitPosition) {
                state.values.result++;
                state.view.score.textContent = state.values.result;
                state.values.hitPosition = null;
            };
        });
    });
}

// Determina como o jogo deve se comportar ao ser inicializado//
function initialize() {
    moveEnemy();
    addListenerHitbox();
}

initialize();
