var user = require('./user');

function run() {
    var gosha = new user.User("Гоша");
    var john = new user.User("John");

    gosha.hello(john);
}

if (module.parent) {
    exports.run = run;
} else {
    run();
}