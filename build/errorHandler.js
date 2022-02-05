"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var constants_1 = require("./common/constants");
process.on('unhandledRejection', function (reason) {
    (0, fs_1.writeFileSync)("".concat(constants_1.LOG_PATH, "error.log"), "\nUnhandledRejection: ".concat(reason.message), {
        flag: 'a',
    });
    console.error("UnhandledRejection: ".concat(reason.message));
});
process.on('uncaughtException', function (error) {
    (0, fs_1.writeFileSync)("".concat(constants_1.LOG_PATH, "error.log"), "\nUncaughtException: ".concat(error.message), {
        flag: 'a',
    });
    console.error("UncaughtException: ".concat(error.message));
    process.exit(1);
});
