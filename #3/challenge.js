//#1
var myvar;
//#2
var pessoa = { 
  nome: 'Erick',
  sobrenome: 'Cintra',
  sexo: 'masculino',
  idade: 18,
  altura: 1.81,
  peso: 64,
  andando: false,
  caminhouQuantosMetros: 0
}
//#3
pessoa.fazerAniversario = function() {
    pessoa.idade++;
}
//#4
pessoa.andar = function(v) {
    pessoa.caminhouQuantosMetros += v;
    pessoa.andando = true;  
}
//#5
pessoa.parar = function() {
    pessoa.andando = false;
}
//#6
pessoa.nomeCompleto = function() {
	return 'Olá, meu nome é ' + pessoa.nome + ' ' + pessoa.sobrenome + '!';
} //'Olá, meu nome é Erick Cintra!'
//#7
pessoa.mostrarIdade = function() {
	return 'Olá, eu tenho ' + pessoa.idade + ' anos!';
} //'Olá, eu tenho 18 anos!'
//#8
pessoa.mostrarPeso = function() {
	return 'Olá, eu peso ' + pessoa.peso + ' Kg.';
} //'Olá, eu peso 64 Kg.'
//#9
pessoa.mostrarAltura = function() {
	return 'Minha altura é ' + pessoa.altura + ' m.';
} // //'Minha altura é 1.81 m.'
//#10
pessoa.fazerAniversario();
pessoa.fazerAniversario();
pessoa.fazerAniversario();
pessoa.idade; //'21 anos'
//#11
pessoa.andar(10);
pessoa.andar(2);
pessoa.andar(5);
//#12
pessoa.andando; //true
//#13
pessoa.parar();	
//#14
pessoa.andando; //false
//#15
pessoa.caminhouQuantosMetros; //17 m
//#16
pessoa.apresentacao = function() {
	if (pessoa.sexo != 'masculino') {
		return 'Olá, eu sou a ' + pessoa.nome + ' ' + pessoa.sobrenome + ', tenho ' + pessoa.idade + ' anos, ' + pessoa.altura + ', meu peso é ' + pessoa.peso + 'kg e, só hoje, eu ja caminhei ' + pessoa.caminhouQuantosMetros + ' metros!'
	} if ( pessoa.idade = 1) {
		return 'Olá, eu sou o ' + pessoa.nome + ' ' + pessoa.sobrenome + ', tenho ' + pessoa.idade + ' ano, ' + pessoa.altura + ', meu peso é ' + pessoa.peso + 'kg e, só hoje, eu ja caminhei ' + pessoa.caminhouQuantosMetros + ' metros!'
	} if ( pessoa.caminhouQuantosMetros = 1 ) {
		return 'Olá, eu sou o ' + pessoa.nome + ' ' + pessoa.sobrenome + ', tenho ' + pessoa.idade + ' anos, ' + pessoa.altura + ', meu peso é ' + pessoa.peso + 'kg e, só hoje, eu ja caminhei ' + pessoa.caminhouQuantosMetros + ' metro!'
	} else return 'Olá, eu sou o ' + pessoa.nome + ' ' + pessoa.sobrenome + ', tenho ' + pessoa.idade + ' anos, ' + pessoa.altura + ', meu peso é ' + pessoa.peso + 'kg e, só hoje, eu ja caminhei ' + pessoa.caminhouQuantosMetros + ' metros!'
}