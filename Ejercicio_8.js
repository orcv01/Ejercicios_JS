/* Completa la función que tomando dos números como argumento devuelva el más alto.*/

var num1;
var num2;

function sum(numberOne , numberTwo) {
    if(numberOne >= numberTwo){
        console.log("El número mas alto es = " + numberOne);
     }else{
        console.log("El número mas alto es = " + numberTwo);
        }
}

num1 = Math.floor(Math.random() * 10);
num2 = Math.floor(Math.random() * 50);

sum(num1, num2);


