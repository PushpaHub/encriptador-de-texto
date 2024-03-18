let ingresadoArea = document.querySelector(".texto-ingresado"); //area de texto ingresado
let secundarioArea = document.querySelector(".texto-secundario"); //area de texto secundario

function checarMinusculas(cadena){
//Checamos que todas las letras son minusculas y que no son solo espacios

    let chCode = 0;
    let resultado = true;
    let cadenaVacia = "";

    //Minusculas
    for (let i=0; i<(cadena.length); i++){
        chCode = cadena.charCodeAt(i);
        if (((chCode < 97) || (chCode > 122)) && (chCode != 164) && (chCode != 32)){
            alert("Debes escribir solo minusculas, sin acentos y no usar tecla Enter");
            resultado = false;
            break;
        }
    }
    
    //No solo espacios
    for (let i=0; i<(cadena.length); i++){
        cadenaVacia = cadenaVacia + " ";
    }
    if (cadena == cadenaVacia){
        alert("Debes escribir algún texto");
        resultado = false;
    }
    
    return(resultado);
}

function encriptar(){
    let ingresado = ingresadoArea.value;
        
    if (checarMinusculas(ingresado) == true){
        let secundario = ingresado.replaceAll("e","enter");
        secundario = secundario.replaceAll("i","imes");
        secundario = secundario.replaceAll("a","ai");
        secundario = secundario.replaceAll("o", "ober");
        secundario = secundario.replaceAll("u", "ufat");

        secundarioArea.value = secundario;
        secundarioArea.style.backgroundImage = "none";
    } 
}

function desencriptar(){
    let ingresado = ingresadoArea.value;
        
    if (checarMinusculas(ingresado) == true) {
            
        let secundario = ingresado.replaceAll("ufat", "u");
        secundario = secundario.replaceAll("ober", "o");
        secundario = secundario.replaceAll("ai", "a");
        secundario = secundario.replaceAll("imes", "i");
        secundario = secundario.replaceAll("enter", "e");
        
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


