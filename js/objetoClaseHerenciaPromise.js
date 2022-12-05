//UDEMY
//OBJETOS/CLASES
//palabara reservada constructor
 
 class Producto{
    constructor(nombre, precio){
        this.nombre = nombre;
        this.precio = precio;
    }
    formatearProducto(){
        return `El producto ${this.nombre} tiene un precio de : $ ${this.precio}`;
    }

    getPrecio(){
        return this.precio;
    }
   
 }

 const producto = new Producto('Monitor curvo', 800);
 const producto2 = new Producto('NoteBook', 500);

 console.log(producto);
 console.log(producto2);
 console.log(producto.formatearProducto());
 console.log(producto.getPrecio());

 //HERENCIA
  class Libro extends Producto{
    constructor(nombre, precio, isbn){
        super(nombre, precio);
        this.isbn = isbn;
    }
  }

  const libro = new Libro ('La revolucion', 120, '12345678');
  console.log(libro);

  //*PROMISE(RESOLVED(.then()), REJECTED(.catch()) funciones por defecto

  const usuarioAutenticado = new Promise ((resolve, reject) => {
    const auth = false; //true todo ok

    if(auth){
        resolve('usuario autenticado');
    } else{
        reject('No s epudo iniciar sesion');
    }
  });

  //llamada
  usuarioAutenticado
    .then(function(resultado) {console.log(resultado)})
    .catch(function(error) {console.log(error)});

    //ejemplo universidad JS
    let miPromesa = new Promise((resolver, rechazar) => {
        let expresion =true;
        if(expresion){
            resolver('Resuelto');
        } else{
            rechazar('se produjo un error');
        }
    });

    //llamada opcion1
    miPromesa.then(
        valor => console.log(valor),
        error => console.log(error)
    );
        
    //lamada opcion2
    miPromesa
    .then(valor => console.log(valor))
    .catch(error => console.log(error));

  //en el promise existen 3 valores/estados:usualmente en la consultas de APIs se usa.
  //Pending: el promise no se ha cumplido pero tampoco se ha rechazado
  //fulfilled: se cumplio el promise
  //rejected: se ha rechazado o no se pudo cumplir

