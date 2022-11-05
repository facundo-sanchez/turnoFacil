"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authUser = void 0;
const authUser = (req, res) => {
    try {
        return res.status(200).json({});
    }
    catch (error) {
        return res.status(500);
    }
};
exports.authUser = authUser;
//# sourceMappingURL=auth.controller.js.map