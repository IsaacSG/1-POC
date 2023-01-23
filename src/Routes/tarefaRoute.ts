import { Router } from "express";
import { newTarefa, findTarefas, finalizarTarefa, deletarTarefa } from "../Controllers/tarefasController.js";
import { validateTarefa } from "../Middlewares/tarefaMiddle.js";

const router = Router();

router.get("/tarefas", findTarefas);
router.post("/tarefas", validateTarefa, newTarefa);
router.put("/tarefas/:id", finalizarTarefa);
router.delete("/tarefas/:id", deletarTarefa);

export default router;