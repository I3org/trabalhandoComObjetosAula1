const estudante = {
    nome: 'Guilherme',
    idade: 27,
    dataDeNascimento : '04/08/1996',
    cpf: '472.569.598-00',
    endereço : 'R. Helio Manzoni',
};
console.log(estudante);

//tipos de notação para  acessar  um  objeto

//Exemplo 1 - notação de ponto

console.log(estudante.nome);
console.log(estudante.endereço);

//Exemplo 2 - notação de chave

console.log(estudante['dataDeNascimento']);
console.log(estudante['idade']);  

//função simples para  chamar informações ainda desconhecidas de um objeto

// function exibeInfoDoObnjeto(Objeto, InformaçãoASerAcessada) {
//     return Objeto[InformaçãoASerAcessada];
// }


function exibeInfoEstudante(objEstudante, infoEstudante) {
    return objEstudante[infoEstudante];
}

console.log(exibeInfoEstudante(estudante, 'cpf'));
