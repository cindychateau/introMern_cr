console.log("¡Hola!");

var nombre = "Elena de Troya"; //Alcance local, el valor puede cambiar
const constante = "Contra123"; //No pueden cambiar su valor. Contraseñas, API Key, E-mail
//constante = "Contra345";
let let_var = 1; //Solo existe en el bloque en el que se declara.

for(let i=0; i<5; i++) {
    console.log(i);
}

//console.log(i);

for(var j=0; j<5; j++){
    console.log(j);
}

console.log(j);


let x = 100;
for(let x=0; x<10; x++) {
    console.log(`En el for la x es: ${x}`);
}

console.log(`Fuera del for la x es: ${x}`);

console.log(y);

var y = "hello!";

imprimir();

function imprimir() {
    console.log("Soy una función");
}

//Objeto
let cursoMern = {
    nombre: "MERN",
    instructor: "Cynthia Castillo",
    horario: "L-Mi-Ju 7-10pm",
    alumnas: ["Paty", "Jeimy", "Mony"],
    id: 123
};

console.log(cursoMern.instructor);
console.log(cursoMern['alumnas']);
console.log(cursoMern['alumnas'][2]);
console.log(cursoMern.alumnas[2]);

//Desestructuración
const animales = ["tortuga", "perro", "pez", "gato"];
console.log(animales[0]);

//En base a la estructura de mi arreglo yo PUEDO guardar variables con sus valores
var [primerAnimal, segundoAnimal, tercerAnimal, cuartoAnimal] = animales;
/*
primerAnimal = animales[0];
segundoAnimal = animales[1];
tercerAnimal = animales[2];
cuartoAnimal = animales[3];
*/

console.log(tercerAnimal);

primerAnimal = "ballena";
console.log(primerAnimal);

const frutas = ["fresa", "piña", "banano"];

var [primeraFruta, segundaFruta] = frutas;
console.log(primeraFruta);

const alumna = {
    nombre: "Elena",
    apellido: "De Troya",
    email: "elena@codingdojo.com",
    password: "Contraseña123"
}
/*
var email = alumna.email;
var password = alumna.password;
*/
const {email, password} = alumna;
console.log(email);

var {nombre: nombreElena} = alumna; //{propiedad: nombreVariable}
console.log(nombreElena);

const alumna2 = {
    nombre: "Juana",
    apellido: "De Arco",
    email: "juana@codingdojo.com",
    password: "Contra123",
    direcciones: 
        [
            {
                direccion: "Francia 123",
                ciudad: "Paris"
            },
            {
                direccion: "Sócrates 112",
                ciudad: "Roma"
            },
            {
                direccion: "Milan 22",
                ciudad: "Milan"
            }
        ]
};

var {direcciones: [dir1, dir2]} = alumna2;
console.log(dir1);
console.log(dir2);

var {direcciones: [ {ciudad: ciudadDir} ]} = alumna2;
console.log(ciudadDir);

var {direcciones: [ ,{ciudad: ciudadDir2} ]} = alumna2;
console.log(ciudadDir2);

//Spread
//Guardamos en restoAnimales todos los animales que NO SON el primer animal
var [primerAnimalito, ...restoAnimales] = animales; 
console.log(restoAnimales);

const {nombre: primerNombre, apellido: apellidoJuana, ...restoAtributos} = alumna2;
console.log(primerNombre);
console.log(apellidoJuana);
console.log(restoAtributos);

var lista_alumnos = [
    {nombre: "Elena", apellido: "De Troya", id: 123, cursos: ["Fundamentos de la Web", "Python"]},
    {nombre: "Juana", apellido: "De Arco", id: 234, cursos: ["Fundamentos de la Web", "Python", "MERN"]},
    {nombre: "Pedro", apellido: "Páramo", id: 345, cursos: ["Fundamentos de la Web", "Python", "MERN", "Java"]}
]

/*Funciones Flecha */
function hola(nombre, apellido) {
    console.log(`Hola ${nombre} ${apellido}`);
}

hola("Elena", "De Troya");

const holaFlecha = (nombre, apellido) => {
    console.log(`Hola ${nombre} ${apellido}`);
}

const holaFlechaSimple = (nombre, apellido) => console.log(`Hola ${nombre} ${apellido}`);

const holaFlechaNombre = nombre => console.log(`Hola ${nombre}`);

function sumatoria(num1, num2) {
    return num1+num2;
}

const sumatoriaFlecha = (num1, num2) => num1+num2;

console.log(sumatoria(1, 2));
console.log(sumatoriaFlecha(1, 2));

function funcionPrueba() {
    return "a";
}

const funcionPruebaFlecha = () => "a";

//const nombreFuncion = (parametros, p2, p3) => {}
//const nombreFuncion = (parametros, p2, p3) => p2+p3

// document.getElementById("button").onclick = function() {
//     setBackgroundColorById("paragraph", "blue");
// }

// document.getElementById("button").onclick = () => setBackgroundColorById("paragraph", "blue");

// document.getElementById("alert").onclick = function(){
//     alert(document.getElementById("popup-input").value);
// }

// document.getElementById("alert").onclick = () => alert(document.getElementById("popup-input").value);

// function getValueFromId(id){
//     return document.getElementById(id).value;
// }

// const getValueFromId = id => document.getElementById(id).value;

/*OPERADOR TERNARIO */
//condicion ? si se cumple condicion : si no se cumple con condición

let numero1 = 1;
let numero2 = 2;
if(numero1 > numero2) {
    console.log("Numero 1 Mayor a Numero 2");
} else {
    console.log("Numero 2 mayor a Numero 1");
}

console.log( numero1>numero2 ? "Num1 mayor a Num2" : "Num2 mayor a Num1" );

let lluvia = true;
let soleado = false;
if(lluvia) {
    console.log("Lleva un paraguas");
} else if(soleado) {
    console.log("Ponte bloqueador");
} else {
    console.log("Ten un buen día");
}

console.log( lluvia ? "Lleva un paraguas" : soleado ? "Ponte bloqueador" : "Ten un buen día" );


