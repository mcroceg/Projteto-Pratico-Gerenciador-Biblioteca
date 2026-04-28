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
import { adicionarLivro, removerLivro } from './cadastro-remoção.js';
import { buscarPorTitulo, listarPorAutor } from './consulta-exibição.js';
import { marcarComoLido, listarLidos, listarPendentes } from './consulta-exibição.js';
import { exibirRelatorioEstatisticas } from './estatística.js';
import { exibirPorDecada } from './classificação.js';

// Executa as funções na ordem do exemplo
exibirBiblioteca(biblioteca);

// criando 2 novos livros
const livroA: Livro = {
    titulo: "O Hobbit",
    autor: "J.R.R. Tolkien",
    ano: 1937,
    classificacao: "Fantasia",
    paginas: 310,
    lido: false,
    avaliacao: 4.8
};

const livroB: Livro = {
    titulo: "Bleach Vol. 1",
    autor: "Tite Kubo",
    ano: 2001,
    classificacao: "Manga",
    paginas: 192,
    lido: true,
    avaliacao: 4.5
};

// 2. Adicionar os livros e remover um livro existente
adicionarLivro(biblioteca, livroA);
adicionarLivro(biblioteca, livroB);

// Remove 1 livro (por exemplo, o primeiro da lista, índice 0)
removerLivro(biblioteca, 0);

// Exibir novamente para validar
exibirBiblioteca(biblioteca);

// busca por título (exemplo: "Code")
buscarPorTitulo(biblioteca, "Code");

// listar por autor (exemplo: "Kentaro Miura")
listarPorAutor(biblioteca, "Kentaro Miura");

// Pegamos um livro específico para marcar como lido
if (biblioteca[1]) {
    marcarComoLido(biblioteca[1], 5);
} else {
    console.log("\n Livro não encontrado para marcar como lido.");
}

//  Tentativa com nota inválida
if (biblioteca[1]) {
    marcarComoLido(biblioteca[1], 10);
} else {
    console.log("\n Livro não encontrado para marcar como lido.");
}

//  Verificando os filtros
listarLidos(biblioteca);
listarPendentes(biblioteca);

// Exibir relatório de estatísticas
exibirRelatorioEstatisticas(biblioteca);

// Exibir classificação por década
exibirPorDecada(biblioteca);