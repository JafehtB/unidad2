//Funciones

//Funcion suma
function suma (a,b){
    resultado = a + b;
    return resultado;
}

//Otra manera de crear una funcion 

let Agregar = a => a +100;


//Funcion resta
function resta (a,b){
    resultado = a - b;
    return resultado;
}

//Funcion producto
function producto (a,b){
    resultado = a * b;
    return resultado;
}

//Función que no necesita parámetro de entrada
function Mensaje (){
    prompt("¿Qué edad tienes?");
}

//Funcion que segun mi edad me recomiende algún producto

function preguntarEdad (){
    edad = prompt("¿Qué edad tienes?");
    if(edad < 15){
        console.log("Debes comprarte un ipad");
    } else if (edad < 25){
        console.log("Debes comprarte una laptop");
    } else{
        console.log("Debes comprarte un libro");
    }
}





function Escribir(a,b,c){
    document.getElementById("titulo").innerHTML=a;
    document.getElementById("subtitulo").innerHTML=b;
    document.getElementById("relleno").innerHTML=c;
}

//Escribir("Tablet S6","Autonomía","Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum natus odit exercitationem reiciendis accusantium vitae sint, et quisquam, eius eligendi modi praesentium voluptas earum aliquam aliquid culpa illum. Corporis, ducimus.");

//Operaciones matemáticas


function areaCircunferencia(radio){
    const pi = 3.14;
    area = pi * radio * radio;
    return area;
}

//let r = prompt("Ingresa el valor del radio: ");
//resultado = areaCircunferencia(r);
//console.log(resultado);


//Programa para saber si aprobamos o no un curso
//si sacas más de 10 apruebas
// si aprobaste, estudia un poco más



function verificarEstado (puntaje) {

if (puntaje <0){
    alert("Has ingresado mal la nota");
}
else if(puntaje <10){
    alert("Has desaprobado, estudia un poco más");
}
else if (puntaje <= 20){
    alert("Has aprobado!!");
} 
else{
    alert("Has ingresado mal la nota");
}

}


//verificarEstado (nota)
//verificarEstado, estadoAlumno, verificarNota

//do{
//    nota = prompt("Ingresa tu nota obtenida: ")
//} while (nota < 0 || nota == "");

//tipos de variables:
// booleanos = true o false
// integer, string
let nota = 20;
verificarNumero = Number.isInteger(nota);
alert(verificarNumero)