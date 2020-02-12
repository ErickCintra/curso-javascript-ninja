//#1
var isTruthy = function(v) {
  return !!v;
};
//#2
isTruthy(0);
isTruthy(-0);
isTruthy(undefined);
isTruthy(false);
isTruthy(NaN);
isTruthy(null);
isTruthy("");
isTruthy("");
//#3
isTruthy(1);
isTruthy("string");
isTruthy([]);
isTruthy({});
isTruthy(true);
isTruthy(function() {});
//#4
var carro = {
  marca: "ford",
  modelo: "uno",
  placa: "9h90i",
  ano: 2001,
  cor: "vermelho",
  quantasPortas: 8,
  assentos: 5,
  quantidadePessoas: 0
};
//#5
carro.mudarCor = function(c) {
  carro.cor = c;
};
//#6
carro.obterCor = function(c) {
  return carro.cor;
};
//#7
carro.obterModelo = function(c) {
  return carro.modelo;
};
//#8
carro.obterMarca = function(c) {
  return carro.marca;
};
//#9
carro.obterMarcaModelo = function() {
  return "Esse carro é um " + carro.marca + " " + carro.modelo;
};
carro.obterMarcaModelo(n);
//#10
carro.adicionarPessoas = function(n) {
  var totalPessoas = carro.quantidadePessoas + n;
  if (carro.quantidadePessoas === carro.assentos) {
    return "O carro já está lotado!";
  }
  if (totalPessoas > carro.assentos) {
    var quantasPessoasCabem = carro.assentos - carro.quantidadePessoas;
    var pluralOuSingular = quantasPessoasCabem === 1 ? " pessoa" : " pessoas";
    return "Só cabem mais" + quantasPessoasCabem + pluralOuSingular + "!";
  }
  carro.quantidadePessoas += n;
  return "Já temos" + carro.quantidadePessoas + " pessoas no carro!";
};
//#13
carro.cor; // vermelho
//#14
carro.mudarCor("verde");
//#15
carro.cor; // verde
//#16
carro.mudarCor("verde musgo");
//#17
carro.cor; // verde musgo
//#18
carro.obterMarcaModelo(); // Esse carro é um ford uno
//#19
carro.adicionarPessoas(2);
//#20
carro.adicionarPessoas(2); // Só cabem mais 3 pessoas
//#21
carro.adicionarPessoas(3); // Já temos 5 pessoas no carro!
//#22
carro.quantidadePessoas = 4;
//#23
carro.adicionarPessoas(10); // Só cabem mais 1 pessoa no carro
//#24
carro.quantidadePessoas; // 1 pessoa;
