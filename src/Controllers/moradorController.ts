import { postMorador, getMoradores, deleteMorador } from "../Repositories/moradorRepositorie.js";
import { Request, Response } from "express";
import { Morador } from "../Protocols/moradorProtocol.js"

export function newMorador(req: Request, res: Response){
    const newMorador = req.body as Morador;
    postMorador(newMorador);
    res.status(201).send("Novo morador cadastrado");
}

export async function findMoradores(req: Request, res: Response){
    const find = await getMoradores();
    console.log(find);
    res.status(200).send(find.rows);
}

export function delMorador(req: Request, res: Response){
    const { id } = req.params;
    deleteMorador(id);
    res.status(200).send(`Morador de número ${id} deletado`);
}