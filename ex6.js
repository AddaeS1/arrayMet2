const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
];

function ateOito(cidade){
    return cidade.length <= 8;
};

let untilOito = cidades.filter(ateOito);
console.log(untilOito);