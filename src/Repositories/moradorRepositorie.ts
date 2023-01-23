import { QueryResult } from "pg";
import connection from "../DB/pg.js";
import { Morador } from "../Protocols/moradorProtocol.js";

export async function postMorador(newMorador: Morador):Promise<QueryResult> {
    const body = newMorador;

    try{
        const novoMorador = await connection.query(`
        INSERT 
        INTO morador (nome, telefone, quarto)
        VALUES($1, $2, $3)
        `, [body.nome, body.telefone, body.quarto]);

        return novoMorador;
    }
    catch(error){
        console.log(error);
    }
}

export async function getMoradores():Promise<QueryResult<Morador>> {
    
    try{
        return await connection.query(`
        SELECT *
        FROM morador`);

    }
    catch(error){
        console.log(error);
    }
}

export async function deleteMorador(id) {

    try{
        const exluir = await connection.query(`
        DELETE
        FROM morador
        WHERE morador.id = $1
        `, [id]);

    }
    catch(error){
        console.log(error);
    }
}