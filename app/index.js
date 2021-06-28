//import { exec } from "child_procces";
const { exec } = require('child_process')
const fs = require('fs');
//const config = require('./config')
const nombreArchivo = 'archivoDb.txt'
let lista_comandos = []

const input_search = document.getElementById('inputsearch')

const limpiarCampo = () => {
    input_search.value = ''
}

input_search.addEventListener('keyup', (e) => {
    lista_comandos = JSON.parse(fs.readFileSync(nombreArchivo, 'utf-8'))
    if (e.keyCode == 13) {
        for (i in lista_comandos) {
            if (lista_comandos[i].shortcut === input_search.value) {
                exec(lista_comandos[i].path, (error, stdout, stderr) => {
                    if (error) {
                        console.log(`error: ${error.message}`);
                        return;
                    }
                    if (stderr) {
                        console.log(`stderr: ${stderr}`);
                        return;
                    }
                    console.log(`stdout: ${stdout}`);
                });
                console.log(lista_comandos[i].path)
            }
        }
        limpiarCampo()
    }

})

