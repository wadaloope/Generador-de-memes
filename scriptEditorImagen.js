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

colorFondoImg.addEventListener("input", (e) => {
    cajaImg.style.backgroundColor = colorFondoImg.value;
})

mezclaElegida.addEventListener("input", (e) => {
    imagenCargar.style.mixBlendMode = mezclaElegida.value;
})

/* -----------------------------------Seleccion y aplicacion de filtros------------------------------------ */
/*esto esta dando muchos problemas y he cambiado los setings de los ranges un monton de veces*/
const filtros = document.getElementsByClassName('rango');
const valorFiltro = [100, 100, 100, 0, 0, 0, 0, 100, 0];
for (let i = 0; i < filtros.length; i++) {
    filtros[i].addEventListener("change", (e) => {
        let oracion=`"brightness(${filtros[0].value}) opacity(${filtros[1].value}%) contrast(${filtros[2].value}%) blur(${filtros[3].value}px) greyscale(${filtros[4].value}%) sepia(${filtros[5].value}%) hue-rotate(${filtros[6].value}deg) saturate(${filtros[7].value}%) invert(${filtros[8].value}%)"`;
        imagenCargar.style.filter=oracion;
        console.log(oracion);
    })
}

/* -------------------------------------------Reseteo de filtros------------------------------------------- */
const reset=document.getElementsByClassName('boton-filtros')[0];

reset.addEventListener("click",(e)=>{
    imagenCargar.style.filter="brightness(100%)";
    filtros[0].value=100;
    imagenCargar.style.filter="opacity(100%)";
    filtros[1].value=100;
    imagenCargar.style.filter="contrast(100%)";
    filtros[2].value=100;
    imagenCargar.style.filter="blur(0%)";
    filtros[3].value=0;
    imagenCargar.style.filter="greyscale(0%)";
    filtros[4].value=0;
    imagenCargar.style.filter="sepia(0%)";
    filtros[5].value=0;
    imagenCargar.style.filter="hue-rotate(0deg)";
    filtros[6].value=0;
    imagenCargar.style.filter="saturate(100%)"
    filtros[7].value=100;
    imagenCargar.style.filter="invert(0%)";
    filtros[8].value=10;
})






