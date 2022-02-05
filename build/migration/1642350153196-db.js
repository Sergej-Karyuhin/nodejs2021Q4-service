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
exports.db1642350153196 = void 0;
var db1642350153196 = /** @class */ (function () {
    function db1642350153196() {
        this.name = 'db1642350153196';
    }
    db1642350153196.prototype.up = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("CREATE TABLE \"board\" (\"id\" uuid NOT NULL DEFAULT uuid_generate_v4(), \"title\" character varying(25) NOT NULL, \"columns\" json NOT NULL, CONSTRAINT \"PK_865a0f2e22c140d261b1df80eb1\" PRIMARY KEY (\"id\"))")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"column\" (\"id\" uuid NOT NULL DEFAULT uuid_generate_v4(), \"title\" character varying(25) NOT NULL, \"order\" integer NOT NULL, \"boardIdId\" uuid, CONSTRAINT \"PK_cee3c7ee3135537fb8f5df4422b\" PRIMARY KEY (\"id\"))")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"user\" (\"id\" uuid NOT NULL DEFAULT uuid_generate_v4(), \"name\" character varying(35) NOT NULL, \"login\" character varying(25) NOT NULL, \"password\" character varying NOT NULL, CONSTRAINT \"PK_cace4a159ff9f2512dd42373760\" PRIMARY KEY (\"id\"))")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("CREATE TABLE \"task\" (\"id\" uuid NOT NULL DEFAULT uuid_generate_v4(), \"title\" character varying(25) NOT NULL, \"order\" integer NOT NULL, \"description\" character varying(45) NOT NULL, \"userIdId\" uuid, \"boardIdId\" uuid, \"columnIdId\" uuid, CONSTRAINT \"PK_fb213f79ee45060ba925ecd576e\" PRIMARY KEY (\"id\"))")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"column\" ADD CONSTRAINT \"FK_6b4808fbdd613b62ab2c3a9782e\" FOREIGN KEY (\"boardIdId\") REFERENCES \"board\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"task\" ADD CONSTRAINT \"FK_29c593b244774c65824ae1df648\" FOREIGN KEY (\"userIdId\") REFERENCES \"user\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"task\" ADD CONSTRAINT \"FK_61a750180758aaf4a589ccefaa9\" FOREIGN KEY (\"boardIdId\") REFERENCES \"board\"(\"id\") ON DELETE CASCADE ON UPDATE NO ACTION")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"task\" ADD CONSTRAINT \"FK_4f196ca1ee5d10a97018d33a114\" FOREIGN KEY (\"columnIdId\") REFERENCES \"column\"(\"id\") ON DELETE NO ACTION ON UPDATE NO ACTION")];
                    case 8:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    db1642350153196.prototype.down = function (queryRunner) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, queryRunner.query("ALTER TABLE \"task\" DROP CONSTRAINT \"FK_4f196ca1ee5d10a97018d33a114\"")];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"task\" DROP CONSTRAINT \"FK_61a750180758aaf4a589ccefaa9\"")];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"task\" DROP CONSTRAINT \"FK_29c593b244774c65824ae1df648\"")];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("ALTER TABLE \"column\" DROP CONSTRAINT \"FK_6b4808fbdd613b62ab2c3a9782e\"")];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"task\"")];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"user\"")];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"column\"")];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.query("DROP TABLE \"board\"")];
                    case 8:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return db1642350153196;
}());
exports.db1642350153196 = db1642350153196;
