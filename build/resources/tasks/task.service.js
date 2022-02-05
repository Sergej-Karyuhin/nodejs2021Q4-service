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
exports.resetID = exports.deleteTaskByBoardID = exports.deleteTaskById = exports.update = exports.save = exports.getTask = exports.getAll = void 0;
var tasksRepo = __importStar(require("./task.memory.repository"));
var getAll = function () { return tasksRepo.getAll(); };
exports.getAll = getAll;
var getTask = function (id) { return tasksRepo.getById(id); };
exports.getTask = getTask;
var save = function (title, order, description, userId, boardId, columnId) {
    return tasksRepo.save(title, order, description, userId, boardId, columnId);
};
exports.save = save;
var update = function (id, title, order, description, userId, boardId, columnId) {
    return tasksRepo.update(id, title, order, description, userId, boardId, columnId);
};
exports.update = update;
var deleteTaskById = function (id) { return tasksRepo.deleteTaskById(id); };
exports.deleteTaskById = deleteTaskById;
var deleteTaskByBoardID = function (boardId) {
    return tasksRepo.deleteTaskByBoardID(boardId);
};
exports.deleteTaskByBoardID = deleteTaskByBoardID;
var resetID = function (userId) { return tasksRepo.resetID(userId); };
exports.resetID = resetID;
