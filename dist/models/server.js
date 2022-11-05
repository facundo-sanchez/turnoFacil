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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
// DB
const connection_db_1 = __importDefault(require("../db/connection.db"));
// Routes
const auth_routes_1 = __importDefault(require("../routes/auth.routes"));
const turns_routes_1 = __importDefault(require("../routes/turns.routes"));
const user_routes_1 = __importDefault(require("../routes/user.routes"));
class Server {
    constructor() {
        this.paths = {
            user: "/api/user",
            auth: "/api/auth",
            turns: '/api/turns'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || "8000";
        // this.dbConnection();
        this.middlewares();
        this.routes();
    }
    dbConnection() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_db_1.default.authenticate();
                console.log("database online");
            }
            catch (error) {
                throw new Error(error);
            }
        });
    }
    middlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.static("public"));
    }
    routes() {
        this.app.use(this.paths.user, user_routes_1.default);
        this.app.use(this.paths.auth, auth_routes_1.default);
        this.app.use(this.paths.turns, turns_routes_1.default);
    }
    listen() {
        this.app.listen(this.port, () => console.log(`Server enabled in the port ${this.port}`));
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map