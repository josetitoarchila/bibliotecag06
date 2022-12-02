function calcular(){
    console.log("entro al metodo calcular");

    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    console.log("el numero 1 ingresado es "+numero1);
    console.log("el numero 2 ingresado es "+numero2);

    let sumatoria = parseInt(numero1) + parseInt(numero2);

    document.write("<p class='fs-5 arreglo_centrar'>"+sumatoria)
}