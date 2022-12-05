class Persona {
    // atributo- parametro
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }
    //mrtodos GET y SET
    get nombre(){
        return this._nombre;

    } set nombre(nombre){
        return this._nombre;
    }
}

let persona1 = new Persona('Juan', 'Perez'); //instancia/objeto
console.log(persona1);

persona1.nombre = 'Nacho'; //set
console.log(persona1.nombre); //get


//*----HOISTING: para las clases no se aplica este concepto, como si se aplica en funciones y variables de tipo var

