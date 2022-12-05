//ARRAY CALLBACK METHODS - son metodos que tienen los arrays, que esperan callback comoa argumento

//-------------FOREACH---------  solo en arreglos
let numeros = [1,2,3,4,5,6,7,8,9,];

/*function imprimirNumeros(n){
    console.log(n);
}
numeros.forEach(imprimirNumeros);
*/
numeros.forEach((value, idx) => {
    console.log(value, idx);
});

//------MAP----------- solo en arreglos
//PROGRAMACION FUNCIONAL
//A diferencia del foreach, crea un nuevo array con las operaciones definidas en el callback, a este nuevo arrray hay que capturarlo en una variable.
let numeros2 = [1,2,3,4,5,6,7,8,9,];
let dobles = numeros2.map((n) => {
    return n*2;
});
console.log('[numeros2]: ' + numeros2);
console.log('[dobles]: ' + dobles);
console.log('\n');

//es usado tambien para capturar aquellos datos especificos de un arrays super grande. La ventaja es que se capturan en otro array

//-------------FIND--------- Devuelve el primer valor que encuentra que satisface la logica que le pasamos en el callback

let books =[
    'El hobbit',
    'Narnia',
    'Harry Potter',
    'El señor de los anillos',
    'Yo robot',
];

 let book = books.find((book) => {
    return book.includes('El');
 });
 console.log(book);

 //---------FILTER---------- 
 //Devuelve un array (siempre) con los elementos que cumplan con la logica que pasamos en el callback
 

 //-------SOME AND EVERY------------------
 //Every devuelve true si todos cumplen la condicion del callback
 //SOME devuelve true si almenos uno cumple la consicion del callback

 let arraysNums = [1,3,5, ,9];
 console.log(arraysNums.every((n) => n % 2 === 1));
 console.log(arraysNums.some((n) => n % 2 === 1));

 //----- SORT----------- sort()
 //convierte todo a String si lo llamamos sin pasarle un callback, pero solo valuo el primer caracter
 let arrayNum2 = [11.9, 77.88, 8, 1, 99.99,9];
  console.log(arrayNum2.sort());
  console.log(arrayNum2.sort((a, b) => a - b)); //ORDEN ASCENDENTE
  console.log(arrayNum2.sort((a, b) => b - a)); //ORDEN DESCENDENTE

//------REDUCE---- toma los valores de un array y lo reduce a un solo valor.

let arrayNum3 = [1,2,3,4,5,6,7,8,9,10];
let resultado = arrayNum3.reduce((acumulador, valorActual) => {
    return acumulador + valorActual;
});
console.log('[Reduce arrayNum3]: ' + resultado);
//reduce - objetos
let numObj = [
    {value: 10},
    {value:10},
    {value:10},
    {value:10},
    {value:10},
];

//opcion 1
 let resultado2= numObj.reduce((acumulador, valorActual) => {
    return acumulador + valorActual.value;
 }, 0);

 //opcion 2. mas legible
 let resultado3= numObj.reduce((acumulador, valorActual) => {
    return { value: acumulador.value + valorActual.value};
 });

 console.log('[Reduce numObj]:', resultado2);
 console.log('[Reduce numObj]:', resultado3);

//las funciones que retornan, se tienen que asignar a una variable para mostrar algo.

//METODOS DE PROPIEDAD
const reproductor = {
    reproducir : function(id){
        console.log(`reproduciendo cancion con el ID: ${id}`);
    },
    pausar: function(){
        console.log('Pausando...');
    }
}
reproductor.borrarCancion = function(id){
    console.log(`Eliminando cancion: ${id}`);
}

reproductor.reproducir(3840);
reproductor.pausar();
reproductor.borrarCancion(3840);


//CONSTRUCTOR - de un objeto. Comienza con la palabra function y seguido del nombre de la Clase. El nombre del constructor tiene la misma regla que en Java]


//PROTOTYPE










