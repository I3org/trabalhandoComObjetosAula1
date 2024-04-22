const estudante = {
    nome: 'Guilherme',
    idade: 27,
    dataDeNascimento : '04/08/1996',
    cpf: '472.569.598-00',
 endereço : [{
        rua: 'helio manzoni',
        numero: 46,
        complemento: 'apto 92',
        cep: '070-92070',
        cidade: 'guarulhos',
    }],
    pets : [ 'shiva' , 'melita' , 'miguel' , 'tulio'],
};

estudante.endereço.push({
    rua: 'Rua Dona Clotilde',
    numero: '71',
    complemento: ''
});

// const listaDeEndereçosComComplemento = estudante.endereço.filter ((endereço) => endereço.complemento);
  
// console.log(listaDeEndereçosComComplemento);

console.log(estudante.endereço[1].rua);

