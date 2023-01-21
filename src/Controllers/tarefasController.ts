import { Request, Response} from "express";
import connection from "../DB/pg.js";

export async function postTarefas(req: Request, res: Response) {
    const body = req.body;

    try{
        await connection.query(`
        INSERT 
        INTO tarefa (nome, descricao, dia, responsavel, status)
        VALUES($1, $2, $3, $4, $5)
        `, [body.nome, body.descricao, body.dia, body.responsavel, body.status]);

        res.status(201).send("Nova tarefa cadastrada");
    }
    catch(error){
        console.log(error);
    }
}

export async function getTarefas(req: Request, res: Response) {
    
    try{
        const {rows: tarefas} = await connection.query(`
        SELECT *
        FROM tarefa`);

        res.status(200).send(tarefas);
    }
    catch(error){
        console.log(error);
    }
}

export async function updateTarefa(req: Request, res: Response) {
    const { id } = req.params;

    try{
        const uptade = await connection.query(`
        UPDATE tarefa 
        SET status= true
        WHERE tarefa.id = $1
        `, [id]);

        res.status(200).send(`Tarefa de número ${id} concluida`);
    }
    catch(error){
        console.log(error);
    }
}

export async function deleteTarefa(req: Request, res: Response) {
    const { id } = req.params;

    try{
        const exluir = await connection.query(`
        DELETE
        FROM tarefa
        WHERE tarefa.id = $1
        `, [id]);

        res.status(200).send(`Tarefa de número ${id} deletada`);
    }
    catch(error){
        console.log(error);
    }
}