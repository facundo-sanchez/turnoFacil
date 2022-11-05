import { authUser } from "../controllers/auth.controller";
import { Router } from "express";

const router = Router();

router.post("/login", [], authUser);

export default router;
