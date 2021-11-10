export class Display {
   
    controllerDisplay(number, status) {
        let hundred, ten, unit;

        if (number / 100 > 1) {

            hundred = (number / 100).toString().split('.');
            hundred = parseInt(hundred[0]);

            let brokenNumber = (number - (hundred * 100));

            if (brokenNumber / 10 === 0) {
                ten = 0;
                unit = 0;
            } else {

                if (brokenNumber/10 > 1) {

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
                        unit = brokenNumber;
                    }

                }
            }

        } else {

            setDisplayVisibility('hundred', false);

            if (number/10 > 1) {

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
                setDisplayVisibility('ten', false);
                unit = number;
            }

        }

        setDisplay('hundred', mapDisplay(hundred), selectColor(status));
        setDisplay('ten', mapDisplay(ten), selectColor(status));
        setDisplay('unit', mapDisplay(unit), selectColor(status));

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

    setDisplay(display, segmentsDisplay, status) {
        const segments =  document.getElementById(display).getElementsByClassName('segment-display');
        
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

    setDisplayVisibility(display, visible) {
        const displayNone =  document.getElementById(display);
        if (visible) {
            displayNone.style.display = 'block'; 
        } else {
            displayNone.style.display = 'none';
        }
    }

    visibilityMsgDisplay(visible) {
        const msgDisplay = document.getElementById('msgDisplay');
        if (visible) {
            msgDisplay.style.display = 'none'
        } else {
            msgDisplay.style.display = 'block'
        }
    }

}

