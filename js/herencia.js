//clase padre
class Persona {
    // atributo- parametro
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
    }
    //mrtodos GET y SET
    get nombre(){
        return this._nombre;

    } 
    set nombre(nombre){
        return this._nombre = nombre;
    }

    get apellido(){
        return this._apellido;
    }

    set apellido(apellido){
        return this._apellido = apellido;
    }

    
    nombreCompleto(){
        return this._nombre + ' ' + this._apellido;
    }

    //sobreescribiendo el metodo de la clase padre (Object)
    toString(){
        //Se aplica polimorfismo
        return this.nombreCompleto();
    }
}

//clase hija
class Empleado extends Persona{
    constructor(nombre, apellido,departamento){
        super(nombre, apellido); //llamo al constructor de la clase padre
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        return this._departamento = departamento;
    }
    //sobreescritura
    nombreCompleto(){
        return super.nombreCompleto() + ', ' + this._departamento;
    }

}

let persona1 = new Persona('Juan', 'Perez'); //instancia/objeto del Padre
console.log(persona1);

let empleado1 = new Empleado('Camila', 'Siquila', 'Sistemas');
console.log(empleado1);
console.log(empleado1.nombre);
console.log(empleado1.nombreCompleto());

//*CLASE padre OBJECT: toString()
//*POLIMORFISMO
console.log(empleado1.toString()); //referencia clase Hija
console.log(persona1.toString()); //referencia clase Padre

//*INSTANCEOF: responde para clases padre (EMPLEADO), no responde para clases hijas (GERENTE)