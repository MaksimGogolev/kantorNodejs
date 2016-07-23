var log = require('logger')(module);
var db = require('db');
db.connect();
var User = require('./user');

function run() {
    var gosha = new User("Гоша");
    var john = new User("John");

    gosha.hello(john);
    log(db.getPhrase("Run successful!"));
}

if (module.parent) {
    exports.run = run;
} else {
    run();
}