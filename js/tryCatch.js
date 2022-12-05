'use strict'

try {
    x = 10;
    //lanzamos nosotros un error
    throw 'mi error';
}
catch(error){
    console.log(error);
}

//siempre se ejecuta, es  oppcional
finally{

}

console.log('continuamos...')