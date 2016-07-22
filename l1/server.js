var user = require('./user');

var gosha = new user.User("Гоша");
var john = new user.User("John");

gosha.hello(john);