var helper = require('./../utils/helper');

var NUMBER_OF_TESTS = 4;
var GOOGLE_URL = 'https://www.google.pl/';
var TITLE = 'Google';

casper.test.begin('Google Search page', NUMBER_OF_TESTS, function suite(test) {
    casper.start(GOOGLE_URL, function() {
        this.test.comment('should title be correct.');
        test.assertTitle(TITLE, 'Title is correct.');
    });
    
    casper.then(function() {
        this.test.comment('should url be correct.');
        test.assertUrlMatch('https://www.google.pl/');
    });

    casper.then(function() {
        this.test.comment('should search be present.');
        test.assertVisible('form[action="/search"]');
    });
    
    casper.then(function() {
        this.test.comment('should query be searched.');
        this.fill('form[action="/search"]', {
            'q': 'casperjs'
        }, false);
        helper.captureScreenshot(casper, 'Query is searched.');
        test.assertVisible('form[action="/search"]');
    });
    
    casper.run(function() {
        test.done();
    });
});