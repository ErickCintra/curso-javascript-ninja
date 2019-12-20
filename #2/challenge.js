//#1
function soma(x, y) {
	return x + y;
}
//#2
var soma = soma(2, 3);
//#3
5
//#4
var newvar;
//#5
function addvalue() {
	newvar = 20;
	return 'O valor da variável agora é ' + newvar;
};
//#6
addvalue();
//#7
// "O valor da variável agora é 20"
//#8
function calc(x, y, z) {
	if ( x == null || y == null || z == null) {
		return 'Preencha todos os valores corretamente!';
	} else {
		return x * y * z + 2;
	}
};
//#9
calc(2,2);
//#10
// 'Preencha todos os valores corretamente!'
//#11
calc(2,2,2);
//#12
10
//#13
function newFunction(x, y, z) {
	if ( x != null && y == null && z == null ) {
		return +x;
	} else if ( x != null && y != null && z == null ) {
		return x + y;
	} else if ( x != null && y != null && z != null ) {
		return x + y / z;
	} else if ( x == null && y == null && z == null ) {
		return false;
	} else {
		return null;
	}
}
//#14
newFunction(); //false
newFunction(2); //2
newFunction(2,2) //4
newFunction(2,2,2) //3 