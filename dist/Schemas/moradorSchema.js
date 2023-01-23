import joi from "joi";
var moradorSchema = joi.object({
    nome: joi.string().min(1).max(20).required(),
    telefone: joi.string().min(10).max(11).required(),
    quarto: joi.number().required()
}).options({ abortEarly: false });
export default moradorSchema;
