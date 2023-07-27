const Vehiculo = require("./Vehiculo");

const camioneta = new Vehiculo(1991, "Honda", "Civic", "Blanco", 6);

console.log(camioneta.marca);

const bici = new Vehiculo(2010, "Apache", "Montaña", "Roja");

console.log(bici.ruedas);

camioneta.acelerar();
bici.acelerar();