function criptografar() {
    let texto = document.getElementById("input-text").value;
    let textoCriptografado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    
    document.getElementById("output-text").value = textoCriptografado;
    mostrarResultado();
}

function descriptografar() {
    let texto = document.getElementById("input-text").value;
    let textoDescriptografado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    
    document.getElementById("output-text").value = textoDescriptografado;
    mostrarResultado();
}

function mostrarResultado() {
    document.getElementById("output-text").style.display = "block";
    document.getElementById("copy-btn").style.display = "block";
}

function copiarTexto() {
    let textoCopiado = document.getElementById("output-text");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999); // Para dispositivos móveis
    document.execCommand("copy");
    alert("Texto copiado: " + textoCopiado.value);
}
