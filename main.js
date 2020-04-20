const {app, BrowserWindow} = require('electron')

function createWindow () {
    // Creates the browser window.
    let win = new BrowserWindow ({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })

    // and load the index.html of the app
    win.loadFile('index.html')

    // opens the dev tools
    win.webContents.openDevTools()

}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
    // this closes it proper for example on mac Cmd + q
    if (process.platform !== 'darwin'){
        app.quit()
    }
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})