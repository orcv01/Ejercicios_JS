/*Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función: */

var len = 0;
var unico = [];
var k = 0;
var i = 0;



const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
    ];


function removeDuplicates(param) {
    len = param.length;
    for(k = 1;k < len; k++){
        for(i=0;i<len-k;i++){
            
            if(param[k] == param[i]){
                console.log(param[k] + "  " + param[i]);
                let ind = param.indexOf(param[k])
                console.log(ind);
                //param.splice(i,1);
    
            }
        }
    }
}
    
        
    

removeDuplicates(duplicates);
// console.log(duplicates);



