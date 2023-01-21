import { Request, Response, NextFunction  } from "express";
import tarefaSchema from "../Schemas/tarefaSchema.js";


export function validateTarefa(req: Request, res: Response, next: NextFunction) {
    const tarefa = req.body;
    const validation = tarefaSchema.validate(tarefa);

    if (validation.error) {
        console.log(validation.error);
        return res.status(400).send("Parametros incorretos")
    }

    next();
}