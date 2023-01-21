import tarefaSchema from "../Schemas/tarefaSchema.js";
export function validateTarefa(req, res, next) {
    var tarefa = req.body;
    var validation = tarefaSchema.validate(tarefa);
    if (validation.error) {
        console.log(validation.error);
        return res.status(400).send("Parametros incorretos");
    }
    next();
}
