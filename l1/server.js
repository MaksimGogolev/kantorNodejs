var User = require('./user');

function run() {
    var gosha = new User("Гоша");
    var john = new User("John");

    gosha.hello(john);
}

if (module.parent) {
    exports.run = run;
} else {
    run();
}