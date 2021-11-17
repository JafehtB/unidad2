// for (i;(condición);i++){}

//Aumentando de 1 en 1
/*var i = 1;
for (i; i <= 10; i++){
    console.log(i);
}*/

//Reduciendo de 1 en 1
/*var i = 7;
for (i; i > 0; i--){
    console.log(i);
}*/

/*var cars = ["BMW", "Volvo", "Toyota", "Ford", "Audi", "Hyundai","Lamborguini"];

/*console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);
console.log(cars[3]);
console.log(cars[4]);
console.log(cars[5]);

var cantidad = cars.length;
console.log(cantidad);
for (var i = 0; i < cantidad; i++){
    console.log(cars[i]);
    console.log(i);
}*/

// for (i;(condición);i++){}

//Repasito

/*for (var i = 1; i <= 3; i++){
    alert(i)
}*/

let texto = "";

for (let i = 0; i < 8; i++){
    //texto += i + "<br>";
    //console.log(texto); 
}

//Usemos el inner.HTML

//document.getElementById("demo").innerHTML = texto;

let cars = ["BMW", "Volvo", "Toyota", "Ford", "Audi", "Hyundai","Lamborguini"];

let cantidad = cars.length;
console.log("Cantidad de datos:", cantidad);
for (let i = 0; i < cantidad; i++){
    texto += "<button>" + cars[i] +"</button>" + "<br>";
    console.log(texto)
}

document.getElementById("demo").innerHTML = texto;
document.getElementById("dato2").innerHTML = "Hola soy Jafeht";