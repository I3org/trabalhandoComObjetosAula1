const estudante = require('./estudanteJson.json');

const stringEstudante = JSON.stringify(estudante);

const objEstudante = JSON.parse(stringEstudante);


console.log(objEstudante)
console.log(typeof objEstudante)
