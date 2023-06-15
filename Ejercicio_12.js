/*Calcular promedio de strings: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función: */

var ac = 0;
var ac1 = 0;
var size = 0;

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

const len = mixedElements.length;
function averageWord(param) {
    
    for (const elemento of param ){
        if (Number.isInteger(elemento)){
            ac += elemento;
            
         }else {
            size = elemento.length;
            ac1 += size;
            
         }
    }
}

averageWord(mixedElements);
console.log("Suma de los valores numericos = " + ac + " " + " Suma de los caracteres string =  "  + ac1);


