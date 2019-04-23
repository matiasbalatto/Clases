function mensaje(){
    document.write("ey me llamaste, soy tu funcion");
    document.write("***************");
}
// parametros
// pueden tener cualquier nombre, y separados por ,
function sumar(num1,num2,num3){
    var resultado=0;
    var resultado = num1+num2+num3;
    document.write("el resultado es: " + resultado);
 
}

function dividir(num,num2){
    if (num2==0){
        alert("el segundo numero no puede ser 0");
    } else alert("el resultado es"+ num/num2);
}

function contador(){
    alert("me apretaste");
}

function verificarTexto(){
    var nombre = document.getElementById("texto1").value;
    alert ("hola "+nombre);
}