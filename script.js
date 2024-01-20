const btnImg = document.getElementsByClassName('boton-menu')[0];
const btnTxt = document.getElementsByClassName('boton-menu')[1];
const btnModo = document.getElementsByClassName('boton-menu')[2];
const panelImg = document.getElementsByClassName('panel-editor')[0];
const panelTxt = document.getElementsByClassName('panel-editor')[1];

//↓↓↓-Seleccion y ocultamiento del panel para edicion de imagen-↓↓↓

let edicImg = false;
let edicTxt = false;
btnImg.addEventListener("click", (e) => { 
    if (!edicImg) {
        panelImg.classList.add('panelOn');
        panelTxt.classList.remove('panelOn');
        edicImg = true;
        edicTxt = false;
        btnImg.style.filter = "brightness(200%)";
        btnTxt.style.filter = "none";
    }
    else {
        panelImg.classList.remove('panelOn');
        edicImg = false;
        btnImg.style.filter = "none";
    }
})

//↓↓↓-Seleccion y ocultamiento para el panel de edicion de texto-↓↓↓

btnTxt.addEventListener("click", (e) => {
    if (!edicTxt) {
        panelTxt.classList.add('panelOn');
        panelImg.classList.remove('panelOn');
        edicTxt = true;
        edicImg = false;
        btnTxt.style.filter = "brightness(200%)";
        btnImg.style.filter = "none";
    }
    else {
        panelTxt.classList.remove('panelOn');
        edicTxt = false;
        btnTxt.style.filter = "none";
    }
})

//↓↓↓-Activacion y descativacion del modo noctorno-↓↓↓

btnModo.addEventListener("click", (e) => {
    document.getElementsByTagName('body')[0].classList.toggle("dia");
})

