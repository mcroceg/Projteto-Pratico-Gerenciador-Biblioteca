import { biblioteca, type Livro } from './index.js';

export function listarLivros(biblioteca: Livro[]): void {
    console.log("Consulta e Exibição dos Livros:");
    biblioteca.forEach((livro, index) => {
        console.log(`Livro ${index + 1}:`);
        console.log(`Título: ${livro.titulo}`);
        console.log(`Autor: ${livro.autor}`);
        console.log(`Ano: ${livro.ano}`);
        console.log(`Páginas: ${livro.paginas}`); 
        console.log(`Lido: ${livro.lido ? "Sim" : "Não"}`);

        if (livro.lido) {

            console.log(`Avaliação: ${livro.avaliacao}/5`);

        }
            else {console.log("avaliação 0/5 - Livro não lido")};
            
        console.log('-----------------------------');
    });}