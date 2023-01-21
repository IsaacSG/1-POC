export type MoradorEntity = {
    id: number,
    nome: string,
    telefone: string,
    quarto: number
}

export type Morador = Omit<MoradorEntity, "id">