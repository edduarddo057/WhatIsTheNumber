/**
* Classe Request: Está classe é responsável por receber a url de destino da requisição
* e implementar a função que efetivamente faz a requisição.   
*/
export class Request {

    constructor(url) {
        this.url = url;
    }

    /**
    * Método getNewNumber: Este método é responsável por realizar a requisição na url
    * passada para seu constructor, ela foi implementada de forma a retornar uma promessa
    * o que ajuda na tratativa de erros e na possivel espera da resposta do servidor.
    * Ela recebe como resposta um JSON e já o transforma em um obj para o retorno.   
    */
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
