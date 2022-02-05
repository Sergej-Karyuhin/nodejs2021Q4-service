"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./app"));
var envConfig_1 = __importDefault(require("./common/envConfig"));
var databaseConnect_1 = __importDefault(require("./services/databaseConnect"));
(0, databaseConnect_1.default)();
app_1.default.listen(envConfig_1.default.PORT, function () {
    return console.log("App is running on http://localhost:".concat(envConfig_1.default.PORT));
});
