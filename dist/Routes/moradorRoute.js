import { Router } from "express";
import { newMorador, findMoradores, delMorador } from "../Controllers/moradorController.js";
import { validateMorador } from "../Middlewares/moradorMiddle.js";
var router = Router();
router.get("/morador", findMoradores);
router.post("/morador", validateMorador, newMorador);
router["delete"]("/morador/:id", delMorador);
export default router;
