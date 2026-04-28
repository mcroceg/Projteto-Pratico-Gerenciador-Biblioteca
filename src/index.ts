
interface Livro {
  titulo: string;
  autor: string;
  ano: number;
  paginas: number;
  lido: boolean;
  avaliacao: number;
}

const livros: Livro[] = [
  {
    titulo: "O Hobit",
    autor: "J.R.R. Tolkien",
    ano: 1937,
    paginas: 310,
    lido: true,
    avaliacao: 4.5,}
,{
    titulo: "Clean Code",
    autor: "Robert C. Martin",
    ano: 2008,
    paginas: 464,
    lido: false,
    avaliacao: 0,},
{
    titulo: "1984",
    autor: "George Orwell",
    ano: 1949,
    paginas: 328,
    lido: true,
    avaliacao: 4.0,},
{
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    ano: 1899,
    paginas: 256,
    lido: false,
    avaliacao: 0,},
];
