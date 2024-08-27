const ingreso__texto = document.getElementById("ingreso__texto");
const botonEncriptar = document.getElementById("botonEncriptar");
const botonDesencriptar = document.getElementById("botonDesencriptar");
const botoncopiar = document.getElementById("botoncopiar");
const Mensajefinal = document.getElementById("Mensajefinal");
const muñeco = document.getElementById("muñeco");
const derecha_mensaje = document.getElementById("derecha_mensaje");
const right = document.getElementById("right");

let remplazar = [
    ["e", "enter"],
    ["o", "ober"],
    ["i", "imes"],
    ["a", "ai"],
    ["u", "ufat"],
]

const replace = (nuevoValor) => {
    Mensajefinal.innerHTML = nuevoValor;


    muñeco.classList.add("oculto");
    derecha_mensaje.style.display = "none";
    botoncopiar.style.display = "block";
    right.classList.add("ajustar");
    Mensajefinal.classList.add("ajustar");

}



botonEncriptar.addEventListener("click", () => {
    const texto = ingreso__texto.value.toLowerCase();
    if (texto != "") {
        function encriptar(newText) {
            for (let i = 0; i < remplazar.length; i++) {
                if (newText.includes(remplazar[i][0])) {
                    newText = newText.replaceAll(remplazar[i][0], remplazar[i][1]);

                };

            };
            return newText
        }
    } else {
        alert("Ingrese el texto a encriptar")
    }
    //const textoEncriptado = encriptar(texto)

    replace(encriptar(texto));





})

botonDesencriptar.addEventListener("click", () => {
    const texto = ingreso__texto.value.toLowerCase();
    if (texto != "") {
        function desencriptar(newText) {
            for (let i = 0; i < remplazar.length; i++) {
                if (newText.includes(remplazar[i][1])) {
                    newText = newText.replaceAll(remplazar[i][1], remplazar[i][0]);

                }
            }
            return newText
        }
    } else {
        alert("ingrese el texto a desencriptar")
    }

    replace(desencriptar(texto));

});


botoncopiar.addEventListener("click", () => {
    let texto = Mensajefinal;
    texto.select();
    document.execCommand("copy")
    alert("Texto copiado");

    Mensajefinal.innerHTML = "";
    muñeco.classList.remove("oculto");
    derecha_mensaje.style.display = "block";
    botoncopiar.style.display = "none";
    right.classList.remove("ajustar");
    Mensajefinal.classList.remove("ajustar");
    ingreso__texto.focus();
})




