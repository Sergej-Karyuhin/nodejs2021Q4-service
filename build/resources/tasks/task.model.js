"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
var Task = /** @class */ (function () {
    function Task(_a) {
        var _b = _a.id, id = _b === void 0 ? (0, uuid_1.v4)() : _b, title = _a.title, order = _a.order, description = _a.description, userId = _a.userId, boardId = _a.boardId, columnId = _a.columnId;
        this.id = id;
        this.title = title;
        this.order = order;
        this.description = description;
        this.userId = userId;
        this.boardId = boardId;
        this.columnId = columnId;
    }
    return Task;
}());
exports.default = Task;
