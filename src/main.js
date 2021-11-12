/**
* Imports: Estas importações são das duas classes auxiliares Display e Request,
* é válido resaltar que localmente o JavaScript tem dificuldade de identificar as
* pastas destes arquivos, logo para que o funcionamento seja   
*/

import {Display} from '../src/display.js'
import {Request} from '../src/request.js'

const request = new Request('https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300');
const display = new Display();
const newGame = document.getElementById('newGame');
const input = document.getElementById('input');
const send = document.getElementById('send');

/**
* Função initGame: Está é a função principal que tem por responsabilidade reiniciar
* todas as variáveis do game e fazer a requisição para pegar o valor de chave a ser
* advinhado. Além de reiniciar as variáveis e fazer a requisição ele também pega sua 
* resposta tanto sendo um erro ou um sucesso e a trata devidamente.  
* */

function initGame() {

    display.controllerDisplay(0);
    display.restartAuxDisplay(false);
    display.visibilityMsgDisplay('');

    const resp = request.getNewNumber();

    resp.then((response) => {

        sendGuess(response.value);

    }).catch(e => {

        display.controllerDisplay(e,'error');
        display.visibilityMsgDisplay('ERRO','error');
        display.restartAuxDisplay(true);
        retartGame();

    });
    
}

/**
* Função sendGuess: Uma vez que a requisição da função initGame retornar sucesso com o valor  
* da chave, a mesma é passada como parametro para esta função que tem por responsabilidade 
* adicionar funções ao metodos onclick do botão enviar, além de chamar a função 'retartGame'.
*/

/**
* A arrow function adicionada a o onclick do botão enviar tem por responsabilidade 
* gerenciar a cor do display das mensagens e por a exibilas no game enviando para a
* função responsável uma das opções sendo 'É menor', 'É maior' e 'Você acertou!!!!'.
* Além disso em caso de acerto o botão para reiniciar o game é ativado.
*/

function sendGuess(key) {

    retartGame();
    send.onclick = () => {

        const inputValue = parseInt(input.value);
        
        if (inputValue) {  
    
            display.controllerDisplay(inputValue);
    
            if (inputValue > key ) {
    
                display.visibilityMsgDisplay('É menor');
    
            } else if (inputValue < key) {
    
                display.visibilityMsgDisplay('É maior');
    
            } else {
    
                display.visibilityMsgDisplay('Você acertou!!!!', 'success');
                display.controllerDisplay(inputValue, 'success');
                display.restartAuxDisplay(true);
    
            }
    
            input.value = null;
        }};
}

/**
* Função retartGame: Função responsável por adicionar a função 'initGame' (que reinicia o game)
* ao onclick do botão newGame.  
*/

function retartGame() {
    newGame.onclick = () => initGame();
}

/**
* Chamada da função principal do game, serve para inicializar tudo.
*/

initGame();