const prompt = require("prompt-sync")();
const conjunto1 = ["A","B","C","D","E","F","G","H","I","J","K","L","M"];
const conjunto2 = ["N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var opcion = prompt("Desea Encriptar? ")


if(opcion == "si"){
    encryp();
} else if(opcion == "no"){
    desencryp();
} else (console.log("Opción no válida"));

function encryp(){ 
    var mensaje = prompt("Ingresa el mensaje a encriptar: ");
    const arraymensaje =[...mensaje.toUpperCase()]; 
    for(var i = 0; i <= conjunto1.length; i++){
  
        if(conjunto1.includes(arraymensaje[i])){
        let resultado = conjunto1.findIndex(elemento => elemento == arraymensaje[i]); 
        console.log(conjunto2[resultado]); 
        }
        else if (conjunto2.includes(arraymensaje[i])){  
            let resultado = conjunto2.findIndex(elemento => elemento == arraymensaje[i]);
            console.log(conjunto1[resultado]);     
        }
    }
};
function desencryp(){ 
    var mensaje = prompt("Ingresa el mensaje a Desencriptar: ");
    const arraymensaje =[...mensaje.toUpperCase()]; 
    
    for(var i = 0; i <= conjunto1.length; i++){
  
        if(conjunto2.includes(arraymensaje[i])){
        let resultado = conjunto2.findIndex(elemento => elemento == arraymensaje[i]);
        console.log(conjunto1[resultado]);
        }
        else if (conjunto1.includes(arraymensaje[i])){
            let resultado = conjunto1.findIndex(elemento => elemento == arraymensaje[i]);
            console.log(conjunto2[resultado]);     
        }
    }
}