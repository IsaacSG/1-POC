import joi from "joi";
var tarefaSchema = joi.object({
    nome: joi.string().required(),
    descricao: joi.string().allow(""),
    dia: joi.date().required,
    responsavel: joi.string().required(),
    status: joi.boolean().allow(false)
});
export default tarefaSchema;
