const valuePassword=function validarPassword(pwdClient, pwdServer){
    // Encriptar
let cadena=pwdClient;
let ascii='';
let wResult='';

let array_encrypt=cadena.split('');
array_encrypt.forEach(caracter => {

    ascii=String.fromCharCode((caracter.charCodeAt(0)*2-2));
    wResult+=ascii;
});

// console.log(ascii);
console.log('Valor encriptado: ',wResult);


let cadenaServer= pwdServer;
let asciiServer='';
let wResultServer='';

let array_encryptServer=cadenaServer.split('');
array_encryptServer.forEach(caracter => {

    asciiServer=String.fromCharCode((caracter.charCodeAt(0)*2-2));
    wResultServer+=asciiServer;
});

// console.log(ascii);
console.log('Valor encriptado: ',wResultServer);


if(wResult===wResultServer){
    return true;
}else{
    return false;
}

};


module.exports=valuePassword;