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
    }
    ,
    {
        rua: 'mandaguari',
        numero: 57,
        complemento: '',
        cep: '071-22110',
        cidade: 'guarulhos',
    }],
    pets : [ 'shiva' , 'melita' , 'miguel' , 'tulio'],
};

const chavesObjeto = Object.entries(estudante);
console.log(chavesObjeto);


