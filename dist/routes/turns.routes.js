"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const turns_controller_1 = require("../controllers/turns.controller");
const router = (0, express_1.Router)();
router.post("/", [], turns_controller_1.postTurns);
router.get("/", [], turns_controller_1.getListTurns);
router.get("/:id", [], turns_controller_1.getTurnsID);
router.put("/:id", [], turns_controller_1.updateTurnsID);
router.delete("/:id", [], turns_controller_1.deleteTurns);
exports.default = router;
//# sourceMappingURL=turns.routes.js.map