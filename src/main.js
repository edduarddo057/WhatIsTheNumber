import {Display} from '../src/display.js'
import {Request} from '../src/request.js'

const request = new Request('https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300');
const display = new Display();
const newGame = document.getElementById('newGame');
const input = document.getElementById('input');
const send = document.getElementById('send');


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

function sendGuess(key) {

    retartGame();
    
    send.onclick = () => {

        if (input.value) {  

            display.controllerDisplay(input.value);

            if (input.value > key ) {

                display.visibilityMsgDisplay('É menor');

            } else if (input.value < key) {

                display.visibilityMsgDisplay('É maior');

            } else {

                display.visibilityMsgDisplay('Você acertou!!!!', 'success');
                display.controllerDisplay(input.value, 'success');
                display.restartAuxDisplay(true);

            }

            input.value = null;
        }
    };
}

function retartGame() {
    newGame.onclick = () => { 
        initGame();
    };
}

initGame();