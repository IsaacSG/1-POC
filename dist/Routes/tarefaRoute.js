import { Router } from "express";
import { postTarefas, getTarefas, deleteTarefa, updateTarefa } from "../Controllers/tarefasController.js";
import { validateTarefa } from "../Middlewares/tarefaMiddle.js";
var router = Router();
router.get("/tarefas", getTarefas);
router.post("/tarefas", validateTarefa, postTarefas);
router.put("/tarefa", updateTarefa);
router["delete"]("/tarefas", deleteTarefa);
export default router;
