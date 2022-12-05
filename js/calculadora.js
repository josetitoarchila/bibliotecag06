function calcular(){
    console.log("entro al metodo calcular");

    let numero1 = document.getElementById("numero1").value;
    let numero2 = document.getElementById("numero2").value;
    //validar si numero esta ingresado
    if(numero1==''){
        document.getElementById("numero1").setAttribute("class", "form-control is-invalid");;
        //document.getElementById("numero1").setAttribute("class", "form-control borde_caja_texto");;
        let parrafo1_validar = document.getElementById("parrafo_validar_numero1");
        parrafo1_validar.setAttribute("class", "p-2 bg-light text-danger");
        parrafo1_validar.innerHTML = "Numero 1 es obligatorio";

    }else{
        document.getElementById("numero1").setAttribute("class", "form-control is-valid");;
        let parrafo1_validar = document.getElementById("parrafo_validar_numero1");
        parrafo1_validar.setAttribute("class", "p-0 bg-light text-white");
        parrafo1_validar.innerHTML = "";
    }
    //validar si numero esta ingresado
    if(numero2==''){
        document.getElementById("numero2").setAttribute("class", "form-control is-invalid");;
        //document.getElementById("numero1").setAttribute("class", "form-control borde_caja_texto");;
        let parrafo2_validar = document.getElementById("parrafo_validar_numero2");
        parrafo2_validar.setAttribute("class", "p-2 bg-light text-danger");
        parrafo2_validar.innerHTML = "Numero 2 es obligatorio";

    }else{
        document.getElementById("numero2").setAttribute("class", "form-control is-valid");;
        let parrafo2_validar = document.getElementById("parrafo_validar_numero2");
        parrafo2_validar.setAttribute("class", "p-0 bg-light text-white");
        parrafo2_validar.innerHTML = "";
    }




    console.log("el numero 1 ingresado es "+numero1);
    console.log("el numero 2 ingresado es "+numero2);

    
    //document.write("<p class='fs-5 arreglo_centrar'>"+sumatoria)

    let parrafos =document.getElementsByTagName("p");
    if((numero1!='')&&(numero2!='')){

        let sumatoria = parseInt(numero1) + parseInt(numero2);
        let cajasumar = document.getElementById("caja_sumar"); 

        //1. crear una etiqueta en JS como un  nodo
        let resultado_suma_h3 = document.createElement("h3");
        //2. crear el texto para el nodo
        let contenido =document.createTextNode("la suma es "+sumatoria);
        //3. añadir texto al nodo
        resultado_suma_h3.appendChild(contenido);
        //4. insertar a la caja div ->("caja_sumar) el h3 
        cajasumar.appendChild(resultado_suma_h3);
    

        document.getElementById("btnCalcular").setAttribute("value", "Sumó");


    }



}