//FETCH API ---> Remmplazo a AJAX(XMLHttpRequest)
//permite ENVIAR informacion a un SERVIDOR u Obtener info de un servidor
//puedes obtener un ARCHIVO local o una respuesta de un servidor (Texto o JSON)
//JSON e suna lenguaje de transporte de datos
//Un JSON puede ser creado en cualquier lenguaje y se puede consumir en JavaScript por medio de Fetch API y mostrarlo en tu sitio web
//cualquier lenguaje backend puede exportar un JSON

async function obtenerEmpleados() {

    const archivo = 'empleados.json';

    // fetch(archivo)
    //     .then( resultado => resultado.json())
    //     .then( datos => {
    //      console.log(datos.empleados);

    //         const { empleados } = datos;
    //        console.log(empleados);
    //     });

    const resultado = await fetch(archivo);
    const datos = await resultado.json();
    console.log(datos);
}
obtenerEmpleados();