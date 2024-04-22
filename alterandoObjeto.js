const estudante = {
    nome: 'Guilherme',
    idade: 27,
    dataDeNascimento : '04/08/1996',
    cpf: '472.569.598-00',
    endereço: 'R. Helio Manzoni'
}

//adicionar novas informações em um objeto
estudante.telefone = '11 99879-6545';

console.log(estudante.telefone);
console.log(estudante);

//alterando informação em um objeto
estudante.idade = 26;

console.log(estudante);

//criando um objeto vazio
const estudante2 = {};

//adicionando informação no objeto vazio
estudante2.nome = 'Ana Maria'

console.log(estudante2)

// removendo informação do objeto
delete estudante.endereço
console.log(estudante);

// ao  tentar  chamar uma  chave que não  existe mais o valor será indefinido 
console.log(estudante.endereço);