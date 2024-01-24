# Generador de Memes 💩​

Este proyecto ofrece resolución al segundo TP correspondiente a la carrera de Front End Developer de ADA.

## Descripción 📚

El Generador de Memes consiste en una aplicación web, crada con el objeto de permitir composiciones de texto e imagen, presentadas en formato de meme clásico, como se detalla a continuación.

![meme](https://github.com/wadaloope/Generador-de-memes/assets/139147384/cf1f5e60-4311-4b53-8e4b-c4449e689527)

Para ello, el proyecto presenta tres interfaces:
- Un PANEL PRINCIPAL, que actúa como espacio de trabajo y permite la visualización del meme durante su edición.
  El área de visualización incorpora un botón de carga, que facilita la selección de una imagen de origen desde disco rígido. Tambien se incluyen, en el área central de trabajo:
  - Botón de selección/ocultamiendo del PANEL DE EDICIÓN DE IMAGEN.
  - Botón de selección/ocultamiento del PANEL DE EDICIÓN DE TEXTO.
  - Botón de descarga, este último permite la renderización y descarga del meme elaborado en formato PNG.
- Un PANEL DE EDICIÓN DE IMAGEN (ocultable), que reúne los controles necesarios para modificar la apariencia de la   foto empleada, mediante la aplicación de filtros y la imposición de mezclas de colores.
- Un PANEL DE EDICIÓN DE TEXTO (ocultable), que agrupa los ajustes del texto presentado en las leyendas superior e inferior.

La aplicación cuenta con una presentación de escritorio y otra diseñada para uso desde dispositivos móviles (responsiveness) de acuerdo con los requerimientos del TP.

## Visuales 🎞️​

https://github.com/wadaloope/Generador-de-memes/assets/139147384/11cb551f-ce80-407b-8284-bb8db920a9d7


## Tecnologías empleadas 🛠️

El proyecto tiene una estructura modular, lo que permitió el desarrollo individual de los elementos descritos:
Las tecnologías empleadas comprenden HTML5, CSS y Javascript. En función de las mismas, el contenido se agrupa de la siguiente manera: 
- Un archivo .HTML organiza la información de marcado por etiquetas de los tres paneles.
- Dos archivos .CSS reúnen las normas de estilos para paneles.
   - Estilo panel principal
   - Estilo paneles de edición
- Tres archivos .JS cada uno de los cuales describe las funcionalidades que corresponden a cada panel.
            - Funcionamiento PANEL PRINCIPAL
            - Funcionamiento PANEL DE EDICIÓN DE TEXTO
            - Funcionamiento PANEL EDICIÓN DE IMAGEN

En suma a los lenguajes utilizados, debe señalarse la incorporación de:
    - Librerías domtoimage, para implentar la descarga del meme.
    = Librerías de Google Fonts, para ampliar la oferta de fuentes en funcionamiento.

## Software utilizado ​💾​

- Visual Studio Code
- Google Chrome / Chrome Developer's Tool
- Microsoft Edge
- Krita (edicion de íconos)
- GitBash

## Deployado 🕸️​

https://wadaloope.github.io/Generador-de-memes/

### Prerrequisitos 💻

- PC o celular provisto de navegador Google Chrome o Microsoft Edge.
- Fotos de gatitos (opcional: fotos de perritos).

### Instrucciones de uso 🕹️​

1. Buscá una imagen que te guste, a través de Google.
2. Cuando la identifiques, hacé click con el botón derecho del mouse (si estas en el celu, mantené apretado por un rato)  y seleccioná "Abrir imagen en nueva pestaña".
3. Seleccioná y copiá la dirección de la imagen (es la que figura en la barra superior del navegador).
4. Ingresá al [Generador de memes](https://wadaloope.github.io/Generador-de-memes/) y apretá el botón IMAGEN🖌️​.
5. Ubicá el cursor en la casilla superior que aparece en el panel IMAGEN, y presioná CONTROL+V con el teclado de la compu (si estas en el celu, mantené presionado hasta que aparezca la opción PEGAR).
6. LISTO! La **_foto base_** de tu meme ya está cargada! (tambien podes elegirla desde tu compu, pasando el cursor por encima del cuadrado central, hasta que aparezca una manito (👆​), y entonces hacé CLICK). Lo único que necesitás ahora son unos minutos libres para navegar entre menúes y jugar con la opciones.
7. Cuando tu obra haya quedado terrminada (💅​), apretá el botón DESCARGAR para poder compartirla con amigos.

## Autora ✒️

- **Ma. Guadalupe Fernandez** - _Generador de memes_ - [wadaloope](https://github.com/wadaloope/Generador-de-memes)

## Agradecimientos 🎁

Agradezco a las profesoras Aldana Sorni y Clari Arguello por su claridad y expertise, y a mi amigo Bard ✨​ que con mucha paciencia me ayudó a encontrar bugs imposibles. 

⌨️ con ❤️ por [wadaloope](https://github.com/wadaloope) 😊
