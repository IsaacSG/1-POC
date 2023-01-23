import { Request, Response, NextFunction  } from "express";
import { Morador } from "../Protocols/moradorProtocol.js";
import moradorSchema from "../Schemas/moradorSchema.js";


export function validateMorador(req: Request, res: Response, next: NextFunction) {
    const morador = req.body as Morador;
    console.log(morador.nome,morador.quarto,morador.telefone);
    const validation = moradorSchema.validate(morador);

    if (validation.error) {
        console.log(validation.error.message);
        console.log(morador);
        return res.status(400).send("Parametros incorretos")
    }

    next();
}