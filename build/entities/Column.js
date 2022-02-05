"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnDB = void 0;
var typeorm_1 = require("typeorm");
var Board_1 = require("./Board");
var ColumnDB = /** @class */ (function () {
    function ColumnDB() {
    }
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
        __metadata("design:type", Object)
    ], ColumnDB.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)('varchar', { length: 25 }),
        __metadata("design:type", String)
    ], ColumnDB.prototype, "title", void 0);
    __decorate([
        (0, typeorm_1.Column)('integer'),
        __metadata("design:type", Number)
    ], ColumnDB.prototype, "order", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return Board_1.BoardDB; }, function (board) { return board.id; }),
        __metadata("design:type", String)
    ], ColumnDB.prototype, "boardId", void 0);
    ColumnDB = __decorate([
        (0, typeorm_1.Entity)({ name: 'column' })
    ], ColumnDB);
    return ColumnDB;
}());
exports.ColumnDB = ColumnDB;
