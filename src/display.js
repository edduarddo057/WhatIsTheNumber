export class Display {
   
    controllerDisplay(number, status) {
        let hundred, ten, unit;

        this.setDisplayVisibility('hundred', true);
        this.setDisplayVisibility('ten', true);
        this.setDisplayVisibility('unit', true);

        if (number / 100 >= 1) {

            hundred = (number / 100).toString().split('.');
            hundred = parseInt(hundred[0]);

            let brokenNumber = (number - (hundred * 100));

            if (brokenNumber / 10 === 0) {
                ten = 0;
                unit = 0;
            } else {

                if (brokenNumber/10 >= 1) {

                    if (brokenNumber % 10 === 0) {
                        ten = parseInt(brokenNumber / 10);
                        unit = 0;
                    } else {
                        brokenNumber = (brokenNumber / 10).toString().split('.')
                        ten = parseInt(brokenNumber[0]);
                        unit = parseInt(brokenNumber[1]);
                    }

                } else {

                    if (brokenNumber % 10 === 0) {
                        ten = parseInt(brokenNumber);
                        unit = 0;
                    } else {
                        ten = 0;
                        unit = parseInt(brokenNumber);
                    }

                }
            }

        } else {

            this.setDisplayVisibility('hundred', false);

            if (number/10 >= 1) {

                let brokenNumber = (number / 10);
                ten = brokenNumber.toString().split('.');
                ten =  parseInt(ten[0]);
                
                if (number % 10 > 0) {
                    brokenNumber = brokenNumber.toString().split('.');
                    unit = parseInt(brokenNumber[1]);
                } else {
                    unit = 0;    
                }

            } else {
                this.setDisplayVisibility('ten', false);
                unit = parseInt(number);
            }

        }

        this.setDisplay('hundred', this.mapDisplay(hundred), this.selectColor(status));
        this.setDisplay('ten', this.mapDisplay(ten), this.selectColor(status));
        this.setDisplay('unit', this.mapDisplay(unit), this.selectColor(status));

    }

    selectColor(status) {
        let classColor;
        switch(status) {
            case 'success': classColor = 'segment-success'; break;  
            case 'error': classColor = 'segment-error'; break;  
            default : classColor = 'segment-color-default'; break;  
        }

        return classColor;
    }
    
    mapDisplay(number) {
        let segmentsDisplay = [];
        console.log(number)
        switch(number){
            case 0: segmentsDisplay = [1,1,1,1,1,1,0]; break;
            case 1: segmentsDisplay = [0,1,1,0,0,0,0]; break;
            case 2: segmentsDisplay = [1,1,0,1,1,0,1]; break;
            case 3: segmentsDisplay = [1,1,1,1,0,0,1]; break;
            case 4: segmentsDisplay = [0,1,1,0,0,1,1]; break;
            case 5: segmentsDisplay = [1,0,1,1,0,1,1]; break;
            case 6: segmentsDisplay = [1,0,1,1,1,1,1]; break;
            case 7: segmentsDisplay = [1,1,1,0,0,1,0]; break;
            case 8: segmentsDisplay = [1,1,1,1,1,1,1]; break;
            case 9: segmentsDisplay = [1,1,1,1,0,1,1]; break;
            default: segmentsDisplay = [0,1,1,0,1,1,1]; break;
        }

        return segmentsDisplay;
    }

    setDisplay(idDisplay, segmentsDisplay, status) {
        const segments =  document.getElementById(idDisplay).getElementsByClassName('segment-display');

        segmentsDisplay.forEach((element, index) => {

            segments[index].classList.remove('segment-success');
            segments[index].classList.remove('segment-error');
            segments[index].classList.remove('segment-color-default');

            if (element) {
                segments[index].classList.remove('segment-disable');
                segments[index].classList.add(status);

            } else {
                segments[index].classList.add('segment-disable');
            }
        });
    }

    setDisplayVisibility(idDisplay, visible) {
        const displayNone =  document.getElementById(idDisplay);
        if (visible) {
            displayNone.style.display = 'block'; 
        } else {
            displayNone.style.display = 'none';
        }
    }

    visibilityMsgDisplay(msg, status) {
        const msgDisplay = document.getElementById('msgDisplay');
        msgDisplay.innerHTML = msg;
        let classColor;

        msgDisplay.classList.remove('msg-color-success');
        msgDisplay.classList.remove('msg-color-error');
        msgDisplay.classList.remove('msg-color-default');

        switch(status) {
            case 'success': classColor = 'msg-color-success'; break;  
            case 'error': classColor = 'msg-color-error'; break;  
            default : classColor = 'msg-color-default'; break;  
        }

        msgDisplay.classList.add(classColor);
    }

    restartAuxDisplay(visible) {
        const msgDisplay = document.getElementById('newGame');
        const input = document.getElementById('input');
        const send = document.getElementById('send');

        msgDisplay.classList.remove('visibleNewGame');
        msgDisplay.classList.remove('notVisibleNewGame');
        input.classList.remove('disable-input')
        send.classList.remove('disable-button-send')

        if(visible){
            msgDisplay.classList.add('visibleNewGame');
            input.classList.add('disable-input')
            send.classList.add('disable-button-send')
        } else {
            msgDisplay.classList.add('notVisibleNewGame');
        }
    }

}

