export class Request {

    constructor(url) {
        this.url = url;
    }

    getNewNumber() {
        return new Promise((resolve, reject) => {
            const request = new XMLHttpRequest();
            request.open('GET', this.url);
            request.send();
            request.onerror = () => reject(request.status);
            request.onload = () => {
                    if (request.readyState === 4){  
                        if(request.status === 200) {
                            resolve(JSON.parse(request.response));
                        } 
                        reject(request.status);
                    }
                };
        });
    }
}
