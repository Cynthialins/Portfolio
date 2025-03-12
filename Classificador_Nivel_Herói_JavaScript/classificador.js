// Importa o módulo readline para receber entrada do usuário no Node.js
import { createInterface } from 'readline';

// Cria uma interface para receber entrada do usuário
const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});

//Solicita informações ao usuário
rl.question('Digite o nome do herói: ', name => {
    rl.question('Digite a quantidade de experiência (XP) do herói: ', xp => {
        xp = parseInt(xp);

        const level = 
        xp < 1000 ? "Ferro" :
        xp <= 2000 ? "Bronze" :
        xp <= 5000 ? "Prata" :
        xp <= 7000 ? "Ouro" :
        xp <= 8000 ? "Platina" :
        xp <= 9000 ? "Ascendente" :
        xp <= 10000 ? "Imortal" : "Radiante";


        // Exibe o resultado
        console.log(`O Herói de nome ${name} está no nível de ${level}.`);
        rl.close();
    });
});
