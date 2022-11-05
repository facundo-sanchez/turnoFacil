"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTurns = exports.updateTurnsID = exports.postTurns = exports.getTurnsID = exports.getListTurns = void 0;
const getListTurns = (req, res) => {
    try {
        return res.status(200).json();
    }
    catch (error) {
        return res.status(500).json({ error });
    }
};
exports.getListTurns = getListTurns;
const getTurnsID = (req, res) => {
    try {
        return res.status(200).json();
    }
    catch (error) {
        return res.status(500).json({ error });
    }
};
exports.getTurnsID = getTurnsID;
const postTurns = (req, res) => {
    try {
        return res.status(200).json();
    }
    catch (error) {
        return res.status(500).json({ error });
    }
};
exports.postTurns = postTurns;
const updateTurnsID = (req, res) => {
    try {
        return res.status(200).json();
    }
    catch (error) {
        return res.status(500).json({ error });
    }
};
exports.updateTurnsID = updateTurnsID;
const deleteTurns = (req, res) => {
    try {
        return res.status(200).json();
    }
    catch (error) {
        return res.status(500).json({ error });
    }
};
exports.deleteTurns = deleteTurns;
//# sourceMappingURL=turns.controller.js.map