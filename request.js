
function getNewNumber() {
    const request = new XMLHttpRequest();
    const url = 'https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300';
    request.open('GET', url);
    request.send();
    
    request.onreadystatechange = function() {
        if (request.readyState === 4){
            // if (request.status >= 100 && request.status < 200) {

            // } else if (request.status >= 200 && request.status < 300) {

            // } else if (request.status >= 300 && request.status < 400) {

            // } else if (request.status >= 400 && request.status < 500) {

            // } else if (request.status >= 500) {

            // }
            return request.response;
        }
    }
    
}

