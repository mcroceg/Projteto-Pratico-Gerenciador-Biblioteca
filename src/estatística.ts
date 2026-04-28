import { biblioteca, type Livro } from './index.js';

export function exibirRelatorioEstatisticas(biblioteca: Livro[]): void {
    const totalLivros = biblioteca.length;
    
    const livrosLidos = biblioteca.filter(l => l.lido);
    const totalLidos = livrosLidos.length;

    const porcentagemLidos = totalLivros > 0 ? (totalLidos / totalLivros) * 100 : 0;

    const mediaAvaliacoes = totalLidos > 0 
        ? livrosLidos.reduce((soma, l) => soma + l.avaliacao, 0) / totalLidos 
        : 0;

    const melhorLivro = totalLidos > 0 
        ? livrosLidos.reduce((anterior, atual) => (anterior.avaliacao > atual.avaliacao) ? anterior : atual)
        : null;

    const totalPaginasLidas = livrosLidos.reduce((soma, l) => soma + l.paginas, 0);

    console.log("\n=== ESTATISTICAS DA BIBLIOTECA ===");
    console.log(`Total de livros: ${totalLivros}`);
    console.log(`Livros lidos: ${totalLidos} (${porcentagemLidos.toFixed(2)}%)`);
    console.log(`Média das avaliações: ${mediaAvaliacoes.toFixed(2)}`);
    console.log(`Livro melhor avaliado: ${melhorLivro ? melhorLivro.titulo : "N/A"}`);
    console.log(`Total de páginas lidas: ${totalPaginasLidas}`);
}