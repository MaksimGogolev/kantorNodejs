var phrases = require('./ru');
function User(name) {
    this.name=name;
}

User.prototype.hello = function (who) {
    console.log(phrases.Hey +", " + who.name);
};

console.log("user.js is required");

module.exports = User;