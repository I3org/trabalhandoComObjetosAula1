const estudantes = require('./estudantesJson.json');

function ordena(lista, propriedade) {
    return lista.sort((a, b) => {
    if (a[propriedade] < b[propriedade]) return -1;
    if (a[propriedade] > b[propriedade]) return 1;
    return 0;
    })
} 

const listaOrdenada = ordena(estudantes, 'email');
console.log(listaOrdenada);
