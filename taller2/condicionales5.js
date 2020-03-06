var nummero1 =prompt ("digite un numero")
var nummero2 = prompt ("digite unnumero")
var operacion = prompt ("digite la operacion a realizar")
if (operacion == "+"){
    alert ("elegite la operacion +")
    var resultado =(parseint (nummero1) + parseInt (nummero2))
    alert("el resultado es "+ resultado)
    
}
else if (operacion == "-"){
    resultado = nummero1 - nummero2
    alert ("elresulta es " + resultado)
}
else if (operacion == "*"){
    resultado=nummero1*nummero2
    alert("el resultado es"+resultado)
}
else if (operacion == "/"){
    resultado=nummero1/nummero2
    alert("el resultado es"+resultado)
}
else {
    alert("no se pudo hacer ninguna operacion")
}

    

