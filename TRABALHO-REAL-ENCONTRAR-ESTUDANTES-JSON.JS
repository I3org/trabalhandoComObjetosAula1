const estudantes = require ('./estudantesJson.json');

// function buscaInformação (lista , chave , valor) {
//     return lista.find((estudante) => estudante[chave] === valor );
// }
// METODO ATUAL NÃO CONSEGUIRIA PROCURAR DENTRO DE ARRAYS INTERNOS AOS OBJETOS

function buscaInformação (lista , chave , valor) {
    return lista.find((estudante) => estudante[chave].includes(valor));
}
//METODO EMPREGADO CONTEMPLA ARRYS INTERNO AOS OBJETOS

const estudanteEncontrado = buscaInformação (estudantes, 'nome' , 'Izaak');
const telefoneEncontrado = buscaInformação (estudantes, 'telefone' , '51993301028');
 
console.log(estudanteEncontrado);
console.log(telefoneEncontrado);