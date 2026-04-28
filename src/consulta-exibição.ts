import { biblioteca, type Livro } from './index.js';

export function exibirBiblioteca(biblioteca: Livro[]): void {
    console.log("\n=== MINHA BIBLIOTECA ===\n");

    biblioteca.forEach((livro, index) => {
        // Lógica de status: Se lido, mostra a nota. Se não, mostra PENDENTE.
        const status = livro.lido 
            ? `LIDO (${livro.avaliacao}/5)` 
            : "PENDENTE";

        // Formatação: 1. "Título" (Ano) - Autor - Paginas pag - Status
        console.log(
            `${index + 1}. "${livro.titulo}" (${livro.ano}) - ${livro.autor} - ${livro.paginas} pag - ${status}`
        );
    });
}

export function buscarPorTitulo(biblioteca: Livro[], termo: string): void {
    console.log(`\n Buscando por: "${termo}"...`);
    
    const resultados = biblioteca.filter(livro => 
        livro.titulo.toLowerCase().includes(termo.toLowerCase())
    );

    if (resultados.length > 0) {
        // Reaproveita a lógica de exibição para mostrar os resultados
        resultados.forEach(l => console.log(`   - Encontrado: ${l.titulo} (${l.autor})`));
    } else {
        console.log("    Nenhum livro encontrado com esse título.");
    }
}

// Requisito: listarPorAutor (usar filter + map)
export function listarPorAutor(biblioteca: Livro[], autor: string): void {
    console.log(`\n Obras de: ${autor}`);

    const titulos = biblioteca
        .filter(livro => livro.autor.toLowerCase() === autor.toLowerCase())
        .map(livro => livro.titulo);

    if (titulos.length > 0) {
        titulos.forEach(t => console.log(`   - ${t}`));
    } else {
        console.log("    Nenhum livro encontrado para este autor.");
    }
}