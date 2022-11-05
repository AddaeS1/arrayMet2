const numeros = [10, 987, -886, 0, 12, 199, -45, -67];

let numPositive = numeros.filter((value) => { if(value >= 1) return value});
console.log(numPositive);