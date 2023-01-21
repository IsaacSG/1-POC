import moradorSchema from "../Schemas/moradorSchema.js";
export function validateMorador(req, res, next) {
    var morador = req.body;
    var validation = moradorSchema.validate(morador);
    if (validation.error) {
        console.log(validation.error);
        return res.status(400).send("Parametros incorretos");
    }
    next();
}
