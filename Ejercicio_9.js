/*Buscar la palabra más larga Completa la función que tomando un array de strings como argumento devuelva el más largo, en
caso de que dos strings tenga la misma longitud deberá devolver el primero.
*/
const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

var k;
var text;
var len;
var size;
var aux = " ";

len = avengers.length;

function findLongestWord(param) {
    size = param.length;
    return size;
}

for(k = 1;k < len;k++){
    text = avengers[k];
    findLongestWord(text);
    if(size > aux.length){
        aux = text;
        } 
}

console.log(aux);

