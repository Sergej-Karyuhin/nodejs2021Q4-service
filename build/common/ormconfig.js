"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
var dotenv_1 = __importDefault(require("dotenv"));
var path_1 = __importDefault(require("path"));
dotenv_1.default.config({
    path: path_1.default.join(__dirname, '../../.env'),
});
exports.config = {
    type: 'postgres',
    synchronize: false,
    logging: false,
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    entities: [path_1.default.join(__dirname, '../entities/*{.ts,.js}')],
    migrations: [path_1.default.join(__dirname, '../migration/*{.ts,.js}')],
    cli: {
        migrationsDir: 'src/migration/',
        entitiesDir: 'src/entities/*{.ts,.js}',
    },
    migrationsRun: true,
};
