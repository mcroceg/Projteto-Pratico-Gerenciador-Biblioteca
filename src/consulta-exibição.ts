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