import { Router } from "express";
import { deleteUsuarios, getUsuarios, getUsuariosID, postUsuarios, putUsuarios } from "../controllers/user.controller";

const router = Router();

router.get('/', getUsuarios);


router.get('/:id', getUsuariosID);


router.post('/', postUsuarios);


router.put('/:id', putUsuarios);


router.delete('/:id', deleteUsuarios);



export default router;