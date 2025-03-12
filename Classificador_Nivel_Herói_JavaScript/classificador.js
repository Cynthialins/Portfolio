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




/* Se XP for menor do que 1.000 = Ferro
Se XP for entre 1.001 e 2.000 = Bronze
Se XP for entre 2.001 e 5.000 = Prata
Se XP for entre 5.001 e 7.000 = Ouro
Se XP for entre 7.001 e 8.000 = Platina
Se XP for entre 8.001 e 9.000 = Ascendente
Se XP for entre 9.001 e 10.000= Imortal
Se XP for maior ou igual a 10.001 = Radiante

## Saída

Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**" */