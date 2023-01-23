import { Request, Response} from "express";
import { QueryResult } from "pg";
import connection from "../DB/pg.js";
import { Tarefa } from "../Protocols/tarefaProtocol.js";

export async function postTarefas(newTarefa: Tarefa):Promise<QueryResult> {
    const body = newTarefa

    try{
        const novaTarefa = await connection.query(`
        INSERT 
        INTO tarefa (nome, descricao, dia, responsavel, status)
        VALUES($1, $2, $3, $4, $5)
        `, [body.nome, body.descricao, body.dia, body.responsavel, body.status]);

        return novaTarefa;
    }
    catch(error){
        console.log(error);
    }
}

export async function getTarefas():Promise<QueryResult<Tarefa>> {
    
    try{
        return await connection.query(`
        SELECT *
        FROM tarefa`);

    }
    catch(error){
        console.log(error);
    }
}

export async function updateTarefa(id) {

    try{
        const uptade = await connection.query(`
        UPDATE tarefa 
        SET status= true
        WHERE tarefa.id = $1
        `, [id]);

    }
    catch(error){
        console.log(error);
    }
}

export async function deleteTarefa(id) {

    try{
        const exluir = await connection.query(`
        DELETE
        FROM tarefa
        WHERE tarefa.id = $1
        `, [id]);

    }
    catch(error){
        console.log(error);
    }
}