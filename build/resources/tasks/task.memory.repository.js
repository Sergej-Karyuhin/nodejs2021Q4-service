"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetID = exports.deleteTaskByBoardID = exports.deleteTaskById = exports.update = exports.getById = exports.save = exports.getAll = void 0;
var typeorm_1 = require("typeorm");
var Task_1 = require("../../entities/Task");
var getAll = function () { return __awaiter(void 0, void 0, void 0, function () {
    var taskRepository, allTasks;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, typeorm_1.getRepository)(Task_1.TaskDB)];
            case 1:
                taskRepository = _a.sent();
                return [4 /*yield*/, taskRepository.find({ where: {}, loadRelationIds: true })];
            case 2:
                allTasks = _a.sent();
                return [2 /*return*/, allTasks];
        }
    });
}); };
exports.getAll = getAll;
var getById = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var taskRepository, findTask;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, typeorm_1.getRepository)(Task_1.TaskDB)];
            case 1:
                taskRepository = _a.sent();
                return [4 /*yield*/, taskRepository.findOne({ where: { id: id }, loadRelationIds: true })];
            case 2:
                findTask = _a.sent();
                return [2 /*return*/, findTask !== null && findTask !== void 0 ? findTask : null];
        }
    });
}); };
exports.getById = getById;
var save = function (title, order, description, userId, boardId, columnId) { return __awaiter(void 0, void 0, void 0, function () {
    var taskRepository, newTask;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, typeorm_1.getRepository)(Task_1.TaskDB)];
            case 1:
                taskRepository = _a.sent();
                return [4 /*yield*/, taskRepository.create({
                        title: title,
                        order: order,
                        description: description,
                        userId: userId,
                        boardId: boardId,
                        columnId: columnId,
                    })];
            case 2:
                newTask = _a.sent();
                return [4 /*yield*/, taskRepository.save(newTask)];
            case 3:
                _a.sent();
                return [2 /*return*/, newTask];
        }
    });
}); };
exports.save = save;
var update = function (id, title, order, description, userId, boardId, columnId) { return __awaiter(void 0, void 0, void 0, function () {
    var taskRepository, findTask, newTask;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, typeorm_1.getRepository)(Task_1.TaskDB)];
            case 1:
                taskRepository = _a.sent();
                return [4 /*yield*/, taskRepository.findOne(id)];
            case 2:
                findTask = _a.sent();
                if (findTask === undefined)
                    return [2 /*return*/, null];
                return [4 /*yield*/, taskRepository.update(id, {
                        title: title,
                        order: order,
                        description: description,
                        userId: userId,
                        boardId: boardId,
                        columnId: columnId,
                    })];
            case 3:
                _a.sent();
                return [4 /*yield*/, taskRepository.findOne(id)];
            case 4:
                newTask = _a.sent();
                return [2 /*return*/, newTask !== null && newTask !== void 0 ? newTask : null];
        }
    });
}); };
exports.update = update;
var deleteTaskById = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var taskRepository, deletedTask;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, typeorm_1.getRepository)(Task_1.TaskDB)];
            case 1:
                taskRepository = _a.sent();
                return [4 /*yield*/, taskRepository.delete(id)];
            case 2:
                deletedTask = _a.sent();
                if (deletedTask.affected) {
                    return [2 /*return*/, true];
                }
                return [2 /*return*/, false];
        }
    });
}); };
exports.deleteTaskById = deleteTaskById;
var deleteTaskByBoardID = function (boardId) { return __awaiter(void 0, void 0, void 0, function () {
    var taskRepository;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, typeorm_1.getRepository)(Task_1.TaskDB)];
            case 1:
                taskRepository = _a.sent();
                return [4 /*yield*/, taskRepository.delete({ boardId: boardId })];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.deleteTaskByBoardID = deleteTaskByBoardID;
var resetID = function (userId) { return __awaiter(void 0, void 0, void 0, function () {
    var taskRepository;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, typeorm_1.getRepository)(Task_1.TaskDB)];
            case 1:
                taskRepository = _a.sent();
                return [4 /*yield*/, taskRepository.update({ userId: userId }, { userId: null })];
            case 2:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); };
exports.resetID = resetID;
