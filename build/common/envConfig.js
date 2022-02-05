"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv_1 = __importDefault(require("dotenv"));
var path_1 = __importDefault(require("path"));
dotenv_1.default.config({
    path: path_1.default.join(__dirname, '../../.env'),
});
exports.default = {
    PORT: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV,
    AUTH_MODE: process.env.AUTH_MODE === 'true',
    POSTGRES_USER: process.env.POSTGRES_USER,
    POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD,
    POSTGRES_DB: process.env.POSTGRES_DB,
    POSTGRES_PORT: process.env.POSTGRES_PORT,
    POSTGRES_HOST: process.env.POSTGRES_HOST,
};
