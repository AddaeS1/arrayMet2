const enderecos = [
  { cep: 00111222, rua: "Rua dos Artistas" },
  { cep: 00111333, rua: "Rua Augusta" },
  { cep: 00222444, rua: "Avenida Paralela" },
  { cep: 11222333, rua: "Rua Carlos Gomes" },
];

let endereco = enderecos.find(function(endereco) {
  return endereco.cep === 00222444;
});

console.log(endereco.rua);