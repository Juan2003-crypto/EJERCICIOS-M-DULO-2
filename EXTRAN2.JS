const prompt = require("prompt-sync")();
var contadoraciertos=0;
var contadorfallos=2;

console.log("Reglas del Juego: ");
console.log("Para volar un dron se necesitan esquivar obstáculos");
console.log("Estos son:" + "\n" + 
            " ► Aro alto " + " (Se esquiva con la palabra arriba) " + "\n" +
            " ► Aro bajo " + " (Se esquiva con la palabra abajo) "+ "\n" +
            " ► Tobogán que gira a la derecha" + " (Se esquiva con la palabra derecha)" + "\n" +
            " ► Tobogán que gira a la izquierda " + " (Se esquiva con la palabra izquierda)" +
            " ► SI TE EQUIVOCAS 2 VECES PIERDES, SI TIENES MENOS DE 6 ACIERTOS PIERDES" + "\n" +
            " ► SOLO GANAS SI TIENES UN PUNTAJE DE 6 ACIERTOS");

var opcion = prompt("Desea Comenzar? ");
var dron={
prender: function(){return "ENCENDIENDO..."},
apagar: function(){return "APAGANDO..."},
}
switch(opcion){

    case "si":
   
    var contadoraciertos=0;
    var contadorfallos=2;

    console.log(dron.prender());
    console.log("Comienza el juego ☺");
    console.log("Aro alto");
    intento=prompt("Ingresa la acción: ");
    switch(intento)
    {
        case "arriba":
        console.log("Siguiente obstáculo");
        contadoraciertos++;
        break;

        default:
        contadorfallos--;
        console.log("TE QUEDA 1 FALLO");
        break;
    }
    console.log("Aro bajo");
        intento=prompt("Ingresa la acción: ");
    switch(intento)
    {
        case "abajo":
        console.log("Siguiente obstáculo");
        contadoraciertos++;
        break;

        default:
        contadorfallos--;
        console.log("TE QUEDA 1 FALLO");
        break;
    
    }
    if(contadorfallos==0){
        console.log("PERDISTE");
        break;
    }
    console.log("Tobogán a la derecha: ");
    intento=prompt("Ingresa la acción: ");
    switch(intento)
    {
        case "derecha":
        console.log("Siguiente obstáculo: ");
        contadoraciertos++;
        break;

        default:
        contadorfallos--;
        break;
    }
    
    if(contadorfallos==0){
        console.log("PERDISTE");
        break;
    }

    console.log("Aro alto");
    intento=prompt("Ingresa la acción: ");
    switch(intento)
    {
        case "arriba":
        console.log("Siguiente obstáculo: ");
        contadoraciertos++;
        break;

        default:
        contadorfallos--;
        break;
    }
    
    if(contadorfallos==0){
        console.log("PERDISTE");
        break;
    }
    
    console.log("Tobogán a la Izquierda: ");
    intento=prompt("Ingresa la acción: ");
    switch(intento)
    {
        case "izquierda":
        contadoraciertos++;
        console.log("Siguiente obstáculo: ");
        break;

        default:
        contadorfallos--;
    }
    
    if(contadorfallos==0){
        console.log("PERDISTE");
        break;
    }

    console.log("Aro bajo");
    intento=prompt("Ingresa la acción: ");
    switch(intento)
    {
        case "abajo":
        contadoraciertos++;

        default:
        contadorfallos--;
    }
    if(contadoraciertos<6){
        console.log("PERDISTE, solo tuviste: " + contadoraciertos + " aciertos");
        break;
    }
    if(contadorfallos==0){
        console.log("PERDISTE, fallaste 2 veces");
        break;
    }
    if(contadoraciertos==6){
        console.log("GANASTE, no tuviste ningún fallo");
    }
    break;

    case "no":
    console.log(dron.apagar());
    console.log("Inicie cuando esté listo");
    break;

    default:
    console.log("Ingrese una opción válida");
}