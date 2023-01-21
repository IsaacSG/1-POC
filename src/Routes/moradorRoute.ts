import { Router } from "express";
import { postMorador, getMoradores, deleteMorador } from "../Controllers/moradorController.js";
import { validateMorador } from "../Middlewares/moradorMiddle.js";

const router = Router();

router.get("/morador", getMoradores);
router.post("/morador", validateMorador, postMorador);
router.delete("/morador", deleteMorador);

export default router;