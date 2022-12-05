// 3 tipos de scopes
//*****Global
let a = "soy global";

//*****en funciones. Las funciones crean su propio contexto de ejecucion
function fn (){
    let b = 'soy de mi funcion';
    console.log(b);
}
fn();

//*****en bloques
{
    let c = 'estoy en un bloque';
    console.log(c);
}

console.log(a);
// console.log(b);


//***si uso var para las variables que declare en un bloque, es posible tener problemas de reescritura de la variable ya que puede ser usada fuera del bloque. USAR LET para no tener ese inconveniente********/

var miVar = 'ajajaja';
var miVar = 'jojojojojo';
console.log (miVar); //***con var deja redeclarar, cuando eso no seria seguro***/

// let miLet = 'ajajaja';
// let miLet = 'jojojojojo'; NO ME DEJA redeclarar

// ***aca deja reasignar
let miLet = 'ajajaja';
miLet = 'jojojojojo';
console.log(miLet); 

//***** CONST es una varaiable que no puede reasignar su valor
const MI_CONST = "TEXTO";
//*MI_CONST = "OTRO TEXTO";


//*** No se cambia la direccion en memoria. El tamanio puede agrandar pero siempre es la misma direccion de memoria. Por eso no salta error. A diferencia de JAVA, se define el tipo de dato y la CAPACIDAD. Aca no
const MI_ARRAY = [];
MI_ARRAY.push(1);
console.log(MI_ARRAY);

//*STRING: son inmutables. El indexOf cuando devuelve un numero en NEGATIVO es porque no lo encontro.
let text= 'Bearer kxjbckhjdbs,vjjdhcbjh5415ad5vadjhcvahbvjch';
console.log (text.slice(7));

//texto a ARRAY
let fakeCSV = "120,M,ROJO";
let textToArray = fakeCSV.split(','); //metodo STRING. lo convierte en Array el split
console.log(textToArray);
let arrayToString = textToArray.join(','); //metodo ARRAY. lo convierte en STRING
console.log(arrayToString);

//espresiones regulares : RegEx

//alert(); funcion del navegador




