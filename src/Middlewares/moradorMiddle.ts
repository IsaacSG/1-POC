import { Request, Response, NextFunction  } from "express";
import moradorSchema from "../Schemas/moradorSchema.js";


export function validateMorador(req: Request, res: Response, next: NextFunction) {
    const morador = req.body;
    const validation = moradorSchema.validate(morador);

    if (validation.error) {
        console.log(validation.error);
        return res.status(400).send("Parametros incorretos")
    }

    next();
}