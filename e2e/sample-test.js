/*var casper = require('casper').create();

var urls = [];
var LINKS_SELECTORS = 'a';

function getUrls() {
    var links = document.querySelectorAll(LINKS_SELECTORS);
    return Array.prototype.map.call(links, function(e) {
        return e.getAttribute('href');
    });
};

casper.start('http://localhost:4200/', function() {
    this.echo(this.getTitle());
    this.waitForSelector(LINKS_SELECTORS);
});

casper.then(function() {
    urls = this.evaluate(getUrls);
    console.log('urls: ', urls)
});

casper.run(function() {
    this.echo(urls).exit();
});

*/
/*
var links = [];
var casper = require('casper').create();

function getLinks() {
    var links = document.querySelectorAll('a');
    return Array.prototype.map.call(links, function(e) {
        return e.getAttribute('href');
    });
}

casper.start('https://angular.io/', function() {
   // Wait for the page to be loaded
   //this.waitForSelector('a');
   casper.wait(5000, function() {
        this.echo('2');
    });
   casper.capture('screenshots/navigation.png');
});

casper.then(function() {
   // search for 'casperjs' from google form
   //this.fill('form[action="/search"]', { q: 'casperjs' }, true);
});

casper.then(function() {
    // aggregate results for the 'casperjs' search
    links = this.evaluate(getLinks);
    // now search for 'phantomjs' by filling the form again
    //this.fill('form[action="/search"]', { q: 'phantomjs' }, true);
});

casper.then(function() {
    // aggregate results for the 'phantomjs' search
    links = links.concat(this.evaluate(getLinks));
});

casper.run(function() {
    // echo results in some pretty fashion
    this.echo(links.length + ' links found:');
    this.echo(' - ' + links.join('\n - ')).exit();
});*/

// casper.test.begin(testTitle, numberOfTests, callback)

var casper = require('casper').create();

casper.start('http://casperjs.org/', function() {
    this.echo(this.getTitle());
});

casper.thenOpen('http://phantomjs.org', function() {
    this.echo(this.getTitle());
    casper.capture('screenshots/navigation.png');
});

casper.run();