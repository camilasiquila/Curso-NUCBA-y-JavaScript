//constructor de objetos de tipo Persona
function Persona (nombre, apellido,email){
    this.nombre =nombre;
    this.apellido =apellido;
    this.email = email;
    this.nombreCompleto = function (){
        return this.nombre + ' ' + this.apellido;
    }
}


let padre = new Persona ('Juan', 'Perez', 'jperez@mail.com');
console.log(padre.nombreCompleto()); //Juan Perez

let madre = new Persona ('Laura', 'Quintero', 'lquintero@mail.com');
console.log(madre.nombreCompleto());//Laura Quintero


//se agrega una nueva propiedad
padre.tel = '46221615';

console.log(padre.tel);//46221615
console.log(madre.tel); //unidifined


//si queremos agregear una propiedad para todos los objetos usamos PROTOTYPE
//*PROTOTYPE
//agregamos la propiedad TEL a todos los objetos
Persona.prototype.tel = '46333333';

console.log(padre.tel);//46333333
console.log(madre.tel); //46333333


//*------------------------------------------------------------------------------------------
let persona1 = {
    nombre: 'Juan',
    apellido:'Perez',
    nombreCompleto:function(titulo, tel){
        return titulo + ': ' + this.nombre + ' ' + this.apellido + ', ' + tel;
    }
}

let persona2 = {
    nombre:'Carlos',
    apellido: 'Lara'
}

//*-------------------------CALL---------------------------------------------------------------
//CALL, el metodo persona1.combreCompleto con los datos del persona2
console.log(persona1.nombreCompleto()); //undifined: Juan Perez, undifined

consola.log(persona1.nombreCompleto.call(persona2, 'Ing.' , '12345678')); //Ing.: Carlos Lara, 12345678

//*------------------------APPLY: parametros --> arreglo----------------------------------------------------------------

//con el metodo nombreCompleto sin parametros, el metodo apply funcionaria igual que el call.

//pero con parametros, cambia
let arreglo = ['ing', '12345678'];
console.log(persona1.nombreCompleto.apply(persona2, arreglo));