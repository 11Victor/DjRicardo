import { Eventos } from "./Eventos"

export class Usuario {
    public id: number
    public nome: string
    public usuario: string
    public senha: string
    public foto: string
    public eventos: Eventos[]
}