import { Request, Response} from "express";
import { QueryResult } from "pg";
import connection from "../DB/pg.js";

export async function postMorador(req: Request, res: Response) {
    const body = req.body;

    try{
        await connection.query(`
        INSERT 
        INTO morador (nome, telefone, quarto)
        VALUES($1, $2, $3)
        `, [body.nome, body.telefone, body.quarto]);

        res.status(201).send("Novo morador cadastrado");
    }
    catch(error){
        console.log(error);
    }
}

export async function getMoradores(req: Request, res: Response) {
    
    try{
        const {rows: moradores} = await connection.query(`
        SELECT *
        FROM morador`);

        res.status(200).send(moradores);
    }
    catch(error){
        console.log(error);
    }
}

export async function deleteMorador(req: Request, res: Response) {
    const { id } = req.params;

    try{
        const exluir = await connection.query(`
        DELETE
        FROM morador
        WHERE morador.id = $1
        `, [id]);

        res.status(200).send(`Morador de número ${id} deletado`);
    }
    catch(error){
        console.log(error);
    }
}