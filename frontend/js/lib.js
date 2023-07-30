const log = (() => {
    const startupMessage = (message) => {
        console.log(`Module Instantiated: ${message}`);
    }

    const error = (error) => {
        console.log(error);
    }

    return {
        startupMessage,
        error
    }
})();

const throttle = (() => {
})();

const debounce = (() => {
})();

const request = (function() {
    function request() {
        log.startupMessage("Request");
    }

    request.prototype.setHeader = (header, value) => {
    }

    request.prototype.get = (url) => {
        log.error(url);
    }

    request.prototype.put = (url, data) => {
        log.error(url);
    }

    request.prototype.post = (url, data) => {
        log.error(url);
    }

    request.prototype.delete = (url) => {
        log.error(url);
    }

    return new request();
})();
