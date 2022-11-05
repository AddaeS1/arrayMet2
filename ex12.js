const pessoas = [
  {
    nome: "Antonio",
    idade: 30,
    profissao: "Jornalista",
  },
  {
    nome: "Maria",
    idade: 30,
    profissao: "Jornalista",
  },
  {
    nome: "Ana",
    idade: 21,
    profissao: "Programador",
  },
  {
    nome: "Beatriz",
    idade: 20,
    profissao: "Programador",
  },
  {
    nome: "José",
    idade: 32,
    profissao: "Jornalista",
  },
  {
    nome: "Marcos",
    idade: 30,
    profissao: "Programador",
  },
];

let maior20Programador = pessoas.filter((value) => { if(value.profissao === "Programador" && value.idade > 20) return value});
console.log(maior20Programador);

let maior30jornalista = pessoas.filter((value) => { if(value.profissao === "Jornalista" && value.idade > 30) return value});
console.log(maior30jornalista);

let menor29ProgrJorn = pessoas.filter((value) => { if(value.idade <= 29) return value});
console.log(menor29ProgrJorn);