const nomes = [
  "Maria",
  "João",
  "José",
  "Antonio",
  "Beatriz",
  "Camila",
  "amanda",
];

let nomesA = nomes.filter((value) => { if(value[0] === 'j' || value[0] === 'J') return value});
console.log(nomesA);