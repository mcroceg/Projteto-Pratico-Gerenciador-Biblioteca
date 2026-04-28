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

// --- IMPORTAÇÕES ---
import { exibirBiblioteca, buscarPorTitulo, listarPorAutor, listarLidos, listarPendentes, marcarComoLido } from './consulta-exibição.js';
import { adicionarLivro, removerLivro } from './cadastro-remoção.js';
import { exibirRelatorioEstatisticas } from './estatística.js';
import { exibirPorDecada } from './classificação.js';


async function demonstracaoFinal() {
    console.log("\n" + "=".repeat(40));
    console.log("   SISTEMA DE GERENCIAMENTO DE BIBLIOTECA   ");
    console.log("=".repeat(40));

    // 1. Estado Inicial
    exibirBiblioteca(biblioteca);

    // 2. Cadastro de novos títulos (Validação Etapa 3)
    console.log("\n CADASTRO");
    const hobbit: Livro = { titulo: "O Hobbit", autor: "J.R.R. Tolkien", ano: 1937, classificacao: "Fantasia", paginas: 310, lido: false, avaliacao: 0 };
    const rings: Livro = { titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", ano: 1954, classificacao: "Fantasia", paginas: 1200, lido: false, avaliacao: 0 };
    
    adicionarLivro(biblioteca, hobbit);
    adicionarLivro(biblioteca, rings);

    // 3. Atualização de Status (Etapa 5)
    console.log("\n MARCAR COMO LIDO");
    const livroParaMarcar = biblioteca[biblioteca.length - 2];

    if (livroParaMarcar) {
        marcarComoLido(livroParaMarcar, 5);
    } else {
        console.log(" Erro: Não há livros suficientes para marcar como lido.");
    }

    // 4. Remoção (Etapa 3)
    console.log("\n REMOÇÃO");
    removerLivro(biblioteca, 0); // Removendo o primeiro livro original

    // 5. Buscas e Filtros (Etapa 4 e 5)
    console.log("\n" + "-".repeat(20));
    buscarPorTitulo(biblioteca, "Clean");
    listarPorAutor(biblioteca, "J.R.R. Tolkien");
    
    listarLidos(biblioteca);
    listarPendentes(biblioteca);

    // 6. Relatórios Finais (Etapa 6 e 7)
    console.log("\n" + "=".repeat(40));
    exibirRelatorioEstatisticas(biblioteca);
    exibirPorDecada(biblioteca);
    console.log("\n" + "=".repeat(40));
    console.log("       FIM DA DEMONSTRAÇÃO FINAL       ");
    console.log("=".repeat(40));
}

// Executar a demo
demonstracaoFinal();