document.getElementById("boton").addEventListener("click", function(){
    
    var animal = document.getElementById("dato").value;
    
    //Animal 1
    if ((animal == 'Serpiente') || (animal == 'serpiente')){
        console.log("El animal escogido es " + animal);
    //Animal 2
    }else if ((animal == "Jirafa") || (animal == "jirafa")){
        console.log("El animal escogido es " + animal); 
    //Animal 3         
    }else if ((animal == "Ballena") || (animal == "ballena")){
        console.log("El animal escogido es " + animal);
    //Animal 4
    }else if ((animal == "Pez Payaso") || (animal == "pez payaso") || (animal == "Pez payaso") || (animal == "pez Payaso")){
        console.log("El animal escogido es " + animal);
    //Aninal 5
    }else if ((animal == "Ornitorrinco") || (animal == "ornitorrinco")){
        console.log("El animal escogido es " + animal);
    }else{   
        //El animal es incorrecto o esta mal escrito
        console.log("El animal que escribiste no es correcto. Escribiste : " + animal);
    }
})
