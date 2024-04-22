// 1 - Crie um array de objetos JavaScript representando informações de livros. Cada objeto deve conter pelo menos as seguintes propriedades:

// id (number): identificador do livro.
// titulo (string): título do livro.
// autor (string): nome do autor.
// anoPublicacao (number): ano de publicação do livro.
// Crie uma função chamada encontrarLivroPorId que receba o id de um livro como parâmetro e retorne o objeto do livro correspondente. Se nenhum livro for encontrado, a função deve retornar null.

// Utilize a função para encontrar um livro com um id existente e imprima no console as informações do livro encontrado. Em seguida, utilize a função para encontrar um livro com um id inexistente e imprima no console uma mensagem indicando que o livro não foi encontrado.

// encontrarObjetoJson.js

// Array de objetos representando livros
const biblioteca = [
  { id: 1, titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", anoPublicacao: 1954 },
  { id: 2, titulo: "Dom Quixote", autor: "Miguel de Cervantes", anoPublicacao: 1605 },
  { id: 3, titulo: "1984", autor: "George Orwell", anoPublicacao: 1949 }
];

// Função para encontrar um livro por ID
function encontrarLivroPorId(id) {
  return biblioteca.find(livro => livro.id === id) || null;
}

// Encontra um livro com ID existente
const livroEncontrado1 = encontrarLivroPorId(2);
console.log("Livro Encontrado (ID 2):");
console.log(livroEncontrado1);

// Encontra um livro com ID inexistente
const livroEncontrado2 = encontrarLivroPorId(4);
console.log("\nLivro Encontrado (ID 4):");
console.log(livroEncontrado2)


//EXEMPLO 2



// 5 - Crie um array de objetos JavaScript representando informações fictícias de departamentos. Cada objeto deve conter pelo menos as seguintes propriedades:

// id (number): identificador do departamento.
// nome (string): nome do departamento.
// funcionarios (array): array de objetos representando funcionários do departamento.
// Crie uma função chamada encontrarFuncionarioPorId que recebe o id de um funcionário e retorna o objeto do funcionário correspondente em qualquer departamento.

// Utilize a função para encontrar um funcionário com um id existente e imprima no console as informações do funcionário encontrado. Em seguida, utilize a função para encontrar um funcionário com um id inexistente e imprima no console uma mensagem indicando que o funcionário não foi encontrado. 
// acessarObjetoAninhado.js

// Array de objetos representando departamentos
const departamentos = [
  {
      id: 1,
      nome: "Vendas",
      funcionarios: [
          { id: 101, nome: "Ana", cargo: "Vendedor" },
          { id: 102, nome: "Carlos", cargo: "Gerente de vendas" }
      ]
  },
  {
      id: 2,
      nome: "TI",
      funcionarios: [
          { id: 201, nome: "Maria", cargo: "Desenvolvedor" },
          { id: 202, nome: "João", cargo: "Analista de sistemas" }
      ]
  }
];

// Função para encontrar um funcionário por ID em qualquer departamento
function encontrarFuncionarioPorId(id) {
  for (const departamento of departamentos) {
      const funcionarioEncontrado = departamento.funcionarios.find(funcionario => funcionario.id === id);
      if (funcionarioEncontrado) {
          return funcionarioEncontrado;
      }
  }
  return null;
}

// Encontra um funcionário com ID existente e imprime no console
const funcionarioEncontrado1 = encontrarFuncionarioPorId(201);
console.log("Funcionário encontrado (ID 201):");
console.log(funcionarioEncontrado1);

// Encontra um funcionário com ID inexistente e imprime no console
const funcionarioEncontrado2 = encontrarFuncionarioPorId(103);
console.log("\nFuncionário encontrado (ID 103):");
console.log(funcionarioEncontrado2)
