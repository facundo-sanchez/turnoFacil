"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const router = (0, express_1.Router)();
router.get('/', user_controller_1.getUsuarios);
router.get('/:id', user_controller_1.getUsuariosID);
router.post('/', user_controller_1.postUsuarios);
router.put('/:id', user_controller_1.putUsuarios);
router.delete('/:id', user_controller_1.DeleteUsuarios);
exports.default = router;
//# sourceMappingURL=user.routes.js.map