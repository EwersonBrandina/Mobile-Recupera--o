import { Guid } from "guid-typescript";

export interface Produto {
    id: Guid
    nome: string
    valor: number
    quantidade: number
}