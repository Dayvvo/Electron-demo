const { app, BrowserWindow } = require('electron')

const path = require('path')
const isdev = require('electron-is-dev')

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadURL(
      isdev? 'http://localhost:3000': `file://${path.join(__dirname,'../build/index.html')}`
  )
  // win.webContents.openDevTools()

}


app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
 