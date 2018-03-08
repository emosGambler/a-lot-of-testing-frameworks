var helper = require('./../utils/helper');
var casper = require('casper').create();

casper.start('http://casperjs.org/', function() {
    this.echo(this.getTitle());
});

casper.thenOpen('http://phantomjs.org', function() {
    this.echo(this.getTitle());
    helper.captureScreenshot(casper, 'screenshots/navigation.png');
});

casper.run();