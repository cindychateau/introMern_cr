const Vehiculo = require("./Vehiculo");

/* HEREDAMOS de la clase Vehiculo */
class Auto extends Vehiculo {

    /*
    año = 2010, marca = "Mazda", modelo = "CX-3", color = "Plata", ruedas = 4, placas = "ABC-123"
    */
    constructor(año, marca, modelo, color, ruedas, placas) {
        //Utilizamos el método constructor de la clase superior
        super(año, marca, modelo, color, ruedas);
        //Si existen placas, this.placas = a lo que se recibió, si no entonces this.placas = "Aun sin placas"
        this.placas = placas || "Aún sin placas" ;
        //Atributo con valor por default
        this.motor = "Automático";
    }

    acelerar() {
        super.acelerar();
        console.log("Estoy pisando el acelerador");
    }    

}

const auto1 = new Auto(2010, "Mazda", "CX-3", "Plata", 4, "ABC-123");

console.log(auto1.modelo);

const auto2 = new Auto(2021, "Toyota", "Avanza", "Amarillo", 4);
console.log(auto2.motor);

auto1.acelerar();