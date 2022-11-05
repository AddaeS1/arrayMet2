const palavras = ["arroz", "feijão", "carne", "caju", "macarrão"]

function temAlcool(value, array){
  return array.some(e => e === value);
};

let verificaCerveja = temAlcool('cerveja', palavras);
let verificaVodka = temAlcool('vodka', palavras);

if(verificaVodka === true || verificaCerveja === true){
  console.log('revise sua lista, joão. possui bebida com venda proibida!')
}else{
  console.log('tudo certo, vamos as compras!')
};
