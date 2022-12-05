async function miFuncionConPromesa(){
    return 'saludos con promesa y async';
}

//llamada
// miFuncionConPromesa().then(valor => console.log(valor));

//*async-await: await solo se puede usar dentro de una función declarada con async

async function funcionConPromesaYawait(){
    let miPromesa = new Promise (resolver => {
        resolver('Promesa con await');
    });

    console.log( await miPromesa );
}
//llamada
funcionConPromesaYawait();

//promise, await, aync, setTimeout
async function funcionPromesaAwaitTimeout(){
    console.log('inicio funcion');
    let miPromesa = new Promise(resolver => {
        setTimeout(() => resolver('promesa con await y timeout'), 3000);
    });
    console.log( await miPromesa);
    console.log('fin funcion'); //espera que se ejecuta la función miPromesa, para luego ejecutarse
}

funcionPromesaAwaitTimeout();