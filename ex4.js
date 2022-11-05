const numeros = [0, 122, 4, 6, 12, 7, 44]

function ePar(numero) {
    return numero %2 === 0;
};

if(numeros.every(ePar) === false){
    console.log('array inválido')
}else{
    console.log('array válido')
}

