import { biblioteca, type Livro } from './index.js';

// Função para adicionar com validação
export function adicionarLivro(biblioteca: Livro[], novoLivro: Livro): void {
    // Validação conforme a Etapa 3
    if (novoLivro.ano > 0 && novoLivro.paginas > 0) {
        biblioteca.push(novoLivro);
        console.log(` Sucesso: "${novoLivro.titulo}" adicionado.`);
    } else {
        console.log(` Erro ao cadastrar "${novoLivro.titulo}": Ano ou páginas inválidos.`);
    }
}

// Função para remover livro
export function removerLivro(biblioteca: Livro[], indice: number): void {
    if (indice >= 0 && indice < biblioteca.length) {
        const removido = biblioteca.splice(indice, 1);
        if (removido.length > 0 && removido[0]) {
            console.log(` Removido: "${removido[0].titulo}".`);
        }
    } else {
        console.log(" Erro: Índice de remoção inexistente.");
    }
}