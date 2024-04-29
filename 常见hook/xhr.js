// xhr的hook
(function () {
    var open = window.XMLHttpRequest.prototype.open;
    window.XMLHttpRequest.prototype.open = function (method, url, async) {
        if (url.indexOf("?") != -1) {
            console.log('xhr的断点');
            debugger;
        }
        return open.apply(this, arguments)
    }
})()