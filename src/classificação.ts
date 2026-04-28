import { type Livro } from './index.js';

export function exibirPorDecada(biblioteca: Livro[]): void {
    console.log("\n=== CLASSIFICAÇÃO POR DÉCADA ===");

    // 1. Criar um array com todas as décadas presentes na biblioteca (sem repetir)
    // Math.floor(1937 / 10) * 10 vira 1930
    const decadasPresentes = [...new Set(
        biblioteca.map(livro => Math.floor(livro.ano / 10) * 10)
    )].sort((a, b) => a - b); // Ordena da década mais antiga para a mais nova

    // 2. Loop para percorrer cada década encontrada
    decadasPresentes.forEach(decada => {
        // Filtrar livros que pertencem a esta década específica
        const livrosDaDecada = biblioteca.filter(livro => 
            Math.floor(livro.ano / 10) * 10 === decada
        );

        // 3. Mapear apenas os títulos para facilitar a exibição
        const titulos = livrosDaDecada.map(l => l.titulo).join(", ");

        console.log(`${decada}s: ${titulos}`);
    });
}