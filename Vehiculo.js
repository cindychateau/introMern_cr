class Vehiculo {
    /* Es el encargado de INICIALIZAR mi objeto o instancia 
    año = 2010, marca = "Apache", modelo = "Montaña", color = "Roja", ruedas = 2
    bici.año = 2010
    bici.marca = "Apache"
    bici.modelo = "Montaña"
    bici.color = "Roja"
    bici.ruedas = 2
    */
    constructor(año, marca, modelo, color, ruedas) {
        this.año = año;
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.ruedas = ruedas;
    }

    acelerar() {
        console.log(`Aceleramos el vehículo con marca ${this.marca}`);
    }

}

module.exports = Vehiculo;