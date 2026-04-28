// 1. Definição do Molde
export interface Livro {
    titulo: string;
    autor: string;
    ano: number;
    paginas: number;
    lido: boolean;
    avaliacao: number;
}

// 2. Criação do Array Único (Substituindo os 6 arrays da imagem)
export const biblioteca: Livro[] = [
    { titulo: "O Hobbit", autor: "J.R.R. Tolkien", ano: 1937, paginas: 310, lido: true, avaliacao: 4.5 },
    { titulo: "Clean Code", autor: "Robert C. Martin", ano: 2008, paginas: 464, lido: false, avaliacao: 5.0 },
    { titulo: "1984", autor: "George Orwell", ano: 1949, paginas: 328, lido: true, avaliacao: 4.0 },
    { titulo: "Dom Casmurro", autor: "Machado de Assis", ano: 1899, paginas: 256, lido: false, avaliacao: 3.5 },
    { titulo: "O Nome do Vento", autor: "Patrick Rothfuss", ano: 2007, paginas: 662, lido: true, avaliacao: 4.8 }
];

console.log("Biblioteca carregada com sucesso!");
console.table(biblioteca);

// Importando a função que foi criada para listar os livros
import { listarLivros } from './consulta-exibição.js';

// Chamando a função e passando o seu array de livros
listarLivros(biblioteca);


//importando a função que foi criada para calcular as estatísticas
import { calcularEstatisticas } from './estatística.js';

//chamando a função e passando o array de livros para calcular as estatísticas
calcularEstatisticas(biblioteca);