Projeto Prático: Gerenciador de Biblioteca Pessoal 

Nome do Aluno: Matheus Croce Garcia  
Curso: Analise e Desenvolvimento de Sistemas
Disciplina: Linguagem de Programação

 Descrição do Projeto:
Este é um sistema de gerenciamento de biblioteca desenvolvido em TypeScript.
O objetivo do projeto é aplicar conceitos fundamentais de lógica de programação
e manipulação de dados utilizando métodos modernos de arrays (filter, map, reduce), tipagem estática e organização modular de arquivos.

O sistema permite:
- Cadastrar e remover livros com validações de dados.
- Marcar livros como lidos e atribuir avaliações.
- Realizar buscas por título e filtrar por autor ou status de leitura.
- Gerar estatísticas detalhadas (porcentagem de leitura, médias e recordes).
- Classificar o acervo automaticamente por décadas.

Instruções de Execução

Para rodar o projeto localmente, siga os passos abaixo:

1. Instale as dependências:
   Certifique-se de ter o Node.js instalado e execute:
   npm install

 2. Seção de Scripts (Opcional, mas recomendado)
Muitas vezes, quem corrige o trabalho olha direto o package.json. No seu README, é bom listar o comando principal:
 Scripts Disponíveis
- npm run dev: Compila os arquivos TypeScript e executa a demonstração final imediatamente.
- npx tsc: Apenas compila os arquivos da pasta src para a pasta dist.

  3.Estrutura de Pastas

- src/index.ts: Arquivo principal com a demonstração.
- src/consulta-exibição.ts: Funções de busca e listagem.
- src/cadastro-remoção.ts: Funções de manipulação do array.
- src/estatística.ts: Lógica de cálculos matemáticos.
- src/classificacao.ts: Agrupamento por décadas.
