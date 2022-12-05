
saludar(`Camila`); //** JS > para todo lo que este declarado con la palabra reservada function es top level scope **// 

// VALUES
1;
14.5;
"Hola mundo";
true;
null;
undefined;
[1,32,22,3, 'Hola', false];
{
    nombre: "Facu";
}

//OPERADORES

3=="3"; //true. Hace lo posible para convertirlo en numero
3==="3"; //true. 
3==="3"; //false. No permite la cohercion de tipos

//TYPE
typeof 321; //Number
typeof "NUCBA"; //String
typeof true; // Boolean
typeof undefined; // "undefined"
typeof {edad: 35}; // Object //es un subtipo de Object
typeof null; //*Object*
typeof [1,5,3.51]; //Object
typeof function(){}//*Function// son un subtype de Object


//VARIABLES
var miArray= [1,2,3,5,44,444];
var texto= "Largo de mi array: " + miArray.length;

console.log(miArray);
console.log(miArray[1]);
console.log("Largo de mi array: " + miArray.length);
console.log(typeof texto);

// CONDICIONALES IF , mismo que java
//LOOPS

console.log("*************Loop FOR tradicional ****************");
var nombres= ["Camila", "Mark", "Mauro", "Luciano"];

for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
    
}

console.log("*************Loop FOR OF ****************"); // conviene para arrays y STRING

for (const nombre of nombres) {
    console.log(nombre);
}

console.log("*************Loop FOR IN ****************");
let miObjeto = {a:1, b:2, c:3}

for (const propiedad in miObjeto) {
    console.log(`${propiedad}: ${miObjeto[propiedad]}`); //conviene para Objeto.\Porque estamos dentro de un String interpolate no podemos hacer >miObjeto.propiedad< porque lo lee asi: >miObjeto."propiedad"<
            
}

//FUNCTIONS! centrado en el 'Do' que en el 'Be'

//funciones declaradas
function saludar (nombre){
    console.log(`Te saluda ${nombre}`);
}

saludar(`Camila`);

//PRINCIPIO DRY : Don't Repit Yourself


//arrow function
const multiplicar = () => {

}

//*cada funcion genera su propio contexto de ejecucion.




