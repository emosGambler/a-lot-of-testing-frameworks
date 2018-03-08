var helper = require('./../utils/helper');

var NUMBER_OF_TESTS = 2;
var GOOGLE_URL = 'https://www.google.pl/';
var TITLE = 'Google';

casper.test.begin('Google Search page', NUMBER_OF_TESTS, function suite(test) {
    casper.start(GOOGLE_URL, function() {
        var TEST_DESCRIPTION = 'should title be correct.';
        helper.captureScreenshot(casper, TEST_DESCRIPTION);
        test.assertTitle(TITLE, TEST_DESCRIPTION);
    });
    
    casper.then(function() {
        var TEST_DESCRIPTION = 'should search be present.';
        helper.captureScreenshot(casper, TEST_DESCRIPTION);
        test.assertExists('form[action="/search"]', TEST_DESCRIPTION);
    });
    
    casper.run(function() {
        test.done();
    });
});