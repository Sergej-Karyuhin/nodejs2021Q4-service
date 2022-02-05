"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var uuid_1 = require("uuid");
var Column = /** @class */ (function () {
    function Column(_a) {
        var _b = _a === void 0 ? {} : _a, _c = _b.id, id = _c === void 0 ? (0, uuid_1.v4)() : _c, _d = _b.title, title = _d === void 0 ? 'title' : _d, _e = _b.order, order = _e === void 0 ? 0 : _e;
        this.id = id;
        this.title = title;
        this.order = order;
    }
    return Column;
}());
exports.default = Column;
