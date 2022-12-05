// ARRAYS --------------------------------
// 1er estructura de datos. Funciones de arrays
let miArray = new Array("jaja","ss", 15,{});
console.log(miArray);

let miOtroArray = ["jaja","ss", 15,{}];
console.log(miOtroArray);

//acceder a un arreglo
console.log(miOtroArray[2]);

//extension de un areglo
console.log(miOtroArray.length);

//*usos de arrays: 
//arrayy.push([]); para agregar al array al final.
//array.unshift([]); agrega al inicio del array.
//array.pop(); metodo POP elimina el ultimo elemento del array.
//array.shift(); metodo SHIFT elimina el primer elemento del array'
//SPLICE -(indexStart, indiceAborrar, nuevoValor); este metodo te devuelve los arrays que borraste.Y por atras te agrega el nuevo valor en los lugares que borraste.
//SLICE-  igual que en los strings 

//Lo mejor seria no modificar el arreglo original, sino crearlo en otro. Con : Rest operator o Spread operator.

//un equivalente al push:
const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'];
// const nuevoArreglo = ['Junio', ...meses];
// console.log(nuevoArreglo);

//un equivalente a un unshift:
nuevoArreglo = [ ...meses,'Junio'];
console.log(nuevoArreglo);

//INCLUDE: sirve para arreglos planos. Cuando tiene objetos no e sla mejor opcion.
let misNumeros = [1,2,3,4,5,6,7,8,9];
console.log(misNumeros.includes(6)); //TRUE
//REFRENCE TYPE - IN JS
let color = 'rojo';
let otroColor = color;
//CONCAT concatena dos arrays
//para Arrays por lo general se usa const

//------------------OBJETOS:-------------------------------------------------------------------------
// se crea un objeto sin tener que crear una clase
//let miObjeto = new Object();
const miObjeto ={
    nombre : "Camila",
    edad : 27,

};
console.log(miObjeto);

//for (const obj of ARRAY_DE_ALUMNOS){
//  let textoRecursa = obj.recursa ? "Recursa materia" : "No recursa materia"
// console.log("El alumno: ${obj.nombre} ${obj.apeliido} ${textoRecursa}");    
//}

//*DESTRUCTURING de objetos
// const {nombre} = miObjeto;
// const {edad} = miObjeto;
const {nombre, edad} = miObjeto;

console.log(nombre);
console.log(edad);

//para que no me deje agrgear ni eliminar, camnbiar un valor a alguna propiedad
Object.freeze(miObjeto);
//agrego una propiedad y no la agrega
miObjeto.correo = "siquilacamila@gmail.com";
console.log(Object.isFrozen(miObjeto));

//SEAL se diferencia con el Freeze ya que el Seal deja modificar valores
Object.seal(miObjeto);
miObjeto.correo = "siquilacamila@gmail.com";
console.log(Object.isSealed(miObjeto));

//unir dos objetos con el SPREAD Object. Util para objetos y arreglos
 const producto = {
    nombre: "Monitor 32 pulgadas",
    precio: 100000,
    disponible: true,
 }

 const medidas = {
    peso: "1kg",
    alto: "1m",
    ancho : "2m",
 }

 const nuevoProducto = {...producto, ...medidas};
 console.log(producto);
 console.log(nuevoProducto);




