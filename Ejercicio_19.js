/*Probando For: Usa un bucle for para recorrer todos los destinos 
del array y elimina los elementos que tengan el id 11 y 40.
Imprime en un console log el array. Puedes usar este array:*/


const placesToTravel = [{id: 5, name: 'Japan'}, 
{id: 11, name: 'Venecia'}, 
{id: 23, name: 'Murcia'}, 
{id: 40, name: 'Santander'}, 
{id: 44, name: 'Malaga'}]

function index(params) {
    const indexOfObject = placesToTravel.findIndex(object => {
        return object.id === params;
        });
    
    //console.log(indexOfObject);
     placesToTravel.splice(indexOfObject, 1);
        
}

index(11);
index(40);
console.log(placesToTravel);

    