"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
var User = /** @class */ (function () {
    function User(_a) {
        var name = _a.name, login = _a.login, password = _a.password;
        this.id = (0, uuid_1.v4)();
        this.name = name;
        this.login = login;
        this.password = password;
    }
    User.toResponse = function (user) {
        var id = user.id, name = user.name, login = user.login;
        return { id: id, name: name, login: login };
    };
    return User;
}());
exports.default = User;
