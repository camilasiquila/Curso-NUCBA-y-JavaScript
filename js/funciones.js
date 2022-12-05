//*FUNCIONES - es uno de los temas mas importante de JS
//Definicion: es un bloque reutilizable de codigo. Las funciones nos permiten ecribir codigo que luego podemos volver a usar

//Las funciones tienen dos partes :
//1) declaracion de la funcion (declaracion)
//2) correr o llamar la funcion(ejecucion)

//DECLARAR FUNCION: hoisting. JS la detecta primero no importa si la invocas primero y luego la declaras.
function functionName(){

}

//*FUNCTION EXPRESION
const esPar = function (n){
    return n % 2 ===0;
}
//*ARROW function
let multiplicar = (a,b) =>{
    return a*b;
};

//*IIFI: funciones que se llaman asi mismas, no hace falta invocarlas. se ve mas en las JQueries
(function() {
    console.log('esto es una funcion');
})();

//*CALLBACK: no solo para procesos sincronos sino tambien para procesos asyncronos.Con los proceso Asincronos puede seguir realizando tareas mientras se esta ejecutando la funcion que fue llamada.
function soyUnaFn(fn){
     return fn(' hoy soyUnaFn')
}

function logearFn(text){
    console.log(text);
}
 soyUnaFn(logearFn) //logearfn() se convierte en fn() en momento de ejecucion

    //callback - con setTimeout - asyn
    function miFuncionCallBack(){
        console.log('saludo asíncrono despues de 3 segundos');
    }
    setTimeout(miFuncionCallBack, 3000);
    setTimeout(() => console.log('saludo asincrono despues de 1 segundo'),1000);



 //*ARROW FUNCTION EXPRESION CON RETURN IMPLICITO
 const espar2 = (n) => n % 2 === 0;


 //diferencia entre Metodos y Funciones
 const numero1 = 20;
 const numero2 = "20";

 console.log(parseInt(numero2));// paseInt es una function
 console.log(numero1.toString()); //.toString() son metodos

 
