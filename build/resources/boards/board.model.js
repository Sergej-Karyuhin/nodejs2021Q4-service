"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
var column_model_1 = __importDefault(require("./column.model"));
var Board = /** @class */ (function () {
    function Board(_a) {
        var _this = this;
        var title = _a.title, columns = _a.columns;
        this.id = (0, uuid_1.v4)();
        this.title = title;
        this.columns = [];
        columns.forEach(function (col) {
            _this.columns.push(new column_model_1.default({ title: col.title, order: col.order }));
        });
    }
    return Board;
}());
exports.default = Board;
