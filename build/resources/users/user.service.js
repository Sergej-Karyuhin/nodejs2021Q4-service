"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserByLogin = exports.deleteUser = exports.update = exports.save = exports.getUser = exports.getAll = void 0;
var usersRepo = __importStar(require("./user.memory.repository"));
var getAll = function () { return usersRepo.getAll(); };
exports.getAll = getAll;
var getUser = function (id) { return usersRepo.getById(id); };
exports.getUser = getUser;
var save = function (name, login, password) {
    return usersRepo.save(name, login, password);
};
exports.save = save;
var update = function (id, name, login, password) { return usersRepo.update(id, name, login, password); };
exports.update = update;
var deleteUser = function (id) { return usersRepo.deleteUser(id); };
exports.deleteUser = deleteUser;
var getUserByLogin = function (login) { return usersRepo.getUserByLogin(login); };
exports.getUserByLogin = getUserByLogin;
