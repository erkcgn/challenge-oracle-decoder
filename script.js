const mjeEncriptar = document.querySelector('.mje-encriptar');
const mjeEncriptado = document.querySelector('.mje-encriptado');

function btnEncriptar(){
    const textoEncriptado = encriptar(mjeEncriptar.value);
    mjeEncriptado.value = textoEncriptado;
    mjeEncriptar.value = "";
    mjeEncriptado.style.backgroundImage = "none";
}

function encriptar(stringEncriptado){
    let matrizCodigo = [["e","enter"],
                        ["i","imes"],
                        ["a","ai"],
                        ["o","ober"],
                        ["u","ufat"]]; 

    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptado;
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(mjeEncriptar.value);
    mjeEncriptado.value = textoEncriptado;
    mjeEncriptar.value = "";
}

function desencriptar(stringDesencriptado){
    let matrizCodigo = [["e","enter"],
                        ["i","imes"],
                        ["a","ai"],
                        ["o","ober"],
                        ["u","ufat"]]; 

    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptado.includes(matrizCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptado;
}


