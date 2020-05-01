const { ipcMain, app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");
const child_process = require("child_process");

let win;
let child;

function createWindow() {
  win = new BrowserWindow({ width: 800, height: 600, webPreferences: { nodeIntegration: true } });

  // load the dist folder from Angular
  win.loadURL(
    url.format({
      pathname: path.join(__dirname, `/dist/index.html`),
      protocol: "file:",
      slashes: true
    })
  );

  // The following is optional and will open the DevTools:
  // win.webContents.openDevTools()

  win.on("closed", () => {
    win = null;
  });
}

ipcMain.on("startServer", () => {
  child = child_process.spawn('java',  ['-jar', 'remotelabsbackend-fat.jar'])
  child.stdout.on("data", (data) => {
    console.log(`stdout: ${data}`);
  });
  child.stderr.on("data", (data) => {
    console.error(`stderr: ${data}`);
  });
});

ipcMain.on("stopServer", () => {
  if(child) {
    child.kill();
  }
});

app.on("before-quit", () => {
  if(child) {
    child.kill();
  }
});

app.on("ready", createWindow);

// on macOS, closing the window doesn't quit the app
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// initialize the app's main window
app.on("activate", () => {
  if (win === null) {
    createWindow();
  }
});