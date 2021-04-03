const prompt = require("prompt-sync")();

var opcion = prompt("Desea Inscribirse? ");



switch(opcion){

    case "Si":
    var datos=["Juan" , "120666" , "Historia"];
    var nombre=prompt("Ingrese su Nombre: ");
    var cuenta=prompt("Ingrese su Número de cuenta: ");
    var materia=prompt("Escriba la Materia a Inscribirse: ");

    if(nombre==datos[0]&&cuenta==datos[1]&&materia==datos[2]){
        console.log(nombre + " ya estás inscrito en la materia de " + materia );
        break;
    }
    else if(nombre!=datos[0]&&cuenta!=datos[1]){
        
        function agregar(){
            setTimeout(function(){
        datos.push(nombre,cuenta,materia);
        console.log("Felicidades " + nombre + " te inscribiste a la materia de " + materia);  
            }, 2 *1000);   
           
        }
        
    }
    agregar();
    break;
    
    default:
    console.log("Inscribase cuando este Listo");
    break;
}