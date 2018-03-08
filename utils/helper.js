module.exports = {
    captureScreenshot: function(casper, path) {
        casper.capture(path);
    },
    generateTimestamp: function() {
        var today = new Date();

        var year = today.getFullYear().toString();
        var month = today.getMonth().toString();
        var day = today.getDate().toString();
        var hour = today.getHours().toString();
        var minutes = today.getMinutes().toString();
        var second = today.getSeconds().toString();
        var miliseconds = today.getMilliseconds().toString();

        var timestamp = year + month + day + hour + minutes + second + miliseconds;
        return timestamp;
    }
};