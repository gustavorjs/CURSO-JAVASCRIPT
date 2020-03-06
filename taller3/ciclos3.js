let seleccione = prompt("seleccione la operacion que desea realizar \n1. numeros pares del 1 al 25\n2.multiplos de 5 \n3. conteo regresivo desde 100")
switch (seleccione) {
    case "1":
        opcion1()
        console.log("regreso de la funcion 1")
        break;
    case "2":
        opcion2()
        break;
    case "3"():
        opcion3
        break;
    default:
        alert("opcion no valida")

}
alert("salio de swith")

function opcion1() {
    alert("selecciono 1")
    for (let i = 1; i <= 25; i++) {
        if (i % 2 == 0) {
            console.log(i)
        }
    }
}
function opcion2(){
    alert("selecciono 2")
        for(let i=1;i <= 10 ; i++){
            console.log(i*5)
        
    }
}
function opcion3(){
    alert("selecciono el 3") 
        for(let i = 100 ;i>= 0;i--){
            console.log(i)
        }
            
        
        
    
}
