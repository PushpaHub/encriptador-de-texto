let ingresadoArea = document.querySelector(".texto-ingresado"); //area de texto ingresado
let secundarioArea = document.querySelector(".texto-secundario"); //area de texto secundario
let cambiarCopiar = document.querySelector(".copiar"); //boton Copiar

function checarMinusculas(cadena){
//Checamos que todas las letras son minusculas y que no son solo espacios

    let chCode = 0;
    let resultado = true;
    let cadenaVacia = "";

    //Minusculas
    for (let i=0; i<(cadena.length); i++){
        chCode = cadena.charCodeAt(i);
        if (((chCode < 97) || (chCode > 122)) && (chCode != 164) && (chCode != 32) && (chCode != 10)){
            alert("Debes escribir solo minusculas y sin acentos");
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
        cambiarCopiar.innerHTML = "Copiar";
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
        cambiarCopiar.innerHTML = "Copiar";
    }
}

function borrar(){
    ingresadoArea.value = "";
    secundarioArea.value = "";
    secundarioArea.style.backgroundImage = "url('Imagenes/TextoEncriptadoFinal.png')";
    cambiarCopiar.innerHTML = "Copiar";
}

function copiar(){
    navigator.clipboard.writeText(secundarioArea.value);
    cambiarCopiar.innerHTML = "Texto copiado";
}


