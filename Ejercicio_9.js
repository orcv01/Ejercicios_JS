/*Buscar la palabra más larga Completa la función que tomando un array de strings como argumento devuelva el más largo, en
caso de que dos strings tenga la misma longitud deberá devolver el primero.
*/
const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

var i;
var k;
var text;
var text_1;
var len;
var size;
var size_1;
var size_2 = 0;
var aux;


len = avengers.length;

function findLongestWord(param) {
    size = param.length;
    return size;
}

for(k = 1;k < len;k++){
    text = avengers[k];
    findLongestWord(text);
    size_1 = size;

    for(i = 0;i < len;i++ - k){
        text_1 = avengers[i];
        findLongestWord(text_1);
        size_2 = size;
        
        if(size_1 >= size_2){
            aux = text_1;
            
        } 
    }
}

console.log(aux);

