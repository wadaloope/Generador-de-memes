const btnImg = document.getElementsByClassName('boton-menu')[0];
const btnTxt = document.getElementsByClassName('boton-menu')[1];
const btnModo = document.getElementsByClassName('boton-menu')[2];
const panelImg = document.getElementsByClassName('panel-editor')[0];
const panelTxt = document.getElementsByClassName('panel-editor')[1];
const fileInput = document.getElementById("fileInput");
const downloadBtn = document.getElementById("downloadBtn");

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
        btnTxt.style.filter = "brightness(100%)";
    }
    else {
        panelImg.classList.remove('panelOn');
        edicImg = false;
        btnImg.style.filter = "brightness(100%)";
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
        btnImg.style.filter = "brightness(100%)";
    }
    else {
        panelTxt.classList.remove('panelOn');
        edicTxt = false;
        btnTxt.style.filter = "brightness(100%)";
    }
})

//↓↓↓-Activacion y descativacion del modo nocturno-↓↓↓
let nocheEstado = true;

btnModo.addEventListener("click", (e) => {
    if (nocheEstado) {
        document.getElementsByTagName('body')[0].classList.add("dia");
        document.getElementsByClassName('modo_o')[0].innerHTML = "claro";

//------parche para contrarrestar los efectos de implementar el modo oscuro de manera peculiar------
        for (let i = 0; i < document.getElementsByClassName('cajaColor').length; i++)               //
            document.getElementsByClassName('cajaColor')[i].style.filter = "invert(100%)";          //
            document.getElementsByClassName('lienzo')[0].style.filter="invert(100%)"                //
//------------------------------------------fin de parche-------------------------------------------
        nocheEstado = false;
    }
    else {
        document.getElementsByTagName('body')[0].classList.remove("dia");
        document.getElementsByClassName('modo_o')[0].innerHTML = "oscuro";

//------parche para contrarrestar los efectos de implementar el modo oscuro de manera peculiar------
        for (let i = 0; i < document.getElementsByClassName('cajaColor').length; i++)               //
            document.getElementsByClassName('cajaColor')[i].style.filter = "none";                  //
        document.getElementById("imgTag").style.filter = "none";                                    //
        document.getElementsByClassName("texto-meme")[0].style.filter="none"                        //
        document.getElementsByClassName("texto-meme")[1].style.filter="none"                        //
        document.getElementsByClassName('lienzo')[0].style.filter="invert(0%)"                      //
//------------------------------------------fin de parche-------------------------------------------
        nocheEstado = true;
    }
})

//↓↓↓-Cargado de imagen desde disco duro-↓↓↓

fileInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (event) {
            const imgElement = document.getElementById("imgTag");
            imgElement.src = event.target.result;
            document.getElementById('label').style.color = "#00000000";
        };
        reader.readAsDataURL(file);
    }

})


