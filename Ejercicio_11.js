/*Calcular un promedio es una tarea extremadamente común. Puedes usar este array para probar tu función: */

var pro = 0;
var len = 0;
var ac = 0;

const numbers = [12, 21, 38, 5, 45, 37, 6];
len = numbers.length;
function promedio(param) {
    for (const num of param) {
        ac += num; 
        pro = ac/len;   
    }
}

promedio(numbers);
console.log(pro);

