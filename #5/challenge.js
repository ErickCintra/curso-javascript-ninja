//#1
var myvar = [1, "erick", true, null, 2];
//#2
function myFunction(arg) {
  return arg;
}
//#3
myFunction(myvar)[1];
//#4
function myFunction(arg, num) {
  return arg[num];
}
//#5
var v = [1, "erick", true, null, undefined];
//#6
function returnFunction(arg) {
  return arg;
}
returnFunction(v);
//#7
function book(n) {
  var book = {  
    'Romance Nazista': {
      quantidadeDePaginas: 300,
      autor: 'hitler',
      editora: 'nazista',
    }, 
    'RezendeBook': {
      quantidadeDePaginas: 200,
      autor: 'Rezende Evil',
      editora: 'saraiva',
    }, 
    'Luccas Neto': {
      quantidadeDePaginas: 150,
      autor: 'Luccas Neto',
      editora: 'submarino',
    } 
  };

  if (!n) {
    return livro;
  }
 
  return livro[n];
 
}
//#8
console.log('O livro tem ' + book('Luccas Neto').quantidadeDePaginas+' páginas.');
//#9
console.log('O autor do livro Romance Nazista é ' + book('Romance Nazista').autor);
//#10
console.log('O livro Romance Nazista foi publicado pela editora ' + book('Romance Nazista').editora + '.');

