/*alert("mensaje en archivo libros js");*/
/*
let numero1 = prompt("ingrese numero 1");
let numero2 = prompt("ingrese numero 2");
let nombre = "Rafael";
let sumatoria = parseInt(numero1) +parseInt(numero2);
*/
/*alert("la sumatoria es "+sumatoria2);*/

document.write("<p style='text-align:center'>esto es un parrafo</p>");
document.write("<p class='titulo2'>esto es un parrafo 2</p>");
//console.log("la sumatoria en consola es "+sumatoria);

let hora = prompt("ingrese hora");
calcular_saludo(hora);

function calcular_saludo(hora){
    if(hora<12){
        document.write("<p style='text-align:center'>Buenos dias</p>");
    }else if(hora>=12 && hora<18)
    {
        document.write("<p style='text-align:center'>Buenas tardes</p>");
    }else{
        document.write("<p style='text-align:center'>Buenas noches</p>");
    }
}

let materias = ["quimica", "fisica", "espáñol"];
document.write("<p class='fs-3 arreglo_centrar'>"+materias.sort()+"<p/>");

for(i=0; i<materias.length;i++)
{
    document.write("<p class='fs-5 arreglo_centrar'>"+materias[i])
}

let tabla = prompt("ingrese tabla de multiplicar");
for(i=1; i<=10; i++){
    document.write("<p class='fs-5 arreglo_centrar'>"+tabla+"*"+i+" es "+parseInt(tabla)*i);
    console.log(tabla+"*"+i+" es "+parseInt(tabla)*i);
}



