const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"];


let frutasEdit = valor => (valor[0].toUpperCase() + valor.slice(1).toLowerCase());
let frutasEdit2 = frutas.map(frutasEdit);

for(let index = 0;index < frutas.length; index++){
console.log(`${index}. ${frutasEdit2[index]}`);  
}
