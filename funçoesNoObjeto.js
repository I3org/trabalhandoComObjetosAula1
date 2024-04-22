const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript',
    bolsista: true,
    telefones: ['551199999998', '551199999993'],
    media: 7.5,
    //é estritamente necessario utilizar a declaração  completa de uma função sempre que utilizar dentro de  um  objeto
    estaAprovado: function(mediaBase) {
      return this.media >= mediaBase ? true : false
    }
};



console.log(estudante.estaAprovado(7));


  