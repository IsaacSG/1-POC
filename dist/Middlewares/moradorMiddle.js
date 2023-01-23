import moradorSchema from "../Schemas/moradorSchema.js";
export function validateMorador(req, res, next) {
    var morador = req.body;
    console.log(morador.nome, morador.quarto, morador.telefone);
    var validation = moradorSchema.validate(morador);
    if (validation.error) {
        console.log(validation.error.message);
        console.log(morador);
        return res.status(400).send("Parametros incorretos");
    }
    next();
}
