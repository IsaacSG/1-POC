import joi from "joi";
var moradorSchema = joi.object({
    nome: joi.string().required,
    telefone: joi.string().min(10).max(11).required(),
    quarto: joi.number().required()
});
export default moradorSchema;
