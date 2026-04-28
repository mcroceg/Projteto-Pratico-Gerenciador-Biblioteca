import { biblioteca, type Livro } from './index.js';

export function calcularEstatisticas(biblioteca: Livro[]): void {
    const totalLivros = biblioteca.length;
    const livrosLidos = biblioteca.filter(livro => livro.lido).length;
    const livrosNaoLidos = totalLivros - livrosLidos;
    const mediaAvaliacoes = livrosLidos > 0 ? biblioteca.reduce((soma, livro) => soma + (livro.avaliacao || 0), 0) / livrosLidos : 0;

    console.log(`Total de livros: ${totalLivros}`);
    console.log(`Livros lidos: ${livrosLidos}`);
    console.log(`Livros não lidos: ${livrosNaoLidos}`);
    console.log(`Média das avaliações: ${mediaAvaliacoes.toFixed(2)}`);}