const boton = document.querySelector('#boton');
//evento
boton.addEventListener('click', function(){
    console.log('diste click');
    //api
    Notification.requestPermission()
        .then(resultado => console.log(`el resultado es ${resultado}`))
})

if (Notification.permission == 'granted') {
    new Notification ('Esta es una Notificacion', {
        // icon: 'img/ccj.png'
        body: 'Codigo con Juan'
    })
}

//ASYNC/ AWAIT
function descargarNuevosClientes(){
    return new Promise( resolve => {
        console.log('Descargar Clientes... espere');

        setTimeout( () => {
            console.log('Los Clientes fueron descargados')
        },5000);        
    });
}
//tiiempo en segundos
// setTimeout(function(){
//     console.log('set timeout...')
// },5000);

//cada 3s se ejecuta ese mje
// setInterval(function(){
//     console.log('set timeout...')
// },3000);

function descargarUltimosPedidos(){
    return new Promise( resolve => {
        console.log('Descargando pedidos... espere');

        setTimeout( () => {
            console.log('Los Pedidos fueron descargados')
        },3000);        
    });
}

async function app(){
    try{
        //OPTIMIZADO - arreglo
        const resultado = await Promise.all([descargarNuevosClientes(), descargarUltimosPedidos()]);
        console.log(resultado[0]);
        console.log(resultado[1]);
    } catch(error){
        console.log(error);
    }
}
app();
console.log('este codigo no se bloquea, se ejecuta minetas el anterior espera 5 seg');

