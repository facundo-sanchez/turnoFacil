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
exports.validateJWT = void 0;
const user_1 = __importDefault(require("../models/user"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const SECRET_OR_PRIVATEKEY = "4324SDFSDFDSFSDFASDASDASD23313DSA";
const validateJWT = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.header("Authorization");
    if (!token) {
        return res.status(401).json({
            msg: "Not token",
        });
    }
    try {
        jsonwebtoken_1.default.verify(token, SECRET_OR_PRIVATEKEY, (err, decoded) => __awaiter(void 0, void 0, void 0, function* () {
            if (err) {
                res.status(401).json({
                    msg: "Token invalid",
                });
            }
            else {
                const userAuth = yield user_1.default.findByPk(decoded.id, {
                    attributes: ["name", "email", "role"],
                });
                if (userAuth) {
                    req.token = userAuth;
                    next();
                }
                else {
                    return res.status(401).json({
                        msg: "User not available",
                    });
                }
            }
        }));
    }
    catch (e) {
        return res.status(401).json({
            msg: "Token error",
        });
    }
});
exports.validateJWT = validateJWT;
//# sourceMappingURL=validateJWT.js.map