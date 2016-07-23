var phrases;
exports.connect = function () {
    phrases = require('./ru');
};

exports.getPhrase = function (name) {
    if (!phrases[name]){
        throw new Error("This phrase not exist: " + name);
    }
    return phrases[name];
}