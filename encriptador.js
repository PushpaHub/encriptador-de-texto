let ingresadoArea = document.querySelector(".texto-ingresado"); //area de texto ingresado
let secundarioArea = document.querySelector(".texto-secundario"); //area de texto secundario

function checarMinusculas(cadena){
    let chCode = 0;
    let resultado = true;
    for (let i=0; i<(cadena.length); i++){
        chCode = cadena.charCodeAt(i);
        if (((chCode < 97) || (chCode > 122)) && (chCode != 164) && (chCode != 32)){
            console.log("Deben ser solo minusculas y sin acentos");
            return(false);
            break;
        }
    }
}

function encriptar(){
    let ingresado = ingresadoArea.value;
        
    if (checarMinusculas(ingresado) == false) {
        alert("Solo se pueden usar letras minúsculas y sin acentos.");
    }
    else {
        let secundario = "";
        for (let i=0; i<(ingresado.length); i++){
            secundario = secundario + ingresado.charAt(i);
            if (ingresado.charAt(i) == "e")
            secundario = secundario + "nter";
            else 
                if (ingresado.charAt(i) == "i") 
                    secundario = secundario + "mes";
                else 
                    if (ingresado.charAt(i) == "a") 
                        secundario = secundario + "i"; 
                    else 
                        if (ingresado.charAt(i) == "o") 
                            secundario = secundario + "ber"; 
                        else 
                            if (ingresado.charAt(i) == "u") 
                                secundario = secundario + "fat";
        }                    
        secundarioArea.value = secundario;
        secundarioArea.style.backgroundImage = "none";
    }
}

function desencriptar(){
    let ingresado = ingresadoArea.value;
        
    if (checarMinusculas(ingresado) == false) {
        alert("Solo se pueden usar letras minúsculas y sin acentos.");
    }
    else {
        let secundario = "";
        let i = 0;
        
        while (i < ingresado.length){
            secundario = secundario + ingresado.charAt(i);
            console.log(secundario);

            if (ingresado.substr(i, 5) == "enter")
                i = i + 5;
            else 
                if (ingresado.substr(i, 4) == "imes") 
                    i=i+4;
                else 
                    if (ingresado.substr(i, 2) == "ai") 
                        i=i+2; 
                    else 
                        if (ingresado.substr(i,4) == "ober")  
                            i=i+4; 
                        else 
                            if (ingresado.substr(i,4) == "ufat")
                                i=i+4;
                            else
                                i++;
        }                    
        secundarioArea.value = secundario;
        secundarioArea.style.backgroundImage = "none";
    }
}

function borrar(){
    ingresadoArea.value = "";
    secundarioArea.value = "";
    secundarioArea.style.backgroundImage = "url('Imagenes/TextoEncriptadoFinal.png')";
}

function copiar(){
    navigator.clipboard.writeText(secundarioArea.value);
}


