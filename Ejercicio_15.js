/*Contador de repeticiones: Crea una función que nos devuelva 
el número de veces que se repite cada una de las palabras que lo
conforma. Puedes usar este array para probar tu función:
 */

var aux = " ";
var ct = 1;

const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
    ];
    
    function repeatCounter(param) {
        param.sort();
        for (const item of param) {
            if (aux === item) {
                ct++;
                console.log(item + " " + ct);
                aux = " "; 
            }else {
                ct = 1;
            } 
            aux = item;
        }
    }
    
    repeatCounter(counterWords);

