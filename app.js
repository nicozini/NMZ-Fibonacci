// Main app Serie Fibonacci

const operations = require('./operations');

let cantidad = process.argv[2];

operations.crearEscribirSerie(cantidad)
    .then(mensaje => console.log(mensaje))
    .catch(error => console.log(error));

console.log(process.argv);