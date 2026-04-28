//  Definição do Molde
export interface Livro {
    titulo: string;
    autor: string;
    ano: number;
    classificacao: string;
    paginas: number;
    lido: boolean;
    avaliacao: number;
}

// Criação de um Array Único
export const biblioteca: Livro[] = [
    {titulo: "bleach", autor: "Tite Kubo", ano: 2001, classificacao: "Manga", paginas: 74 * 210, lido: true, avaliacao: 4.5 },
    {titulo: "one piece", autor: "Eiichiro Oda", ano: 1997, classificacao: "Manga", paginas: 1050 * 210, lido: false, avaliacao: 4.8 },
    {titulo: "naruto", autor: "Masashi Kishimoto", ano: 1999, classificacao: "Manga", paginas: 72 * 210, lido: true, avaliacao: 4.7 },
    {titulo: "tokyo ghoul", autor: "Sui Ishida", ano: 2011, classificacao: "Manga", paginas: 14 * 210, lido: false, avaliacao: 4.6 },
    { titulo: "berserk", autor: "Kentaro Miura", ano: 1990, classificacao: "Manga", paginas: 41 * 210, lido: false, avaliacao: 4.9 },
    { titulo: "jojos Bizarre Adventure steel ball run", autor: "Hirohiko Araki", ano: 2004, classificacao: "Manga", paginas: 24 * 300, lido: false, avaliacao: 4.9 },
    {titulo: "magnus chase e a espada do verão", autor: "Rick Riordan", ano: 2015, classificacao: "Fantasia", paginas: 400, lido: true, avaliacao: 4.5 },
    { titulo: "Clean Code", autor: "Robert C. Martin", ano: 2008, classificacao: "Programação", paginas: 464, lido: false, avaliacao: 5.0 },
    { titulo: "1984", autor: "George Orwell", ano: 1949, classificacao: "Ficção Científica", paginas: 328, lido: true, avaliacao: 4.0 },
    { titulo: "Dom Casmurro", autor: "Machado de Assis", ano: 1899, classificacao: "Romance", paginas: 256, lido: false, avaliacao: 3.5 },
    { titulo: "O Nome do Vento", autor: "Patrick Rothfuss", ano: 2007, classificacao: "Fantasia", paginas: 662, lido: true, avaliacao: 4.8 }
];

console.log("Biblioteca carregada com sucesso!");
console.table(biblioteca);

// importações para execução das funções
import { exibirBiblioteca } from './consulta-exibição.js';


// Executa as funções na ordem do exemplo
exibirBiblioteca(biblioteca);
