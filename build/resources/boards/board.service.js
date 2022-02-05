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
exports.remove = exports.update = exports.save = exports.getBoard = exports.getAll = void 0;
var boardsRepo = __importStar(require("./board.memory.repository"));
var getAll = function () { return boardsRepo.getAll(); };
exports.getAll = getAll;
var getBoard = function (id) { return boardsRepo.getById(id); };
exports.getBoard = getBoard;
var save = function (title, columns) {
    return boardsRepo.save(title, columns);
};
exports.save = save;
var update = function (id, title, columns) {
    return boardsRepo.update(id, title, columns);
};
exports.update = update;
var remove = function (id) { return boardsRepo.remove(id); };
exports.remove = remove;
