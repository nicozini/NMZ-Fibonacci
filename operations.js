// Serie Fibonacci (el número siguiente es la suma de los dos números anteriores)
// - Ejemplo: 0 1 1 2 3 5 8 13 21 34
// - \n es salto de linea al escribir archivo
// - \t es tabulación al escribir archivo

const fs = require('fs');

// Desarrollo sin Promises
// module.exports = {
//     crearEscribirSerie: function() {
//         let fibo1 = 1;
//         let fibo2 = 1;
//         let data = "";
        
//         data += `${fibo1}\t`
        
//         for (let i = 2; i <=10 ; i++){
//             data += `${fibo2}\t`
//             fibo2 = fibo1 + fibo2
//             fibo1 = fibo2 - fibo1   
//         }
        
        
//         // Utilizando fs guardo la serie en un archivo
//         fs.writeFile('./fibonacci.txt', data, (err) => {
//             if (err) return 'Error al crear el archivo.';
//             else return 'El archivo fue creado con éxito!';
//         });
//     }
// }

// Desarrollo con Promises
module.exports = {
    crearEscribirSerie: function(cantidad) {
        return new Promise ((resolve, reject) => {
            let fibo1 = 1;
            let fibo2 = 1;
            let data = "";
            
            data += `${fibo1}\n`
            
            for (let i = 2; i <= cantidad ; i++){
                data += `${fibo2}\n`
                fibo2 = fibo1 + fibo2
                fibo1 = fibo2 - fibo1   
            }
            
            // Utilizando fs guardo la serie en un archivo
            fs.writeFile('./fibonacci.txt', data, (err) => {
                if (err) resolve('Error al crear el archivo.');
                else reject('El archivo fue creado con éxito!');
            });
        })
    }
}