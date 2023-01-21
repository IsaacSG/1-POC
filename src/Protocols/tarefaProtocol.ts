export type TarefaEntity = {
    id: number,
    nome: string,
    descricao: string,
    dia: Date,
    responsavel: string,
    status: boolean
}

export type Tarefa = Omit<TarefaEntity, "id">