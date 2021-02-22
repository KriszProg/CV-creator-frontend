import axios from 'axios';

class RequestHandler {
    constructor() {
    };
    
    getFromSource(url, callback, errorHandler) {
        axios
        .get(url)
        .then((res) => callback(res.data))
        .catch((e) => errorHandler(e));
    }
    
    postToSource(url, objectToPost, callback, errorHandler) {
        axios
        .post(url, objectToPost)
        .then((res) => callback(res.data))
        .catch((e) => errorHandler(e));
    }

}

export default RequestHandler;
