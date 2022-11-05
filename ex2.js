const palavras = ["livro", "caneta", "sol", "carro", "orelha"];
let palavrasMaiores = palavras.filter(maiorQue5);

function maiorQue5(palavra){
    return palavra.length > 5
}

if(palavrasMaiores.length > 0){
    console.log('existe palavra inválida');
}else{
    console.log('array validado');
}


