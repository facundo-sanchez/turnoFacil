"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auth_controller_1 = require("../controllers/auth.controller");
const express_1 = require("express");
const router = (0, express_1.Router)();
router.post("/login", [], auth_controller_1.authUser);
exports.default = router;
//# sourceMappingURL=auth.routes.js.map