//Juan quiere vender sus dulces, pero necesita venderlos aun si no está
// presente, por lo que compró una máquina expendedora y nos pide ayuda 
// para que implementemos su funcionamiento. Necesitamos diseñar un 
// programa que con dos datos (el código del dulce a comprar y el dinero
// que vamos a meter en la máquina para pagar) logre decidir si entregar
// el dulce o no.

//Condición1: Si el código del producto es correcto y el dinero es su-
// -ficiente para comprarlo,imprimirá en pantalla que la compra fue 
// exitosa.

//Condición 2: Si el código del producto es correcto y el dinero sobre-
//-pasa al valor del dulce, imprimira el mensaje de compra exitosa y el 
// cambio que se deberá entregar.

//Condición 3: Si el código del producto es incorrecto o no se ingresa
// el dinero suficiente, imprimirá un mensaje de error.

const prompt =require('prompt-sync')();
var datos= "Producto          Código           Precio";
var date1="CocaCola            xc24            $12";
var date2="Doritos             c4f2            $5";
var date3="Chupete             gt74            $4";
var date4="Ruffles             l3kb            $10";

console.log(datos + "\n" + date1 + "\n" + date2 + "\n" + date3 + "\n" + date4);

var codigo=prompt("Ingrese el código ");
var dinero=prompt("Ingrese el Dinero ")
var dinero=5;


if(dinero>=12 && codigo=="xc24"){
    console.log("Gracias por la compra");

    if(dinero>12){
    var cambio=dinero - 12;
    console.log("Muchas gracias por la compra el cambio es " + cambio);
    }
}
else if(dinero>=5 && codigo=="c4f2"){
    console.log("Muchas gracias por su compra");

    if(dinero>5){
    cambio=dinero-5;
    console.log("Muchas gracias por la compra el cambio es " + cambio);
    }
}
else if (dinero>=4 && codigo=="gt74"){
    console.log("Muchas gracias por su compra");

    if(dinero>4){
    cambio=dinero-4;
    console.log("Muchas gracias por su compra el cambio es " + cambio);
    }
}
else if (dinero>=10 && codigo=="l3kb"){
    Console.log("Muchas gracias por su compra");

    if(dinero>10){
    cambio=dinero-10;
    console.log("Muchas gracias por su compra el cambio es " + cambio);
    }
}
else{
    console.log("Por favor vuelva a intentarlo");
}