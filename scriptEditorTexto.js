/* ----------------------Ingreso de texto superior / Ocultamiento de banner superior ---------------------- */
const bannerSup = document.getElementsByClassName('texto-meme')[0];
const casillaTxtSup = document.getElementById('superior');
const tildeTxtSup = document.getElementById('sin-text-s');
let transpTxtSup = false;

casillaTxtSup.addEventListener("input", (e) => {
    bannerSup.innerHTML = casillaTxtSup.value;
})

tildeTxtSup.addEventListener("change", (e) => {
    if (!transpTxtSup) {
        bannerSup.style.color = "transparent";
        bannerSup.style.backgroundColor = "transparent";
        transpTxtSup = true;
    } else {
        bannerSup.style.color = colorTempFte;
        bannerSup.style.backgroundColor = colorTempFdo;
        transpTxtSup = false;
    }
})

/* ----------------------Ingreso de texto inferior / Ocultamiento de banner inferior- --------------------- */
const bannerInf = document.getElementsByClassName('texto-meme')[1];
const casillaTxtInf = document.getElementById('inferior');
const tildeTxtInf = document.getElementById('sin-text-i');
let transpTxtInf = false;

casillaTxtInf.addEventListener("input", (e) => {
    bannerInf.innerHTML = casillaTxtInf.value;
})

tildeTxtInf.addEventListener("change", (e) => {
    if (!transpTxtInf) {
        bannerInf.style.color = "transparent";
        bannerInf.style.backgroundColor = "transparent";
        transpTxtInf = true;
    } else {
        bannerInf.style.color = colorTempFte;
        bannerInf.style.backgroundColor = colorTempFdo;
        transpTxtInf = false;
    }
})

/* ------------------------------- Selección de tipo y tamaño de fuente ----------------------------------- */
const seleccionFte = document.getElementById('fuente');
const tamanioFte = document.getElementById('formatoTxt');

seleccionFte.addEventListener("input", (e) => {
    bannerSup.style.fontFamily = seleccionFte.value;
    bannerInf.style.fontFamily = seleccionFte.value;
})

tamanioFte.addEventListener("input", (e) => {
    bannerSup.style.fontSize = `${tamanioFte.value}px`;
    bannerInf.style.fontSize = `${tamanioFte.value}px`;
})

/* --------------------------------------- Justificación de párrafo --------------------------------------- */
const justIzq = document.getElementsByClassName('btnJustif')[0];
const justCentro = document.getElementsByClassName('btnJustif')[1];
const justDer = document.getElementsByClassName('btnJustif')[2];

justIzq.addEventListener("click", (e) => {
    bannerSup.style.textAlign = "left";
    bannerInf.style.textAlign = "left";
    justIzq.style.filter = "brightness(200%)";
    justCentro.style.filter = "brightness(100%)";
    justDer.style.filter = "brightness(100%)";
})

justCentro.addEventListener("click", (e) => {
    bannerSup.style.textAlign = "center";
    bannerInf.style.textAlign = "center";
    justCentro.style.filter = "brightness(200%)";
    justIzq.style.filter = "brightness(100%)";
    justDer.style.filter = "brightness(100%)";
})

justDer.addEventListener("click", (e) => {
    bannerSup.style.textAlign = "right";
    bannerInf.style.textAlign = "right";
    justDer.style.filter = "brightness(200%)";
    justCentro.style.filter = "brightness(100%)";
    justIzq.style.filter = "brightness(100%)";
})

/* ---------------------- Seleccion de colores y deshabilitacion de color de fondo ------------------------ */
const colorFuente = document.getElementsByClassName('cajaColor')[1];
const colorFondo = document.getElementsByClassName('cajaColor')[2];
const tildeColorTxt = document.getElementById('sin-fondo');
let colorTempFdo = "#000000";
let colorTempFte = "#FFFFFF";
let transparencia = false;

colorFuente.addEventListener("input", (e) => {
    bannerSup.style.color = colorFuente.value;
    bannerInf.style.color = colorFuente.value;
    colorTempFte = colorFuente.value;
})

colorFondo.addEventListener("input", (e) => {
    bannerSup.style.backgroundColor = colorFondo.value;
    bannerInf.style.backgroundColor = colorFondo.value;
    colorTempFdo = colorFondo.value;
})

tildeColorTxt.addEventListener("change", (e) => {
    if (!transparencia) {
        bannerSup.style.backgroundColor = "transparent";
        bannerInf.style.backgroundColor = "transparent";
        transparencia = true;
    } else {
        bannerSup.style.backgroundColor = colorTempFdo;
        bannerInf.style.backgroundColor = colorTempFdo;
        transparencia = false;
    }
})

/* ------------------------------------ Seleccion contorno exterior --------------------------------------- */
const sinCont = document.getElementsByClassName('contorno')[0];
const contClaro = document.getElementsByClassName('contorno')[1];
const contOscuro = document.getElementsByClassName('contorno')[2];

sinCont.addEventListener("click", (e) => {
    bannerSup.style.WebkitTextStroke = `0px #FFFFFF`;
    bannerInf.style.WebkitTextStroke = `0px #FFFFFF`;
    sinCont.style.filter = "brightness(200%)";
    contClaro.style.filter = "brightness(100%)";
    contOscuro.style.filter = "brightness(100%)";
})

contClaro.addEventListener("click", (e) => {
    bannerSup.style.WebkitTextStroke = `1.5px #FFFFFF`;
    bannerInf.style.WebkitTextStroke = `1.5px #FFFFFF`;
    sinCont.style.filter = "brightness(100%)";
    contClaro.style.filter = "brightness(200%)";
    contOscuro.style.filter = "brightness(100%)";
})

contOscuro.addEventListener("click", (e) => {
    bannerSup.style.WebkitTextStroke = `1.5px #000000`;
    bannerInf.style.WebkitTextStroke = `1.5px #000000`;
    sinCont.style.filter = "brightness(100%)";
    contClaro.style.filter = "brightness(100%)";
    contOscuro.style.filter = "brightness(200%)";
})

/* --------------------------------------- Seleccion de espaciado ----------------------------------------- */
const selecEspacio = document.getElementById('espaciado');

selecEspacio.addEventListener("input", (e) => {
    bannerSup.style.padding = `${selecEspacio.value}px 0 ${selecEspacio.value}px`;
    bannerInf.style.padding = `${selecEspacio.value}px 0 ${selecEspacio.value}px`;
})

/* -------------------------------------- Seleccion de interlineado --------------------------------------- */
const interlineado = document.getElementById('interlin');

interlineado.addEventListener("input", (e) => {
    bannerSup.style.lineHeight = `${interlineado.value}em`;
    bannerInf.style.lineHeight = `${interlineado.value}em`;
})

/* ------------------------------------ Fin de script editor de texto ------------------------------------- */

