
// hacerSalsaPesto();

// hacerSalsaAlfredo();

function hacerSalsaPesto() {
    console.log("Obtener los ingredientes para salsa pesto");
    console.log("Revolver los ingredientes de salsa pesto");
    console.log("Salsa pesto lista!");
}

function hacerSalsaAlfredo() {
    console.log("Colocar crema con resto de ingredientes");
    console.log("Hervir la crema");
    console.log("Salsa alfredo lista!");
}

/*
pasta = "Spagetti";
hacerSalsa = hacerSalsaAlfredo
IMPR: Hervir agua
IMPR Agregar Spagetti al agua
INVOCAMOS hacerSalsaAlfredo
    IMPR Colocar crema
    IMPR Hervir crema
    IMPR Salsa lista
---------------------
pasta = "Fetuccini"
hacerSalsa = hacerSalsaPesto
IMPR: Hervir agua
IMPR: Agregar Fetuccini al agua
INVOCAR hacerSalsaPesto
    IMPR Obten ingredientes
    IMPR Revolver
    IMPR Salsa lista
*/
function hacerPasta(pasta, hacerSalsa) {
    console.log("Hervir agua");
    console.log(`Agregar ${pasta} al agua`);
    hacerSalsa(); //Invocamos a la función recibida por hacerSalsa
}

//hacerPasta("Spagetti", hacerSalsaAlfredo);
hacerPasta("Fetuccini", hacerSalsaPesto);