const estudantes = require ('./estudantesJson.json');

function procurarPorPropriedade(lista, propriedade){
    return lista.filter((estudantes) => {
        return !estudantes.endereco.hasOwnProperty(propriedade);
    })
}

const listaEndereçosIncompletos = procurarPorPropriedade (estudantes, 'cep');
console.log(listaEndereçosIncompletos);