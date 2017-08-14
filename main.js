const {app, BrowserWindow} = require('electron')

let win

app.on('ready', () => {
  win = new BrowserWindow({
    width: 1280,
    height: 720,
    fullscreen: false
  })



  win.loadURL('file://' + __dirname + '/index.html')

  win.on('closed', () => {
   win = null
  })

})
