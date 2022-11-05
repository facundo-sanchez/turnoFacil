import { Router } from "express";
import { deleteTurns, getListTurns, getTurnsID, postTurns, updateTurnsID } from "../controllers/turns.controller";

const router = Router();

router.post("/", [], postTurns);

router.get("/", [], getListTurns);

router.get("/:id", [], getTurnsID);

router.put("/:id", [], updateTurnsID);

router.delete("/:id", [], deleteTurns);


export default router;
