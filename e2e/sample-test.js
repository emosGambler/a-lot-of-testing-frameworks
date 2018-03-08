var helper = require('./../utils/helper');

var NUMBER_OF_TESTS = 2;

casper.test.begin('Testing CasperJS page', NUMBER_OF_TESTS, function suite(test) {
    casper.start('http://casperjs.org/', function() {
        var randomName = 'screenshots/screenshot'.concat(helper.generateTimestamp()).concat('.png');
        helper.captureScreenshot(casper, randomName);
        test.assertTitle('CasperJS, a navigation scripting and testing utility for PhantomJS and SlimerJS', 'CasperJS title is wrong.');
    });
    
    casper.thenOpen('http://phantomjs.org', function() {
        var randomName = 'screenshots/screenshot'.concat(helper.generateTimestamp()).concat('.png');
        helper.captureScreenshot(casper, randomName);
        test.assertTitle('PhantomJS | PhantomJS', 'PhantomJS title is wrong.');
    });
    
    casper.run(function() {
        test.done();
    });
});