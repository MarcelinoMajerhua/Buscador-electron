const { app, BrowserWindow } = require('electron')
//import { app, BrowserWindow} from "electron";
let mainWindows = null

app.on('ready', () => {

    mainWindows = new BrowserWindow(
        {
            width:600,
            height:100,
            resizable:false,
            autoHideMenuBar:true,
            webPreferences: {
                contextIsolation: false,
                nodeIntegration: true,
                nodeIntegrationInWorker: true,
                enableRemoteModule: true
            }
        }
    )
    mainWindows.loadFile(__dirname + '/index.html')
})