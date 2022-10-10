import Tema from './Tema'

interface Postagem{
    id: number;
    titulo: string;
    texto: string;
    tema?:Tema| null
    data: Date
}

export default Postagem;