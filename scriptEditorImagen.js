/* ----------------------------------------Carga de imagen desde web--------------------------------------- */
const casillaURL = document.getElementById('url-imagen');
const imagenCargar = document.getElementById('imgTag');
casillaURL.addEventListener("change", (e) => {
    imagenCargar.src = `${casillaURL.value}`;
    document.getElementById('label').style.color = "transparent";
})

/* ----------------------------------Seleccion de color de fondo y mezcla---------------------------------- */
const colorFondoImg = document.getElementsByClassName('cajaColor')[0];
const cajaImg = document.getElementsByClassName('lienzo')[0];
const mezclaElegida = document.getElementById('efecto-fondo');
const etiquetaColorFdo=document.getElementsByClassName('label-color')[0];

colorFondoImg.addEventListener("input", (e) => {
    cajaImg.style.backgroundColor = colorFondoImg.value;
    etiquetaColorFdo.innerHTML=colorFondoImg.value.toUpperCase();
})

mezclaElegida.addEventListener("input", (e) => {
    imagenCargar.style.mixBlendMode = mezclaElegida.value;
})

/* -----------------------------------Seleccion y aplicacion de filtros------------------------------------ */
const filtros = document.getElementsByClassName('rango');
let stringFiltros = "\"";

for (let i = 0; i < filtros.length; i++) {
    filtros[i].addEventListener("input", (e) => {
        let stringFiltros = "";
        for (let j = 0; j < filtros.length; j++) {
            stringFiltros += filtros[j].id + "(" + filtros[j].value + filtros[j].name + ") ";
        }
        stringFiltros = stringFiltros.trim();
        imagenCargar.style.filter = stringFiltros;
    })
}




/* -------------------------------------------Reseteo de filtros------------------------------------------- */
const reset = document.getElementsByClassName('boton-filtros')[0];

reset.addEventListener("click", (e) => {
    const valorFiltro = [100, 100, 100, 0, 0, 0, 0, 100, 0];
    let stringReset = "\"";
    for (let k = 0; k < filtros.length; k++) {
        filtros[k].value = valorFiltro[k];
        stringReset += filtros[k].id + "(" + filtros[k].value + filtros[k].name + ") ";
    }
    stringReset = stringReset.trim();
    console.log(stringReset);
    imagenCargar.style.filter="none";
    imagenCargar.style.filter = stringReset;
})






