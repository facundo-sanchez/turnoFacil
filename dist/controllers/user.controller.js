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
exports.DeleteUsuarios = exports.putUsuarios = exports.postUsuarios = exports.getUsuariosID = exports.getUsuarios = void 0;
// import { json } from "sequelize/types";
const user_1 = __importDefault(require("../models/user"));
const getUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usuarios = yield user_1.default.findAll();
        return res.json({
            usuarios,
        });
    }
    catch (error) {
        return res.status(500).json({
            ok: false,
            error,
        });
    }
});
exports.getUsuarios = getUsuarios;
const getUsuariosID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const usuario = yield user_1.default.findByPk(id);
        if (!usuario)
            return res.status(404).json({
                ok: false,
                msg: "User not found",
            });
        return res.json({
            usuario,
        });
    }
    catch (error) {
        return res.status(500).json({
            ok: false,
            error,
        });
    }
});
exports.getUsuariosID = getUsuariosID;
const postUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const readyEmail = yield user_1.default.findOne({
            where: {
                email: body.email,
            },
        });
        if (readyEmail)
            return res.status(400).json({
                ok: false,
                msg: "Email ready in use",
            });
        const user = yield user_1.default.create(body);
        return res.json({
            msg: "postUsuaios",
            user,
        });
    }
    catch (error) {
        return res.status(500).json({
            ok: false,
            error,
        });
    }
});
exports.postUsuarios = postUsuarios;
const putUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { body } = req;
        const { id } = req.params;
        const user = yield user_1.default.findByPk(id);
        if (!user)
            return res.status(404).json({
                ok: false,
                msg: "User not found",
            });
        yield user.update(body);
        return res.json({
            user,
        });
    }
    catch (error) {
        res.status(500).json({
            ok: false,
            error,
        });
    }
});
exports.putUsuarios = putUsuarios;
const DeleteUsuarios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield user_1.default.findByPk(id);
        if (!user)
            return res.status(404).json({
                ok: false,
                msg: "User not found",
            });
        // await user.destroy(); //eliminacion directa
        yield user.update({ status: 0 }); //eliminacion logica
        return res.json({ user });
    }
    catch (error) {
        return res.status(500).json({
            ok: false,
            error,
        });
    }
});
exports.DeleteUsuarios = DeleteUsuarios;
//# sourceMappingURL=user.controller.js.map