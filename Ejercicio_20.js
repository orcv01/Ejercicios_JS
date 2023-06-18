/*Mixed For...of e includes: 
Usa un bucle for...of para recorrer todos los juguetes y elimina 
los que incluyan la palabra gato.
Recuerda que puedes usar la función .includes() para comprobarlo.
Puedes usar este array:*/

const toys = [
{id: 5, name: 'Buzz MyYear'},
{id: 11, name: 'Action Woman'},
{id: 23, name: 'Barbie Man'},
{id: 40, name: 'El gato con Guantes'},
{id: 40, name: 'El gato felix'}
]


for (const toy in toys) {
    if (toys.hasOwnProperty.call(toys, toy)) {
        const element = toys[toy];
        let valor = element.name;
        //console.log(valor.includes('gato'));

        if (valor.includes('gato')) {
            
            let ind = valor.indexOf('gato');
            // valor.splice(ind, 1);
            delete valor;
        }
        console.log(element);
    }
}
