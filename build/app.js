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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
var path_1 = __importDefault(require("path"));
var yamljs_1 = __importDefault(require("yamljs"));
var fs = __importStar(require("fs"));
var fs_1 = require("fs");
var stream_1 = require("stream");
var http_status_codes_1 = require("http-status-codes");
var user_router_1 = __importDefault(require("./resources/users/user.router"));
var board_router_1 = __importDefault(require("./resources/boards/board.router"));
var task_router_1 = __importDefault(require("./resources/tasks/task.router"));
var login_router_1 = __importDefault(require("./resources/login/login.router"));
var login_guard_1 = __importDefault(require("./resources/login/login.guard"));
require("./errorHandler");
var constants_1 = require("./common/constants");
var app = (0, express_1.default)();
var swaggerDocument = yamljs_1.default.load(path_1.default.join(__dirname, '../doc/api.yaml'));
app.use(express_1.default.json());
if (!fs.existsSync(constants_1.LOG_PATH)) {
    fs.mkdirSync(constants_1.LOG_PATH);
}
app.use('/doc', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerDocument));
app.use('/', function (req, res, next) {
    var method = req.method, url = req.url, body = req.body;
    if (req.originalUrl === '/') {
        res.send('Service is running!');
        return;
    }
    (0, stream_1.finished)(res, function () {
        var statusCode = res.statusCode; // prettier-ignore
        (0, fs_1.writeFileSync)("".concat(constants_1.LOG_PATH, "out.log"), "\n method: ".concat(method, " url: ").concat(url, " params: ").concat(JSON.stringify(req.params), " query: ").concat(JSON.stringify(req.query), " body: ").concat(JSON.stringify(body), " statusCode: ").concat(statusCode), { flag: 'a' }); // prettier-ignore
        console.log("method: ".concat(method, " url: ").concat(url, " params: ").concat(JSON.stringify(req.params), " query: ").concat(JSON.stringify(req.query), " body: ").concat(JSON.stringify(body), " statusCode: ").concat(statusCode)); // prettier-ignore
    });
    next();
});
app.use('/login', login_router_1.default);
app.use('/users', login_guard_1.default, user_router_1.default);
app.use('/boards', login_guard_1.default, board_router_1.default);
app.use('/boards', login_guard_1.default, task_router_1.default);
app.use(function (err, _req, res, next) {
    (0, fs_1.writeFileSync)("".concat(constants_1.LOG_PATH, "error.log"), "\nError: ".concat(err.message), { flag: 'a' });
    console.error("Error: ".concat(err.message));
    res
        .status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR)
        .json((0, http_status_codes_1.getReasonPhrase)(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR));
    next();
});
exports.default = app;
