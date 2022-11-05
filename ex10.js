const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44];

let pares = numeros.filter((value) => { if(value %2 ===0) return value});
console.log(pares);