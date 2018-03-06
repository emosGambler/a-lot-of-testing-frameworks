window.casper = require('casper').create();

casper.start('https://www.google.pl/', function() { 
    this.echo(this.getTitle(), 'INFO');
});
casper.run();