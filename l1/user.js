function User(name) {
    this.name=name;
}

User.prototype.hello = function (who) {
    console.log("Hey, " + who.name);
};

console.log("user.js is required");