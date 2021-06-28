let short_cuts = []
const fs = require('fs');


const inputShortCut = document.getElementById('shortCut')
const inputPath = document.getElementById('spath')
const nombreArchivo = 'archivoDb.txt'

const agregarShorCut = () => {
    short_cuts_string = JSON.stringify(short_cuts)
    crearArchivoBd(short_cuts_string)
    limpiarCampo()


}

const crearArchivoBd = (contenido) => {
    if (fs.existsSync(nombreArchivo)) {
        fs.appendFileSync(nombreArchivo, contenido)
    } else {
        fs.writeFileSync(nombreArchivo, contenido)
    }
}

const leerArchivo = () => {
    if (fs.existsSync(nombreArchivo)) {
        contenido = fs.readFileSync(nombreArchivo, 'utf-8')
        short_cuts = JSON.parse(contenido)
        fs.writeFileSync(nombreArchivo,'')
    }

}

const limpiarCampo=()=>{
    inputShortCut.value=''
    inputPath.value=''
}


document.addEventListener('keyup', (event) => {
    console.log(nombreArchivo)

    if (event.keyCode == 13 && inputShortCut.value.length != 0 && inputPath.value.length != 0) {
        leerArchivo()
        short_cuts.push({ "shortcut": inputShortCut.value, "path": inputPath.value })
        agregarShorCut()

    }

})

