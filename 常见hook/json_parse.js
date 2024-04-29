// JSON.parse的hook
(function () {
    var parse_ = JSON.parse;
    JSON.parse = function (s) {
        console.log('JSON.parse的断点', s);
        debugger;
        return parse_(s);
    }
})()